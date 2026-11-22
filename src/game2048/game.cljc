(ns game2048.game
  (:require [game2048.random :as random]))

(def Pos [:cat :int :int])

(def Dir [:enum :up :right :down :left])

(defn- event-schema [type & fields]
  [type (into [:map [:type [:= type]]] fields)])

(def Event
  [:multi {:dispatch :type}
   (event-schema :moved
                 [:from Pos]
                 [:to Pos]
                 [:merged [:maybe :int]])
   (event-schema :spawned
                 [:pos Pos]
                 [:number :int])
   (event-schema :game-over)])

(def Game
  [:map
   [:score [:int {:min 0}]]
   [:random some?]
   [:rows :int]
   [:cols :int]
   [:board [:vector [:vector :int]]]
   [:events [:vector Event]]])

(defn- cell-empty? [c] (zero? c))
(defn- cell-number? [c] (> c 0))

(defn- emit-event [game event]
  (update game :events conj event))

(defn- clear-events [game] (assoc game :events []))

(defn find-events [game event-type]
  (filterv #(= (:type %) event-type) (:events game)))

(defn- find-cells [{:keys [board rows cols]} dir cell-pred]
  (->> (case dir
         :up    (for [r (range rows) c (range cols)] [r c])
         :down  (for [r (range rows) c (range cols)] [(- rows r 1) c]) 
         :left  (for [c (range cols) r (range rows)] [r c]) 
         :right (for [c (range cols) r (range rows)] [r (- cols c 1)])) 
       (filterv #(cell-pred (get-in board %)))))

(defn- spawn-number [{:keys [random board] :as game}]
  (let [space-indices (find-cells game :up cell-empty?)
        [i random] (random/next-int random)
        [r c] (nth space-indices (mod i (count space-indices)))
        [n random] (random/next-int random)
        number (if (odd? n) 2 4)]
    (-> game
        (emit-event {:type :spawned :pos [r c] :number number})
        (assoc :random random
               :board (assoc-in board [r c] number)))))

(defn- slide-one-number [game orig-pos side-off]
  (loop [{:keys [board] :as game} game
         number (get-in board orig-pos)
         orig-pos orig-pos
         prev-side-pos orig-pos]
    (let [curr-side-pos (mapv + prev-side-pos side-off)
          side (get-in board curr-side-pos)]
      (cond
        (cell-empty? side)
        (recur game number orig-pos curr-side-pos)

        (= number side)
        (let [merged (+ number number)]
          (-> game
              (emit-event {:type :moved :from orig-pos :to curr-side-pos :merged merged})
              (assoc :board (-> board
                                (assoc-in orig-pos 0)
                                (assoc-in curr-side-pos merged)))
              (update :score + merged)))

        (or (nil? side) (not= number side))
        (if (not= orig-pos prev-side-pos)
          (-> game
              (emit-event {:type :moved :from orig-pos :to prev-side-pos})
              (assoc :board (-> board
                                (assoc-in orig-pos 0)
                                (assoc-in prev-side-pos number))))
          game)

        :else game))))

(defn- slide [game dir]
  (let [side-off ({:up [-1 0] :down [1 0] :right [0 1] :left [0 -1]} dir)]
    (reduce (fn [game orig-pos] (slide-one-number game orig-pos side-off))
            game
            (find-cells game dir cell-number?))))

(defn- maybe-spawn-number [game]
  (if (seq (find-events game :moved))
    (spawn-number game)
    game))

(defn- check-game-over [game]
  (loop [game game [test-dir & _] [:up :down :left :right]]
    (cond
      (nil? test-dir) game
      (seq (find-events (slide game test-dir) :moved)) (emit-event game {:type :game-over})
      :else (recur game (next test-dir)))))

(defn make
  {:malli/schema [:=> [:cat :int :int :int] Game]}
  [board-rows board-cols seed]
  (-> {:score 0
       :random (random/make-random seed)
       :rows board-rows
       :cols board-cols
       :board (vec (repeat board-rows (vec (repeat board-cols 0))))
       :events []}
      (spawn-number)
      (spawn-number)))

(defn handle
  {:malli/schema [:=> [:cat Game Dir] Game]}
  [game dir]
  (-> game
      (clear-events)
      (slide dir)
      (maybe-spawn-number)
      (check-game-over)))

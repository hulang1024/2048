(ns game2048.game
  (:require [game2048.random :as random]))

(def Pos [:tuple :int :int])

(def Dir [:enum :up :right :down :left])

(def Action (conj Dir :start))

(defn- event-schema [type & fields]
  [type (into [:map [:type [:= type]]] fields)])

(def Event
  [:multi {:dispatch :type}
   (event-schema :moved
                 [:from Pos]
                 [:to Pos]
                 [:merged-number {:optional true} :int])
   (event-schema :spawned
                 [:pos Pos]
                 [:number :int])
   (event-schema :game-over)])

(def Game
  [:map
   [:score [:int {:min 0}]]
   [:best-score [:int {:min 0}]]
   [:random some?]
   [:rows [:int {:min 1}]]
   [:cols [:int {:min 2}]]
   [:board [:vector [:vector :int]]]
   [:events [:vector Event]]])

(defn- cell-empty? [c] (zero? c))
(defn- cell-number? [c] (> c 0))

(defn- emit-event [game event]
  (update game :events conj event))

(defn- clear-events [game] (assoc game :events []))

(defn find-events [game event-type]
  (seq (filterv #(= (:type %) event-type) (:events game))))

(defn- find-cells [{:keys [board rows cols]} dir cell-pred]
  (->> (case dir
         :up    (for [r (range rows) c (range cols)] [r c])
         :down  (for [r (range rows) c (range cols)] [(- rows r 1) c]) 
         :left  (for [c (range cols) r (range rows)] [r c]) 
         :right (for [c (range cols) r (range rows)] [r (- cols c 1)])) 
       (filterv #(cell-pred (get-in board %)))))

(defn- spawn-number [{:keys [random board] :as game}]
  (let [space-indices (find-cells game :up cell-empty?)]
    (if (seq space-indices)
      (let [[i random] (random/next-int random)
            [r c] (nth space-indices (mod i (count space-indices)))
            [n random] (random/next-int random)
            number (if (< (mod n 10) 9) 2 4)]
        (-> game
            (emit-event {:type :spawned :pos [r c] :number number})
            (assoc :random random
                   :board (assoc-in board [r c] number))))
      game)))

(defn- move-number [game number from to merged?]
  (-> game
      (emit-event (cond-> {:type :moved :from from :to to}
                    merged? (assoc :merged-number number)))
      (assoc :board (-> (:board game)
                        (assoc-in from 0)
                        (assoc-in to number)))))

(defn add-score [game n]
  (let [score (+ (:score game) n)]
    (-> (assoc game :score score)
        (update :best-score max score))))

(defn- try-slide-number [game from side-offset merged-cells]
  (loop [game game
         number (get-in (:board game) from)
         prev-to from]
    (let [curr-to (mapv + prev-to side-offset)
          side-number (get-in (:board game) curr-to)]
      (cond
        (and (some? side-number) (cell-empty? side-number))
        (recur game number curr-to)

        (= number side-number)
        (if (some #(= curr-to %) merged-cells)
          (if (not= from prev-to)
            (move-number game number from prev-to false)
            game)
          (-> game
              (move-number (+ number number) from curr-to true)
              (add-score (+ number number))))

        :else
        (if (not= from prev-to)
          (move-number game number from prev-to false)
          game)))))

(defn- slide [game dir]
  (let [side-offset ({:up [-1 0] :down [1 0] :right [0 1] :left [0 -1]} dir)]
    (-> (reduce (fn [{:keys [merged-cells] :as game} orig-pos]
                  (let [slid-game (try-slide-number game orig-pos side-offset merged-cells)]
                    (assoc slid-game :merged-cells
                           (into [] (keep #(when (:merged-number %) (:to %))
                                          (find-events slid-game :moved))))))
                (assoc game :merged-cells [])
                (find-cells game dir cell-number?))
        (dissoc :merged-cells))))

(defn- maybe-spawn-number [game]
  (if (find-events game :moved)
    (spawn-number game)
    game))

(defn- check-game-over [game]
  (if (or (find-events game :game-over)
          (some #(find-events (slide (clear-events game) %) :moved)
                [:up :down :left :right]))
    game
    (emit-event game {:type :game-over})))

(defn make
  {:malli/schema [:=> [:cat :int :int :int] Game]}
  [board-rows board-cols seed & [best-score]]
  (-> {:score 0
       :best-score (or best-score 0)
       :random (random/make-random seed)
       :rows board-rows
       :cols board-cols
       :board (vec (repeat board-rows (vec (repeat board-cols 0))))
       :events []}))

(defn handle
  {:malli/schema [:=> [:cat Game Action] Game]}
  [game action]
  (if (empty? (find-events game :game-over))
    (cond
      (contains? #{:up :right :down :left} action)
      (-> game
          (clear-events)
          (slide action)
          (maybe-spawn-number)
          (check-game-over))

      (= action :start)
      (-> game (spawn-number) (spawn-number)))
    game))

(ns game2048.game)

(def Pos [:cat :int :int])

(def Dir [:enum :up :right :down :left])

(defn event-schema [type & fields]
  [type (into [:map [:type [:= type]]] fields)])
(def Event
  [:multi {:dispatch :type}
   (event-schema :moved
                 [:from Pos]
                 [:to Pos]
                 [:merged [:maybe :int]])
   (event-schema :spawned [:pos Pos])])

(def Game
  [:map
   [:score :int]
   [:random some?]
   [:rows :int]
   [:cols :int]
   [:board [:vector [:vector :int]]]
   [:events [:vector Event]]])

(defn- make-random [seed] seed)

(defn- next-int [random]
  (let [n (mod (* random 16807) 2147483647)]
    [n random]))

(defn- cell-empty? [c] (zero? c))
(defn- cell-number? [c] (> c 0))

(defn- find-cells [{:keys [board rows cols]} dir cell-pred]
  (->> (case dir
         :up    (for [r (range rows) c (range cols)] [r c])
         :down  (for [r (range rows) c (range cols)] [(- rows r 1) c]) 
         :left  (for [c (range cols) r (range rows)] [r c]) 
         :right (for [c (range cols) r (range rows)] [r (- cols c 1)])) 
       (filterv #(cell-pred (get-in board %)))))

(defn- spawn-number [{:keys [random board] :as game}]
  (let [space-indices (find-cells game :up cell-empty?)
        [i random] (next-int random)
        [r c] (nth space-indices (mod i (count space-indices)))
        [n random] (next-int random)]
    (-> game
        (update :events conj {:type :spawned :pos [r c]})
        (assoc :random random
               :board (assoc-in board [r c] (if (odd? n) 2 4))))))

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
              (update :events conj {:type :moved
                                    :from orig-pos :to curr-side-pos :merged merged})
              (assoc :board (-> board
                                (assoc-in orig-pos 0)
                                (assoc-in curr-side-pos merged)))
              (update :score + merged)))

        (or (nil? side) (not= number side))
        (if (not= orig-pos prev-side-pos)
          (-> game
              (update :events conj {:type :moved
                                    :from orig-pos :to prev-side-pos})
              (assoc :board (-> board
                                (assoc-in orig-pos 0)
                                (assoc-in prev-side-pos number))))
          game)

        :else game))))

(defn make
  {:malli/schema [:=> [:cat :int :int some?] Game]}
  [board-rows board-cols seed]
  (-> {:score 0
       :random (make-random seed)
       :rows board-rows
       :cols board-cols
       :board (vec (repeat board-rows (vec (repeat board-cols 0))))
       :events []}
      (spawn-number)
      (spawn-number)))

(defn slide
  {:malli/schema [:=> [:cat Game Dir] Game]}
  [game dir]
  (let [side-off ({:up [-1 0] :down [1 0] :right [0 1] :left [0 -1]} dir)
        number-indices (find-cells game dir cell-number?)
        slid-game (reduce (fn [game orig-pos] (slide-one-number game orig-pos side-off))
                          (assoc game :events [])
                          number-indices)]
    (cond-> slid-game
      (seq (:events slid-game)) (spawn-number ))))

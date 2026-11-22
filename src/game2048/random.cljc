(ns game2048.random)

(defn make-random [seed] seed)

(defn next-int [random]
  (let [n (mod (* random 16807) 2147483647)]
    [n random]))

(defn random-seed []
  (int (* (rand) 100000)))


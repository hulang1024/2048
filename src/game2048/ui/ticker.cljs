(ns game2048.ui.ticker)

(def state (atom {:started? false
                  :last-time 0
                  :accumulator 0
                  :update-time 0
                  :tick-fns []}))

(defn- start-loop []
  (letfn [(loopf [now-time]
            (let [{:keys [last-time accumulator update-time tick-fns]} @state
                  acc (+ accumulator (- now-time last-time))
                  delta-time (/ 1000 60)
                  [acc updated?] (loop [acc acc updated? false]
                                   (if (>= acc delta-time)
                                     (do (run! #(% delta-time (- now-time update-time)) tick-fns)
                                         (recur (- acc delta-time) true))
                                     [acc updated?]))]
              (swap! state assoc
                     :last-time now-time 
                     :accumulator acc
                     :update-time (if updated? now-time update-time))
              (js/requestAnimationFrame loopf)))]
    (loopf 0)))

(defn add-tick [tick-fn]
  (swap! state update :tick-fns conj tick-fn)
  (when-not (:started? @state)
    (swap! state assoc :started? true)
    (start-loop)))


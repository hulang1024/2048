(ns dev.preload
  {:dev/always true}
  (:require [game2048.main]
            [malli.dev.cljs :as dev]))

(defn ^:dev/after-load reload! []
  (dev/start!))

(reload!)

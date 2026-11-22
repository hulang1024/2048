(ns game2048.main
  (:require [cljss.core :as css]
            [game2048.ui.play-view :as play-view]
            [game2048.ui.styles :as styles]))

(defn ^:async init []
  (when ^boolean goog/DEBUG
    (add-tap println))
  (styles/load-global)
  (play-view/mount))

(defn ^:async ^:dev/after-load reload []
  (tap> "reload")
  (css/remove-styles!)
  (styles/load-global)
  (play-view/mount))

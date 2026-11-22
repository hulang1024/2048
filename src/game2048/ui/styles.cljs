(ns game2048.ui.styles
  (:require-macros [cljss.core])
  (:require [cljss.core :as css]))

(defn load-global []
  (css/font-face
    {:font-family "Clear Sans"
     :font-style "normal"
     :font-weight 400
     :font-display "block"
     :src [{:url "assets/ClearSans-Regular.woff" :format "woff"}
           {:url "assets/ClearSans-Bold.woff" :format "woff"}]})

  (css/inject-global
    {:* {:margin 0
         :padding 0}
     :html {:height "100vh"
            :font-size "14px"}
     :body {:width "100%"
            :height "100%"
            :display "flex"
            :justify-content "center"
            :align-items "center"
            :overflow "hidden"
            :background "#faf8ef"
            :font-family "Clear Sans,Helvetica Neue,Arial,sans-serif"
            :color "#111111"}
     "#app" {:width "100%"
             :height "100%"
             :display "flex"
             :justify-content "center"
             :align-items "center"}}))

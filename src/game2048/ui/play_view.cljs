(ns game2048.ui.play-view
  (:require-macros [cljss.core])
  (:require
    [cljss.core :as css :refer-macros [defstyles]]
    [game2048.ui.board :as board]
    [game2048.ui.play :as play]
    [game2048.ui.ticker :as ticker]
    [reagent.dom.client :as rd]))

(defstyles play-view-class []
  {:display "flex"
   :flex-direction "column"})

(defstyles header-class []
  {:display "flex"
   :justify-content "center"
   :flex-direction "column"
   :align-items "center"
   :user-select "none"
   :color "#fff"
   ".game-title" {:font-size "3rem"
                  :font-weight "bold"
                  :color "#776e65"}})

(defstyles row-class []
  {:margin-bottom "1rem"
   :display "flex"
   :width "100%"
   :justify-content "space-between"})

(defstyles scores-class []
  {:display "flex"
   ".score" {:margin-left "0.5rem"
             :display "flex"
             :flex-direction "column"
             :justify-content "center"
             :padding "0.3rem 1rem"
             :min-width "4rem"
             :font-weight "bold"
             :text-align "center"
             :border-radius "4px"
             :background "#bbada0"}
   ".score__label" {:font-size "0.9rem"}
   ".score__value" {:font-size "1.8rem"}})

(defstyles tip-class []
  {:font-size "1.2rem"
   :color "#776e65"})

(defstyles button-class []
  {:padding "0.5rem 1.4rem"
   :border "none"
   :color "#fff"
   :border-radius "4px"
   :font-size "1.4rem"
   :background "#8f7a66"
   :cursor "pointer"})

(defn- handle-new-game []
  (play/restart-game!))

(defn build [app]
  (let [{:keys [game]} @app]
    [:div {:class (play-view-class)}
     [:div {:class (header-class)} 
      [:div {:class (row-class)}
       [:div {:class "game-title"} "2048"]
       [:div {:class (scores-class)}
        [:div {:class "score"}
         [:div {:class "score__label"} "分数"]
         [:div {:class "score__value"} (:score game)]]
        [:div {:class "score"}
         [:div {:class "score__label"} "最高分"]
         [:div {:class "score__value"} (:best-score game)]]]]
      [:div {:class (row-class)}
       [:div {:class (tip-class)}
        "合并数字以达到"
        [:strong "2048！"]]
       [:button {:class (button-class)
                 :on-click handle-new-game}
        "新游戏"]]]
     [:div {:class "board-container"}]]))

(defonce ^:private root
  (delay (rd/create-root (.getElementById js/document "app"))))

(defn mount []
  (play/new-game!)
  (js/document.addEventListener "keydown" play/on-keydown!)
  (rd/render @root [build play/state])
  (letfn [(go []
            (if-let [el (js/document.querySelector ".board-container")]
              (do (.appendChild el (board/build play/state))
                  (play/start-game!))
              (js/requestAnimationFrame go)))]
    (js/requestAnimationFrame go))
  (ticker/add-tick #(board/tick play/state)))

(ns game2048.ui.board
  (:require-macros [cljss.core])
  (:require
    [cljss.core :as css :refer-macros [defstyles]]
    [clojure.string :as str]))

(defstyles board-class []
  {:background "rgb(119, 110, 101)"})

(defn debug-game-state-text [game]
  (tap> game)
  (tap> (->> (:board game)
             (map (fn [xs] (->> xs (map #(if (zero? %) "." %)) (str/join " "))))
             (str/join "\n"))))

(defn build [state]
  (debug-game-state-text (:game @state))
  (add-watch state :board-watcher
             (fn [_k _atom _old-state {:keys [game]}]
               (debug-game-state-text game)))
  (let [el (js/document.createElement "div")
        block-size 10]
    (.. el -classList (add (board-class)))
    (set! (.. el -style -width) (str (* block-size block-size) "px"))
    (set! (.. el -style -height) (str (* block-size block-size) "px"))
    el))

(defn tick [state]
  (let [{:keys [game history]} @state]
    (when (not= (peek history) game)
      nil)))

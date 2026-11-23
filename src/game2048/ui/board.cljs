(ns game2048.ui.board
  (:require-macros [cljss.core])
  (:require
    [cljss.core :as css :refer-macros [defstyles]]
    [clojure.string :as str]
    [game2048.game :as game]))

(defstyles board-class []
  {:position "relative"
   :background "#bbada0"
   :border-radius "6px"})

(defstyles cell-class []
  {:position "absolute"
   :display "flex"
   :justify-content "center"
   :align-items "center"
   :background "#cdc1b4"
   :border-radius "3px"
   :text-align "center"
   :font-weight "bold"
   :font-size "calc(min(100cqw, 100cqh) * 0.05)"
   :transition "all 0.2s"})

(defn cell-styles [number]
  (let [number-bg-color {2 "#eee4da"
                         4 "#ede0c8"
                         8 "#f2b179"
                         16 "#f59563"
                         32 "#f67c5f"
                         64 "#f65e3b"
                         128 "#edcf72"
                         256 "#edcc61"
                         512 "#edc850"
                         1024 "#edc53f"
                         2048 "#edc22e"
                         4096 "#9100cf"
                         8192 "#590080"
                         16384 "#36004d"
                         32768 "#000000"}
        number-color {2 "#776e65" 4 "#776e65"}]
    {:background (get number-bg-color number "#00000")
     :color (get number-color number "#f9f6f2")}))

(defn- ->px-board-pos [cell-size gap r c]
  [(+ gap (* c gap) (* c cell-size))
   (+ gap (* r gap) (* r cell-size))])

(defn- set-cell-position [el x y]
  (let [translate (str "translate(" x "px" "," y "px)")]
    (aset (.-style el) "--translate" translate)
    (set! (.. el -style -transform) translate)))

(defn- change-number [el number]
  (set! (.-textContent el) number)
  (doseq [[k v] (cell-styles number)]
    (aset (.-style el) (name k) v)))

(defn- create-cell [x y cell-size number]
  (let [el (js/document.createElement "div")]
    (.. el -classList (add (cell-class)))
    (when (> number 0)
      (change-number el number))
    (set-cell-position el x y)
    (set! (.. el -style -width) (str cell-size "px"))
    (set! (.. el -style -height) (str cell-size "px"))
    el))

(defn- add-cell [{:keys [cell-size gap board-el]} [r c] number]
  (let [[x y] (->px-board-pos cell-size gap r c)
        cell-el (create-cell x y cell-size number)]
    (when (> number 0)
      (aset cell-el "pos-r" r)
      (aset cell-el "pos-c" c))
    (.appendChild board-el cell-el)))

(defn- get-cell [board-el r c]
  (first (filter #(and (= (aget % "pos-r") r) (= (aget % "pos-c") c))
                 (.-children board-el))))

(defn- move-cell [{:keys [cell-size gap board-el]} [from-r from-c] [to-r to-c] merged-number]
  (let [[to-x to-y] (->px-board-pos cell-size gap to-r to-c)
        from-cell-el (get-cell board-el from-r from-c)
        to-cell-el (get-cell board-el to-r to-c)]
    (set-cell-position from-cell-el to-x to-y)
    (aset from-cell-el "pos-r" to-r)
    (aset from-cell-el "pos-c" to-c)
    (when (> merged-number 0)
      (.addEventListener from-cell-el "transitionend"
                         (fn []
                           (.removeChild (.-parentElement to-cell-el) to-cell-el)
                           (change-number from-cell-el merged-number))))))

(defonce ^:private board-draw-state
  (atom {:gap 0
         :cell-size 0
         :board-el nil}))

(defn- create-board []
  (let [board-el (js/document.createElement "div")]
    (.. board-el -classList (add (board-class)))
    board-el))

(defn- reset-board! [board-draw-state {{:keys [rows cols]} :game}]
  (tap> "reset-board!")
  (let [cell-size 100
        gap 14
        width (+ gap (* rows cell-size) (* rows gap))
        height (+ gap (* cols cell-size) (* cols gap))
        board-el (:board-el @board-draw-state)]
    (swap! board-draw-state assoc :gap gap :cell-size cell-size)
    (set! (.. board-el -style -width) (str width "px"))
    (set! (.. board-el -style -height) (str height "px"))
    (.replaceChildren board-el)
    (doseq [r (range rows)
            c (range cols)]
      (add-cell @board-draw-state [r c] 0))))

(defn build [play-state]
  (add-watch play-state :board-watcher
             (fn [_k _atom
                  {old-game-id :game-id}
                  {:keys [game-id game] :as play-state}]
               (tap> (->> (:board game)
                          (map (fn [xs] (->> xs (map #(if (zero? %) "." %)) (str/join " "))))
                          (str/join "\n")))
               (when (not= old-game-id game-id)
                 (reset-board! board-draw-state play-state))
               (when-let [events (game/find-events game :moved)]
                 (doseq [{:keys [from to merged-number]} events]
                   (println from to merged-number)
                   (move-cell @board-draw-state from to merged-number)))
               (when-let [events (game/find-events game :spawned)]
                 (doseq [{:keys [pos number]} events]
                   (add-cell @board-draw-state pos number)))))

  (let [board-el (create-board)]
    (swap! board-draw-state assoc :board-el board-el)
    (reset-board! board-draw-state @play-state)
    board-el))

(defn tick [state]
  (let [{:keys [game history]} @state]
    (when (not= (peek history) game)
      nil)))

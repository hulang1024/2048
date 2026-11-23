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
   :font-weight 700
   :font-size "calc(min(100cqw, 100cqh) * 0.065)"})

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

(defn- ->cell-px-pos [cell-size gap r c]
  [(+ gap (* c gap) (* c cell-size))
   (+ gap (* r gap) (* r cell-size))])

(defn- set-cell-position [el x y]
  (set! (.. el -style -transform) (str "translate(" x "px" "," y "px)")))

(defn- set-cell-number [el number]
  (set! (.-textContent el) number)
  (doseq [[k v] (cell-styles number)]
    (aset (.-style el) (name k) v)))

(defn- create-cell [x y cell-size number]
  (let [el (js/document.createElement "div")]
    (.. el -classList (add (cell-class)))
    (when (> number 0)
      (set-cell-number el number))
    (set-cell-position el x y)
    (set! (.. el -style -width) (str cell-size "px"))
    (set! (.. el -style -height) (str cell-size "px"))
    el))

(defn- add-number [{:keys [container cell-size gap]} [r c] number]
  (assert (> number 0))
  (let [[x y] (->cell-px-pos cell-size gap r c)
        cell-el (create-cell x y cell-size number)]
    (aset cell-el "pos-r" r)
    (aset cell-el "pos-c" c)
    (.appendChild container cell-el)))

(defn- get-cell [container r c]
  (first (filter #(and (= (aget % "pos-r") r) (= (aget % "pos-c") c))
                 (.-children container))))

(defn- move-cell [{:keys [cell-size gap container]} [from-r from-c] [to-r to-c] merged-number]
  (let [[to-x to-y] (->cell-px-pos cell-size gap to-r to-c)
        from-cell-el (get-cell container from-r from-c)
        to-cell-el (get-cell container to-r to-c)]
    (set-cell-position from-cell-el to-x to-y)
    (aset from-cell-el "pos-r" to-r)
    (aset from-cell-el "pos-c" to-c)
    (when (> merged-number 0)
      (.removeChild (.-parentElement to-cell-el) to-cell-el)
      (set-cell-number from-cell-el merged-number))))

(defonce ^:private board-draw-state
  (atom {:gap 0
         :cell-size 0
         :container nil}))

(defn- create-board [rows cols {:keys [cell-size gap]}]
  (let [width (+ gap (* rows cell-size) (* rows gap))
        height (+ gap (* cols cell-size) (* cols gap))
        el (js/document.createElement "div")
        bg-layer-el (js/document.createElement "div")]
    (.. el -classList (add (board-class)))
    (.. bg-layer-el -classList (add "grid"))
    (.appendChild el bg-layer-el)
    (set! (.. el -style -width) (str width "px"))
    (set! (.. el -style -height) (str height "px"))
    (doseq [r (range rows)
            c (range cols)
            :let[[x y] (->cell-px-pos cell-size gap r c)
                 cell-el (create-cell x y cell-size 0)]]
      (.appendChild bg-layer-el cell-el))
    el))

(defn- reset-board! [{:keys [container]} {:keys [rows cols board]}]
  (tap> "reset-board!")
  (run! #(.removeChild container %)
        (js/Array.from (.querySelectorAll container (str ":scope > ." (cell-class)))))
  (doseq [r (range rows)
          c (range cols)
          :when (> (get-in board [r c]) 0)]
    (add-number @board-draw-state [r c] (get-in board [r c]))))

(defn build [play-state]
  (add-watch play-state :board-watcher
             (fn [_k _atom
                  {old-game-id :game-id}
                  {:keys [game-id game]}]
               (tap> game)
               (tap> (->> (:board game)
                          (map (fn [xs] (->> xs (map #(if (zero? %) "." %)) (str/join " "))))
                          (str/join "\n")))
               (if (not= old-game-id game-id)
                 (reset-board! @board-draw-state game)
                 (do (when-let [events (game/find-events game :moved)]
                       (doseq [{:keys [from to merged-number]} events]
                         (move-cell @board-draw-state from to merged-number)))
                     (when-let [events (game/find-events game :spawned)]
                       (doseq [{:keys [pos number]} events]
                         (add-number @board-draw-state pos number)))))))

  (let [{{:keys [rows cols]} :game} @play-state
        layout {:cell-size 104 :gap 14} 
        board-el (create-board rows cols layout)]
    (swap! board-draw-state #(-> (assoc % :container board-el) (merge layout)))
    (reset-board! @board-draw-state (:game @play-state))
    board-el))

(defn tick [dt])

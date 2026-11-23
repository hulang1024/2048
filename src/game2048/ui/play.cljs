(ns game2048.ui.play
  (:require
    [game2048.game :as game]
    [reagent.core :as r]
    [game2048.random :as random]))

(defonce state
  (r/atom {:game nil
           :game-id 0
           :history []}))

(defn- new-game [state]
  (let [seed (random/random-seed)
        game (game/make 4 4 seed)]
    (-> state
        (assoc :game game)
        (update :game-id inc)
        (assoc :history []))))

(defn- handle-action [state action]
  (let [old-game (:game state)
        game (game/handle old-game action)]
    (if (not= old-game game)
      (-> (assoc state :game game)
          (update :history conj game))
      state)))

(defn- undo [state]
  (if (seq (pop (:history state)))
    (let [history (pop (:history state))]
      (-> state
          (update :game-id inc)
          (assoc :history (vec history))
          (assoc :game (peek history))))
    (update state :game-id inc)))

(def ^:priavte key-map
  {"ArrowLeft" :left
   "ArrowRight" :right
   "ArrowUp" :up
   "ArrowDown" :down
   "KeyA" :left
   "KeyD" :right
   "KeyW" :up
   "KeyS" :down
   "KeyR" :restart
   "KeyU" :undo})

(defn new-game! []
  (swap! state new-game))

(defn start-game! []
  (swap! state handle-action :start))

(defn restart-game! []
  (swap! state (comp #(handle-action % :start) new-game)))

(defn undo! []
  (swap! state undo))

(defn on-keydown! [event]
  (let [key (.-code event)
        action (key-map key)]
    (when action
      (tap> (str "action: " action)))
    (cond
      (= action :undo) (undo!)

      (not (.-repeat event))
      (cond
        (contains? #{:left :right :up :down} action)
        (swap! state handle-action action)

        (= action :restart)
        (restart-game!)))))

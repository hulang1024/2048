(ns game2048.ui.play
  (:require
    [game2048.game :as game]
    [reagent.core :as r]
    [game2048.random :as random]))

(defonce state
  (r/atom {:game nil
           :game-id 0
           :history []}))

(defn- new-game [app]
  (let [seed (random/random-seed)
        game (game/make 4 4 seed)]
    (-> app
        (assoc :game game)
        (update :game-id inc)
        (assoc :history [game]))))

(defn- handle-action [app action]
  (-> app
      (update :game game/handle action)
      (update :history conj (:game app))))

(def ^:priavte key-map
  {"ArrowLeft" :left
   "ArrowRight" :right
   "ArrowUp" :up
   "ArrowDown" :down
   "KeyR" :restart})

(defn new-game! []
  (swap! state new-game))

(defn start-game! []
  (swap! state handle-action :start))

(defn restart-game! []
  (swap! state (comp #(handle-action % :start) new-game)))

(defn on-keydown! [event]
  (let [key (.-code event)
        action (key-map key)]
    (tap> (str "action: " action))
    (cond
      (contains? #{:left :right :up :down} action)
      (swap! state handle-action action)

      (= action :restart)
      (restart-game!))))

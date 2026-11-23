(ns game2048.ui.play
  (:require
    [game2048.game :as game]
    [reagent.core :as r]
    [game2048.random :as random]))

(defonce state
  (r/atom {:started? false
           :game nil
           :best-score 0
           :history []}))

(defn- new-game [app]
  (let [seed (random/random-seed)
        game (game/make 4 4 seed)]
    (-> app
        (assoc :started? false)
        (assoc :game game)
        (assoc :history [game]))))

(defn- handle-action [app action]
  (-> app
      (assoc :started? true)
      (update :game game/handle action)
      (update :history conj (:game app))))

(def ^:priavte key-map
  {"ArrowLeft" :left
   "ArrowRight" :right
   "ArrowUp" :up
   "ArrowDown" :down})

(defn new-game! []
  (swap! state new-game))

(defn start-game! []
  (swap! state handle-action :start))

(defn handle-keydown! [event]
  (let [key (.-code event)
        action (key-map key)]
    (when (contains? #{:left :right :up :down} action)
      (tap> (str "action: " action))
      (swap! state handle-action action))))

(ns game2048.ui.play
  (:require
    [game2048.game :as game]
    [reagent.core :as r]
    [game2048.random :as random]))

(defonce state
  (r/atom {:game nil
           :best-score 1234
           :history []}))

(defn- new-game [app]
  (let [seed (random/random-seed)
        game (game/make 4 4 seed)]
    (-> app
        (assoc :history [game])
        (assoc :game game))))

(defn- slide [app action]
  (-> app
      (update :history conj (:game app))
      (update :game game/slide action)))

(def ^:priavte key-map
  {"ArrowLeft" :left
   "ArrowRight" :right
   "ArrowUp" :up
   "ArrowDown" :down})

(defn new-game! []
  (swap! state new-game))

(defn handle-keydown! [event]
  (let [key (.-code event)
        action (key-map key)]
    (when (contains? #{:left :right :up :down} action)
      (tap> (str "action: " action))
      (swap! state slide action))))

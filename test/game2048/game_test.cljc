(ns game2048.game-test
  (:require
    [clojure.test :refer [are deftest testing]]
    [game2048.game :as game]))

(deftest game-test
  (testing "测试合并"
    (are [line slide-dir expected]
         (let [game (-> (game/make 4 4 3)
                        (assoc-in [:board 0] line)
                        (game/handle :start)
                        (game/handle slide-dir))]
           (= (get-in game [:board 0]) expected))
         [2 2 4 0]  :left [4 4 0 0]
         [2 2 4 4]  :left [4 8 0 0]
         [2 2 2 2]  :left [4 4 0 0]
         [4 4 4 4]  :left [8 8 0 0]
         [2 0 2 4]  :left [4 4 0 0]
         [0 2 0 2]  :left [4 0 0 0]
         [2 4 8 16] :left [2 4 8 16])))

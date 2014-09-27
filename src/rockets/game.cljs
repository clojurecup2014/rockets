(ns rockets.game
  (:require
    [sablono.core :as html :refer-macros [html]]
    [quiescent :as q :include-macros true]
    [clojure.string :as string]
    [rockets.util :as util]
    [rockets.sprites :as sprites]
    [rockets.model :as model]))

(q/defcomponent
  CellComponent [cell selected?]
  (sprites/CoolSpriteComponent (:cell-type cell) (:orientation cell)))

(q/defcomponent
  FieldComponent [cells selected]
  (html [:table {:style util/no-borders-style}
         (for [x (range 0 model/size-n)]
           [:tr {:style util/no-borders-style}
            (for [y (range 0 model/size-m)
                  :let [cell (nth (nth cells x) y)]]
              [:td {:style util/no-borders-style} (CellComponent cell false)])])]))

(q/defcomponent
  ShuffleComponent [refresh-time]
  (sprites/SpriteComponent))

(q/defcomponent
  BoardComponent [board]
  (html [:table {:style util/no-borders-style}
         [:tr {:style util/no-borders-style}
          [:td {:style (merge {:vertical-align "bottom"} util/no-borders-style)} (ShuffleComponent (:reload-time board))]
          [:td {:style util/no-borders-style} (FieldComponent (:cells board) (:selected board))]]]))

(def space-between-boards (* sprites/sprite-width 4))
(def board-width (* sprites/sprite-width (inc model/size-m)))
(def board-height (* sprites/sprite-width (inc model/size-n)))
(def rockets-space-height (* sprites/sprite-width 3))

(q/defcomponent
  RocketsComponent [rockets]
  (sprites/SpriteComponent))

(q/defcomponent
  FitilComponent []
  (html [:table {:style util/no-borders-style}
         [:tr {:style util/no-borders-style}
          [:td {:style (merge {:width sprites/sprite-width} util/no-borders-style)}]
          (repeat model/size-m [:td {:style util/no-borders-style} (sprites/FireComponent)])
          [:td {:style (merge {:width space-between-boards} util/no-borders-style)}]
          [:td {:style (merge {:width sprites/sprite-width} util/no-borders-style)}]
          (repeat model/size-m [:td {:style util/no-borders-style} (sprites/FireComponent)])]]))

(q/defcomponent
  GameComponent [data world-atom]
  (html
    [:div {:style {:width (+ board-width board-width space-between-boards), :height (+ board-height rockets-space-height), :background-color "#000"}}
     [:div {:style {:position "absolute", :top rockets-space-height}} [:table {:style util/no-borders-style}
            [:tr {:style util/no-borders-style}
             [:td {:style util/no-borders-style} (BoardComponent (:board1 data))]
             [:td {:style (merge {:width space-between-boards} util/no-borders-style)}]
             [:td {:style util/no-borders-style} (BoardComponent (:board2 data))]]
            [:tr {:style util/no-borders-style} (FitilComponent)]]]
     [:div {:style {:position "absolute"}} (RocketsComponent (:rockets data))]]))


// Compiled by ClojureScript 0.0-2202
goog.provide('rockets.model_sample');
goog.require('cljs.core');
rockets.model_sample.start_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"player1","player1",520336610),"First Rocketeer",new cljs.core.Keyword(null,"player2","player2",520336611),"Second Rocketeer"], null);
rockets.model_sample.generate_board = (function generate_board(){return cljs.core.PersistentVector.EMPTY;
});
rockets.model_sample.generate_rockets = (function generate_rockets(b1,b2){return cljs.core.PersistentVector.EMPTY;
});
rockets.model_sample.game_state = (function (){var board1 = rockets.model_sample.generate_board.call(null);var board2 = rockets.model_sample.generate_board.call(null);return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"game","game",1017069412),new cljs.core.Keyword(null,"player1","player1",520336610),"name1",new cljs.core.Keyword(null,"player2","player2",520336611),"name2",new cljs.core.Keyword(null,"board1","board1",3925074301),board1,new cljs.core.Keyword(null,"board2","board2",3925074302),board2,new cljs.core.Keyword(null,"rockets","rockets",2382661521),rockets.model_sample.generate_rockets.call(null,board1,board2)], null);
})();
rockets.model_sample.finish_state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"finish","finish",4034428933),new cljs.core.Keyword(null,"player1","player1",520336610),"name1",new cljs.core.Keyword(null,"player2","player2",520336611),"name2",new cljs.core.Keyword(null,"win","win",1014021966),new cljs.core.Keyword(null,"player1","player1",520336610)], null);

//# sourceMappingURL=model_sample.js.map
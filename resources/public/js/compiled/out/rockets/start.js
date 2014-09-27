// Compiled by ClojureScript 0.0-2202
goog.provide('rockets.start');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('quiescent');
goog.require('figwheel.client');
goog.require('clojure.browser.dom');
goog.require('clojure.browser.dom');
goog.require('sablono.core');
goog.require('figwheel.client');
goog.require('clojure.string');
goog.require('rockets.model_sample');
goog.require('clojure.string');
goog.require('quiescent');
goog.require('rockets.model_sample');
rockets.start.update_text = (function update_text(world_atom,key,value){return cljs.core.reset_BANG_.call(null,world_atom,cljs.core.assoc.call(null,cljs.core.deref.call(null,world_atom),key,value));
});
/**
* 
*/
rockets.start.StartComponent = quiescent.component.call(null,(function (data,world_atom){return React.DOM.div(null,React.DOM.h1(null,"Welcome, Awesome Rocketeers!"),"Player 1",sablono.interpreter.input.call(null,{"type": "text", "value": new cljs.core.Keyword(null,"player1","player1",520336610).cljs$core$IFn$_invoke$arity$1(data), "onChange": (function (p1__18098_SHARP_){return rockets.start.update_text.call(null,world_atom,new cljs.core.Keyword(null,"player1","player1",520336610),p1__18098_SHARP_.target.value);
})}),React.DOM.p(null),"Player 2",sablono.interpreter.input.call(null,{"type": "text", "value": new cljs.core.Keyword(null,"player2","player2",520336611).cljs$core$IFn$_invoke$arity$1(data), "onChange": (function (p1__18099_SHARP_){return rockets.start.update_text.call(null,world_atom,new cljs.core.Keyword(null,"player2","player2",520336611),p1__18099_SHARP_.target.value);
})}),React.DOM.p(null),React.DOM.button({"type": "button", "disabled": (function (){var or__7881__auto__ = clojure.string.blank_QMARK_.call(null,new cljs.core.Keyword(null,"player1","player1",520336610).cljs$core$IFn$_invoke$arity$1(data));if(cljs.core.truth_(or__7881__auto__))
{return or__7881__auto__;
} else
{return clojure.string.blank_QMARK_.call(null,new cljs.core.Keyword(null,"player2","player2",520336611).cljs$core$IFn$_invoke$arity$1(data));
}
})()},"Go!"));
}));

//# sourceMappingURL=start.js.map
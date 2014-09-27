// Compiled by ClojureScript 0.0-2202
goog.provide('rockets.core');
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
if(typeof rockets.core.world !== 'undefined')
{} else
{rockets.core.world = cljs.core.atom.call(null,rockets.model_sample.start_state);
}
rockets.core.update_text = (function update_text(key,value){return cljs.core.reset_BANG_.call(null,rockets.core.world,cljs.core.assoc.call(null,cljs.core.deref.call(null,rockets.core.world),key,value));
});
rockets.core.show_state_log = true;
rockets.core.update_state_log = (function update_state_log(data){return clojure.browser.dom.set_text.call(null,document.getElementById("state-log"),sablono.util.to_str.call(null,data));
});
if(cljs.core.truth_(rockets.core.show_state_log))
{cljs.core.add_watch.call(null,rockets.core.world,new cljs.core.Keyword("rockets.core","render","rockets.core/render",1077103765),(function (_,___$1,___$2,data){return rockets.core.update_state_log.call(null,data);
}));
if(typeof rockets.core._first_time_log_render !== 'undefined')
{} else
{rockets.core._first_time_log_render = rockets.core.update_state_log.call(null,cljs.core.deref.call(null,rockets.core.world));
}
} else
{}
/**
* 
*/
rockets.core.Root = quiescent.component.call(null,(function (data){return React.DOM.div(null,React.DOM.h1(null,"Welcome, Awesome Rocketeers!"),"Player 1",sablono.interpreter.input.call(null,{"type": "text", "value": new cljs.core.Keyword(null,"player1","player1",520336610).cljs$core$IFn$_invoke$arity$1(data), "onChange": (function (p1__44963_SHARP_){return rockets.core.update_text.call(null,new cljs.core.Keyword(null,"player1","player1",520336610),p1__44963_SHARP_.target.value);
})}),React.DOM.p(null),"Player 2",sablono.interpreter.input.call(null,{"type": "text", "value": new cljs.core.Keyword(null,"player2","player2",520336611).cljs$core$IFn$_invoke$arity$1(data), "onChange": (function (p1__44964_SHARP_){return rockets.core.update_text.call(null,new cljs.core.Keyword(null,"player2","player2",520336611),p1__44964_SHARP_.target.value);
})}),(function (){var attrs44969 = [cljs.core.str("First player name is "),cljs.core.str(new cljs.core.Keyword(null,"player1","player1",520336610).cljs$core$IFn$_invoke$arity$1(data))].join('');return cljs.core.apply.call(null,React.DOM.h1,((cljs.core.map_QMARK_.call(null,attrs44969))?sablono.interpreter.attributes.call(null,attrs44969):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs44969))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs44969)], null))));
})(),(function (){var attrs44970 = [cljs.core.str("Second player name is "),cljs.core.str(new cljs.core.Keyword(null,"player2","player2",520336611).cljs$core$IFn$_invoke$arity$1(data))].join('');return cljs.core.apply.call(null,React.DOM.h1,((cljs.core.map_QMARK_.call(null,attrs44970))?sablono.interpreter.attributes.call(null,attrs44970):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs44970))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs44970)], null))));
})(),React.DOM.p(null),React.DOM.button({"type": "button", "disabled": (function (){var or__7881__auto__ = clojure.string.blank_QMARK_.call(null,new cljs.core.Keyword(null,"player1","player1",520336610).cljs$core$IFn$_invoke$arity$1(data));if(cljs.core.truth_(or__7881__auto__))
{return or__7881__auto__;
} else
{return clojure.string.blank_QMARK_.call(null,new cljs.core.Keyword(null,"player2","player2",520336611).cljs$core$IFn$_invoke$arity$1(data));
}
})()},"Go!"));
}));
rockets.core.render = (function render(data){return quiescent.render.call(null,rockets.core.Root.call(null,data),document.getElementById("main-area"));
});
if(typeof rockets.core._first_time_render !== 'undefined')
{} else
{rockets.core._first_time_render = rockets.core.render.call(null,cljs.core.deref.call(null,rockets.core.world));
}
cljs.core.add_watch.call(null,rockets.core.world,new cljs.core.Keyword("rockets.core","render","rockets.core/render",1077103765),(function (_,___$1,___$2,data){return rockets.core.render.call(null,data);
}));
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989),(function (){return cljs.core.swap_BANG_.call(null,rockets.core.world,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tmp-dev","tmp-dev",4110567889)], null),cljs.core.not);
}));

//# sourceMappingURL=core.js.map
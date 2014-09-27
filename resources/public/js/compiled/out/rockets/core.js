// Compiled by ClojureScript 0.0-2202
goog.provide('rockets.core');
goog.require('cljs.core');
goog.require('quiescent');
goog.require('quiescent');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('figwheel.client');
goog.require('figwheel.client');
if(typeof rockets.core.world !== 'undefined')
{} else
{rockets.core.world = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",1017460895),"Hello!"], null));
}
rockets.core.update_text = (function update_text(text){return cljs.core.reset_BANG_.call(null,rockets.core.world,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",1017460895),text], null));
});
/**
* 
*/
rockets.core.Root = quiescent.component.call(null,(function (data){return React.DOM.div(null,sablono.interpreter.input.call(null,{"type": "text", "value": new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(data), "onChange": (function (p1__13759_SHARP_){return rockets.core.update_text.call(null,p1__13759_SHARP_.target.value);
})}),(function (){var attrs13760 = new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(data);return cljs.core.apply.call(null,React.DOM.h1,((cljs.core.map_QMARK_.call(null,attrs13760))?sablono.interpreter.attributes.call(null,attrs13760):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13760))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13760)], null))));
})());
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
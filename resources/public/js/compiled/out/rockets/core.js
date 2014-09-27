// Compiled by ClojureScript 0.0-2202
goog.provide('rockets.core');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('quiescent');
goog.require('figwheel.client');
goog.require('clojure.browser.dom');
goog.require('clojure.browser.dom');
goog.require('rockets.start');
goog.require('sablono.core');
goog.require('rockets.start');
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
rockets.core.update_text = (function update_text(world_atom,key,value){return cljs.core.reset_BANG_.call(null,world_atom,cljs.core.assoc.call(null,cljs.core.deref.call(null,world_atom),key,value));
});
rockets.core.show_state_log = true;
rockets.core.update_state_log = (function update_state_log(data){return clojure.browser.dom.set_text.call(null,document.getElementById("state-log"),sablono.util.to_str.call(null,data));
});
if(cljs.core.truth_(rockets.core.show_state_log))
{cljs.core.add_watch.call(null,rockets.core.world,new cljs.core.Keyword("rockets.core","state-log-render","rockets.core/state-log-render",1775333874),(function (_,___$1,___$2,data){return rockets.core.update_state_log.call(null,data);
}));
if(typeof rockets.core._first_time_log_render !== 'undefined')
{} else
{rockets.core._first_time_log_render = rockets.core.update_state_log.call(null,cljs.core.deref.call(null,rockets.core.world));
}
} else
{}
rockets.core.render = (function render(data){return quiescent.render.call(null,rockets.start.StartComponent.call(null,data,rockets.core.world),document.getElementById("main-area"));
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
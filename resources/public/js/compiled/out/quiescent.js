// Compiled by ClojureScript 0.0-2202
goog.provide('quiescent');
goog.require('cljs.core');
/**
* Utility function. Takes an object which is (possibly) a
* ClojureScript map. If the value is a ClojureScript map, convert it
* to a JavaScript properties object. Otherwise, return the argument
* unchanged.
*/
quiescent.js_props = (function js_props(obj){if(cljs.core.map_QMARK_.call(null,obj))
{var o = (function (){var obj27090 = {};return obj27090;
})();var seq__27091_27097 = cljs.core.seq.call(null,obj);var chunk__27092_27098 = null;var count__27093_27099 = 0;var i__27094_27100 = 0;while(true){
if((i__27094_27100 < count__27093_27099))
{var vec__27095_27101 = cljs.core._nth.call(null,chunk__27092_27098,i__27094_27100);var k_27102 = cljs.core.nth.call(null,vec__27095_27101,0,null);var v_27103 = cljs.core.nth.call(null,vec__27095_27101,1,null);(o[cljs.core.name.call(null,k_27102)] = js_props.call(null,v_27103));
{
var G__27104 = seq__27091_27097;
var G__27105 = chunk__27092_27098;
var G__27106 = count__27093_27099;
var G__27107 = (i__27094_27100 + 1);
seq__27091_27097 = G__27104;
chunk__27092_27098 = G__27105;
count__27093_27099 = G__27106;
i__27094_27100 = G__27107;
continue;
}
} else
{var temp__4126__auto___27108 = cljs.core.seq.call(null,seq__27091_27097);if(temp__4126__auto___27108)
{var seq__27091_27109__$1 = temp__4126__auto___27108;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27091_27109__$1))
{var c__8632__auto___27110 = cljs.core.chunk_first.call(null,seq__27091_27109__$1);{
var G__27111 = cljs.core.chunk_rest.call(null,seq__27091_27109__$1);
var G__27112 = c__8632__auto___27110;
var G__27113 = cljs.core.count.call(null,c__8632__auto___27110);
var G__27114 = 0;
seq__27091_27097 = G__27111;
chunk__27092_27098 = G__27112;
count__27093_27099 = G__27113;
i__27094_27100 = G__27114;
continue;
}
} else
{var vec__27096_27115 = cljs.core.first.call(null,seq__27091_27109__$1);var k_27116 = cljs.core.nth.call(null,vec__27096_27115,0,null);var v_27117 = cljs.core.nth.call(null,vec__27096_27115,1,null);(o[cljs.core.name.call(null,k_27116)] = js_props.call(null,v_27117));
{
var G__27118 = cljs.core.next.call(null,seq__27091_27109__$1);
var G__27119 = null;
var G__27120 = 0;
var G__27121 = 0;
seq__27091_27097 = G__27118;
chunk__27092_27098 = G__27119;
count__27093_27099 = G__27120;
i__27094_27100 = G__27121;
continue;
}
}
} else
{}
}
break;
}
return o;
} else
{return obj;
}
});
/**
* Within a component render function, will be bound to the raw
* ReactJS component.
*/
quiescent._STAR_component_STAR_ = null;
/**
* Return a function that will return a ReactJS component, using the
* provided function as the implementation for React's 'render' method
* on the component.
* 
* The given render function should take a single immutable value as
* its first argument, and return a single ReactJS component.
* Additional arguments to the component constructor will be passed as
* additional arguments to the render function whenever it is invoked,
* but will *not* be included in any calculations regarding whether the
* component should re-render.
*/
quiescent.component = (function component(renderer){var react_component = React.createClass({"render": (function (){var this$ = this;var _STAR_component_STAR_27123 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return cljs.core.apply.call(null,renderer,(this$.props["value"]),(this$.props["statics"]));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_27123;
}}), "shouldComponentUpdate": (function (next_props,_){var this$ = this;return cljs.core.not_EQ_.call(null,(this$.props["value"]),(next_props["value"]));
})});return ((function (react_component){
return (function() { 
var G__27124__delegate = function (value,static_args){return react_component.call(null,{"statics": static_args, "value": value});
};
var G__27124 = function (value,var_args){
var static_args = null;if (arguments.length > 1) {
  static_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__27124__delegate.call(this,value,static_args);};
G__27124.cljs$lang$maxFixedArity = 1;
G__27124.cljs$lang$applyTo = (function (arglist__27125){
var value = cljs.core.first(arglist__27125);
var static_args = cljs.core.rest(arglist__27125);
return G__27124__delegate(value,static_args);
});
G__27124.cljs$core$IFn$_invoke$arity$variadic = G__27124__delegate;
return G__27124;
})()
;
;})(react_component))
});
/**
* Wrapper component used to mix-in lifecycle access
*/
quiescent.WrapperComponent = React.createClass({"componentWillUnmount": (function (){var this$ = this;var temp__4126__auto__ = (this$.props["onWillUnmount"]);if(cljs.core.truth_(temp__4126__auto__))
{var f = temp__4126__auto__;var _STAR_component_STAR_27130 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_27130;
}} else
{return null;
}
}), "componentWillUpdate": (function (_,___$1){var this$ = this;var temp__4126__auto__ = (this$.props["onWillUpdate"]);if(cljs.core.truth_(temp__4126__auto__))
{var f = temp__4126__auto__;var _STAR_component_STAR_27129 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_27129;
}} else
{return null;
}
}), "componentWillMount": (function (){var this$ = this;var temp__4126__auto__ = (this$.props["onWillMount"]);if(cljs.core.truth_(temp__4126__auto__))
{var f = temp__4126__auto__;var _STAR_component_STAR_27128 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_27128;
}} else
{return null;
}
}), "componentDidMount": (function (){var this$ = this;var temp__4126__auto__ = (this$.props["onMount"]);if(cljs.core.truth_(temp__4126__auto__))
{var f = temp__4126__auto__;var _STAR_component_STAR_27127 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_27127;
}} else
{return null;
}
}), "componentDidUpdate": (function (prev_props,prev_state){var this$ = this;var temp__4126__auto__ = (this$.props["onUpdate"]);if(cljs.core.truth_(temp__4126__auto__))
{var f = temp__4126__auto__;var _STAR_component_STAR_27126 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_27126;
}} else
{return null;
}
}), "render": (function (){var this$ = this;return (this$.props["wrappee"]);
})});
/**
* Create a wrapper function for a compoment implementing multiple
* lifecycle functions. Lifecycle functions are specified as any number
* of additional key-value pairs passed as arguments to this function.
* 
* Valid keys and values include:
* 
* :onUpdate - will call the provided function,
* passing the rendered DOM node as a single arg
* :onMount - will call the provided function,
* passing the rendered DOM node as a single arg
* :onWillUpdate - will call the provided function with no arguments
* :onWillMount - will call the provided function with no arguments
* :onWillUnmount - will call the provided function with no arguments
* @param {...*} var_args
*/
quiescent.wrapper = (function() { 
var wrapper__delegate = function (child,kvs){var props = quiescent.js_props.call(null,cljs.core.apply.call(null,cljs.core.array_map,new cljs.core.Keyword(null,"wrappee","wrappee",2609412088),child,kvs));var temp__4126__auto___27131 = (child.props["key"]);if(cljs.core.truth_(temp__4126__auto___27131))
{var key_27132 = temp__4126__auto___27131;(props["key"] = key_27132);
} else
{}
return quiescent.WrapperComponent.call(null,props);
};
var wrapper = function (child,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrapper__delegate.call(this,child,kvs);};
wrapper.cljs$lang$maxFixedArity = 1;
wrapper.cljs$lang$applyTo = (function (arglist__27133){
var child = cljs.core.first(arglist__27133);
var kvs = cljs.core.rest(arglist__27133);
return wrapper__delegate(child,kvs);
});
wrapper.cljs$core$IFn$_invoke$arity$variadic = wrapper__delegate;
return wrapper;
})()
;
/**
* Wrap a component, specifying a function to be called on the
* componentDidUpdate lifecycle event.
* 
* The function will be passed the rendered DOM node.
*/
quiescent.on_update = (function on_update(child,f){return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onUpdate","onUpdate",2573468410),f);
});
/**
* Wrap a component, specifying a function to be called on the
* componentDidMount lifecycle event.
* 
* The function will be passed the rendered DOM node.
*/
quiescent.on_mount = (function on_mount(child,f){return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onMount","onMount",3966305516),f);
});
/**
* Wrap a component, specifying a function to be called on the
* componentDidMount AND the componentDidUpdate lifecycle events.
* 
* The function will be passed the rendered DOM node.
*/
quiescent.on_render = (function on_render(child,f){return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onMount","onMount",3966305516),f,new cljs.core.Keyword(null,"onUpdate","onUpdate",2573468410),f);
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillMount lifecycle event.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_mount = (function on_will_mount(child,f){return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onWillMount","onWillMount",3483492282),f);
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillUpdate lifecycle event.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_update = (function on_will_update(child,f){return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onWillUpdate","onWillUpdate",4786127340),f);
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillMount AND the componentWillUpdate lifecycle events.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_render = (function on_will_render(child,f){return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onWillMount","onWillMount",3483492282),f,new cljs.core.Keyword(null,"onWillUpdate","onWillUpdate",4786127340),f);
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillUnmount lifecycle event.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_unmount = (function on_will_unmount(child,f){return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onWillUnmount","onWillUnmount",1940175105),f);
});
/**
* Given a ReactJS component, immediately render it, rooted to the
* specified DOM node.
*/
quiescent.render = (function render(component,node){return React.renderComponent(component,node);
});

//# sourceMappingURL=quiescent.js.map
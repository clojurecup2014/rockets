// Compiled by ClojureScript 0.0-2202
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__36900,args){var map__36902 = p__36900;var map__36902__$1 = ((cljs.core.seq_QMARK_.call(null,map__36902))?cljs.core.apply.call(null,cljs.core.hash_map,map__36902):map__36902);var debug = cljs.core.get.call(null,map__36902__$1,new cljs.core.Keyword(null,"debug","debug",1109363141));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__36900,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__36900,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__36903){
var p__36900 = cljs.core.first(arglist__36903);
var args = cljs.core.rest(arglist__36903);
return log__delegate(p__36900,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__36904){var map__36906 = p__36904;var map__36906__$1 = ((cljs.core.seq_QMARK_.call(null,map__36906))?cljs.core.apply.call(null,cljs.core.hash_map,map__36906):map__36906);var websocket_url = cljs.core.get.call(null,map__36906__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return [cljs.core.str(url),cljs.core.str("?rel="),cljs.core.str((new Date()).getTime())].join('');
});
figwheel.client.js_reload = (function js_reload(p__36907,callback){var map__36909 = p__36907;var map__36909__$1 = ((cljs.core.seq_QMARK_.call(null,map__36909))?cljs.core.apply.call(null,cljs.core.hash_map,map__36909):map__36909);var msg = map__36909__$1;var dependency_file = cljs.core.get.call(null,map__36909__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",2750516784));var namespace = cljs.core.get.call(null,map__36909__$1,new cljs.core.Keyword(null,"namespace","namespace",2266122445));var request_url = cljs.core.get.call(null,map__36909__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));if(cljs.core.truth_((function (){var or__7881__auto__ = dependency_file;if(cljs.core.truth_(or__7881__auto__))
{return or__7881__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__36909,map__36909__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__36909,map__36909__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__36910,p__36911){var map__36914 = p__36910;var map__36914__$1 = ((cljs.core.seq_QMARK_.call(null,map__36914))?cljs.core.apply.call(null,cljs.core.hash_map,map__36914):map__36914);var opts = map__36914__$1;var url_rewriter = cljs.core.get.call(null,map__36914__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",538861174));var map__36915 = p__36911;var map__36915__$1 = ((cljs.core.seq_QMARK_.call(null,map__36915))?cljs.core.apply.call(null,cljs.core.hash_map,map__36915):map__36915);var d = map__36915__$1;var file = cljs.core.get.call(null,map__36915__$1,new cljs.core.Keyword(null,"file","file",1017047278));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2162835619),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__36916,p__36917){var map__36958 = p__36916;var map__36958__$1 = ((cljs.core.seq_QMARK_.call(null,map__36958))?cljs.core.apply.call(null,cljs.core.hash_map,map__36958):map__36958);var opts = map__36958__$1;var on_jsload = cljs.core.get.call(null,map__36958__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",817745103));var before_jsload = cljs.core.get.call(null,map__36958__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",3705046831));var map__36959 = p__36917;var map__36959__$1 = ((cljs.core.seq_QMARK_.call(null,map__36959))?cljs.core.apply.call(null,cljs.core.hash_map,map__36959):map__36959);var files = cljs.core.get.call(null,map__36959__$1,new cljs.core.Keyword(null,"files","files",1111338473));var c__11008__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11008__auto__,map__36958,map__36958__$1,opts,on_jsload,before_jsload,map__36959,map__36959__$1,files){
return (function (){var f__11009__auto__ = (function (){var switch__10944__auto__ = ((function (c__11008__auto__,map__36958,map__36958__$1,opts,on_jsload,before_jsload,map__36959,map__36959__$1,files){
return (function (state_36981){var state_val_36982 = (state_36981[1]);if((state_val_36982 === 6))
{var inst_36964 = (state_36981[7]);var inst_36973 = (state_36981[2]);var inst_36974 = [inst_36964];var inst_36975 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_36974,null));var inst_36976 = cljs.core.apply.call(null,on_jsload,inst_36975);var state_36981__$1 = (function (){var statearr_36983 = state_36981;(statearr_36983[8] = inst_36973);
return statearr_36983;
})();var statearr_36984_36998 = state_36981__$1;(statearr_36984_36998[2] = inst_36976);
(statearr_36984_36998[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36982 === 5))
{var inst_36979 = (state_36981[2]);var state_36981__$1 = state_36981;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36981__$1,inst_36979);
} else
{if((state_val_36982 === 4))
{var state_36981__$1 = state_36981;var statearr_36985_36999 = state_36981__$1;(statearr_36985_36999[2] = null);
(statearr_36985_36999[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36982 === 3))
{var inst_36964 = (state_36981[7]);var inst_36967 = console.debug("Figwheel: loaded these files");var inst_36968 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",1017047278),inst_36964);var inst_36969 = cljs.core.prn_str.call(null,inst_36968);var inst_36970 = console.log(inst_36969);var inst_36971 = cljs.core.async.timeout.call(null,10);var state_36981__$1 = (function (){var statearr_36986 = state_36981;(statearr_36986[9] = inst_36967);
(statearr_36986[10] = inst_36970);
return statearr_36986;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36981__$1,6,inst_36971);
} else
{if((state_val_36982 === 2))
{var inst_36964 = (state_36981[7]);var inst_36964__$1 = (state_36981[2]);var inst_36965 = cljs.core.not_empty.call(null,inst_36964__$1);var state_36981__$1 = (function (){var statearr_36987 = state_36981;(statearr_36987[7] = inst_36964__$1);
return statearr_36987;
})();if(cljs.core.truth_(inst_36965))
{var statearr_36988_37000 = state_36981__$1;(statearr_36988_37000[1] = 3);
} else
{var statearr_36989_37001 = state_36981__$1;(statearr_36989_37001[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36982 === 1))
{var inst_36960 = before_jsload.call(null,files);var inst_36961 = figwheel.client.add_request_urls.call(null,opts,files);var inst_36962 = figwheel.client.load_all_js_files.call(null,inst_36961);var state_36981__$1 = (function (){var statearr_36990 = state_36981;(statearr_36990[11] = inst_36960);
return statearr_36990;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36981__$1,2,inst_36962);
} else
{return null;
}
}
}
}
}
}
});})(c__11008__auto__,map__36958,map__36958__$1,opts,on_jsload,before_jsload,map__36959,map__36959__$1,files))
;return ((function (switch__10944__auto__,c__11008__auto__,map__36958,map__36958__$1,opts,on_jsload,before_jsload,map__36959,map__36959__$1,files){
return (function() {
var state_machine__10945__auto__ = null;
var state_machine__10945__auto____0 = (function (){var statearr_36994 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36994[0] = state_machine__10945__auto__);
(statearr_36994[1] = 1);
return statearr_36994;
});
var state_machine__10945__auto____1 = (function (state_36981){while(true){
var ret_value__10946__auto__ = (function (){try{while(true){
var result__10947__auto__ = switch__10944__auto__.call(null,state_36981);if(cljs.core.keyword_identical_QMARK_.call(null,result__10947__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10947__auto__;
}
break;
}
}catch (e36995){if((e36995 instanceof Object))
{var ex__10948__auto__ = e36995;var statearr_36996_37002 = state_36981;(statearr_36996_37002[5] = ex__10948__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36981);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36995;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10946__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37003 = state_36981;
state_36981 = G__37003;
continue;
}
} else
{return ret_value__10946__auto__;
}
break;
}
});
state_machine__10945__auto__ = function(state_36981){
switch(arguments.length){
case 0:
return state_machine__10945__auto____0.call(this);
case 1:
return state_machine__10945__auto____1.call(this,state_36981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10945__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10945__auto____0;
state_machine__10945__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10945__auto____1;
return state_machine__10945__auto__;
})()
;})(switch__10944__auto__,c__11008__auto__,map__36958,map__36958__$1,opts,on_jsload,before_jsload,map__36959,map__36959__$1,files))
})();var state__11010__auto__ = (function (){var statearr_36997 = f__11009__auto__.call(null);(statearr_36997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11008__auto__);
return statearr_36997;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11010__auto__);
});})(c__11008__auto__,map__36958,map__36958__$1,opts,on_jsload,before_jsload,map__36959,map__36959__$1,files))
);
return c__11008__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__37004,link_href){var map__37006 = p__37004;var map__37006__$1 = ((cljs.core.seq_QMARK_.call(null,map__37006))?cljs.core.apply.call(null,cljs.core.hash_map,map__37006):map__37006);var request_url = cljs.core.get.call(null,map__37006__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));var file = cljs.core.get.call(null,map__37006__$1,new cljs.core.Keyword(null,"file","file",1017047278));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[0]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__11008__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11008__auto__,parent){
return (function (){var f__11009__auto__ = (function (){var switch__10944__auto__ = ((function (c__11008__auto__,parent){
return (function (state_37027){var state_val_37028 = (state_37027[1]);if((state_val_37028 === 2))
{var inst_37024 = (state_37027[2]);var inst_37025 = parent.removeChild(orig_link);var state_37027__$1 = (function (){var statearr_37029 = state_37027;(statearr_37029[7] = inst_37024);
return statearr_37029;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37027__$1,inst_37025);
} else
{if((state_val_37028 === 1))
{var inst_37022 = cljs.core.async.timeout.call(null,200);var state_37027__$1 = state_37027;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37027__$1,2,inst_37022);
} else
{return null;
}
}
});})(c__11008__auto__,parent))
;return ((function (switch__10944__auto__,c__11008__auto__,parent){
return (function() {
var state_machine__10945__auto__ = null;
var state_machine__10945__auto____0 = (function (){var statearr_37033 = [null,null,null,null,null,null,null,null];(statearr_37033[0] = state_machine__10945__auto__);
(statearr_37033[1] = 1);
return statearr_37033;
});
var state_machine__10945__auto____1 = (function (state_37027){while(true){
var ret_value__10946__auto__ = (function (){try{while(true){
var result__10947__auto__ = switch__10944__auto__.call(null,state_37027);if(cljs.core.keyword_identical_QMARK_.call(null,result__10947__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10947__auto__;
}
break;
}
}catch (e37034){if((e37034 instanceof Object))
{var ex__10948__auto__ = e37034;var statearr_37035_37037 = state_37027;(statearr_37035_37037[5] = ex__10948__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37027);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37034;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10946__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37038 = state_37027;
state_37027 = G__37038;
continue;
}
} else
{return ret_value__10946__auto__;
}
break;
}
});
state_machine__10945__auto__ = function(state_37027){
switch(arguments.length){
case 0:
return state_machine__10945__auto____0.call(this);
case 1:
return state_machine__10945__auto____1.call(this,state_37027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10945__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10945__auto____0;
state_machine__10945__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10945__auto____1;
return state_machine__10945__auto__;
})()
;})(switch__10944__auto__,c__11008__auto__,parent))
})();var state__11010__auto__ = (function (){var statearr_37036 = f__11009__auto__.call(null);(statearr_37036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11008__auto__);
return statearr_37036;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11010__auto__);
});})(c__11008__auto__,parent))
);
return c__11008__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__37039){var map__37041 = p__37039;var map__37041__$1 = ((cljs.core.seq_QMARK_.call(null,map__37041))?cljs.core.apply.call(null,cljs.core.hash_map,map__37041):map__37041);var f_data = map__37041__$1;var request_url = cljs.core.get.call(null,map__37041__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));var file = cljs.core.get.call(null,map__37041__$1,new cljs.core.Keyword(null,"file","file",1017047278));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__37042,files_msg){var map__37064 = p__37042;var map__37064__$1 = ((cljs.core.seq_QMARK_.call(null,map__37064))?cljs.core.apply.call(null,cljs.core.hash_map,map__37064):map__37064);var opts = map__37064__$1;var on_cssload = cljs.core.get.call(null,map__37064__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1611735789));var seq__37065_37085 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__37066_37086 = null;var count__37067_37087 = 0;var i__37068_37088 = 0;while(true){
if((i__37068_37088 < count__37067_37087))
{var f_37089 = cljs.core._nth.call(null,chunk__37066_37086,i__37068_37088);figwheel.client.reload_css_file.call(null,f_37089);
{
var G__37090 = seq__37065_37085;
var G__37091 = chunk__37066_37086;
var G__37092 = count__37067_37087;
var G__37093 = (i__37068_37088 + 1);
seq__37065_37085 = G__37090;
chunk__37066_37086 = G__37091;
count__37067_37087 = G__37092;
i__37068_37088 = G__37093;
continue;
}
} else
{var temp__4126__auto___37094 = cljs.core.seq.call(null,seq__37065_37085);if(temp__4126__auto___37094)
{var seq__37065_37095__$1 = temp__4126__auto___37094;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37065_37095__$1))
{var c__8629__auto___37096 = cljs.core.chunk_first.call(null,seq__37065_37095__$1);{
var G__37097 = cljs.core.chunk_rest.call(null,seq__37065_37095__$1);
var G__37098 = c__8629__auto___37096;
var G__37099 = cljs.core.count.call(null,c__8629__auto___37096);
var G__37100 = 0;
seq__37065_37085 = G__37097;
chunk__37066_37086 = G__37098;
count__37067_37087 = G__37099;
i__37068_37088 = G__37100;
continue;
}
} else
{var f_37101 = cljs.core.first.call(null,seq__37065_37095__$1);figwheel.client.reload_css_file.call(null,f_37101);
{
var G__37102 = cljs.core.next.call(null,seq__37065_37095__$1);
var G__37103 = null;
var G__37104 = 0;
var G__37105 = 0;
seq__37065_37085 = G__37102;
chunk__37066_37086 = G__37103;
count__37067_37087 = G__37104;
i__37068_37088 = G__37105;
continue;
}
}
} else
{}
}
break;
}
var c__11008__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11008__auto__,map__37064,map__37064__$1,opts,on_cssload){
return (function (){var f__11009__auto__ = (function (){var switch__10944__auto__ = ((function (c__11008__auto__,map__37064,map__37064__$1,opts,on_cssload){
return (function (state_37075){var state_val_37076 = (state_37075[1]);if((state_val_37076 === 2))
{var inst_37071 = (state_37075[2]);var inst_37072 = new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_37073 = on_cssload.call(null,inst_37072);var state_37075__$1 = (function (){var statearr_37077 = state_37075;(statearr_37077[7] = inst_37071);
return statearr_37077;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37075__$1,inst_37073);
} else
{if((state_val_37076 === 1))
{var inst_37069 = cljs.core.async.timeout.call(null,100);var state_37075__$1 = state_37075;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37075__$1,2,inst_37069);
} else
{return null;
}
}
});})(c__11008__auto__,map__37064,map__37064__$1,opts,on_cssload))
;return ((function (switch__10944__auto__,c__11008__auto__,map__37064,map__37064__$1,opts,on_cssload){
return (function() {
var state_machine__10945__auto__ = null;
var state_machine__10945__auto____0 = (function (){var statearr_37081 = [null,null,null,null,null,null,null,null];(statearr_37081[0] = state_machine__10945__auto__);
(statearr_37081[1] = 1);
return statearr_37081;
});
var state_machine__10945__auto____1 = (function (state_37075){while(true){
var ret_value__10946__auto__ = (function (){try{while(true){
var result__10947__auto__ = switch__10944__auto__.call(null,state_37075);if(cljs.core.keyword_identical_QMARK_.call(null,result__10947__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10947__auto__;
}
break;
}
}catch (e37082){if((e37082 instanceof Object))
{var ex__10948__auto__ = e37082;var statearr_37083_37106 = state_37075;(statearr_37083_37106[5] = ex__10948__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37075);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37082;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10946__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37107 = state_37075;
state_37075 = G__37107;
continue;
}
} else
{return ret_value__10946__auto__;
}
break;
}
});
state_machine__10945__auto__ = function(state_37075){
switch(arguments.length){
case 0:
return state_machine__10945__auto____0.call(this);
case 1:
return state_machine__10945__auto____1.call(this,state_37075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10945__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10945__auto____0;
state_machine__10945__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10945__auto____1;
return state_machine__10945__auto__;
})()
;})(switch__10944__auto__,c__11008__auto__,map__37064,map__37064__$1,opts,on_cssload))
})();var state__11010__auto__ = (function (){var statearr_37084 = f__11009__auto__.call(null);(statearr_37084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11008__auto__);
return statearr_37084;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11010__auto__);
});})(c__11008__auto__,map__37064,map__37064__$1,opts,on_cssload))
);
return c__11008__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",3979112649)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__37108){var map__37113 = p__37108;var map__37113__$1 = ((cljs.core.seq_QMARK_.call(null,map__37113))?cljs.core.apply.call(null,cljs.core.hash_map,map__37113):map__37113);var opts = map__37113__$1;var on_compile_fail = cljs.core.get.call(null,map__37113__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",846779160));var jsload_callback = cljs.core.get.call(null,map__37113__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989));var websocket_url = cljs.core.get.call(null,map__37113__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));var retry_count = cljs.core.get.call(null,map__37113__$1,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__37113,map__37113__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__37114 = cljs.core._EQ_;var expr__37115 = new cljs.core.Keyword(null,"msg-name","msg-name",3979112649).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__37114.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",2807270608),expr__37115)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__37114.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",1058553478),expr__37115)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__37114.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",630802569),expr__37115)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__37113,map__37113__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__37113,map__37113__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__37113,map__37113__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__37113,map__37113__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > 0))
{return window.setTimeout(((function (socket,map__37113,map__37113__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),(retry_count - 1)));
});})(socket,map__37113,map__37113__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,2000);
} else
{return null;
}
});})(socket,map__37113,map__37113__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__37113,map__37113__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__37113,map__37113__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj37120 = {"detail":url};return obj37120;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.Keyword(null,"class","class",1108647146)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",1108338651).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__37121){var map__37123 = p__37121;var map__37123__$1 = ((cljs.core.seq_QMARK_.call(null,map__37123))?cljs.core.apply.call(null,cljs.core.hash_map,map__37123):map__37123);var class$ = cljs.core.get.call(null,map__37123__$1,new cljs.core.Keyword(null,"class","class",1108647146));var message = cljs.core.get.call(null,map__37123__$1,new cljs.core.Keyword(null,"message","message",1968829305));return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__37124){var map__37130 = p__37124;var map__37130__$1 = ((cljs.core.seq_QMARK_.call(null,map__37130))?cljs.core.apply.call(null,cljs.core.hash_map,map__37130):map__37130);var ed = map__37130__$1;var exception_data = cljs.core.get.call(null,map__37130__$1,new cljs.core.Keyword(null,"exception-data","exception-data",922291674));var formatted_exception = cljs.core.get.call(null,map__37130__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",1408867312));console.debug("Figwheel: Compile Exception");
var seq__37131_37135 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__37132_37136 = null;var count__37133_37137 = 0;var i__37134_37138 = 0;while(true){
if((i__37134_37138 < count__37133_37137))
{var msg_37139 = cljs.core._nth.call(null,chunk__37132_37136,i__37134_37138);console.log(msg_37139);
{
var G__37140 = seq__37131_37135;
var G__37141 = chunk__37132_37136;
var G__37142 = count__37133_37137;
var G__37143 = (i__37134_37138 + 1);
seq__37131_37135 = G__37140;
chunk__37132_37136 = G__37141;
count__37133_37137 = G__37142;
i__37134_37138 = G__37143;
continue;
}
} else
{var temp__4126__auto___37144 = cljs.core.seq.call(null,seq__37131_37135);if(temp__4126__auto___37144)
{var seq__37131_37145__$1 = temp__4126__auto___37144;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37131_37145__$1))
{var c__8629__auto___37146 = cljs.core.chunk_first.call(null,seq__37131_37145__$1);{
var G__37147 = cljs.core.chunk_rest.call(null,seq__37131_37145__$1);
var G__37148 = c__8629__auto___37146;
var G__37149 = cljs.core.count.call(null,c__8629__auto___37146);
var G__37150 = 0;
seq__37131_37135 = G__37147;
chunk__37132_37136 = G__37148;
count__37133_37137 = G__37149;
i__37134_37138 = G__37150;
continue;
}
} else
{var msg_37151 = cljs.core.first.call(null,seq__37131_37145__$1);console.log(msg_37151);
{
var G__37152 = cljs.core.next.call(null,seq__37131_37145__$1);
var G__37153 = null;
var G__37154 = 0;
var G__37155 = 0;
seq__37131_37135 = G__37152;
chunk__37132_37136 = G__37153;
count__37133_37137 = G__37154;
i__37134_37138 = G__37155;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",1017047278),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),100,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",817745103),(function (){var or__7881__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__7881__auto__))
{return or__7881__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1611735789),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",3705046831),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",846779160),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",538861174),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131),[cljs.core.str("ws://"),cljs.core.str(location.host),cljs.core.str("/figwheel-ws")].join('')], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__37156){var map__37158 = p__37156;var map__37158__$1 = ((cljs.core.seq_QMARK_.call(null,map__37158))?cljs.core.apply.call(null,cljs.core.hash_map,map__37158):map__37158);var opts = map__37158__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__37156 = null;if (arguments.length > 0) {
  p__37156 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__37156);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__37159){
var p__37156 = cljs.core.seq(arglist__37159);
return watch_and_reload__delegate(p__37156);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map
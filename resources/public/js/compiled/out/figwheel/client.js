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
var log__delegate = function (p__23969,args){var map__23971 = p__23969;var map__23971__$1 = ((cljs.core.seq_QMARK_.call(null,map__23971))?cljs.core.apply.call(null,cljs.core.hash_map,map__23971):map__23971);var debug = cljs.core.get.call(null,map__23971__$1,new cljs.core.Keyword(null,"debug","debug",1109363141));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__23969,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__23969,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__23972){
var p__23969 = cljs.core.first(arglist__23972);
var args = cljs.core.rest(arglist__23972);
return log__delegate(p__23969,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__23973){var map__23975 = p__23973;var map__23975__$1 = ((cljs.core.seq_QMARK_.call(null,map__23975))?cljs.core.apply.call(null,cljs.core.hash_map,map__23975):map__23975);var websocket_url = cljs.core.get.call(null,map__23975__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return [cljs.core.str(url),cljs.core.str("?rel="),cljs.core.str((new Date()).getTime())].join('');
});
figwheel.client.js_reload = (function js_reload(p__23976,callback){var map__23978 = p__23976;var map__23978__$1 = ((cljs.core.seq_QMARK_.call(null,map__23978))?cljs.core.apply.call(null,cljs.core.hash_map,map__23978):map__23978);var msg = map__23978__$1;var dependency_file = cljs.core.get.call(null,map__23978__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",2750516784));var namespace = cljs.core.get.call(null,map__23978__$1,new cljs.core.Keyword(null,"namespace","namespace",2266122445));var request_url = cljs.core.get.call(null,map__23978__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));if(cljs.core.truth_((function (){var or__7884__auto__ = dependency_file;if(cljs.core.truth_(or__7884__auto__))
{return or__7884__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__23978,map__23978__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__23978,map__23978__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__23979,p__23980){var map__23983 = p__23979;var map__23983__$1 = ((cljs.core.seq_QMARK_.call(null,map__23983))?cljs.core.apply.call(null,cljs.core.hash_map,map__23983):map__23983);var opts = map__23983__$1;var url_rewriter = cljs.core.get.call(null,map__23983__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",538861174));var map__23984 = p__23980;var map__23984__$1 = ((cljs.core.seq_QMARK_.call(null,map__23984))?cljs.core.apply.call(null,cljs.core.hash_map,map__23984):map__23984);var d = map__23984__$1;var file = cljs.core.get.call(null,map__23984__$1,new cljs.core.Keyword(null,"file","file",1017047278));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2162835619),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__23985,p__23986){var map__24027 = p__23985;var map__24027__$1 = ((cljs.core.seq_QMARK_.call(null,map__24027))?cljs.core.apply.call(null,cljs.core.hash_map,map__24027):map__24027);var opts = map__24027__$1;var on_jsload = cljs.core.get.call(null,map__24027__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",817745103));var before_jsload = cljs.core.get.call(null,map__24027__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",3705046831));var map__24028 = p__23986;var map__24028__$1 = ((cljs.core.seq_QMARK_.call(null,map__24028))?cljs.core.apply.call(null,cljs.core.hash_map,map__24028):map__24028);var files = cljs.core.get.call(null,map__24028__$1,new cljs.core.Keyword(null,"files","files",1111338473));var c__11010__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11010__auto__,map__24027,map__24027__$1,opts,on_jsload,before_jsload,map__24028,map__24028__$1,files){
return (function (){var f__11011__auto__ = (function (){var switch__10946__auto__ = ((function (c__11010__auto__,map__24027,map__24027__$1,opts,on_jsload,before_jsload,map__24028,map__24028__$1,files){
return (function (state_24050){var state_val_24051 = (state_24050[1]);if((state_val_24051 === 6))
{var inst_24033 = (state_24050[7]);var inst_24042 = (state_24050[2]);var inst_24043 = [inst_24033];var inst_24044 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_24043,null));var inst_24045 = cljs.core.apply.call(null,on_jsload,inst_24044);var state_24050__$1 = (function (){var statearr_24052 = state_24050;(statearr_24052[8] = inst_24042);
return statearr_24052;
})();var statearr_24053_24067 = state_24050__$1;(statearr_24053_24067[2] = inst_24045);
(statearr_24053_24067[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24051 === 5))
{var inst_24048 = (state_24050[2]);var state_24050__$1 = state_24050;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24050__$1,inst_24048);
} else
{if((state_val_24051 === 4))
{var state_24050__$1 = state_24050;var statearr_24054_24068 = state_24050__$1;(statearr_24054_24068[2] = null);
(statearr_24054_24068[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24051 === 3))
{var inst_24033 = (state_24050[7]);var inst_24036 = console.debug("Figwheel: loaded these files");var inst_24037 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",1017047278),inst_24033);var inst_24038 = cljs.core.prn_str.call(null,inst_24037);var inst_24039 = console.log(inst_24038);var inst_24040 = cljs.core.async.timeout.call(null,10);var state_24050__$1 = (function (){var statearr_24055 = state_24050;(statearr_24055[9] = inst_24036);
(statearr_24055[10] = inst_24039);
return statearr_24055;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24050__$1,6,inst_24040);
} else
{if((state_val_24051 === 2))
{var inst_24033 = (state_24050[7]);var inst_24033__$1 = (state_24050[2]);var inst_24034 = cljs.core.not_empty.call(null,inst_24033__$1);var state_24050__$1 = (function (){var statearr_24056 = state_24050;(statearr_24056[7] = inst_24033__$1);
return statearr_24056;
})();if(cljs.core.truth_(inst_24034))
{var statearr_24057_24069 = state_24050__$1;(statearr_24057_24069[1] = 3);
} else
{var statearr_24058_24070 = state_24050__$1;(statearr_24058_24070[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24051 === 1))
{var inst_24029 = before_jsload.call(null,files);var inst_24030 = figwheel.client.add_request_urls.call(null,opts,files);var inst_24031 = figwheel.client.load_all_js_files.call(null,inst_24030);var state_24050__$1 = (function (){var statearr_24059 = state_24050;(statearr_24059[11] = inst_24029);
return statearr_24059;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24050__$1,2,inst_24031);
} else
{return null;
}
}
}
}
}
}
});})(c__11010__auto__,map__24027,map__24027__$1,opts,on_jsload,before_jsload,map__24028,map__24028__$1,files))
;return ((function (switch__10946__auto__,c__11010__auto__,map__24027,map__24027__$1,opts,on_jsload,before_jsload,map__24028,map__24028__$1,files){
return (function() {
var state_machine__10947__auto__ = null;
var state_machine__10947__auto____0 = (function (){var statearr_24063 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24063[0] = state_machine__10947__auto__);
(statearr_24063[1] = 1);
return statearr_24063;
});
var state_machine__10947__auto____1 = (function (state_24050){while(true){
var ret_value__10948__auto__ = (function (){try{while(true){
var result__10949__auto__ = switch__10946__auto__.call(null,state_24050);if(cljs.core.keyword_identical_QMARK_.call(null,result__10949__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10949__auto__;
}
break;
}
}catch (e24064){if((e24064 instanceof Object))
{var ex__10950__auto__ = e24064;var statearr_24065_24071 = state_24050;(statearr_24065_24071[5] = ex__10950__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24050);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24064;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10948__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24072 = state_24050;
state_24050 = G__24072;
continue;
}
} else
{return ret_value__10948__auto__;
}
break;
}
});
state_machine__10947__auto__ = function(state_24050){
switch(arguments.length){
case 0:
return state_machine__10947__auto____0.call(this);
case 1:
return state_machine__10947__auto____1.call(this,state_24050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10947__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10947__auto____0;
state_machine__10947__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10947__auto____1;
return state_machine__10947__auto__;
})()
;})(switch__10946__auto__,c__11010__auto__,map__24027,map__24027__$1,opts,on_jsload,before_jsload,map__24028,map__24028__$1,files))
})();var state__11012__auto__ = (function (){var statearr_24066 = f__11011__auto__.call(null);(statearr_24066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11010__auto__);
return statearr_24066;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11012__auto__);
});})(c__11010__auto__,map__24027,map__24027__$1,opts,on_jsload,before_jsload,map__24028,map__24028__$1,files))
);
return c__11010__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__24073,link_href){var map__24075 = p__24073;var map__24075__$1 = ((cljs.core.seq_QMARK_.call(null,map__24075))?cljs.core.apply.call(null,cljs.core.hash_map,map__24075):map__24075);var request_url = cljs.core.get.call(null,map__24075__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));var file = cljs.core.get.call(null,map__24075__$1,new cljs.core.Keyword(null,"file","file",1017047278));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
var c__11010__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11010__auto__,parent){
return (function (){var f__11011__auto__ = (function (){var switch__10946__auto__ = ((function (c__11010__auto__,parent){
return (function (state_24096){var state_val_24097 = (state_24096[1]);if((state_val_24097 === 2))
{var inst_24093 = (state_24096[2]);var inst_24094 = parent.removeChild(orig_link);var state_24096__$1 = (function (){var statearr_24098 = state_24096;(statearr_24098[7] = inst_24093);
return statearr_24098;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24096__$1,inst_24094);
} else
{if((state_val_24097 === 1))
{var inst_24091 = cljs.core.async.timeout.call(null,200);var state_24096__$1 = state_24096;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24096__$1,2,inst_24091);
} else
{return null;
}
}
});})(c__11010__auto__,parent))
;return ((function (switch__10946__auto__,c__11010__auto__,parent){
return (function() {
var state_machine__10947__auto__ = null;
var state_machine__10947__auto____0 = (function (){var statearr_24102 = [null,null,null,null,null,null,null,null];(statearr_24102[0] = state_machine__10947__auto__);
(statearr_24102[1] = 1);
return statearr_24102;
});
var state_machine__10947__auto____1 = (function (state_24096){while(true){
var ret_value__10948__auto__ = (function (){try{while(true){
var result__10949__auto__ = switch__10946__auto__.call(null,state_24096);if(cljs.core.keyword_identical_QMARK_.call(null,result__10949__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10949__auto__;
}
break;
}
}catch (e24103){if((e24103 instanceof Object))
{var ex__10950__auto__ = e24103;var statearr_24104_24106 = state_24096;(statearr_24104_24106[5] = ex__10950__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24096);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24103;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10948__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24107 = state_24096;
state_24096 = G__24107;
continue;
}
} else
{return ret_value__10948__auto__;
}
break;
}
});
state_machine__10947__auto__ = function(state_24096){
switch(arguments.length){
case 0:
return state_machine__10947__auto____0.call(this);
case 1:
return state_machine__10947__auto____1.call(this,state_24096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10947__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10947__auto____0;
state_machine__10947__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10947__auto____1;
return state_machine__10947__auto__;
})()
;})(switch__10946__auto__,c__11010__auto__,parent))
})();var state__11012__auto__ = (function (){var statearr_24105 = f__11011__auto__.call(null);(statearr_24105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11010__auto__);
return statearr_24105;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11012__auto__);
});})(c__11010__auto__,parent))
);
return c__11010__auto__;
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
figwheel.client.reload_css_file = (function reload_css_file(p__24108){var map__24110 = p__24108;var map__24110__$1 = ((cljs.core.seq_QMARK_.call(null,map__24110))?cljs.core.apply.call(null,cljs.core.hash_map,map__24110):map__24110);var f_data = map__24110__$1;var request_url = cljs.core.get.call(null,map__24110__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));var file = cljs.core.get.call(null,map__24110__$1,new cljs.core.Keyword(null,"file","file",1017047278));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__24111,files_msg){var map__24133 = p__24111;var map__24133__$1 = ((cljs.core.seq_QMARK_.call(null,map__24133))?cljs.core.apply.call(null,cljs.core.hash_map,map__24133):map__24133);var opts = map__24133__$1;var on_cssload = cljs.core.get.call(null,map__24133__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1611735789));var seq__24134_24154 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__24135_24155 = null;var count__24136_24156 = 0;var i__24137_24157 = 0;while(true){
if((i__24137_24157 < count__24136_24156))
{var f_24158 = cljs.core._nth.call(null,chunk__24135_24155,i__24137_24157);figwheel.client.reload_css_file.call(null,f_24158);
{
var G__24159 = seq__24134_24154;
var G__24160 = chunk__24135_24155;
var G__24161 = count__24136_24156;
var G__24162 = (i__24137_24157 + 1);
seq__24134_24154 = G__24159;
chunk__24135_24155 = G__24160;
count__24136_24156 = G__24161;
i__24137_24157 = G__24162;
continue;
}
} else
{var temp__4126__auto___24163 = cljs.core.seq.call(null,seq__24134_24154);if(temp__4126__auto___24163)
{var seq__24134_24164__$1 = temp__4126__auto___24163;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24134_24164__$1))
{var c__8632__auto___24165 = cljs.core.chunk_first.call(null,seq__24134_24164__$1);{
var G__24166 = cljs.core.chunk_rest.call(null,seq__24134_24164__$1);
var G__24167 = c__8632__auto___24165;
var G__24168 = cljs.core.count.call(null,c__8632__auto___24165);
var G__24169 = 0;
seq__24134_24154 = G__24166;
chunk__24135_24155 = G__24167;
count__24136_24156 = G__24168;
i__24137_24157 = G__24169;
continue;
}
} else
{var f_24170 = cljs.core.first.call(null,seq__24134_24164__$1);figwheel.client.reload_css_file.call(null,f_24170);
{
var G__24171 = cljs.core.next.call(null,seq__24134_24164__$1);
var G__24172 = null;
var G__24173 = 0;
var G__24174 = 0;
seq__24134_24154 = G__24171;
chunk__24135_24155 = G__24172;
count__24136_24156 = G__24173;
i__24137_24157 = G__24174;
continue;
}
}
} else
{}
}
break;
}
var c__11010__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11010__auto__,map__24133,map__24133__$1,opts,on_cssload){
return (function (){var f__11011__auto__ = (function (){var switch__10946__auto__ = ((function (c__11010__auto__,map__24133,map__24133__$1,opts,on_cssload){
return (function (state_24144){var state_val_24145 = (state_24144[1]);if((state_val_24145 === 2))
{var inst_24140 = (state_24144[2]);var inst_24141 = new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_24142 = on_cssload.call(null,inst_24141);var state_24144__$1 = (function (){var statearr_24146 = state_24144;(statearr_24146[7] = inst_24140);
return statearr_24146;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24144__$1,inst_24142);
} else
{if((state_val_24145 === 1))
{var inst_24138 = cljs.core.async.timeout.call(null,100);var state_24144__$1 = state_24144;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24144__$1,2,inst_24138);
} else
{return null;
}
}
});})(c__11010__auto__,map__24133,map__24133__$1,opts,on_cssload))
;return ((function (switch__10946__auto__,c__11010__auto__,map__24133,map__24133__$1,opts,on_cssload){
return (function() {
var state_machine__10947__auto__ = null;
var state_machine__10947__auto____0 = (function (){var statearr_24150 = [null,null,null,null,null,null,null,null];(statearr_24150[0] = state_machine__10947__auto__);
(statearr_24150[1] = 1);
return statearr_24150;
});
var state_machine__10947__auto____1 = (function (state_24144){while(true){
var ret_value__10948__auto__ = (function (){try{while(true){
var result__10949__auto__ = switch__10946__auto__.call(null,state_24144);if(cljs.core.keyword_identical_QMARK_.call(null,result__10949__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10949__auto__;
}
break;
}
}catch (e24151){if((e24151 instanceof Object))
{var ex__10950__auto__ = e24151;var statearr_24152_24175 = state_24144;(statearr_24152_24175[5] = ex__10950__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24144);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24151;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10948__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24176 = state_24144;
state_24144 = G__24176;
continue;
}
} else
{return ret_value__10948__auto__;
}
break;
}
});
state_machine__10947__auto__ = function(state_24144){
switch(arguments.length){
case 0:
return state_machine__10947__auto____0.call(this);
case 1:
return state_machine__10947__auto____1.call(this,state_24144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10947__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10947__auto____0;
state_machine__10947__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10947__auto____1;
return state_machine__10947__auto__;
})()
;})(switch__10946__auto__,c__11010__auto__,map__24133,map__24133__$1,opts,on_cssload))
})();var state__11012__auto__ = (function (){var statearr_24153 = f__11011__auto__.call(null);(statearr_24153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11010__auto__);
return statearr_24153;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11012__auto__);
});})(c__11010__auto__,map__24133,map__24133__$1,opts,on_cssload))
);
return c__11010__auto__;
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__24177){var map__24182 = p__24177;var map__24182__$1 = ((cljs.core.seq_QMARK_.call(null,map__24182))?cljs.core.apply.call(null,cljs.core.hash_map,map__24182):map__24182);var opts = map__24182__$1;var on_compile_fail = cljs.core.get.call(null,map__24182__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",846779160));var jsload_callback = cljs.core.get.call(null,map__24182__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989));var websocket_url = cljs.core.get.call(null,map__24182__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));var retry_count = cljs.core.get.call(null,map__24182__$1,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__24182,map__24182__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__24183 = cljs.core._EQ_;var expr__24184 = new cljs.core.Keyword(null,"msg-name","msg-name",3979112649).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__24183.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",2807270608),expr__24184)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__24183.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",1058553478),expr__24184)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__24183.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",630802569),expr__24184)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__24182,map__24182__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__24182,map__24182__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__24182,map__24182__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__24182,map__24182__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > 0))
{return window.setTimeout(((function (socket,map__24182,map__24182__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),(retry_count - 1)));
});})(socket,map__24182,map__24182__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,2000);
} else
{return null;
}
});})(socket,map__24182,map__24182__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__24182,map__24182__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__24182,map__24182__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj24189 = {"detail":url};return obj24189;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.Keyword(null,"class","class",1108647146)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",1108338651).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__24190){var map__24192 = p__24190;var map__24192__$1 = ((cljs.core.seq_QMARK_.call(null,map__24192))?cljs.core.apply.call(null,cljs.core.hash_map,map__24192):map__24192);var class$ = cljs.core.get.call(null,map__24192__$1,new cljs.core.Keyword(null,"class","class",1108647146));var message = cljs.core.get.call(null,map__24192__$1,new cljs.core.Keyword(null,"message","message",1968829305));return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__24193){var map__24199 = p__24193;var map__24199__$1 = ((cljs.core.seq_QMARK_.call(null,map__24199))?cljs.core.apply.call(null,cljs.core.hash_map,map__24199):map__24199);var ed = map__24199__$1;var exception_data = cljs.core.get.call(null,map__24199__$1,new cljs.core.Keyword(null,"exception-data","exception-data",922291674));var formatted_exception = cljs.core.get.call(null,map__24199__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",1408867312));console.debug("Figwheel: Compile Exception");
var seq__24200_24204 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__24201_24205 = null;var count__24202_24206 = 0;var i__24203_24207 = 0;while(true){
if((i__24203_24207 < count__24202_24206))
{var msg_24208 = cljs.core._nth.call(null,chunk__24201_24205,i__24203_24207);console.log(msg_24208);
{
var G__24209 = seq__24200_24204;
var G__24210 = chunk__24201_24205;
var G__24211 = count__24202_24206;
var G__24212 = (i__24203_24207 + 1);
seq__24200_24204 = G__24209;
chunk__24201_24205 = G__24210;
count__24202_24206 = G__24211;
i__24203_24207 = G__24212;
continue;
}
} else
{var temp__4126__auto___24213 = cljs.core.seq.call(null,seq__24200_24204);if(temp__4126__auto___24213)
{var seq__24200_24214__$1 = temp__4126__auto___24213;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24200_24214__$1))
{var c__8632__auto___24215 = cljs.core.chunk_first.call(null,seq__24200_24214__$1);{
var G__24216 = cljs.core.chunk_rest.call(null,seq__24200_24214__$1);
var G__24217 = c__8632__auto___24215;
var G__24218 = cljs.core.count.call(null,c__8632__auto___24215);
var G__24219 = 0;
seq__24200_24204 = G__24216;
chunk__24201_24205 = G__24217;
count__24202_24206 = G__24218;
i__24203_24207 = G__24219;
continue;
}
} else
{var msg_24220 = cljs.core.first.call(null,seq__24200_24214__$1);console.log(msg_24220);
{
var G__24221 = cljs.core.next.call(null,seq__24200_24214__$1);
var G__24222 = null;
var G__24223 = 0;
var G__24224 = 0;
seq__24200_24204 = G__24221;
chunk__24201_24205 = G__24222;
count__24202_24206 = G__24223;
i__24203_24207 = G__24224;
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
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),100,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",817745103),(function (){var or__7884__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__7884__auto__))
{return or__7884__auto__;
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
var watch_and_reload__delegate = function (p__24225){var map__24227 = p__24225;var map__24227__$1 = ((cljs.core.seq_QMARK_.call(null,map__24227))?cljs.core.apply.call(null,cljs.core.hash_map,map__24227):map__24227);var opts = map__24227__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__24225 = null;if (arguments.length > 0) {
  p__24225 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__24225);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__24228){
var p__24225 = cljs.core.seq(arglist__24228);
return watch_and_reload__delegate(p__24225);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map
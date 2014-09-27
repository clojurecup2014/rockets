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
var log__delegate = function (p__14890,args){var map__14892 = p__14890;var map__14892__$1 = ((cljs.core.seq_QMARK_.call(null,map__14892))?cljs.core.apply.call(null,cljs.core.hash_map,map__14892):map__14892);var debug = cljs.core.get.call(null,map__14892__$1,new cljs.core.Keyword(null,"debug","debug",1109363141));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__14890,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__14890,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__14893){
var p__14890 = cljs.core.first(arglist__14893);
var args = cljs.core.rest(arglist__14893);
return log__delegate(p__14890,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__14894){var map__14896 = p__14894;var map__14896__$1 = ((cljs.core.seq_QMARK_.call(null,map__14896))?cljs.core.apply.call(null,cljs.core.hash_map,map__14896):map__14896);var websocket_url = cljs.core.get.call(null,map__14896__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return [cljs.core.str(url),cljs.core.str("?rel="),cljs.core.str((new Date()).getTime())].join('');
});
figwheel.client.js_reload = (function js_reload(p__14897,callback){var map__14899 = p__14897;var map__14899__$1 = ((cljs.core.seq_QMARK_.call(null,map__14899))?cljs.core.apply.call(null,cljs.core.hash_map,map__14899):map__14899);var msg = map__14899__$1;var dependency_file = cljs.core.get.call(null,map__14899__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",2750516784));var namespace = cljs.core.get.call(null,map__14899__$1,new cljs.core.Keyword(null,"namespace","namespace",2266122445));var request_url = cljs.core.get.call(null,map__14899__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));if(cljs.core.truth_((function (){var or__7881__auto__ = dependency_file;if(cljs.core.truth_(or__7881__auto__))
{return or__7881__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__14899,map__14899__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__14899,map__14899__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__14900,p__14901){var map__14904 = p__14900;var map__14904__$1 = ((cljs.core.seq_QMARK_.call(null,map__14904))?cljs.core.apply.call(null,cljs.core.hash_map,map__14904):map__14904);var opts = map__14904__$1;var url_rewriter = cljs.core.get.call(null,map__14904__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",538861174));var map__14905 = p__14901;var map__14905__$1 = ((cljs.core.seq_QMARK_.call(null,map__14905))?cljs.core.apply.call(null,cljs.core.hash_map,map__14905):map__14905);var d = map__14905__$1;var file = cljs.core.get.call(null,map__14905__$1,new cljs.core.Keyword(null,"file","file",1017047278));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2162835619),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__14906,p__14907){var map__14948 = p__14906;var map__14948__$1 = ((cljs.core.seq_QMARK_.call(null,map__14948))?cljs.core.apply.call(null,cljs.core.hash_map,map__14948):map__14948);var opts = map__14948__$1;var on_jsload = cljs.core.get.call(null,map__14948__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",817745103));var before_jsload = cljs.core.get.call(null,map__14948__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",3705046831));var map__14949 = p__14907;var map__14949__$1 = ((cljs.core.seq_QMARK_.call(null,map__14949))?cljs.core.apply.call(null,cljs.core.hash_map,map__14949):map__14949);var files = cljs.core.get.call(null,map__14949__$1,new cljs.core.Keyword(null,"files","files",1111338473));var c__11016__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11016__auto__,map__14948,map__14948__$1,opts,on_jsload,before_jsload,map__14949,map__14949__$1,files){
return (function (){var f__11017__auto__ = (function (){var switch__10952__auto__ = ((function (c__11016__auto__,map__14948,map__14948__$1,opts,on_jsload,before_jsload,map__14949,map__14949__$1,files){
return (function (state_14971){var state_val_14972 = (state_14971[1]);if((state_val_14972 === 6))
{var inst_14954 = (state_14971[7]);var inst_14963 = (state_14971[2]);var inst_14964 = [inst_14954];var inst_14965 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_14964,null));var inst_14966 = cljs.core.apply.call(null,on_jsload,inst_14965);var state_14971__$1 = (function (){var statearr_14973 = state_14971;(statearr_14973[8] = inst_14963);
return statearr_14973;
})();var statearr_14974_14988 = state_14971__$1;(statearr_14974_14988[2] = inst_14966);
(statearr_14974_14988[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14972 === 5))
{var inst_14969 = (state_14971[2]);var state_14971__$1 = state_14971;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14971__$1,inst_14969);
} else
{if((state_val_14972 === 4))
{var state_14971__$1 = state_14971;var statearr_14975_14989 = state_14971__$1;(statearr_14975_14989[2] = null);
(statearr_14975_14989[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14972 === 3))
{var inst_14954 = (state_14971[7]);var inst_14957 = console.debug("Figwheel: loaded these files");var inst_14958 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",1017047278),inst_14954);var inst_14959 = cljs.core.prn_str.call(null,inst_14958);var inst_14960 = console.log(inst_14959);var inst_14961 = cljs.core.async.timeout.call(null,10);var state_14971__$1 = (function (){var statearr_14976 = state_14971;(statearr_14976[9] = inst_14957);
(statearr_14976[10] = inst_14960);
return statearr_14976;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14971__$1,6,inst_14961);
} else
{if((state_val_14972 === 2))
{var inst_14954 = (state_14971[7]);var inst_14954__$1 = (state_14971[2]);var inst_14955 = cljs.core.not_empty.call(null,inst_14954__$1);var state_14971__$1 = (function (){var statearr_14977 = state_14971;(statearr_14977[7] = inst_14954__$1);
return statearr_14977;
})();if(cljs.core.truth_(inst_14955))
{var statearr_14978_14990 = state_14971__$1;(statearr_14978_14990[1] = 3);
} else
{var statearr_14979_14991 = state_14971__$1;(statearr_14979_14991[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14972 === 1))
{var inst_14950 = before_jsload.call(null,files);var inst_14951 = figwheel.client.add_request_urls.call(null,opts,files);var inst_14952 = figwheel.client.load_all_js_files.call(null,inst_14951);var state_14971__$1 = (function (){var statearr_14980 = state_14971;(statearr_14980[11] = inst_14950);
return statearr_14980;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14971__$1,2,inst_14952);
} else
{return null;
}
}
}
}
}
}
});})(c__11016__auto__,map__14948,map__14948__$1,opts,on_jsload,before_jsload,map__14949,map__14949__$1,files))
;return ((function (switch__10952__auto__,c__11016__auto__,map__14948,map__14948__$1,opts,on_jsload,before_jsload,map__14949,map__14949__$1,files){
return (function() {
var state_machine__10953__auto__ = null;
var state_machine__10953__auto____0 = (function (){var statearr_14984 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14984[0] = state_machine__10953__auto__);
(statearr_14984[1] = 1);
return statearr_14984;
});
var state_machine__10953__auto____1 = (function (state_14971){while(true){
var ret_value__10954__auto__ = (function (){try{while(true){
var result__10955__auto__ = switch__10952__auto__.call(null,state_14971);if(cljs.core.keyword_identical_QMARK_.call(null,result__10955__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10955__auto__;
}
break;
}
}catch (e14985){if((e14985 instanceof Object))
{var ex__10956__auto__ = e14985;var statearr_14986_14992 = state_14971;(statearr_14986_14992[5] = ex__10956__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14971);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14985;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10954__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14993 = state_14971;
state_14971 = G__14993;
continue;
}
} else
{return ret_value__10954__auto__;
}
break;
}
});
state_machine__10953__auto__ = function(state_14971){
switch(arguments.length){
case 0:
return state_machine__10953__auto____0.call(this);
case 1:
return state_machine__10953__auto____1.call(this,state_14971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10953__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10953__auto____0;
state_machine__10953__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10953__auto____1;
return state_machine__10953__auto__;
})()
;})(switch__10952__auto__,c__11016__auto__,map__14948,map__14948__$1,opts,on_jsload,before_jsload,map__14949,map__14949__$1,files))
})();var state__11018__auto__ = (function (){var statearr_14987 = f__11017__auto__.call(null);(statearr_14987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11016__auto__);
return statearr_14987;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11018__auto__);
});})(c__11016__auto__,map__14948,map__14948__$1,opts,on_jsload,before_jsload,map__14949,map__14949__$1,files))
);
return c__11016__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__14994,link_href){var map__14996 = p__14994;var map__14996__$1 = ((cljs.core.seq_QMARK_.call(null,map__14996))?cljs.core.apply.call(null,cljs.core.hash_map,map__14996):map__14996);var request_url = cljs.core.get.call(null,map__14996__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));var file = cljs.core.get.call(null,map__14996__$1,new cljs.core.Keyword(null,"file","file",1017047278));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
var c__11016__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11016__auto__,parent){
return (function (){var f__11017__auto__ = (function (){var switch__10952__auto__ = ((function (c__11016__auto__,parent){
return (function (state_15017){var state_val_15018 = (state_15017[1]);if((state_val_15018 === 2))
{var inst_15014 = (state_15017[2]);var inst_15015 = parent.removeChild(orig_link);var state_15017__$1 = (function (){var statearr_15019 = state_15017;(statearr_15019[7] = inst_15014);
return statearr_15019;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15017__$1,inst_15015);
} else
{if((state_val_15018 === 1))
{var inst_15012 = cljs.core.async.timeout.call(null,200);var state_15017__$1 = state_15017;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15017__$1,2,inst_15012);
} else
{return null;
}
}
});})(c__11016__auto__,parent))
;return ((function (switch__10952__auto__,c__11016__auto__,parent){
return (function() {
var state_machine__10953__auto__ = null;
var state_machine__10953__auto____0 = (function (){var statearr_15023 = [null,null,null,null,null,null,null,null];(statearr_15023[0] = state_machine__10953__auto__);
(statearr_15023[1] = 1);
return statearr_15023;
});
var state_machine__10953__auto____1 = (function (state_15017){while(true){
var ret_value__10954__auto__ = (function (){try{while(true){
var result__10955__auto__ = switch__10952__auto__.call(null,state_15017);if(cljs.core.keyword_identical_QMARK_.call(null,result__10955__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10955__auto__;
}
break;
}
}catch (e15024){if((e15024 instanceof Object))
{var ex__10956__auto__ = e15024;var statearr_15025_15027 = state_15017;(statearr_15025_15027[5] = ex__10956__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15017);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15024;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10954__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15028 = state_15017;
state_15017 = G__15028;
continue;
}
} else
{return ret_value__10954__auto__;
}
break;
}
});
state_machine__10953__auto__ = function(state_15017){
switch(arguments.length){
case 0:
return state_machine__10953__auto____0.call(this);
case 1:
return state_machine__10953__auto____1.call(this,state_15017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10953__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10953__auto____0;
state_machine__10953__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10953__auto____1;
return state_machine__10953__auto__;
})()
;})(switch__10952__auto__,c__11016__auto__,parent))
})();var state__11018__auto__ = (function (){var statearr_15026 = f__11017__auto__.call(null);(statearr_15026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11016__auto__);
return statearr_15026;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11018__auto__);
});})(c__11016__auto__,parent))
);
return c__11016__auto__;
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
figwheel.client.reload_css_file = (function reload_css_file(p__15029){var map__15031 = p__15029;var map__15031__$1 = ((cljs.core.seq_QMARK_.call(null,map__15031))?cljs.core.apply.call(null,cljs.core.hash_map,map__15031):map__15031);var f_data = map__15031__$1;var request_url = cljs.core.get.call(null,map__15031__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));var file = cljs.core.get.call(null,map__15031__$1,new cljs.core.Keyword(null,"file","file",1017047278));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__15032,files_msg){var map__15054 = p__15032;var map__15054__$1 = ((cljs.core.seq_QMARK_.call(null,map__15054))?cljs.core.apply.call(null,cljs.core.hash_map,map__15054):map__15054);var opts = map__15054__$1;var on_cssload = cljs.core.get.call(null,map__15054__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1611735789));var seq__15055_15075 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__15056_15076 = null;var count__15057_15077 = 0;var i__15058_15078 = 0;while(true){
if((i__15058_15078 < count__15057_15077))
{var f_15079 = cljs.core._nth.call(null,chunk__15056_15076,i__15058_15078);figwheel.client.reload_css_file.call(null,f_15079);
{
var G__15080 = seq__15055_15075;
var G__15081 = chunk__15056_15076;
var G__15082 = count__15057_15077;
var G__15083 = (i__15058_15078 + 1);
seq__15055_15075 = G__15080;
chunk__15056_15076 = G__15081;
count__15057_15077 = G__15082;
i__15058_15078 = G__15083;
continue;
}
} else
{var temp__4126__auto___15084 = cljs.core.seq.call(null,seq__15055_15075);if(temp__4126__auto___15084)
{var seq__15055_15085__$1 = temp__4126__auto___15084;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15055_15085__$1))
{var c__8629__auto___15086 = cljs.core.chunk_first.call(null,seq__15055_15085__$1);{
var G__15087 = cljs.core.chunk_rest.call(null,seq__15055_15085__$1);
var G__15088 = c__8629__auto___15086;
var G__15089 = cljs.core.count.call(null,c__8629__auto___15086);
var G__15090 = 0;
seq__15055_15075 = G__15087;
chunk__15056_15076 = G__15088;
count__15057_15077 = G__15089;
i__15058_15078 = G__15090;
continue;
}
} else
{var f_15091 = cljs.core.first.call(null,seq__15055_15085__$1);figwheel.client.reload_css_file.call(null,f_15091);
{
var G__15092 = cljs.core.next.call(null,seq__15055_15085__$1);
var G__15093 = null;
var G__15094 = 0;
var G__15095 = 0;
seq__15055_15075 = G__15092;
chunk__15056_15076 = G__15093;
count__15057_15077 = G__15094;
i__15058_15078 = G__15095;
continue;
}
}
} else
{}
}
break;
}
var c__11016__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11016__auto__,map__15054,map__15054__$1,opts,on_cssload){
return (function (){var f__11017__auto__ = (function (){var switch__10952__auto__ = ((function (c__11016__auto__,map__15054,map__15054__$1,opts,on_cssload){
return (function (state_15065){var state_val_15066 = (state_15065[1]);if((state_val_15066 === 2))
{var inst_15061 = (state_15065[2]);var inst_15062 = new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_15063 = on_cssload.call(null,inst_15062);var state_15065__$1 = (function (){var statearr_15067 = state_15065;(statearr_15067[7] = inst_15061);
return statearr_15067;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15065__$1,inst_15063);
} else
{if((state_val_15066 === 1))
{var inst_15059 = cljs.core.async.timeout.call(null,100);var state_15065__$1 = state_15065;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15065__$1,2,inst_15059);
} else
{return null;
}
}
});})(c__11016__auto__,map__15054,map__15054__$1,opts,on_cssload))
;return ((function (switch__10952__auto__,c__11016__auto__,map__15054,map__15054__$1,opts,on_cssload){
return (function() {
var state_machine__10953__auto__ = null;
var state_machine__10953__auto____0 = (function (){var statearr_15071 = [null,null,null,null,null,null,null,null];(statearr_15071[0] = state_machine__10953__auto__);
(statearr_15071[1] = 1);
return statearr_15071;
});
var state_machine__10953__auto____1 = (function (state_15065){while(true){
var ret_value__10954__auto__ = (function (){try{while(true){
var result__10955__auto__ = switch__10952__auto__.call(null,state_15065);if(cljs.core.keyword_identical_QMARK_.call(null,result__10955__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10955__auto__;
}
break;
}
}catch (e15072){if((e15072 instanceof Object))
{var ex__10956__auto__ = e15072;var statearr_15073_15096 = state_15065;(statearr_15073_15096[5] = ex__10956__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15065);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15072;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10954__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15097 = state_15065;
state_15065 = G__15097;
continue;
}
} else
{return ret_value__10954__auto__;
}
break;
}
});
state_machine__10953__auto__ = function(state_15065){
switch(arguments.length){
case 0:
return state_machine__10953__auto____0.call(this);
case 1:
return state_machine__10953__auto____1.call(this,state_15065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10953__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10953__auto____0;
state_machine__10953__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10953__auto____1;
return state_machine__10953__auto__;
})()
;})(switch__10952__auto__,c__11016__auto__,map__15054,map__15054__$1,opts,on_cssload))
})();var state__11018__auto__ = (function (){var statearr_15074 = f__11017__auto__.call(null);(statearr_15074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11016__auto__);
return statearr_15074;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11018__auto__);
});})(c__11016__auto__,map__15054,map__15054__$1,opts,on_cssload))
);
return c__11016__auto__;
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__15098){var map__15103 = p__15098;var map__15103__$1 = ((cljs.core.seq_QMARK_.call(null,map__15103))?cljs.core.apply.call(null,cljs.core.hash_map,map__15103):map__15103);var opts = map__15103__$1;var on_compile_fail = cljs.core.get.call(null,map__15103__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",846779160));var jsload_callback = cljs.core.get.call(null,map__15103__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989));var websocket_url = cljs.core.get.call(null,map__15103__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));var retry_count = cljs.core.get.call(null,map__15103__$1,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__15103,map__15103__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__15104 = cljs.core._EQ_;var expr__15105 = new cljs.core.Keyword(null,"msg-name","msg-name",3979112649).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__15104.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",2807270608),expr__15105)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__15104.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",1058553478),expr__15105)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__15104.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",630802569),expr__15105)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__15103,map__15103__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__15103,map__15103__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__15103,map__15103__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__15103,map__15103__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > 0))
{return window.setTimeout(((function (socket,map__15103,map__15103__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),(retry_count - 1)));
});})(socket,map__15103,map__15103__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,2000);
} else
{return null;
}
});})(socket,map__15103,map__15103__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__15103,map__15103__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__15103,map__15103__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj15110 = {"detail":url};return obj15110;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.Keyword(null,"class","class",1108647146)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",1108338651).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__15111){var map__15113 = p__15111;var map__15113__$1 = ((cljs.core.seq_QMARK_.call(null,map__15113))?cljs.core.apply.call(null,cljs.core.hash_map,map__15113):map__15113);var class$ = cljs.core.get.call(null,map__15113__$1,new cljs.core.Keyword(null,"class","class",1108647146));var message = cljs.core.get.call(null,map__15113__$1,new cljs.core.Keyword(null,"message","message",1968829305));return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__15114){var map__15120 = p__15114;var map__15120__$1 = ((cljs.core.seq_QMARK_.call(null,map__15120))?cljs.core.apply.call(null,cljs.core.hash_map,map__15120):map__15120);var ed = map__15120__$1;var exception_data = cljs.core.get.call(null,map__15120__$1,new cljs.core.Keyword(null,"exception-data","exception-data",922291674));var formatted_exception = cljs.core.get.call(null,map__15120__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",1408867312));console.debug("Figwheel: Compile Exception");
var seq__15121_15125 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__15122_15126 = null;var count__15123_15127 = 0;var i__15124_15128 = 0;while(true){
if((i__15124_15128 < count__15123_15127))
{var msg_15129 = cljs.core._nth.call(null,chunk__15122_15126,i__15124_15128);console.log(msg_15129);
{
var G__15130 = seq__15121_15125;
var G__15131 = chunk__15122_15126;
var G__15132 = count__15123_15127;
var G__15133 = (i__15124_15128 + 1);
seq__15121_15125 = G__15130;
chunk__15122_15126 = G__15131;
count__15123_15127 = G__15132;
i__15124_15128 = G__15133;
continue;
}
} else
{var temp__4126__auto___15134 = cljs.core.seq.call(null,seq__15121_15125);if(temp__4126__auto___15134)
{var seq__15121_15135__$1 = temp__4126__auto___15134;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15121_15135__$1))
{var c__8629__auto___15136 = cljs.core.chunk_first.call(null,seq__15121_15135__$1);{
var G__15137 = cljs.core.chunk_rest.call(null,seq__15121_15135__$1);
var G__15138 = c__8629__auto___15136;
var G__15139 = cljs.core.count.call(null,c__8629__auto___15136);
var G__15140 = 0;
seq__15121_15125 = G__15137;
chunk__15122_15126 = G__15138;
count__15123_15127 = G__15139;
i__15124_15128 = G__15140;
continue;
}
} else
{var msg_15141 = cljs.core.first.call(null,seq__15121_15135__$1);console.log(msg_15141);
{
var G__15142 = cljs.core.next.call(null,seq__15121_15135__$1);
var G__15143 = null;
var G__15144 = 0;
var G__15145 = 0;
seq__15121_15125 = G__15142;
chunk__15122_15126 = G__15143;
count__15123_15127 = G__15144;
i__15124_15128 = G__15145;
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
var watch_and_reload__delegate = function (p__15146){var map__15148 = p__15146;var map__15148__$1 = ((cljs.core.seq_QMARK_.call(null,map__15148))?cljs.core.apply.call(null,cljs.core.hash_map,map__15148):map__15148);var opts = map__15148__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__15146 = null;if (arguments.length > 0) {
  p__15146 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__15146);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__15149){
var p__15146 = cljs.core.seq(arglist__15149);
return watch_and_reload__delegate(p__15146);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map
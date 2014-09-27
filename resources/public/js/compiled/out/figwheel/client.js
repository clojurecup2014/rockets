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
var log__delegate = function (p__13899,args){var map__13901 = p__13899;var map__13901__$1 = ((cljs.core.seq_QMARK_.call(null,map__13901))?cljs.core.apply.call(null,cljs.core.hash_map,map__13901):map__13901);var debug = cljs.core.get.call(null,map__13901__$1,new cljs.core.Keyword(null,"debug","debug",1109363141));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__13899,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__13899,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__13902){
var p__13899 = cljs.core.first(arglist__13902);
var args = cljs.core.rest(arglist__13902);
return log__delegate(p__13899,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__13903){var map__13905 = p__13903;var map__13905__$1 = ((cljs.core.seq_QMARK_.call(null,map__13905))?cljs.core.apply.call(null,cljs.core.hash_map,map__13905):map__13905);var websocket_url = cljs.core.get.call(null,map__13905__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return [cljs.core.str(url),cljs.core.str("?rel="),cljs.core.str((new Date()).getTime())].join('');
});
figwheel.client.js_reload = (function js_reload(p__13906,callback){var map__13908 = p__13906;var map__13908__$1 = ((cljs.core.seq_QMARK_.call(null,map__13908))?cljs.core.apply.call(null,cljs.core.hash_map,map__13908):map__13908);var msg = map__13908__$1;var dependency_file = cljs.core.get.call(null,map__13908__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",2750516784));var namespace = cljs.core.get.call(null,map__13908__$1,new cljs.core.Keyword(null,"namespace","namespace",2266122445));var request_url = cljs.core.get.call(null,map__13908__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));if(cljs.core.truth_((function (){var or__7881__auto__ = dependency_file;if(cljs.core.truth_(or__7881__auto__))
{return or__7881__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__13908,map__13908__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__13908,map__13908__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__13909,p__13910){var map__13913 = p__13909;var map__13913__$1 = ((cljs.core.seq_QMARK_.call(null,map__13913))?cljs.core.apply.call(null,cljs.core.hash_map,map__13913):map__13913);var opts = map__13913__$1;var url_rewriter = cljs.core.get.call(null,map__13913__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",538861174));var map__13914 = p__13910;var map__13914__$1 = ((cljs.core.seq_QMARK_.call(null,map__13914))?cljs.core.apply.call(null,cljs.core.hash_map,map__13914):map__13914);var d = map__13914__$1;var file = cljs.core.get.call(null,map__13914__$1,new cljs.core.Keyword(null,"file","file",1017047278));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2162835619),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__13915,p__13916){var map__13957 = p__13915;var map__13957__$1 = ((cljs.core.seq_QMARK_.call(null,map__13957))?cljs.core.apply.call(null,cljs.core.hash_map,map__13957):map__13957);var opts = map__13957__$1;var on_jsload = cljs.core.get.call(null,map__13957__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",817745103));var before_jsload = cljs.core.get.call(null,map__13957__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",3705046831));var map__13958 = p__13916;var map__13958__$1 = ((cljs.core.seq_QMARK_.call(null,map__13958))?cljs.core.apply.call(null,cljs.core.hash_map,map__13958):map__13958);var files = cljs.core.get.call(null,map__13958__$1,new cljs.core.Keyword(null,"files","files",1111338473));var c__10230__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10230__auto__,map__13957,map__13957__$1,opts,on_jsload,before_jsload,map__13958,map__13958__$1,files){
return (function (){var f__10231__auto__ = (function (){var switch__10166__auto__ = ((function (c__10230__auto__,map__13957,map__13957__$1,opts,on_jsload,before_jsload,map__13958,map__13958__$1,files){
return (function (state_13980){var state_val_13981 = (state_13980[1]);if((state_val_13981 === 6))
{var inst_13963 = (state_13980[7]);var inst_13972 = (state_13980[2]);var inst_13973 = [inst_13963];var inst_13974 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_13973,null));var inst_13975 = cljs.core.apply.call(null,on_jsload,inst_13974);var state_13980__$1 = (function (){var statearr_13982 = state_13980;(statearr_13982[8] = inst_13972);
return statearr_13982;
})();var statearr_13983_13997 = state_13980__$1;(statearr_13983_13997[2] = inst_13975);
(statearr_13983_13997[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13981 === 5))
{var inst_13978 = (state_13980[2]);var state_13980__$1 = state_13980;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13980__$1,inst_13978);
} else
{if((state_val_13981 === 4))
{var state_13980__$1 = state_13980;var statearr_13984_13998 = state_13980__$1;(statearr_13984_13998[2] = null);
(statearr_13984_13998[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13981 === 3))
{var inst_13963 = (state_13980[7]);var inst_13966 = console.debug("Figwheel: loaded these files");var inst_13967 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",1017047278),inst_13963);var inst_13968 = cljs.core.prn_str.call(null,inst_13967);var inst_13969 = console.log(inst_13968);var inst_13970 = cljs.core.async.timeout.call(null,10);var state_13980__$1 = (function (){var statearr_13985 = state_13980;(statearr_13985[9] = inst_13966);
(statearr_13985[10] = inst_13969);
return statearr_13985;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13980__$1,6,inst_13970);
} else
{if((state_val_13981 === 2))
{var inst_13963 = (state_13980[7]);var inst_13963__$1 = (state_13980[2]);var inst_13964 = cljs.core.not_empty.call(null,inst_13963__$1);var state_13980__$1 = (function (){var statearr_13986 = state_13980;(statearr_13986[7] = inst_13963__$1);
return statearr_13986;
})();if(cljs.core.truth_(inst_13964))
{var statearr_13987_13999 = state_13980__$1;(statearr_13987_13999[1] = 3);
} else
{var statearr_13988_14000 = state_13980__$1;(statearr_13988_14000[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13981 === 1))
{var inst_13959 = before_jsload.call(null,files);var inst_13960 = figwheel.client.add_request_urls.call(null,opts,files);var inst_13961 = figwheel.client.load_all_js_files.call(null,inst_13960);var state_13980__$1 = (function (){var statearr_13989 = state_13980;(statearr_13989[11] = inst_13959);
return statearr_13989;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13980__$1,2,inst_13961);
} else
{return null;
}
}
}
}
}
}
});})(c__10230__auto__,map__13957,map__13957__$1,opts,on_jsload,before_jsload,map__13958,map__13958__$1,files))
;return ((function (switch__10166__auto__,c__10230__auto__,map__13957,map__13957__$1,opts,on_jsload,before_jsload,map__13958,map__13958__$1,files){
return (function() {
var state_machine__10167__auto__ = null;
var state_machine__10167__auto____0 = (function (){var statearr_13993 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13993[0] = state_machine__10167__auto__);
(statearr_13993[1] = 1);
return statearr_13993;
});
var state_machine__10167__auto____1 = (function (state_13980){while(true){
var ret_value__10168__auto__ = (function (){try{while(true){
var result__10169__auto__ = switch__10166__auto__.call(null,state_13980);if(cljs.core.keyword_identical_QMARK_.call(null,result__10169__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10169__auto__;
}
break;
}
}catch (e13994){if((e13994 instanceof Object))
{var ex__10170__auto__ = e13994;var statearr_13995_14001 = state_13980;(statearr_13995_14001[5] = ex__10170__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13980);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13994;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10168__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14002 = state_13980;
state_13980 = G__14002;
continue;
}
} else
{return ret_value__10168__auto__;
}
break;
}
});
state_machine__10167__auto__ = function(state_13980){
switch(arguments.length){
case 0:
return state_machine__10167__auto____0.call(this);
case 1:
return state_machine__10167__auto____1.call(this,state_13980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10167__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10167__auto____0;
state_machine__10167__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10167__auto____1;
return state_machine__10167__auto__;
})()
;})(switch__10166__auto__,c__10230__auto__,map__13957,map__13957__$1,opts,on_jsload,before_jsload,map__13958,map__13958__$1,files))
})();var state__10232__auto__ = (function (){var statearr_13996 = f__10231__auto__.call(null);(statearr_13996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10230__auto__);
return statearr_13996;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10232__auto__);
});})(c__10230__auto__,map__13957,map__13957__$1,opts,on_jsload,before_jsload,map__13958,map__13958__$1,files))
);
return c__10230__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__14003,link_href){var map__14005 = p__14003;var map__14005__$1 = ((cljs.core.seq_QMARK_.call(null,map__14005))?cljs.core.apply.call(null,cljs.core.hash_map,map__14005):map__14005);var request_url = cljs.core.get.call(null,map__14005__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));var file = cljs.core.get.call(null,map__14005__$1,new cljs.core.Keyword(null,"file","file",1017047278));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
var c__10230__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10230__auto__,parent){
return (function (){var f__10231__auto__ = (function (){var switch__10166__auto__ = ((function (c__10230__auto__,parent){
return (function (state_14026){var state_val_14027 = (state_14026[1]);if((state_val_14027 === 2))
{var inst_14023 = (state_14026[2]);var inst_14024 = parent.removeChild(orig_link);var state_14026__$1 = (function (){var statearr_14028 = state_14026;(statearr_14028[7] = inst_14023);
return statearr_14028;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14026__$1,inst_14024);
} else
{if((state_val_14027 === 1))
{var inst_14021 = cljs.core.async.timeout.call(null,200);var state_14026__$1 = state_14026;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14026__$1,2,inst_14021);
} else
{return null;
}
}
});})(c__10230__auto__,parent))
;return ((function (switch__10166__auto__,c__10230__auto__,parent){
return (function() {
var state_machine__10167__auto__ = null;
var state_machine__10167__auto____0 = (function (){var statearr_14032 = [null,null,null,null,null,null,null,null];(statearr_14032[0] = state_machine__10167__auto__);
(statearr_14032[1] = 1);
return statearr_14032;
});
var state_machine__10167__auto____1 = (function (state_14026){while(true){
var ret_value__10168__auto__ = (function (){try{while(true){
var result__10169__auto__ = switch__10166__auto__.call(null,state_14026);if(cljs.core.keyword_identical_QMARK_.call(null,result__10169__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10169__auto__;
}
break;
}
}catch (e14033){if((e14033 instanceof Object))
{var ex__10170__auto__ = e14033;var statearr_14034_14036 = state_14026;(statearr_14034_14036[5] = ex__10170__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14026);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14033;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10168__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14037 = state_14026;
state_14026 = G__14037;
continue;
}
} else
{return ret_value__10168__auto__;
}
break;
}
});
state_machine__10167__auto__ = function(state_14026){
switch(arguments.length){
case 0:
return state_machine__10167__auto____0.call(this);
case 1:
return state_machine__10167__auto____1.call(this,state_14026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10167__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10167__auto____0;
state_machine__10167__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10167__auto____1;
return state_machine__10167__auto__;
})()
;})(switch__10166__auto__,c__10230__auto__,parent))
})();var state__10232__auto__ = (function (){var statearr_14035 = f__10231__auto__.call(null);(statearr_14035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10230__auto__);
return statearr_14035;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10232__auto__);
});})(c__10230__auto__,parent))
);
return c__10230__auto__;
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
figwheel.client.reload_css_file = (function reload_css_file(p__14038){var map__14040 = p__14038;var map__14040__$1 = ((cljs.core.seq_QMARK_.call(null,map__14040))?cljs.core.apply.call(null,cljs.core.hash_map,map__14040):map__14040);var f_data = map__14040__$1;var request_url = cljs.core.get.call(null,map__14040__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));var file = cljs.core.get.call(null,map__14040__$1,new cljs.core.Keyword(null,"file","file",1017047278));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__14041,files_msg){var map__14063 = p__14041;var map__14063__$1 = ((cljs.core.seq_QMARK_.call(null,map__14063))?cljs.core.apply.call(null,cljs.core.hash_map,map__14063):map__14063);var opts = map__14063__$1;var on_cssload = cljs.core.get.call(null,map__14063__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1611735789));var seq__14064_14084 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__14065_14085 = null;var count__14066_14086 = 0;var i__14067_14087 = 0;while(true){
if((i__14067_14087 < count__14066_14086))
{var f_14088 = cljs.core._nth.call(null,chunk__14065_14085,i__14067_14087);figwheel.client.reload_css_file.call(null,f_14088);
{
var G__14089 = seq__14064_14084;
var G__14090 = chunk__14065_14085;
var G__14091 = count__14066_14086;
var G__14092 = (i__14067_14087 + 1);
seq__14064_14084 = G__14089;
chunk__14065_14085 = G__14090;
count__14066_14086 = G__14091;
i__14067_14087 = G__14092;
continue;
}
} else
{var temp__4126__auto___14093 = cljs.core.seq.call(null,seq__14064_14084);if(temp__4126__auto___14093)
{var seq__14064_14094__$1 = temp__4126__auto___14093;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14064_14094__$1))
{var c__8629__auto___14095 = cljs.core.chunk_first.call(null,seq__14064_14094__$1);{
var G__14096 = cljs.core.chunk_rest.call(null,seq__14064_14094__$1);
var G__14097 = c__8629__auto___14095;
var G__14098 = cljs.core.count.call(null,c__8629__auto___14095);
var G__14099 = 0;
seq__14064_14084 = G__14096;
chunk__14065_14085 = G__14097;
count__14066_14086 = G__14098;
i__14067_14087 = G__14099;
continue;
}
} else
{var f_14100 = cljs.core.first.call(null,seq__14064_14094__$1);figwheel.client.reload_css_file.call(null,f_14100);
{
var G__14101 = cljs.core.next.call(null,seq__14064_14094__$1);
var G__14102 = null;
var G__14103 = 0;
var G__14104 = 0;
seq__14064_14084 = G__14101;
chunk__14065_14085 = G__14102;
count__14066_14086 = G__14103;
i__14067_14087 = G__14104;
continue;
}
}
} else
{}
}
break;
}
var c__10230__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10230__auto__,map__14063,map__14063__$1,opts,on_cssload){
return (function (){var f__10231__auto__ = (function (){var switch__10166__auto__ = ((function (c__10230__auto__,map__14063,map__14063__$1,opts,on_cssload){
return (function (state_14074){var state_val_14075 = (state_14074[1]);if((state_val_14075 === 2))
{var inst_14070 = (state_14074[2]);var inst_14071 = new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_14072 = on_cssload.call(null,inst_14071);var state_14074__$1 = (function (){var statearr_14076 = state_14074;(statearr_14076[7] = inst_14070);
return statearr_14076;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14074__$1,inst_14072);
} else
{if((state_val_14075 === 1))
{var inst_14068 = cljs.core.async.timeout.call(null,100);var state_14074__$1 = state_14074;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14074__$1,2,inst_14068);
} else
{return null;
}
}
});})(c__10230__auto__,map__14063,map__14063__$1,opts,on_cssload))
;return ((function (switch__10166__auto__,c__10230__auto__,map__14063,map__14063__$1,opts,on_cssload){
return (function() {
var state_machine__10167__auto__ = null;
var state_machine__10167__auto____0 = (function (){var statearr_14080 = [null,null,null,null,null,null,null,null];(statearr_14080[0] = state_machine__10167__auto__);
(statearr_14080[1] = 1);
return statearr_14080;
});
var state_machine__10167__auto____1 = (function (state_14074){while(true){
var ret_value__10168__auto__ = (function (){try{while(true){
var result__10169__auto__ = switch__10166__auto__.call(null,state_14074);if(cljs.core.keyword_identical_QMARK_.call(null,result__10169__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10169__auto__;
}
break;
}
}catch (e14081){if((e14081 instanceof Object))
{var ex__10170__auto__ = e14081;var statearr_14082_14105 = state_14074;(statearr_14082_14105[5] = ex__10170__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14074);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14081;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10168__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14106 = state_14074;
state_14074 = G__14106;
continue;
}
} else
{return ret_value__10168__auto__;
}
break;
}
});
state_machine__10167__auto__ = function(state_14074){
switch(arguments.length){
case 0:
return state_machine__10167__auto____0.call(this);
case 1:
return state_machine__10167__auto____1.call(this,state_14074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10167__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10167__auto____0;
state_machine__10167__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10167__auto____1;
return state_machine__10167__auto__;
})()
;})(switch__10166__auto__,c__10230__auto__,map__14063,map__14063__$1,opts,on_cssload))
})();var state__10232__auto__ = (function (){var statearr_14083 = f__10231__auto__.call(null);(statearr_14083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10230__auto__);
return statearr_14083;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10232__auto__);
});})(c__10230__auto__,map__14063,map__14063__$1,opts,on_cssload))
);
return c__10230__auto__;
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__14107){var map__14112 = p__14107;var map__14112__$1 = ((cljs.core.seq_QMARK_.call(null,map__14112))?cljs.core.apply.call(null,cljs.core.hash_map,map__14112):map__14112);var opts = map__14112__$1;var on_compile_fail = cljs.core.get.call(null,map__14112__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",846779160));var jsload_callback = cljs.core.get.call(null,map__14112__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989));var websocket_url = cljs.core.get.call(null,map__14112__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));var retry_count = cljs.core.get.call(null,map__14112__$1,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__14112,map__14112__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__14113 = cljs.core._EQ_;var expr__14114 = new cljs.core.Keyword(null,"msg-name","msg-name",3979112649).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__14113.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",2807270608),expr__14114)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__14113.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",1058553478),expr__14114)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__14113.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",630802569),expr__14114)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__14112,map__14112__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__14112,map__14112__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__14112,map__14112__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__14112,map__14112__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > 0))
{return window.setTimeout(((function (socket,map__14112,map__14112__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),(retry_count - 1)));
});})(socket,map__14112,map__14112__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,2000);
} else
{return null;
}
});})(socket,map__14112,map__14112__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__14112,map__14112__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__14112,map__14112__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj14119 = {"detail":url};return obj14119;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.Keyword(null,"class","class",1108647146)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",1108338651).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__14120){var map__14122 = p__14120;var map__14122__$1 = ((cljs.core.seq_QMARK_.call(null,map__14122))?cljs.core.apply.call(null,cljs.core.hash_map,map__14122):map__14122);var class$ = cljs.core.get.call(null,map__14122__$1,new cljs.core.Keyword(null,"class","class",1108647146));var message = cljs.core.get.call(null,map__14122__$1,new cljs.core.Keyword(null,"message","message",1968829305));return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__14123){var map__14129 = p__14123;var map__14129__$1 = ((cljs.core.seq_QMARK_.call(null,map__14129))?cljs.core.apply.call(null,cljs.core.hash_map,map__14129):map__14129);var ed = map__14129__$1;var exception_data = cljs.core.get.call(null,map__14129__$1,new cljs.core.Keyword(null,"exception-data","exception-data",922291674));var formatted_exception = cljs.core.get.call(null,map__14129__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",1408867312));console.debug("Figwheel: Compile Exception");
var seq__14130_14134 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__14131_14135 = null;var count__14132_14136 = 0;var i__14133_14137 = 0;while(true){
if((i__14133_14137 < count__14132_14136))
{var msg_14138 = cljs.core._nth.call(null,chunk__14131_14135,i__14133_14137);console.log(msg_14138);
{
var G__14139 = seq__14130_14134;
var G__14140 = chunk__14131_14135;
var G__14141 = count__14132_14136;
var G__14142 = (i__14133_14137 + 1);
seq__14130_14134 = G__14139;
chunk__14131_14135 = G__14140;
count__14132_14136 = G__14141;
i__14133_14137 = G__14142;
continue;
}
} else
{var temp__4126__auto___14143 = cljs.core.seq.call(null,seq__14130_14134);if(temp__4126__auto___14143)
{var seq__14130_14144__$1 = temp__4126__auto___14143;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14130_14144__$1))
{var c__8629__auto___14145 = cljs.core.chunk_first.call(null,seq__14130_14144__$1);{
var G__14146 = cljs.core.chunk_rest.call(null,seq__14130_14144__$1);
var G__14147 = c__8629__auto___14145;
var G__14148 = cljs.core.count.call(null,c__8629__auto___14145);
var G__14149 = 0;
seq__14130_14134 = G__14146;
chunk__14131_14135 = G__14147;
count__14132_14136 = G__14148;
i__14133_14137 = G__14149;
continue;
}
} else
{var msg_14150 = cljs.core.first.call(null,seq__14130_14144__$1);console.log(msg_14150);
{
var G__14151 = cljs.core.next.call(null,seq__14130_14144__$1);
var G__14152 = null;
var G__14153 = 0;
var G__14154 = 0;
seq__14130_14134 = G__14151;
chunk__14131_14135 = G__14152;
count__14132_14136 = G__14153;
i__14133_14137 = G__14154;
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
var watch_and_reload__delegate = function (p__14155){var map__14157 = p__14155;var map__14157__$1 = ((cljs.core.seq_QMARK_.call(null,map__14157))?cljs.core.apply.call(null,cljs.core.hash_map,map__14157):map__14157);var opts = map__14157__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__14155 = null;if (arguments.length > 0) {
  p__14155 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__14155);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__14158){
var p__14155 = cljs.core.seq(arglist__14158);
return watch_and_reload__delegate(p__14155);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map
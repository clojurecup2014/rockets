// Compiled by ClojureScript 0.0-2202
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__23805__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__23804 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__23804,0,null);var body = cljs.core.nthnext.call(null,vec__23804,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__23805 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__23805__delegate.call(this,args);};
G__23805.cljs$lang$maxFixedArity = 0;
G__23805.cljs$lang$applyTo = (function (arglist__23806){
var args = cljs.core.seq(arglist__23806);
return G__23805__delegate(args);
});
G__23805.cljs$core$IFn$_invoke$arity$variadic = G__23805__delegate;
return G__23805;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__8601__auto__ = (function iter__23811(s__23812){return (new cljs.core.LazySeq(null,(function (){var s__23812__$1 = s__23812;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23812__$1);if(temp__4126__auto__)
{var s__23812__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23812__$2))
{var c__8599__auto__ = cljs.core.chunk_first.call(null,s__23812__$2);var size__8600__auto__ = cljs.core.count.call(null,c__8599__auto__);var b__23814 = cljs.core.chunk_buffer.call(null,size__8600__auto__);if((function (){var i__23813 = 0;while(true){
if((i__23813 < size__8600__auto__))
{var args = cljs.core._nth.call(null,c__8599__auto__,i__23813);cljs.core.chunk_append.call(null,b__23814,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__23815 = (i__23813 + 1);
i__23813 = G__23815;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23814),iter__23811.call(null,cljs.core.chunk_rest.call(null,s__23812__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23814),null);
}
} else
{var args = cljs.core.first.call(null,s__23812__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__23811.call(null,cljs.core.rest.call(null,s__23812__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8601__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__8601__auto__ = (function iter__23820(s__23821){return (new cljs.core.LazySeq(null,(function (){var s__23821__$1 = s__23821;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23821__$1);if(temp__4126__auto__)
{var s__23821__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23821__$2))
{var c__8599__auto__ = cljs.core.chunk_first.call(null,s__23821__$2);var size__8600__auto__ = cljs.core.count.call(null,c__8599__auto__);var b__23823 = cljs.core.chunk_buffer.call(null,size__8600__auto__);if((function (){var i__23822 = 0;while(true){
if((i__23822 < size__8600__auto__))
{var style = cljs.core._nth.call(null,c__8599__auto__,i__23822);cljs.core.chunk_append.call(null,b__23823,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__23824 = (i__23822 + 1);
i__23822 = G__23824;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23823),iter__23820.call(null,cljs.core.chunk_rest.call(null,s__23821__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23823),null);
}
} else
{var style = cljs.core.first.call(null,s__23821__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__23820.call(null,cljs.core.rest.call(null,s__23821__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8601__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__23825){
var styles = cljs.core.seq(arglist__23825);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to23826 = (function() { 
var link_to23826__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to23826 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to23826__delegate.call(this,url,content);};
link_to23826.cljs$lang$maxFixedArity = 1;
link_to23826.cljs$lang$applyTo = (function (arglist__23827){
var url = cljs.core.first(arglist__23827);
var content = cljs.core.rest(arglist__23827);
return link_to23826__delegate(url,content);
});
link_to23826.cljs$core$IFn$_invoke$arity$variadic = link_to23826__delegate;
return link_to23826;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to23826);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to23828 = (function() { 
var mail_to23828__delegate = function (e_mail,p__23829){var vec__23831 = p__23829;var content = cljs.core.nth.call(null,vec__23831,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__7884__auto__ = content;if(cljs.core.truth_(or__7884__auto__))
{return or__7884__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to23828 = function (e_mail,var_args){
var p__23829 = null;if (arguments.length > 1) {
  p__23829 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to23828__delegate.call(this,e_mail,p__23829);};
mail_to23828.cljs$lang$maxFixedArity = 1;
mail_to23828.cljs$lang$applyTo = (function (arglist__23832){
var e_mail = cljs.core.first(arglist__23832);
var p__23829 = cljs.core.rest(arglist__23832);
return mail_to23828__delegate(e_mail,p__23829);
});
mail_to23828.cljs$core$IFn$_invoke$arity$variadic = mail_to23828__delegate;
return mail_to23828;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to23828);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list23833 = (function unordered_list23833(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__8601__auto__ = (function iter__23838(s__23839){return (new cljs.core.LazySeq(null,(function (){var s__23839__$1 = s__23839;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23839__$1);if(temp__4126__auto__)
{var s__23839__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23839__$2))
{var c__8599__auto__ = cljs.core.chunk_first.call(null,s__23839__$2);var size__8600__auto__ = cljs.core.count.call(null,c__8599__auto__);var b__23841 = cljs.core.chunk_buffer.call(null,size__8600__auto__);if((function (){var i__23840 = 0;while(true){
if((i__23840 < size__8600__auto__))
{var x = cljs.core._nth.call(null,c__8599__auto__,i__23840);cljs.core.chunk_append.call(null,b__23841,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__23842 = (i__23840 + 1);
i__23840 = G__23842;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23841),iter__23838.call(null,cljs.core.chunk_rest.call(null,s__23839__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23841),null);
}
} else
{var x = cljs.core.first.call(null,s__23839__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__23838.call(null,cljs.core.rest.call(null,s__23839__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8601__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list23833);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list23843 = (function ordered_list23843(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__8601__auto__ = (function iter__23848(s__23849){return (new cljs.core.LazySeq(null,(function (){var s__23849__$1 = s__23849;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23849__$1);if(temp__4126__auto__)
{var s__23849__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23849__$2))
{var c__8599__auto__ = cljs.core.chunk_first.call(null,s__23849__$2);var size__8600__auto__ = cljs.core.count.call(null,c__8599__auto__);var b__23851 = cljs.core.chunk_buffer.call(null,size__8600__auto__);if((function (){var i__23850 = 0;while(true){
if((i__23850 < size__8600__auto__))
{var x = cljs.core._nth.call(null,c__8599__auto__,i__23850);cljs.core.chunk_append.call(null,b__23851,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__23852 = (i__23850 + 1);
i__23850 = G__23852;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23851),iter__23848.call(null,cljs.core.chunk_rest.call(null,s__23849__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23851),null);
}
} else
{var x = cljs.core.first.call(null,s__23849__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__23848.call(null,cljs.core.rest.call(null,s__23849__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8601__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list23843);
/**
* Create an image element.
*/
sablono.core.image23853 = (function() {
var image23853 = null;
var image23853__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image23853__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image23853 = function(src,alt){
switch(arguments.length){
case 1:
return image23853__1.call(this,src);
case 2:
return image23853__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image23853.cljs$core$IFn$_invoke$arity$1 = image23853__1;
image23853.cljs$core$IFn$_invoke$arity$2 = image23853__2;
return image23853;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image23853);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__23854_SHARP_,p2__23855_SHARP_){return [cljs.core.str(p1__23854_SHARP_),cljs.core.str("["),cljs.core.str(p2__23855_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__23856_SHARP_,p2__23857_SHARP_){return [cljs.core.str(p1__23856_SHARP_),cljs.core.str("-"),cljs.core.str(p2__23857_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field23858 = (function() {
var color_field23858 = null;
var color_field23858__1 = (function (name__9366__auto__){return color_field23858.call(null,name__9366__auto__,null);
});
var color_field23858__2 = (function (name__9366__auto__,value__9367__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1545688804,null))].join(''),name__9366__auto__,value__9367__auto__);
});
color_field23858 = function(name__9366__auto__,value__9367__auto__){
switch(arguments.length){
case 1:
return color_field23858__1.call(this,name__9366__auto__);
case 2:
return color_field23858__2.call(this,name__9366__auto__,value__9367__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field23858.cljs$core$IFn$_invoke$arity$1 = color_field23858__1;
color_field23858.cljs$core$IFn$_invoke$arity$2 = color_field23858__2;
return color_field23858;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field23858);
/**
* Creates a date input field.
*/
sablono.core.date_field23859 = (function() {
var date_field23859 = null;
var date_field23859__1 = (function (name__9366__auto__){return date_field23859.call(null,name__9366__auto__,null);
});
var date_field23859__2 = (function (name__9366__auto__,value__9367__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",-1637455513,null))].join(''),name__9366__auto__,value__9367__auto__);
});
date_field23859 = function(name__9366__auto__,value__9367__auto__){
switch(arguments.length){
case 1:
return date_field23859__1.call(this,name__9366__auto__);
case 2:
return date_field23859__2.call(this,name__9366__auto__,value__9367__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field23859.cljs$core$IFn$_invoke$arity$1 = date_field23859__1;
date_field23859.cljs$core$IFn$_invoke$arity$2 = date_field23859__2;
return date_field23859;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field23859);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field23860 = (function() {
var datetime_field23860 = null;
var datetime_field23860__1 = (function (name__9366__auto__){return datetime_field23860.call(null,name__9366__auto__,null);
});
var datetime_field23860__2 = (function (name__9366__auto__,value__9367__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))].join(''),name__9366__auto__,value__9367__auto__);
});
datetime_field23860 = function(name__9366__auto__,value__9367__auto__){
switch(arguments.length){
case 1:
return datetime_field23860__1.call(this,name__9366__auto__);
case 2:
return datetime_field23860__2.call(this,name__9366__auto__,value__9367__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field23860.cljs$core$IFn$_invoke$arity$1 = datetime_field23860__1;
datetime_field23860.cljs$core$IFn$_invoke$arity$2 = datetime_field23860__2;
return datetime_field23860;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field23860);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field23861 = (function() {
var datetime_local_field23861 = null;
var datetime_local_field23861__1 = (function (name__9366__auto__){return datetime_local_field23861.call(null,name__9366__auto__,null);
});
var datetime_local_field23861__2 = (function (name__9366__auto__,value__9367__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))].join(''),name__9366__auto__,value__9367__auto__);
});
datetime_local_field23861 = function(name__9366__auto__,value__9367__auto__){
switch(arguments.length){
case 1:
return datetime_local_field23861__1.call(this,name__9366__auto__);
case 2:
return datetime_local_field23861__2.call(this,name__9366__auto__,value__9367__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field23861.cljs$core$IFn$_invoke$arity$1 = datetime_local_field23861__1;
datetime_local_field23861.cljs$core$IFn$_invoke$arity$2 = datetime_local_field23861__2;
return datetime_local_field23861;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field23861);
/**
* Creates a email input field.
*/
sablono.core.email_field23862 = (function() {
var email_field23862 = null;
var email_field23862__1 = (function (name__9366__auto__){return email_field23862.call(null,name__9366__auto__,null);
});
var email_field23862__2 = (function (name__9366__auto__,value__9367__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1543912107,null))].join(''),name__9366__auto__,value__9367__auto__);
});
email_field23862 = function(name__9366__auto__,value__9367__auto__){
switch(arguments.length){
case 1:
return email_field23862__1.call(this,name__9366__auto__);
case 2:
return email_field23862__2.call(this,name__9366__auto__,value__9367__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field23862.cljs$core$IFn$_invoke$arity$1 = email_field23862__1;
email_field23862.cljs$core$IFn$_invoke$arity$2 = email_field23862__2;
return email_field23862;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field23862);
/**
* Creates a file input field.
*/
sablono.core.file_field23863 = (function() {
var file_field23863 = null;
var file_field23863__1 = (function (name__9366__auto__){return file_field23863.call(null,name__9366__auto__,null);
});
var file_field23863__2 = (function (name__9366__auto__,value__9367__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",-1637388491,null))].join(''),name__9366__auto__,value__9367__auto__);
});
file_field23863 = function(name__9366__auto__,value__9367__auto__){
switch(arguments.length){
case 1:
return file_field23863__1.call(this,name__9366__auto__);
case 2:
return file_field23863__2.call(this,name__9366__auto__,value__9367__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field23863.cljs$core$IFn$_invoke$arity$1 = file_field23863__1;
file_field23863.cljs$core$IFn$_invoke$arity$2 = file_field23863__2;
return file_field23863;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field23863);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field23864 = (function() {
var hidden_field23864 = null;
var hidden_field23864__1 = (function (name__9366__auto__){return hidden_field23864.call(null,name__9366__auto__,null);
});
var hidden_field23864__2 = (function (name__9366__auto__,value__9367__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))].join(''),name__9366__auto__,value__9367__auto__);
});
hidden_field23864 = function(name__9366__auto__,value__9367__auto__){
switch(arguments.length){
case 1:
return hidden_field23864__1.call(this,name__9366__auto__);
case 2:
return hidden_field23864__2.call(this,name__9366__auto__,value__9367__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field23864.cljs$core$IFn$_invoke$arity$1 = hidden_field23864__1;
hidden_field23864.cljs$core$IFn$_invoke$arity$2 = hidden_field23864__2;
return hidden_field23864;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field23864);
/**
* Creates a month input field.
*/
sablono.core.month_field23865 = (function() {
var month_field23865 = null;
var month_field23865__1 = (function (name__9366__auto__){return month_field23865.call(null,name__9366__auto__,null);
});
var month_field23865__2 = (function (name__9366__auto__,value__9367__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-1536451527,null))].join(''),name__9366__auto__,value__9367__auto__);
});
month_field23865 = function(name__9366__auto__,value__9367__auto__){
switch(arguments.length){
case 1:
return month_field23865__1.call(this,name__9366__auto__);
case 2:
return month_field23865__2.call(this,name__9366__auto__,value__9367__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field23865.cljs$core$IFn$_invoke$arity$1 = month_field23865__1;
month_field23865.cljs$core$IFn$_invoke$arity$2 = month_field23865__2;
return month_field23865;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field23865);
/**
* Creates a number input field.
*/
sablono.core.number_field23866 = (function() {
var number_field23866 = null;
var number_field23866__1 = (function (name__9366__auto__){return number_field23866.call(null,name__9366__auto__,null);
});
var number_field23866__2 = (function (name__9366__auto__,value__9367__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",1620071682,null))].join(''),name__9366__auto__,value__9367__auto__);
});
number_field23866 = function(name__9366__auto__,value__9367__auto__){
switch(arguments.length){
case 1:
return number_field23866__1.call(this,name__9366__auto__);
case 2:
return number_field23866__2.call(this,name__9366__auto__,value__9367__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field23866.cljs$core$IFn$_invoke$arity$1 = number_field23866__1;
number_field23866.cljs$core$IFn$_invoke$arity$2 = number_field23866__2;
return number_field23866;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field23866);
/**
* Creates a password input field.
*/
sablono.core.password_field23867 = (function() {
var password_field23867 = null;
var password_field23867__1 = (function (name__9366__auto__){return password_field23867.call(null,name__9366__auto__,null);
});
var password_field23867__2 = (function (name__9366__auto__,value__9367__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",-423545772,null))].join(''),name__9366__auto__,value__9367__auto__);
});
password_field23867 = function(name__9366__auto__,value__9367__auto__){
switch(arguments.length){
case 1:
return password_field23867__1.call(this,name__9366__auto__);
case 2:
return password_field23867__2.call(this,name__9366__auto__,value__9367__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field23867.cljs$core$IFn$_invoke$arity$1 = password_field23867__1;
password_field23867.cljs$core$IFn$_invoke$arity$2 = password_field23867__2;
return password_field23867;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field23867);
/**
* Creates a range input field.
*/
sablono.core.range_field23868 = (function() {
var range_field23868 = null;
var range_field23868__1 = (function (name__9366__auto__){return range_field23868.call(null,name__9366__auto__,null);
});
var range_field23868__2 = (function (name__9366__auto__,value__9367__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1532251402,null))].join(''),name__9366__auto__,value__9367__auto__);
});
range_field23868 = function(name__9366__auto__,value__9367__auto__){
switch(arguments.length){
case 1:
return range_field23868__1.call(this,name__9366__auto__);
case 2:
return range_field23868__2.call(this,name__9366__auto__,value__9367__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field23868.cljs$core$IFn$_invoke$arity$1 = range_field23868__1;
range_field23868.cljs$core$IFn$_invoke$arity$2 = range_field23868__2;
return range_field23868;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field23868);
/**
* Creates a search input field.
*/
sablono.core.search_field23869 = (function() {
var search_field23869 = null;
var search_field23869__1 = (function (name__9366__auto__){return search_field23869.call(null,name__9366__auto__,null);
});
var search_field23869__2 = (function (name__9366__auto__,value__9367__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",1748098913,null))].join(''),name__9366__auto__,value__9367__auto__);
});
search_field23869 = function(name__9366__auto__,value__9367__auto__){
switch(arguments.length){
case 1:
return search_field23869__1.call(this,name__9366__auto__);
case 2:
return search_field23869__2.call(this,name__9366__auto__,value__9367__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field23869.cljs$core$IFn$_invoke$arity$1 = search_field23869__1;
search_field23869.cljs$core$IFn$_invoke$arity$2 = search_field23869__2;
return search_field23869;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field23869);
/**
* Creates a tel input field.
*/
sablono.core.tel_field23870 = (function() {
var tel_field23870 = null;
var tel_field23870__1 = (function (name__9366__auto__){return tel_field23870.call(null,name__9366__auto__,null);
});
var tel_field23870__2 = (function (name__9366__auto__,value__9367__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))].join(''),name__9366__auto__,value__9367__auto__);
});
tel_field23870 = function(name__9366__auto__,value__9367__auto__){
switch(arguments.length){
case 1:
return tel_field23870__1.call(this,name__9366__auto__);
case 2:
return tel_field23870__2.call(this,name__9366__auto__,value__9367__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field23870.cljs$core$IFn$_invoke$arity$1 = tel_field23870__1;
tel_field23870.cljs$core$IFn$_invoke$arity$2 = tel_field23870__2;
return tel_field23870;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field23870);
/**
* Creates a text input field.
*/
sablono.core.text_field23871 = (function() {
var text_field23871 = null;
var text_field23871__1 = (function (name__9366__auto__){return text_field23871.call(null,name__9366__auto__,null);
});
var text_field23871__2 = (function (name__9366__auto__,value__9367__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-1636974874,null))].join(''),name__9366__auto__,value__9367__auto__);
});
text_field23871 = function(name__9366__auto__,value__9367__auto__){
switch(arguments.length){
case 1:
return text_field23871__1.call(this,name__9366__auto__);
case 2:
return text_field23871__2.call(this,name__9366__auto__,value__9367__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field23871.cljs$core$IFn$_invoke$arity$1 = text_field23871__1;
text_field23871.cljs$core$IFn$_invoke$arity$2 = text_field23871__2;
return text_field23871;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field23871);
/**
* Creates a time input field.
*/
sablono.core.time_field23872 = (function() {
var time_field23872 = null;
var time_field23872__1 = (function (name__9366__auto__){return time_field23872.call(null,name__9366__auto__,null);
});
var time_field23872__2 = (function (name__9366__auto__,value__9367__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1636971386,null))].join(''),name__9366__auto__,value__9367__auto__);
});
time_field23872 = function(name__9366__auto__,value__9367__auto__){
switch(arguments.length){
case 1:
return time_field23872__1.call(this,name__9366__auto__);
case 2:
return time_field23872__2.call(this,name__9366__auto__,value__9367__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field23872.cljs$core$IFn$_invoke$arity$1 = time_field23872__1;
time_field23872.cljs$core$IFn$_invoke$arity$2 = time_field23872__2;
return time_field23872;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field23872);
/**
* Creates a url input field.
*/
sablono.core.url_field23873 = (function() {
var url_field23873 = null;
var url_field23873__1 = (function (name__9366__auto__){return url_field23873.call(null,name__9366__auto__,null);
});
var url_field23873__2 = (function (name__9366__auto__,value__9367__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",-1640415448,null))].join(''),name__9366__auto__,value__9367__auto__);
});
url_field23873 = function(name__9366__auto__,value__9367__auto__){
switch(arguments.length){
case 1:
return url_field23873__1.call(this,name__9366__auto__);
case 2:
return url_field23873__2.call(this,name__9366__auto__,value__9367__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field23873.cljs$core$IFn$_invoke$arity$1 = url_field23873__1;
url_field23873.cljs$core$IFn$_invoke$arity$2 = url_field23873__2;
return url_field23873;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field23873);
/**
* Creates a week input field.
*/
sablono.core.week_field23874 = (function() {
var week_field23874 = null;
var week_field23874__1 = (function (name__9366__auto__){return week_field23874.call(null,name__9366__auto__,null);
});
var week_field23874__2 = (function (name__9366__auto__,value__9367__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",-1636886099,null))].join(''),name__9366__auto__,value__9367__auto__);
});
week_field23874 = function(name__9366__auto__,value__9367__auto__){
switch(arguments.length){
case 1:
return week_field23874__1.call(this,name__9366__auto__);
case 2:
return week_field23874__2.call(this,name__9366__auto__,value__9367__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field23874.cljs$core$IFn$_invoke$arity$1 = week_field23874__1;
week_field23874.cljs$core$IFn$_invoke$arity$2 = week_field23874__2;
return week_field23874;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field23874);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box23875 = (function() {
var check_box23875 = null;
var check_box23875__1 = (function (name){return check_box23875.call(null,name,null);
});
var check_box23875__2 = (function (name,checked_QMARK_){return check_box23875.call(null,name,checked_QMARK_,"true");
});
var check_box23875__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box23875 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box23875__1.call(this,name);
case 2:
return check_box23875__2.call(this,name,checked_QMARK_);
case 3:
return check_box23875__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box23875.cljs$core$IFn$_invoke$arity$1 = check_box23875__1;
check_box23875.cljs$core$IFn$_invoke$arity$2 = check_box23875__2;
check_box23875.cljs$core$IFn$_invoke$arity$3 = check_box23875__3;
return check_box23875;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box23875);
/**
* Creates a radio button.
*/
sablono.core.radio_button23876 = (function() {
var radio_button23876 = null;
var radio_button23876__1 = (function (group){return radio_button23876.call(null,group,null);
});
var radio_button23876__2 = (function (group,checked_QMARK_){return radio_button23876.call(null,group,checked_QMARK_,"true");
});
var radio_button23876__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button23876 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button23876__1.call(this,group);
case 2:
return radio_button23876__2.call(this,group,checked_QMARK_);
case 3:
return radio_button23876__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button23876.cljs$core$IFn$_invoke$arity$1 = radio_button23876__1;
radio_button23876.cljs$core$IFn$_invoke$arity$2 = radio_button23876__2;
radio_button23876.cljs$core$IFn$_invoke$arity$3 = radio_button23876__3;
return radio_button23876;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button23876);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options23877 = (function() {
var select_options23877 = null;
var select_options23877__1 = (function (coll){return select_options23877.call(null,coll,null);
});
var select_options23877__2 = (function (coll,selected){var iter__8601__auto__ = (function iter__23886(s__23887){return (new cljs.core.LazySeq(null,(function (){var s__23887__$1 = s__23887;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23887__$1);if(temp__4126__auto__)
{var s__23887__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23887__$2))
{var c__8599__auto__ = cljs.core.chunk_first.call(null,s__23887__$2);var size__8600__auto__ = cljs.core.count.call(null,c__8599__auto__);var b__23889 = cljs.core.chunk_buffer.call(null,size__8600__auto__);if((function (){var i__23888 = 0;while(true){
if((i__23888 < size__8600__auto__))
{var x = cljs.core._nth.call(null,c__8599__auto__,i__23888);cljs.core.chunk_append.call(null,b__23889,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__23892 = x;var text = cljs.core.nth.call(null,vec__23892,0,null);var val = cljs.core.nth.call(null,vec__23892,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__23892,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options23877.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__23894 = (i__23888 + 1);
i__23888 = G__23894;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23889),iter__23886.call(null,cljs.core.chunk_rest.call(null,s__23887__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23889),null);
}
} else
{var x = cljs.core.first.call(null,s__23887__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__23893 = x;var text = cljs.core.nth.call(null,vec__23893,0,null);var val = cljs.core.nth.call(null,vec__23893,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__23893,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options23877.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__23886.call(null,cljs.core.rest.call(null,s__23887__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8601__auto__.call(null,coll);
});
select_options23877 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options23877__1.call(this,coll);
case 2:
return select_options23877__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options23877.cljs$core$IFn$_invoke$arity$1 = select_options23877__1;
select_options23877.cljs$core$IFn$_invoke$arity$2 = select_options23877__2;
return select_options23877;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options23877);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down23895 = (function() {
var drop_down23895 = null;
var drop_down23895__2 = (function (name,options){return drop_down23895.call(null,name,options,null);
});
var drop_down23895__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down23895 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down23895__2.call(this,name,options);
case 3:
return drop_down23895__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down23895.cljs$core$IFn$_invoke$arity$2 = drop_down23895__2;
drop_down23895.cljs$core$IFn$_invoke$arity$3 = drop_down23895__3;
return drop_down23895;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down23895);
/**
* Creates a text area element.
*/
sablono.core.text_area23896 = (function() {
var text_area23896 = null;
var text_area23896__1 = (function (name){return text_area23896.call(null,name,null);
});
var text_area23896__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area23896 = function(name,value){
switch(arguments.length){
case 1:
return text_area23896__1.call(this,name);
case 2:
return text_area23896__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area23896.cljs$core$IFn$_invoke$arity$1 = text_area23896__1;
text_area23896.cljs$core$IFn$_invoke$arity$2 = text_area23896__2;
return text_area23896;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area23896);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label23897 = (function label23897(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label23897);
/**
* Creates a submit button.
*/
sablono.core.submit_button23898 = (function submit_button23898(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button23898);
/**
* Creates a form reset button.
*/
sablono.core.reset_button23899 = (function reset_button23899(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button23899);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to23900 = (function() { 
var form_to23900__delegate = function (p__23901,body){var vec__23903 = p__23901;var method = cljs.core.nth.call(null,vec__23903,0,null);var action = cljs.core.nth.call(null,vec__23903,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to23900 = function (p__23901,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to23900__delegate.call(this,p__23901,body);};
form_to23900.cljs$lang$maxFixedArity = 1;
form_to23900.cljs$lang$applyTo = (function (arglist__23904){
var p__23901 = cljs.core.first(arglist__23904);
var body = cljs.core.rest(arglist__23904);
return form_to23900__delegate(p__23901,body);
});
form_to23900.cljs$core$IFn$_invoke$arity$variadic = form_to23900__delegate;
return form_to23900;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to23900);

//# sourceMappingURL=core.js.map
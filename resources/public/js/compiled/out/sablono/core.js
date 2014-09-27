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
var G__36722__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__36721 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__36721,0,null);var body = cljs.core.nthnext.call(null,vec__36721,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__36722 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__36722__delegate.call(this,args);};
G__36722.cljs$lang$maxFixedArity = 0;
G__36722.cljs$lang$applyTo = (function (arglist__36723){
var args = cljs.core.seq(arglist__36723);
return G__36722__delegate(args);
});
G__36722.cljs$core$IFn$_invoke$arity$variadic = G__36722__delegate;
return G__36722;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__8598__auto__ = (function iter__36728(s__36729){return (new cljs.core.LazySeq(null,(function (){var s__36729__$1 = s__36729;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__36729__$1);if(temp__4126__auto__)
{var s__36729__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36729__$2))
{var c__8596__auto__ = cljs.core.chunk_first.call(null,s__36729__$2);var size__8597__auto__ = cljs.core.count.call(null,c__8596__auto__);var b__36731 = cljs.core.chunk_buffer.call(null,size__8597__auto__);if((function (){var i__36730 = 0;while(true){
if((i__36730 < size__8597__auto__))
{var args = cljs.core._nth.call(null,c__8596__auto__,i__36730);cljs.core.chunk_append.call(null,b__36731,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__36732 = (i__36730 + 1);
i__36730 = G__36732;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36731),iter__36728.call(null,cljs.core.chunk_rest.call(null,s__36729__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36731),null);
}
} else
{var args = cljs.core.first.call(null,s__36729__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__36728.call(null,cljs.core.rest.call(null,s__36729__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8598__auto__.call(null,arglists);
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
var include_css__delegate = function (styles){var iter__8598__auto__ = (function iter__36737(s__36738){return (new cljs.core.LazySeq(null,(function (){var s__36738__$1 = s__36738;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__36738__$1);if(temp__4126__auto__)
{var s__36738__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36738__$2))
{var c__8596__auto__ = cljs.core.chunk_first.call(null,s__36738__$2);var size__8597__auto__ = cljs.core.count.call(null,c__8596__auto__);var b__36740 = cljs.core.chunk_buffer.call(null,size__8597__auto__);if((function (){var i__36739 = 0;while(true){
if((i__36739 < size__8597__auto__))
{var style = cljs.core._nth.call(null,c__8596__auto__,i__36739);cljs.core.chunk_append.call(null,b__36740,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__36741 = (i__36739 + 1);
i__36739 = G__36741;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36740),iter__36737.call(null,cljs.core.chunk_rest.call(null,s__36738__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36740),null);
}
} else
{var style = cljs.core.first.call(null,s__36738__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__36737.call(null,cljs.core.rest.call(null,s__36738__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8598__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__36742){
var styles = cljs.core.seq(arglist__36742);
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
sablono.core.link_to36743 = (function() { 
var link_to36743__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to36743 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to36743__delegate.call(this,url,content);};
link_to36743.cljs$lang$maxFixedArity = 1;
link_to36743.cljs$lang$applyTo = (function (arglist__36744){
var url = cljs.core.first(arglist__36744);
var content = cljs.core.rest(arglist__36744);
return link_to36743__delegate(url,content);
});
link_to36743.cljs$core$IFn$_invoke$arity$variadic = link_to36743__delegate;
return link_to36743;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to36743);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to36745 = (function() { 
var mail_to36745__delegate = function (e_mail,p__36746){var vec__36748 = p__36746;var content = cljs.core.nth.call(null,vec__36748,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__7881__auto__ = content;if(cljs.core.truth_(or__7881__auto__))
{return or__7881__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to36745 = function (e_mail,var_args){
var p__36746 = null;if (arguments.length > 1) {
  p__36746 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to36745__delegate.call(this,e_mail,p__36746);};
mail_to36745.cljs$lang$maxFixedArity = 1;
mail_to36745.cljs$lang$applyTo = (function (arglist__36749){
var e_mail = cljs.core.first(arglist__36749);
var p__36746 = cljs.core.rest(arglist__36749);
return mail_to36745__delegate(e_mail,p__36746);
});
mail_to36745.cljs$core$IFn$_invoke$arity$variadic = mail_to36745__delegate;
return mail_to36745;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to36745);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list36750 = (function unordered_list36750(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__8598__auto__ = (function iter__36755(s__36756){return (new cljs.core.LazySeq(null,(function (){var s__36756__$1 = s__36756;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__36756__$1);if(temp__4126__auto__)
{var s__36756__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36756__$2))
{var c__8596__auto__ = cljs.core.chunk_first.call(null,s__36756__$2);var size__8597__auto__ = cljs.core.count.call(null,c__8596__auto__);var b__36758 = cljs.core.chunk_buffer.call(null,size__8597__auto__);if((function (){var i__36757 = 0;while(true){
if((i__36757 < size__8597__auto__))
{var x = cljs.core._nth.call(null,c__8596__auto__,i__36757);cljs.core.chunk_append.call(null,b__36758,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__36759 = (i__36757 + 1);
i__36757 = G__36759;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36758),iter__36755.call(null,cljs.core.chunk_rest.call(null,s__36756__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36758),null);
}
} else
{var x = cljs.core.first.call(null,s__36756__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__36755.call(null,cljs.core.rest.call(null,s__36756__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8598__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list36750);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list36760 = (function ordered_list36760(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__8598__auto__ = (function iter__36765(s__36766){return (new cljs.core.LazySeq(null,(function (){var s__36766__$1 = s__36766;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__36766__$1);if(temp__4126__auto__)
{var s__36766__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36766__$2))
{var c__8596__auto__ = cljs.core.chunk_first.call(null,s__36766__$2);var size__8597__auto__ = cljs.core.count.call(null,c__8596__auto__);var b__36768 = cljs.core.chunk_buffer.call(null,size__8597__auto__);if((function (){var i__36767 = 0;while(true){
if((i__36767 < size__8597__auto__))
{var x = cljs.core._nth.call(null,c__8596__auto__,i__36767);cljs.core.chunk_append.call(null,b__36768,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__36769 = (i__36767 + 1);
i__36767 = G__36769;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36768),iter__36765.call(null,cljs.core.chunk_rest.call(null,s__36766__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36768),null);
}
} else
{var x = cljs.core.first.call(null,s__36766__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__36765.call(null,cljs.core.rest.call(null,s__36766__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8598__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list36760);
/**
* Create an image element.
*/
sablono.core.image36770 = (function() {
var image36770 = null;
var image36770__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image36770__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image36770 = function(src,alt){
switch(arguments.length){
case 1:
return image36770__1.call(this,src);
case 2:
return image36770__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image36770.cljs$core$IFn$_invoke$arity$1 = image36770__1;
image36770.cljs$core$IFn$_invoke$arity$2 = image36770__2;
return image36770;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image36770);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__36771_SHARP_,p2__36772_SHARP_){return [cljs.core.str(p1__36771_SHARP_),cljs.core.str("["),cljs.core.str(p2__36772_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__36773_SHARP_,p2__36774_SHARP_){return [cljs.core.str(p1__36773_SHARP_),cljs.core.str("-"),cljs.core.str(p2__36774_SHARP_)].join('');
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
sablono.core.color_field36775 = (function() {
var color_field36775 = null;
var color_field36775__1 = (function (name__9363__auto__){return color_field36775.call(null,name__9363__auto__,null);
});
var color_field36775__2 = (function (name__9363__auto__,value__9364__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1545688804,null))].join(''),name__9363__auto__,value__9364__auto__);
});
color_field36775 = function(name__9363__auto__,value__9364__auto__){
switch(arguments.length){
case 1:
return color_field36775__1.call(this,name__9363__auto__);
case 2:
return color_field36775__2.call(this,name__9363__auto__,value__9364__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field36775.cljs$core$IFn$_invoke$arity$1 = color_field36775__1;
color_field36775.cljs$core$IFn$_invoke$arity$2 = color_field36775__2;
return color_field36775;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field36775);
/**
* Creates a date input field.
*/
sablono.core.date_field36776 = (function() {
var date_field36776 = null;
var date_field36776__1 = (function (name__9363__auto__){return date_field36776.call(null,name__9363__auto__,null);
});
var date_field36776__2 = (function (name__9363__auto__,value__9364__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",-1637455513,null))].join(''),name__9363__auto__,value__9364__auto__);
});
date_field36776 = function(name__9363__auto__,value__9364__auto__){
switch(arguments.length){
case 1:
return date_field36776__1.call(this,name__9363__auto__);
case 2:
return date_field36776__2.call(this,name__9363__auto__,value__9364__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field36776.cljs$core$IFn$_invoke$arity$1 = date_field36776__1;
date_field36776.cljs$core$IFn$_invoke$arity$2 = date_field36776__2;
return date_field36776;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field36776);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field36777 = (function() {
var datetime_field36777 = null;
var datetime_field36777__1 = (function (name__9363__auto__){return datetime_field36777.call(null,name__9363__auto__,null);
});
var datetime_field36777__2 = (function (name__9363__auto__,value__9364__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))].join(''),name__9363__auto__,value__9364__auto__);
});
datetime_field36777 = function(name__9363__auto__,value__9364__auto__){
switch(arguments.length){
case 1:
return datetime_field36777__1.call(this,name__9363__auto__);
case 2:
return datetime_field36777__2.call(this,name__9363__auto__,value__9364__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field36777.cljs$core$IFn$_invoke$arity$1 = datetime_field36777__1;
datetime_field36777.cljs$core$IFn$_invoke$arity$2 = datetime_field36777__2;
return datetime_field36777;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field36777);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field36778 = (function() {
var datetime_local_field36778 = null;
var datetime_local_field36778__1 = (function (name__9363__auto__){return datetime_local_field36778.call(null,name__9363__auto__,null);
});
var datetime_local_field36778__2 = (function (name__9363__auto__,value__9364__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))].join(''),name__9363__auto__,value__9364__auto__);
});
datetime_local_field36778 = function(name__9363__auto__,value__9364__auto__){
switch(arguments.length){
case 1:
return datetime_local_field36778__1.call(this,name__9363__auto__);
case 2:
return datetime_local_field36778__2.call(this,name__9363__auto__,value__9364__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field36778.cljs$core$IFn$_invoke$arity$1 = datetime_local_field36778__1;
datetime_local_field36778.cljs$core$IFn$_invoke$arity$2 = datetime_local_field36778__2;
return datetime_local_field36778;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field36778);
/**
* Creates a email input field.
*/
sablono.core.email_field36779 = (function() {
var email_field36779 = null;
var email_field36779__1 = (function (name__9363__auto__){return email_field36779.call(null,name__9363__auto__,null);
});
var email_field36779__2 = (function (name__9363__auto__,value__9364__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1543912107,null))].join(''),name__9363__auto__,value__9364__auto__);
});
email_field36779 = function(name__9363__auto__,value__9364__auto__){
switch(arguments.length){
case 1:
return email_field36779__1.call(this,name__9363__auto__);
case 2:
return email_field36779__2.call(this,name__9363__auto__,value__9364__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field36779.cljs$core$IFn$_invoke$arity$1 = email_field36779__1;
email_field36779.cljs$core$IFn$_invoke$arity$2 = email_field36779__2;
return email_field36779;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field36779);
/**
* Creates a file input field.
*/
sablono.core.file_field36780 = (function() {
var file_field36780 = null;
var file_field36780__1 = (function (name__9363__auto__){return file_field36780.call(null,name__9363__auto__,null);
});
var file_field36780__2 = (function (name__9363__auto__,value__9364__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",-1637388491,null))].join(''),name__9363__auto__,value__9364__auto__);
});
file_field36780 = function(name__9363__auto__,value__9364__auto__){
switch(arguments.length){
case 1:
return file_field36780__1.call(this,name__9363__auto__);
case 2:
return file_field36780__2.call(this,name__9363__auto__,value__9364__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field36780.cljs$core$IFn$_invoke$arity$1 = file_field36780__1;
file_field36780.cljs$core$IFn$_invoke$arity$2 = file_field36780__2;
return file_field36780;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field36780);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field36781 = (function() {
var hidden_field36781 = null;
var hidden_field36781__1 = (function (name__9363__auto__){return hidden_field36781.call(null,name__9363__auto__,null);
});
var hidden_field36781__2 = (function (name__9363__auto__,value__9364__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))].join(''),name__9363__auto__,value__9364__auto__);
});
hidden_field36781 = function(name__9363__auto__,value__9364__auto__){
switch(arguments.length){
case 1:
return hidden_field36781__1.call(this,name__9363__auto__);
case 2:
return hidden_field36781__2.call(this,name__9363__auto__,value__9364__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field36781.cljs$core$IFn$_invoke$arity$1 = hidden_field36781__1;
hidden_field36781.cljs$core$IFn$_invoke$arity$2 = hidden_field36781__2;
return hidden_field36781;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field36781);
/**
* Creates a month input field.
*/
sablono.core.month_field36782 = (function() {
var month_field36782 = null;
var month_field36782__1 = (function (name__9363__auto__){return month_field36782.call(null,name__9363__auto__,null);
});
var month_field36782__2 = (function (name__9363__auto__,value__9364__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-1536451527,null))].join(''),name__9363__auto__,value__9364__auto__);
});
month_field36782 = function(name__9363__auto__,value__9364__auto__){
switch(arguments.length){
case 1:
return month_field36782__1.call(this,name__9363__auto__);
case 2:
return month_field36782__2.call(this,name__9363__auto__,value__9364__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field36782.cljs$core$IFn$_invoke$arity$1 = month_field36782__1;
month_field36782.cljs$core$IFn$_invoke$arity$2 = month_field36782__2;
return month_field36782;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field36782);
/**
* Creates a number input field.
*/
sablono.core.number_field36783 = (function() {
var number_field36783 = null;
var number_field36783__1 = (function (name__9363__auto__){return number_field36783.call(null,name__9363__auto__,null);
});
var number_field36783__2 = (function (name__9363__auto__,value__9364__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",1620071682,null))].join(''),name__9363__auto__,value__9364__auto__);
});
number_field36783 = function(name__9363__auto__,value__9364__auto__){
switch(arguments.length){
case 1:
return number_field36783__1.call(this,name__9363__auto__);
case 2:
return number_field36783__2.call(this,name__9363__auto__,value__9364__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field36783.cljs$core$IFn$_invoke$arity$1 = number_field36783__1;
number_field36783.cljs$core$IFn$_invoke$arity$2 = number_field36783__2;
return number_field36783;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field36783);
/**
* Creates a password input field.
*/
sablono.core.password_field36784 = (function() {
var password_field36784 = null;
var password_field36784__1 = (function (name__9363__auto__){return password_field36784.call(null,name__9363__auto__,null);
});
var password_field36784__2 = (function (name__9363__auto__,value__9364__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",-423545772,null))].join(''),name__9363__auto__,value__9364__auto__);
});
password_field36784 = function(name__9363__auto__,value__9364__auto__){
switch(arguments.length){
case 1:
return password_field36784__1.call(this,name__9363__auto__);
case 2:
return password_field36784__2.call(this,name__9363__auto__,value__9364__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field36784.cljs$core$IFn$_invoke$arity$1 = password_field36784__1;
password_field36784.cljs$core$IFn$_invoke$arity$2 = password_field36784__2;
return password_field36784;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field36784);
/**
* Creates a range input field.
*/
sablono.core.range_field36785 = (function() {
var range_field36785 = null;
var range_field36785__1 = (function (name__9363__auto__){return range_field36785.call(null,name__9363__auto__,null);
});
var range_field36785__2 = (function (name__9363__auto__,value__9364__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1532251402,null))].join(''),name__9363__auto__,value__9364__auto__);
});
range_field36785 = function(name__9363__auto__,value__9364__auto__){
switch(arguments.length){
case 1:
return range_field36785__1.call(this,name__9363__auto__);
case 2:
return range_field36785__2.call(this,name__9363__auto__,value__9364__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field36785.cljs$core$IFn$_invoke$arity$1 = range_field36785__1;
range_field36785.cljs$core$IFn$_invoke$arity$2 = range_field36785__2;
return range_field36785;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field36785);
/**
* Creates a search input field.
*/
sablono.core.search_field36786 = (function() {
var search_field36786 = null;
var search_field36786__1 = (function (name__9363__auto__){return search_field36786.call(null,name__9363__auto__,null);
});
var search_field36786__2 = (function (name__9363__auto__,value__9364__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",1748098913,null))].join(''),name__9363__auto__,value__9364__auto__);
});
search_field36786 = function(name__9363__auto__,value__9364__auto__){
switch(arguments.length){
case 1:
return search_field36786__1.call(this,name__9363__auto__);
case 2:
return search_field36786__2.call(this,name__9363__auto__,value__9364__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field36786.cljs$core$IFn$_invoke$arity$1 = search_field36786__1;
search_field36786.cljs$core$IFn$_invoke$arity$2 = search_field36786__2;
return search_field36786;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field36786);
/**
* Creates a tel input field.
*/
sablono.core.tel_field36787 = (function() {
var tel_field36787 = null;
var tel_field36787__1 = (function (name__9363__auto__){return tel_field36787.call(null,name__9363__auto__,null);
});
var tel_field36787__2 = (function (name__9363__auto__,value__9364__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))].join(''),name__9363__auto__,value__9364__auto__);
});
tel_field36787 = function(name__9363__auto__,value__9364__auto__){
switch(arguments.length){
case 1:
return tel_field36787__1.call(this,name__9363__auto__);
case 2:
return tel_field36787__2.call(this,name__9363__auto__,value__9364__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field36787.cljs$core$IFn$_invoke$arity$1 = tel_field36787__1;
tel_field36787.cljs$core$IFn$_invoke$arity$2 = tel_field36787__2;
return tel_field36787;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field36787);
/**
* Creates a text input field.
*/
sablono.core.text_field36788 = (function() {
var text_field36788 = null;
var text_field36788__1 = (function (name__9363__auto__){return text_field36788.call(null,name__9363__auto__,null);
});
var text_field36788__2 = (function (name__9363__auto__,value__9364__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-1636974874,null))].join(''),name__9363__auto__,value__9364__auto__);
});
text_field36788 = function(name__9363__auto__,value__9364__auto__){
switch(arguments.length){
case 1:
return text_field36788__1.call(this,name__9363__auto__);
case 2:
return text_field36788__2.call(this,name__9363__auto__,value__9364__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field36788.cljs$core$IFn$_invoke$arity$1 = text_field36788__1;
text_field36788.cljs$core$IFn$_invoke$arity$2 = text_field36788__2;
return text_field36788;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field36788);
/**
* Creates a time input field.
*/
sablono.core.time_field36789 = (function() {
var time_field36789 = null;
var time_field36789__1 = (function (name__9363__auto__){return time_field36789.call(null,name__9363__auto__,null);
});
var time_field36789__2 = (function (name__9363__auto__,value__9364__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1636971386,null))].join(''),name__9363__auto__,value__9364__auto__);
});
time_field36789 = function(name__9363__auto__,value__9364__auto__){
switch(arguments.length){
case 1:
return time_field36789__1.call(this,name__9363__auto__);
case 2:
return time_field36789__2.call(this,name__9363__auto__,value__9364__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field36789.cljs$core$IFn$_invoke$arity$1 = time_field36789__1;
time_field36789.cljs$core$IFn$_invoke$arity$2 = time_field36789__2;
return time_field36789;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field36789);
/**
* Creates a url input field.
*/
sablono.core.url_field36790 = (function() {
var url_field36790 = null;
var url_field36790__1 = (function (name__9363__auto__){return url_field36790.call(null,name__9363__auto__,null);
});
var url_field36790__2 = (function (name__9363__auto__,value__9364__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",-1640415448,null))].join(''),name__9363__auto__,value__9364__auto__);
});
url_field36790 = function(name__9363__auto__,value__9364__auto__){
switch(arguments.length){
case 1:
return url_field36790__1.call(this,name__9363__auto__);
case 2:
return url_field36790__2.call(this,name__9363__auto__,value__9364__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field36790.cljs$core$IFn$_invoke$arity$1 = url_field36790__1;
url_field36790.cljs$core$IFn$_invoke$arity$2 = url_field36790__2;
return url_field36790;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field36790);
/**
* Creates a week input field.
*/
sablono.core.week_field36791 = (function() {
var week_field36791 = null;
var week_field36791__1 = (function (name__9363__auto__){return week_field36791.call(null,name__9363__auto__,null);
});
var week_field36791__2 = (function (name__9363__auto__,value__9364__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",-1636886099,null))].join(''),name__9363__auto__,value__9364__auto__);
});
week_field36791 = function(name__9363__auto__,value__9364__auto__){
switch(arguments.length){
case 1:
return week_field36791__1.call(this,name__9363__auto__);
case 2:
return week_field36791__2.call(this,name__9363__auto__,value__9364__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field36791.cljs$core$IFn$_invoke$arity$1 = week_field36791__1;
week_field36791.cljs$core$IFn$_invoke$arity$2 = week_field36791__2;
return week_field36791;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field36791);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box36792 = (function() {
var check_box36792 = null;
var check_box36792__1 = (function (name){return check_box36792.call(null,name,null);
});
var check_box36792__2 = (function (name,checked_QMARK_){return check_box36792.call(null,name,checked_QMARK_,"true");
});
var check_box36792__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box36792 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box36792__1.call(this,name);
case 2:
return check_box36792__2.call(this,name,checked_QMARK_);
case 3:
return check_box36792__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box36792.cljs$core$IFn$_invoke$arity$1 = check_box36792__1;
check_box36792.cljs$core$IFn$_invoke$arity$2 = check_box36792__2;
check_box36792.cljs$core$IFn$_invoke$arity$3 = check_box36792__3;
return check_box36792;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box36792);
/**
* Creates a radio button.
*/
sablono.core.radio_button36793 = (function() {
var radio_button36793 = null;
var radio_button36793__1 = (function (group){return radio_button36793.call(null,group,null);
});
var radio_button36793__2 = (function (group,checked_QMARK_){return radio_button36793.call(null,group,checked_QMARK_,"true");
});
var radio_button36793__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button36793 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button36793__1.call(this,group);
case 2:
return radio_button36793__2.call(this,group,checked_QMARK_);
case 3:
return radio_button36793__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button36793.cljs$core$IFn$_invoke$arity$1 = radio_button36793__1;
radio_button36793.cljs$core$IFn$_invoke$arity$2 = radio_button36793__2;
radio_button36793.cljs$core$IFn$_invoke$arity$3 = radio_button36793__3;
return radio_button36793;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button36793);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options36794 = (function() {
var select_options36794 = null;
var select_options36794__1 = (function (coll){return select_options36794.call(null,coll,null);
});
var select_options36794__2 = (function (coll,selected){var iter__8598__auto__ = (function iter__36803(s__36804){return (new cljs.core.LazySeq(null,(function (){var s__36804__$1 = s__36804;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__36804__$1);if(temp__4126__auto__)
{var s__36804__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36804__$2))
{var c__8596__auto__ = cljs.core.chunk_first.call(null,s__36804__$2);var size__8597__auto__ = cljs.core.count.call(null,c__8596__auto__);var b__36806 = cljs.core.chunk_buffer.call(null,size__8597__auto__);if((function (){var i__36805 = 0;while(true){
if((i__36805 < size__8597__auto__))
{var x = cljs.core._nth.call(null,c__8596__auto__,i__36805);cljs.core.chunk_append.call(null,b__36806,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__36809 = x;var text = cljs.core.nth.call(null,vec__36809,0,null);var val = cljs.core.nth.call(null,vec__36809,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__36809,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options36794.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__36811 = (i__36805 + 1);
i__36805 = G__36811;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36806),iter__36803.call(null,cljs.core.chunk_rest.call(null,s__36804__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36806),null);
}
} else
{var x = cljs.core.first.call(null,s__36804__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__36810 = x;var text = cljs.core.nth.call(null,vec__36810,0,null);var val = cljs.core.nth.call(null,vec__36810,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__36810,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options36794.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__36803.call(null,cljs.core.rest.call(null,s__36804__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8598__auto__.call(null,coll);
});
select_options36794 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options36794__1.call(this,coll);
case 2:
return select_options36794__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options36794.cljs$core$IFn$_invoke$arity$1 = select_options36794__1;
select_options36794.cljs$core$IFn$_invoke$arity$2 = select_options36794__2;
return select_options36794;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options36794);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down36812 = (function() {
var drop_down36812 = null;
var drop_down36812__2 = (function (name,options){return drop_down36812.call(null,name,options,null);
});
var drop_down36812__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down36812 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down36812__2.call(this,name,options);
case 3:
return drop_down36812__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down36812.cljs$core$IFn$_invoke$arity$2 = drop_down36812__2;
drop_down36812.cljs$core$IFn$_invoke$arity$3 = drop_down36812__3;
return drop_down36812;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down36812);
/**
* Creates a text area element.
*/
sablono.core.text_area36813 = (function() {
var text_area36813 = null;
var text_area36813__1 = (function (name){return text_area36813.call(null,name,null);
});
var text_area36813__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area36813 = function(name,value){
switch(arguments.length){
case 1:
return text_area36813__1.call(this,name);
case 2:
return text_area36813__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area36813.cljs$core$IFn$_invoke$arity$1 = text_area36813__1;
text_area36813.cljs$core$IFn$_invoke$arity$2 = text_area36813__2;
return text_area36813;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area36813);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label36814 = (function label36814(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label36814);
/**
* Creates a submit button.
*/
sablono.core.submit_button36815 = (function submit_button36815(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button36815);
/**
* Creates a form reset button.
*/
sablono.core.reset_button36816 = (function reset_button36816(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button36816);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to36817 = (function() { 
var form_to36817__delegate = function (p__36818,body){var vec__36820 = p__36818;var method = cljs.core.nth.call(null,vec__36820,0,null);var action = cljs.core.nth.call(null,vec__36820,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to36817 = function (p__36818,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to36817__delegate.call(this,p__36818,body);};
form_to36817.cljs$lang$maxFixedArity = 1;
form_to36817.cljs$lang$applyTo = (function (arglist__36821){
var p__36818 = cljs.core.first(arglist__36821);
var body = cljs.core.rest(arglist__36821);
return form_to36817__delegate(p__36818,body);
});
form_to36817.cljs$core$IFn$_invoke$arity$variadic = form_to36817__delegate;
return form_to36817;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to36817);

//# sourceMappingURL=core.js.map
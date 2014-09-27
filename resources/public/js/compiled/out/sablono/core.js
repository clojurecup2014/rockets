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
var G__13649__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__13648 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__13648,0,null);var body = cljs.core.nthnext.call(null,vec__13648,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__13649 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13649__delegate.call(this,args);};
G__13649.cljs$lang$maxFixedArity = 0;
G__13649.cljs$lang$applyTo = (function (arglist__13650){
var args = cljs.core.seq(arglist__13650);
return G__13649__delegate(args);
});
G__13649.cljs$core$IFn$_invoke$arity$variadic = G__13649__delegate;
return G__13649;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__8598__auto__ = (function iter__13655(s__13656){return (new cljs.core.LazySeq(null,(function (){var s__13656__$1 = s__13656;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13656__$1);if(temp__4126__auto__)
{var s__13656__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13656__$2))
{var c__8596__auto__ = cljs.core.chunk_first.call(null,s__13656__$2);var size__8597__auto__ = cljs.core.count.call(null,c__8596__auto__);var b__13658 = cljs.core.chunk_buffer.call(null,size__8597__auto__);if((function (){var i__13657 = 0;while(true){
if((i__13657 < size__8597__auto__))
{var args = cljs.core._nth.call(null,c__8596__auto__,i__13657);cljs.core.chunk_append.call(null,b__13658,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__13659 = (i__13657 + 1);
i__13657 = G__13659;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13658),iter__13655.call(null,cljs.core.chunk_rest.call(null,s__13656__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13658),null);
}
} else
{var args = cljs.core.first.call(null,s__13656__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__13655.call(null,cljs.core.rest.call(null,s__13656__$2)));
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
var include_css__delegate = function (styles){var iter__8598__auto__ = (function iter__13664(s__13665){return (new cljs.core.LazySeq(null,(function (){var s__13665__$1 = s__13665;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13665__$1);if(temp__4126__auto__)
{var s__13665__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13665__$2))
{var c__8596__auto__ = cljs.core.chunk_first.call(null,s__13665__$2);var size__8597__auto__ = cljs.core.count.call(null,c__8596__auto__);var b__13667 = cljs.core.chunk_buffer.call(null,size__8597__auto__);if((function (){var i__13666 = 0;while(true){
if((i__13666 < size__8597__auto__))
{var style = cljs.core._nth.call(null,c__8596__auto__,i__13666);cljs.core.chunk_append.call(null,b__13667,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__13668 = (i__13666 + 1);
i__13666 = G__13668;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13667),iter__13664.call(null,cljs.core.chunk_rest.call(null,s__13665__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13667),null);
}
} else
{var style = cljs.core.first.call(null,s__13665__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__13664.call(null,cljs.core.rest.call(null,s__13665__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__13669){
var styles = cljs.core.seq(arglist__13669);
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
sablono.core.link_to13670 = (function() { 
var link_to13670__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to13670 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to13670__delegate.call(this,url,content);};
link_to13670.cljs$lang$maxFixedArity = 1;
link_to13670.cljs$lang$applyTo = (function (arglist__13671){
var url = cljs.core.first(arglist__13671);
var content = cljs.core.rest(arglist__13671);
return link_to13670__delegate(url,content);
});
link_to13670.cljs$core$IFn$_invoke$arity$variadic = link_to13670__delegate;
return link_to13670;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to13670);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to13672 = (function() { 
var mail_to13672__delegate = function (e_mail,p__13673){var vec__13675 = p__13673;var content = cljs.core.nth.call(null,vec__13675,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__7881__auto__ = content;if(cljs.core.truth_(or__7881__auto__))
{return or__7881__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to13672 = function (e_mail,var_args){
var p__13673 = null;if (arguments.length > 1) {
  p__13673 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to13672__delegate.call(this,e_mail,p__13673);};
mail_to13672.cljs$lang$maxFixedArity = 1;
mail_to13672.cljs$lang$applyTo = (function (arglist__13676){
var e_mail = cljs.core.first(arglist__13676);
var p__13673 = cljs.core.rest(arglist__13676);
return mail_to13672__delegate(e_mail,p__13673);
});
mail_to13672.cljs$core$IFn$_invoke$arity$variadic = mail_to13672__delegate;
return mail_to13672;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to13672);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list13677 = (function unordered_list13677(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__8598__auto__ = (function iter__13682(s__13683){return (new cljs.core.LazySeq(null,(function (){var s__13683__$1 = s__13683;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13683__$1);if(temp__4126__auto__)
{var s__13683__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13683__$2))
{var c__8596__auto__ = cljs.core.chunk_first.call(null,s__13683__$2);var size__8597__auto__ = cljs.core.count.call(null,c__8596__auto__);var b__13685 = cljs.core.chunk_buffer.call(null,size__8597__auto__);if((function (){var i__13684 = 0;while(true){
if((i__13684 < size__8597__auto__))
{var x = cljs.core._nth.call(null,c__8596__auto__,i__13684);cljs.core.chunk_append.call(null,b__13685,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__13686 = (i__13684 + 1);
i__13684 = G__13686;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13685),iter__13682.call(null,cljs.core.chunk_rest.call(null,s__13683__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13685),null);
}
} else
{var x = cljs.core.first.call(null,s__13683__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__13682.call(null,cljs.core.rest.call(null,s__13683__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list13677);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list13687 = (function ordered_list13687(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__8598__auto__ = (function iter__13692(s__13693){return (new cljs.core.LazySeq(null,(function (){var s__13693__$1 = s__13693;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13693__$1);if(temp__4126__auto__)
{var s__13693__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13693__$2))
{var c__8596__auto__ = cljs.core.chunk_first.call(null,s__13693__$2);var size__8597__auto__ = cljs.core.count.call(null,c__8596__auto__);var b__13695 = cljs.core.chunk_buffer.call(null,size__8597__auto__);if((function (){var i__13694 = 0;while(true){
if((i__13694 < size__8597__auto__))
{var x = cljs.core._nth.call(null,c__8596__auto__,i__13694);cljs.core.chunk_append.call(null,b__13695,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__13696 = (i__13694 + 1);
i__13694 = G__13696;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13695),iter__13692.call(null,cljs.core.chunk_rest.call(null,s__13693__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13695),null);
}
} else
{var x = cljs.core.first.call(null,s__13693__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__13692.call(null,cljs.core.rest.call(null,s__13693__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list13687);
/**
* Create an image element.
*/
sablono.core.image13697 = (function() {
var image13697 = null;
var image13697__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image13697__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image13697 = function(src,alt){
switch(arguments.length){
case 1:
return image13697__1.call(this,src);
case 2:
return image13697__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image13697.cljs$core$IFn$_invoke$arity$1 = image13697__1;
image13697.cljs$core$IFn$_invoke$arity$2 = image13697__2;
return image13697;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image13697);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__13698_SHARP_,p2__13699_SHARP_){return [cljs.core.str(p1__13698_SHARP_),cljs.core.str("["),cljs.core.str(p2__13699_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__13700_SHARP_,p2__13701_SHARP_){return [cljs.core.str(p1__13700_SHARP_),cljs.core.str("-"),cljs.core.str(p2__13701_SHARP_)].join('');
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
sablono.core.color_field13702 = (function() {
var color_field13702 = null;
var color_field13702__1 = (function (name__9363__auto__){return color_field13702.call(null,name__9363__auto__,null);
});
var color_field13702__2 = (function (name__9363__auto__,value__9364__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1545688804,null))].join(''),name__9363__auto__,value__9364__auto__);
});
color_field13702 = function(name__9363__auto__,value__9364__auto__){
switch(arguments.length){
case 1:
return color_field13702__1.call(this,name__9363__auto__);
case 2:
return color_field13702__2.call(this,name__9363__auto__,value__9364__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field13702.cljs$core$IFn$_invoke$arity$1 = color_field13702__1;
color_field13702.cljs$core$IFn$_invoke$arity$2 = color_field13702__2;
return color_field13702;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field13702);
/**
* Creates a date input field.
*/
sablono.core.date_field13703 = (function() {
var date_field13703 = null;
var date_field13703__1 = (function (name__9363__auto__){return date_field13703.call(null,name__9363__auto__,null);
});
var date_field13703__2 = (function (name__9363__auto__,value__9364__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",-1637455513,null))].join(''),name__9363__auto__,value__9364__auto__);
});
date_field13703 = function(name__9363__auto__,value__9364__auto__){
switch(arguments.length){
case 1:
return date_field13703__1.call(this,name__9363__auto__);
case 2:
return date_field13703__2.call(this,name__9363__auto__,value__9364__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field13703.cljs$core$IFn$_invoke$arity$1 = date_field13703__1;
date_field13703.cljs$core$IFn$_invoke$arity$2 = date_field13703__2;
return date_field13703;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field13703);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field13704 = (function() {
var datetime_field13704 = null;
var datetime_field13704__1 = (function (name__9363__auto__){return datetime_field13704.call(null,name__9363__auto__,null);
});
var datetime_field13704__2 = (function (name__9363__auto__,value__9364__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))].join(''),name__9363__auto__,value__9364__auto__);
});
datetime_field13704 = function(name__9363__auto__,value__9364__auto__){
switch(arguments.length){
case 1:
return datetime_field13704__1.call(this,name__9363__auto__);
case 2:
return datetime_field13704__2.call(this,name__9363__auto__,value__9364__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field13704.cljs$core$IFn$_invoke$arity$1 = datetime_field13704__1;
datetime_field13704.cljs$core$IFn$_invoke$arity$2 = datetime_field13704__2;
return datetime_field13704;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field13704);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field13705 = (function() {
var datetime_local_field13705 = null;
var datetime_local_field13705__1 = (function (name__9363__auto__){return datetime_local_field13705.call(null,name__9363__auto__,null);
});
var datetime_local_field13705__2 = (function (name__9363__auto__,value__9364__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))].join(''),name__9363__auto__,value__9364__auto__);
});
datetime_local_field13705 = function(name__9363__auto__,value__9364__auto__){
switch(arguments.length){
case 1:
return datetime_local_field13705__1.call(this,name__9363__auto__);
case 2:
return datetime_local_field13705__2.call(this,name__9363__auto__,value__9364__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field13705.cljs$core$IFn$_invoke$arity$1 = datetime_local_field13705__1;
datetime_local_field13705.cljs$core$IFn$_invoke$arity$2 = datetime_local_field13705__2;
return datetime_local_field13705;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field13705);
/**
* Creates a email input field.
*/
sablono.core.email_field13706 = (function() {
var email_field13706 = null;
var email_field13706__1 = (function (name__9363__auto__){return email_field13706.call(null,name__9363__auto__,null);
});
var email_field13706__2 = (function (name__9363__auto__,value__9364__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1543912107,null))].join(''),name__9363__auto__,value__9364__auto__);
});
email_field13706 = function(name__9363__auto__,value__9364__auto__){
switch(arguments.length){
case 1:
return email_field13706__1.call(this,name__9363__auto__);
case 2:
return email_field13706__2.call(this,name__9363__auto__,value__9364__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field13706.cljs$core$IFn$_invoke$arity$1 = email_field13706__1;
email_field13706.cljs$core$IFn$_invoke$arity$2 = email_field13706__2;
return email_field13706;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field13706);
/**
* Creates a file input field.
*/
sablono.core.file_field13707 = (function() {
var file_field13707 = null;
var file_field13707__1 = (function (name__9363__auto__){return file_field13707.call(null,name__9363__auto__,null);
});
var file_field13707__2 = (function (name__9363__auto__,value__9364__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",-1637388491,null))].join(''),name__9363__auto__,value__9364__auto__);
});
file_field13707 = function(name__9363__auto__,value__9364__auto__){
switch(arguments.length){
case 1:
return file_field13707__1.call(this,name__9363__auto__);
case 2:
return file_field13707__2.call(this,name__9363__auto__,value__9364__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field13707.cljs$core$IFn$_invoke$arity$1 = file_field13707__1;
file_field13707.cljs$core$IFn$_invoke$arity$2 = file_field13707__2;
return file_field13707;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field13707);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field13708 = (function() {
var hidden_field13708 = null;
var hidden_field13708__1 = (function (name__9363__auto__){return hidden_field13708.call(null,name__9363__auto__,null);
});
var hidden_field13708__2 = (function (name__9363__auto__,value__9364__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))].join(''),name__9363__auto__,value__9364__auto__);
});
hidden_field13708 = function(name__9363__auto__,value__9364__auto__){
switch(arguments.length){
case 1:
return hidden_field13708__1.call(this,name__9363__auto__);
case 2:
return hidden_field13708__2.call(this,name__9363__auto__,value__9364__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field13708.cljs$core$IFn$_invoke$arity$1 = hidden_field13708__1;
hidden_field13708.cljs$core$IFn$_invoke$arity$2 = hidden_field13708__2;
return hidden_field13708;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field13708);
/**
* Creates a month input field.
*/
sablono.core.month_field13709 = (function() {
var month_field13709 = null;
var month_field13709__1 = (function (name__9363__auto__){return month_field13709.call(null,name__9363__auto__,null);
});
var month_field13709__2 = (function (name__9363__auto__,value__9364__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-1536451527,null))].join(''),name__9363__auto__,value__9364__auto__);
});
month_field13709 = function(name__9363__auto__,value__9364__auto__){
switch(arguments.length){
case 1:
return month_field13709__1.call(this,name__9363__auto__);
case 2:
return month_field13709__2.call(this,name__9363__auto__,value__9364__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field13709.cljs$core$IFn$_invoke$arity$1 = month_field13709__1;
month_field13709.cljs$core$IFn$_invoke$arity$2 = month_field13709__2;
return month_field13709;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field13709);
/**
* Creates a number input field.
*/
sablono.core.number_field13710 = (function() {
var number_field13710 = null;
var number_field13710__1 = (function (name__9363__auto__){return number_field13710.call(null,name__9363__auto__,null);
});
var number_field13710__2 = (function (name__9363__auto__,value__9364__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",1620071682,null))].join(''),name__9363__auto__,value__9364__auto__);
});
number_field13710 = function(name__9363__auto__,value__9364__auto__){
switch(arguments.length){
case 1:
return number_field13710__1.call(this,name__9363__auto__);
case 2:
return number_field13710__2.call(this,name__9363__auto__,value__9364__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field13710.cljs$core$IFn$_invoke$arity$1 = number_field13710__1;
number_field13710.cljs$core$IFn$_invoke$arity$2 = number_field13710__2;
return number_field13710;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field13710);
/**
* Creates a password input field.
*/
sablono.core.password_field13711 = (function() {
var password_field13711 = null;
var password_field13711__1 = (function (name__9363__auto__){return password_field13711.call(null,name__9363__auto__,null);
});
var password_field13711__2 = (function (name__9363__auto__,value__9364__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",-423545772,null))].join(''),name__9363__auto__,value__9364__auto__);
});
password_field13711 = function(name__9363__auto__,value__9364__auto__){
switch(arguments.length){
case 1:
return password_field13711__1.call(this,name__9363__auto__);
case 2:
return password_field13711__2.call(this,name__9363__auto__,value__9364__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field13711.cljs$core$IFn$_invoke$arity$1 = password_field13711__1;
password_field13711.cljs$core$IFn$_invoke$arity$2 = password_field13711__2;
return password_field13711;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field13711);
/**
* Creates a range input field.
*/
sablono.core.range_field13712 = (function() {
var range_field13712 = null;
var range_field13712__1 = (function (name__9363__auto__){return range_field13712.call(null,name__9363__auto__,null);
});
var range_field13712__2 = (function (name__9363__auto__,value__9364__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1532251402,null))].join(''),name__9363__auto__,value__9364__auto__);
});
range_field13712 = function(name__9363__auto__,value__9364__auto__){
switch(arguments.length){
case 1:
return range_field13712__1.call(this,name__9363__auto__);
case 2:
return range_field13712__2.call(this,name__9363__auto__,value__9364__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field13712.cljs$core$IFn$_invoke$arity$1 = range_field13712__1;
range_field13712.cljs$core$IFn$_invoke$arity$2 = range_field13712__2;
return range_field13712;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field13712);
/**
* Creates a search input field.
*/
sablono.core.search_field13713 = (function() {
var search_field13713 = null;
var search_field13713__1 = (function (name__9363__auto__){return search_field13713.call(null,name__9363__auto__,null);
});
var search_field13713__2 = (function (name__9363__auto__,value__9364__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",1748098913,null))].join(''),name__9363__auto__,value__9364__auto__);
});
search_field13713 = function(name__9363__auto__,value__9364__auto__){
switch(arguments.length){
case 1:
return search_field13713__1.call(this,name__9363__auto__);
case 2:
return search_field13713__2.call(this,name__9363__auto__,value__9364__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field13713.cljs$core$IFn$_invoke$arity$1 = search_field13713__1;
search_field13713.cljs$core$IFn$_invoke$arity$2 = search_field13713__2;
return search_field13713;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field13713);
/**
* Creates a tel input field.
*/
sablono.core.tel_field13714 = (function() {
var tel_field13714 = null;
var tel_field13714__1 = (function (name__9363__auto__){return tel_field13714.call(null,name__9363__auto__,null);
});
var tel_field13714__2 = (function (name__9363__auto__,value__9364__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))].join(''),name__9363__auto__,value__9364__auto__);
});
tel_field13714 = function(name__9363__auto__,value__9364__auto__){
switch(arguments.length){
case 1:
return tel_field13714__1.call(this,name__9363__auto__);
case 2:
return tel_field13714__2.call(this,name__9363__auto__,value__9364__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field13714.cljs$core$IFn$_invoke$arity$1 = tel_field13714__1;
tel_field13714.cljs$core$IFn$_invoke$arity$2 = tel_field13714__2;
return tel_field13714;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field13714);
/**
* Creates a text input field.
*/
sablono.core.text_field13715 = (function() {
var text_field13715 = null;
var text_field13715__1 = (function (name__9363__auto__){return text_field13715.call(null,name__9363__auto__,null);
});
var text_field13715__2 = (function (name__9363__auto__,value__9364__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-1636974874,null))].join(''),name__9363__auto__,value__9364__auto__);
});
text_field13715 = function(name__9363__auto__,value__9364__auto__){
switch(arguments.length){
case 1:
return text_field13715__1.call(this,name__9363__auto__);
case 2:
return text_field13715__2.call(this,name__9363__auto__,value__9364__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field13715.cljs$core$IFn$_invoke$arity$1 = text_field13715__1;
text_field13715.cljs$core$IFn$_invoke$arity$2 = text_field13715__2;
return text_field13715;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field13715);
/**
* Creates a time input field.
*/
sablono.core.time_field13716 = (function() {
var time_field13716 = null;
var time_field13716__1 = (function (name__9363__auto__){return time_field13716.call(null,name__9363__auto__,null);
});
var time_field13716__2 = (function (name__9363__auto__,value__9364__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1636971386,null))].join(''),name__9363__auto__,value__9364__auto__);
});
time_field13716 = function(name__9363__auto__,value__9364__auto__){
switch(arguments.length){
case 1:
return time_field13716__1.call(this,name__9363__auto__);
case 2:
return time_field13716__2.call(this,name__9363__auto__,value__9364__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field13716.cljs$core$IFn$_invoke$arity$1 = time_field13716__1;
time_field13716.cljs$core$IFn$_invoke$arity$2 = time_field13716__2;
return time_field13716;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field13716);
/**
* Creates a url input field.
*/
sablono.core.url_field13717 = (function() {
var url_field13717 = null;
var url_field13717__1 = (function (name__9363__auto__){return url_field13717.call(null,name__9363__auto__,null);
});
var url_field13717__2 = (function (name__9363__auto__,value__9364__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",-1640415448,null))].join(''),name__9363__auto__,value__9364__auto__);
});
url_field13717 = function(name__9363__auto__,value__9364__auto__){
switch(arguments.length){
case 1:
return url_field13717__1.call(this,name__9363__auto__);
case 2:
return url_field13717__2.call(this,name__9363__auto__,value__9364__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field13717.cljs$core$IFn$_invoke$arity$1 = url_field13717__1;
url_field13717.cljs$core$IFn$_invoke$arity$2 = url_field13717__2;
return url_field13717;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field13717);
/**
* Creates a week input field.
*/
sablono.core.week_field13718 = (function() {
var week_field13718 = null;
var week_field13718__1 = (function (name__9363__auto__){return week_field13718.call(null,name__9363__auto__,null);
});
var week_field13718__2 = (function (name__9363__auto__,value__9364__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",-1636886099,null))].join(''),name__9363__auto__,value__9364__auto__);
});
week_field13718 = function(name__9363__auto__,value__9364__auto__){
switch(arguments.length){
case 1:
return week_field13718__1.call(this,name__9363__auto__);
case 2:
return week_field13718__2.call(this,name__9363__auto__,value__9364__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field13718.cljs$core$IFn$_invoke$arity$1 = week_field13718__1;
week_field13718.cljs$core$IFn$_invoke$arity$2 = week_field13718__2;
return week_field13718;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field13718);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box13719 = (function() {
var check_box13719 = null;
var check_box13719__1 = (function (name){return check_box13719.call(null,name,null);
});
var check_box13719__2 = (function (name,checked_QMARK_){return check_box13719.call(null,name,checked_QMARK_,"true");
});
var check_box13719__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box13719 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box13719__1.call(this,name);
case 2:
return check_box13719__2.call(this,name,checked_QMARK_);
case 3:
return check_box13719__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box13719.cljs$core$IFn$_invoke$arity$1 = check_box13719__1;
check_box13719.cljs$core$IFn$_invoke$arity$2 = check_box13719__2;
check_box13719.cljs$core$IFn$_invoke$arity$3 = check_box13719__3;
return check_box13719;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box13719);
/**
* Creates a radio button.
*/
sablono.core.radio_button13720 = (function() {
var radio_button13720 = null;
var radio_button13720__1 = (function (group){return radio_button13720.call(null,group,null);
});
var radio_button13720__2 = (function (group,checked_QMARK_){return radio_button13720.call(null,group,checked_QMARK_,"true");
});
var radio_button13720__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button13720 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button13720__1.call(this,group);
case 2:
return radio_button13720__2.call(this,group,checked_QMARK_);
case 3:
return radio_button13720__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button13720.cljs$core$IFn$_invoke$arity$1 = radio_button13720__1;
radio_button13720.cljs$core$IFn$_invoke$arity$2 = radio_button13720__2;
radio_button13720.cljs$core$IFn$_invoke$arity$3 = radio_button13720__3;
return radio_button13720;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button13720);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options13721 = (function() {
var select_options13721 = null;
var select_options13721__1 = (function (coll){return select_options13721.call(null,coll,null);
});
var select_options13721__2 = (function (coll,selected){var iter__8598__auto__ = (function iter__13730(s__13731){return (new cljs.core.LazySeq(null,(function (){var s__13731__$1 = s__13731;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13731__$1);if(temp__4126__auto__)
{var s__13731__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13731__$2))
{var c__8596__auto__ = cljs.core.chunk_first.call(null,s__13731__$2);var size__8597__auto__ = cljs.core.count.call(null,c__8596__auto__);var b__13733 = cljs.core.chunk_buffer.call(null,size__8597__auto__);if((function (){var i__13732 = 0;while(true){
if((i__13732 < size__8597__auto__))
{var x = cljs.core._nth.call(null,c__8596__auto__,i__13732);cljs.core.chunk_append.call(null,b__13733,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__13736 = x;var text = cljs.core.nth.call(null,vec__13736,0,null);var val = cljs.core.nth.call(null,vec__13736,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__13736,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options13721.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__13738 = (i__13732 + 1);
i__13732 = G__13738;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13733),iter__13730.call(null,cljs.core.chunk_rest.call(null,s__13731__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13733),null);
}
} else
{var x = cljs.core.first.call(null,s__13731__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__13737 = x;var text = cljs.core.nth.call(null,vec__13737,0,null);var val = cljs.core.nth.call(null,vec__13737,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__13737,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options13721.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__13730.call(null,cljs.core.rest.call(null,s__13731__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8598__auto__.call(null,coll);
});
select_options13721 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options13721__1.call(this,coll);
case 2:
return select_options13721__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options13721.cljs$core$IFn$_invoke$arity$1 = select_options13721__1;
select_options13721.cljs$core$IFn$_invoke$arity$2 = select_options13721__2;
return select_options13721;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options13721);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down13739 = (function() {
var drop_down13739 = null;
var drop_down13739__2 = (function (name,options){return drop_down13739.call(null,name,options,null);
});
var drop_down13739__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down13739 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down13739__2.call(this,name,options);
case 3:
return drop_down13739__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down13739.cljs$core$IFn$_invoke$arity$2 = drop_down13739__2;
drop_down13739.cljs$core$IFn$_invoke$arity$3 = drop_down13739__3;
return drop_down13739;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down13739);
/**
* Creates a text area element.
*/
sablono.core.text_area13740 = (function() {
var text_area13740 = null;
var text_area13740__1 = (function (name){return text_area13740.call(null,name,null);
});
var text_area13740__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area13740 = function(name,value){
switch(arguments.length){
case 1:
return text_area13740__1.call(this,name);
case 2:
return text_area13740__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area13740.cljs$core$IFn$_invoke$arity$1 = text_area13740__1;
text_area13740.cljs$core$IFn$_invoke$arity$2 = text_area13740__2;
return text_area13740;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area13740);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label13741 = (function label13741(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label13741);
/**
* Creates a submit button.
*/
sablono.core.submit_button13742 = (function submit_button13742(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button13742);
/**
* Creates a form reset button.
*/
sablono.core.reset_button13743 = (function reset_button13743(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button13743);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to13744 = (function() { 
var form_to13744__delegate = function (p__13745,body){var vec__13747 = p__13745;var method = cljs.core.nth.call(null,vec__13747,0,null);var action = cljs.core.nth.call(null,vec__13747,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to13744 = function (p__13745,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to13744__delegate.call(this,p__13745,body);};
form_to13744.cljs$lang$maxFixedArity = 1;
form_to13744.cljs$lang$applyTo = (function (arglist__13748){
var p__13745 = cljs.core.first(arglist__13748);
var body = cljs.core.rest(arglist__13748);
return form_to13744__delegate(p__13745,body);
});
form_to13744.cljs$core$IFn$_invoke$arity$variadic = form_to13744__delegate;
return form_to13744;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to13744);

//# sourceMappingURL=core.js.map
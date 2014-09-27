// Compiled by ClojureScript 0.0-2202
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t37266 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37266 = (function (f,fn_handler,meta37267){
this.f = f;
this.fn_handler = fn_handler;
this.meta37267 = meta37267;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37266.cljs$lang$type = true;
cljs.core.async.t37266.cljs$lang$ctorStr = "cljs.core.async/t37266";
cljs.core.async.t37266.cljs$lang$ctorPrWriter = (function (this__8448__auto__,writer__8449__auto__,opt__8450__auto__){return cljs.core._write.call(null,writer__8449__auto__,"cljs.core.async/t37266");
});
cljs.core.async.t37266.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t37266.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t37266.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t37266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37268){var self__ = this;
var _37268__$1 = this;return self__.meta37267;
});
cljs.core.async.t37266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37268,meta37267__$1){var self__ = this;
var _37268__$1 = this;return (new cljs.core.async.t37266(self__.f,self__.fn_handler,meta37267__$1));
});
cljs.core.async.__GT_t37266 = (function __GT_t37266(f__$1,fn_handler__$1,meta37267){return (new cljs.core.async.t37266(f__$1,fn_handler__$1,meta37267));
});
}
return (new cljs.core.async.t37266(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__37270 = buff;if(G__37270)
{var bit__8531__auto__ = null;if(cljs.core.truth_((function (){var or__7881__auto__ = bit__8531__auto__;if(cljs.core.truth_(or__7881__auto__))
{return or__7881__auto__;
} else
{return G__37270.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__37270.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__37270);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__37270);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_37271 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_37271);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_37271,ret){
return (function (){return fn1.call(null,val_37271);
});})(val_37271,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8729__auto___37272 = n;var x_37273 = 0;while(true){
if((x_37273 < n__8729__auto___37272))
{(a[x_37273] = 0);
{
var G__37274 = (x_37273 + 1);
x_37273 = G__37274;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__37275 = (i + 1);
i = G__37275;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t37279 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37279 = (function (flag,alt_flag,meta37280){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta37280 = meta37280;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37279.cljs$lang$type = true;
cljs.core.async.t37279.cljs$lang$ctorStr = "cljs.core.async/t37279";
cljs.core.async.t37279.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8448__auto__,writer__8449__auto__,opt__8450__auto__){return cljs.core._write.call(null,writer__8449__auto__,"cljs.core.async/t37279");
});})(flag))
;
cljs.core.async.t37279.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t37279.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t37279.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t37279.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_37281){var self__ = this;
var _37281__$1 = this;return self__.meta37280;
});})(flag))
;
cljs.core.async.t37279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_37281,meta37280__$1){var self__ = this;
var _37281__$1 = this;return (new cljs.core.async.t37279(self__.flag,self__.alt_flag,meta37280__$1));
});})(flag))
;
cljs.core.async.__GT_t37279 = ((function (flag){
return (function __GT_t37279(flag__$1,alt_flag__$1,meta37280){return (new cljs.core.async.t37279(flag__$1,alt_flag__$1,meta37280));
});})(flag))
;
}
return (new cljs.core.async.t37279(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t37285 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37285 = (function (cb,flag,alt_handler,meta37286){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta37286 = meta37286;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37285.cljs$lang$type = true;
cljs.core.async.t37285.cljs$lang$ctorStr = "cljs.core.async/t37285";
cljs.core.async.t37285.cljs$lang$ctorPrWriter = (function (this__8448__auto__,writer__8449__auto__,opt__8450__auto__){return cljs.core._write.call(null,writer__8449__auto__,"cljs.core.async/t37285");
});
cljs.core.async.t37285.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t37285.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t37285.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t37285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37287){var self__ = this;
var _37287__$1 = this;return self__.meta37286;
});
cljs.core.async.t37285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37287,meta37286__$1){var self__ = this;
var _37287__$1 = this;return (new cljs.core.async.t37285(self__.cb,self__.flag,self__.alt_handler,meta37286__$1));
});
cljs.core.async.__GT_t37285 = (function __GT_t37285(cb__$1,flag__$1,alt_handler__$1,meta37286){return (new cljs.core.async.t37285(cb__$1,flag__$1,alt_handler__$1,meta37286));
});
}
return (new cljs.core.async.t37285(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37288_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37288_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37289_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37289_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7881__auto__ = wport;if(cljs.core.truth_(or__7881__auto__))
{return or__7881__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__37290 = (i + 1);
i = G__37290;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7881__auto__ = ret;if(cljs.core.truth_(or__7881__auto__))
{return or__7881__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__7869__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7869__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7869__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__37291){var map__37293 = p__37291;var map__37293__$1 = ((cljs.core.seq_QMARK_.call(null,map__37293))?cljs.core.apply.call(null,cljs.core.hash_map,map__37293):map__37293);var opts = map__37293__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__37291 = null;if (arguments.length > 1) {
  p__37291 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__37291);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__37294){
var ports = cljs.core.first(arglist__37294);
var p__37291 = cljs.core.rest(arglist__37294);
return alts_BANG___delegate(ports,p__37291);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t37302 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37302 = (function (ch,f,map_LT_,meta37303){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta37303 = meta37303;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37302.cljs$lang$type = true;
cljs.core.async.t37302.cljs$lang$ctorStr = "cljs.core.async/t37302";
cljs.core.async.t37302.cljs$lang$ctorPrWriter = (function (this__8448__auto__,writer__8449__auto__,opt__8450__auto__){return cljs.core._write.call(null,writer__8449__auto__,"cljs.core.async/t37302");
});
cljs.core.async.t37302.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t37302.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t37302.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t37302.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t37305 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37305 = (function (fn1,_,meta37303,ch,f,map_LT_,meta37306){
this.fn1 = fn1;
this._ = _;
this.meta37303 = meta37303;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta37306 = meta37306;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37305.cljs$lang$type = true;
cljs.core.async.t37305.cljs$lang$ctorStr = "cljs.core.async/t37305";
cljs.core.async.t37305.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8448__auto__,writer__8449__auto__,opt__8450__auto__){return cljs.core._write.call(null,writer__8449__auto__,"cljs.core.async/t37305");
});})(___$1))
;
cljs.core.async.t37305.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t37305.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t37305.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t37305.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__37295_SHARP_){return f1.call(null,(((p1__37295_SHARP_ == null))?null:self__.f.call(null,p1__37295_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t37305.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_37307){var self__ = this;
var _37307__$1 = this;return self__.meta37306;
});})(___$1))
;
cljs.core.async.t37305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_37307,meta37306__$1){var self__ = this;
var _37307__$1 = this;return (new cljs.core.async.t37305(self__.fn1,self__._,self__.meta37303,self__.ch,self__.f,self__.map_LT_,meta37306__$1));
});})(___$1))
;
cljs.core.async.__GT_t37305 = ((function (___$1){
return (function __GT_t37305(fn1__$1,___$2,meta37303__$1,ch__$2,f__$2,map_LT___$2,meta37306){return (new cljs.core.async.t37305(fn1__$1,___$2,meta37303__$1,ch__$2,f__$2,map_LT___$2,meta37306));
});})(___$1))
;
}
return (new cljs.core.async.t37305(fn1,___$1,self__.meta37303,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7869__auto__ = ret;if(cljs.core.truth_(and__7869__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7869__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t37302.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t37302.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t37302.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t37302.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37304){var self__ = this;
var _37304__$1 = this;return self__.meta37303;
});
cljs.core.async.t37302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37304,meta37303__$1){var self__ = this;
var _37304__$1 = this;return (new cljs.core.async.t37302(self__.ch,self__.f,self__.map_LT_,meta37303__$1));
});
cljs.core.async.__GT_t37302 = (function __GT_t37302(ch__$1,f__$1,map_LT___$1,meta37303){return (new cljs.core.async.t37302(ch__$1,f__$1,map_LT___$1,meta37303));
});
}
return (new cljs.core.async.t37302(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t37311 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37311 = (function (ch,f,map_GT_,meta37312){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta37312 = meta37312;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37311.cljs$lang$type = true;
cljs.core.async.t37311.cljs$lang$ctorStr = "cljs.core.async/t37311";
cljs.core.async.t37311.cljs$lang$ctorPrWriter = (function (this__8448__auto__,writer__8449__auto__,opt__8450__auto__){return cljs.core._write.call(null,writer__8449__auto__,"cljs.core.async/t37311");
});
cljs.core.async.t37311.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t37311.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t37311.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t37311.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t37311.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t37311.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t37311.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37313){var self__ = this;
var _37313__$1 = this;return self__.meta37312;
});
cljs.core.async.t37311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37313,meta37312__$1){var self__ = this;
var _37313__$1 = this;return (new cljs.core.async.t37311(self__.ch,self__.f,self__.map_GT_,meta37312__$1));
});
cljs.core.async.__GT_t37311 = (function __GT_t37311(ch__$1,f__$1,map_GT___$1,meta37312){return (new cljs.core.async.t37311(ch__$1,f__$1,map_GT___$1,meta37312));
});
}
return (new cljs.core.async.t37311(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t37317 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37317 = (function (ch,p,filter_GT_,meta37318){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta37318 = meta37318;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37317.cljs$lang$type = true;
cljs.core.async.t37317.cljs$lang$ctorStr = "cljs.core.async/t37317";
cljs.core.async.t37317.cljs$lang$ctorPrWriter = (function (this__8448__auto__,writer__8449__auto__,opt__8450__auto__){return cljs.core._write.call(null,writer__8449__auto__,"cljs.core.async/t37317");
});
cljs.core.async.t37317.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t37317.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t37317.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t37317.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t37317.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t37317.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t37317.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t37317.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37319){var self__ = this;
var _37319__$1 = this;return self__.meta37318;
});
cljs.core.async.t37317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37319,meta37318__$1){var self__ = this;
var _37319__$1 = this;return (new cljs.core.async.t37317(self__.ch,self__.p,self__.filter_GT_,meta37318__$1));
});
cljs.core.async.__GT_t37317 = (function __GT_t37317(ch__$1,p__$1,filter_GT___$1,meta37318){return (new cljs.core.async.t37317(ch__$1,p__$1,filter_GT___$1,meta37318));
});
}
return (new cljs.core.async.t37317(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11008__auto___37402 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11008__auto___37402,out){
return (function (){var f__11009__auto__ = (function (){var switch__10944__auto__ = ((function (c__11008__auto___37402,out){
return (function (state_37381){var state_val_37382 = (state_37381[1]);if((state_val_37382 === 7))
{var inst_37377 = (state_37381[2]);var state_37381__$1 = state_37381;var statearr_37383_37403 = state_37381__$1;(statearr_37383_37403[2] = inst_37377);
(statearr_37383_37403[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37382 === 1))
{var state_37381__$1 = state_37381;var statearr_37384_37404 = state_37381__$1;(statearr_37384_37404[2] = null);
(statearr_37384_37404[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37382 === 4))
{var inst_37363 = (state_37381[7]);var inst_37363__$1 = (state_37381[2]);var inst_37364 = (inst_37363__$1 == null);var state_37381__$1 = (function (){var statearr_37385 = state_37381;(statearr_37385[7] = inst_37363__$1);
return statearr_37385;
})();if(cljs.core.truth_(inst_37364))
{var statearr_37386_37405 = state_37381__$1;(statearr_37386_37405[1] = 5);
} else
{var statearr_37387_37406 = state_37381__$1;(statearr_37387_37406[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37382 === 6))
{var inst_37363 = (state_37381[7]);var inst_37368 = p.call(null,inst_37363);var state_37381__$1 = state_37381;if(cljs.core.truth_(inst_37368))
{var statearr_37388_37407 = state_37381__$1;(statearr_37388_37407[1] = 8);
} else
{var statearr_37389_37408 = state_37381__$1;(statearr_37389_37408[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37382 === 3))
{var inst_37379 = (state_37381[2]);var state_37381__$1 = state_37381;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37381__$1,inst_37379);
} else
{if((state_val_37382 === 2))
{var state_37381__$1 = state_37381;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37381__$1,4,ch);
} else
{if((state_val_37382 === 11))
{var inst_37371 = (state_37381[2]);var state_37381__$1 = state_37381;var statearr_37390_37409 = state_37381__$1;(statearr_37390_37409[2] = inst_37371);
(statearr_37390_37409[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37382 === 9))
{var state_37381__$1 = state_37381;var statearr_37391_37410 = state_37381__$1;(statearr_37391_37410[2] = null);
(statearr_37391_37410[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37382 === 5))
{var inst_37366 = cljs.core.async.close_BANG_.call(null,out);var state_37381__$1 = state_37381;var statearr_37392_37411 = state_37381__$1;(statearr_37392_37411[2] = inst_37366);
(statearr_37392_37411[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37382 === 10))
{var inst_37374 = (state_37381[2]);var state_37381__$1 = (function (){var statearr_37393 = state_37381;(statearr_37393[8] = inst_37374);
return statearr_37393;
})();var statearr_37394_37412 = state_37381__$1;(statearr_37394_37412[2] = null);
(statearr_37394_37412[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37382 === 8))
{var inst_37363 = (state_37381[7]);var state_37381__$1 = state_37381;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37381__$1,11,out,inst_37363);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11008__auto___37402,out))
;return ((function (switch__10944__auto__,c__11008__auto___37402,out){
return (function() {
var state_machine__10945__auto__ = null;
var state_machine__10945__auto____0 = (function (){var statearr_37398 = [null,null,null,null,null,null,null,null,null];(statearr_37398[0] = state_machine__10945__auto__);
(statearr_37398[1] = 1);
return statearr_37398;
});
var state_machine__10945__auto____1 = (function (state_37381){while(true){
var ret_value__10946__auto__ = (function (){try{while(true){
var result__10947__auto__ = switch__10944__auto__.call(null,state_37381);if(cljs.core.keyword_identical_QMARK_.call(null,result__10947__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10947__auto__;
}
break;
}
}catch (e37399){if((e37399 instanceof Object))
{var ex__10948__auto__ = e37399;var statearr_37400_37413 = state_37381;(statearr_37400_37413[5] = ex__10948__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37381);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37399;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10946__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37414 = state_37381;
state_37381 = G__37414;
continue;
}
} else
{return ret_value__10946__auto__;
}
break;
}
});
state_machine__10945__auto__ = function(state_37381){
switch(arguments.length){
case 0:
return state_machine__10945__auto____0.call(this);
case 1:
return state_machine__10945__auto____1.call(this,state_37381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10945__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10945__auto____0;
state_machine__10945__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10945__auto____1;
return state_machine__10945__auto__;
})()
;})(switch__10944__auto__,c__11008__auto___37402,out))
})();var state__11010__auto__ = (function (){var statearr_37401 = f__11009__auto__.call(null);(statearr_37401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11008__auto___37402);
return statearr_37401;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11010__auto__);
});})(c__11008__auto___37402,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__11008__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11008__auto__){
return (function (){var f__11009__auto__ = (function (){var switch__10944__auto__ = ((function (c__11008__auto__){
return (function (state_37580){var state_val_37581 = (state_37580[1]);if((state_val_37581 === 7))
{var inst_37576 = (state_37580[2]);var state_37580__$1 = state_37580;var statearr_37582_37623 = state_37580__$1;(statearr_37582_37623[2] = inst_37576);
(statearr_37582_37623[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37581 === 20))
{var inst_37546 = (state_37580[7]);var inst_37557 = (state_37580[2]);var inst_37558 = cljs.core.next.call(null,inst_37546);var inst_37532 = inst_37558;var inst_37533 = null;var inst_37534 = 0;var inst_37535 = 0;var state_37580__$1 = (function (){var statearr_37583 = state_37580;(statearr_37583[8] = inst_37535);
(statearr_37583[9] = inst_37557);
(statearr_37583[10] = inst_37534);
(statearr_37583[11] = inst_37533);
(statearr_37583[12] = inst_37532);
return statearr_37583;
})();var statearr_37584_37624 = state_37580__$1;(statearr_37584_37624[2] = null);
(statearr_37584_37624[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37581 === 1))
{var state_37580__$1 = state_37580;var statearr_37585_37625 = state_37580__$1;(statearr_37585_37625[2] = null);
(statearr_37585_37625[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37581 === 4))
{var inst_37521 = (state_37580[13]);var inst_37521__$1 = (state_37580[2]);var inst_37522 = (inst_37521__$1 == null);var state_37580__$1 = (function (){var statearr_37586 = state_37580;(statearr_37586[13] = inst_37521__$1);
return statearr_37586;
})();if(cljs.core.truth_(inst_37522))
{var statearr_37587_37626 = state_37580__$1;(statearr_37587_37626[1] = 5);
} else
{var statearr_37588_37627 = state_37580__$1;(statearr_37588_37627[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37581 === 15))
{var state_37580__$1 = state_37580;var statearr_37592_37628 = state_37580__$1;(statearr_37592_37628[2] = null);
(statearr_37592_37628[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37581 === 21))
{var state_37580__$1 = state_37580;var statearr_37593_37629 = state_37580__$1;(statearr_37593_37629[2] = null);
(statearr_37593_37629[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37581 === 13))
{var inst_37535 = (state_37580[8]);var inst_37534 = (state_37580[10]);var inst_37533 = (state_37580[11]);var inst_37532 = (state_37580[12]);var inst_37542 = (state_37580[2]);var inst_37543 = (inst_37535 + 1);var tmp37589 = inst_37534;var tmp37590 = inst_37533;var tmp37591 = inst_37532;var inst_37532__$1 = tmp37591;var inst_37533__$1 = tmp37590;var inst_37534__$1 = tmp37589;var inst_37535__$1 = inst_37543;var state_37580__$1 = (function (){var statearr_37594 = state_37580;(statearr_37594[8] = inst_37535__$1);
(statearr_37594[14] = inst_37542);
(statearr_37594[10] = inst_37534__$1);
(statearr_37594[11] = inst_37533__$1);
(statearr_37594[12] = inst_37532__$1);
return statearr_37594;
})();var statearr_37595_37630 = state_37580__$1;(statearr_37595_37630[2] = null);
(statearr_37595_37630[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37581 === 22))
{var state_37580__$1 = state_37580;var statearr_37596_37631 = state_37580__$1;(statearr_37596_37631[2] = null);
(statearr_37596_37631[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37581 === 6))
{var inst_37521 = (state_37580[13]);var inst_37530 = f.call(null,inst_37521);var inst_37531 = cljs.core.seq.call(null,inst_37530);var inst_37532 = inst_37531;var inst_37533 = null;var inst_37534 = 0;var inst_37535 = 0;var state_37580__$1 = (function (){var statearr_37597 = state_37580;(statearr_37597[8] = inst_37535);
(statearr_37597[10] = inst_37534);
(statearr_37597[11] = inst_37533);
(statearr_37597[12] = inst_37532);
return statearr_37597;
})();var statearr_37598_37632 = state_37580__$1;(statearr_37598_37632[2] = null);
(statearr_37598_37632[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37581 === 17))
{var inst_37546 = (state_37580[7]);var inst_37550 = cljs.core.chunk_first.call(null,inst_37546);var inst_37551 = cljs.core.chunk_rest.call(null,inst_37546);var inst_37552 = cljs.core.count.call(null,inst_37550);var inst_37532 = inst_37551;var inst_37533 = inst_37550;var inst_37534 = inst_37552;var inst_37535 = 0;var state_37580__$1 = (function (){var statearr_37599 = state_37580;(statearr_37599[8] = inst_37535);
(statearr_37599[10] = inst_37534);
(statearr_37599[11] = inst_37533);
(statearr_37599[12] = inst_37532);
return statearr_37599;
})();var statearr_37600_37633 = state_37580__$1;(statearr_37600_37633[2] = null);
(statearr_37600_37633[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37581 === 3))
{var inst_37578 = (state_37580[2]);var state_37580__$1 = state_37580;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37580__$1,inst_37578);
} else
{if((state_val_37581 === 12))
{var inst_37566 = (state_37580[2]);var state_37580__$1 = state_37580;var statearr_37601_37634 = state_37580__$1;(statearr_37601_37634[2] = inst_37566);
(statearr_37601_37634[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37581 === 2))
{var state_37580__$1 = state_37580;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37580__$1,4,in$);
} else
{if((state_val_37581 === 23))
{var inst_37574 = (state_37580[2]);var state_37580__$1 = state_37580;var statearr_37602_37635 = state_37580__$1;(statearr_37602_37635[2] = inst_37574);
(statearr_37602_37635[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37581 === 19))
{var inst_37561 = (state_37580[2]);var state_37580__$1 = state_37580;var statearr_37603_37636 = state_37580__$1;(statearr_37603_37636[2] = inst_37561);
(statearr_37603_37636[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37581 === 11))
{var inst_37546 = (state_37580[7]);var inst_37532 = (state_37580[12]);var inst_37546__$1 = cljs.core.seq.call(null,inst_37532);var state_37580__$1 = (function (){var statearr_37604 = state_37580;(statearr_37604[7] = inst_37546__$1);
return statearr_37604;
})();if(inst_37546__$1)
{var statearr_37605_37637 = state_37580__$1;(statearr_37605_37637[1] = 14);
} else
{var statearr_37606_37638 = state_37580__$1;(statearr_37606_37638[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37581 === 9))
{var inst_37568 = (state_37580[2]);var inst_37569 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_37580__$1 = (function (){var statearr_37607 = state_37580;(statearr_37607[15] = inst_37568);
return statearr_37607;
})();if(cljs.core.truth_(inst_37569))
{var statearr_37608_37639 = state_37580__$1;(statearr_37608_37639[1] = 21);
} else
{var statearr_37609_37640 = state_37580__$1;(statearr_37609_37640[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37581 === 5))
{var inst_37524 = cljs.core.async.close_BANG_.call(null,out);var state_37580__$1 = state_37580;var statearr_37610_37641 = state_37580__$1;(statearr_37610_37641[2] = inst_37524);
(statearr_37610_37641[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37581 === 14))
{var inst_37546 = (state_37580[7]);var inst_37548 = cljs.core.chunked_seq_QMARK_.call(null,inst_37546);var state_37580__$1 = state_37580;if(inst_37548)
{var statearr_37611_37642 = state_37580__$1;(statearr_37611_37642[1] = 17);
} else
{var statearr_37612_37643 = state_37580__$1;(statearr_37612_37643[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37581 === 16))
{var inst_37564 = (state_37580[2]);var state_37580__$1 = state_37580;var statearr_37613_37644 = state_37580__$1;(statearr_37613_37644[2] = inst_37564);
(statearr_37613_37644[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37581 === 10))
{var inst_37535 = (state_37580[8]);var inst_37533 = (state_37580[11]);var inst_37540 = cljs.core._nth.call(null,inst_37533,inst_37535);var state_37580__$1 = state_37580;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37580__$1,13,out,inst_37540);
} else
{if((state_val_37581 === 18))
{var inst_37546 = (state_37580[7]);var inst_37555 = cljs.core.first.call(null,inst_37546);var state_37580__$1 = state_37580;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37580__$1,20,out,inst_37555);
} else
{if((state_val_37581 === 8))
{var inst_37535 = (state_37580[8]);var inst_37534 = (state_37580[10]);var inst_37537 = (inst_37535 < inst_37534);var inst_37538 = inst_37537;var state_37580__$1 = state_37580;if(cljs.core.truth_(inst_37538))
{var statearr_37614_37645 = state_37580__$1;(statearr_37614_37645[1] = 10);
} else
{var statearr_37615_37646 = state_37580__$1;(statearr_37615_37646[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11008__auto__))
;return ((function (switch__10944__auto__,c__11008__auto__){
return (function() {
var state_machine__10945__auto__ = null;
var state_machine__10945__auto____0 = (function (){var statearr_37619 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37619[0] = state_machine__10945__auto__);
(statearr_37619[1] = 1);
return statearr_37619;
});
var state_machine__10945__auto____1 = (function (state_37580){while(true){
var ret_value__10946__auto__ = (function (){try{while(true){
var result__10947__auto__ = switch__10944__auto__.call(null,state_37580);if(cljs.core.keyword_identical_QMARK_.call(null,result__10947__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10947__auto__;
}
break;
}
}catch (e37620){if((e37620 instanceof Object))
{var ex__10948__auto__ = e37620;var statearr_37621_37647 = state_37580;(statearr_37621_37647[5] = ex__10948__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37580);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37620;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10946__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37648 = state_37580;
state_37580 = G__37648;
continue;
}
} else
{return ret_value__10946__auto__;
}
break;
}
});
state_machine__10945__auto__ = function(state_37580){
switch(arguments.length){
case 0:
return state_machine__10945__auto____0.call(this);
case 1:
return state_machine__10945__auto____1.call(this,state_37580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10945__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10945__auto____0;
state_machine__10945__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10945__auto____1;
return state_machine__10945__auto__;
})()
;})(switch__10944__auto__,c__11008__auto__))
})();var state__11010__auto__ = (function (){var statearr_37622 = f__11009__auto__.call(null);(statearr_37622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11008__auto__);
return statearr_37622;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11010__auto__);
});})(c__11008__auto__))
);
return c__11008__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__11008__auto___37743 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11008__auto___37743){
return (function (){var f__11009__auto__ = (function (){var switch__10944__auto__ = ((function (c__11008__auto___37743){
return (function (state_37719){var state_val_37720 = (state_37719[1]);if((state_val_37720 === 7))
{var inst_37715 = (state_37719[2]);var state_37719__$1 = state_37719;var statearr_37721_37744 = state_37719__$1;(statearr_37721_37744[2] = inst_37715);
(statearr_37721_37744[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37720 === 1))
{var state_37719__$1 = state_37719;var statearr_37722_37745 = state_37719__$1;(statearr_37722_37745[2] = null);
(statearr_37722_37745[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37720 === 4))
{var inst_37698 = (state_37719[7]);var inst_37698__$1 = (state_37719[2]);var inst_37699 = (inst_37698__$1 == null);var state_37719__$1 = (function (){var statearr_37723 = state_37719;(statearr_37723[7] = inst_37698__$1);
return statearr_37723;
})();if(cljs.core.truth_(inst_37699))
{var statearr_37724_37746 = state_37719__$1;(statearr_37724_37746[1] = 5);
} else
{var statearr_37725_37747 = state_37719__$1;(statearr_37725_37747[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37720 === 13))
{var state_37719__$1 = state_37719;var statearr_37726_37748 = state_37719__$1;(statearr_37726_37748[2] = null);
(statearr_37726_37748[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37720 === 6))
{var inst_37698 = (state_37719[7]);var state_37719__$1 = state_37719;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37719__$1,11,to,inst_37698);
} else
{if((state_val_37720 === 3))
{var inst_37717 = (state_37719[2]);var state_37719__$1 = state_37719;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37719__$1,inst_37717);
} else
{if((state_val_37720 === 12))
{var state_37719__$1 = state_37719;var statearr_37727_37749 = state_37719__$1;(statearr_37727_37749[2] = null);
(statearr_37727_37749[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37720 === 2))
{var state_37719__$1 = state_37719;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37719__$1,4,from);
} else
{if((state_val_37720 === 11))
{var inst_37708 = (state_37719[2]);var state_37719__$1 = state_37719;if(cljs.core.truth_(inst_37708))
{var statearr_37728_37750 = state_37719__$1;(statearr_37728_37750[1] = 12);
} else
{var statearr_37729_37751 = state_37719__$1;(statearr_37729_37751[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37720 === 9))
{var state_37719__$1 = state_37719;var statearr_37730_37752 = state_37719__$1;(statearr_37730_37752[2] = null);
(statearr_37730_37752[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37720 === 5))
{var state_37719__$1 = state_37719;if(cljs.core.truth_(close_QMARK_))
{var statearr_37731_37753 = state_37719__$1;(statearr_37731_37753[1] = 8);
} else
{var statearr_37732_37754 = state_37719__$1;(statearr_37732_37754[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37720 === 14))
{var inst_37713 = (state_37719[2]);var state_37719__$1 = state_37719;var statearr_37733_37755 = state_37719__$1;(statearr_37733_37755[2] = inst_37713);
(statearr_37733_37755[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37720 === 10))
{var inst_37705 = (state_37719[2]);var state_37719__$1 = state_37719;var statearr_37734_37756 = state_37719__$1;(statearr_37734_37756[2] = inst_37705);
(statearr_37734_37756[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37720 === 8))
{var inst_37702 = cljs.core.async.close_BANG_.call(null,to);var state_37719__$1 = state_37719;var statearr_37735_37757 = state_37719__$1;(statearr_37735_37757[2] = inst_37702);
(statearr_37735_37757[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11008__auto___37743))
;return ((function (switch__10944__auto__,c__11008__auto___37743){
return (function() {
var state_machine__10945__auto__ = null;
var state_machine__10945__auto____0 = (function (){var statearr_37739 = [null,null,null,null,null,null,null,null];(statearr_37739[0] = state_machine__10945__auto__);
(statearr_37739[1] = 1);
return statearr_37739;
});
var state_machine__10945__auto____1 = (function (state_37719){while(true){
var ret_value__10946__auto__ = (function (){try{while(true){
var result__10947__auto__ = switch__10944__auto__.call(null,state_37719);if(cljs.core.keyword_identical_QMARK_.call(null,result__10947__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10947__auto__;
}
break;
}
}catch (e37740){if((e37740 instanceof Object))
{var ex__10948__auto__ = e37740;var statearr_37741_37758 = state_37719;(statearr_37741_37758[5] = ex__10948__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37719);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37740;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10946__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37759 = state_37719;
state_37719 = G__37759;
continue;
}
} else
{return ret_value__10946__auto__;
}
break;
}
});
state_machine__10945__auto__ = function(state_37719){
switch(arguments.length){
case 0:
return state_machine__10945__auto____0.call(this);
case 1:
return state_machine__10945__auto____1.call(this,state_37719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10945__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10945__auto____0;
state_machine__10945__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10945__auto____1;
return state_machine__10945__auto__;
})()
;})(switch__10944__auto__,c__11008__auto___37743))
})();var state__11010__auto__ = (function (){var statearr_37742 = f__11009__auto__.call(null);(statearr_37742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11008__auto___37743);
return statearr_37742;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11010__auto__);
});})(c__11008__auto___37743))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__11008__auto___37860 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11008__auto___37860,tc,fc){
return (function (){var f__11009__auto__ = (function (){var switch__10944__auto__ = ((function (c__11008__auto___37860,tc,fc){
return (function (state_37835){var state_val_37836 = (state_37835[1]);if((state_val_37836 === 7))
{var inst_37831 = (state_37835[2]);var state_37835__$1 = state_37835;var statearr_37837_37861 = state_37835__$1;(statearr_37837_37861[2] = inst_37831);
(statearr_37837_37861[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37836 === 1))
{var state_37835__$1 = state_37835;var statearr_37838_37862 = state_37835__$1;(statearr_37838_37862[2] = null);
(statearr_37838_37862[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37836 === 4))
{var inst_37812 = (state_37835[7]);var inst_37812__$1 = (state_37835[2]);var inst_37813 = (inst_37812__$1 == null);var state_37835__$1 = (function (){var statearr_37839 = state_37835;(statearr_37839[7] = inst_37812__$1);
return statearr_37839;
})();if(cljs.core.truth_(inst_37813))
{var statearr_37840_37863 = state_37835__$1;(statearr_37840_37863[1] = 5);
} else
{var statearr_37841_37864 = state_37835__$1;(statearr_37841_37864[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37836 === 13))
{var state_37835__$1 = state_37835;var statearr_37842_37865 = state_37835__$1;(statearr_37842_37865[2] = null);
(statearr_37842_37865[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37836 === 6))
{var inst_37812 = (state_37835[7]);var inst_37818 = p.call(null,inst_37812);var state_37835__$1 = state_37835;if(cljs.core.truth_(inst_37818))
{var statearr_37843_37866 = state_37835__$1;(statearr_37843_37866[1] = 9);
} else
{var statearr_37844_37867 = state_37835__$1;(statearr_37844_37867[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37836 === 3))
{var inst_37833 = (state_37835[2]);var state_37835__$1 = state_37835;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37835__$1,inst_37833);
} else
{if((state_val_37836 === 12))
{var state_37835__$1 = state_37835;var statearr_37845_37868 = state_37835__$1;(statearr_37845_37868[2] = null);
(statearr_37845_37868[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37836 === 2))
{var state_37835__$1 = state_37835;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37835__$1,4,ch);
} else
{if((state_val_37836 === 11))
{var inst_37812 = (state_37835[7]);var inst_37822 = (state_37835[2]);var state_37835__$1 = state_37835;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37835__$1,8,inst_37822,inst_37812);
} else
{if((state_val_37836 === 9))
{var state_37835__$1 = state_37835;var statearr_37846_37869 = state_37835__$1;(statearr_37846_37869[2] = tc);
(statearr_37846_37869[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37836 === 5))
{var inst_37815 = cljs.core.async.close_BANG_.call(null,tc);var inst_37816 = cljs.core.async.close_BANG_.call(null,fc);var state_37835__$1 = (function (){var statearr_37847 = state_37835;(statearr_37847[8] = inst_37815);
return statearr_37847;
})();var statearr_37848_37870 = state_37835__$1;(statearr_37848_37870[2] = inst_37816);
(statearr_37848_37870[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37836 === 14))
{var inst_37829 = (state_37835[2]);var state_37835__$1 = state_37835;var statearr_37849_37871 = state_37835__$1;(statearr_37849_37871[2] = inst_37829);
(statearr_37849_37871[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37836 === 10))
{var state_37835__$1 = state_37835;var statearr_37850_37872 = state_37835__$1;(statearr_37850_37872[2] = fc);
(statearr_37850_37872[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37836 === 8))
{var inst_37824 = (state_37835[2]);var state_37835__$1 = state_37835;if(cljs.core.truth_(inst_37824))
{var statearr_37851_37873 = state_37835__$1;(statearr_37851_37873[1] = 12);
} else
{var statearr_37852_37874 = state_37835__$1;(statearr_37852_37874[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11008__auto___37860,tc,fc))
;return ((function (switch__10944__auto__,c__11008__auto___37860,tc,fc){
return (function() {
var state_machine__10945__auto__ = null;
var state_machine__10945__auto____0 = (function (){var statearr_37856 = [null,null,null,null,null,null,null,null,null];(statearr_37856[0] = state_machine__10945__auto__);
(statearr_37856[1] = 1);
return statearr_37856;
});
var state_machine__10945__auto____1 = (function (state_37835){while(true){
var ret_value__10946__auto__ = (function (){try{while(true){
var result__10947__auto__ = switch__10944__auto__.call(null,state_37835);if(cljs.core.keyword_identical_QMARK_.call(null,result__10947__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10947__auto__;
}
break;
}
}catch (e37857){if((e37857 instanceof Object))
{var ex__10948__auto__ = e37857;var statearr_37858_37875 = state_37835;(statearr_37858_37875[5] = ex__10948__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37835);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37857;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10946__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37876 = state_37835;
state_37835 = G__37876;
continue;
}
} else
{return ret_value__10946__auto__;
}
break;
}
});
state_machine__10945__auto__ = function(state_37835){
switch(arguments.length){
case 0:
return state_machine__10945__auto____0.call(this);
case 1:
return state_machine__10945__auto____1.call(this,state_37835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10945__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10945__auto____0;
state_machine__10945__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10945__auto____1;
return state_machine__10945__auto__;
})()
;})(switch__10944__auto__,c__11008__auto___37860,tc,fc))
})();var state__11010__auto__ = (function (){var statearr_37859 = f__11009__auto__.call(null);(statearr_37859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11008__auto___37860);
return statearr_37859;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11010__auto__);
});})(c__11008__auto___37860,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__11008__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11008__auto__){
return (function (){var f__11009__auto__ = (function (){var switch__10944__auto__ = ((function (c__11008__auto__){
return (function (state_37923){var state_val_37924 = (state_37923[1]);if((state_val_37924 === 7))
{var inst_37919 = (state_37923[2]);var state_37923__$1 = state_37923;var statearr_37925_37941 = state_37923__$1;(statearr_37925_37941[2] = inst_37919);
(statearr_37925_37941[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37924 === 6))
{var inst_37909 = (state_37923[7]);var inst_37912 = (state_37923[8]);var inst_37916 = f.call(null,inst_37909,inst_37912);var inst_37909__$1 = inst_37916;var state_37923__$1 = (function (){var statearr_37926 = state_37923;(statearr_37926[7] = inst_37909__$1);
return statearr_37926;
})();var statearr_37927_37942 = state_37923__$1;(statearr_37927_37942[2] = null);
(statearr_37927_37942[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37924 === 5))
{var inst_37909 = (state_37923[7]);var state_37923__$1 = state_37923;var statearr_37928_37943 = state_37923__$1;(statearr_37928_37943[2] = inst_37909);
(statearr_37928_37943[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37924 === 4))
{var inst_37912 = (state_37923[8]);var inst_37912__$1 = (state_37923[2]);var inst_37913 = (inst_37912__$1 == null);var state_37923__$1 = (function (){var statearr_37929 = state_37923;(statearr_37929[8] = inst_37912__$1);
return statearr_37929;
})();if(cljs.core.truth_(inst_37913))
{var statearr_37930_37944 = state_37923__$1;(statearr_37930_37944[1] = 5);
} else
{var statearr_37931_37945 = state_37923__$1;(statearr_37931_37945[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37924 === 3))
{var inst_37921 = (state_37923[2]);var state_37923__$1 = state_37923;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37923__$1,inst_37921);
} else
{if((state_val_37924 === 2))
{var state_37923__$1 = state_37923;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37923__$1,4,ch);
} else
{if((state_val_37924 === 1))
{var inst_37909 = init;var state_37923__$1 = (function (){var statearr_37932 = state_37923;(statearr_37932[7] = inst_37909);
return statearr_37932;
})();var statearr_37933_37946 = state_37923__$1;(statearr_37933_37946[2] = null);
(statearr_37933_37946[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__11008__auto__))
;return ((function (switch__10944__auto__,c__11008__auto__){
return (function() {
var state_machine__10945__auto__ = null;
var state_machine__10945__auto____0 = (function (){var statearr_37937 = [null,null,null,null,null,null,null,null,null];(statearr_37937[0] = state_machine__10945__auto__);
(statearr_37937[1] = 1);
return statearr_37937;
});
var state_machine__10945__auto____1 = (function (state_37923){while(true){
var ret_value__10946__auto__ = (function (){try{while(true){
var result__10947__auto__ = switch__10944__auto__.call(null,state_37923);if(cljs.core.keyword_identical_QMARK_.call(null,result__10947__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10947__auto__;
}
break;
}
}catch (e37938){if((e37938 instanceof Object))
{var ex__10948__auto__ = e37938;var statearr_37939_37947 = state_37923;(statearr_37939_37947[5] = ex__10948__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37923);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37938;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10946__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37948 = state_37923;
state_37923 = G__37948;
continue;
}
} else
{return ret_value__10946__auto__;
}
break;
}
});
state_machine__10945__auto__ = function(state_37923){
switch(arguments.length){
case 0:
return state_machine__10945__auto____0.call(this);
case 1:
return state_machine__10945__auto____1.call(this,state_37923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10945__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10945__auto____0;
state_machine__10945__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10945__auto____1;
return state_machine__10945__auto__;
})()
;})(switch__10944__auto__,c__11008__auto__))
})();var state__11010__auto__ = (function (){var statearr_37940 = f__11009__auto__.call(null);(statearr_37940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11008__auto__);
return statearr_37940;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11010__auto__);
});})(c__11008__auto__))
);
return c__11008__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__11008__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11008__auto__){
return (function (){var f__11009__auto__ = (function (){var switch__10944__auto__ = ((function (c__11008__auto__){
return (function (state_38022){var state_val_38023 = (state_38022[1]);if((state_val_38023 === 7))
{var inst_38004 = (state_38022[2]);var state_38022__$1 = state_38022;var statearr_38024_38047 = state_38022__$1;(statearr_38024_38047[2] = inst_38004);
(statearr_38024_38047[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38023 === 1))
{var inst_37998 = cljs.core.seq.call(null,coll);var inst_37999 = inst_37998;var state_38022__$1 = (function (){var statearr_38025 = state_38022;(statearr_38025[7] = inst_37999);
return statearr_38025;
})();var statearr_38026_38048 = state_38022__$1;(statearr_38026_38048[2] = null);
(statearr_38026_38048[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38023 === 4))
{var inst_37999 = (state_38022[7]);var inst_38002 = cljs.core.first.call(null,inst_37999);var state_38022__$1 = state_38022;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38022__$1,7,ch,inst_38002);
} else
{if((state_val_38023 === 13))
{var inst_38016 = (state_38022[2]);var state_38022__$1 = state_38022;var statearr_38027_38049 = state_38022__$1;(statearr_38027_38049[2] = inst_38016);
(statearr_38027_38049[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38023 === 6))
{var inst_38007 = (state_38022[2]);var state_38022__$1 = state_38022;if(cljs.core.truth_(inst_38007))
{var statearr_38028_38050 = state_38022__$1;(statearr_38028_38050[1] = 8);
} else
{var statearr_38029_38051 = state_38022__$1;(statearr_38029_38051[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38023 === 3))
{var inst_38020 = (state_38022[2]);var state_38022__$1 = state_38022;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38022__$1,inst_38020);
} else
{if((state_val_38023 === 12))
{var state_38022__$1 = state_38022;var statearr_38030_38052 = state_38022__$1;(statearr_38030_38052[2] = null);
(statearr_38030_38052[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38023 === 2))
{var inst_37999 = (state_38022[7]);var state_38022__$1 = state_38022;if(cljs.core.truth_(inst_37999))
{var statearr_38031_38053 = state_38022__$1;(statearr_38031_38053[1] = 4);
} else
{var statearr_38032_38054 = state_38022__$1;(statearr_38032_38054[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38023 === 11))
{var inst_38013 = cljs.core.async.close_BANG_.call(null,ch);var state_38022__$1 = state_38022;var statearr_38033_38055 = state_38022__$1;(statearr_38033_38055[2] = inst_38013);
(statearr_38033_38055[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38023 === 9))
{var state_38022__$1 = state_38022;if(cljs.core.truth_(close_QMARK_))
{var statearr_38034_38056 = state_38022__$1;(statearr_38034_38056[1] = 11);
} else
{var statearr_38035_38057 = state_38022__$1;(statearr_38035_38057[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38023 === 5))
{var inst_37999 = (state_38022[7]);var state_38022__$1 = state_38022;var statearr_38036_38058 = state_38022__$1;(statearr_38036_38058[2] = inst_37999);
(statearr_38036_38058[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38023 === 10))
{var inst_38018 = (state_38022[2]);var state_38022__$1 = state_38022;var statearr_38037_38059 = state_38022__$1;(statearr_38037_38059[2] = inst_38018);
(statearr_38037_38059[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38023 === 8))
{var inst_37999 = (state_38022[7]);var inst_38009 = cljs.core.next.call(null,inst_37999);var inst_37999__$1 = inst_38009;var state_38022__$1 = (function (){var statearr_38038 = state_38022;(statearr_38038[7] = inst_37999__$1);
return statearr_38038;
})();var statearr_38039_38060 = state_38022__$1;(statearr_38039_38060[2] = null);
(statearr_38039_38060[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11008__auto__))
;return ((function (switch__10944__auto__,c__11008__auto__){
return (function() {
var state_machine__10945__auto__ = null;
var state_machine__10945__auto____0 = (function (){var statearr_38043 = [null,null,null,null,null,null,null,null];(statearr_38043[0] = state_machine__10945__auto__);
(statearr_38043[1] = 1);
return statearr_38043;
});
var state_machine__10945__auto____1 = (function (state_38022){while(true){
var ret_value__10946__auto__ = (function (){try{while(true){
var result__10947__auto__ = switch__10944__auto__.call(null,state_38022);if(cljs.core.keyword_identical_QMARK_.call(null,result__10947__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10947__auto__;
}
break;
}
}catch (e38044){if((e38044 instanceof Object))
{var ex__10948__auto__ = e38044;var statearr_38045_38061 = state_38022;(statearr_38045_38061[5] = ex__10948__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38022);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38044;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10946__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__38062 = state_38022;
state_38022 = G__38062;
continue;
}
} else
{return ret_value__10946__auto__;
}
break;
}
});
state_machine__10945__auto__ = function(state_38022){
switch(arguments.length){
case 0:
return state_machine__10945__auto____0.call(this);
case 1:
return state_machine__10945__auto____1.call(this,state_38022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10945__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10945__auto____0;
state_machine__10945__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10945__auto____1;
return state_machine__10945__auto__;
})()
;})(switch__10944__auto__,c__11008__auto__))
})();var state__11010__auto__ = (function (){var statearr_38046 = f__11009__auto__.call(null);(statearr_38046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11008__auto__);
return statearr_38046;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11010__auto__);
});})(c__11008__auto__))
);
return c__11008__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj38064 = {};return obj38064;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7869__auto__ = _;if(and__7869__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7869__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8508__auto__ = (((_ == null))?null:_);return (function (){var or__7881__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8508__auto__)]);if(or__7881__auto__)
{return or__7881__auto__;
} else
{var or__7881__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7881__auto____$1)
{return or__7881__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj38066 = {};return obj38066;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7869__auto__ = m;if(and__7869__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7869__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8508__auto__ = (((m == null))?null:m);return (function (){var or__7881__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8508__auto__)]);if(or__7881__auto__)
{return or__7881__auto__;
} else
{var or__7881__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7881__auto____$1)
{return or__7881__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7869__auto__ = m;if(and__7869__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7869__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8508__auto__ = (((m == null))?null:m);return (function (){var or__7881__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8508__auto__)]);if(or__7881__auto__)
{return or__7881__auto__;
} else
{var or__7881__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7881__auto____$1)
{return or__7881__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7869__auto__ = m;if(and__7869__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7869__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8508__auto__ = (((m == null))?null:m);return (function (){var or__7881__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8508__auto__)]);if(or__7881__auto__)
{return or__7881__auto__;
} else
{var or__7881__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7881__auto____$1)
{return or__7881__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t38288 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38288 = (function (cs,ch,mult,meta38289){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta38289 = meta38289;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38288.cljs$lang$type = true;
cljs.core.async.t38288.cljs$lang$ctorStr = "cljs.core.async/t38288";
cljs.core.async.t38288.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8448__auto__,writer__8449__auto__,opt__8450__auto__){return cljs.core._write.call(null,writer__8449__auto__,"cljs.core.async/t38288");
});})(cs))
;
cljs.core.async.t38288.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t38288.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t38288.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t38288.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t38288.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t38288.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t38288.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_38290){var self__ = this;
var _38290__$1 = this;return self__.meta38289;
});})(cs))
;
cljs.core.async.t38288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_38290,meta38289__$1){var self__ = this;
var _38290__$1 = this;return (new cljs.core.async.t38288(self__.cs,self__.ch,self__.mult,meta38289__$1));
});})(cs))
;
cljs.core.async.__GT_t38288 = ((function (cs){
return (function __GT_t38288(cs__$1,ch__$1,mult__$1,meta38289){return (new cljs.core.async.t38288(cs__$1,ch__$1,mult__$1,meta38289));
});})(cs))
;
}
return (new cljs.core.async.t38288(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__11008__auto___38509 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11008__auto___38509,cs,m,dchan,dctr,done){
return (function (){var f__11009__auto__ = (function (){var switch__10944__auto__ = ((function (c__11008__auto___38509,cs,m,dchan,dctr,done){
return (function (state_38421){var state_val_38422 = (state_38421[1]);if((state_val_38422 === 7))
{var inst_38417 = (state_38421[2]);var state_38421__$1 = state_38421;var statearr_38423_38510 = state_38421__$1;(statearr_38423_38510[2] = inst_38417);
(statearr_38423_38510[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 20))
{var inst_38322 = (state_38421[7]);var inst_38332 = cljs.core.first.call(null,inst_38322);var inst_38333 = cljs.core.nth.call(null,inst_38332,0,null);var inst_38334 = cljs.core.nth.call(null,inst_38332,1,null);var state_38421__$1 = (function (){var statearr_38424 = state_38421;(statearr_38424[8] = inst_38333);
return statearr_38424;
})();if(cljs.core.truth_(inst_38334))
{var statearr_38425_38511 = state_38421__$1;(statearr_38425_38511[1] = 22);
} else
{var statearr_38426_38512 = state_38421__$1;(statearr_38426_38512[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 27))
{var inst_38369 = (state_38421[9]);var inst_38364 = (state_38421[10]);var inst_38362 = (state_38421[11]);var inst_38293 = (state_38421[12]);var inst_38369__$1 = cljs.core._nth.call(null,inst_38362,inst_38364);var inst_38370 = cljs.core.async.put_BANG_.call(null,inst_38369__$1,inst_38293,done);var state_38421__$1 = (function (){var statearr_38427 = state_38421;(statearr_38427[9] = inst_38369__$1);
return statearr_38427;
})();if(cljs.core.truth_(inst_38370))
{var statearr_38428_38513 = state_38421__$1;(statearr_38428_38513[1] = 30);
} else
{var statearr_38429_38514 = state_38421__$1;(statearr_38429_38514[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 1))
{var state_38421__$1 = state_38421;var statearr_38430_38515 = state_38421__$1;(statearr_38430_38515[2] = null);
(statearr_38430_38515[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 24))
{var inst_38322 = (state_38421[7]);var inst_38339 = (state_38421[2]);var inst_38340 = cljs.core.next.call(null,inst_38322);var inst_38302 = inst_38340;var inst_38303 = null;var inst_38304 = 0;var inst_38305 = 0;var state_38421__$1 = (function (){var statearr_38431 = state_38421;(statearr_38431[13] = inst_38304);
(statearr_38431[14] = inst_38339);
(statearr_38431[15] = inst_38302);
(statearr_38431[16] = inst_38303);
(statearr_38431[17] = inst_38305);
return statearr_38431;
})();var statearr_38432_38516 = state_38421__$1;(statearr_38432_38516[2] = null);
(statearr_38432_38516[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 39))
{var state_38421__$1 = state_38421;var statearr_38436_38517 = state_38421__$1;(statearr_38436_38517[2] = null);
(statearr_38436_38517[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 4))
{var inst_38293 = (state_38421[12]);var inst_38293__$1 = (state_38421[2]);var inst_38294 = (inst_38293__$1 == null);var state_38421__$1 = (function (){var statearr_38437 = state_38421;(statearr_38437[12] = inst_38293__$1);
return statearr_38437;
})();if(cljs.core.truth_(inst_38294))
{var statearr_38438_38518 = state_38421__$1;(statearr_38438_38518[1] = 5);
} else
{var statearr_38439_38519 = state_38421__$1;(statearr_38439_38519[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 15))
{var inst_38304 = (state_38421[13]);var inst_38302 = (state_38421[15]);var inst_38303 = (state_38421[16]);var inst_38305 = (state_38421[17]);var inst_38318 = (state_38421[2]);var inst_38319 = (inst_38305 + 1);var tmp38433 = inst_38304;var tmp38434 = inst_38302;var tmp38435 = inst_38303;var inst_38302__$1 = tmp38434;var inst_38303__$1 = tmp38435;var inst_38304__$1 = tmp38433;var inst_38305__$1 = inst_38319;var state_38421__$1 = (function (){var statearr_38440 = state_38421;(statearr_38440[13] = inst_38304__$1);
(statearr_38440[15] = inst_38302__$1);
(statearr_38440[18] = inst_38318);
(statearr_38440[16] = inst_38303__$1);
(statearr_38440[17] = inst_38305__$1);
return statearr_38440;
})();var statearr_38441_38520 = state_38421__$1;(statearr_38441_38520[2] = null);
(statearr_38441_38520[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 21))
{var inst_38343 = (state_38421[2]);var state_38421__$1 = state_38421;var statearr_38445_38521 = state_38421__$1;(statearr_38445_38521[2] = inst_38343);
(statearr_38445_38521[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 31))
{var inst_38369 = (state_38421[9]);var inst_38373 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_38374 = cljs.core.async.untap_STAR_.call(null,m,inst_38369);var state_38421__$1 = (function (){var statearr_38446 = state_38421;(statearr_38446[19] = inst_38373);
return statearr_38446;
})();var statearr_38447_38522 = state_38421__$1;(statearr_38447_38522[2] = inst_38374);
(statearr_38447_38522[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 32))
{var inst_38363 = (state_38421[20]);var inst_38361 = (state_38421[21]);var inst_38364 = (state_38421[10]);var inst_38362 = (state_38421[11]);var inst_38376 = (state_38421[2]);var inst_38377 = (inst_38364 + 1);var tmp38442 = inst_38363;var tmp38443 = inst_38361;var tmp38444 = inst_38362;var inst_38361__$1 = tmp38443;var inst_38362__$1 = tmp38444;var inst_38363__$1 = tmp38442;var inst_38364__$1 = inst_38377;var state_38421__$1 = (function (){var statearr_38448 = state_38421;(statearr_38448[20] = inst_38363__$1);
(statearr_38448[21] = inst_38361__$1);
(statearr_38448[10] = inst_38364__$1);
(statearr_38448[11] = inst_38362__$1);
(statearr_38448[22] = inst_38376);
return statearr_38448;
})();var statearr_38449_38523 = state_38421__$1;(statearr_38449_38523[2] = null);
(statearr_38449_38523[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 40))
{var inst_38389 = (state_38421[23]);var inst_38393 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_38394 = cljs.core.async.untap_STAR_.call(null,m,inst_38389);var state_38421__$1 = (function (){var statearr_38450 = state_38421;(statearr_38450[24] = inst_38393);
return statearr_38450;
})();var statearr_38451_38524 = state_38421__$1;(statearr_38451_38524[2] = inst_38394);
(statearr_38451_38524[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 33))
{var inst_38380 = (state_38421[25]);var inst_38382 = cljs.core.chunked_seq_QMARK_.call(null,inst_38380);var state_38421__$1 = state_38421;if(inst_38382)
{var statearr_38452_38525 = state_38421__$1;(statearr_38452_38525[1] = 36);
} else
{var statearr_38453_38526 = state_38421__$1;(statearr_38453_38526[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 13))
{var inst_38312 = (state_38421[26]);var inst_38315 = cljs.core.async.close_BANG_.call(null,inst_38312);var state_38421__$1 = state_38421;var statearr_38454_38527 = state_38421__$1;(statearr_38454_38527[2] = inst_38315);
(statearr_38454_38527[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 22))
{var inst_38333 = (state_38421[8]);var inst_38336 = cljs.core.async.close_BANG_.call(null,inst_38333);var state_38421__$1 = state_38421;var statearr_38455_38528 = state_38421__$1;(statearr_38455_38528[2] = inst_38336);
(statearr_38455_38528[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 36))
{var inst_38380 = (state_38421[25]);var inst_38384 = cljs.core.chunk_first.call(null,inst_38380);var inst_38385 = cljs.core.chunk_rest.call(null,inst_38380);var inst_38386 = cljs.core.count.call(null,inst_38384);var inst_38361 = inst_38385;var inst_38362 = inst_38384;var inst_38363 = inst_38386;var inst_38364 = 0;var state_38421__$1 = (function (){var statearr_38456 = state_38421;(statearr_38456[20] = inst_38363);
(statearr_38456[21] = inst_38361);
(statearr_38456[10] = inst_38364);
(statearr_38456[11] = inst_38362);
return statearr_38456;
})();var statearr_38457_38529 = state_38421__$1;(statearr_38457_38529[2] = null);
(statearr_38457_38529[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 41))
{var inst_38380 = (state_38421[25]);var inst_38396 = (state_38421[2]);var inst_38397 = cljs.core.next.call(null,inst_38380);var inst_38361 = inst_38397;var inst_38362 = null;var inst_38363 = 0;var inst_38364 = 0;var state_38421__$1 = (function (){var statearr_38458 = state_38421;(statearr_38458[20] = inst_38363);
(statearr_38458[27] = inst_38396);
(statearr_38458[21] = inst_38361);
(statearr_38458[10] = inst_38364);
(statearr_38458[11] = inst_38362);
return statearr_38458;
})();var statearr_38459_38530 = state_38421__$1;(statearr_38459_38530[2] = null);
(statearr_38459_38530[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 43))
{var state_38421__$1 = state_38421;var statearr_38460_38531 = state_38421__$1;(statearr_38460_38531[2] = null);
(statearr_38460_38531[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 29))
{var inst_38405 = (state_38421[2]);var state_38421__$1 = state_38421;var statearr_38461_38532 = state_38421__$1;(statearr_38461_38532[2] = inst_38405);
(statearr_38461_38532[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 44))
{var inst_38414 = (state_38421[2]);var state_38421__$1 = (function (){var statearr_38462 = state_38421;(statearr_38462[28] = inst_38414);
return statearr_38462;
})();var statearr_38463_38533 = state_38421__$1;(statearr_38463_38533[2] = null);
(statearr_38463_38533[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 6))
{var inst_38353 = (state_38421[29]);var inst_38352 = cljs.core.deref.call(null,cs);var inst_38353__$1 = cljs.core.keys.call(null,inst_38352);var inst_38354 = cljs.core.count.call(null,inst_38353__$1);var inst_38355 = cljs.core.reset_BANG_.call(null,dctr,inst_38354);var inst_38360 = cljs.core.seq.call(null,inst_38353__$1);var inst_38361 = inst_38360;var inst_38362 = null;var inst_38363 = 0;var inst_38364 = 0;var state_38421__$1 = (function (){var statearr_38464 = state_38421;(statearr_38464[20] = inst_38363);
(statearr_38464[21] = inst_38361);
(statearr_38464[10] = inst_38364);
(statearr_38464[30] = inst_38355);
(statearr_38464[11] = inst_38362);
(statearr_38464[29] = inst_38353__$1);
return statearr_38464;
})();var statearr_38465_38534 = state_38421__$1;(statearr_38465_38534[2] = null);
(statearr_38465_38534[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 28))
{var inst_38361 = (state_38421[21]);var inst_38380 = (state_38421[25]);var inst_38380__$1 = cljs.core.seq.call(null,inst_38361);var state_38421__$1 = (function (){var statearr_38466 = state_38421;(statearr_38466[25] = inst_38380__$1);
return statearr_38466;
})();if(inst_38380__$1)
{var statearr_38467_38535 = state_38421__$1;(statearr_38467_38535[1] = 33);
} else
{var statearr_38468_38536 = state_38421__$1;(statearr_38468_38536[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 25))
{var inst_38363 = (state_38421[20]);var inst_38364 = (state_38421[10]);var inst_38366 = (inst_38364 < inst_38363);var inst_38367 = inst_38366;var state_38421__$1 = state_38421;if(cljs.core.truth_(inst_38367))
{var statearr_38469_38537 = state_38421__$1;(statearr_38469_38537[1] = 27);
} else
{var statearr_38470_38538 = state_38421__$1;(statearr_38470_38538[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 34))
{var state_38421__$1 = state_38421;var statearr_38471_38539 = state_38421__$1;(statearr_38471_38539[2] = null);
(statearr_38471_38539[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 17))
{var state_38421__$1 = state_38421;var statearr_38472_38540 = state_38421__$1;(statearr_38472_38540[2] = null);
(statearr_38472_38540[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 3))
{var inst_38419 = (state_38421[2]);var state_38421__$1 = state_38421;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38421__$1,inst_38419);
} else
{if((state_val_38422 === 12))
{var inst_38348 = (state_38421[2]);var state_38421__$1 = state_38421;var statearr_38473_38541 = state_38421__$1;(statearr_38473_38541[2] = inst_38348);
(statearr_38473_38541[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 2))
{var state_38421__$1 = state_38421;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38421__$1,4,ch);
} else
{if((state_val_38422 === 23))
{var state_38421__$1 = state_38421;var statearr_38474_38542 = state_38421__$1;(statearr_38474_38542[2] = null);
(statearr_38474_38542[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 35))
{var inst_38403 = (state_38421[2]);var state_38421__$1 = state_38421;var statearr_38475_38543 = state_38421__$1;(statearr_38475_38543[2] = inst_38403);
(statearr_38475_38543[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 19))
{var inst_38322 = (state_38421[7]);var inst_38326 = cljs.core.chunk_first.call(null,inst_38322);var inst_38327 = cljs.core.chunk_rest.call(null,inst_38322);var inst_38328 = cljs.core.count.call(null,inst_38326);var inst_38302 = inst_38327;var inst_38303 = inst_38326;var inst_38304 = inst_38328;var inst_38305 = 0;var state_38421__$1 = (function (){var statearr_38476 = state_38421;(statearr_38476[13] = inst_38304);
(statearr_38476[15] = inst_38302);
(statearr_38476[16] = inst_38303);
(statearr_38476[17] = inst_38305);
return statearr_38476;
})();var statearr_38477_38544 = state_38421__$1;(statearr_38477_38544[2] = null);
(statearr_38477_38544[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 11))
{var inst_38302 = (state_38421[15]);var inst_38322 = (state_38421[7]);var inst_38322__$1 = cljs.core.seq.call(null,inst_38302);var state_38421__$1 = (function (){var statearr_38478 = state_38421;(statearr_38478[7] = inst_38322__$1);
return statearr_38478;
})();if(inst_38322__$1)
{var statearr_38479_38545 = state_38421__$1;(statearr_38479_38545[1] = 16);
} else
{var statearr_38480_38546 = state_38421__$1;(statearr_38480_38546[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 9))
{var inst_38350 = (state_38421[2]);var state_38421__$1 = state_38421;var statearr_38481_38547 = state_38421__$1;(statearr_38481_38547[2] = inst_38350);
(statearr_38481_38547[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 5))
{var inst_38300 = cljs.core.deref.call(null,cs);var inst_38301 = cljs.core.seq.call(null,inst_38300);var inst_38302 = inst_38301;var inst_38303 = null;var inst_38304 = 0;var inst_38305 = 0;var state_38421__$1 = (function (){var statearr_38482 = state_38421;(statearr_38482[13] = inst_38304);
(statearr_38482[15] = inst_38302);
(statearr_38482[16] = inst_38303);
(statearr_38482[17] = inst_38305);
return statearr_38482;
})();var statearr_38483_38548 = state_38421__$1;(statearr_38483_38548[2] = null);
(statearr_38483_38548[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 14))
{var state_38421__$1 = state_38421;var statearr_38484_38549 = state_38421__$1;(statearr_38484_38549[2] = null);
(statearr_38484_38549[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 45))
{var inst_38411 = (state_38421[2]);var state_38421__$1 = state_38421;var statearr_38485_38550 = state_38421__$1;(statearr_38485_38550[2] = inst_38411);
(statearr_38485_38550[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 26))
{var inst_38353 = (state_38421[29]);var inst_38407 = (state_38421[2]);var inst_38408 = cljs.core.seq.call(null,inst_38353);var state_38421__$1 = (function (){var statearr_38486 = state_38421;(statearr_38486[31] = inst_38407);
return statearr_38486;
})();if(inst_38408)
{var statearr_38487_38551 = state_38421__$1;(statearr_38487_38551[1] = 42);
} else
{var statearr_38488_38552 = state_38421__$1;(statearr_38488_38552[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 16))
{var inst_38322 = (state_38421[7]);var inst_38324 = cljs.core.chunked_seq_QMARK_.call(null,inst_38322);var state_38421__$1 = state_38421;if(inst_38324)
{var statearr_38489_38553 = state_38421__$1;(statearr_38489_38553[1] = 19);
} else
{var statearr_38490_38554 = state_38421__$1;(statearr_38490_38554[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 38))
{var inst_38400 = (state_38421[2]);var state_38421__$1 = state_38421;var statearr_38491_38555 = state_38421__$1;(statearr_38491_38555[2] = inst_38400);
(statearr_38491_38555[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 30))
{var state_38421__$1 = state_38421;var statearr_38492_38556 = state_38421__$1;(statearr_38492_38556[2] = null);
(statearr_38492_38556[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 10))
{var inst_38303 = (state_38421[16]);var inst_38305 = (state_38421[17]);var inst_38311 = cljs.core._nth.call(null,inst_38303,inst_38305);var inst_38312 = cljs.core.nth.call(null,inst_38311,0,null);var inst_38313 = cljs.core.nth.call(null,inst_38311,1,null);var state_38421__$1 = (function (){var statearr_38493 = state_38421;(statearr_38493[26] = inst_38312);
return statearr_38493;
})();if(cljs.core.truth_(inst_38313))
{var statearr_38494_38557 = state_38421__$1;(statearr_38494_38557[1] = 13);
} else
{var statearr_38495_38558 = state_38421__$1;(statearr_38495_38558[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 18))
{var inst_38346 = (state_38421[2]);var state_38421__$1 = state_38421;var statearr_38496_38559 = state_38421__$1;(statearr_38496_38559[2] = inst_38346);
(statearr_38496_38559[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 42))
{var state_38421__$1 = state_38421;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38421__$1,45,dchan);
} else
{if((state_val_38422 === 37))
{var inst_38389 = (state_38421[23]);var inst_38380 = (state_38421[25]);var inst_38293 = (state_38421[12]);var inst_38389__$1 = cljs.core.first.call(null,inst_38380);var inst_38390 = cljs.core.async.put_BANG_.call(null,inst_38389__$1,inst_38293,done);var state_38421__$1 = (function (){var statearr_38497 = state_38421;(statearr_38497[23] = inst_38389__$1);
return statearr_38497;
})();if(cljs.core.truth_(inst_38390))
{var statearr_38498_38560 = state_38421__$1;(statearr_38498_38560[1] = 39);
} else
{var statearr_38499_38561 = state_38421__$1;(statearr_38499_38561[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38422 === 8))
{var inst_38304 = (state_38421[13]);var inst_38305 = (state_38421[17]);var inst_38307 = (inst_38305 < inst_38304);var inst_38308 = inst_38307;var state_38421__$1 = state_38421;if(cljs.core.truth_(inst_38308))
{var statearr_38500_38562 = state_38421__$1;(statearr_38500_38562[1] = 10);
} else
{var statearr_38501_38563 = state_38421__$1;(statearr_38501_38563[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11008__auto___38509,cs,m,dchan,dctr,done))
;return ((function (switch__10944__auto__,c__11008__auto___38509,cs,m,dchan,dctr,done){
return (function() {
var state_machine__10945__auto__ = null;
var state_machine__10945__auto____0 = (function (){var statearr_38505 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38505[0] = state_machine__10945__auto__);
(statearr_38505[1] = 1);
return statearr_38505;
});
var state_machine__10945__auto____1 = (function (state_38421){while(true){
var ret_value__10946__auto__ = (function (){try{while(true){
var result__10947__auto__ = switch__10944__auto__.call(null,state_38421);if(cljs.core.keyword_identical_QMARK_.call(null,result__10947__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10947__auto__;
}
break;
}
}catch (e38506){if((e38506 instanceof Object))
{var ex__10948__auto__ = e38506;var statearr_38507_38564 = state_38421;(statearr_38507_38564[5] = ex__10948__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38421);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38506;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10946__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__38565 = state_38421;
state_38421 = G__38565;
continue;
}
} else
{return ret_value__10946__auto__;
}
break;
}
});
state_machine__10945__auto__ = function(state_38421){
switch(arguments.length){
case 0:
return state_machine__10945__auto____0.call(this);
case 1:
return state_machine__10945__auto____1.call(this,state_38421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10945__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10945__auto____0;
state_machine__10945__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10945__auto____1;
return state_machine__10945__auto__;
})()
;})(switch__10944__auto__,c__11008__auto___38509,cs,m,dchan,dctr,done))
})();var state__11010__auto__ = (function (){var statearr_38508 = f__11009__auto__.call(null);(statearr_38508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11008__auto___38509);
return statearr_38508;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11010__auto__);
});})(c__11008__auto___38509,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj38567 = {};return obj38567;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7869__auto__ = m;if(and__7869__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7869__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8508__auto__ = (((m == null))?null:m);return (function (){var or__7881__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8508__auto__)]);if(or__7881__auto__)
{return or__7881__auto__;
} else
{var or__7881__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7881__auto____$1)
{return or__7881__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7869__auto__ = m;if(and__7869__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7869__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8508__auto__ = (((m == null))?null:m);return (function (){var or__7881__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8508__auto__)]);if(or__7881__auto__)
{return or__7881__auto__;
} else
{var or__7881__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7881__auto____$1)
{return or__7881__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7869__auto__ = m;if(and__7869__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7869__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8508__auto__ = (((m == null))?null:m);return (function (){var or__7881__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8508__auto__)]);if(or__7881__auto__)
{return or__7881__auto__;
} else
{var or__7881__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7881__auto____$1)
{return or__7881__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7869__auto__ = m;if(and__7869__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7869__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8508__auto__ = (((m == null))?null:m);return (function (){var or__7881__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8508__auto__)]);if(or__7881__auto__)
{return or__7881__auto__;
} else
{var or__7881__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7881__auto____$1)
{return or__7881__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7869__auto__ = m;if(and__7869__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7869__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8508__auto__ = (((m == null))?null:m);return (function (){var or__7881__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8508__auto__)]);if(or__7881__auto__)
{return or__7881__auto__;
} else
{var or__7881__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7881__auto____$1)
{return or__7881__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t38687 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38687 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38688){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta38688 = meta38688;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38687.cljs$lang$type = true;
cljs.core.async.t38687.cljs$lang$ctorStr = "cljs.core.async/t38687";
cljs.core.async.t38687.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8448__auto__,writer__8449__auto__,opt__8450__auto__){return cljs.core._write.call(null,writer__8449__auto__,"cljs.core.async/t38687");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38687.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t38687.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38687.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38687.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38687.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38687.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38687.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t38687.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38687.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38689){var self__ = this;
var _38689__$1 = this;return self__.meta38688;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38689,meta38688__$1){var self__ = this;
var _38689__$1 = this;return (new cljs.core.async.t38687(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta38688__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t38687 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t38687(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38688){return (new cljs.core.async.t38687(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38688));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t38687(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__11008__auto___38806 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11008__auto___38806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__11009__auto__ = (function (){var switch__10944__auto__ = ((function (c__11008__auto___38806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_38759){var state_val_38760 = (state_38759[1]);if((state_val_38760 === 7))
{var inst_38703 = (state_38759[7]);var inst_38708 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38703);var state_38759__$1 = state_38759;var statearr_38761_38807 = state_38759__$1;(statearr_38761_38807[2] = inst_38708);
(statearr_38761_38807[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38760 === 20))
{var inst_38718 = (state_38759[8]);var state_38759__$1 = state_38759;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38759__$1,23,out,inst_38718);
} else
{if((state_val_38760 === 1))
{var inst_38693 = (state_38759[9]);var inst_38693__$1 = calc_state.call(null);var inst_38694 = cljs.core.seq_QMARK_.call(null,inst_38693__$1);var state_38759__$1 = (function (){var statearr_38762 = state_38759;(statearr_38762[9] = inst_38693__$1);
return statearr_38762;
})();if(inst_38694)
{var statearr_38763_38808 = state_38759__$1;(statearr_38763_38808[1] = 2);
} else
{var statearr_38764_38809 = state_38759__$1;(statearr_38764_38809[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38760 === 24))
{var inst_38711 = (state_38759[10]);var inst_38703 = inst_38711;var state_38759__$1 = (function (){var statearr_38765 = state_38759;(statearr_38765[7] = inst_38703);
return statearr_38765;
})();var statearr_38766_38810 = state_38759__$1;(statearr_38766_38810[2] = null);
(statearr_38766_38810[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38760 === 4))
{var inst_38693 = (state_38759[9]);var inst_38699 = (state_38759[2]);var inst_38700 = cljs.core.get.call(null,inst_38699,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_38701 = cljs.core.get.call(null,inst_38699,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_38702 = cljs.core.get.call(null,inst_38699,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_38703 = inst_38693;var state_38759__$1 = (function (){var statearr_38767 = state_38759;(statearr_38767[11] = inst_38700);
(statearr_38767[7] = inst_38703);
(statearr_38767[12] = inst_38702);
(statearr_38767[13] = inst_38701);
return statearr_38767;
})();var statearr_38768_38811 = state_38759__$1;(statearr_38768_38811[2] = null);
(statearr_38768_38811[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38760 === 15))
{var state_38759__$1 = state_38759;var statearr_38769_38812 = state_38759__$1;(statearr_38769_38812[2] = null);
(statearr_38769_38812[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38760 === 21))
{var inst_38711 = (state_38759[10]);var inst_38703 = inst_38711;var state_38759__$1 = (function (){var statearr_38770 = state_38759;(statearr_38770[7] = inst_38703);
return statearr_38770;
})();var statearr_38771_38813 = state_38759__$1;(statearr_38771_38813[2] = null);
(statearr_38771_38813[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38760 === 13))
{var inst_38755 = (state_38759[2]);var state_38759__$1 = state_38759;var statearr_38772_38814 = state_38759__$1;(statearr_38772_38814[2] = inst_38755);
(statearr_38772_38814[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38760 === 22))
{var inst_38753 = (state_38759[2]);var state_38759__$1 = state_38759;var statearr_38773_38815 = state_38759__$1;(statearr_38773_38815[2] = inst_38753);
(statearr_38773_38815[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38760 === 6))
{var inst_38757 = (state_38759[2]);var state_38759__$1 = state_38759;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38759__$1,inst_38757);
} else
{if((state_val_38760 === 25))
{var state_38759__$1 = state_38759;var statearr_38774_38816 = state_38759__$1;(statearr_38774_38816[2] = null);
(statearr_38774_38816[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38760 === 17))
{var inst_38733 = (state_38759[14]);var state_38759__$1 = state_38759;var statearr_38775_38817 = state_38759__$1;(statearr_38775_38817[2] = inst_38733);
(statearr_38775_38817[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38760 === 3))
{var inst_38693 = (state_38759[9]);var state_38759__$1 = state_38759;var statearr_38776_38818 = state_38759__$1;(statearr_38776_38818[2] = inst_38693);
(statearr_38776_38818[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38760 === 12))
{var inst_38719 = (state_38759[15]);var inst_38714 = (state_38759[16]);var inst_38733 = (state_38759[14]);var inst_38733__$1 = inst_38714.call(null,inst_38719);var state_38759__$1 = (function (){var statearr_38777 = state_38759;(statearr_38777[14] = inst_38733__$1);
return statearr_38777;
})();if(cljs.core.truth_(inst_38733__$1))
{var statearr_38778_38819 = state_38759__$1;(statearr_38778_38819[1] = 17);
} else
{var statearr_38779_38820 = state_38759__$1;(statearr_38779_38820[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38760 === 2))
{var inst_38693 = (state_38759[9]);var inst_38696 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38693);var state_38759__$1 = state_38759;var statearr_38780_38821 = state_38759__$1;(statearr_38780_38821[2] = inst_38696);
(statearr_38780_38821[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38760 === 23))
{var inst_38744 = (state_38759[2]);var state_38759__$1 = state_38759;if(cljs.core.truth_(inst_38744))
{var statearr_38781_38822 = state_38759__$1;(statearr_38781_38822[1] = 24);
} else
{var statearr_38782_38823 = state_38759__$1;(statearr_38782_38823[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38760 === 19))
{var inst_38741 = (state_38759[2]);var state_38759__$1 = state_38759;if(cljs.core.truth_(inst_38741))
{var statearr_38783_38824 = state_38759__$1;(statearr_38783_38824[1] = 20);
} else
{var statearr_38784_38825 = state_38759__$1;(statearr_38784_38825[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38760 === 11))
{var inst_38718 = (state_38759[8]);var inst_38724 = (inst_38718 == null);var state_38759__$1 = state_38759;if(cljs.core.truth_(inst_38724))
{var statearr_38785_38826 = state_38759__$1;(statearr_38785_38826[1] = 14);
} else
{var statearr_38786_38827 = state_38759__$1;(statearr_38786_38827[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38760 === 9))
{var inst_38711 = (state_38759[10]);var inst_38711__$1 = (state_38759[2]);var inst_38712 = cljs.core.get.call(null,inst_38711__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_38713 = cljs.core.get.call(null,inst_38711__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_38714 = cljs.core.get.call(null,inst_38711__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_38759__$1 = (function (){var statearr_38787 = state_38759;(statearr_38787[16] = inst_38714);
(statearr_38787[17] = inst_38713);
(statearr_38787[10] = inst_38711__$1);
return statearr_38787;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_38759__$1,10,inst_38712);
} else
{if((state_val_38760 === 5))
{var inst_38703 = (state_38759[7]);var inst_38706 = cljs.core.seq_QMARK_.call(null,inst_38703);var state_38759__$1 = state_38759;if(inst_38706)
{var statearr_38788_38828 = state_38759__$1;(statearr_38788_38828[1] = 7);
} else
{var statearr_38789_38829 = state_38759__$1;(statearr_38789_38829[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38760 === 14))
{var inst_38719 = (state_38759[15]);var inst_38726 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_38719);var state_38759__$1 = state_38759;var statearr_38790_38830 = state_38759__$1;(statearr_38790_38830[2] = inst_38726);
(statearr_38790_38830[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38760 === 26))
{var inst_38749 = (state_38759[2]);var state_38759__$1 = state_38759;var statearr_38791_38831 = state_38759__$1;(statearr_38791_38831[2] = inst_38749);
(statearr_38791_38831[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38760 === 16))
{var inst_38729 = (state_38759[2]);var inst_38730 = calc_state.call(null);var inst_38703 = inst_38730;var state_38759__$1 = (function (){var statearr_38792 = state_38759;(statearr_38792[7] = inst_38703);
(statearr_38792[18] = inst_38729);
return statearr_38792;
})();var statearr_38793_38832 = state_38759__$1;(statearr_38793_38832[2] = null);
(statearr_38793_38832[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38760 === 10))
{var inst_38719 = (state_38759[15]);var inst_38718 = (state_38759[8]);var inst_38717 = (state_38759[2]);var inst_38718__$1 = cljs.core.nth.call(null,inst_38717,0,null);var inst_38719__$1 = cljs.core.nth.call(null,inst_38717,1,null);var inst_38720 = (inst_38718__$1 == null);var inst_38721 = cljs.core._EQ_.call(null,inst_38719__$1,change);var inst_38722 = (inst_38720) || (inst_38721);var state_38759__$1 = (function (){var statearr_38794 = state_38759;(statearr_38794[15] = inst_38719__$1);
(statearr_38794[8] = inst_38718__$1);
return statearr_38794;
})();if(cljs.core.truth_(inst_38722))
{var statearr_38795_38833 = state_38759__$1;(statearr_38795_38833[1] = 11);
} else
{var statearr_38796_38834 = state_38759__$1;(statearr_38796_38834[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38760 === 18))
{var inst_38719 = (state_38759[15]);var inst_38714 = (state_38759[16]);var inst_38713 = (state_38759[17]);var inst_38736 = cljs.core.empty_QMARK_.call(null,inst_38714);var inst_38737 = inst_38713.call(null,inst_38719);var inst_38738 = cljs.core.not.call(null,inst_38737);var inst_38739 = (inst_38736) && (inst_38738);var state_38759__$1 = state_38759;var statearr_38797_38835 = state_38759__$1;(statearr_38797_38835[2] = inst_38739);
(statearr_38797_38835[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38760 === 8))
{var inst_38703 = (state_38759[7]);var state_38759__$1 = state_38759;var statearr_38798_38836 = state_38759__$1;(statearr_38798_38836[2] = inst_38703);
(statearr_38798_38836[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11008__auto___38806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__10944__auto__,c__11008__auto___38806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__10945__auto__ = null;
var state_machine__10945__auto____0 = (function (){var statearr_38802 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38802[0] = state_machine__10945__auto__);
(statearr_38802[1] = 1);
return statearr_38802;
});
var state_machine__10945__auto____1 = (function (state_38759){while(true){
var ret_value__10946__auto__ = (function (){try{while(true){
var result__10947__auto__ = switch__10944__auto__.call(null,state_38759);if(cljs.core.keyword_identical_QMARK_.call(null,result__10947__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10947__auto__;
}
break;
}
}catch (e38803){if((e38803 instanceof Object))
{var ex__10948__auto__ = e38803;var statearr_38804_38837 = state_38759;(statearr_38804_38837[5] = ex__10948__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38759);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38803;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10946__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__38838 = state_38759;
state_38759 = G__38838;
continue;
}
} else
{return ret_value__10946__auto__;
}
break;
}
});
state_machine__10945__auto__ = function(state_38759){
switch(arguments.length){
case 0:
return state_machine__10945__auto____0.call(this);
case 1:
return state_machine__10945__auto____1.call(this,state_38759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10945__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10945__auto____0;
state_machine__10945__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10945__auto____1;
return state_machine__10945__auto__;
})()
;})(switch__10944__auto__,c__11008__auto___38806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__11010__auto__ = (function (){var statearr_38805 = f__11009__auto__.call(null);(statearr_38805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11008__auto___38806);
return statearr_38805;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11010__auto__);
});})(c__11008__auto___38806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj38840 = {};return obj38840;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7869__auto__ = p;if(and__7869__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7869__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8508__auto__ = (((p == null))?null:p);return (function (){var or__7881__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8508__auto__)]);if(or__7881__auto__)
{return or__7881__auto__;
} else
{var or__7881__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7881__auto____$1)
{return or__7881__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7869__auto__ = p;if(and__7869__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7869__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8508__auto__ = (((p == null))?null:p);return (function (){var or__7881__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8508__auto__)]);if(or__7881__auto__)
{return or__7881__auto__;
} else
{var or__7881__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7881__auto____$1)
{return or__7881__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7869__auto__ = p;if(and__7869__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7869__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8508__auto__ = (((p == null))?null:p);return (function (){var or__7881__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8508__auto__)]);if(or__7881__auto__)
{return or__7881__auto__;
} else
{var or__7881__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7881__auto____$1)
{return or__7881__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7869__auto__ = p;if(and__7869__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7869__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8508__auto__ = (((p == null))?null:p);return (function (){var or__7881__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8508__auto__)]);if(or__7881__auto__)
{return or__7881__auto__;
} else
{var or__7881__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7881__auto____$1)
{return or__7881__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__7881__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7881__auto__))
{return or__7881__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7881__auto__,mults){
return (function (p1__38841_SHARP_){if(cljs.core.truth_(p1__38841_SHARP_.call(null,topic)))
{return p1__38841_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__38841_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7881__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t38956 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38956 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta38957){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta38957 = meta38957;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38956.cljs$lang$type = true;
cljs.core.async.t38956.cljs$lang$ctorStr = "cljs.core.async/t38956";
cljs.core.async.t38956.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8448__auto__,writer__8449__auto__,opt__8450__auto__){return cljs.core._write.call(null,writer__8449__auto__,"cljs.core.async/t38956");
});})(mults,ensure_mult))
;
cljs.core.async.t38956.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t38956.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t38956.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t38956.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t38956.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t38956.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t38956.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t38956.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38958){var self__ = this;
var _38958__$1 = this;return self__.meta38957;
});})(mults,ensure_mult))
;
cljs.core.async.t38956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38958,meta38957__$1){var self__ = this;
var _38958__$1 = this;return (new cljs.core.async.t38956(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta38957__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t38956 = ((function (mults,ensure_mult){
return (function __GT_t38956(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta38957){return (new cljs.core.async.t38956(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta38957));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t38956(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__11008__auto___39070 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11008__auto___39070,mults,ensure_mult,p){
return (function (){var f__11009__auto__ = (function (){var switch__10944__auto__ = ((function (c__11008__auto___39070,mults,ensure_mult,p){
return (function (state_39026){var state_val_39027 = (state_39026[1]);if((state_val_39027 === 7))
{var inst_39022 = (state_39026[2]);var state_39026__$1 = state_39026;var statearr_39028_39071 = state_39026__$1;(statearr_39028_39071[2] = inst_39022);
(statearr_39028_39071[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39027 === 20))
{var state_39026__$1 = state_39026;var statearr_39029_39072 = state_39026__$1;(statearr_39029_39072[2] = null);
(statearr_39029_39072[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39027 === 1))
{var state_39026__$1 = state_39026;var statearr_39030_39073 = state_39026__$1;(statearr_39030_39073[2] = null);
(statearr_39030_39073[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39027 === 4))
{var inst_38961 = (state_39026[7]);var inst_38961__$1 = (state_39026[2]);var inst_38962 = (inst_38961__$1 == null);var state_39026__$1 = (function (){var statearr_39031 = state_39026;(statearr_39031[7] = inst_38961__$1);
return statearr_39031;
})();if(cljs.core.truth_(inst_38962))
{var statearr_39032_39074 = state_39026__$1;(statearr_39032_39074[1] = 5);
} else
{var statearr_39033_39075 = state_39026__$1;(statearr_39033_39075[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39027 === 15))
{var inst_39003 = (state_39026[2]);var state_39026__$1 = state_39026;var statearr_39034_39076 = state_39026__$1;(statearr_39034_39076[2] = inst_39003);
(statearr_39034_39076[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39027 === 21))
{var inst_39009 = (state_39026[8]);var inst_39017 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_39009);var state_39026__$1 = state_39026;var statearr_39035_39077 = state_39026__$1;(statearr_39035_39077[2] = inst_39017);
(statearr_39035_39077[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39027 === 13))
{var inst_38985 = (state_39026[9]);var inst_38987 = cljs.core.chunked_seq_QMARK_.call(null,inst_38985);var state_39026__$1 = state_39026;if(inst_38987)
{var statearr_39036_39078 = state_39026__$1;(statearr_39036_39078[1] = 16);
} else
{var statearr_39037_39079 = state_39026__$1;(statearr_39037_39079[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39027 === 22))
{var inst_39019 = (state_39026[2]);var state_39026__$1 = (function (){var statearr_39038 = state_39026;(statearr_39038[10] = inst_39019);
return statearr_39038;
})();var statearr_39039_39080 = state_39026__$1;(statearr_39039_39080[2] = null);
(statearr_39039_39080[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39027 === 6))
{var inst_39009 = (state_39026[8]);var inst_38961 = (state_39026[7]);var inst_39009__$1 = topic_fn.call(null,inst_38961);var inst_39010 = cljs.core.deref.call(null,mults);var inst_39011 = cljs.core.get.call(null,inst_39010,inst_39009__$1);var inst_39012 = cljs.core.async.muxch_STAR_.call(null,inst_39011);var state_39026__$1 = (function (){var statearr_39040 = state_39026;(statearr_39040[8] = inst_39009__$1);
return statearr_39040;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39026__$1,19,inst_39012,inst_38961);
} else
{if((state_val_39027 === 17))
{var inst_38985 = (state_39026[9]);var inst_38994 = cljs.core.first.call(null,inst_38985);var inst_38995 = cljs.core.async.muxch_STAR_.call(null,inst_38994);var inst_38996 = cljs.core.async.close_BANG_.call(null,inst_38995);var inst_38997 = cljs.core.next.call(null,inst_38985);var inst_38971 = inst_38997;var inst_38972 = null;var inst_38973 = 0;var inst_38974 = 0;var state_39026__$1 = (function (){var statearr_39041 = state_39026;(statearr_39041[11] = inst_38973);
(statearr_39041[12] = inst_38972);
(statearr_39041[13] = inst_38974);
(statearr_39041[14] = inst_38996);
(statearr_39041[15] = inst_38971);
return statearr_39041;
})();var statearr_39042_39081 = state_39026__$1;(statearr_39042_39081[2] = null);
(statearr_39042_39081[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39027 === 3))
{var inst_39024 = (state_39026[2]);var state_39026__$1 = state_39026;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39026__$1,inst_39024);
} else
{if((state_val_39027 === 12))
{var inst_39005 = (state_39026[2]);var state_39026__$1 = state_39026;var statearr_39043_39082 = state_39026__$1;(statearr_39043_39082[2] = inst_39005);
(statearr_39043_39082[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39027 === 2))
{var state_39026__$1 = state_39026;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39026__$1,4,ch);
} else
{if((state_val_39027 === 19))
{var inst_39014 = (state_39026[2]);var state_39026__$1 = state_39026;if(cljs.core.truth_(inst_39014))
{var statearr_39044_39083 = state_39026__$1;(statearr_39044_39083[1] = 20);
} else
{var statearr_39045_39084 = state_39026__$1;(statearr_39045_39084[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39027 === 11))
{var inst_38971 = (state_39026[15]);var inst_38985 = (state_39026[9]);var inst_38985__$1 = cljs.core.seq.call(null,inst_38971);var state_39026__$1 = (function (){var statearr_39046 = state_39026;(statearr_39046[9] = inst_38985__$1);
return statearr_39046;
})();if(inst_38985__$1)
{var statearr_39047_39085 = state_39026__$1;(statearr_39047_39085[1] = 13);
} else
{var statearr_39048_39086 = state_39026__$1;(statearr_39048_39086[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39027 === 9))
{var inst_39007 = (state_39026[2]);var state_39026__$1 = state_39026;var statearr_39049_39087 = state_39026__$1;(statearr_39049_39087[2] = inst_39007);
(statearr_39049_39087[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39027 === 5))
{var inst_38968 = cljs.core.deref.call(null,mults);var inst_38969 = cljs.core.vals.call(null,inst_38968);var inst_38970 = cljs.core.seq.call(null,inst_38969);var inst_38971 = inst_38970;var inst_38972 = null;var inst_38973 = 0;var inst_38974 = 0;var state_39026__$1 = (function (){var statearr_39050 = state_39026;(statearr_39050[11] = inst_38973);
(statearr_39050[12] = inst_38972);
(statearr_39050[13] = inst_38974);
(statearr_39050[15] = inst_38971);
return statearr_39050;
})();var statearr_39051_39088 = state_39026__$1;(statearr_39051_39088[2] = null);
(statearr_39051_39088[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39027 === 14))
{var state_39026__$1 = state_39026;var statearr_39055_39089 = state_39026__$1;(statearr_39055_39089[2] = null);
(statearr_39055_39089[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39027 === 16))
{var inst_38985 = (state_39026[9]);var inst_38989 = cljs.core.chunk_first.call(null,inst_38985);var inst_38990 = cljs.core.chunk_rest.call(null,inst_38985);var inst_38991 = cljs.core.count.call(null,inst_38989);var inst_38971 = inst_38990;var inst_38972 = inst_38989;var inst_38973 = inst_38991;var inst_38974 = 0;var state_39026__$1 = (function (){var statearr_39056 = state_39026;(statearr_39056[11] = inst_38973);
(statearr_39056[12] = inst_38972);
(statearr_39056[13] = inst_38974);
(statearr_39056[15] = inst_38971);
return statearr_39056;
})();var statearr_39057_39090 = state_39026__$1;(statearr_39057_39090[2] = null);
(statearr_39057_39090[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39027 === 10))
{var inst_38973 = (state_39026[11]);var inst_38972 = (state_39026[12]);var inst_38974 = (state_39026[13]);var inst_38971 = (state_39026[15]);var inst_38979 = cljs.core._nth.call(null,inst_38972,inst_38974);var inst_38980 = cljs.core.async.muxch_STAR_.call(null,inst_38979);var inst_38981 = cljs.core.async.close_BANG_.call(null,inst_38980);var inst_38982 = (inst_38974 + 1);var tmp39052 = inst_38973;var tmp39053 = inst_38972;var tmp39054 = inst_38971;var inst_38971__$1 = tmp39054;var inst_38972__$1 = tmp39053;var inst_38973__$1 = tmp39052;var inst_38974__$1 = inst_38982;var state_39026__$1 = (function (){var statearr_39058 = state_39026;(statearr_39058[11] = inst_38973__$1);
(statearr_39058[12] = inst_38972__$1);
(statearr_39058[13] = inst_38974__$1);
(statearr_39058[15] = inst_38971__$1);
(statearr_39058[16] = inst_38981);
return statearr_39058;
})();var statearr_39059_39091 = state_39026__$1;(statearr_39059_39091[2] = null);
(statearr_39059_39091[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39027 === 18))
{var inst_39000 = (state_39026[2]);var state_39026__$1 = state_39026;var statearr_39060_39092 = state_39026__$1;(statearr_39060_39092[2] = inst_39000);
(statearr_39060_39092[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39027 === 8))
{var inst_38973 = (state_39026[11]);var inst_38974 = (state_39026[13]);var inst_38976 = (inst_38974 < inst_38973);var inst_38977 = inst_38976;var state_39026__$1 = state_39026;if(cljs.core.truth_(inst_38977))
{var statearr_39061_39093 = state_39026__$1;(statearr_39061_39093[1] = 10);
} else
{var statearr_39062_39094 = state_39026__$1;(statearr_39062_39094[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11008__auto___39070,mults,ensure_mult,p))
;return ((function (switch__10944__auto__,c__11008__auto___39070,mults,ensure_mult,p){
return (function() {
var state_machine__10945__auto__ = null;
var state_machine__10945__auto____0 = (function (){var statearr_39066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39066[0] = state_machine__10945__auto__);
(statearr_39066[1] = 1);
return statearr_39066;
});
var state_machine__10945__auto____1 = (function (state_39026){while(true){
var ret_value__10946__auto__ = (function (){try{while(true){
var result__10947__auto__ = switch__10944__auto__.call(null,state_39026);if(cljs.core.keyword_identical_QMARK_.call(null,result__10947__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10947__auto__;
}
break;
}
}catch (e39067){if((e39067 instanceof Object))
{var ex__10948__auto__ = e39067;var statearr_39068_39095 = state_39026;(statearr_39068_39095[5] = ex__10948__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39026);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39067;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10946__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39096 = state_39026;
state_39026 = G__39096;
continue;
}
} else
{return ret_value__10946__auto__;
}
break;
}
});
state_machine__10945__auto__ = function(state_39026){
switch(arguments.length){
case 0:
return state_machine__10945__auto____0.call(this);
case 1:
return state_machine__10945__auto____1.call(this,state_39026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10945__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10945__auto____0;
state_machine__10945__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10945__auto____1;
return state_machine__10945__auto__;
})()
;})(switch__10944__auto__,c__11008__auto___39070,mults,ensure_mult,p))
})();var state__11010__auto__ = (function (){var statearr_39069 = f__11009__auto__.call(null);(statearr_39069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11008__auto___39070);
return statearr_39069;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11010__auto__);
});})(c__11008__auto___39070,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__11008__auto___39233 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11008__auto___39233,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__11009__auto__ = (function (){var switch__10944__auto__ = ((function (c__11008__auto___39233,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_39203){var state_val_39204 = (state_39203[1]);if((state_val_39204 === 7))
{var state_39203__$1 = state_39203;var statearr_39205_39234 = state_39203__$1;(statearr_39205_39234[2] = null);
(statearr_39205_39234[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39204 === 1))
{var state_39203__$1 = state_39203;var statearr_39206_39235 = state_39203__$1;(statearr_39206_39235[2] = null);
(statearr_39206_39235[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39204 === 4))
{var inst_39167 = (state_39203[7]);var inst_39169 = (inst_39167 < cnt);var state_39203__$1 = state_39203;if(cljs.core.truth_(inst_39169))
{var statearr_39207_39236 = state_39203__$1;(statearr_39207_39236[1] = 6);
} else
{var statearr_39208_39237 = state_39203__$1;(statearr_39208_39237[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39204 === 15))
{var inst_39199 = (state_39203[2]);var state_39203__$1 = state_39203;var statearr_39209_39238 = state_39203__$1;(statearr_39209_39238[2] = inst_39199);
(statearr_39209_39238[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39204 === 13))
{var inst_39192 = cljs.core.async.close_BANG_.call(null,out);var state_39203__$1 = state_39203;var statearr_39210_39239 = state_39203__$1;(statearr_39210_39239[2] = inst_39192);
(statearr_39210_39239[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39204 === 6))
{var state_39203__$1 = state_39203;var statearr_39211_39240 = state_39203__$1;(statearr_39211_39240[2] = null);
(statearr_39211_39240[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39204 === 3))
{var inst_39201 = (state_39203[2]);var state_39203__$1 = state_39203;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39203__$1,inst_39201);
} else
{if((state_val_39204 === 12))
{var inst_39189 = (state_39203[8]);var inst_39189__$1 = (state_39203[2]);var inst_39190 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_39189__$1);var state_39203__$1 = (function (){var statearr_39212 = state_39203;(statearr_39212[8] = inst_39189__$1);
return statearr_39212;
})();if(cljs.core.truth_(inst_39190))
{var statearr_39213_39241 = state_39203__$1;(statearr_39213_39241[1] = 13);
} else
{var statearr_39214_39242 = state_39203__$1;(statearr_39214_39242[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39204 === 2))
{var inst_39166 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_39167 = 0;var state_39203__$1 = (function (){var statearr_39215 = state_39203;(statearr_39215[7] = inst_39167);
(statearr_39215[9] = inst_39166);
return statearr_39215;
})();var statearr_39216_39243 = state_39203__$1;(statearr_39216_39243[2] = null);
(statearr_39216_39243[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39204 === 11))
{var inst_39167 = (state_39203[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_39203,10,Object,null,9);var inst_39176 = chs__$1.call(null,inst_39167);var inst_39177 = done.call(null,inst_39167);var inst_39178 = cljs.core.async.take_BANG_.call(null,inst_39176,inst_39177);var state_39203__$1 = state_39203;var statearr_39217_39244 = state_39203__$1;(statearr_39217_39244[2] = inst_39178);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39203__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39204 === 9))
{var inst_39167 = (state_39203[7]);var inst_39180 = (state_39203[2]);var inst_39181 = (inst_39167 + 1);var inst_39167__$1 = inst_39181;var state_39203__$1 = (function (){var statearr_39218 = state_39203;(statearr_39218[7] = inst_39167__$1);
(statearr_39218[10] = inst_39180);
return statearr_39218;
})();var statearr_39219_39245 = state_39203__$1;(statearr_39219_39245[2] = null);
(statearr_39219_39245[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39204 === 5))
{var inst_39187 = (state_39203[2]);var state_39203__$1 = (function (){var statearr_39220 = state_39203;(statearr_39220[11] = inst_39187);
return statearr_39220;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39203__$1,12,dchan);
} else
{if((state_val_39204 === 14))
{var inst_39189 = (state_39203[8]);var inst_39194 = cljs.core.apply.call(null,f,inst_39189);var state_39203__$1 = state_39203;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39203__$1,16,out,inst_39194);
} else
{if((state_val_39204 === 16))
{var inst_39196 = (state_39203[2]);var state_39203__$1 = (function (){var statearr_39221 = state_39203;(statearr_39221[12] = inst_39196);
return statearr_39221;
})();var statearr_39222_39246 = state_39203__$1;(statearr_39222_39246[2] = null);
(statearr_39222_39246[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39204 === 10))
{var inst_39171 = (state_39203[2]);var inst_39172 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_39203__$1 = (function (){var statearr_39223 = state_39203;(statearr_39223[13] = inst_39171);
return statearr_39223;
})();var statearr_39224_39247 = state_39203__$1;(statearr_39224_39247[2] = inst_39172);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39203__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39204 === 8))
{var inst_39185 = (state_39203[2]);var state_39203__$1 = state_39203;var statearr_39225_39248 = state_39203__$1;(statearr_39225_39248[2] = inst_39185);
(statearr_39225_39248[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11008__auto___39233,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__10944__auto__,c__11008__auto___39233,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__10945__auto__ = null;
var state_machine__10945__auto____0 = (function (){var statearr_39229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39229[0] = state_machine__10945__auto__);
(statearr_39229[1] = 1);
return statearr_39229;
});
var state_machine__10945__auto____1 = (function (state_39203){while(true){
var ret_value__10946__auto__ = (function (){try{while(true){
var result__10947__auto__ = switch__10944__auto__.call(null,state_39203);if(cljs.core.keyword_identical_QMARK_.call(null,result__10947__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10947__auto__;
}
break;
}
}catch (e39230){if((e39230 instanceof Object))
{var ex__10948__auto__ = e39230;var statearr_39231_39249 = state_39203;(statearr_39231_39249[5] = ex__10948__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39203);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39230;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10946__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39250 = state_39203;
state_39203 = G__39250;
continue;
}
} else
{return ret_value__10946__auto__;
}
break;
}
});
state_machine__10945__auto__ = function(state_39203){
switch(arguments.length){
case 0:
return state_machine__10945__auto____0.call(this);
case 1:
return state_machine__10945__auto____1.call(this,state_39203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10945__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10945__auto____0;
state_machine__10945__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10945__auto____1;
return state_machine__10945__auto__;
})()
;})(switch__10944__auto__,c__11008__auto___39233,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__11010__auto__ = (function (){var statearr_39232 = f__11009__auto__.call(null);(statearr_39232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11008__auto___39233);
return statearr_39232;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11010__auto__);
});})(c__11008__auto___39233,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11008__auto___39358 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11008__auto___39358,out){
return (function (){var f__11009__auto__ = (function (){var switch__10944__auto__ = ((function (c__11008__auto___39358,out){
return (function (state_39334){var state_val_39335 = (state_39334[1]);if((state_val_39335 === 7))
{var inst_39314 = (state_39334[7]);var inst_39313 = (state_39334[8]);var inst_39313__$1 = (state_39334[2]);var inst_39314__$1 = cljs.core.nth.call(null,inst_39313__$1,0,null);var inst_39315 = cljs.core.nth.call(null,inst_39313__$1,1,null);var inst_39316 = (inst_39314__$1 == null);var state_39334__$1 = (function (){var statearr_39336 = state_39334;(statearr_39336[7] = inst_39314__$1);
(statearr_39336[8] = inst_39313__$1);
(statearr_39336[9] = inst_39315);
return statearr_39336;
})();if(cljs.core.truth_(inst_39316))
{var statearr_39337_39359 = state_39334__$1;(statearr_39337_39359[1] = 8);
} else
{var statearr_39338_39360 = state_39334__$1;(statearr_39338_39360[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39335 === 1))
{var inst_39305 = cljs.core.vec.call(null,chs);var inst_39306 = inst_39305;var state_39334__$1 = (function (){var statearr_39339 = state_39334;(statearr_39339[10] = inst_39306);
return statearr_39339;
})();var statearr_39340_39361 = state_39334__$1;(statearr_39340_39361[2] = null);
(statearr_39340_39361[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39335 === 4))
{var inst_39306 = (state_39334[10]);var state_39334__$1 = state_39334;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_39334__$1,7,inst_39306);
} else
{if((state_val_39335 === 6))
{var inst_39330 = (state_39334[2]);var state_39334__$1 = state_39334;var statearr_39341_39362 = state_39334__$1;(statearr_39341_39362[2] = inst_39330);
(statearr_39341_39362[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39335 === 3))
{var inst_39332 = (state_39334[2]);var state_39334__$1 = state_39334;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39334__$1,inst_39332);
} else
{if((state_val_39335 === 2))
{var inst_39306 = (state_39334[10]);var inst_39308 = cljs.core.count.call(null,inst_39306);var inst_39309 = (inst_39308 > 0);var state_39334__$1 = state_39334;if(cljs.core.truth_(inst_39309))
{var statearr_39343_39363 = state_39334__$1;(statearr_39343_39363[1] = 4);
} else
{var statearr_39344_39364 = state_39334__$1;(statearr_39344_39364[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39335 === 11))
{var inst_39306 = (state_39334[10]);var inst_39323 = (state_39334[2]);var tmp39342 = inst_39306;var inst_39306__$1 = tmp39342;var state_39334__$1 = (function (){var statearr_39345 = state_39334;(statearr_39345[11] = inst_39323);
(statearr_39345[10] = inst_39306__$1);
return statearr_39345;
})();var statearr_39346_39365 = state_39334__$1;(statearr_39346_39365[2] = null);
(statearr_39346_39365[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39335 === 9))
{var inst_39314 = (state_39334[7]);var state_39334__$1 = state_39334;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39334__$1,11,out,inst_39314);
} else
{if((state_val_39335 === 5))
{var inst_39328 = cljs.core.async.close_BANG_.call(null,out);var state_39334__$1 = state_39334;var statearr_39347_39366 = state_39334__$1;(statearr_39347_39366[2] = inst_39328);
(statearr_39347_39366[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39335 === 10))
{var inst_39326 = (state_39334[2]);var state_39334__$1 = state_39334;var statearr_39348_39367 = state_39334__$1;(statearr_39348_39367[2] = inst_39326);
(statearr_39348_39367[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39335 === 8))
{var inst_39314 = (state_39334[7]);var inst_39313 = (state_39334[8]);var inst_39315 = (state_39334[9]);var inst_39306 = (state_39334[10]);var inst_39318 = (function (){var c = inst_39315;var v = inst_39314;var vec__39311 = inst_39313;var cs = inst_39306;return ((function (c,v,vec__39311,cs,inst_39314,inst_39313,inst_39315,inst_39306,state_val_39335,c__11008__auto___39358,out){
return (function (p1__39251_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__39251_SHARP_);
});
;})(c,v,vec__39311,cs,inst_39314,inst_39313,inst_39315,inst_39306,state_val_39335,c__11008__auto___39358,out))
})();var inst_39319 = cljs.core.filterv.call(null,inst_39318,inst_39306);var inst_39306__$1 = inst_39319;var state_39334__$1 = (function (){var statearr_39349 = state_39334;(statearr_39349[10] = inst_39306__$1);
return statearr_39349;
})();var statearr_39350_39368 = state_39334__$1;(statearr_39350_39368[2] = null);
(statearr_39350_39368[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11008__auto___39358,out))
;return ((function (switch__10944__auto__,c__11008__auto___39358,out){
return (function() {
var state_machine__10945__auto__ = null;
var state_machine__10945__auto____0 = (function (){var statearr_39354 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39354[0] = state_machine__10945__auto__);
(statearr_39354[1] = 1);
return statearr_39354;
});
var state_machine__10945__auto____1 = (function (state_39334){while(true){
var ret_value__10946__auto__ = (function (){try{while(true){
var result__10947__auto__ = switch__10944__auto__.call(null,state_39334);if(cljs.core.keyword_identical_QMARK_.call(null,result__10947__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10947__auto__;
}
break;
}
}catch (e39355){if((e39355 instanceof Object))
{var ex__10948__auto__ = e39355;var statearr_39356_39369 = state_39334;(statearr_39356_39369[5] = ex__10948__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39334);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39355;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10946__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39370 = state_39334;
state_39334 = G__39370;
continue;
}
} else
{return ret_value__10946__auto__;
}
break;
}
});
state_machine__10945__auto__ = function(state_39334){
switch(arguments.length){
case 0:
return state_machine__10945__auto____0.call(this);
case 1:
return state_machine__10945__auto____1.call(this,state_39334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10945__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10945__auto____0;
state_machine__10945__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10945__auto____1;
return state_machine__10945__auto__;
})()
;})(switch__10944__auto__,c__11008__auto___39358,out))
})();var state__11010__auto__ = (function (){var statearr_39357 = f__11009__auto__.call(null);(statearr_39357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11008__auto___39358);
return statearr_39357;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11010__auto__);
});})(c__11008__auto___39358,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11008__auto___39463 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11008__auto___39463,out){
return (function (){var f__11009__auto__ = (function (){var switch__10944__auto__ = ((function (c__11008__auto___39463,out){
return (function (state_39440){var state_val_39441 = (state_39440[1]);if((state_val_39441 === 7))
{var inst_39422 = (state_39440[7]);var inst_39422__$1 = (state_39440[2]);var inst_39423 = (inst_39422__$1 == null);var inst_39424 = cljs.core.not.call(null,inst_39423);var state_39440__$1 = (function (){var statearr_39442 = state_39440;(statearr_39442[7] = inst_39422__$1);
return statearr_39442;
})();if(inst_39424)
{var statearr_39443_39464 = state_39440__$1;(statearr_39443_39464[1] = 8);
} else
{var statearr_39444_39465 = state_39440__$1;(statearr_39444_39465[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39441 === 1))
{var inst_39417 = 0;var state_39440__$1 = (function (){var statearr_39445 = state_39440;(statearr_39445[8] = inst_39417);
return statearr_39445;
})();var statearr_39446_39466 = state_39440__$1;(statearr_39446_39466[2] = null);
(statearr_39446_39466[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39441 === 4))
{var state_39440__$1 = state_39440;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39440__$1,7,ch);
} else
{if((state_val_39441 === 6))
{var inst_39435 = (state_39440[2]);var state_39440__$1 = state_39440;var statearr_39447_39467 = state_39440__$1;(statearr_39447_39467[2] = inst_39435);
(statearr_39447_39467[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39441 === 3))
{var inst_39437 = (state_39440[2]);var inst_39438 = cljs.core.async.close_BANG_.call(null,out);var state_39440__$1 = (function (){var statearr_39448 = state_39440;(statearr_39448[9] = inst_39437);
return statearr_39448;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39440__$1,inst_39438);
} else
{if((state_val_39441 === 2))
{var inst_39417 = (state_39440[8]);var inst_39419 = (inst_39417 < n);var state_39440__$1 = state_39440;if(cljs.core.truth_(inst_39419))
{var statearr_39449_39468 = state_39440__$1;(statearr_39449_39468[1] = 4);
} else
{var statearr_39450_39469 = state_39440__$1;(statearr_39450_39469[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39441 === 11))
{var inst_39417 = (state_39440[8]);var inst_39427 = (state_39440[2]);var inst_39428 = (inst_39417 + 1);var inst_39417__$1 = inst_39428;var state_39440__$1 = (function (){var statearr_39451 = state_39440;(statearr_39451[10] = inst_39427);
(statearr_39451[8] = inst_39417__$1);
return statearr_39451;
})();var statearr_39452_39470 = state_39440__$1;(statearr_39452_39470[2] = null);
(statearr_39452_39470[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39441 === 9))
{var state_39440__$1 = state_39440;var statearr_39453_39471 = state_39440__$1;(statearr_39453_39471[2] = null);
(statearr_39453_39471[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39441 === 5))
{var state_39440__$1 = state_39440;var statearr_39454_39472 = state_39440__$1;(statearr_39454_39472[2] = null);
(statearr_39454_39472[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39441 === 10))
{var inst_39432 = (state_39440[2]);var state_39440__$1 = state_39440;var statearr_39455_39473 = state_39440__$1;(statearr_39455_39473[2] = inst_39432);
(statearr_39455_39473[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39441 === 8))
{var inst_39422 = (state_39440[7]);var state_39440__$1 = state_39440;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39440__$1,11,out,inst_39422);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11008__auto___39463,out))
;return ((function (switch__10944__auto__,c__11008__auto___39463,out){
return (function() {
var state_machine__10945__auto__ = null;
var state_machine__10945__auto____0 = (function (){var statearr_39459 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_39459[0] = state_machine__10945__auto__);
(statearr_39459[1] = 1);
return statearr_39459;
});
var state_machine__10945__auto____1 = (function (state_39440){while(true){
var ret_value__10946__auto__ = (function (){try{while(true){
var result__10947__auto__ = switch__10944__auto__.call(null,state_39440);if(cljs.core.keyword_identical_QMARK_.call(null,result__10947__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10947__auto__;
}
break;
}
}catch (e39460){if((e39460 instanceof Object))
{var ex__10948__auto__ = e39460;var statearr_39461_39474 = state_39440;(statearr_39461_39474[5] = ex__10948__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39440);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39460;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10946__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39475 = state_39440;
state_39440 = G__39475;
continue;
}
} else
{return ret_value__10946__auto__;
}
break;
}
});
state_machine__10945__auto__ = function(state_39440){
switch(arguments.length){
case 0:
return state_machine__10945__auto____0.call(this);
case 1:
return state_machine__10945__auto____1.call(this,state_39440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10945__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10945__auto____0;
state_machine__10945__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10945__auto____1;
return state_machine__10945__auto__;
})()
;})(switch__10944__auto__,c__11008__auto___39463,out))
})();var state__11010__auto__ = (function (){var statearr_39462 = f__11009__auto__.call(null);(statearr_39462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11008__auto___39463);
return statearr_39462;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11010__auto__);
});})(c__11008__auto___39463,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11008__auto___39572 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11008__auto___39572,out){
return (function (){var f__11009__auto__ = (function (){var switch__10944__auto__ = ((function (c__11008__auto___39572,out){
return (function (state_39547){var state_val_39548 = (state_39547[1]);if((state_val_39548 === 7))
{var inst_39542 = (state_39547[2]);var state_39547__$1 = state_39547;var statearr_39549_39573 = state_39547__$1;(statearr_39549_39573[2] = inst_39542);
(statearr_39549_39573[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39548 === 1))
{var inst_39524 = null;var state_39547__$1 = (function (){var statearr_39550 = state_39547;(statearr_39550[7] = inst_39524);
return statearr_39550;
})();var statearr_39551_39574 = state_39547__$1;(statearr_39551_39574[2] = null);
(statearr_39551_39574[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39548 === 4))
{var inst_39527 = (state_39547[8]);var inst_39527__$1 = (state_39547[2]);var inst_39528 = (inst_39527__$1 == null);var inst_39529 = cljs.core.not.call(null,inst_39528);var state_39547__$1 = (function (){var statearr_39552 = state_39547;(statearr_39552[8] = inst_39527__$1);
return statearr_39552;
})();if(inst_39529)
{var statearr_39553_39575 = state_39547__$1;(statearr_39553_39575[1] = 5);
} else
{var statearr_39554_39576 = state_39547__$1;(statearr_39554_39576[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39548 === 6))
{var state_39547__$1 = state_39547;var statearr_39555_39577 = state_39547__$1;(statearr_39555_39577[2] = null);
(statearr_39555_39577[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39548 === 3))
{var inst_39544 = (state_39547[2]);var inst_39545 = cljs.core.async.close_BANG_.call(null,out);var state_39547__$1 = (function (){var statearr_39556 = state_39547;(statearr_39556[9] = inst_39544);
return statearr_39556;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39547__$1,inst_39545);
} else
{if((state_val_39548 === 2))
{var state_39547__$1 = state_39547;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39547__$1,4,ch);
} else
{if((state_val_39548 === 11))
{var inst_39527 = (state_39547[8]);var inst_39536 = (state_39547[2]);var inst_39524 = inst_39527;var state_39547__$1 = (function (){var statearr_39557 = state_39547;(statearr_39557[7] = inst_39524);
(statearr_39557[10] = inst_39536);
return statearr_39557;
})();var statearr_39558_39578 = state_39547__$1;(statearr_39558_39578[2] = null);
(statearr_39558_39578[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39548 === 9))
{var inst_39527 = (state_39547[8]);var state_39547__$1 = state_39547;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39547__$1,11,out,inst_39527);
} else
{if((state_val_39548 === 5))
{var inst_39524 = (state_39547[7]);var inst_39527 = (state_39547[8]);var inst_39531 = cljs.core._EQ_.call(null,inst_39527,inst_39524);var state_39547__$1 = state_39547;if(inst_39531)
{var statearr_39560_39579 = state_39547__$1;(statearr_39560_39579[1] = 8);
} else
{var statearr_39561_39580 = state_39547__$1;(statearr_39561_39580[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39548 === 10))
{var inst_39539 = (state_39547[2]);var state_39547__$1 = state_39547;var statearr_39562_39581 = state_39547__$1;(statearr_39562_39581[2] = inst_39539);
(statearr_39562_39581[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39548 === 8))
{var inst_39524 = (state_39547[7]);var tmp39559 = inst_39524;var inst_39524__$1 = tmp39559;var state_39547__$1 = (function (){var statearr_39563 = state_39547;(statearr_39563[7] = inst_39524__$1);
return statearr_39563;
})();var statearr_39564_39582 = state_39547__$1;(statearr_39564_39582[2] = null);
(statearr_39564_39582[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11008__auto___39572,out))
;return ((function (switch__10944__auto__,c__11008__auto___39572,out){
return (function() {
var state_machine__10945__auto__ = null;
var state_machine__10945__auto____0 = (function (){var statearr_39568 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_39568[0] = state_machine__10945__auto__);
(statearr_39568[1] = 1);
return statearr_39568;
});
var state_machine__10945__auto____1 = (function (state_39547){while(true){
var ret_value__10946__auto__ = (function (){try{while(true){
var result__10947__auto__ = switch__10944__auto__.call(null,state_39547);if(cljs.core.keyword_identical_QMARK_.call(null,result__10947__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10947__auto__;
}
break;
}
}catch (e39569){if((e39569 instanceof Object))
{var ex__10948__auto__ = e39569;var statearr_39570_39583 = state_39547;(statearr_39570_39583[5] = ex__10948__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39547);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39569;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10946__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39584 = state_39547;
state_39547 = G__39584;
continue;
}
} else
{return ret_value__10946__auto__;
}
break;
}
});
state_machine__10945__auto__ = function(state_39547){
switch(arguments.length){
case 0:
return state_machine__10945__auto____0.call(this);
case 1:
return state_machine__10945__auto____1.call(this,state_39547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10945__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10945__auto____0;
state_machine__10945__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10945__auto____1;
return state_machine__10945__auto__;
})()
;})(switch__10944__auto__,c__11008__auto___39572,out))
})();var state__11010__auto__ = (function (){var statearr_39571 = f__11009__auto__.call(null);(statearr_39571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11008__auto___39572);
return statearr_39571;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11010__auto__);
});})(c__11008__auto___39572,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11008__auto___39719 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11008__auto___39719,out){
return (function (){var f__11009__auto__ = (function (){var switch__10944__auto__ = ((function (c__11008__auto___39719,out){
return (function (state_39689){var state_val_39690 = (state_39689[1]);if((state_val_39690 === 7))
{var inst_39685 = (state_39689[2]);var state_39689__$1 = state_39689;var statearr_39691_39720 = state_39689__$1;(statearr_39691_39720[2] = inst_39685);
(statearr_39691_39720[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39690 === 1))
{var inst_39652 = (new Array(n));var inst_39653 = inst_39652;var inst_39654 = 0;var state_39689__$1 = (function (){var statearr_39692 = state_39689;(statearr_39692[7] = inst_39653);
(statearr_39692[8] = inst_39654);
return statearr_39692;
})();var statearr_39693_39721 = state_39689__$1;(statearr_39693_39721[2] = null);
(statearr_39693_39721[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39690 === 4))
{var inst_39657 = (state_39689[9]);var inst_39657__$1 = (state_39689[2]);var inst_39658 = (inst_39657__$1 == null);var inst_39659 = cljs.core.not.call(null,inst_39658);var state_39689__$1 = (function (){var statearr_39694 = state_39689;(statearr_39694[9] = inst_39657__$1);
return statearr_39694;
})();if(inst_39659)
{var statearr_39695_39722 = state_39689__$1;(statearr_39695_39722[1] = 5);
} else
{var statearr_39696_39723 = state_39689__$1;(statearr_39696_39723[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39690 === 15))
{var inst_39679 = (state_39689[2]);var state_39689__$1 = state_39689;var statearr_39697_39724 = state_39689__$1;(statearr_39697_39724[2] = inst_39679);
(statearr_39697_39724[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39690 === 13))
{var state_39689__$1 = state_39689;var statearr_39698_39725 = state_39689__$1;(statearr_39698_39725[2] = null);
(statearr_39698_39725[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39690 === 6))
{var inst_39654 = (state_39689[8]);var inst_39675 = (inst_39654 > 0);var state_39689__$1 = state_39689;if(cljs.core.truth_(inst_39675))
{var statearr_39699_39726 = state_39689__$1;(statearr_39699_39726[1] = 12);
} else
{var statearr_39700_39727 = state_39689__$1;(statearr_39700_39727[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39690 === 3))
{var inst_39687 = (state_39689[2]);var state_39689__$1 = state_39689;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39689__$1,inst_39687);
} else
{if((state_val_39690 === 12))
{var inst_39653 = (state_39689[7]);var inst_39677 = cljs.core.vec.call(null,inst_39653);var state_39689__$1 = state_39689;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39689__$1,15,out,inst_39677);
} else
{if((state_val_39690 === 2))
{var state_39689__$1 = state_39689;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39689__$1,4,ch);
} else
{if((state_val_39690 === 11))
{var inst_39669 = (state_39689[2]);var inst_39670 = (new Array(n));var inst_39653 = inst_39670;var inst_39654 = 0;var state_39689__$1 = (function (){var statearr_39701 = state_39689;(statearr_39701[7] = inst_39653);
(statearr_39701[8] = inst_39654);
(statearr_39701[10] = inst_39669);
return statearr_39701;
})();var statearr_39702_39728 = state_39689__$1;(statearr_39702_39728[2] = null);
(statearr_39702_39728[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39690 === 9))
{var inst_39653 = (state_39689[7]);var inst_39667 = cljs.core.vec.call(null,inst_39653);var state_39689__$1 = state_39689;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39689__$1,11,out,inst_39667);
} else
{if((state_val_39690 === 5))
{var inst_39662 = (state_39689[11]);var inst_39653 = (state_39689[7]);var inst_39657 = (state_39689[9]);var inst_39654 = (state_39689[8]);var inst_39661 = (inst_39653[inst_39654] = inst_39657);var inst_39662__$1 = (inst_39654 + 1);var inst_39663 = (inst_39662__$1 < n);var state_39689__$1 = (function (){var statearr_39703 = state_39689;(statearr_39703[11] = inst_39662__$1);
(statearr_39703[12] = inst_39661);
return statearr_39703;
})();if(cljs.core.truth_(inst_39663))
{var statearr_39704_39729 = state_39689__$1;(statearr_39704_39729[1] = 8);
} else
{var statearr_39705_39730 = state_39689__$1;(statearr_39705_39730[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39690 === 14))
{var inst_39682 = (state_39689[2]);var inst_39683 = cljs.core.async.close_BANG_.call(null,out);var state_39689__$1 = (function (){var statearr_39707 = state_39689;(statearr_39707[13] = inst_39682);
return statearr_39707;
})();var statearr_39708_39731 = state_39689__$1;(statearr_39708_39731[2] = inst_39683);
(statearr_39708_39731[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39690 === 10))
{var inst_39673 = (state_39689[2]);var state_39689__$1 = state_39689;var statearr_39709_39732 = state_39689__$1;(statearr_39709_39732[2] = inst_39673);
(statearr_39709_39732[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39690 === 8))
{var inst_39662 = (state_39689[11]);var inst_39653 = (state_39689[7]);var tmp39706 = inst_39653;var inst_39653__$1 = tmp39706;var inst_39654 = inst_39662;var state_39689__$1 = (function (){var statearr_39710 = state_39689;(statearr_39710[7] = inst_39653__$1);
(statearr_39710[8] = inst_39654);
return statearr_39710;
})();var statearr_39711_39733 = state_39689__$1;(statearr_39711_39733[2] = null);
(statearr_39711_39733[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11008__auto___39719,out))
;return ((function (switch__10944__auto__,c__11008__auto___39719,out){
return (function() {
var state_machine__10945__auto__ = null;
var state_machine__10945__auto____0 = (function (){var statearr_39715 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39715[0] = state_machine__10945__auto__);
(statearr_39715[1] = 1);
return statearr_39715;
});
var state_machine__10945__auto____1 = (function (state_39689){while(true){
var ret_value__10946__auto__ = (function (){try{while(true){
var result__10947__auto__ = switch__10944__auto__.call(null,state_39689);if(cljs.core.keyword_identical_QMARK_.call(null,result__10947__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10947__auto__;
}
break;
}
}catch (e39716){if((e39716 instanceof Object))
{var ex__10948__auto__ = e39716;var statearr_39717_39734 = state_39689;(statearr_39717_39734[5] = ex__10948__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39689);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39716;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10946__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39735 = state_39689;
state_39689 = G__39735;
continue;
}
} else
{return ret_value__10946__auto__;
}
break;
}
});
state_machine__10945__auto__ = function(state_39689){
switch(arguments.length){
case 0:
return state_machine__10945__auto____0.call(this);
case 1:
return state_machine__10945__auto____1.call(this,state_39689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10945__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10945__auto____0;
state_machine__10945__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10945__auto____1;
return state_machine__10945__auto__;
})()
;})(switch__10944__auto__,c__11008__auto___39719,out))
})();var state__11010__auto__ = (function (){var statearr_39718 = f__11009__auto__.call(null);(statearr_39718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11008__auto___39719);
return statearr_39718;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11010__auto__);
});})(c__11008__auto___39719,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11008__auto___39878 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11008__auto___39878,out){
return (function (){var f__11009__auto__ = (function (){var switch__10944__auto__ = ((function (c__11008__auto___39878,out){
return (function (state_39848){var state_val_39849 = (state_39848[1]);if((state_val_39849 === 7))
{var inst_39844 = (state_39848[2]);var state_39848__$1 = state_39848;var statearr_39850_39879 = state_39848__$1;(statearr_39850_39879[2] = inst_39844);
(statearr_39850_39879[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39849 === 1))
{var inst_39807 = [];var inst_39808 = inst_39807;var inst_39809 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_39848__$1 = (function (){var statearr_39851 = state_39848;(statearr_39851[7] = inst_39809);
(statearr_39851[8] = inst_39808);
return statearr_39851;
})();var statearr_39852_39880 = state_39848__$1;(statearr_39852_39880[2] = null);
(statearr_39852_39880[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39849 === 4))
{var inst_39812 = (state_39848[9]);var inst_39812__$1 = (state_39848[2]);var inst_39813 = (inst_39812__$1 == null);var inst_39814 = cljs.core.not.call(null,inst_39813);var state_39848__$1 = (function (){var statearr_39853 = state_39848;(statearr_39853[9] = inst_39812__$1);
return statearr_39853;
})();if(inst_39814)
{var statearr_39854_39881 = state_39848__$1;(statearr_39854_39881[1] = 5);
} else
{var statearr_39855_39882 = state_39848__$1;(statearr_39855_39882[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39849 === 15))
{var inst_39838 = (state_39848[2]);var state_39848__$1 = state_39848;var statearr_39856_39883 = state_39848__$1;(statearr_39856_39883[2] = inst_39838);
(statearr_39856_39883[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39849 === 13))
{var state_39848__$1 = state_39848;var statearr_39857_39884 = state_39848__$1;(statearr_39857_39884[2] = null);
(statearr_39857_39884[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39849 === 6))
{var inst_39808 = (state_39848[8]);var inst_39833 = inst_39808.length;var inst_39834 = (inst_39833 > 0);var state_39848__$1 = state_39848;if(cljs.core.truth_(inst_39834))
{var statearr_39858_39885 = state_39848__$1;(statearr_39858_39885[1] = 12);
} else
{var statearr_39859_39886 = state_39848__$1;(statearr_39859_39886[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39849 === 3))
{var inst_39846 = (state_39848[2]);var state_39848__$1 = state_39848;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39848__$1,inst_39846);
} else
{if((state_val_39849 === 12))
{var inst_39808 = (state_39848[8]);var inst_39836 = cljs.core.vec.call(null,inst_39808);var state_39848__$1 = state_39848;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39848__$1,15,out,inst_39836);
} else
{if((state_val_39849 === 2))
{var state_39848__$1 = state_39848;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39848__$1,4,ch);
} else
{if((state_val_39849 === 11))
{var inst_39812 = (state_39848[9]);var inst_39816 = (state_39848[10]);var inst_39826 = (state_39848[2]);var inst_39827 = [];var inst_39828 = inst_39827.push(inst_39812);var inst_39808 = inst_39827;var inst_39809 = inst_39816;var state_39848__$1 = (function (){var statearr_39860 = state_39848;(statearr_39860[11] = inst_39826);
(statearr_39860[12] = inst_39828);
(statearr_39860[7] = inst_39809);
(statearr_39860[8] = inst_39808);
return statearr_39860;
})();var statearr_39861_39887 = state_39848__$1;(statearr_39861_39887[2] = null);
(statearr_39861_39887[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39849 === 9))
{var inst_39808 = (state_39848[8]);var inst_39824 = cljs.core.vec.call(null,inst_39808);var state_39848__$1 = state_39848;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39848__$1,11,out,inst_39824);
} else
{if((state_val_39849 === 5))
{var inst_39809 = (state_39848[7]);var inst_39812 = (state_39848[9]);var inst_39816 = (state_39848[10]);var inst_39816__$1 = f.call(null,inst_39812);var inst_39817 = cljs.core._EQ_.call(null,inst_39816__$1,inst_39809);var inst_39818 = cljs.core.keyword_identical_QMARK_.call(null,inst_39809,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_39819 = (inst_39817) || (inst_39818);var state_39848__$1 = (function (){var statearr_39862 = state_39848;(statearr_39862[10] = inst_39816__$1);
return statearr_39862;
})();if(cljs.core.truth_(inst_39819))
{var statearr_39863_39888 = state_39848__$1;(statearr_39863_39888[1] = 8);
} else
{var statearr_39864_39889 = state_39848__$1;(statearr_39864_39889[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39849 === 14))
{var inst_39841 = (state_39848[2]);var inst_39842 = cljs.core.async.close_BANG_.call(null,out);var state_39848__$1 = (function (){var statearr_39866 = state_39848;(statearr_39866[13] = inst_39841);
return statearr_39866;
})();var statearr_39867_39890 = state_39848__$1;(statearr_39867_39890[2] = inst_39842);
(statearr_39867_39890[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39849 === 10))
{var inst_39831 = (state_39848[2]);var state_39848__$1 = state_39848;var statearr_39868_39891 = state_39848__$1;(statearr_39868_39891[2] = inst_39831);
(statearr_39868_39891[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39849 === 8))
{var inst_39808 = (state_39848[8]);var inst_39812 = (state_39848[9]);var inst_39816 = (state_39848[10]);var inst_39821 = inst_39808.push(inst_39812);var tmp39865 = inst_39808;var inst_39808__$1 = tmp39865;var inst_39809 = inst_39816;var state_39848__$1 = (function (){var statearr_39869 = state_39848;(statearr_39869[7] = inst_39809);
(statearr_39869[8] = inst_39808__$1);
(statearr_39869[14] = inst_39821);
return statearr_39869;
})();var statearr_39870_39892 = state_39848__$1;(statearr_39870_39892[2] = null);
(statearr_39870_39892[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11008__auto___39878,out))
;return ((function (switch__10944__auto__,c__11008__auto___39878,out){
return (function() {
var state_machine__10945__auto__ = null;
var state_machine__10945__auto____0 = (function (){var statearr_39874 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39874[0] = state_machine__10945__auto__);
(statearr_39874[1] = 1);
return statearr_39874;
});
var state_machine__10945__auto____1 = (function (state_39848){while(true){
var ret_value__10946__auto__ = (function (){try{while(true){
var result__10947__auto__ = switch__10944__auto__.call(null,state_39848);if(cljs.core.keyword_identical_QMARK_.call(null,result__10947__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10947__auto__;
}
break;
}
}catch (e39875){if((e39875 instanceof Object))
{var ex__10948__auto__ = e39875;var statearr_39876_39893 = state_39848;(statearr_39876_39893[5] = ex__10948__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39848);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39875;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10946__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39894 = state_39848;
state_39848 = G__39894;
continue;
}
} else
{return ret_value__10946__auto__;
}
break;
}
});
state_machine__10945__auto__ = function(state_39848){
switch(arguments.length){
case 0:
return state_machine__10945__auto____0.call(this);
case 1:
return state_machine__10945__auto____1.call(this,state_39848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10945__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10945__auto____0;
state_machine__10945__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10945__auto____1;
return state_machine__10945__auto__;
})()
;})(switch__10944__auto__,c__11008__auto___39878,out))
})();var state__11010__auto__ = (function (){var statearr_39877 = f__11009__auto__.call(null);(statearr_39877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11008__auto___39878);
return statearr_39877;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11010__auto__);
});})(c__11008__auto___39878,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map
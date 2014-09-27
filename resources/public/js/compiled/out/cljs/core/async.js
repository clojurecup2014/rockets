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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t14279 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14279 = (function (f,fn_handler,meta14280){
this.f = f;
this.fn_handler = fn_handler;
this.meta14280 = meta14280;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14279.cljs$lang$type = true;
cljs.core.async.t14279.cljs$lang$ctorStr = "cljs.core.async/t14279";
cljs.core.async.t14279.cljs$lang$ctorPrWriter = (function (this__8448__auto__,writer__8449__auto__,opt__8450__auto__){return cljs.core._write.call(null,writer__8449__auto__,"cljs.core.async/t14279");
});
cljs.core.async.t14279.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14279.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t14279.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t14279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14281){var self__ = this;
var _14281__$1 = this;return self__.meta14280;
});
cljs.core.async.t14279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14281,meta14280__$1){var self__ = this;
var _14281__$1 = this;return (new cljs.core.async.t14279(self__.f,self__.fn_handler,meta14280__$1));
});
cljs.core.async.__GT_t14279 = (function __GT_t14279(f__$1,fn_handler__$1,meta14280){return (new cljs.core.async.t14279(f__$1,fn_handler__$1,meta14280));
});
}
return (new cljs.core.async.t14279(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__14283 = buff;if(G__14283)
{var bit__8531__auto__ = null;if(cljs.core.truth_((function (){var or__7881__auto__ = bit__8531__auto__;if(cljs.core.truth_(or__7881__auto__))
{return or__7881__auto__;
} else
{return G__14283.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__14283.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14283);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14283);
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
{var val_14284 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_14284);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_14284,ret){
return (function (){return fn1.call(null,val_14284);
});})(val_14284,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8729__auto___14285 = n;var x_14286 = 0;while(true){
if((x_14286 < n__8729__auto___14285))
{(a[x_14286] = 0);
{
var G__14287 = (x_14286 + 1);
x_14286 = G__14287;
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
var G__14288 = (i + 1);
i = G__14288;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t14292 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14292 = (function (flag,alt_flag,meta14293){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14293 = meta14293;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14292.cljs$lang$type = true;
cljs.core.async.t14292.cljs$lang$ctorStr = "cljs.core.async/t14292";
cljs.core.async.t14292.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8448__auto__,writer__8449__auto__,opt__8450__auto__){return cljs.core._write.call(null,writer__8449__auto__,"cljs.core.async/t14292");
});})(flag))
;
cljs.core.async.t14292.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14292.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t14292.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t14292.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14294){var self__ = this;
var _14294__$1 = this;return self__.meta14293;
});})(flag))
;
cljs.core.async.t14292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14294,meta14293__$1){var self__ = this;
var _14294__$1 = this;return (new cljs.core.async.t14292(self__.flag,self__.alt_flag,meta14293__$1));
});})(flag))
;
cljs.core.async.__GT_t14292 = ((function (flag){
return (function __GT_t14292(flag__$1,alt_flag__$1,meta14293){return (new cljs.core.async.t14292(flag__$1,alt_flag__$1,meta14293));
});})(flag))
;
}
return (new cljs.core.async.t14292(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t14298 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14298 = (function (cb,flag,alt_handler,meta14299){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14299 = meta14299;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14298.cljs$lang$type = true;
cljs.core.async.t14298.cljs$lang$ctorStr = "cljs.core.async/t14298";
cljs.core.async.t14298.cljs$lang$ctorPrWriter = (function (this__8448__auto__,writer__8449__auto__,opt__8450__auto__){return cljs.core._write.call(null,writer__8449__auto__,"cljs.core.async/t14298");
});
cljs.core.async.t14298.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14298.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t14298.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t14298.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14300){var self__ = this;
var _14300__$1 = this;return self__.meta14299;
});
cljs.core.async.t14298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14300,meta14299__$1){var self__ = this;
var _14300__$1 = this;return (new cljs.core.async.t14298(self__.cb,self__.flag,self__.alt_handler,meta14299__$1));
});
cljs.core.async.__GT_t14298 = (function __GT_t14298(cb__$1,flag__$1,alt_handler__$1,meta14299){return (new cljs.core.async.t14298(cb__$1,flag__$1,alt_handler__$1,meta14299));
});
}
return (new cljs.core.async.t14298(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14301_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14301_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14302_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14302_SHARP_,port], null));
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
var G__14303 = (i + 1);
i = G__14303;
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
var alts_BANG___delegate = function (ports,p__14304){var map__14306 = p__14304;var map__14306__$1 = ((cljs.core.seq_QMARK_.call(null,map__14306))?cljs.core.apply.call(null,cljs.core.hash_map,map__14306):map__14306);var opts = map__14306__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__14304 = null;if (arguments.length > 1) {
  p__14304 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__14304);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14307){
var ports = cljs.core.first(arglist__14307);
var p__14304 = cljs.core.rest(arglist__14307);
return alts_BANG___delegate(ports,p__14304);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14315 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14315 = (function (ch,f,map_LT_,meta14316){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14316 = meta14316;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14315.cljs$lang$type = true;
cljs.core.async.t14315.cljs$lang$ctorStr = "cljs.core.async/t14315";
cljs.core.async.t14315.cljs$lang$ctorPrWriter = (function (this__8448__auto__,writer__8449__auto__,opt__8450__auto__){return cljs.core._write.call(null,writer__8449__auto__,"cljs.core.async/t14315");
});
cljs.core.async.t14315.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14315.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t14315.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14315.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14318 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14318 = (function (fn1,_,meta14316,ch,f,map_LT_,meta14319){
this.fn1 = fn1;
this._ = _;
this.meta14316 = meta14316;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14319 = meta14319;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14318.cljs$lang$type = true;
cljs.core.async.t14318.cljs$lang$ctorStr = "cljs.core.async/t14318";
cljs.core.async.t14318.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8448__auto__,writer__8449__auto__,opt__8450__auto__){return cljs.core._write.call(null,writer__8449__auto__,"cljs.core.async/t14318");
});})(___$1))
;
cljs.core.async.t14318.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14318.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14318.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14318.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__14308_SHARP_){return f1.call(null,(((p1__14308_SHARP_ == null))?null:self__.f.call(null,p1__14308_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t14318.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14320){var self__ = this;
var _14320__$1 = this;return self__.meta14319;
});})(___$1))
;
cljs.core.async.t14318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14320,meta14319__$1){var self__ = this;
var _14320__$1 = this;return (new cljs.core.async.t14318(self__.fn1,self__._,self__.meta14316,self__.ch,self__.f,self__.map_LT_,meta14319__$1));
});})(___$1))
;
cljs.core.async.__GT_t14318 = ((function (___$1){
return (function __GT_t14318(fn1__$1,___$2,meta14316__$1,ch__$2,f__$2,map_LT___$2,meta14319){return (new cljs.core.async.t14318(fn1__$1,___$2,meta14316__$1,ch__$2,f__$2,map_LT___$2,meta14319));
});})(___$1))
;
}
return (new cljs.core.async.t14318(fn1,___$1,self__.meta14316,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t14315.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14315.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14315.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14317){var self__ = this;
var _14317__$1 = this;return self__.meta14316;
});
cljs.core.async.t14315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14317,meta14316__$1){var self__ = this;
var _14317__$1 = this;return (new cljs.core.async.t14315(self__.ch,self__.f,self__.map_LT_,meta14316__$1));
});
cljs.core.async.__GT_t14315 = (function __GT_t14315(ch__$1,f__$1,map_LT___$1,meta14316){return (new cljs.core.async.t14315(ch__$1,f__$1,map_LT___$1,meta14316));
});
}
return (new cljs.core.async.t14315(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14324 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14324 = (function (ch,f,map_GT_,meta14325){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14325 = meta14325;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14324.cljs$lang$type = true;
cljs.core.async.t14324.cljs$lang$ctorStr = "cljs.core.async/t14324";
cljs.core.async.t14324.cljs$lang$ctorPrWriter = (function (this__8448__auto__,writer__8449__auto__,opt__8450__auto__){return cljs.core._write.call(null,writer__8449__auto__,"cljs.core.async/t14324");
});
cljs.core.async.t14324.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14324.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t14324.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14324.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14324.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14324.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14324.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14326){var self__ = this;
var _14326__$1 = this;return self__.meta14325;
});
cljs.core.async.t14324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14326,meta14325__$1){var self__ = this;
var _14326__$1 = this;return (new cljs.core.async.t14324(self__.ch,self__.f,self__.map_GT_,meta14325__$1));
});
cljs.core.async.__GT_t14324 = (function __GT_t14324(ch__$1,f__$1,map_GT___$1,meta14325){return (new cljs.core.async.t14324(ch__$1,f__$1,map_GT___$1,meta14325));
});
}
return (new cljs.core.async.t14324(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14330 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14330 = (function (ch,p,filter_GT_,meta14331){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14331 = meta14331;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14330.cljs$lang$type = true;
cljs.core.async.t14330.cljs$lang$ctorStr = "cljs.core.async/t14330";
cljs.core.async.t14330.cljs$lang$ctorPrWriter = (function (this__8448__auto__,writer__8449__auto__,opt__8450__auto__){return cljs.core._write.call(null,writer__8449__auto__,"cljs.core.async/t14330");
});
cljs.core.async.t14330.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14330.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t14330.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14330.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14330.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14330.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14330.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14332){var self__ = this;
var _14332__$1 = this;return self__.meta14331;
});
cljs.core.async.t14330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14332,meta14331__$1){var self__ = this;
var _14332__$1 = this;return (new cljs.core.async.t14330(self__.ch,self__.p,self__.filter_GT_,meta14331__$1));
});
cljs.core.async.__GT_t14330 = (function __GT_t14330(ch__$1,p__$1,filter_GT___$1,meta14331){return (new cljs.core.async.t14330(ch__$1,p__$1,filter_GT___$1,meta14331));
});
}
return (new cljs.core.async.t14330(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10230__auto___14415 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10230__auto___14415,out){
return (function (){var f__10231__auto__ = (function (){var switch__10166__auto__ = ((function (c__10230__auto___14415,out){
return (function (state_14394){var state_val_14395 = (state_14394[1]);if((state_val_14395 === 7))
{var inst_14390 = (state_14394[2]);var state_14394__$1 = state_14394;var statearr_14396_14416 = state_14394__$1;(statearr_14396_14416[2] = inst_14390);
(statearr_14396_14416[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14395 === 1))
{var state_14394__$1 = state_14394;var statearr_14397_14417 = state_14394__$1;(statearr_14397_14417[2] = null);
(statearr_14397_14417[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14395 === 4))
{var inst_14376 = (state_14394[7]);var inst_14376__$1 = (state_14394[2]);var inst_14377 = (inst_14376__$1 == null);var state_14394__$1 = (function (){var statearr_14398 = state_14394;(statearr_14398[7] = inst_14376__$1);
return statearr_14398;
})();if(cljs.core.truth_(inst_14377))
{var statearr_14399_14418 = state_14394__$1;(statearr_14399_14418[1] = 5);
} else
{var statearr_14400_14419 = state_14394__$1;(statearr_14400_14419[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14395 === 6))
{var inst_14376 = (state_14394[7]);var inst_14381 = p.call(null,inst_14376);var state_14394__$1 = state_14394;if(cljs.core.truth_(inst_14381))
{var statearr_14401_14420 = state_14394__$1;(statearr_14401_14420[1] = 8);
} else
{var statearr_14402_14421 = state_14394__$1;(statearr_14402_14421[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14395 === 3))
{var inst_14392 = (state_14394[2]);var state_14394__$1 = state_14394;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14394__$1,inst_14392);
} else
{if((state_val_14395 === 2))
{var state_14394__$1 = state_14394;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14394__$1,4,ch);
} else
{if((state_val_14395 === 11))
{var inst_14384 = (state_14394[2]);var state_14394__$1 = state_14394;var statearr_14403_14422 = state_14394__$1;(statearr_14403_14422[2] = inst_14384);
(statearr_14403_14422[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14395 === 9))
{var state_14394__$1 = state_14394;var statearr_14404_14423 = state_14394__$1;(statearr_14404_14423[2] = null);
(statearr_14404_14423[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14395 === 5))
{var inst_14379 = cljs.core.async.close_BANG_.call(null,out);var state_14394__$1 = state_14394;var statearr_14405_14424 = state_14394__$1;(statearr_14405_14424[2] = inst_14379);
(statearr_14405_14424[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14395 === 10))
{var inst_14387 = (state_14394[2]);var state_14394__$1 = (function (){var statearr_14406 = state_14394;(statearr_14406[8] = inst_14387);
return statearr_14406;
})();var statearr_14407_14425 = state_14394__$1;(statearr_14407_14425[2] = null);
(statearr_14407_14425[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14395 === 8))
{var inst_14376 = (state_14394[7]);var state_14394__$1 = state_14394;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14394__$1,11,out,inst_14376);
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
});})(c__10230__auto___14415,out))
;return ((function (switch__10166__auto__,c__10230__auto___14415,out){
return (function() {
var state_machine__10167__auto__ = null;
var state_machine__10167__auto____0 = (function (){var statearr_14411 = [null,null,null,null,null,null,null,null,null];(statearr_14411[0] = state_machine__10167__auto__);
(statearr_14411[1] = 1);
return statearr_14411;
});
var state_machine__10167__auto____1 = (function (state_14394){while(true){
var ret_value__10168__auto__ = (function (){try{while(true){
var result__10169__auto__ = switch__10166__auto__.call(null,state_14394);if(cljs.core.keyword_identical_QMARK_.call(null,result__10169__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10169__auto__;
}
break;
}
}catch (e14412){if((e14412 instanceof Object))
{var ex__10170__auto__ = e14412;var statearr_14413_14426 = state_14394;(statearr_14413_14426[5] = ex__10170__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14394);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14412;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10168__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14427 = state_14394;
state_14394 = G__14427;
continue;
}
} else
{return ret_value__10168__auto__;
}
break;
}
});
state_machine__10167__auto__ = function(state_14394){
switch(arguments.length){
case 0:
return state_machine__10167__auto____0.call(this);
case 1:
return state_machine__10167__auto____1.call(this,state_14394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10167__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10167__auto____0;
state_machine__10167__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10167__auto____1;
return state_machine__10167__auto__;
})()
;})(switch__10166__auto__,c__10230__auto___14415,out))
})();var state__10232__auto__ = (function (){var statearr_14414 = f__10231__auto__.call(null);(statearr_14414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10230__auto___14415);
return statearr_14414;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10232__auto__);
});})(c__10230__auto___14415,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10230__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10230__auto__){
return (function (){var f__10231__auto__ = (function (){var switch__10166__auto__ = ((function (c__10230__auto__){
return (function (state_14593){var state_val_14594 = (state_14593[1]);if((state_val_14594 === 7))
{var inst_14589 = (state_14593[2]);var state_14593__$1 = state_14593;var statearr_14595_14636 = state_14593__$1;(statearr_14595_14636[2] = inst_14589);
(statearr_14595_14636[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14594 === 20))
{var inst_14559 = (state_14593[7]);var inst_14570 = (state_14593[2]);var inst_14571 = cljs.core.next.call(null,inst_14559);var inst_14545 = inst_14571;var inst_14546 = null;var inst_14547 = 0;var inst_14548 = 0;var state_14593__$1 = (function (){var statearr_14596 = state_14593;(statearr_14596[8] = inst_14545);
(statearr_14596[9] = inst_14548);
(statearr_14596[10] = inst_14547);
(statearr_14596[11] = inst_14546);
(statearr_14596[12] = inst_14570);
return statearr_14596;
})();var statearr_14597_14637 = state_14593__$1;(statearr_14597_14637[2] = null);
(statearr_14597_14637[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14594 === 1))
{var state_14593__$1 = state_14593;var statearr_14598_14638 = state_14593__$1;(statearr_14598_14638[2] = null);
(statearr_14598_14638[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14594 === 4))
{var inst_14534 = (state_14593[13]);var inst_14534__$1 = (state_14593[2]);var inst_14535 = (inst_14534__$1 == null);var state_14593__$1 = (function (){var statearr_14599 = state_14593;(statearr_14599[13] = inst_14534__$1);
return statearr_14599;
})();if(cljs.core.truth_(inst_14535))
{var statearr_14600_14639 = state_14593__$1;(statearr_14600_14639[1] = 5);
} else
{var statearr_14601_14640 = state_14593__$1;(statearr_14601_14640[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14594 === 15))
{var state_14593__$1 = state_14593;var statearr_14605_14641 = state_14593__$1;(statearr_14605_14641[2] = null);
(statearr_14605_14641[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14594 === 21))
{var state_14593__$1 = state_14593;var statearr_14606_14642 = state_14593__$1;(statearr_14606_14642[2] = null);
(statearr_14606_14642[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14594 === 13))
{var inst_14545 = (state_14593[8]);var inst_14548 = (state_14593[9]);var inst_14547 = (state_14593[10]);var inst_14546 = (state_14593[11]);var inst_14555 = (state_14593[2]);var inst_14556 = (inst_14548 + 1);var tmp14602 = inst_14545;var tmp14603 = inst_14547;var tmp14604 = inst_14546;var inst_14545__$1 = tmp14602;var inst_14546__$1 = tmp14604;var inst_14547__$1 = tmp14603;var inst_14548__$1 = inst_14556;var state_14593__$1 = (function (){var statearr_14607 = state_14593;(statearr_14607[8] = inst_14545__$1);
(statearr_14607[9] = inst_14548__$1);
(statearr_14607[10] = inst_14547__$1);
(statearr_14607[14] = inst_14555);
(statearr_14607[11] = inst_14546__$1);
return statearr_14607;
})();var statearr_14608_14643 = state_14593__$1;(statearr_14608_14643[2] = null);
(statearr_14608_14643[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14594 === 22))
{var state_14593__$1 = state_14593;var statearr_14609_14644 = state_14593__$1;(statearr_14609_14644[2] = null);
(statearr_14609_14644[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14594 === 6))
{var inst_14534 = (state_14593[13]);var inst_14543 = f.call(null,inst_14534);var inst_14544 = cljs.core.seq.call(null,inst_14543);var inst_14545 = inst_14544;var inst_14546 = null;var inst_14547 = 0;var inst_14548 = 0;var state_14593__$1 = (function (){var statearr_14610 = state_14593;(statearr_14610[8] = inst_14545);
(statearr_14610[9] = inst_14548);
(statearr_14610[10] = inst_14547);
(statearr_14610[11] = inst_14546);
return statearr_14610;
})();var statearr_14611_14645 = state_14593__$1;(statearr_14611_14645[2] = null);
(statearr_14611_14645[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14594 === 17))
{var inst_14559 = (state_14593[7]);var inst_14563 = cljs.core.chunk_first.call(null,inst_14559);var inst_14564 = cljs.core.chunk_rest.call(null,inst_14559);var inst_14565 = cljs.core.count.call(null,inst_14563);var inst_14545 = inst_14564;var inst_14546 = inst_14563;var inst_14547 = inst_14565;var inst_14548 = 0;var state_14593__$1 = (function (){var statearr_14612 = state_14593;(statearr_14612[8] = inst_14545);
(statearr_14612[9] = inst_14548);
(statearr_14612[10] = inst_14547);
(statearr_14612[11] = inst_14546);
return statearr_14612;
})();var statearr_14613_14646 = state_14593__$1;(statearr_14613_14646[2] = null);
(statearr_14613_14646[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14594 === 3))
{var inst_14591 = (state_14593[2]);var state_14593__$1 = state_14593;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14593__$1,inst_14591);
} else
{if((state_val_14594 === 12))
{var inst_14579 = (state_14593[2]);var state_14593__$1 = state_14593;var statearr_14614_14647 = state_14593__$1;(statearr_14614_14647[2] = inst_14579);
(statearr_14614_14647[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14594 === 2))
{var state_14593__$1 = state_14593;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14593__$1,4,in$);
} else
{if((state_val_14594 === 23))
{var inst_14587 = (state_14593[2]);var state_14593__$1 = state_14593;var statearr_14615_14648 = state_14593__$1;(statearr_14615_14648[2] = inst_14587);
(statearr_14615_14648[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14594 === 19))
{var inst_14574 = (state_14593[2]);var state_14593__$1 = state_14593;var statearr_14616_14649 = state_14593__$1;(statearr_14616_14649[2] = inst_14574);
(statearr_14616_14649[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14594 === 11))
{var inst_14545 = (state_14593[8]);var inst_14559 = (state_14593[7]);var inst_14559__$1 = cljs.core.seq.call(null,inst_14545);var state_14593__$1 = (function (){var statearr_14617 = state_14593;(statearr_14617[7] = inst_14559__$1);
return statearr_14617;
})();if(inst_14559__$1)
{var statearr_14618_14650 = state_14593__$1;(statearr_14618_14650[1] = 14);
} else
{var statearr_14619_14651 = state_14593__$1;(statearr_14619_14651[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14594 === 9))
{var inst_14581 = (state_14593[2]);var inst_14582 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_14593__$1 = (function (){var statearr_14620 = state_14593;(statearr_14620[15] = inst_14581);
return statearr_14620;
})();if(cljs.core.truth_(inst_14582))
{var statearr_14621_14652 = state_14593__$1;(statearr_14621_14652[1] = 21);
} else
{var statearr_14622_14653 = state_14593__$1;(statearr_14622_14653[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14594 === 5))
{var inst_14537 = cljs.core.async.close_BANG_.call(null,out);var state_14593__$1 = state_14593;var statearr_14623_14654 = state_14593__$1;(statearr_14623_14654[2] = inst_14537);
(statearr_14623_14654[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14594 === 14))
{var inst_14559 = (state_14593[7]);var inst_14561 = cljs.core.chunked_seq_QMARK_.call(null,inst_14559);var state_14593__$1 = state_14593;if(inst_14561)
{var statearr_14624_14655 = state_14593__$1;(statearr_14624_14655[1] = 17);
} else
{var statearr_14625_14656 = state_14593__$1;(statearr_14625_14656[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14594 === 16))
{var inst_14577 = (state_14593[2]);var state_14593__$1 = state_14593;var statearr_14626_14657 = state_14593__$1;(statearr_14626_14657[2] = inst_14577);
(statearr_14626_14657[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14594 === 10))
{var inst_14548 = (state_14593[9]);var inst_14546 = (state_14593[11]);var inst_14553 = cljs.core._nth.call(null,inst_14546,inst_14548);var state_14593__$1 = state_14593;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14593__$1,13,out,inst_14553);
} else
{if((state_val_14594 === 18))
{var inst_14559 = (state_14593[7]);var inst_14568 = cljs.core.first.call(null,inst_14559);var state_14593__$1 = state_14593;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14593__$1,20,out,inst_14568);
} else
{if((state_val_14594 === 8))
{var inst_14548 = (state_14593[9]);var inst_14547 = (state_14593[10]);var inst_14550 = (inst_14548 < inst_14547);var inst_14551 = inst_14550;var state_14593__$1 = state_14593;if(cljs.core.truth_(inst_14551))
{var statearr_14627_14658 = state_14593__$1;(statearr_14627_14658[1] = 10);
} else
{var statearr_14628_14659 = state_14593__$1;(statearr_14628_14659[1] = 11);
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
});})(c__10230__auto__))
;return ((function (switch__10166__auto__,c__10230__auto__){
return (function() {
var state_machine__10167__auto__ = null;
var state_machine__10167__auto____0 = (function (){var statearr_14632 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14632[0] = state_machine__10167__auto__);
(statearr_14632[1] = 1);
return statearr_14632;
});
var state_machine__10167__auto____1 = (function (state_14593){while(true){
var ret_value__10168__auto__ = (function (){try{while(true){
var result__10169__auto__ = switch__10166__auto__.call(null,state_14593);if(cljs.core.keyword_identical_QMARK_.call(null,result__10169__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10169__auto__;
}
break;
}
}catch (e14633){if((e14633 instanceof Object))
{var ex__10170__auto__ = e14633;var statearr_14634_14660 = state_14593;(statearr_14634_14660[5] = ex__10170__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14593);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14633;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10168__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14661 = state_14593;
state_14593 = G__14661;
continue;
}
} else
{return ret_value__10168__auto__;
}
break;
}
});
state_machine__10167__auto__ = function(state_14593){
switch(arguments.length){
case 0:
return state_machine__10167__auto____0.call(this);
case 1:
return state_machine__10167__auto____1.call(this,state_14593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10167__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10167__auto____0;
state_machine__10167__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10167__auto____1;
return state_machine__10167__auto__;
})()
;})(switch__10166__auto__,c__10230__auto__))
})();var state__10232__auto__ = (function (){var statearr_14635 = f__10231__auto__.call(null);(statearr_14635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10230__auto__);
return statearr_14635;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10232__auto__);
});})(c__10230__auto__))
);
return c__10230__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__10230__auto___14756 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10230__auto___14756){
return (function (){var f__10231__auto__ = (function (){var switch__10166__auto__ = ((function (c__10230__auto___14756){
return (function (state_14732){var state_val_14733 = (state_14732[1]);if((state_val_14733 === 7))
{var inst_14728 = (state_14732[2]);var state_14732__$1 = state_14732;var statearr_14734_14757 = state_14732__$1;(statearr_14734_14757[2] = inst_14728);
(statearr_14734_14757[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14733 === 1))
{var state_14732__$1 = state_14732;var statearr_14735_14758 = state_14732__$1;(statearr_14735_14758[2] = null);
(statearr_14735_14758[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14733 === 4))
{var inst_14711 = (state_14732[7]);var inst_14711__$1 = (state_14732[2]);var inst_14712 = (inst_14711__$1 == null);var state_14732__$1 = (function (){var statearr_14736 = state_14732;(statearr_14736[7] = inst_14711__$1);
return statearr_14736;
})();if(cljs.core.truth_(inst_14712))
{var statearr_14737_14759 = state_14732__$1;(statearr_14737_14759[1] = 5);
} else
{var statearr_14738_14760 = state_14732__$1;(statearr_14738_14760[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14733 === 13))
{var state_14732__$1 = state_14732;var statearr_14739_14761 = state_14732__$1;(statearr_14739_14761[2] = null);
(statearr_14739_14761[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14733 === 6))
{var inst_14711 = (state_14732[7]);var state_14732__$1 = state_14732;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14732__$1,11,to,inst_14711);
} else
{if((state_val_14733 === 3))
{var inst_14730 = (state_14732[2]);var state_14732__$1 = state_14732;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14732__$1,inst_14730);
} else
{if((state_val_14733 === 12))
{var state_14732__$1 = state_14732;var statearr_14740_14762 = state_14732__$1;(statearr_14740_14762[2] = null);
(statearr_14740_14762[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14733 === 2))
{var state_14732__$1 = state_14732;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14732__$1,4,from);
} else
{if((state_val_14733 === 11))
{var inst_14721 = (state_14732[2]);var state_14732__$1 = state_14732;if(cljs.core.truth_(inst_14721))
{var statearr_14741_14763 = state_14732__$1;(statearr_14741_14763[1] = 12);
} else
{var statearr_14742_14764 = state_14732__$1;(statearr_14742_14764[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14733 === 9))
{var state_14732__$1 = state_14732;var statearr_14743_14765 = state_14732__$1;(statearr_14743_14765[2] = null);
(statearr_14743_14765[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14733 === 5))
{var state_14732__$1 = state_14732;if(cljs.core.truth_(close_QMARK_))
{var statearr_14744_14766 = state_14732__$1;(statearr_14744_14766[1] = 8);
} else
{var statearr_14745_14767 = state_14732__$1;(statearr_14745_14767[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14733 === 14))
{var inst_14726 = (state_14732[2]);var state_14732__$1 = state_14732;var statearr_14746_14768 = state_14732__$1;(statearr_14746_14768[2] = inst_14726);
(statearr_14746_14768[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14733 === 10))
{var inst_14718 = (state_14732[2]);var state_14732__$1 = state_14732;var statearr_14747_14769 = state_14732__$1;(statearr_14747_14769[2] = inst_14718);
(statearr_14747_14769[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14733 === 8))
{var inst_14715 = cljs.core.async.close_BANG_.call(null,to);var state_14732__$1 = state_14732;var statearr_14748_14770 = state_14732__$1;(statearr_14748_14770[2] = inst_14715);
(statearr_14748_14770[1] = 10);
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
});})(c__10230__auto___14756))
;return ((function (switch__10166__auto__,c__10230__auto___14756){
return (function() {
var state_machine__10167__auto__ = null;
var state_machine__10167__auto____0 = (function (){var statearr_14752 = [null,null,null,null,null,null,null,null];(statearr_14752[0] = state_machine__10167__auto__);
(statearr_14752[1] = 1);
return statearr_14752;
});
var state_machine__10167__auto____1 = (function (state_14732){while(true){
var ret_value__10168__auto__ = (function (){try{while(true){
var result__10169__auto__ = switch__10166__auto__.call(null,state_14732);if(cljs.core.keyword_identical_QMARK_.call(null,result__10169__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10169__auto__;
}
break;
}
}catch (e14753){if((e14753 instanceof Object))
{var ex__10170__auto__ = e14753;var statearr_14754_14771 = state_14732;(statearr_14754_14771[5] = ex__10170__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14732);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14753;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10168__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14772 = state_14732;
state_14732 = G__14772;
continue;
}
} else
{return ret_value__10168__auto__;
}
break;
}
});
state_machine__10167__auto__ = function(state_14732){
switch(arguments.length){
case 0:
return state_machine__10167__auto____0.call(this);
case 1:
return state_machine__10167__auto____1.call(this,state_14732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10167__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10167__auto____0;
state_machine__10167__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10167__auto____1;
return state_machine__10167__auto__;
})()
;})(switch__10166__auto__,c__10230__auto___14756))
})();var state__10232__auto__ = (function (){var statearr_14755 = f__10231__auto__.call(null);(statearr_14755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10230__auto___14756);
return statearr_14755;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10232__auto__);
});})(c__10230__auto___14756))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10230__auto___14873 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10230__auto___14873,tc,fc){
return (function (){var f__10231__auto__ = (function (){var switch__10166__auto__ = ((function (c__10230__auto___14873,tc,fc){
return (function (state_14848){var state_val_14849 = (state_14848[1]);if((state_val_14849 === 7))
{var inst_14844 = (state_14848[2]);var state_14848__$1 = state_14848;var statearr_14850_14874 = state_14848__$1;(statearr_14850_14874[2] = inst_14844);
(statearr_14850_14874[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14849 === 1))
{var state_14848__$1 = state_14848;var statearr_14851_14875 = state_14848__$1;(statearr_14851_14875[2] = null);
(statearr_14851_14875[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14849 === 4))
{var inst_14825 = (state_14848[7]);var inst_14825__$1 = (state_14848[2]);var inst_14826 = (inst_14825__$1 == null);var state_14848__$1 = (function (){var statearr_14852 = state_14848;(statearr_14852[7] = inst_14825__$1);
return statearr_14852;
})();if(cljs.core.truth_(inst_14826))
{var statearr_14853_14876 = state_14848__$1;(statearr_14853_14876[1] = 5);
} else
{var statearr_14854_14877 = state_14848__$1;(statearr_14854_14877[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14849 === 13))
{var state_14848__$1 = state_14848;var statearr_14855_14878 = state_14848__$1;(statearr_14855_14878[2] = null);
(statearr_14855_14878[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14849 === 6))
{var inst_14825 = (state_14848[7]);var inst_14831 = p.call(null,inst_14825);var state_14848__$1 = state_14848;if(cljs.core.truth_(inst_14831))
{var statearr_14856_14879 = state_14848__$1;(statearr_14856_14879[1] = 9);
} else
{var statearr_14857_14880 = state_14848__$1;(statearr_14857_14880[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14849 === 3))
{var inst_14846 = (state_14848[2]);var state_14848__$1 = state_14848;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14848__$1,inst_14846);
} else
{if((state_val_14849 === 12))
{var state_14848__$1 = state_14848;var statearr_14858_14881 = state_14848__$1;(statearr_14858_14881[2] = null);
(statearr_14858_14881[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14849 === 2))
{var state_14848__$1 = state_14848;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14848__$1,4,ch);
} else
{if((state_val_14849 === 11))
{var inst_14825 = (state_14848[7]);var inst_14835 = (state_14848[2]);var state_14848__$1 = state_14848;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14848__$1,8,inst_14835,inst_14825);
} else
{if((state_val_14849 === 9))
{var state_14848__$1 = state_14848;var statearr_14859_14882 = state_14848__$1;(statearr_14859_14882[2] = tc);
(statearr_14859_14882[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14849 === 5))
{var inst_14828 = cljs.core.async.close_BANG_.call(null,tc);var inst_14829 = cljs.core.async.close_BANG_.call(null,fc);var state_14848__$1 = (function (){var statearr_14860 = state_14848;(statearr_14860[8] = inst_14828);
return statearr_14860;
})();var statearr_14861_14883 = state_14848__$1;(statearr_14861_14883[2] = inst_14829);
(statearr_14861_14883[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14849 === 14))
{var inst_14842 = (state_14848[2]);var state_14848__$1 = state_14848;var statearr_14862_14884 = state_14848__$1;(statearr_14862_14884[2] = inst_14842);
(statearr_14862_14884[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14849 === 10))
{var state_14848__$1 = state_14848;var statearr_14863_14885 = state_14848__$1;(statearr_14863_14885[2] = fc);
(statearr_14863_14885[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14849 === 8))
{var inst_14837 = (state_14848[2]);var state_14848__$1 = state_14848;if(cljs.core.truth_(inst_14837))
{var statearr_14864_14886 = state_14848__$1;(statearr_14864_14886[1] = 12);
} else
{var statearr_14865_14887 = state_14848__$1;(statearr_14865_14887[1] = 13);
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
});})(c__10230__auto___14873,tc,fc))
;return ((function (switch__10166__auto__,c__10230__auto___14873,tc,fc){
return (function() {
var state_machine__10167__auto__ = null;
var state_machine__10167__auto____0 = (function (){var statearr_14869 = [null,null,null,null,null,null,null,null,null];(statearr_14869[0] = state_machine__10167__auto__);
(statearr_14869[1] = 1);
return statearr_14869;
});
var state_machine__10167__auto____1 = (function (state_14848){while(true){
var ret_value__10168__auto__ = (function (){try{while(true){
var result__10169__auto__ = switch__10166__auto__.call(null,state_14848);if(cljs.core.keyword_identical_QMARK_.call(null,result__10169__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10169__auto__;
}
break;
}
}catch (e14870){if((e14870 instanceof Object))
{var ex__10170__auto__ = e14870;var statearr_14871_14888 = state_14848;(statearr_14871_14888[5] = ex__10170__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14848);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14870;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10168__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14889 = state_14848;
state_14848 = G__14889;
continue;
}
} else
{return ret_value__10168__auto__;
}
break;
}
});
state_machine__10167__auto__ = function(state_14848){
switch(arguments.length){
case 0:
return state_machine__10167__auto____0.call(this);
case 1:
return state_machine__10167__auto____1.call(this,state_14848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10167__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10167__auto____0;
state_machine__10167__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10167__auto____1;
return state_machine__10167__auto__;
})()
;})(switch__10166__auto__,c__10230__auto___14873,tc,fc))
})();var state__10232__auto__ = (function (){var statearr_14872 = f__10231__auto__.call(null);(statearr_14872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10230__auto___14873);
return statearr_14872;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10232__auto__);
});})(c__10230__auto___14873,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10230__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10230__auto__){
return (function (){var f__10231__auto__ = (function (){var switch__10166__auto__ = ((function (c__10230__auto__){
return (function (state_14936){var state_val_14937 = (state_14936[1]);if((state_val_14937 === 7))
{var inst_14932 = (state_14936[2]);var state_14936__$1 = state_14936;var statearr_14938_14954 = state_14936__$1;(statearr_14938_14954[2] = inst_14932);
(statearr_14938_14954[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14937 === 6))
{var inst_14925 = (state_14936[7]);var inst_14922 = (state_14936[8]);var inst_14929 = f.call(null,inst_14922,inst_14925);var inst_14922__$1 = inst_14929;var state_14936__$1 = (function (){var statearr_14939 = state_14936;(statearr_14939[8] = inst_14922__$1);
return statearr_14939;
})();var statearr_14940_14955 = state_14936__$1;(statearr_14940_14955[2] = null);
(statearr_14940_14955[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14937 === 5))
{var inst_14922 = (state_14936[8]);var state_14936__$1 = state_14936;var statearr_14941_14956 = state_14936__$1;(statearr_14941_14956[2] = inst_14922);
(statearr_14941_14956[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14937 === 4))
{var inst_14925 = (state_14936[7]);var inst_14925__$1 = (state_14936[2]);var inst_14926 = (inst_14925__$1 == null);var state_14936__$1 = (function (){var statearr_14942 = state_14936;(statearr_14942[7] = inst_14925__$1);
return statearr_14942;
})();if(cljs.core.truth_(inst_14926))
{var statearr_14943_14957 = state_14936__$1;(statearr_14943_14957[1] = 5);
} else
{var statearr_14944_14958 = state_14936__$1;(statearr_14944_14958[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14937 === 3))
{var inst_14934 = (state_14936[2]);var state_14936__$1 = state_14936;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14936__$1,inst_14934);
} else
{if((state_val_14937 === 2))
{var state_14936__$1 = state_14936;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14936__$1,4,ch);
} else
{if((state_val_14937 === 1))
{var inst_14922 = init;var state_14936__$1 = (function (){var statearr_14945 = state_14936;(statearr_14945[8] = inst_14922);
return statearr_14945;
})();var statearr_14946_14959 = state_14936__$1;(statearr_14946_14959[2] = null);
(statearr_14946_14959[1] = 2);
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
});})(c__10230__auto__))
;return ((function (switch__10166__auto__,c__10230__auto__){
return (function() {
var state_machine__10167__auto__ = null;
var state_machine__10167__auto____0 = (function (){var statearr_14950 = [null,null,null,null,null,null,null,null,null];(statearr_14950[0] = state_machine__10167__auto__);
(statearr_14950[1] = 1);
return statearr_14950;
});
var state_machine__10167__auto____1 = (function (state_14936){while(true){
var ret_value__10168__auto__ = (function (){try{while(true){
var result__10169__auto__ = switch__10166__auto__.call(null,state_14936);if(cljs.core.keyword_identical_QMARK_.call(null,result__10169__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10169__auto__;
}
break;
}
}catch (e14951){if((e14951 instanceof Object))
{var ex__10170__auto__ = e14951;var statearr_14952_14960 = state_14936;(statearr_14952_14960[5] = ex__10170__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14936);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14951;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10168__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14961 = state_14936;
state_14936 = G__14961;
continue;
}
} else
{return ret_value__10168__auto__;
}
break;
}
});
state_machine__10167__auto__ = function(state_14936){
switch(arguments.length){
case 0:
return state_machine__10167__auto____0.call(this);
case 1:
return state_machine__10167__auto____1.call(this,state_14936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10167__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10167__auto____0;
state_machine__10167__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10167__auto____1;
return state_machine__10167__auto__;
})()
;})(switch__10166__auto__,c__10230__auto__))
})();var state__10232__auto__ = (function (){var statearr_14953 = f__10231__auto__.call(null);(statearr_14953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10230__auto__);
return statearr_14953;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10232__auto__);
});})(c__10230__auto__))
);
return c__10230__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10230__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10230__auto__){
return (function (){var f__10231__auto__ = (function (){var switch__10166__auto__ = ((function (c__10230__auto__){
return (function (state_15035){var state_val_15036 = (state_15035[1]);if((state_val_15036 === 7))
{var inst_15017 = (state_15035[2]);var state_15035__$1 = state_15035;var statearr_15037_15060 = state_15035__$1;(statearr_15037_15060[2] = inst_15017);
(statearr_15037_15060[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15036 === 1))
{var inst_15011 = cljs.core.seq.call(null,coll);var inst_15012 = inst_15011;var state_15035__$1 = (function (){var statearr_15038 = state_15035;(statearr_15038[7] = inst_15012);
return statearr_15038;
})();var statearr_15039_15061 = state_15035__$1;(statearr_15039_15061[2] = null);
(statearr_15039_15061[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15036 === 4))
{var inst_15012 = (state_15035[7]);var inst_15015 = cljs.core.first.call(null,inst_15012);var state_15035__$1 = state_15035;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15035__$1,7,ch,inst_15015);
} else
{if((state_val_15036 === 13))
{var inst_15029 = (state_15035[2]);var state_15035__$1 = state_15035;var statearr_15040_15062 = state_15035__$1;(statearr_15040_15062[2] = inst_15029);
(statearr_15040_15062[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15036 === 6))
{var inst_15020 = (state_15035[2]);var state_15035__$1 = state_15035;if(cljs.core.truth_(inst_15020))
{var statearr_15041_15063 = state_15035__$1;(statearr_15041_15063[1] = 8);
} else
{var statearr_15042_15064 = state_15035__$1;(statearr_15042_15064[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15036 === 3))
{var inst_15033 = (state_15035[2]);var state_15035__$1 = state_15035;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15035__$1,inst_15033);
} else
{if((state_val_15036 === 12))
{var state_15035__$1 = state_15035;var statearr_15043_15065 = state_15035__$1;(statearr_15043_15065[2] = null);
(statearr_15043_15065[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15036 === 2))
{var inst_15012 = (state_15035[7]);var state_15035__$1 = state_15035;if(cljs.core.truth_(inst_15012))
{var statearr_15044_15066 = state_15035__$1;(statearr_15044_15066[1] = 4);
} else
{var statearr_15045_15067 = state_15035__$1;(statearr_15045_15067[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15036 === 11))
{var inst_15026 = cljs.core.async.close_BANG_.call(null,ch);var state_15035__$1 = state_15035;var statearr_15046_15068 = state_15035__$1;(statearr_15046_15068[2] = inst_15026);
(statearr_15046_15068[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15036 === 9))
{var state_15035__$1 = state_15035;if(cljs.core.truth_(close_QMARK_))
{var statearr_15047_15069 = state_15035__$1;(statearr_15047_15069[1] = 11);
} else
{var statearr_15048_15070 = state_15035__$1;(statearr_15048_15070[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15036 === 5))
{var inst_15012 = (state_15035[7]);var state_15035__$1 = state_15035;var statearr_15049_15071 = state_15035__$1;(statearr_15049_15071[2] = inst_15012);
(statearr_15049_15071[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15036 === 10))
{var inst_15031 = (state_15035[2]);var state_15035__$1 = state_15035;var statearr_15050_15072 = state_15035__$1;(statearr_15050_15072[2] = inst_15031);
(statearr_15050_15072[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15036 === 8))
{var inst_15012 = (state_15035[7]);var inst_15022 = cljs.core.next.call(null,inst_15012);var inst_15012__$1 = inst_15022;var state_15035__$1 = (function (){var statearr_15051 = state_15035;(statearr_15051[7] = inst_15012__$1);
return statearr_15051;
})();var statearr_15052_15073 = state_15035__$1;(statearr_15052_15073[2] = null);
(statearr_15052_15073[1] = 2);
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
});})(c__10230__auto__))
;return ((function (switch__10166__auto__,c__10230__auto__){
return (function() {
var state_machine__10167__auto__ = null;
var state_machine__10167__auto____0 = (function (){var statearr_15056 = [null,null,null,null,null,null,null,null];(statearr_15056[0] = state_machine__10167__auto__);
(statearr_15056[1] = 1);
return statearr_15056;
});
var state_machine__10167__auto____1 = (function (state_15035){while(true){
var ret_value__10168__auto__ = (function (){try{while(true){
var result__10169__auto__ = switch__10166__auto__.call(null,state_15035);if(cljs.core.keyword_identical_QMARK_.call(null,result__10169__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10169__auto__;
}
break;
}
}catch (e15057){if((e15057 instanceof Object))
{var ex__10170__auto__ = e15057;var statearr_15058_15074 = state_15035;(statearr_15058_15074[5] = ex__10170__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15035);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15057;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10168__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15075 = state_15035;
state_15035 = G__15075;
continue;
}
} else
{return ret_value__10168__auto__;
}
break;
}
});
state_machine__10167__auto__ = function(state_15035){
switch(arguments.length){
case 0:
return state_machine__10167__auto____0.call(this);
case 1:
return state_machine__10167__auto____1.call(this,state_15035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10167__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10167__auto____0;
state_machine__10167__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10167__auto____1;
return state_machine__10167__auto__;
})()
;})(switch__10166__auto__,c__10230__auto__))
})();var state__10232__auto__ = (function (){var statearr_15059 = f__10231__auto__.call(null);(statearr_15059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10230__auto__);
return statearr_15059;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10232__auto__);
});})(c__10230__auto__))
);
return c__10230__auto__;
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
cljs.core.async.Mux = (function (){var obj15077 = {};return obj15077;
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
cljs.core.async.Mult = (function (){var obj15079 = {};return obj15079;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t15301 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15301 = (function (cs,ch,mult,meta15302){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta15302 = meta15302;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15301.cljs$lang$type = true;
cljs.core.async.t15301.cljs$lang$ctorStr = "cljs.core.async/t15301";
cljs.core.async.t15301.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8448__auto__,writer__8449__auto__,opt__8450__auto__){return cljs.core._write.call(null,writer__8449__auto__,"cljs.core.async/t15301");
});})(cs))
;
cljs.core.async.t15301.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t15301.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t15301.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t15301.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t15301.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15301.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t15301.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15303){var self__ = this;
var _15303__$1 = this;return self__.meta15302;
});})(cs))
;
cljs.core.async.t15301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15303,meta15302__$1){var self__ = this;
var _15303__$1 = this;return (new cljs.core.async.t15301(self__.cs,self__.ch,self__.mult,meta15302__$1));
});})(cs))
;
cljs.core.async.__GT_t15301 = ((function (cs){
return (function __GT_t15301(cs__$1,ch__$1,mult__$1,meta15302){return (new cljs.core.async.t15301(cs__$1,ch__$1,mult__$1,meta15302));
});})(cs))
;
}
return (new cljs.core.async.t15301(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10230__auto___15522 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10230__auto___15522,cs,m,dchan,dctr,done){
return (function (){var f__10231__auto__ = (function (){var switch__10166__auto__ = ((function (c__10230__auto___15522,cs,m,dchan,dctr,done){
return (function (state_15434){var state_val_15435 = (state_15434[1]);if((state_val_15435 === 7))
{var inst_15430 = (state_15434[2]);var state_15434__$1 = state_15434;var statearr_15436_15523 = state_15434__$1;(statearr_15436_15523[2] = inst_15430);
(statearr_15436_15523[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 20))
{var inst_15335 = (state_15434[7]);var inst_15345 = cljs.core.first.call(null,inst_15335);var inst_15346 = cljs.core.nth.call(null,inst_15345,0,null);var inst_15347 = cljs.core.nth.call(null,inst_15345,1,null);var state_15434__$1 = (function (){var statearr_15437 = state_15434;(statearr_15437[8] = inst_15346);
return statearr_15437;
})();if(cljs.core.truth_(inst_15347))
{var statearr_15438_15524 = state_15434__$1;(statearr_15438_15524[1] = 22);
} else
{var statearr_15439_15525 = state_15434__$1;(statearr_15439_15525[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 27))
{var inst_15375 = (state_15434[9]);var inst_15306 = (state_15434[10]);var inst_15382 = (state_15434[11]);var inst_15377 = (state_15434[12]);var inst_15382__$1 = cljs.core._nth.call(null,inst_15375,inst_15377);var inst_15383 = cljs.core.async.put_BANG_.call(null,inst_15382__$1,inst_15306,done);var state_15434__$1 = (function (){var statearr_15440 = state_15434;(statearr_15440[11] = inst_15382__$1);
return statearr_15440;
})();if(cljs.core.truth_(inst_15383))
{var statearr_15441_15526 = state_15434__$1;(statearr_15441_15526[1] = 30);
} else
{var statearr_15442_15527 = state_15434__$1;(statearr_15442_15527[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 1))
{var state_15434__$1 = state_15434;var statearr_15443_15528 = state_15434__$1;(statearr_15443_15528[2] = null);
(statearr_15443_15528[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 24))
{var inst_15335 = (state_15434[7]);var inst_15352 = (state_15434[2]);var inst_15353 = cljs.core.next.call(null,inst_15335);var inst_15315 = inst_15353;var inst_15316 = null;var inst_15317 = 0;var inst_15318 = 0;var state_15434__$1 = (function (){var statearr_15444 = state_15434;(statearr_15444[13] = inst_15315);
(statearr_15444[14] = inst_15318);
(statearr_15444[15] = inst_15317);
(statearr_15444[16] = inst_15316);
(statearr_15444[17] = inst_15352);
return statearr_15444;
})();var statearr_15445_15529 = state_15434__$1;(statearr_15445_15529[2] = null);
(statearr_15445_15529[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 39))
{var state_15434__$1 = state_15434;var statearr_15449_15530 = state_15434__$1;(statearr_15449_15530[2] = null);
(statearr_15449_15530[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 4))
{var inst_15306 = (state_15434[10]);var inst_15306__$1 = (state_15434[2]);var inst_15307 = (inst_15306__$1 == null);var state_15434__$1 = (function (){var statearr_15450 = state_15434;(statearr_15450[10] = inst_15306__$1);
return statearr_15450;
})();if(cljs.core.truth_(inst_15307))
{var statearr_15451_15531 = state_15434__$1;(statearr_15451_15531[1] = 5);
} else
{var statearr_15452_15532 = state_15434__$1;(statearr_15452_15532[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 15))
{var inst_15315 = (state_15434[13]);var inst_15318 = (state_15434[14]);var inst_15317 = (state_15434[15]);var inst_15316 = (state_15434[16]);var inst_15331 = (state_15434[2]);var inst_15332 = (inst_15318 + 1);var tmp15446 = inst_15315;var tmp15447 = inst_15317;var tmp15448 = inst_15316;var inst_15315__$1 = tmp15446;var inst_15316__$1 = tmp15448;var inst_15317__$1 = tmp15447;var inst_15318__$1 = inst_15332;var state_15434__$1 = (function (){var statearr_15453 = state_15434;(statearr_15453[13] = inst_15315__$1);
(statearr_15453[14] = inst_15318__$1);
(statearr_15453[15] = inst_15317__$1);
(statearr_15453[16] = inst_15316__$1);
(statearr_15453[18] = inst_15331);
return statearr_15453;
})();var statearr_15454_15533 = state_15434__$1;(statearr_15454_15533[2] = null);
(statearr_15454_15533[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 21))
{var inst_15356 = (state_15434[2]);var state_15434__$1 = state_15434;var statearr_15458_15534 = state_15434__$1;(statearr_15458_15534[2] = inst_15356);
(statearr_15458_15534[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 31))
{var inst_15382 = (state_15434[11]);var inst_15386 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15387 = cljs.core.async.untap_STAR_.call(null,m,inst_15382);var state_15434__$1 = (function (){var statearr_15459 = state_15434;(statearr_15459[19] = inst_15386);
return statearr_15459;
})();var statearr_15460_15535 = state_15434__$1;(statearr_15460_15535[2] = inst_15387);
(statearr_15460_15535[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 32))
{var inst_15375 = (state_15434[9]);var inst_15377 = (state_15434[12]);var inst_15374 = (state_15434[20]);var inst_15376 = (state_15434[21]);var inst_15389 = (state_15434[2]);var inst_15390 = (inst_15377 + 1);var tmp15455 = inst_15375;var tmp15456 = inst_15374;var tmp15457 = inst_15376;var inst_15374__$1 = tmp15456;var inst_15375__$1 = tmp15455;var inst_15376__$1 = tmp15457;var inst_15377__$1 = inst_15390;var state_15434__$1 = (function (){var statearr_15461 = state_15434;(statearr_15461[22] = inst_15389);
(statearr_15461[9] = inst_15375__$1);
(statearr_15461[12] = inst_15377__$1);
(statearr_15461[20] = inst_15374__$1);
(statearr_15461[21] = inst_15376__$1);
return statearr_15461;
})();var statearr_15462_15536 = state_15434__$1;(statearr_15462_15536[2] = null);
(statearr_15462_15536[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 40))
{var inst_15402 = (state_15434[23]);var inst_15406 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15407 = cljs.core.async.untap_STAR_.call(null,m,inst_15402);var state_15434__$1 = (function (){var statearr_15463 = state_15434;(statearr_15463[24] = inst_15406);
return statearr_15463;
})();var statearr_15464_15537 = state_15434__$1;(statearr_15464_15537[2] = inst_15407);
(statearr_15464_15537[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 33))
{var inst_15393 = (state_15434[25]);var inst_15395 = cljs.core.chunked_seq_QMARK_.call(null,inst_15393);var state_15434__$1 = state_15434;if(inst_15395)
{var statearr_15465_15538 = state_15434__$1;(statearr_15465_15538[1] = 36);
} else
{var statearr_15466_15539 = state_15434__$1;(statearr_15466_15539[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 13))
{var inst_15325 = (state_15434[26]);var inst_15328 = cljs.core.async.close_BANG_.call(null,inst_15325);var state_15434__$1 = state_15434;var statearr_15467_15540 = state_15434__$1;(statearr_15467_15540[2] = inst_15328);
(statearr_15467_15540[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 22))
{var inst_15346 = (state_15434[8]);var inst_15349 = cljs.core.async.close_BANG_.call(null,inst_15346);var state_15434__$1 = state_15434;var statearr_15468_15541 = state_15434__$1;(statearr_15468_15541[2] = inst_15349);
(statearr_15468_15541[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 36))
{var inst_15393 = (state_15434[25]);var inst_15397 = cljs.core.chunk_first.call(null,inst_15393);var inst_15398 = cljs.core.chunk_rest.call(null,inst_15393);var inst_15399 = cljs.core.count.call(null,inst_15397);var inst_15374 = inst_15398;var inst_15375 = inst_15397;var inst_15376 = inst_15399;var inst_15377 = 0;var state_15434__$1 = (function (){var statearr_15469 = state_15434;(statearr_15469[9] = inst_15375);
(statearr_15469[12] = inst_15377);
(statearr_15469[20] = inst_15374);
(statearr_15469[21] = inst_15376);
return statearr_15469;
})();var statearr_15470_15542 = state_15434__$1;(statearr_15470_15542[2] = null);
(statearr_15470_15542[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 41))
{var inst_15393 = (state_15434[25]);var inst_15409 = (state_15434[2]);var inst_15410 = cljs.core.next.call(null,inst_15393);var inst_15374 = inst_15410;var inst_15375 = null;var inst_15376 = 0;var inst_15377 = 0;var state_15434__$1 = (function (){var statearr_15471 = state_15434;(statearr_15471[27] = inst_15409);
(statearr_15471[9] = inst_15375);
(statearr_15471[12] = inst_15377);
(statearr_15471[20] = inst_15374);
(statearr_15471[21] = inst_15376);
return statearr_15471;
})();var statearr_15472_15543 = state_15434__$1;(statearr_15472_15543[2] = null);
(statearr_15472_15543[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 43))
{var state_15434__$1 = state_15434;var statearr_15473_15544 = state_15434__$1;(statearr_15473_15544[2] = null);
(statearr_15473_15544[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 29))
{var inst_15418 = (state_15434[2]);var state_15434__$1 = state_15434;var statearr_15474_15545 = state_15434__$1;(statearr_15474_15545[2] = inst_15418);
(statearr_15474_15545[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 44))
{var inst_15427 = (state_15434[2]);var state_15434__$1 = (function (){var statearr_15475 = state_15434;(statearr_15475[28] = inst_15427);
return statearr_15475;
})();var statearr_15476_15546 = state_15434__$1;(statearr_15476_15546[2] = null);
(statearr_15476_15546[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 6))
{var inst_15366 = (state_15434[29]);var inst_15365 = cljs.core.deref.call(null,cs);var inst_15366__$1 = cljs.core.keys.call(null,inst_15365);var inst_15367 = cljs.core.count.call(null,inst_15366__$1);var inst_15368 = cljs.core.reset_BANG_.call(null,dctr,inst_15367);var inst_15373 = cljs.core.seq.call(null,inst_15366__$1);var inst_15374 = inst_15373;var inst_15375 = null;var inst_15376 = 0;var inst_15377 = 0;var state_15434__$1 = (function (){var statearr_15477 = state_15434;(statearr_15477[30] = inst_15368);
(statearr_15477[29] = inst_15366__$1);
(statearr_15477[9] = inst_15375);
(statearr_15477[12] = inst_15377);
(statearr_15477[20] = inst_15374);
(statearr_15477[21] = inst_15376);
return statearr_15477;
})();var statearr_15478_15547 = state_15434__$1;(statearr_15478_15547[2] = null);
(statearr_15478_15547[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 28))
{var inst_15393 = (state_15434[25]);var inst_15374 = (state_15434[20]);var inst_15393__$1 = cljs.core.seq.call(null,inst_15374);var state_15434__$1 = (function (){var statearr_15479 = state_15434;(statearr_15479[25] = inst_15393__$1);
return statearr_15479;
})();if(inst_15393__$1)
{var statearr_15480_15548 = state_15434__$1;(statearr_15480_15548[1] = 33);
} else
{var statearr_15481_15549 = state_15434__$1;(statearr_15481_15549[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 25))
{var inst_15377 = (state_15434[12]);var inst_15376 = (state_15434[21]);var inst_15379 = (inst_15377 < inst_15376);var inst_15380 = inst_15379;var state_15434__$1 = state_15434;if(cljs.core.truth_(inst_15380))
{var statearr_15482_15550 = state_15434__$1;(statearr_15482_15550[1] = 27);
} else
{var statearr_15483_15551 = state_15434__$1;(statearr_15483_15551[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 34))
{var state_15434__$1 = state_15434;var statearr_15484_15552 = state_15434__$1;(statearr_15484_15552[2] = null);
(statearr_15484_15552[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 17))
{var state_15434__$1 = state_15434;var statearr_15485_15553 = state_15434__$1;(statearr_15485_15553[2] = null);
(statearr_15485_15553[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 3))
{var inst_15432 = (state_15434[2]);var state_15434__$1 = state_15434;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15434__$1,inst_15432);
} else
{if((state_val_15435 === 12))
{var inst_15361 = (state_15434[2]);var state_15434__$1 = state_15434;var statearr_15486_15554 = state_15434__$1;(statearr_15486_15554[2] = inst_15361);
(statearr_15486_15554[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 2))
{var state_15434__$1 = state_15434;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15434__$1,4,ch);
} else
{if((state_val_15435 === 23))
{var state_15434__$1 = state_15434;var statearr_15487_15555 = state_15434__$1;(statearr_15487_15555[2] = null);
(statearr_15487_15555[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 35))
{var inst_15416 = (state_15434[2]);var state_15434__$1 = state_15434;var statearr_15488_15556 = state_15434__$1;(statearr_15488_15556[2] = inst_15416);
(statearr_15488_15556[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 19))
{var inst_15335 = (state_15434[7]);var inst_15339 = cljs.core.chunk_first.call(null,inst_15335);var inst_15340 = cljs.core.chunk_rest.call(null,inst_15335);var inst_15341 = cljs.core.count.call(null,inst_15339);var inst_15315 = inst_15340;var inst_15316 = inst_15339;var inst_15317 = inst_15341;var inst_15318 = 0;var state_15434__$1 = (function (){var statearr_15489 = state_15434;(statearr_15489[13] = inst_15315);
(statearr_15489[14] = inst_15318);
(statearr_15489[15] = inst_15317);
(statearr_15489[16] = inst_15316);
return statearr_15489;
})();var statearr_15490_15557 = state_15434__$1;(statearr_15490_15557[2] = null);
(statearr_15490_15557[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 11))
{var inst_15335 = (state_15434[7]);var inst_15315 = (state_15434[13]);var inst_15335__$1 = cljs.core.seq.call(null,inst_15315);var state_15434__$1 = (function (){var statearr_15491 = state_15434;(statearr_15491[7] = inst_15335__$1);
return statearr_15491;
})();if(inst_15335__$1)
{var statearr_15492_15558 = state_15434__$1;(statearr_15492_15558[1] = 16);
} else
{var statearr_15493_15559 = state_15434__$1;(statearr_15493_15559[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 9))
{var inst_15363 = (state_15434[2]);var state_15434__$1 = state_15434;var statearr_15494_15560 = state_15434__$1;(statearr_15494_15560[2] = inst_15363);
(statearr_15494_15560[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 5))
{var inst_15313 = cljs.core.deref.call(null,cs);var inst_15314 = cljs.core.seq.call(null,inst_15313);var inst_15315 = inst_15314;var inst_15316 = null;var inst_15317 = 0;var inst_15318 = 0;var state_15434__$1 = (function (){var statearr_15495 = state_15434;(statearr_15495[13] = inst_15315);
(statearr_15495[14] = inst_15318);
(statearr_15495[15] = inst_15317);
(statearr_15495[16] = inst_15316);
return statearr_15495;
})();var statearr_15496_15561 = state_15434__$1;(statearr_15496_15561[2] = null);
(statearr_15496_15561[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 14))
{var state_15434__$1 = state_15434;var statearr_15497_15562 = state_15434__$1;(statearr_15497_15562[2] = null);
(statearr_15497_15562[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 45))
{var inst_15424 = (state_15434[2]);var state_15434__$1 = state_15434;var statearr_15498_15563 = state_15434__$1;(statearr_15498_15563[2] = inst_15424);
(statearr_15498_15563[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 26))
{var inst_15366 = (state_15434[29]);var inst_15420 = (state_15434[2]);var inst_15421 = cljs.core.seq.call(null,inst_15366);var state_15434__$1 = (function (){var statearr_15499 = state_15434;(statearr_15499[31] = inst_15420);
return statearr_15499;
})();if(inst_15421)
{var statearr_15500_15564 = state_15434__$1;(statearr_15500_15564[1] = 42);
} else
{var statearr_15501_15565 = state_15434__$1;(statearr_15501_15565[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 16))
{var inst_15335 = (state_15434[7]);var inst_15337 = cljs.core.chunked_seq_QMARK_.call(null,inst_15335);var state_15434__$1 = state_15434;if(inst_15337)
{var statearr_15502_15566 = state_15434__$1;(statearr_15502_15566[1] = 19);
} else
{var statearr_15503_15567 = state_15434__$1;(statearr_15503_15567[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 38))
{var inst_15413 = (state_15434[2]);var state_15434__$1 = state_15434;var statearr_15504_15568 = state_15434__$1;(statearr_15504_15568[2] = inst_15413);
(statearr_15504_15568[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 30))
{var state_15434__$1 = state_15434;var statearr_15505_15569 = state_15434__$1;(statearr_15505_15569[2] = null);
(statearr_15505_15569[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 10))
{var inst_15318 = (state_15434[14]);var inst_15316 = (state_15434[16]);var inst_15324 = cljs.core._nth.call(null,inst_15316,inst_15318);var inst_15325 = cljs.core.nth.call(null,inst_15324,0,null);var inst_15326 = cljs.core.nth.call(null,inst_15324,1,null);var state_15434__$1 = (function (){var statearr_15506 = state_15434;(statearr_15506[26] = inst_15325);
return statearr_15506;
})();if(cljs.core.truth_(inst_15326))
{var statearr_15507_15570 = state_15434__$1;(statearr_15507_15570[1] = 13);
} else
{var statearr_15508_15571 = state_15434__$1;(statearr_15508_15571[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 18))
{var inst_15359 = (state_15434[2]);var state_15434__$1 = state_15434;var statearr_15509_15572 = state_15434__$1;(statearr_15509_15572[2] = inst_15359);
(statearr_15509_15572[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 42))
{var state_15434__$1 = state_15434;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15434__$1,45,dchan);
} else
{if((state_val_15435 === 37))
{var inst_15306 = (state_15434[10]);var inst_15402 = (state_15434[23]);var inst_15393 = (state_15434[25]);var inst_15402__$1 = cljs.core.first.call(null,inst_15393);var inst_15403 = cljs.core.async.put_BANG_.call(null,inst_15402__$1,inst_15306,done);var state_15434__$1 = (function (){var statearr_15510 = state_15434;(statearr_15510[23] = inst_15402__$1);
return statearr_15510;
})();if(cljs.core.truth_(inst_15403))
{var statearr_15511_15573 = state_15434__$1;(statearr_15511_15573[1] = 39);
} else
{var statearr_15512_15574 = state_15434__$1;(statearr_15512_15574[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15435 === 8))
{var inst_15318 = (state_15434[14]);var inst_15317 = (state_15434[15]);var inst_15320 = (inst_15318 < inst_15317);var inst_15321 = inst_15320;var state_15434__$1 = state_15434;if(cljs.core.truth_(inst_15321))
{var statearr_15513_15575 = state_15434__$1;(statearr_15513_15575[1] = 10);
} else
{var statearr_15514_15576 = state_15434__$1;(statearr_15514_15576[1] = 11);
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
});})(c__10230__auto___15522,cs,m,dchan,dctr,done))
;return ((function (switch__10166__auto__,c__10230__auto___15522,cs,m,dchan,dctr,done){
return (function() {
var state_machine__10167__auto__ = null;
var state_machine__10167__auto____0 = (function (){var statearr_15518 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15518[0] = state_machine__10167__auto__);
(statearr_15518[1] = 1);
return statearr_15518;
});
var state_machine__10167__auto____1 = (function (state_15434){while(true){
var ret_value__10168__auto__ = (function (){try{while(true){
var result__10169__auto__ = switch__10166__auto__.call(null,state_15434);if(cljs.core.keyword_identical_QMARK_.call(null,result__10169__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10169__auto__;
}
break;
}
}catch (e15519){if((e15519 instanceof Object))
{var ex__10170__auto__ = e15519;var statearr_15520_15577 = state_15434;(statearr_15520_15577[5] = ex__10170__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15434);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15519;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10168__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15578 = state_15434;
state_15434 = G__15578;
continue;
}
} else
{return ret_value__10168__auto__;
}
break;
}
});
state_machine__10167__auto__ = function(state_15434){
switch(arguments.length){
case 0:
return state_machine__10167__auto____0.call(this);
case 1:
return state_machine__10167__auto____1.call(this,state_15434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10167__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10167__auto____0;
state_machine__10167__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10167__auto____1;
return state_machine__10167__auto__;
})()
;})(switch__10166__auto__,c__10230__auto___15522,cs,m,dchan,dctr,done))
})();var state__10232__auto__ = (function (){var statearr_15521 = f__10231__auto__.call(null);(statearr_15521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10230__auto___15522);
return statearr_15521;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10232__auto__);
});})(c__10230__auto___15522,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj15580 = {};return obj15580;
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
;var m = (function (){if(typeof cljs.core.async.t15700 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15700 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15701){
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
this.meta15701 = meta15701;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15700.cljs$lang$type = true;
cljs.core.async.t15700.cljs$lang$ctorStr = "cljs.core.async/t15700";
cljs.core.async.t15700.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8448__auto__,writer__8449__auto__,opt__8450__auto__){return cljs.core._write.call(null,writer__8449__auto__,"cljs.core.async/t15700");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15700.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15700.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15700.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15700.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15700.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15700.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15700.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15700.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15700.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15702){var self__ = this;
var _15702__$1 = this;return self__.meta15701;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15702,meta15701__$1){var self__ = this;
var _15702__$1 = this;return (new cljs.core.async.t15700(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15701__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15700 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15700(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15701){return (new cljs.core.async.t15700(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15701));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15700(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__10230__auto___15819 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10230__auto___15819,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__10231__auto__ = (function (){var switch__10166__auto__ = ((function (c__10230__auto___15819,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15772){var state_val_15773 = (state_15772[1]);if((state_val_15773 === 7))
{var inst_15716 = (state_15772[7]);var inst_15721 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15716);var state_15772__$1 = state_15772;var statearr_15774_15820 = state_15772__$1;(statearr_15774_15820[2] = inst_15721);
(statearr_15774_15820[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15773 === 20))
{var inst_15731 = (state_15772[8]);var state_15772__$1 = state_15772;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15772__$1,23,out,inst_15731);
} else
{if((state_val_15773 === 1))
{var inst_15706 = (state_15772[9]);var inst_15706__$1 = calc_state.call(null);var inst_15707 = cljs.core.seq_QMARK_.call(null,inst_15706__$1);var state_15772__$1 = (function (){var statearr_15775 = state_15772;(statearr_15775[9] = inst_15706__$1);
return statearr_15775;
})();if(inst_15707)
{var statearr_15776_15821 = state_15772__$1;(statearr_15776_15821[1] = 2);
} else
{var statearr_15777_15822 = state_15772__$1;(statearr_15777_15822[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15773 === 24))
{var inst_15724 = (state_15772[10]);var inst_15716 = inst_15724;var state_15772__$1 = (function (){var statearr_15778 = state_15772;(statearr_15778[7] = inst_15716);
return statearr_15778;
})();var statearr_15779_15823 = state_15772__$1;(statearr_15779_15823[2] = null);
(statearr_15779_15823[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15773 === 4))
{var inst_15706 = (state_15772[9]);var inst_15712 = (state_15772[2]);var inst_15713 = cljs.core.get.call(null,inst_15712,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15714 = cljs.core.get.call(null,inst_15712,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15715 = cljs.core.get.call(null,inst_15712,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_15716 = inst_15706;var state_15772__$1 = (function (){var statearr_15780 = state_15772;(statearr_15780[11] = inst_15715);
(statearr_15780[12] = inst_15714);
(statearr_15780[7] = inst_15716);
(statearr_15780[13] = inst_15713);
return statearr_15780;
})();var statearr_15781_15824 = state_15772__$1;(statearr_15781_15824[2] = null);
(statearr_15781_15824[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15773 === 15))
{var state_15772__$1 = state_15772;var statearr_15782_15825 = state_15772__$1;(statearr_15782_15825[2] = null);
(statearr_15782_15825[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15773 === 21))
{var inst_15724 = (state_15772[10]);var inst_15716 = inst_15724;var state_15772__$1 = (function (){var statearr_15783 = state_15772;(statearr_15783[7] = inst_15716);
return statearr_15783;
})();var statearr_15784_15826 = state_15772__$1;(statearr_15784_15826[2] = null);
(statearr_15784_15826[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15773 === 13))
{var inst_15768 = (state_15772[2]);var state_15772__$1 = state_15772;var statearr_15785_15827 = state_15772__$1;(statearr_15785_15827[2] = inst_15768);
(statearr_15785_15827[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15773 === 22))
{var inst_15766 = (state_15772[2]);var state_15772__$1 = state_15772;var statearr_15786_15828 = state_15772__$1;(statearr_15786_15828[2] = inst_15766);
(statearr_15786_15828[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15773 === 6))
{var inst_15770 = (state_15772[2]);var state_15772__$1 = state_15772;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15772__$1,inst_15770);
} else
{if((state_val_15773 === 25))
{var state_15772__$1 = state_15772;var statearr_15787_15829 = state_15772__$1;(statearr_15787_15829[2] = null);
(statearr_15787_15829[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15773 === 17))
{var inst_15746 = (state_15772[14]);var state_15772__$1 = state_15772;var statearr_15788_15830 = state_15772__$1;(statearr_15788_15830[2] = inst_15746);
(statearr_15788_15830[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15773 === 3))
{var inst_15706 = (state_15772[9]);var state_15772__$1 = state_15772;var statearr_15789_15831 = state_15772__$1;(statearr_15789_15831[2] = inst_15706);
(statearr_15789_15831[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15773 === 12))
{var inst_15732 = (state_15772[15]);var inst_15746 = (state_15772[14]);var inst_15727 = (state_15772[16]);var inst_15746__$1 = inst_15727.call(null,inst_15732);var state_15772__$1 = (function (){var statearr_15790 = state_15772;(statearr_15790[14] = inst_15746__$1);
return statearr_15790;
})();if(cljs.core.truth_(inst_15746__$1))
{var statearr_15791_15832 = state_15772__$1;(statearr_15791_15832[1] = 17);
} else
{var statearr_15792_15833 = state_15772__$1;(statearr_15792_15833[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15773 === 2))
{var inst_15706 = (state_15772[9]);var inst_15709 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15706);var state_15772__$1 = state_15772;var statearr_15793_15834 = state_15772__$1;(statearr_15793_15834[2] = inst_15709);
(statearr_15793_15834[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15773 === 23))
{var inst_15757 = (state_15772[2]);var state_15772__$1 = state_15772;if(cljs.core.truth_(inst_15757))
{var statearr_15794_15835 = state_15772__$1;(statearr_15794_15835[1] = 24);
} else
{var statearr_15795_15836 = state_15772__$1;(statearr_15795_15836[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15773 === 19))
{var inst_15754 = (state_15772[2]);var state_15772__$1 = state_15772;if(cljs.core.truth_(inst_15754))
{var statearr_15796_15837 = state_15772__$1;(statearr_15796_15837[1] = 20);
} else
{var statearr_15797_15838 = state_15772__$1;(statearr_15797_15838[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15773 === 11))
{var inst_15731 = (state_15772[8]);var inst_15737 = (inst_15731 == null);var state_15772__$1 = state_15772;if(cljs.core.truth_(inst_15737))
{var statearr_15798_15839 = state_15772__$1;(statearr_15798_15839[1] = 14);
} else
{var statearr_15799_15840 = state_15772__$1;(statearr_15799_15840[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15773 === 9))
{var inst_15724 = (state_15772[10]);var inst_15724__$1 = (state_15772[2]);var inst_15725 = cljs.core.get.call(null,inst_15724__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15726 = cljs.core.get.call(null,inst_15724__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15727 = cljs.core.get.call(null,inst_15724__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_15772__$1 = (function (){var statearr_15800 = state_15772;(statearr_15800[10] = inst_15724__$1);
(statearr_15800[17] = inst_15726);
(statearr_15800[16] = inst_15727);
return statearr_15800;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15772__$1,10,inst_15725);
} else
{if((state_val_15773 === 5))
{var inst_15716 = (state_15772[7]);var inst_15719 = cljs.core.seq_QMARK_.call(null,inst_15716);var state_15772__$1 = state_15772;if(inst_15719)
{var statearr_15801_15841 = state_15772__$1;(statearr_15801_15841[1] = 7);
} else
{var statearr_15802_15842 = state_15772__$1;(statearr_15802_15842[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15773 === 14))
{var inst_15732 = (state_15772[15]);var inst_15739 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15732);var state_15772__$1 = state_15772;var statearr_15803_15843 = state_15772__$1;(statearr_15803_15843[2] = inst_15739);
(statearr_15803_15843[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15773 === 26))
{var inst_15762 = (state_15772[2]);var state_15772__$1 = state_15772;var statearr_15804_15844 = state_15772__$1;(statearr_15804_15844[2] = inst_15762);
(statearr_15804_15844[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15773 === 16))
{var inst_15742 = (state_15772[2]);var inst_15743 = calc_state.call(null);var inst_15716 = inst_15743;var state_15772__$1 = (function (){var statearr_15805 = state_15772;(statearr_15805[7] = inst_15716);
(statearr_15805[18] = inst_15742);
return statearr_15805;
})();var statearr_15806_15845 = state_15772__$1;(statearr_15806_15845[2] = null);
(statearr_15806_15845[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15773 === 10))
{var inst_15732 = (state_15772[15]);var inst_15731 = (state_15772[8]);var inst_15730 = (state_15772[2]);var inst_15731__$1 = cljs.core.nth.call(null,inst_15730,0,null);var inst_15732__$1 = cljs.core.nth.call(null,inst_15730,1,null);var inst_15733 = (inst_15731__$1 == null);var inst_15734 = cljs.core._EQ_.call(null,inst_15732__$1,change);var inst_15735 = (inst_15733) || (inst_15734);var state_15772__$1 = (function (){var statearr_15807 = state_15772;(statearr_15807[15] = inst_15732__$1);
(statearr_15807[8] = inst_15731__$1);
return statearr_15807;
})();if(cljs.core.truth_(inst_15735))
{var statearr_15808_15846 = state_15772__$1;(statearr_15808_15846[1] = 11);
} else
{var statearr_15809_15847 = state_15772__$1;(statearr_15809_15847[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15773 === 18))
{var inst_15726 = (state_15772[17]);var inst_15732 = (state_15772[15]);var inst_15727 = (state_15772[16]);var inst_15749 = cljs.core.empty_QMARK_.call(null,inst_15727);var inst_15750 = inst_15726.call(null,inst_15732);var inst_15751 = cljs.core.not.call(null,inst_15750);var inst_15752 = (inst_15749) && (inst_15751);var state_15772__$1 = state_15772;var statearr_15810_15848 = state_15772__$1;(statearr_15810_15848[2] = inst_15752);
(statearr_15810_15848[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15773 === 8))
{var inst_15716 = (state_15772[7]);var state_15772__$1 = state_15772;var statearr_15811_15849 = state_15772__$1;(statearr_15811_15849[2] = inst_15716);
(statearr_15811_15849[1] = 9);
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
});})(c__10230__auto___15819,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__10166__auto__,c__10230__auto___15819,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__10167__auto__ = null;
var state_machine__10167__auto____0 = (function (){var statearr_15815 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15815[0] = state_machine__10167__auto__);
(statearr_15815[1] = 1);
return statearr_15815;
});
var state_machine__10167__auto____1 = (function (state_15772){while(true){
var ret_value__10168__auto__ = (function (){try{while(true){
var result__10169__auto__ = switch__10166__auto__.call(null,state_15772);if(cljs.core.keyword_identical_QMARK_.call(null,result__10169__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10169__auto__;
}
break;
}
}catch (e15816){if((e15816 instanceof Object))
{var ex__10170__auto__ = e15816;var statearr_15817_15850 = state_15772;(statearr_15817_15850[5] = ex__10170__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15772);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15816;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10168__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15851 = state_15772;
state_15772 = G__15851;
continue;
}
} else
{return ret_value__10168__auto__;
}
break;
}
});
state_machine__10167__auto__ = function(state_15772){
switch(arguments.length){
case 0:
return state_machine__10167__auto____0.call(this);
case 1:
return state_machine__10167__auto____1.call(this,state_15772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10167__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10167__auto____0;
state_machine__10167__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10167__auto____1;
return state_machine__10167__auto__;
})()
;})(switch__10166__auto__,c__10230__auto___15819,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__10232__auto__ = (function (){var statearr_15818 = f__10231__auto__.call(null);(statearr_15818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10230__auto___15819);
return statearr_15818;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10232__auto__);
});})(c__10230__auto___15819,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj15853 = {};return obj15853;
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
return (function (p1__15854_SHARP_){if(cljs.core.truth_(p1__15854_SHARP_.call(null,topic)))
{return p1__15854_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15854_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7881__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15969 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15969 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15970){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15970 = meta15970;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15969.cljs$lang$type = true;
cljs.core.async.t15969.cljs$lang$ctorStr = "cljs.core.async/t15969";
cljs.core.async.t15969.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8448__auto__,writer__8449__auto__,opt__8450__auto__){return cljs.core._write.call(null,writer__8449__auto__,"cljs.core.async/t15969");
});})(mults,ensure_mult))
;
cljs.core.async.t15969.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15969.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15969.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15969.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15969.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15969.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15969.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15969.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15971){var self__ = this;
var _15971__$1 = this;return self__.meta15970;
});})(mults,ensure_mult))
;
cljs.core.async.t15969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15971,meta15970__$1){var self__ = this;
var _15971__$1 = this;return (new cljs.core.async.t15969(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15970__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15969 = ((function (mults,ensure_mult){
return (function __GT_t15969(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15970){return (new cljs.core.async.t15969(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15970));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15969(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10230__auto___16083 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10230__auto___16083,mults,ensure_mult,p){
return (function (){var f__10231__auto__ = (function (){var switch__10166__auto__ = ((function (c__10230__auto___16083,mults,ensure_mult,p){
return (function (state_16039){var state_val_16040 = (state_16039[1]);if((state_val_16040 === 7))
{var inst_16035 = (state_16039[2]);var state_16039__$1 = state_16039;var statearr_16041_16084 = state_16039__$1;(statearr_16041_16084[2] = inst_16035);
(statearr_16041_16084[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16040 === 20))
{var state_16039__$1 = state_16039;var statearr_16042_16085 = state_16039__$1;(statearr_16042_16085[2] = null);
(statearr_16042_16085[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16040 === 1))
{var state_16039__$1 = state_16039;var statearr_16043_16086 = state_16039__$1;(statearr_16043_16086[2] = null);
(statearr_16043_16086[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16040 === 4))
{var inst_15974 = (state_16039[7]);var inst_15974__$1 = (state_16039[2]);var inst_15975 = (inst_15974__$1 == null);var state_16039__$1 = (function (){var statearr_16044 = state_16039;(statearr_16044[7] = inst_15974__$1);
return statearr_16044;
})();if(cljs.core.truth_(inst_15975))
{var statearr_16045_16087 = state_16039__$1;(statearr_16045_16087[1] = 5);
} else
{var statearr_16046_16088 = state_16039__$1;(statearr_16046_16088[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16040 === 15))
{var inst_16016 = (state_16039[2]);var state_16039__$1 = state_16039;var statearr_16047_16089 = state_16039__$1;(statearr_16047_16089[2] = inst_16016);
(statearr_16047_16089[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16040 === 21))
{var inst_16022 = (state_16039[8]);var inst_16030 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16022);var state_16039__$1 = state_16039;var statearr_16048_16090 = state_16039__$1;(statearr_16048_16090[2] = inst_16030);
(statearr_16048_16090[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16040 === 13))
{var inst_15998 = (state_16039[9]);var inst_16000 = cljs.core.chunked_seq_QMARK_.call(null,inst_15998);var state_16039__$1 = state_16039;if(inst_16000)
{var statearr_16049_16091 = state_16039__$1;(statearr_16049_16091[1] = 16);
} else
{var statearr_16050_16092 = state_16039__$1;(statearr_16050_16092[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16040 === 22))
{var inst_16032 = (state_16039[2]);var state_16039__$1 = (function (){var statearr_16051 = state_16039;(statearr_16051[10] = inst_16032);
return statearr_16051;
})();var statearr_16052_16093 = state_16039__$1;(statearr_16052_16093[2] = null);
(statearr_16052_16093[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16040 === 6))
{var inst_16022 = (state_16039[8]);var inst_15974 = (state_16039[7]);var inst_16022__$1 = topic_fn.call(null,inst_15974);var inst_16023 = cljs.core.deref.call(null,mults);var inst_16024 = cljs.core.get.call(null,inst_16023,inst_16022__$1);var inst_16025 = cljs.core.async.muxch_STAR_.call(null,inst_16024);var state_16039__$1 = (function (){var statearr_16053 = state_16039;(statearr_16053[8] = inst_16022__$1);
return statearr_16053;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16039__$1,19,inst_16025,inst_15974);
} else
{if((state_val_16040 === 17))
{var inst_15998 = (state_16039[9]);var inst_16007 = cljs.core.first.call(null,inst_15998);var inst_16008 = cljs.core.async.muxch_STAR_.call(null,inst_16007);var inst_16009 = cljs.core.async.close_BANG_.call(null,inst_16008);var inst_16010 = cljs.core.next.call(null,inst_15998);var inst_15984 = inst_16010;var inst_15985 = null;var inst_15986 = 0;var inst_15987 = 0;var state_16039__$1 = (function (){var statearr_16054 = state_16039;(statearr_16054[11] = inst_15984);
(statearr_16054[12] = inst_15985);
(statearr_16054[13] = inst_15987);
(statearr_16054[14] = inst_15986);
(statearr_16054[15] = inst_16009);
return statearr_16054;
})();var statearr_16055_16094 = state_16039__$1;(statearr_16055_16094[2] = null);
(statearr_16055_16094[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16040 === 3))
{var inst_16037 = (state_16039[2]);var state_16039__$1 = state_16039;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16039__$1,inst_16037);
} else
{if((state_val_16040 === 12))
{var inst_16018 = (state_16039[2]);var state_16039__$1 = state_16039;var statearr_16056_16095 = state_16039__$1;(statearr_16056_16095[2] = inst_16018);
(statearr_16056_16095[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16040 === 2))
{var state_16039__$1 = state_16039;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16039__$1,4,ch);
} else
{if((state_val_16040 === 19))
{var inst_16027 = (state_16039[2]);var state_16039__$1 = state_16039;if(cljs.core.truth_(inst_16027))
{var statearr_16057_16096 = state_16039__$1;(statearr_16057_16096[1] = 20);
} else
{var statearr_16058_16097 = state_16039__$1;(statearr_16058_16097[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16040 === 11))
{var inst_15984 = (state_16039[11]);var inst_15998 = (state_16039[9]);var inst_15998__$1 = cljs.core.seq.call(null,inst_15984);var state_16039__$1 = (function (){var statearr_16059 = state_16039;(statearr_16059[9] = inst_15998__$1);
return statearr_16059;
})();if(inst_15998__$1)
{var statearr_16060_16098 = state_16039__$1;(statearr_16060_16098[1] = 13);
} else
{var statearr_16061_16099 = state_16039__$1;(statearr_16061_16099[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16040 === 9))
{var inst_16020 = (state_16039[2]);var state_16039__$1 = state_16039;var statearr_16062_16100 = state_16039__$1;(statearr_16062_16100[2] = inst_16020);
(statearr_16062_16100[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16040 === 5))
{var inst_15981 = cljs.core.deref.call(null,mults);var inst_15982 = cljs.core.vals.call(null,inst_15981);var inst_15983 = cljs.core.seq.call(null,inst_15982);var inst_15984 = inst_15983;var inst_15985 = null;var inst_15986 = 0;var inst_15987 = 0;var state_16039__$1 = (function (){var statearr_16063 = state_16039;(statearr_16063[11] = inst_15984);
(statearr_16063[12] = inst_15985);
(statearr_16063[13] = inst_15987);
(statearr_16063[14] = inst_15986);
return statearr_16063;
})();var statearr_16064_16101 = state_16039__$1;(statearr_16064_16101[2] = null);
(statearr_16064_16101[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16040 === 14))
{var state_16039__$1 = state_16039;var statearr_16068_16102 = state_16039__$1;(statearr_16068_16102[2] = null);
(statearr_16068_16102[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16040 === 16))
{var inst_15998 = (state_16039[9]);var inst_16002 = cljs.core.chunk_first.call(null,inst_15998);var inst_16003 = cljs.core.chunk_rest.call(null,inst_15998);var inst_16004 = cljs.core.count.call(null,inst_16002);var inst_15984 = inst_16003;var inst_15985 = inst_16002;var inst_15986 = inst_16004;var inst_15987 = 0;var state_16039__$1 = (function (){var statearr_16069 = state_16039;(statearr_16069[11] = inst_15984);
(statearr_16069[12] = inst_15985);
(statearr_16069[13] = inst_15987);
(statearr_16069[14] = inst_15986);
return statearr_16069;
})();var statearr_16070_16103 = state_16039__$1;(statearr_16070_16103[2] = null);
(statearr_16070_16103[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16040 === 10))
{var inst_15984 = (state_16039[11]);var inst_15985 = (state_16039[12]);var inst_15987 = (state_16039[13]);var inst_15986 = (state_16039[14]);var inst_15992 = cljs.core._nth.call(null,inst_15985,inst_15987);var inst_15993 = cljs.core.async.muxch_STAR_.call(null,inst_15992);var inst_15994 = cljs.core.async.close_BANG_.call(null,inst_15993);var inst_15995 = (inst_15987 + 1);var tmp16065 = inst_15984;var tmp16066 = inst_15985;var tmp16067 = inst_15986;var inst_15984__$1 = tmp16065;var inst_15985__$1 = tmp16066;var inst_15986__$1 = tmp16067;var inst_15987__$1 = inst_15995;var state_16039__$1 = (function (){var statearr_16071 = state_16039;(statearr_16071[11] = inst_15984__$1);
(statearr_16071[12] = inst_15985__$1);
(statearr_16071[13] = inst_15987__$1);
(statearr_16071[16] = inst_15994);
(statearr_16071[14] = inst_15986__$1);
return statearr_16071;
})();var statearr_16072_16104 = state_16039__$1;(statearr_16072_16104[2] = null);
(statearr_16072_16104[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16040 === 18))
{var inst_16013 = (state_16039[2]);var state_16039__$1 = state_16039;var statearr_16073_16105 = state_16039__$1;(statearr_16073_16105[2] = inst_16013);
(statearr_16073_16105[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16040 === 8))
{var inst_15987 = (state_16039[13]);var inst_15986 = (state_16039[14]);var inst_15989 = (inst_15987 < inst_15986);var inst_15990 = inst_15989;var state_16039__$1 = state_16039;if(cljs.core.truth_(inst_15990))
{var statearr_16074_16106 = state_16039__$1;(statearr_16074_16106[1] = 10);
} else
{var statearr_16075_16107 = state_16039__$1;(statearr_16075_16107[1] = 11);
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
});})(c__10230__auto___16083,mults,ensure_mult,p))
;return ((function (switch__10166__auto__,c__10230__auto___16083,mults,ensure_mult,p){
return (function() {
var state_machine__10167__auto__ = null;
var state_machine__10167__auto____0 = (function (){var statearr_16079 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16079[0] = state_machine__10167__auto__);
(statearr_16079[1] = 1);
return statearr_16079;
});
var state_machine__10167__auto____1 = (function (state_16039){while(true){
var ret_value__10168__auto__ = (function (){try{while(true){
var result__10169__auto__ = switch__10166__auto__.call(null,state_16039);if(cljs.core.keyword_identical_QMARK_.call(null,result__10169__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10169__auto__;
}
break;
}
}catch (e16080){if((e16080 instanceof Object))
{var ex__10170__auto__ = e16080;var statearr_16081_16108 = state_16039;(statearr_16081_16108[5] = ex__10170__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16039);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16080;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10168__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16109 = state_16039;
state_16039 = G__16109;
continue;
}
} else
{return ret_value__10168__auto__;
}
break;
}
});
state_machine__10167__auto__ = function(state_16039){
switch(arguments.length){
case 0:
return state_machine__10167__auto____0.call(this);
case 1:
return state_machine__10167__auto____1.call(this,state_16039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10167__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10167__auto____0;
state_machine__10167__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10167__auto____1;
return state_machine__10167__auto__;
})()
;})(switch__10166__auto__,c__10230__auto___16083,mults,ensure_mult,p))
})();var state__10232__auto__ = (function (){var statearr_16082 = f__10231__auto__.call(null);(statearr_16082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10230__auto___16083);
return statearr_16082;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10232__auto__);
});})(c__10230__auto___16083,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__10230__auto___16246 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10230__auto___16246,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__10231__auto__ = (function (){var switch__10166__auto__ = ((function (c__10230__auto___16246,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16216){var state_val_16217 = (state_16216[1]);if((state_val_16217 === 7))
{var state_16216__$1 = state_16216;var statearr_16218_16247 = state_16216__$1;(statearr_16218_16247[2] = null);
(statearr_16218_16247[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16217 === 1))
{var state_16216__$1 = state_16216;var statearr_16219_16248 = state_16216__$1;(statearr_16219_16248[2] = null);
(statearr_16219_16248[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16217 === 4))
{var inst_16180 = (state_16216[7]);var inst_16182 = (inst_16180 < cnt);var state_16216__$1 = state_16216;if(cljs.core.truth_(inst_16182))
{var statearr_16220_16249 = state_16216__$1;(statearr_16220_16249[1] = 6);
} else
{var statearr_16221_16250 = state_16216__$1;(statearr_16221_16250[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16217 === 15))
{var inst_16212 = (state_16216[2]);var state_16216__$1 = state_16216;var statearr_16222_16251 = state_16216__$1;(statearr_16222_16251[2] = inst_16212);
(statearr_16222_16251[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16217 === 13))
{var inst_16205 = cljs.core.async.close_BANG_.call(null,out);var state_16216__$1 = state_16216;var statearr_16223_16252 = state_16216__$1;(statearr_16223_16252[2] = inst_16205);
(statearr_16223_16252[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16217 === 6))
{var state_16216__$1 = state_16216;var statearr_16224_16253 = state_16216__$1;(statearr_16224_16253[2] = null);
(statearr_16224_16253[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16217 === 3))
{var inst_16214 = (state_16216[2]);var state_16216__$1 = state_16216;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16216__$1,inst_16214);
} else
{if((state_val_16217 === 12))
{var inst_16202 = (state_16216[8]);var inst_16202__$1 = (state_16216[2]);var inst_16203 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16202__$1);var state_16216__$1 = (function (){var statearr_16225 = state_16216;(statearr_16225[8] = inst_16202__$1);
return statearr_16225;
})();if(cljs.core.truth_(inst_16203))
{var statearr_16226_16254 = state_16216__$1;(statearr_16226_16254[1] = 13);
} else
{var statearr_16227_16255 = state_16216__$1;(statearr_16227_16255[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16217 === 2))
{var inst_16179 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_16180 = 0;var state_16216__$1 = (function (){var statearr_16228 = state_16216;(statearr_16228[9] = inst_16179);
(statearr_16228[7] = inst_16180);
return statearr_16228;
})();var statearr_16229_16256 = state_16216__$1;(statearr_16229_16256[2] = null);
(statearr_16229_16256[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16217 === 11))
{var inst_16180 = (state_16216[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16216,10,Object,null,9);var inst_16189 = chs__$1.call(null,inst_16180);var inst_16190 = done.call(null,inst_16180);var inst_16191 = cljs.core.async.take_BANG_.call(null,inst_16189,inst_16190);var state_16216__$1 = state_16216;var statearr_16230_16257 = state_16216__$1;(statearr_16230_16257[2] = inst_16191);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16216__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16217 === 9))
{var inst_16180 = (state_16216[7]);var inst_16193 = (state_16216[2]);var inst_16194 = (inst_16180 + 1);var inst_16180__$1 = inst_16194;var state_16216__$1 = (function (){var statearr_16231 = state_16216;(statearr_16231[10] = inst_16193);
(statearr_16231[7] = inst_16180__$1);
return statearr_16231;
})();var statearr_16232_16258 = state_16216__$1;(statearr_16232_16258[2] = null);
(statearr_16232_16258[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16217 === 5))
{var inst_16200 = (state_16216[2]);var state_16216__$1 = (function (){var statearr_16233 = state_16216;(statearr_16233[11] = inst_16200);
return statearr_16233;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16216__$1,12,dchan);
} else
{if((state_val_16217 === 14))
{var inst_16202 = (state_16216[8]);var inst_16207 = cljs.core.apply.call(null,f,inst_16202);var state_16216__$1 = state_16216;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16216__$1,16,out,inst_16207);
} else
{if((state_val_16217 === 16))
{var inst_16209 = (state_16216[2]);var state_16216__$1 = (function (){var statearr_16234 = state_16216;(statearr_16234[12] = inst_16209);
return statearr_16234;
})();var statearr_16235_16259 = state_16216__$1;(statearr_16235_16259[2] = null);
(statearr_16235_16259[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16217 === 10))
{var inst_16184 = (state_16216[2]);var inst_16185 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_16216__$1 = (function (){var statearr_16236 = state_16216;(statearr_16236[13] = inst_16184);
return statearr_16236;
})();var statearr_16237_16260 = state_16216__$1;(statearr_16237_16260[2] = inst_16185);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16216__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16217 === 8))
{var inst_16198 = (state_16216[2]);var state_16216__$1 = state_16216;var statearr_16238_16261 = state_16216__$1;(statearr_16238_16261[2] = inst_16198);
(statearr_16238_16261[1] = 5);
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
});})(c__10230__auto___16246,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__10166__auto__,c__10230__auto___16246,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__10167__auto__ = null;
var state_machine__10167__auto____0 = (function (){var statearr_16242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16242[0] = state_machine__10167__auto__);
(statearr_16242[1] = 1);
return statearr_16242;
});
var state_machine__10167__auto____1 = (function (state_16216){while(true){
var ret_value__10168__auto__ = (function (){try{while(true){
var result__10169__auto__ = switch__10166__auto__.call(null,state_16216);if(cljs.core.keyword_identical_QMARK_.call(null,result__10169__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10169__auto__;
}
break;
}
}catch (e16243){if((e16243 instanceof Object))
{var ex__10170__auto__ = e16243;var statearr_16244_16262 = state_16216;(statearr_16244_16262[5] = ex__10170__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16216);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16243;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10168__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16263 = state_16216;
state_16216 = G__16263;
continue;
}
} else
{return ret_value__10168__auto__;
}
break;
}
});
state_machine__10167__auto__ = function(state_16216){
switch(arguments.length){
case 0:
return state_machine__10167__auto____0.call(this);
case 1:
return state_machine__10167__auto____1.call(this,state_16216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10167__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10167__auto____0;
state_machine__10167__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10167__auto____1;
return state_machine__10167__auto__;
})()
;})(switch__10166__auto__,c__10230__auto___16246,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__10232__auto__ = (function (){var statearr_16245 = f__10231__auto__.call(null);(statearr_16245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10230__auto___16246);
return statearr_16245;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10232__auto__);
});})(c__10230__auto___16246,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10230__auto___16371 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10230__auto___16371,out){
return (function (){var f__10231__auto__ = (function (){var switch__10166__auto__ = ((function (c__10230__auto___16371,out){
return (function (state_16347){var state_val_16348 = (state_16347[1]);if((state_val_16348 === 7))
{var inst_16326 = (state_16347[7]);var inst_16327 = (state_16347[8]);var inst_16326__$1 = (state_16347[2]);var inst_16327__$1 = cljs.core.nth.call(null,inst_16326__$1,0,null);var inst_16328 = cljs.core.nth.call(null,inst_16326__$1,1,null);var inst_16329 = (inst_16327__$1 == null);var state_16347__$1 = (function (){var statearr_16349 = state_16347;(statearr_16349[9] = inst_16328);
(statearr_16349[7] = inst_16326__$1);
(statearr_16349[8] = inst_16327__$1);
return statearr_16349;
})();if(cljs.core.truth_(inst_16329))
{var statearr_16350_16372 = state_16347__$1;(statearr_16350_16372[1] = 8);
} else
{var statearr_16351_16373 = state_16347__$1;(statearr_16351_16373[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16348 === 1))
{var inst_16318 = cljs.core.vec.call(null,chs);var inst_16319 = inst_16318;var state_16347__$1 = (function (){var statearr_16352 = state_16347;(statearr_16352[10] = inst_16319);
return statearr_16352;
})();var statearr_16353_16374 = state_16347__$1;(statearr_16353_16374[2] = null);
(statearr_16353_16374[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16348 === 4))
{var inst_16319 = (state_16347[10]);var state_16347__$1 = state_16347;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16347__$1,7,inst_16319);
} else
{if((state_val_16348 === 6))
{var inst_16343 = (state_16347[2]);var state_16347__$1 = state_16347;var statearr_16354_16375 = state_16347__$1;(statearr_16354_16375[2] = inst_16343);
(statearr_16354_16375[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16348 === 3))
{var inst_16345 = (state_16347[2]);var state_16347__$1 = state_16347;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16347__$1,inst_16345);
} else
{if((state_val_16348 === 2))
{var inst_16319 = (state_16347[10]);var inst_16321 = cljs.core.count.call(null,inst_16319);var inst_16322 = (inst_16321 > 0);var state_16347__$1 = state_16347;if(cljs.core.truth_(inst_16322))
{var statearr_16356_16376 = state_16347__$1;(statearr_16356_16376[1] = 4);
} else
{var statearr_16357_16377 = state_16347__$1;(statearr_16357_16377[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16348 === 11))
{var inst_16319 = (state_16347[10]);var inst_16336 = (state_16347[2]);var tmp16355 = inst_16319;var inst_16319__$1 = tmp16355;var state_16347__$1 = (function (){var statearr_16358 = state_16347;(statearr_16358[11] = inst_16336);
(statearr_16358[10] = inst_16319__$1);
return statearr_16358;
})();var statearr_16359_16378 = state_16347__$1;(statearr_16359_16378[2] = null);
(statearr_16359_16378[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16348 === 9))
{var inst_16327 = (state_16347[8]);var state_16347__$1 = state_16347;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16347__$1,11,out,inst_16327);
} else
{if((state_val_16348 === 5))
{var inst_16341 = cljs.core.async.close_BANG_.call(null,out);var state_16347__$1 = state_16347;var statearr_16360_16379 = state_16347__$1;(statearr_16360_16379[2] = inst_16341);
(statearr_16360_16379[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16348 === 10))
{var inst_16339 = (state_16347[2]);var state_16347__$1 = state_16347;var statearr_16361_16380 = state_16347__$1;(statearr_16361_16380[2] = inst_16339);
(statearr_16361_16380[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16348 === 8))
{var inst_16328 = (state_16347[9]);var inst_16326 = (state_16347[7]);var inst_16319 = (state_16347[10]);var inst_16327 = (state_16347[8]);var inst_16331 = (function (){var c = inst_16328;var v = inst_16327;var vec__16324 = inst_16326;var cs = inst_16319;return ((function (c,v,vec__16324,cs,inst_16328,inst_16326,inst_16319,inst_16327,state_val_16348,c__10230__auto___16371,out){
return (function (p1__16264_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__16264_SHARP_);
});
;})(c,v,vec__16324,cs,inst_16328,inst_16326,inst_16319,inst_16327,state_val_16348,c__10230__auto___16371,out))
})();var inst_16332 = cljs.core.filterv.call(null,inst_16331,inst_16319);var inst_16319__$1 = inst_16332;var state_16347__$1 = (function (){var statearr_16362 = state_16347;(statearr_16362[10] = inst_16319__$1);
return statearr_16362;
})();var statearr_16363_16381 = state_16347__$1;(statearr_16363_16381[2] = null);
(statearr_16363_16381[1] = 2);
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
});})(c__10230__auto___16371,out))
;return ((function (switch__10166__auto__,c__10230__auto___16371,out){
return (function() {
var state_machine__10167__auto__ = null;
var state_machine__10167__auto____0 = (function (){var statearr_16367 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16367[0] = state_machine__10167__auto__);
(statearr_16367[1] = 1);
return statearr_16367;
});
var state_machine__10167__auto____1 = (function (state_16347){while(true){
var ret_value__10168__auto__ = (function (){try{while(true){
var result__10169__auto__ = switch__10166__auto__.call(null,state_16347);if(cljs.core.keyword_identical_QMARK_.call(null,result__10169__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10169__auto__;
}
break;
}
}catch (e16368){if((e16368 instanceof Object))
{var ex__10170__auto__ = e16368;var statearr_16369_16382 = state_16347;(statearr_16369_16382[5] = ex__10170__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16347);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16368;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10168__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16383 = state_16347;
state_16347 = G__16383;
continue;
}
} else
{return ret_value__10168__auto__;
}
break;
}
});
state_machine__10167__auto__ = function(state_16347){
switch(arguments.length){
case 0:
return state_machine__10167__auto____0.call(this);
case 1:
return state_machine__10167__auto____1.call(this,state_16347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10167__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10167__auto____0;
state_machine__10167__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10167__auto____1;
return state_machine__10167__auto__;
})()
;})(switch__10166__auto__,c__10230__auto___16371,out))
})();var state__10232__auto__ = (function (){var statearr_16370 = f__10231__auto__.call(null);(statearr_16370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10230__auto___16371);
return statearr_16370;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10232__auto__);
});})(c__10230__auto___16371,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10230__auto___16476 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10230__auto___16476,out){
return (function (){var f__10231__auto__ = (function (){var switch__10166__auto__ = ((function (c__10230__auto___16476,out){
return (function (state_16453){var state_val_16454 = (state_16453[1]);if((state_val_16454 === 7))
{var inst_16435 = (state_16453[7]);var inst_16435__$1 = (state_16453[2]);var inst_16436 = (inst_16435__$1 == null);var inst_16437 = cljs.core.not.call(null,inst_16436);var state_16453__$1 = (function (){var statearr_16455 = state_16453;(statearr_16455[7] = inst_16435__$1);
return statearr_16455;
})();if(inst_16437)
{var statearr_16456_16477 = state_16453__$1;(statearr_16456_16477[1] = 8);
} else
{var statearr_16457_16478 = state_16453__$1;(statearr_16457_16478[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16454 === 1))
{var inst_16430 = 0;var state_16453__$1 = (function (){var statearr_16458 = state_16453;(statearr_16458[8] = inst_16430);
return statearr_16458;
})();var statearr_16459_16479 = state_16453__$1;(statearr_16459_16479[2] = null);
(statearr_16459_16479[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16454 === 4))
{var state_16453__$1 = state_16453;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16453__$1,7,ch);
} else
{if((state_val_16454 === 6))
{var inst_16448 = (state_16453[2]);var state_16453__$1 = state_16453;var statearr_16460_16480 = state_16453__$1;(statearr_16460_16480[2] = inst_16448);
(statearr_16460_16480[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16454 === 3))
{var inst_16450 = (state_16453[2]);var inst_16451 = cljs.core.async.close_BANG_.call(null,out);var state_16453__$1 = (function (){var statearr_16461 = state_16453;(statearr_16461[9] = inst_16450);
return statearr_16461;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16453__$1,inst_16451);
} else
{if((state_val_16454 === 2))
{var inst_16430 = (state_16453[8]);var inst_16432 = (inst_16430 < n);var state_16453__$1 = state_16453;if(cljs.core.truth_(inst_16432))
{var statearr_16462_16481 = state_16453__$1;(statearr_16462_16481[1] = 4);
} else
{var statearr_16463_16482 = state_16453__$1;(statearr_16463_16482[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16454 === 11))
{var inst_16430 = (state_16453[8]);var inst_16440 = (state_16453[2]);var inst_16441 = (inst_16430 + 1);var inst_16430__$1 = inst_16441;var state_16453__$1 = (function (){var statearr_16464 = state_16453;(statearr_16464[8] = inst_16430__$1);
(statearr_16464[10] = inst_16440);
return statearr_16464;
})();var statearr_16465_16483 = state_16453__$1;(statearr_16465_16483[2] = null);
(statearr_16465_16483[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16454 === 9))
{var state_16453__$1 = state_16453;var statearr_16466_16484 = state_16453__$1;(statearr_16466_16484[2] = null);
(statearr_16466_16484[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16454 === 5))
{var state_16453__$1 = state_16453;var statearr_16467_16485 = state_16453__$1;(statearr_16467_16485[2] = null);
(statearr_16467_16485[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16454 === 10))
{var inst_16445 = (state_16453[2]);var state_16453__$1 = state_16453;var statearr_16468_16486 = state_16453__$1;(statearr_16468_16486[2] = inst_16445);
(statearr_16468_16486[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16454 === 8))
{var inst_16435 = (state_16453[7]);var state_16453__$1 = state_16453;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16453__$1,11,out,inst_16435);
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
});})(c__10230__auto___16476,out))
;return ((function (switch__10166__auto__,c__10230__auto___16476,out){
return (function() {
var state_machine__10167__auto__ = null;
var state_machine__10167__auto____0 = (function (){var statearr_16472 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16472[0] = state_machine__10167__auto__);
(statearr_16472[1] = 1);
return statearr_16472;
});
var state_machine__10167__auto____1 = (function (state_16453){while(true){
var ret_value__10168__auto__ = (function (){try{while(true){
var result__10169__auto__ = switch__10166__auto__.call(null,state_16453);if(cljs.core.keyword_identical_QMARK_.call(null,result__10169__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10169__auto__;
}
break;
}
}catch (e16473){if((e16473 instanceof Object))
{var ex__10170__auto__ = e16473;var statearr_16474_16487 = state_16453;(statearr_16474_16487[5] = ex__10170__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16453);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16473;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10168__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16488 = state_16453;
state_16453 = G__16488;
continue;
}
} else
{return ret_value__10168__auto__;
}
break;
}
});
state_machine__10167__auto__ = function(state_16453){
switch(arguments.length){
case 0:
return state_machine__10167__auto____0.call(this);
case 1:
return state_machine__10167__auto____1.call(this,state_16453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10167__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10167__auto____0;
state_machine__10167__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10167__auto____1;
return state_machine__10167__auto__;
})()
;})(switch__10166__auto__,c__10230__auto___16476,out))
})();var state__10232__auto__ = (function (){var statearr_16475 = f__10231__auto__.call(null);(statearr_16475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10230__auto___16476);
return statearr_16475;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10232__auto__);
});})(c__10230__auto___16476,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10230__auto___16585 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10230__auto___16585,out){
return (function (){var f__10231__auto__ = (function (){var switch__10166__auto__ = ((function (c__10230__auto___16585,out){
return (function (state_16560){var state_val_16561 = (state_16560[1]);if((state_val_16561 === 7))
{var inst_16555 = (state_16560[2]);var state_16560__$1 = state_16560;var statearr_16562_16586 = state_16560__$1;(statearr_16562_16586[2] = inst_16555);
(statearr_16562_16586[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16561 === 1))
{var inst_16537 = null;var state_16560__$1 = (function (){var statearr_16563 = state_16560;(statearr_16563[7] = inst_16537);
return statearr_16563;
})();var statearr_16564_16587 = state_16560__$1;(statearr_16564_16587[2] = null);
(statearr_16564_16587[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16561 === 4))
{var inst_16540 = (state_16560[8]);var inst_16540__$1 = (state_16560[2]);var inst_16541 = (inst_16540__$1 == null);var inst_16542 = cljs.core.not.call(null,inst_16541);var state_16560__$1 = (function (){var statearr_16565 = state_16560;(statearr_16565[8] = inst_16540__$1);
return statearr_16565;
})();if(inst_16542)
{var statearr_16566_16588 = state_16560__$1;(statearr_16566_16588[1] = 5);
} else
{var statearr_16567_16589 = state_16560__$1;(statearr_16567_16589[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16561 === 6))
{var state_16560__$1 = state_16560;var statearr_16568_16590 = state_16560__$1;(statearr_16568_16590[2] = null);
(statearr_16568_16590[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16561 === 3))
{var inst_16557 = (state_16560[2]);var inst_16558 = cljs.core.async.close_BANG_.call(null,out);var state_16560__$1 = (function (){var statearr_16569 = state_16560;(statearr_16569[9] = inst_16557);
return statearr_16569;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16560__$1,inst_16558);
} else
{if((state_val_16561 === 2))
{var state_16560__$1 = state_16560;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16560__$1,4,ch);
} else
{if((state_val_16561 === 11))
{var inst_16540 = (state_16560[8]);var inst_16549 = (state_16560[2]);var inst_16537 = inst_16540;var state_16560__$1 = (function (){var statearr_16570 = state_16560;(statearr_16570[10] = inst_16549);
(statearr_16570[7] = inst_16537);
return statearr_16570;
})();var statearr_16571_16591 = state_16560__$1;(statearr_16571_16591[2] = null);
(statearr_16571_16591[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16561 === 9))
{var inst_16540 = (state_16560[8]);var state_16560__$1 = state_16560;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16560__$1,11,out,inst_16540);
} else
{if((state_val_16561 === 5))
{var inst_16540 = (state_16560[8]);var inst_16537 = (state_16560[7]);var inst_16544 = cljs.core._EQ_.call(null,inst_16540,inst_16537);var state_16560__$1 = state_16560;if(inst_16544)
{var statearr_16573_16592 = state_16560__$1;(statearr_16573_16592[1] = 8);
} else
{var statearr_16574_16593 = state_16560__$1;(statearr_16574_16593[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16561 === 10))
{var inst_16552 = (state_16560[2]);var state_16560__$1 = state_16560;var statearr_16575_16594 = state_16560__$1;(statearr_16575_16594[2] = inst_16552);
(statearr_16575_16594[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16561 === 8))
{var inst_16537 = (state_16560[7]);var tmp16572 = inst_16537;var inst_16537__$1 = tmp16572;var state_16560__$1 = (function (){var statearr_16576 = state_16560;(statearr_16576[7] = inst_16537__$1);
return statearr_16576;
})();var statearr_16577_16595 = state_16560__$1;(statearr_16577_16595[2] = null);
(statearr_16577_16595[1] = 2);
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
});})(c__10230__auto___16585,out))
;return ((function (switch__10166__auto__,c__10230__auto___16585,out){
return (function() {
var state_machine__10167__auto__ = null;
var state_machine__10167__auto____0 = (function (){var statearr_16581 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16581[0] = state_machine__10167__auto__);
(statearr_16581[1] = 1);
return statearr_16581;
});
var state_machine__10167__auto____1 = (function (state_16560){while(true){
var ret_value__10168__auto__ = (function (){try{while(true){
var result__10169__auto__ = switch__10166__auto__.call(null,state_16560);if(cljs.core.keyword_identical_QMARK_.call(null,result__10169__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10169__auto__;
}
break;
}
}catch (e16582){if((e16582 instanceof Object))
{var ex__10170__auto__ = e16582;var statearr_16583_16596 = state_16560;(statearr_16583_16596[5] = ex__10170__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16560);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16582;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10168__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16597 = state_16560;
state_16560 = G__16597;
continue;
}
} else
{return ret_value__10168__auto__;
}
break;
}
});
state_machine__10167__auto__ = function(state_16560){
switch(arguments.length){
case 0:
return state_machine__10167__auto____0.call(this);
case 1:
return state_machine__10167__auto____1.call(this,state_16560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10167__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10167__auto____0;
state_machine__10167__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10167__auto____1;
return state_machine__10167__auto__;
})()
;})(switch__10166__auto__,c__10230__auto___16585,out))
})();var state__10232__auto__ = (function (){var statearr_16584 = f__10231__auto__.call(null);(statearr_16584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10230__auto___16585);
return statearr_16584;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10232__auto__);
});})(c__10230__auto___16585,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10230__auto___16732 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10230__auto___16732,out){
return (function (){var f__10231__auto__ = (function (){var switch__10166__auto__ = ((function (c__10230__auto___16732,out){
return (function (state_16702){var state_val_16703 = (state_16702[1]);if((state_val_16703 === 7))
{var inst_16698 = (state_16702[2]);var state_16702__$1 = state_16702;var statearr_16704_16733 = state_16702__$1;(statearr_16704_16733[2] = inst_16698);
(statearr_16704_16733[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16703 === 1))
{var inst_16665 = (new Array(n));var inst_16666 = inst_16665;var inst_16667 = 0;var state_16702__$1 = (function (){var statearr_16705 = state_16702;(statearr_16705[7] = inst_16666);
(statearr_16705[8] = inst_16667);
return statearr_16705;
})();var statearr_16706_16734 = state_16702__$1;(statearr_16706_16734[2] = null);
(statearr_16706_16734[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16703 === 4))
{var inst_16670 = (state_16702[9]);var inst_16670__$1 = (state_16702[2]);var inst_16671 = (inst_16670__$1 == null);var inst_16672 = cljs.core.not.call(null,inst_16671);var state_16702__$1 = (function (){var statearr_16707 = state_16702;(statearr_16707[9] = inst_16670__$1);
return statearr_16707;
})();if(inst_16672)
{var statearr_16708_16735 = state_16702__$1;(statearr_16708_16735[1] = 5);
} else
{var statearr_16709_16736 = state_16702__$1;(statearr_16709_16736[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16703 === 15))
{var inst_16692 = (state_16702[2]);var state_16702__$1 = state_16702;var statearr_16710_16737 = state_16702__$1;(statearr_16710_16737[2] = inst_16692);
(statearr_16710_16737[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16703 === 13))
{var state_16702__$1 = state_16702;var statearr_16711_16738 = state_16702__$1;(statearr_16711_16738[2] = null);
(statearr_16711_16738[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16703 === 6))
{var inst_16667 = (state_16702[8]);var inst_16688 = (inst_16667 > 0);var state_16702__$1 = state_16702;if(cljs.core.truth_(inst_16688))
{var statearr_16712_16739 = state_16702__$1;(statearr_16712_16739[1] = 12);
} else
{var statearr_16713_16740 = state_16702__$1;(statearr_16713_16740[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16703 === 3))
{var inst_16700 = (state_16702[2]);var state_16702__$1 = state_16702;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16702__$1,inst_16700);
} else
{if((state_val_16703 === 12))
{var inst_16666 = (state_16702[7]);var inst_16690 = cljs.core.vec.call(null,inst_16666);var state_16702__$1 = state_16702;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16702__$1,15,out,inst_16690);
} else
{if((state_val_16703 === 2))
{var state_16702__$1 = state_16702;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16702__$1,4,ch);
} else
{if((state_val_16703 === 11))
{var inst_16682 = (state_16702[2]);var inst_16683 = (new Array(n));var inst_16666 = inst_16683;var inst_16667 = 0;var state_16702__$1 = (function (){var statearr_16714 = state_16702;(statearr_16714[10] = inst_16682);
(statearr_16714[7] = inst_16666);
(statearr_16714[8] = inst_16667);
return statearr_16714;
})();var statearr_16715_16741 = state_16702__$1;(statearr_16715_16741[2] = null);
(statearr_16715_16741[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16703 === 9))
{var inst_16666 = (state_16702[7]);var inst_16680 = cljs.core.vec.call(null,inst_16666);var state_16702__$1 = state_16702;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16702__$1,11,out,inst_16680);
} else
{if((state_val_16703 === 5))
{var inst_16666 = (state_16702[7]);var inst_16667 = (state_16702[8]);var inst_16675 = (state_16702[11]);var inst_16670 = (state_16702[9]);var inst_16674 = (inst_16666[inst_16667] = inst_16670);var inst_16675__$1 = (inst_16667 + 1);var inst_16676 = (inst_16675__$1 < n);var state_16702__$1 = (function (){var statearr_16716 = state_16702;(statearr_16716[11] = inst_16675__$1);
(statearr_16716[12] = inst_16674);
return statearr_16716;
})();if(cljs.core.truth_(inst_16676))
{var statearr_16717_16742 = state_16702__$1;(statearr_16717_16742[1] = 8);
} else
{var statearr_16718_16743 = state_16702__$1;(statearr_16718_16743[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16703 === 14))
{var inst_16695 = (state_16702[2]);var inst_16696 = cljs.core.async.close_BANG_.call(null,out);var state_16702__$1 = (function (){var statearr_16720 = state_16702;(statearr_16720[13] = inst_16695);
return statearr_16720;
})();var statearr_16721_16744 = state_16702__$1;(statearr_16721_16744[2] = inst_16696);
(statearr_16721_16744[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16703 === 10))
{var inst_16686 = (state_16702[2]);var state_16702__$1 = state_16702;var statearr_16722_16745 = state_16702__$1;(statearr_16722_16745[2] = inst_16686);
(statearr_16722_16745[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16703 === 8))
{var inst_16666 = (state_16702[7]);var inst_16675 = (state_16702[11]);var tmp16719 = inst_16666;var inst_16666__$1 = tmp16719;var inst_16667 = inst_16675;var state_16702__$1 = (function (){var statearr_16723 = state_16702;(statearr_16723[7] = inst_16666__$1);
(statearr_16723[8] = inst_16667);
return statearr_16723;
})();var statearr_16724_16746 = state_16702__$1;(statearr_16724_16746[2] = null);
(statearr_16724_16746[1] = 2);
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
});})(c__10230__auto___16732,out))
;return ((function (switch__10166__auto__,c__10230__auto___16732,out){
return (function() {
var state_machine__10167__auto__ = null;
var state_machine__10167__auto____0 = (function (){var statearr_16728 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16728[0] = state_machine__10167__auto__);
(statearr_16728[1] = 1);
return statearr_16728;
});
var state_machine__10167__auto____1 = (function (state_16702){while(true){
var ret_value__10168__auto__ = (function (){try{while(true){
var result__10169__auto__ = switch__10166__auto__.call(null,state_16702);if(cljs.core.keyword_identical_QMARK_.call(null,result__10169__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10169__auto__;
}
break;
}
}catch (e16729){if((e16729 instanceof Object))
{var ex__10170__auto__ = e16729;var statearr_16730_16747 = state_16702;(statearr_16730_16747[5] = ex__10170__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16702);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16729;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10168__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16748 = state_16702;
state_16702 = G__16748;
continue;
}
} else
{return ret_value__10168__auto__;
}
break;
}
});
state_machine__10167__auto__ = function(state_16702){
switch(arguments.length){
case 0:
return state_machine__10167__auto____0.call(this);
case 1:
return state_machine__10167__auto____1.call(this,state_16702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10167__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10167__auto____0;
state_machine__10167__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10167__auto____1;
return state_machine__10167__auto__;
})()
;})(switch__10166__auto__,c__10230__auto___16732,out))
})();var state__10232__auto__ = (function (){var statearr_16731 = f__10231__auto__.call(null);(statearr_16731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10230__auto___16732);
return statearr_16731;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10232__auto__);
});})(c__10230__auto___16732,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10230__auto___16891 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10230__auto___16891,out){
return (function (){var f__10231__auto__ = (function (){var switch__10166__auto__ = ((function (c__10230__auto___16891,out){
return (function (state_16861){var state_val_16862 = (state_16861[1]);if((state_val_16862 === 7))
{var inst_16857 = (state_16861[2]);var state_16861__$1 = state_16861;var statearr_16863_16892 = state_16861__$1;(statearr_16863_16892[2] = inst_16857);
(statearr_16863_16892[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16862 === 1))
{var inst_16820 = [];var inst_16821 = inst_16820;var inst_16822 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_16861__$1 = (function (){var statearr_16864 = state_16861;(statearr_16864[7] = inst_16821);
(statearr_16864[8] = inst_16822);
return statearr_16864;
})();var statearr_16865_16893 = state_16861__$1;(statearr_16865_16893[2] = null);
(statearr_16865_16893[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16862 === 4))
{var inst_16825 = (state_16861[9]);var inst_16825__$1 = (state_16861[2]);var inst_16826 = (inst_16825__$1 == null);var inst_16827 = cljs.core.not.call(null,inst_16826);var state_16861__$1 = (function (){var statearr_16866 = state_16861;(statearr_16866[9] = inst_16825__$1);
return statearr_16866;
})();if(inst_16827)
{var statearr_16867_16894 = state_16861__$1;(statearr_16867_16894[1] = 5);
} else
{var statearr_16868_16895 = state_16861__$1;(statearr_16868_16895[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16862 === 15))
{var inst_16851 = (state_16861[2]);var state_16861__$1 = state_16861;var statearr_16869_16896 = state_16861__$1;(statearr_16869_16896[2] = inst_16851);
(statearr_16869_16896[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16862 === 13))
{var state_16861__$1 = state_16861;var statearr_16870_16897 = state_16861__$1;(statearr_16870_16897[2] = null);
(statearr_16870_16897[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16862 === 6))
{var inst_16821 = (state_16861[7]);var inst_16846 = inst_16821.length;var inst_16847 = (inst_16846 > 0);var state_16861__$1 = state_16861;if(cljs.core.truth_(inst_16847))
{var statearr_16871_16898 = state_16861__$1;(statearr_16871_16898[1] = 12);
} else
{var statearr_16872_16899 = state_16861__$1;(statearr_16872_16899[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16862 === 3))
{var inst_16859 = (state_16861[2]);var state_16861__$1 = state_16861;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16861__$1,inst_16859);
} else
{if((state_val_16862 === 12))
{var inst_16821 = (state_16861[7]);var inst_16849 = cljs.core.vec.call(null,inst_16821);var state_16861__$1 = state_16861;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16861__$1,15,out,inst_16849);
} else
{if((state_val_16862 === 2))
{var state_16861__$1 = state_16861;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16861__$1,4,ch);
} else
{if((state_val_16862 === 11))
{var inst_16829 = (state_16861[10]);var inst_16825 = (state_16861[9]);var inst_16839 = (state_16861[2]);var inst_16840 = [];var inst_16841 = inst_16840.push(inst_16825);var inst_16821 = inst_16840;var inst_16822 = inst_16829;var state_16861__$1 = (function (){var statearr_16873 = state_16861;(statearr_16873[11] = inst_16841);
(statearr_16873[12] = inst_16839);
(statearr_16873[7] = inst_16821);
(statearr_16873[8] = inst_16822);
return statearr_16873;
})();var statearr_16874_16900 = state_16861__$1;(statearr_16874_16900[2] = null);
(statearr_16874_16900[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16862 === 9))
{var inst_16821 = (state_16861[7]);var inst_16837 = cljs.core.vec.call(null,inst_16821);var state_16861__$1 = state_16861;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16861__$1,11,out,inst_16837);
} else
{if((state_val_16862 === 5))
{var inst_16829 = (state_16861[10]);var inst_16825 = (state_16861[9]);var inst_16822 = (state_16861[8]);var inst_16829__$1 = f.call(null,inst_16825);var inst_16830 = cljs.core._EQ_.call(null,inst_16829__$1,inst_16822);var inst_16831 = cljs.core.keyword_identical_QMARK_.call(null,inst_16822,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_16832 = (inst_16830) || (inst_16831);var state_16861__$1 = (function (){var statearr_16875 = state_16861;(statearr_16875[10] = inst_16829__$1);
return statearr_16875;
})();if(cljs.core.truth_(inst_16832))
{var statearr_16876_16901 = state_16861__$1;(statearr_16876_16901[1] = 8);
} else
{var statearr_16877_16902 = state_16861__$1;(statearr_16877_16902[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16862 === 14))
{var inst_16854 = (state_16861[2]);var inst_16855 = cljs.core.async.close_BANG_.call(null,out);var state_16861__$1 = (function (){var statearr_16879 = state_16861;(statearr_16879[13] = inst_16854);
return statearr_16879;
})();var statearr_16880_16903 = state_16861__$1;(statearr_16880_16903[2] = inst_16855);
(statearr_16880_16903[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16862 === 10))
{var inst_16844 = (state_16861[2]);var state_16861__$1 = state_16861;var statearr_16881_16904 = state_16861__$1;(statearr_16881_16904[2] = inst_16844);
(statearr_16881_16904[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16862 === 8))
{var inst_16829 = (state_16861[10]);var inst_16821 = (state_16861[7]);var inst_16825 = (state_16861[9]);var inst_16834 = inst_16821.push(inst_16825);var tmp16878 = inst_16821;var inst_16821__$1 = tmp16878;var inst_16822 = inst_16829;var state_16861__$1 = (function (){var statearr_16882 = state_16861;(statearr_16882[7] = inst_16821__$1);
(statearr_16882[14] = inst_16834);
(statearr_16882[8] = inst_16822);
return statearr_16882;
})();var statearr_16883_16905 = state_16861__$1;(statearr_16883_16905[2] = null);
(statearr_16883_16905[1] = 2);
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
});})(c__10230__auto___16891,out))
;return ((function (switch__10166__auto__,c__10230__auto___16891,out){
return (function() {
var state_machine__10167__auto__ = null;
var state_machine__10167__auto____0 = (function (){var statearr_16887 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16887[0] = state_machine__10167__auto__);
(statearr_16887[1] = 1);
return statearr_16887;
});
var state_machine__10167__auto____1 = (function (state_16861){while(true){
var ret_value__10168__auto__ = (function (){try{while(true){
var result__10169__auto__ = switch__10166__auto__.call(null,state_16861);if(cljs.core.keyword_identical_QMARK_.call(null,result__10169__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10169__auto__;
}
break;
}
}catch (e16888){if((e16888 instanceof Object))
{var ex__10170__auto__ = e16888;var statearr_16889_16906 = state_16861;(statearr_16889_16906[5] = ex__10170__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16861);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16888;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10168__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16907 = state_16861;
state_16861 = G__16907;
continue;
}
} else
{return ret_value__10168__auto__;
}
break;
}
});
state_machine__10167__auto__ = function(state_16861){
switch(arguments.length){
case 0:
return state_machine__10167__auto____0.call(this);
case 1:
return state_machine__10167__auto____1.call(this,state_16861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10167__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10167__auto____0;
state_machine__10167__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10167__auto____1;
return state_machine__10167__auto__;
})()
;})(switch__10166__auto__,c__10230__auto___16891,out))
})();var state__10232__auto__ = (function (){var statearr_16890 = f__10231__auto__.call(null);(statearr_16890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10230__auto___16891);
return statearr_16890;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10232__auto__);
});})(c__10230__auto___16891,out))
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
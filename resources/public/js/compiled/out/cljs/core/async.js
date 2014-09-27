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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15256 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15256 = (function (f,fn_handler,meta15257){
this.f = f;
this.fn_handler = fn_handler;
this.meta15257 = meta15257;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15256.cljs$lang$type = true;
cljs.core.async.t15256.cljs$lang$ctorStr = "cljs.core.async/t15256";
cljs.core.async.t15256.cljs$lang$ctorPrWriter = (function (this__8448__auto__,writer__8449__auto__,opt__8450__auto__){return cljs.core._write.call(null,writer__8449__auto__,"cljs.core.async/t15256");
});
cljs.core.async.t15256.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15256.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15256.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15256.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15258){var self__ = this;
var _15258__$1 = this;return self__.meta15257;
});
cljs.core.async.t15256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15258,meta15257__$1){var self__ = this;
var _15258__$1 = this;return (new cljs.core.async.t15256(self__.f,self__.fn_handler,meta15257__$1));
});
cljs.core.async.__GT_t15256 = (function __GT_t15256(f__$1,fn_handler__$1,meta15257){return (new cljs.core.async.t15256(f__$1,fn_handler__$1,meta15257));
});
}
return (new cljs.core.async.t15256(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15260 = buff;if(G__15260)
{var bit__8531__auto__ = null;if(cljs.core.truth_((function (){var or__7881__auto__ = bit__8531__auto__;if(cljs.core.truth_(or__7881__auto__))
{return or__7881__auto__;
} else
{return G__15260.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15260.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15260);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15260);
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
{var val_15261 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_15261);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_15261,ret){
return (function (){return fn1.call(null,val_15261);
});})(val_15261,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8729__auto___15262 = n;var x_15263 = 0;while(true){
if((x_15263 < n__8729__auto___15262))
{(a[x_15263] = 0);
{
var G__15264 = (x_15263 + 1);
x_15263 = G__15264;
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
var G__15265 = (i + 1);
i = G__15265;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15269 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15269 = (function (flag,alt_flag,meta15270){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15270 = meta15270;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15269.cljs$lang$type = true;
cljs.core.async.t15269.cljs$lang$ctorStr = "cljs.core.async/t15269";
cljs.core.async.t15269.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8448__auto__,writer__8449__auto__,opt__8450__auto__){return cljs.core._write.call(null,writer__8449__auto__,"cljs.core.async/t15269");
});})(flag))
;
cljs.core.async.t15269.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15269.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t15269.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t15269.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15271){var self__ = this;
var _15271__$1 = this;return self__.meta15270;
});})(flag))
;
cljs.core.async.t15269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15271,meta15270__$1){var self__ = this;
var _15271__$1 = this;return (new cljs.core.async.t15269(self__.flag,self__.alt_flag,meta15270__$1));
});})(flag))
;
cljs.core.async.__GT_t15269 = ((function (flag){
return (function __GT_t15269(flag__$1,alt_flag__$1,meta15270){return (new cljs.core.async.t15269(flag__$1,alt_flag__$1,meta15270));
});})(flag))
;
}
return (new cljs.core.async.t15269(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15275 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15275 = (function (cb,flag,alt_handler,meta15276){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15276 = meta15276;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15275.cljs$lang$type = true;
cljs.core.async.t15275.cljs$lang$ctorStr = "cljs.core.async/t15275";
cljs.core.async.t15275.cljs$lang$ctorPrWriter = (function (this__8448__auto__,writer__8449__auto__,opt__8450__auto__){return cljs.core._write.call(null,writer__8449__auto__,"cljs.core.async/t15275");
});
cljs.core.async.t15275.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15275.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15275.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15275.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15277){var self__ = this;
var _15277__$1 = this;return self__.meta15276;
});
cljs.core.async.t15275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15277,meta15276__$1){var self__ = this;
var _15277__$1 = this;return (new cljs.core.async.t15275(self__.cb,self__.flag,self__.alt_handler,meta15276__$1));
});
cljs.core.async.__GT_t15275 = (function __GT_t15275(cb__$1,flag__$1,alt_handler__$1,meta15276){return (new cljs.core.async.t15275(cb__$1,flag__$1,alt_handler__$1,meta15276));
});
}
return (new cljs.core.async.t15275(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15278_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15278_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15279_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15279_SHARP_,port], null));
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
var G__15280 = (i + 1);
i = G__15280;
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
var alts_BANG___delegate = function (ports,p__15281){var map__15283 = p__15281;var map__15283__$1 = ((cljs.core.seq_QMARK_.call(null,map__15283))?cljs.core.apply.call(null,cljs.core.hash_map,map__15283):map__15283);var opts = map__15283__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__15281 = null;if (arguments.length > 1) {
  p__15281 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15281);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15284){
var ports = cljs.core.first(arglist__15284);
var p__15281 = cljs.core.rest(arglist__15284);
return alts_BANG___delegate(ports,p__15281);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15292 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15292 = (function (ch,f,map_LT_,meta15293){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15293 = meta15293;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15292.cljs$lang$type = true;
cljs.core.async.t15292.cljs$lang$ctorStr = "cljs.core.async/t15292";
cljs.core.async.t15292.cljs$lang$ctorPrWriter = (function (this__8448__auto__,writer__8449__auto__,opt__8450__auto__){return cljs.core._write.call(null,writer__8449__auto__,"cljs.core.async/t15292");
});
cljs.core.async.t15292.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15292.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t15292.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15292.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15295 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15295 = (function (fn1,_,meta15293,ch,f,map_LT_,meta15296){
this.fn1 = fn1;
this._ = _;
this.meta15293 = meta15293;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15296 = meta15296;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15295.cljs$lang$type = true;
cljs.core.async.t15295.cljs$lang$ctorStr = "cljs.core.async/t15295";
cljs.core.async.t15295.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8448__auto__,writer__8449__auto__,opt__8450__auto__){return cljs.core._write.call(null,writer__8449__auto__,"cljs.core.async/t15295");
});})(___$1))
;
cljs.core.async.t15295.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15295.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15295.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15295.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__15285_SHARP_){return f1.call(null,(((p1__15285_SHARP_ == null))?null:self__.f.call(null,p1__15285_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t15295.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15297){var self__ = this;
var _15297__$1 = this;return self__.meta15296;
});})(___$1))
;
cljs.core.async.t15295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15297,meta15296__$1){var self__ = this;
var _15297__$1 = this;return (new cljs.core.async.t15295(self__.fn1,self__._,self__.meta15293,self__.ch,self__.f,self__.map_LT_,meta15296__$1));
});})(___$1))
;
cljs.core.async.__GT_t15295 = ((function (___$1){
return (function __GT_t15295(fn1__$1,___$2,meta15293__$1,ch__$2,f__$2,map_LT___$2,meta15296){return (new cljs.core.async.t15295(fn1__$1,___$2,meta15293__$1,ch__$2,f__$2,map_LT___$2,meta15296));
});})(___$1))
;
}
return (new cljs.core.async.t15295(fn1,___$1,self__.meta15293,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t15292.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15292.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15292.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t15292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15294){var self__ = this;
var _15294__$1 = this;return self__.meta15293;
});
cljs.core.async.t15292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15294,meta15293__$1){var self__ = this;
var _15294__$1 = this;return (new cljs.core.async.t15292(self__.ch,self__.f,self__.map_LT_,meta15293__$1));
});
cljs.core.async.__GT_t15292 = (function __GT_t15292(ch__$1,f__$1,map_LT___$1,meta15293){return (new cljs.core.async.t15292(ch__$1,f__$1,map_LT___$1,meta15293));
});
}
return (new cljs.core.async.t15292(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15301 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15301 = (function (ch,f,map_GT_,meta15302){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15302 = meta15302;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15301.cljs$lang$type = true;
cljs.core.async.t15301.cljs$lang$ctorStr = "cljs.core.async/t15301";
cljs.core.async.t15301.cljs$lang$ctorPrWriter = (function (this__8448__auto__,writer__8449__auto__,opt__8450__auto__){return cljs.core._write.call(null,writer__8449__auto__,"cljs.core.async/t15301");
});
cljs.core.async.t15301.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15301.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t15301.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15301.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15301.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15301.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15301.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15303){var self__ = this;
var _15303__$1 = this;return self__.meta15302;
});
cljs.core.async.t15301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15303,meta15302__$1){var self__ = this;
var _15303__$1 = this;return (new cljs.core.async.t15301(self__.ch,self__.f,self__.map_GT_,meta15302__$1));
});
cljs.core.async.__GT_t15301 = (function __GT_t15301(ch__$1,f__$1,map_GT___$1,meta15302){return (new cljs.core.async.t15301(ch__$1,f__$1,map_GT___$1,meta15302));
});
}
return (new cljs.core.async.t15301(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15307 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15307 = (function (ch,p,filter_GT_,meta15308){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15308 = meta15308;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15307.cljs$lang$type = true;
cljs.core.async.t15307.cljs$lang$ctorStr = "cljs.core.async/t15307";
cljs.core.async.t15307.cljs$lang$ctorPrWriter = (function (this__8448__auto__,writer__8449__auto__,opt__8450__auto__){return cljs.core._write.call(null,writer__8449__auto__,"cljs.core.async/t15307");
});
cljs.core.async.t15307.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15307.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t15307.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15307.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15307.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15307.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15307.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t15307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15309){var self__ = this;
var _15309__$1 = this;return self__.meta15308;
});
cljs.core.async.t15307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15309,meta15308__$1){var self__ = this;
var _15309__$1 = this;return (new cljs.core.async.t15307(self__.ch,self__.p,self__.filter_GT_,meta15308__$1));
});
cljs.core.async.__GT_t15307 = (function __GT_t15307(ch__$1,p__$1,filter_GT___$1,meta15308){return (new cljs.core.async.t15307(ch__$1,p__$1,filter_GT___$1,meta15308));
});
}
return (new cljs.core.async.t15307(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11016__auto___15392 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11016__auto___15392,out){
return (function (){var f__11017__auto__ = (function (){var switch__10952__auto__ = ((function (c__11016__auto___15392,out){
return (function (state_15371){var state_val_15372 = (state_15371[1]);if((state_val_15372 === 7))
{var inst_15367 = (state_15371[2]);var state_15371__$1 = state_15371;var statearr_15373_15393 = state_15371__$1;(statearr_15373_15393[2] = inst_15367);
(statearr_15373_15393[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15372 === 1))
{var state_15371__$1 = state_15371;var statearr_15374_15394 = state_15371__$1;(statearr_15374_15394[2] = null);
(statearr_15374_15394[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15372 === 4))
{var inst_15353 = (state_15371[7]);var inst_15353__$1 = (state_15371[2]);var inst_15354 = (inst_15353__$1 == null);var state_15371__$1 = (function (){var statearr_15375 = state_15371;(statearr_15375[7] = inst_15353__$1);
return statearr_15375;
})();if(cljs.core.truth_(inst_15354))
{var statearr_15376_15395 = state_15371__$1;(statearr_15376_15395[1] = 5);
} else
{var statearr_15377_15396 = state_15371__$1;(statearr_15377_15396[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15372 === 6))
{var inst_15353 = (state_15371[7]);var inst_15358 = p.call(null,inst_15353);var state_15371__$1 = state_15371;if(cljs.core.truth_(inst_15358))
{var statearr_15378_15397 = state_15371__$1;(statearr_15378_15397[1] = 8);
} else
{var statearr_15379_15398 = state_15371__$1;(statearr_15379_15398[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15372 === 3))
{var inst_15369 = (state_15371[2]);var state_15371__$1 = state_15371;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15371__$1,inst_15369);
} else
{if((state_val_15372 === 2))
{var state_15371__$1 = state_15371;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15371__$1,4,ch);
} else
{if((state_val_15372 === 11))
{var inst_15361 = (state_15371[2]);var state_15371__$1 = state_15371;var statearr_15380_15399 = state_15371__$1;(statearr_15380_15399[2] = inst_15361);
(statearr_15380_15399[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15372 === 9))
{var state_15371__$1 = state_15371;var statearr_15381_15400 = state_15371__$1;(statearr_15381_15400[2] = null);
(statearr_15381_15400[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15372 === 5))
{var inst_15356 = cljs.core.async.close_BANG_.call(null,out);var state_15371__$1 = state_15371;var statearr_15382_15401 = state_15371__$1;(statearr_15382_15401[2] = inst_15356);
(statearr_15382_15401[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15372 === 10))
{var inst_15364 = (state_15371[2]);var state_15371__$1 = (function (){var statearr_15383 = state_15371;(statearr_15383[8] = inst_15364);
return statearr_15383;
})();var statearr_15384_15402 = state_15371__$1;(statearr_15384_15402[2] = null);
(statearr_15384_15402[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15372 === 8))
{var inst_15353 = (state_15371[7]);var state_15371__$1 = state_15371;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15371__$1,11,out,inst_15353);
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
});})(c__11016__auto___15392,out))
;return ((function (switch__10952__auto__,c__11016__auto___15392,out){
return (function() {
var state_machine__10953__auto__ = null;
var state_machine__10953__auto____0 = (function (){var statearr_15388 = [null,null,null,null,null,null,null,null,null];(statearr_15388[0] = state_machine__10953__auto__);
(statearr_15388[1] = 1);
return statearr_15388;
});
var state_machine__10953__auto____1 = (function (state_15371){while(true){
var ret_value__10954__auto__ = (function (){try{while(true){
var result__10955__auto__ = switch__10952__auto__.call(null,state_15371);if(cljs.core.keyword_identical_QMARK_.call(null,result__10955__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10955__auto__;
}
break;
}
}catch (e15389){if((e15389 instanceof Object))
{var ex__10956__auto__ = e15389;var statearr_15390_15403 = state_15371;(statearr_15390_15403[5] = ex__10956__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15371);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15389;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10954__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15404 = state_15371;
state_15371 = G__15404;
continue;
}
} else
{return ret_value__10954__auto__;
}
break;
}
});
state_machine__10953__auto__ = function(state_15371){
switch(arguments.length){
case 0:
return state_machine__10953__auto____0.call(this);
case 1:
return state_machine__10953__auto____1.call(this,state_15371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10953__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10953__auto____0;
state_machine__10953__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10953__auto____1;
return state_machine__10953__auto__;
})()
;})(switch__10952__auto__,c__11016__auto___15392,out))
})();var state__11018__auto__ = (function (){var statearr_15391 = f__11017__auto__.call(null);(statearr_15391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11016__auto___15392);
return statearr_15391;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11018__auto__);
});})(c__11016__auto___15392,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__11016__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11016__auto__){
return (function (){var f__11017__auto__ = (function (){var switch__10952__auto__ = ((function (c__11016__auto__){
return (function (state_15570){var state_val_15571 = (state_15570[1]);if((state_val_15571 === 7))
{var inst_15566 = (state_15570[2]);var state_15570__$1 = state_15570;var statearr_15572_15613 = state_15570__$1;(statearr_15572_15613[2] = inst_15566);
(statearr_15572_15613[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15571 === 20))
{var inst_15536 = (state_15570[7]);var inst_15547 = (state_15570[2]);var inst_15548 = cljs.core.next.call(null,inst_15536);var inst_15522 = inst_15548;var inst_15523 = null;var inst_15524 = 0;var inst_15525 = 0;var state_15570__$1 = (function (){var statearr_15573 = state_15570;(statearr_15573[8] = inst_15522);
(statearr_15573[9] = inst_15524);
(statearr_15573[10] = inst_15525);
(statearr_15573[11] = inst_15523);
(statearr_15573[12] = inst_15547);
return statearr_15573;
})();var statearr_15574_15614 = state_15570__$1;(statearr_15574_15614[2] = null);
(statearr_15574_15614[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15571 === 1))
{var state_15570__$1 = state_15570;var statearr_15575_15615 = state_15570__$1;(statearr_15575_15615[2] = null);
(statearr_15575_15615[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15571 === 4))
{var inst_15511 = (state_15570[13]);var inst_15511__$1 = (state_15570[2]);var inst_15512 = (inst_15511__$1 == null);var state_15570__$1 = (function (){var statearr_15576 = state_15570;(statearr_15576[13] = inst_15511__$1);
return statearr_15576;
})();if(cljs.core.truth_(inst_15512))
{var statearr_15577_15616 = state_15570__$1;(statearr_15577_15616[1] = 5);
} else
{var statearr_15578_15617 = state_15570__$1;(statearr_15578_15617[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15571 === 15))
{var state_15570__$1 = state_15570;var statearr_15582_15618 = state_15570__$1;(statearr_15582_15618[2] = null);
(statearr_15582_15618[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15571 === 21))
{var state_15570__$1 = state_15570;var statearr_15583_15619 = state_15570__$1;(statearr_15583_15619[2] = null);
(statearr_15583_15619[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15571 === 13))
{var inst_15522 = (state_15570[8]);var inst_15524 = (state_15570[9]);var inst_15525 = (state_15570[10]);var inst_15523 = (state_15570[11]);var inst_15532 = (state_15570[2]);var inst_15533 = (inst_15525 + 1);var tmp15579 = inst_15522;var tmp15580 = inst_15524;var tmp15581 = inst_15523;var inst_15522__$1 = tmp15579;var inst_15523__$1 = tmp15581;var inst_15524__$1 = tmp15580;var inst_15525__$1 = inst_15533;var state_15570__$1 = (function (){var statearr_15584 = state_15570;(statearr_15584[14] = inst_15532);
(statearr_15584[8] = inst_15522__$1);
(statearr_15584[9] = inst_15524__$1);
(statearr_15584[10] = inst_15525__$1);
(statearr_15584[11] = inst_15523__$1);
return statearr_15584;
})();var statearr_15585_15620 = state_15570__$1;(statearr_15585_15620[2] = null);
(statearr_15585_15620[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15571 === 22))
{var state_15570__$1 = state_15570;var statearr_15586_15621 = state_15570__$1;(statearr_15586_15621[2] = null);
(statearr_15586_15621[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15571 === 6))
{var inst_15511 = (state_15570[13]);var inst_15520 = f.call(null,inst_15511);var inst_15521 = cljs.core.seq.call(null,inst_15520);var inst_15522 = inst_15521;var inst_15523 = null;var inst_15524 = 0;var inst_15525 = 0;var state_15570__$1 = (function (){var statearr_15587 = state_15570;(statearr_15587[8] = inst_15522);
(statearr_15587[9] = inst_15524);
(statearr_15587[10] = inst_15525);
(statearr_15587[11] = inst_15523);
return statearr_15587;
})();var statearr_15588_15622 = state_15570__$1;(statearr_15588_15622[2] = null);
(statearr_15588_15622[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15571 === 17))
{var inst_15536 = (state_15570[7]);var inst_15540 = cljs.core.chunk_first.call(null,inst_15536);var inst_15541 = cljs.core.chunk_rest.call(null,inst_15536);var inst_15542 = cljs.core.count.call(null,inst_15540);var inst_15522 = inst_15541;var inst_15523 = inst_15540;var inst_15524 = inst_15542;var inst_15525 = 0;var state_15570__$1 = (function (){var statearr_15589 = state_15570;(statearr_15589[8] = inst_15522);
(statearr_15589[9] = inst_15524);
(statearr_15589[10] = inst_15525);
(statearr_15589[11] = inst_15523);
return statearr_15589;
})();var statearr_15590_15623 = state_15570__$1;(statearr_15590_15623[2] = null);
(statearr_15590_15623[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15571 === 3))
{var inst_15568 = (state_15570[2]);var state_15570__$1 = state_15570;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15570__$1,inst_15568);
} else
{if((state_val_15571 === 12))
{var inst_15556 = (state_15570[2]);var state_15570__$1 = state_15570;var statearr_15591_15624 = state_15570__$1;(statearr_15591_15624[2] = inst_15556);
(statearr_15591_15624[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15571 === 2))
{var state_15570__$1 = state_15570;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15570__$1,4,in$);
} else
{if((state_val_15571 === 23))
{var inst_15564 = (state_15570[2]);var state_15570__$1 = state_15570;var statearr_15592_15625 = state_15570__$1;(statearr_15592_15625[2] = inst_15564);
(statearr_15592_15625[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15571 === 19))
{var inst_15551 = (state_15570[2]);var state_15570__$1 = state_15570;var statearr_15593_15626 = state_15570__$1;(statearr_15593_15626[2] = inst_15551);
(statearr_15593_15626[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15571 === 11))
{var inst_15536 = (state_15570[7]);var inst_15522 = (state_15570[8]);var inst_15536__$1 = cljs.core.seq.call(null,inst_15522);var state_15570__$1 = (function (){var statearr_15594 = state_15570;(statearr_15594[7] = inst_15536__$1);
return statearr_15594;
})();if(inst_15536__$1)
{var statearr_15595_15627 = state_15570__$1;(statearr_15595_15627[1] = 14);
} else
{var statearr_15596_15628 = state_15570__$1;(statearr_15596_15628[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15571 === 9))
{var inst_15558 = (state_15570[2]);var inst_15559 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_15570__$1 = (function (){var statearr_15597 = state_15570;(statearr_15597[15] = inst_15558);
return statearr_15597;
})();if(cljs.core.truth_(inst_15559))
{var statearr_15598_15629 = state_15570__$1;(statearr_15598_15629[1] = 21);
} else
{var statearr_15599_15630 = state_15570__$1;(statearr_15599_15630[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15571 === 5))
{var inst_15514 = cljs.core.async.close_BANG_.call(null,out);var state_15570__$1 = state_15570;var statearr_15600_15631 = state_15570__$1;(statearr_15600_15631[2] = inst_15514);
(statearr_15600_15631[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15571 === 14))
{var inst_15536 = (state_15570[7]);var inst_15538 = cljs.core.chunked_seq_QMARK_.call(null,inst_15536);var state_15570__$1 = state_15570;if(inst_15538)
{var statearr_15601_15632 = state_15570__$1;(statearr_15601_15632[1] = 17);
} else
{var statearr_15602_15633 = state_15570__$1;(statearr_15602_15633[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15571 === 16))
{var inst_15554 = (state_15570[2]);var state_15570__$1 = state_15570;var statearr_15603_15634 = state_15570__$1;(statearr_15603_15634[2] = inst_15554);
(statearr_15603_15634[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15571 === 10))
{var inst_15525 = (state_15570[10]);var inst_15523 = (state_15570[11]);var inst_15530 = cljs.core._nth.call(null,inst_15523,inst_15525);var state_15570__$1 = state_15570;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15570__$1,13,out,inst_15530);
} else
{if((state_val_15571 === 18))
{var inst_15536 = (state_15570[7]);var inst_15545 = cljs.core.first.call(null,inst_15536);var state_15570__$1 = state_15570;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15570__$1,20,out,inst_15545);
} else
{if((state_val_15571 === 8))
{var inst_15524 = (state_15570[9]);var inst_15525 = (state_15570[10]);var inst_15527 = (inst_15525 < inst_15524);var inst_15528 = inst_15527;var state_15570__$1 = state_15570;if(cljs.core.truth_(inst_15528))
{var statearr_15604_15635 = state_15570__$1;(statearr_15604_15635[1] = 10);
} else
{var statearr_15605_15636 = state_15570__$1;(statearr_15605_15636[1] = 11);
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
});})(c__11016__auto__))
;return ((function (switch__10952__auto__,c__11016__auto__){
return (function() {
var state_machine__10953__auto__ = null;
var state_machine__10953__auto____0 = (function (){var statearr_15609 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15609[0] = state_machine__10953__auto__);
(statearr_15609[1] = 1);
return statearr_15609;
});
var state_machine__10953__auto____1 = (function (state_15570){while(true){
var ret_value__10954__auto__ = (function (){try{while(true){
var result__10955__auto__ = switch__10952__auto__.call(null,state_15570);if(cljs.core.keyword_identical_QMARK_.call(null,result__10955__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10955__auto__;
}
break;
}
}catch (e15610){if((e15610 instanceof Object))
{var ex__10956__auto__ = e15610;var statearr_15611_15637 = state_15570;(statearr_15611_15637[5] = ex__10956__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15570);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15610;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10954__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15638 = state_15570;
state_15570 = G__15638;
continue;
}
} else
{return ret_value__10954__auto__;
}
break;
}
});
state_machine__10953__auto__ = function(state_15570){
switch(arguments.length){
case 0:
return state_machine__10953__auto____0.call(this);
case 1:
return state_machine__10953__auto____1.call(this,state_15570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10953__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10953__auto____0;
state_machine__10953__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10953__auto____1;
return state_machine__10953__auto__;
})()
;})(switch__10952__auto__,c__11016__auto__))
})();var state__11018__auto__ = (function (){var statearr_15612 = f__11017__auto__.call(null);(statearr_15612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11016__auto__);
return statearr_15612;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11018__auto__);
});})(c__11016__auto__))
);
return c__11016__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__11016__auto___15733 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11016__auto___15733){
return (function (){var f__11017__auto__ = (function (){var switch__10952__auto__ = ((function (c__11016__auto___15733){
return (function (state_15709){var state_val_15710 = (state_15709[1]);if((state_val_15710 === 7))
{var inst_15705 = (state_15709[2]);var state_15709__$1 = state_15709;var statearr_15711_15734 = state_15709__$1;(statearr_15711_15734[2] = inst_15705);
(statearr_15711_15734[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15710 === 1))
{var state_15709__$1 = state_15709;var statearr_15712_15735 = state_15709__$1;(statearr_15712_15735[2] = null);
(statearr_15712_15735[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15710 === 4))
{var inst_15688 = (state_15709[7]);var inst_15688__$1 = (state_15709[2]);var inst_15689 = (inst_15688__$1 == null);var state_15709__$1 = (function (){var statearr_15713 = state_15709;(statearr_15713[7] = inst_15688__$1);
return statearr_15713;
})();if(cljs.core.truth_(inst_15689))
{var statearr_15714_15736 = state_15709__$1;(statearr_15714_15736[1] = 5);
} else
{var statearr_15715_15737 = state_15709__$1;(statearr_15715_15737[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15710 === 13))
{var state_15709__$1 = state_15709;var statearr_15716_15738 = state_15709__$1;(statearr_15716_15738[2] = null);
(statearr_15716_15738[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15710 === 6))
{var inst_15688 = (state_15709[7]);var state_15709__$1 = state_15709;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15709__$1,11,to,inst_15688);
} else
{if((state_val_15710 === 3))
{var inst_15707 = (state_15709[2]);var state_15709__$1 = state_15709;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15709__$1,inst_15707);
} else
{if((state_val_15710 === 12))
{var state_15709__$1 = state_15709;var statearr_15717_15739 = state_15709__$1;(statearr_15717_15739[2] = null);
(statearr_15717_15739[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15710 === 2))
{var state_15709__$1 = state_15709;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15709__$1,4,from);
} else
{if((state_val_15710 === 11))
{var inst_15698 = (state_15709[2]);var state_15709__$1 = state_15709;if(cljs.core.truth_(inst_15698))
{var statearr_15718_15740 = state_15709__$1;(statearr_15718_15740[1] = 12);
} else
{var statearr_15719_15741 = state_15709__$1;(statearr_15719_15741[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15710 === 9))
{var state_15709__$1 = state_15709;var statearr_15720_15742 = state_15709__$1;(statearr_15720_15742[2] = null);
(statearr_15720_15742[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15710 === 5))
{var state_15709__$1 = state_15709;if(cljs.core.truth_(close_QMARK_))
{var statearr_15721_15743 = state_15709__$1;(statearr_15721_15743[1] = 8);
} else
{var statearr_15722_15744 = state_15709__$1;(statearr_15722_15744[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15710 === 14))
{var inst_15703 = (state_15709[2]);var state_15709__$1 = state_15709;var statearr_15723_15745 = state_15709__$1;(statearr_15723_15745[2] = inst_15703);
(statearr_15723_15745[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15710 === 10))
{var inst_15695 = (state_15709[2]);var state_15709__$1 = state_15709;var statearr_15724_15746 = state_15709__$1;(statearr_15724_15746[2] = inst_15695);
(statearr_15724_15746[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15710 === 8))
{var inst_15692 = cljs.core.async.close_BANG_.call(null,to);var state_15709__$1 = state_15709;var statearr_15725_15747 = state_15709__$1;(statearr_15725_15747[2] = inst_15692);
(statearr_15725_15747[1] = 10);
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
});})(c__11016__auto___15733))
;return ((function (switch__10952__auto__,c__11016__auto___15733){
return (function() {
var state_machine__10953__auto__ = null;
var state_machine__10953__auto____0 = (function (){var statearr_15729 = [null,null,null,null,null,null,null,null];(statearr_15729[0] = state_machine__10953__auto__);
(statearr_15729[1] = 1);
return statearr_15729;
});
var state_machine__10953__auto____1 = (function (state_15709){while(true){
var ret_value__10954__auto__ = (function (){try{while(true){
var result__10955__auto__ = switch__10952__auto__.call(null,state_15709);if(cljs.core.keyword_identical_QMARK_.call(null,result__10955__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10955__auto__;
}
break;
}
}catch (e15730){if((e15730 instanceof Object))
{var ex__10956__auto__ = e15730;var statearr_15731_15748 = state_15709;(statearr_15731_15748[5] = ex__10956__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15709);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15730;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10954__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15749 = state_15709;
state_15709 = G__15749;
continue;
}
} else
{return ret_value__10954__auto__;
}
break;
}
});
state_machine__10953__auto__ = function(state_15709){
switch(arguments.length){
case 0:
return state_machine__10953__auto____0.call(this);
case 1:
return state_machine__10953__auto____1.call(this,state_15709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10953__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10953__auto____0;
state_machine__10953__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10953__auto____1;
return state_machine__10953__auto__;
})()
;})(switch__10952__auto__,c__11016__auto___15733))
})();var state__11018__auto__ = (function (){var statearr_15732 = f__11017__auto__.call(null);(statearr_15732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11016__auto___15733);
return statearr_15732;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11018__auto__);
});})(c__11016__auto___15733))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__11016__auto___15850 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11016__auto___15850,tc,fc){
return (function (){var f__11017__auto__ = (function (){var switch__10952__auto__ = ((function (c__11016__auto___15850,tc,fc){
return (function (state_15825){var state_val_15826 = (state_15825[1]);if((state_val_15826 === 7))
{var inst_15821 = (state_15825[2]);var state_15825__$1 = state_15825;var statearr_15827_15851 = state_15825__$1;(statearr_15827_15851[2] = inst_15821);
(statearr_15827_15851[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15826 === 1))
{var state_15825__$1 = state_15825;var statearr_15828_15852 = state_15825__$1;(statearr_15828_15852[2] = null);
(statearr_15828_15852[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15826 === 4))
{var inst_15802 = (state_15825[7]);var inst_15802__$1 = (state_15825[2]);var inst_15803 = (inst_15802__$1 == null);var state_15825__$1 = (function (){var statearr_15829 = state_15825;(statearr_15829[7] = inst_15802__$1);
return statearr_15829;
})();if(cljs.core.truth_(inst_15803))
{var statearr_15830_15853 = state_15825__$1;(statearr_15830_15853[1] = 5);
} else
{var statearr_15831_15854 = state_15825__$1;(statearr_15831_15854[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15826 === 13))
{var state_15825__$1 = state_15825;var statearr_15832_15855 = state_15825__$1;(statearr_15832_15855[2] = null);
(statearr_15832_15855[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15826 === 6))
{var inst_15802 = (state_15825[7]);var inst_15808 = p.call(null,inst_15802);var state_15825__$1 = state_15825;if(cljs.core.truth_(inst_15808))
{var statearr_15833_15856 = state_15825__$1;(statearr_15833_15856[1] = 9);
} else
{var statearr_15834_15857 = state_15825__$1;(statearr_15834_15857[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15826 === 3))
{var inst_15823 = (state_15825[2]);var state_15825__$1 = state_15825;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15825__$1,inst_15823);
} else
{if((state_val_15826 === 12))
{var state_15825__$1 = state_15825;var statearr_15835_15858 = state_15825__$1;(statearr_15835_15858[2] = null);
(statearr_15835_15858[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15826 === 2))
{var state_15825__$1 = state_15825;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15825__$1,4,ch);
} else
{if((state_val_15826 === 11))
{var inst_15802 = (state_15825[7]);var inst_15812 = (state_15825[2]);var state_15825__$1 = state_15825;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15825__$1,8,inst_15812,inst_15802);
} else
{if((state_val_15826 === 9))
{var state_15825__$1 = state_15825;var statearr_15836_15859 = state_15825__$1;(statearr_15836_15859[2] = tc);
(statearr_15836_15859[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15826 === 5))
{var inst_15805 = cljs.core.async.close_BANG_.call(null,tc);var inst_15806 = cljs.core.async.close_BANG_.call(null,fc);var state_15825__$1 = (function (){var statearr_15837 = state_15825;(statearr_15837[8] = inst_15805);
return statearr_15837;
})();var statearr_15838_15860 = state_15825__$1;(statearr_15838_15860[2] = inst_15806);
(statearr_15838_15860[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15826 === 14))
{var inst_15819 = (state_15825[2]);var state_15825__$1 = state_15825;var statearr_15839_15861 = state_15825__$1;(statearr_15839_15861[2] = inst_15819);
(statearr_15839_15861[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15826 === 10))
{var state_15825__$1 = state_15825;var statearr_15840_15862 = state_15825__$1;(statearr_15840_15862[2] = fc);
(statearr_15840_15862[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15826 === 8))
{var inst_15814 = (state_15825[2]);var state_15825__$1 = state_15825;if(cljs.core.truth_(inst_15814))
{var statearr_15841_15863 = state_15825__$1;(statearr_15841_15863[1] = 12);
} else
{var statearr_15842_15864 = state_15825__$1;(statearr_15842_15864[1] = 13);
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
});})(c__11016__auto___15850,tc,fc))
;return ((function (switch__10952__auto__,c__11016__auto___15850,tc,fc){
return (function() {
var state_machine__10953__auto__ = null;
var state_machine__10953__auto____0 = (function (){var statearr_15846 = [null,null,null,null,null,null,null,null,null];(statearr_15846[0] = state_machine__10953__auto__);
(statearr_15846[1] = 1);
return statearr_15846;
});
var state_machine__10953__auto____1 = (function (state_15825){while(true){
var ret_value__10954__auto__ = (function (){try{while(true){
var result__10955__auto__ = switch__10952__auto__.call(null,state_15825);if(cljs.core.keyword_identical_QMARK_.call(null,result__10955__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10955__auto__;
}
break;
}
}catch (e15847){if((e15847 instanceof Object))
{var ex__10956__auto__ = e15847;var statearr_15848_15865 = state_15825;(statearr_15848_15865[5] = ex__10956__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15825);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15847;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10954__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15866 = state_15825;
state_15825 = G__15866;
continue;
}
} else
{return ret_value__10954__auto__;
}
break;
}
});
state_machine__10953__auto__ = function(state_15825){
switch(arguments.length){
case 0:
return state_machine__10953__auto____0.call(this);
case 1:
return state_machine__10953__auto____1.call(this,state_15825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10953__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10953__auto____0;
state_machine__10953__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10953__auto____1;
return state_machine__10953__auto__;
})()
;})(switch__10952__auto__,c__11016__auto___15850,tc,fc))
})();var state__11018__auto__ = (function (){var statearr_15849 = f__11017__auto__.call(null);(statearr_15849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11016__auto___15850);
return statearr_15849;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11018__auto__);
});})(c__11016__auto___15850,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__11016__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11016__auto__){
return (function (){var f__11017__auto__ = (function (){var switch__10952__auto__ = ((function (c__11016__auto__){
return (function (state_15913){var state_val_15914 = (state_15913[1]);if((state_val_15914 === 7))
{var inst_15909 = (state_15913[2]);var state_15913__$1 = state_15913;var statearr_15915_15931 = state_15913__$1;(statearr_15915_15931[2] = inst_15909);
(statearr_15915_15931[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15914 === 6))
{var inst_15899 = (state_15913[7]);var inst_15902 = (state_15913[8]);var inst_15906 = f.call(null,inst_15899,inst_15902);var inst_15899__$1 = inst_15906;var state_15913__$1 = (function (){var statearr_15916 = state_15913;(statearr_15916[7] = inst_15899__$1);
return statearr_15916;
})();var statearr_15917_15932 = state_15913__$1;(statearr_15917_15932[2] = null);
(statearr_15917_15932[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15914 === 5))
{var inst_15899 = (state_15913[7]);var state_15913__$1 = state_15913;var statearr_15918_15933 = state_15913__$1;(statearr_15918_15933[2] = inst_15899);
(statearr_15918_15933[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15914 === 4))
{var inst_15902 = (state_15913[8]);var inst_15902__$1 = (state_15913[2]);var inst_15903 = (inst_15902__$1 == null);var state_15913__$1 = (function (){var statearr_15919 = state_15913;(statearr_15919[8] = inst_15902__$1);
return statearr_15919;
})();if(cljs.core.truth_(inst_15903))
{var statearr_15920_15934 = state_15913__$1;(statearr_15920_15934[1] = 5);
} else
{var statearr_15921_15935 = state_15913__$1;(statearr_15921_15935[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15914 === 3))
{var inst_15911 = (state_15913[2]);var state_15913__$1 = state_15913;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15913__$1,inst_15911);
} else
{if((state_val_15914 === 2))
{var state_15913__$1 = state_15913;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15913__$1,4,ch);
} else
{if((state_val_15914 === 1))
{var inst_15899 = init;var state_15913__$1 = (function (){var statearr_15922 = state_15913;(statearr_15922[7] = inst_15899);
return statearr_15922;
})();var statearr_15923_15936 = state_15913__$1;(statearr_15923_15936[2] = null);
(statearr_15923_15936[1] = 2);
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
});})(c__11016__auto__))
;return ((function (switch__10952__auto__,c__11016__auto__){
return (function() {
var state_machine__10953__auto__ = null;
var state_machine__10953__auto____0 = (function (){var statearr_15927 = [null,null,null,null,null,null,null,null,null];(statearr_15927[0] = state_machine__10953__auto__);
(statearr_15927[1] = 1);
return statearr_15927;
});
var state_machine__10953__auto____1 = (function (state_15913){while(true){
var ret_value__10954__auto__ = (function (){try{while(true){
var result__10955__auto__ = switch__10952__auto__.call(null,state_15913);if(cljs.core.keyword_identical_QMARK_.call(null,result__10955__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10955__auto__;
}
break;
}
}catch (e15928){if((e15928 instanceof Object))
{var ex__10956__auto__ = e15928;var statearr_15929_15937 = state_15913;(statearr_15929_15937[5] = ex__10956__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15913);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15928;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10954__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15938 = state_15913;
state_15913 = G__15938;
continue;
}
} else
{return ret_value__10954__auto__;
}
break;
}
});
state_machine__10953__auto__ = function(state_15913){
switch(arguments.length){
case 0:
return state_machine__10953__auto____0.call(this);
case 1:
return state_machine__10953__auto____1.call(this,state_15913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10953__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10953__auto____0;
state_machine__10953__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10953__auto____1;
return state_machine__10953__auto__;
})()
;})(switch__10952__auto__,c__11016__auto__))
})();var state__11018__auto__ = (function (){var statearr_15930 = f__11017__auto__.call(null);(statearr_15930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11016__auto__);
return statearr_15930;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11018__auto__);
});})(c__11016__auto__))
);
return c__11016__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__11016__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11016__auto__){
return (function (){var f__11017__auto__ = (function (){var switch__10952__auto__ = ((function (c__11016__auto__){
return (function (state_16012){var state_val_16013 = (state_16012[1]);if((state_val_16013 === 7))
{var inst_15994 = (state_16012[2]);var state_16012__$1 = state_16012;var statearr_16014_16037 = state_16012__$1;(statearr_16014_16037[2] = inst_15994);
(statearr_16014_16037[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16013 === 1))
{var inst_15988 = cljs.core.seq.call(null,coll);var inst_15989 = inst_15988;var state_16012__$1 = (function (){var statearr_16015 = state_16012;(statearr_16015[7] = inst_15989);
return statearr_16015;
})();var statearr_16016_16038 = state_16012__$1;(statearr_16016_16038[2] = null);
(statearr_16016_16038[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16013 === 4))
{var inst_15989 = (state_16012[7]);var inst_15992 = cljs.core.first.call(null,inst_15989);var state_16012__$1 = state_16012;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16012__$1,7,ch,inst_15992);
} else
{if((state_val_16013 === 13))
{var inst_16006 = (state_16012[2]);var state_16012__$1 = state_16012;var statearr_16017_16039 = state_16012__$1;(statearr_16017_16039[2] = inst_16006);
(statearr_16017_16039[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16013 === 6))
{var inst_15997 = (state_16012[2]);var state_16012__$1 = state_16012;if(cljs.core.truth_(inst_15997))
{var statearr_16018_16040 = state_16012__$1;(statearr_16018_16040[1] = 8);
} else
{var statearr_16019_16041 = state_16012__$1;(statearr_16019_16041[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16013 === 3))
{var inst_16010 = (state_16012[2]);var state_16012__$1 = state_16012;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16012__$1,inst_16010);
} else
{if((state_val_16013 === 12))
{var state_16012__$1 = state_16012;var statearr_16020_16042 = state_16012__$1;(statearr_16020_16042[2] = null);
(statearr_16020_16042[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16013 === 2))
{var inst_15989 = (state_16012[7]);var state_16012__$1 = state_16012;if(cljs.core.truth_(inst_15989))
{var statearr_16021_16043 = state_16012__$1;(statearr_16021_16043[1] = 4);
} else
{var statearr_16022_16044 = state_16012__$1;(statearr_16022_16044[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16013 === 11))
{var inst_16003 = cljs.core.async.close_BANG_.call(null,ch);var state_16012__$1 = state_16012;var statearr_16023_16045 = state_16012__$1;(statearr_16023_16045[2] = inst_16003);
(statearr_16023_16045[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16013 === 9))
{var state_16012__$1 = state_16012;if(cljs.core.truth_(close_QMARK_))
{var statearr_16024_16046 = state_16012__$1;(statearr_16024_16046[1] = 11);
} else
{var statearr_16025_16047 = state_16012__$1;(statearr_16025_16047[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16013 === 5))
{var inst_15989 = (state_16012[7]);var state_16012__$1 = state_16012;var statearr_16026_16048 = state_16012__$1;(statearr_16026_16048[2] = inst_15989);
(statearr_16026_16048[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16013 === 10))
{var inst_16008 = (state_16012[2]);var state_16012__$1 = state_16012;var statearr_16027_16049 = state_16012__$1;(statearr_16027_16049[2] = inst_16008);
(statearr_16027_16049[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16013 === 8))
{var inst_15989 = (state_16012[7]);var inst_15999 = cljs.core.next.call(null,inst_15989);var inst_15989__$1 = inst_15999;var state_16012__$1 = (function (){var statearr_16028 = state_16012;(statearr_16028[7] = inst_15989__$1);
return statearr_16028;
})();var statearr_16029_16050 = state_16012__$1;(statearr_16029_16050[2] = null);
(statearr_16029_16050[1] = 2);
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
});})(c__11016__auto__))
;return ((function (switch__10952__auto__,c__11016__auto__){
return (function() {
var state_machine__10953__auto__ = null;
var state_machine__10953__auto____0 = (function (){var statearr_16033 = [null,null,null,null,null,null,null,null];(statearr_16033[0] = state_machine__10953__auto__);
(statearr_16033[1] = 1);
return statearr_16033;
});
var state_machine__10953__auto____1 = (function (state_16012){while(true){
var ret_value__10954__auto__ = (function (){try{while(true){
var result__10955__auto__ = switch__10952__auto__.call(null,state_16012);if(cljs.core.keyword_identical_QMARK_.call(null,result__10955__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10955__auto__;
}
break;
}
}catch (e16034){if((e16034 instanceof Object))
{var ex__10956__auto__ = e16034;var statearr_16035_16051 = state_16012;(statearr_16035_16051[5] = ex__10956__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16012);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16034;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10954__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16052 = state_16012;
state_16012 = G__16052;
continue;
}
} else
{return ret_value__10954__auto__;
}
break;
}
});
state_machine__10953__auto__ = function(state_16012){
switch(arguments.length){
case 0:
return state_machine__10953__auto____0.call(this);
case 1:
return state_machine__10953__auto____1.call(this,state_16012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10953__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10953__auto____0;
state_machine__10953__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10953__auto____1;
return state_machine__10953__auto__;
})()
;})(switch__10952__auto__,c__11016__auto__))
})();var state__11018__auto__ = (function (){var statearr_16036 = f__11017__auto__.call(null);(statearr_16036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11016__auto__);
return statearr_16036;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11018__auto__);
});})(c__11016__auto__))
);
return c__11016__auto__;
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
cljs.core.async.Mux = (function (){var obj16054 = {};return obj16054;
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
cljs.core.async.Mult = (function (){var obj16056 = {};return obj16056;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16278 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16278 = (function (cs,ch,mult,meta16279){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16279 = meta16279;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16278.cljs$lang$type = true;
cljs.core.async.t16278.cljs$lang$ctorStr = "cljs.core.async/t16278";
cljs.core.async.t16278.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8448__auto__,writer__8449__auto__,opt__8450__auto__){return cljs.core._write.call(null,writer__8449__auto__,"cljs.core.async/t16278");
});})(cs))
;
cljs.core.async.t16278.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16278.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16278.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16278.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16278.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16278.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16278.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16280){var self__ = this;
var _16280__$1 = this;return self__.meta16279;
});})(cs))
;
cljs.core.async.t16278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16280,meta16279__$1){var self__ = this;
var _16280__$1 = this;return (new cljs.core.async.t16278(self__.cs,self__.ch,self__.mult,meta16279__$1));
});})(cs))
;
cljs.core.async.__GT_t16278 = ((function (cs){
return (function __GT_t16278(cs__$1,ch__$1,mult__$1,meta16279){return (new cljs.core.async.t16278(cs__$1,ch__$1,mult__$1,meta16279));
});})(cs))
;
}
return (new cljs.core.async.t16278(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__11016__auto___16499 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11016__auto___16499,cs,m,dchan,dctr,done){
return (function (){var f__11017__auto__ = (function (){var switch__10952__auto__ = ((function (c__11016__auto___16499,cs,m,dchan,dctr,done){
return (function (state_16411){var state_val_16412 = (state_16411[1]);if((state_val_16412 === 7))
{var inst_16407 = (state_16411[2]);var state_16411__$1 = state_16411;var statearr_16413_16500 = state_16411__$1;(statearr_16413_16500[2] = inst_16407);
(statearr_16413_16500[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 20))
{var inst_16312 = (state_16411[7]);var inst_16322 = cljs.core.first.call(null,inst_16312);var inst_16323 = cljs.core.nth.call(null,inst_16322,0,null);var inst_16324 = cljs.core.nth.call(null,inst_16322,1,null);var state_16411__$1 = (function (){var statearr_16414 = state_16411;(statearr_16414[8] = inst_16323);
return statearr_16414;
})();if(cljs.core.truth_(inst_16324))
{var statearr_16415_16501 = state_16411__$1;(statearr_16415_16501[1] = 22);
} else
{var statearr_16416_16502 = state_16411__$1;(statearr_16416_16502[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 27))
{var inst_16283 = (state_16411[9]);var inst_16359 = (state_16411[10]);var inst_16354 = (state_16411[11]);var inst_16352 = (state_16411[12]);var inst_16359__$1 = cljs.core._nth.call(null,inst_16352,inst_16354);var inst_16360 = cljs.core.async.put_BANG_.call(null,inst_16359__$1,inst_16283,done);var state_16411__$1 = (function (){var statearr_16417 = state_16411;(statearr_16417[10] = inst_16359__$1);
return statearr_16417;
})();if(cljs.core.truth_(inst_16360))
{var statearr_16418_16503 = state_16411__$1;(statearr_16418_16503[1] = 30);
} else
{var statearr_16419_16504 = state_16411__$1;(statearr_16419_16504[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 1))
{var state_16411__$1 = state_16411;var statearr_16420_16505 = state_16411__$1;(statearr_16420_16505[2] = null);
(statearr_16420_16505[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 24))
{var inst_16312 = (state_16411[7]);var inst_16329 = (state_16411[2]);var inst_16330 = cljs.core.next.call(null,inst_16312);var inst_16292 = inst_16330;var inst_16293 = null;var inst_16294 = 0;var inst_16295 = 0;var state_16411__$1 = (function (){var statearr_16421 = state_16411;(statearr_16421[13] = inst_16329);
(statearr_16421[14] = inst_16294);
(statearr_16421[15] = inst_16292);
(statearr_16421[16] = inst_16293);
(statearr_16421[17] = inst_16295);
return statearr_16421;
})();var statearr_16422_16506 = state_16411__$1;(statearr_16422_16506[2] = null);
(statearr_16422_16506[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 39))
{var state_16411__$1 = state_16411;var statearr_16426_16507 = state_16411__$1;(statearr_16426_16507[2] = null);
(statearr_16426_16507[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 4))
{var inst_16283 = (state_16411[9]);var inst_16283__$1 = (state_16411[2]);var inst_16284 = (inst_16283__$1 == null);var state_16411__$1 = (function (){var statearr_16427 = state_16411;(statearr_16427[9] = inst_16283__$1);
return statearr_16427;
})();if(cljs.core.truth_(inst_16284))
{var statearr_16428_16508 = state_16411__$1;(statearr_16428_16508[1] = 5);
} else
{var statearr_16429_16509 = state_16411__$1;(statearr_16429_16509[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 15))
{var inst_16294 = (state_16411[14]);var inst_16292 = (state_16411[15]);var inst_16293 = (state_16411[16]);var inst_16295 = (state_16411[17]);var inst_16308 = (state_16411[2]);var inst_16309 = (inst_16295 + 1);var tmp16423 = inst_16294;var tmp16424 = inst_16292;var tmp16425 = inst_16293;var inst_16292__$1 = tmp16424;var inst_16293__$1 = tmp16425;var inst_16294__$1 = tmp16423;var inst_16295__$1 = inst_16309;var state_16411__$1 = (function (){var statearr_16430 = state_16411;(statearr_16430[18] = inst_16308);
(statearr_16430[14] = inst_16294__$1);
(statearr_16430[15] = inst_16292__$1);
(statearr_16430[16] = inst_16293__$1);
(statearr_16430[17] = inst_16295__$1);
return statearr_16430;
})();var statearr_16431_16510 = state_16411__$1;(statearr_16431_16510[2] = null);
(statearr_16431_16510[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 21))
{var inst_16333 = (state_16411[2]);var state_16411__$1 = state_16411;var statearr_16435_16511 = state_16411__$1;(statearr_16435_16511[2] = inst_16333);
(statearr_16435_16511[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 31))
{var inst_16359 = (state_16411[10]);var inst_16363 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16364 = cljs.core.async.untap_STAR_.call(null,m,inst_16359);var state_16411__$1 = (function (){var statearr_16436 = state_16411;(statearr_16436[19] = inst_16363);
return statearr_16436;
})();var statearr_16437_16512 = state_16411__$1;(statearr_16437_16512[2] = inst_16364);
(statearr_16437_16512[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 32))
{var inst_16354 = (state_16411[11]);var inst_16353 = (state_16411[20]);var inst_16352 = (state_16411[12]);var inst_16351 = (state_16411[21]);var inst_16366 = (state_16411[2]);var inst_16367 = (inst_16354 + 1);var tmp16432 = inst_16353;var tmp16433 = inst_16352;var tmp16434 = inst_16351;var inst_16351__$1 = tmp16434;var inst_16352__$1 = tmp16433;var inst_16353__$1 = tmp16432;var inst_16354__$1 = inst_16367;var state_16411__$1 = (function (){var statearr_16438 = state_16411;(statearr_16438[11] = inst_16354__$1);
(statearr_16438[22] = inst_16366);
(statearr_16438[20] = inst_16353__$1);
(statearr_16438[12] = inst_16352__$1);
(statearr_16438[21] = inst_16351__$1);
return statearr_16438;
})();var statearr_16439_16513 = state_16411__$1;(statearr_16439_16513[2] = null);
(statearr_16439_16513[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 40))
{var inst_16379 = (state_16411[23]);var inst_16383 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16384 = cljs.core.async.untap_STAR_.call(null,m,inst_16379);var state_16411__$1 = (function (){var statearr_16440 = state_16411;(statearr_16440[24] = inst_16383);
return statearr_16440;
})();var statearr_16441_16514 = state_16411__$1;(statearr_16441_16514[2] = inst_16384);
(statearr_16441_16514[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 33))
{var inst_16370 = (state_16411[25]);var inst_16372 = cljs.core.chunked_seq_QMARK_.call(null,inst_16370);var state_16411__$1 = state_16411;if(inst_16372)
{var statearr_16442_16515 = state_16411__$1;(statearr_16442_16515[1] = 36);
} else
{var statearr_16443_16516 = state_16411__$1;(statearr_16443_16516[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 13))
{var inst_16302 = (state_16411[26]);var inst_16305 = cljs.core.async.close_BANG_.call(null,inst_16302);var state_16411__$1 = state_16411;var statearr_16444_16517 = state_16411__$1;(statearr_16444_16517[2] = inst_16305);
(statearr_16444_16517[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 22))
{var inst_16323 = (state_16411[8]);var inst_16326 = cljs.core.async.close_BANG_.call(null,inst_16323);var state_16411__$1 = state_16411;var statearr_16445_16518 = state_16411__$1;(statearr_16445_16518[2] = inst_16326);
(statearr_16445_16518[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 36))
{var inst_16370 = (state_16411[25]);var inst_16374 = cljs.core.chunk_first.call(null,inst_16370);var inst_16375 = cljs.core.chunk_rest.call(null,inst_16370);var inst_16376 = cljs.core.count.call(null,inst_16374);var inst_16351 = inst_16375;var inst_16352 = inst_16374;var inst_16353 = inst_16376;var inst_16354 = 0;var state_16411__$1 = (function (){var statearr_16446 = state_16411;(statearr_16446[11] = inst_16354);
(statearr_16446[20] = inst_16353);
(statearr_16446[12] = inst_16352);
(statearr_16446[21] = inst_16351);
return statearr_16446;
})();var statearr_16447_16519 = state_16411__$1;(statearr_16447_16519[2] = null);
(statearr_16447_16519[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 41))
{var inst_16370 = (state_16411[25]);var inst_16386 = (state_16411[2]);var inst_16387 = cljs.core.next.call(null,inst_16370);var inst_16351 = inst_16387;var inst_16352 = null;var inst_16353 = 0;var inst_16354 = 0;var state_16411__$1 = (function (){var statearr_16448 = state_16411;(statearr_16448[11] = inst_16354);
(statearr_16448[20] = inst_16353);
(statearr_16448[12] = inst_16352);
(statearr_16448[27] = inst_16386);
(statearr_16448[21] = inst_16351);
return statearr_16448;
})();var statearr_16449_16520 = state_16411__$1;(statearr_16449_16520[2] = null);
(statearr_16449_16520[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 43))
{var state_16411__$1 = state_16411;var statearr_16450_16521 = state_16411__$1;(statearr_16450_16521[2] = null);
(statearr_16450_16521[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 29))
{var inst_16395 = (state_16411[2]);var state_16411__$1 = state_16411;var statearr_16451_16522 = state_16411__$1;(statearr_16451_16522[2] = inst_16395);
(statearr_16451_16522[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 44))
{var inst_16404 = (state_16411[2]);var state_16411__$1 = (function (){var statearr_16452 = state_16411;(statearr_16452[28] = inst_16404);
return statearr_16452;
})();var statearr_16453_16523 = state_16411__$1;(statearr_16453_16523[2] = null);
(statearr_16453_16523[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 6))
{var inst_16343 = (state_16411[29]);var inst_16342 = cljs.core.deref.call(null,cs);var inst_16343__$1 = cljs.core.keys.call(null,inst_16342);var inst_16344 = cljs.core.count.call(null,inst_16343__$1);var inst_16345 = cljs.core.reset_BANG_.call(null,dctr,inst_16344);var inst_16350 = cljs.core.seq.call(null,inst_16343__$1);var inst_16351 = inst_16350;var inst_16352 = null;var inst_16353 = 0;var inst_16354 = 0;var state_16411__$1 = (function (){var statearr_16454 = state_16411;(statearr_16454[29] = inst_16343__$1);
(statearr_16454[11] = inst_16354);
(statearr_16454[30] = inst_16345);
(statearr_16454[20] = inst_16353);
(statearr_16454[12] = inst_16352);
(statearr_16454[21] = inst_16351);
return statearr_16454;
})();var statearr_16455_16524 = state_16411__$1;(statearr_16455_16524[2] = null);
(statearr_16455_16524[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 28))
{var inst_16370 = (state_16411[25]);var inst_16351 = (state_16411[21]);var inst_16370__$1 = cljs.core.seq.call(null,inst_16351);var state_16411__$1 = (function (){var statearr_16456 = state_16411;(statearr_16456[25] = inst_16370__$1);
return statearr_16456;
})();if(inst_16370__$1)
{var statearr_16457_16525 = state_16411__$1;(statearr_16457_16525[1] = 33);
} else
{var statearr_16458_16526 = state_16411__$1;(statearr_16458_16526[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 25))
{var inst_16354 = (state_16411[11]);var inst_16353 = (state_16411[20]);var inst_16356 = (inst_16354 < inst_16353);var inst_16357 = inst_16356;var state_16411__$1 = state_16411;if(cljs.core.truth_(inst_16357))
{var statearr_16459_16527 = state_16411__$1;(statearr_16459_16527[1] = 27);
} else
{var statearr_16460_16528 = state_16411__$1;(statearr_16460_16528[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 34))
{var state_16411__$1 = state_16411;var statearr_16461_16529 = state_16411__$1;(statearr_16461_16529[2] = null);
(statearr_16461_16529[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 17))
{var state_16411__$1 = state_16411;var statearr_16462_16530 = state_16411__$1;(statearr_16462_16530[2] = null);
(statearr_16462_16530[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 3))
{var inst_16409 = (state_16411[2]);var state_16411__$1 = state_16411;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16411__$1,inst_16409);
} else
{if((state_val_16412 === 12))
{var inst_16338 = (state_16411[2]);var state_16411__$1 = state_16411;var statearr_16463_16531 = state_16411__$1;(statearr_16463_16531[2] = inst_16338);
(statearr_16463_16531[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 2))
{var state_16411__$1 = state_16411;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16411__$1,4,ch);
} else
{if((state_val_16412 === 23))
{var state_16411__$1 = state_16411;var statearr_16464_16532 = state_16411__$1;(statearr_16464_16532[2] = null);
(statearr_16464_16532[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 35))
{var inst_16393 = (state_16411[2]);var state_16411__$1 = state_16411;var statearr_16465_16533 = state_16411__$1;(statearr_16465_16533[2] = inst_16393);
(statearr_16465_16533[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 19))
{var inst_16312 = (state_16411[7]);var inst_16316 = cljs.core.chunk_first.call(null,inst_16312);var inst_16317 = cljs.core.chunk_rest.call(null,inst_16312);var inst_16318 = cljs.core.count.call(null,inst_16316);var inst_16292 = inst_16317;var inst_16293 = inst_16316;var inst_16294 = inst_16318;var inst_16295 = 0;var state_16411__$1 = (function (){var statearr_16466 = state_16411;(statearr_16466[14] = inst_16294);
(statearr_16466[15] = inst_16292);
(statearr_16466[16] = inst_16293);
(statearr_16466[17] = inst_16295);
return statearr_16466;
})();var statearr_16467_16534 = state_16411__$1;(statearr_16467_16534[2] = null);
(statearr_16467_16534[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 11))
{var inst_16292 = (state_16411[15]);var inst_16312 = (state_16411[7]);var inst_16312__$1 = cljs.core.seq.call(null,inst_16292);var state_16411__$1 = (function (){var statearr_16468 = state_16411;(statearr_16468[7] = inst_16312__$1);
return statearr_16468;
})();if(inst_16312__$1)
{var statearr_16469_16535 = state_16411__$1;(statearr_16469_16535[1] = 16);
} else
{var statearr_16470_16536 = state_16411__$1;(statearr_16470_16536[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 9))
{var inst_16340 = (state_16411[2]);var state_16411__$1 = state_16411;var statearr_16471_16537 = state_16411__$1;(statearr_16471_16537[2] = inst_16340);
(statearr_16471_16537[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 5))
{var inst_16290 = cljs.core.deref.call(null,cs);var inst_16291 = cljs.core.seq.call(null,inst_16290);var inst_16292 = inst_16291;var inst_16293 = null;var inst_16294 = 0;var inst_16295 = 0;var state_16411__$1 = (function (){var statearr_16472 = state_16411;(statearr_16472[14] = inst_16294);
(statearr_16472[15] = inst_16292);
(statearr_16472[16] = inst_16293);
(statearr_16472[17] = inst_16295);
return statearr_16472;
})();var statearr_16473_16538 = state_16411__$1;(statearr_16473_16538[2] = null);
(statearr_16473_16538[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 14))
{var state_16411__$1 = state_16411;var statearr_16474_16539 = state_16411__$1;(statearr_16474_16539[2] = null);
(statearr_16474_16539[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 45))
{var inst_16401 = (state_16411[2]);var state_16411__$1 = state_16411;var statearr_16475_16540 = state_16411__$1;(statearr_16475_16540[2] = inst_16401);
(statearr_16475_16540[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 26))
{var inst_16343 = (state_16411[29]);var inst_16397 = (state_16411[2]);var inst_16398 = cljs.core.seq.call(null,inst_16343);var state_16411__$1 = (function (){var statearr_16476 = state_16411;(statearr_16476[31] = inst_16397);
return statearr_16476;
})();if(inst_16398)
{var statearr_16477_16541 = state_16411__$1;(statearr_16477_16541[1] = 42);
} else
{var statearr_16478_16542 = state_16411__$1;(statearr_16478_16542[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 16))
{var inst_16312 = (state_16411[7]);var inst_16314 = cljs.core.chunked_seq_QMARK_.call(null,inst_16312);var state_16411__$1 = state_16411;if(inst_16314)
{var statearr_16479_16543 = state_16411__$1;(statearr_16479_16543[1] = 19);
} else
{var statearr_16480_16544 = state_16411__$1;(statearr_16480_16544[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 38))
{var inst_16390 = (state_16411[2]);var state_16411__$1 = state_16411;var statearr_16481_16545 = state_16411__$1;(statearr_16481_16545[2] = inst_16390);
(statearr_16481_16545[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 30))
{var state_16411__$1 = state_16411;var statearr_16482_16546 = state_16411__$1;(statearr_16482_16546[2] = null);
(statearr_16482_16546[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 10))
{var inst_16293 = (state_16411[16]);var inst_16295 = (state_16411[17]);var inst_16301 = cljs.core._nth.call(null,inst_16293,inst_16295);var inst_16302 = cljs.core.nth.call(null,inst_16301,0,null);var inst_16303 = cljs.core.nth.call(null,inst_16301,1,null);var state_16411__$1 = (function (){var statearr_16483 = state_16411;(statearr_16483[26] = inst_16302);
return statearr_16483;
})();if(cljs.core.truth_(inst_16303))
{var statearr_16484_16547 = state_16411__$1;(statearr_16484_16547[1] = 13);
} else
{var statearr_16485_16548 = state_16411__$1;(statearr_16485_16548[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 18))
{var inst_16336 = (state_16411[2]);var state_16411__$1 = state_16411;var statearr_16486_16549 = state_16411__$1;(statearr_16486_16549[2] = inst_16336);
(statearr_16486_16549[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 42))
{var state_16411__$1 = state_16411;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16411__$1,45,dchan);
} else
{if((state_val_16412 === 37))
{var inst_16283 = (state_16411[9]);var inst_16370 = (state_16411[25]);var inst_16379 = (state_16411[23]);var inst_16379__$1 = cljs.core.first.call(null,inst_16370);var inst_16380 = cljs.core.async.put_BANG_.call(null,inst_16379__$1,inst_16283,done);var state_16411__$1 = (function (){var statearr_16487 = state_16411;(statearr_16487[23] = inst_16379__$1);
return statearr_16487;
})();if(cljs.core.truth_(inst_16380))
{var statearr_16488_16550 = state_16411__$1;(statearr_16488_16550[1] = 39);
} else
{var statearr_16489_16551 = state_16411__$1;(statearr_16489_16551[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 8))
{var inst_16294 = (state_16411[14]);var inst_16295 = (state_16411[17]);var inst_16297 = (inst_16295 < inst_16294);var inst_16298 = inst_16297;var state_16411__$1 = state_16411;if(cljs.core.truth_(inst_16298))
{var statearr_16490_16552 = state_16411__$1;(statearr_16490_16552[1] = 10);
} else
{var statearr_16491_16553 = state_16411__$1;(statearr_16491_16553[1] = 11);
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
});})(c__11016__auto___16499,cs,m,dchan,dctr,done))
;return ((function (switch__10952__auto__,c__11016__auto___16499,cs,m,dchan,dctr,done){
return (function() {
var state_machine__10953__auto__ = null;
var state_machine__10953__auto____0 = (function (){var statearr_16495 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16495[0] = state_machine__10953__auto__);
(statearr_16495[1] = 1);
return statearr_16495;
});
var state_machine__10953__auto____1 = (function (state_16411){while(true){
var ret_value__10954__auto__ = (function (){try{while(true){
var result__10955__auto__ = switch__10952__auto__.call(null,state_16411);if(cljs.core.keyword_identical_QMARK_.call(null,result__10955__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10955__auto__;
}
break;
}
}catch (e16496){if((e16496 instanceof Object))
{var ex__10956__auto__ = e16496;var statearr_16497_16554 = state_16411;(statearr_16497_16554[5] = ex__10956__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16411);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16496;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10954__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16555 = state_16411;
state_16411 = G__16555;
continue;
}
} else
{return ret_value__10954__auto__;
}
break;
}
});
state_machine__10953__auto__ = function(state_16411){
switch(arguments.length){
case 0:
return state_machine__10953__auto____0.call(this);
case 1:
return state_machine__10953__auto____1.call(this,state_16411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10953__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10953__auto____0;
state_machine__10953__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10953__auto____1;
return state_machine__10953__auto__;
})()
;})(switch__10952__auto__,c__11016__auto___16499,cs,m,dchan,dctr,done))
})();var state__11018__auto__ = (function (){var statearr_16498 = f__11017__auto__.call(null);(statearr_16498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11016__auto___16499);
return statearr_16498;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11018__auto__);
});})(c__11016__auto___16499,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj16557 = {};return obj16557;
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
;var m = (function (){if(typeof cljs.core.async.t16677 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16677 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16678){
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
this.meta16678 = meta16678;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16677.cljs$lang$type = true;
cljs.core.async.t16677.cljs$lang$ctorStr = "cljs.core.async/t16677";
cljs.core.async.t16677.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8448__auto__,writer__8449__auto__,opt__8450__auto__){return cljs.core._write.call(null,writer__8449__auto__,"cljs.core.async/t16677");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16677.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t16677.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16677.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16677.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16677.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16677.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16677.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16677.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16677.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16679){var self__ = this;
var _16679__$1 = this;return self__.meta16678;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16679,meta16678__$1){var self__ = this;
var _16679__$1 = this;return (new cljs.core.async.t16677(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16678__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t16677 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16677(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16678){return (new cljs.core.async.t16677(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16678));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t16677(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__11016__auto___16796 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11016__auto___16796,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__11017__auto__ = (function (){var switch__10952__auto__ = ((function (c__11016__auto___16796,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16749){var state_val_16750 = (state_16749[1]);if((state_val_16750 === 7))
{var inst_16693 = (state_16749[7]);var inst_16698 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16693);var state_16749__$1 = state_16749;var statearr_16751_16797 = state_16749__$1;(statearr_16751_16797[2] = inst_16698);
(statearr_16751_16797[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16750 === 20))
{var inst_16708 = (state_16749[8]);var state_16749__$1 = state_16749;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16749__$1,23,out,inst_16708);
} else
{if((state_val_16750 === 1))
{var inst_16683 = (state_16749[9]);var inst_16683__$1 = calc_state.call(null);var inst_16684 = cljs.core.seq_QMARK_.call(null,inst_16683__$1);var state_16749__$1 = (function (){var statearr_16752 = state_16749;(statearr_16752[9] = inst_16683__$1);
return statearr_16752;
})();if(inst_16684)
{var statearr_16753_16798 = state_16749__$1;(statearr_16753_16798[1] = 2);
} else
{var statearr_16754_16799 = state_16749__$1;(statearr_16754_16799[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16750 === 24))
{var inst_16701 = (state_16749[10]);var inst_16693 = inst_16701;var state_16749__$1 = (function (){var statearr_16755 = state_16749;(statearr_16755[7] = inst_16693);
return statearr_16755;
})();var statearr_16756_16800 = state_16749__$1;(statearr_16756_16800[2] = null);
(statearr_16756_16800[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16750 === 4))
{var inst_16683 = (state_16749[9]);var inst_16689 = (state_16749[2]);var inst_16690 = cljs.core.get.call(null,inst_16689,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16691 = cljs.core.get.call(null,inst_16689,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16692 = cljs.core.get.call(null,inst_16689,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_16693 = inst_16683;var state_16749__$1 = (function (){var statearr_16757 = state_16749;(statearr_16757[7] = inst_16693);
(statearr_16757[11] = inst_16690);
(statearr_16757[12] = inst_16691);
(statearr_16757[13] = inst_16692);
return statearr_16757;
})();var statearr_16758_16801 = state_16749__$1;(statearr_16758_16801[2] = null);
(statearr_16758_16801[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16750 === 15))
{var state_16749__$1 = state_16749;var statearr_16759_16802 = state_16749__$1;(statearr_16759_16802[2] = null);
(statearr_16759_16802[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16750 === 21))
{var inst_16701 = (state_16749[10]);var inst_16693 = inst_16701;var state_16749__$1 = (function (){var statearr_16760 = state_16749;(statearr_16760[7] = inst_16693);
return statearr_16760;
})();var statearr_16761_16803 = state_16749__$1;(statearr_16761_16803[2] = null);
(statearr_16761_16803[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16750 === 13))
{var inst_16745 = (state_16749[2]);var state_16749__$1 = state_16749;var statearr_16762_16804 = state_16749__$1;(statearr_16762_16804[2] = inst_16745);
(statearr_16762_16804[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16750 === 22))
{var inst_16743 = (state_16749[2]);var state_16749__$1 = state_16749;var statearr_16763_16805 = state_16749__$1;(statearr_16763_16805[2] = inst_16743);
(statearr_16763_16805[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16750 === 6))
{var inst_16747 = (state_16749[2]);var state_16749__$1 = state_16749;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16749__$1,inst_16747);
} else
{if((state_val_16750 === 25))
{var state_16749__$1 = state_16749;var statearr_16764_16806 = state_16749__$1;(statearr_16764_16806[2] = null);
(statearr_16764_16806[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16750 === 17))
{var inst_16723 = (state_16749[14]);var state_16749__$1 = state_16749;var statearr_16765_16807 = state_16749__$1;(statearr_16765_16807[2] = inst_16723);
(statearr_16765_16807[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16750 === 3))
{var inst_16683 = (state_16749[9]);var state_16749__$1 = state_16749;var statearr_16766_16808 = state_16749__$1;(statearr_16766_16808[2] = inst_16683);
(statearr_16766_16808[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16750 === 12))
{var inst_16709 = (state_16749[15]);var inst_16704 = (state_16749[16]);var inst_16723 = (state_16749[14]);var inst_16723__$1 = inst_16704.call(null,inst_16709);var state_16749__$1 = (function (){var statearr_16767 = state_16749;(statearr_16767[14] = inst_16723__$1);
return statearr_16767;
})();if(cljs.core.truth_(inst_16723__$1))
{var statearr_16768_16809 = state_16749__$1;(statearr_16768_16809[1] = 17);
} else
{var statearr_16769_16810 = state_16749__$1;(statearr_16769_16810[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16750 === 2))
{var inst_16683 = (state_16749[9]);var inst_16686 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16683);var state_16749__$1 = state_16749;var statearr_16770_16811 = state_16749__$1;(statearr_16770_16811[2] = inst_16686);
(statearr_16770_16811[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16750 === 23))
{var inst_16734 = (state_16749[2]);var state_16749__$1 = state_16749;if(cljs.core.truth_(inst_16734))
{var statearr_16771_16812 = state_16749__$1;(statearr_16771_16812[1] = 24);
} else
{var statearr_16772_16813 = state_16749__$1;(statearr_16772_16813[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16750 === 19))
{var inst_16731 = (state_16749[2]);var state_16749__$1 = state_16749;if(cljs.core.truth_(inst_16731))
{var statearr_16773_16814 = state_16749__$1;(statearr_16773_16814[1] = 20);
} else
{var statearr_16774_16815 = state_16749__$1;(statearr_16774_16815[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16750 === 11))
{var inst_16708 = (state_16749[8]);var inst_16714 = (inst_16708 == null);var state_16749__$1 = state_16749;if(cljs.core.truth_(inst_16714))
{var statearr_16775_16816 = state_16749__$1;(statearr_16775_16816[1] = 14);
} else
{var statearr_16776_16817 = state_16749__$1;(statearr_16776_16817[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16750 === 9))
{var inst_16701 = (state_16749[10]);var inst_16701__$1 = (state_16749[2]);var inst_16702 = cljs.core.get.call(null,inst_16701__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16703 = cljs.core.get.call(null,inst_16701__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16704 = cljs.core.get.call(null,inst_16701__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_16749__$1 = (function (){var statearr_16777 = state_16749;(statearr_16777[17] = inst_16703);
(statearr_16777[10] = inst_16701__$1);
(statearr_16777[16] = inst_16704);
return statearr_16777;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16749__$1,10,inst_16702);
} else
{if((state_val_16750 === 5))
{var inst_16693 = (state_16749[7]);var inst_16696 = cljs.core.seq_QMARK_.call(null,inst_16693);var state_16749__$1 = state_16749;if(inst_16696)
{var statearr_16778_16818 = state_16749__$1;(statearr_16778_16818[1] = 7);
} else
{var statearr_16779_16819 = state_16749__$1;(statearr_16779_16819[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16750 === 14))
{var inst_16709 = (state_16749[15]);var inst_16716 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16709);var state_16749__$1 = state_16749;var statearr_16780_16820 = state_16749__$1;(statearr_16780_16820[2] = inst_16716);
(statearr_16780_16820[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16750 === 26))
{var inst_16739 = (state_16749[2]);var state_16749__$1 = state_16749;var statearr_16781_16821 = state_16749__$1;(statearr_16781_16821[2] = inst_16739);
(statearr_16781_16821[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16750 === 16))
{var inst_16719 = (state_16749[2]);var inst_16720 = calc_state.call(null);var inst_16693 = inst_16720;var state_16749__$1 = (function (){var statearr_16782 = state_16749;(statearr_16782[7] = inst_16693);
(statearr_16782[18] = inst_16719);
return statearr_16782;
})();var statearr_16783_16822 = state_16749__$1;(statearr_16783_16822[2] = null);
(statearr_16783_16822[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16750 === 10))
{var inst_16709 = (state_16749[15]);var inst_16708 = (state_16749[8]);var inst_16707 = (state_16749[2]);var inst_16708__$1 = cljs.core.nth.call(null,inst_16707,0,null);var inst_16709__$1 = cljs.core.nth.call(null,inst_16707,1,null);var inst_16710 = (inst_16708__$1 == null);var inst_16711 = cljs.core._EQ_.call(null,inst_16709__$1,change);var inst_16712 = (inst_16710) || (inst_16711);var state_16749__$1 = (function (){var statearr_16784 = state_16749;(statearr_16784[15] = inst_16709__$1);
(statearr_16784[8] = inst_16708__$1);
return statearr_16784;
})();if(cljs.core.truth_(inst_16712))
{var statearr_16785_16823 = state_16749__$1;(statearr_16785_16823[1] = 11);
} else
{var statearr_16786_16824 = state_16749__$1;(statearr_16786_16824[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16750 === 18))
{var inst_16709 = (state_16749[15]);var inst_16703 = (state_16749[17]);var inst_16704 = (state_16749[16]);var inst_16726 = cljs.core.empty_QMARK_.call(null,inst_16704);var inst_16727 = inst_16703.call(null,inst_16709);var inst_16728 = cljs.core.not.call(null,inst_16727);var inst_16729 = (inst_16726) && (inst_16728);var state_16749__$1 = state_16749;var statearr_16787_16825 = state_16749__$1;(statearr_16787_16825[2] = inst_16729);
(statearr_16787_16825[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16750 === 8))
{var inst_16693 = (state_16749[7]);var state_16749__$1 = state_16749;var statearr_16788_16826 = state_16749__$1;(statearr_16788_16826[2] = inst_16693);
(statearr_16788_16826[1] = 9);
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
});})(c__11016__auto___16796,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__10952__auto__,c__11016__auto___16796,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__10953__auto__ = null;
var state_machine__10953__auto____0 = (function (){var statearr_16792 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16792[0] = state_machine__10953__auto__);
(statearr_16792[1] = 1);
return statearr_16792;
});
var state_machine__10953__auto____1 = (function (state_16749){while(true){
var ret_value__10954__auto__ = (function (){try{while(true){
var result__10955__auto__ = switch__10952__auto__.call(null,state_16749);if(cljs.core.keyword_identical_QMARK_.call(null,result__10955__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10955__auto__;
}
break;
}
}catch (e16793){if((e16793 instanceof Object))
{var ex__10956__auto__ = e16793;var statearr_16794_16827 = state_16749;(statearr_16794_16827[5] = ex__10956__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16749);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16793;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10954__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16828 = state_16749;
state_16749 = G__16828;
continue;
}
} else
{return ret_value__10954__auto__;
}
break;
}
});
state_machine__10953__auto__ = function(state_16749){
switch(arguments.length){
case 0:
return state_machine__10953__auto____0.call(this);
case 1:
return state_machine__10953__auto____1.call(this,state_16749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10953__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10953__auto____0;
state_machine__10953__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10953__auto____1;
return state_machine__10953__auto__;
})()
;})(switch__10952__auto__,c__11016__auto___16796,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__11018__auto__ = (function (){var statearr_16795 = f__11017__auto__.call(null);(statearr_16795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11016__auto___16796);
return statearr_16795;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11018__auto__);
});})(c__11016__auto___16796,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj16830 = {};return obj16830;
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
return (function (p1__16831_SHARP_){if(cljs.core.truth_(p1__16831_SHARP_.call(null,topic)))
{return p1__16831_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__16831_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7881__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t16946 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16946 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16947){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16947 = meta16947;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16946.cljs$lang$type = true;
cljs.core.async.t16946.cljs$lang$ctorStr = "cljs.core.async/t16946";
cljs.core.async.t16946.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8448__auto__,writer__8449__auto__,opt__8450__auto__){return cljs.core._write.call(null,writer__8449__auto__,"cljs.core.async/t16946");
});})(mults,ensure_mult))
;
cljs.core.async.t16946.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t16946.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t16946.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t16946.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t16946.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t16946.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16946.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t16946.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16948){var self__ = this;
var _16948__$1 = this;return self__.meta16947;
});})(mults,ensure_mult))
;
cljs.core.async.t16946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16948,meta16947__$1){var self__ = this;
var _16948__$1 = this;return (new cljs.core.async.t16946(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16947__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t16946 = ((function (mults,ensure_mult){
return (function __GT_t16946(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16947){return (new cljs.core.async.t16946(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16947));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t16946(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__11016__auto___17060 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11016__auto___17060,mults,ensure_mult,p){
return (function (){var f__11017__auto__ = (function (){var switch__10952__auto__ = ((function (c__11016__auto___17060,mults,ensure_mult,p){
return (function (state_17016){var state_val_17017 = (state_17016[1]);if((state_val_17017 === 7))
{var inst_17012 = (state_17016[2]);var state_17016__$1 = state_17016;var statearr_17018_17061 = state_17016__$1;(statearr_17018_17061[2] = inst_17012);
(statearr_17018_17061[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17017 === 20))
{var state_17016__$1 = state_17016;var statearr_17019_17062 = state_17016__$1;(statearr_17019_17062[2] = null);
(statearr_17019_17062[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17017 === 1))
{var state_17016__$1 = state_17016;var statearr_17020_17063 = state_17016__$1;(statearr_17020_17063[2] = null);
(statearr_17020_17063[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17017 === 4))
{var inst_16951 = (state_17016[7]);var inst_16951__$1 = (state_17016[2]);var inst_16952 = (inst_16951__$1 == null);var state_17016__$1 = (function (){var statearr_17021 = state_17016;(statearr_17021[7] = inst_16951__$1);
return statearr_17021;
})();if(cljs.core.truth_(inst_16952))
{var statearr_17022_17064 = state_17016__$1;(statearr_17022_17064[1] = 5);
} else
{var statearr_17023_17065 = state_17016__$1;(statearr_17023_17065[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17017 === 15))
{var inst_16993 = (state_17016[2]);var state_17016__$1 = state_17016;var statearr_17024_17066 = state_17016__$1;(statearr_17024_17066[2] = inst_16993);
(statearr_17024_17066[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17017 === 21))
{var inst_16999 = (state_17016[8]);var inst_17007 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16999);var state_17016__$1 = state_17016;var statearr_17025_17067 = state_17016__$1;(statearr_17025_17067[2] = inst_17007);
(statearr_17025_17067[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17017 === 13))
{var inst_16975 = (state_17016[9]);var inst_16977 = cljs.core.chunked_seq_QMARK_.call(null,inst_16975);var state_17016__$1 = state_17016;if(inst_16977)
{var statearr_17026_17068 = state_17016__$1;(statearr_17026_17068[1] = 16);
} else
{var statearr_17027_17069 = state_17016__$1;(statearr_17027_17069[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17017 === 22))
{var inst_17009 = (state_17016[2]);var state_17016__$1 = (function (){var statearr_17028 = state_17016;(statearr_17028[10] = inst_17009);
return statearr_17028;
})();var statearr_17029_17070 = state_17016__$1;(statearr_17029_17070[2] = null);
(statearr_17029_17070[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17017 === 6))
{var inst_16951 = (state_17016[7]);var inst_16999 = (state_17016[8]);var inst_16999__$1 = topic_fn.call(null,inst_16951);var inst_17000 = cljs.core.deref.call(null,mults);var inst_17001 = cljs.core.get.call(null,inst_17000,inst_16999__$1);var inst_17002 = cljs.core.async.muxch_STAR_.call(null,inst_17001);var state_17016__$1 = (function (){var statearr_17030 = state_17016;(statearr_17030[8] = inst_16999__$1);
return statearr_17030;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17016__$1,19,inst_17002,inst_16951);
} else
{if((state_val_17017 === 17))
{var inst_16975 = (state_17016[9]);var inst_16984 = cljs.core.first.call(null,inst_16975);var inst_16985 = cljs.core.async.muxch_STAR_.call(null,inst_16984);var inst_16986 = cljs.core.async.close_BANG_.call(null,inst_16985);var inst_16987 = cljs.core.next.call(null,inst_16975);var inst_16961 = inst_16987;var inst_16962 = null;var inst_16963 = 0;var inst_16964 = 0;var state_17016__$1 = (function (){var statearr_17031 = state_17016;(statearr_17031[11] = inst_16961);
(statearr_17031[12] = inst_16963);
(statearr_17031[13] = inst_16962);
(statearr_17031[14] = inst_16964);
(statearr_17031[15] = inst_16986);
return statearr_17031;
})();var statearr_17032_17071 = state_17016__$1;(statearr_17032_17071[2] = null);
(statearr_17032_17071[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17017 === 3))
{var inst_17014 = (state_17016[2]);var state_17016__$1 = state_17016;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17016__$1,inst_17014);
} else
{if((state_val_17017 === 12))
{var inst_16995 = (state_17016[2]);var state_17016__$1 = state_17016;var statearr_17033_17072 = state_17016__$1;(statearr_17033_17072[2] = inst_16995);
(statearr_17033_17072[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17017 === 2))
{var state_17016__$1 = state_17016;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17016__$1,4,ch);
} else
{if((state_val_17017 === 19))
{var inst_17004 = (state_17016[2]);var state_17016__$1 = state_17016;if(cljs.core.truth_(inst_17004))
{var statearr_17034_17073 = state_17016__$1;(statearr_17034_17073[1] = 20);
} else
{var statearr_17035_17074 = state_17016__$1;(statearr_17035_17074[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17017 === 11))
{var inst_16961 = (state_17016[11]);var inst_16975 = (state_17016[9]);var inst_16975__$1 = cljs.core.seq.call(null,inst_16961);var state_17016__$1 = (function (){var statearr_17036 = state_17016;(statearr_17036[9] = inst_16975__$1);
return statearr_17036;
})();if(inst_16975__$1)
{var statearr_17037_17075 = state_17016__$1;(statearr_17037_17075[1] = 13);
} else
{var statearr_17038_17076 = state_17016__$1;(statearr_17038_17076[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17017 === 9))
{var inst_16997 = (state_17016[2]);var state_17016__$1 = state_17016;var statearr_17039_17077 = state_17016__$1;(statearr_17039_17077[2] = inst_16997);
(statearr_17039_17077[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17017 === 5))
{var inst_16958 = cljs.core.deref.call(null,mults);var inst_16959 = cljs.core.vals.call(null,inst_16958);var inst_16960 = cljs.core.seq.call(null,inst_16959);var inst_16961 = inst_16960;var inst_16962 = null;var inst_16963 = 0;var inst_16964 = 0;var state_17016__$1 = (function (){var statearr_17040 = state_17016;(statearr_17040[11] = inst_16961);
(statearr_17040[12] = inst_16963);
(statearr_17040[13] = inst_16962);
(statearr_17040[14] = inst_16964);
return statearr_17040;
})();var statearr_17041_17078 = state_17016__$1;(statearr_17041_17078[2] = null);
(statearr_17041_17078[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17017 === 14))
{var state_17016__$1 = state_17016;var statearr_17045_17079 = state_17016__$1;(statearr_17045_17079[2] = null);
(statearr_17045_17079[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17017 === 16))
{var inst_16975 = (state_17016[9]);var inst_16979 = cljs.core.chunk_first.call(null,inst_16975);var inst_16980 = cljs.core.chunk_rest.call(null,inst_16975);var inst_16981 = cljs.core.count.call(null,inst_16979);var inst_16961 = inst_16980;var inst_16962 = inst_16979;var inst_16963 = inst_16981;var inst_16964 = 0;var state_17016__$1 = (function (){var statearr_17046 = state_17016;(statearr_17046[11] = inst_16961);
(statearr_17046[12] = inst_16963);
(statearr_17046[13] = inst_16962);
(statearr_17046[14] = inst_16964);
return statearr_17046;
})();var statearr_17047_17080 = state_17016__$1;(statearr_17047_17080[2] = null);
(statearr_17047_17080[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17017 === 10))
{var inst_16961 = (state_17016[11]);var inst_16963 = (state_17016[12]);var inst_16962 = (state_17016[13]);var inst_16964 = (state_17016[14]);var inst_16969 = cljs.core._nth.call(null,inst_16962,inst_16964);var inst_16970 = cljs.core.async.muxch_STAR_.call(null,inst_16969);var inst_16971 = cljs.core.async.close_BANG_.call(null,inst_16970);var inst_16972 = (inst_16964 + 1);var tmp17042 = inst_16961;var tmp17043 = inst_16963;var tmp17044 = inst_16962;var inst_16961__$1 = tmp17042;var inst_16962__$1 = tmp17044;var inst_16963__$1 = tmp17043;var inst_16964__$1 = inst_16972;var state_17016__$1 = (function (){var statearr_17048 = state_17016;(statearr_17048[11] = inst_16961__$1);
(statearr_17048[12] = inst_16963__$1);
(statearr_17048[13] = inst_16962__$1);
(statearr_17048[14] = inst_16964__$1);
(statearr_17048[16] = inst_16971);
return statearr_17048;
})();var statearr_17049_17081 = state_17016__$1;(statearr_17049_17081[2] = null);
(statearr_17049_17081[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17017 === 18))
{var inst_16990 = (state_17016[2]);var state_17016__$1 = state_17016;var statearr_17050_17082 = state_17016__$1;(statearr_17050_17082[2] = inst_16990);
(statearr_17050_17082[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17017 === 8))
{var inst_16963 = (state_17016[12]);var inst_16964 = (state_17016[14]);var inst_16966 = (inst_16964 < inst_16963);var inst_16967 = inst_16966;var state_17016__$1 = state_17016;if(cljs.core.truth_(inst_16967))
{var statearr_17051_17083 = state_17016__$1;(statearr_17051_17083[1] = 10);
} else
{var statearr_17052_17084 = state_17016__$1;(statearr_17052_17084[1] = 11);
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
});})(c__11016__auto___17060,mults,ensure_mult,p))
;return ((function (switch__10952__auto__,c__11016__auto___17060,mults,ensure_mult,p){
return (function() {
var state_machine__10953__auto__ = null;
var state_machine__10953__auto____0 = (function (){var statearr_17056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17056[0] = state_machine__10953__auto__);
(statearr_17056[1] = 1);
return statearr_17056;
});
var state_machine__10953__auto____1 = (function (state_17016){while(true){
var ret_value__10954__auto__ = (function (){try{while(true){
var result__10955__auto__ = switch__10952__auto__.call(null,state_17016);if(cljs.core.keyword_identical_QMARK_.call(null,result__10955__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10955__auto__;
}
break;
}
}catch (e17057){if((e17057 instanceof Object))
{var ex__10956__auto__ = e17057;var statearr_17058_17085 = state_17016;(statearr_17058_17085[5] = ex__10956__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17016);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17057;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10954__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17086 = state_17016;
state_17016 = G__17086;
continue;
}
} else
{return ret_value__10954__auto__;
}
break;
}
});
state_machine__10953__auto__ = function(state_17016){
switch(arguments.length){
case 0:
return state_machine__10953__auto____0.call(this);
case 1:
return state_machine__10953__auto____1.call(this,state_17016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10953__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10953__auto____0;
state_machine__10953__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10953__auto____1;
return state_machine__10953__auto__;
})()
;})(switch__10952__auto__,c__11016__auto___17060,mults,ensure_mult,p))
})();var state__11018__auto__ = (function (){var statearr_17059 = f__11017__auto__.call(null);(statearr_17059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11016__auto___17060);
return statearr_17059;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11018__auto__);
});})(c__11016__auto___17060,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__11016__auto___17223 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11016__auto___17223,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__11017__auto__ = (function (){var switch__10952__auto__ = ((function (c__11016__auto___17223,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17193){var state_val_17194 = (state_17193[1]);if((state_val_17194 === 7))
{var state_17193__$1 = state_17193;var statearr_17195_17224 = state_17193__$1;(statearr_17195_17224[2] = null);
(statearr_17195_17224[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17194 === 1))
{var state_17193__$1 = state_17193;var statearr_17196_17225 = state_17193__$1;(statearr_17196_17225[2] = null);
(statearr_17196_17225[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17194 === 4))
{var inst_17157 = (state_17193[7]);var inst_17159 = (inst_17157 < cnt);var state_17193__$1 = state_17193;if(cljs.core.truth_(inst_17159))
{var statearr_17197_17226 = state_17193__$1;(statearr_17197_17226[1] = 6);
} else
{var statearr_17198_17227 = state_17193__$1;(statearr_17198_17227[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17194 === 15))
{var inst_17189 = (state_17193[2]);var state_17193__$1 = state_17193;var statearr_17199_17228 = state_17193__$1;(statearr_17199_17228[2] = inst_17189);
(statearr_17199_17228[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17194 === 13))
{var inst_17182 = cljs.core.async.close_BANG_.call(null,out);var state_17193__$1 = state_17193;var statearr_17200_17229 = state_17193__$1;(statearr_17200_17229[2] = inst_17182);
(statearr_17200_17229[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17194 === 6))
{var state_17193__$1 = state_17193;var statearr_17201_17230 = state_17193__$1;(statearr_17201_17230[2] = null);
(statearr_17201_17230[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17194 === 3))
{var inst_17191 = (state_17193[2]);var state_17193__$1 = state_17193;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17193__$1,inst_17191);
} else
{if((state_val_17194 === 12))
{var inst_17179 = (state_17193[8]);var inst_17179__$1 = (state_17193[2]);var inst_17180 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17179__$1);var state_17193__$1 = (function (){var statearr_17202 = state_17193;(statearr_17202[8] = inst_17179__$1);
return statearr_17202;
})();if(cljs.core.truth_(inst_17180))
{var statearr_17203_17231 = state_17193__$1;(statearr_17203_17231[1] = 13);
} else
{var statearr_17204_17232 = state_17193__$1;(statearr_17204_17232[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17194 === 2))
{var inst_17156 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_17157 = 0;var state_17193__$1 = (function (){var statearr_17205 = state_17193;(statearr_17205[9] = inst_17156);
(statearr_17205[7] = inst_17157);
return statearr_17205;
})();var statearr_17206_17233 = state_17193__$1;(statearr_17206_17233[2] = null);
(statearr_17206_17233[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17194 === 11))
{var inst_17157 = (state_17193[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17193,10,Object,null,9);var inst_17166 = chs__$1.call(null,inst_17157);var inst_17167 = done.call(null,inst_17157);var inst_17168 = cljs.core.async.take_BANG_.call(null,inst_17166,inst_17167);var state_17193__$1 = state_17193;var statearr_17207_17234 = state_17193__$1;(statearr_17207_17234[2] = inst_17168);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17193__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17194 === 9))
{var inst_17157 = (state_17193[7]);var inst_17170 = (state_17193[2]);var inst_17171 = (inst_17157 + 1);var inst_17157__$1 = inst_17171;var state_17193__$1 = (function (){var statearr_17208 = state_17193;(statearr_17208[7] = inst_17157__$1);
(statearr_17208[10] = inst_17170);
return statearr_17208;
})();var statearr_17209_17235 = state_17193__$1;(statearr_17209_17235[2] = null);
(statearr_17209_17235[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17194 === 5))
{var inst_17177 = (state_17193[2]);var state_17193__$1 = (function (){var statearr_17210 = state_17193;(statearr_17210[11] = inst_17177);
return statearr_17210;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17193__$1,12,dchan);
} else
{if((state_val_17194 === 14))
{var inst_17179 = (state_17193[8]);var inst_17184 = cljs.core.apply.call(null,f,inst_17179);var state_17193__$1 = state_17193;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17193__$1,16,out,inst_17184);
} else
{if((state_val_17194 === 16))
{var inst_17186 = (state_17193[2]);var state_17193__$1 = (function (){var statearr_17211 = state_17193;(statearr_17211[12] = inst_17186);
return statearr_17211;
})();var statearr_17212_17236 = state_17193__$1;(statearr_17212_17236[2] = null);
(statearr_17212_17236[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17194 === 10))
{var inst_17161 = (state_17193[2]);var inst_17162 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_17193__$1 = (function (){var statearr_17213 = state_17193;(statearr_17213[13] = inst_17161);
return statearr_17213;
})();var statearr_17214_17237 = state_17193__$1;(statearr_17214_17237[2] = inst_17162);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17193__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17194 === 8))
{var inst_17175 = (state_17193[2]);var state_17193__$1 = state_17193;var statearr_17215_17238 = state_17193__$1;(statearr_17215_17238[2] = inst_17175);
(statearr_17215_17238[1] = 5);
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
});})(c__11016__auto___17223,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__10952__auto__,c__11016__auto___17223,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__10953__auto__ = null;
var state_machine__10953__auto____0 = (function (){var statearr_17219 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17219[0] = state_machine__10953__auto__);
(statearr_17219[1] = 1);
return statearr_17219;
});
var state_machine__10953__auto____1 = (function (state_17193){while(true){
var ret_value__10954__auto__ = (function (){try{while(true){
var result__10955__auto__ = switch__10952__auto__.call(null,state_17193);if(cljs.core.keyword_identical_QMARK_.call(null,result__10955__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10955__auto__;
}
break;
}
}catch (e17220){if((e17220 instanceof Object))
{var ex__10956__auto__ = e17220;var statearr_17221_17239 = state_17193;(statearr_17221_17239[5] = ex__10956__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17193);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17220;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10954__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17240 = state_17193;
state_17193 = G__17240;
continue;
}
} else
{return ret_value__10954__auto__;
}
break;
}
});
state_machine__10953__auto__ = function(state_17193){
switch(arguments.length){
case 0:
return state_machine__10953__auto____0.call(this);
case 1:
return state_machine__10953__auto____1.call(this,state_17193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10953__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10953__auto____0;
state_machine__10953__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10953__auto____1;
return state_machine__10953__auto__;
})()
;})(switch__10952__auto__,c__11016__auto___17223,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__11018__auto__ = (function (){var statearr_17222 = f__11017__auto__.call(null);(statearr_17222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11016__auto___17223);
return statearr_17222;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11018__auto__);
});})(c__11016__auto___17223,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11016__auto___17348 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11016__auto___17348,out){
return (function (){var f__11017__auto__ = (function (){var switch__10952__auto__ = ((function (c__11016__auto___17348,out){
return (function (state_17324){var state_val_17325 = (state_17324[1]);if((state_val_17325 === 7))
{var inst_17303 = (state_17324[7]);var inst_17304 = (state_17324[8]);var inst_17303__$1 = (state_17324[2]);var inst_17304__$1 = cljs.core.nth.call(null,inst_17303__$1,0,null);var inst_17305 = cljs.core.nth.call(null,inst_17303__$1,1,null);var inst_17306 = (inst_17304__$1 == null);var state_17324__$1 = (function (){var statearr_17326 = state_17324;(statearr_17326[7] = inst_17303__$1);
(statearr_17326[9] = inst_17305);
(statearr_17326[8] = inst_17304__$1);
return statearr_17326;
})();if(cljs.core.truth_(inst_17306))
{var statearr_17327_17349 = state_17324__$1;(statearr_17327_17349[1] = 8);
} else
{var statearr_17328_17350 = state_17324__$1;(statearr_17328_17350[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17325 === 1))
{var inst_17295 = cljs.core.vec.call(null,chs);var inst_17296 = inst_17295;var state_17324__$1 = (function (){var statearr_17329 = state_17324;(statearr_17329[10] = inst_17296);
return statearr_17329;
})();var statearr_17330_17351 = state_17324__$1;(statearr_17330_17351[2] = null);
(statearr_17330_17351[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17325 === 4))
{var inst_17296 = (state_17324[10]);var state_17324__$1 = state_17324;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17324__$1,7,inst_17296);
} else
{if((state_val_17325 === 6))
{var inst_17320 = (state_17324[2]);var state_17324__$1 = state_17324;var statearr_17331_17352 = state_17324__$1;(statearr_17331_17352[2] = inst_17320);
(statearr_17331_17352[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17325 === 3))
{var inst_17322 = (state_17324[2]);var state_17324__$1 = state_17324;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17324__$1,inst_17322);
} else
{if((state_val_17325 === 2))
{var inst_17296 = (state_17324[10]);var inst_17298 = cljs.core.count.call(null,inst_17296);var inst_17299 = (inst_17298 > 0);var state_17324__$1 = state_17324;if(cljs.core.truth_(inst_17299))
{var statearr_17333_17353 = state_17324__$1;(statearr_17333_17353[1] = 4);
} else
{var statearr_17334_17354 = state_17324__$1;(statearr_17334_17354[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17325 === 11))
{var inst_17296 = (state_17324[10]);var inst_17313 = (state_17324[2]);var tmp17332 = inst_17296;var inst_17296__$1 = tmp17332;var state_17324__$1 = (function (){var statearr_17335 = state_17324;(statearr_17335[10] = inst_17296__$1);
(statearr_17335[11] = inst_17313);
return statearr_17335;
})();var statearr_17336_17355 = state_17324__$1;(statearr_17336_17355[2] = null);
(statearr_17336_17355[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17325 === 9))
{var inst_17304 = (state_17324[8]);var state_17324__$1 = state_17324;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17324__$1,11,out,inst_17304);
} else
{if((state_val_17325 === 5))
{var inst_17318 = cljs.core.async.close_BANG_.call(null,out);var state_17324__$1 = state_17324;var statearr_17337_17356 = state_17324__$1;(statearr_17337_17356[2] = inst_17318);
(statearr_17337_17356[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17325 === 10))
{var inst_17316 = (state_17324[2]);var state_17324__$1 = state_17324;var statearr_17338_17357 = state_17324__$1;(statearr_17338_17357[2] = inst_17316);
(statearr_17338_17357[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17325 === 8))
{var inst_17303 = (state_17324[7]);var inst_17305 = (state_17324[9]);var inst_17296 = (state_17324[10]);var inst_17304 = (state_17324[8]);var inst_17308 = (function (){var c = inst_17305;var v = inst_17304;var vec__17301 = inst_17303;var cs = inst_17296;return ((function (c,v,vec__17301,cs,inst_17303,inst_17305,inst_17296,inst_17304,state_val_17325,c__11016__auto___17348,out){
return (function (p1__17241_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__17241_SHARP_);
});
;})(c,v,vec__17301,cs,inst_17303,inst_17305,inst_17296,inst_17304,state_val_17325,c__11016__auto___17348,out))
})();var inst_17309 = cljs.core.filterv.call(null,inst_17308,inst_17296);var inst_17296__$1 = inst_17309;var state_17324__$1 = (function (){var statearr_17339 = state_17324;(statearr_17339[10] = inst_17296__$1);
return statearr_17339;
})();var statearr_17340_17358 = state_17324__$1;(statearr_17340_17358[2] = null);
(statearr_17340_17358[1] = 2);
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
});})(c__11016__auto___17348,out))
;return ((function (switch__10952__auto__,c__11016__auto___17348,out){
return (function() {
var state_machine__10953__auto__ = null;
var state_machine__10953__auto____0 = (function (){var statearr_17344 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17344[0] = state_machine__10953__auto__);
(statearr_17344[1] = 1);
return statearr_17344;
});
var state_machine__10953__auto____1 = (function (state_17324){while(true){
var ret_value__10954__auto__ = (function (){try{while(true){
var result__10955__auto__ = switch__10952__auto__.call(null,state_17324);if(cljs.core.keyword_identical_QMARK_.call(null,result__10955__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10955__auto__;
}
break;
}
}catch (e17345){if((e17345 instanceof Object))
{var ex__10956__auto__ = e17345;var statearr_17346_17359 = state_17324;(statearr_17346_17359[5] = ex__10956__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17324);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17345;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10954__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17360 = state_17324;
state_17324 = G__17360;
continue;
}
} else
{return ret_value__10954__auto__;
}
break;
}
});
state_machine__10953__auto__ = function(state_17324){
switch(arguments.length){
case 0:
return state_machine__10953__auto____0.call(this);
case 1:
return state_machine__10953__auto____1.call(this,state_17324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10953__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10953__auto____0;
state_machine__10953__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10953__auto____1;
return state_machine__10953__auto__;
})()
;})(switch__10952__auto__,c__11016__auto___17348,out))
})();var state__11018__auto__ = (function (){var statearr_17347 = f__11017__auto__.call(null);(statearr_17347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11016__auto___17348);
return statearr_17347;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11018__auto__);
});})(c__11016__auto___17348,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11016__auto___17453 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11016__auto___17453,out){
return (function (){var f__11017__auto__ = (function (){var switch__10952__auto__ = ((function (c__11016__auto___17453,out){
return (function (state_17430){var state_val_17431 = (state_17430[1]);if((state_val_17431 === 7))
{var inst_17412 = (state_17430[7]);var inst_17412__$1 = (state_17430[2]);var inst_17413 = (inst_17412__$1 == null);var inst_17414 = cljs.core.not.call(null,inst_17413);var state_17430__$1 = (function (){var statearr_17432 = state_17430;(statearr_17432[7] = inst_17412__$1);
return statearr_17432;
})();if(inst_17414)
{var statearr_17433_17454 = state_17430__$1;(statearr_17433_17454[1] = 8);
} else
{var statearr_17434_17455 = state_17430__$1;(statearr_17434_17455[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17431 === 1))
{var inst_17407 = 0;var state_17430__$1 = (function (){var statearr_17435 = state_17430;(statearr_17435[8] = inst_17407);
return statearr_17435;
})();var statearr_17436_17456 = state_17430__$1;(statearr_17436_17456[2] = null);
(statearr_17436_17456[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17431 === 4))
{var state_17430__$1 = state_17430;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17430__$1,7,ch);
} else
{if((state_val_17431 === 6))
{var inst_17425 = (state_17430[2]);var state_17430__$1 = state_17430;var statearr_17437_17457 = state_17430__$1;(statearr_17437_17457[2] = inst_17425);
(statearr_17437_17457[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17431 === 3))
{var inst_17427 = (state_17430[2]);var inst_17428 = cljs.core.async.close_BANG_.call(null,out);var state_17430__$1 = (function (){var statearr_17438 = state_17430;(statearr_17438[9] = inst_17427);
return statearr_17438;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17430__$1,inst_17428);
} else
{if((state_val_17431 === 2))
{var inst_17407 = (state_17430[8]);var inst_17409 = (inst_17407 < n);var state_17430__$1 = state_17430;if(cljs.core.truth_(inst_17409))
{var statearr_17439_17458 = state_17430__$1;(statearr_17439_17458[1] = 4);
} else
{var statearr_17440_17459 = state_17430__$1;(statearr_17440_17459[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17431 === 11))
{var inst_17407 = (state_17430[8]);var inst_17417 = (state_17430[2]);var inst_17418 = (inst_17407 + 1);var inst_17407__$1 = inst_17418;var state_17430__$1 = (function (){var statearr_17441 = state_17430;(statearr_17441[8] = inst_17407__$1);
(statearr_17441[10] = inst_17417);
return statearr_17441;
})();var statearr_17442_17460 = state_17430__$1;(statearr_17442_17460[2] = null);
(statearr_17442_17460[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17431 === 9))
{var state_17430__$1 = state_17430;var statearr_17443_17461 = state_17430__$1;(statearr_17443_17461[2] = null);
(statearr_17443_17461[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17431 === 5))
{var state_17430__$1 = state_17430;var statearr_17444_17462 = state_17430__$1;(statearr_17444_17462[2] = null);
(statearr_17444_17462[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17431 === 10))
{var inst_17422 = (state_17430[2]);var state_17430__$1 = state_17430;var statearr_17445_17463 = state_17430__$1;(statearr_17445_17463[2] = inst_17422);
(statearr_17445_17463[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17431 === 8))
{var inst_17412 = (state_17430[7]);var state_17430__$1 = state_17430;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17430__$1,11,out,inst_17412);
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
});})(c__11016__auto___17453,out))
;return ((function (switch__10952__auto__,c__11016__auto___17453,out){
return (function() {
var state_machine__10953__auto__ = null;
var state_machine__10953__auto____0 = (function (){var statearr_17449 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17449[0] = state_machine__10953__auto__);
(statearr_17449[1] = 1);
return statearr_17449;
});
var state_machine__10953__auto____1 = (function (state_17430){while(true){
var ret_value__10954__auto__ = (function (){try{while(true){
var result__10955__auto__ = switch__10952__auto__.call(null,state_17430);if(cljs.core.keyword_identical_QMARK_.call(null,result__10955__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10955__auto__;
}
break;
}
}catch (e17450){if((e17450 instanceof Object))
{var ex__10956__auto__ = e17450;var statearr_17451_17464 = state_17430;(statearr_17451_17464[5] = ex__10956__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17430);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17450;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10954__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17465 = state_17430;
state_17430 = G__17465;
continue;
}
} else
{return ret_value__10954__auto__;
}
break;
}
});
state_machine__10953__auto__ = function(state_17430){
switch(arguments.length){
case 0:
return state_machine__10953__auto____0.call(this);
case 1:
return state_machine__10953__auto____1.call(this,state_17430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10953__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10953__auto____0;
state_machine__10953__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10953__auto____1;
return state_machine__10953__auto__;
})()
;})(switch__10952__auto__,c__11016__auto___17453,out))
})();var state__11018__auto__ = (function (){var statearr_17452 = f__11017__auto__.call(null);(statearr_17452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11016__auto___17453);
return statearr_17452;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11018__auto__);
});})(c__11016__auto___17453,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11016__auto___17562 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11016__auto___17562,out){
return (function (){var f__11017__auto__ = (function (){var switch__10952__auto__ = ((function (c__11016__auto___17562,out){
return (function (state_17537){var state_val_17538 = (state_17537[1]);if((state_val_17538 === 7))
{var inst_17532 = (state_17537[2]);var state_17537__$1 = state_17537;var statearr_17539_17563 = state_17537__$1;(statearr_17539_17563[2] = inst_17532);
(statearr_17539_17563[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17538 === 1))
{var inst_17514 = null;var state_17537__$1 = (function (){var statearr_17540 = state_17537;(statearr_17540[7] = inst_17514);
return statearr_17540;
})();var statearr_17541_17564 = state_17537__$1;(statearr_17541_17564[2] = null);
(statearr_17541_17564[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17538 === 4))
{var inst_17517 = (state_17537[8]);var inst_17517__$1 = (state_17537[2]);var inst_17518 = (inst_17517__$1 == null);var inst_17519 = cljs.core.not.call(null,inst_17518);var state_17537__$1 = (function (){var statearr_17542 = state_17537;(statearr_17542[8] = inst_17517__$1);
return statearr_17542;
})();if(inst_17519)
{var statearr_17543_17565 = state_17537__$1;(statearr_17543_17565[1] = 5);
} else
{var statearr_17544_17566 = state_17537__$1;(statearr_17544_17566[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17538 === 6))
{var state_17537__$1 = state_17537;var statearr_17545_17567 = state_17537__$1;(statearr_17545_17567[2] = null);
(statearr_17545_17567[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17538 === 3))
{var inst_17534 = (state_17537[2]);var inst_17535 = cljs.core.async.close_BANG_.call(null,out);var state_17537__$1 = (function (){var statearr_17546 = state_17537;(statearr_17546[9] = inst_17534);
return statearr_17546;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17537__$1,inst_17535);
} else
{if((state_val_17538 === 2))
{var state_17537__$1 = state_17537;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17537__$1,4,ch);
} else
{if((state_val_17538 === 11))
{var inst_17517 = (state_17537[8]);var inst_17526 = (state_17537[2]);var inst_17514 = inst_17517;var state_17537__$1 = (function (){var statearr_17547 = state_17537;(statearr_17547[7] = inst_17514);
(statearr_17547[10] = inst_17526);
return statearr_17547;
})();var statearr_17548_17568 = state_17537__$1;(statearr_17548_17568[2] = null);
(statearr_17548_17568[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17538 === 9))
{var inst_17517 = (state_17537[8]);var state_17537__$1 = state_17537;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17537__$1,11,out,inst_17517);
} else
{if((state_val_17538 === 5))
{var inst_17514 = (state_17537[7]);var inst_17517 = (state_17537[8]);var inst_17521 = cljs.core._EQ_.call(null,inst_17517,inst_17514);var state_17537__$1 = state_17537;if(inst_17521)
{var statearr_17550_17569 = state_17537__$1;(statearr_17550_17569[1] = 8);
} else
{var statearr_17551_17570 = state_17537__$1;(statearr_17551_17570[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17538 === 10))
{var inst_17529 = (state_17537[2]);var state_17537__$1 = state_17537;var statearr_17552_17571 = state_17537__$1;(statearr_17552_17571[2] = inst_17529);
(statearr_17552_17571[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17538 === 8))
{var inst_17514 = (state_17537[7]);var tmp17549 = inst_17514;var inst_17514__$1 = tmp17549;var state_17537__$1 = (function (){var statearr_17553 = state_17537;(statearr_17553[7] = inst_17514__$1);
return statearr_17553;
})();var statearr_17554_17572 = state_17537__$1;(statearr_17554_17572[2] = null);
(statearr_17554_17572[1] = 2);
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
});})(c__11016__auto___17562,out))
;return ((function (switch__10952__auto__,c__11016__auto___17562,out){
return (function() {
var state_machine__10953__auto__ = null;
var state_machine__10953__auto____0 = (function (){var statearr_17558 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17558[0] = state_machine__10953__auto__);
(statearr_17558[1] = 1);
return statearr_17558;
});
var state_machine__10953__auto____1 = (function (state_17537){while(true){
var ret_value__10954__auto__ = (function (){try{while(true){
var result__10955__auto__ = switch__10952__auto__.call(null,state_17537);if(cljs.core.keyword_identical_QMARK_.call(null,result__10955__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10955__auto__;
}
break;
}
}catch (e17559){if((e17559 instanceof Object))
{var ex__10956__auto__ = e17559;var statearr_17560_17573 = state_17537;(statearr_17560_17573[5] = ex__10956__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17537);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17559;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10954__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17574 = state_17537;
state_17537 = G__17574;
continue;
}
} else
{return ret_value__10954__auto__;
}
break;
}
});
state_machine__10953__auto__ = function(state_17537){
switch(arguments.length){
case 0:
return state_machine__10953__auto____0.call(this);
case 1:
return state_machine__10953__auto____1.call(this,state_17537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10953__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10953__auto____0;
state_machine__10953__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10953__auto____1;
return state_machine__10953__auto__;
})()
;})(switch__10952__auto__,c__11016__auto___17562,out))
})();var state__11018__auto__ = (function (){var statearr_17561 = f__11017__auto__.call(null);(statearr_17561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11016__auto___17562);
return statearr_17561;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11018__auto__);
});})(c__11016__auto___17562,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11016__auto___17709 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11016__auto___17709,out){
return (function (){var f__11017__auto__ = (function (){var switch__10952__auto__ = ((function (c__11016__auto___17709,out){
return (function (state_17679){var state_val_17680 = (state_17679[1]);if((state_val_17680 === 7))
{var inst_17675 = (state_17679[2]);var state_17679__$1 = state_17679;var statearr_17681_17710 = state_17679__$1;(statearr_17681_17710[2] = inst_17675);
(statearr_17681_17710[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17680 === 1))
{var inst_17642 = (new Array(n));var inst_17643 = inst_17642;var inst_17644 = 0;var state_17679__$1 = (function (){var statearr_17682 = state_17679;(statearr_17682[7] = inst_17643);
(statearr_17682[8] = inst_17644);
return statearr_17682;
})();var statearr_17683_17711 = state_17679__$1;(statearr_17683_17711[2] = null);
(statearr_17683_17711[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17680 === 4))
{var inst_17647 = (state_17679[9]);var inst_17647__$1 = (state_17679[2]);var inst_17648 = (inst_17647__$1 == null);var inst_17649 = cljs.core.not.call(null,inst_17648);var state_17679__$1 = (function (){var statearr_17684 = state_17679;(statearr_17684[9] = inst_17647__$1);
return statearr_17684;
})();if(inst_17649)
{var statearr_17685_17712 = state_17679__$1;(statearr_17685_17712[1] = 5);
} else
{var statearr_17686_17713 = state_17679__$1;(statearr_17686_17713[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17680 === 15))
{var inst_17669 = (state_17679[2]);var state_17679__$1 = state_17679;var statearr_17687_17714 = state_17679__$1;(statearr_17687_17714[2] = inst_17669);
(statearr_17687_17714[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17680 === 13))
{var state_17679__$1 = state_17679;var statearr_17688_17715 = state_17679__$1;(statearr_17688_17715[2] = null);
(statearr_17688_17715[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17680 === 6))
{var inst_17644 = (state_17679[8]);var inst_17665 = (inst_17644 > 0);var state_17679__$1 = state_17679;if(cljs.core.truth_(inst_17665))
{var statearr_17689_17716 = state_17679__$1;(statearr_17689_17716[1] = 12);
} else
{var statearr_17690_17717 = state_17679__$1;(statearr_17690_17717[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17680 === 3))
{var inst_17677 = (state_17679[2]);var state_17679__$1 = state_17679;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17679__$1,inst_17677);
} else
{if((state_val_17680 === 12))
{var inst_17643 = (state_17679[7]);var inst_17667 = cljs.core.vec.call(null,inst_17643);var state_17679__$1 = state_17679;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17679__$1,15,out,inst_17667);
} else
{if((state_val_17680 === 2))
{var state_17679__$1 = state_17679;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17679__$1,4,ch);
} else
{if((state_val_17680 === 11))
{var inst_17659 = (state_17679[2]);var inst_17660 = (new Array(n));var inst_17643 = inst_17660;var inst_17644 = 0;var state_17679__$1 = (function (){var statearr_17691 = state_17679;(statearr_17691[7] = inst_17643);
(statearr_17691[10] = inst_17659);
(statearr_17691[8] = inst_17644);
return statearr_17691;
})();var statearr_17692_17718 = state_17679__$1;(statearr_17692_17718[2] = null);
(statearr_17692_17718[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17680 === 9))
{var inst_17643 = (state_17679[7]);var inst_17657 = cljs.core.vec.call(null,inst_17643);var state_17679__$1 = state_17679;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17679__$1,11,out,inst_17657);
} else
{if((state_val_17680 === 5))
{var inst_17643 = (state_17679[7]);var inst_17647 = (state_17679[9]);var inst_17644 = (state_17679[8]);var inst_17652 = (state_17679[11]);var inst_17651 = (inst_17643[inst_17644] = inst_17647);var inst_17652__$1 = (inst_17644 + 1);var inst_17653 = (inst_17652__$1 < n);var state_17679__$1 = (function (){var statearr_17693 = state_17679;(statearr_17693[12] = inst_17651);
(statearr_17693[11] = inst_17652__$1);
return statearr_17693;
})();if(cljs.core.truth_(inst_17653))
{var statearr_17694_17719 = state_17679__$1;(statearr_17694_17719[1] = 8);
} else
{var statearr_17695_17720 = state_17679__$1;(statearr_17695_17720[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17680 === 14))
{var inst_17672 = (state_17679[2]);var inst_17673 = cljs.core.async.close_BANG_.call(null,out);var state_17679__$1 = (function (){var statearr_17697 = state_17679;(statearr_17697[13] = inst_17672);
return statearr_17697;
})();var statearr_17698_17721 = state_17679__$1;(statearr_17698_17721[2] = inst_17673);
(statearr_17698_17721[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17680 === 10))
{var inst_17663 = (state_17679[2]);var state_17679__$1 = state_17679;var statearr_17699_17722 = state_17679__$1;(statearr_17699_17722[2] = inst_17663);
(statearr_17699_17722[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17680 === 8))
{var inst_17643 = (state_17679[7]);var inst_17652 = (state_17679[11]);var tmp17696 = inst_17643;var inst_17643__$1 = tmp17696;var inst_17644 = inst_17652;var state_17679__$1 = (function (){var statearr_17700 = state_17679;(statearr_17700[7] = inst_17643__$1);
(statearr_17700[8] = inst_17644);
return statearr_17700;
})();var statearr_17701_17723 = state_17679__$1;(statearr_17701_17723[2] = null);
(statearr_17701_17723[1] = 2);
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
});})(c__11016__auto___17709,out))
;return ((function (switch__10952__auto__,c__11016__auto___17709,out){
return (function() {
var state_machine__10953__auto__ = null;
var state_machine__10953__auto____0 = (function (){var statearr_17705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17705[0] = state_machine__10953__auto__);
(statearr_17705[1] = 1);
return statearr_17705;
});
var state_machine__10953__auto____1 = (function (state_17679){while(true){
var ret_value__10954__auto__ = (function (){try{while(true){
var result__10955__auto__ = switch__10952__auto__.call(null,state_17679);if(cljs.core.keyword_identical_QMARK_.call(null,result__10955__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10955__auto__;
}
break;
}
}catch (e17706){if((e17706 instanceof Object))
{var ex__10956__auto__ = e17706;var statearr_17707_17724 = state_17679;(statearr_17707_17724[5] = ex__10956__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17679);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17706;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10954__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17725 = state_17679;
state_17679 = G__17725;
continue;
}
} else
{return ret_value__10954__auto__;
}
break;
}
});
state_machine__10953__auto__ = function(state_17679){
switch(arguments.length){
case 0:
return state_machine__10953__auto____0.call(this);
case 1:
return state_machine__10953__auto____1.call(this,state_17679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10953__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10953__auto____0;
state_machine__10953__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10953__auto____1;
return state_machine__10953__auto__;
})()
;})(switch__10952__auto__,c__11016__auto___17709,out))
})();var state__11018__auto__ = (function (){var statearr_17708 = f__11017__auto__.call(null);(statearr_17708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11016__auto___17709);
return statearr_17708;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11018__auto__);
});})(c__11016__auto___17709,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11016__auto___17868 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11016__auto___17868,out){
return (function (){var f__11017__auto__ = (function (){var switch__10952__auto__ = ((function (c__11016__auto___17868,out){
return (function (state_17838){var state_val_17839 = (state_17838[1]);if((state_val_17839 === 7))
{var inst_17834 = (state_17838[2]);var state_17838__$1 = state_17838;var statearr_17840_17869 = state_17838__$1;(statearr_17840_17869[2] = inst_17834);
(statearr_17840_17869[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17839 === 1))
{var inst_17797 = [];var inst_17798 = inst_17797;var inst_17799 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_17838__$1 = (function (){var statearr_17841 = state_17838;(statearr_17841[7] = inst_17799);
(statearr_17841[8] = inst_17798);
return statearr_17841;
})();var statearr_17842_17870 = state_17838__$1;(statearr_17842_17870[2] = null);
(statearr_17842_17870[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17839 === 4))
{var inst_17802 = (state_17838[9]);var inst_17802__$1 = (state_17838[2]);var inst_17803 = (inst_17802__$1 == null);var inst_17804 = cljs.core.not.call(null,inst_17803);var state_17838__$1 = (function (){var statearr_17843 = state_17838;(statearr_17843[9] = inst_17802__$1);
return statearr_17843;
})();if(inst_17804)
{var statearr_17844_17871 = state_17838__$1;(statearr_17844_17871[1] = 5);
} else
{var statearr_17845_17872 = state_17838__$1;(statearr_17845_17872[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17839 === 15))
{var inst_17828 = (state_17838[2]);var state_17838__$1 = state_17838;var statearr_17846_17873 = state_17838__$1;(statearr_17846_17873[2] = inst_17828);
(statearr_17846_17873[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17839 === 13))
{var state_17838__$1 = state_17838;var statearr_17847_17874 = state_17838__$1;(statearr_17847_17874[2] = null);
(statearr_17847_17874[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17839 === 6))
{var inst_17798 = (state_17838[8]);var inst_17823 = inst_17798.length;var inst_17824 = (inst_17823 > 0);var state_17838__$1 = state_17838;if(cljs.core.truth_(inst_17824))
{var statearr_17848_17875 = state_17838__$1;(statearr_17848_17875[1] = 12);
} else
{var statearr_17849_17876 = state_17838__$1;(statearr_17849_17876[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17839 === 3))
{var inst_17836 = (state_17838[2]);var state_17838__$1 = state_17838;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17838__$1,inst_17836);
} else
{if((state_val_17839 === 12))
{var inst_17798 = (state_17838[8]);var inst_17826 = cljs.core.vec.call(null,inst_17798);var state_17838__$1 = state_17838;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17838__$1,15,out,inst_17826);
} else
{if((state_val_17839 === 2))
{var state_17838__$1 = state_17838;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17838__$1,4,ch);
} else
{if((state_val_17839 === 11))
{var inst_17806 = (state_17838[10]);var inst_17802 = (state_17838[9]);var inst_17816 = (state_17838[2]);var inst_17817 = [];var inst_17818 = inst_17817.push(inst_17802);var inst_17798 = inst_17817;var inst_17799 = inst_17806;var state_17838__$1 = (function (){var statearr_17850 = state_17838;(statearr_17850[7] = inst_17799);
(statearr_17850[8] = inst_17798);
(statearr_17850[11] = inst_17816);
(statearr_17850[12] = inst_17818);
return statearr_17850;
})();var statearr_17851_17877 = state_17838__$1;(statearr_17851_17877[2] = null);
(statearr_17851_17877[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17839 === 9))
{var inst_17798 = (state_17838[8]);var inst_17814 = cljs.core.vec.call(null,inst_17798);var state_17838__$1 = state_17838;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17838__$1,11,out,inst_17814);
} else
{if((state_val_17839 === 5))
{var inst_17806 = (state_17838[10]);var inst_17799 = (state_17838[7]);var inst_17802 = (state_17838[9]);var inst_17806__$1 = f.call(null,inst_17802);var inst_17807 = cljs.core._EQ_.call(null,inst_17806__$1,inst_17799);var inst_17808 = cljs.core.keyword_identical_QMARK_.call(null,inst_17799,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_17809 = (inst_17807) || (inst_17808);var state_17838__$1 = (function (){var statearr_17852 = state_17838;(statearr_17852[10] = inst_17806__$1);
return statearr_17852;
})();if(cljs.core.truth_(inst_17809))
{var statearr_17853_17878 = state_17838__$1;(statearr_17853_17878[1] = 8);
} else
{var statearr_17854_17879 = state_17838__$1;(statearr_17854_17879[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17839 === 14))
{var inst_17831 = (state_17838[2]);var inst_17832 = cljs.core.async.close_BANG_.call(null,out);var state_17838__$1 = (function (){var statearr_17856 = state_17838;(statearr_17856[13] = inst_17831);
return statearr_17856;
})();var statearr_17857_17880 = state_17838__$1;(statearr_17857_17880[2] = inst_17832);
(statearr_17857_17880[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17839 === 10))
{var inst_17821 = (state_17838[2]);var state_17838__$1 = state_17838;var statearr_17858_17881 = state_17838__$1;(statearr_17858_17881[2] = inst_17821);
(statearr_17858_17881[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17839 === 8))
{var inst_17806 = (state_17838[10]);var inst_17802 = (state_17838[9]);var inst_17798 = (state_17838[8]);var inst_17811 = inst_17798.push(inst_17802);var tmp17855 = inst_17798;var inst_17798__$1 = tmp17855;var inst_17799 = inst_17806;var state_17838__$1 = (function (){var statearr_17859 = state_17838;(statearr_17859[7] = inst_17799);
(statearr_17859[14] = inst_17811);
(statearr_17859[8] = inst_17798__$1);
return statearr_17859;
})();var statearr_17860_17882 = state_17838__$1;(statearr_17860_17882[2] = null);
(statearr_17860_17882[1] = 2);
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
});})(c__11016__auto___17868,out))
;return ((function (switch__10952__auto__,c__11016__auto___17868,out){
return (function() {
var state_machine__10953__auto__ = null;
var state_machine__10953__auto____0 = (function (){var statearr_17864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17864[0] = state_machine__10953__auto__);
(statearr_17864[1] = 1);
return statearr_17864;
});
var state_machine__10953__auto____1 = (function (state_17838){while(true){
var ret_value__10954__auto__ = (function (){try{while(true){
var result__10955__auto__ = switch__10952__auto__.call(null,state_17838);if(cljs.core.keyword_identical_QMARK_.call(null,result__10955__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10955__auto__;
}
break;
}
}catch (e17865){if((e17865 instanceof Object))
{var ex__10956__auto__ = e17865;var statearr_17866_17883 = state_17838;(statearr_17866_17883[5] = ex__10956__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17838);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17865;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10954__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17884 = state_17838;
state_17838 = G__17884;
continue;
}
} else
{return ret_value__10954__auto__;
}
break;
}
});
state_machine__10953__auto__ = function(state_17838){
switch(arguments.length){
case 0:
return state_machine__10953__auto____0.call(this);
case 1:
return state_machine__10953__auto____1.call(this,state_17838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10953__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10953__auto____0;
state_machine__10953__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10953__auto____1;
return state_machine__10953__auto__;
})()
;})(switch__10952__auto__,c__11016__auto___17868,out))
})();var state__11018__auto__ = (function (){var statearr_17867 = f__11017__auto__.call(null);(statearr_17867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11016__auto___17868);
return statearr_17867;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11018__auto__);
});})(c__11016__auto___17868,out))
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
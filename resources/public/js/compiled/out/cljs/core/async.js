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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t24335 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24335 = (function (f,fn_handler,meta24336){
this.f = f;
this.fn_handler = fn_handler;
this.meta24336 = meta24336;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24335.cljs$lang$type = true;
cljs.core.async.t24335.cljs$lang$ctorStr = "cljs.core.async/t24335";
cljs.core.async.t24335.cljs$lang$ctorPrWriter = (function (this__8451__auto__,writer__8452__auto__,opt__8453__auto__){return cljs.core._write.call(null,writer__8452__auto__,"cljs.core.async/t24335");
});
cljs.core.async.t24335.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24335.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t24335.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t24335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24337){var self__ = this;
var _24337__$1 = this;return self__.meta24336;
});
cljs.core.async.t24335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24337,meta24336__$1){var self__ = this;
var _24337__$1 = this;return (new cljs.core.async.t24335(self__.f,self__.fn_handler,meta24336__$1));
});
cljs.core.async.__GT_t24335 = (function __GT_t24335(f__$1,fn_handler__$1,meta24336){return (new cljs.core.async.t24335(f__$1,fn_handler__$1,meta24336));
});
}
return (new cljs.core.async.t24335(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__24339 = buff;if(G__24339)
{var bit__8534__auto__ = null;if(cljs.core.truth_((function (){var or__7884__auto__ = bit__8534__auto__;if(cljs.core.truth_(or__7884__auto__))
{return or__7884__auto__;
} else
{return G__24339.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__24339.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24339);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24339);
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
{var val_24340 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_24340);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_24340,ret){
return (function (){return fn1.call(null,val_24340);
});})(val_24340,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8732__auto___24341 = n;var x_24342 = 0;while(true){
if((x_24342 < n__8732__auto___24341))
{(a[x_24342] = 0);
{
var G__24343 = (x_24342 + 1);
x_24342 = G__24343;
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
var G__24344 = (i + 1);
i = G__24344;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t24348 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24348 = (function (flag,alt_flag,meta24349){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24349 = meta24349;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24348.cljs$lang$type = true;
cljs.core.async.t24348.cljs$lang$ctorStr = "cljs.core.async/t24348";
cljs.core.async.t24348.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8451__auto__,writer__8452__auto__,opt__8453__auto__){return cljs.core._write.call(null,writer__8452__auto__,"cljs.core.async/t24348");
});})(flag))
;
cljs.core.async.t24348.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24348.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t24348.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t24348.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24350){var self__ = this;
var _24350__$1 = this;return self__.meta24349;
});})(flag))
;
cljs.core.async.t24348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24350,meta24349__$1){var self__ = this;
var _24350__$1 = this;return (new cljs.core.async.t24348(self__.flag,self__.alt_flag,meta24349__$1));
});})(flag))
;
cljs.core.async.__GT_t24348 = ((function (flag){
return (function __GT_t24348(flag__$1,alt_flag__$1,meta24349){return (new cljs.core.async.t24348(flag__$1,alt_flag__$1,meta24349));
});})(flag))
;
}
return (new cljs.core.async.t24348(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24354 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24354 = (function (cb,flag,alt_handler,meta24355){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24355 = meta24355;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24354.cljs$lang$type = true;
cljs.core.async.t24354.cljs$lang$ctorStr = "cljs.core.async/t24354";
cljs.core.async.t24354.cljs$lang$ctorPrWriter = (function (this__8451__auto__,writer__8452__auto__,opt__8453__auto__){return cljs.core._write.call(null,writer__8452__auto__,"cljs.core.async/t24354");
});
cljs.core.async.t24354.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24354.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t24354.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t24354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24356){var self__ = this;
var _24356__$1 = this;return self__.meta24355;
});
cljs.core.async.t24354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24356,meta24355__$1){var self__ = this;
var _24356__$1 = this;return (new cljs.core.async.t24354(self__.cb,self__.flag,self__.alt_handler,meta24355__$1));
});
cljs.core.async.__GT_t24354 = (function __GT_t24354(cb__$1,flag__$1,alt_handler__$1,meta24355){return (new cljs.core.async.t24354(cb__$1,flag__$1,alt_handler__$1,meta24355));
});
}
return (new cljs.core.async.t24354(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24357_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24357_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24358_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24358_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7884__auto__ = wport;if(cljs.core.truth_(or__7884__auto__))
{return or__7884__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__24359 = (i + 1);
i = G__24359;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7884__auto__ = ret;if(cljs.core.truth_(or__7884__auto__))
{return or__7884__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__7872__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7872__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7872__auto__;
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
var alts_BANG___delegate = function (ports,p__24360){var map__24362 = p__24360;var map__24362__$1 = ((cljs.core.seq_QMARK_.call(null,map__24362))?cljs.core.apply.call(null,cljs.core.hash_map,map__24362):map__24362);var opts = map__24362__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__24360 = null;if (arguments.length > 1) {
  p__24360 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24360);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24363){
var ports = cljs.core.first(arglist__24363);
var p__24360 = cljs.core.rest(arglist__24363);
return alts_BANG___delegate(ports,p__24360);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t24371 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24371 = (function (ch,f,map_LT_,meta24372){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24372 = meta24372;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24371.cljs$lang$type = true;
cljs.core.async.t24371.cljs$lang$ctorStr = "cljs.core.async/t24371";
cljs.core.async.t24371.cljs$lang$ctorPrWriter = (function (this__8451__auto__,writer__8452__auto__,opt__8453__auto__){return cljs.core._write.call(null,writer__8452__auto__,"cljs.core.async/t24371");
});
cljs.core.async.t24371.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24371.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t24371.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24371.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t24374 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24374 = (function (fn1,_,meta24372,ch,f,map_LT_,meta24375){
this.fn1 = fn1;
this._ = _;
this.meta24372 = meta24372;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24375 = meta24375;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24374.cljs$lang$type = true;
cljs.core.async.t24374.cljs$lang$ctorStr = "cljs.core.async/t24374";
cljs.core.async.t24374.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8451__auto__,writer__8452__auto__,opt__8453__auto__){return cljs.core._write.call(null,writer__8452__auto__,"cljs.core.async/t24374");
});})(___$1))
;
cljs.core.async.t24374.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24374.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t24374.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t24374.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__24364_SHARP_){return f1.call(null,(((p1__24364_SHARP_ == null))?null:self__.f.call(null,p1__24364_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t24374.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24376){var self__ = this;
var _24376__$1 = this;return self__.meta24375;
});})(___$1))
;
cljs.core.async.t24374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24376,meta24375__$1){var self__ = this;
var _24376__$1 = this;return (new cljs.core.async.t24374(self__.fn1,self__._,self__.meta24372,self__.ch,self__.f,self__.map_LT_,meta24375__$1));
});})(___$1))
;
cljs.core.async.__GT_t24374 = ((function (___$1){
return (function __GT_t24374(fn1__$1,___$2,meta24372__$1,ch__$2,f__$2,map_LT___$2,meta24375){return (new cljs.core.async.t24374(fn1__$1,___$2,meta24372__$1,ch__$2,f__$2,map_LT___$2,meta24375));
});})(___$1))
;
}
return (new cljs.core.async.t24374(fn1,___$1,self__.meta24372,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7872__auto__ = ret;if(cljs.core.truth_(and__7872__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7872__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t24371.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24371.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t24371.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t24371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24373){var self__ = this;
var _24373__$1 = this;return self__.meta24372;
});
cljs.core.async.t24371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24373,meta24372__$1){var self__ = this;
var _24373__$1 = this;return (new cljs.core.async.t24371(self__.ch,self__.f,self__.map_LT_,meta24372__$1));
});
cljs.core.async.__GT_t24371 = (function __GT_t24371(ch__$1,f__$1,map_LT___$1,meta24372){return (new cljs.core.async.t24371(ch__$1,f__$1,map_LT___$1,meta24372));
});
}
return (new cljs.core.async.t24371(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t24380 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24380 = (function (ch,f,map_GT_,meta24381){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta24381 = meta24381;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24380.cljs$lang$type = true;
cljs.core.async.t24380.cljs$lang$ctorStr = "cljs.core.async/t24380";
cljs.core.async.t24380.cljs$lang$ctorPrWriter = (function (this__8451__auto__,writer__8452__auto__,opt__8453__auto__){return cljs.core._write.call(null,writer__8452__auto__,"cljs.core.async/t24380");
});
cljs.core.async.t24380.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24380.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t24380.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24380.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t24380.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24380.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t24380.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24382){var self__ = this;
var _24382__$1 = this;return self__.meta24381;
});
cljs.core.async.t24380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24382,meta24381__$1){var self__ = this;
var _24382__$1 = this;return (new cljs.core.async.t24380(self__.ch,self__.f,self__.map_GT_,meta24381__$1));
});
cljs.core.async.__GT_t24380 = (function __GT_t24380(ch__$1,f__$1,map_GT___$1,meta24381){return (new cljs.core.async.t24380(ch__$1,f__$1,map_GT___$1,meta24381));
});
}
return (new cljs.core.async.t24380(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t24386 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24386 = (function (ch,p,filter_GT_,meta24387){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta24387 = meta24387;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24386.cljs$lang$type = true;
cljs.core.async.t24386.cljs$lang$ctorStr = "cljs.core.async/t24386";
cljs.core.async.t24386.cljs$lang$ctorPrWriter = (function (this__8451__auto__,writer__8452__auto__,opt__8453__auto__){return cljs.core._write.call(null,writer__8452__auto__,"cljs.core.async/t24386");
});
cljs.core.async.t24386.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24386.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t24386.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24386.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t24386.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24386.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t24386.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t24386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24388){var self__ = this;
var _24388__$1 = this;return self__.meta24387;
});
cljs.core.async.t24386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24388,meta24387__$1){var self__ = this;
var _24388__$1 = this;return (new cljs.core.async.t24386(self__.ch,self__.p,self__.filter_GT_,meta24387__$1));
});
cljs.core.async.__GT_t24386 = (function __GT_t24386(ch__$1,p__$1,filter_GT___$1,meta24387){return (new cljs.core.async.t24386(ch__$1,p__$1,filter_GT___$1,meta24387));
});
}
return (new cljs.core.async.t24386(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11010__auto___24471 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11010__auto___24471,out){
return (function (){var f__11011__auto__ = (function (){var switch__10946__auto__ = ((function (c__11010__auto___24471,out){
return (function (state_24450){var state_val_24451 = (state_24450[1]);if((state_val_24451 === 7))
{var inst_24446 = (state_24450[2]);var state_24450__$1 = state_24450;var statearr_24452_24472 = state_24450__$1;(statearr_24452_24472[2] = inst_24446);
(statearr_24452_24472[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24451 === 1))
{var state_24450__$1 = state_24450;var statearr_24453_24473 = state_24450__$1;(statearr_24453_24473[2] = null);
(statearr_24453_24473[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24451 === 4))
{var inst_24432 = (state_24450[7]);var inst_24432__$1 = (state_24450[2]);var inst_24433 = (inst_24432__$1 == null);var state_24450__$1 = (function (){var statearr_24454 = state_24450;(statearr_24454[7] = inst_24432__$1);
return statearr_24454;
})();if(cljs.core.truth_(inst_24433))
{var statearr_24455_24474 = state_24450__$1;(statearr_24455_24474[1] = 5);
} else
{var statearr_24456_24475 = state_24450__$1;(statearr_24456_24475[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24451 === 6))
{var inst_24432 = (state_24450[7]);var inst_24437 = p.call(null,inst_24432);var state_24450__$1 = state_24450;if(cljs.core.truth_(inst_24437))
{var statearr_24457_24476 = state_24450__$1;(statearr_24457_24476[1] = 8);
} else
{var statearr_24458_24477 = state_24450__$1;(statearr_24458_24477[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24451 === 3))
{var inst_24448 = (state_24450[2]);var state_24450__$1 = state_24450;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24450__$1,inst_24448);
} else
{if((state_val_24451 === 2))
{var state_24450__$1 = state_24450;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24450__$1,4,ch);
} else
{if((state_val_24451 === 11))
{var inst_24440 = (state_24450[2]);var state_24450__$1 = state_24450;var statearr_24459_24478 = state_24450__$1;(statearr_24459_24478[2] = inst_24440);
(statearr_24459_24478[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24451 === 9))
{var state_24450__$1 = state_24450;var statearr_24460_24479 = state_24450__$1;(statearr_24460_24479[2] = null);
(statearr_24460_24479[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24451 === 5))
{var inst_24435 = cljs.core.async.close_BANG_.call(null,out);var state_24450__$1 = state_24450;var statearr_24461_24480 = state_24450__$1;(statearr_24461_24480[2] = inst_24435);
(statearr_24461_24480[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24451 === 10))
{var inst_24443 = (state_24450[2]);var state_24450__$1 = (function (){var statearr_24462 = state_24450;(statearr_24462[8] = inst_24443);
return statearr_24462;
})();var statearr_24463_24481 = state_24450__$1;(statearr_24463_24481[2] = null);
(statearr_24463_24481[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24451 === 8))
{var inst_24432 = (state_24450[7]);var state_24450__$1 = state_24450;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24450__$1,11,out,inst_24432);
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
});})(c__11010__auto___24471,out))
;return ((function (switch__10946__auto__,c__11010__auto___24471,out){
return (function() {
var state_machine__10947__auto__ = null;
var state_machine__10947__auto____0 = (function (){var statearr_24467 = [null,null,null,null,null,null,null,null,null];(statearr_24467[0] = state_machine__10947__auto__);
(statearr_24467[1] = 1);
return statearr_24467;
});
var state_machine__10947__auto____1 = (function (state_24450){while(true){
var ret_value__10948__auto__ = (function (){try{while(true){
var result__10949__auto__ = switch__10946__auto__.call(null,state_24450);if(cljs.core.keyword_identical_QMARK_.call(null,result__10949__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10949__auto__;
}
break;
}
}catch (e24468){if((e24468 instanceof Object))
{var ex__10950__auto__ = e24468;var statearr_24469_24482 = state_24450;(statearr_24469_24482[5] = ex__10950__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24450);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24468;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10948__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24483 = state_24450;
state_24450 = G__24483;
continue;
}
} else
{return ret_value__10948__auto__;
}
break;
}
});
state_machine__10947__auto__ = function(state_24450){
switch(arguments.length){
case 0:
return state_machine__10947__auto____0.call(this);
case 1:
return state_machine__10947__auto____1.call(this,state_24450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10947__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10947__auto____0;
state_machine__10947__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10947__auto____1;
return state_machine__10947__auto__;
})()
;})(switch__10946__auto__,c__11010__auto___24471,out))
})();var state__11012__auto__ = (function (){var statearr_24470 = f__11011__auto__.call(null);(statearr_24470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11010__auto___24471);
return statearr_24470;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11012__auto__);
});})(c__11010__auto___24471,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__11010__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11010__auto__){
return (function (){var f__11011__auto__ = (function (){var switch__10946__auto__ = ((function (c__11010__auto__){
return (function (state_24649){var state_val_24650 = (state_24649[1]);if((state_val_24650 === 7))
{var inst_24645 = (state_24649[2]);var state_24649__$1 = state_24649;var statearr_24651_24692 = state_24649__$1;(statearr_24651_24692[2] = inst_24645);
(statearr_24651_24692[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24650 === 20))
{var inst_24615 = (state_24649[7]);var inst_24626 = (state_24649[2]);var inst_24627 = cljs.core.next.call(null,inst_24615);var inst_24601 = inst_24627;var inst_24602 = null;var inst_24603 = 0;var inst_24604 = 0;var state_24649__$1 = (function (){var statearr_24652 = state_24649;(statearr_24652[8] = inst_24601);
(statearr_24652[9] = inst_24626);
(statearr_24652[10] = inst_24602);
(statearr_24652[11] = inst_24604);
(statearr_24652[12] = inst_24603);
return statearr_24652;
})();var statearr_24653_24693 = state_24649__$1;(statearr_24653_24693[2] = null);
(statearr_24653_24693[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24650 === 1))
{var state_24649__$1 = state_24649;var statearr_24654_24694 = state_24649__$1;(statearr_24654_24694[2] = null);
(statearr_24654_24694[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24650 === 4))
{var inst_24590 = (state_24649[13]);var inst_24590__$1 = (state_24649[2]);var inst_24591 = (inst_24590__$1 == null);var state_24649__$1 = (function (){var statearr_24655 = state_24649;(statearr_24655[13] = inst_24590__$1);
return statearr_24655;
})();if(cljs.core.truth_(inst_24591))
{var statearr_24656_24695 = state_24649__$1;(statearr_24656_24695[1] = 5);
} else
{var statearr_24657_24696 = state_24649__$1;(statearr_24657_24696[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24650 === 15))
{var state_24649__$1 = state_24649;var statearr_24661_24697 = state_24649__$1;(statearr_24661_24697[2] = null);
(statearr_24661_24697[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24650 === 21))
{var state_24649__$1 = state_24649;var statearr_24662_24698 = state_24649__$1;(statearr_24662_24698[2] = null);
(statearr_24662_24698[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24650 === 13))
{var inst_24601 = (state_24649[8]);var inst_24602 = (state_24649[10]);var inst_24604 = (state_24649[11]);var inst_24603 = (state_24649[12]);var inst_24611 = (state_24649[2]);var inst_24612 = (inst_24604 + 1);var tmp24658 = inst_24601;var tmp24659 = inst_24602;var tmp24660 = inst_24603;var inst_24601__$1 = tmp24658;var inst_24602__$1 = tmp24659;var inst_24603__$1 = tmp24660;var inst_24604__$1 = inst_24612;var state_24649__$1 = (function (){var statearr_24663 = state_24649;(statearr_24663[8] = inst_24601__$1);
(statearr_24663[14] = inst_24611);
(statearr_24663[10] = inst_24602__$1);
(statearr_24663[11] = inst_24604__$1);
(statearr_24663[12] = inst_24603__$1);
return statearr_24663;
})();var statearr_24664_24699 = state_24649__$1;(statearr_24664_24699[2] = null);
(statearr_24664_24699[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24650 === 22))
{var state_24649__$1 = state_24649;var statearr_24665_24700 = state_24649__$1;(statearr_24665_24700[2] = null);
(statearr_24665_24700[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24650 === 6))
{var inst_24590 = (state_24649[13]);var inst_24599 = f.call(null,inst_24590);var inst_24600 = cljs.core.seq.call(null,inst_24599);var inst_24601 = inst_24600;var inst_24602 = null;var inst_24603 = 0;var inst_24604 = 0;var state_24649__$1 = (function (){var statearr_24666 = state_24649;(statearr_24666[8] = inst_24601);
(statearr_24666[10] = inst_24602);
(statearr_24666[11] = inst_24604);
(statearr_24666[12] = inst_24603);
return statearr_24666;
})();var statearr_24667_24701 = state_24649__$1;(statearr_24667_24701[2] = null);
(statearr_24667_24701[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24650 === 17))
{var inst_24615 = (state_24649[7]);var inst_24619 = cljs.core.chunk_first.call(null,inst_24615);var inst_24620 = cljs.core.chunk_rest.call(null,inst_24615);var inst_24621 = cljs.core.count.call(null,inst_24619);var inst_24601 = inst_24620;var inst_24602 = inst_24619;var inst_24603 = inst_24621;var inst_24604 = 0;var state_24649__$1 = (function (){var statearr_24668 = state_24649;(statearr_24668[8] = inst_24601);
(statearr_24668[10] = inst_24602);
(statearr_24668[11] = inst_24604);
(statearr_24668[12] = inst_24603);
return statearr_24668;
})();var statearr_24669_24702 = state_24649__$1;(statearr_24669_24702[2] = null);
(statearr_24669_24702[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24650 === 3))
{var inst_24647 = (state_24649[2]);var state_24649__$1 = state_24649;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24649__$1,inst_24647);
} else
{if((state_val_24650 === 12))
{var inst_24635 = (state_24649[2]);var state_24649__$1 = state_24649;var statearr_24670_24703 = state_24649__$1;(statearr_24670_24703[2] = inst_24635);
(statearr_24670_24703[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24650 === 2))
{var state_24649__$1 = state_24649;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24649__$1,4,in$);
} else
{if((state_val_24650 === 23))
{var inst_24643 = (state_24649[2]);var state_24649__$1 = state_24649;var statearr_24671_24704 = state_24649__$1;(statearr_24671_24704[2] = inst_24643);
(statearr_24671_24704[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24650 === 19))
{var inst_24630 = (state_24649[2]);var state_24649__$1 = state_24649;var statearr_24672_24705 = state_24649__$1;(statearr_24672_24705[2] = inst_24630);
(statearr_24672_24705[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24650 === 11))
{var inst_24615 = (state_24649[7]);var inst_24601 = (state_24649[8]);var inst_24615__$1 = cljs.core.seq.call(null,inst_24601);var state_24649__$1 = (function (){var statearr_24673 = state_24649;(statearr_24673[7] = inst_24615__$1);
return statearr_24673;
})();if(inst_24615__$1)
{var statearr_24674_24706 = state_24649__$1;(statearr_24674_24706[1] = 14);
} else
{var statearr_24675_24707 = state_24649__$1;(statearr_24675_24707[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24650 === 9))
{var inst_24637 = (state_24649[2]);var inst_24638 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_24649__$1 = (function (){var statearr_24676 = state_24649;(statearr_24676[15] = inst_24637);
return statearr_24676;
})();if(cljs.core.truth_(inst_24638))
{var statearr_24677_24708 = state_24649__$1;(statearr_24677_24708[1] = 21);
} else
{var statearr_24678_24709 = state_24649__$1;(statearr_24678_24709[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24650 === 5))
{var inst_24593 = cljs.core.async.close_BANG_.call(null,out);var state_24649__$1 = state_24649;var statearr_24679_24710 = state_24649__$1;(statearr_24679_24710[2] = inst_24593);
(statearr_24679_24710[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24650 === 14))
{var inst_24615 = (state_24649[7]);var inst_24617 = cljs.core.chunked_seq_QMARK_.call(null,inst_24615);var state_24649__$1 = state_24649;if(inst_24617)
{var statearr_24680_24711 = state_24649__$1;(statearr_24680_24711[1] = 17);
} else
{var statearr_24681_24712 = state_24649__$1;(statearr_24681_24712[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24650 === 16))
{var inst_24633 = (state_24649[2]);var state_24649__$1 = state_24649;var statearr_24682_24713 = state_24649__$1;(statearr_24682_24713[2] = inst_24633);
(statearr_24682_24713[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24650 === 10))
{var inst_24602 = (state_24649[10]);var inst_24604 = (state_24649[11]);var inst_24609 = cljs.core._nth.call(null,inst_24602,inst_24604);var state_24649__$1 = state_24649;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24649__$1,13,out,inst_24609);
} else
{if((state_val_24650 === 18))
{var inst_24615 = (state_24649[7]);var inst_24624 = cljs.core.first.call(null,inst_24615);var state_24649__$1 = state_24649;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24649__$1,20,out,inst_24624);
} else
{if((state_val_24650 === 8))
{var inst_24604 = (state_24649[11]);var inst_24603 = (state_24649[12]);var inst_24606 = (inst_24604 < inst_24603);var inst_24607 = inst_24606;var state_24649__$1 = state_24649;if(cljs.core.truth_(inst_24607))
{var statearr_24683_24714 = state_24649__$1;(statearr_24683_24714[1] = 10);
} else
{var statearr_24684_24715 = state_24649__$1;(statearr_24684_24715[1] = 11);
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
});})(c__11010__auto__))
;return ((function (switch__10946__auto__,c__11010__auto__){
return (function() {
var state_machine__10947__auto__ = null;
var state_machine__10947__auto____0 = (function (){var statearr_24688 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24688[0] = state_machine__10947__auto__);
(statearr_24688[1] = 1);
return statearr_24688;
});
var state_machine__10947__auto____1 = (function (state_24649){while(true){
var ret_value__10948__auto__ = (function (){try{while(true){
var result__10949__auto__ = switch__10946__auto__.call(null,state_24649);if(cljs.core.keyword_identical_QMARK_.call(null,result__10949__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10949__auto__;
}
break;
}
}catch (e24689){if((e24689 instanceof Object))
{var ex__10950__auto__ = e24689;var statearr_24690_24716 = state_24649;(statearr_24690_24716[5] = ex__10950__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24649);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24689;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10948__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24717 = state_24649;
state_24649 = G__24717;
continue;
}
} else
{return ret_value__10948__auto__;
}
break;
}
});
state_machine__10947__auto__ = function(state_24649){
switch(arguments.length){
case 0:
return state_machine__10947__auto____0.call(this);
case 1:
return state_machine__10947__auto____1.call(this,state_24649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10947__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10947__auto____0;
state_machine__10947__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10947__auto____1;
return state_machine__10947__auto__;
})()
;})(switch__10946__auto__,c__11010__auto__))
})();var state__11012__auto__ = (function (){var statearr_24691 = f__11011__auto__.call(null);(statearr_24691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11010__auto__);
return statearr_24691;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11012__auto__);
});})(c__11010__auto__))
);
return c__11010__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__11010__auto___24812 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11010__auto___24812){
return (function (){var f__11011__auto__ = (function (){var switch__10946__auto__ = ((function (c__11010__auto___24812){
return (function (state_24788){var state_val_24789 = (state_24788[1]);if((state_val_24789 === 7))
{var inst_24784 = (state_24788[2]);var state_24788__$1 = state_24788;var statearr_24790_24813 = state_24788__$1;(statearr_24790_24813[2] = inst_24784);
(statearr_24790_24813[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24789 === 1))
{var state_24788__$1 = state_24788;var statearr_24791_24814 = state_24788__$1;(statearr_24791_24814[2] = null);
(statearr_24791_24814[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24789 === 4))
{var inst_24767 = (state_24788[7]);var inst_24767__$1 = (state_24788[2]);var inst_24768 = (inst_24767__$1 == null);var state_24788__$1 = (function (){var statearr_24792 = state_24788;(statearr_24792[7] = inst_24767__$1);
return statearr_24792;
})();if(cljs.core.truth_(inst_24768))
{var statearr_24793_24815 = state_24788__$1;(statearr_24793_24815[1] = 5);
} else
{var statearr_24794_24816 = state_24788__$1;(statearr_24794_24816[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24789 === 13))
{var state_24788__$1 = state_24788;var statearr_24795_24817 = state_24788__$1;(statearr_24795_24817[2] = null);
(statearr_24795_24817[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24789 === 6))
{var inst_24767 = (state_24788[7]);var state_24788__$1 = state_24788;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24788__$1,11,to,inst_24767);
} else
{if((state_val_24789 === 3))
{var inst_24786 = (state_24788[2]);var state_24788__$1 = state_24788;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24788__$1,inst_24786);
} else
{if((state_val_24789 === 12))
{var state_24788__$1 = state_24788;var statearr_24796_24818 = state_24788__$1;(statearr_24796_24818[2] = null);
(statearr_24796_24818[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24789 === 2))
{var state_24788__$1 = state_24788;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24788__$1,4,from);
} else
{if((state_val_24789 === 11))
{var inst_24777 = (state_24788[2]);var state_24788__$1 = state_24788;if(cljs.core.truth_(inst_24777))
{var statearr_24797_24819 = state_24788__$1;(statearr_24797_24819[1] = 12);
} else
{var statearr_24798_24820 = state_24788__$1;(statearr_24798_24820[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24789 === 9))
{var state_24788__$1 = state_24788;var statearr_24799_24821 = state_24788__$1;(statearr_24799_24821[2] = null);
(statearr_24799_24821[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24789 === 5))
{var state_24788__$1 = state_24788;if(cljs.core.truth_(close_QMARK_))
{var statearr_24800_24822 = state_24788__$1;(statearr_24800_24822[1] = 8);
} else
{var statearr_24801_24823 = state_24788__$1;(statearr_24801_24823[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24789 === 14))
{var inst_24782 = (state_24788[2]);var state_24788__$1 = state_24788;var statearr_24802_24824 = state_24788__$1;(statearr_24802_24824[2] = inst_24782);
(statearr_24802_24824[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24789 === 10))
{var inst_24774 = (state_24788[2]);var state_24788__$1 = state_24788;var statearr_24803_24825 = state_24788__$1;(statearr_24803_24825[2] = inst_24774);
(statearr_24803_24825[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24789 === 8))
{var inst_24771 = cljs.core.async.close_BANG_.call(null,to);var state_24788__$1 = state_24788;var statearr_24804_24826 = state_24788__$1;(statearr_24804_24826[2] = inst_24771);
(statearr_24804_24826[1] = 10);
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
});})(c__11010__auto___24812))
;return ((function (switch__10946__auto__,c__11010__auto___24812){
return (function() {
var state_machine__10947__auto__ = null;
var state_machine__10947__auto____0 = (function (){var statearr_24808 = [null,null,null,null,null,null,null,null];(statearr_24808[0] = state_machine__10947__auto__);
(statearr_24808[1] = 1);
return statearr_24808;
});
var state_machine__10947__auto____1 = (function (state_24788){while(true){
var ret_value__10948__auto__ = (function (){try{while(true){
var result__10949__auto__ = switch__10946__auto__.call(null,state_24788);if(cljs.core.keyword_identical_QMARK_.call(null,result__10949__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10949__auto__;
}
break;
}
}catch (e24809){if((e24809 instanceof Object))
{var ex__10950__auto__ = e24809;var statearr_24810_24827 = state_24788;(statearr_24810_24827[5] = ex__10950__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24788);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24809;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10948__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24828 = state_24788;
state_24788 = G__24828;
continue;
}
} else
{return ret_value__10948__auto__;
}
break;
}
});
state_machine__10947__auto__ = function(state_24788){
switch(arguments.length){
case 0:
return state_machine__10947__auto____0.call(this);
case 1:
return state_machine__10947__auto____1.call(this,state_24788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10947__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10947__auto____0;
state_machine__10947__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10947__auto____1;
return state_machine__10947__auto__;
})()
;})(switch__10946__auto__,c__11010__auto___24812))
})();var state__11012__auto__ = (function (){var statearr_24811 = f__11011__auto__.call(null);(statearr_24811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11010__auto___24812);
return statearr_24811;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11012__auto__);
});})(c__11010__auto___24812))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__11010__auto___24929 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11010__auto___24929,tc,fc){
return (function (){var f__11011__auto__ = (function (){var switch__10946__auto__ = ((function (c__11010__auto___24929,tc,fc){
return (function (state_24904){var state_val_24905 = (state_24904[1]);if((state_val_24905 === 7))
{var inst_24900 = (state_24904[2]);var state_24904__$1 = state_24904;var statearr_24906_24930 = state_24904__$1;(statearr_24906_24930[2] = inst_24900);
(statearr_24906_24930[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24905 === 1))
{var state_24904__$1 = state_24904;var statearr_24907_24931 = state_24904__$1;(statearr_24907_24931[2] = null);
(statearr_24907_24931[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24905 === 4))
{var inst_24881 = (state_24904[7]);var inst_24881__$1 = (state_24904[2]);var inst_24882 = (inst_24881__$1 == null);var state_24904__$1 = (function (){var statearr_24908 = state_24904;(statearr_24908[7] = inst_24881__$1);
return statearr_24908;
})();if(cljs.core.truth_(inst_24882))
{var statearr_24909_24932 = state_24904__$1;(statearr_24909_24932[1] = 5);
} else
{var statearr_24910_24933 = state_24904__$1;(statearr_24910_24933[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24905 === 13))
{var state_24904__$1 = state_24904;var statearr_24911_24934 = state_24904__$1;(statearr_24911_24934[2] = null);
(statearr_24911_24934[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24905 === 6))
{var inst_24881 = (state_24904[7]);var inst_24887 = p.call(null,inst_24881);var state_24904__$1 = state_24904;if(cljs.core.truth_(inst_24887))
{var statearr_24912_24935 = state_24904__$1;(statearr_24912_24935[1] = 9);
} else
{var statearr_24913_24936 = state_24904__$1;(statearr_24913_24936[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24905 === 3))
{var inst_24902 = (state_24904[2]);var state_24904__$1 = state_24904;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24904__$1,inst_24902);
} else
{if((state_val_24905 === 12))
{var state_24904__$1 = state_24904;var statearr_24914_24937 = state_24904__$1;(statearr_24914_24937[2] = null);
(statearr_24914_24937[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24905 === 2))
{var state_24904__$1 = state_24904;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24904__$1,4,ch);
} else
{if((state_val_24905 === 11))
{var inst_24881 = (state_24904[7]);var inst_24891 = (state_24904[2]);var state_24904__$1 = state_24904;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24904__$1,8,inst_24891,inst_24881);
} else
{if((state_val_24905 === 9))
{var state_24904__$1 = state_24904;var statearr_24915_24938 = state_24904__$1;(statearr_24915_24938[2] = tc);
(statearr_24915_24938[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24905 === 5))
{var inst_24884 = cljs.core.async.close_BANG_.call(null,tc);var inst_24885 = cljs.core.async.close_BANG_.call(null,fc);var state_24904__$1 = (function (){var statearr_24916 = state_24904;(statearr_24916[8] = inst_24884);
return statearr_24916;
})();var statearr_24917_24939 = state_24904__$1;(statearr_24917_24939[2] = inst_24885);
(statearr_24917_24939[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24905 === 14))
{var inst_24898 = (state_24904[2]);var state_24904__$1 = state_24904;var statearr_24918_24940 = state_24904__$1;(statearr_24918_24940[2] = inst_24898);
(statearr_24918_24940[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24905 === 10))
{var state_24904__$1 = state_24904;var statearr_24919_24941 = state_24904__$1;(statearr_24919_24941[2] = fc);
(statearr_24919_24941[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24905 === 8))
{var inst_24893 = (state_24904[2]);var state_24904__$1 = state_24904;if(cljs.core.truth_(inst_24893))
{var statearr_24920_24942 = state_24904__$1;(statearr_24920_24942[1] = 12);
} else
{var statearr_24921_24943 = state_24904__$1;(statearr_24921_24943[1] = 13);
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
});})(c__11010__auto___24929,tc,fc))
;return ((function (switch__10946__auto__,c__11010__auto___24929,tc,fc){
return (function() {
var state_machine__10947__auto__ = null;
var state_machine__10947__auto____0 = (function (){var statearr_24925 = [null,null,null,null,null,null,null,null,null];(statearr_24925[0] = state_machine__10947__auto__);
(statearr_24925[1] = 1);
return statearr_24925;
});
var state_machine__10947__auto____1 = (function (state_24904){while(true){
var ret_value__10948__auto__ = (function (){try{while(true){
var result__10949__auto__ = switch__10946__auto__.call(null,state_24904);if(cljs.core.keyword_identical_QMARK_.call(null,result__10949__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10949__auto__;
}
break;
}
}catch (e24926){if((e24926 instanceof Object))
{var ex__10950__auto__ = e24926;var statearr_24927_24944 = state_24904;(statearr_24927_24944[5] = ex__10950__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24904);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24926;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10948__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24945 = state_24904;
state_24904 = G__24945;
continue;
}
} else
{return ret_value__10948__auto__;
}
break;
}
});
state_machine__10947__auto__ = function(state_24904){
switch(arguments.length){
case 0:
return state_machine__10947__auto____0.call(this);
case 1:
return state_machine__10947__auto____1.call(this,state_24904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10947__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10947__auto____0;
state_machine__10947__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10947__auto____1;
return state_machine__10947__auto__;
})()
;})(switch__10946__auto__,c__11010__auto___24929,tc,fc))
})();var state__11012__auto__ = (function (){var statearr_24928 = f__11011__auto__.call(null);(statearr_24928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11010__auto___24929);
return statearr_24928;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11012__auto__);
});})(c__11010__auto___24929,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__11010__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11010__auto__){
return (function (){var f__11011__auto__ = (function (){var switch__10946__auto__ = ((function (c__11010__auto__){
return (function (state_24992){var state_val_24993 = (state_24992[1]);if((state_val_24993 === 7))
{var inst_24988 = (state_24992[2]);var state_24992__$1 = state_24992;var statearr_24994_25010 = state_24992__$1;(statearr_24994_25010[2] = inst_24988);
(statearr_24994_25010[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24993 === 6))
{var inst_24981 = (state_24992[7]);var inst_24978 = (state_24992[8]);var inst_24985 = f.call(null,inst_24978,inst_24981);var inst_24978__$1 = inst_24985;var state_24992__$1 = (function (){var statearr_24995 = state_24992;(statearr_24995[8] = inst_24978__$1);
return statearr_24995;
})();var statearr_24996_25011 = state_24992__$1;(statearr_24996_25011[2] = null);
(statearr_24996_25011[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24993 === 5))
{var inst_24978 = (state_24992[8]);var state_24992__$1 = state_24992;var statearr_24997_25012 = state_24992__$1;(statearr_24997_25012[2] = inst_24978);
(statearr_24997_25012[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24993 === 4))
{var inst_24981 = (state_24992[7]);var inst_24981__$1 = (state_24992[2]);var inst_24982 = (inst_24981__$1 == null);var state_24992__$1 = (function (){var statearr_24998 = state_24992;(statearr_24998[7] = inst_24981__$1);
return statearr_24998;
})();if(cljs.core.truth_(inst_24982))
{var statearr_24999_25013 = state_24992__$1;(statearr_24999_25013[1] = 5);
} else
{var statearr_25000_25014 = state_24992__$1;(statearr_25000_25014[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24993 === 3))
{var inst_24990 = (state_24992[2]);var state_24992__$1 = state_24992;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24992__$1,inst_24990);
} else
{if((state_val_24993 === 2))
{var state_24992__$1 = state_24992;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24992__$1,4,ch);
} else
{if((state_val_24993 === 1))
{var inst_24978 = init;var state_24992__$1 = (function (){var statearr_25001 = state_24992;(statearr_25001[8] = inst_24978);
return statearr_25001;
})();var statearr_25002_25015 = state_24992__$1;(statearr_25002_25015[2] = null);
(statearr_25002_25015[1] = 2);
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
});})(c__11010__auto__))
;return ((function (switch__10946__auto__,c__11010__auto__){
return (function() {
var state_machine__10947__auto__ = null;
var state_machine__10947__auto____0 = (function (){var statearr_25006 = [null,null,null,null,null,null,null,null,null];(statearr_25006[0] = state_machine__10947__auto__);
(statearr_25006[1] = 1);
return statearr_25006;
});
var state_machine__10947__auto____1 = (function (state_24992){while(true){
var ret_value__10948__auto__ = (function (){try{while(true){
var result__10949__auto__ = switch__10946__auto__.call(null,state_24992);if(cljs.core.keyword_identical_QMARK_.call(null,result__10949__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10949__auto__;
}
break;
}
}catch (e25007){if((e25007 instanceof Object))
{var ex__10950__auto__ = e25007;var statearr_25008_25016 = state_24992;(statearr_25008_25016[5] = ex__10950__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24992);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25007;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10948__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25017 = state_24992;
state_24992 = G__25017;
continue;
}
} else
{return ret_value__10948__auto__;
}
break;
}
});
state_machine__10947__auto__ = function(state_24992){
switch(arguments.length){
case 0:
return state_machine__10947__auto____0.call(this);
case 1:
return state_machine__10947__auto____1.call(this,state_24992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10947__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10947__auto____0;
state_machine__10947__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10947__auto____1;
return state_machine__10947__auto__;
})()
;})(switch__10946__auto__,c__11010__auto__))
})();var state__11012__auto__ = (function (){var statearr_25009 = f__11011__auto__.call(null);(statearr_25009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11010__auto__);
return statearr_25009;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11012__auto__);
});})(c__11010__auto__))
);
return c__11010__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__11010__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11010__auto__){
return (function (){var f__11011__auto__ = (function (){var switch__10946__auto__ = ((function (c__11010__auto__){
return (function (state_25091){var state_val_25092 = (state_25091[1]);if((state_val_25092 === 7))
{var inst_25073 = (state_25091[2]);var state_25091__$1 = state_25091;var statearr_25093_25116 = state_25091__$1;(statearr_25093_25116[2] = inst_25073);
(statearr_25093_25116[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25092 === 1))
{var inst_25067 = cljs.core.seq.call(null,coll);var inst_25068 = inst_25067;var state_25091__$1 = (function (){var statearr_25094 = state_25091;(statearr_25094[7] = inst_25068);
return statearr_25094;
})();var statearr_25095_25117 = state_25091__$1;(statearr_25095_25117[2] = null);
(statearr_25095_25117[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25092 === 4))
{var inst_25068 = (state_25091[7]);var inst_25071 = cljs.core.first.call(null,inst_25068);var state_25091__$1 = state_25091;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25091__$1,7,ch,inst_25071);
} else
{if((state_val_25092 === 13))
{var inst_25085 = (state_25091[2]);var state_25091__$1 = state_25091;var statearr_25096_25118 = state_25091__$1;(statearr_25096_25118[2] = inst_25085);
(statearr_25096_25118[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25092 === 6))
{var inst_25076 = (state_25091[2]);var state_25091__$1 = state_25091;if(cljs.core.truth_(inst_25076))
{var statearr_25097_25119 = state_25091__$1;(statearr_25097_25119[1] = 8);
} else
{var statearr_25098_25120 = state_25091__$1;(statearr_25098_25120[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25092 === 3))
{var inst_25089 = (state_25091[2]);var state_25091__$1 = state_25091;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25091__$1,inst_25089);
} else
{if((state_val_25092 === 12))
{var state_25091__$1 = state_25091;var statearr_25099_25121 = state_25091__$1;(statearr_25099_25121[2] = null);
(statearr_25099_25121[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25092 === 2))
{var inst_25068 = (state_25091[7]);var state_25091__$1 = state_25091;if(cljs.core.truth_(inst_25068))
{var statearr_25100_25122 = state_25091__$1;(statearr_25100_25122[1] = 4);
} else
{var statearr_25101_25123 = state_25091__$1;(statearr_25101_25123[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25092 === 11))
{var inst_25082 = cljs.core.async.close_BANG_.call(null,ch);var state_25091__$1 = state_25091;var statearr_25102_25124 = state_25091__$1;(statearr_25102_25124[2] = inst_25082);
(statearr_25102_25124[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25092 === 9))
{var state_25091__$1 = state_25091;if(cljs.core.truth_(close_QMARK_))
{var statearr_25103_25125 = state_25091__$1;(statearr_25103_25125[1] = 11);
} else
{var statearr_25104_25126 = state_25091__$1;(statearr_25104_25126[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25092 === 5))
{var inst_25068 = (state_25091[7]);var state_25091__$1 = state_25091;var statearr_25105_25127 = state_25091__$1;(statearr_25105_25127[2] = inst_25068);
(statearr_25105_25127[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25092 === 10))
{var inst_25087 = (state_25091[2]);var state_25091__$1 = state_25091;var statearr_25106_25128 = state_25091__$1;(statearr_25106_25128[2] = inst_25087);
(statearr_25106_25128[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25092 === 8))
{var inst_25068 = (state_25091[7]);var inst_25078 = cljs.core.next.call(null,inst_25068);var inst_25068__$1 = inst_25078;var state_25091__$1 = (function (){var statearr_25107 = state_25091;(statearr_25107[7] = inst_25068__$1);
return statearr_25107;
})();var statearr_25108_25129 = state_25091__$1;(statearr_25108_25129[2] = null);
(statearr_25108_25129[1] = 2);
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
});})(c__11010__auto__))
;return ((function (switch__10946__auto__,c__11010__auto__){
return (function() {
var state_machine__10947__auto__ = null;
var state_machine__10947__auto____0 = (function (){var statearr_25112 = [null,null,null,null,null,null,null,null];(statearr_25112[0] = state_machine__10947__auto__);
(statearr_25112[1] = 1);
return statearr_25112;
});
var state_machine__10947__auto____1 = (function (state_25091){while(true){
var ret_value__10948__auto__ = (function (){try{while(true){
var result__10949__auto__ = switch__10946__auto__.call(null,state_25091);if(cljs.core.keyword_identical_QMARK_.call(null,result__10949__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10949__auto__;
}
break;
}
}catch (e25113){if((e25113 instanceof Object))
{var ex__10950__auto__ = e25113;var statearr_25114_25130 = state_25091;(statearr_25114_25130[5] = ex__10950__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25091);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25113;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10948__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25131 = state_25091;
state_25091 = G__25131;
continue;
}
} else
{return ret_value__10948__auto__;
}
break;
}
});
state_machine__10947__auto__ = function(state_25091){
switch(arguments.length){
case 0:
return state_machine__10947__auto____0.call(this);
case 1:
return state_machine__10947__auto____1.call(this,state_25091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10947__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10947__auto____0;
state_machine__10947__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10947__auto____1;
return state_machine__10947__auto__;
})()
;})(switch__10946__auto__,c__11010__auto__))
})();var state__11012__auto__ = (function (){var statearr_25115 = f__11011__auto__.call(null);(statearr_25115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11010__auto__);
return statearr_25115;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11012__auto__);
});})(c__11010__auto__))
);
return c__11010__auto__;
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
cljs.core.async.Mux = (function (){var obj25133 = {};return obj25133;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7872__auto__ = _;if(and__7872__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7872__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8511__auto__ = (((_ == null))?null:_);return (function (){var or__7884__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8511__auto__)]);if(or__7884__auto__)
{return or__7884__auto__;
} else
{var or__7884__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7884__auto____$1)
{return or__7884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj25135 = {};return obj25135;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7872__auto__ = m;if(and__7872__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7872__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8511__auto__ = (((m == null))?null:m);return (function (){var or__7884__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8511__auto__)]);if(or__7884__auto__)
{return or__7884__auto__;
} else
{var or__7884__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7884__auto____$1)
{return or__7884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7872__auto__ = m;if(and__7872__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7872__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8511__auto__ = (((m == null))?null:m);return (function (){var or__7884__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8511__auto__)]);if(or__7884__auto__)
{return or__7884__auto__;
} else
{var or__7884__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7884__auto____$1)
{return or__7884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7872__auto__ = m;if(and__7872__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7872__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8511__auto__ = (((m == null))?null:m);return (function (){var or__7884__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8511__auto__)]);if(or__7884__auto__)
{return or__7884__auto__;
} else
{var or__7884__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7884__auto____$1)
{return or__7884__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t25357 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25357 = (function (cs,ch,mult,meta25358){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25358 = meta25358;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25357.cljs$lang$type = true;
cljs.core.async.t25357.cljs$lang$ctorStr = "cljs.core.async/t25357";
cljs.core.async.t25357.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8451__auto__,writer__8452__auto__,opt__8453__auto__){return cljs.core._write.call(null,writer__8452__auto__,"cljs.core.async/t25357");
});})(cs))
;
cljs.core.async.t25357.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25357.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25357.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25357.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t25357.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25357.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25357.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25359){var self__ = this;
var _25359__$1 = this;return self__.meta25358;
});})(cs))
;
cljs.core.async.t25357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25359,meta25358__$1){var self__ = this;
var _25359__$1 = this;return (new cljs.core.async.t25357(self__.cs,self__.ch,self__.mult,meta25358__$1));
});})(cs))
;
cljs.core.async.__GT_t25357 = ((function (cs){
return (function __GT_t25357(cs__$1,ch__$1,mult__$1,meta25358){return (new cljs.core.async.t25357(cs__$1,ch__$1,mult__$1,meta25358));
});})(cs))
;
}
return (new cljs.core.async.t25357(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__11010__auto___25578 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11010__auto___25578,cs,m,dchan,dctr,done){
return (function (){var f__11011__auto__ = (function (){var switch__10946__auto__ = ((function (c__11010__auto___25578,cs,m,dchan,dctr,done){
return (function (state_25490){var state_val_25491 = (state_25490[1]);if((state_val_25491 === 7))
{var inst_25486 = (state_25490[2]);var state_25490__$1 = state_25490;var statearr_25492_25579 = state_25490__$1;(statearr_25492_25579[2] = inst_25486);
(statearr_25492_25579[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 20))
{var inst_25391 = (state_25490[7]);var inst_25401 = cljs.core.first.call(null,inst_25391);var inst_25402 = cljs.core.nth.call(null,inst_25401,0,null);var inst_25403 = cljs.core.nth.call(null,inst_25401,1,null);var state_25490__$1 = (function (){var statearr_25493 = state_25490;(statearr_25493[8] = inst_25402);
return statearr_25493;
})();if(cljs.core.truth_(inst_25403))
{var statearr_25494_25580 = state_25490__$1;(statearr_25494_25580[1] = 22);
} else
{var statearr_25495_25581 = state_25490__$1;(statearr_25495_25581[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 27))
{var inst_25433 = (state_25490[9]);var inst_25362 = (state_25490[10]);var inst_25431 = (state_25490[11]);var inst_25438 = (state_25490[12]);var inst_25438__$1 = cljs.core._nth.call(null,inst_25431,inst_25433);var inst_25439 = cljs.core.async.put_BANG_.call(null,inst_25438__$1,inst_25362,done);var state_25490__$1 = (function (){var statearr_25496 = state_25490;(statearr_25496[12] = inst_25438__$1);
return statearr_25496;
})();if(cljs.core.truth_(inst_25439))
{var statearr_25497_25582 = state_25490__$1;(statearr_25497_25582[1] = 30);
} else
{var statearr_25498_25583 = state_25490__$1;(statearr_25498_25583[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 1))
{var state_25490__$1 = state_25490;var statearr_25499_25584 = state_25490__$1;(statearr_25499_25584[2] = null);
(statearr_25499_25584[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 24))
{var inst_25391 = (state_25490[7]);var inst_25408 = (state_25490[2]);var inst_25409 = cljs.core.next.call(null,inst_25391);var inst_25371 = inst_25409;var inst_25372 = null;var inst_25373 = 0;var inst_25374 = 0;var state_25490__$1 = (function (){var statearr_25500 = state_25490;(statearr_25500[13] = inst_25374);
(statearr_25500[14] = inst_25371);
(statearr_25500[15] = inst_25372);
(statearr_25500[16] = inst_25408);
(statearr_25500[17] = inst_25373);
return statearr_25500;
})();var statearr_25501_25585 = state_25490__$1;(statearr_25501_25585[2] = null);
(statearr_25501_25585[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 39))
{var state_25490__$1 = state_25490;var statearr_25505_25586 = state_25490__$1;(statearr_25505_25586[2] = null);
(statearr_25505_25586[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 4))
{var inst_25362 = (state_25490[10]);var inst_25362__$1 = (state_25490[2]);var inst_25363 = (inst_25362__$1 == null);var state_25490__$1 = (function (){var statearr_25506 = state_25490;(statearr_25506[10] = inst_25362__$1);
return statearr_25506;
})();if(cljs.core.truth_(inst_25363))
{var statearr_25507_25587 = state_25490__$1;(statearr_25507_25587[1] = 5);
} else
{var statearr_25508_25588 = state_25490__$1;(statearr_25508_25588[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 15))
{var inst_25374 = (state_25490[13]);var inst_25371 = (state_25490[14]);var inst_25372 = (state_25490[15]);var inst_25373 = (state_25490[17]);var inst_25387 = (state_25490[2]);var inst_25388 = (inst_25374 + 1);var tmp25502 = inst_25371;var tmp25503 = inst_25372;var tmp25504 = inst_25373;var inst_25371__$1 = tmp25502;var inst_25372__$1 = tmp25503;var inst_25373__$1 = tmp25504;var inst_25374__$1 = inst_25388;var state_25490__$1 = (function (){var statearr_25509 = state_25490;(statearr_25509[13] = inst_25374__$1);
(statearr_25509[14] = inst_25371__$1);
(statearr_25509[15] = inst_25372__$1);
(statearr_25509[18] = inst_25387);
(statearr_25509[17] = inst_25373__$1);
return statearr_25509;
})();var statearr_25510_25589 = state_25490__$1;(statearr_25510_25589[2] = null);
(statearr_25510_25589[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 21))
{var inst_25412 = (state_25490[2]);var state_25490__$1 = state_25490;var statearr_25514_25590 = state_25490__$1;(statearr_25514_25590[2] = inst_25412);
(statearr_25514_25590[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 31))
{var inst_25438 = (state_25490[12]);var inst_25442 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_25443 = cljs.core.async.untap_STAR_.call(null,m,inst_25438);var state_25490__$1 = (function (){var statearr_25515 = state_25490;(statearr_25515[19] = inst_25442);
return statearr_25515;
})();var statearr_25516_25591 = state_25490__$1;(statearr_25516_25591[2] = inst_25443);
(statearr_25516_25591[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 32))
{var inst_25433 = (state_25490[9]);var inst_25432 = (state_25490[20]);var inst_25431 = (state_25490[11]);var inst_25430 = (state_25490[21]);var inst_25445 = (state_25490[2]);var inst_25446 = (inst_25433 + 1);var tmp25511 = inst_25432;var tmp25512 = inst_25431;var tmp25513 = inst_25430;var inst_25430__$1 = tmp25513;var inst_25431__$1 = tmp25512;var inst_25432__$1 = tmp25511;var inst_25433__$1 = inst_25446;var state_25490__$1 = (function (){var statearr_25517 = state_25490;(statearr_25517[9] = inst_25433__$1);
(statearr_25517[20] = inst_25432__$1);
(statearr_25517[11] = inst_25431__$1);
(statearr_25517[22] = inst_25445);
(statearr_25517[21] = inst_25430__$1);
return statearr_25517;
})();var statearr_25518_25592 = state_25490__$1;(statearr_25518_25592[2] = null);
(statearr_25518_25592[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 40))
{var inst_25458 = (state_25490[23]);var inst_25462 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_25463 = cljs.core.async.untap_STAR_.call(null,m,inst_25458);var state_25490__$1 = (function (){var statearr_25519 = state_25490;(statearr_25519[24] = inst_25462);
return statearr_25519;
})();var statearr_25520_25593 = state_25490__$1;(statearr_25520_25593[2] = inst_25463);
(statearr_25520_25593[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 33))
{var inst_25449 = (state_25490[25]);var inst_25451 = cljs.core.chunked_seq_QMARK_.call(null,inst_25449);var state_25490__$1 = state_25490;if(inst_25451)
{var statearr_25521_25594 = state_25490__$1;(statearr_25521_25594[1] = 36);
} else
{var statearr_25522_25595 = state_25490__$1;(statearr_25522_25595[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 13))
{var inst_25381 = (state_25490[26]);var inst_25384 = cljs.core.async.close_BANG_.call(null,inst_25381);var state_25490__$1 = state_25490;var statearr_25523_25596 = state_25490__$1;(statearr_25523_25596[2] = inst_25384);
(statearr_25523_25596[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 22))
{var inst_25402 = (state_25490[8]);var inst_25405 = cljs.core.async.close_BANG_.call(null,inst_25402);var state_25490__$1 = state_25490;var statearr_25524_25597 = state_25490__$1;(statearr_25524_25597[2] = inst_25405);
(statearr_25524_25597[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 36))
{var inst_25449 = (state_25490[25]);var inst_25453 = cljs.core.chunk_first.call(null,inst_25449);var inst_25454 = cljs.core.chunk_rest.call(null,inst_25449);var inst_25455 = cljs.core.count.call(null,inst_25453);var inst_25430 = inst_25454;var inst_25431 = inst_25453;var inst_25432 = inst_25455;var inst_25433 = 0;var state_25490__$1 = (function (){var statearr_25525 = state_25490;(statearr_25525[9] = inst_25433);
(statearr_25525[20] = inst_25432);
(statearr_25525[11] = inst_25431);
(statearr_25525[21] = inst_25430);
return statearr_25525;
})();var statearr_25526_25598 = state_25490__$1;(statearr_25526_25598[2] = null);
(statearr_25526_25598[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 41))
{var inst_25449 = (state_25490[25]);var inst_25465 = (state_25490[2]);var inst_25466 = cljs.core.next.call(null,inst_25449);var inst_25430 = inst_25466;var inst_25431 = null;var inst_25432 = 0;var inst_25433 = 0;var state_25490__$1 = (function (){var statearr_25527 = state_25490;(statearr_25527[9] = inst_25433);
(statearr_25527[20] = inst_25432);
(statearr_25527[11] = inst_25431);
(statearr_25527[27] = inst_25465);
(statearr_25527[21] = inst_25430);
return statearr_25527;
})();var statearr_25528_25599 = state_25490__$1;(statearr_25528_25599[2] = null);
(statearr_25528_25599[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 43))
{var state_25490__$1 = state_25490;var statearr_25529_25600 = state_25490__$1;(statearr_25529_25600[2] = null);
(statearr_25529_25600[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 29))
{var inst_25474 = (state_25490[2]);var state_25490__$1 = state_25490;var statearr_25530_25601 = state_25490__$1;(statearr_25530_25601[2] = inst_25474);
(statearr_25530_25601[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 44))
{var inst_25483 = (state_25490[2]);var state_25490__$1 = (function (){var statearr_25531 = state_25490;(statearr_25531[28] = inst_25483);
return statearr_25531;
})();var statearr_25532_25602 = state_25490__$1;(statearr_25532_25602[2] = null);
(statearr_25532_25602[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 6))
{var inst_25422 = (state_25490[29]);var inst_25421 = cljs.core.deref.call(null,cs);var inst_25422__$1 = cljs.core.keys.call(null,inst_25421);var inst_25423 = cljs.core.count.call(null,inst_25422__$1);var inst_25424 = cljs.core.reset_BANG_.call(null,dctr,inst_25423);var inst_25429 = cljs.core.seq.call(null,inst_25422__$1);var inst_25430 = inst_25429;var inst_25431 = null;var inst_25432 = 0;var inst_25433 = 0;var state_25490__$1 = (function (){var statearr_25533 = state_25490;(statearr_25533[9] = inst_25433);
(statearr_25533[20] = inst_25432);
(statearr_25533[29] = inst_25422__$1);
(statearr_25533[11] = inst_25431);
(statearr_25533[21] = inst_25430);
(statearr_25533[30] = inst_25424);
return statearr_25533;
})();var statearr_25534_25603 = state_25490__$1;(statearr_25534_25603[2] = null);
(statearr_25534_25603[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 28))
{var inst_25430 = (state_25490[21]);var inst_25449 = (state_25490[25]);var inst_25449__$1 = cljs.core.seq.call(null,inst_25430);var state_25490__$1 = (function (){var statearr_25535 = state_25490;(statearr_25535[25] = inst_25449__$1);
return statearr_25535;
})();if(inst_25449__$1)
{var statearr_25536_25604 = state_25490__$1;(statearr_25536_25604[1] = 33);
} else
{var statearr_25537_25605 = state_25490__$1;(statearr_25537_25605[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 25))
{var inst_25433 = (state_25490[9]);var inst_25432 = (state_25490[20]);var inst_25435 = (inst_25433 < inst_25432);var inst_25436 = inst_25435;var state_25490__$1 = state_25490;if(cljs.core.truth_(inst_25436))
{var statearr_25538_25606 = state_25490__$1;(statearr_25538_25606[1] = 27);
} else
{var statearr_25539_25607 = state_25490__$1;(statearr_25539_25607[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 34))
{var state_25490__$1 = state_25490;var statearr_25540_25608 = state_25490__$1;(statearr_25540_25608[2] = null);
(statearr_25540_25608[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 17))
{var state_25490__$1 = state_25490;var statearr_25541_25609 = state_25490__$1;(statearr_25541_25609[2] = null);
(statearr_25541_25609[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 3))
{var inst_25488 = (state_25490[2]);var state_25490__$1 = state_25490;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25490__$1,inst_25488);
} else
{if((state_val_25491 === 12))
{var inst_25417 = (state_25490[2]);var state_25490__$1 = state_25490;var statearr_25542_25610 = state_25490__$1;(statearr_25542_25610[2] = inst_25417);
(statearr_25542_25610[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 2))
{var state_25490__$1 = state_25490;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25490__$1,4,ch);
} else
{if((state_val_25491 === 23))
{var state_25490__$1 = state_25490;var statearr_25543_25611 = state_25490__$1;(statearr_25543_25611[2] = null);
(statearr_25543_25611[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 35))
{var inst_25472 = (state_25490[2]);var state_25490__$1 = state_25490;var statearr_25544_25612 = state_25490__$1;(statearr_25544_25612[2] = inst_25472);
(statearr_25544_25612[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 19))
{var inst_25391 = (state_25490[7]);var inst_25395 = cljs.core.chunk_first.call(null,inst_25391);var inst_25396 = cljs.core.chunk_rest.call(null,inst_25391);var inst_25397 = cljs.core.count.call(null,inst_25395);var inst_25371 = inst_25396;var inst_25372 = inst_25395;var inst_25373 = inst_25397;var inst_25374 = 0;var state_25490__$1 = (function (){var statearr_25545 = state_25490;(statearr_25545[13] = inst_25374);
(statearr_25545[14] = inst_25371);
(statearr_25545[15] = inst_25372);
(statearr_25545[17] = inst_25373);
return statearr_25545;
})();var statearr_25546_25613 = state_25490__$1;(statearr_25546_25613[2] = null);
(statearr_25546_25613[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 11))
{var inst_25371 = (state_25490[14]);var inst_25391 = (state_25490[7]);var inst_25391__$1 = cljs.core.seq.call(null,inst_25371);var state_25490__$1 = (function (){var statearr_25547 = state_25490;(statearr_25547[7] = inst_25391__$1);
return statearr_25547;
})();if(inst_25391__$1)
{var statearr_25548_25614 = state_25490__$1;(statearr_25548_25614[1] = 16);
} else
{var statearr_25549_25615 = state_25490__$1;(statearr_25549_25615[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 9))
{var inst_25419 = (state_25490[2]);var state_25490__$1 = state_25490;var statearr_25550_25616 = state_25490__$1;(statearr_25550_25616[2] = inst_25419);
(statearr_25550_25616[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 5))
{var inst_25369 = cljs.core.deref.call(null,cs);var inst_25370 = cljs.core.seq.call(null,inst_25369);var inst_25371 = inst_25370;var inst_25372 = null;var inst_25373 = 0;var inst_25374 = 0;var state_25490__$1 = (function (){var statearr_25551 = state_25490;(statearr_25551[13] = inst_25374);
(statearr_25551[14] = inst_25371);
(statearr_25551[15] = inst_25372);
(statearr_25551[17] = inst_25373);
return statearr_25551;
})();var statearr_25552_25617 = state_25490__$1;(statearr_25552_25617[2] = null);
(statearr_25552_25617[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 14))
{var state_25490__$1 = state_25490;var statearr_25553_25618 = state_25490__$1;(statearr_25553_25618[2] = null);
(statearr_25553_25618[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 45))
{var inst_25480 = (state_25490[2]);var state_25490__$1 = state_25490;var statearr_25554_25619 = state_25490__$1;(statearr_25554_25619[2] = inst_25480);
(statearr_25554_25619[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 26))
{var inst_25422 = (state_25490[29]);var inst_25476 = (state_25490[2]);var inst_25477 = cljs.core.seq.call(null,inst_25422);var state_25490__$1 = (function (){var statearr_25555 = state_25490;(statearr_25555[31] = inst_25476);
return statearr_25555;
})();if(inst_25477)
{var statearr_25556_25620 = state_25490__$1;(statearr_25556_25620[1] = 42);
} else
{var statearr_25557_25621 = state_25490__$1;(statearr_25557_25621[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 16))
{var inst_25391 = (state_25490[7]);var inst_25393 = cljs.core.chunked_seq_QMARK_.call(null,inst_25391);var state_25490__$1 = state_25490;if(inst_25393)
{var statearr_25558_25622 = state_25490__$1;(statearr_25558_25622[1] = 19);
} else
{var statearr_25559_25623 = state_25490__$1;(statearr_25559_25623[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 38))
{var inst_25469 = (state_25490[2]);var state_25490__$1 = state_25490;var statearr_25560_25624 = state_25490__$1;(statearr_25560_25624[2] = inst_25469);
(statearr_25560_25624[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 30))
{var state_25490__$1 = state_25490;var statearr_25561_25625 = state_25490__$1;(statearr_25561_25625[2] = null);
(statearr_25561_25625[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 10))
{var inst_25374 = (state_25490[13]);var inst_25372 = (state_25490[15]);var inst_25380 = cljs.core._nth.call(null,inst_25372,inst_25374);var inst_25381 = cljs.core.nth.call(null,inst_25380,0,null);var inst_25382 = cljs.core.nth.call(null,inst_25380,1,null);var state_25490__$1 = (function (){var statearr_25562 = state_25490;(statearr_25562[26] = inst_25381);
return statearr_25562;
})();if(cljs.core.truth_(inst_25382))
{var statearr_25563_25626 = state_25490__$1;(statearr_25563_25626[1] = 13);
} else
{var statearr_25564_25627 = state_25490__$1;(statearr_25564_25627[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 18))
{var inst_25415 = (state_25490[2]);var state_25490__$1 = state_25490;var statearr_25565_25628 = state_25490__$1;(statearr_25565_25628[2] = inst_25415);
(statearr_25565_25628[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 42))
{var state_25490__$1 = state_25490;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25490__$1,45,dchan);
} else
{if((state_val_25491 === 37))
{var inst_25458 = (state_25490[23]);var inst_25362 = (state_25490[10]);var inst_25449 = (state_25490[25]);var inst_25458__$1 = cljs.core.first.call(null,inst_25449);var inst_25459 = cljs.core.async.put_BANG_.call(null,inst_25458__$1,inst_25362,done);var state_25490__$1 = (function (){var statearr_25566 = state_25490;(statearr_25566[23] = inst_25458__$1);
return statearr_25566;
})();if(cljs.core.truth_(inst_25459))
{var statearr_25567_25629 = state_25490__$1;(statearr_25567_25629[1] = 39);
} else
{var statearr_25568_25630 = state_25490__$1;(statearr_25568_25630[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25491 === 8))
{var inst_25374 = (state_25490[13]);var inst_25373 = (state_25490[17]);var inst_25376 = (inst_25374 < inst_25373);var inst_25377 = inst_25376;var state_25490__$1 = state_25490;if(cljs.core.truth_(inst_25377))
{var statearr_25569_25631 = state_25490__$1;(statearr_25569_25631[1] = 10);
} else
{var statearr_25570_25632 = state_25490__$1;(statearr_25570_25632[1] = 11);
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
});})(c__11010__auto___25578,cs,m,dchan,dctr,done))
;return ((function (switch__10946__auto__,c__11010__auto___25578,cs,m,dchan,dctr,done){
return (function() {
var state_machine__10947__auto__ = null;
var state_machine__10947__auto____0 = (function (){var statearr_25574 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25574[0] = state_machine__10947__auto__);
(statearr_25574[1] = 1);
return statearr_25574;
});
var state_machine__10947__auto____1 = (function (state_25490){while(true){
var ret_value__10948__auto__ = (function (){try{while(true){
var result__10949__auto__ = switch__10946__auto__.call(null,state_25490);if(cljs.core.keyword_identical_QMARK_.call(null,result__10949__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10949__auto__;
}
break;
}
}catch (e25575){if((e25575 instanceof Object))
{var ex__10950__auto__ = e25575;var statearr_25576_25633 = state_25490;(statearr_25576_25633[5] = ex__10950__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25490);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25575;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10948__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25634 = state_25490;
state_25490 = G__25634;
continue;
}
} else
{return ret_value__10948__auto__;
}
break;
}
});
state_machine__10947__auto__ = function(state_25490){
switch(arguments.length){
case 0:
return state_machine__10947__auto____0.call(this);
case 1:
return state_machine__10947__auto____1.call(this,state_25490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10947__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10947__auto____0;
state_machine__10947__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10947__auto____1;
return state_machine__10947__auto__;
})()
;})(switch__10946__auto__,c__11010__auto___25578,cs,m,dchan,dctr,done))
})();var state__11012__auto__ = (function (){var statearr_25577 = f__11011__auto__.call(null);(statearr_25577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11010__auto___25578);
return statearr_25577;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11012__auto__);
});})(c__11010__auto___25578,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj25636 = {};return obj25636;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7872__auto__ = m;if(and__7872__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7872__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8511__auto__ = (((m == null))?null:m);return (function (){var or__7884__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8511__auto__)]);if(or__7884__auto__)
{return or__7884__auto__;
} else
{var or__7884__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7884__auto____$1)
{return or__7884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7872__auto__ = m;if(and__7872__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7872__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8511__auto__ = (((m == null))?null:m);return (function (){var or__7884__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8511__auto__)]);if(or__7884__auto__)
{return or__7884__auto__;
} else
{var or__7884__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7884__auto____$1)
{return or__7884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7872__auto__ = m;if(and__7872__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7872__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8511__auto__ = (((m == null))?null:m);return (function (){var or__7884__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8511__auto__)]);if(or__7884__auto__)
{return or__7884__auto__;
} else
{var or__7884__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7884__auto____$1)
{return or__7884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7872__auto__ = m;if(and__7872__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7872__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8511__auto__ = (((m == null))?null:m);return (function (){var or__7884__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8511__auto__)]);if(or__7884__auto__)
{return or__7884__auto__;
} else
{var or__7884__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7884__auto____$1)
{return or__7884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7872__auto__ = m;if(and__7872__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7872__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8511__auto__ = (((m == null))?null:m);return (function (){var or__7884__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8511__auto__)]);if(or__7884__auto__)
{return or__7884__auto__;
} else
{var or__7884__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7884__auto____$1)
{return or__7884__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t25756 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25756 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25757){
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
this.meta25757 = meta25757;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25756.cljs$lang$type = true;
cljs.core.async.t25756.cljs$lang$ctorStr = "cljs.core.async/t25756";
cljs.core.async.t25756.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8451__auto__,writer__8452__auto__,opt__8453__auto__){return cljs.core._write.call(null,writer__8452__auto__,"cljs.core.async/t25756");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25756.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25756.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25756.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25756.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25756.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25756.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25756.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25756.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25756.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25758){var self__ = this;
var _25758__$1 = this;return self__.meta25757;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25758,meta25757__$1){var self__ = this;
var _25758__$1 = this;return (new cljs.core.async.t25756(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25757__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25756 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25756(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25757){return (new cljs.core.async.t25756(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25757));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25756(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__11010__auto___25875 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11010__auto___25875,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__11011__auto__ = (function (){var switch__10946__auto__ = ((function (c__11010__auto___25875,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25828){var state_val_25829 = (state_25828[1]);if((state_val_25829 === 7))
{var inst_25772 = (state_25828[7]);var inst_25777 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25772);var state_25828__$1 = state_25828;var statearr_25830_25876 = state_25828__$1;(statearr_25830_25876[2] = inst_25777);
(statearr_25830_25876[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25829 === 20))
{var inst_25787 = (state_25828[8]);var state_25828__$1 = state_25828;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25828__$1,23,out,inst_25787);
} else
{if((state_val_25829 === 1))
{var inst_25762 = (state_25828[9]);var inst_25762__$1 = calc_state.call(null);var inst_25763 = cljs.core.seq_QMARK_.call(null,inst_25762__$1);var state_25828__$1 = (function (){var statearr_25831 = state_25828;(statearr_25831[9] = inst_25762__$1);
return statearr_25831;
})();if(inst_25763)
{var statearr_25832_25877 = state_25828__$1;(statearr_25832_25877[1] = 2);
} else
{var statearr_25833_25878 = state_25828__$1;(statearr_25833_25878[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25829 === 24))
{var inst_25780 = (state_25828[10]);var inst_25772 = inst_25780;var state_25828__$1 = (function (){var statearr_25834 = state_25828;(statearr_25834[7] = inst_25772);
return statearr_25834;
})();var statearr_25835_25879 = state_25828__$1;(statearr_25835_25879[2] = null);
(statearr_25835_25879[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25829 === 4))
{var inst_25762 = (state_25828[9]);var inst_25768 = (state_25828[2]);var inst_25769 = cljs.core.get.call(null,inst_25768,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_25770 = cljs.core.get.call(null,inst_25768,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_25771 = cljs.core.get.call(null,inst_25768,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_25772 = inst_25762;var state_25828__$1 = (function (){var statearr_25836 = state_25828;(statearr_25836[11] = inst_25769);
(statearr_25836[12] = inst_25770);
(statearr_25836[7] = inst_25772);
(statearr_25836[13] = inst_25771);
return statearr_25836;
})();var statearr_25837_25880 = state_25828__$1;(statearr_25837_25880[2] = null);
(statearr_25837_25880[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25829 === 15))
{var state_25828__$1 = state_25828;var statearr_25838_25881 = state_25828__$1;(statearr_25838_25881[2] = null);
(statearr_25838_25881[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25829 === 21))
{var inst_25780 = (state_25828[10]);var inst_25772 = inst_25780;var state_25828__$1 = (function (){var statearr_25839 = state_25828;(statearr_25839[7] = inst_25772);
return statearr_25839;
})();var statearr_25840_25882 = state_25828__$1;(statearr_25840_25882[2] = null);
(statearr_25840_25882[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25829 === 13))
{var inst_25824 = (state_25828[2]);var state_25828__$1 = state_25828;var statearr_25841_25883 = state_25828__$1;(statearr_25841_25883[2] = inst_25824);
(statearr_25841_25883[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25829 === 22))
{var inst_25822 = (state_25828[2]);var state_25828__$1 = state_25828;var statearr_25842_25884 = state_25828__$1;(statearr_25842_25884[2] = inst_25822);
(statearr_25842_25884[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25829 === 6))
{var inst_25826 = (state_25828[2]);var state_25828__$1 = state_25828;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25828__$1,inst_25826);
} else
{if((state_val_25829 === 25))
{var state_25828__$1 = state_25828;var statearr_25843_25885 = state_25828__$1;(statearr_25843_25885[2] = null);
(statearr_25843_25885[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25829 === 17))
{var inst_25802 = (state_25828[14]);var state_25828__$1 = state_25828;var statearr_25844_25886 = state_25828__$1;(statearr_25844_25886[2] = inst_25802);
(statearr_25844_25886[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25829 === 3))
{var inst_25762 = (state_25828[9]);var state_25828__$1 = state_25828;var statearr_25845_25887 = state_25828__$1;(statearr_25845_25887[2] = inst_25762);
(statearr_25845_25887[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25829 === 12))
{var inst_25802 = (state_25828[14]);var inst_25788 = (state_25828[15]);var inst_25783 = (state_25828[16]);var inst_25802__$1 = inst_25783.call(null,inst_25788);var state_25828__$1 = (function (){var statearr_25846 = state_25828;(statearr_25846[14] = inst_25802__$1);
return statearr_25846;
})();if(cljs.core.truth_(inst_25802__$1))
{var statearr_25847_25888 = state_25828__$1;(statearr_25847_25888[1] = 17);
} else
{var statearr_25848_25889 = state_25828__$1;(statearr_25848_25889[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25829 === 2))
{var inst_25762 = (state_25828[9]);var inst_25765 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25762);var state_25828__$1 = state_25828;var statearr_25849_25890 = state_25828__$1;(statearr_25849_25890[2] = inst_25765);
(statearr_25849_25890[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25829 === 23))
{var inst_25813 = (state_25828[2]);var state_25828__$1 = state_25828;if(cljs.core.truth_(inst_25813))
{var statearr_25850_25891 = state_25828__$1;(statearr_25850_25891[1] = 24);
} else
{var statearr_25851_25892 = state_25828__$1;(statearr_25851_25892[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25829 === 19))
{var inst_25810 = (state_25828[2]);var state_25828__$1 = state_25828;if(cljs.core.truth_(inst_25810))
{var statearr_25852_25893 = state_25828__$1;(statearr_25852_25893[1] = 20);
} else
{var statearr_25853_25894 = state_25828__$1;(statearr_25853_25894[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25829 === 11))
{var inst_25787 = (state_25828[8]);var inst_25793 = (inst_25787 == null);var state_25828__$1 = state_25828;if(cljs.core.truth_(inst_25793))
{var statearr_25854_25895 = state_25828__$1;(statearr_25854_25895[1] = 14);
} else
{var statearr_25855_25896 = state_25828__$1;(statearr_25855_25896[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25829 === 9))
{var inst_25780 = (state_25828[10]);var inst_25780__$1 = (state_25828[2]);var inst_25781 = cljs.core.get.call(null,inst_25780__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_25782 = cljs.core.get.call(null,inst_25780__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_25783 = cljs.core.get.call(null,inst_25780__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_25828__$1 = (function (){var statearr_25856 = state_25828;(statearr_25856[10] = inst_25780__$1);
(statearr_25856[16] = inst_25783);
(statearr_25856[17] = inst_25782);
return statearr_25856;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_25828__$1,10,inst_25781);
} else
{if((state_val_25829 === 5))
{var inst_25772 = (state_25828[7]);var inst_25775 = cljs.core.seq_QMARK_.call(null,inst_25772);var state_25828__$1 = state_25828;if(inst_25775)
{var statearr_25857_25897 = state_25828__$1;(statearr_25857_25897[1] = 7);
} else
{var statearr_25858_25898 = state_25828__$1;(statearr_25858_25898[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25829 === 14))
{var inst_25788 = (state_25828[15]);var inst_25795 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25788);var state_25828__$1 = state_25828;var statearr_25859_25899 = state_25828__$1;(statearr_25859_25899[2] = inst_25795);
(statearr_25859_25899[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25829 === 26))
{var inst_25818 = (state_25828[2]);var state_25828__$1 = state_25828;var statearr_25860_25900 = state_25828__$1;(statearr_25860_25900[2] = inst_25818);
(statearr_25860_25900[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25829 === 16))
{var inst_25798 = (state_25828[2]);var inst_25799 = calc_state.call(null);var inst_25772 = inst_25799;var state_25828__$1 = (function (){var statearr_25861 = state_25828;(statearr_25861[7] = inst_25772);
(statearr_25861[18] = inst_25798);
return statearr_25861;
})();var statearr_25862_25901 = state_25828__$1;(statearr_25862_25901[2] = null);
(statearr_25862_25901[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25829 === 10))
{var inst_25788 = (state_25828[15]);var inst_25787 = (state_25828[8]);var inst_25786 = (state_25828[2]);var inst_25787__$1 = cljs.core.nth.call(null,inst_25786,0,null);var inst_25788__$1 = cljs.core.nth.call(null,inst_25786,1,null);var inst_25789 = (inst_25787__$1 == null);var inst_25790 = cljs.core._EQ_.call(null,inst_25788__$1,change);var inst_25791 = (inst_25789) || (inst_25790);var state_25828__$1 = (function (){var statearr_25863 = state_25828;(statearr_25863[15] = inst_25788__$1);
(statearr_25863[8] = inst_25787__$1);
return statearr_25863;
})();if(cljs.core.truth_(inst_25791))
{var statearr_25864_25902 = state_25828__$1;(statearr_25864_25902[1] = 11);
} else
{var statearr_25865_25903 = state_25828__$1;(statearr_25865_25903[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25829 === 18))
{var inst_25788 = (state_25828[15]);var inst_25783 = (state_25828[16]);var inst_25782 = (state_25828[17]);var inst_25805 = cljs.core.empty_QMARK_.call(null,inst_25783);var inst_25806 = inst_25782.call(null,inst_25788);var inst_25807 = cljs.core.not.call(null,inst_25806);var inst_25808 = (inst_25805) && (inst_25807);var state_25828__$1 = state_25828;var statearr_25866_25904 = state_25828__$1;(statearr_25866_25904[2] = inst_25808);
(statearr_25866_25904[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25829 === 8))
{var inst_25772 = (state_25828[7]);var state_25828__$1 = state_25828;var statearr_25867_25905 = state_25828__$1;(statearr_25867_25905[2] = inst_25772);
(statearr_25867_25905[1] = 9);
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
});})(c__11010__auto___25875,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__10946__auto__,c__11010__auto___25875,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__10947__auto__ = null;
var state_machine__10947__auto____0 = (function (){var statearr_25871 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25871[0] = state_machine__10947__auto__);
(statearr_25871[1] = 1);
return statearr_25871;
});
var state_machine__10947__auto____1 = (function (state_25828){while(true){
var ret_value__10948__auto__ = (function (){try{while(true){
var result__10949__auto__ = switch__10946__auto__.call(null,state_25828);if(cljs.core.keyword_identical_QMARK_.call(null,result__10949__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10949__auto__;
}
break;
}
}catch (e25872){if((e25872 instanceof Object))
{var ex__10950__auto__ = e25872;var statearr_25873_25906 = state_25828;(statearr_25873_25906[5] = ex__10950__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25828);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25872;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10948__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25907 = state_25828;
state_25828 = G__25907;
continue;
}
} else
{return ret_value__10948__auto__;
}
break;
}
});
state_machine__10947__auto__ = function(state_25828){
switch(arguments.length){
case 0:
return state_machine__10947__auto____0.call(this);
case 1:
return state_machine__10947__auto____1.call(this,state_25828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10947__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10947__auto____0;
state_machine__10947__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10947__auto____1;
return state_machine__10947__auto__;
})()
;})(switch__10946__auto__,c__11010__auto___25875,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__11012__auto__ = (function (){var statearr_25874 = f__11011__auto__.call(null);(statearr_25874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11010__auto___25875);
return statearr_25874;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11012__auto__);
});})(c__11010__auto___25875,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj25909 = {};return obj25909;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7872__auto__ = p;if(and__7872__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7872__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8511__auto__ = (((p == null))?null:p);return (function (){var or__7884__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8511__auto__)]);if(or__7884__auto__)
{return or__7884__auto__;
} else
{var or__7884__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7884__auto____$1)
{return or__7884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7872__auto__ = p;if(and__7872__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7872__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8511__auto__ = (((p == null))?null:p);return (function (){var or__7884__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8511__auto__)]);if(or__7884__auto__)
{return or__7884__auto__;
} else
{var or__7884__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7884__auto____$1)
{return or__7884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7872__auto__ = p;if(and__7872__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7872__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8511__auto__ = (((p == null))?null:p);return (function (){var or__7884__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8511__auto__)]);if(or__7884__auto__)
{return or__7884__auto__;
} else
{var or__7884__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7884__auto____$1)
{return or__7884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7872__auto__ = p;if(and__7872__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7872__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8511__auto__ = (((p == null))?null:p);return (function (){var or__7884__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8511__auto__)]);if(or__7884__auto__)
{return or__7884__auto__;
} else
{var or__7884__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7884__auto____$1)
{return or__7884__auto____$1;
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
return (function (topic){var or__7884__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7884__auto__))
{return or__7884__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7884__auto__,mults){
return (function (p1__25910_SHARP_){if(cljs.core.truth_(p1__25910_SHARP_.call(null,topic)))
{return p1__25910_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__25910_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7884__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t26025 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26025 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26026){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26026 = meta26026;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26025.cljs$lang$type = true;
cljs.core.async.t26025.cljs$lang$ctorStr = "cljs.core.async/t26025";
cljs.core.async.t26025.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8451__auto__,writer__8452__auto__,opt__8453__auto__){return cljs.core._write.call(null,writer__8452__auto__,"cljs.core.async/t26025");
});})(mults,ensure_mult))
;
cljs.core.async.t26025.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t26025.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t26025.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t26025.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t26025.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t26025.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26025.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t26025.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26027){var self__ = this;
var _26027__$1 = this;return self__.meta26026;
});})(mults,ensure_mult))
;
cljs.core.async.t26025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26027,meta26026__$1){var self__ = this;
var _26027__$1 = this;return (new cljs.core.async.t26025(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26026__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t26025 = ((function (mults,ensure_mult){
return (function __GT_t26025(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26026){return (new cljs.core.async.t26025(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26026));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t26025(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__11010__auto___26139 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11010__auto___26139,mults,ensure_mult,p){
return (function (){var f__11011__auto__ = (function (){var switch__10946__auto__ = ((function (c__11010__auto___26139,mults,ensure_mult,p){
return (function (state_26095){var state_val_26096 = (state_26095[1]);if((state_val_26096 === 7))
{var inst_26091 = (state_26095[2]);var state_26095__$1 = state_26095;var statearr_26097_26140 = state_26095__$1;(statearr_26097_26140[2] = inst_26091);
(statearr_26097_26140[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26096 === 20))
{var state_26095__$1 = state_26095;var statearr_26098_26141 = state_26095__$1;(statearr_26098_26141[2] = null);
(statearr_26098_26141[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26096 === 1))
{var state_26095__$1 = state_26095;var statearr_26099_26142 = state_26095__$1;(statearr_26099_26142[2] = null);
(statearr_26099_26142[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26096 === 4))
{var inst_26030 = (state_26095[7]);var inst_26030__$1 = (state_26095[2]);var inst_26031 = (inst_26030__$1 == null);var state_26095__$1 = (function (){var statearr_26100 = state_26095;(statearr_26100[7] = inst_26030__$1);
return statearr_26100;
})();if(cljs.core.truth_(inst_26031))
{var statearr_26101_26143 = state_26095__$1;(statearr_26101_26143[1] = 5);
} else
{var statearr_26102_26144 = state_26095__$1;(statearr_26102_26144[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26096 === 15))
{var inst_26072 = (state_26095[2]);var state_26095__$1 = state_26095;var statearr_26103_26145 = state_26095__$1;(statearr_26103_26145[2] = inst_26072);
(statearr_26103_26145[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26096 === 21))
{var inst_26078 = (state_26095[8]);var inst_26086 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26078);var state_26095__$1 = state_26095;var statearr_26104_26146 = state_26095__$1;(statearr_26104_26146[2] = inst_26086);
(statearr_26104_26146[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26096 === 13))
{var inst_26054 = (state_26095[9]);var inst_26056 = cljs.core.chunked_seq_QMARK_.call(null,inst_26054);var state_26095__$1 = state_26095;if(inst_26056)
{var statearr_26105_26147 = state_26095__$1;(statearr_26105_26147[1] = 16);
} else
{var statearr_26106_26148 = state_26095__$1;(statearr_26106_26148[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26096 === 22))
{var inst_26088 = (state_26095[2]);var state_26095__$1 = (function (){var statearr_26107 = state_26095;(statearr_26107[10] = inst_26088);
return statearr_26107;
})();var statearr_26108_26149 = state_26095__$1;(statearr_26108_26149[2] = null);
(statearr_26108_26149[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26096 === 6))
{var inst_26030 = (state_26095[7]);var inst_26078 = (state_26095[8]);var inst_26078__$1 = topic_fn.call(null,inst_26030);var inst_26079 = cljs.core.deref.call(null,mults);var inst_26080 = cljs.core.get.call(null,inst_26079,inst_26078__$1);var inst_26081 = cljs.core.async.muxch_STAR_.call(null,inst_26080);var state_26095__$1 = (function (){var statearr_26109 = state_26095;(statearr_26109[8] = inst_26078__$1);
return statearr_26109;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26095__$1,19,inst_26081,inst_26030);
} else
{if((state_val_26096 === 17))
{var inst_26054 = (state_26095[9]);var inst_26063 = cljs.core.first.call(null,inst_26054);var inst_26064 = cljs.core.async.muxch_STAR_.call(null,inst_26063);var inst_26065 = cljs.core.async.close_BANG_.call(null,inst_26064);var inst_26066 = cljs.core.next.call(null,inst_26054);var inst_26040 = inst_26066;var inst_26041 = null;var inst_26042 = 0;var inst_26043 = 0;var state_26095__$1 = (function (){var statearr_26110 = state_26095;(statearr_26110[11] = inst_26040);
(statearr_26110[12] = inst_26043);
(statearr_26110[13] = inst_26065);
(statearr_26110[14] = inst_26041);
(statearr_26110[15] = inst_26042);
return statearr_26110;
})();var statearr_26111_26150 = state_26095__$1;(statearr_26111_26150[2] = null);
(statearr_26111_26150[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26096 === 3))
{var inst_26093 = (state_26095[2]);var state_26095__$1 = state_26095;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26095__$1,inst_26093);
} else
{if((state_val_26096 === 12))
{var inst_26074 = (state_26095[2]);var state_26095__$1 = state_26095;var statearr_26112_26151 = state_26095__$1;(statearr_26112_26151[2] = inst_26074);
(statearr_26112_26151[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26096 === 2))
{var state_26095__$1 = state_26095;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26095__$1,4,ch);
} else
{if((state_val_26096 === 19))
{var inst_26083 = (state_26095[2]);var state_26095__$1 = state_26095;if(cljs.core.truth_(inst_26083))
{var statearr_26113_26152 = state_26095__$1;(statearr_26113_26152[1] = 20);
} else
{var statearr_26114_26153 = state_26095__$1;(statearr_26114_26153[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26096 === 11))
{var inst_26040 = (state_26095[11]);var inst_26054 = (state_26095[9]);var inst_26054__$1 = cljs.core.seq.call(null,inst_26040);var state_26095__$1 = (function (){var statearr_26115 = state_26095;(statearr_26115[9] = inst_26054__$1);
return statearr_26115;
})();if(inst_26054__$1)
{var statearr_26116_26154 = state_26095__$1;(statearr_26116_26154[1] = 13);
} else
{var statearr_26117_26155 = state_26095__$1;(statearr_26117_26155[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26096 === 9))
{var inst_26076 = (state_26095[2]);var state_26095__$1 = state_26095;var statearr_26118_26156 = state_26095__$1;(statearr_26118_26156[2] = inst_26076);
(statearr_26118_26156[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26096 === 5))
{var inst_26037 = cljs.core.deref.call(null,mults);var inst_26038 = cljs.core.vals.call(null,inst_26037);var inst_26039 = cljs.core.seq.call(null,inst_26038);var inst_26040 = inst_26039;var inst_26041 = null;var inst_26042 = 0;var inst_26043 = 0;var state_26095__$1 = (function (){var statearr_26119 = state_26095;(statearr_26119[11] = inst_26040);
(statearr_26119[12] = inst_26043);
(statearr_26119[14] = inst_26041);
(statearr_26119[15] = inst_26042);
return statearr_26119;
})();var statearr_26120_26157 = state_26095__$1;(statearr_26120_26157[2] = null);
(statearr_26120_26157[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26096 === 14))
{var state_26095__$1 = state_26095;var statearr_26124_26158 = state_26095__$1;(statearr_26124_26158[2] = null);
(statearr_26124_26158[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26096 === 16))
{var inst_26054 = (state_26095[9]);var inst_26058 = cljs.core.chunk_first.call(null,inst_26054);var inst_26059 = cljs.core.chunk_rest.call(null,inst_26054);var inst_26060 = cljs.core.count.call(null,inst_26058);var inst_26040 = inst_26059;var inst_26041 = inst_26058;var inst_26042 = inst_26060;var inst_26043 = 0;var state_26095__$1 = (function (){var statearr_26125 = state_26095;(statearr_26125[11] = inst_26040);
(statearr_26125[12] = inst_26043);
(statearr_26125[14] = inst_26041);
(statearr_26125[15] = inst_26042);
return statearr_26125;
})();var statearr_26126_26159 = state_26095__$1;(statearr_26126_26159[2] = null);
(statearr_26126_26159[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26096 === 10))
{var inst_26040 = (state_26095[11]);var inst_26043 = (state_26095[12]);var inst_26041 = (state_26095[14]);var inst_26042 = (state_26095[15]);var inst_26048 = cljs.core._nth.call(null,inst_26041,inst_26043);var inst_26049 = cljs.core.async.muxch_STAR_.call(null,inst_26048);var inst_26050 = cljs.core.async.close_BANG_.call(null,inst_26049);var inst_26051 = (inst_26043 + 1);var tmp26121 = inst_26040;var tmp26122 = inst_26041;var tmp26123 = inst_26042;var inst_26040__$1 = tmp26121;var inst_26041__$1 = tmp26122;var inst_26042__$1 = tmp26123;var inst_26043__$1 = inst_26051;var state_26095__$1 = (function (){var statearr_26127 = state_26095;(statearr_26127[11] = inst_26040__$1);
(statearr_26127[12] = inst_26043__$1);
(statearr_26127[16] = inst_26050);
(statearr_26127[14] = inst_26041__$1);
(statearr_26127[15] = inst_26042__$1);
return statearr_26127;
})();var statearr_26128_26160 = state_26095__$1;(statearr_26128_26160[2] = null);
(statearr_26128_26160[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26096 === 18))
{var inst_26069 = (state_26095[2]);var state_26095__$1 = state_26095;var statearr_26129_26161 = state_26095__$1;(statearr_26129_26161[2] = inst_26069);
(statearr_26129_26161[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26096 === 8))
{var inst_26043 = (state_26095[12]);var inst_26042 = (state_26095[15]);var inst_26045 = (inst_26043 < inst_26042);var inst_26046 = inst_26045;var state_26095__$1 = state_26095;if(cljs.core.truth_(inst_26046))
{var statearr_26130_26162 = state_26095__$1;(statearr_26130_26162[1] = 10);
} else
{var statearr_26131_26163 = state_26095__$1;(statearr_26131_26163[1] = 11);
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
});})(c__11010__auto___26139,mults,ensure_mult,p))
;return ((function (switch__10946__auto__,c__11010__auto___26139,mults,ensure_mult,p){
return (function() {
var state_machine__10947__auto__ = null;
var state_machine__10947__auto____0 = (function (){var statearr_26135 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26135[0] = state_machine__10947__auto__);
(statearr_26135[1] = 1);
return statearr_26135;
});
var state_machine__10947__auto____1 = (function (state_26095){while(true){
var ret_value__10948__auto__ = (function (){try{while(true){
var result__10949__auto__ = switch__10946__auto__.call(null,state_26095);if(cljs.core.keyword_identical_QMARK_.call(null,result__10949__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10949__auto__;
}
break;
}
}catch (e26136){if((e26136 instanceof Object))
{var ex__10950__auto__ = e26136;var statearr_26137_26164 = state_26095;(statearr_26137_26164[5] = ex__10950__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26095);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26136;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10948__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26165 = state_26095;
state_26095 = G__26165;
continue;
}
} else
{return ret_value__10948__auto__;
}
break;
}
});
state_machine__10947__auto__ = function(state_26095){
switch(arguments.length){
case 0:
return state_machine__10947__auto____0.call(this);
case 1:
return state_machine__10947__auto____1.call(this,state_26095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10947__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10947__auto____0;
state_machine__10947__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10947__auto____1;
return state_machine__10947__auto__;
})()
;})(switch__10946__auto__,c__11010__auto___26139,mults,ensure_mult,p))
})();var state__11012__auto__ = (function (){var statearr_26138 = f__11011__auto__.call(null);(statearr_26138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11010__auto___26139);
return statearr_26138;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11012__auto__);
});})(c__11010__auto___26139,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__11010__auto___26302 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11010__auto___26302,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__11011__auto__ = (function (){var switch__10946__auto__ = ((function (c__11010__auto___26302,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26272){var state_val_26273 = (state_26272[1]);if((state_val_26273 === 7))
{var state_26272__$1 = state_26272;var statearr_26274_26303 = state_26272__$1;(statearr_26274_26303[2] = null);
(statearr_26274_26303[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26273 === 1))
{var state_26272__$1 = state_26272;var statearr_26275_26304 = state_26272__$1;(statearr_26275_26304[2] = null);
(statearr_26275_26304[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26273 === 4))
{var inst_26236 = (state_26272[7]);var inst_26238 = (inst_26236 < cnt);var state_26272__$1 = state_26272;if(cljs.core.truth_(inst_26238))
{var statearr_26276_26305 = state_26272__$1;(statearr_26276_26305[1] = 6);
} else
{var statearr_26277_26306 = state_26272__$1;(statearr_26277_26306[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26273 === 15))
{var inst_26268 = (state_26272[2]);var state_26272__$1 = state_26272;var statearr_26278_26307 = state_26272__$1;(statearr_26278_26307[2] = inst_26268);
(statearr_26278_26307[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26273 === 13))
{var inst_26261 = cljs.core.async.close_BANG_.call(null,out);var state_26272__$1 = state_26272;var statearr_26279_26308 = state_26272__$1;(statearr_26279_26308[2] = inst_26261);
(statearr_26279_26308[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26273 === 6))
{var state_26272__$1 = state_26272;var statearr_26280_26309 = state_26272__$1;(statearr_26280_26309[2] = null);
(statearr_26280_26309[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26273 === 3))
{var inst_26270 = (state_26272[2]);var state_26272__$1 = state_26272;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26272__$1,inst_26270);
} else
{if((state_val_26273 === 12))
{var inst_26258 = (state_26272[8]);var inst_26258__$1 = (state_26272[2]);var inst_26259 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26258__$1);var state_26272__$1 = (function (){var statearr_26281 = state_26272;(statearr_26281[8] = inst_26258__$1);
return statearr_26281;
})();if(cljs.core.truth_(inst_26259))
{var statearr_26282_26310 = state_26272__$1;(statearr_26282_26310[1] = 13);
} else
{var statearr_26283_26311 = state_26272__$1;(statearr_26283_26311[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26273 === 2))
{var inst_26235 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_26236 = 0;var state_26272__$1 = (function (){var statearr_26284 = state_26272;(statearr_26284[7] = inst_26236);
(statearr_26284[9] = inst_26235);
return statearr_26284;
})();var statearr_26285_26312 = state_26272__$1;(statearr_26285_26312[2] = null);
(statearr_26285_26312[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26273 === 11))
{var inst_26236 = (state_26272[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26272,10,Object,null,9);var inst_26245 = chs__$1.call(null,inst_26236);var inst_26246 = done.call(null,inst_26236);var inst_26247 = cljs.core.async.take_BANG_.call(null,inst_26245,inst_26246);var state_26272__$1 = state_26272;var statearr_26286_26313 = state_26272__$1;(statearr_26286_26313[2] = inst_26247);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26272__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26273 === 9))
{var inst_26236 = (state_26272[7]);var inst_26249 = (state_26272[2]);var inst_26250 = (inst_26236 + 1);var inst_26236__$1 = inst_26250;var state_26272__$1 = (function (){var statearr_26287 = state_26272;(statearr_26287[10] = inst_26249);
(statearr_26287[7] = inst_26236__$1);
return statearr_26287;
})();var statearr_26288_26314 = state_26272__$1;(statearr_26288_26314[2] = null);
(statearr_26288_26314[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26273 === 5))
{var inst_26256 = (state_26272[2]);var state_26272__$1 = (function (){var statearr_26289 = state_26272;(statearr_26289[11] = inst_26256);
return statearr_26289;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26272__$1,12,dchan);
} else
{if((state_val_26273 === 14))
{var inst_26258 = (state_26272[8]);var inst_26263 = cljs.core.apply.call(null,f,inst_26258);var state_26272__$1 = state_26272;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26272__$1,16,out,inst_26263);
} else
{if((state_val_26273 === 16))
{var inst_26265 = (state_26272[2]);var state_26272__$1 = (function (){var statearr_26290 = state_26272;(statearr_26290[12] = inst_26265);
return statearr_26290;
})();var statearr_26291_26315 = state_26272__$1;(statearr_26291_26315[2] = null);
(statearr_26291_26315[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26273 === 10))
{var inst_26240 = (state_26272[2]);var inst_26241 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_26272__$1 = (function (){var statearr_26292 = state_26272;(statearr_26292[13] = inst_26240);
return statearr_26292;
})();var statearr_26293_26316 = state_26272__$1;(statearr_26293_26316[2] = inst_26241);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26272__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26273 === 8))
{var inst_26254 = (state_26272[2]);var state_26272__$1 = state_26272;var statearr_26294_26317 = state_26272__$1;(statearr_26294_26317[2] = inst_26254);
(statearr_26294_26317[1] = 5);
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
});})(c__11010__auto___26302,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__10946__auto__,c__11010__auto___26302,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__10947__auto__ = null;
var state_machine__10947__auto____0 = (function (){var statearr_26298 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26298[0] = state_machine__10947__auto__);
(statearr_26298[1] = 1);
return statearr_26298;
});
var state_machine__10947__auto____1 = (function (state_26272){while(true){
var ret_value__10948__auto__ = (function (){try{while(true){
var result__10949__auto__ = switch__10946__auto__.call(null,state_26272);if(cljs.core.keyword_identical_QMARK_.call(null,result__10949__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10949__auto__;
}
break;
}
}catch (e26299){if((e26299 instanceof Object))
{var ex__10950__auto__ = e26299;var statearr_26300_26318 = state_26272;(statearr_26300_26318[5] = ex__10950__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26272);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26299;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10948__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26319 = state_26272;
state_26272 = G__26319;
continue;
}
} else
{return ret_value__10948__auto__;
}
break;
}
});
state_machine__10947__auto__ = function(state_26272){
switch(arguments.length){
case 0:
return state_machine__10947__auto____0.call(this);
case 1:
return state_machine__10947__auto____1.call(this,state_26272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10947__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10947__auto____0;
state_machine__10947__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10947__auto____1;
return state_machine__10947__auto__;
})()
;})(switch__10946__auto__,c__11010__auto___26302,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__11012__auto__ = (function (){var statearr_26301 = f__11011__auto__.call(null);(statearr_26301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11010__auto___26302);
return statearr_26301;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11012__auto__);
});})(c__11010__auto___26302,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11010__auto___26427 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11010__auto___26427,out){
return (function (){var f__11011__auto__ = (function (){var switch__10946__auto__ = ((function (c__11010__auto___26427,out){
return (function (state_26403){var state_val_26404 = (state_26403[1]);if((state_val_26404 === 7))
{var inst_26382 = (state_26403[7]);var inst_26383 = (state_26403[8]);var inst_26382__$1 = (state_26403[2]);var inst_26383__$1 = cljs.core.nth.call(null,inst_26382__$1,0,null);var inst_26384 = cljs.core.nth.call(null,inst_26382__$1,1,null);var inst_26385 = (inst_26383__$1 == null);var state_26403__$1 = (function (){var statearr_26405 = state_26403;(statearr_26405[9] = inst_26384);
(statearr_26405[7] = inst_26382__$1);
(statearr_26405[8] = inst_26383__$1);
return statearr_26405;
})();if(cljs.core.truth_(inst_26385))
{var statearr_26406_26428 = state_26403__$1;(statearr_26406_26428[1] = 8);
} else
{var statearr_26407_26429 = state_26403__$1;(statearr_26407_26429[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26404 === 1))
{var inst_26374 = cljs.core.vec.call(null,chs);var inst_26375 = inst_26374;var state_26403__$1 = (function (){var statearr_26408 = state_26403;(statearr_26408[10] = inst_26375);
return statearr_26408;
})();var statearr_26409_26430 = state_26403__$1;(statearr_26409_26430[2] = null);
(statearr_26409_26430[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26404 === 4))
{var inst_26375 = (state_26403[10]);var state_26403__$1 = state_26403;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_26403__$1,7,inst_26375);
} else
{if((state_val_26404 === 6))
{var inst_26399 = (state_26403[2]);var state_26403__$1 = state_26403;var statearr_26410_26431 = state_26403__$1;(statearr_26410_26431[2] = inst_26399);
(statearr_26410_26431[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26404 === 3))
{var inst_26401 = (state_26403[2]);var state_26403__$1 = state_26403;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26403__$1,inst_26401);
} else
{if((state_val_26404 === 2))
{var inst_26375 = (state_26403[10]);var inst_26377 = cljs.core.count.call(null,inst_26375);var inst_26378 = (inst_26377 > 0);var state_26403__$1 = state_26403;if(cljs.core.truth_(inst_26378))
{var statearr_26412_26432 = state_26403__$1;(statearr_26412_26432[1] = 4);
} else
{var statearr_26413_26433 = state_26403__$1;(statearr_26413_26433[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26404 === 11))
{var inst_26375 = (state_26403[10]);var inst_26392 = (state_26403[2]);var tmp26411 = inst_26375;var inst_26375__$1 = tmp26411;var state_26403__$1 = (function (){var statearr_26414 = state_26403;(statearr_26414[11] = inst_26392);
(statearr_26414[10] = inst_26375__$1);
return statearr_26414;
})();var statearr_26415_26434 = state_26403__$1;(statearr_26415_26434[2] = null);
(statearr_26415_26434[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26404 === 9))
{var inst_26383 = (state_26403[8]);var state_26403__$1 = state_26403;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26403__$1,11,out,inst_26383);
} else
{if((state_val_26404 === 5))
{var inst_26397 = cljs.core.async.close_BANG_.call(null,out);var state_26403__$1 = state_26403;var statearr_26416_26435 = state_26403__$1;(statearr_26416_26435[2] = inst_26397);
(statearr_26416_26435[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26404 === 10))
{var inst_26395 = (state_26403[2]);var state_26403__$1 = state_26403;var statearr_26417_26436 = state_26403__$1;(statearr_26417_26436[2] = inst_26395);
(statearr_26417_26436[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26404 === 8))
{var inst_26384 = (state_26403[9]);var inst_26382 = (state_26403[7]);var inst_26383 = (state_26403[8]);var inst_26375 = (state_26403[10]);var inst_26387 = (function (){var c = inst_26384;var v = inst_26383;var vec__26380 = inst_26382;var cs = inst_26375;return ((function (c,v,vec__26380,cs,inst_26384,inst_26382,inst_26383,inst_26375,state_val_26404,c__11010__auto___26427,out){
return (function (p1__26320_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__26320_SHARP_);
});
;})(c,v,vec__26380,cs,inst_26384,inst_26382,inst_26383,inst_26375,state_val_26404,c__11010__auto___26427,out))
})();var inst_26388 = cljs.core.filterv.call(null,inst_26387,inst_26375);var inst_26375__$1 = inst_26388;var state_26403__$1 = (function (){var statearr_26418 = state_26403;(statearr_26418[10] = inst_26375__$1);
return statearr_26418;
})();var statearr_26419_26437 = state_26403__$1;(statearr_26419_26437[2] = null);
(statearr_26419_26437[1] = 2);
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
});})(c__11010__auto___26427,out))
;return ((function (switch__10946__auto__,c__11010__auto___26427,out){
return (function() {
var state_machine__10947__auto__ = null;
var state_machine__10947__auto____0 = (function (){var statearr_26423 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26423[0] = state_machine__10947__auto__);
(statearr_26423[1] = 1);
return statearr_26423;
});
var state_machine__10947__auto____1 = (function (state_26403){while(true){
var ret_value__10948__auto__ = (function (){try{while(true){
var result__10949__auto__ = switch__10946__auto__.call(null,state_26403);if(cljs.core.keyword_identical_QMARK_.call(null,result__10949__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10949__auto__;
}
break;
}
}catch (e26424){if((e26424 instanceof Object))
{var ex__10950__auto__ = e26424;var statearr_26425_26438 = state_26403;(statearr_26425_26438[5] = ex__10950__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26403);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26424;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10948__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26439 = state_26403;
state_26403 = G__26439;
continue;
}
} else
{return ret_value__10948__auto__;
}
break;
}
});
state_machine__10947__auto__ = function(state_26403){
switch(arguments.length){
case 0:
return state_machine__10947__auto____0.call(this);
case 1:
return state_machine__10947__auto____1.call(this,state_26403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10947__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10947__auto____0;
state_machine__10947__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10947__auto____1;
return state_machine__10947__auto__;
})()
;})(switch__10946__auto__,c__11010__auto___26427,out))
})();var state__11012__auto__ = (function (){var statearr_26426 = f__11011__auto__.call(null);(statearr_26426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11010__auto___26427);
return statearr_26426;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11012__auto__);
});})(c__11010__auto___26427,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11010__auto___26532 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11010__auto___26532,out){
return (function (){var f__11011__auto__ = (function (){var switch__10946__auto__ = ((function (c__11010__auto___26532,out){
return (function (state_26509){var state_val_26510 = (state_26509[1]);if((state_val_26510 === 7))
{var inst_26491 = (state_26509[7]);var inst_26491__$1 = (state_26509[2]);var inst_26492 = (inst_26491__$1 == null);var inst_26493 = cljs.core.not.call(null,inst_26492);var state_26509__$1 = (function (){var statearr_26511 = state_26509;(statearr_26511[7] = inst_26491__$1);
return statearr_26511;
})();if(inst_26493)
{var statearr_26512_26533 = state_26509__$1;(statearr_26512_26533[1] = 8);
} else
{var statearr_26513_26534 = state_26509__$1;(statearr_26513_26534[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26510 === 1))
{var inst_26486 = 0;var state_26509__$1 = (function (){var statearr_26514 = state_26509;(statearr_26514[8] = inst_26486);
return statearr_26514;
})();var statearr_26515_26535 = state_26509__$1;(statearr_26515_26535[2] = null);
(statearr_26515_26535[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26510 === 4))
{var state_26509__$1 = state_26509;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26509__$1,7,ch);
} else
{if((state_val_26510 === 6))
{var inst_26504 = (state_26509[2]);var state_26509__$1 = state_26509;var statearr_26516_26536 = state_26509__$1;(statearr_26516_26536[2] = inst_26504);
(statearr_26516_26536[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26510 === 3))
{var inst_26506 = (state_26509[2]);var inst_26507 = cljs.core.async.close_BANG_.call(null,out);var state_26509__$1 = (function (){var statearr_26517 = state_26509;(statearr_26517[9] = inst_26506);
return statearr_26517;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26509__$1,inst_26507);
} else
{if((state_val_26510 === 2))
{var inst_26486 = (state_26509[8]);var inst_26488 = (inst_26486 < n);var state_26509__$1 = state_26509;if(cljs.core.truth_(inst_26488))
{var statearr_26518_26537 = state_26509__$1;(statearr_26518_26537[1] = 4);
} else
{var statearr_26519_26538 = state_26509__$1;(statearr_26519_26538[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26510 === 11))
{var inst_26486 = (state_26509[8]);var inst_26496 = (state_26509[2]);var inst_26497 = (inst_26486 + 1);var inst_26486__$1 = inst_26497;var state_26509__$1 = (function (){var statearr_26520 = state_26509;(statearr_26520[10] = inst_26496);
(statearr_26520[8] = inst_26486__$1);
return statearr_26520;
})();var statearr_26521_26539 = state_26509__$1;(statearr_26521_26539[2] = null);
(statearr_26521_26539[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26510 === 9))
{var state_26509__$1 = state_26509;var statearr_26522_26540 = state_26509__$1;(statearr_26522_26540[2] = null);
(statearr_26522_26540[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26510 === 5))
{var state_26509__$1 = state_26509;var statearr_26523_26541 = state_26509__$1;(statearr_26523_26541[2] = null);
(statearr_26523_26541[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26510 === 10))
{var inst_26501 = (state_26509[2]);var state_26509__$1 = state_26509;var statearr_26524_26542 = state_26509__$1;(statearr_26524_26542[2] = inst_26501);
(statearr_26524_26542[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26510 === 8))
{var inst_26491 = (state_26509[7]);var state_26509__$1 = state_26509;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26509__$1,11,out,inst_26491);
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
});})(c__11010__auto___26532,out))
;return ((function (switch__10946__auto__,c__11010__auto___26532,out){
return (function() {
var state_machine__10947__auto__ = null;
var state_machine__10947__auto____0 = (function (){var statearr_26528 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26528[0] = state_machine__10947__auto__);
(statearr_26528[1] = 1);
return statearr_26528;
});
var state_machine__10947__auto____1 = (function (state_26509){while(true){
var ret_value__10948__auto__ = (function (){try{while(true){
var result__10949__auto__ = switch__10946__auto__.call(null,state_26509);if(cljs.core.keyword_identical_QMARK_.call(null,result__10949__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10949__auto__;
}
break;
}
}catch (e26529){if((e26529 instanceof Object))
{var ex__10950__auto__ = e26529;var statearr_26530_26543 = state_26509;(statearr_26530_26543[5] = ex__10950__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26509);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26529;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10948__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26544 = state_26509;
state_26509 = G__26544;
continue;
}
} else
{return ret_value__10948__auto__;
}
break;
}
});
state_machine__10947__auto__ = function(state_26509){
switch(arguments.length){
case 0:
return state_machine__10947__auto____0.call(this);
case 1:
return state_machine__10947__auto____1.call(this,state_26509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10947__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10947__auto____0;
state_machine__10947__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10947__auto____1;
return state_machine__10947__auto__;
})()
;})(switch__10946__auto__,c__11010__auto___26532,out))
})();var state__11012__auto__ = (function (){var statearr_26531 = f__11011__auto__.call(null);(statearr_26531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11010__auto___26532);
return statearr_26531;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11012__auto__);
});})(c__11010__auto___26532,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11010__auto___26641 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11010__auto___26641,out){
return (function (){var f__11011__auto__ = (function (){var switch__10946__auto__ = ((function (c__11010__auto___26641,out){
return (function (state_26616){var state_val_26617 = (state_26616[1]);if((state_val_26617 === 7))
{var inst_26611 = (state_26616[2]);var state_26616__$1 = state_26616;var statearr_26618_26642 = state_26616__$1;(statearr_26618_26642[2] = inst_26611);
(statearr_26618_26642[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26617 === 1))
{var inst_26593 = null;var state_26616__$1 = (function (){var statearr_26619 = state_26616;(statearr_26619[7] = inst_26593);
return statearr_26619;
})();var statearr_26620_26643 = state_26616__$1;(statearr_26620_26643[2] = null);
(statearr_26620_26643[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26617 === 4))
{var inst_26596 = (state_26616[8]);var inst_26596__$1 = (state_26616[2]);var inst_26597 = (inst_26596__$1 == null);var inst_26598 = cljs.core.not.call(null,inst_26597);var state_26616__$1 = (function (){var statearr_26621 = state_26616;(statearr_26621[8] = inst_26596__$1);
return statearr_26621;
})();if(inst_26598)
{var statearr_26622_26644 = state_26616__$1;(statearr_26622_26644[1] = 5);
} else
{var statearr_26623_26645 = state_26616__$1;(statearr_26623_26645[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26617 === 6))
{var state_26616__$1 = state_26616;var statearr_26624_26646 = state_26616__$1;(statearr_26624_26646[2] = null);
(statearr_26624_26646[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26617 === 3))
{var inst_26613 = (state_26616[2]);var inst_26614 = cljs.core.async.close_BANG_.call(null,out);var state_26616__$1 = (function (){var statearr_26625 = state_26616;(statearr_26625[9] = inst_26613);
return statearr_26625;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26616__$1,inst_26614);
} else
{if((state_val_26617 === 2))
{var state_26616__$1 = state_26616;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26616__$1,4,ch);
} else
{if((state_val_26617 === 11))
{var inst_26596 = (state_26616[8]);var inst_26605 = (state_26616[2]);var inst_26593 = inst_26596;var state_26616__$1 = (function (){var statearr_26626 = state_26616;(statearr_26626[7] = inst_26593);
(statearr_26626[10] = inst_26605);
return statearr_26626;
})();var statearr_26627_26647 = state_26616__$1;(statearr_26627_26647[2] = null);
(statearr_26627_26647[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26617 === 9))
{var inst_26596 = (state_26616[8]);var state_26616__$1 = state_26616;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26616__$1,11,out,inst_26596);
} else
{if((state_val_26617 === 5))
{var inst_26596 = (state_26616[8]);var inst_26593 = (state_26616[7]);var inst_26600 = cljs.core._EQ_.call(null,inst_26596,inst_26593);var state_26616__$1 = state_26616;if(inst_26600)
{var statearr_26629_26648 = state_26616__$1;(statearr_26629_26648[1] = 8);
} else
{var statearr_26630_26649 = state_26616__$1;(statearr_26630_26649[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26617 === 10))
{var inst_26608 = (state_26616[2]);var state_26616__$1 = state_26616;var statearr_26631_26650 = state_26616__$1;(statearr_26631_26650[2] = inst_26608);
(statearr_26631_26650[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26617 === 8))
{var inst_26593 = (state_26616[7]);var tmp26628 = inst_26593;var inst_26593__$1 = tmp26628;var state_26616__$1 = (function (){var statearr_26632 = state_26616;(statearr_26632[7] = inst_26593__$1);
return statearr_26632;
})();var statearr_26633_26651 = state_26616__$1;(statearr_26633_26651[2] = null);
(statearr_26633_26651[1] = 2);
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
});})(c__11010__auto___26641,out))
;return ((function (switch__10946__auto__,c__11010__auto___26641,out){
return (function() {
var state_machine__10947__auto__ = null;
var state_machine__10947__auto____0 = (function (){var statearr_26637 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26637[0] = state_machine__10947__auto__);
(statearr_26637[1] = 1);
return statearr_26637;
});
var state_machine__10947__auto____1 = (function (state_26616){while(true){
var ret_value__10948__auto__ = (function (){try{while(true){
var result__10949__auto__ = switch__10946__auto__.call(null,state_26616);if(cljs.core.keyword_identical_QMARK_.call(null,result__10949__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10949__auto__;
}
break;
}
}catch (e26638){if((e26638 instanceof Object))
{var ex__10950__auto__ = e26638;var statearr_26639_26652 = state_26616;(statearr_26639_26652[5] = ex__10950__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26616);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26638;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10948__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26653 = state_26616;
state_26616 = G__26653;
continue;
}
} else
{return ret_value__10948__auto__;
}
break;
}
});
state_machine__10947__auto__ = function(state_26616){
switch(arguments.length){
case 0:
return state_machine__10947__auto____0.call(this);
case 1:
return state_machine__10947__auto____1.call(this,state_26616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10947__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10947__auto____0;
state_machine__10947__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10947__auto____1;
return state_machine__10947__auto__;
})()
;})(switch__10946__auto__,c__11010__auto___26641,out))
})();var state__11012__auto__ = (function (){var statearr_26640 = f__11011__auto__.call(null);(statearr_26640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11010__auto___26641);
return statearr_26640;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11012__auto__);
});})(c__11010__auto___26641,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11010__auto___26788 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11010__auto___26788,out){
return (function (){var f__11011__auto__ = (function (){var switch__10946__auto__ = ((function (c__11010__auto___26788,out){
return (function (state_26758){var state_val_26759 = (state_26758[1]);if((state_val_26759 === 7))
{var inst_26754 = (state_26758[2]);var state_26758__$1 = state_26758;var statearr_26760_26789 = state_26758__$1;(statearr_26760_26789[2] = inst_26754);
(statearr_26760_26789[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26759 === 1))
{var inst_26721 = (new Array(n));var inst_26722 = inst_26721;var inst_26723 = 0;var state_26758__$1 = (function (){var statearr_26761 = state_26758;(statearr_26761[7] = inst_26722);
(statearr_26761[8] = inst_26723);
return statearr_26761;
})();var statearr_26762_26790 = state_26758__$1;(statearr_26762_26790[2] = null);
(statearr_26762_26790[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26759 === 4))
{var inst_26726 = (state_26758[9]);var inst_26726__$1 = (state_26758[2]);var inst_26727 = (inst_26726__$1 == null);var inst_26728 = cljs.core.not.call(null,inst_26727);var state_26758__$1 = (function (){var statearr_26763 = state_26758;(statearr_26763[9] = inst_26726__$1);
return statearr_26763;
})();if(inst_26728)
{var statearr_26764_26791 = state_26758__$1;(statearr_26764_26791[1] = 5);
} else
{var statearr_26765_26792 = state_26758__$1;(statearr_26765_26792[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26759 === 15))
{var inst_26748 = (state_26758[2]);var state_26758__$1 = state_26758;var statearr_26766_26793 = state_26758__$1;(statearr_26766_26793[2] = inst_26748);
(statearr_26766_26793[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26759 === 13))
{var state_26758__$1 = state_26758;var statearr_26767_26794 = state_26758__$1;(statearr_26767_26794[2] = null);
(statearr_26767_26794[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26759 === 6))
{var inst_26723 = (state_26758[8]);var inst_26744 = (inst_26723 > 0);var state_26758__$1 = state_26758;if(cljs.core.truth_(inst_26744))
{var statearr_26768_26795 = state_26758__$1;(statearr_26768_26795[1] = 12);
} else
{var statearr_26769_26796 = state_26758__$1;(statearr_26769_26796[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26759 === 3))
{var inst_26756 = (state_26758[2]);var state_26758__$1 = state_26758;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26758__$1,inst_26756);
} else
{if((state_val_26759 === 12))
{var inst_26722 = (state_26758[7]);var inst_26746 = cljs.core.vec.call(null,inst_26722);var state_26758__$1 = state_26758;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26758__$1,15,out,inst_26746);
} else
{if((state_val_26759 === 2))
{var state_26758__$1 = state_26758;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26758__$1,4,ch);
} else
{if((state_val_26759 === 11))
{var inst_26738 = (state_26758[2]);var inst_26739 = (new Array(n));var inst_26722 = inst_26739;var inst_26723 = 0;var state_26758__$1 = (function (){var statearr_26770 = state_26758;(statearr_26770[10] = inst_26738);
(statearr_26770[7] = inst_26722);
(statearr_26770[8] = inst_26723);
return statearr_26770;
})();var statearr_26771_26797 = state_26758__$1;(statearr_26771_26797[2] = null);
(statearr_26771_26797[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26759 === 9))
{var inst_26722 = (state_26758[7]);var inst_26736 = cljs.core.vec.call(null,inst_26722);var state_26758__$1 = state_26758;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26758__$1,11,out,inst_26736);
} else
{if((state_val_26759 === 5))
{var inst_26731 = (state_26758[11]);var inst_26722 = (state_26758[7]);var inst_26723 = (state_26758[8]);var inst_26726 = (state_26758[9]);var inst_26730 = (inst_26722[inst_26723] = inst_26726);var inst_26731__$1 = (inst_26723 + 1);var inst_26732 = (inst_26731__$1 < n);var state_26758__$1 = (function (){var statearr_26772 = state_26758;(statearr_26772[11] = inst_26731__$1);
(statearr_26772[12] = inst_26730);
return statearr_26772;
})();if(cljs.core.truth_(inst_26732))
{var statearr_26773_26798 = state_26758__$1;(statearr_26773_26798[1] = 8);
} else
{var statearr_26774_26799 = state_26758__$1;(statearr_26774_26799[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26759 === 14))
{var inst_26751 = (state_26758[2]);var inst_26752 = cljs.core.async.close_BANG_.call(null,out);var state_26758__$1 = (function (){var statearr_26776 = state_26758;(statearr_26776[13] = inst_26751);
return statearr_26776;
})();var statearr_26777_26800 = state_26758__$1;(statearr_26777_26800[2] = inst_26752);
(statearr_26777_26800[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26759 === 10))
{var inst_26742 = (state_26758[2]);var state_26758__$1 = state_26758;var statearr_26778_26801 = state_26758__$1;(statearr_26778_26801[2] = inst_26742);
(statearr_26778_26801[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26759 === 8))
{var inst_26731 = (state_26758[11]);var inst_26722 = (state_26758[7]);var tmp26775 = inst_26722;var inst_26722__$1 = tmp26775;var inst_26723 = inst_26731;var state_26758__$1 = (function (){var statearr_26779 = state_26758;(statearr_26779[7] = inst_26722__$1);
(statearr_26779[8] = inst_26723);
return statearr_26779;
})();var statearr_26780_26802 = state_26758__$1;(statearr_26780_26802[2] = null);
(statearr_26780_26802[1] = 2);
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
});})(c__11010__auto___26788,out))
;return ((function (switch__10946__auto__,c__11010__auto___26788,out){
return (function() {
var state_machine__10947__auto__ = null;
var state_machine__10947__auto____0 = (function (){var statearr_26784 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26784[0] = state_machine__10947__auto__);
(statearr_26784[1] = 1);
return statearr_26784;
});
var state_machine__10947__auto____1 = (function (state_26758){while(true){
var ret_value__10948__auto__ = (function (){try{while(true){
var result__10949__auto__ = switch__10946__auto__.call(null,state_26758);if(cljs.core.keyword_identical_QMARK_.call(null,result__10949__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10949__auto__;
}
break;
}
}catch (e26785){if((e26785 instanceof Object))
{var ex__10950__auto__ = e26785;var statearr_26786_26803 = state_26758;(statearr_26786_26803[5] = ex__10950__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26758);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26785;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10948__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26804 = state_26758;
state_26758 = G__26804;
continue;
}
} else
{return ret_value__10948__auto__;
}
break;
}
});
state_machine__10947__auto__ = function(state_26758){
switch(arguments.length){
case 0:
return state_machine__10947__auto____0.call(this);
case 1:
return state_machine__10947__auto____1.call(this,state_26758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10947__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10947__auto____0;
state_machine__10947__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10947__auto____1;
return state_machine__10947__auto__;
})()
;})(switch__10946__auto__,c__11010__auto___26788,out))
})();var state__11012__auto__ = (function (){var statearr_26787 = f__11011__auto__.call(null);(statearr_26787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11010__auto___26788);
return statearr_26787;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11012__auto__);
});})(c__11010__auto___26788,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11010__auto___26947 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11010__auto___26947,out){
return (function (){var f__11011__auto__ = (function (){var switch__10946__auto__ = ((function (c__11010__auto___26947,out){
return (function (state_26917){var state_val_26918 = (state_26917[1]);if((state_val_26918 === 7))
{var inst_26913 = (state_26917[2]);var state_26917__$1 = state_26917;var statearr_26919_26948 = state_26917__$1;(statearr_26919_26948[2] = inst_26913);
(statearr_26919_26948[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26918 === 1))
{var inst_26876 = [];var inst_26877 = inst_26876;var inst_26878 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_26917__$1 = (function (){var statearr_26920 = state_26917;(statearr_26920[7] = inst_26877);
(statearr_26920[8] = inst_26878);
return statearr_26920;
})();var statearr_26921_26949 = state_26917__$1;(statearr_26921_26949[2] = null);
(statearr_26921_26949[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26918 === 4))
{var inst_26881 = (state_26917[9]);var inst_26881__$1 = (state_26917[2]);var inst_26882 = (inst_26881__$1 == null);var inst_26883 = cljs.core.not.call(null,inst_26882);var state_26917__$1 = (function (){var statearr_26922 = state_26917;(statearr_26922[9] = inst_26881__$1);
return statearr_26922;
})();if(inst_26883)
{var statearr_26923_26950 = state_26917__$1;(statearr_26923_26950[1] = 5);
} else
{var statearr_26924_26951 = state_26917__$1;(statearr_26924_26951[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26918 === 15))
{var inst_26907 = (state_26917[2]);var state_26917__$1 = state_26917;var statearr_26925_26952 = state_26917__$1;(statearr_26925_26952[2] = inst_26907);
(statearr_26925_26952[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26918 === 13))
{var state_26917__$1 = state_26917;var statearr_26926_26953 = state_26917__$1;(statearr_26926_26953[2] = null);
(statearr_26926_26953[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26918 === 6))
{var inst_26877 = (state_26917[7]);var inst_26902 = inst_26877.length;var inst_26903 = (inst_26902 > 0);var state_26917__$1 = state_26917;if(cljs.core.truth_(inst_26903))
{var statearr_26927_26954 = state_26917__$1;(statearr_26927_26954[1] = 12);
} else
{var statearr_26928_26955 = state_26917__$1;(statearr_26928_26955[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26918 === 3))
{var inst_26915 = (state_26917[2]);var state_26917__$1 = state_26917;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26917__$1,inst_26915);
} else
{if((state_val_26918 === 12))
{var inst_26877 = (state_26917[7]);var inst_26905 = cljs.core.vec.call(null,inst_26877);var state_26917__$1 = state_26917;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26917__$1,15,out,inst_26905);
} else
{if((state_val_26918 === 2))
{var state_26917__$1 = state_26917;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26917__$1,4,ch);
} else
{if((state_val_26918 === 11))
{var inst_26885 = (state_26917[10]);var inst_26881 = (state_26917[9]);var inst_26895 = (state_26917[2]);var inst_26896 = [];var inst_26897 = inst_26896.push(inst_26881);var inst_26877 = inst_26896;var inst_26878 = inst_26885;var state_26917__$1 = (function (){var statearr_26929 = state_26917;(statearr_26929[11] = inst_26895);
(statearr_26929[12] = inst_26897);
(statearr_26929[7] = inst_26877);
(statearr_26929[8] = inst_26878);
return statearr_26929;
})();var statearr_26930_26956 = state_26917__$1;(statearr_26930_26956[2] = null);
(statearr_26930_26956[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26918 === 9))
{var inst_26877 = (state_26917[7]);var inst_26893 = cljs.core.vec.call(null,inst_26877);var state_26917__$1 = state_26917;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26917__$1,11,out,inst_26893);
} else
{if((state_val_26918 === 5))
{var inst_26885 = (state_26917[10]);var inst_26881 = (state_26917[9]);var inst_26878 = (state_26917[8]);var inst_26885__$1 = f.call(null,inst_26881);var inst_26886 = cljs.core._EQ_.call(null,inst_26885__$1,inst_26878);var inst_26887 = cljs.core.keyword_identical_QMARK_.call(null,inst_26878,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_26888 = (inst_26886) || (inst_26887);var state_26917__$1 = (function (){var statearr_26931 = state_26917;(statearr_26931[10] = inst_26885__$1);
return statearr_26931;
})();if(cljs.core.truth_(inst_26888))
{var statearr_26932_26957 = state_26917__$1;(statearr_26932_26957[1] = 8);
} else
{var statearr_26933_26958 = state_26917__$1;(statearr_26933_26958[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26918 === 14))
{var inst_26910 = (state_26917[2]);var inst_26911 = cljs.core.async.close_BANG_.call(null,out);var state_26917__$1 = (function (){var statearr_26935 = state_26917;(statearr_26935[13] = inst_26910);
return statearr_26935;
})();var statearr_26936_26959 = state_26917__$1;(statearr_26936_26959[2] = inst_26911);
(statearr_26936_26959[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26918 === 10))
{var inst_26900 = (state_26917[2]);var state_26917__$1 = state_26917;var statearr_26937_26960 = state_26917__$1;(statearr_26937_26960[2] = inst_26900);
(statearr_26937_26960[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26918 === 8))
{var inst_26885 = (state_26917[10]);var inst_26877 = (state_26917[7]);var inst_26881 = (state_26917[9]);var inst_26890 = inst_26877.push(inst_26881);var tmp26934 = inst_26877;var inst_26877__$1 = tmp26934;var inst_26878 = inst_26885;var state_26917__$1 = (function (){var statearr_26938 = state_26917;(statearr_26938[14] = inst_26890);
(statearr_26938[7] = inst_26877__$1);
(statearr_26938[8] = inst_26878);
return statearr_26938;
})();var statearr_26939_26961 = state_26917__$1;(statearr_26939_26961[2] = null);
(statearr_26939_26961[1] = 2);
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
});})(c__11010__auto___26947,out))
;return ((function (switch__10946__auto__,c__11010__auto___26947,out){
return (function() {
var state_machine__10947__auto__ = null;
var state_machine__10947__auto____0 = (function (){var statearr_26943 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26943[0] = state_machine__10947__auto__);
(statearr_26943[1] = 1);
return statearr_26943;
});
var state_machine__10947__auto____1 = (function (state_26917){while(true){
var ret_value__10948__auto__ = (function (){try{while(true){
var result__10949__auto__ = switch__10946__auto__.call(null,state_26917);if(cljs.core.keyword_identical_QMARK_.call(null,result__10949__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10949__auto__;
}
break;
}
}catch (e26944){if((e26944 instanceof Object))
{var ex__10950__auto__ = e26944;var statearr_26945_26962 = state_26917;(statearr_26945_26962[5] = ex__10950__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26917);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26944;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10948__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26963 = state_26917;
state_26917 = G__26963;
continue;
}
} else
{return ret_value__10948__auto__;
}
break;
}
});
state_machine__10947__auto__ = function(state_26917){
switch(arguments.length){
case 0:
return state_machine__10947__auto____0.call(this);
case 1:
return state_machine__10947__auto____1.call(this,state_26917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10947__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10947__auto____0;
state_machine__10947__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10947__auto____1;
return state_machine__10947__auto__;
})()
;})(switch__10946__auto__,c__11010__auto___26947,out))
})();var state__11012__auto__ = (function (){var statearr_26946 = f__11011__auto__.call(null);(statearr_26946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11010__auto___26947);
return statearr_26946;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11012__auto__);
});})(c__11010__auto___26947,out))
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
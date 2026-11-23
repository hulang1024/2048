goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50913 = (function (f,blockable,meta50914){
this.f = f;
this.blockable = blockable;
this.meta50914 = meta50914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50915,meta50914__$1){
var self__ = this;
var _50915__$1 = this;
return (new cljs.core.async.t_cljs$core$async50913(self__.f,self__.blockable,meta50914__$1));
}));

(cljs.core.async.t_cljs$core$async50913.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50915){
var self__ = this;
var _50915__$1 = this;
return self__.meta50914;
}));

(cljs.core.async.t_cljs$core$async50913.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50913.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50913.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async50913.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async50913.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta50914","meta50914",-1098981692,null)], null);
}));

(cljs.core.async.t_cljs$core$async50913.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50913.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50913");

(cljs.core.async.t_cljs$core$async50913.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async50913");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50913.
 */
cljs.core.async.__GT_t_cljs$core$async50913 = (function cljs$core$async$__GT_t_cljs$core$async50913(f,blockable,meta50914){
return (new cljs.core.async.t_cljs$core$async50913(f,blockable,meta50914));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__50907 = arguments.length;
switch (G__50907) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async50913(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__50931 = arguments.length;
switch (G__50931) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error((""+"Assert failed: "+"buffer must be supplied when transducer is"+"\n"+"buf-or-n")));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__50934 = arguments.length;
switch (G__50934) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__50937 = arguments.length;
switch (G__50937) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_52625 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_52625) : fn1.call(null,val_52625));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_52625) : fn1.call(null,val_52625));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__50948 = arguments.length;
switch (G__50948) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5823__auto__)){
var ret = temp__5823__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5823__auto__)){
var retb = temp__5823__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5762__auto___52627 = n;
var x_52628 = (0);
while(true){
if((x_52628 < n__5762__auto___52627)){
(a[x_52628] = x_52628);

var G__52629 = (x_52628 + (1));
x_52628 = G__52629;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50956 = (function (flag,meta50957){
this.flag = flag;
this.meta50957 = meta50957;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50958,meta50957__$1){
var self__ = this;
var _50958__$1 = this;
return (new cljs.core.async.t_cljs$core$async50956(self__.flag,meta50957__$1));
}));

(cljs.core.async.t_cljs$core$async50956.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50958){
var self__ = this;
var _50958__$1 = this;
return self__.meta50957;
}));

(cljs.core.async.t_cljs$core$async50956.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50956.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async50956.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50956.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async50956.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta50957","meta50957",-105513505,null)], null);
}));

(cljs.core.async.t_cljs$core$async50956.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50956.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50956");

(cljs.core.async.t_cljs$core$async50956.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async50956");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50956.
 */
cljs.core.async.__GT_t_cljs$core$async50956 = (function cljs$core$async$__GT_t_cljs$core$async50956(flag,meta50957){
return (new cljs.core.async.t_cljs$core$async50956(flag,meta50957));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async50956(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50961 = (function (flag,cb,meta50962){
this.flag = flag;
this.cb = cb;
this.meta50962 = meta50962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50963,meta50962__$1){
var self__ = this;
var _50963__$1 = this;
return (new cljs.core.async.t_cljs$core$async50961(self__.flag,self__.cb,meta50962__$1));
}));

(cljs.core.async.t_cljs$core$async50961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50963){
var self__ = this;
var _50963__$1 = this;
return self__.meta50962;
}));

(cljs.core.async.t_cljs$core$async50961.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50961.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async50961.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50961.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async50961.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta50962","meta50962",320087292,null)], null);
}));

(cljs.core.async.t_cljs$core$async50961.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50961.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50961");

(cljs.core.async.t_cljs$core$async50961.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async50961");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50961.
 */
cljs.core.async.__GT_t_cljs$core$async50961 = (function cljs$core$async$__GT_t_cljs$core$async50961(flag,cb,meta50962){
return (new cljs.core.async.t_cljs$core$async50961(flag,cb,meta50962));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async50961(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error((""+"Assert failed: "+"alts must have at least one channel operation"+"\n"+"(pos? (count ports))")));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_52630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_52630)){
if((!(((port_52630.cljs$core$IFn$_invoke$arity$1 ? port_52630.cljs$core$IFn$_invoke$arity$1((1)) : port_52630.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__52631 = (i + (1));
i = G__52631;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__50971_SHARP_){
var G__50979 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50971_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50979) : fret.call(null,G__50979));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__50972_SHARP_){
var G__50980 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50972_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50980) : fret.call(null,G__50980));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5162__auto__ = wport;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return port;
}
})()], null));
} else {
var G__52632 = (i + (1));
i = G__52632;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5162__auto__ = ret;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5825__auto__ = (function (){var and__5160__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5160__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var got = temp__5825__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___52633 = arguments.length;
var i__5898__auto___52634 = (0);
while(true){
if((i__5898__auto___52634 < len__5897__auto___52633)){
args__5903__auto__.push((arguments[i__5898__auto___52634]));

var G__52635 = (i__5898__auto___52634 + (1));
i__5898__auto___52634 = G__52635;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__50999){
var map__51000 = p__50999;
var map__51000__$1 = cljs.core.__destructure_map(map__51000);
var opts = map__51000__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq50983){
var G__50984 = cljs.core.first(seq50983);
var seq50983__$1 = cljs.core.next(seq50983);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50984,seq50983__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__51008 = arguments.length;
switch (G__51008) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__50810__auto___52639 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50811__auto__ = (function (){var switch__50693__auto__ = (function (state_51043){
var state_val_51044 = (state_51043[(1)]);
if((state_val_51044 === (7))){
var inst_51036 = (state_51043[(2)]);
var state_51043__$1 = state_51043;
var statearr_51050_52640 = state_51043__$1;
(statearr_51050_52640[(2)] = inst_51036);

(statearr_51050_52640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51044 === (1))){
var state_51043__$1 = state_51043;
var statearr_51056_52641 = state_51043__$1;
(statearr_51056_52641[(2)] = null);

(statearr_51056_52641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51044 === (4))){
var inst_51018 = (state_51043[(7)]);
var inst_51018__$1 = (state_51043[(2)]);
var inst_51019 = (inst_51018__$1 == null);
var state_51043__$1 = (function (){var statearr_51061 = state_51043;
(statearr_51061[(7)] = inst_51018__$1);

return statearr_51061;
})();
if(cljs.core.truth_(inst_51019)){
var statearr_51064_52642 = state_51043__$1;
(statearr_51064_52642[(1)] = (5));

} else {
var statearr_51068_52643 = state_51043__$1;
(statearr_51068_52643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51044 === (13))){
var state_51043__$1 = state_51043;
var statearr_51070_52644 = state_51043__$1;
(statearr_51070_52644[(2)] = null);

(statearr_51070_52644[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51044 === (6))){
var inst_51018 = (state_51043[(7)]);
var state_51043__$1 = state_51043;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51043__$1,(11),to,inst_51018);
} else {
if((state_val_51044 === (3))){
var inst_51039 = (state_51043[(2)]);
var state_51043__$1 = state_51043;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51043__$1,inst_51039);
} else {
if((state_val_51044 === (12))){
var state_51043__$1 = state_51043;
var statearr_51077_52645 = state_51043__$1;
(statearr_51077_52645[(2)] = null);

(statearr_51077_52645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51044 === (2))){
var state_51043__$1 = state_51043;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51043__$1,(4),from);
} else {
if((state_val_51044 === (11))){
var inst_51028 = (state_51043[(2)]);
var state_51043__$1 = state_51043;
if(cljs.core.truth_(inst_51028)){
var statearr_51079_52646 = state_51043__$1;
(statearr_51079_52646[(1)] = (12));

} else {
var statearr_51083_52647 = state_51043__$1;
(statearr_51083_52647[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51044 === (9))){
var state_51043__$1 = state_51043;
var statearr_51086_52648 = state_51043__$1;
(statearr_51086_52648[(2)] = null);

(statearr_51086_52648[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51044 === (5))){
var state_51043__$1 = state_51043;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51091_52649 = state_51043__$1;
(statearr_51091_52649[(1)] = (8));

} else {
var statearr_51092_52650 = state_51043__$1;
(statearr_51092_52650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51044 === (14))){
var inst_51034 = (state_51043[(2)]);
var state_51043__$1 = state_51043;
var statearr_51097_52651 = state_51043__$1;
(statearr_51097_52651[(2)] = inst_51034);

(statearr_51097_52651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51044 === (10))){
var inst_51025 = (state_51043[(2)]);
var state_51043__$1 = state_51043;
var statearr_51103_52652 = state_51043__$1;
(statearr_51103_52652[(2)] = inst_51025);

(statearr_51103_52652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51044 === (8))){
var inst_51022 = cljs.core.async.close_BANG_(to);
var state_51043__$1 = state_51043;
var statearr_51104_52653 = state_51043__$1;
(statearr_51104_52653[(2)] = inst_51022);

(statearr_51104_52653[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50694__auto__ = null;
var cljs$core$async$state_machine__50694__auto____0 = (function (){
var statearr_51105 = [null,null,null,null,null,null,null,null];
(statearr_51105[(0)] = cljs$core$async$state_machine__50694__auto__);

(statearr_51105[(1)] = (1));

return statearr_51105;
});
var cljs$core$async$state_machine__50694__auto____1 = (function (state_51043){
while(true){
var ret_value__50695__auto__ = (function (){try{while(true){
var result__50696__auto__ = switch__50693__auto__(state_51043);
if(cljs.core.keyword_identical_QMARK_(result__50696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50696__auto__;
}
break;
}
}catch (e51111){var ex__50697__auto__ = e51111;
var statearr_51112_52654 = state_51043;
(statearr_51112_52654[(2)] = ex__50697__auto__);


if(cljs.core.seq((state_51043[(4)]))){
var statearr_51113_52655 = state_51043;
(statearr_51113_52655[(1)] = cljs.core.first((state_51043[(4)])));

} else {
throw ex__50697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52656 = state_51043;
state_51043 = G__52656;
continue;
} else {
return ret_value__50695__auto__;
}
break;
}
});
cljs$core$async$state_machine__50694__auto__ = function(state_51043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50694__auto____1.call(this,state_51043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50694__auto____0;
cljs$core$async$state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50694__auto____1;
return cljs$core$async$state_machine__50694__auto__;
})()
})();
var state__50812__auto__ = (function (){var statearr_51117 = f__50811__auto__();
(statearr_51117[(6)] = c__50810__auto___52639);

return statearr_51117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50812__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__51123){
var vec__51125 = p__51123;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51125,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51125,(1),null);
var job = vec__51125;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__50810__auto___52657 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50811__auto__ = (function (){var switch__50693__auto__ = (function (state_51132){
var state_val_51133 = (state_51132[(1)]);
if((state_val_51133 === (1))){
var state_51132__$1 = state_51132;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51132__$1,(2),res,v);
} else {
if((state_val_51133 === (2))){
var inst_51129 = (state_51132[(2)]);
var inst_51130 = cljs.core.async.close_BANG_(res);
var state_51132__$1 = (function (){var statearr_51138 = state_51132;
(statearr_51138[(7)] = inst_51129);

return statearr_51138;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51132__$1,inst_51130);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50694__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50694__auto____0 = (function (){
var statearr_51143 = [null,null,null,null,null,null,null,null];
(statearr_51143[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50694__auto__);

(statearr_51143[(1)] = (1));

return statearr_51143;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50694__auto____1 = (function (state_51132){
while(true){
var ret_value__50695__auto__ = (function (){try{while(true){
var result__50696__auto__ = switch__50693__auto__(state_51132);
if(cljs.core.keyword_identical_QMARK_(result__50696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50696__auto__;
}
break;
}
}catch (e51149){var ex__50697__auto__ = e51149;
var statearr_51150_52659 = state_51132;
(statearr_51150_52659[(2)] = ex__50697__auto__);


if(cljs.core.seq((state_51132[(4)]))){
var statearr_51151_52660 = state_51132;
(statearr_51151_52660[(1)] = cljs.core.first((state_51132[(4)])));

} else {
throw ex__50697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52661 = state_51132;
state_51132 = G__52661;
continue;
} else {
return ret_value__50695__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50694__auto__ = function(state_51132){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50694__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50694__auto____1.call(this,state_51132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50694__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50694__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50694__auto__;
})()
})();
var state__50812__auto__ = (function (){var statearr_51152 = f__50811__auto__();
(statearr_51152[(6)] = c__50810__auto___52657);

return statearr_51152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50812__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__51153){
var vec__51154 = p__51153;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51154,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51154,(1),null);
var job = vec__51154;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5762__auto___52663 = n;
var __52664 = (0);
while(true){
if((__52664 < n__5762__auto___52663)){
var G__51157_52665 = type;
var G__51157_52666__$1 = (((G__51157_52665 instanceof cljs.core.Keyword))?G__51157_52665.fqn:null);
switch (G__51157_52666__$1) {
case "compute":
var c__50810__auto___52668 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52664,c__50810__auto___52668,G__51157_52665,G__51157_52666__$1,n__5762__auto___52663,jobs,results,process__$1,async){
return (function (){
var f__50811__auto__ = (function (){var switch__50693__auto__ = ((function (__52664,c__50810__auto___52668,G__51157_52665,G__51157_52666__$1,n__5762__auto___52663,jobs,results,process__$1,async){
return (function (state_51170){
var state_val_51171 = (state_51170[(1)]);
if((state_val_51171 === (1))){
var state_51170__$1 = state_51170;
var statearr_51172_52669 = state_51170__$1;
(statearr_51172_52669[(2)] = null);

(statearr_51172_52669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51171 === (2))){
var state_51170__$1 = state_51170;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51170__$1,(4),jobs);
} else {
if((state_val_51171 === (3))){
var inst_51168 = (state_51170[(2)]);
var state_51170__$1 = state_51170;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51170__$1,inst_51168);
} else {
if((state_val_51171 === (4))){
var inst_51160 = (state_51170[(2)]);
var inst_51161 = process__$1(inst_51160);
var state_51170__$1 = state_51170;
if(cljs.core.truth_(inst_51161)){
var statearr_51173_52671 = state_51170__$1;
(statearr_51173_52671[(1)] = (5));

} else {
var statearr_51174_52672 = state_51170__$1;
(statearr_51174_52672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51171 === (5))){
var state_51170__$1 = state_51170;
var statearr_51175_52673 = state_51170__$1;
(statearr_51175_52673[(2)] = null);

(statearr_51175_52673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51171 === (6))){
var state_51170__$1 = state_51170;
var statearr_51176_52674 = state_51170__$1;
(statearr_51176_52674[(2)] = null);

(statearr_51176_52674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51171 === (7))){
var inst_51166 = (state_51170[(2)]);
var state_51170__$1 = state_51170;
var statearr_51177_52675 = state_51170__$1;
(statearr_51177_52675[(2)] = inst_51166);

(statearr_51177_52675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__52664,c__50810__auto___52668,G__51157_52665,G__51157_52666__$1,n__5762__auto___52663,jobs,results,process__$1,async))
;
return ((function (__52664,switch__50693__auto__,c__50810__auto___52668,G__51157_52665,G__51157_52666__$1,n__5762__auto___52663,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50694__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50694__auto____0 = (function (){
var statearr_51178 = [null,null,null,null,null,null,null];
(statearr_51178[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50694__auto__);

(statearr_51178[(1)] = (1));

return statearr_51178;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50694__auto____1 = (function (state_51170){
while(true){
var ret_value__50695__auto__ = (function (){try{while(true){
var result__50696__auto__ = switch__50693__auto__(state_51170);
if(cljs.core.keyword_identical_QMARK_(result__50696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50696__auto__;
}
break;
}
}catch (e51179){var ex__50697__auto__ = e51179;
var statearr_51180_52676 = state_51170;
(statearr_51180_52676[(2)] = ex__50697__auto__);


if(cljs.core.seq((state_51170[(4)]))){
var statearr_51181_52677 = state_51170;
(statearr_51181_52677[(1)] = cljs.core.first((state_51170[(4)])));

} else {
throw ex__50697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52678 = state_51170;
state_51170 = G__52678;
continue;
} else {
return ret_value__50695__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50694__auto__ = function(state_51170){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50694__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50694__auto____1.call(this,state_51170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50694__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50694__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50694__auto__;
})()
;})(__52664,switch__50693__auto__,c__50810__auto___52668,G__51157_52665,G__51157_52666__$1,n__5762__auto___52663,jobs,results,process__$1,async))
})();
var state__50812__auto__ = (function (){var statearr_51182 = f__50811__auto__();
(statearr_51182[(6)] = c__50810__auto___52668);

return statearr_51182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50812__auto__);
});})(__52664,c__50810__auto___52668,G__51157_52665,G__51157_52666__$1,n__5762__auto___52663,jobs,results,process__$1,async))
);


break;
case "async":
var c__50810__auto___52679 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52664,c__50810__auto___52679,G__51157_52665,G__51157_52666__$1,n__5762__auto___52663,jobs,results,process__$1,async){
return (function (){
var f__50811__auto__ = (function (){var switch__50693__auto__ = ((function (__52664,c__50810__auto___52679,G__51157_52665,G__51157_52666__$1,n__5762__auto___52663,jobs,results,process__$1,async){
return (function (state_51195){
var state_val_51196 = (state_51195[(1)]);
if((state_val_51196 === (1))){
var state_51195__$1 = state_51195;
var statearr_51197_52680 = state_51195__$1;
(statearr_51197_52680[(2)] = null);

(statearr_51197_52680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51196 === (2))){
var state_51195__$1 = state_51195;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51195__$1,(4),jobs);
} else {
if((state_val_51196 === (3))){
var inst_51193 = (state_51195[(2)]);
var state_51195__$1 = state_51195;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51195__$1,inst_51193);
} else {
if((state_val_51196 === (4))){
var inst_51185 = (state_51195[(2)]);
var inst_51186 = async(inst_51185);
var state_51195__$1 = state_51195;
if(cljs.core.truth_(inst_51186)){
var statearr_51198_52681 = state_51195__$1;
(statearr_51198_52681[(1)] = (5));

} else {
var statearr_51199_52682 = state_51195__$1;
(statearr_51199_52682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51196 === (5))){
var state_51195__$1 = state_51195;
var statearr_51200_52683 = state_51195__$1;
(statearr_51200_52683[(2)] = null);

(statearr_51200_52683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51196 === (6))){
var state_51195__$1 = state_51195;
var statearr_51201_52684 = state_51195__$1;
(statearr_51201_52684[(2)] = null);

(statearr_51201_52684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51196 === (7))){
var inst_51191 = (state_51195[(2)]);
var state_51195__$1 = state_51195;
var statearr_51202_52685 = state_51195__$1;
(statearr_51202_52685[(2)] = inst_51191);

(statearr_51202_52685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__52664,c__50810__auto___52679,G__51157_52665,G__51157_52666__$1,n__5762__auto___52663,jobs,results,process__$1,async))
;
return ((function (__52664,switch__50693__auto__,c__50810__auto___52679,G__51157_52665,G__51157_52666__$1,n__5762__auto___52663,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50694__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50694__auto____0 = (function (){
var statearr_51203 = [null,null,null,null,null,null,null];
(statearr_51203[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50694__auto__);

(statearr_51203[(1)] = (1));

return statearr_51203;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50694__auto____1 = (function (state_51195){
while(true){
var ret_value__50695__auto__ = (function (){try{while(true){
var result__50696__auto__ = switch__50693__auto__(state_51195);
if(cljs.core.keyword_identical_QMARK_(result__50696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50696__auto__;
}
break;
}
}catch (e51204){var ex__50697__auto__ = e51204;
var statearr_51205_52686 = state_51195;
(statearr_51205_52686[(2)] = ex__50697__auto__);


if(cljs.core.seq((state_51195[(4)]))){
var statearr_51206_52687 = state_51195;
(statearr_51206_52687[(1)] = cljs.core.first((state_51195[(4)])));

} else {
throw ex__50697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52688 = state_51195;
state_51195 = G__52688;
continue;
} else {
return ret_value__50695__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50694__auto__ = function(state_51195){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50694__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50694__auto____1.call(this,state_51195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50694__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50694__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50694__auto__;
})()
;})(__52664,switch__50693__auto__,c__50810__auto___52679,G__51157_52665,G__51157_52666__$1,n__5762__auto___52663,jobs,results,process__$1,async))
})();
var state__50812__auto__ = (function (){var statearr_51207 = f__50811__auto__();
(statearr_51207[(6)] = c__50810__auto___52679);

return statearr_51207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50812__auto__);
});})(__52664,c__50810__auto___52679,G__51157_52665,G__51157_52666__$1,n__5762__auto___52663,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51157_52666__$1))));

}

var G__52690 = (__52664 + (1));
__52664 = G__52690;
continue;
} else {
}
break;
}

var c__50810__auto___52691 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50811__auto__ = (function (){var switch__50693__auto__ = (function (state_51231){
var state_val_51232 = (state_51231[(1)]);
if((state_val_51232 === (7))){
var inst_51227 = (state_51231[(2)]);
var state_51231__$1 = state_51231;
var statearr_51235_52692 = state_51231__$1;
(statearr_51235_52692[(2)] = inst_51227);

(statearr_51235_52692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51232 === (1))){
var state_51231__$1 = state_51231;
var statearr_51236_52693 = state_51231__$1;
(statearr_51236_52693[(2)] = null);

(statearr_51236_52693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51232 === (4))){
var inst_51210 = (state_51231[(7)]);
var inst_51210__$1 = (state_51231[(2)]);
var inst_51211 = (inst_51210__$1 == null);
var state_51231__$1 = (function (){var statearr_51237 = state_51231;
(statearr_51237[(7)] = inst_51210__$1);

return statearr_51237;
})();
if(cljs.core.truth_(inst_51211)){
var statearr_51238_52694 = state_51231__$1;
(statearr_51238_52694[(1)] = (5));

} else {
var statearr_51240_52695 = state_51231__$1;
(statearr_51240_52695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51232 === (6))){
var inst_51210 = (state_51231[(7)]);
var inst_51215 = (state_51231[(8)]);
var inst_51215__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_51216 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51218 = [inst_51210,inst_51215__$1];
var inst_51219 = (new cljs.core.PersistentVector(null,2,(5),inst_51216,inst_51218,null));
var state_51231__$1 = (function (){var statearr_51241 = state_51231;
(statearr_51241[(8)] = inst_51215__$1);

return statearr_51241;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51231__$1,(8),jobs,inst_51219);
} else {
if((state_val_51232 === (3))){
var inst_51229 = (state_51231[(2)]);
var state_51231__$1 = state_51231;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51231__$1,inst_51229);
} else {
if((state_val_51232 === (2))){
var state_51231__$1 = state_51231;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51231__$1,(4),from);
} else {
if((state_val_51232 === (9))){
var inst_51224 = (state_51231[(2)]);
var state_51231__$1 = (function (){var statearr_51243 = state_51231;
(statearr_51243[(9)] = inst_51224);

return statearr_51243;
})();
var statearr_51244_52697 = state_51231__$1;
(statearr_51244_52697[(2)] = null);

(statearr_51244_52697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51232 === (5))){
var inst_51213 = cljs.core.async.close_BANG_(jobs);
var state_51231__$1 = state_51231;
var statearr_51245_52699 = state_51231__$1;
(statearr_51245_52699[(2)] = inst_51213);

(statearr_51245_52699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51232 === (8))){
var inst_51215 = (state_51231[(8)]);
var inst_51221 = (state_51231[(2)]);
var state_51231__$1 = (function (){var statearr_51246 = state_51231;
(statearr_51246[(10)] = inst_51221);

return statearr_51246;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51231__$1,(9),results,inst_51215);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50694__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50694__auto____0 = (function (){
var statearr_51247 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51247[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50694__auto__);

(statearr_51247[(1)] = (1));

return statearr_51247;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50694__auto____1 = (function (state_51231){
while(true){
var ret_value__50695__auto__ = (function (){try{while(true){
var result__50696__auto__ = switch__50693__auto__(state_51231);
if(cljs.core.keyword_identical_QMARK_(result__50696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50696__auto__;
}
break;
}
}catch (e51248){var ex__50697__auto__ = e51248;
var statearr_51249_52700 = state_51231;
(statearr_51249_52700[(2)] = ex__50697__auto__);


if(cljs.core.seq((state_51231[(4)]))){
var statearr_51250_52701 = state_51231;
(statearr_51250_52701[(1)] = cljs.core.first((state_51231[(4)])));

} else {
throw ex__50697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52702 = state_51231;
state_51231 = G__52702;
continue;
} else {
return ret_value__50695__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50694__auto__ = function(state_51231){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50694__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50694__auto____1.call(this,state_51231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50694__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50694__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50694__auto__;
})()
})();
var state__50812__auto__ = (function (){var statearr_51251 = f__50811__auto__();
(statearr_51251[(6)] = c__50810__auto___52691);

return statearr_51251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50812__auto__);
}));


var c__50810__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50811__auto__ = (function (){var switch__50693__auto__ = (function (state_51292){
var state_val_51293 = (state_51292[(1)]);
if((state_val_51293 === (7))){
var inst_51286 = (state_51292[(2)]);
var state_51292__$1 = state_51292;
var statearr_51296_52704 = state_51292__$1;
(statearr_51296_52704[(2)] = inst_51286);

(statearr_51296_52704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51293 === (20))){
var state_51292__$1 = state_51292;
var statearr_51297_52705 = state_51292__$1;
(statearr_51297_52705[(2)] = null);

(statearr_51297_52705[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51293 === (1))){
var state_51292__$1 = state_51292;
var statearr_51299_52706 = state_51292__$1;
(statearr_51299_52706[(2)] = null);

(statearr_51299_52706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51293 === (4))){
var inst_51254 = (state_51292[(7)]);
var inst_51254__$1 = (state_51292[(2)]);
var inst_51256 = (inst_51254__$1 == null);
var state_51292__$1 = (function (){var statearr_51301 = state_51292;
(statearr_51301[(7)] = inst_51254__$1);

return statearr_51301;
})();
if(cljs.core.truth_(inst_51256)){
var statearr_51302_52707 = state_51292__$1;
(statearr_51302_52707[(1)] = (5));

} else {
var statearr_51303_52708 = state_51292__$1;
(statearr_51303_52708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51293 === (15))){
var inst_51268 = (state_51292[(8)]);
var state_51292__$1 = state_51292;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51292__$1,(18),to,inst_51268);
} else {
if((state_val_51293 === (21))){
var inst_51281 = (state_51292[(2)]);
var state_51292__$1 = state_51292;
var statearr_51304_52709 = state_51292__$1;
(statearr_51304_52709[(2)] = inst_51281);

(statearr_51304_52709[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51293 === (13))){
var inst_51283 = (state_51292[(2)]);
var state_51292__$1 = (function (){var statearr_51305 = state_51292;
(statearr_51305[(9)] = inst_51283);

return statearr_51305;
})();
var statearr_51307_52710 = state_51292__$1;
(statearr_51307_52710[(2)] = null);

(statearr_51307_52710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51293 === (6))){
var inst_51254 = (state_51292[(7)]);
var state_51292__$1 = state_51292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51292__$1,(11),inst_51254);
} else {
if((state_val_51293 === (17))){
var inst_51276 = (state_51292[(2)]);
var state_51292__$1 = state_51292;
if(cljs.core.truth_(inst_51276)){
var statearr_51310_52711 = state_51292__$1;
(statearr_51310_52711[(1)] = (19));

} else {
var statearr_51311_52712 = state_51292__$1;
(statearr_51311_52712[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51293 === (3))){
var inst_51288 = (state_51292[(2)]);
var state_51292__$1 = state_51292;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51292__$1,inst_51288);
} else {
if((state_val_51293 === (12))){
var inst_51265 = (state_51292[(10)]);
var state_51292__$1 = state_51292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51292__$1,(14),inst_51265);
} else {
if((state_val_51293 === (2))){
var state_51292__$1 = state_51292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51292__$1,(4),results);
} else {
if((state_val_51293 === (19))){
var state_51292__$1 = state_51292;
var statearr_51313_52714 = state_51292__$1;
(statearr_51313_52714[(2)] = null);

(statearr_51313_52714[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51293 === (11))){
var inst_51265 = (state_51292[(2)]);
var state_51292__$1 = (function (){var statearr_51314 = state_51292;
(statearr_51314[(10)] = inst_51265);

return statearr_51314;
})();
var statearr_51315_52716 = state_51292__$1;
(statearr_51315_52716[(2)] = null);

(statearr_51315_52716[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51293 === (9))){
var state_51292__$1 = state_51292;
var statearr_51316_52717 = state_51292__$1;
(statearr_51316_52717[(2)] = null);

(statearr_51316_52717[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51293 === (5))){
var state_51292__$1 = state_51292;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51318_52718 = state_51292__$1;
(statearr_51318_52718[(1)] = (8));

} else {
var statearr_51319_52719 = state_51292__$1;
(statearr_51319_52719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51293 === (14))){
var inst_51268 = (state_51292[(8)]);
var inst_51270 = (state_51292[(11)]);
var inst_51268__$1 = (state_51292[(2)]);
var inst_51269 = (inst_51268__$1 == null);
var inst_51270__$1 = cljs.core.not(inst_51269);
var state_51292__$1 = (function (){var statearr_51320 = state_51292;
(statearr_51320[(8)] = inst_51268__$1);

(statearr_51320[(11)] = inst_51270__$1);

return statearr_51320;
})();
if(inst_51270__$1){
var statearr_51321_52720 = state_51292__$1;
(statearr_51321_52720[(1)] = (15));

} else {
var statearr_51322_52721 = state_51292__$1;
(statearr_51322_52721[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51293 === (16))){
var inst_51270 = (state_51292[(11)]);
var state_51292__$1 = state_51292;
var statearr_51327_52723 = state_51292__$1;
(statearr_51327_52723[(2)] = inst_51270);

(statearr_51327_52723[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51293 === (10))){
var inst_51262 = (state_51292[(2)]);
var state_51292__$1 = state_51292;
var statearr_51329_52724 = state_51292__$1;
(statearr_51329_52724[(2)] = inst_51262);

(statearr_51329_52724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51293 === (18))){
var inst_51273 = (state_51292[(2)]);
var state_51292__$1 = state_51292;
var statearr_51330_52726 = state_51292__$1;
(statearr_51330_52726[(2)] = inst_51273);

(statearr_51330_52726[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51293 === (8))){
var inst_51259 = cljs.core.async.close_BANG_(to);
var state_51292__$1 = state_51292;
var statearr_51332_52727 = state_51292__$1;
(statearr_51332_52727[(2)] = inst_51259);

(statearr_51332_52727[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50694__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50694__auto____0 = (function (){
var statearr_51335 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51335[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50694__auto__);

(statearr_51335[(1)] = (1));

return statearr_51335;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50694__auto____1 = (function (state_51292){
while(true){
var ret_value__50695__auto__ = (function (){try{while(true){
var result__50696__auto__ = switch__50693__auto__(state_51292);
if(cljs.core.keyword_identical_QMARK_(result__50696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50696__auto__;
}
break;
}
}catch (e51336){var ex__50697__auto__ = e51336;
var statearr_51337_52729 = state_51292;
(statearr_51337_52729[(2)] = ex__50697__auto__);


if(cljs.core.seq((state_51292[(4)]))){
var statearr_51339_52730 = state_51292;
(statearr_51339_52730[(1)] = cljs.core.first((state_51292[(4)])));

} else {
throw ex__50697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52731 = state_51292;
state_51292 = G__52731;
continue;
} else {
return ret_value__50695__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50694__auto__ = function(state_51292){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50694__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50694__auto____1.call(this,state_51292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50694__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50694__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50694__auto__;
})()
})();
var state__50812__auto__ = (function (){var statearr_51340 = f__50811__auto__();
(statearr_51340[(6)] = c__50810__auto__);

return statearr_51340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50812__auto__);
}));

return c__50810__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__51345 = arguments.length;
switch (G__51345) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__51347 = arguments.length;
switch (G__51347) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__51355 = arguments.length;
switch (G__51355) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__50810__auto___52735 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50811__auto__ = (function (){var switch__50693__auto__ = (function (state_51383){
var state_val_51384 = (state_51383[(1)]);
if((state_val_51384 === (7))){
var inst_51379 = (state_51383[(2)]);
var state_51383__$1 = state_51383;
var statearr_51389_52737 = state_51383__$1;
(statearr_51389_52737[(2)] = inst_51379);

(statearr_51389_52737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51384 === (1))){
var state_51383__$1 = state_51383;
var statearr_51390_52740 = state_51383__$1;
(statearr_51390_52740[(2)] = null);

(statearr_51390_52740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51384 === (4))){
var inst_51360 = (state_51383[(7)]);
var inst_51360__$1 = (state_51383[(2)]);
var inst_51361 = (inst_51360__$1 == null);
var state_51383__$1 = (function (){var statearr_51392 = state_51383;
(statearr_51392[(7)] = inst_51360__$1);

return statearr_51392;
})();
if(cljs.core.truth_(inst_51361)){
var statearr_51393_52741 = state_51383__$1;
(statearr_51393_52741[(1)] = (5));

} else {
var statearr_51394_52742 = state_51383__$1;
(statearr_51394_52742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51384 === (13))){
var state_51383__$1 = state_51383;
var statearr_51395_52743 = state_51383__$1;
(statearr_51395_52743[(2)] = null);

(statearr_51395_52743[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51384 === (6))){
var inst_51360 = (state_51383[(7)]);
var inst_51366 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_51360) : p.call(null,inst_51360));
var state_51383__$1 = state_51383;
if(cljs.core.truth_(inst_51366)){
var statearr_51397_52744 = state_51383__$1;
(statearr_51397_52744[(1)] = (9));

} else {
var statearr_51398_52745 = state_51383__$1;
(statearr_51398_52745[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51384 === (3))){
var inst_51381 = (state_51383[(2)]);
var state_51383__$1 = state_51383;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51383__$1,inst_51381);
} else {
if((state_val_51384 === (12))){
var state_51383__$1 = state_51383;
var statearr_51399_52746 = state_51383__$1;
(statearr_51399_52746[(2)] = null);

(statearr_51399_52746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51384 === (2))){
var state_51383__$1 = state_51383;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51383__$1,(4),ch);
} else {
if((state_val_51384 === (11))){
var inst_51360 = (state_51383[(7)]);
var inst_51370 = (state_51383[(2)]);
var state_51383__$1 = state_51383;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51383__$1,(8),inst_51370,inst_51360);
} else {
if((state_val_51384 === (9))){
var state_51383__$1 = state_51383;
var statearr_51401_52748 = state_51383__$1;
(statearr_51401_52748[(2)] = tc);

(statearr_51401_52748[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51384 === (5))){
var inst_51363 = cljs.core.async.close_BANG_(tc);
var inst_51364 = cljs.core.async.close_BANG_(fc);
var state_51383__$1 = (function (){var statearr_51402 = state_51383;
(statearr_51402[(8)] = inst_51363);

return statearr_51402;
})();
var statearr_51403_52752 = state_51383__$1;
(statearr_51403_52752[(2)] = inst_51364);

(statearr_51403_52752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51384 === (14))){
var inst_51377 = (state_51383[(2)]);
var state_51383__$1 = state_51383;
var statearr_51404_52753 = state_51383__$1;
(statearr_51404_52753[(2)] = inst_51377);

(statearr_51404_52753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51384 === (10))){
var state_51383__$1 = state_51383;
var statearr_51405_52754 = state_51383__$1;
(statearr_51405_52754[(2)] = fc);

(statearr_51405_52754[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51384 === (8))){
var inst_51372 = (state_51383[(2)]);
var state_51383__$1 = state_51383;
if(cljs.core.truth_(inst_51372)){
var statearr_51406_52755 = state_51383__$1;
(statearr_51406_52755[(1)] = (12));

} else {
var statearr_51407_52756 = state_51383__$1;
(statearr_51407_52756[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50694__auto__ = null;
var cljs$core$async$state_machine__50694__auto____0 = (function (){
var statearr_51409 = [null,null,null,null,null,null,null,null,null];
(statearr_51409[(0)] = cljs$core$async$state_machine__50694__auto__);

(statearr_51409[(1)] = (1));

return statearr_51409;
});
var cljs$core$async$state_machine__50694__auto____1 = (function (state_51383){
while(true){
var ret_value__50695__auto__ = (function (){try{while(true){
var result__50696__auto__ = switch__50693__auto__(state_51383);
if(cljs.core.keyword_identical_QMARK_(result__50696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50696__auto__;
}
break;
}
}catch (e51410){var ex__50697__auto__ = e51410;
var statearr_51411_52757 = state_51383;
(statearr_51411_52757[(2)] = ex__50697__auto__);


if(cljs.core.seq((state_51383[(4)]))){
var statearr_51416_52758 = state_51383;
(statearr_51416_52758[(1)] = cljs.core.first((state_51383[(4)])));

} else {
throw ex__50697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52759 = state_51383;
state_51383 = G__52759;
continue;
} else {
return ret_value__50695__auto__;
}
break;
}
});
cljs$core$async$state_machine__50694__auto__ = function(state_51383){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50694__auto____1.call(this,state_51383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50694__auto____0;
cljs$core$async$state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50694__auto____1;
return cljs$core$async$state_machine__50694__auto__;
})()
})();
var state__50812__auto__ = (function (){var statearr_51417 = f__50811__auto__();
(statearr_51417[(6)] = c__50810__auto___52735);

return statearr_51417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50812__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__50810__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50811__auto__ = (function (){var switch__50693__auto__ = (function (state_51439){
var state_val_51440 = (state_51439[(1)]);
if((state_val_51440 === (7))){
var inst_51435 = (state_51439[(2)]);
var state_51439__$1 = state_51439;
var statearr_51445_52760 = state_51439__$1;
(statearr_51445_52760[(2)] = inst_51435);

(statearr_51445_52760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51440 === (1))){
var inst_51418 = init;
var inst_51419 = inst_51418;
var state_51439__$1 = (function (){var statearr_51446 = state_51439;
(statearr_51446[(7)] = inst_51419);

return statearr_51446;
})();
var statearr_51447_52761 = state_51439__$1;
(statearr_51447_52761[(2)] = null);

(statearr_51447_52761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51440 === (4))){
var inst_51422 = (state_51439[(8)]);
var inst_51422__$1 = (state_51439[(2)]);
var inst_51423 = (inst_51422__$1 == null);
var state_51439__$1 = (function (){var statearr_51448 = state_51439;
(statearr_51448[(8)] = inst_51422__$1);

return statearr_51448;
})();
if(cljs.core.truth_(inst_51423)){
var statearr_51449_52762 = state_51439__$1;
(statearr_51449_52762[(1)] = (5));

} else {
var statearr_51450_52763 = state_51439__$1;
(statearr_51450_52763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51440 === (6))){
var inst_51419 = (state_51439[(7)]);
var inst_51422 = (state_51439[(8)]);
var inst_51426 = (state_51439[(9)]);
var inst_51426__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_51419,inst_51422) : f.call(null,inst_51419,inst_51422));
var inst_51427 = cljs.core.reduced_QMARK_(inst_51426__$1);
var state_51439__$1 = (function (){var statearr_51451 = state_51439;
(statearr_51451[(9)] = inst_51426__$1);

return statearr_51451;
})();
if(inst_51427){
var statearr_51453_52768 = state_51439__$1;
(statearr_51453_52768[(1)] = (8));

} else {
var statearr_51454_52769 = state_51439__$1;
(statearr_51454_52769[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51440 === (3))){
var inst_51437 = (state_51439[(2)]);
var state_51439__$1 = state_51439;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51439__$1,inst_51437);
} else {
if((state_val_51440 === (2))){
var state_51439__$1 = state_51439;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51439__$1,(4),ch);
} else {
if((state_val_51440 === (9))){
var inst_51426 = (state_51439[(9)]);
var inst_51419 = inst_51426;
var state_51439__$1 = (function (){var statearr_51456 = state_51439;
(statearr_51456[(7)] = inst_51419);

return statearr_51456;
})();
var statearr_51457_52770 = state_51439__$1;
(statearr_51457_52770[(2)] = null);

(statearr_51457_52770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51440 === (5))){
var inst_51419 = (state_51439[(7)]);
var state_51439__$1 = state_51439;
var statearr_51458_52771 = state_51439__$1;
(statearr_51458_52771[(2)] = inst_51419);

(statearr_51458_52771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51440 === (10))){
var inst_51433 = (state_51439[(2)]);
var state_51439__$1 = state_51439;
var statearr_51459_52772 = state_51439__$1;
(statearr_51459_52772[(2)] = inst_51433);

(statearr_51459_52772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51440 === (8))){
var inst_51426 = (state_51439[(9)]);
var inst_51429 = cljs.core.deref(inst_51426);
var state_51439__$1 = state_51439;
var statearr_51460_52773 = state_51439__$1;
(statearr_51460_52773[(2)] = inst_51429);

(statearr_51460_52773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__50694__auto__ = null;
var cljs$core$async$reduce_$_state_machine__50694__auto____0 = (function (){
var statearr_51461 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51461[(0)] = cljs$core$async$reduce_$_state_machine__50694__auto__);

(statearr_51461[(1)] = (1));

return statearr_51461;
});
var cljs$core$async$reduce_$_state_machine__50694__auto____1 = (function (state_51439){
while(true){
var ret_value__50695__auto__ = (function (){try{while(true){
var result__50696__auto__ = switch__50693__auto__(state_51439);
if(cljs.core.keyword_identical_QMARK_(result__50696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50696__auto__;
}
break;
}
}catch (e51462){var ex__50697__auto__ = e51462;
var statearr_51463_52774 = state_51439;
(statearr_51463_52774[(2)] = ex__50697__auto__);


if(cljs.core.seq((state_51439[(4)]))){
var statearr_51464_52775 = state_51439;
(statearr_51464_52775[(1)] = cljs.core.first((state_51439[(4)])));

} else {
throw ex__50697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52776 = state_51439;
state_51439 = G__52776;
continue;
} else {
return ret_value__50695__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__50694__auto__ = function(state_51439){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__50694__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__50694__auto____1.call(this,state_51439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__50694__auto____0;
cljs$core$async$reduce_$_state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__50694__auto____1;
return cljs$core$async$reduce_$_state_machine__50694__auto__;
})()
})();
var state__50812__auto__ = (function (){var statearr_51465 = f__50811__auto__();
(statearr_51465[(6)] = c__50810__auto__);

return statearr_51465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50812__auto__);
}));

return c__50810__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__50810__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50811__auto__ = (function (){var switch__50693__auto__ = (function (state_51472){
var state_val_51473 = (state_51472[(1)]);
if((state_val_51473 === (1))){
var inst_51467 = cljs.core.async.reduce(f__$1,init,ch);
var state_51472__$1 = state_51472;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51472__$1,(2),inst_51467);
} else {
if((state_val_51473 === (2))){
var inst_51469 = (state_51472[(2)]);
var inst_51470 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_51469) : f__$1.call(null,inst_51469));
var state_51472__$1 = state_51472;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51472__$1,inst_51470);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__50694__auto__ = null;
var cljs$core$async$transduce_$_state_machine__50694__auto____0 = (function (){
var statearr_51477 = [null,null,null,null,null,null,null];
(statearr_51477[(0)] = cljs$core$async$transduce_$_state_machine__50694__auto__);

(statearr_51477[(1)] = (1));

return statearr_51477;
});
var cljs$core$async$transduce_$_state_machine__50694__auto____1 = (function (state_51472){
while(true){
var ret_value__50695__auto__ = (function (){try{while(true){
var result__50696__auto__ = switch__50693__auto__(state_51472);
if(cljs.core.keyword_identical_QMARK_(result__50696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50696__auto__;
}
break;
}
}catch (e51478){var ex__50697__auto__ = e51478;
var statearr_51479_52780 = state_51472;
(statearr_51479_52780[(2)] = ex__50697__auto__);


if(cljs.core.seq((state_51472[(4)]))){
var statearr_51480_52781 = state_51472;
(statearr_51480_52781[(1)] = cljs.core.first((state_51472[(4)])));

} else {
throw ex__50697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52782 = state_51472;
state_51472 = G__52782;
continue;
} else {
return ret_value__50695__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__50694__auto__ = function(state_51472){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__50694__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__50694__auto____1.call(this,state_51472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__50694__auto____0;
cljs$core$async$transduce_$_state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__50694__auto____1;
return cljs$core$async$transduce_$_state_machine__50694__auto__;
})()
})();
var state__50812__auto__ = (function (){var statearr_51481 = f__50811__auto__();
(statearr_51481[(6)] = c__50810__auto__);

return statearr_51481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50812__auto__);
}));

return c__50810__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__51484 = arguments.length;
switch (G__51484) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__50810__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50811__auto__ = (function (){var switch__50693__auto__ = (function (state_51513){
var state_val_51514 = (state_51513[(1)]);
if((state_val_51514 === (7))){
var inst_51494 = (state_51513[(2)]);
var state_51513__$1 = state_51513;
var statearr_51516_52784 = state_51513__$1;
(statearr_51516_52784[(2)] = inst_51494);

(statearr_51516_52784[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51514 === (1))){
var inst_51485 = cljs.core.seq(coll);
var inst_51486 = inst_51485;
var state_51513__$1 = (function (){var statearr_51517 = state_51513;
(statearr_51517[(7)] = inst_51486);

return statearr_51517;
})();
var statearr_51518_52785 = state_51513__$1;
(statearr_51518_52785[(2)] = null);

(statearr_51518_52785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51514 === (4))){
var inst_51486 = (state_51513[(7)]);
var inst_51492 = cljs.core.first(inst_51486);
var state_51513__$1 = state_51513;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51513__$1,(7),ch,inst_51492);
} else {
if((state_val_51514 === (13))){
var inst_51506 = (state_51513[(2)]);
var state_51513__$1 = state_51513;
var statearr_51521_52789 = state_51513__$1;
(statearr_51521_52789[(2)] = inst_51506);

(statearr_51521_52789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51514 === (6))){
var inst_51497 = (state_51513[(2)]);
var state_51513__$1 = state_51513;
if(cljs.core.truth_(inst_51497)){
var statearr_51524_52790 = state_51513__$1;
(statearr_51524_52790[(1)] = (8));

} else {
var statearr_51525_52791 = state_51513__$1;
(statearr_51525_52791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51514 === (3))){
var inst_51510 = (state_51513[(2)]);
var state_51513__$1 = state_51513;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51513__$1,inst_51510);
} else {
if((state_val_51514 === (12))){
var state_51513__$1 = state_51513;
var statearr_51528_52792 = state_51513__$1;
(statearr_51528_52792[(2)] = null);

(statearr_51528_52792[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51514 === (2))){
var inst_51486 = (state_51513[(7)]);
var state_51513__$1 = state_51513;
if(cljs.core.truth_(inst_51486)){
var statearr_51529_52793 = state_51513__$1;
(statearr_51529_52793[(1)] = (4));

} else {
var statearr_51530_52794 = state_51513__$1;
(statearr_51530_52794[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51514 === (11))){
var inst_51503 = cljs.core.async.close_BANG_(ch);
var state_51513__$1 = state_51513;
var statearr_51531_52795 = state_51513__$1;
(statearr_51531_52795[(2)] = inst_51503);

(statearr_51531_52795[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51514 === (9))){
var state_51513__$1 = state_51513;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51532_52796 = state_51513__$1;
(statearr_51532_52796[(1)] = (11));

} else {
var statearr_51533_52797 = state_51513__$1;
(statearr_51533_52797[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51514 === (5))){
var inst_51486 = (state_51513[(7)]);
var state_51513__$1 = state_51513;
var statearr_51534_52798 = state_51513__$1;
(statearr_51534_52798[(2)] = inst_51486);

(statearr_51534_52798[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51514 === (10))){
var inst_51508 = (state_51513[(2)]);
var state_51513__$1 = state_51513;
var statearr_51535_52799 = state_51513__$1;
(statearr_51535_52799[(2)] = inst_51508);

(statearr_51535_52799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51514 === (8))){
var inst_51486 = (state_51513[(7)]);
var inst_51499 = cljs.core.next(inst_51486);
var inst_51486__$1 = inst_51499;
var state_51513__$1 = (function (){var statearr_51536 = state_51513;
(statearr_51536[(7)] = inst_51486__$1);

return statearr_51536;
})();
var statearr_51537_52800 = state_51513__$1;
(statearr_51537_52800[(2)] = null);

(statearr_51537_52800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50694__auto__ = null;
var cljs$core$async$state_machine__50694__auto____0 = (function (){
var statearr_51541 = [null,null,null,null,null,null,null,null];
(statearr_51541[(0)] = cljs$core$async$state_machine__50694__auto__);

(statearr_51541[(1)] = (1));

return statearr_51541;
});
var cljs$core$async$state_machine__50694__auto____1 = (function (state_51513){
while(true){
var ret_value__50695__auto__ = (function (){try{while(true){
var result__50696__auto__ = switch__50693__auto__(state_51513);
if(cljs.core.keyword_identical_QMARK_(result__50696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50696__auto__;
}
break;
}
}catch (e51542){var ex__50697__auto__ = e51542;
var statearr_51544_52801 = state_51513;
(statearr_51544_52801[(2)] = ex__50697__auto__);


if(cljs.core.seq((state_51513[(4)]))){
var statearr_51546_52802 = state_51513;
(statearr_51546_52802[(1)] = cljs.core.first((state_51513[(4)])));

} else {
throw ex__50697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52803 = state_51513;
state_51513 = G__52803;
continue;
} else {
return ret_value__50695__auto__;
}
break;
}
});
cljs$core$async$state_machine__50694__auto__ = function(state_51513){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50694__auto____1.call(this,state_51513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50694__auto____0;
cljs$core$async$state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50694__auto____1;
return cljs$core$async$state_machine__50694__auto__;
})()
})();
var state__50812__auto__ = (function (){var statearr_51551 = f__50811__auto__();
(statearr_51551[(6)] = c__50810__auto__);

return statearr_51551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50812__auto__);
}));

return c__50810__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__51557 = arguments.length;
switch (G__51557) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_52805 = (function (_){
var x__5519__auto__ = (((_ == null))?null:_);
var m__5520__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5520__auto__.call(null,_));
} else {
var m__5518__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5518__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_52805(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_52809 = (function (m,ch,close_QMARK_){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5520__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5518__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5518__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_52809(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_52810 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_52810(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_52811 = (function (m){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5520__auto__.call(null,m));
} else {
var m__5518__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5518__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_52811(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51594 = (function (ch,cs,meta51595){
this.ch = ch;
this.cs = cs;
this.meta51595 = meta51595;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51596,meta51595__$1){
var self__ = this;
var _51596__$1 = this;
return (new cljs.core.async.t_cljs$core$async51594(self__.ch,self__.cs,meta51595__$1));
}));

(cljs.core.async.t_cljs$core$async51594.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51596){
var self__ = this;
var _51596__$1 = this;
return self__.meta51595;
}));

(cljs.core.async.t_cljs$core$async51594.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51594.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async51594.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51594.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async51594.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async51594.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async51594.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta51595","meta51595",911476009,null)], null);
}));

(cljs.core.async.t_cljs$core$async51594.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51594.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51594");

(cljs.core.async.t_cljs$core$async51594.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async51594");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51594.
 */
cljs.core.async.__GT_t_cljs$core$async51594 = (function cljs$core$async$__GT_t_cljs$core$async51594(ch,cs,meta51595){
return (new cljs.core.async.t_cljs$core$async51594(ch,cs,meta51595));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async51594(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__50810__auto___52812 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50811__auto__ = (function (){var switch__50693__auto__ = (function (state_51742){
var state_val_51743 = (state_51742[(1)]);
if((state_val_51743 === (7))){
var inst_51738 = (state_51742[(2)]);
var state_51742__$1 = state_51742;
var statearr_51744_52813 = state_51742__$1;
(statearr_51744_52813[(2)] = inst_51738);

(statearr_51744_52813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (20))){
var inst_51642 = (state_51742[(7)]);
var inst_51654 = cljs.core.first(inst_51642);
var inst_51655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51654,(0),null);
var inst_51656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51654,(1),null);
var state_51742__$1 = (function (){var statearr_51745 = state_51742;
(statearr_51745[(8)] = inst_51655);

return statearr_51745;
})();
if(cljs.core.truth_(inst_51656)){
var statearr_51746_52814 = state_51742__$1;
(statearr_51746_52814[(1)] = (22));

} else {
var statearr_51747_52815 = state_51742__$1;
(statearr_51747_52815[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (27))){
var inst_51685 = (state_51742[(9)]);
var inst_51687 = (state_51742[(10)]);
var inst_51692 = (state_51742[(11)]);
var inst_51609 = (state_51742[(12)]);
var inst_51692__$1 = cljs.core._nth(inst_51685,inst_51687);
var inst_51693 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_51692__$1,inst_51609,done);
var state_51742__$1 = (function (){var statearr_51748 = state_51742;
(statearr_51748[(11)] = inst_51692__$1);

return statearr_51748;
})();
if(cljs.core.truth_(inst_51693)){
var statearr_51749_52816 = state_51742__$1;
(statearr_51749_52816[(1)] = (30));

} else {
var statearr_51750_52817 = state_51742__$1;
(statearr_51750_52817[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (1))){
var state_51742__$1 = state_51742;
var statearr_51751_52818 = state_51742__$1;
(statearr_51751_52818[(2)] = null);

(statearr_51751_52818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (24))){
var inst_51642 = (state_51742[(7)]);
var inst_51661 = (state_51742[(2)]);
var inst_51662 = cljs.core.next(inst_51642);
var inst_51620 = inst_51662;
var inst_51621 = null;
var inst_51622 = (0);
var inst_51623 = (0);
var state_51742__$1 = (function (){var statearr_51752 = state_51742;
(statearr_51752[(13)] = inst_51661);

(statearr_51752[(14)] = inst_51620);

(statearr_51752[(15)] = inst_51621);

(statearr_51752[(16)] = inst_51622);

(statearr_51752[(17)] = inst_51623);

return statearr_51752;
})();
var statearr_51754_52819 = state_51742__$1;
(statearr_51754_52819[(2)] = null);

(statearr_51754_52819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (39))){
var state_51742__$1 = state_51742;
var statearr_51758_52820 = state_51742__$1;
(statearr_51758_52820[(2)] = null);

(statearr_51758_52820[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (4))){
var inst_51609 = (state_51742[(12)]);
var inst_51609__$1 = (state_51742[(2)]);
var inst_51610 = (inst_51609__$1 == null);
var state_51742__$1 = (function (){var statearr_51760 = state_51742;
(statearr_51760[(12)] = inst_51609__$1);

return statearr_51760;
})();
if(cljs.core.truth_(inst_51610)){
var statearr_51762_52821 = state_51742__$1;
(statearr_51762_52821[(1)] = (5));

} else {
var statearr_51763_52822 = state_51742__$1;
(statearr_51763_52822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (15))){
var inst_51623 = (state_51742[(17)]);
var inst_51620 = (state_51742[(14)]);
var inst_51621 = (state_51742[(15)]);
var inst_51622 = (state_51742[(16)]);
var inst_51638 = (state_51742[(2)]);
var inst_51639 = (inst_51623 + (1));
var tmp51755 = inst_51620;
var tmp51756 = inst_51621;
var tmp51757 = inst_51622;
var inst_51620__$1 = tmp51755;
var inst_51621__$1 = tmp51756;
var inst_51622__$1 = tmp51757;
var inst_51623__$1 = inst_51639;
var state_51742__$1 = (function (){var statearr_51764 = state_51742;
(statearr_51764[(18)] = inst_51638);

(statearr_51764[(14)] = inst_51620__$1);

(statearr_51764[(15)] = inst_51621__$1);

(statearr_51764[(16)] = inst_51622__$1);

(statearr_51764[(17)] = inst_51623__$1);

return statearr_51764;
})();
var statearr_51765_52823 = state_51742__$1;
(statearr_51765_52823[(2)] = null);

(statearr_51765_52823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (21))){
var inst_51665 = (state_51742[(2)]);
var state_51742__$1 = state_51742;
var statearr_51769_52824 = state_51742__$1;
(statearr_51769_52824[(2)] = inst_51665);

(statearr_51769_52824[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (31))){
var inst_51692 = (state_51742[(11)]);
var inst_51696 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_51692);
var state_51742__$1 = state_51742;
var statearr_51770_52825 = state_51742__$1;
(statearr_51770_52825[(2)] = inst_51696);

(statearr_51770_52825[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (32))){
var inst_51687 = (state_51742[(10)]);
var inst_51684 = (state_51742[(19)]);
var inst_51685 = (state_51742[(9)]);
var inst_51686 = (state_51742[(20)]);
var inst_51698 = (state_51742[(2)]);
var inst_51699 = (inst_51687 + (1));
var tmp51766 = inst_51684;
var tmp51767 = inst_51686;
var tmp51768 = inst_51685;
var inst_51684__$1 = tmp51766;
var inst_51685__$1 = tmp51768;
var inst_51686__$1 = tmp51767;
var inst_51687__$1 = inst_51699;
var state_51742__$1 = (function (){var statearr_51771 = state_51742;
(statearr_51771[(21)] = inst_51698);

(statearr_51771[(19)] = inst_51684__$1);

(statearr_51771[(9)] = inst_51685__$1);

(statearr_51771[(20)] = inst_51686__$1);

(statearr_51771[(10)] = inst_51687__$1);

return statearr_51771;
})();
var statearr_51772_52826 = state_51742__$1;
(statearr_51772_52826[(2)] = null);

(statearr_51772_52826[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (40))){
var inst_51711 = (state_51742[(22)]);
var inst_51715 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_51711);
var state_51742__$1 = state_51742;
var statearr_51773_52827 = state_51742__$1;
(statearr_51773_52827[(2)] = inst_51715);

(statearr_51773_52827[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (33))){
var inst_51702 = (state_51742[(23)]);
var inst_51704 = cljs.core.chunked_seq_QMARK_(inst_51702);
var state_51742__$1 = state_51742;
if(inst_51704){
var statearr_51774_52828 = state_51742__$1;
(statearr_51774_52828[(1)] = (36));

} else {
var statearr_51775_52829 = state_51742__$1;
(statearr_51775_52829[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (13))){
var inst_51632 = (state_51742[(24)]);
var inst_51635 = cljs.core.async.close_BANG_(inst_51632);
var state_51742__$1 = state_51742;
var statearr_51776_52830 = state_51742__$1;
(statearr_51776_52830[(2)] = inst_51635);

(statearr_51776_52830[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (22))){
var inst_51655 = (state_51742[(8)]);
var inst_51658 = cljs.core.async.close_BANG_(inst_51655);
var state_51742__$1 = state_51742;
var statearr_51777_52831 = state_51742__$1;
(statearr_51777_52831[(2)] = inst_51658);

(statearr_51777_52831[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (36))){
var inst_51702 = (state_51742[(23)]);
var inst_51706 = cljs.core.chunk_first(inst_51702);
var inst_51707 = cljs.core.chunk_rest(inst_51702);
var inst_51708 = cljs.core.count(inst_51706);
var inst_51684 = inst_51707;
var inst_51685 = inst_51706;
var inst_51686 = inst_51708;
var inst_51687 = (0);
var state_51742__$1 = (function (){var statearr_51778 = state_51742;
(statearr_51778[(19)] = inst_51684);

(statearr_51778[(9)] = inst_51685);

(statearr_51778[(20)] = inst_51686);

(statearr_51778[(10)] = inst_51687);

return statearr_51778;
})();
var statearr_51779_52832 = state_51742__$1;
(statearr_51779_52832[(2)] = null);

(statearr_51779_52832[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (41))){
var inst_51702 = (state_51742[(23)]);
var inst_51717 = (state_51742[(2)]);
var inst_51718 = cljs.core.next(inst_51702);
var inst_51684 = inst_51718;
var inst_51685 = null;
var inst_51686 = (0);
var inst_51687 = (0);
var state_51742__$1 = (function (){var statearr_51780 = state_51742;
(statearr_51780[(25)] = inst_51717);

(statearr_51780[(19)] = inst_51684);

(statearr_51780[(9)] = inst_51685);

(statearr_51780[(20)] = inst_51686);

(statearr_51780[(10)] = inst_51687);

return statearr_51780;
})();
var statearr_51781_52833 = state_51742__$1;
(statearr_51781_52833[(2)] = null);

(statearr_51781_52833[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (43))){
var state_51742__$1 = state_51742;
var statearr_51782_52834 = state_51742__$1;
(statearr_51782_52834[(2)] = null);

(statearr_51782_52834[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (29))){
var inst_51726 = (state_51742[(2)]);
var state_51742__$1 = state_51742;
var statearr_51783_52835 = state_51742__$1;
(statearr_51783_52835[(2)] = inst_51726);

(statearr_51783_52835[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (44))){
var inst_51735 = (state_51742[(2)]);
var state_51742__$1 = (function (){var statearr_51784 = state_51742;
(statearr_51784[(26)] = inst_51735);

return statearr_51784;
})();
var statearr_51785_52838 = state_51742__$1;
(statearr_51785_52838[(2)] = null);

(statearr_51785_52838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (6))){
var inst_51675 = (state_51742[(27)]);
var inst_51674 = cljs.core.deref(cs);
var inst_51675__$1 = cljs.core.keys(inst_51674);
var inst_51676 = cljs.core.count(inst_51675__$1);
var inst_51677 = cljs.core.reset_BANG_(dctr,inst_51676);
var inst_51683 = cljs.core.seq(inst_51675__$1);
var inst_51684 = inst_51683;
var inst_51685 = null;
var inst_51686 = (0);
var inst_51687 = (0);
var state_51742__$1 = (function (){var statearr_51786 = state_51742;
(statearr_51786[(27)] = inst_51675__$1);

(statearr_51786[(28)] = inst_51677);

(statearr_51786[(19)] = inst_51684);

(statearr_51786[(9)] = inst_51685);

(statearr_51786[(20)] = inst_51686);

(statearr_51786[(10)] = inst_51687);

return statearr_51786;
})();
var statearr_51787_52839 = state_51742__$1;
(statearr_51787_52839[(2)] = null);

(statearr_51787_52839[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (28))){
var inst_51684 = (state_51742[(19)]);
var inst_51702 = (state_51742[(23)]);
var inst_51702__$1 = cljs.core.seq(inst_51684);
var state_51742__$1 = (function (){var statearr_51788 = state_51742;
(statearr_51788[(23)] = inst_51702__$1);

return statearr_51788;
})();
if(inst_51702__$1){
var statearr_51789_52840 = state_51742__$1;
(statearr_51789_52840[(1)] = (33));

} else {
var statearr_51790_52841 = state_51742__$1;
(statearr_51790_52841[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (25))){
var inst_51687 = (state_51742[(10)]);
var inst_51686 = (state_51742[(20)]);
var inst_51689 = (inst_51687 < inst_51686);
var inst_51690 = inst_51689;
var state_51742__$1 = state_51742;
if(cljs.core.truth_(inst_51690)){
var statearr_51791_52842 = state_51742__$1;
(statearr_51791_52842[(1)] = (27));

} else {
var statearr_51792_52843 = state_51742__$1;
(statearr_51792_52843[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (34))){
var state_51742__$1 = state_51742;
var statearr_51793_52845 = state_51742__$1;
(statearr_51793_52845[(2)] = null);

(statearr_51793_52845[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (17))){
var state_51742__$1 = state_51742;
var statearr_51794_52846 = state_51742__$1;
(statearr_51794_52846[(2)] = null);

(statearr_51794_52846[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (3))){
var inst_51740 = (state_51742[(2)]);
var state_51742__$1 = state_51742;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51742__$1,inst_51740);
} else {
if((state_val_51743 === (12))){
var inst_51670 = (state_51742[(2)]);
var state_51742__$1 = state_51742;
var statearr_51795_52848 = state_51742__$1;
(statearr_51795_52848[(2)] = inst_51670);

(statearr_51795_52848[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (2))){
var state_51742__$1 = state_51742;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51742__$1,(4),ch);
} else {
if((state_val_51743 === (23))){
var state_51742__$1 = state_51742;
var statearr_51796_52849 = state_51742__$1;
(statearr_51796_52849[(2)] = null);

(statearr_51796_52849[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (35))){
var inst_51724 = (state_51742[(2)]);
var state_51742__$1 = state_51742;
var statearr_51797_52850 = state_51742__$1;
(statearr_51797_52850[(2)] = inst_51724);

(statearr_51797_52850[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (19))){
var inst_51642 = (state_51742[(7)]);
var inst_51646 = cljs.core.chunk_first(inst_51642);
var inst_51647 = cljs.core.chunk_rest(inst_51642);
var inst_51648 = cljs.core.count(inst_51646);
var inst_51620 = inst_51647;
var inst_51621 = inst_51646;
var inst_51622 = inst_51648;
var inst_51623 = (0);
var state_51742__$1 = (function (){var statearr_51798 = state_51742;
(statearr_51798[(14)] = inst_51620);

(statearr_51798[(15)] = inst_51621);

(statearr_51798[(16)] = inst_51622);

(statearr_51798[(17)] = inst_51623);

return statearr_51798;
})();
var statearr_51799_52851 = state_51742__$1;
(statearr_51799_52851[(2)] = null);

(statearr_51799_52851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (11))){
var inst_51620 = (state_51742[(14)]);
var inst_51642 = (state_51742[(7)]);
var inst_51642__$1 = cljs.core.seq(inst_51620);
var state_51742__$1 = (function (){var statearr_51800 = state_51742;
(statearr_51800[(7)] = inst_51642__$1);

return statearr_51800;
})();
if(inst_51642__$1){
var statearr_51801_52852 = state_51742__$1;
(statearr_51801_52852[(1)] = (16));

} else {
var statearr_51802_52853 = state_51742__$1;
(statearr_51802_52853[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (9))){
var inst_51672 = (state_51742[(2)]);
var state_51742__$1 = state_51742;
var statearr_51803_52854 = state_51742__$1;
(statearr_51803_52854[(2)] = inst_51672);

(statearr_51803_52854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (5))){
var inst_51616 = cljs.core.deref(cs);
var inst_51617 = cljs.core.seq(inst_51616);
var inst_51620 = inst_51617;
var inst_51621 = null;
var inst_51622 = (0);
var inst_51623 = (0);
var state_51742__$1 = (function (){var statearr_51804 = state_51742;
(statearr_51804[(14)] = inst_51620);

(statearr_51804[(15)] = inst_51621);

(statearr_51804[(16)] = inst_51622);

(statearr_51804[(17)] = inst_51623);

return statearr_51804;
})();
var statearr_51805_52855 = state_51742__$1;
(statearr_51805_52855[(2)] = null);

(statearr_51805_52855[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (14))){
var state_51742__$1 = state_51742;
var statearr_51806_52856 = state_51742__$1;
(statearr_51806_52856[(2)] = null);

(statearr_51806_52856[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (45))){
var inst_51732 = (state_51742[(2)]);
var state_51742__$1 = state_51742;
var statearr_51807_52857 = state_51742__$1;
(statearr_51807_52857[(2)] = inst_51732);

(statearr_51807_52857[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (26))){
var inst_51675 = (state_51742[(27)]);
var inst_51728 = (state_51742[(2)]);
var inst_51729 = cljs.core.seq(inst_51675);
var state_51742__$1 = (function (){var statearr_51808 = state_51742;
(statearr_51808[(29)] = inst_51728);

return statearr_51808;
})();
if(inst_51729){
var statearr_51809_52858 = state_51742__$1;
(statearr_51809_52858[(1)] = (42));

} else {
var statearr_51810_52859 = state_51742__$1;
(statearr_51810_52859[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (16))){
var inst_51642 = (state_51742[(7)]);
var inst_51644 = cljs.core.chunked_seq_QMARK_(inst_51642);
var state_51742__$1 = state_51742;
if(inst_51644){
var statearr_51811_52860 = state_51742__$1;
(statearr_51811_52860[(1)] = (19));

} else {
var statearr_51812_52861 = state_51742__$1;
(statearr_51812_52861[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (38))){
var inst_51721 = (state_51742[(2)]);
var state_51742__$1 = state_51742;
var statearr_51813_52862 = state_51742__$1;
(statearr_51813_52862[(2)] = inst_51721);

(statearr_51813_52862[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (30))){
var state_51742__$1 = state_51742;
var statearr_51814_52863 = state_51742__$1;
(statearr_51814_52863[(2)] = null);

(statearr_51814_52863[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (10))){
var inst_51621 = (state_51742[(15)]);
var inst_51623 = (state_51742[(17)]);
var inst_51631 = cljs.core._nth(inst_51621,inst_51623);
var inst_51632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51631,(0),null);
var inst_51633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51631,(1),null);
var state_51742__$1 = (function (){var statearr_51815 = state_51742;
(statearr_51815[(24)] = inst_51632);

return statearr_51815;
})();
if(cljs.core.truth_(inst_51633)){
var statearr_51816_52868 = state_51742__$1;
(statearr_51816_52868[(1)] = (13));

} else {
var statearr_51817_52869 = state_51742__$1;
(statearr_51817_52869[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (18))){
var inst_51668 = (state_51742[(2)]);
var state_51742__$1 = state_51742;
var statearr_51818_52873 = state_51742__$1;
(statearr_51818_52873[(2)] = inst_51668);

(statearr_51818_52873[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (42))){
var state_51742__$1 = state_51742;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51742__$1,(45),dchan);
} else {
if((state_val_51743 === (37))){
var inst_51702 = (state_51742[(23)]);
var inst_51711 = (state_51742[(22)]);
var inst_51609 = (state_51742[(12)]);
var inst_51711__$1 = cljs.core.first(inst_51702);
var inst_51712 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_51711__$1,inst_51609,done);
var state_51742__$1 = (function (){var statearr_51819 = state_51742;
(statearr_51819[(22)] = inst_51711__$1);

return statearr_51819;
})();
if(cljs.core.truth_(inst_51712)){
var statearr_51820_52874 = state_51742__$1;
(statearr_51820_52874[(1)] = (39));

} else {
var statearr_51821_52875 = state_51742__$1;
(statearr_51821_52875[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (8))){
var inst_51623 = (state_51742[(17)]);
var inst_51622 = (state_51742[(16)]);
var inst_51625 = (inst_51623 < inst_51622);
var inst_51626 = inst_51625;
var state_51742__$1 = state_51742;
if(cljs.core.truth_(inst_51626)){
var statearr_51822_52876 = state_51742__$1;
(statearr_51822_52876[(1)] = (10));

} else {
var statearr_51823_52877 = state_51742__$1;
(statearr_51823_52877[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__50694__auto__ = null;
var cljs$core$async$mult_$_state_machine__50694__auto____0 = (function (){
var statearr_51824 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51824[(0)] = cljs$core$async$mult_$_state_machine__50694__auto__);

(statearr_51824[(1)] = (1));

return statearr_51824;
});
var cljs$core$async$mult_$_state_machine__50694__auto____1 = (function (state_51742){
while(true){
var ret_value__50695__auto__ = (function (){try{while(true){
var result__50696__auto__ = switch__50693__auto__(state_51742);
if(cljs.core.keyword_identical_QMARK_(result__50696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50696__auto__;
}
break;
}
}catch (e51825){var ex__50697__auto__ = e51825;
var statearr_51826_52878 = state_51742;
(statearr_51826_52878[(2)] = ex__50697__auto__);


if(cljs.core.seq((state_51742[(4)]))){
var statearr_51827_52879 = state_51742;
(statearr_51827_52879[(1)] = cljs.core.first((state_51742[(4)])));

} else {
throw ex__50697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52880 = state_51742;
state_51742 = G__52880;
continue;
} else {
return ret_value__50695__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__50694__auto__ = function(state_51742){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__50694__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__50694__auto____1.call(this,state_51742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__50694__auto____0;
cljs$core$async$mult_$_state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__50694__auto____1;
return cljs$core$async$mult_$_state_machine__50694__auto__;
})()
})();
var state__50812__auto__ = (function (){var statearr_51828 = f__50811__auto__();
(statearr_51828[(6)] = c__50810__auto___52812);

return statearr_51828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50812__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__51830 = arguments.length;
switch (G__51830) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_52885 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_52885(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_52886 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_52886(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_52887 = (function (m){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5520__auto__.call(null,m));
} else {
var m__5518__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5518__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_52887(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_52891 = (function (m,state_map){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5520__auto__.call(null,m,state_map));
} else {
var m__5518__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5518__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_52891(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_52892 = (function (m,mode){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5520__auto__.call(null,m,mode));
} else {
var m__5518__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5518__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_52892(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___52893 = arguments.length;
var i__5898__auto___52894 = (0);
while(true){
if((i__5898__auto___52894 < len__5897__auto___52893)){
args__5903__auto__.push((arguments[i__5898__auto___52894]));

var G__52895 = (i__5898__auto___52894 + (1));
i__5898__auto___52894 = G__52895;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__51835){
var map__51836 = p__51835;
var map__51836__$1 = cljs.core.__destructure_map(map__51836);
var opts = map__51836__$1;
var statearr_51837_52896 = state;
(statearr_51837_52896[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_51838_52900 = state;
(statearr_51838_52900[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_51839_52901 = state;
(statearr_51839_52901[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq51831){
var G__51832 = cljs.core.first(seq51831);
var seq51831__$1 = cljs.core.next(seq51831);
var G__51833 = cljs.core.first(seq51831__$1);
var seq51831__$2 = cljs.core.next(seq51831__$1);
var G__51834 = cljs.core.first(seq51831__$2);
var seq51831__$3 = cljs.core.next(seq51831__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51832,G__51833,G__51834,seq51831__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51840 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta51841){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta51841 = meta51841;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51842,meta51841__$1){
var self__ = this;
var _51842__$1 = this;
return (new cljs.core.async.t_cljs$core$async51840(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta51841__$1));
}));

(cljs.core.async.t_cljs$core$async51840.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51842){
var self__ = this;
var _51842__$1 = this;
return self__.meta51841;
}));

(cljs.core.async.t_cljs$core$async51840.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51840.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async51840.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51840.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51840.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51840.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51840.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51840.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51840.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta51841","meta51841",-1347738384,null)], null);
}));

(cljs.core.async.t_cljs$core$async51840.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51840.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51840");

(cljs.core.async.t_cljs$core$async51840.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async51840");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51840.
 */
cljs.core.async.__GT_t_cljs$core$async51840 = (function cljs$core$async$__GT_t_cljs$core$async51840(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta51841){
return (new cljs.core.async.t_cljs$core$async51840(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta51841));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async51840(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__50810__auto___52906 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50811__auto__ = (function (){var switch__50693__auto__ = (function (state_51910){
var state_val_51911 = (state_51910[(1)]);
if((state_val_51911 === (7))){
var inst_51870 = (state_51910[(2)]);
var state_51910__$1 = state_51910;
if(cljs.core.truth_(inst_51870)){
var statearr_51912_52907 = state_51910__$1;
(statearr_51912_52907[(1)] = (8));

} else {
var statearr_51913_52908 = state_51910__$1;
(statearr_51913_52908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51911 === (20))){
var inst_51863 = (state_51910[(7)]);
var state_51910__$1 = state_51910;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51910__$1,(23),out,inst_51863);
} else {
if((state_val_51911 === (1))){
var inst_51846 = calc_state();
var inst_51847 = cljs.core.__destructure_map(inst_51846);
var inst_51848 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51847,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51849 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51847,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51850 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51847,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_51851 = inst_51846;
var state_51910__$1 = (function (){var statearr_51914 = state_51910;
(statearr_51914[(8)] = inst_51848);

(statearr_51914[(9)] = inst_51849);

(statearr_51914[(10)] = inst_51850);

(statearr_51914[(11)] = inst_51851);

return statearr_51914;
})();
var statearr_51915_52909 = state_51910__$1;
(statearr_51915_52909[(2)] = null);

(statearr_51915_52909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51911 === (24))){
var inst_51854 = (state_51910[(12)]);
var inst_51851 = inst_51854;
var state_51910__$1 = (function (){var statearr_51916 = state_51910;
(statearr_51916[(11)] = inst_51851);

return statearr_51916;
})();
var statearr_51917_52910 = state_51910__$1;
(statearr_51917_52910[(2)] = null);

(statearr_51917_52910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51911 === (4))){
var inst_51863 = (state_51910[(7)]);
var inst_51865 = (state_51910[(13)]);
var inst_51862 = (state_51910[(2)]);
var inst_51863__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51862,(0),null);
var inst_51864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51862,(1),null);
var inst_51865__$1 = (inst_51863__$1 == null);
var state_51910__$1 = (function (){var statearr_51918 = state_51910;
(statearr_51918[(7)] = inst_51863__$1);

(statearr_51918[(14)] = inst_51864);

(statearr_51918[(13)] = inst_51865__$1);

return statearr_51918;
})();
if(cljs.core.truth_(inst_51865__$1)){
var statearr_51919_52911 = state_51910__$1;
(statearr_51919_52911[(1)] = (5));

} else {
var statearr_51920_52912 = state_51910__$1;
(statearr_51920_52912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51911 === (15))){
var inst_51855 = (state_51910[(15)]);
var inst_51884 = (state_51910[(16)]);
var inst_51884__$1 = cljs.core.empty_QMARK_(inst_51855);
var state_51910__$1 = (function (){var statearr_51921 = state_51910;
(statearr_51921[(16)] = inst_51884__$1);

return statearr_51921;
})();
if(inst_51884__$1){
var statearr_51922_52913 = state_51910__$1;
(statearr_51922_52913[(1)] = (17));

} else {
var statearr_51923_52914 = state_51910__$1;
(statearr_51923_52914[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51911 === (21))){
var inst_51854 = (state_51910[(12)]);
var inst_51851 = inst_51854;
var state_51910__$1 = (function (){var statearr_51924 = state_51910;
(statearr_51924[(11)] = inst_51851);

return statearr_51924;
})();
var statearr_51925_52917 = state_51910__$1;
(statearr_51925_52917[(2)] = null);

(statearr_51925_52917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51911 === (13))){
var inst_51877 = (state_51910[(2)]);
var inst_51878 = calc_state();
var inst_51851 = inst_51878;
var state_51910__$1 = (function (){var statearr_51926 = state_51910;
(statearr_51926[(17)] = inst_51877);

(statearr_51926[(11)] = inst_51851);

return statearr_51926;
})();
var statearr_51927_52918 = state_51910__$1;
(statearr_51927_52918[(2)] = null);

(statearr_51927_52918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51911 === (22))){
var inst_51904 = (state_51910[(2)]);
var state_51910__$1 = state_51910;
var statearr_51928_52919 = state_51910__$1;
(statearr_51928_52919[(2)] = inst_51904);

(statearr_51928_52919[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51911 === (6))){
var inst_51864 = (state_51910[(14)]);
var inst_51868 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51864,change);
var state_51910__$1 = state_51910;
var statearr_51929_52920 = state_51910__$1;
(statearr_51929_52920[(2)] = inst_51868);

(statearr_51929_52920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51911 === (25))){
var state_51910__$1 = state_51910;
var statearr_51930_52921 = state_51910__$1;
(statearr_51930_52921[(2)] = null);

(statearr_51930_52921[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51911 === (17))){
var inst_51856 = (state_51910[(18)]);
var inst_51864 = (state_51910[(14)]);
var inst_51886 = (inst_51856.cljs$core$IFn$_invoke$arity$1 ? inst_51856.cljs$core$IFn$_invoke$arity$1(inst_51864) : inst_51856.call(null,inst_51864));
var inst_51887 = cljs.core.not(inst_51886);
var state_51910__$1 = state_51910;
var statearr_51931_52922 = state_51910__$1;
(statearr_51931_52922[(2)] = inst_51887);

(statearr_51931_52922[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51911 === (3))){
var inst_51908 = (state_51910[(2)]);
var state_51910__$1 = state_51910;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51910__$1,inst_51908);
} else {
if((state_val_51911 === (12))){
var state_51910__$1 = state_51910;
var statearr_51932_52923 = state_51910__$1;
(statearr_51932_52923[(2)] = null);

(statearr_51932_52923[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51911 === (2))){
var inst_51851 = (state_51910[(11)]);
var inst_51854 = (state_51910[(12)]);
var inst_51854__$1 = cljs.core.__destructure_map(inst_51851);
var inst_51855 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51854__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51856 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51854__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51854__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_51910__$1 = (function (){var statearr_51933 = state_51910;
(statearr_51933[(12)] = inst_51854__$1);

(statearr_51933[(15)] = inst_51855);

(statearr_51933[(18)] = inst_51856);

return statearr_51933;
})();
return cljs.core.async.ioc_alts_BANG_(state_51910__$1,(4),inst_51857);
} else {
if((state_val_51911 === (23))){
var inst_51895 = (state_51910[(2)]);
var state_51910__$1 = state_51910;
if(cljs.core.truth_(inst_51895)){
var statearr_51934_52924 = state_51910__$1;
(statearr_51934_52924[(1)] = (24));

} else {
var statearr_51935_52925 = state_51910__$1;
(statearr_51935_52925[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51911 === (19))){
var inst_51890 = (state_51910[(2)]);
var state_51910__$1 = state_51910;
var statearr_51936_52926 = state_51910__$1;
(statearr_51936_52926[(2)] = inst_51890);

(statearr_51936_52926[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51911 === (11))){
var inst_51864 = (state_51910[(14)]);
var inst_51874 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_51864);
var state_51910__$1 = state_51910;
var statearr_51937_52928 = state_51910__$1;
(statearr_51937_52928[(2)] = inst_51874);

(statearr_51937_52928[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51911 === (9))){
var inst_51855 = (state_51910[(15)]);
var inst_51864 = (state_51910[(14)]);
var inst_51881 = (state_51910[(19)]);
var inst_51881__$1 = (inst_51855.cljs$core$IFn$_invoke$arity$1 ? inst_51855.cljs$core$IFn$_invoke$arity$1(inst_51864) : inst_51855.call(null,inst_51864));
var state_51910__$1 = (function (){var statearr_51938 = state_51910;
(statearr_51938[(19)] = inst_51881__$1);

return statearr_51938;
})();
if(cljs.core.truth_(inst_51881__$1)){
var statearr_51939_52929 = state_51910__$1;
(statearr_51939_52929[(1)] = (14));

} else {
var statearr_51940_52930 = state_51910__$1;
(statearr_51940_52930[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51911 === (5))){
var inst_51865 = (state_51910[(13)]);
var state_51910__$1 = state_51910;
var statearr_51941_52931 = state_51910__$1;
(statearr_51941_52931[(2)] = inst_51865);

(statearr_51941_52931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51911 === (14))){
var inst_51881 = (state_51910[(19)]);
var state_51910__$1 = state_51910;
var statearr_51942_52932 = state_51910__$1;
(statearr_51942_52932[(2)] = inst_51881);

(statearr_51942_52932[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51911 === (26))){
var inst_51900 = (state_51910[(2)]);
var state_51910__$1 = state_51910;
var statearr_51943_52933 = state_51910__$1;
(statearr_51943_52933[(2)] = inst_51900);

(statearr_51943_52933[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51911 === (16))){
var inst_51892 = (state_51910[(2)]);
var state_51910__$1 = state_51910;
if(cljs.core.truth_(inst_51892)){
var statearr_51944_52934 = state_51910__$1;
(statearr_51944_52934[(1)] = (20));

} else {
var statearr_51945_52935 = state_51910__$1;
(statearr_51945_52935[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51911 === (10))){
var inst_51906 = (state_51910[(2)]);
var state_51910__$1 = state_51910;
var statearr_51946_52936 = state_51910__$1;
(statearr_51946_52936[(2)] = inst_51906);

(statearr_51946_52936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51911 === (18))){
var inst_51884 = (state_51910[(16)]);
var state_51910__$1 = state_51910;
var statearr_51947_52937 = state_51910__$1;
(statearr_51947_52937[(2)] = inst_51884);

(statearr_51947_52937[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51911 === (8))){
var inst_51863 = (state_51910[(7)]);
var inst_51872 = (inst_51863 == null);
var state_51910__$1 = state_51910;
if(cljs.core.truth_(inst_51872)){
var statearr_51948_52938 = state_51910__$1;
(statearr_51948_52938[(1)] = (11));

} else {
var statearr_51949_52939 = state_51910__$1;
(statearr_51949_52939[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__50694__auto__ = null;
var cljs$core$async$mix_$_state_machine__50694__auto____0 = (function (){
var statearr_51950 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51950[(0)] = cljs$core$async$mix_$_state_machine__50694__auto__);

(statearr_51950[(1)] = (1));

return statearr_51950;
});
var cljs$core$async$mix_$_state_machine__50694__auto____1 = (function (state_51910){
while(true){
var ret_value__50695__auto__ = (function (){try{while(true){
var result__50696__auto__ = switch__50693__auto__(state_51910);
if(cljs.core.keyword_identical_QMARK_(result__50696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50696__auto__;
}
break;
}
}catch (e51951){var ex__50697__auto__ = e51951;
var statearr_51952_52940 = state_51910;
(statearr_51952_52940[(2)] = ex__50697__auto__);


if(cljs.core.seq((state_51910[(4)]))){
var statearr_51953_52941 = state_51910;
(statearr_51953_52941[(1)] = cljs.core.first((state_51910[(4)])));

} else {
throw ex__50697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52942 = state_51910;
state_51910 = G__52942;
continue;
} else {
return ret_value__50695__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__50694__auto__ = function(state_51910){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__50694__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__50694__auto____1.call(this,state_51910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__50694__auto____0;
cljs$core$async$mix_$_state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__50694__auto____1;
return cljs$core$async$mix_$_state_machine__50694__auto__;
})()
})();
var state__50812__auto__ = (function (){var statearr_51954 = f__50811__auto__();
(statearr_51954[(6)] = c__50810__auto___52906);

return statearr_51954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50812__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_52943 = (function (p,v,ch,close_QMARK_){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5520__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5518__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5518__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_52943(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_52946 = (function (p,v,ch){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5520__auto__.call(null,p,v,ch));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5518__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_52946(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_52947 = (function() {
var G__52948 = null;
var G__52948__1 = (function (p){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5520__auto__.call(null,p));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5518__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__52948__2 = (function (p,v){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5520__auto__.call(null,p,v));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5518__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__52948 = function(p,v){
switch(arguments.length){
case 1:
return G__52948__1.call(this,p);
case 2:
return G__52948__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52948.cljs$core$IFn$_invoke$arity$1 = G__52948__1;
G__52948.cljs$core$IFn$_invoke$arity$2 = G__52948__2;
return G__52948;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__51956 = arguments.length;
switch (G__51956) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_52947(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_52947(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51960 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta51961){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta51961 = meta51961;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51962,meta51961__$1){
var self__ = this;
var _51962__$1 = this;
return (new cljs.core.async.t_cljs$core$async51960(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta51961__$1));
}));

(cljs.core.async.t_cljs$core$async51960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51962){
var self__ = this;
var _51962__$1 = this;
return self__.meta51961;
}));

(cljs.core.async.t_cljs$core$async51960.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51960.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async51960.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51960.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async51960.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async51960.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async51960.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async51960.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta51961","meta51961",-167901252,null)], null);
}));

(cljs.core.async.t_cljs$core$async51960.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51960.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51960");

(cljs.core.async.t_cljs$core$async51960.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async51960");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51960.
 */
cljs.core.async.__GT_t_cljs$core$async51960 = (function cljs$core$async$__GT_t_cljs$core$async51960(ch,topic_fn,buf_fn,mults,ensure_mult,meta51961){
return (new cljs.core.async.t_cljs$core$async51960(ch,topic_fn,buf_fn,mults,ensure_mult,meta51961));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__51959 = arguments.length;
switch (G__51959) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5162__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__51957_SHARP_){
if(cljs.core.truth_((p1__51957_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__51957_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__51957_SHARP_.call(null,topic)))){
return p1__51957_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51957_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async51960(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__50810__auto___52957 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50811__auto__ = (function (){var switch__50693__auto__ = (function (state_52034){
var state_val_52035 = (state_52034[(1)]);
if((state_val_52035 === (7))){
var inst_52030 = (state_52034[(2)]);
var state_52034__$1 = state_52034;
var statearr_52036_52959 = state_52034__$1;
(statearr_52036_52959[(2)] = inst_52030);

(statearr_52036_52959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52035 === (20))){
var state_52034__$1 = state_52034;
var statearr_52037_52960 = state_52034__$1;
(statearr_52037_52960[(2)] = null);

(statearr_52037_52960[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52035 === (1))){
var state_52034__$1 = state_52034;
var statearr_52038_52961 = state_52034__$1;
(statearr_52038_52961[(2)] = null);

(statearr_52038_52961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52035 === (24))){
var inst_52013 = (state_52034[(7)]);
var inst_52022 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_52013);
var state_52034__$1 = state_52034;
var statearr_52039_52962 = state_52034__$1;
(statearr_52039_52962[(2)] = inst_52022);

(statearr_52039_52962[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52035 === (4))){
var inst_51965 = (state_52034[(8)]);
var inst_51965__$1 = (state_52034[(2)]);
var inst_51966 = (inst_51965__$1 == null);
var state_52034__$1 = (function (){var statearr_52040 = state_52034;
(statearr_52040[(8)] = inst_51965__$1);

return statearr_52040;
})();
if(cljs.core.truth_(inst_51966)){
var statearr_52041_52963 = state_52034__$1;
(statearr_52041_52963[(1)] = (5));

} else {
var statearr_52042_52964 = state_52034__$1;
(statearr_52042_52964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52035 === (15))){
var inst_52007 = (state_52034[(2)]);
var state_52034__$1 = state_52034;
var statearr_52043_52966 = state_52034__$1;
(statearr_52043_52966[(2)] = inst_52007);

(statearr_52043_52966[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52035 === (21))){
var inst_52027 = (state_52034[(2)]);
var state_52034__$1 = (function (){var statearr_52044 = state_52034;
(statearr_52044[(9)] = inst_52027);

return statearr_52044;
})();
var statearr_52045_52970 = state_52034__$1;
(statearr_52045_52970[(2)] = null);

(statearr_52045_52970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52035 === (13))){
var inst_51989 = (state_52034[(10)]);
var inst_51991 = cljs.core.chunked_seq_QMARK_(inst_51989);
var state_52034__$1 = state_52034;
if(inst_51991){
var statearr_52046_52971 = state_52034__$1;
(statearr_52046_52971[(1)] = (16));

} else {
var statearr_52047_52972 = state_52034__$1;
(statearr_52047_52972[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52035 === (22))){
var inst_52019 = (state_52034[(2)]);
var state_52034__$1 = state_52034;
if(cljs.core.truth_(inst_52019)){
var statearr_52048_52973 = state_52034__$1;
(statearr_52048_52973[(1)] = (23));

} else {
var statearr_52049_52974 = state_52034__$1;
(statearr_52049_52974[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52035 === (6))){
var inst_51965 = (state_52034[(8)]);
var inst_52013 = (state_52034[(7)]);
var inst_52015 = (state_52034[(11)]);
var inst_52013__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_51965) : topic_fn.call(null,inst_51965));
var inst_52014 = cljs.core.deref(mults);
var inst_52015__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52014,inst_52013__$1);
var state_52034__$1 = (function (){var statearr_52050 = state_52034;
(statearr_52050[(7)] = inst_52013__$1);

(statearr_52050[(11)] = inst_52015__$1);

return statearr_52050;
})();
if(cljs.core.truth_(inst_52015__$1)){
var statearr_52051_52975 = state_52034__$1;
(statearr_52051_52975[(1)] = (19));

} else {
var statearr_52052_52976 = state_52034__$1;
(statearr_52052_52976[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52035 === (25))){
var inst_52024 = (state_52034[(2)]);
var state_52034__$1 = state_52034;
var statearr_52053_52977 = state_52034__$1;
(statearr_52053_52977[(2)] = inst_52024);

(statearr_52053_52977[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52035 === (17))){
var inst_51989 = (state_52034[(10)]);
var inst_51998 = cljs.core.first(inst_51989);
var inst_51999 = cljs.core.async.muxch_STAR_(inst_51998);
var inst_52000 = cljs.core.async.close_BANG_(inst_51999);
var inst_52001 = cljs.core.next(inst_51989);
var inst_51975 = inst_52001;
var inst_51976 = null;
var inst_51977 = (0);
var inst_51978 = (0);
var state_52034__$1 = (function (){var statearr_52054 = state_52034;
(statearr_52054[(12)] = inst_52000);

(statearr_52054[(13)] = inst_51975);

(statearr_52054[(14)] = inst_51976);

(statearr_52054[(15)] = inst_51977);

(statearr_52054[(16)] = inst_51978);

return statearr_52054;
})();
var statearr_52055_52978 = state_52034__$1;
(statearr_52055_52978[(2)] = null);

(statearr_52055_52978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52035 === (3))){
var inst_52032 = (state_52034[(2)]);
var state_52034__$1 = state_52034;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52034__$1,inst_52032);
} else {
if((state_val_52035 === (12))){
var inst_52009 = (state_52034[(2)]);
var state_52034__$1 = state_52034;
var statearr_52056_52979 = state_52034__$1;
(statearr_52056_52979[(2)] = inst_52009);

(statearr_52056_52979[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52035 === (2))){
var state_52034__$1 = state_52034;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52034__$1,(4),ch);
} else {
if((state_val_52035 === (23))){
var state_52034__$1 = state_52034;
var statearr_52057_52980 = state_52034__$1;
(statearr_52057_52980[(2)] = null);

(statearr_52057_52980[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52035 === (19))){
var inst_52015 = (state_52034[(11)]);
var inst_51965 = (state_52034[(8)]);
var inst_52017 = cljs.core.async.muxch_STAR_(inst_52015);
var state_52034__$1 = state_52034;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52034__$1,(22),inst_52017,inst_51965);
} else {
if((state_val_52035 === (11))){
var inst_51975 = (state_52034[(13)]);
var inst_51989 = (state_52034[(10)]);
var inst_51989__$1 = cljs.core.seq(inst_51975);
var state_52034__$1 = (function (){var statearr_52058 = state_52034;
(statearr_52058[(10)] = inst_51989__$1);

return statearr_52058;
})();
if(inst_51989__$1){
var statearr_52059_52981 = state_52034__$1;
(statearr_52059_52981[(1)] = (13));

} else {
var statearr_52060_52982 = state_52034__$1;
(statearr_52060_52982[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52035 === (9))){
var inst_52011 = (state_52034[(2)]);
var state_52034__$1 = state_52034;
var statearr_52061_52983 = state_52034__$1;
(statearr_52061_52983[(2)] = inst_52011);

(statearr_52061_52983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52035 === (5))){
var inst_51972 = cljs.core.deref(mults);
var inst_51973 = cljs.core.vals(inst_51972);
var inst_51974 = cljs.core.seq(inst_51973);
var inst_51975 = inst_51974;
var inst_51976 = null;
var inst_51977 = (0);
var inst_51978 = (0);
var state_52034__$1 = (function (){var statearr_52062 = state_52034;
(statearr_52062[(13)] = inst_51975);

(statearr_52062[(14)] = inst_51976);

(statearr_52062[(15)] = inst_51977);

(statearr_52062[(16)] = inst_51978);

return statearr_52062;
})();
var statearr_52063_52984 = state_52034__$1;
(statearr_52063_52984[(2)] = null);

(statearr_52063_52984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52035 === (14))){
var state_52034__$1 = state_52034;
var statearr_52067_52985 = state_52034__$1;
(statearr_52067_52985[(2)] = null);

(statearr_52067_52985[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52035 === (16))){
var inst_51989 = (state_52034[(10)]);
var inst_51993 = cljs.core.chunk_first(inst_51989);
var inst_51994 = cljs.core.chunk_rest(inst_51989);
var inst_51995 = cljs.core.count(inst_51993);
var inst_51975 = inst_51994;
var inst_51976 = inst_51993;
var inst_51977 = inst_51995;
var inst_51978 = (0);
var state_52034__$1 = (function (){var statearr_52068 = state_52034;
(statearr_52068[(13)] = inst_51975);

(statearr_52068[(14)] = inst_51976);

(statearr_52068[(15)] = inst_51977);

(statearr_52068[(16)] = inst_51978);

return statearr_52068;
})();
var statearr_52069_52986 = state_52034__$1;
(statearr_52069_52986[(2)] = null);

(statearr_52069_52986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52035 === (10))){
var inst_51976 = (state_52034[(14)]);
var inst_51978 = (state_52034[(16)]);
var inst_51975 = (state_52034[(13)]);
var inst_51977 = (state_52034[(15)]);
var inst_51983 = cljs.core._nth(inst_51976,inst_51978);
var inst_51984 = cljs.core.async.muxch_STAR_(inst_51983);
var inst_51985 = cljs.core.async.close_BANG_(inst_51984);
var inst_51986 = (inst_51978 + (1));
var tmp52064 = inst_51977;
var tmp52065 = inst_51976;
var tmp52066 = inst_51975;
var inst_51975__$1 = tmp52066;
var inst_51976__$1 = tmp52065;
var inst_51977__$1 = tmp52064;
var inst_51978__$1 = inst_51986;
var state_52034__$1 = (function (){var statearr_52070 = state_52034;
(statearr_52070[(17)] = inst_51985);

(statearr_52070[(13)] = inst_51975__$1);

(statearr_52070[(14)] = inst_51976__$1);

(statearr_52070[(15)] = inst_51977__$1);

(statearr_52070[(16)] = inst_51978__$1);

return statearr_52070;
})();
var statearr_52071_52987 = state_52034__$1;
(statearr_52071_52987[(2)] = null);

(statearr_52071_52987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52035 === (18))){
var inst_52004 = (state_52034[(2)]);
var state_52034__$1 = state_52034;
var statearr_52072_52988 = state_52034__$1;
(statearr_52072_52988[(2)] = inst_52004);

(statearr_52072_52988[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52035 === (8))){
var inst_51978 = (state_52034[(16)]);
var inst_51977 = (state_52034[(15)]);
var inst_51980 = (inst_51978 < inst_51977);
var inst_51981 = inst_51980;
var state_52034__$1 = state_52034;
if(cljs.core.truth_(inst_51981)){
var statearr_52073_52989 = state_52034__$1;
(statearr_52073_52989[(1)] = (10));

} else {
var statearr_52074_52990 = state_52034__$1;
(statearr_52074_52990[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50694__auto__ = null;
var cljs$core$async$state_machine__50694__auto____0 = (function (){
var statearr_52075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52075[(0)] = cljs$core$async$state_machine__50694__auto__);

(statearr_52075[(1)] = (1));

return statearr_52075;
});
var cljs$core$async$state_machine__50694__auto____1 = (function (state_52034){
while(true){
var ret_value__50695__auto__ = (function (){try{while(true){
var result__50696__auto__ = switch__50693__auto__(state_52034);
if(cljs.core.keyword_identical_QMARK_(result__50696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50696__auto__;
}
break;
}
}catch (e52076){var ex__50697__auto__ = e52076;
var statearr_52077_52991 = state_52034;
(statearr_52077_52991[(2)] = ex__50697__auto__);


if(cljs.core.seq((state_52034[(4)]))){
var statearr_52078_52992 = state_52034;
(statearr_52078_52992[(1)] = cljs.core.first((state_52034[(4)])));

} else {
throw ex__50697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52993 = state_52034;
state_52034 = G__52993;
continue;
} else {
return ret_value__50695__auto__;
}
break;
}
});
cljs$core$async$state_machine__50694__auto__ = function(state_52034){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50694__auto____1.call(this,state_52034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50694__auto____0;
cljs$core$async$state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50694__auto____1;
return cljs$core$async$state_machine__50694__auto__;
})()
})();
var state__50812__auto__ = (function (){var statearr_52079 = f__50811__auto__();
(statearr_52079[(6)] = c__50810__auto___52957);

return statearr_52079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50812__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__52081 = arguments.length;
switch (G__52081) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__52083 = arguments.length;
switch (G__52083) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__52085 = arguments.length;
switch (G__52085) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__50810__auto___53001 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50811__auto__ = (function (){var switch__50693__auto__ = (function (state_52128){
var state_val_52129 = (state_52128[(1)]);
if((state_val_52129 === (7))){
var state_52128__$1 = state_52128;
var statearr_52130_53002 = state_52128__$1;
(statearr_52130_53002[(2)] = null);

(statearr_52130_53002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52129 === (1))){
var state_52128__$1 = state_52128;
var statearr_52131_53003 = state_52128__$1;
(statearr_52131_53003[(2)] = null);

(statearr_52131_53003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52129 === (4))){
var inst_52089 = (state_52128[(7)]);
var inst_52088 = (state_52128[(8)]);
var inst_52091 = (inst_52089 < inst_52088);
var state_52128__$1 = state_52128;
if(cljs.core.truth_(inst_52091)){
var statearr_52132_53004 = state_52128__$1;
(statearr_52132_53004[(1)] = (6));

} else {
var statearr_52133_53005 = state_52128__$1;
(statearr_52133_53005[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52129 === (15))){
var inst_52114 = (state_52128[(9)]);
var inst_52119 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_52114);
var state_52128__$1 = state_52128;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52128__$1,(17),out,inst_52119);
} else {
if((state_val_52129 === (13))){
var inst_52114 = (state_52128[(9)]);
var inst_52114__$1 = (state_52128[(2)]);
var inst_52115 = cljs.core.some(cljs.core.nil_QMARK_,inst_52114__$1);
var state_52128__$1 = (function (){var statearr_52134 = state_52128;
(statearr_52134[(9)] = inst_52114__$1);

return statearr_52134;
})();
if(cljs.core.truth_(inst_52115)){
var statearr_52135_53006 = state_52128__$1;
(statearr_52135_53006[(1)] = (14));

} else {
var statearr_52136_53007 = state_52128__$1;
(statearr_52136_53007[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52129 === (6))){
var state_52128__$1 = state_52128;
var statearr_52137_53008 = state_52128__$1;
(statearr_52137_53008[(2)] = null);

(statearr_52137_53008[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52129 === (17))){
var inst_52121 = (state_52128[(2)]);
var state_52128__$1 = (function (){var statearr_52139 = state_52128;
(statearr_52139[(10)] = inst_52121);

return statearr_52139;
})();
var statearr_52140_53009 = state_52128__$1;
(statearr_52140_53009[(2)] = null);

(statearr_52140_53009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52129 === (3))){
var inst_52126 = (state_52128[(2)]);
var state_52128__$1 = state_52128;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52128__$1,inst_52126);
} else {
if((state_val_52129 === (12))){
var _ = (function (){var statearr_52141 = state_52128;
(statearr_52141[(4)] = cljs.core.rest((state_52128[(4)])));

return statearr_52141;
})();
var state_52128__$1 = state_52128;
var ex52138 = (state_52128__$1[(2)]);
var statearr_52142_53010 = state_52128__$1;
(statearr_52142_53010[(5)] = ex52138);


if((ex52138 instanceof Object)){
var statearr_52143_53011 = state_52128__$1;
(statearr_52143_53011[(1)] = (11));

(statearr_52143_53011[(5)] = null);

} else {
throw ex52138;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52129 === (2))){
var inst_52087 = cljs.core.reset_BANG_(dctr,cnt);
var inst_52088 = cnt;
var inst_52089 = (0);
var state_52128__$1 = (function (){var statearr_52144 = state_52128;
(statearr_52144[(11)] = inst_52087);

(statearr_52144[(8)] = inst_52088);

(statearr_52144[(7)] = inst_52089);

return statearr_52144;
})();
var statearr_52145_53012 = state_52128__$1;
(statearr_52145_53012[(2)] = null);

(statearr_52145_53012[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52129 === (11))){
var inst_52093 = (state_52128[(2)]);
var inst_52094 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_52128__$1 = (function (){var statearr_52146 = state_52128;
(statearr_52146[(12)] = inst_52093);

return statearr_52146;
})();
var statearr_52147_53013 = state_52128__$1;
(statearr_52147_53013[(2)] = inst_52094);

(statearr_52147_53013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52129 === (9))){
var inst_52089 = (state_52128[(7)]);
var _ = (function (){var statearr_52148 = state_52128;
(statearr_52148[(4)] = cljs.core.cons((12),(state_52128[(4)])));

return statearr_52148;
})();
var inst_52100 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_52089) : chs__$1.call(null,inst_52089));
var inst_52101 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_52089) : done.call(null,inst_52089));
var inst_52102 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_52100,inst_52101);
var ___$1 = (function (){var statearr_52149 = state_52128;
(statearr_52149[(4)] = cljs.core.rest((state_52128[(4)])));

return statearr_52149;
})();
var state_52128__$1 = state_52128;
var statearr_52150_53015 = state_52128__$1;
(statearr_52150_53015[(2)] = inst_52102);

(statearr_52150_53015[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52129 === (5))){
var inst_52112 = (state_52128[(2)]);
var state_52128__$1 = (function (){var statearr_52151 = state_52128;
(statearr_52151[(13)] = inst_52112);

return statearr_52151;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52128__$1,(13),dchan);
} else {
if((state_val_52129 === (14))){
var inst_52117 = cljs.core.async.close_BANG_(out);
var state_52128__$1 = state_52128;
var statearr_52152_53016 = state_52128__$1;
(statearr_52152_53016[(2)] = inst_52117);

(statearr_52152_53016[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52129 === (16))){
var inst_52124 = (state_52128[(2)]);
var state_52128__$1 = state_52128;
var statearr_52153_53017 = state_52128__$1;
(statearr_52153_53017[(2)] = inst_52124);

(statearr_52153_53017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52129 === (10))){
var inst_52089 = (state_52128[(7)]);
var inst_52105 = (state_52128[(2)]);
var inst_52106 = (inst_52089 + (1));
var inst_52089__$1 = inst_52106;
var state_52128__$1 = (function (){var statearr_52154 = state_52128;
(statearr_52154[(14)] = inst_52105);

(statearr_52154[(7)] = inst_52089__$1);

return statearr_52154;
})();
var statearr_52155_53019 = state_52128__$1;
(statearr_52155_53019[(2)] = null);

(statearr_52155_53019[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52129 === (8))){
var inst_52110 = (state_52128[(2)]);
var state_52128__$1 = state_52128;
var statearr_52156_53020 = state_52128__$1;
(statearr_52156_53020[(2)] = inst_52110);

(statearr_52156_53020[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50694__auto__ = null;
var cljs$core$async$state_machine__50694__auto____0 = (function (){
var statearr_52157 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52157[(0)] = cljs$core$async$state_machine__50694__auto__);

(statearr_52157[(1)] = (1));

return statearr_52157;
});
var cljs$core$async$state_machine__50694__auto____1 = (function (state_52128){
while(true){
var ret_value__50695__auto__ = (function (){try{while(true){
var result__50696__auto__ = switch__50693__auto__(state_52128);
if(cljs.core.keyword_identical_QMARK_(result__50696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50696__auto__;
}
break;
}
}catch (e52158){var ex__50697__auto__ = e52158;
var statearr_52159_53021 = state_52128;
(statearr_52159_53021[(2)] = ex__50697__auto__);


if(cljs.core.seq((state_52128[(4)]))){
var statearr_52160_53022 = state_52128;
(statearr_52160_53022[(1)] = cljs.core.first((state_52128[(4)])));

} else {
throw ex__50697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53023 = state_52128;
state_52128 = G__53023;
continue;
} else {
return ret_value__50695__auto__;
}
break;
}
});
cljs$core$async$state_machine__50694__auto__ = function(state_52128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50694__auto____1.call(this,state_52128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50694__auto____0;
cljs$core$async$state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50694__auto____1;
return cljs$core$async$state_machine__50694__auto__;
})()
})();
var state__50812__auto__ = (function (){var statearr_52161 = f__50811__auto__();
(statearr_52161[(6)] = c__50810__auto___53001);

return statearr_52161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50812__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__52164 = arguments.length;
switch (G__52164) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50810__auto___53025 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50811__auto__ = (function (){var switch__50693__auto__ = (function (state_52196){
var state_val_52197 = (state_52196[(1)]);
if((state_val_52197 === (7))){
var inst_52175 = (state_52196[(7)]);
var inst_52176 = (state_52196[(8)]);
var inst_52175__$1 = (state_52196[(2)]);
var inst_52176__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52175__$1,(0),null);
var inst_52177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52175__$1,(1),null);
var inst_52178 = (inst_52176__$1 == null);
var state_52196__$1 = (function (){var statearr_52198 = state_52196;
(statearr_52198[(7)] = inst_52175__$1);

(statearr_52198[(8)] = inst_52176__$1);

(statearr_52198[(9)] = inst_52177);

return statearr_52198;
})();
if(cljs.core.truth_(inst_52178)){
var statearr_52199_53026 = state_52196__$1;
(statearr_52199_53026[(1)] = (8));

} else {
var statearr_52200_53027 = state_52196__$1;
(statearr_52200_53027[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52197 === (1))){
var inst_52165 = cljs.core.vec(chs);
var inst_52166 = inst_52165;
var state_52196__$1 = (function (){var statearr_52201 = state_52196;
(statearr_52201[(10)] = inst_52166);

return statearr_52201;
})();
var statearr_52202_53028 = state_52196__$1;
(statearr_52202_53028[(2)] = null);

(statearr_52202_53028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52197 === (4))){
var inst_52166 = (state_52196[(10)]);
var state_52196__$1 = state_52196;
return cljs.core.async.ioc_alts_BANG_(state_52196__$1,(7),inst_52166);
} else {
if((state_val_52197 === (6))){
var inst_52192 = (state_52196[(2)]);
var state_52196__$1 = state_52196;
var statearr_52203_53029 = state_52196__$1;
(statearr_52203_53029[(2)] = inst_52192);

(statearr_52203_53029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52197 === (3))){
var inst_52194 = (state_52196[(2)]);
var state_52196__$1 = state_52196;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52196__$1,inst_52194);
} else {
if((state_val_52197 === (2))){
var inst_52166 = (state_52196[(10)]);
var inst_52168 = cljs.core.count(inst_52166);
var inst_52169 = (inst_52168 > (0));
var state_52196__$1 = state_52196;
if(cljs.core.truth_(inst_52169)){
var statearr_52205_53030 = state_52196__$1;
(statearr_52205_53030[(1)] = (4));

} else {
var statearr_52206_53031 = state_52196__$1;
(statearr_52206_53031[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52197 === (11))){
var inst_52166 = (state_52196[(10)]);
var inst_52185 = (state_52196[(2)]);
var tmp52204 = inst_52166;
var inst_52166__$1 = tmp52204;
var state_52196__$1 = (function (){var statearr_52207 = state_52196;
(statearr_52207[(11)] = inst_52185);

(statearr_52207[(10)] = inst_52166__$1);

return statearr_52207;
})();
var statearr_52208_53032 = state_52196__$1;
(statearr_52208_53032[(2)] = null);

(statearr_52208_53032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52197 === (9))){
var inst_52176 = (state_52196[(8)]);
var state_52196__$1 = state_52196;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52196__$1,(11),out,inst_52176);
} else {
if((state_val_52197 === (5))){
var inst_52190 = cljs.core.async.close_BANG_(out);
var state_52196__$1 = state_52196;
var statearr_52209_53033 = state_52196__$1;
(statearr_52209_53033[(2)] = inst_52190);

(statearr_52209_53033[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52197 === (10))){
var inst_52188 = (state_52196[(2)]);
var state_52196__$1 = state_52196;
var statearr_52210_53034 = state_52196__$1;
(statearr_52210_53034[(2)] = inst_52188);

(statearr_52210_53034[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52197 === (8))){
var inst_52166 = (state_52196[(10)]);
var inst_52175 = (state_52196[(7)]);
var inst_52176 = (state_52196[(8)]);
var inst_52177 = (state_52196[(9)]);
var inst_52180 = (function (){var cs = inst_52166;
var vec__52171 = inst_52175;
var v = inst_52176;
var c = inst_52177;
return (function (p1__52162_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__52162_SHARP_);
});
})();
var inst_52181 = cljs.core.filterv(inst_52180,inst_52166);
var inst_52166__$1 = inst_52181;
var state_52196__$1 = (function (){var statearr_52211 = state_52196;
(statearr_52211[(10)] = inst_52166__$1);

return statearr_52211;
})();
var statearr_52212_53035 = state_52196__$1;
(statearr_52212_53035[(2)] = null);

(statearr_52212_53035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50694__auto__ = null;
var cljs$core$async$state_machine__50694__auto____0 = (function (){
var statearr_52213 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52213[(0)] = cljs$core$async$state_machine__50694__auto__);

(statearr_52213[(1)] = (1));

return statearr_52213;
});
var cljs$core$async$state_machine__50694__auto____1 = (function (state_52196){
while(true){
var ret_value__50695__auto__ = (function (){try{while(true){
var result__50696__auto__ = switch__50693__auto__(state_52196);
if(cljs.core.keyword_identical_QMARK_(result__50696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50696__auto__;
}
break;
}
}catch (e52214){var ex__50697__auto__ = e52214;
var statearr_52215_53040 = state_52196;
(statearr_52215_53040[(2)] = ex__50697__auto__);


if(cljs.core.seq((state_52196[(4)]))){
var statearr_52216_53042 = state_52196;
(statearr_52216_53042[(1)] = cljs.core.first((state_52196[(4)])));

} else {
throw ex__50697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53043 = state_52196;
state_52196 = G__53043;
continue;
} else {
return ret_value__50695__auto__;
}
break;
}
});
cljs$core$async$state_machine__50694__auto__ = function(state_52196){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50694__auto____1.call(this,state_52196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50694__auto____0;
cljs$core$async$state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50694__auto____1;
return cljs$core$async$state_machine__50694__auto__;
})()
})();
var state__50812__auto__ = (function (){var statearr_52217 = f__50811__auto__();
(statearr_52217[(6)] = c__50810__auto___53025);

return statearr_52217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50812__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__52219 = arguments.length;
switch (G__52219) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50810__auto___53047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50811__auto__ = (function (){var switch__50693__auto__ = (function (state_52243){
var state_val_52244 = (state_52243[(1)]);
if((state_val_52244 === (7))){
var inst_52225 = (state_52243[(7)]);
var inst_52225__$1 = (state_52243[(2)]);
var inst_52226 = (inst_52225__$1 == null);
var inst_52227 = cljs.core.not(inst_52226);
var state_52243__$1 = (function (){var statearr_52245 = state_52243;
(statearr_52245[(7)] = inst_52225__$1);

return statearr_52245;
})();
if(inst_52227){
var statearr_52246_53048 = state_52243__$1;
(statearr_52246_53048[(1)] = (8));

} else {
var statearr_52247_53049 = state_52243__$1;
(statearr_52247_53049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52244 === (1))){
var inst_52220 = (0);
var state_52243__$1 = (function (){var statearr_52248 = state_52243;
(statearr_52248[(8)] = inst_52220);

return statearr_52248;
})();
var statearr_52249_53051 = state_52243__$1;
(statearr_52249_53051[(2)] = null);

(statearr_52249_53051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52244 === (4))){
var state_52243__$1 = state_52243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52243__$1,(7),ch);
} else {
if((state_val_52244 === (6))){
var inst_52238 = (state_52243[(2)]);
var state_52243__$1 = state_52243;
var statearr_52250_53052 = state_52243__$1;
(statearr_52250_53052[(2)] = inst_52238);

(statearr_52250_53052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52244 === (3))){
var inst_52240 = (state_52243[(2)]);
var inst_52241 = cljs.core.async.close_BANG_(out);
var state_52243__$1 = (function (){var statearr_52251 = state_52243;
(statearr_52251[(9)] = inst_52240);

return statearr_52251;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52243__$1,inst_52241);
} else {
if((state_val_52244 === (2))){
var inst_52220 = (state_52243[(8)]);
var inst_52222 = (inst_52220 < n);
var state_52243__$1 = state_52243;
if(cljs.core.truth_(inst_52222)){
var statearr_52252_53057 = state_52243__$1;
(statearr_52252_53057[(1)] = (4));

} else {
var statearr_52253_53058 = state_52243__$1;
(statearr_52253_53058[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52244 === (11))){
var inst_52220 = (state_52243[(8)]);
var inst_52230 = (state_52243[(2)]);
var inst_52231 = (inst_52220 + (1));
var inst_52220__$1 = inst_52231;
var state_52243__$1 = (function (){var statearr_52254 = state_52243;
(statearr_52254[(10)] = inst_52230);

(statearr_52254[(8)] = inst_52220__$1);

return statearr_52254;
})();
var statearr_52255_53059 = state_52243__$1;
(statearr_52255_53059[(2)] = null);

(statearr_52255_53059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52244 === (9))){
var state_52243__$1 = state_52243;
var statearr_52256_53060 = state_52243__$1;
(statearr_52256_53060[(2)] = null);

(statearr_52256_53060[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52244 === (5))){
var state_52243__$1 = state_52243;
var statearr_52257_53061 = state_52243__$1;
(statearr_52257_53061[(2)] = null);

(statearr_52257_53061[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52244 === (10))){
var inst_52235 = (state_52243[(2)]);
var state_52243__$1 = state_52243;
var statearr_52258_53062 = state_52243__$1;
(statearr_52258_53062[(2)] = inst_52235);

(statearr_52258_53062[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52244 === (8))){
var inst_52225 = (state_52243[(7)]);
var state_52243__$1 = state_52243;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52243__$1,(11),out,inst_52225);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50694__auto__ = null;
var cljs$core$async$state_machine__50694__auto____0 = (function (){
var statearr_52259 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52259[(0)] = cljs$core$async$state_machine__50694__auto__);

(statearr_52259[(1)] = (1));

return statearr_52259;
});
var cljs$core$async$state_machine__50694__auto____1 = (function (state_52243){
while(true){
var ret_value__50695__auto__ = (function (){try{while(true){
var result__50696__auto__ = switch__50693__auto__(state_52243);
if(cljs.core.keyword_identical_QMARK_(result__50696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50696__auto__;
}
break;
}
}catch (e52260){var ex__50697__auto__ = e52260;
var statearr_52261_53063 = state_52243;
(statearr_52261_53063[(2)] = ex__50697__auto__);


if(cljs.core.seq((state_52243[(4)]))){
var statearr_52262_53064 = state_52243;
(statearr_52262_53064[(1)] = cljs.core.first((state_52243[(4)])));

} else {
throw ex__50697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53065 = state_52243;
state_52243 = G__53065;
continue;
} else {
return ret_value__50695__auto__;
}
break;
}
});
cljs$core$async$state_machine__50694__auto__ = function(state_52243){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50694__auto____1.call(this,state_52243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50694__auto____0;
cljs$core$async$state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50694__auto____1;
return cljs$core$async$state_machine__50694__auto__;
})()
})();
var state__50812__auto__ = (function (){var statearr_52263 = f__50811__auto__();
(statearr_52263[(6)] = c__50810__auto___53047);

return statearr_52263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50812__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52268 = (function (f,ch,meta52266,_,fn1,meta52269){
this.f = f;
this.ch = ch;
this.meta52266 = meta52266;
this._ = _;
this.fn1 = fn1;
this.meta52269 = meta52269;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52270,meta52269__$1){
var self__ = this;
var _52270__$1 = this;
return (new cljs.core.async.t_cljs$core$async52268(self__.f,self__.ch,self__.meta52266,self__._,self__.fn1,meta52269__$1));
}));

(cljs.core.async.t_cljs$core$async52268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52270){
var self__ = this;
var _52270__$1 = this;
return self__.meta52269;
}));

(cljs.core.async.t_cljs$core$async52268.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52268.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async52268.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async52268.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__52264_SHARP_){
var G__52271 = (((p1__52264_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__52264_SHARP_) : self__.f.call(null,p1__52264_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__52271) : f1.call(null,G__52271));
});
}));

(cljs.core.async.t_cljs$core$async52268.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52266","meta52266",1443388149,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async52265","cljs.core.async/t_cljs$core$async52265",-1358233833,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta52269","meta52269",1756594917,null)], null);
}));

(cljs.core.async.t_cljs$core$async52268.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52268.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52268");

(cljs.core.async.t_cljs$core$async52268.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async52268");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52268.
 */
cljs.core.async.__GT_t_cljs$core$async52268 = (function cljs$core$async$__GT_t_cljs$core$async52268(f,ch,meta52266,_,fn1,meta52269){
return (new cljs.core.async.t_cljs$core$async52268(f,ch,meta52266,_,fn1,meta52269));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52265 = (function (f,ch,meta52266){
this.f = f;
this.ch = ch;
this.meta52266 = meta52266;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52267,meta52266__$1){
var self__ = this;
var _52267__$1 = this;
return (new cljs.core.async.t_cljs$core$async52265(self__.f,self__.ch,meta52266__$1));
}));

(cljs.core.async.t_cljs$core$async52265.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52267){
var self__ = this;
var _52267__$1 = this;
return self__.meta52266;
}));

(cljs.core.async.t_cljs$core$async52265.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52265.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52265.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52265.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52265.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async52268(self__.f,self__.ch,self__.meta52266,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5160__auto__ = ret;
if(cljs.core.truth_(and__5160__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5160__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__52272 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__52272) : self__.f.call(null,G__52272));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async52265.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52265.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async52265.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52266","meta52266",1443388149,null)], null);
}));

(cljs.core.async.t_cljs$core$async52265.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52265.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52265");

(cljs.core.async.t_cljs$core$async52265.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async52265");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52265.
 */
cljs.core.async.__GT_t_cljs$core$async52265 = (function cljs$core$async$__GT_t_cljs$core$async52265(f,ch,meta52266){
return (new cljs.core.async.t_cljs$core$async52265(f,ch,meta52266));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async52265(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52273 = (function (f,ch,meta52274){
this.f = f;
this.ch = ch;
this.meta52274 = meta52274;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52275,meta52274__$1){
var self__ = this;
var _52275__$1 = this;
return (new cljs.core.async.t_cljs$core$async52273(self__.f,self__.ch,meta52274__$1));
}));

(cljs.core.async.t_cljs$core$async52273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52275){
var self__ = this;
var _52275__$1 = this;
return self__.meta52274;
}));

(cljs.core.async.t_cljs$core$async52273.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52273.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52273.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52273.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async52273.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52273.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async52273.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52274","meta52274",699309230,null)], null);
}));

(cljs.core.async.t_cljs$core$async52273.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52273.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52273");

(cljs.core.async.t_cljs$core$async52273.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async52273");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52273.
 */
cljs.core.async.__GT_t_cljs$core$async52273 = (function cljs$core$async$__GT_t_cljs$core$async52273(f,ch,meta52274){
return (new cljs.core.async.t_cljs$core$async52273(f,ch,meta52274));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async52273(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52276 = (function (p,ch,meta52277){
this.p = p;
this.ch = ch;
this.meta52277 = meta52277;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52278,meta52277__$1){
var self__ = this;
var _52278__$1 = this;
return (new cljs.core.async.t_cljs$core$async52276(self__.p,self__.ch,meta52277__$1));
}));

(cljs.core.async.t_cljs$core$async52276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52278){
var self__ = this;
var _52278__$1 = this;
return self__.meta52277;
}));

(cljs.core.async.t_cljs$core$async52276.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52276.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52276.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52276.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52276.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async52276.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52276.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async52276.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52277","meta52277",89223471,null)], null);
}));

(cljs.core.async.t_cljs$core$async52276.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52276.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52276");

(cljs.core.async.t_cljs$core$async52276.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async52276");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52276.
 */
cljs.core.async.__GT_t_cljs$core$async52276 = (function cljs$core$async$__GT_t_cljs$core$async52276(p,ch,meta52277){
return (new cljs.core.async.t_cljs$core$async52276(p,ch,meta52277));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async52276(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__52280 = arguments.length;
switch (G__52280) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50810__auto___53072 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50811__auto__ = (function (){var switch__50693__auto__ = (function (state_52301){
var state_val_52302 = (state_52301[(1)]);
if((state_val_52302 === (7))){
var inst_52297 = (state_52301[(2)]);
var state_52301__$1 = state_52301;
var statearr_52303_53073 = state_52301__$1;
(statearr_52303_53073[(2)] = inst_52297);

(statearr_52303_53073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52302 === (1))){
var state_52301__$1 = state_52301;
var statearr_52304_53074 = state_52301__$1;
(statearr_52304_53074[(2)] = null);

(statearr_52304_53074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52302 === (4))){
var inst_52283 = (state_52301[(7)]);
var inst_52283__$1 = (state_52301[(2)]);
var inst_52284 = (inst_52283__$1 == null);
var state_52301__$1 = (function (){var statearr_52305 = state_52301;
(statearr_52305[(7)] = inst_52283__$1);

return statearr_52305;
})();
if(cljs.core.truth_(inst_52284)){
var statearr_52306_53075 = state_52301__$1;
(statearr_52306_53075[(1)] = (5));

} else {
var statearr_52307_53076 = state_52301__$1;
(statearr_52307_53076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52302 === (6))){
var inst_52283 = (state_52301[(7)]);
var inst_52288 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_52283) : p.call(null,inst_52283));
var state_52301__$1 = state_52301;
if(cljs.core.truth_(inst_52288)){
var statearr_52308_53077 = state_52301__$1;
(statearr_52308_53077[(1)] = (8));

} else {
var statearr_52309_53078 = state_52301__$1;
(statearr_52309_53078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52302 === (3))){
var inst_52299 = (state_52301[(2)]);
var state_52301__$1 = state_52301;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52301__$1,inst_52299);
} else {
if((state_val_52302 === (2))){
var state_52301__$1 = state_52301;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52301__$1,(4),ch);
} else {
if((state_val_52302 === (11))){
var inst_52291 = (state_52301[(2)]);
var state_52301__$1 = state_52301;
var statearr_52310_53079 = state_52301__$1;
(statearr_52310_53079[(2)] = inst_52291);

(statearr_52310_53079[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52302 === (9))){
var state_52301__$1 = state_52301;
var statearr_52311_53080 = state_52301__$1;
(statearr_52311_53080[(2)] = null);

(statearr_52311_53080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52302 === (5))){
var inst_52286 = cljs.core.async.close_BANG_(out);
var state_52301__$1 = state_52301;
var statearr_52312_53081 = state_52301__$1;
(statearr_52312_53081[(2)] = inst_52286);

(statearr_52312_53081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52302 === (10))){
var inst_52294 = (state_52301[(2)]);
var state_52301__$1 = (function (){var statearr_52313 = state_52301;
(statearr_52313[(8)] = inst_52294);

return statearr_52313;
})();
var statearr_52314_53082 = state_52301__$1;
(statearr_52314_53082[(2)] = null);

(statearr_52314_53082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52302 === (8))){
var inst_52283 = (state_52301[(7)]);
var state_52301__$1 = state_52301;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52301__$1,(11),out,inst_52283);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50694__auto__ = null;
var cljs$core$async$state_machine__50694__auto____0 = (function (){
var statearr_52315 = [null,null,null,null,null,null,null,null,null];
(statearr_52315[(0)] = cljs$core$async$state_machine__50694__auto__);

(statearr_52315[(1)] = (1));

return statearr_52315;
});
var cljs$core$async$state_machine__50694__auto____1 = (function (state_52301){
while(true){
var ret_value__50695__auto__ = (function (){try{while(true){
var result__50696__auto__ = switch__50693__auto__(state_52301);
if(cljs.core.keyword_identical_QMARK_(result__50696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50696__auto__;
}
break;
}
}catch (e52316){var ex__50697__auto__ = e52316;
var statearr_52317_53086 = state_52301;
(statearr_52317_53086[(2)] = ex__50697__auto__);


if(cljs.core.seq((state_52301[(4)]))){
var statearr_52318_53087 = state_52301;
(statearr_52318_53087[(1)] = cljs.core.first((state_52301[(4)])));

} else {
throw ex__50697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53088 = state_52301;
state_52301 = G__53088;
continue;
} else {
return ret_value__50695__auto__;
}
break;
}
});
cljs$core$async$state_machine__50694__auto__ = function(state_52301){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50694__auto____1.call(this,state_52301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50694__auto____0;
cljs$core$async$state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50694__auto____1;
return cljs$core$async$state_machine__50694__auto__;
})()
})();
var state__50812__auto__ = (function (){var statearr_52319 = f__50811__auto__();
(statearr_52319[(6)] = c__50810__auto___53072);

return statearr_52319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50812__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__52321 = arguments.length;
switch (G__52321) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__50810__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50811__auto__ = (function (){var switch__50693__auto__ = (function (state_52383){
var state_val_52384 = (state_52383[(1)]);
if((state_val_52384 === (7))){
var inst_52379 = (state_52383[(2)]);
var state_52383__$1 = state_52383;
var statearr_52385_53090 = state_52383__$1;
(statearr_52385_53090[(2)] = inst_52379);

(statearr_52385_53090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52384 === (20))){
var inst_52349 = (state_52383[(7)]);
var inst_52360 = (state_52383[(2)]);
var inst_52361 = cljs.core.next(inst_52349);
var inst_52335 = inst_52361;
var inst_52336 = null;
var inst_52337 = (0);
var inst_52338 = (0);
var state_52383__$1 = (function (){var statearr_52386 = state_52383;
(statearr_52386[(8)] = inst_52360);

(statearr_52386[(9)] = inst_52335);

(statearr_52386[(10)] = inst_52336);

(statearr_52386[(11)] = inst_52337);

(statearr_52386[(12)] = inst_52338);

return statearr_52386;
})();
var statearr_52387_53091 = state_52383__$1;
(statearr_52387_53091[(2)] = null);

(statearr_52387_53091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52384 === (1))){
var state_52383__$1 = state_52383;
var statearr_52388_53092 = state_52383__$1;
(statearr_52388_53092[(2)] = null);

(statearr_52388_53092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52384 === (4))){
var inst_52324 = (state_52383[(13)]);
var inst_52324__$1 = (state_52383[(2)]);
var inst_52325 = (inst_52324__$1 == null);
var state_52383__$1 = (function (){var statearr_52389 = state_52383;
(statearr_52389[(13)] = inst_52324__$1);

return statearr_52389;
})();
if(cljs.core.truth_(inst_52325)){
var statearr_52390_53093 = state_52383__$1;
(statearr_52390_53093[(1)] = (5));

} else {
var statearr_52391_53094 = state_52383__$1;
(statearr_52391_53094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52384 === (15))){
var state_52383__$1 = state_52383;
var statearr_52395_53095 = state_52383__$1;
(statearr_52395_53095[(2)] = null);

(statearr_52395_53095[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52384 === (21))){
var state_52383__$1 = state_52383;
var statearr_52396_53096 = state_52383__$1;
(statearr_52396_53096[(2)] = null);

(statearr_52396_53096[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52384 === (13))){
var inst_52338 = (state_52383[(12)]);
var inst_52335 = (state_52383[(9)]);
var inst_52336 = (state_52383[(10)]);
var inst_52337 = (state_52383[(11)]);
var inst_52345 = (state_52383[(2)]);
var inst_52346 = (inst_52338 + (1));
var tmp52392 = inst_52335;
var tmp52393 = inst_52337;
var tmp52394 = inst_52336;
var inst_52335__$1 = tmp52392;
var inst_52336__$1 = tmp52394;
var inst_52337__$1 = tmp52393;
var inst_52338__$1 = inst_52346;
var state_52383__$1 = (function (){var statearr_52397 = state_52383;
(statearr_52397[(14)] = inst_52345);

(statearr_52397[(9)] = inst_52335__$1);

(statearr_52397[(10)] = inst_52336__$1);

(statearr_52397[(11)] = inst_52337__$1);

(statearr_52397[(12)] = inst_52338__$1);

return statearr_52397;
})();
var statearr_52398_53098 = state_52383__$1;
(statearr_52398_53098[(2)] = null);

(statearr_52398_53098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52384 === (22))){
var state_52383__$1 = state_52383;
var statearr_52399_53099 = state_52383__$1;
(statearr_52399_53099[(2)] = null);

(statearr_52399_53099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52384 === (6))){
var inst_52324 = (state_52383[(13)]);
var inst_52333 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_52324) : f.call(null,inst_52324));
var inst_52334 = cljs.core.seq(inst_52333);
var inst_52335 = inst_52334;
var inst_52336 = null;
var inst_52337 = (0);
var inst_52338 = (0);
var state_52383__$1 = (function (){var statearr_52400 = state_52383;
(statearr_52400[(9)] = inst_52335);

(statearr_52400[(10)] = inst_52336);

(statearr_52400[(11)] = inst_52337);

(statearr_52400[(12)] = inst_52338);

return statearr_52400;
})();
var statearr_52401_53107 = state_52383__$1;
(statearr_52401_53107[(2)] = null);

(statearr_52401_53107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52384 === (17))){
var inst_52349 = (state_52383[(7)]);
var inst_52353 = cljs.core.chunk_first(inst_52349);
var inst_52354 = cljs.core.chunk_rest(inst_52349);
var inst_52355 = cljs.core.count(inst_52353);
var inst_52335 = inst_52354;
var inst_52336 = inst_52353;
var inst_52337 = inst_52355;
var inst_52338 = (0);
var state_52383__$1 = (function (){var statearr_52402 = state_52383;
(statearr_52402[(9)] = inst_52335);

(statearr_52402[(10)] = inst_52336);

(statearr_52402[(11)] = inst_52337);

(statearr_52402[(12)] = inst_52338);

return statearr_52402;
})();
var statearr_52403_53108 = state_52383__$1;
(statearr_52403_53108[(2)] = null);

(statearr_52403_53108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52384 === (3))){
var inst_52381 = (state_52383[(2)]);
var state_52383__$1 = state_52383;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52383__$1,inst_52381);
} else {
if((state_val_52384 === (12))){
var inst_52369 = (state_52383[(2)]);
var state_52383__$1 = state_52383;
var statearr_52404_53109 = state_52383__$1;
(statearr_52404_53109[(2)] = inst_52369);

(statearr_52404_53109[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52384 === (2))){
var state_52383__$1 = state_52383;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52383__$1,(4),in$);
} else {
if((state_val_52384 === (23))){
var inst_52377 = (state_52383[(2)]);
var state_52383__$1 = state_52383;
var statearr_52405_53110 = state_52383__$1;
(statearr_52405_53110[(2)] = inst_52377);

(statearr_52405_53110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52384 === (19))){
var inst_52364 = (state_52383[(2)]);
var state_52383__$1 = state_52383;
var statearr_52406_53111 = state_52383__$1;
(statearr_52406_53111[(2)] = inst_52364);

(statearr_52406_53111[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52384 === (11))){
var inst_52335 = (state_52383[(9)]);
var inst_52349 = (state_52383[(7)]);
var inst_52349__$1 = cljs.core.seq(inst_52335);
var state_52383__$1 = (function (){var statearr_52407 = state_52383;
(statearr_52407[(7)] = inst_52349__$1);

return statearr_52407;
})();
if(inst_52349__$1){
var statearr_52408_53115 = state_52383__$1;
(statearr_52408_53115[(1)] = (14));

} else {
var statearr_52409_53116 = state_52383__$1;
(statearr_52409_53116[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52384 === (9))){
var inst_52371 = (state_52383[(2)]);
var inst_52372 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_52383__$1 = (function (){var statearr_52410 = state_52383;
(statearr_52410[(15)] = inst_52371);

return statearr_52410;
})();
if(cljs.core.truth_(inst_52372)){
var statearr_52411_53117 = state_52383__$1;
(statearr_52411_53117[(1)] = (21));

} else {
var statearr_52412_53118 = state_52383__$1;
(statearr_52412_53118[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52384 === (5))){
var inst_52327 = cljs.core.async.close_BANG_(out);
var state_52383__$1 = state_52383;
var statearr_52413_53119 = state_52383__$1;
(statearr_52413_53119[(2)] = inst_52327);

(statearr_52413_53119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52384 === (14))){
var inst_52349 = (state_52383[(7)]);
var inst_52351 = cljs.core.chunked_seq_QMARK_(inst_52349);
var state_52383__$1 = state_52383;
if(inst_52351){
var statearr_52414_53120 = state_52383__$1;
(statearr_52414_53120[(1)] = (17));

} else {
var statearr_52415_53124 = state_52383__$1;
(statearr_52415_53124[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52384 === (16))){
var inst_52367 = (state_52383[(2)]);
var state_52383__$1 = state_52383;
var statearr_52416_53125 = state_52383__$1;
(statearr_52416_53125[(2)] = inst_52367);

(statearr_52416_53125[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52384 === (10))){
var inst_52336 = (state_52383[(10)]);
var inst_52338 = (state_52383[(12)]);
var inst_52343 = cljs.core._nth(inst_52336,inst_52338);
var state_52383__$1 = state_52383;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52383__$1,(13),out,inst_52343);
} else {
if((state_val_52384 === (18))){
var inst_52349 = (state_52383[(7)]);
var inst_52358 = cljs.core.first(inst_52349);
var state_52383__$1 = state_52383;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52383__$1,(20),out,inst_52358);
} else {
if((state_val_52384 === (8))){
var inst_52338 = (state_52383[(12)]);
var inst_52337 = (state_52383[(11)]);
var inst_52340 = (inst_52338 < inst_52337);
var inst_52341 = inst_52340;
var state_52383__$1 = state_52383;
if(cljs.core.truth_(inst_52341)){
var statearr_52417_53126 = state_52383__$1;
(statearr_52417_53126[(1)] = (10));

} else {
var statearr_52418_53127 = state_52383__$1;
(statearr_52418_53127[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__50694__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__50694__auto____0 = (function (){
var statearr_52419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52419[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__50694__auto__);

(statearr_52419[(1)] = (1));

return statearr_52419;
});
var cljs$core$async$mapcat_STAR__$_state_machine__50694__auto____1 = (function (state_52383){
while(true){
var ret_value__50695__auto__ = (function (){try{while(true){
var result__50696__auto__ = switch__50693__auto__(state_52383);
if(cljs.core.keyword_identical_QMARK_(result__50696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50696__auto__;
}
break;
}
}catch (e52420){var ex__50697__auto__ = e52420;
var statearr_52421_53131 = state_52383;
(statearr_52421_53131[(2)] = ex__50697__auto__);


if(cljs.core.seq((state_52383[(4)]))){
var statearr_52422_53132 = state_52383;
(statearr_52422_53132[(1)] = cljs.core.first((state_52383[(4)])));

} else {
throw ex__50697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53133 = state_52383;
state_52383 = G__53133;
continue;
} else {
return ret_value__50695__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__50694__auto__ = function(state_52383){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__50694__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__50694__auto____1.call(this,state_52383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__50694__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__50694__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__50694__auto__;
})()
})();
var state__50812__auto__ = (function (){var statearr_52423 = f__50811__auto__();
(statearr_52423[(6)] = c__50810__auto__);

return statearr_52423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50812__auto__);
}));

return c__50810__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__52425 = arguments.length;
switch (G__52425) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__52427 = arguments.length;
switch (G__52427) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__52429 = arguments.length;
switch (G__52429) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50810__auto___53140 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50811__auto__ = (function (){var switch__50693__auto__ = (function (state_52453){
var state_val_52454 = (state_52453[(1)]);
if((state_val_52454 === (7))){
var inst_52448 = (state_52453[(2)]);
var state_52453__$1 = state_52453;
var statearr_52455_53141 = state_52453__$1;
(statearr_52455_53141[(2)] = inst_52448);

(statearr_52455_53141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (1))){
var inst_52430 = null;
var state_52453__$1 = (function (){var statearr_52456 = state_52453;
(statearr_52456[(7)] = inst_52430);

return statearr_52456;
})();
var statearr_52457_53142 = state_52453__$1;
(statearr_52457_53142[(2)] = null);

(statearr_52457_53142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (4))){
var inst_52433 = (state_52453[(8)]);
var inst_52433__$1 = (state_52453[(2)]);
var inst_52434 = (inst_52433__$1 == null);
var inst_52435 = cljs.core.not(inst_52434);
var state_52453__$1 = (function (){var statearr_52458 = state_52453;
(statearr_52458[(8)] = inst_52433__$1);

return statearr_52458;
})();
if(inst_52435){
var statearr_52459_53143 = state_52453__$1;
(statearr_52459_53143[(1)] = (5));

} else {
var statearr_52460_53144 = state_52453__$1;
(statearr_52460_53144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (6))){
var state_52453__$1 = state_52453;
var statearr_52461_53145 = state_52453__$1;
(statearr_52461_53145[(2)] = null);

(statearr_52461_53145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (3))){
var inst_52450 = (state_52453[(2)]);
var inst_52451 = cljs.core.async.close_BANG_(out);
var state_52453__$1 = (function (){var statearr_52462 = state_52453;
(statearr_52462[(9)] = inst_52450);

return statearr_52462;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52453__$1,inst_52451);
} else {
if((state_val_52454 === (2))){
var state_52453__$1 = state_52453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52453__$1,(4),ch);
} else {
if((state_val_52454 === (11))){
var inst_52433 = (state_52453[(8)]);
var inst_52442 = (state_52453[(2)]);
var inst_52430 = inst_52433;
var state_52453__$1 = (function (){var statearr_52463 = state_52453;
(statearr_52463[(10)] = inst_52442);

(statearr_52463[(7)] = inst_52430);

return statearr_52463;
})();
var statearr_52464_53147 = state_52453__$1;
(statearr_52464_53147[(2)] = null);

(statearr_52464_53147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (9))){
var inst_52433 = (state_52453[(8)]);
var state_52453__$1 = state_52453;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52453__$1,(11),out,inst_52433);
} else {
if((state_val_52454 === (5))){
var inst_52433 = (state_52453[(8)]);
var inst_52430 = (state_52453[(7)]);
var inst_52437 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52433,inst_52430);
var state_52453__$1 = state_52453;
if(inst_52437){
var statearr_52466_53148 = state_52453__$1;
(statearr_52466_53148[(1)] = (8));

} else {
var statearr_52467_53149 = state_52453__$1;
(statearr_52467_53149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (10))){
var inst_52445 = (state_52453[(2)]);
var state_52453__$1 = state_52453;
var statearr_52468_53150 = state_52453__$1;
(statearr_52468_53150[(2)] = inst_52445);

(statearr_52468_53150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (8))){
var inst_52430 = (state_52453[(7)]);
var tmp52465 = inst_52430;
var inst_52430__$1 = tmp52465;
var state_52453__$1 = (function (){var statearr_52469 = state_52453;
(statearr_52469[(7)] = inst_52430__$1);

return statearr_52469;
})();
var statearr_52470_53151 = state_52453__$1;
(statearr_52470_53151[(2)] = null);

(statearr_52470_53151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50694__auto__ = null;
var cljs$core$async$state_machine__50694__auto____0 = (function (){
var statearr_52471 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52471[(0)] = cljs$core$async$state_machine__50694__auto__);

(statearr_52471[(1)] = (1));

return statearr_52471;
});
var cljs$core$async$state_machine__50694__auto____1 = (function (state_52453){
while(true){
var ret_value__50695__auto__ = (function (){try{while(true){
var result__50696__auto__ = switch__50693__auto__(state_52453);
if(cljs.core.keyword_identical_QMARK_(result__50696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50696__auto__;
}
break;
}
}catch (e52472){var ex__50697__auto__ = e52472;
var statearr_52473_53152 = state_52453;
(statearr_52473_53152[(2)] = ex__50697__auto__);


if(cljs.core.seq((state_52453[(4)]))){
var statearr_52474_53153 = state_52453;
(statearr_52474_53153[(1)] = cljs.core.first((state_52453[(4)])));

} else {
throw ex__50697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53154 = state_52453;
state_52453 = G__53154;
continue;
} else {
return ret_value__50695__auto__;
}
break;
}
});
cljs$core$async$state_machine__50694__auto__ = function(state_52453){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50694__auto____1.call(this,state_52453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50694__auto____0;
cljs$core$async$state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50694__auto____1;
return cljs$core$async$state_machine__50694__auto__;
})()
})();
var state__50812__auto__ = (function (){var statearr_52475 = f__50811__auto__();
(statearr_52475[(6)] = c__50810__auto___53140);

return statearr_52475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50812__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__52477 = arguments.length;
switch (G__52477) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50810__auto___53156 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50811__auto__ = (function (){var switch__50693__auto__ = (function (state_52515){
var state_val_52516 = (state_52515[(1)]);
if((state_val_52516 === (7))){
var inst_52511 = (state_52515[(2)]);
var state_52515__$1 = state_52515;
var statearr_52517_53157 = state_52515__$1;
(statearr_52517_53157[(2)] = inst_52511);

(statearr_52517_53157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52516 === (1))){
var inst_52478 = (new Array(n));
var inst_52479 = inst_52478;
var inst_52480 = (0);
var state_52515__$1 = (function (){var statearr_52518 = state_52515;
(statearr_52518[(7)] = inst_52479);

(statearr_52518[(8)] = inst_52480);

return statearr_52518;
})();
var statearr_52519_53158 = state_52515__$1;
(statearr_52519_53158[(2)] = null);

(statearr_52519_53158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52516 === (4))){
var inst_52483 = (state_52515[(9)]);
var inst_52483__$1 = (state_52515[(2)]);
var inst_52484 = (inst_52483__$1 == null);
var inst_52485 = cljs.core.not(inst_52484);
var state_52515__$1 = (function (){var statearr_52520 = state_52515;
(statearr_52520[(9)] = inst_52483__$1);

return statearr_52520;
})();
if(inst_52485){
var statearr_52521_53159 = state_52515__$1;
(statearr_52521_53159[(1)] = (5));

} else {
var statearr_52522_53160 = state_52515__$1;
(statearr_52522_53160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52516 === (15))){
var inst_52505 = (state_52515[(2)]);
var state_52515__$1 = state_52515;
var statearr_52523_53161 = state_52515__$1;
(statearr_52523_53161[(2)] = inst_52505);

(statearr_52523_53161[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52516 === (13))){
var state_52515__$1 = state_52515;
var statearr_52524_53162 = state_52515__$1;
(statearr_52524_53162[(2)] = null);

(statearr_52524_53162[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52516 === (6))){
var inst_52480 = (state_52515[(8)]);
var inst_52501 = (inst_52480 > (0));
var state_52515__$1 = state_52515;
if(cljs.core.truth_(inst_52501)){
var statearr_52525_53163 = state_52515__$1;
(statearr_52525_53163[(1)] = (12));

} else {
var statearr_52526_53164 = state_52515__$1;
(statearr_52526_53164[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52516 === (3))){
var inst_52513 = (state_52515[(2)]);
var state_52515__$1 = state_52515;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52515__$1,inst_52513);
} else {
if((state_val_52516 === (12))){
var inst_52479 = (state_52515[(7)]);
var inst_52503 = cljs.core.vec(inst_52479);
var state_52515__$1 = state_52515;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52515__$1,(15),out,inst_52503);
} else {
if((state_val_52516 === (2))){
var state_52515__$1 = state_52515;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52515__$1,(4),ch);
} else {
if((state_val_52516 === (11))){
var inst_52495 = (state_52515[(2)]);
var inst_52496 = (new Array(n));
var inst_52479 = inst_52496;
var inst_52480 = (0);
var state_52515__$1 = (function (){var statearr_52527 = state_52515;
(statearr_52527[(10)] = inst_52495);

(statearr_52527[(7)] = inst_52479);

(statearr_52527[(8)] = inst_52480);

return statearr_52527;
})();
var statearr_52528_53169 = state_52515__$1;
(statearr_52528_53169[(2)] = null);

(statearr_52528_53169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52516 === (9))){
var inst_52479 = (state_52515[(7)]);
var inst_52493 = cljs.core.vec(inst_52479);
var state_52515__$1 = state_52515;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52515__$1,(11),out,inst_52493);
} else {
if((state_val_52516 === (5))){
var inst_52479 = (state_52515[(7)]);
var inst_52480 = (state_52515[(8)]);
var inst_52483 = (state_52515[(9)]);
var inst_52488 = (state_52515[(11)]);
var inst_52487 = (inst_52479[inst_52480] = inst_52483);
var inst_52488__$1 = (inst_52480 + (1));
var inst_52489 = (inst_52488__$1 < n);
var state_52515__$1 = (function (){var statearr_52529 = state_52515;
(statearr_52529[(12)] = inst_52487);

(statearr_52529[(11)] = inst_52488__$1);

return statearr_52529;
})();
if(cljs.core.truth_(inst_52489)){
var statearr_52530_53170 = state_52515__$1;
(statearr_52530_53170[(1)] = (8));

} else {
var statearr_52531_53171 = state_52515__$1;
(statearr_52531_53171[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52516 === (14))){
var inst_52508 = (state_52515[(2)]);
var inst_52509 = cljs.core.async.close_BANG_(out);
var state_52515__$1 = (function (){var statearr_52533 = state_52515;
(statearr_52533[(13)] = inst_52508);

return statearr_52533;
})();
var statearr_52534_53172 = state_52515__$1;
(statearr_52534_53172[(2)] = inst_52509);

(statearr_52534_53172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52516 === (10))){
var inst_52499 = (state_52515[(2)]);
var state_52515__$1 = state_52515;
var statearr_52535_53173 = state_52515__$1;
(statearr_52535_53173[(2)] = inst_52499);

(statearr_52535_53173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52516 === (8))){
var inst_52479 = (state_52515[(7)]);
var inst_52488 = (state_52515[(11)]);
var tmp52532 = inst_52479;
var inst_52479__$1 = tmp52532;
var inst_52480 = inst_52488;
var state_52515__$1 = (function (){var statearr_52536 = state_52515;
(statearr_52536[(7)] = inst_52479__$1);

(statearr_52536[(8)] = inst_52480);

return statearr_52536;
})();
var statearr_52537_53174 = state_52515__$1;
(statearr_52537_53174[(2)] = null);

(statearr_52537_53174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50694__auto__ = null;
var cljs$core$async$state_machine__50694__auto____0 = (function (){
var statearr_52538 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52538[(0)] = cljs$core$async$state_machine__50694__auto__);

(statearr_52538[(1)] = (1));

return statearr_52538;
});
var cljs$core$async$state_machine__50694__auto____1 = (function (state_52515){
while(true){
var ret_value__50695__auto__ = (function (){try{while(true){
var result__50696__auto__ = switch__50693__auto__(state_52515);
if(cljs.core.keyword_identical_QMARK_(result__50696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50696__auto__;
}
break;
}
}catch (e52539){var ex__50697__auto__ = e52539;
var statearr_52540_53175 = state_52515;
(statearr_52540_53175[(2)] = ex__50697__auto__);


if(cljs.core.seq((state_52515[(4)]))){
var statearr_52541_53176 = state_52515;
(statearr_52541_53176[(1)] = cljs.core.first((state_52515[(4)])));

} else {
throw ex__50697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53177 = state_52515;
state_52515 = G__53177;
continue;
} else {
return ret_value__50695__auto__;
}
break;
}
});
cljs$core$async$state_machine__50694__auto__ = function(state_52515){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50694__auto____1.call(this,state_52515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50694__auto____0;
cljs$core$async$state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50694__auto____1;
return cljs$core$async$state_machine__50694__auto__;
})()
})();
var state__50812__auto__ = (function (){var statearr_52542 = f__50811__auto__();
(statearr_52542[(6)] = c__50810__auto___53156);

return statearr_52542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50812__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__52544 = arguments.length;
switch (G__52544) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50810__auto___53179 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50811__auto__ = (function (){var switch__50693__auto__ = (function (state_52589){
var state_val_52590 = (state_52589[(1)]);
if((state_val_52590 === (7))){
var inst_52585 = (state_52589[(2)]);
var state_52589__$1 = state_52589;
var statearr_52591_53181 = state_52589__$1;
(statearr_52591_53181[(2)] = inst_52585);

(statearr_52591_53181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52590 === (1))){
var inst_52545 = [];
var inst_52546 = inst_52545;
var inst_52547 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_52589__$1 = (function (){var statearr_52592 = state_52589;
(statearr_52592[(7)] = inst_52546);

(statearr_52592[(8)] = inst_52547);

return statearr_52592;
})();
var statearr_52593_53182 = state_52589__$1;
(statearr_52593_53182[(2)] = null);

(statearr_52593_53182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52590 === (4))){
var inst_52550 = (state_52589[(9)]);
var inst_52550__$1 = (state_52589[(2)]);
var inst_52551 = (inst_52550__$1 == null);
var inst_52552 = cljs.core.not(inst_52551);
var state_52589__$1 = (function (){var statearr_52594 = state_52589;
(statearr_52594[(9)] = inst_52550__$1);

return statearr_52594;
})();
if(inst_52552){
var statearr_52595_53183 = state_52589__$1;
(statearr_52595_53183[(1)] = (5));

} else {
var statearr_52596_53184 = state_52589__$1;
(statearr_52596_53184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52590 === (15))){
var inst_52546 = (state_52589[(7)]);
var inst_52577 = cljs.core.vec(inst_52546);
var state_52589__$1 = state_52589;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52589__$1,(18),out,inst_52577);
} else {
if((state_val_52590 === (13))){
var inst_52572 = (state_52589[(2)]);
var state_52589__$1 = state_52589;
var statearr_52597_53185 = state_52589__$1;
(statearr_52597_53185[(2)] = inst_52572);

(statearr_52597_53185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52590 === (6))){
var inst_52546 = (state_52589[(7)]);
var inst_52574 = inst_52546.length;
var inst_52575 = (inst_52574 > (0));
var state_52589__$1 = state_52589;
if(cljs.core.truth_(inst_52575)){
var statearr_52598_53187 = state_52589__$1;
(statearr_52598_53187[(1)] = (15));

} else {
var statearr_52599_53188 = state_52589__$1;
(statearr_52599_53188[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52590 === (17))){
var inst_52582 = (state_52589[(2)]);
var inst_52583 = cljs.core.async.close_BANG_(out);
var state_52589__$1 = (function (){var statearr_52600 = state_52589;
(statearr_52600[(10)] = inst_52582);

return statearr_52600;
})();
var statearr_52601_53190 = state_52589__$1;
(statearr_52601_53190[(2)] = inst_52583);

(statearr_52601_53190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52590 === (3))){
var inst_52587 = (state_52589[(2)]);
var state_52589__$1 = state_52589;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52589__$1,inst_52587);
} else {
if((state_val_52590 === (12))){
var inst_52546 = (state_52589[(7)]);
var inst_52565 = cljs.core.vec(inst_52546);
var state_52589__$1 = state_52589;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52589__$1,(14),out,inst_52565);
} else {
if((state_val_52590 === (2))){
var state_52589__$1 = state_52589;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52589__$1,(4),ch);
} else {
if((state_val_52590 === (11))){
var inst_52546 = (state_52589[(7)]);
var inst_52550 = (state_52589[(9)]);
var inst_52554 = (state_52589[(11)]);
var inst_52562 = inst_52546.push(inst_52550);
var tmp52602 = inst_52546;
var inst_52546__$1 = tmp52602;
var inst_52547 = inst_52554;
var state_52589__$1 = (function (){var statearr_52603 = state_52589;
(statearr_52603[(12)] = inst_52562);

(statearr_52603[(7)] = inst_52546__$1);

(statearr_52603[(8)] = inst_52547);

return statearr_52603;
})();
var statearr_52604_53191 = state_52589__$1;
(statearr_52604_53191[(2)] = null);

(statearr_52604_53191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52590 === (9))){
var inst_52547 = (state_52589[(8)]);
var inst_52558 = cljs.core.keyword_identical_QMARK_(inst_52547,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_52589__$1 = state_52589;
var statearr_52605_53192 = state_52589__$1;
(statearr_52605_53192[(2)] = inst_52558);

(statearr_52605_53192[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52590 === (5))){
var inst_52550 = (state_52589[(9)]);
var inst_52554 = (state_52589[(11)]);
var inst_52547 = (state_52589[(8)]);
var inst_52555 = (state_52589[(13)]);
var inst_52554__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_52550) : f.call(null,inst_52550));
var inst_52555__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52554__$1,inst_52547);
var state_52589__$1 = (function (){var statearr_52606 = state_52589;
(statearr_52606[(11)] = inst_52554__$1);

(statearr_52606[(13)] = inst_52555__$1);

return statearr_52606;
})();
if(inst_52555__$1){
var statearr_52607_53193 = state_52589__$1;
(statearr_52607_53193[(1)] = (8));

} else {
var statearr_52608_53194 = state_52589__$1;
(statearr_52608_53194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52590 === (14))){
var inst_52550 = (state_52589[(9)]);
var inst_52554 = (state_52589[(11)]);
var inst_52567 = (state_52589[(2)]);
var inst_52568 = [];
var inst_52569 = inst_52568.push(inst_52550);
var inst_52546 = inst_52568;
var inst_52547 = inst_52554;
var state_52589__$1 = (function (){var statearr_52609 = state_52589;
(statearr_52609[(14)] = inst_52567);

(statearr_52609[(15)] = inst_52569);

(statearr_52609[(7)] = inst_52546);

(statearr_52609[(8)] = inst_52547);

return statearr_52609;
})();
var statearr_52610_53195 = state_52589__$1;
(statearr_52610_53195[(2)] = null);

(statearr_52610_53195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52590 === (16))){
var state_52589__$1 = state_52589;
var statearr_52611_53196 = state_52589__$1;
(statearr_52611_53196[(2)] = null);

(statearr_52611_53196[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52590 === (10))){
var inst_52560 = (state_52589[(2)]);
var state_52589__$1 = state_52589;
if(cljs.core.truth_(inst_52560)){
var statearr_52612_53197 = state_52589__$1;
(statearr_52612_53197[(1)] = (11));

} else {
var statearr_52613_53198 = state_52589__$1;
(statearr_52613_53198[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52590 === (18))){
var inst_52579 = (state_52589[(2)]);
var state_52589__$1 = state_52589;
var statearr_52614_53199 = state_52589__$1;
(statearr_52614_53199[(2)] = inst_52579);

(statearr_52614_53199[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52590 === (8))){
var inst_52555 = (state_52589[(13)]);
var state_52589__$1 = state_52589;
var statearr_52615_53200 = state_52589__$1;
(statearr_52615_53200[(2)] = inst_52555);

(statearr_52615_53200[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50694__auto__ = null;
var cljs$core$async$state_machine__50694__auto____0 = (function (){
var statearr_52616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52616[(0)] = cljs$core$async$state_machine__50694__auto__);

(statearr_52616[(1)] = (1));

return statearr_52616;
});
var cljs$core$async$state_machine__50694__auto____1 = (function (state_52589){
while(true){
var ret_value__50695__auto__ = (function (){try{while(true){
var result__50696__auto__ = switch__50693__auto__(state_52589);
if(cljs.core.keyword_identical_QMARK_(result__50696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50696__auto__;
}
break;
}
}catch (e52617){var ex__50697__auto__ = e52617;
var statearr_52618_53202 = state_52589;
(statearr_52618_53202[(2)] = ex__50697__auto__);


if(cljs.core.seq((state_52589[(4)]))){
var statearr_52619_53206 = state_52589;
(statearr_52619_53206[(1)] = cljs.core.first((state_52589[(4)])));

} else {
throw ex__50697__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53207 = state_52589;
state_52589 = G__53207;
continue;
} else {
return ret_value__50695__auto__;
}
break;
}
});
cljs$core$async$state_machine__50694__auto__ = function(state_52589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50694__auto____1.call(this,state_52589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50694__auto____0;
cljs$core$async$state_machine__50694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50694__auto____1;
return cljs$core$async$state_machine__50694__auto__;
})()
})();
var state__50812__auto__ = (function (){var statearr_52620 = f__50811__auto__();
(statearr_52620[(6)] = c__50810__auto___53179);

return statearr_52620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50812__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

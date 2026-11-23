goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__43979){
var map__43980 = p__43979;
var map__43980__$1 = cljs.core.__destructure_map(map__43980);
var runtime = map__43980__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43980__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5162__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_44300 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_44300)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__43990 = runtime;
var G__43991 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_44300);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__43990,G__43991) : shadow.remote.runtime.shared.process.call(null,G__43990,G__43991));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__43999,res){
var map__44000 = p__43999;
var map__44000__$1 = cljs.core.__destructure_map(map__44000);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44000__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44000__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__44010 = res;
var G__44010__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44010,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__44010);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44010__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__44010__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__44024 = arguments.length;
switch (G__44024) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__44043,msg,handlers,timeout_after_ms){
var map__44044 = p__44043;
var map__44044__$1 = cljs.core.__destructure_map(map__44044);
var runtime = map__44044__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44044__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___44311 = arguments.length;
var i__5898__auto___44312 = (0);
while(true){
if((i__5898__auto___44312 < len__5897__auto___44311)){
args__5903__auto__.push((arguments[i__5898__auto___44312]));

var G__44313 = (i__5898__auto___44312 + (1));
i__5898__auto___44312 = G__44313;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__44083,ev,args){
var map__44084 = p__44083;
var map__44084__$1 = cljs.core.__destructure_map(map__44084);
var runtime = map__44084__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44084__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__44085 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__44088 = null;
var count__44089 = (0);
var i__44090 = (0);
while(true){
if((i__44090 < count__44089)){
var ext = chunk__44088.cljs$core$IIndexed$_nth$arity$2(null,i__44090);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__44314 = seq__44085;
var G__44315 = chunk__44088;
var G__44316 = count__44089;
var G__44317 = (i__44090 + (1));
seq__44085 = G__44314;
chunk__44088 = G__44315;
count__44089 = G__44316;
i__44090 = G__44317;
continue;
} else {
var G__44320 = seq__44085;
var G__44321 = chunk__44088;
var G__44322 = count__44089;
var G__44323 = (i__44090 + (1));
seq__44085 = G__44320;
chunk__44088 = G__44321;
count__44089 = G__44322;
i__44090 = G__44323;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__44085);
if(temp__5825__auto__){
var seq__44085__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44085__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__44085__$1);
var G__44327 = cljs.core.chunk_rest(seq__44085__$1);
var G__44328 = c__5694__auto__;
var G__44329 = cljs.core.count(c__5694__auto__);
var G__44330 = (0);
seq__44085 = G__44327;
chunk__44088 = G__44328;
count__44089 = G__44329;
i__44090 = G__44330;
continue;
} else {
var ext = cljs.core.first(seq__44085__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__44331 = cljs.core.next(seq__44085__$1);
var G__44332 = null;
var G__44333 = (0);
var G__44334 = (0);
seq__44085 = G__44331;
chunk__44088 = G__44332;
count__44089 = G__44333;
i__44090 = G__44334;
continue;
} else {
var G__44335 = cljs.core.next(seq__44085__$1);
var G__44336 = null;
var G__44337 = (0);
var G__44338 = (0);
seq__44085 = G__44335;
chunk__44088 = G__44336;
count__44089 = G__44337;
i__44090 = G__44338;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq44070){
var G__44071 = cljs.core.first(seq44070);
var seq44070__$1 = cljs.core.next(seq44070);
var G__44072 = cljs.core.first(seq44070__$1);
var seq44070__$2 = cljs.core.next(seq44070__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44071,G__44072,seq44070__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__44114,p__44115){
var map__44116 = p__44114;
var map__44116__$1 = cljs.core.__destructure_map(map__44116);
var runtime = map__44116__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44116__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__44117 = p__44115;
var map__44117__$1 = cljs.core.__destructure_map(map__44117);
var msg = map__44117__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44117__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__44118 = cljs.core.deref(state_ref);
var map__44118__$1 = cljs.core.__destructure_map(map__44118);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44118__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44118__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__44126,msg){
var map__44127 = p__44126;
var map__44127__$1 = cljs.core.__destructure_map(map__44127);
var runtime = map__44127__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44127__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__44149,key,p__44150){
var map__44151 = p__44149;
var map__44151__$1 = cljs.core.__destructure_map(map__44151);
var state = map__44151__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44151__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__44152 = p__44150;
var map__44152__$1 = cljs.core.__destructure_map(map__44152);
var spec = map__44152__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44152__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44152__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__44164,key,spec){
var map__44166 = p__44164;
var map__44166__$1 = cljs.core.__destructure_map(map__44166);
var runtime = map__44166__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44166__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5829__auto___44353 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5829__auto___44353 == null)){
} else {
var on_welcome_44354 = temp__5829__auto___44353;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_44354.cljs$core$IFn$_invoke$arity$0 ? on_welcome_44354.cljs$core$IFn$_invoke$arity$0() : on_welcome_44354.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__44177_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__44177_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__44178_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__44178_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__44179_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__44179_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__44180_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__44180_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__44181_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__44181_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__44234,key){
var map__44235 = p__44234;
var map__44235__$1 = cljs.core.__destructure_map(map__44235);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44235__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__44253,msg){
var map__44254 = p__44253;
var map__44254__$1 = cljs.core.__destructure_map(map__44254);
var runtime = map__44254__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44254__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__44262,p__44263){
var map__44264 = p__44262;
var map__44264__$1 = cljs.core.__destructure_map(map__44264);
var runtime = map__44264__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44264__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__44266 = p__44263;
var map__44266__$1 = cljs.core.__destructure_map(map__44266);
var msg = map__44266__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44266__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44266__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__44272 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__44274 = null;
var count__44275 = (0);
var i__44276 = (0);
while(true){
if((i__44276 < count__44275)){
var map__44294 = chunk__44274.cljs$core$IIndexed$_nth$arity$2(null,i__44276);
var map__44294__$1 = cljs.core.__destructure_map(map__44294);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44294__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__44365 = seq__44272;
var G__44366 = chunk__44274;
var G__44367 = count__44275;
var G__44368 = (i__44276 + (1));
seq__44272 = G__44365;
chunk__44274 = G__44366;
count__44275 = G__44367;
i__44276 = G__44368;
continue;
} else {
var G__44369 = seq__44272;
var G__44370 = chunk__44274;
var G__44371 = count__44275;
var G__44372 = (i__44276 + (1));
seq__44272 = G__44369;
chunk__44274 = G__44370;
count__44275 = G__44371;
i__44276 = G__44372;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__44272);
if(temp__5825__auto__){
var seq__44272__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44272__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__44272__$1);
var G__44373 = cljs.core.chunk_rest(seq__44272__$1);
var G__44374 = c__5694__auto__;
var G__44375 = cljs.core.count(c__5694__auto__);
var G__44376 = (0);
seq__44272 = G__44373;
chunk__44274 = G__44374;
count__44275 = G__44375;
i__44276 = G__44376;
continue;
} else {
var map__44295 = cljs.core.first(seq__44272__$1);
var map__44295__$1 = cljs.core.__destructure_map(map__44295);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44295__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__44379 = cljs.core.next(seq__44272__$1);
var G__44380 = null;
var G__44381 = (0);
var G__44382 = (0);
seq__44272 = G__44379;
chunk__44274 = G__44380;
count__44275 = G__44381;
i__44276 = G__44382;
continue;
} else {
var G__44383 = cljs.core.next(seq__44272__$1);
var G__44384 = null;
var G__44385 = (0);
var G__44386 = (0);
seq__44272 = G__44383;
chunk__44274 = G__44384;
count__44275 = G__44385;
i__44276 = G__44386;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map

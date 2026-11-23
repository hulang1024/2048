goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__51046,p__51047){
var map__51048 = p__51046;
var map__51048__$1 = cljs.core.__destructure_map(map__51048);
var svc = map__51048__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51048__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51048__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51048__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__51049 = p__51047;
var map__51049__$1 = cljs.core.__destructure_map(map__51049);
var msg = map__51049__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51049__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51049__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51049__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51049__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__51062,p__51063){
var map__51065 = p__51062;
var map__51065__$1 = cljs.core.__destructure_map(map__51065);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51065__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__51066 = p__51063;
var map__51066__$1 = cljs.core.__destructure_map(map__51066);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51066__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__51073,p__51074){
var map__51075 = p__51073;
var map__51075__$1 = cljs.core.__destructure_map(map__51075);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51075__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51075__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__51076 = p__51074;
var map__51076__$1 = cljs.core.__destructure_map(map__51076);
var msg = map__51076__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51076__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__51078,tid){
var map__51080 = p__51078;
var map__51080__$1 = cljs.core.__destructure_map(map__51080);
var svc = map__51080__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51080__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__51093 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__51094 = null;
var count__51095 = (0);
var i__51096 = (0);
while(true){
if((i__51096 < count__51095)){
var vec__51114 = chunk__51094.cljs$core$IIndexed$_nth$arity$2(null,i__51096);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51114,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51114,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__51134 = seq__51093;
var G__51135 = chunk__51094;
var G__51136 = count__51095;
var G__51137 = (i__51096 + (1));
seq__51093 = G__51134;
chunk__51094 = G__51135;
count__51095 = G__51136;
i__51096 = G__51137;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__51093);
if(temp__5825__auto__){
var seq__51093__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51093__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__51093__$1);
var G__51139 = cljs.core.chunk_rest(seq__51093__$1);
var G__51140 = c__5694__auto__;
var G__51141 = cljs.core.count(c__5694__auto__);
var G__51142 = (0);
seq__51093 = G__51139;
chunk__51094 = G__51140;
count__51095 = G__51141;
i__51096 = G__51142;
continue;
} else {
var vec__51119 = cljs.core.first(seq__51093__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51119,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51119,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__51145 = cljs.core.next(seq__51093__$1);
var G__51146 = null;
var G__51147 = (0);
var G__51148 = (0);
seq__51093 = G__51145;
chunk__51094 = G__51146;
count__51095 = G__51147;
i__51096 = G__51148;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__51087_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__51087_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__51088_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__51088_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__51089_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__51089_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__51090_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__51090_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__51122){
var map__51124 = p__51122;
var map__51124__$1 = cljs.core.__destructure_map(map__51124);
var svc = map__51124__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51124__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51124__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map

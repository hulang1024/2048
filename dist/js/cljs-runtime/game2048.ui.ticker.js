goog.provide('game2048.ui.ticker');
game2048.ui.ticker.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"started?","started?",-1301062863),false,new cljs.core.Keyword(null,"last-time","last-time",-1707132740),(0),new cljs.core.Keyword(null,"accumulator","accumulator",1546185501),(0),new cljs.core.Keyword(null,"update-time","update-time",-1745455895),(0),new cljs.core.Keyword(null,"tick-fns","tick-fns",-1552156579),cljs.core.PersistentVector.EMPTY], null));
game2048.ui.ticker.start_loop = (function game2048$ui$ticker$start_loop(){
var loopf = (function game2048$ui$ticker$start_loop_$_loopf(now_time){
var map__31564 = cljs.core.deref(game2048.ui.ticker.state);
var map__31564__$1 = cljs.core.__destructure_map(map__31564);
var last_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31564__$1,new cljs.core.Keyword(null,"last-time","last-time",-1707132740));
var accumulator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31564__$1,new cljs.core.Keyword(null,"accumulator","accumulator",1546185501));
var update_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31564__$1,new cljs.core.Keyword(null,"update-time","update-time",-1745455895));
var tick_fns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31564__$1,new cljs.core.Keyword(null,"tick-fns","tick-fns",-1552156579));
var acc = (accumulator + (now_time - last_time));
var delta_time = ((1000) / (60));
var vec__31565 = (function (){var acc__$1 = acc;
var updated_QMARK_ = false;
while(true){
if((acc__$1 >= delta_time)){
cljs.core.run_BANG_(((function (acc__$1,updated_QMARK_,map__31564,map__31564__$1,last_time,accumulator,update_time,tick_fns,acc,delta_time){
return (function (p1__31554_SHARP_){
var G__31568 = delta_time;
var G__31569 = (now_time - update_time);
return (p1__31554_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__31554_SHARP_.cljs$core$IFn$_invoke$arity$2(G__31568,G__31569) : p1__31554_SHARP_.call(null,G__31568,G__31569));
});})(acc__$1,updated_QMARK_,map__31564,map__31564__$1,last_time,accumulator,update_time,tick_fns,acc,delta_time))
,tick_fns);

var G__31580 = (acc__$1 - delta_time);
var G__31581 = true;
acc__$1 = G__31580;
updated_QMARK_ = G__31581;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc__$1,updated_QMARK_], null);
}
break;
}
})();
var acc__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31565,(0),null);
var updated_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31565,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(game2048.ui.ticker.state,cljs.core.assoc,new cljs.core.Keyword(null,"last-time","last-time",-1707132740),now_time,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"accumulator","accumulator",1546185501),acc__$1,new cljs.core.Keyword(null,"update-time","update-time",-1745455895),(cljs.core.truth_(updated_QMARK_)?now_time:update_time)], 0));

return requestAnimationFrame(game2048$ui$ticker$start_loop_$_loopf);
});
return loopf((0));
});
game2048.ui.ticker.add_tick = (function game2048$ui$ticker$add_tick(tick_fn){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(game2048.ui.ticker.state,cljs.core.update,new cljs.core.Keyword(null,"tick-fns","tick-fns",-1552156579),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick_fn], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"started?","started?",-1301062863).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(game2048.ui.ticker.state)))){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(game2048.ui.ticker.state,cljs.core.assoc,new cljs.core.Keyword(null,"started?","started?",-1301062863),true);

return game2048.ui.ticker.start_loop();
}
});

//# sourceMappingURL=game2048.ui.ticker.js.map

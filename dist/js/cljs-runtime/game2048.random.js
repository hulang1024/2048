goog.provide('game2048.random');
game2048.random.make_random = (function game2048$random$make_random(seed){
return seed;
});
game2048.random.next_int = (function game2048$random$next_int(random){
var n = cljs.core.mod((random * (16807)),(2147483647));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,random], null);
});
game2048.random.random_seed = (function game2048$random$random_seed(){
return ((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() * (100000)) | 0);
});

//# sourceMappingURL=game2048.random.js.map

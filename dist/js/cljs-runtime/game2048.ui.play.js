goog.provide('game2048.ui.play');
if((typeof game2048 !== 'undefined') && (typeof game2048.ui !== 'undefined') && (typeof game2048.ui.play !== 'undefined') && (typeof game2048.ui.play.state !== 'undefined')){
} else {
game2048.ui.play.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"game","game",-441523833),null,new cljs.core.Keyword(null,"game-id","game-id",385578016),(0),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.PersistentVector.EMPTY], null));
}
game2048.ui.play.new_game = (function game2048$ui$play$new_game(state){
var seed = game2048.random.random_seed();
var game = game2048.game.make((4),(4),seed);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"game","game",-441523833),game),new cljs.core.Keyword(null,"game-id","game-id",385578016),cljs.core.inc),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.PersistentVector.EMPTY);
});
game2048.ui.play.handle_action = (function game2048$ui$play$handle_action(state,action){
var old_game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(state);
var game = game2048.game.handle(old_game,action);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_game,game)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"game","game",-441523833),game),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.conj,game);
} else {
return state;
}
});
game2048.ui.play.undo = (function game2048$ui$play$undo(state){
if(cljs.core.seq(cljs.core.pop(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(state)))){
var history__$1 = cljs.core.pop(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(state));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"game-id","game-id",385578016),cljs.core.inc),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.vec(history__$1)),new cljs.core.Keyword(null,"game","game",-441523833),cljs.core.peek(history__$1));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"game-id","game-id",385578016),cljs.core.inc);
}
});
game2048.ui.play.key_map = cljs.core.PersistentHashMap.fromArrays(["ArrowUp","ArrowDown","KeyA","KeyU","ArrowRight","ArrowLeft","KeyR","KeyW","KeyD","KeyS"],[new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"undo","undo",-1818036302),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"restart","restart",-1779883612),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"down","down",1565245570)]);
game2048.ui.play.new_game_BANG_ = (function game2048$ui$play$new_game_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(game2048.ui.play.state,game2048.ui.play.new_game);
});
game2048.ui.play.start_game_BANG_ = (function game2048$ui$play$start_game_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(game2048.ui.play.state,game2048.ui.play.handle_action,new cljs.core.Keyword(null,"start","start",-355208981));
});
game2048.ui.play.restart_game_BANG_ = (function game2048$ui$play$restart_game_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(game2048.ui.play.state,cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__64134_SHARP_){
return game2048.ui.play.handle_action(p1__64134_SHARP_,new cljs.core.Keyword(null,"start","start",-355208981));
}),game2048.ui.play.new_game));
});
game2048.ui.play.undo_BANG_ = (function game2048$ui$play$undo_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(game2048.ui.play.state,game2048.ui.play.undo);
});
game2048.ui.play.on_keydown_BANG_ = (function game2048$ui$play$on_keydown_BANG_(event){
var key = event.code;
var action = (game2048.ui.play.key_map.cljs$core$IFn$_invoke$arity$1 ? game2048.ui.play.key_map.cljs$core$IFn$_invoke$arity$1(key) : game2048.ui.play.key_map.call(null,key));
if(cljs.core.truth_(action)){
cljs.core.tap_GT_((""+"action: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,new cljs.core.Keyword(null,"undo","undo",-1818036302))){
return game2048.ui.play.undo_BANG_();
} else {
if(cljs.core.not(event.repeat)){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"down","down",1565245570),null,new cljs.core.Keyword(null,"up","up",-269712113),null,new cljs.core.Keyword(null,"right","right",-452581833),null,new cljs.core.Keyword(null,"left","left",-399115937),null], null), null),action)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(game2048.ui.play.state,game2048.ui.play.handle_action,action);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,new cljs.core.Keyword(null,"restart","restart",-1779883612))){
return game2048.ui.play.restart_game_BANG_();
} else {
return null;
}
}
} else {
return null;
}
}
});

//# sourceMappingURL=game2048.ui.play.js.map

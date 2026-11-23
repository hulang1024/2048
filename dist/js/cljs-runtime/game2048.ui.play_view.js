goog.provide('game2048.ui.play_view');
game2048.ui.play_view.play_view_class = (function game2048$ui$play_view$play_view_class(){
return cljss.core.css("game2048_ui_play-view__play-view-class",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".game2048_ui_play-view__play-view-class{display:flex;flex-direction:column;user-select:none;}"], null),cljs.core.PersistentVector.EMPTY);
});
game2048.ui.play_view.header_class = (function game2048$ui$play_view$header_class(){
return cljss.core.css("game2048_ui_play-view__header-class",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".game2048_ui_play-view__header-class{display:flex;justify-content:center;flex-direction:column;align-items:center;color:#fff;}",".game2048_ui_play-view__header-class .game-title{font-size:3rem;font-weight:bold;color:#776e65;}"], null),cljs.core.PersistentVector.EMPTY);
});
game2048.ui.play_view.row_class = (function game2048$ui$play_view$row_class(){
return cljss.core.css("game2048_ui_play-view__row-class",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".game2048_ui_play-view__row-class{margin-bottom:1rem;display:flex;width:100%;justify-content:space-between;}"], null),cljs.core.PersistentVector.EMPTY);
});
game2048.ui.play_view.scores_class = (function game2048$ui$play_view$scores_class(){
return cljss.core.css("game2048_ui_play-view__scores-class",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [".game2048_ui_play-view__scores-class{display:flex;}",".game2048_ui_play-view__scores-class .score{min-width:6rem;text-align:center;font-weight:bold;margin-left:0.5rem;background:#bbada0;padding:0.3rem 1rem;justify-content:center;display:flex;border-radius:4px;flex-direction:column;}",".game2048_ui_play-view__scores-class .score__label{font-size:0.9rem;}",".game2048_ui_play-view__scores-class .score__value{font-size:1.8rem;}"], null),cljs.core.PersistentVector.EMPTY);
});
game2048.ui.play_view.tip_class = (function game2048$ui$play_view$tip_class(){
return cljss.core.css("game2048_ui_play-view__tip-class",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".game2048_ui_play-view__tip-class{font-size:1.2rem;color:#776e65;}"], null),cljs.core.PersistentVector.EMPTY);
});
game2048.ui.play_view.button_class = (function game2048$ui$play_view$button_class(){
return cljss.core.css("game2048_ui_play-view__button-class",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".game2048_ui_play-view__button-class{padding:0.5rem 1.4rem;border:none;color:#fff;border-radius:4px;font-size:1.4rem;background:#8f7a66;cursor:pointer;}"], null),cljs.core.PersistentVector.EMPTY);
});
game2048.ui.play_view.board_container_class = (function game2048$ui$play_view$board_container_class(){
return cljss.core.css("game2048_ui_play-view__board-container-class",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".game2048_ui_play-view__board-container-class{position:relative;}"], null),cljs.core.PersistentVector.EMPTY);
});
game2048.ui.play_view.game_message_overlay_class = (function game2048$ui$play_view$game_message_overlay_class(display_QMARK_){
return cljss.core.css("game2048_ui_play-view__game-message-overlay-class",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".game2048_ui_play-view__game-message-overlay-class{align-items:center;color:#776e65;text-align:center;font-size:4rem;width:100%;background:#eee4da80;z-index:1;justify-content:center;position:absolute;flex-direction:column;height:100%;display:var(--var-game2048_ui_play-view__game-message-overlay-class-0);}"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-game2048_ui_play-view__game-message-overlay-class-0",(cljs.core.truth_(display_QMARK_)?"flex":"none")], null)], null));
});
game2048.ui.play_view.handle_restart_game = (function game2048$ui$play_view$handle_restart_game(){
return game2048.ui.play.restart_game_BANG_();
});
game2048.ui.play_view.build = (function game2048$ui$play_view$build(app){
var map__82049 = cljs.core.deref(app);
var map__82049__$1 = cljs.core.__destructure_map(map__82049);
var game = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82049__$1,new cljs.core.Keyword(null,"game","game",-441523833));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),game2048.ui.play_view.play_view_class()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),game2048.ui.play_view.header_class()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),game2048.ui.play_view.row_class()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"game-title"], null),"2048"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),game2048.ui.play_view.scores_class()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"score"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"score__label"], null),"\u5206\u6570"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"score__value"], null),new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(game)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"score"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"score__label"], null),"\u6700\u9AD8\u5206"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"score__value"], null),new cljs.core.Keyword(null,"best-score","best-score",-2144383349).cljs$core$IFn$_invoke$arity$1(game)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),game2048.ui.play_view.row_class()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),game2048.ui.play_view.tip_class()], null),"\u5408\u5E76\u6570\u5B57\u4EE5\u8FBE\u5230",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"2048\uFF01"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),game2048.ui.play_view.button_class(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),game2048.ui.play_view.handle_restart_game], null),"\u65B0\u6E38\u620F"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),game2048.ui.play_view.board_container_class()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),game2048.ui.play_view.game_message_overlay_class(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"game-over","game-over",-607322695)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Game Over!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),game2048.ui.play_view.button_class(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),game2048.ui.play_view.handle_restart_game], null),"\u91CD\u65B0\u5F00\u59CB"], null)], null)], null)], null);
});
if((typeof game2048 !== 'undefined') && (typeof game2048.ui !== 'undefined') && (typeof game2048.ui.play_view !== 'undefined') && (typeof game2048.ui.play_view.root !== 'undefined')){
} else {
game2048.ui.play_view.root = (new cljs.core.Delay((function (){
return reagent.dom.client.create_root.cljs$core$IFn$_invoke$arity$1(document.getElementById("app"));
}),null));
}
game2048.ui.play_view.mount = (function game2048$ui$play_view$mount(){
game2048.ui.play.new_game_BANG_();

document.addEventListener("keydown",game2048.ui.play.on_keydown_BANG_);

reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(game2048.ui.play_view.root),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [game2048.ui.play_view.build,game2048.ui.play.state], null));

var go = (function game2048$ui$play_view$mount_$_go(){
var temp__5823__auto__ = document.querySelector((""+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(game2048.ui.play_view.board_container_class())));
if(cljs.core.truth_(temp__5823__auto__)){
var el = temp__5823__auto__;
el.appendChild(game2048.ui.board.build(game2048.ui.play.state));

return game2048.ui.play.start_game_BANG_();
} else {
return requestAnimationFrame(game2048$ui$play_view$mount_$_go);
}
});
requestAnimationFrame(go);

return game2048.ui.ticker.add_tick(game2048.ui.board.tick);
});

//# sourceMappingURL=game2048.ui.play_view.js.map

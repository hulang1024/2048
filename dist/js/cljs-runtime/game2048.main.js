goog.provide('game2048.main');
game2048.main.init = (async function game2048$main$init(){
if(goog.DEBUG){
cljs.core.add_tap(cljs.core.println);
} else {
}

game2048.ui.styles.load_global();

return game2048.ui.play_view.mount();
});
game2048.main.reload = (async function game2048$main$reload(){
cljs.core.tap_GT_("reload");

cljss.core.remove_styles_BANG_();

game2048.ui.styles.load_global();

return game2048.ui.play_view.mount();
});

//# sourceMappingURL=game2048.main.js.map

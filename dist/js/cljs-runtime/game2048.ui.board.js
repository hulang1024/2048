goog.provide('game2048.ui.board');
game2048.ui.board.board_class = (function game2048$ui$board$board_class(){
return cljss.core.css("game2048_ui_board__board-class",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".game2048_ui_board__board-class{position:relative;background:#bbada0;border-radius:6px;}"], null),cljs.core.PersistentVector.EMPTY);
});
game2048.ui.board.cell_class = (function game2048$ui$board$cell_class(){
return cljss.core.css("game2048_ui_board__cell-class",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".game2048_ui_board__cell-class{align-items:center;text-align:center;font-size:calc(min(100cqw, 100cqh) * 0.05);font-weight:bold;background:#cdc1b4;justify-content:center;display:flex;position:absolute;border-radius:3px;}"], null),cljs.core.PersistentVector.EMPTY);
});
game2048.ui.board.cell_styles = (function game2048$ui$board$cell_styles(number){
var number_bg_color = cljs.core.PersistentHashMap.fromArrays([(8192),(4096),(128),(32768),(4),(512),(32),(256),(1024),(64),(2),(16),(2048),(8),(16384)],["#590080","#9100cf","#edcf72","#000000","#ede0c8","#edc850","#f67c5f","#edcc61","#edc53f","#f65e3b","#eee4da","#f59563","#edc22e","#f2b179","#36004d"]);
var number_color = new cljs.core.PersistentArrayMap(null, 2, [(2),"#776e65",(4),"#776e65"], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$3(number_bg_color,number,"#00000"),new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.get.cljs$core$IFn$_invoke$arity$3(number_color,number,"#f9f6f2")], null);
});
game2048.ui.board.__GT_cell_px_pos = (function game2048$ui$board$__GT_cell_px_pos(cell_size,gap,r,c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((gap + (c * gap)) + (c * cell_size)),((gap + (r * gap)) + (r * cell_size))], null);
});
game2048.ui.board.set_cell_position = (function game2048$ui$board$set_cell_position(el,x,y){
return (el.style.transform = (""+"translate("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)+"px"+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)+"px)"));
});
game2048.ui.board.set_cell_number = (function game2048$ui$board$set_cell_number(el,number){
(el.textContent = number);

var seq__81732 = cljs.core.seq(game2048.ui.board.cell_styles(number));
var chunk__81733 = null;
var count__81734 = (0);
var i__81735 = (0);
while(true){
if((i__81735 < count__81734)){
var vec__81742 = chunk__81733.cljs$core$IIndexed$_nth$arity$2(null,i__81735);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81742,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81742,(1),null);
(el.style[cljs.core.name(k)] = v);


var G__81882 = seq__81732;
var G__81883 = chunk__81733;
var G__81884 = count__81734;
var G__81885 = (i__81735 + (1));
seq__81732 = G__81882;
chunk__81733 = G__81883;
count__81734 = G__81884;
i__81735 = G__81885;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__81732);
if(temp__5825__auto__){
var seq__81732__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__81732__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__81732__$1);
var G__81886 = cljs.core.chunk_rest(seq__81732__$1);
var G__81887 = c__5694__auto__;
var G__81888 = cljs.core.count(c__5694__auto__);
var G__81889 = (0);
seq__81732 = G__81886;
chunk__81733 = G__81887;
count__81734 = G__81888;
i__81735 = G__81889;
continue;
} else {
var vec__81745 = cljs.core.first(seq__81732__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81745,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81745,(1),null);
(el.style[cljs.core.name(k)] = v);


var G__81890 = cljs.core.next(seq__81732__$1);
var G__81891 = null;
var G__81892 = (0);
var G__81893 = (0);
seq__81732 = G__81890;
chunk__81733 = G__81891;
count__81734 = G__81892;
i__81735 = G__81893;
continue;
}
} else {
return null;
}
}
break;
}
});
game2048.ui.board.create_cell = (function game2048$ui$board$create_cell(x,y,cell_size,number){
var el = document.createElement("div");
el.classList.add(game2048.ui.board.cell_class());

if((number > (0))){
game2048.ui.board.set_cell_number(el,number);
} else {
}

game2048.ui.board.set_cell_position(el,x,y);

(el.style.width = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell_size)+"px"));

(el.style.height = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell_size)+"px"));

return el;
});
game2048.ui.board.add_number = (function game2048$ui$board$add_number(p__81748,p__81749,number){
var map__81750 = p__81748;
var map__81750__$1 = cljs.core.__destructure_map(map__81750);
var container = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81750__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var cell_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81750__$1,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287));
var gap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81750__$1,new cljs.core.Keyword(null,"gap","gap",80255254));
var vec__81751 = p__81749;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81751,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81751,(1),null);
if((number > (0))){
} else {
throw (new Error("Assert failed: (> number 0)"));
}

var vec__81754 = game2048.ui.board.__GT_cell_px_pos(cell_size,gap,r,c);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81754,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81754,(1),null);
var cell_el = game2048.ui.board.create_cell(x,y,cell_size,number);
(cell_el["pos-r"] = r);

(cell_el["pos-c"] = c);

return container.appendChild(cell_el);
});
game2048.ui.board.get_cell = (function game2048$ui$board$get_cell(container,r,c){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__81757_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((p1__81757_SHARP_["pos-r"]),r)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((p1__81757_SHARP_["pos-c"]),c)));
}),container.children));
});
game2048.ui.board.move_cell = (function game2048$ui$board$move_cell(p__81758,p__81759,p__81760,merged_number){
var map__81761 = p__81758;
var map__81761__$1 = cljs.core.__destructure_map(map__81761);
var cell_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81761__$1,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287));
var gap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81761__$1,new cljs.core.Keyword(null,"gap","gap",80255254));
var container = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81761__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var vec__81762 = p__81759;
var from_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81762,(0),null);
var from_c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81762,(1),null);
var vec__81765 = p__81760;
var to_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81765,(0),null);
var to_c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81765,(1),null);
var vec__81768 = game2048.ui.board.__GT_cell_px_pos(cell_size,gap,to_r,to_c);
var to_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81768,(0),null);
var to_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81768,(1),null);
var from_cell_el = game2048.ui.board.get_cell(container,from_r,from_c);
var to_cell_el = game2048.ui.board.get_cell(container,to_r,to_c);
game2048.ui.board.set_cell_position(from_cell_el,to_x,to_y);

(from_cell_el["pos-r"] = to_r);

(from_cell_el["pos-c"] = to_c);

if((merged_number > (0))){
to_cell_el.parentElement.removeChild(to_cell_el);

return game2048.ui.board.set_cell_number(from_cell_el,merged_number);
} else {
return null;
}
});
if((typeof game2048 !== 'undefined') && (typeof game2048.ui !== 'undefined') && (typeof game2048.ui.board !== 'undefined') && (typeof game2048.ui.board.board_draw_state !== 'undefined')){
} else {
game2048.ui.board.board_draw_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gap","gap",80255254),(0),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),(0),new cljs.core.Keyword(null,"container","container",-1736937707),null], null));
}
game2048.ui.board.create_board = (function game2048$ui$board$create_board(rows,cols,p__81771){
var map__81772 = p__81771;
var map__81772__$1 = cljs.core.__destructure_map(map__81772);
var cell_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81772__$1,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287));
var gap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81772__$1,new cljs.core.Keyword(null,"gap","gap",80255254));
var width = ((gap + (rows * cell_size)) + (rows * gap));
var height = ((gap + (cols * cell_size)) + (cols * gap));
var el = document.createElement("div");
var bg_layer_el = document.createElement("div");
el.classList.add(game2048.ui.board.board_class());

bg_layer_el.classList.add("grid");

el.appendChild(bg_layer_el);

(el.style.width = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(width)+"px"));

(el.style.height = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(height)+"px"));

var seq__81773_81894 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(rows));
var chunk__81780_81895 = null;
var count__81781_81896 = (0);
var i__81782_81897 = (0);
while(true){
if((i__81782_81897 < count__81781_81896)){
var r_81898 = chunk__81780_81895.cljs$core$IIndexed$_nth$arity$2(null,i__81782_81897);
var seq__81783_81899 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cols));
var chunk__81785_81900 = null;
var count__81786_81901 = (0);
var i__81787_81902 = (0);
while(true){
if((i__81787_81902 < count__81786_81901)){
var c_81903 = chunk__81785_81900.cljs$core$IIndexed$_nth$arity$2(null,i__81787_81902);
var vec__81819_81904 = game2048.ui.board.__GT_cell_px_pos(cell_size,gap,r_81898,c_81903);
var x_81905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81819_81904,(0),null);
var y_81906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81819_81904,(1),null);
var cell_el_81907 = game2048.ui.board.create_cell(x_81905,y_81906,cell_size,(0));
bg_layer_el.appendChild(cell_el_81907);


var G__81908 = seq__81783_81899;
var G__81909 = chunk__81785_81900;
var G__81910 = count__81786_81901;
var G__81911 = (i__81787_81902 + (1));
seq__81783_81899 = G__81908;
chunk__81785_81900 = G__81909;
count__81786_81901 = G__81910;
i__81787_81902 = G__81911;
continue;
} else {
var temp__5825__auto___81912 = cljs.core.seq(seq__81783_81899);
if(temp__5825__auto___81912){
var seq__81783_81913__$1 = temp__5825__auto___81912;
if(cljs.core.chunked_seq_QMARK_(seq__81783_81913__$1)){
var c__5694__auto___81914 = cljs.core.chunk_first(seq__81783_81913__$1);
var G__81915 = cljs.core.chunk_rest(seq__81783_81913__$1);
var G__81916 = c__5694__auto___81914;
var G__81917 = cljs.core.count(c__5694__auto___81914);
var G__81918 = (0);
seq__81783_81899 = G__81915;
chunk__81785_81900 = G__81916;
count__81786_81901 = G__81917;
i__81787_81902 = G__81918;
continue;
} else {
var c_81919 = cljs.core.first(seq__81783_81913__$1);
var vec__81822_81920 = game2048.ui.board.__GT_cell_px_pos(cell_size,gap,r_81898,c_81919);
var x_81921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81822_81920,(0),null);
var y_81922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81822_81920,(1),null);
var cell_el_81923 = game2048.ui.board.create_cell(x_81921,y_81922,cell_size,(0));
bg_layer_el.appendChild(cell_el_81923);


var G__81924 = cljs.core.next(seq__81783_81913__$1);
var G__81925 = null;
var G__81926 = (0);
var G__81927 = (0);
seq__81783_81899 = G__81924;
chunk__81785_81900 = G__81925;
count__81786_81901 = G__81926;
i__81787_81902 = G__81927;
continue;
}
} else {
}
}
break;
}

var G__81928 = seq__81773_81894;
var G__81929 = chunk__81780_81895;
var G__81930 = count__81781_81896;
var G__81931 = (i__81782_81897 + (1));
seq__81773_81894 = G__81928;
chunk__81780_81895 = G__81929;
count__81781_81896 = G__81930;
i__81782_81897 = G__81931;
continue;
} else {
var temp__5825__auto___81932 = cljs.core.seq(seq__81773_81894);
if(temp__5825__auto___81932){
var seq__81773_81933__$1 = temp__5825__auto___81932;
if(cljs.core.chunked_seq_QMARK_(seq__81773_81933__$1)){
var c__5694__auto___81934 = cljs.core.chunk_first(seq__81773_81933__$1);
var G__81935 = cljs.core.chunk_rest(seq__81773_81933__$1);
var G__81936 = c__5694__auto___81934;
var G__81937 = cljs.core.count(c__5694__auto___81934);
var G__81938 = (0);
seq__81773_81894 = G__81935;
chunk__81780_81895 = G__81936;
count__81781_81896 = G__81937;
i__81782_81897 = G__81938;
continue;
} else {
var r_81939 = cljs.core.first(seq__81773_81933__$1);
var seq__81774_81940 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cols));
var chunk__81776_81941 = null;
var count__81777_81942 = (0);
var i__81778_81943 = (0);
while(true){
if((i__81778_81943 < count__81777_81942)){
var c_81944 = chunk__81776_81941.cljs$core$IIndexed$_nth$arity$2(null,i__81778_81943);
var vec__81831_81945 = game2048.ui.board.__GT_cell_px_pos(cell_size,gap,r_81939,c_81944);
var x_81946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81831_81945,(0),null);
var y_81947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81831_81945,(1),null);
var cell_el_81948 = game2048.ui.board.create_cell(x_81946,y_81947,cell_size,(0));
bg_layer_el.appendChild(cell_el_81948);


var G__81949 = seq__81774_81940;
var G__81950 = chunk__81776_81941;
var G__81951 = count__81777_81942;
var G__81952 = (i__81778_81943 + (1));
seq__81774_81940 = G__81949;
chunk__81776_81941 = G__81950;
count__81777_81942 = G__81951;
i__81778_81943 = G__81952;
continue;
} else {
var temp__5825__auto___81953__$1 = cljs.core.seq(seq__81774_81940);
if(temp__5825__auto___81953__$1){
var seq__81774_81954__$1 = temp__5825__auto___81953__$1;
if(cljs.core.chunked_seq_QMARK_(seq__81774_81954__$1)){
var c__5694__auto___81955 = cljs.core.chunk_first(seq__81774_81954__$1);
var G__81956 = cljs.core.chunk_rest(seq__81774_81954__$1);
var G__81957 = c__5694__auto___81955;
var G__81958 = cljs.core.count(c__5694__auto___81955);
var G__81959 = (0);
seq__81774_81940 = G__81956;
chunk__81776_81941 = G__81957;
count__81777_81942 = G__81958;
i__81778_81943 = G__81959;
continue;
} else {
var c_81960 = cljs.core.first(seq__81774_81954__$1);
var vec__81834_81961 = game2048.ui.board.__GT_cell_px_pos(cell_size,gap,r_81939,c_81960);
var x_81962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81834_81961,(0),null);
var y_81963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81834_81961,(1),null);
var cell_el_81964 = game2048.ui.board.create_cell(x_81962,y_81963,cell_size,(0));
bg_layer_el.appendChild(cell_el_81964);


var G__81965 = cljs.core.next(seq__81774_81954__$1);
var G__81966 = null;
var G__81967 = (0);
var G__81968 = (0);
seq__81774_81940 = G__81965;
chunk__81776_81941 = G__81966;
count__81777_81942 = G__81967;
i__81778_81943 = G__81968;
continue;
}
} else {
}
}
break;
}

var G__81969 = cljs.core.next(seq__81773_81933__$1);
var G__81970 = null;
var G__81971 = (0);
var G__81972 = (0);
seq__81773_81894 = G__81969;
chunk__81780_81895 = G__81970;
count__81781_81896 = G__81971;
i__81782_81897 = G__81972;
continue;
}
} else {
}
}
break;
}

return el;
});
game2048.ui.board.reset_board_BANG_ = (function game2048$ui$board$reset_board_BANG_(p__81838,p__81839){
var map__81840 = p__81838;
var map__81840__$1 = cljs.core.__destructure_map(map__81840);
var container = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81840__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var map__81841 = p__81839;
var map__81841__$1 = cljs.core.__destructure_map(map__81841);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81841__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81841__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81841__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
cljs.core.tap_GT_("reset-board!");

cljs.core.run_BANG_((function (p1__81837_SHARP_){
return container.removeChild(p1__81837_SHARP_);
}),Array.from(container.querySelectorAll((""+":scope > ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(game2048.ui.board.cell_class())))));

var seq__81842 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(rows));
var chunk__81849 = null;
var count__81850 = (0);
var i__81851 = (0);
while(true){
if((i__81851 < count__81850)){
var r = chunk__81849.cljs$core$IIndexed$_nth$arity$2(null,i__81851);
var seq__81852_81973 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cols));
var chunk__81854_81974 = null;
var count__81855_81975 = (0);
var i__81856_81976 = (0);
while(true){
if((i__81856_81976 < count__81855_81975)){
var c_81977 = chunk__81854_81974.cljs$core$IIndexed$_nth$arity$2(null,i__81856_81976);
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c_81977], null)) > (0))){
game2048.ui.board.add_number(cljs.core.deref(game2048.ui.board.board_draw_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c_81977], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c_81977], null)));


var G__81978 = seq__81852_81973;
var G__81979 = chunk__81854_81974;
var G__81980 = count__81855_81975;
var G__81981 = (i__81856_81976 + (1));
seq__81852_81973 = G__81978;
chunk__81854_81974 = G__81979;
count__81855_81975 = G__81980;
i__81856_81976 = G__81981;
continue;
} else {
var G__81982 = seq__81852_81973;
var G__81983 = chunk__81854_81974;
var G__81984 = count__81855_81975;
var G__81985 = (i__81856_81976 + (1));
seq__81852_81973 = G__81982;
chunk__81854_81974 = G__81983;
count__81855_81975 = G__81984;
i__81856_81976 = G__81985;
continue;
}
} else {
var temp__5825__auto___81986 = cljs.core.seq(seq__81852_81973);
if(temp__5825__auto___81986){
var seq__81852_81987__$1 = temp__5825__auto___81986;
if(cljs.core.chunked_seq_QMARK_(seq__81852_81987__$1)){
var c__5694__auto___81988 = cljs.core.chunk_first(seq__81852_81987__$1);
var G__81989 = cljs.core.chunk_rest(seq__81852_81987__$1);
var G__81990 = c__5694__auto___81988;
var G__81991 = cljs.core.count(c__5694__auto___81988);
var G__81992 = (0);
seq__81852_81973 = G__81989;
chunk__81854_81974 = G__81990;
count__81855_81975 = G__81991;
i__81856_81976 = G__81992;
continue;
} else {
var c_81993 = cljs.core.first(seq__81852_81987__$1);
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c_81993], null)) > (0))){
game2048.ui.board.add_number(cljs.core.deref(game2048.ui.board.board_draw_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c_81993], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c_81993], null)));


var G__81994 = cljs.core.next(seq__81852_81987__$1);
var G__81995 = null;
var G__81996 = (0);
var G__81997 = (0);
seq__81852_81973 = G__81994;
chunk__81854_81974 = G__81995;
count__81855_81975 = G__81996;
i__81856_81976 = G__81997;
continue;
} else {
var G__81998 = cljs.core.next(seq__81852_81987__$1);
var G__81999 = null;
var G__82000 = (0);
var G__82001 = (0);
seq__81852_81973 = G__81998;
chunk__81854_81974 = G__81999;
count__81855_81975 = G__82000;
i__81856_81976 = G__82001;
continue;
}
}
} else {
}
}
break;
}

var G__82002 = seq__81842;
var G__82003 = chunk__81849;
var G__82004 = count__81850;
var G__82005 = (i__81851 + (1));
seq__81842 = G__82002;
chunk__81849 = G__82003;
count__81850 = G__82004;
i__81851 = G__82005;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__81842);
if(temp__5825__auto__){
var seq__81842__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__81842__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__81842__$1);
var G__82006 = cljs.core.chunk_rest(seq__81842__$1);
var G__82007 = c__5694__auto__;
var G__82008 = cljs.core.count(c__5694__auto__);
var G__82009 = (0);
seq__81842 = G__82006;
chunk__81849 = G__82007;
count__81850 = G__82008;
i__81851 = G__82009;
continue;
} else {
var r = cljs.core.first(seq__81842__$1);
var seq__81843_82010 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cols));
var chunk__81845_82011 = null;
var count__81846_82012 = (0);
var i__81847_82013 = (0);
while(true){
if((i__81847_82013 < count__81846_82012)){
var c_82014 = chunk__81845_82011.cljs$core$IIndexed$_nth$arity$2(null,i__81847_82013);
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c_82014], null)) > (0))){
game2048.ui.board.add_number(cljs.core.deref(game2048.ui.board.board_draw_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c_82014], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c_82014], null)));


var G__82015 = seq__81843_82010;
var G__82016 = chunk__81845_82011;
var G__82017 = count__81846_82012;
var G__82018 = (i__81847_82013 + (1));
seq__81843_82010 = G__82015;
chunk__81845_82011 = G__82016;
count__81846_82012 = G__82017;
i__81847_82013 = G__82018;
continue;
} else {
var G__82019 = seq__81843_82010;
var G__82020 = chunk__81845_82011;
var G__82021 = count__81846_82012;
var G__82022 = (i__81847_82013 + (1));
seq__81843_82010 = G__82019;
chunk__81845_82011 = G__82020;
count__81846_82012 = G__82021;
i__81847_82013 = G__82022;
continue;
}
} else {
var temp__5825__auto___82023__$1 = cljs.core.seq(seq__81843_82010);
if(temp__5825__auto___82023__$1){
var seq__81843_82024__$1 = temp__5825__auto___82023__$1;
if(cljs.core.chunked_seq_QMARK_(seq__81843_82024__$1)){
var c__5694__auto___82025 = cljs.core.chunk_first(seq__81843_82024__$1);
var G__82026 = cljs.core.chunk_rest(seq__81843_82024__$1);
var G__82027 = c__5694__auto___82025;
var G__82028 = cljs.core.count(c__5694__auto___82025);
var G__82029 = (0);
seq__81843_82010 = G__82026;
chunk__81845_82011 = G__82027;
count__81846_82012 = G__82028;
i__81847_82013 = G__82029;
continue;
} else {
var c_82030 = cljs.core.first(seq__81843_82024__$1);
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c_82030], null)) > (0))){
game2048.ui.board.add_number(cljs.core.deref(game2048.ui.board.board_draw_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c_82030], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c_82030], null)));


var G__82031 = cljs.core.next(seq__81843_82024__$1);
var G__82032 = null;
var G__82033 = (0);
var G__82034 = (0);
seq__81843_82010 = G__82031;
chunk__81845_82011 = G__82032;
count__81846_82012 = G__82033;
i__81847_82013 = G__82034;
continue;
} else {
var G__82035 = cljs.core.next(seq__81843_82024__$1);
var G__82036 = null;
var G__82037 = (0);
var G__82038 = (0);
seq__81843_82010 = G__82035;
chunk__81845_82011 = G__82036;
count__81846_82012 = G__82037;
i__81847_82013 = G__82038;
continue;
}
}
} else {
}
}
break;
}

var G__82039 = cljs.core.next(seq__81842__$1);
var G__82040 = null;
var G__82041 = (0);
var G__82042 = (0);
seq__81842 = G__82039;
chunk__81849 = G__82040;
count__81850 = G__82041;
i__81851 = G__82042;
continue;
}
} else {
return null;
}
}
break;
}
});
game2048.ui.board.build = (function game2048$ui$board$build(play_state){
cljs.core.add_watch(play_state,new cljs.core.Keyword(null,"board-watcher","board-watcher",1635524714),(function (_k,_atom,p__81860,p__81861){
var map__81862 = p__81860;
var map__81862__$1 = cljs.core.__destructure_map(map__81862);
var old_game_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81862__$1,new cljs.core.Keyword(null,"game-id","game-id",385578016));
var map__81863 = p__81861;
var map__81863__$1 = cljs.core.__destructure_map(map__81863);
var game_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81863__$1,new cljs.core.Keyword(null,"game-id","game-id",385578016));
var game = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81863__$1,new cljs.core.Keyword(null,"game","game",-441523833));
cljs.core.tap_GT_(game);

cljs.core.tap_GT_(clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__81858_SHARP_){
if((p1__81858_SHARP_ === (0))){
return ".";
} else {
return p1__81858_SHARP_;
}
}),xs));
}),new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game))));

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_game_id,game_id)){
return game2048.ui.board.reset_board_BANG_(cljs.core.deref(game2048.ui.board.board_draw_state),game);
} else {
var temp__5825__auto___82043 = game2048.game.find_events(game,new cljs.core.Keyword(null,"moved","moved",486549219));
if(temp__5825__auto___82043){
var events_82044 = temp__5825__auto___82043;
var seq__81864_82045 = cljs.core.seq(events_82044);
var chunk__81865_82046 = null;
var count__81866_82047 = (0);
var i__81867_82048 = (0);
while(true){
if((i__81867_82048 < count__81866_82047)){
var map__81870_82050 = chunk__81865_82046.cljs$core$IIndexed$_nth$arity$2(null,i__81867_82048);
var map__81870_82051__$1 = cljs.core.__destructure_map(map__81870_82050);
var from_82052 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81870_82051__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to_82053 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81870_82051__$1,new cljs.core.Keyword(null,"to","to",192099007));
var merged_number_82054 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81870_82051__$1,new cljs.core.Keyword(null,"merged-number","merged-number",536007402));
game2048.ui.board.move_cell(cljs.core.deref(game2048.ui.board.board_draw_state),from_82052,to_82053,merged_number_82054);


var G__82055 = seq__81864_82045;
var G__82056 = chunk__81865_82046;
var G__82057 = count__81866_82047;
var G__82058 = (i__81867_82048 + (1));
seq__81864_82045 = G__82055;
chunk__81865_82046 = G__82056;
count__81866_82047 = G__82057;
i__81867_82048 = G__82058;
continue;
} else {
var temp__5825__auto___82059__$1 = cljs.core.seq(seq__81864_82045);
if(temp__5825__auto___82059__$1){
var seq__81864_82060__$1 = temp__5825__auto___82059__$1;
if(cljs.core.chunked_seq_QMARK_(seq__81864_82060__$1)){
var c__5694__auto___82061 = cljs.core.chunk_first(seq__81864_82060__$1);
var G__82062 = cljs.core.chunk_rest(seq__81864_82060__$1);
var G__82063 = c__5694__auto___82061;
var G__82064 = cljs.core.count(c__5694__auto___82061);
var G__82065 = (0);
seq__81864_82045 = G__82062;
chunk__81865_82046 = G__82063;
count__81866_82047 = G__82064;
i__81867_82048 = G__82065;
continue;
} else {
var map__81871_82066 = cljs.core.first(seq__81864_82060__$1);
var map__81871_82067__$1 = cljs.core.__destructure_map(map__81871_82066);
var from_82068 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81871_82067__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to_82069 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81871_82067__$1,new cljs.core.Keyword(null,"to","to",192099007));
var merged_number_82070 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81871_82067__$1,new cljs.core.Keyword(null,"merged-number","merged-number",536007402));
game2048.ui.board.move_cell(cljs.core.deref(game2048.ui.board.board_draw_state),from_82068,to_82069,merged_number_82070);


var G__82071 = cljs.core.next(seq__81864_82060__$1);
var G__82072 = null;
var G__82073 = (0);
var G__82074 = (0);
seq__81864_82045 = G__82071;
chunk__81865_82046 = G__82072;
count__81866_82047 = G__82073;
i__81867_82048 = G__82074;
continue;
}
} else {
}
}
break;
}
} else {
}

var temp__5825__auto__ = game2048.game.find_events(game,new cljs.core.Keyword(null,"spawned","spawned",1126579468));
if(temp__5825__auto__){
var events = temp__5825__auto__;
var seq__81872 = cljs.core.seq(events);
var chunk__81873 = null;
var count__81874 = (0);
var i__81875 = (0);
while(true){
if((i__81875 < count__81874)){
var map__81878 = chunk__81873.cljs$core$IIndexed$_nth$arity$2(null,i__81875);
var map__81878__$1 = cljs.core.__destructure_map(map__81878);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81878__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81878__$1,new cljs.core.Keyword(null,"number","number",1570378438));
game2048.ui.board.add_number(cljs.core.deref(game2048.ui.board.board_draw_state),pos,number);


var G__82075 = seq__81872;
var G__82076 = chunk__81873;
var G__82077 = count__81874;
var G__82078 = (i__81875 + (1));
seq__81872 = G__82075;
chunk__81873 = G__82076;
count__81874 = G__82077;
i__81875 = G__82078;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__81872);
if(temp__5825__auto____$1){
var seq__81872__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__81872__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__81872__$1);
var G__82079 = cljs.core.chunk_rest(seq__81872__$1);
var G__82080 = c__5694__auto__;
var G__82081 = cljs.core.count(c__5694__auto__);
var G__82082 = (0);
seq__81872 = G__82079;
chunk__81873 = G__82080;
count__81874 = G__82081;
i__81875 = G__82082;
continue;
} else {
var map__81879 = cljs.core.first(seq__81872__$1);
var map__81879__$1 = cljs.core.__destructure_map(map__81879);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81879__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81879__$1,new cljs.core.Keyword(null,"number","number",1570378438));
game2048.ui.board.add_number(cljs.core.deref(game2048.ui.board.board_draw_state),pos,number);


var G__82083 = cljs.core.next(seq__81872__$1);
var G__82084 = null;
var G__82085 = (0);
var G__82086 = (0);
seq__81872 = G__82083;
chunk__81873 = G__82084;
count__81874 = G__82085;
i__81875 = G__82086;
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
}
}));

var map__81880 = cljs.core.deref(play_state);
var map__81880__$1 = cljs.core.__destructure_map(map__81880);
var map__81881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81880__$1,new cljs.core.Keyword(null,"game","game",-441523833));
var map__81881__$1 = cljs.core.__destructure_map(map__81881);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81881__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81881__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var layout = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),(104),new cljs.core.Keyword(null,"gap","gap",80255254),(14)], null);
var board_el = game2048.ui.board.create_board(rows,cols,layout);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(game2048.ui.board.board_draw_state,(function (p1__81859_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__81859_SHARP_,new cljs.core.Keyword(null,"container","container",-1736937707),board_el),layout], 0));
}));

game2048.ui.board.reset_board_BANG_(cljs.core.deref(game2048.ui.board.board_draw_state),new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(play_state)));

return board_el;
});
game2048.ui.board.tick = (function game2048$ui$board$tick(dt){
return null;
});

//# sourceMappingURL=game2048.ui.board.js.map

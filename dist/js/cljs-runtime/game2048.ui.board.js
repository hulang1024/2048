goog.provide('game2048.ui.board');
game2048.ui.board.board_class = (function game2048$ui$board$board_class(){
return cljss.core.css("game2048_ui_board__board-class",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".game2048_ui_board__board-class{position:relative;background:#bbada0;border-radius:6px;}"], null),cljs.core.PersistentVector.EMPTY);
});
game2048.ui.board.cell_class = (function game2048$ui$board$cell_class(){
return cljss.core.css("game2048_ui_board__cell-class",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".game2048_ui_board__cell-class{align-items:center;text-align:center;font-size:calc(min(100cqw, 100cqh) * 0.065);font-weight:700;background:#cdc1b4;justify-content:center;display:flex;position:absolute;border-radius:3px;}"], null),cljs.core.PersistentVector.EMPTY);
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

var seq__40912 = cljs.core.seq(game2048.ui.board.cell_styles(number));
var chunk__40913 = null;
var count__40914 = (0);
var i__40915 = (0);
while(true){
if((i__40915 < count__40914)){
var vec__40922 = chunk__40913.cljs$core$IIndexed$_nth$arity$2(null,i__40915);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40922,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40922,(1),null);
(el.style[cljs.core.name(k)] = v);


var G__41062 = seq__40912;
var G__41063 = chunk__40913;
var G__41064 = count__40914;
var G__41065 = (i__40915 + (1));
seq__40912 = G__41062;
chunk__40913 = G__41063;
count__40914 = G__41064;
i__40915 = G__41065;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__40912);
if(temp__5825__auto__){
var seq__40912__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40912__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__40912__$1);
var G__41066 = cljs.core.chunk_rest(seq__40912__$1);
var G__41067 = c__5694__auto__;
var G__41068 = cljs.core.count(c__5694__auto__);
var G__41069 = (0);
seq__40912 = G__41066;
chunk__40913 = G__41067;
count__40914 = G__41068;
i__40915 = G__41069;
continue;
} else {
var vec__40925 = cljs.core.first(seq__40912__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40925,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40925,(1),null);
(el.style[cljs.core.name(k)] = v);


var G__41070 = cljs.core.next(seq__40912__$1);
var G__41071 = null;
var G__41072 = (0);
var G__41073 = (0);
seq__40912 = G__41070;
chunk__40913 = G__41071;
count__40914 = G__41072;
i__40915 = G__41073;
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
game2048.ui.board.add_number = (function game2048$ui$board$add_number(p__40928,p__40929,number){
var map__40930 = p__40928;
var map__40930__$1 = cljs.core.__destructure_map(map__40930);
var container = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40930__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var cell_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40930__$1,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287));
var gap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40930__$1,new cljs.core.Keyword(null,"gap","gap",80255254));
var vec__40931 = p__40929;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40931,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40931,(1),null);
if((number > (0))){
} else {
throw (new Error("Assert failed: (> number 0)"));
}

var vec__40934 = game2048.ui.board.__GT_cell_px_pos(cell_size,gap,r,c);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40934,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40934,(1),null);
var cell_el = game2048.ui.board.create_cell(x,y,cell_size,number);
(cell_el["pos-r"] = r);

(cell_el["pos-c"] = c);

return container.appendChild(cell_el);
});
game2048.ui.board.get_cell = (function game2048$ui$board$get_cell(container,r,c){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__40937_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((p1__40937_SHARP_["pos-r"]),r)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((p1__40937_SHARP_["pos-c"]),c)));
}),container.children));
});
game2048.ui.board.move_cell = (function game2048$ui$board$move_cell(p__40938,p__40939,p__40940,merged_number){
var map__40941 = p__40938;
var map__40941__$1 = cljs.core.__destructure_map(map__40941);
var cell_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40941__$1,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287));
var gap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40941__$1,new cljs.core.Keyword(null,"gap","gap",80255254));
var container = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40941__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var vec__40942 = p__40939;
var from_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40942,(0),null);
var from_c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40942,(1),null);
var vec__40945 = p__40940;
var to_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40945,(0),null);
var to_c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40945,(1),null);
var vec__40948 = game2048.ui.board.__GT_cell_px_pos(cell_size,gap,to_r,to_c);
var to_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40948,(0),null);
var to_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40948,(1),null);
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
game2048.ui.board.create_board = (function game2048$ui$board$create_board(rows,cols,p__40951){
var map__40952 = p__40951;
var map__40952__$1 = cljs.core.__destructure_map(map__40952);
var cell_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40952__$1,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287));
var gap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40952__$1,new cljs.core.Keyword(null,"gap","gap",80255254));
var width = ((gap + (rows * cell_size)) + (rows * gap));
var height = ((gap + (cols * cell_size)) + (cols * gap));
var el = document.createElement("div");
var bg_layer_el = document.createElement("div");
el.classList.add(game2048.ui.board.board_class());

bg_layer_el.classList.add("grid");

el.appendChild(bg_layer_el);

(el.style.width = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(width)+"px"));

(el.style.height = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(height)+"px"));

var seq__40953_41074 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(rows));
var chunk__40960_41075 = null;
var count__40961_41076 = (0);
var i__40962_41077 = (0);
while(true){
if((i__40962_41077 < count__40961_41076)){
var r_41078 = chunk__40960_41075.cljs$core$IIndexed$_nth$arity$2(null,i__40962_41077);
var seq__40963_41079 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cols));
var chunk__40965_41080 = null;
var count__40966_41081 = (0);
var i__40967_41082 = (0);
while(true){
if((i__40967_41082 < count__40966_41081)){
var c_41083 = chunk__40965_41080.cljs$core$IIndexed$_nth$arity$2(null,i__40967_41082);
var vec__40999_41084 = game2048.ui.board.__GT_cell_px_pos(cell_size,gap,r_41078,c_41083);
var x_41085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40999_41084,(0),null);
var y_41086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40999_41084,(1),null);
var cell_el_41087 = game2048.ui.board.create_cell(x_41085,y_41086,cell_size,(0));
bg_layer_el.appendChild(cell_el_41087);


var G__41088 = seq__40963_41079;
var G__41089 = chunk__40965_41080;
var G__41090 = count__40966_41081;
var G__41091 = (i__40967_41082 + (1));
seq__40963_41079 = G__41088;
chunk__40965_41080 = G__41089;
count__40966_41081 = G__41090;
i__40967_41082 = G__41091;
continue;
} else {
var temp__5825__auto___41092 = cljs.core.seq(seq__40963_41079);
if(temp__5825__auto___41092){
var seq__40963_41093__$1 = temp__5825__auto___41092;
if(cljs.core.chunked_seq_QMARK_(seq__40963_41093__$1)){
var c__5694__auto___41094 = cljs.core.chunk_first(seq__40963_41093__$1);
var G__41095 = cljs.core.chunk_rest(seq__40963_41093__$1);
var G__41096 = c__5694__auto___41094;
var G__41097 = cljs.core.count(c__5694__auto___41094);
var G__41098 = (0);
seq__40963_41079 = G__41095;
chunk__40965_41080 = G__41096;
count__40966_41081 = G__41097;
i__40967_41082 = G__41098;
continue;
} else {
var c_41099 = cljs.core.first(seq__40963_41093__$1);
var vec__41002_41100 = game2048.ui.board.__GT_cell_px_pos(cell_size,gap,r_41078,c_41099);
var x_41101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41002_41100,(0),null);
var y_41102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41002_41100,(1),null);
var cell_el_41103 = game2048.ui.board.create_cell(x_41101,y_41102,cell_size,(0));
bg_layer_el.appendChild(cell_el_41103);


var G__41104 = cljs.core.next(seq__40963_41093__$1);
var G__41105 = null;
var G__41106 = (0);
var G__41107 = (0);
seq__40963_41079 = G__41104;
chunk__40965_41080 = G__41105;
count__40966_41081 = G__41106;
i__40967_41082 = G__41107;
continue;
}
} else {
}
}
break;
}

var G__41108 = seq__40953_41074;
var G__41109 = chunk__40960_41075;
var G__41110 = count__40961_41076;
var G__41111 = (i__40962_41077 + (1));
seq__40953_41074 = G__41108;
chunk__40960_41075 = G__41109;
count__40961_41076 = G__41110;
i__40962_41077 = G__41111;
continue;
} else {
var temp__5825__auto___41112 = cljs.core.seq(seq__40953_41074);
if(temp__5825__auto___41112){
var seq__40953_41113__$1 = temp__5825__auto___41112;
if(cljs.core.chunked_seq_QMARK_(seq__40953_41113__$1)){
var c__5694__auto___41114 = cljs.core.chunk_first(seq__40953_41113__$1);
var G__41116 = cljs.core.chunk_rest(seq__40953_41113__$1);
var G__41117 = c__5694__auto___41114;
var G__41118 = cljs.core.count(c__5694__auto___41114);
var G__41119 = (0);
seq__40953_41074 = G__41116;
chunk__40960_41075 = G__41117;
count__40961_41076 = G__41118;
i__40962_41077 = G__41119;
continue;
} else {
var r_41120 = cljs.core.first(seq__40953_41113__$1);
var seq__40954_41121 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cols));
var chunk__40956_41122 = null;
var count__40957_41123 = (0);
var i__40958_41124 = (0);
while(true){
if((i__40958_41124 < count__40957_41123)){
var c_41125 = chunk__40956_41122.cljs$core$IIndexed$_nth$arity$2(null,i__40958_41124);
var vec__41011_41126 = game2048.ui.board.__GT_cell_px_pos(cell_size,gap,r_41120,c_41125);
var x_41127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41011_41126,(0),null);
var y_41128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41011_41126,(1),null);
var cell_el_41129 = game2048.ui.board.create_cell(x_41127,y_41128,cell_size,(0));
bg_layer_el.appendChild(cell_el_41129);


var G__41130 = seq__40954_41121;
var G__41131 = chunk__40956_41122;
var G__41132 = count__40957_41123;
var G__41133 = (i__40958_41124 + (1));
seq__40954_41121 = G__41130;
chunk__40956_41122 = G__41131;
count__40957_41123 = G__41132;
i__40958_41124 = G__41133;
continue;
} else {
var temp__5825__auto___41134__$1 = cljs.core.seq(seq__40954_41121);
if(temp__5825__auto___41134__$1){
var seq__40954_41135__$1 = temp__5825__auto___41134__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40954_41135__$1)){
var c__5694__auto___41136 = cljs.core.chunk_first(seq__40954_41135__$1);
var G__41137 = cljs.core.chunk_rest(seq__40954_41135__$1);
var G__41138 = c__5694__auto___41136;
var G__41139 = cljs.core.count(c__5694__auto___41136);
var G__41140 = (0);
seq__40954_41121 = G__41137;
chunk__40956_41122 = G__41138;
count__40957_41123 = G__41139;
i__40958_41124 = G__41140;
continue;
} else {
var c_41141 = cljs.core.first(seq__40954_41135__$1);
var vec__41014_41142 = game2048.ui.board.__GT_cell_px_pos(cell_size,gap,r_41120,c_41141);
var x_41143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41014_41142,(0),null);
var y_41144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41014_41142,(1),null);
var cell_el_41145 = game2048.ui.board.create_cell(x_41143,y_41144,cell_size,(0));
bg_layer_el.appendChild(cell_el_41145);


var G__41146 = cljs.core.next(seq__40954_41135__$1);
var G__41147 = null;
var G__41148 = (0);
var G__41149 = (0);
seq__40954_41121 = G__41146;
chunk__40956_41122 = G__41147;
count__40957_41123 = G__41148;
i__40958_41124 = G__41149;
continue;
}
} else {
}
}
break;
}

var G__41150 = cljs.core.next(seq__40953_41113__$1);
var G__41151 = null;
var G__41152 = (0);
var G__41153 = (0);
seq__40953_41074 = G__41150;
chunk__40960_41075 = G__41151;
count__40961_41076 = G__41152;
i__40962_41077 = G__41153;
continue;
}
} else {
}
}
break;
}

return el;
});
game2048.ui.board.reset_board_BANG_ = (function game2048$ui$board$reset_board_BANG_(p__41018,p__41019){
var map__41020 = p__41018;
var map__41020__$1 = cljs.core.__destructure_map(map__41020);
var container = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41020__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var map__41021 = p__41019;
var map__41021__$1 = cljs.core.__destructure_map(map__41021);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41021__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41021__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41021__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
cljs.core.tap_GT_("reset-board!");

cljs.core.run_BANG_((function (p1__41017_SHARP_){
return container.removeChild(p1__41017_SHARP_);
}),Array.from(container.querySelectorAll((""+":scope > ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(game2048.ui.board.cell_class())))));

var seq__41022 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(rows));
var chunk__41029 = null;
var count__41030 = (0);
var i__41031 = (0);
while(true){
if((i__41031 < count__41030)){
var r = chunk__41029.cljs$core$IIndexed$_nth$arity$2(null,i__41031);
var seq__41032_41154 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cols));
var chunk__41034_41155 = null;
var count__41035_41156 = (0);
var i__41036_41157 = (0);
while(true){
if((i__41036_41157 < count__41035_41156)){
var c_41158 = chunk__41034_41155.cljs$core$IIndexed$_nth$arity$2(null,i__41036_41157);
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c_41158], null)) > (0))){
game2048.ui.board.add_number(cljs.core.deref(game2048.ui.board.board_draw_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c_41158], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c_41158], null)));


var G__41159 = seq__41032_41154;
var G__41160 = chunk__41034_41155;
var G__41161 = count__41035_41156;
var G__41162 = (i__41036_41157 + (1));
seq__41032_41154 = G__41159;
chunk__41034_41155 = G__41160;
count__41035_41156 = G__41161;
i__41036_41157 = G__41162;
continue;
} else {
var G__41163 = seq__41032_41154;
var G__41164 = chunk__41034_41155;
var G__41165 = count__41035_41156;
var G__41166 = (i__41036_41157 + (1));
seq__41032_41154 = G__41163;
chunk__41034_41155 = G__41164;
count__41035_41156 = G__41165;
i__41036_41157 = G__41166;
continue;
}
} else {
var temp__5825__auto___41167 = cljs.core.seq(seq__41032_41154);
if(temp__5825__auto___41167){
var seq__41032_41168__$1 = temp__5825__auto___41167;
if(cljs.core.chunked_seq_QMARK_(seq__41032_41168__$1)){
var c__5694__auto___41169 = cljs.core.chunk_first(seq__41032_41168__$1);
var G__41170 = cljs.core.chunk_rest(seq__41032_41168__$1);
var G__41171 = c__5694__auto___41169;
var G__41172 = cljs.core.count(c__5694__auto___41169);
var G__41173 = (0);
seq__41032_41154 = G__41170;
chunk__41034_41155 = G__41171;
count__41035_41156 = G__41172;
i__41036_41157 = G__41173;
continue;
} else {
var c_41174 = cljs.core.first(seq__41032_41168__$1);
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c_41174], null)) > (0))){
game2048.ui.board.add_number(cljs.core.deref(game2048.ui.board.board_draw_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c_41174], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c_41174], null)));


var G__41175 = cljs.core.next(seq__41032_41168__$1);
var G__41176 = null;
var G__41177 = (0);
var G__41178 = (0);
seq__41032_41154 = G__41175;
chunk__41034_41155 = G__41176;
count__41035_41156 = G__41177;
i__41036_41157 = G__41178;
continue;
} else {
var G__41179 = cljs.core.next(seq__41032_41168__$1);
var G__41180 = null;
var G__41181 = (0);
var G__41182 = (0);
seq__41032_41154 = G__41179;
chunk__41034_41155 = G__41180;
count__41035_41156 = G__41181;
i__41036_41157 = G__41182;
continue;
}
}
} else {
}
}
break;
}

var G__41183 = seq__41022;
var G__41184 = chunk__41029;
var G__41185 = count__41030;
var G__41186 = (i__41031 + (1));
seq__41022 = G__41183;
chunk__41029 = G__41184;
count__41030 = G__41185;
i__41031 = G__41186;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__41022);
if(temp__5825__auto__){
var seq__41022__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41022__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__41022__$1);
var G__41187 = cljs.core.chunk_rest(seq__41022__$1);
var G__41188 = c__5694__auto__;
var G__41189 = cljs.core.count(c__5694__auto__);
var G__41190 = (0);
seq__41022 = G__41187;
chunk__41029 = G__41188;
count__41030 = G__41189;
i__41031 = G__41190;
continue;
} else {
var r = cljs.core.first(seq__41022__$1);
var seq__41023_41191 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cols));
var chunk__41025_41192 = null;
var count__41026_41193 = (0);
var i__41027_41194 = (0);
while(true){
if((i__41027_41194 < count__41026_41193)){
var c_41195 = chunk__41025_41192.cljs$core$IIndexed$_nth$arity$2(null,i__41027_41194);
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c_41195], null)) > (0))){
game2048.ui.board.add_number(cljs.core.deref(game2048.ui.board.board_draw_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c_41195], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c_41195], null)));


var G__41196 = seq__41023_41191;
var G__41197 = chunk__41025_41192;
var G__41198 = count__41026_41193;
var G__41199 = (i__41027_41194 + (1));
seq__41023_41191 = G__41196;
chunk__41025_41192 = G__41197;
count__41026_41193 = G__41198;
i__41027_41194 = G__41199;
continue;
} else {
var G__41200 = seq__41023_41191;
var G__41201 = chunk__41025_41192;
var G__41202 = count__41026_41193;
var G__41203 = (i__41027_41194 + (1));
seq__41023_41191 = G__41200;
chunk__41025_41192 = G__41201;
count__41026_41193 = G__41202;
i__41027_41194 = G__41203;
continue;
}
} else {
var temp__5825__auto___41204__$1 = cljs.core.seq(seq__41023_41191);
if(temp__5825__auto___41204__$1){
var seq__41023_41205__$1 = temp__5825__auto___41204__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41023_41205__$1)){
var c__5694__auto___41206 = cljs.core.chunk_first(seq__41023_41205__$1);
var G__41207 = cljs.core.chunk_rest(seq__41023_41205__$1);
var G__41208 = c__5694__auto___41206;
var G__41209 = cljs.core.count(c__5694__auto___41206);
var G__41210 = (0);
seq__41023_41191 = G__41207;
chunk__41025_41192 = G__41208;
count__41026_41193 = G__41209;
i__41027_41194 = G__41210;
continue;
} else {
var c_41211 = cljs.core.first(seq__41023_41205__$1);
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c_41211], null)) > (0))){
game2048.ui.board.add_number(cljs.core.deref(game2048.ui.board.board_draw_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c_41211], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c_41211], null)));


var G__41212 = cljs.core.next(seq__41023_41205__$1);
var G__41213 = null;
var G__41214 = (0);
var G__41215 = (0);
seq__41023_41191 = G__41212;
chunk__41025_41192 = G__41213;
count__41026_41193 = G__41214;
i__41027_41194 = G__41215;
continue;
} else {
var G__41216 = cljs.core.next(seq__41023_41205__$1);
var G__41217 = null;
var G__41218 = (0);
var G__41219 = (0);
seq__41023_41191 = G__41216;
chunk__41025_41192 = G__41217;
count__41026_41193 = G__41218;
i__41027_41194 = G__41219;
continue;
}
}
} else {
}
}
break;
}

var G__41220 = cljs.core.next(seq__41022__$1);
var G__41221 = null;
var G__41222 = (0);
var G__41223 = (0);
seq__41022 = G__41220;
chunk__41029 = G__41221;
count__41030 = G__41222;
i__41031 = G__41223;
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
cljs.core.add_watch(play_state,new cljs.core.Keyword(null,"board-watcher","board-watcher",1635524714),(function (_k,_atom,p__41040,p__41041){
var map__41042 = p__41040;
var map__41042__$1 = cljs.core.__destructure_map(map__41042);
var old_game_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41042__$1,new cljs.core.Keyword(null,"game-id","game-id",385578016));
var map__41043 = p__41041;
var map__41043__$1 = cljs.core.__destructure_map(map__41043);
var game_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41043__$1,new cljs.core.Keyword(null,"game-id","game-id",385578016));
var game = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41043__$1,new cljs.core.Keyword(null,"game","game",-441523833));
cljs.core.tap_GT_(game);

cljs.core.tap_GT_(clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41038_SHARP_){
if((p1__41038_SHARP_ === (0))){
return ".";
} else {
return p1__41038_SHARP_;
}
}),xs));
}),new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game))));

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_game_id,game_id)){
return game2048.ui.board.reset_board_BANG_(cljs.core.deref(game2048.ui.board.board_draw_state),game);
} else {
var temp__5825__auto___41224 = game2048.game.find_events(game,new cljs.core.Keyword(null,"moved","moved",486549219));
if(temp__5825__auto___41224){
var events_41225 = temp__5825__auto___41224;
var seq__41044_41226 = cljs.core.seq(events_41225);
var chunk__41045_41227 = null;
var count__41046_41228 = (0);
var i__41047_41229 = (0);
while(true){
if((i__41047_41229 < count__41046_41228)){
var map__41050_41230 = chunk__41045_41227.cljs$core$IIndexed$_nth$arity$2(null,i__41047_41229);
var map__41050_41231__$1 = cljs.core.__destructure_map(map__41050_41230);
var from_41232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41050_41231__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to_41233 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41050_41231__$1,new cljs.core.Keyword(null,"to","to",192099007));
var merged_number_41234 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41050_41231__$1,new cljs.core.Keyword(null,"merged-number","merged-number",536007402));
game2048.ui.board.move_cell(cljs.core.deref(game2048.ui.board.board_draw_state),from_41232,to_41233,merged_number_41234);


var G__41235 = seq__41044_41226;
var G__41236 = chunk__41045_41227;
var G__41237 = count__41046_41228;
var G__41238 = (i__41047_41229 + (1));
seq__41044_41226 = G__41235;
chunk__41045_41227 = G__41236;
count__41046_41228 = G__41237;
i__41047_41229 = G__41238;
continue;
} else {
var temp__5825__auto___41239__$1 = cljs.core.seq(seq__41044_41226);
if(temp__5825__auto___41239__$1){
var seq__41044_41240__$1 = temp__5825__auto___41239__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41044_41240__$1)){
var c__5694__auto___41241 = cljs.core.chunk_first(seq__41044_41240__$1);
var G__41242 = cljs.core.chunk_rest(seq__41044_41240__$1);
var G__41243 = c__5694__auto___41241;
var G__41244 = cljs.core.count(c__5694__auto___41241);
var G__41245 = (0);
seq__41044_41226 = G__41242;
chunk__41045_41227 = G__41243;
count__41046_41228 = G__41244;
i__41047_41229 = G__41245;
continue;
} else {
var map__41051_41246 = cljs.core.first(seq__41044_41240__$1);
var map__41051_41247__$1 = cljs.core.__destructure_map(map__41051_41246);
var from_41248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41051_41247__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to_41249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41051_41247__$1,new cljs.core.Keyword(null,"to","to",192099007));
var merged_number_41250 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41051_41247__$1,new cljs.core.Keyword(null,"merged-number","merged-number",536007402));
game2048.ui.board.move_cell(cljs.core.deref(game2048.ui.board.board_draw_state),from_41248,to_41249,merged_number_41250);


var G__41251 = cljs.core.next(seq__41044_41240__$1);
var G__41252 = null;
var G__41253 = (0);
var G__41254 = (0);
seq__41044_41226 = G__41251;
chunk__41045_41227 = G__41252;
count__41046_41228 = G__41253;
i__41047_41229 = G__41254;
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
var seq__41052 = cljs.core.seq(events);
var chunk__41053 = null;
var count__41054 = (0);
var i__41055 = (0);
while(true){
if((i__41055 < count__41054)){
var map__41058 = chunk__41053.cljs$core$IIndexed$_nth$arity$2(null,i__41055);
var map__41058__$1 = cljs.core.__destructure_map(map__41058);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41058__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41058__$1,new cljs.core.Keyword(null,"number","number",1570378438));
game2048.ui.board.add_number(cljs.core.deref(game2048.ui.board.board_draw_state),pos,number);


var G__41255 = seq__41052;
var G__41256 = chunk__41053;
var G__41257 = count__41054;
var G__41258 = (i__41055 + (1));
seq__41052 = G__41255;
chunk__41053 = G__41256;
count__41054 = G__41257;
i__41055 = G__41258;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__41052);
if(temp__5825__auto____$1){
var seq__41052__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__41052__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__41052__$1);
var G__41259 = cljs.core.chunk_rest(seq__41052__$1);
var G__41260 = c__5694__auto__;
var G__41261 = cljs.core.count(c__5694__auto__);
var G__41262 = (0);
seq__41052 = G__41259;
chunk__41053 = G__41260;
count__41054 = G__41261;
i__41055 = G__41262;
continue;
} else {
var map__41059 = cljs.core.first(seq__41052__$1);
var map__41059__$1 = cljs.core.__destructure_map(map__41059);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41059__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41059__$1,new cljs.core.Keyword(null,"number","number",1570378438));
game2048.ui.board.add_number(cljs.core.deref(game2048.ui.board.board_draw_state),pos,number);


var G__41263 = cljs.core.next(seq__41052__$1);
var G__41264 = null;
var G__41265 = (0);
var G__41266 = (0);
seq__41052 = G__41263;
chunk__41053 = G__41264;
count__41054 = G__41265;
i__41055 = G__41266;
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

var map__41060 = cljs.core.deref(play_state);
var map__41060__$1 = cljs.core.__destructure_map(map__41060);
var map__41061 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41060__$1,new cljs.core.Keyword(null,"game","game",-441523833));
var map__41061__$1 = cljs.core.__destructure_map(map__41061);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41061__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41061__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var layout = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),(104),new cljs.core.Keyword(null,"gap","gap",80255254),(14)], null);
var board_el = game2048.ui.board.create_board(rows,cols,layout);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(game2048.ui.board.board_draw_state,(function (p1__41039_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__41039_SHARP_,new cljs.core.Keyword(null,"container","container",-1736937707),board_el),layout], 0));
}));

game2048.ui.board.reset_board_BANG_(cljs.core.deref(game2048.ui.board.board_draw_state),new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(play_state)));

return board_el;
});
game2048.ui.board.tick = (function game2048$ui$board$tick(dt){
return null;
});

//# sourceMappingURL=game2048.ui.board.js.map

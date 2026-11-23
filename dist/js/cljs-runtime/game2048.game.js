goog.provide('game2048.game');
game2048.game.Pos = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Keyword(null,"int","int",-1741416922)], null);
game2048.game.Dir = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"left","left",-399115937)], null);
game2048.game.Action = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(game2048.game.Dir,new cljs.core.Keyword(null,"start","start",-355208981));
game2048.game.event_schema = (function game2048$game$event_schema(var_args){
var args__5903__auto__ = [];
var len__5897__auto___63425 = arguments.length;
var i__5898__auto___63426 = (0);
while(true){
if((i__5898__auto___63426 < len__5897__auto___63425)){
args__5903__auto__.push((arguments[i__5898__auto___63426]));

var G__63427 = (i__5898__auto___63426 + (1));
i__5898__auto___63426 = G__63427;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return game2048.game.event_schema.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(game2048.game.event_schema.cljs$core$IFn$_invoke$arity$variadic = (function (type,fields){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),type], null)], null)], null),fields)], null);
}));

(game2048.game.event_schema.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(game2048.game.event_schema.cljs$lang$applyTo = (function (seq63366){
var G__63367 = cljs.core.first(seq63366);
var seq63366__$1 = cljs.core.next(seq63366);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63367,seq63366__$1);
}));

game2048.game.Event = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"type","type",1174270348)], null),game2048.game.event_schema.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"moved","moved",486549219),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),game2048.game.Pos], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to","to",192099007),game2048.game.Pos], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merged-number","merged-number",536007402),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], 0)),game2048.game.event_schema.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"spawned","spawned",1126579468),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),game2048.game.Pos], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], 0)),game2048.game.event_schema(new cljs.core.Keyword(null,"game-over","game-over",-607322695))], null);
game2048.game.Game = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"ready","ready",1086465795),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"game-over","game-over",-607322695)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"best-score","best-score",-2144383349),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"random","random",-557811113),cljs.core.some_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cols","cols",-1914801295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(2)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),game2048.game.Event], null)], null)], null);
game2048.game.cell_empty_QMARK_ = (function game2048$game$cell_empty_QMARK_(c){
return (c === (0));
});
game2048.game.cell_number_QMARK_ = (function game2048$game$cell_number_QMARK_(c){
return (c > (0));
});
game2048.game.emit_event = (function game2048$game$emit_event(game,event){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(game,new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.conj,event);
});
game2048.game.clear_events = (function game2048$game$clear_events(game){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game,new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.PersistentVector.EMPTY);
});
game2048.game.find_events = (function game2048$game$find_events(game,event_type){
return cljs.core.seq(cljs.core.filterv((function (p1__63368_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__63368_SHARP_),event_type);
}),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(game)));
});
game2048.game.find_cells = (function game2048$game$find_cells(p__63370,dir,cell_pred){
var map__63371 = p__63370;
var map__63371__$1 = cljs.core.__destructure_map(map__63371);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63371__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63371__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63371__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
return cljs.core.filterv((function (p1__63369_SHARP_){
var G__63372 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,p1__63369_SHARP_);
return (cell_pred.cljs$core$IFn$_invoke$arity$1 ? cell_pred.cljs$core$IFn$_invoke$arity$1(G__63372) : cell_pred.call(null,G__63372));
}),(function (){var G__63373 = dir;
var G__63373__$1 = (((G__63373 instanceof cljs.core.Keyword))?G__63373.fqn:null);
switch (G__63373__$1) {
case "up":
var iter__5649__auto__ = (function game2048$game$find_cells_$_iter__63374(s__63375){
return (new cljs.core.LazySeq(null,(function (){
var s__63375__$1 = s__63375;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__63375__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var r = cljs.core.first(xs__6385__auto__);
var iterys__5645__auto__ = ((function (s__63375__$1,r,xs__6385__auto__,temp__5825__auto__,G__63373,G__63373__$1,map__63371,map__63371__$1,board,rows,cols){
return (function game2048$game$find_cells_$_iter__63374_$_iter__63376(s__63377){
return (new cljs.core.LazySeq(null,((function (s__63375__$1,r,xs__6385__auto__,temp__5825__auto__,G__63373,G__63373__$1,map__63371,map__63371__$1,board,rows,cols){
return (function (){
var s__63377__$1 = s__63377;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__63377__$1);
if(temp__5825__auto____$1){
var s__63377__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__63377__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__63377__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__63379 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__63378 = (0);
while(true){
if((i__63378 < size__5648__auto__)){
var c = cljs.core._nth(c__5647__auto__,i__63378);
cljs.core.chunk_append(b__63379,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null));

var G__63429 = (i__63378 + (1));
i__63378 = G__63429;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63379),game2048$game$find_cells_$_iter__63374_$_iter__63376(cljs.core.chunk_rest(s__63377__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63379),null);
}
} else {
var c = cljs.core.first(s__63377__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null),game2048$game$find_cells_$_iter__63374_$_iter__63376(cljs.core.rest(s__63377__$2)));
}
} else {
return null;
}
break;
}
});})(s__63375__$1,r,xs__6385__auto__,temp__5825__auto__,G__63373,G__63373__$1,map__63371,map__63371__$1,board,rows,cols))
,null,null));
});})(s__63375__$1,r,xs__6385__auto__,temp__5825__auto__,G__63373,G__63373__$1,map__63371,map__63371__$1,board,rows,cols))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cols)));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,game2048$game$find_cells_$_iter__63374(cljs.core.rest(s__63375__$1)));
} else {
var G__63430 = cljs.core.rest(s__63375__$1);
s__63375__$1 = G__63430;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(rows));

break;
case "down":
var iter__5649__auto__ = (function game2048$game$find_cells_$_iter__63380(s__63381){
return (new cljs.core.LazySeq(null,(function (){
var s__63381__$1 = s__63381;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__63381__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var r = cljs.core.first(xs__6385__auto__);
var iterys__5645__auto__ = ((function (s__63381__$1,r,xs__6385__auto__,temp__5825__auto__,G__63373,G__63373__$1,map__63371,map__63371__$1,board,rows,cols){
return (function game2048$game$find_cells_$_iter__63380_$_iter__63382(s__63383){
return (new cljs.core.LazySeq(null,((function (s__63381__$1,r,xs__6385__auto__,temp__5825__auto__,G__63373,G__63373__$1,map__63371,map__63371__$1,board,rows,cols){
return (function (){
var s__63383__$1 = s__63383;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__63383__$1);
if(temp__5825__auto____$1){
var s__63383__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__63383__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__63383__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__63385 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__63384 = (0);
while(true){
if((i__63384 < size__5648__auto__)){
var c = cljs.core._nth(c__5647__auto__,i__63384);
cljs.core.chunk_append(b__63385,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((rows - r) - (1)),c], null));

var G__63431 = (i__63384 + (1));
i__63384 = G__63431;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63385),game2048$game$find_cells_$_iter__63380_$_iter__63382(cljs.core.chunk_rest(s__63383__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63385),null);
}
} else {
var c = cljs.core.first(s__63383__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((rows - r) - (1)),c], null),game2048$game$find_cells_$_iter__63380_$_iter__63382(cljs.core.rest(s__63383__$2)));
}
} else {
return null;
}
break;
}
});})(s__63381__$1,r,xs__6385__auto__,temp__5825__auto__,G__63373,G__63373__$1,map__63371,map__63371__$1,board,rows,cols))
,null,null));
});})(s__63381__$1,r,xs__6385__auto__,temp__5825__auto__,G__63373,G__63373__$1,map__63371,map__63371__$1,board,rows,cols))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cols)));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,game2048$game$find_cells_$_iter__63380(cljs.core.rest(s__63381__$1)));
} else {
var G__63432 = cljs.core.rest(s__63381__$1);
s__63381__$1 = G__63432;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(rows));

break;
case "left":
var iter__5649__auto__ = (function game2048$game$find_cells_$_iter__63386(s__63387){
return (new cljs.core.LazySeq(null,(function (){
var s__63387__$1 = s__63387;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__63387__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var c = cljs.core.first(xs__6385__auto__);
var iterys__5645__auto__ = ((function (s__63387__$1,c,xs__6385__auto__,temp__5825__auto__,G__63373,G__63373__$1,map__63371,map__63371__$1,board,rows,cols){
return (function game2048$game$find_cells_$_iter__63386_$_iter__63388(s__63389){
return (new cljs.core.LazySeq(null,((function (s__63387__$1,c,xs__6385__auto__,temp__5825__auto__,G__63373,G__63373__$1,map__63371,map__63371__$1,board,rows,cols){
return (function (){
var s__63389__$1 = s__63389;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__63389__$1);
if(temp__5825__auto____$1){
var s__63389__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__63389__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__63389__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__63391 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__63390 = (0);
while(true){
if((i__63390 < size__5648__auto__)){
var r = cljs.core._nth(c__5647__auto__,i__63390);
cljs.core.chunk_append(b__63391,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null));

var G__63433 = (i__63390 + (1));
i__63390 = G__63433;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63391),game2048$game$find_cells_$_iter__63386_$_iter__63388(cljs.core.chunk_rest(s__63389__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63391),null);
}
} else {
var r = cljs.core.first(s__63389__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null),game2048$game$find_cells_$_iter__63386_$_iter__63388(cljs.core.rest(s__63389__$2)));
}
} else {
return null;
}
break;
}
});})(s__63387__$1,c,xs__6385__auto__,temp__5825__auto__,G__63373,G__63373__$1,map__63371,map__63371__$1,board,rows,cols))
,null,null));
});})(s__63387__$1,c,xs__6385__auto__,temp__5825__auto__,G__63373,G__63373__$1,map__63371,map__63371__$1,board,rows,cols))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(rows)));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,game2048$game$find_cells_$_iter__63386(cljs.core.rest(s__63387__$1)));
} else {
var G__63434 = cljs.core.rest(s__63387__$1);
s__63387__$1 = G__63434;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cols));

break;
case "right":
var iter__5649__auto__ = (function game2048$game$find_cells_$_iter__63392(s__63393){
return (new cljs.core.LazySeq(null,(function (){
var s__63393__$1 = s__63393;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__63393__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var c = cljs.core.first(xs__6385__auto__);
var iterys__5645__auto__ = ((function (s__63393__$1,c,xs__6385__auto__,temp__5825__auto__,G__63373,G__63373__$1,map__63371,map__63371__$1,board,rows,cols){
return (function game2048$game$find_cells_$_iter__63392_$_iter__63394(s__63395){
return (new cljs.core.LazySeq(null,((function (s__63393__$1,c,xs__6385__auto__,temp__5825__auto__,G__63373,G__63373__$1,map__63371,map__63371__$1,board,rows,cols){
return (function (){
var s__63395__$1 = s__63395;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__63395__$1);
if(temp__5825__auto____$1){
var s__63395__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__63395__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__63395__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__63397 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__63396 = (0);
while(true){
if((i__63396 < size__5648__auto__)){
var r = cljs.core._nth(c__5647__auto__,i__63396);
cljs.core.chunk_append(b__63397,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,((cols - c) - (1))], null));

var G__63435 = (i__63396 + (1));
i__63396 = G__63435;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63397),game2048$game$find_cells_$_iter__63392_$_iter__63394(cljs.core.chunk_rest(s__63395__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63397),null);
}
} else {
var r = cljs.core.first(s__63395__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,((cols - c) - (1))], null),game2048$game$find_cells_$_iter__63392_$_iter__63394(cljs.core.rest(s__63395__$2)));
}
} else {
return null;
}
break;
}
});})(s__63393__$1,c,xs__6385__auto__,temp__5825__auto__,G__63373,G__63373__$1,map__63371,map__63371__$1,board,rows,cols))
,null,null));
});})(s__63393__$1,c,xs__6385__auto__,temp__5825__auto__,G__63373,G__63373__$1,map__63371,map__63371__$1,board,rows,cols))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(rows)));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,game2048$game$find_cells_$_iter__63392(cljs.core.rest(s__63393__$1)));
} else {
var G__63436 = cljs.core.rest(s__63393__$1);
s__63393__$1 = G__63436;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cols));

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63373__$1))));

}
})());
});
game2048.game.spawn_number = (function game2048$game$spawn_number(p__63398){
var map__63399 = p__63398;
var map__63399__$1 = cljs.core.__destructure_map(map__63399);
var game = map__63399__$1;
var random = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63399__$1,new cljs.core.Keyword(null,"random","random",-557811113));
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63399__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var space_indices = game2048.game.find_cells(game,new cljs.core.Keyword(null,"up","up",-269712113),game2048.game.cell_empty_QMARK_);
if(cljs.core.seq(space_indices)){
var vec__63400 = game2048.random.next_int(random);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63400,(0),null);
var random__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63400,(1),null);
var vec__63403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(space_indices,cljs.core.mod(i,cljs.core.count(space_indices)));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63403,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63403,(1),null);
var vec__63406 = game2048.random.next_int(random__$1);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63406,(0),null);
var random__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63406,(1),null);
var number = (((cljs.core.mod(n,(10)) < (9)))?(2):(4));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(game2048.game.emit_event(game,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"spawned","spawned",1126579468),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null),new cljs.core.Keyword(null,"number","number",1570378438),number], null)),new cljs.core.Keyword(null,"random","random",-557811113),random__$2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.assoc_in(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null),number)], 0));
} else {
return game;
}
});
game2048.game.move_number = (function game2048$game$move_number(game,number,from,to,merged_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game2048.game.emit_event(game,(function (){var G__63409 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"moved","moved",486549219),new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to], null);
if(cljs.core.truth_(merged_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63409,new cljs.core.Keyword(null,"merged-number","merged-number",536007402),number);
} else {
return G__63409;
}
})()),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.assoc_in(cljs.core.assoc_in(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game),from,(0)),to,number));
});
game2048.game.add_score = (function game2048$game$add_score(game,n){
var score = (new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(game) + n);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game,new cljs.core.Keyword(null,"score","score",-1963588780),score),new cljs.core.Keyword(null,"best-score","best-score",-2144383349),cljs.core.max,score);
});
game2048.game.try_slide_number = (function game2048$game$try_slide_number(game,from,side_offset,merged_cells){
var game__$1 = game;
var number = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game__$1),from);
var prev_to = from;
while(true){
var curr_to = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,prev_to,side_offset);
var side_number = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game__$1),curr_to);
if((((!((side_number == null)))) && (game2048.game.cell_empty_QMARK_(side_number)))){
var G__63437 = game__$1;
var G__63438 = number;
var G__63439 = curr_to;
game__$1 = G__63437;
number = G__63438;
prev_to = G__63439;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(number,side_number)){
if(cljs.core.truth_(cljs.core.some(((function (game__$1,number,prev_to,curr_to,side_number){
return (function (p1__63410_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(curr_to,p1__63410_SHARP_);
});})(game__$1,number,prev_to,curr_to,side_number))
,merged_cells))){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from,prev_to)){
return game2048.game.move_number(game__$1,number,from,prev_to,false);
} else {
return game__$1;
}
} else {
return game2048.game.add_score(game2048.game.move_number(game__$1,(number + number),from,curr_to,true),(number + number));
}
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from,prev_to)){
return game2048.game.move_number(game__$1,number,from,prev_to,false);
} else {
return game__$1;
}

}
}
break;
}
});
game2048.game.slide = (function game2048$game$slide(game,dir){
var side_offset = (function (){var fexpr__63412 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)], null);
return (fexpr__63412.cljs$core$IFn$_invoke$arity$1 ? fexpr__63412.cljs$core$IFn$_invoke$arity$1(dir) : fexpr__63412.call(null,dir));
})();
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__63413,orig_pos){
var map__63414 = p__63413;
var map__63414__$1 = cljs.core.__destructure_map(map__63414);
var game__$1 = map__63414__$1;
var merged_cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63414__$1,new cljs.core.Keyword(null,"merged-cells","merged-cells",247785644));
var slid_game = game2048.game.try_slide_number(game__$1,orig_pos,side_offset,merged_cells);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(slid_game,new cljs.core.Keyword(null,"merged-cells","merged-cells",247785644),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__63411_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"merged-number","merged-number",536007402).cljs$core$IFn$_invoke$arity$1(p1__63411_SHARP_))){
return new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(p1__63411_SHARP_);
} else {
return null;
}
}),game2048.game.find_events(slid_game,new cljs.core.Keyword(null,"moved","moved",486549219)))));
}),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game,new cljs.core.Keyword(null,"merged-cells","merged-cells",247785644),cljs.core.PersistentVector.EMPTY),game2048.game.find_cells(game,dir,game2048.game.cell_number_QMARK_)),new cljs.core.Keyword(null,"merged-cells","merged-cells",247785644));
});
game2048.game.maybe_spawn_number = (function game2048$game$maybe_spawn_number(game){
if(game2048.game.find_events(game,new cljs.core.Keyword(null,"moved","moved",486549219))){
return game2048.game.spawn_number(game);
} else {
return game;
}
});
game2048.game.check_game_over = (function game2048$game$check_game_over(game){
if(cljs.core.truth_((function (){var or__5162__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"game-over","game-over",-607322695));
if(or__5162__auto__){
return or__5162__auto__;
} else {
return cljs.core.some((function (p1__63415_SHARP_){
return game2048.game.find_events(game2048.game.slide(game2048.game.clear_events(game),p1__63415_SHARP_),new cljs.core.Keyword(null,"moved","moved",486549219));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833)], null));
}
})())){
return game;
} else {
return game2048.game.emit_event(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"game-over","game-over",-607322695)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"game-over","game-over",-607322695)], null));
}
});
game2048.game.start = (function game2048$game$start(game){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"ready","ready",1086465795))){
return game2048.game.spawn_number(game2048.game.spawn_number(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"playing","playing",70013335))));
} else {
return game;
}
});
game2048.game.make = (function game2048$game$make(var_args){
var args__5903__auto__ = [];
var len__5897__auto___63448 = arguments.length;
var i__5898__auto___63449 = (0);
while(true){
if((i__5898__auto___63449 < len__5897__auto___63448)){
args__5903__auto__.push((arguments[i__5898__auto___63449]));

var G__63450 = (i__5898__auto___63449 + (1));
i__5898__auto___63449 = G__63450;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return game2048.game.make.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(game2048.game.make.cljs$core$IFn$_invoke$arity$variadic = (function (board_rows,board_cols,seed,p__63420){
var vec__63421 = p__63420;
var best_score = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63421,(0),null);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795),new cljs.core.Keyword(null,"score","score",-1963588780),(0),new cljs.core.Keyword(null,"best-score","best-score",-2144383349),(function (){var or__5162__auto__ = best_score;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"random","random",-557811113),game2048.random.make_random(seed),new cljs.core.Keyword(null,"rows","rows",850049680),board_rows,new cljs.core.Keyword(null,"cols","cols",-1914801295),board_cols,new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(board_rows,cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(board_cols,(0))))),new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.PersistentVector.EMPTY], null);
}));

(game2048.game.make.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(game2048.game.make.cljs$lang$applyTo = (function (seq63416){
var G__63417 = cljs.core.first(seq63416);
var seq63416__$1 = cljs.core.next(seq63416);
var G__63418 = cljs.core.first(seq63416__$1);
var seq63416__$2 = cljs.core.next(seq63416__$1);
var G__63419 = cljs.core.first(seq63416__$2);
var seq63416__$3 = cljs.core.next(seq63416__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63417,G__63418,G__63419,seq63416__$3);
}));

game2048.game.handle = (function game2048$game$handle(game,action){
var or__5162__auto__ = (function (){var G__63424 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(game);
var G__63424__$1 = (((G__63424 instanceof cljs.core.Keyword))?G__63424.fqn:null);
switch (G__63424__$1) {
case "ready":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,new cljs.core.Keyword(null,"start","start",-355208981))){
return game2048.game.start(game);
} else {
return null;
}

break;
case "playing":
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"down","down",1565245570),null,new cljs.core.Keyword(null,"up","up",-269712113),null,new cljs.core.Keyword(null,"right","right",-452581833),null,new cljs.core.Keyword(null,"left","left",-399115937),null], null), null),action)){
return game2048.game.check_game_over(game2048.game.maybe_spawn_number(game2048.game.slide(game2048.game.clear_events(game),action)));
} else {
return null;
}

break;
default:
return null;

}
})();
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return game;
}
});

//# sourceMappingURL=game2048.game.js.map

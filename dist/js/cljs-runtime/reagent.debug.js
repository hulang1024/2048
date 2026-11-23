goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__28354__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__28354 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28355__i = 0, G__28355__a = new Array(arguments.length -  0);
while (G__28355__i < G__28355__a.length) {G__28355__a[G__28355__i] = arguments[G__28355__i + 0]; ++G__28355__i;}
  args = new cljs.core.IndexedSeq(G__28355__a,0,null);
} 
return G__28354__delegate.call(this,args);};
G__28354.cljs$lang$maxFixedArity = 0;
G__28354.cljs$lang$applyTo = (function (arglist__28356){
var args = cljs.core.seq(arglist__28356);
return G__28354__delegate(args);
});
G__28354.cljs$core$IFn$_invoke$arity$variadic = G__28354__delegate;
return G__28354;
})()
);

(o.error = (function() { 
var G__28358__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__28358 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28363__i = 0, G__28363__a = new Array(arguments.length -  0);
while (G__28363__i < G__28363__a.length) {G__28363__a[G__28363__i] = arguments[G__28363__i + 0]; ++G__28363__i;}
  args = new cljs.core.IndexedSeq(G__28363__a,0,null);
} 
return G__28358__delegate.call(this,args);};
G__28358.cljs$lang$maxFixedArity = 0;
G__28358.cljs$lang$applyTo = (function (arglist__28364){
var args = cljs.core.seq(arglist__28364);
return G__28358__delegate(args);
});
G__28358.cljs$core$IFn$_invoke$arity$variadic = G__28358__delegate;
return G__28358;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map

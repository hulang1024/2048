goog.provide('malli.instrument');
goog.scope(function(){
  malli.instrument.goog$module$goog$object = goog.module.get('goog.object');
});
malli.instrument._ns_js_path = (function malli$instrument$_ns_js_path(ns){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,clojure.string.split.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)),/\./)));
});
malli.instrument._prop_js_path = (function malli$instrument$_prop_js_path(ns,prop){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)),/\./),cljs.core.name(prop))));
});
malli.instrument._get_prop = (function malli$instrument$_get_prop(ns,prop){
return malli.instrument.goog$module$goog$object.getValueByKeys(goog.global,malli.instrument._prop_js_path(ns,prop));
});
malli.instrument._get_ns = (function malli$instrument$_get_ns(ns){
return malli.instrument.goog$module$goog$object.getValueByKeys(goog.global,malli.instrument._ns_js_path(ns));
});
malli.instrument._find_var = (function malli$instrument$_find_var(n,s){
return malli.instrument._get_prop(n,s);
});
malli.instrument._original = (function malli$instrument$_original(f){
return malli.instrument.goog$module$goog$object.get(f,"malli$instrument$original");
});
malli.instrument._instrumented_QMARK_ = (function malli$instrument$_instrumented_QMARK_(f){
return malli.instrument.goog$module$goog$object.get(f,"malli$instrument$instrumented?") === true;
});
malli.instrument.meta_fn = (function malli$instrument$meta_fn(f,m){
var new_f = goog.bind(f,({}));
Object.assign(new_f,f);

var x46917_48044 = new_f;
(x46917_48044.cljs$core$IMeta$ = cljs.core.PROTOCOL_SENTINEL);

(x46917_48044.cljs$core$IMeta$_meta$arity$1 = (function (_){
var ___$1 = this;
return m;
}));


return new_f;
});
malli.instrument._filter_ns = (function malli$instrument$_filter_ns(var_args){
var args__5903__auto__ = [];
var len__5897__auto___48045 = arguments.length;
var i__5898__auto___48046 = (0);
while(true){
if((i__5898__auto___48046 < len__5897__auto___48045)){
args__5903__auto__.push((arguments[i__5898__auto___48046]));

var G__48047 = (i__5898__auto___48046 + (1));
i__5898__auto___48046 = G__48047;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return malli.instrument._filter_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(malli.instrument._filter_ns.cljs$core$IFn$_invoke$arity$variadic = (function (ns){
return (function (n,_,___$1){
var fexpr__46964 = cljs.core.set(ns);
return (fexpr__46964.cljs$core$IFn$_invoke$arity$1 ? fexpr__46964.cljs$core$IFn$_invoke$arity$1(n) : fexpr__46964.call(null,n));
});
}));

(malli.instrument._filter_ns.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.instrument._filter_ns.cljs$lang$applyTo = (function (seq46934){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46934));
}));

malli.instrument._filter_var = (function malli$instrument$_filter_var(f){
return (function (n,s,d){
var G__46980 = (new cljs.core.Var(cljs.core.constantly(malli.instrument._find_var(n,s)),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(n,s),d));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__46980) : f.call(null,G__46980));
});
});
malli.instrument._filter_schema = (function malli$instrument$_filter_schema(f){
return (function (_,___$1,p__46985){
var map__46986 = p__46985;
var map__46986__$1 = cljs.core.__destructure_map(map__46986);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46986__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(schema) : f.call(null,schema));
});
});
malli.instrument._arity__GT_schema = (function malli$instrument$_arity__GT_schema(fn_schema){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (schema){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arity","arity",-1808556135).cljs$core$IFn$_invoke$arity$1(malli.core._function_info(malli.core.schema.cljs$core$IFn$_invoke$arity$1(schema))),schema], null);
}),cljs.core.rest(fn_schema)));
});
malli.instrument._variadic_QMARK_ = (function malli$instrument$_variadic_QMARK_(f){
return malli.instrument.goog$module$goog$object.get(f,"cljs$core$IFn$_invoke$arity$variadic");
});
malli.instrument._max_fixed_arity = (function malli$instrument$_max_fixed_arity(f){
return malli.instrument.goog$module$goog$object.get(f,"cljs$lang$maxFixedArity");
});
malli.instrument._pure_variadic_QMARK_ = (function malli$instrument$_pure_variadic_QMARK_(f){
var max_fixed_arity = malli.instrument._max_fixed_arity(f);
var and__5160__auto__ = max_fixed_arity;
if(cljs.core.truth_(and__5160__auto__)){
var and__5160__auto____$1 = malli.instrument._variadic_QMARK_(f);
if(cljs.core.truth_(and__5160__auto____$1)){
return cljs.core.every_QMARK_((function (p1__46999_SHARP_){
return (!(cljs.core.fn_QMARK_(malli.instrument.goog$module$goog$object.get(f,(""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46999_SHARP_))))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((20)));
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
});
malli.instrument._replace_variadic_fn = (function malli$instrument$_replace_variadic_fn(original_fn,n,s,opts){
var accessor = "cljs$core$IFn$_invoke$arity$variadic";
var arity_fn = malli.instrument.goog$module$goog$object.get(original_fn,accessor);
if(cljs.core.truth_(arity_fn)){
malli.instrument.goog$module$goog$object.set(original_fn,"malli$instrument$instrumented?",true);

var max_fixed_arity = malli.instrument._max_fixed_arity(original_fn);
var instrumented_variadic_fn = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(opts,(function() { 
var G__48048__delegate = function (args){
var vec__47002 = cljs.core.split_at(max_fixed_arity,cljs.core.vec(args));
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47002,(0),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47002,(1),null);
var final_args = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(fixed_args),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(rest_args)], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(arity_fn,final_args);
};
var G__48048 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48049__i = 0, G__48049__a = new Array(arguments.length -  0);
while (G__48049__i < G__48049__a.length) {G__48049__a[G__48049__i] = arguments[G__48049__i + 0]; ++G__48049__i;}
  args = new cljs.core.IndexedSeq(G__48049__a,0,null);
} 
return G__48048__delegate.call(this,args);};
G__48048.cljs$lang$maxFixedArity = 0;
G__48048.cljs$lang$applyTo = (function (arglist__48050){
var args = cljs.core.seq(arglist__48050);
return G__48048__delegate(args);
});
G__48048.cljs$core$IFn$_invoke$arity$variadic = G__48048__delegate;
return G__48048;
})()
);
var instrumented_wrapper = (function() { 
var G__48052__delegate = function (args){
var vec__47008 = cljs.core.split_at(max_fixed_arity,cljs.core.vec(args));
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47008,(0),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47008,(1),null);
var final_args = cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list_STAR_,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(fixed_args),cljs.core.not_empty(rest_args))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instrumented_variadic_fn,final_args);
};
var G__48052 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48054__i = 0, G__48054__a = new Array(arguments.length -  0);
while (G__48054__i < G__48054__a.length) {G__48054__a[G__48054__i] = arguments[G__48054__i + 0]; ++G__48054__i;}
  args = new cljs.core.IndexedSeq(G__48054__a,0,null);
} 
return G__48052__delegate.call(this,args);};
G__48052.cljs$lang$maxFixedArity = 0;
G__48052.cljs$lang$applyTo = (function (arglist__48055){
var args = cljs.core.seq(arglist__48055);
return G__48052__delegate(args);
});
G__48052.cljs$core$IFn$_invoke$arity$variadic = G__48052__delegate;
return G__48052;
})()
;
malli.instrument.goog$module$goog$object.set(instrumented_wrapper,"malli$instrument$original",arity_fn);

malli.instrument.goog$module$goog$object.set(malli.instrument._get_prop(n,s),"malli$instrument$instrumented?",true);

malli.instrument.goog$module$goog$object.set(malli.instrument._get_prop(n,s),accessor,instrumented_wrapper);

return malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),s,malli.instrument.meta_fn(original_fn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"instrumented-symbol","instrumented-symbol",-216975268),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(n,s)], null)));
} else {
return null;
}
});
malli.instrument._replace_multi_arity = (function malli$instrument$_replace_multi_arity(original_fn,n,s,opts){
var schema = new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(opts);
malli.instrument.goog$module$goog$object.set(original_fn,"malli$instrument$instrumented?",true);

malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),s,malli.instrument.meta_fn(original_fn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"instrumented-symbol","instrumented-symbol",-216975268),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(n,s)], null)));

var seq__47030 = cljs.core.seq(malli.instrument._arity__GT_schema(schema));
var chunk__47031 = null;
var count__47032 = (0);
var i__47033 = (0);
while(true){
if((i__47033 < count__47032)){
var vec__47057 = chunk__47031.cljs$core$IIndexed$_nth$arity$2(null,i__47033);
var arity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47057,(0),null);
var f_schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47057,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arity,new cljs.core.Keyword(null,"varargs","varargs",1030150858))){
malli.instrument._replace_variadic_fn(original_fn,n,s,opts);
} else {
var accessor_48072 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity));
var arity_fn_48073 = malli.instrument.goog$module$goog$object.get(original_fn,accessor_48072);
if(cljs.core.truth_(arity_fn_48073)){
var instrumented_fn_48074 = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"schema","schema",-1582001791),f_schema),arity_fn_48073);
malli.instrument.goog$module$goog$object.set(instrumented_fn_48074,"malli$instrument$original",arity_fn_48073);

malli.instrument.goog$module$goog$object.set(instrumented_fn_48074,"malli$instrument$instrumented?",true);

malli.instrument.goog$module$goog$object.set(malli.instrument._get_prop(n,s),accessor_48072,instrumented_fn_48074);
} else {
}
}


var G__48080 = seq__47030;
var G__48081 = chunk__47031;
var G__48082 = count__47032;
var G__48083 = (i__47033 + (1));
seq__47030 = G__48080;
chunk__47031 = G__48081;
count__47032 = G__48082;
i__47033 = G__48083;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__47030);
if(temp__5825__auto__){
var seq__47030__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47030__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__47030__$1);
var G__48085 = cljs.core.chunk_rest(seq__47030__$1);
var G__48086 = c__5694__auto__;
var G__48087 = cljs.core.count(c__5694__auto__);
var G__48088 = (0);
seq__47030 = G__48085;
chunk__47031 = G__48086;
count__47032 = G__48087;
i__47033 = G__48088;
continue;
} else {
var vec__47062 = cljs.core.first(seq__47030__$1);
var arity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47062,(0),null);
var f_schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47062,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arity,new cljs.core.Keyword(null,"varargs","varargs",1030150858))){
malli.instrument._replace_variadic_fn(original_fn,n,s,opts);
} else {
var accessor_48089 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity));
var arity_fn_48090 = malli.instrument.goog$module$goog$object.get(original_fn,accessor_48089);
if(cljs.core.truth_(arity_fn_48090)){
var instrumented_fn_48092 = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"schema","schema",-1582001791),f_schema),arity_fn_48090);
malli.instrument.goog$module$goog$object.set(instrumented_fn_48092,"malli$instrument$original",arity_fn_48090);

malli.instrument.goog$module$goog$object.set(instrumented_fn_48092,"malli$instrument$instrumented?",true);

malli.instrument.goog$module$goog$object.set(malli.instrument._get_prop(n,s),accessor_48089,instrumented_fn_48092);
} else {
}
}


var G__48095 = cljs.core.next(seq__47030__$1);
var G__48096 = null;
var G__48097 = (0);
var G__48098 = (0);
seq__47030 = G__48095;
chunk__47031 = G__48096;
count__47032 = G__48097;
i__47033 = G__48098;
continue;
}
} else {
return null;
}
}
break;
}
});
malli.instrument._replace_fn = (function malli$instrument$_replace_fn(original_fn,n,s,opts){
try{if(cljs.core.truth_(malli.instrument._pure_variadic_QMARK_(original_fn))){
return malli.instrument._replace_variadic_fn(original_fn,n,s,opts);
} else {
if(cljs.core.truth_(malli.instrument._max_fixed_arity(original_fn))){
return malli.instrument._replace_multi_arity(original_fn,n,s,opts);
} else {
var instrumented_fn = malli.instrument.meta_fn(malli.core._instrument.cljs$core$IFn$_invoke$arity$2(opts,original_fn),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"instrumented-symbol","instrumented-symbol",-216975268),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s))], null));
malli.instrument.goog$module$goog$object.set(original_fn,"malli$instrument$instrumented?",true);

malli.instrument.goog$module$goog$object.set(instrumented_fn,"malli$instrument$instrumented?",true);

malli.instrument.goog$module$goog$object.set(instrumented_fn,"malli$instrument$original",original_fn);

return malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),cljs.core.munge(cljs.core.name(s)),instrumented_fn);

}
}
}catch (e47069){var e = e47069;
if((e instanceof cljs.core.ExceptionInfo)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Schema error when instrumenting function: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s)))+" - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_message(e))),cljs.core.ex_data(e));
} else {
throw (new Error((""+"Schema error when instrumenting function: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s)))+". "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e))));
}
}});
malli.instrument._strument_BANG_ = (function malli$instrument$_strument_BANG_(var_args){
var G__47106 = arguments.length;
switch (G__47106) {
case 0:
return malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$1(null);
}));

(malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (p__47118){
var map__47119 = p__47118;
var map__47119__$1 = cljs.core.__destructure_map(map__47119);
var options = map__47119__$1;
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47119__$1,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47119__$1,new cljs.core.Keyword(null,"data","data",-232669377),malli.core.function_schemas.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cljs","cljs",1492417629)));
var filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47119__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47119__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
var report = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47119__$1,new cljs.core.Keyword(null,"report","report",1394055010));
var skip_instrumented_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47119__$1,new cljs.core.Keyword(null,"skip-instrumented?","skip-instrumented?",1366613843),false);
var seq__47122 = cljs.core.seq(data);
var chunk__47127 = null;
var count__47128 = (0);
var i__47129 = (0);
while(true){
if((i__47129 < count__47128)){
var vec__47635 = chunk__47127.cljs$core$IIndexed$_nth$arity$2(null,i__47129);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47635,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47635,(1),null);
var seq__47130_48104 = cljs.core.seq(d);
var chunk__47131_48105 = null;
var count__47132_48106 = (0);
var i__47133_48107 = (0);
while(true){
if((i__47133_48107 < count__47132_48106)){
var vec__47744_48110 = chunk__47131_48105.cljs$core$IIndexed$_nth$arity$2(null,i__47133_48107);
var s_48111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47744_48110,(0),null);
var d_48112__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47744_48110,(1),null);
var temp__5825__auto___48113 = malli.instrument._find_var(n,s_48111);
if(cljs.core.truth_(temp__5825__auto___48113)){
var v_48114 = temp__5825__auto___48113;
if(cljs.core.truth_((function (){var or__5162__auto__ = cljs.core.not(filters);
if(or__5162__auto__){
return or__5162__auto__;
} else {
return cljs.core.some(((function (seq__47130_48104,chunk__47131_48105,count__47132_48106,i__47133_48107,seq__47122,chunk__47127,count__47128,i__47129,or__5162__auto__,v_48114,temp__5825__auto___48113,vec__47744_48110,s_48111,d_48112__$1,vec__47635,n,d,map__47119,map__47119__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (p1__47086_SHARP_){
return (p1__47086_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__47086_SHARP_.cljs$core$IFn$_invoke$arity$3(n,s_48111,d_48112__$1) : p1__47086_SHARP_.call(null,n,s_48111,d_48112__$1));
});})(seq__47130_48104,chunk__47131_48105,count__47132_48106,i__47133_48107,seq__47122,chunk__47127,count__47128,i__47129,or__5162__auto__,v_48114,temp__5825__auto___48113,vec__47744_48110,s_48111,d_48112__$1,vec__47635,n,d,map__47119,map__47119__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
,filters);
}
})())){
var G__47749_48121 = mode;
var G__47749_48122__$1 = (((G__47749_48121 instanceof cljs.core.Keyword))?G__47749_48121.fqn:null);
switch (G__47749_48122__$1) {
case "instrument":
var original_fn_48125 = (function (){var or__5162__auto__ = malli.instrument._original(v_48114);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return v_48114;
}
})();
var dgen_48126 = (function (){var $ = cljs.core.select_keys(options,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scope","scope",-439358418),new cljs.core.Keyword(null,"report","report",1394055010),new cljs.core.Keyword(null,"gen","gen",142575302)], null));
var $__$1 = (function (){var G__47754 = $;
if(cljs.core.truth_(report)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__47754,new cljs.core.Keyword(null,"report","report",1394055010),((function (seq__47130_48104,chunk__47131_48105,count__47132_48106,i__47133_48107,seq__47122,chunk__47127,count__47128,i__47129,G__47754,$,original_fn_48125,G__47749_48121,G__47749_48122__$1,v_48114,temp__5825__auto___48113,vec__47744_48110,s_48111,d_48112__$1,vec__47635,n,d,map__47119,map__47119__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (r){
return ((function (seq__47130_48104,chunk__47131_48105,count__47132_48106,i__47133_48107,seq__47122,chunk__47127,count__47128,i__47129,G__47754,$,original_fn_48125,G__47749_48121,G__47749_48122__$1,v_48114,temp__5825__auto___48113,vec__47744_48110,s_48111,d_48112__$1,vec__47635,n,d,map__47119,map__47119__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (t,data__$1){
var G__47755 = t;
var G__47756 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s_48111)));
return (r.cljs$core$IFn$_invoke$arity$2 ? r.cljs$core$IFn$_invoke$arity$2(G__47755,G__47756) : r.call(null,G__47755,G__47756));
});
;})(seq__47130_48104,chunk__47131_48105,count__47132_48106,i__47133_48107,seq__47122,chunk__47127,count__47128,i__47129,G__47754,$,original_fn_48125,G__47749_48121,G__47749_48122__$1,v_48114,temp__5825__auto___48113,vec__47744_48110,s_48111,d_48112__$1,vec__47635,n,d,map__47119,map__47119__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
});})(seq__47130_48104,chunk__47131_48105,count__47132_48106,i__47133_48107,seq__47122,chunk__47127,count__47128,i__47129,G__47754,$,original_fn_48125,G__47749_48121,G__47749_48122__$1,v_48114,temp__5825__auto___48113,vec__47744_48110,s_48111,d_48112__$1,vec__47635,n,d,map__47119,map__47119__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
);
} else {
return G__47754;
}
})();
var $__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$__$1,d_48112__$1], 0));
if(cljs.core.truth_((function (){var and__5160__auto__ = gen;
if(cljs.core.truth_(and__5160__auto__)){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_48112__$1) === true;
} else {
return and__5160__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($__$2,new cljs.core.Keyword(null,"gen","gen",142575302),gen);
} else {
if(new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_48112__$1) === true){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($__$2,new cljs.core.Keyword(null,"gen","gen",142575302));
} else {
return $__$2;

}
}
})();
if(cljs.core.truth_((function (){var and__5160__auto__ = original_fn_48125;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not((function (){var and__5160__auto____$1 = skip_instrumented_QMARK_;
if(cljs.core.truth_(and__5160__auto____$1)){
return malli.instrument._instrumented_QMARK_(v_48114);
} else {
return and__5160__auto____$1;
}
})());
} else {
return and__5160__auto__;
}
})())){
malli.instrument._replace_fn(original_fn_48125,n,s_48111,dgen_48126);
} else {
}

break;
case "unstrument":
if(malli.instrument._instrumented_QMARK_(v_48114)){
var original_fn_48143 = (function (){var or__5162__auto__ = malli.instrument._original(v_48114);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return v_48114;
}
})();
if(cljs.core.truth_(malli.instrument._pure_variadic_QMARK_(original_fn_48143))){
var accessor_48144 = "cljs$core$IFn$_invoke$arity$variadic";
var variadic_fn_48145 = malli.instrument.goog$module$goog$object.get(v_48114,accessor_48144);
var orig_variadic_fn_48146 = malli.instrument.goog$module$goog$object.get(variadic_fn_48145,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_48143,accessor_48144,orig_variadic_fn_48146);
} else {
if(cljs.core.truth_(malli.instrument._max_fixed_arity(original_fn_48143))){
var seq__47757_48147 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.range.cljs$core$IFn$_invoke$arity$1((20)),"variadic"));
var chunk__47760_48148 = null;
var count__47761_48149 = (0);
var i__47762_48150 = (0);
while(true){
if((i__47762_48150 < count__47761_48149)){
var arity_48151 = chunk__47760_48148.cljs$core$IIndexed$_nth$arity$2(null,i__47762_48150);
var accessor_48152 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_48151));
var arity_fn_48153 = malli.instrument.goog$module$goog$object.get(original_fn_48143,accessor_48152);
if(cljs.core.truth_(arity_fn_48153)){
var orig_48154 = malli.instrument.goog$module$goog$object.get(arity_fn_48153,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_48143,accessor_48152,orig_48154);


var G__48155 = seq__47757_48147;
var G__48156 = chunk__47760_48148;
var G__48157 = count__47761_48149;
var G__48158 = (i__47762_48150 + (1));
seq__47757_48147 = G__48155;
chunk__47760_48148 = G__48156;
count__47761_48149 = G__48157;
i__47762_48150 = G__48158;
continue;
} else {
var G__48159 = seq__47757_48147;
var G__48160 = chunk__47760_48148;
var G__48161 = count__47761_48149;
var G__48162 = (i__47762_48150 + (1));
seq__47757_48147 = G__48159;
chunk__47760_48148 = G__48160;
count__47761_48149 = G__48161;
i__47762_48150 = G__48162;
continue;
}
} else {
var temp__5825__auto___48163__$1 = cljs.core.seq(seq__47757_48147);
if(temp__5825__auto___48163__$1){
var seq__47757_48164__$1 = temp__5825__auto___48163__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47757_48164__$1)){
var c__5694__auto___48165 = cljs.core.chunk_first(seq__47757_48164__$1);
var G__48166 = cljs.core.chunk_rest(seq__47757_48164__$1);
var G__48167 = c__5694__auto___48165;
var G__48168 = cljs.core.count(c__5694__auto___48165);
var G__48169 = (0);
seq__47757_48147 = G__48166;
chunk__47760_48148 = G__48167;
count__47761_48149 = G__48168;
i__47762_48150 = G__48169;
continue;
} else {
var arity_48172 = cljs.core.first(seq__47757_48164__$1);
var accessor_48173 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_48172));
var arity_fn_48174 = malli.instrument.goog$module$goog$object.get(original_fn_48143,accessor_48173);
if(cljs.core.truth_(arity_fn_48174)){
var orig_48180 = malli.instrument.goog$module$goog$object.get(arity_fn_48174,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_48143,accessor_48173,orig_48180);


var G__48182 = cljs.core.next(seq__47757_48164__$1);
var G__48183 = null;
var G__48184 = (0);
var G__48185 = (0);
seq__47757_48147 = G__48182;
chunk__47760_48148 = G__48183;
count__47761_48149 = G__48184;
i__47762_48150 = G__48185;
continue;
} else {
var G__48191 = cljs.core.next(seq__47757_48164__$1);
var G__48192 = null;
var G__48193 = (0);
var G__48194 = (0);
seq__47757_48147 = G__48191;
chunk__47760_48148 = G__48192;
count__47761_48149 = G__48193;
i__47762_48150 = G__48194;
continue;
}
}
} else {
}
}
break;
}
} else {
malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),cljs.core.munge(cljs.core.name(s_48111)),original_fn_48143);

}
}
} else {
}

break;
default:
(mode.cljs$core$IFn$_invoke$arity$2 ? mode.cljs$core$IFn$_invoke$arity$2(v_48114,d_48112__$1) : mode.call(null,v_48114,d_48112__$1));

}
} else {
}
} else {
}


var G__48207 = seq__47130_48104;
var G__48208 = chunk__47131_48105;
var G__48209 = count__47132_48106;
var G__48210 = (i__47133_48107 + (1));
seq__47130_48104 = G__48207;
chunk__47131_48105 = G__48208;
count__47132_48106 = G__48209;
i__47133_48107 = G__48210;
continue;
} else {
var temp__5825__auto___48211 = cljs.core.seq(seq__47130_48104);
if(temp__5825__auto___48211){
var seq__47130_48212__$1 = temp__5825__auto___48211;
if(cljs.core.chunked_seq_QMARK_(seq__47130_48212__$1)){
var c__5694__auto___48214 = cljs.core.chunk_first(seq__47130_48212__$1);
var G__48215 = cljs.core.chunk_rest(seq__47130_48212__$1);
var G__48216 = c__5694__auto___48214;
var G__48217 = cljs.core.count(c__5694__auto___48214);
var G__48218 = (0);
seq__47130_48104 = G__48215;
chunk__47131_48105 = G__48216;
count__47132_48106 = G__48217;
i__47133_48107 = G__48218;
continue;
} else {
var vec__47775_48220 = cljs.core.first(seq__47130_48212__$1);
var s_48221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47775_48220,(0),null);
var d_48222__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47775_48220,(1),null);
var temp__5825__auto___48224__$1 = malli.instrument._find_var(n,s_48221);
if(cljs.core.truth_(temp__5825__auto___48224__$1)){
var v_48225 = temp__5825__auto___48224__$1;
if(cljs.core.truth_((function (){var or__5162__auto__ = cljs.core.not(filters);
if(or__5162__auto__){
return or__5162__auto__;
} else {
return cljs.core.some(((function (seq__47130_48104,chunk__47131_48105,count__47132_48106,i__47133_48107,seq__47122,chunk__47127,count__47128,i__47129,or__5162__auto__,v_48225,temp__5825__auto___48224__$1,vec__47775_48220,s_48221,d_48222__$1,seq__47130_48212__$1,temp__5825__auto___48211,vec__47635,n,d,map__47119,map__47119__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (p1__47086_SHARP_){
return (p1__47086_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__47086_SHARP_.cljs$core$IFn$_invoke$arity$3(n,s_48221,d_48222__$1) : p1__47086_SHARP_.call(null,n,s_48221,d_48222__$1));
});})(seq__47130_48104,chunk__47131_48105,count__47132_48106,i__47133_48107,seq__47122,chunk__47127,count__47128,i__47129,or__5162__auto__,v_48225,temp__5825__auto___48224__$1,vec__47775_48220,s_48221,d_48222__$1,seq__47130_48212__$1,temp__5825__auto___48211,vec__47635,n,d,map__47119,map__47119__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
,filters);
}
})())){
var G__47778_48229 = mode;
var G__47778_48230__$1 = (((G__47778_48229 instanceof cljs.core.Keyword))?G__47778_48229.fqn:null);
switch (G__47778_48230__$1) {
case "instrument":
var original_fn_48232 = (function (){var or__5162__auto__ = malli.instrument._original(v_48225);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return v_48225;
}
})();
var dgen_48233 = (function (){var $ = cljs.core.select_keys(options,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scope","scope",-439358418),new cljs.core.Keyword(null,"report","report",1394055010),new cljs.core.Keyword(null,"gen","gen",142575302)], null));
var $__$1 = (function (){var G__47783 = $;
if(cljs.core.truth_(report)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__47783,new cljs.core.Keyword(null,"report","report",1394055010),((function (seq__47130_48104,chunk__47131_48105,count__47132_48106,i__47133_48107,seq__47122,chunk__47127,count__47128,i__47129,G__47783,$,original_fn_48232,G__47778_48229,G__47778_48230__$1,v_48225,temp__5825__auto___48224__$1,vec__47775_48220,s_48221,d_48222__$1,seq__47130_48212__$1,temp__5825__auto___48211,vec__47635,n,d,map__47119,map__47119__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (r){
return ((function (seq__47130_48104,chunk__47131_48105,count__47132_48106,i__47133_48107,seq__47122,chunk__47127,count__47128,i__47129,G__47783,$,original_fn_48232,G__47778_48229,G__47778_48230__$1,v_48225,temp__5825__auto___48224__$1,vec__47775_48220,s_48221,d_48222__$1,seq__47130_48212__$1,temp__5825__auto___48211,vec__47635,n,d,map__47119,map__47119__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (t,data__$1){
var G__47790 = t;
var G__47791 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s_48221)));
return (r.cljs$core$IFn$_invoke$arity$2 ? r.cljs$core$IFn$_invoke$arity$2(G__47790,G__47791) : r.call(null,G__47790,G__47791));
});
;})(seq__47130_48104,chunk__47131_48105,count__47132_48106,i__47133_48107,seq__47122,chunk__47127,count__47128,i__47129,G__47783,$,original_fn_48232,G__47778_48229,G__47778_48230__$1,v_48225,temp__5825__auto___48224__$1,vec__47775_48220,s_48221,d_48222__$1,seq__47130_48212__$1,temp__5825__auto___48211,vec__47635,n,d,map__47119,map__47119__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
});})(seq__47130_48104,chunk__47131_48105,count__47132_48106,i__47133_48107,seq__47122,chunk__47127,count__47128,i__47129,G__47783,$,original_fn_48232,G__47778_48229,G__47778_48230__$1,v_48225,temp__5825__auto___48224__$1,vec__47775_48220,s_48221,d_48222__$1,seq__47130_48212__$1,temp__5825__auto___48211,vec__47635,n,d,map__47119,map__47119__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
);
} else {
return G__47783;
}
})();
var $__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$__$1,d_48222__$1], 0));
if(cljs.core.truth_((function (){var and__5160__auto__ = gen;
if(cljs.core.truth_(and__5160__auto__)){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_48222__$1) === true;
} else {
return and__5160__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($__$2,new cljs.core.Keyword(null,"gen","gen",142575302),gen);
} else {
if(new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_48222__$1) === true){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($__$2,new cljs.core.Keyword(null,"gen","gen",142575302));
} else {
return $__$2;

}
}
})();
if(cljs.core.truth_((function (){var and__5160__auto__ = original_fn_48232;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not((function (){var and__5160__auto____$1 = skip_instrumented_QMARK_;
if(cljs.core.truth_(and__5160__auto____$1)){
return malli.instrument._instrumented_QMARK_(v_48225);
} else {
return and__5160__auto____$1;
}
})());
} else {
return and__5160__auto__;
}
})())){
malli.instrument._replace_fn(original_fn_48232,n,s_48221,dgen_48233);
} else {
}

break;
case "unstrument":
if(malli.instrument._instrumented_QMARK_(v_48225)){
var original_fn_48268 = (function (){var or__5162__auto__ = malli.instrument._original(v_48225);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return v_48225;
}
})();
if(cljs.core.truth_(malli.instrument._pure_variadic_QMARK_(original_fn_48268))){
var accessor_48269 = "cljs$core$IFn$_invoke$arity$variadic";
var variadic_fn_48270 = malli.instrument.goog$module$goog$object.get(v_48225,accessor_48269);
var orig_variadic_fn_48271 = malli.instrument.goog$module$goog$object.get(variadic_fn_48270,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_48268,accessor_48269,orig_variadic_fn_48271);
} else {
if(cljs.core.truth_(malli.instrument._max_fixed_arity(original_fn_48268))){
var seq__47793_48272 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.range.cljs$core$IFn$_invoke$arity$1((20)),"variadic"));
var chunk__47796_48273 = null;
var count__47797_48274 = (0);
var i__47798_48275 = (0);
while(true){
if((i__47798_48275 < count__47797_48274)){
var arity_48276 = chunk__47796_48273.cljs$core$IIndexed$_nth$arity$2(null,i__47798_48275);
var accessor_48277 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_48276));
var arity_fn_48278 = malli.instrument.goog$module$goog$object.get(original_fn_48268,accessor_48277);
if(cljs.core.truth_(arity_fn_48278)){
var orig_48279 = malli.instrument.goog$module$goog$object.get(arity_fn_48278,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_48268,accessor_48277,orig_48279);


var G__48284 = seq__47793_48272;
var G__48285 = chunk__47796_48273;
var G__48286 = count__47797_48274;
var G__48287 = (i__47798_48275 + (1));
seq__47793_48272 = G__48284;
chunk__47796_48273 = G__48285;
count__47797_48274 = G__48286;
i__47798_48275 = G__48287;
continue;
} else {
var G__48288 = seq__47793_48272;
var G__48289 = chunk__47796_48273;
var G__48290 = count__47797_48274;
var G__48291 = (i__47798_48275 + (1));
seq__47793_48272 = G__48288;
chunk__47796_48273 = G__48289;
count__47797_48274 = G__48290;
i__47798_48275 = G__48291;
continue;
}
} else {
var temp__5825__auto___48292__$2 = cljs.core.seq(seq__47793_48272);
if(temp__5825__auto___48292__$2){
var seq__47793_48293__$1 = temp__5825__auto___48292__$2;
if(cljs.core.chunked_seq_QMARK_(seq__47793_48293__$1)){
var c__5694__auto___48295 = cljs.core.chunk_first(seq__47793_48293__$1);
var G__48296 = cljs.core.chunk_rest(seq__47793_48293__$1);
var G__48297 = c__5694__auto___48295;
var G__48298 = cljs.core.count(c__5694__auto___48295);
var G__48299 = (0);
seq__47793_48272 = G__48296;
chunk__47796_48273 = G__48297;
count__47797_48274 = G__48298;
i__47798_48275 = G__48299;
continue;
} else {
var arity_48300 = cljs.core.first(seq__47793_48293__$1);
var accessor_48301 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_48300));
var arity_fn_48302 = malli.instrument.goog$module$goog$object.get(original_fn_48268,accessor_48301);
if(cljs.core.truth_(arity_fn_48302)){
var orig_48303 = malli.instrument.goog$module$goog$object.get(arity_fn_48302,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_48268,accessor_48301,orig_48303);


var G__48304 = cljs.core.next(seq__47793_48293__$1);
var G__48305 = null;
var G__48306 = (0);
var G__48307 = (0);
seq__47793_48272 = G__48304;
chunk__47796_48273 = G__48305;
count__47797_48274 = G__48306;
i__47798_48275 = G__48307;
continue;
} else {
var G__48308 = cljs.core.next(seq__47793_48293__$1);
var G__48309 = null;
var G__48310 = (0);
var G__48311 = (0);
seq__47793_48272 = G__48308;
chunk__47796_48273 = G__48309;
count__47797_48274 = G__48310;
i__47798_48275 = G__48311;
continue;
}
}
} else {
}
}
break;
}
} else {
malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),cljs.core.munge(cljs.core.name(s_48221)),original_fn_48268);

}
}
} else {
}

break;
default:
(mode.cljs$core$IFn$_invoke$arity$2 ? mode.cljs$core$IFn$_invoke$arity$2(v_48225,d_48222__$1) : mode.call(null,v_48225,d_48222__$1));

}
} else {
}
} else {
}


var G__48312 = cljs.core.next(seq__47130_48212__$1);
var G__48313 = null;
var G__48314 = (0);
var G__48315 = (0);
seq__47130_48104 = G__48312;
chunk__47131_48105 = G__48313;
count__47132_48106 = G__48314;
i__47133_48107 = G__48315;
continue;
}
} else {
}
}
break;
}

var G__48316 = seq__47122;
var G__48317 = chunk__47127;
var G__48318 = count__47128;
var G__48319 = (i__47129 + (1));
seq__47122 = G__48316;
chunk__47127 = G__48317;
count__47128 = G__48318;
i__47129 = G__48319;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__47122);
if(temp__5825__auto__){
var seq__47122__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47122__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__47122__$1);
var G__48321 = cljs.core.chunk_rest(seq__47122__$1);
var G__48322 = c__5694__auto__;
var G__48323 = cljs.core.count(c__5694__auto__);
var G__48324 = (0);
seq__47122 = G__48321;
chunk__47127 = G__48322;
count__47128 = G__48323;
i__47129 = G__48324;
continue;
} else {
var vec__47819 = cljs.core.first(seq__47122__$1);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47819,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47819,(1),null);
var seq__47123_48330 = cljs.core.seq(d);
var chunk__47124_48331 = null;
var count__47125_48332 = (0);
var i__47126_48333 = (0);
while(true){
if((i__47126_48333 < count__47125_48332)){
var vec__47898_48334 = chunk__47124_48331.cljs$core$IIndexed$_nth$arity$2(null,i__47126_48333);
var s_48335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47898_48334,(0),null);
var d_48336__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47898_48334,(1),null);
var temp__5825__auto___48342__$1 = malli.instrument._find_var(n,s_48335);
if(cljs.core.truth_(temp__5825__auto___48342__$1)){
var v_48343 = temp__5825__auto___48342__$1;
if(cljs.core.truth_((function (){var or__5162__auto__ = cljs.core.not(filters);
if(or__5162__auto__){
return or__5162__auto__;
} else {
return cljs.core.some(((function (seq__47123_48330,chunk__47124_48331,count__47125_48332,i__47126_48333,seq__47122,chunk__47127,count__47128,i__47129,or__5162__auto__,v_48343,temp__5825__auto___48342__$1,vec__47898_48334,s_48335,d_48336__$1,vec__47819,n,d,seq__47122__$1,temp__5825__auto__,map__47119,map__47119__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (p1__47086_SHARP_){
return (p1__47086_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__47086_SHARP_.cljs$core$IFn$_invoke$arity$3(n,s_48335,d_48336__$1) : p1__47086_SHARP_.call(null,n,s_48335,d_48336__$1));
});})(seq__47123_48330,chunk__47124_48331,count__47125_48332,i__47126_48333,seq__47122,chunk__47127,count__47128,i__47129,or__5162__auto__,v_48343,temp__5825__auto___48342__$1,vec__47898_48334,s_48335,d_48336__$1,vec__47819,n,d,seq__47122__$1,temp__5825__auto__,map__47119,map__47119__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
,filters);
}
})())){
var G__47901_48350 = mode;
var G__47901_48351__$1 = (((G__47901_48350 instanceof cljs.core.Keyword))?G__47901_48350.fqn:null);
switch (G__47901_48351__$1) {
case "instrument":
var original_fn_48353 = (function (){var or__5162__auto__ = malli.instrument._original(v_48343);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return v_48343;
}
})();
var dgen_48354 = (function (){var $ = cljs.core.select_keys(options,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scope","scope",-439358418),new cljs.core.Keyword(null,"report","report",1394055010),new cljs.core.Keyword(null,"gen","gen",142575302)], null));
var $__$1 = (function (){var G__47902 = $;
if(cljs.core.truth_(report)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__47902,new cljs.core.Keyword(null,"report","report",1394055010),((function (seq__47123_48330,chunk__47124_48331,count__47125_48332,i__47126_48333,seq__47122,chunk__47127,count__47128,i__47129,G__47902,$,original_fn_48353,G__47901_48350,G__47901_48351__$1,v_48343,temp__5825__auto___48342__$1,vec__47898_48334,s_48335,d_48336__$1,vec__47819,n,d,seq__47122__$1,temp__5825__auto__,map__47119,map__47119__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (r){
return ((function (seq__47123_48330,chunk__47124_48331,count__47125_48332,i__47126_48333,seq__47122,chunk__47127,count__47128,i__47129,G__47902,$,original_fn_48353,G__47901_48350,G__47901_48351__$1,v_48343,temp__5825__auto___48342__$1,vec__47898_48334,s_48335,d_48336__$1,vec__47819,n,d,seq__47122__$1,temp__5825__auto__,map__47119,map__47119__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (t,data__$1){
var G__47903 = t;
var G__47904 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s_48335)));
return (r.cljs$core$IFn$_invoke$arity$2 ? r.cljs$core$IFn$_invoke$arity$2(G__47903,G__47904) : r.call(null,G__47903,G__47904));
});
;})(seq__47123_48330,chunk__47124_48331,count__47125_48332,i__47126_48333,seq__47122,chunk__47127,count__47128,i__47129,G__47902,$,original_fn_48353,G__47901_48350,G__47901_48351__$1,v_48343,temp__5825__auto___48342__$1,vec__47898_48334,s_48335,d_48336__$1,vec__47819,n,d,seq__47122__$1,temp__5825__auto__,map__47119,map__47119__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
});})(seq__47123_48330,chunk__47124_48331,count__47125_48332,i__47126_48333,seq__47122,chunk__47127,count__47128,i__47129,G__47902,$,original_fn_48353,G__47901_48350,G__47901_48351__$1,v_48343,temp__5825__auto___48342__$1,vec__47898_48334,s_48335,d_48336__$1,vec__47819,n,d,seq__47122__$1,temp__5825__auto__,map__47119,map__47119__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
);
} else {
return G__47902;
}
})();
var $__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$__$1,d_48336__$1], 0));
if(cljs.core.truth_((function (){var and__5160__auto__ = gen;
if(cljs.core.truth_(and__5160__auto__)){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_48336__$1) === true;
} else {
return and__5160__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($__$2,new cljs.core.Keyword(null,"gen","gen",142575302),gen);
} else {
if(new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_48336__$1) === true){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($__$2,new cljs.core.Keyword(null,"gen","gen",142575302));
} else {
return $__$2;

}
}
})();
if(cljs.core.truth_((function (){var and__5160__auto__ = original_fn_48353;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not((function (){var and__5160__auto____$1 = skip_instrumented_QMARK_;
if(cljs.core.truth_(and__5160__auto____$1)){
return malli.instrument._instrumented_QMARK_(v_48343);
} else {
return and__5160__auto____$1;
}
})());
} else {
return and__5160__auto__;
}
})())){
malli.instrument._replace_fn(original_fn_48353,n,s_48335,dgen_48354);
} else {
}

break;
case "unstrument":
if(malli.instrument._instrumented_QMARK_(v_48343)){
var original_fn_48376 = (function (){var or__5162__auto__ = malli.instrument._original(v_48343);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return v_48343;
}
})();
if(cljs.core.truth_(malli.instrument._pure_variadic_QMARK_(original_fn_48376))){
var accessor_48381 = "cljs$core$IFn$_invoke$arity$variadic";
var variadic_fn_48382 = malli.instrument.goog$module$goog$object.get(v_48343,accessor_48381);
var orig_variadic_fn_48383 = malli.instrument.goog$module$goog$object.get(variadic_fn_48382,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_48376,accessor_48381,orig_variadic_fn_48383);
} else {
if(cljs.core.truth_(malli.instrument._max_fixed_arity(original_fn_48376))){
var seq__47910_48388 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.range.cljs$core$IFn$_invoke$arity$1((20)),"variadic"));
var chunk__47913_48389 = null;
var count__47914_48390 = (0);
var i__47915_48391 = (0);
while(true){
if((i__47915_48391 < count__47914_48390)){
var arity_48392 = chunk__47913_48389.cljs$core$IIndexed$_nth$arity$2(null,i__47915_48391);
var accessor_48393 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_48392));
var arity_fn_48394 = malli.instrument.goog$module$goog$object.get(original_fn_48376,accessor_48393);
if(cljs.core.truth_(arity_fn_48394)){
var orig_48399 = malli.instrument.goog$module$goog$object.get(arity_fn_48394,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_48376,accessor_48393,orig_48399);


var G__48402 = seq__47910_48388;
var G__48403 = chunk__47913_48389;
var G__48404 = count__47914_48390;
var G__48405 = (i__47915_48391 + (1));
seq__47910_48388 = G__48402;
chunk__47913_48389 = G__48403;
count__47914_48390 = G__48404;
i__47915_48391 = G__48405;
continue;
} else {
var G__48406 = seq__47910_48388;
var G__48407 = chunk__47913_48389;
var G__48408 = count__47914_48390;
var G__48409 = (i__47915_48391 + (1));
seq__47910_48388 = G__48406;
chunk__47913_48389 = G__48407;
count__47914_48390 = G__48408;
i__47915_48391 = G__48409;
continue;
}
} else {
var temp__5825__auto___48411__$2 = cljs.core.seq(seq__47910_48388);
if(temp__5825__auto___48411__$2){
var seq__47910_48412__$1 = temp__5825__auto___48411__$2;
if(cljs.core.chunked_seq_QMARK_(seq__47910_48412__$1)){
var c__5694__auto___48413 = cljs.core.chunk_first(seq__47910_48412__$1);
var G__48414 = cljs.core.chunk_rest(seq__47910_48412__$1);
var G__48415 = c__5694__auto___48413;
var G__48416 = cljs.core.count(c__5694__auto___48413);
var G__48417 = (0);
seq__47910_48388 = G__48414;
chunk__47913_48389 = G__48415;
count__47914_48390 = G__48416;
i__47915_48391 = G__48417;
continue;
} else {
var arity_48419 = cljs.core.first(seq__47910_48412__$1);
var accessor_48420 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_48419));
var arity_fn_48421 = malli.instrument.goog$module$goog$object.get(original_fn_48376,accessor_48420);
if(cljs.core.truth_(arity_fn_48421)){
var orig_48422 = malli.instrument.goog$module$goog$object.get(arity_fn_48421,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_48376,accessor_48420,orig_48422);


var G__48424 = cljs.core.next(seq__47910_48412__$1);
var G__48425 = null;
var G__48426 = (0);
var G__48427 = (0);
seq__47910_48388 = G__48424;
chunk__47913_48389 = G__48425;
count__47914_48390 = G__48426;
i__47915_48391 = G__48427;
continue;
} else {
var G__48428 = cljs.core.next(seq__47910_48412__$1);
var G__48429 = null;
var G__48430 = (0);
var G__48431 = (0);
seq__47910_48388 = G__48428;
chunk__47913_48389 = G__48429;
count__47914_48390 = G__48430;
i__47915_48391 = G__48431;
continue;
}
}
} else {
}
}
break;
}
} else {
malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),cljs.core.munge(cljs.core.name(s_48335)),original_fn_48376);

}
}
} else {
}

break;
default:
(mode.cljs$core$IFn$_invoke$arity$2 ? mode.cljs$core$IFn$_invoke$arity$2(v_48343,d_48336__$1) : mode.call(null,v_48343,d_48336__$1));

}
} else {
}
} else {
}


var G__48433 = seq__47123_48330;
var G__48434 = chunk__47124_48331;
var G__48435 = count__47125_48332;
var G__48436 = (i__47126_48333 + (1));
seq__47123_48330 = G__48433;
chunk__47124_48331 = G__48434;
count__47125_48332 = G__48435;
i__47126_48333 = G__48436;
continue;
} else {
var temp__5825__auto___48437__$1 = cljs.core.seq(seq__47123_48330);
if(temp__5825__auto___48437__$1){
var seq__47123_48438__$1 = temp__5825__auto___48437__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47123_48438__$1)){
var c__5694__auto___48439 = cljs.core.chunk_first(seq__47123_48438__$1);
var G__48440 = cljs.core.chunk_rest(seq__47123_48438__$1);
var G__48441 = c__5694__auto___48439;
var G__48442 = cljs.core.count(c__5694__auto___48439);
var G__48443 = (0);
seq__47123_48330 = G__48440;
chunk__47124_48331 = G__48441;
count__47125_48332 = G__48442;
i__47126_48333 = G__48443;
continue;
} else {
var vec__47932_48444 = cljs.core.first(seq__47123_48438__$1);
var s_48445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47932_48444,(0),null);
var d_48446__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47932_48444,(1),null);
var temp__5825__auto___48451__$2 = malli.instrument._find_var(n,s_48445);
if(cljs.core.truth_(temp__5825__auto___48451__$2)){
var v_48452 = temp__5825__auto___48451__$2;
if(cljs.core.truth_((function (){var or__5162__auto__ = cljs.core.not(filters);
if(or__5162__auto__){
return or__5162__auto__;
} else {
return cljs.core.some(((function (seq__47123_48330,chunk__47124_48331,count__47125_48332,i__47126_48333,seq__47122,chunk__47127,count__47128,i__47129,or__5162__auto__,v_48452,temp__5825__auto___48451__$2,vec__47932_48444,s_48445,d_48446__$1,seq__47123_48438__$1,temp__5825__auto___48437__$1,vec__47819,n,d,seq__47122__$1,temp__5825__auto__,map__47119,map__47119__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (p1__47086_SHARP_){
return (p1__47086_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__47086_SHARP_.cljs$core$IFn$_invoke$arity$3(n,s_48445,d_48446__$1) : p1__47086_SHARP_.call(null,n,s_48445,d_48446__$1));
});})(seq__47123_48330,chunk__47124_48331,count__47125_48332,i__47126_48333,seq__47122,chunk__47127,count__47128,i__47129,or__5162__auto__,v_48452,temp__5825__auto___48451__$2,vec__47932_48444,s_48445,d_48446__$1,seq__47123_48438__$1,temp__5825__auto___48437__$1,vec__47819,n,d,seq__47122__$1,temp__5825__auto__,map__47119,map__47119__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
,filters);
}
})())){
var G__47939_48453 = mode;
var G__47939_48454__$1 = (((G__47939_48453 instanceof cljs.core.Keyword))?G__47939_48453.fqn:null);
switch (G__47939_48454__$1) {
case "instrument":
var original_fn_48456 = (function (){var or__5162__auto__ = malli.instrument._original(v_48452);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return v_48452;
}
})();
var dgen_48457 = (function (){var $ = cljs.core.select_keys(options,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scope","scope",-439358418),new cljs.core.Keyword(null,"report","report",1394055010),new cljs.core.Keyword(null,"gen","gen",142575302)], null));
var $__$1 = (function (){var G__47943 = $;
if(cljs.core.truth_(report)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__47943,new cljs.core.Keyword(null,"report","report",1394055010),((function (seq__47123_48330,chunk__47124_48331,count__47125_48332,i__47126_48333,seq__47122,chunk__47127,count__47128,i__47129,G__47943,$,original_fn_48456,G__47939_48453,G__47939_48454__$1,v_48452,temp__5825__auto___48451__$2,vec__47932_48444,s_48445,d_48446__$1,seq__47123_48438__$1,temp__5825__auto___48437__$1,vec__47819,n,d,seq__47122__$1,temp__5825__auto__,map__47119,map__47119__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (r){
return ((function (seq__47123_48330,chunk__47124_48331,count__47125_48332,i__47126_48333,seq__47122,chunk__47127,count__47128,i__47129,G__47943,$,original_fn_48456,G__47939_48453,G__47939_48454__$1,v_48452,temp__5825__auto___48451__$2,vec__47932_48444,s_48445,d_48446__$1,seq__47123_48438__$1,temp__5825__auto___48437__$1,vec__47819,n,d,seq__47122__$1,temp__5825__auto__,map__47119,map__47119__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (t,data__$1){
var G__47944 = t;
var G__47945 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s_48445)));
return (r.cljs$core$IFn$_invoke$arity$2 ? r.cljs$core$IFn$_invoke$arity$2(G__47944,G__47945) : r.call(null,G__47944,G__47945));
});
;})(seq__47123_48330,chunk__47124_48331,count__47125_48332,i__47126_48333,seq__47122,chunk__47127,count__47128,i__47129,G__47943,$,original_fn_48456,G__47939_48453,G__47939_48454__$1,v_48452,temp__5825__auto___48451__$2,vec__47932_48444,s_48445,d_48446__$1,seq__47123_48438__$1,temp__5825__auto___48437__$1,vec__47819,n,d,seq__47122__$1,temp__5825__auto__,map__47119,map__47119__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
});})(seq__47123_48330,chunk__47124_48331,count__47125_48332,i__47126_48333,seq__47122,chunk__47127,count__47128,i__47129,G__47943,$,original_fn_48456,G__47939_48453,G__47939_48454__$1,v_48452,temp__5825__auto___48451__$2,vec__47932_48444,s_48445,d_48446__$1,seq__47123_48438__$1,temp__5825__auto___48437__$1,vec__47819,n,d,seq__47122__$1,temp__5825__auto__,map__47119,map__47119__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
);
} else {
return G__47943;
}
})();
var $__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$__$1,d_48446__$1], 0));
if(cljs.core.truth_((function (){var and__5160__auto__ = gen;
if(cljs.core.truth_(and__5160__auto__)){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_48446__$1) === true;
} else {
return and__5160__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($__$2,new cljs.core.Keyword(null,"gen","gen",142575302),gen);
} else {
if(new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_48446__$1) === true){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($__$2,new cljs.core.Keyword(null,"gen","gen",142575302));
} else {
return $__$2;

}
}
})();
if(cljs.core.truth_((function (){var and__5160__auto__ = original_fn_48456;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not((function (){var and__5160__auto____$1 = skip_instrumented_QMARK_;
if(cljs.core.truth_(and__5160__auto____$1)){
return malli.instrument._instrumented_QMARK_(v_48452);
} else {
return and__5160__auto____$1;
}
})());
} else {
return and__5160__auto__;
}
})())){
malli.instrument._replace_fn(original_fn_48456,n,s_48445,dgen_48457);
} else {
}

break;
case "unstrument":
if(malli.instrument._instrumented_QMARK_(v_48452)){
var original_fn_48464 = (function (){var or__5162__auto__ = malli.instrument._original(v_48452);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return v_48452;
}
})();
if(cljs.core.truth_(malli.instrument._pure_variadic_QMARK_(original_fn_48464))){
var accessor_48466 = "cljs$core$IFn$_invoke$arity$variadic";
var variadic_fn_48467 = malli.instrument.goog$module$goog$object.get(v_48452,accessor_48466);
var orig_variadic_fn_48468 = malli.instrument.goog$module$goog$object.get(variadic_fn_48467,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_48464,accessor_48466,orig_variadic_fn_48468);
} else {
if(cljs.core.truth_(malli.instrument._max_fixed_arity(original_fn_48464))){
var seq__47960_48469 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.range.cljs$core$IFn$_invoke$arity$1((20)),"variadic"));
var chunk__47963_48470 = null;
var count__47964_48471 = (0);
var i__47965_48472 = (0);
while(true){
if((i__47965_48472 < count__47964_48471)){
var arity_48474 = chunk__47963_48470.cljs$core$IIndexed$_nth$arity$2(null,i__47965_48472);
var accessor_48475 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_48474));
var arity_fn_48476 = malli.instrument.goog$module$goog$object.get(original_fn_48464,accessor_48475);
if(cljs.core.truth_(arity_fn_48476)){
var orig_48477 = malli.instrument.goog$module$goog$object.get(arity_fn_48476,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_48464,accessor_48475,orig_48477);


var G__48478 = seq__47960_48469;
var G__48479 = chunk__47963_48470;
var G__48480 = count__47964_48471;
var G__48481 = (i__47965_48472 + (1));
seq__47960_48469 = G__48478;
chunk__47963_48470 = G__48479;
count__47964_48471 = G__48480;
i__47965_48472 = G__48481;
continue;
} else {
var G__48482 = seq__47960_48469;
var G__48483 = chunk__47963_48470;
var G__48484 = count__47964_48471;
var G__48485 = (i__47965_48472 + (1));
seq__47960_48469 = G__48482;
chunk__47963_48470 = G__48483;
count__47964_48471 = G__48484;
i__47965_48472 = G__48485;
continue;
}
} else {
var temp__5825__auto___48486__$3 = cljs.core.seq(seq__47960_48469);
if(temp__5825__auto___48486__$3){
var seq__47960_48487__$1 = temp__5825__auto___48486__$3;
if(cljs.core.chunked_seq_QMARK_(seq__47960_48487__$1)){
var c__5694__auto___48488 = cljs.core.chunk_first(seq__47960_48487__$1);
var G__48489 = cljs.core.chunk_rest(seq__47960_48487__$1);
var G__48490 = c__5694__auto___48488;
var G__48491 = cljs.core.count(c__5694__auto___48488);
var G__48492 = (0);
seq__47960_48469 = G__48489;
chunk__47963_48470 = G__48490;
count__47964_48471 = G__48491;
i__47965_48472 = G__48492;
continue;
} else {
var arity_48493 = cljs.core.first(seq__47960_48487__$1);
var accessor_48494 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_48493));
var arity_fn_48495 = malli.instrument.goog$module$goog$object.get(original_fn_48464,accessor_48494);
if(cljs.core.truth_(arity_fn_48495)){
var orig_48496 = malli.instrument.goog$module$goog$object.get(arity_fn_48495,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_48464,accessor_48494,orig_48496);


var G__48497 = cljs.core.next(seq__47960_48487__$1);
var G__48498 = null;
var G__48499 = (0);
var G__48500 = (0);
seq__47960_48469 = G__48497;
chunk__47963_48470 = G__48498;
count__47964_48471 = G__48499;
i__47965_48472 = G__48500;
continue;
} else {
var G__48501 = cljs.core.next(seq__47960_48487__$1);
var G__48502 = null;
var G__48503 = (0);
var G__48504 = (0);
seq__47960_48469 = G__48501;
chunk__47963_48470 = G__48502;
count__47964_48471 = G__48503;
i__47965_48472 = G__48504;
continue;
}
}
} else {
}
}
break;
}
} else {
malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),cljs.core.munge(cljs.core.name(s_48445)),original_fn_48464);

}
}
} else {
}

break;
default:
(mode.cljs$core$IFn$_invoke$arity$2 ? mode.cljs$core$IFn$_invoke$arity$2(v_48452,d_48446__$1) : mode.call(null,v_48452,d_48446__$1));

}
} else {
}
} else {
}


var G__48509 = cljs.core.next(seq__47123_48438__$1);
var G__48510 = null;
var G__48511 = (0);
var G__48512 = (0);
seq__47123_48330 = G__48509;
chunk__47124_48331 = G__48510;
count__47125_48332 = G__48511;
i__47126_48333 = G__48512;
continue;
}
} else {
}
}
break;
}

var G__48514 = cljs.core.next(seq__47122__$1);
var G__48515 = null;
var G__48516 = (0);
var G__48517 = (0);
seq__47122 = G__48514;
chunk__47127 = G__48515;
count__47128 = G__48516;
i__47129 = G__48517;
continue;
}
} else {
return null;
}
}
break;
}
}));

(malli.instrument._strument_BANG_.cljs$lang$maxFixedArity = 1);

/**
 * Checks all registered function schemas using generative testing.
 * Returns nil or a map of symbol -> explanation in case of errors.
 */
malli.instrument.check = (function malli$instrument$check(var_args){
var G__48004 = arguments.length;
switch (G__48004) {
case 0:
return malli.instrument.check.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.instrument.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.instrument.check.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.instrument.check.cljs$core$IFn$_invoke$arity$1(null);
}));

(malli.instrument.check.cljs$core$IFn$_invoke$arity$1 = (function (options){
var res_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"mode","mode",654403691),(function (v,p__48008){
var map__48009 = p__48008;
var map__48009__$1 = cljs.core.__destructure_map(map__48009);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48009__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48009__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48009__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var G__48010 = malli.generator.check.cljs$core$IFn$_invoke$arity$2(schema,malli.instrument._original(v));
if((G__48010 == null)){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(res_STAR_,cljs.core.assoc,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,name),G__48010);
}
})));

return cljs.core.not_empty(cljs.core.deref(res_STAR_));
}));

(malli.instrument.check.cljs$lang$maxFixedArity = 1);

/**
 * Applies instrumentation for a filtered set of function Vars (e.g. `defn`s).
 * See [[malli.core/-instrument]] for possible options.
 */
malli.instrument.instrument_BANG_ = (function malli$instrument$instrument_BANG_(var_args){
var G__48035 = arguments.length;
switch (G__48035) {
case 0:
return malli.instrument.instrument_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.instrument.instrument_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.instrument.instrument_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.instrument.instrument_BANG_.cljs$core$IFn$_invoke$arity$1(null);
}));

(malli.instrument.instrument_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (options){
return malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"instrument","instrument",-960698844)));
}));

(malli.instrument.instrument_BANG_.cljs$lang$maxFixedArity = 1);

/**
 * Removes instrumentation from a filtered set of function Vars (e.g. `defn`s).
 * See [[malli.core/-instrument]] for possible options.
 */
malli.instrument.unstrument_BANG_ = (function malli$instrument$unstrument_BANG_(var_args){
var G__48037 = arguments.length;
switch (G__48037) {
case 0:
return malli.instrument.unstrument_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.instrument.unstrument_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.instrument.unstrument_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.instrument.unstrument_BANG_.cljs$core$IFn$_invoke$arity$1(null);
}));

(malli.instrument.unstrument_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (options){
return malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"unstrument","unstrument",-312041116)));
}));

(malli.instrument.unstrument_BANG_.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=malli.instrument.js.map

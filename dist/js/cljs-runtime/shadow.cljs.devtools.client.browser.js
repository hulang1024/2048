goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5903__auto__ = [];
var len__5897__auto___54014 = arguments.length;
var i__5898__auto___54015 = (0);
while(true){
if((i__5898__auto___54015 < len__5897__auto___54014)){
args__5903__auto__.push((arguments[i__5898__auto___54015]));

var G__54016 = (i__5898__auto___54015 + (1));
i__5898__auto___54015 = G__54016;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"%cshadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"shadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg))], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq53727){
var G__53728 = cljs.core.first(seq53727);
var seq53727__$1 = cljs.core.next(seq53727);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53728,seq53727__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__53731 = cljs.core.seq(sources);
var chunk__53732 = null;
var count__53733 = (0);
var i__53734 = (0);
while(true){
if((i__53734 < count__53733)){
var map__53739 = chunk__53732.cljs$core$IIndexed$_nth$arity$2(null,i__53734);
var map__53739__$1 = cljs.core.__destructure_map(map__53739);
var src = map__53739__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53739__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53739__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53739__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53739__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e53740){var e_54017 = e53740;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_54017);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_54017.message))));
}

var G__54018 = seq__53731;
var G__54019 = chunk__53732;
var G__54020 = count__53733;
var G__54021 = (i__53734 + (1));
seq__53731 = G__54018;
chunk__53732 = G__54019;
count__53733 = G__54020;
i__53734 = G__54021;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__53731);
if(temp__5825__auto__){
var seq__53731__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53731__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__53731__$1);
var G__54022 = cljs.core.chunk_rest(seq__53731__$1);
var G__54023 = c__5694__auto__;
var G__54024 = cljs.core.count(c__5694__auto__);
var G__54025 = (0);
seq__53731 = G__54022;
chunk__53732 = G__54023;
count__53733 = G__54024;
i__53734 = G__54025;
continue;
} else {
var map__53743 = cljs.core.first(seq__53731__$1);
var map__53743__$1 = cljs.core.__destructure_map(map__53743);
var src = map__53743__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53743__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53743__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53743__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53743__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e53744){var e_54026 = e53744;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_54026);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_54026.message))));
}

var G__54027 = cljs.core.next(seq__53731__$1);
var G__54028 = null;
var G__54029 = (0);
var G__54030 = (0);
seq__53731 = G__54027;
chunk__53732 = G__54028;
count__53733 = G__54029;
i__53734 = G__54030;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call async "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__53745 = cljs.core.seq(js_requires);
var chunk__53746 = null;
var count__53747 = (0);
var i__53748 = (0);
while(true){
if((i__53748 < count__53747)){
var js_ns = chunk__53746.cljs$core$IIndexed$_nth$arity$2(null,i__53748);
var require_str_54031 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_54031);


var G__54032 = seq__53745;
var G__54033 = chunk__53746;
var G__54034 = count__53747;
var G__54035 = (i__53748 + (1));
seq__53745 = G__54032;
chunk__53746 = G__54033;
count__53747 = G__54034;
i__53748 = G__54035;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__53745);
if(temp__5825__auto__){
var seq__53745__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53745__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__53745__$1);
var G__54036 = cljs.core.chunk_rest(seq__53745__$1);
var G__54037 = c__5694__auto__;
var G__54038 = cljs.core.count(c__5694__auto__);
var G__54039 = (0);
seq__53745 = G__54036;
chunk__53746 = G__54037;
count__53747 = G__54038;
i__53748 = G__54039;
continue;
} else {
var js_ns = cljs.core.first(seq__53745__$1);
var require_str_54040 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_54040);


var G__54041 = cljs.core.next(seq__53745__$1);
var G__54042 = null;
var G__54043 = (0);
var G__54044 = (0);
seq__53745 = G__54041;
chunk__53746 = G__54042;
count__53747 = G__54043;
i__53748 = G__54044;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__53750){
var map__53751 = p__53750;
var map__53751__$1 = cljs.core.__destructure_map(map__53751);
var msg = map__53751__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53751__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53751__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5649__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53752(s__53753){
return (new cljs.core.LazySeq(null,(function (){
var s__53753__$1 = s__53753;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__53753__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var map__53758 = cljs.core.first(xs__6385__auto__);
var map__53758__$1 = cljs.core.__destructure_map(map__53758);
var src = map__53758__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53758__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53758__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5645__auto__ = ((function (s__53753__$1,map__53758,map__53758__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__53751,map__53751__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53752_$_iter__53754(s__53755){
return (new cljs.core.LazySeq(null,((function (s__53753__$1,map__53758,map__53758__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__53751,map__53751__$1,msg,info,reload_info){
return (function (){
var s__53755__$1 = s__53755;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__53755__$1);
if(temp__5825__auto____$1){
var s__53755__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53755__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__53755__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__53757 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__53756 = (0);
while(true){
if((i__53756 < size__5648__auto__)){
var warning = cljs.core._nth(c__5647__auto__,i__53756);
cljs.core.chunk_append(b__53757,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__54045 = (i__53756 + (1));
i__53756 = G__54045;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53757),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53752_$_iter__53754(cljs.core.chunk_rest(s__53755__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53757),null);
}
} else {
var warning = cljs.core.first(s__53755__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53752_$_iter__53754(cljs.core.rest(s__53755__$2)));
}
} else {
return null;
}
break;
}
});})(s__53753__$1,map__53758,map__53758__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__53751,map__53751__$1,msg,info,reload_info))
,null,null));
});})(s__53753__$1,map__53758,map__53758__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__53751,map__53751__$1,msg,info,reload_info))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(warnings));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53752(cljs.core.rest(s__53753__$1)));
} else {
var G__54046 = cljs.core.rest(s__53753__$1);
s__53753__$1 = G__54046;
continue;
}
} else {
var G__54047 = cljs.core.rest(s__53753__$1);
s__53753__$1 = G__54047;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__53759_54048 = cljs.core.seq(warnings);
var chunk__53760_54049 = null;
var count__53761_54050 = (0);
var i__53762_54051 = (0);
while(true){
if((i__53762_54051 < count__53761_54050)){
var map__53765_54052 = chunk__53760_54049.cljs$core$IIndexed$_nth$arity$2(null,i__53762_54051);
var map__53765_54053__$1 = cljs.core.__destructure_map(map__53765_54052);
var w_54054 = map__53765_54053__$1;
var msg_54055__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53765_54053__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_54056 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53765_54053__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_54057 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53765_54053__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_54058 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53765_54053__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_54058)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_54056)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_54057)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_54055__$1)));


var G__54059 = seq__53759_54048;
var G__54060 = chunk__53760_54049;
var G__54061 = count__53761_54050;
var G__54062 = (i__53762_54051 + (1));
seq__53759_54048 = G__54059;
chunk__53760_54049 = G__54060;
count__53761_54050 = G__54061;
i__53762_54051 = G__54062;
continue;
} else {
var temp__5825__auto___54063 = cljs.core.seq(seq__53759_54048);
if(temp__5825__auto___54063){
var seq__53759_54064__$1 = temp__5825__auto___54063;
if(cljs.core.chunked_seq_QMARK_(seq__53759_54064__$1)){
var c__5694__auto___54065 = cljs.core.chunk_first(seq__53759_54064__$1);
var G__54066 = cljs.core.chunk_rest(seq__53759_54064__$1);
var G__54067 = c__5694__auto___54065;
var G__54068 = cljs.core.count(c__5694__auto___54065);
var G__54069 = (0);
seq__53759_54048 = G__54066;
chunk__53760_54049 = G__54067;
count__53761_54050 = G__54068;
i__53762_54051 = G__54069;
continue;
} else {
var map__53766_54070 = cljs.core.first(seq__53759_54064__$1);
var map__53766_54071__$1 = cljs.core.__destructure_map(map__53766_54070);
var w_54072 = map__53766_54071__$1;
var msg_54073__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53766_54071__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_54074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53766_54071__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_54075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53766_54071__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_54076 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53766_54071__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_54076)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_54074)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_54075)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_54073__$1)));


var G__54077 = cljs.core.next(seq__53759_54064__$1);
var G__54078 = null;
var G__54079 = (0);
var G__54080 = (0);
seq__53759_54048 = G__54077;
chunk__53760_54049 = G__54078;
count__53761_54050 = G__54079;
i__53762_54051 = G__54080;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__53749_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__53749_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new)+"?"))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5160__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5160__auto__){
var and__5160__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5160__auto____$1){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__53767 = node_uri;
G__53767.setQuery(null);

G__53767.setPath(new$);

return G__53767;
})()));
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__53768){
var map__53769 = p__53768;
var map__53769__$1 = cljs.core.__destructure_map(map__53769);
var msg = map__53769__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53769__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53769__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__53770 = cljs.core.seq(updates);
var chunk__53772 = null;
var count__53773 = (0);
var i__53774 = (0);
while(true){
if((i__53774 < count__53773)){
var path = chunk__53772.cljs$core$IIndexed$_nth$arity$2(null,i__53774);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__53884_54081 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__53888_54082 = null;
var count__53889_54083 = (0);
var i__53890_54084 = (0);
while(true){
if((i__53890_54084 < count__53889_54083)){
var node_54085 = chunk__53888_54082.cljs$core$IIndexed$_nth$arity$2(null,i__53890_54084);
if(cljs.core.not(node_54085.shadow$old)){
var path_match_54086 = shadow.cljs.devtools.client.browser.match_paths(node_54085.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54086)){
var new_link_54087 = (function (){var G__53916 = node_54085.cloneNode(true);
G__53916.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54086)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__53916;
})();
(node_54085.shadow$old = true);

(new_link_54087.onload = ((function (seq__53884_54081,chunk__53888_54082,count__53889_54083,i__53890_54084,seq__53770,chunk__53772,count__53773,i__53774,new_link_54087,path_match_54086,node_54085,path,map__53769,map__53769__$1,msg,updates,reload_info){
return (function (e){
var seq__53917_54088 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__53919_54089 = null;
var count__53920_54090 = (0);
var i__53921_54091 = (0);
while(true){
if((i__53921_54091 < count__53920_54090)){
var map__53925_54092 = chunk__53919_54089.cljs$core$IIndexed$_nth$arity$2(null,i__53921_54091);
var map__53925_54093__$1 = cljs.core.__destructure_map(map__53925_54092);
var task_54094 = map__53925_54093__$1;
var fn_str_54095 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53925_54093__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54096 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53925_54093__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54097 = goog.getObjectByName(fn_str_54095,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54096)));

(fn_obj_54097.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54097.cljs$core$IFn$_invoke$arity$2(path,new_link_54087) : fn_obj_54097.call(null,path,new_link_54087));


var G__54098 = seq__53917_54088;
var G__54099 = chunk__53919_54089;
var G__54100 = count__53920_54090;
var G__54101 = (i__53921_54091 + (1));
seq__53917_54088 = G__54098;
chunk__53919_54089 = G__54099;
count__53920_54090 = G__54100;
i__53921_54091 = G__54101;
continue;
} else {
var temp__5825__auto___54102 = cljs.core.seq(seq__53917_54088);
if(temp__5825__auto___54102){
var seq__53917_54103__$1 = temp__5825__auto___54102;
if(cljs.core.chunked_seq_QMARK_(seq__53917_54103__$1)){
var c__5694__auto___54104 = cljs.core.chunk_first(seq__53917_54103__$1);
var G__54105 = cljs.core.chunk_rest(seq__53917_54103__$1);
var G__54106 = c__5694__auto___54104;
var G__54107 = cljs.core.count(c__5694__auto___54104);
var G__54108 = (0);
seq__53917_54088 = G__54105;
chunk__53919_54089 = G__54106;
count__53920_54090 = G__54107;
i__53921_54091 = G__54108;
continue;
} else {
var map__53926_54109 = cljs.core.first(seq__53917_54103__$1);
var map__53926_54110__$1 = cljs.core.__destructure_map(map__53926_54109);
var task_54111 = map__53926_54110__$1;
var fn_str_54112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53926_54110__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53926_54110__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54114 = goog.getObjectByName(fn_str_54112,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54113)));

(fn_obj_54114.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54114.cljs$core$IFn$_invoke$arity$2(path,new_link_54087) : fn_obj_54114.call(null,path,new_link_54087));


var G__54115 = cljs.core.next(seq__53917_54103__$1);
var G__54116 = null;
var G__54117 = (0);
var G__54118 = (0);
seq__53917_54088 = G__54115;
chunk__53919_54089 = G__54116;
count__53920_54090 = G__54117;
i__53921_54091 = G__54118;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_54085);
});})(seq__53884_54081,chunk__53888_54082,count__53889_54083,i__53890_54084,seq__53770,chunk__53772,count__53773,i__53774,new_link_54087,path_match_54086,node_54085,path,map__53769,map__53769__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54086], 0));

goog.dom.insertSiblingAfter(new_link_54087,node_54085);


var G__54119 = seq__53884_54081;
var G__54120 = chunk__53888_54082;
var G__54121 = count__53889_54083;
var G__54122 = (i__53890_54084 + (1));
seq__53884_54081 = G__54119;
chunk__53888_54082 = G__54120;
count__53889_54083 = G__54121;
i__53890_54084 = G__54122;
continue;
} else {
var G__54123 = seq__53884_54081;
var G__54124 = chunk__53888_54082;
var G__54125 = count__53889_54083;
var G__54126 = (i__53890_54084 + (1));
seq__53884_54081 = G__54123;
chunk__53888_54082 = G__54124;
count__53889_54083 = G__54125;
i__53890_54084 = G__54126;
continue;
}
} else {
var G__54127 = seq__53884_54081;
var G__54128 = chunk__53888_54082;
var G__54129 = count__53889_54083;
var G__54130 = (i__53890_54084 + (1));
seq__53884_54081 = G__54127;
chunk__53888_54082 = G__54128;
count__53889_54083 = G__54129;
i__53890_54084 = G__54130;
continue;
}
} else {
var temp__5825__auto___54131 = cljs.core.seq(seq__53884_54081);
if(temp__5825__auto___54131){
var seq__53884_54132__$1 = temp__5825__auto___54131;
if(cljs.core.chunked_seq_QMARK_(seq__53884_54132__$1)){
var c__5694__auto___54133 = cljs.core.chunk_first(seq__53884_54132__$1);
var G__54134 = cljs.core.chunk_rest(seq__53884_54132__$1);
var G__54135 = c__5694__auto___54133;
var G__54136 = cljs.core.count(c__5694__auto___54133);
var G__54137 = (0);
seq__53884_54081 = G__54134;
chunk__53888_54082 = G__54135;
count__53889_54083 = G__54136;
i__53890_54084 = G__54137;
continue;
} else {
var node_54138 = cljs.core.first(seq__53884_54132__$1);
if(cljs.core.not(node_54138.shadow$old)){
var path_match_54139 = shadow.cljs.devtools.client.browser.match_paths(node_54138.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54139)){
var new_link_54140 = (function (){var G__53927 = node_54138.cloneNode(true);
G__53927.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54139)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__53927;
})();
(node_54138.shadow$old = true);

(new_link_54140.onload = ((function (seq__53884_54081,chunk__53888_54082,count__53889_54083,i__53890_54084,seq__53770,chunk__53772,count__53773,i__53774,new_link_54140,path_match_54139,node_54138,seq__53884_54132__$1,temp__5825__auto___54131,path,map__53769,map__53769__$1,msg,updates,reload_info){
return (function (e){
var seq__53928_54141 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__53930_54142 = null;
var count__53931_54143 = (0);
var i__53932_54144 = (0);
while(true){
if((i__53932_54144 < count__53931_54143)){
var map__53936_54145 = chunk__53930_54142.cljs$core$IIndexed$_nth$arity$2(null,i__53932_54144);
var map__53936_54146__$1 = cljs.core.__destructure_map(map__53936_54145);
var task_54147 = map__53936_54146__$1;
var fn_str_54148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53936_54146__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53936_54146__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54150 = goog.getObjectByName(fn_str_54148,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54149)));

(fn_obj_54150.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54150.cljs$core$IFn$_invoke$arity$2(path,new_link_54140) : fn_obj_54150.call(null,path,new_link_54140));


var G__54151 = seq__53928_54141;
var G__54152 = chunk__53930_54142;
var G__54153 = count__53931_54143;
var G__54154 = (i__53932_54144 + (1));
seq__53928_54141 = G__54151;
chunk__53930_54142 = G__54152;
count__53931_54143 = G__54153;
i__53932_54144 = G__54154;
continue;
} else {
var temp__5825__auto___54155__$1 = cljs.core.seq(seq__53928_54141);
if(temp__5825__auto___54155__$1){
var seq__53928_54156__$1 = temp__5825__auto___54155__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53928_54156__$1)){
var c__5694__auto___54157 = cljs.core.chunk_first(seq__53928_54156__$1);
var G__54158 = cljs.core.chunk_rest(seq__53928_54156__$1);
var G__54159 = c__5694__auto___54157;
var G__54160 = cljs.core.count(c__5694__auto___54157);
var G__54161 = (0);
seq__53928_54141 = G__54158;
chunk__53930_54142 = G__54159;
count__53931_54143 = G__54160;
i__53932_54144 = G__54161;
continue;
} else {
var map__53937_54162 = cljs.core.first(seq__53928_54156__$1);
var map__53937_54163__$1 = cljs.core.__destructure_map(map__53937_54162);
var task_54164 = map__53937_54163__$1;
var fn_str_54165 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53937_54163__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53937_54163__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54167 = goog.getObjectByName(fn_str_54165,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54166)));

(fn_obj_54167.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54167.cljs$core$IFn$_invoke$arity$2(path,new_link_54140) : fn_obj_54167.call(null,path,new_link_54140));


var G__54168 = cljs.core.next(seq__53928_54156__$1);
var G__54169 = null;
var G__54170 = (0);
var G__54171 = (0);
seq__53928_54141 = G__54168;
chunk__53930_54142 = G__54169;
count__53931_54143 = G__54170;
i__53932_54144 = G__54171;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_54138);
});})(seq__53884_54081,chunk__53888_54082,count__53889_54083,i__53890_54084,seq__53770,chunk__53772,count__53773,i__53774,new_link_54140,path_match_54139,node_54138,seq__53884_54132__$1,temp__5825__auto___54131,path,map__53769,map__53769__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54139], 0));

goog.dom.insertSiblingAfter(new_link_54140,node_54138);


var G__54172 = cljs.core.next(seq__53884_54132__$1);
var G__54173 = null;
var G__54174 = (0);
var G__54175 = (0);
seq__53884_54081 = G__54172;
chunk__53888_54082 = G__54173;
count__53889_54083 = G__54174;
i__53890_54084 = G__54175;
continue;
} else {
var G__54176 = cljs.core.next(seq__53884_54132__$1);
var G__54177 = null;
var G__54178 = (0);
var G__54179 = (0);
seq__53884_54081 = G__54176;
chunk__53888_54082 = G__54177;
count__53889_54083 = G__54178;
i__53890_54084 = G__54179;
continue;
}
} else {
var G__54180 = cljs.core.next(seq__53884_54132__$1);
var G__54181 = null;
var G__54182 = (0);
var G__54183 = (0);
seq__53884_54081 = G__54180;
chunk__53888_54082 = G__54181;
count__53889_54083 = G__54182;
i__53890_54084 = G__54183;
continue;
}
}
} else {
}
}
break;
}


var G__54184 = seq__53770;
var G__54185 = chunk__53772;
var G__54186 = count__53773;
var G__54187 = (i__53774 + (1));
seq__53770 = G__54184;
chunk__53772 = G__54185;
count__53773 = G__54186;
i__53774 = G__54187;
continue;
} else {
var G__54188 = seq__53770;
var G__54189 = chunk__53772;
var G__54190 = count__53773;
var G__54191 = (i__53774 + (1));
seq__53770 = G__54188;
chunk__53772 = G__54189;
count__53773 = G__54190;
i__53774 = G__54191;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__53770);
if(temp__5825__auto__){
var seq__53770__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53770__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__53770__$1);
var G__54192 = cljs.core.chunk_rest(seq__53770__$1);
var G__54193 = c__5694__auto__;
var G__54194 = cljs.core.count(c__5694__auto__);
var G__54195 = (0);
seq__53770 = G__54192;
chunk__53772 = G__54193;
count__53773 = G__54194;
i__53774 = G__54195;
continue;
} else {
var path = cljs.core.first(seq__53770__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__53938_54196 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__53942_54197 = null;
var count__53943_54198 = (0);
var i__53944_54199 = (0);
while(true){
if((i__53944_54199 < count__53943_54198)){
var node_54200 = chunk__53942_54197.cljs$core$IIndexed$_nth$arity$2(null,i__53944_54199);
if(cljs.core.not(node_54200.shadow$old)){
var path_match_54201 = shadow.cljs.devtools.client.browser.match_paths(node_54200.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54201)){
var new_link_54202 = (function (){var G__53970 = node_54200.cloneNode(true);
G__53970.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54201)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__53970;
})();
(node_54200.shadow$old = true);

(new_link_54202.onload = ((function (seq__53938_54196,chunk__53942_54197,count__53943_54198,i__53944_54199,seq__53770,chunk__53772,count__53773,i__53774,new_link_54202,path_match_54201,node_54200,path,seq__53770__$1,temp__5825__auto__,map__53769,map__53769__$1,msg,updates,reload_info){
return (function (e){
var seq__53971_54203 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__53973_54204 = null;
var count__53974_54205 = (0);
var i__53975_54206 = (0);
while(true){
if((i__53975_54206 < count__53974_54205)){
var map__53979_54207 = chunk__53973_54204.cljs$core$IIndexed$_nth$arity$2(null,i__53975_54206);
var map__53979_54208__$1 = cljs.core.__destructure_map(map__53979_54207);
var task_54209 = map__53979_54208__$1;
var fn_str_54210 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53979_54208__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53979_54208__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54212 = goog.getObjectByName(fn_str_54210,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54211)));

(fn_obj_54212.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54212.cljs$core$IFn$_invoke$arity$2(path,new_link_54202) : fn_obj_54212.call(null,path,new_link_54202));


var G__54213 = seq__53971_54203;
var G__54214 = chunk__53973_54204;
var G__54215 = count__53974_54205;
var G__54216 = (i__53975_54206 + (1));
seq__53971_54203 = G__54213;
chunk__53973_54204 = G__54214;
count__53974_54205 = G__54215;
i__53975_54206 = G__54216;
continue;
} else {
var temp__5825__auto___54217__$1 = cljs.core.seq(seq__53971_54203);
if(temp__5825__auto___54217__$1){
var seq__53971_54218__$1 = temp__5825__auto___54217__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53971_54218__$1)){
var c__5694__auto___54219 = cljs.core.chunk_first(seq__53971_54218__$1);
var G__54220 = cljs.core.chunk_rest(seq__53971_54218__$1);
var G__54221 = c__5694__auto___54219;
var G__54222 = cljs.core.count(c__5694__auto___54219);
var G__54223 = (0);
seq__53971_54203 = G__54220;
chunk__53973_54204 = G__54221;
count__53974_54205 = G__54222;
i__53975_54206 = G__54223;
continue;
} else {
var map__53980_54224 = cljs.core.first(seq__53971_54218__$1);
var map__53980_54225__$1 = cljs.core.__destructure_map(map__53980_54224);
var task_54226 = map__53980_54225__$1;
var fn_str_54227 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53980_54225__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53980_54225__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54229 = goog.getObjectByName(fn_str_54227,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54228)));

(fn_obj_54229.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54229.cljs$core$IFn$_invoke$arity$2(path,new_link_54202) : fn_obj_54229.call(null,path,new_link_54202));


var G__54230 = cljs.core.next(seq__53971_54218__$1);
var G__54231 = null;
var G__54232 = (0);
var G__54233 = (0);
seq__53971_54203 = G__54230;
chunk__53973_54204 = G__54231;
count__53974_54205 = G__54232;
i__53975_54206 = G__54233;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_54200);
});})(seq__53938_54196,chunk__53942_54197,count__53943_54198,i__53944_54199,seq__53770,chunk__53772,count__53773,i__53774,new_link_54202,path_match_54201,node_54200,path,seq__53770__$1,temp__5825__auto__,map__53769,map__53769__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54201], 0));

goog.dom.insertSiblingAfter(new_link_54202,node_54200);


var G__54234 = seq__53938_54196;
var G__54235 = chunk__53942_54197;
var G__54236 = count__53943_54198;
var G__54237 = (i__53944_54199 + (1));
seq__53938_54196 = G__54234;
chunk__53942_54197 = G__54235;
count__53943_54198 = G__54236;
i__53944_54199 = G__54237;
continue;
} else {
var G__54238 = seq__53938_54196;
var G__54239 = chunk__53942_54197;
var G__54240 = count__53943_54198;
var G__54241 = (i__53944_54199 + (1));
seq__53938_54196 = G__54238;
chunk__53942_54197 = G__54239;
count__53943_54198 = G__54240;
i__53944_54199 = G__54241;
continue;
}
} else {
var G__54242 = seq__53938_54196;
var G__54243 = chunk__53942_54197;
var G__54244 = count__53943_54198;
var G__54245 = (i__53944_54199 + (1));
seq__53938_54196 = G__54242;
chunk__53942_54197 = G__54243;
count__53943_54198 = G__54244;
i__53944_54199 = G__54245;
continue;
}
} else {
var temp__5825__auto___54246__$1 = cljs.core.seq(seq__53938_54196);
if(temp__5825__auto___54246__$1){
var seq__53938_54247__$1 = temp__5825__auto___54246__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53938_54247__$1)){
var c__5694__auto___54248 = cljs.core.chunk_first(seq__53938_54247__$1);
var G__54249 = cljs.core.chunk_rest(seq__53938_54247__$1);
var G__54250 = c__5694__auto___54248;
var G__54251 = cljs.core.count(c__5694__auto___54248);
var G__54252 = (0);
seq__53938_54196 = G__54249;
chunk__53942_54197 = G__54250;
count__53943_54198 = G__54251;
i__53944_54199 = G__54252;
continue;
} else {
var node_54253 = cljs.core.first(seq__53938_54247__$1);
if(cljs.core.not(node_54253.shadow$old)){
var path_match_54254 = shadow.cljs.devtools.client.browser.match_paths(node_54253.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54254)){
var new_link_54255 = (function (){var G__53981 = node_54253.cloneNode(true);
G__53981.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54254)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__53981;
})();
(node_54253.shadow$old = true);

(new_link_54255.onload = ((function (seq__53938_54196,chunk__53942_54197,count__53943_54198,i__53944_54199,seq__53770,chunk__53772,count__53773,i__53774,new_link_54255,path_match_54254,node_54253,seq__53938_54247__$1,temp__5825__auto___54246__$1,path,seq__53770__$1,temp__5825__auto__,map__53769,map__53769__$1,msg,updates,reload_info){
return (function (e){
var seq__53982_54256 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__53984_54257 = null;
var count__53985_54258 = (0);
var i__53986_54259 = (0);
while(true){
if((i__53986_54259 < count__53985_54258)){
var map__53990_54260 = chunk__53984_54257.cljs$core$IIndexed$_nth$arity$2(null,i__53986_54259);
var map__53990_54261__$1 = cljs.core.__destructure_map(map__53990_54260);
var task_54262 = map__53990_54261__$1;
var fn_str_54263 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53990_54261__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54264 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53990_54261__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54265 = goog.getObjectByName(fn_str_54263,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54264)));

(fn_obj_54265.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54265.cljs$core$IFn$_invoke$arity$2(path,new_link_54255) : fn_obj_54265.call(null,path,new_link_54255));


var G__54266 = seq__53982_54256;
var G__54267 = chunk__53984_54257;
var G__54268 = count__53985_54258;
var G__54269 = (i__53986_54259 + (1));
seq__53982_54256 = G__54266;
chunk__53984_54257 = G__54267;
count__53985_54258 = G__54268;
i__53986_54259 = G__54269;
continue;
} else {
var temp__5825__auto___54270__$2 = cljs.core.seq(seq__53982_54256);
if(temp__5825__auto___54270__$2){
var seq__53982_54271__$1 = temp__5825__auto___54270__$2;
if(cljs.core.chunked_seq_QMARK_(seq__53982_54271__$1)){
var c__5694__auto___54272 = cljs.core.chunk_first(seq__53982_54271__$1);
var G__54273 = cljs.core.chunk_rest(seq__53982_54271__$1);
var G__54274 = c__5694__auto___54272;
var G__54275 = cljs.core.count(c__5694__auto___54272);
var G__54276 = (0);
seq__53982_54256 = G__54273;
chunk__53984_54257 = G__54274;
count__53985_54258 = G__54275;
i__53986_54259 = G__54276;
continue;
} else {
var map__53991_54277 = cljs.core.first(seq__53982_54271__$1);
var map__53991_54278__$1 = cljs.core.__destructure_map(map__53991_54277);
var task_54279 = map__53991_54278__$1;
var fn_str_54280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53991_54278__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53991_54278__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54282 = goog.getObjectByName(fn_str_54280,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54281)));

(fn_obj_54282.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54282.cljs$core$IFn$_invoke$arity$2(path,new_link_54255) : fn_obj_54282.call(null,path,new_link_54255));


var G__54283 = cljs.core.next(seq__53982_54271__$1);
var G__54284 = null;
var G__54285 = (0);
var G__54286 = (0);
seq__53982_54256 = G__54283;
chunk__53984_54257 = G__54284;
count__53985_54258 = G__54285;
i__53986_54259 = G__54286;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_54253);
});})(seq__53938_54196,chunk__53942_54197,count__53943_54198,i__53944_54199,seq__53770,chunk__53772,count__53773,i__53774,new_link_54255,path_match_54254,node_54253,seq__53938_54247__$1,temp__5825__auto___54246__$1,path,seq__53770__$1,temp__5825__auto__,map__53769,map__53769__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54254], 0));

goog.dom.insertSiblingAfter(new_link_54255,node_54253);


var G__54287 = cljs.core.next(seq__53938_54247__$1);
var G__54288 = null;
var G__54289 = (0);
var G__54290 = (0);
seq__53938_54196 = G__54287;
chunk__53942_54197 = G__54288;
count__53943_54198 = G__54289;
i__53944_54199 = G__54290;
continue;
} else {
var G__54291 = cljs.core.next(seq__53938_54247__$1);
var G__54292 = null;
var G__54293 = (0);
var G__54294 = (0);
seq__53938_54196 = G__54291;
chunk__53942_54197 = G__54292;
count__53943_54198 = G__54293;
i__53944_54199 = G__54294;
continue;
}
} else {
var G__54295 = cljs.core.next(seq__53938_54247__$1);
var G__54296 = null;
var G__54297 = (0);
var G__54298 = (0);
seq__53938_54196 = G__54295;
chunk__53942_54197 = G__54296;
count__53943_54198 = G__54297;
i__53944_54199 = G__54298;
continue;
}
}
} else {
}
}
break;
}


var G__54299 = cljs.core.next(seq__53770__$1);
var G__54300 = null;
var G__54301 = (0);
var G__54302 = (0);
seq__53770 = G__54299;
chunk__53772 = G__54300;
count__53773 = G__54301;
i__53774 = G__54302;
continue;
} else {
var G__54303 = cljs.core.next(seq__53770__$1);
var G__54304 = null;
var G__54305 = (0);
var G__54306 = (0);
seq__53770 = G__54303;
chunk__53772 = G__54304;
count__53773 = G__54305;
i__53774 = G__54306;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null))))))))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)+" ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM)+"]"),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__53993 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__53993) : success.call(null,G__53993));
}catch (e53992){var e = e53992;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__53994,success,fail){
var map__53995 = p__53994;
var map__53995__$1 = cljs.core.__destructure_map(map__53995);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53995__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__53997 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__53997) : success.call(null,G__53997));
}catch (e53996){var e = e53996;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__53998,done,error){
var map__53999 = p__53998;
var map__53999__$1 = cljs.core.__destructure_map(map__53999);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53999__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__54000,done,error){
var map__54001 = p__54000;
var map__54001__$1 = cljs.core.__destructure_map(map__54001);
var msg = map__54001__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54001__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54001__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54001__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__54002){
var map__54003 = p__54002;
var map__54003__$1 = cljs.core.__destructure_map(map__54003);
var src = map__54003__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54003__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5160__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5160__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__54004 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__54004) : done.call(null,G__54004));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__54005){
var map__54006 = p__54005;
var map__54006__$1 = cljs.core.__destructure_map(map__54006);
var msg__$1 = map__54006__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54006__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e54007){var ex = e54007;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__54008){
var map__54009 = p__54008;
var map__54009__$1 = cljs.core.__destructure_map(map__54009);
var env = map__54009__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54009__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg((""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))+" ready!"));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error((""+"Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."+" Is the watch for this build running?"));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__54010){
var map__54011 = p__54010;
var map__54011__$1 = cljs.core.__destructure_map(map__54011);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54011__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54011__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__54012){
var map__54013 = p__54012;
var map__54013__$1 = cljs.core.__destructure_map(map__54013);
var svc = map__54013__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54013__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

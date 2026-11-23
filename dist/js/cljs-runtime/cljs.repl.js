goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__46839){
var map__46841 = p__46839;
var map__46841__$1 = cljs.core.__destructure_map(map__46841);
var m = map__46841__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46841__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46841__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/");
} else {
return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)));
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46859_47163 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46860_47164 = null;
var count__46861_47165 = (0);
var i__46862_47166 = (0);
while(true){
if((i__46862_47166 < count__46861_47165)){
var f_47168 = chunk__46860_47164.cljs$core$IIndexed$_nth$arity$2(null,i__46862_47166);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_47168], 0));


var G__47169 = seq__46859_47163;
var G__47170 = chunk__46860_47164;
var G__47171 = count__46861_47165;
var G__47172 = (i__46862_47166 + (1));
seq__46859_47163 = G__47169;
chunk__46860_47164 = G__47170;
count__46861_47165 = G__47171;
i__46862_47166 = G__47172;
continue;
} else {
var temp__5825__auto___47173 = cljs.core.seq(seq__46859_47163);
if(temp__5825__auto___47173){
var seq__46859_47174__$1 = temp__5825__auto___47173;
if(cljs.core.chunked_seq_QMARK_(seq__46859_47174__$1)){
var c__5694__auto___47175 = cljs.core.chunk_first(seq__46859_47174__$1);
var G__47176 = cljs.core.chunk_rest(seq__46859_47174__$1);
var G__47177 = c__5694__auto___47175;
var G__47178 = cljs.core.count(c__5694__auto___47175);
var G__47179 = (0);
seq__46859_47163 = G__47176;
chunk__46860_47164 = G__47177;
count__46861_47165 = G__47178;
i__46862_47166 = G__47179;
continue;
} else {
var f_47180 = cljs.core.first(seq__46859_47174__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_47180], 0));


var G__47181 = cljs.core.next(seq__46859_47174__$1);
var G__47182 = null;
var G__47183 = (0);
var G__47184 = (0);
seq__46859_47163 = G__47181;
chunk__46860_47164 = G__47182;
count__46861_47165 = G__47183;
i__46862_47166 = G__47184;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_47185 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5162__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_47185], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_47185)))?cljs.core.second(arglists_47185):arglists_47185)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m)))], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/special_forms#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)))], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46918_47208 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46919_47209 = null;
var count__46920_47210 = (0);
var i__46921_47211 = (0);
while(true){
if((i__46921_47211 < count__46920_47210)){
var vec__46965_47212 = chunk__46919_47209.cljs$core$IIndexed$_nth$arity$2(null,i__46921_47211);
var name_47213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46965_47212,(0),null);
var map__46968_47214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46965_47212,(1),null);
var map__46968_47215__$1 = cljs.core.__destructure_map(map__46968_47214);
var doc_47216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46968_47215__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47217 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46968_47215__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_47213], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_47217], 0));

if(cljs.core.truth_(doc_47216)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_47216], 0));
} else {
}


var G__47220 = seq__46918_47208;
var G__47221 = chunk__46919_47209;
var G__47222 = count__46920_47210;
var G__47223 = (i__46921_47211 + (1));
seq__46918_47208 = G__47220;
chunk__46919_47209 = G__47221;
count__46920_47210 = G__47222;
i__46921_47211 = G__47223;
continue;
} else {
var temp__5825__auto___47224 = cljs.core.seq(seq__46918_47208);
if(temp__5825__auto___47224){
var seq__46918_47225__$1 = temp__5825__auto___47224;
if(cljs.core.chunked_seq_QMARK_(seq__46918_47225__$1)){
var c__5694__auto___47226 = cljs.core.chunk_first(seq__46918_47225__$1);
var G__47227 = cljs.core.chunk_rest(seq__46918_47225__$1);
var G__47228 = c__5694__auto___47226;
var G__47229 = cljs.core.count(c__5694__auto___47226);
var G__47230 = (0);
seq__46918_47208 = G__47227;
chunk__46919_47209 = G__47228;
count__46920_47210 = G__47229;
i__46921_47211 = G__47230;
continue;
} else {
var vec__46976_47231 = cljs.core.first(seq__46918_47225__$1);
var name_47232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46976_47231,(0),null);
var map__46979_47233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46976_47231,(1),null);
var map__46979_47234__$1 = cljs.core.__destructure_map(map__46979_47233);
var doc_47235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46979_47234__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46979_47234__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_47232], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_47236], 0));

if(cljs.core.truth_(doc_47235)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_47235], 0));
} else {
}


var G__47237 = cljs.core.next(seq__46918_47225__$1);
var G__47238 = null;
var G__47239 = (0);
var G__47240 = (0);
seq__46918_47208 = G__47237;
chunk__46919_47209 = G__47238;
count__46920_47210 = G__47239;
i__46921_47211 = G__47240;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5825__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5825__auto__)){
var fnspec = temp__5825__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__46988 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__46989 = null;
var count__46990 = (0);
var i__46991 = (0);
while(true){
if((i__46991 < count__46990)){
var role = chunk__46989.cljs$core$IIndexed$_nth$arity$2(null,i__46991);
var temp__5825__auto___47242__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___47242__$1)){
var spec_47243 = temp__5825__auto___47242__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_47243)], 0));
} else {
}


var G__47244 = seq__46988;
var G__47245 = chunk__46989;
var G__47246 = count__46990;
var G__47247 = (i__46991 + (1));
seq__46988 = G__47244;
chunk__46989 = G__47245;
count__46990 = G__47246;
i__46991 = G__47247;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__46988);
if(temp__5825__auto____$1){
var seq__46988__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__46988__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__46988__$1);
var G__47249 = cljs.core.chunk_rest(seq__46988__$1);
var G__47250 = c__5694__auto__;
var G__47251 = cljs.core.count(c__5694__auto__);
var G__47252 = (0);
seq__46988 = G__47249;
chunk__46989 = G__47250;
count__46990 = G__47251;
i__46991 = G__47252;
continue;
} else {
var role = cljs.core.first(seq__46988__$1);
var temp__5825__auto___47253__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___47253__$2)){
var spec_47254 = temp__5825__auto___47253__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_47254)], 0));
} else {
}


var G__47255 = cljs.core.next(seq__46988__$1);
var G__47256 = null;
var G__47257 = (0);
var G__47258 = (0);
seq__46988 = G__47255;
chunk__46989 = G__47256;
count__46990 = G__47257;
i__46991 = G__47258;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__47011 = datafied_throwable;
var map__47011__$1 = cljs.core.__destructure_map(map__47011);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47011__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47011__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47011__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__47012 = cljs.core.last(via);
var map__47012__$1 = cljs.core.__destructure_map(map__47012);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47012__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47012__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47012__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__47013 = data;
var map__47013__$1 = cljs.core.__destructure_map(map__47013);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47013__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47013__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47013__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__47014 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__47014__$1 = cljs.core.__destructure_map(map__47014);
var top_data = map__47014__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47014__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__47021 = phase;
var G__47021__$1 = (((G__47021 instanceof cljs.core.Keyword))?G__47021.fqn:null);
switch (G__47021__$1) {
case "read-source":
var map__47022 = data;
var map__47022__$1 = cljs.core.__destructure_map(map__47022);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47022__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47022__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__47023 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__47023__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47023,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__47023);
var G__47023__$2 = (cljs.core.truth_((function (){var fexpr__47026 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__47026.cljs$core$IFn$_invoke$arity$1 ? fexpr__47026.cljs$core$IFn$_invoke$arity$1(source) : fexpr__47026.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__47023__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__47023__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47023__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__47023__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__47029 = top_data;
var G__47029__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47029,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__47029);
var G__47029__$2 = (cljs.core.truth_((function (){var fexpr__47034 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__47034.cljs$core$IFn$_invoke$arity$1 ? fexpr__47034.cljs$core$IFn$_invoke$arity$1(source) : fexpr__47034.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__47029__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__47029__$1);
var G__47029__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47029__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__47029__$2);
var G__47029__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47029__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__47029__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47029__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__47029__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__47038 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47038,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47038,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47038,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47038,(3),null);
var G__47045 = top_data;
var G__47045__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47045,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__47045);
var G__47045__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47045__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__47045__$1);
var G__47045__$3 = (cljs.core.truth_((function (){var and__5160__auto__ = source__$1;
if(cljs.core.truth_(and__5160__auto__)){
return method;
} else {
return and__5160__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47045__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__47045__$2);
var G__47045__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47045__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__47045__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47045__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__47045__$4;
}

break;
case "execution":
var vec__47052 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47052,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47052,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47052,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47052,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__47007_SHARP_){
var or__5162__auto__ = (p1__47007_SHARP_ == null);
if(or__5162__auto__){
return or__5162__auto__;
} else {
var fexpr__47060 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__47060.cljs$core$IFn$_invoke$arity$1 ? fexpr__47060.cljs$core$IFn$_invoke$arity$1(p1__47007_SHARP_) : fexpr__47060.call(null,p1__47007_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return line;
}
})();
var G__47061 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__47061__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47061,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__47061);
var G__47061__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47061__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__47061__$1);
var G__47061__$3 = (cljs.core.truth_((function (){var or__5162__auto__ = fn;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var and__5160__auto__ = source__$1;
if(cljs.core.truth_(and__5160__auto__)){
return method;
} else {
return and__5160__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47061__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5162__auto__ = fn;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__47061__$2);
var G__47061__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47061__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__47061__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47061__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__47061__$4;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47021__$1))));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__47067){
var map__47068 = p__47067;
var map__47068__$1 = cljs.core.__destructure_map(map__47068);
var triage_data = map__47068__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47068__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47068__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47068__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47068__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47068__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47068__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47068__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47068__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = source;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "<cljs repl>";
}
})())+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = line;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (1);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column)?(""+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)):"")));
var class_name = cljs.core.name((function (){var or__5162__auto__ = class$;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":(""+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(simple_class)+")"));
var format = goog.string.format;
var G__47073 = phase;
var G__47073__$1 = (((G__47073 instanceof cljs.core.Keyword))?G__47073.fqn:null);
switch (G__47073__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__47074 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__47075 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__47076 = loc;
var G__47077 = (cljs.core.truth_(spec)?(function (){var sb__5816__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__47081_47283 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__47082_47284 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__47083_47285 = true;
var _STAR_print_fn_STAR__temp_val__47084_47286 = (function (x__5817__auto__){
return sb__5816__auto__.append(x__5817__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__47083_47285);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__47084_47286);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47065_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47065_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__47082_47284);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__47081_47283);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5816__auto__));
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__47074,G__47075,G__47076,G__47077) : format.call(null,G__47074,G__47075,G__47076,G__47077));

break;
case "macroexpansion":
var G__47088 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__47089 = cause_type;
var G__47090 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__47091 = loc;
var G__47092 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__47088,G__47089,G__47090,G__47091,G__47092) : format.call(null,G__47088,G__47089,G__47090,G__47091,G__47092));

break;
case "compile-syntax-check":
var G__47094 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__47095 = cause_type;
var G__47096 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__47097 = loc;
var G__47098 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__47094,G__47095,G__47096,G__47097,G__47098) : format.call(null,G__47094,G__47095,G__47096,G__47097,G__47098));

break;
case "compilation":
var G__47101 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__47102 = cause_type;
var G__47103 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__47104 = loc;
var G__47105 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__47101,G__47102,G__47103,G__47104,G__47105) : format.call(null,G__47101,G__47102,G__47103,G__47104,G__47105));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__47107 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__47108 = symbol;
var G__47109 = loc;
var G__47110 = (function (){var sb__5816__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__47114_47292 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__47115_47293 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__47116_47294 = true;
var _STAR_print_fn_STAR__temp_val__47117_47295 = (function (x__5817__auto__){
return sb__5816__auto__.append(x__5817__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__47116_47294);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__47117_47295);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47066_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47066_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__47115_47293);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__47114_47292);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5816__auto__));
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__47107,G__47108,G__47109,G__47110) : format.call(null,G__47107,G__47108,G__47109,G__47110));
} else {
var G__47137 = "Execution error%s at %s(%s).\n%s\n";
var G__47138 = cause_type;
var G__47139 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__47140 = loc;
var G__47141 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__47137,G__47138,G__47139,G__47140,G__47141) : format.call(null,G__47137,G__47138,G__47139,G__47140,G__47141));
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47073__$1))));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

goog.provide('fipp.edn');
fipp.edn.pretty_coll = (function fipp$edn$pretty_coll(p__38401,open,xs,sep,close,f){
var map__38402 = p__38401;
var map__38402__$1 = cljs.core.__destructure_map(map__38402);
var printer = map__38402__$1;
var print_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38402__$1,new cljs.core.Keyword(null,"print-level","print-level",-1825423733));
var print_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38402__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var printer__$1 = (function (){var G__38403 = printer;
if(cljs.core.truth_(print_level)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__38403,new cljs.core.Keyword(null,"print-level","print-level",-1825423733),cljs.core.dec);
} else {
return G__38403;
}
})();
var xform = cljs.core.comp.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(print_length)?cljs.core.take.cljs$core$IFn$_invoke$arity$1(print_length):cljs.core.identity),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__38395_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(printer__$1,p1__38395_SHARP_) : f.call(null,printer__$1,p1__38395_SHARP_));
})),cljs.core.interpose.cljs$core$IFn$_invoke$arity$1(sep));
var ys = ((((function (){var or__5162__auto__ = print_level;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (1);
}
})() > (0)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(xform,xs):"#");
var ellipsis = (cljs.core.truth_((function (){var and__5160__auto__ = print_length;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(print_length,xs));
} else {
return and__5160__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),sep,"..."], null):null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),open,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),ys,ellipsis], null),close], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {fipp.visit.IVisitor}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
fipp.edn.EdnPrinter = (function (symbols,print_meta,print_length,print_level,__meta,__extmap,__hash){
this.symbols = symbols;
this.print_meta = print_meta;
this.print_length = print_length;
this.print_level = print_level;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(fipp.edn.EdnPrinter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(fipp.edn.EdnPrinter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k38417,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__38431 = k38417;
var G__38431__$1 = (((G__38431 instanceof cljs.core.Keyword))?G__38431.fqn:null);
switch (G__38431__$1) {
case "symbols":
return self__.symbols;

break;
case "print-meta":
return self__.print_meta;

break;
case "print-length":
return self__.print_length;

break;
case "print-level":
return self__.print_level;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38417,else__5472__auto__);

}
}));

(fipp.edn.EdnPrinter.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__38435){
var vec__38436 = p__38435;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38436,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38436,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(fipp.edn.EdnPrinter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#fipp.edn.EdnPrinter{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbols","symbols",1211743),self__.symbols],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),self__.print_meta],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"print-length","print-length",1931866356),self__.print_length],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"print-level","print-level",-1825423733),self__.print_level],null))], null),self__.__extmap));
}));

(fipp.edn.EdnPrinter.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38416){
var self__ = this;
var G__38416__$1 = this;
return (new cljs.core.RecordIter((0),G__38416__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbols","symbols",1211743),new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),new cljs.core.Keyword(null,"print-length","print-length",1931866356),new cljs.core.Keyword(null,"print-level","print-level",-1825423733)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(fipp.edn.EdnPrinter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(fipp.edn.EdnPrinter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new fipp.edn.EdnPrinter(self__.symbols,self__.print_meta,self__.print_length,self__.print_level,self__.__meta,self__.__extmap,self__.__hash));
}));

(fipp.edn.EdnPrinter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$ = cljs.core.PROTOCOL_SENTINEL);

(fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_record$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return fipp.visit.visit(this$__$1,fipp.ednize.record__GT_tagged(x));
}));

(fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_meta$arity$3 = (function (this$,m,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.print_meta)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"^",fipp.visit.visit(this$__$1,m)], null),new cljs.core.Keyword(null,"line","line",212345235),fipp.visit.visit_STAR_(this$__$1,x)], null);
} else {
return fipp.visit.visit_STAR_(this$__$1,x);
}
}));

(fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_number$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var _STAR_print_dup_STAR__orig_val__38456 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_dup_STAR__temp_val__38457 = false;
(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__38457);

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0))], null);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__38456);
}}));

(fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_pattern$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0))], null);
}));

(fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_unknown$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return fipp.visit.visit(this$__$1,fipp.ednize.edn(x));
}));

(fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_symbol$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))], null);
}));

(fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_seq$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var temp__5823__auto__ = (function (){var G__38458 = cljs.core.first(x);
return (self__.symbols.cljs$core$IFn$_invoke$arity$1 ? self__.symbols.cljs$core$IFn$_invoke$arity$1(G__38458) : self__.symbols.call(null,G__38458));
})();
if(cljs.core.truth_(temp__5823__auto__)){
var pretty = temp__5823__auto__;
return (pretty.cljs$core$IFn$_invoke$arity$2 ? pretty.cljs$core$IFn$_invoke$arity$2(this$__$1,x) : pretty.call(null,this$__$1,x));
} else {
return fipp.edn.pretty_coll(this$__$1,"(",x,new cljs.core.Keyword(null,"line","line",212345235),")",fipp.visit.visit);
}
}));

(fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_boolean$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))], null);
}));

(fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_tagged$arity$2 = (function (this$,p__38462){
var self__ = this;
var map__38463 = p__38462;
var map__38463__$1 = cljs.core.__destructure_map(map__38463);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38463__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38463__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"#",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)),(cljs.core.truth_((function (){var or__5162__auto__ = (function (){var and__5160__auto__ = self__.print_meta;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.meta(form);
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (!(cljs.core.coll_QMARK_(form)));
}
})())?" ":null),fipp.visit.visit(this$__$1,form)], null);
}));

(fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_keyword$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))], null);
}));

(fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_map$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return fipp.edn.pretty_coll(this$__$1,"{",x,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),",",new cljs.core.Keyword(null,"line","line",212345235)], null),"}",(function (printer,p__38467){
var vec__38468 = p__38467;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38468,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38468,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit(printer,k)," ",fipp.visit.visit(printer,v)], null);
}));
}));

(fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_nil$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),"nil"], null);
}));

(fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_character$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),(function (){var _STAR_print_readably_STAR__orig_val__38472 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_readably_STAR__temp_val__38473 = true;
(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__38473);

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
}finally {(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__38472);
}})()], null);
}));

(fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_string$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),(function (){var _STAR_print_readably_STAR__orig_val__38474 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_readably_STAR__temp_val__38475 = true;
(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__38475);

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
}finally {(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__38474);
}})()], null);
}));

(fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_var$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))], null);
}));

(fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_set$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return fipp.edn.pretty_coll(this$__$1,"#{",x,new cljs.core.Keyword(null,"line","line",212345235),"}",fipp.visit.visit);
}));

(fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_vector$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return fipp.edn.pretty_coll(this$__$1,"[",x,new cljs.core.Keyword(null,"line","line",212345235),"]",fipp.visit.visit);
}));

(fipp.edn.EdnPrinter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (222486956 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(fipp.edn.EdnPrinter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38418,other38419){
var self__ = this;
var this38418__$1 = this;
return (((!((other38419 == null)))) && ((((this38418__$1.constructor === other38419.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38418__$1.symbols,other38419.symbols)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38418__$1.print_meta,other38419.print_meta)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38418__$1.print_length,other38419.print_length)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38418__$1.print_level,other38419.print_level)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38418__$1.__extmap,other38419.__extmap)))))))))))));
}));

(fipp.edn.EdnPrinter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),null,new cljs.core.Keyword(null,"print-level","print-level",-1825423733),null,new cljs.core.Keyword(null,"print-length","print-length",1931866356),null,new cljs.core.Keyword(null,"symbols","symbols",1211743),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new fipp.edn.EdnPrinter(self__.symbols,self__.print_meta,self__.print_length,self__.print_level,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(fipp.edn.EdnPrinter.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k38417){
var self__ = this;
var this__5476__auto____$1 = this;
var G__38485 = k38417;
var G__38485__$1 = (((G__38485 instanceof cljs.core.Keyword))?G__38485.fqn:null);
switch (G__38485__$1) {
case "symbols":
case "print-meta":
case "print-length":
case "print-level":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k38417);

}
}));

(fipp.edn.EdnPrinter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__38416){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__38488 = cljs.core.keyword_identical_QMARK_;
var expr__38489 = k__5478__auto__;
if(cljs.core.truth_((pred__38488.cljs$core$IFn$_invoke$arity$2 ? pred__38488.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbols","symbols",1211743),expr__38489) : pred__38488.call(null,new cljs.core.Keyword(null,"symbols","symbols",1211743),expr__38489)))){
return (new fipp.edn.EdnPrinter(G__38416,self__.print_meta,self__.print_length,self__.print_level,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38488.cljs$core$IFn$_invoke$arity$2 ? pred__38488.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),expr__38489) : pred__38488.call(null,new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),expr__38489)))){
return (new fipp.edn.EdnPrinter(self__.symbols,G__38416,self__.print_length,self__.print_level,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38488.cljs$core$IFn$_invoke$arity$2 ? pred__38488.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"print-length","print-length",1931866356),expr__38489) : pred__38488.call(null,new cljs.core.Keyword(null,"print-length","print-length",1931866356),expr__38489)))){
return (new fipp.edn.EdnPrinter(self__.symbols,self__.print_meta,G__38416,self__.print_level,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38488.cljs$core$IFn$_invoke$arity$2 ? pred__38488.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"print-level","print-level",-1825423733),expr__38489) : pred__38488.call(null,new cljs.core.Keyword(null,"print-level","print-level",-1825423733),expr__38489)))){
return (new fipp.edn.EdnPrinter(self__.symbols,self__.print_meta,self__.print_length,G__38416,self__.__meta,self__.__extmap,null));
} else {
return (new fipp.edn.EdnPrinter(self__.symbols,self__.print_meta,self__.print_length,self__.print_level,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__38416),null));
}
}
}
}
}));

(fipp.edn.EdnPrinter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"symbols","symbols",1211743),self__.symbols,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),self__.print_meta,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"print-length","print-length",1931866356),self__.print_length,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"print-level","print-level",-1825423733),self__.print_level,null))], null),self__.__extmap));
}));

(fipp.edn.EdnPrinter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__38416){
var self__ = this;
var this__5468__auto____$1 = this;
return (new fipp.edn.EdnPrinter(self__.symbols,self__.print_meta,self__.print_length,self__.print_level,G__38416,self__.__extmap,self__.__hash));
}));

(fipp.edn.EdnPrinter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(fipp.edn.EdnPrinter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbols","symbols",1641743270,null),new cljs.core.Symbol(null,"print-meta","print-meta",-1620321171,null),new cljs.core.Symbol(null,"print-length","print-length",-722569413,null),new cljs.core.Symbol(null,"print-level","print-level",-184892206,null)], null);
}));

(fipp.edn.EdnPrinter.cljs$lang$type = true);

(fipp.edn.EdnPrinter.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"fipp.edn/EdnPrinter",null,(1),null));
}));

(fipp.edn.EdnPrinter.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"fipp.edn/EdnPrinter");
}));

/**
 * Positional factory function for fipp.edn/EdnPrinter.
 */
fipp.edn.__GT_EdnPrinter = (function fipp$edn$__GT_EdnPrinter(symbols,print_meta,print_length,print_level){
return (new fipp.edn.EdnPrinter(symbols,print_meta,print_length,print_level,null,null,null));
});

/**
 * Factory function for fipp.edn/EdnPrinter, taking a map of keywords to field values.
 */
fipp.edn.map__GT_EdnPrinter = (function fipp$edn$map__GT_EdnPrinter(G__38422){
var extmap__5511__auto__ = (function (){var G__38501 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38422,new cljs.core.Keyword(null,"symbols","symbols",1211743),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),new cljs.core.Keyword(null,"print-length","print-length",1931866356),new cljs.core.Keyword(null,"print-level","print-level",-1825423733)], 0));
if(cljs.core.record_QMARK_(G__38422)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38501);
} else {
return G__38501;
}
})();
return (new fipp.edn.EdnPrinter(new cljs.core.Keyword(null,"symbols","symbols",1211743).cljs$core$IFn$_invoke$arity$1(G__38422),new cljs.core.Keyword(null,"print-meta","print-meta",1034114598).cljs$core$IFn$_invoke$arity$1(G__38422),new cljs.core.Keyword(null,"print-length","print-length",1931866356).cljs$core$IFn$_invoke$arity$1(G__38422),new cljs.core.Keyword(null,"print-level","print-level",-1825423733).cljs$core$IFn$_invoke$arity$1(G__38422),null,cljs.core.not_empty(extmap__5511__auto__),null));
});

fipp.edn.pretty = (function fipp$edn$pretty(var_args){
var G__38505 = arguments.length;
switch (G__38505) {
case 1:
return fipp.edn.pretty.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fipp.edn.pretty.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(fipp.edn.pretty.cljs$core$IFn$_invoke$arity$1 = (function (x){
return fipp.edn.pretty.cljs$core$IFn$_invoke$arity$2(x,cljs.core.PersistentArrayMap.EMPTY);
}));

(fipp.edn.pretty.cljs$core$IFn$_invoke$arity$2 = (function (x,options){
var defaults = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"symbols","symbols",1211743),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"print-length","print-length",1931866356),cljs.core._STAR_print_length_STAR_,new cljs.core.Keyword(null,"print-level","print-level",-1825423733),cljs.core._STAR_print_level_STAR_,new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),cljs.core._STAR_print_meta_STAR_], null);
var printer = fipp.edn.map__GT_EdnPrinter(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,options], 0)));
var _STAR_print_meta_STAR__orig_val__38513 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_meta_STAR__temp_val__38514 = false;
(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__38514);

try{return fipp.visit.visit(printer,x);
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__38513);
}}));

(fipp.edn.pretty.cljs$lang$maxFixedArity = 2);

fipp.edn.pprint = (function fipp$edn$pprint(var_args){
var G__38520 = arguments.length;
switch (G__38520) {
case 1:
return fipp.edn.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fipp.edn.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(fipp.edn.pprint.cljs$core$IFn$_invoke$arity$1 = (function (x){
return fipp.edn.pprint.cljs$core$IFn$_invoke$arity$2(x,cljs.core.PersistentArrayMap.EMPTY);
}));

(fipp.edn.pprint.cljs$core$IFn$_invoke$arity$2 = (function (x,options){
return fipp.engine.pprint_document.cljs$core$IFn$_invoke$arity$2(fipp.edn.pretty.cljs$core$IFn$_invoke$arity$2(x,options),options);
}));

(fipp.edn.pprint.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=fipp.edn.js.map

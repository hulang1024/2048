goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_48127 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_48127(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_48133 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_48133(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__47055 = coll;
var G__47056 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47055,G__47056) : shadow.dom.lazy_native_coll_seq.call(null,G__47055,G__47056));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5162__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__47100 = arguments.length;
switch (G__47100) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__47121 = arguments.length;
switch (G__47121) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__47153 = arguments.length;
switch (G__47153) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__47167 = arguments.length;
switch (G__47167) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__47248 = arguments.length;
switch (G__47248) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__47262 = arguments.length;
switch (G__47262) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5162__auto__ = (!((typeof document !== 'undefined')));
if(or__5162__auto__){
return or__5162__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e47269){if((e47269 instanceof Object)){
var e = e47269;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47269;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5162__auto__ = (!((typeof document !== 'undefined')));
if(or__5162__auto__){
return or__5162__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__47291 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47296 = null;
var count__47297 = (0);
var i__47298 = (0);
while(true){
if((i__47298 < count__47297)){
var el = chunk__47296.cljs$core$IIndexed$_nth$arity$2(null,i__47298);
var handler_48320__$1 = ((function (seq__47291,chunk__47296,count__47297,i__47298,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47291,chunk__47296,count__47297,i__47298,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48320__$1);


var G__48326 = seq__47291;
var G__48327 = chunk__47296;
var G__48328 = count__47297;
var G__48329 = (i__47298 + (1));
seq__47291 = G__48326;
chunk__47296 = G__48327;
count__47297 = G__48328;
i__47298 = G__48329;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__47291);
if(temp__5825__auto__){
var seq__47291__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47291__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__47291__$1);
var G__48337 = cljs.core.chunk_rest(seq__47291__$1);
var G__48338 = c__5694__auto__;
var G__48339 = cljs.core.count(c__5694__auto__);
var G__48340 = (0);
seq__47291 = G__48337;
chunk__47296 = G__48338;
count__47297 = G__48339;
i__47298 = G__48340;
continue;
} else {
var el = cljs.core.first(seq__47291__$1);
var handler_48341__$1 = ((function (seq__47291,chunk__47296,count__47297,i__47298,el,seq__47291__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47291,chunk__47296,count__47297,i__47298,el,seq__47291__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48341__$1);


var G__48344 = cljs.core.next(seq__47291__$1);
var G__48345 = null;
var G__48346 = (0);
var G__48347 = (0);
seq__47291 = G__48344;
chunk__47296 = G__48345;
count__47297 = G__48346;
i__47298 = G__48347;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__47316 = arguments.length;
switch (G__47316) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__47336 = cljs.core.seq(events);
var chunk__47337 = null;
var count__47338 = (0);
var i__47339 = (0);
while(true){
if((i__47339 < count__47338)){
var vec__47357 = chunk__47337.cljs$core$IIndexed$_nth$arity$2(null,i__47339);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47357,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47357,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48359 = seq__47336;
var G__48360 = chunk__47337;
var G__48361 = count__47338;
var G__48362 = (i__47339 + (1));
seq__47336 = G__48359;
chunk__47337 = G__48360;
count__47338 = G__48361;
i__47339 = G__48362;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__47336);
if(temp__5825__auto__){
var seq__47336__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47336__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__47336__$1);
var G__48364 = cljs.core.chunk_rest(seq__47336__$1);
var G__48365 = c__5694__auto__;
var G__48366 = cljs.core.count(c__5694__auto__);
var G__48367 = (0);
seq__47336 = G__48364;
chunk__47337 = G__48365;
count__47338 = G__48366;
i__47339 = G__48367;
continue;
} else {
var vec__47360 = cljs.core.first(seq__47336__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47360,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47360,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48372 = cljs.core.next(seq__47336__$1);
var G__48373 = null;
var G__48374 = (0);
var G__48375 = (0);
seq__47336 = G__48372;
chunk__47337 = G__48373;
count__47338 = G__48374;
i__47339 = G__48375;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__47364 = cljs.core.seq(styles);
var chunk__47365 = null;
var count__47366 = (0);
var i__47367 = (0);
while(true){
if((i__47367 < count__47366)){
var vec__47383 = chunk__47365.cljs$core$IIndexed$_nth$arity$2(null,i__47367);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47383,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47383,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48377 = seq__47364;
var G__48378 = chunk__47365;
var G__48379 = count__47366;
var G__48380 = (i__47367 + (1));
seq__47364 = G__48377;
chunk__47365 = G__48378;
count__47366 = G__48379;
i__47367 = G__48380;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__47364);
if(temp__5825__auto__){
var seq__47364__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47364__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__47364__$1);
var G__48384 = cljs.core.chunk_rest(seq__47364__$1);
var G__48385 = c__5694__auto__;
var G__48386 = cljs.core.count(c__5694__auto__);
var G__48387 = (0);
seq__47364 = G__48384;
chunk__47365 = G__48385;
count__47366 = G__48386;
i__47367 = G__48387;
continue;
} else {
var vec__47390 = cljs.core.first(seq__47364__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47390,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47390,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48395 = cljs.core.next(seq__47364__$1);
var G__48396 = null;
var G__48397 = (0);
var G__48398 = (0);
seq__47364 = G__48395;
chunk__47365 = G__48396;
count__47366 = G__48397;
i__47367 = G__48398;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__47396_48400 = key;
var G__47396_48401__$1 = (((G__47396_48400 instanceof cljs.core.Keyword))?G__47396_48400.fqn:null);
switch (G__47396_48401__$1) {
case "id":
(el.id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "class":
(el.className = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_48418 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5162__auto__ = goog.string.startsWith(ks_48418,"data-");
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return goog.string.startsWith(ks_48418,"aria-");
}
})())){
el.setAttribute(ks_48418,value);
} else {
(el[ks_48418] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class));
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw (""+"cant have id after class?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47418){
var map__47419 = p__47418;
var map__47419__$1 = cljs.core.__destructure_map(map__47419);
var props = map__47419__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47419__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47421 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47421,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47421,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47421,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47426 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47426,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47426;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47431 = arguments.length;
switch (G__47431) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47444){
var vec__47445 = p__47444;
var seq__47446 = cljs.core.seq(vec__47445);
var first__47447 = cljs.core.first(seq__47446);
var seq__47446__$1 = cljs.core.next(seq__47446);
var nn = first__47447;
var first__47447__$1 = cljs.core.first(seq__47446__$1);
var seq__47446__$2 = cljs.core.next(seq__47446__$1);
var np = first__47447__$1;
var nc = seq__47446__$2;
var node = vec__47445;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47448 = nn;
var G__47449 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47448,G__47449) : create_fn.call(null,G__47448,G__47449));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47459 = nn;
var G__47460 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47459,G__47460) : create_fn.call(null,G__47459,G__47460));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47485 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47485,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47485,(1),null);
var seq__47494_48505 = cljs.core.seq(node_children);
var chunk__47495_48506 = null;
var count__47496_48507 = (0);
var i__47497_48508 = (0);
while(true){
if((i__47497_48508 < count__47496_48507)){
var child_struct_48513 = chunk__47495_48506.cljs$core$IIndexed$_nth$arity$2(null,i__47497_48508);
var children_48518 = shadow.dom.dom_node(child_struct_48513);
if(cljs.core.seq_QMARK_(children_48518)){
var seq__47538_48519 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48518));
var chunk__47540_48520 = null;
var count__47541_48521 = (0);
var i__47542_48522 = (0);
while(true){
if((i__47542_48522 < count__47541_48521)){
var child_48524 = chunk__47540_48520.cljs$core$IIndexed$_nth$arity$2(null,i__47542_48522);
if(cljs.core.truth_(child_48524)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48524);


var G__48525 = seq__47538_48519;
var G__48526 = chunk__47540_48520;
var G__48527 = count__47541_48521;
var G__48528 = (i__47542_48522 + (1));
seq__47538_48519 = G__48525;
chunk__47540_48520 = G__48526;
count__47541_48521 = G__48527;
i__47542_48522 = G__48528;
continue;
} else {
var G__48529 = seq__47538_48519;
var G__48530 = chunk__47540_48520;
var G__48531 = count__47541_48521;
var G__48532 = (i__47542_48522 + (1));
seq__47538_48519 = G__48529;
chunk__47540_48520 = G__48530;
count__47541_48521 = G__48531;
i__47542_48522 = G__48532;
continue;
}
} else {
var temp__5825__auto___48534 = cljs.core.seq(seq__47538_48519);
if(temp__5825__auto___48534){
var seq__47538_48536__$1 = temp__5825__auto___48534;
if(cljs.core.chunked_seq_QMARK_(seq__47538_48536__$1)){
var c__5694__auto___48538 = cljs.core.chunk_first(seq__47538_48536__$1);
var G__48539 = cljs.core.chunk_rest(seq__47538_48536__$1);
var G__48540 = c__5694__auto___48538;
var G__48541 = cljs.core.count(c__5694__auto___48538);
var G__48542 = (0);
seq__47538_48519 = G__48539;
chunk__47540_48520 = G__48540;
count__47541_48521 = G__48541;
i__47542_48522 = G__48542;
continue;
} else {
var child_48543 = cljs.core.first(seq__47538_48536__$1);
if(cljs.core.truth_(child_48543)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48543);


var G__48545 = cljs.core.next(seq__47538_48536__$1);
var G__48546 = null;
var G__48547 = (0);
var G__48548 = (0);
seq__47538_48519 = G__48545;
chunk__47540_48520 = G__48546;
count__47541_48521 = G__48547;
i__47542_48522 = G__48548;
continue;
} else {
var G__48549 = cljs.core.next(seq__47538_48536__$1);
var G__48550 = null;
var G__48551 = (0);
var G__48552 = (0);
seq__47538_48519 = G__48549;
chunk__47540_48520 = G__48550;
count__47541_48521 = G__48551;
i__47542_48522 = G__48552;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48518);
}


var G__48553 = seq__47494_48505;
var G__48554 = chunk__47495_48506;
var G__48555 = count__47496_48507;
var G__48556 = (i__47497_48508 + (1));
seq__47494_48505 = G__48553;
chunk__47495_48506 = G__48554;
count__47496_48507 = G__48555;
i__47497_48508 = G__48556;
continue;
} else {
var temp__5825__auto___48557 = cljs.core.seq(seq__47494_48505);
if(temp__5825__auto___48557){
var seq__47494_48558__$1 = temp__5825__auto___48557;
if(cljs.core.chunked_seq_QMARK_(seq__47494_48558__$1)){
var c__5694__auto___48559 = cljs.core.chunk_first(seq__47494_48558__$1);
var G__48560 = cljs.core.chunk_rest(seq__47494_48558__$1);
var G__48561 = c__5694__auto___48559;
var G__48562 = cljs.core.count(c__5694__auto___48559);
var G__48563 = (0);
seq__47494_48505 = G__48560;
chunk__47495_48506 = G__48561;
count__47496_48507 = G__48562;
i__47497_48508 = G__48563;
continue;
} else {
var child_struct_48564 = cljs.core.first(seq__47494_48558__$1);
var children_48567 = shadow.dom.dom_node(child_struct_48564);
if(cljs.core.seq_QMARK_(children_48567)){
var seq__47551_48568 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48567));
var chunk__47553_48569 = null;
var count__47554_48570 = (0);
var i__47555_48571 = (0);
while(true){
if((i__47555_48571 < count__47554_48570)){
var child_48572 = chunk__47553_48569.cljs$core$IIndexed$_nth$arity$2(null,i__47555_48571);
if(cljs.core.truth_(child_48572)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48572);


var G__48573 = seq__47551_48568;
var G__48574 = chunk__47553_48569;
var G__48575 = count__47554_48570;
var G__48576 = (i__47555_48571 + (1));
seq__47551_48568 = G__48573;
chunk__47553_48569 = G__48574;
count__47554_48570 = G__48575;
i__47555_48571 = G__48576;
continue;
} else {
var G__48577 = seq__47551_48568;
var G__48578 = chunk__47553_48569;
var G__48579 = count__47554_48570;
var G__48580 = (i__47555_48571 + (1));
seq__47551_48568 = G__48577;
chunk__47553_48569 = G__48578;
count__47554_48570 = G__48579;
i__47555_48571 = G__48580;
continue;
}
} else {
var temp__5825__auto___48581__$1 = cljs.core.seq(seq__47551_48568);
if(temp__5825__auto___48581__$1){
var seq__47551_48582__$1 = temp__5825__auto___48581__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47551_48582__$1)){
var c__5694__auto___48583 = cljs.core.chunk_first(seq__47551_48582__$1);
var G__48584 = cljs.core.chunk_rest(seq__47551_48582__$1);
var G__48585 = c__5694__auto___48583;
var G__48586 = cljs.core.count(c__5694__auto___48583);
var G__48587 = (0);
seq__47551_48568 = G__48584;
chunk__47553_48569 = G__48585;
count__47554_48570 = G__48586;
i__47555_48571 = G__48587;
continue;
} else {
var child_48588 = cljs.core.first(seq__47551_48582__$1);
if(cljs.core.truth_(child_48588)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48588);


var G__48589 = cljs.core.next(seq__47551_48582__$1);
var G__48590 = null;
var G__48591 = (0);
var G__48592 = (0);
seq__47551_48568 = G__48589;
chunk__47553_48569 = G__48590;
count__47554_48570 = G__48591;
i__47555_48571 = G__48592;
continue;
} else {
var G__48593 = cljs.core.next(seq__47551_48582__$1);
var G__48594 = null;
var G__48595 = (0);
var G__48596 = (0);
seq__47551_48568 = G__48593;
chunk__47553_48569 = G__48594;
count__47554_48570 = G__48595;
i__47555_48571 = G__48596;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48567);
}


var G__48597 = cljs.core.next(seq__47494_48558__$1);
var G__48598 = null;
var G__48599 = (0);
var G__48600 = (0);
seq__47494_48505 = G__48597;
chunk__47495_48506 = G__48598;
count__47496_48507 = G__48599;
i__47497_48508 = G__48600;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__47594 = cljs.core.seq(node);
var chunk__47595 = null;
var count__47596 = (0);
var i__47597 = (0);
while(true){
if((i__47597 < count__47596)){
var n = chunk__47595.cljs$core$IIndexed$_nth$arity$2(null,i__47597);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48601 = seq__47594;
var G__48602 = chunk__47595;
var G__48603 = count__47596;
var G__48604 = (i__47597 + (1));
seq__47594 = G__48601;
chunk__47595 = G__48602;
count__47596 = G__48603;
i__47597 = G__48604;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__47594);
if(temp__5825__auto__){
var seq__47594__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47594__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__47594__$1);
var G__48605 = cljs.core.chunk_rest(seq__47594__$1);
var G__48606 = c__5694__auto__;
var G__48607 = cljs.core.count(c__5694__auto__);
var G__48608 = (0);
seq__47594 = G__48605;
chunk__47595 = G__48606;
count__47596 = G__48607;
i__47597 = G__48608;
continue;
} else {
var n = cljs.core.first(seq__47594__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48609 = cljs.core.next(seq__47594__$1);
var G__48610 = null;
var G__48611 = (0);
var G__48612 = (0);
seq__47594 = G__48609;
chunk__47595 = G__48610;
count__47596 = G__48611;
i__47597 = G__48612;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__47604 = arguments.length;
switch (G__47604) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__47610 = arguments.length;
switch (G__47610) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__47626 = arguments.length;
switch (G__47626) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5162__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5903__auto__ = [];
var len__5897__auto___48630 = arguments.length;
var i__5898__auto___48631 = (0);
while(true){
if((i__5898__auto___48631 < len__5897__auto___48630)){
args__5903__auto__.push((arguments[i__5898__auto___48631]));

var G__48633 = (i__5898__auto___48631 + (1));
i__5898__auto___48631 = G__48633;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__47646_48634 = cljs.core.seq(nodes);
var chunk__47647_48635 = null;
var count__47648_48636 = (0);
var i__47649_48637 = (0);
while(true){
if((i__47649_48637 < count__47648_48636)){
var node_48638 = chunk__47647_48635.cljs$core$IIndexed$_nth$arity$2(null,i__47649_48637);
fragment.appendChild(shadow.dom._to_dom(node_48638));


var G__48639 = seq__47646_48634;
var G__48640 = chunk__47647_48635;
var G__48641 = count__47648_48636;
var G__48642 = (i__47649_48637 + (1));
seq__47646_48634 = G__48639;
chunk__47647_48635 = G__48640;
count__47648_48636 = G__48641;
i__47649_48637 = G__48642;
continue;
} else {
var temp__5825__auto___48643 = cljs.core.seq(seq__47646_48634);
if(temp__5825__auto___48643){
var seq__47646_48644__$1 = temp__5825__auto___48643;
if(cljs.core.chunked_seq_QMARK_(seq__47646_48644__$1)){
var c__5694__auto___48645 = cljs.core.chunk_first(seq__47646_48644__$1);
var G__48646 = cljs.core.chunk_rest(seq__47646_48644__$1);
var G__48647 = c__5694__auto___48645;
var G__48648 = cljs.core.count(c__5694__auto___48645);
var G__48649 = (0);
seq__47646_48634 = G__48646;
chunk__47647_48635 = G__48647;
count__47648_48636 = G__48648;
i__47649_48637 = G__48649;
continue;
} else {
var node_48650 = cljs.core.first(seq__47646_48644__$1);
fragment.appendChild(shadow.dom._to_dom(node_48650));


var G__48651 = cljs.core.next(seq__47646_48644__$1);
var G__48652 = null;
var G__48653 = (0);
var G__48654 = (0);
seq__47646_48634 = G__48651;
chunk__47647_48635 = G__48652;
count__47648_48636 = G__48653;
i__47649_48637 = G__48654;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq47634){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47634));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__47661_48655 = cljs.core.seq(scripts);
var chunk__47662_48656 = null;
var count__47663_48657 = (0);
var i__47664_48658 = (0);
while(true){
if((i__47664_48658 < count__47663_48657)){
var vec__47675_48660 = chunk__47662_48656.cljs$core$IIndexed$_nth$arity$2(null,i__47664_48658);
var script_tag_48661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47675_48660,(0),null);
var script_body_48662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47675_48660,(1),null);
eval(script_body_48662);


var G__48664 = seq__47661_48655;
var G__48665 = chunk__47662_48656;
var G__48666 = count__47663_48657;
var G__48667 = (i__47664_48658 + (1));
seq__47661_48655 = G__48664;
chunk__47662_48656 = G__48665;
count__47663_48657 = G__48666;
i__47664_48658 = G__48667;
continue;
} else {
var temp__5825__auto___48669 = cljs.core.seq(seq__47661_48655);
if(temp__5825__auto___48669){
var seq__47661_48671__$1 = temp__5825__auto___48669;
if(cljs.core.chunked_seq_QMARK_(seq__47661_48671__$1)){
var c__5694__auto___48672 = cljs.core.chunk_first(seq__47661_48671__$1);
var G__48673 = cljs.core.chunk_rest(seq__47661_48671__$1);
var G__48674 = c__5694__auto___48672;
var G__48675 = cljs.core.count(c__5694__auto___48672);
var G__48676 = (0);
seq__47661_48655 = G__48673;
chunk__47662_48656 = G__48674;
count__47663_48657 = G__48675;
i__47664_48658 = G__48676;
continue;
} else {
var vec__47678_48677 = cljs.core.first(seq__47661_48671__$1);
var script_tag_48678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47678_48677,(0),null);
var script_body_48679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47678_48677,(1),null);
eval(script_body_48679);


var G__48684 = cljs.core.next(seq__47661_48671__$1);
var G__48685 = null;
var G__48686 = (0);
var G__48687 = (0);
seq__47661_48655 = G__48684;
chunk__47662_48656 = G__48685;
count__47663_48657 = G__48686;
i__47664_48658 = G__48687;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__47681){
var vec__47682 = p__47681;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47682,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47682,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__47695 = arguments.length;
switch (G__47695) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | 0))+"px");
});
shadow.dom.pct = (function shadow$dom$pct(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+"%");
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__47707 = cljs.core.seq(style_keys);
var chunk__47708 = null;
var count__47709 = (0);
var i__47710 = (0);
while(true){
if((i__47710 < count__47709)){
var it = chunk__47708.cljs$core$IIndexed$_nth$arity$2(null,i__47710);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48692 = seq__47707;
var G__48693 = chunk__47708;
var G__48694 = count__47709;
var G__48695 = (i__47710 + (1));
seq__47707 = G__48692;
chunk__47708 = G__48693;
count__47709 = G__48694;
i__47710 = G__48695;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__47707);
if(temp__5825__auto__){
var seq__47707__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47707__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__47707__$1);
var G__48696 = cljs.core.chunk_rest(seq__47707__$1);
var G__48697 = c__5694__auto__;
var G__48698 = cljs.core.count(c__5694__auto__);
var G__48699 = (0);
seq__47707 = G__48696;
chunk__47708 = G__48697;
count__47709 = G__48698;
i__47710 = G__48699;
continue;
} else {
var it = cljs.core.first(seq__47707__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48700 = cljs.core.next(seq__47707__$1);
var G__48701 = null;
var G__48702 = (0);
var G__48703 = (0);
seq__47707 = G__48700;
chunk__47708 = G__48701;
count__47709 = G__48702;
i__47710 = G__48703;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k47728,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__47747 = k47728;
var G__47747__$1 = (((G__47747 instanceof cljs.core.Keyword))?G__47747.fqn:null);
switch (G__47747__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47728,else__5472__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__47750){
var vec__47751 = p__47750;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47751,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47751,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47727){
var self__ = this;
var G__47727__$1 = this;
return (new cljs.core.RecordIter((0),G__47727__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47729,other47730){
var self__ = this;
var this47729__$1 = this;
return (((!((other47730 == null)))) && ((((this47729__$1.constructor === other47730.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47729__$1.x,other47730.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47729__$1.y,other47730.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47729__$1.__extmap,other47730.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k47728){
var self__ = this;
var this__5476__auto____$1 = this;
var G__47771 = k47728;
var G__47771__$1 = (((G__47771 instanceof cljs.core.Keyword))?G__47771.fqn:null);
switch (G__47771__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k47728);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__47727){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__47772 = cljs.core.keyword_identical_QMARK_;
var expr__47773 = k__5478__auto__;
if(cljs.core.truth_((pred__47772.cljs$core$IFn$_invoke$arity$2 ? pred__47772.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__47773) : pred__47772.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__47773)))){
return (new shadow.dom.Coordinate(G__47727,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47772.cljs$core$IFn$_invoke$arity$2 ? pred__47772.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__47773) : pred__47772.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__47773)))){
return (new shadow.dom.Coordinate(self__.x,G__47727,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__47727),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__47727){
var self__ = this;
var this__5468__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__47727,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__47731){
var extmap__5511__auto__ = (function (){var G__47792 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47731,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__47731)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47792);
} else {
return G__47792;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__47731),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__47731),null,cljs.core.not_empty(extmap__5511__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k47804,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__47812 = k47804;
var G__47812__$1 = (((G__47812 instanceof cljs.core.Keyword))?G__47812.fqn:null);
switch (G__47812__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47804,else__5472__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__47813){
var vec__47814 = p__47813;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47814,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47814,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#shadow.dom.Size{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47803){
var self__ = this;
var G__47803__$1 = this;
return (new cljs.core.RecordIter((0),G__47803__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47805,other47806){
var self__ = this;
var this47805__$1 = this;
return (((!((other47806 == null)))) && ((((this47805__$1.constructor === other47806.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47805__$1.w,other47806.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47805__$1.h,other47806.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47805__$1.__extmap,other47806.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k47804){
var self__ = this;
var this__5476__auto____$1 = this;
var G__47837 = k47804;
var G__47837__$1 = (((G__47837 instanceof cljs.core.Keyword))?G__47837.fqn:null);
switch (G__47837__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k47804);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__47803){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__47846 = cljs.core.keyword_identical_QMARK_;
var expr__47847 = k__5478__auto__;
if(cljs.core.truth_((pred__47846.cljs$core$IFn$_invoke$arity$2 ? pred__47846.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__47847) : pred__47846.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__47847)))){
return (new shadow.dom.Size(G__47803,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47846.cljs$core$IFn$_invoke$arity$2 ? pred__47846.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__47847) : pred__47846.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__47847)))){
return (new shadow.dom.Size(self__.w,G__47803,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__47803),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__47803){
var self__ = this;
var this__5468__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__47803,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__47811){
var extmap__5511__auto__ = (function (){var G__47858 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47811,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__47811)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47858);
} else {
return G__47858;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__47811),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__47811),null,cljs.core.not_empty(extmap__5511__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5759__auto__ = opts;
var l__5760__auto__ = a__5759__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5760__auto__)){
var G__48775 = (i + (1));
var G__48776 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48775;
ret = G__48776;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47883){
var vec__47884 = p__47883;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47884,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47884,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),query_params))));
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__47892 = arguments.length;
switch (G__47892) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5823__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5823__auto__)){
var child = temp__5823__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__48801 = ps;
var G__48802 = (i + (1));
el__$1 = G__48801;
i = G__48802;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__47922 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47922,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47922,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47922,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__47925_48813 = cljs.core.seq(props);
var chunk__47926_48814 = null;
var count__47927_48815 = (0);
var i__47928_48816 = (0);
while(true){
if((i__47928_48816 < count__47927_48815)){
var vec__47940_48820 = chunk__47926_48814.cljs$core$IIndexed$_nth$arity$2(null,i__47928_48816);
var k_48821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47940_48820,(0),null);
var v_48822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47940_48820,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_48821);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48821),v_48822);


var G__48825 = seq__47925_48813;
var G__48826 = chunk__47926_48814;
var G__48827 = count__47927_48815;
var G__48828 = (i__47928_48816 + (1));
seq__47925_48813 = G__48825;
chunk__47926_48814 = G__48826;
count__47927_48815 = G__48827;
i__47928_48816 = G__48828;
continue;
} else {
var temp__5825__auto___48829 = cljs.core.seq(seq__47925_48813);
if(temp__5825__auto___48829){
var seq__47925_48830__$1 = temp__5825__auto___48829;
if(cljs.core.chunked_seq_QMARK_(seq__47925_48830__$1)){
var c__5694__auto___48831 = cljs.core.chunk_first(seq__47925_48830__$1);
var G__48833 = cljs.core.chunk_rest(seq__47925_48830__$1);
var G__48834 = c__5694__auto___48831;
var G__48835 = cljs.core.count(c__5694__auto___48831);
var G__48836 = (0);
seq__47925_48813 = G__48833;
chunk__47926_48814 = G__48834;
count__47927_48815 = G__48835;
i__47928_48816 = G__48836;
continue;
} else {
var vec__47946_48838 = cljs.core.first(seq__47925_48830__$1);
var k_48839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47946_48838,(0),null);
var v_48840 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47946_48838,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_48839);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48839),v_48840);


var G__48842 = cljs.core.next(seq__47925_48830__$1);
var G__48843 = null;
var G__48844 = (0);
var G__48845 = (0);
seq__47925_48813 = G__48842;
chunk__47926_48814 = G__48843;
count__47927_48815 = G__48844;
i__47928_48816 = G__48845;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__47968 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47968,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47968,(1),null);
var seq__47971_48847 = cljs.core.seq(node_children);
var chunk__47973_48848 = null;
var count__47974_48849 = (0);
var i__47975_48850 = (0);
while(true){
if((i__47975_48850 < count__47974_48849)){
var child_struct_48852 = chunk__47973_48848.cljs$core$IIndexed$_nth$arity$2(null,i__47975_48850);
if((!((child_struct_48852 == null)))){
if(typeof child_struct_48852 === 'string'){
var text_48853 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48853)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_48852)));
} else {
var children_48855 = shadow.dom.svg_node(child_struct_48852);
if(cljs.core.seq_QMARK_(children_48855)){
var seq__48020_48856 = cljs.core.seq(children_48855);
var chunk__48022_48857 = null;
var count__48023_48858 = (0);
var i__48024_48859 = (0);
while(true){
if((i__48024_48859 < count__48023_48858)){
var child_48860 = chunk__48022_48857.cljs$core$IIndexed$_nth$arity$2(null,i__48024_48859);
if(cljs.core.truth_(child_48860)){
node.appendChild(child_48860);


var G__48861 = seq__48020_48856;
var G__48862 = chunk__48022_48857;
var G__48863 = count__48023_48858;
var G__48864 = (i__48024_48859 + (1));
seq__48020_48856 = G__48861;
chunk__48022_48857 = G__48862;
count__48023_48858 = G__48863;
i__48024_48859 = G__48864;
continue;
} else {
var G__48865 = seq__48020_48856;
var G__48866 = chunk__48022_48857;
var G__48867 = count__48023_48858;
var G__48868 = (i__48024_48859 + (1));
seq__48020_48856 = G__48865;
chunk__48022_48857 = G__48866;
count__48023_48858 = G__48867;
i__48024_48859 = G__48868;
continue;
}
} else {
var temp__5825__auto___48869 = cljs.core.seq(seq__48020_48856);
if(temp__5825__auto___48869){
var seq__48020_48871__$1 = temp__5825__auto___48869;
if(cljs.core.chunked_seq_QMARK_(seq__48020_48871__$1)){
var c__5694__auto___48873 = cljs.core.chunk_first(seq__48020_48871__$1);
var G__48874 = cljs.core.chunk_rest(seq__48020_48871__$1);
var G__48875 = c__5694__auto___48873;
var G__48876 = cljs.core.count(c__5694__auto___48873);
var G__48877 = (0);
seq__48020_48856 = G__48874;
chunk__48022_48857 = G__48875;
count__48023_48858 = G__48876;
i__48024_48859 = G__48877;
continue;
} else {
var child_48878 = cljs.core.first(seq__48020_48871__$1);
if(cljs.core.truth_(child_48878)){
node.appendChild(child_48878);


var G__48879 = cljs.core.next(seq__48020_48871__$1);
var G__48880 = null;
var G__48881 = (0);
var G__48882 = (0);
seq__48020_48856 = G__48879;
chunk__48022_48857 = G__48880;
count__48023_48858 = G__48881;
i__48024_48859 = G__48882;
continue;
} else {
var G__48884 = cljs.core.next(seq__48020_48871__$1);
var G__48885 = null;
var G__48886 = (0);
var G__48887 = (0);
seq__48020_48856 = G__48884;
chunk__48022_48857 = G__48885;
count__48023_48858 = G__48886;
i__48024_48859 = G__48887;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48855);
}
}


var G__48888 = seq__47971_48847;
var G__48889 = chunk__47973_48848;
var G__48890 = count__47974_48849;
var G__48891 = (i__47975_48850 + (1));
seq__47971_48847 = G__48888;
chunk__47973_48848 = G__48889;
count__47974_48849 = G__48890;
i__47975_48850 = G__48891;
continue;
} else {
var G__48892 = seq__47971_48847;
var G__48893 = chunk__47973_48848;
var G__48894 = count__47974_48849;
var G__48895 = (i__47975_48850 + (1));
seq__47971_48847 = G__48892;
chunk__47973_48848 = G__48893;
count__47974_48849 = G__48894;
i__47975_48850 = G__48895;
continue;
}
} else {
var temp__5825__auto___48896 = cljs.core.seq(seq__47971_48847);
if(temp__5825__auto___48896){
var seq__47971_48897__$1 = temp__5825__auto___48896;
if(cljs.core.chunked_seq_QMARK_(seq__47971_48897__$1)){
var c__5694__auto___48898 = cljs.core.chunk_first(seq__47971_48897__$1);
var G__48901 = cljs.core.chunk_rest(seq__47971_48897__$1);
var G__48902 = c__5694__auto___48898;
var G__48903 = cljs.core.count(c__5694__auto___48898);
var G__48904 = (0);
seq__47971_48847 = G__48901;
chunk__47973_48848 = G__48902;
count__47974_48849 = G__48903;
i__47975_48850 = G__48904;
continue;
} else {
var child_struct_48906 = cljs.core.first(seq__47971_48897__$1);
if((!((child_struct_48906 == null)))){
if(typeof child_struct_48906 === 'string'){
var text_48907 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48907)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_48906)));
} else {
var children_48908 = shadow.dom.svg_node(child_struct_48906);
if(cljs.core.seq_QMARK_(children_48908)){
var seq__48038_48911 = cljs.core.seq(children_48908);
var chunk__48040_48912 = null;
var count__48041_48913 = (0);
var i__48042_48914 = (0);
while(true){
if((i__48042_48914 < count__48041_48913)){
var child_48915 = chunk__48040_48912.cljs$core$IIndexed$_nth$arity$2(null,i__48042_48914);
if(cljs.core.truth_(child_48915)){
node.appendChild(child_48915);


var G__48917 = seq__48038_48911;
var G__48918 = chunk__48040_48912;
var G__48919 = count__48041_48913;
var G__48920 = (i__48042_48914 + (1));
seq__48038_48911 = G__48917;
chunk__48040_48912 = G__48918;
count__48041_48913 = G__48919;
i__48042_48914 = G__48920;
continue;
} else {
var G__48921 = seq__48038_48911;
var G__48922 = chunk__48040_48912;
var G__48923 = count__48041_48913;
var G__48924 = (i__48042_48914 + (1));
seq__48038_48911 = G__48921;
chunk__48040_48912 = G__48922;
count__48041_48913 = G__48923;
i__48042_48914 = G__48924;
continue;
}
} else {
var temp__5825__auto___48925__$1 = cljs.core.seq(seq__48038_48911);
if(temp__5825__auto___48925__$1){
var seq__48038_48926__$1 = temp__5825__auto___48925__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48038_48926__$1)){
var c__5694__auto___48927 = cljs.core.chunk_first(seq__48038_48926__$1);
var G__48928 = cljs.core.chunk_rest(seq__48038_48926__$1);
var G__48929 = c__5694__auto___48927;
var G__48930 = cljs.core.count(c__5694__auto___48927);
var G__48931 = (0);
seq__48038_48911 = G__48928;
chunk__48040_48912 = G__48929;
count__48041_48913 = G__48930;
i__48042_48914 = G__48931;
continue;
} else {
var child_48932 = cljs.core.first(seq__48038_48926__$1);
if(cljs.core.truth_(child_48932)){
node.appendChild(child_48932);


var G__48933 = cljs.core.next(seq__48038_48926__$1);
var G__48934 = null;
var G__48935 = (0);
var G__48936 = (0);
seq__48038_48911 = G__48933;
chunk__48040_48912 = G__48934;
count__48041_48913 = G__48935;
i__48042_48914 = G__48936;
continue;
} else {
var G__48937 = cljs.core.next(seq__48038_48926__$1);
var G__48938 = null;
var G__48939 = (0);
var G__48940 = (0);
seq__48038_48911 = G__48937;
chunk__48040_48912 = G__48938;
count__48041_48913 = G__48939;
i__48042_48914 = G__48940;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48908);
}
}


var G__48942 = cljs.core.next(seq__47971_48897__$1);
var G__48943 = null;
var G__48944 = (0);
var G__48945 = (0);
seq__47971_48847 = G__48942;
chunk__47973_48848 = G__48943;
count__47974_48849 = G__48944;
i__47975_48850 = G__48945;
continue;
} else {
var G__48946 = cljs.core.next(seq__47971_48897__$1);
var G__48947 = null;
var G__48948 = (0);
var G__48949 = (0);
seq__47971_48847 = G__48946;
chunk__47973_48848 = G__48947;
count__47974_48849 = G__48948;
i__47975_48850 = G__48949;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5903__auto__ = [];
var len__5897__auto___48972 = arguments.length;
var i__5898__auto___48973 = (0);
while(true){
if((i__5898__auto___48973 < len__5897__auto___48972)){
args__5903__auto__.push((arguments[i__5898__auto___48973]));

var G__48974 = (i__5898__auto___48973 + (1));
i__5898__auto___48973 = G__48974;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq48069){
var G__48070 = cljs.core.first(seq48069);
var seq48069__$1 = cljs.core.next(seq48069);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48070,seq48069__$1);
}));


//# sourceMappingURL=shadow.dom.js.map

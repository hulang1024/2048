goog.provide('malli.registry');
/**
 * @define {string}
 */
malli.registry.mode = goog.define("malli.registry.mode","default");
/**
 * @define {string}
 */
malli.registry.type = goog.define("malli.registry.type","default");

/**
 * @interface
 */
malli.registry.Registry = function(){};

var malli$registry$Registry$_schema$dyn_32237 = (function (this$,type){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (malli.registry._schema[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5520__auto__.call(null,this$,type));
} else {
var m__5518__auto__ = (malli.registry._schema["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5518__auto__.call(null,this$,type));
} else {
throw cljs.core.missing_protocol("Registry.-schema",this$);
}
}
});
/**
 * returns the schema from a registry
 */
malli.registry._schema = (function malli$registry$_schema(this$,type){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schema$arity$2 == null)))))){
return this$.malli$registry$Registry$_schema$arity$2(this$,type);
} else {
return malli$registry$Registry$_schema$dyn_32237(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_32244 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (malli.registry._schemas[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (malli.registry._schemas["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Registry.-schemas",this$);
}
}
});
/**
 * returns all schemas from a registry
 */
malli.registry._schemas = (function malli$registry$_schemas(this$){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schemas$arity$1 == null)))))){
return this$.malli$registry$Registry$_schemas$arity$1(this$);
} else {
return malli$registry$Registry$_schemas$dyn_32244(this$);
}
});

malli.registry.registry_QMARK_ = (function malli$registry$registry_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.malli$registry$Registry$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry32072 = (function (m,fm,meta32073){
this.m = m;
this.fm = fm;
this.meta32073 = meta32073;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry32072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32074,meta32073__$1){
var self__ = this;
var _32074__$1 = this;
return (new malli.registry.t_malli$registry32072(self__.m,self__.fm,meta32073__$1));
}));

(malli.registry.t_malli$registry32072.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32074){
var self__ = this;
var _32074__$1 = this;
return self__.meta32073;
}));

(malli.registry.t_malli$registry32072.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry32072.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry32072.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry32072.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta32073","meta32073",1614199158,null)], null);
}));

(malli.registry.t_malli$registry32072.cljs$lang$type = true);

(malli.registry.t_malli$registry32072.cljs$lang$ctorStr = "malli.registry/t_malli$registry32072");

(malli.registry.t_malli$registry32072.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry32072");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry32072.
 */
malli.registry.__GT_t_malli$registry32072 = (function malli$registry$__GT_t_malli$registry32072(m,fm,meta32073){
return (new malli.registry.t_malli$registry32072(m,fm,meta32073));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry32072(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry32089 = (function (m,meta32090){
this.m = m;
this.meta32090 = meta32090;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry32089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32091,meta32090__$1){
var self__ = this;
var _32091__$1 = this;
return (new malli.registry.t_malli$registry32089(self__.m,meta32090__$1));
}));

(malli.registry.t_malli$registry32089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32091){
var self__ = this;
var _32091__$1 = this;
return self__.meta32090;
}));

(malli.registry.t_malli$registry32089.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry32089.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry32089.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry32089.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta32090","meta32090",-2036955512,null)], null);
}));

(malli.registry.t_malli$registry32089.cljs$lang$type = true);

(malli.registry.t_malli$registry32089.cljs$lang$ctorStr = "malli.registry/t_malli$registry32089");

(malli.registry.t_malli$registry32089.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry32089");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry32089.
 */
malli.registry.__GT_t_malli$registry32089 = (function malli$registry$__GT_t_malli$registry32089(m,meta32090){
return (new malli.registry.t_malli$registry32089(m,meta32090));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry32089(m,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.registry = (function malli$registry$registry(_QMARK_registry){
if((_QMARK_registry == null)){
return null;
} else {
if(malli.registry.registry_QMARK_(_QMARK_registry)){
return _QMARK_registry;
} else {
if(cljs.core.map_QMARK_(_QMARK_registry)){
return malli.registry.simple_registry(_QMARK_registry);
} else {
if((((!((_QMARK_registry == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === _QMARK_registry.malli$registry$Registry$))))?true:(((!_QMARK_registry.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry):false)):cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry))){
return _QMARK_registry;
} else {
return null;
}
}
}
}
});
malli.registry.registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(malli.registry.simple_registry(cljs.core.PersistentArrayMap.EMPTY));
malli.registry.set_default_registry_BANG_ = (function malli$registry$set_default_registry_BANG_(_QMARK_registry){
if((!((malli.registry.mode === "strict")))){
return cljs.core.reset_BANG_(malli.registry.registry_STAR_,malli.registry.registry(_QMARK_registry));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("can't set default registry, invalid mode",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),malli.registry.mode,new cljs.core.Keyword(null,"type","type",1174270348),malli.registry.type], null));
}
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry32120 = (function (meta32121){
this.meta32121 = meta32121;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry32120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32122,meta32121__$1){
var self__ = this;
var _32122__$1 = this;
return (new malli.registry.t_malli$registry32120(meta32121__$1));
}));

(malli.registry.t_malli$registry32120.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32122){
var self__ = this;
var _32122__$1 = this;
return self__.meta32121;
}));

(malli.registry.t_malli$registry32120.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry32120.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry32120.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry32120.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta32121","meta32121",1423617552,null)], null);
}));

(malli.registry.t_malli$registry32120.cljs$lang$type = true);

(malli.registry.t_malli$registry32120.cljs$lang$ctorStr = "malli.registry/t_malli$registry32120");

(malli.registry.t_malli$registry32120.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry32120");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry32120.
 */
malli.registry.__GT_t_malli$registry32120 = (function malli$registry$__GT_t_malli$registry32120(meta32121){
return (new malli.registry.t_malli$registry32120(meta32121));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry32120(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry32139 = (function (_QMARK_registries,registries,meta32140){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta32140 = meta32140;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry32139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32141,meta32140__$1){
var self__ = this;
var _32141__$1 = this;
return (new malli.registry.t_malli$registry32139(self__._QMARK_registries,self__.registries,meta32140__$1));
}));

(malli.registry.t_malli$registry32139.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32141){
var self__ = this;
var _32141__$1 = this;
return self__.meta32140;
}));

(malli.registry.t_malli$registry32139.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry32139.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__32132_SHARP_){
return malli.registry._schema(p1__32132_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry32139.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry32139.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta32140","meta32140",64095082,null)], null);
}));

(malli.registry.t_malli$registry32139.cljs$lang$type = true);

(malli.registry.t_malli$registry32139.cljs$lang$ctorStr = "malli.registry/t_malli$registry32139");

(malli.registry.t_malli$registry32139.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry32139");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry32139.
 */
malli.registry.__GT_t_malli$registry32139 = (function malli$registry$__GT_t_malli$registry32139(_QMARK_registries,registries,meta32140){
return (new malli.registry.t_malli$registry32139(_QMARK_registries,registries,meta32140));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5903__auto__ = [];
var len__5897__auto___32266 = arguments.length;
var i__5898__auto___32268 = (0);
while(true){
if((i__5898__auto___32268 < len__5897__auto___32266)){
args__5903__auto__.push((arguments[i__5898__auto___32268]));

var G__32269 = (i__5898__auto___32268 + (1));
i__5898__auto___32268 = G__32269;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_registries){
var registries = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(malli.registry.registry,_QMARK_registries);
return (new malli.registry.t_malli$registry32139(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq32133){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32133));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry32162 = (function (db,meta32163){
this.db = db;
this.meta32163 = meta32163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry32162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32164,meta32163__$1){
var self__ = this;
var _32164__$1 = this;
return (new malli.registry.t_malli$registry32162(self__.db,meta32163__$1));
}));

(malli.registry.t_malli$registry32162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32164){
var self__ = this;
var _32164__$1 = this;
return self__.meta32163;
}));

(malli.registry.t_malli$registry32162.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry32162.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry32162.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry32162.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta32163","meta32163",258624906,null)], null);
}));

(malli.registry.t_malli$registry32162.cljs$lang$type = true);

(malli.registry.t_malli$registry32162.cljs$lang$ctorStr = "malli.registry/t_malli$registry32162");

(malli.registry.t_malli$registry32162.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry32162");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry32162.
 */
malli.registry.__GT_t_malli$registry32162 = (function malli$registry$__GT_t_malli$registry32162(db,meta32163){
return (new malli.registry.t_malli$registry32162(db,meta32163));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry32162(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry32186 = (function (meta32187){
this.meta32187 = meta32187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry32186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32188,meta32187__$1){
var self__ = this;
var _32188__$1 = this;
return (new malli.registry.t_malli$registry32186(meta32187__$1));
}));

(malli.registry.t_malli$registry32186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32188){
var self__ = this;
var _32188__$1 = this;
return self__.meta32187;
}));

(malli.registry.t_malli$registry32186.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry32186.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry32186.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry32186.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta32187","meta32187",389208569,null)], null);
}));

(malli.registry.t_malli$registry32186.cljs$lang$type = true);

(malli.registry.t_malli$registry32186.cljs$lang$ctorStr = "malli.registry/t_malli$registry32186");

(malli.registry.t_malli$registry32186.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry32186");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry32186.
 */
malli.registry.__GT_t_malli$registry32186 = (function malli$registry$__GT_t_malli$registry32186(meta32187){
return (new malli.registry.t_malli$registry32186(meta32187));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry32186(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry32204 = (function (meta32205){
this.meta32205 = meta32205;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry32204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32206,meta32205__$1){
var self__ = this;
var _32206__$1 = this;
return (new malli.registry.t_malli$registry32204(meta32205__$1));
}));

(malli.registry.t_malli$registry32204.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32206){
var self__ = this;
var _32206__$1 = this;
return self__.meta32205;
}));

(malli.registry.t_malli$registry32204.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry32204.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry32204.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry32204.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta32205","meta32205",-146488451,null)], null);
}));

(malli.registry.t_malli$registry32204.cljs$lang$type = true);

(malli.registry.t_malli$registry32204.cljs$lang$ctorStr = "malli.registry/t_malli$registry32204");

(malli.registry.t_malli$registry32204.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry32204");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry32204.
 */
malli.registry.__GT_t_malli$registry32204 = (function malli$registry$__GT_t_malli$registry32204(meta32205){
return (new malli.registry.t_malli$registry32204(meta32205));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry32204(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry32217 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta32218){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta32218 = meta32218;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry32217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32219,meta32218__$1){
var self__ = this;
var _32219__$1 = this;
return (new malli.registry.t_malli$registry32217(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta32218__$1));
}));

(malli.registry.t_malli$registry32217.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32219){
var self__ = this;
var _32219__$1 = this;
return self__.meta32218;
}));

(malli.registry.t_malli$registry32217.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry32217.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5162__auto__ = (function (){var fexpr__32223 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__32223.cljs$core$IFn$_invoke$arity$1 ? fexpr__32223.cljs$core$IFn$_invoke$arity$1(name) : fexpr__32223.call(null,name));
})();
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var temp__5825__auto__ = (function (){var G__32224 = name;
var G__32225 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__32224,G__32225) : self__.provider.call(null,G__32224,G__32225));
})();
if(cljs.core.truth_(temp__5825__auto__)){
var schema = temp__5825__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cache_STAR_,cljs.core.assoc,name,schema);

return schema;
} else {
return null;
}
}
}));

(malli.registry.t_malli$registry32217.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry32217.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta32218","meta32218",-1671580388,null)], null);
}));

(malli.registry.t_malli$registry32217.cljs$lang$type = true);

(malli.registry.t_malli$registry32217.cljs$lang$ctorStr = "malli.registry/t_malli$registry32217");

(malli.registry.t_malli$registry32217.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry32217");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry32217.
 */
malli.registry.__GT_t_malli$registry32217 = (function malli$registry$__GT_t_malli$registry32217(default_registry,provider,cache_STAR_,registry_STAR_,meta32218){
return (new malli.registry.t_malli$registry32217(default_registry,provider,cache_STAR_,registry_STAR_,meta32218));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry32217(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
});
/**
 * finds a schema from a registry
 */
malli.registry.schema = (function malli$registry$schema(registry,type){
return malli.registry._schema(registry,type);
});
/**
 * finds all schemas from a registry
 */
malli.registry.schemas = (function malli$registry$schemas(registry){
return malli.registry._schemas(registry);
});

//# sourceMappingURL=malli.registry.js.map

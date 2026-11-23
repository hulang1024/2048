goog.provide('clojure.core.rrb_vector.transients');
clojure.core.rrb_vector.transients.ensure_editable = (function clojure$core$rrb_vector$transients$ensure_editable(edit,node){
if((node.edit === edit)){
return node;
} else {
var new_arr = cljs.core.aclone(node.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(edit,new_arr));
}
});
clojure.core.rrb_vector.transients.editable_root = (function clojure$core$rrb_vector$transients$editable_root(root){
var new_arr = cljs.core.aclone(root.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(({}),new_arr));
});
clojure.core.rrb_vector.transients.editable_tail = (function clojure$core$rrb_vector$transients$editable_tail(tail){
var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
cljs.core.array_copy(tail,(0),ret,(0),tail.length);

return ret;
});
clojure.core.rrb_vector.transients.push_tail_BANG_ = (function clojure$core$rrb_vector$transients$push_tail_BANG_(shift,cnt,root_edit,current_node,tail_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var n_37619 = ret;
var shift_37620__$1 = shift;
while(true){
var arr_37621 = n_37619.arr;
var subidx_37622 = (((cnt - (1)) >> shift_37620__$1) & (31));
if((shift_37620__$1 === (5))){
(arr_37621[subidx_37622] = tail_node);
} else {
var child_37623 = (arr_37621[subidx_37622]);
if((child_37623 == null)){
(arr_37621[subidx_37622] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_37620__$1 - (5)),tail_node));
} else {
var editable_child_37626 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,child_37623);
(arr_37621[subidx_37622] = editable_child_37626);

var G__37627 = editable_child_37626;
var G__37628 = (shift_37620__$1 - (5));
n_37619 = G__37627;
shift_37620__$1 = G__37628;
continue;
}
}
break;
}

return ret;
} else {
var arr = ret.arr;
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var li = ((rngs[(32)]) - (1));
var cret = (((shift === (5)))?null:(function (){var child = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr[li]));
var ccnt = ((((li > (0)))?((rngs[li]) - (rngs[(li - (1))])):(rngs[(0)])) + (32));
if((!(clojure.core.rrb_vector.nodes.overflow_QMARK_(child,(shift - (5)),ccnt)))){
var G__37590 = (shift - (5));
var G__37591 = ccnt;
var G__37592 = root_edit;
var G__37593 = child;
var G__37594 = tail_node;
return (clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5(G__37590,G__37591,G__37592,G__37593,G__37594) : clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,G__37590,G__37591,G__37592,G__37593,G__37594));
} else {
return null;
}
})());
if(cljs.core.truth_(cret)){
(arr[li] = cret);

(rngs[li] = ((rngs[li]) + (32)));

return ret;
} else {
if((li >= (31))){
var msg_37633 = (""+"Assigning index "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((li + (1)))+" of vector"+" object array to become a node, when that"+" index should only be used for storing"+" range arrays.");
var data_37634 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"shift","shift",997140064),shift,new cljs.core.Keyword(null,"cnd","cnd",-521882032),cnt,new cljs.core.Keyword(null,"current-node","current-node",-814308842),current_node,new cljs.core.Keyword(null,"tail-node","tail-node",-1373693221),tail_node,new cljs.core.Keyword(null,"rngs","rngs",-8039697),rngs,new cljs.core.Keyword(null,"li","li",723558921),li,new cljs.core.Keyword(null,"cret","cret",2090504467),cret], null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg_37633,data_37634);
} else {
}

(arr[(li + (1))] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift - (5)),tail_node));

(rngs[(li + (1))] = ((rngs[li]) + (32)));

(rngs[(32)] = ((rngs[(32)]) + (1)));

return ret;
}
}
});
clojure.core.rrb_vector.transients.pop_tail_BANG_ = (function clojure$core$rrb_vector$transients$pop_tail_BANG_(shift,cnt,root_edit,current_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var subidx = (((cnt - (2)) >> shift) & (31));
if((shift > (5))){
var child = (function (){var G__37597 = (shift - (5));
var G__37598 = cnt;
var G__37599 = root_edit;
var G__37600 = (ret.arr[subidx]);
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__37597,G__37598,G__37599,G__37600) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__37597,G__37598,G__37599,G__37600));
})();
if((((child == null)) && ((subidx === (0))))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = child);

return ret;
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = null);

return ret;

}
}
} else {
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx = ((rngs[(32)]) - (1));
if((shift > (5))){
var child = (ret.arr[subidx]);
var child_cnt = (((subidx === (0)))?(rngs[(0)]):((rngs[subidx]) - (rngs[(subidx - (1))])));
var new_child = (function (){var G__37604 = (shift - (5));
var G__37605 = child_cnt;
var G__37606 = root_edit;
var G__37607 = child;
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__37604,G__37605,G__37606,G__37607) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__37604,G__37605,G__37606,G__37607));
})();
if((((new_child == null)) && ((subidx === (0))))){
return null;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_(child)){
var arr = ret.arr;
(rngs[subidx] = ((rngs[subidx]) - (32)));

(arr[subidx] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;
} else {
var rng = clojure.core.rrb_vector.nodes.last_range(child);
var diff = (rng - (cljs.core.truth_(new_child)?clojure.core.rrb_vector.nodes.last_range(new_child):(0)));
var arr = ret.arr;
(rngs[subidx] = ((rngs[subidx]) - diff));

(arr[subidx] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;

}
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
var child = (arr[subidx]);
(arr[subidx] = null);

(rngs[subidx] = (0));

(rngs[(32)] = ((rngs[(32)]) - (1)));

return ret;

}
}
}
});
clojure.core.rrb_vector.transients.do_assoc_BANG_ = (function clojure$core$rrb_vector$transients$do_assoc_BANG_(shift,root_edit,current_node,i,val){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var shift_37644__$1 = shift;
var node_37645 = ret;
while(true){
if((shift_37644__$1 === (0))){
var arr_37646 = node_37645.arr;
(arr_37646[(i & (31))] = val);
} else {
var arr_37647 = node_37645.arr;
var subidx_37648 = ((i >> shift_37644__$1) & (31));
var child_37649 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr_37647[subidx_37648]));
(arr_37647[subidx_37648] = child_37649);

var G__37650 = (shift_37644__$1 - (5));
var G__37651 = child_37649;
shift_37644__$1 = G__37650;
node_37645 = G__37651;
continue;
}
break;
}
} else {
var arr_37652 = ret.arr;
var rngs_37653 = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx_37654 = ((i >> shift) & (31));
var subidx_37655__$1 = (function (){var subidx_37655__$1 = subidx_37654;
while(true){
if((i < ((rngs_37653[subidx_37655__$1]) | 0))){
return subidx_37655__$1;
} else {
var G__37657 = (subidx_37655__$1 + (1));
subidx_37655__$1 = G__37657;
continue;
}
break;
}
})();
var i_37656__$1 = (((subidx_37655__$1 === (0)))?i:(i - (rngs_37653[(subidx_37655__$1 - (1))])));
(arr_37652[subidx_37655__$1] = (function (){var G__37613 = (shift - (5));
var G__37614 = root_edit;
var G__37615 = (arr_37652[subidx_37655__$1]);
var G__37616 = i_37656__$1;
var G__37617 = val;
return (clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5(G__37613,G__37614,G__37615,G__37616,G__37617) : clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,G__37613,G__37614,G__37615,G__37616,G__37617));
})());
}

return ret;
});

//# sourceMappingURL=clojure.core.rrb_vector.transients.js.map

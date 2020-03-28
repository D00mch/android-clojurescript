// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__12928__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12928 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12929__i = 0, G__12929__a = new Array(arguments.length -  0);
while (G__12929__i < G__12929__a.length) {G__12929__a[G__12929__i] = arguments[G__12929__i + 0]; ++G__12929__i;}
  args = new cljs.core.IndexedSeq(G__12929__a,0,null);
} 
return G__12928__delegate.call(this,args);};
G__12928.cljs$lang$maxFixedArity = 0;
G__12928.cljs$lang$applyTo = (function (arglist__12930){
var args = cljs.core.seq(arglist__12930);
return G__12928__delegate(args);
});
G__12928.cljs$core$IFn$_invoke$arity$variadic = G__12928__delegate;
return G__12928;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__12931__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12931 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12932__i = 0, G__12932__a = new Array(arguments.length -  0);
while (G__12932__i < G__12932__a.length) {G__12932__a[G__12932__i] = arguments[G__12932__i + 0]; ++G__12932__i;}
  args = new cljs.core.IndexedSeq(G__12932__a,0,null);
} 
return G__12931__delegate.call(this,args);};
G__12931.cljs$lang$maxFixedArity = 0;
G__12931.cljs$lang$applyTo = (function (arglist__12933){
var args = cljs.core.seq(arglist__12933);
return G__12931__delegate(args);
});
G__12931.cljs$core$IFn$_invoke$arity$variadic = G__12931__delegate;
return G__12931;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

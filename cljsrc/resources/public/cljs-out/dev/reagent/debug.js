// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__8700__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8700 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8701__i = 0, G__8701__a = new Array(arguments.length -  0);
while (G__8701__i < G__8701__a.length) {G__8701__a[G__8701__i] = arguments[G__8701__i + 0]; ++G__8701__i;}
  args = new cljs.core.IndexedSeq(G__8701__a,0,null);
} 
return G__8700__delegate.call(this,args);};
G__8700.cljs$lang$maxFixedArity = 0;
G__8700.cljs$lang$applyTo = (function (arglist__8702){
var args = cljs.core.seq(arglist__8702);
return G__8700__delegate(args);
});
G__8700.cljs$core$IFn$_invoke$arity$variadic = G__8700__delegate;
return G__8700;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__8703__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8703 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8704__i = 0, G__8704__a = new Array(arguments.length -  0);
while (G__8704__i < G__8704__a.length) {G__8704__a[G__8704__i] = arguments[G__8704__i + 0]; ++G__8704__i;}
  args = new cljs.core.IndexedSeq(G__8704__a,0,null);
} 
return G__8703__delegate.call(this,args);};
G__8703.cljs$lang$maxFixedArity = 0;
G__8703.cljs$lang$applyTo = (function (arglist__8705){
var args = cljs.core.seq(arglist__8705);
return G__8703__delegate(args);
});
G__8703.cljs$core$IFn$_invoke$arity$variadic = G__8703__delegate;
return G__8703;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map

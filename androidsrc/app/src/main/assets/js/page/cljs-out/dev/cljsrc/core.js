// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('cljsrc.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('reagent.core');
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["This text is printed from src/cljsrc/core.cljs. Go ahead and edit it and see reloading in action."], 0));
cljsrc.core.multiply = (function cljsrc$core$multiply(a,b){
return (a * b);
});
if((typeof cljsrc !== 'undefined') && (typeof cljsrc.core !== 'undefined') && (typeof cljsrc.core.app_state !== 'undefined')){
} else {
cljsrc.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,"Hello world!"], null));
}
cljsrc.core.get_app_element = (function cljsrc$core$get_app_element(){
return goog.dom.getElement("app");
});
cljsrc.core.hello_world = (function cljsrc$core$hello_world(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljsrc.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Edit this in src/cljsrc/core.cljs and watch it change!"], null)], null);
});
cljsrc.core.mount = (function cljsrc$core$mount(el){
var G__13476 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljsrc.core.hello_world], null);
var G__13477 = el;
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__13476,G__13477) : reagent.core.render_component.call(null,G__13476,G__13477));
});
cljsrc.core.mount_app_element = (function cljsrc$core$mount_app_element(){
var temp__5457__auto__ = cljsrc.core.get_app_element();
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return cljsrc.core.mount(el);
} else {
return null;
}
});
cljsrc.core.mount_app_element();
cljsrc.core.on_reload = (function cljsrc$core$on_reload(){
return cljsrc.core.mount_app_element();
});

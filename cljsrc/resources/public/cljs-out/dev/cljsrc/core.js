// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljsrc.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
cljs.core.println.call(null,"This text is printed from src/cljsrc/core.cljs. Go ahead and edit it and see reloading in action.");
cljsrc.core.multiply = (function cljsrc$core$multiply(a,b){
return (a * b);
});
if((typeof cljsrc !== 'undefined') && (typeof cljsrc.core !== 'undefined') && (typeof cljsrc.core.app_state !== 'undefined')){
} else {
cljsrc.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
cljsrc.core.get_app_element = (function cljsrc$core$get_app_element(){
return goog.dom.getElement("app");
});
cljsrc.core.hello_world = (function cljsrc$core$hello_world(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljsrc.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Edit this in src/cljsrc/core.cljs and watch it change!"], null)], null);
});
cljsrc.core.mount = (function cljsrc$core$mount(el){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljsrc.core.hello_world], null),el);
});
cljsrc.core.mount_app_element = (function cljsrc$core$mount_app_element(){
var temp__5457__auto__ = cljsrc.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return cljsrc.core.mount.call(null,el);
} else {
return null;
}
});
cljsrc.core.mount_app_element.call(null);
cljsrc.core.on_reload = (function cljsrc$core$on_reload(){
return cljsrc.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map

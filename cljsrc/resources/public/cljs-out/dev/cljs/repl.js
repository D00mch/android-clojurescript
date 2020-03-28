// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19566){
var map__19567 = p__19566;
var map__19567__$1 = (((((!((map__19567 == null))))?(((((map__19567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19567):map__19567);
var m = map__19567__$1;
var n = cljs.core.get.call(null,map__19567__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__19567__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19569_19601 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19570_19602 = null;
var count__19571_19603 = (0);
var i__19572_19604 = (0);
while(true){
if((i__19572_19604 < count__19571_19603)){
var f_19605 = cljs.core._nth.call(null,chunk__19570_19602,i__19572_19604);
cljs.core.println.call(null,"  ",f_19605);


var G__19606 = seq__19569_19601;
var G__19607 = chunk__19570_19602;
var G__19608 = count__19571_19603;
var G__19609 = (i__19572_19604 + (1));
seq__19569_19601 = G__19606;
chunk__19570_19602 = G__19607;
count__19571_19603 = G__19608;
i__19572_19604 = G__19609;
continue;
} else {
var temp__5457__auto___19610 = cljs.core.seq.call(null,seq__19569_19601);
if(temp__5457__auto___19610){
var seq__19569_19611__$1 = temp__5457__auto___19610;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19569_19611__$1)){
var c__4550__auto___19612 = cljs.core.chunk_first.call(null,seq__19569_19611__$1);
var G__19613 = cljs.core.chunk_rest.call(null,seq__19569_19611__$1);
var G__19614 = c__4550__auto___19612;
var G__19615 = cljs.core.count.call(null,c__4550__auto___19612);
var G__19616 = (0);
seq__19569_19601 = G__19613;
chunk__19570_19602 = G__19614;
count__19571_19603 = G__19615;
i__19572_19604 = G__19616;
continue;
} else {
var f_19617 = cljs.core.first.call(null,seq__19569_19611__$1);
cljs.core.println.call(null,"  ",f_19617);


var G__19618 = cljs.core.next.call(null,seq__19569_19611__$1);
var G__19619 = null;
var G__19620 = (0);
var G__19621 = (0);
seq__19569_19601 = G__19618;
chunk__19570_19602 = G__19619;
count__19571_19603 = G__19620;
i__19572_19604 = G__19621;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19622 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_19622);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_19622)))?cljs.core.second.call(null,arglists_19622):arglists_19622));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19573_19623 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19574_19624 = null;
var count__19575_19625 = (0);
var i__19576_19626 = (0);
while(true){
if((i__19576_19626 < count__19575_19625)){
var vec__19587_19627 = cljs.core._nth.call(null,chunk__19574_19624,i__19576_19626);
var name_19628 = cljs.core.nth.call(null,vec__19587_19627,(0),null);
var map__19590_19629 = cljs.core.nth.call(null,vec__19587_19627,(1),null);
var map__19590_19630__$1 = (((((!((map__19590_19629 == null))))?(((((map__19590_19629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19590_19629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19590_19629):map__19590_19629);
var doc_19631 = cljs.core.get.call(null,map__19590_19630__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19632 = cljs.core.get.call(null,map__19590_19630__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19628);

cljs.core.println.call(null," ",arglists_19632);

if(cljs.core.truth_(doc_19631)){
cljs.core.println.call(null," ",doc_19631);
} else {
}


var G__19633 = seq__19573_19623;
var G__19634 = chunk__19574_19624;
var G__19635 = count__19575_19625;
var G__19636 = (i__19576_19626 + (1));
seq__19573_19623 = G__19633;
chunk__19574_19624 = G__19634;
count__19575_19625 = G__19635;
i__19576_19626 = G__19636;
continue;
} else {
var temp__5457__auto___19637 = cljs.core.seq.call(null,seq__19573_19623);
if(temp__5457__auto___19637){
var seq__19573_19638__$1 = temp__5457__auto___19637;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19573_19638__$1)){
var c__4550__auto___19639 = cljs.core.chunk_first.call(null,seq__19573_19638__$1);
var G__19640 = cljs.core.chunk_rest.call(null,seq__19573_19638__$1);
var G__19641 = c__4550__auto___19639;
var G__19642 = cljs.core.count.call(null,c__4550__auto___19639);
var G__19643 = (0);
seq__19573_19623 = G__19640;
chunk__19574_19624 = G__19641;
count__19575_19625 = G__19642;
i__19576_19626 = G__19643;
continue;
} else {
var vec__19592_19644 = cljs.core.first.call(null,seq__19573_19638__$1);
var name_19645 = cljs.core.nth.call(null,vec__19592_19644,(0),null);
var map__19595_19646 = cljs.core.nth.call(null,vec__19592_19644,(1),null);
var map__19595_19647__$1 = (((((!((map__19595_19646 == null))))?(((((map__19595_19646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19595_19646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19595_19646):map__19595_19646);
var doc_19648 = cljs.core.get.call(null,map__19595_19647__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19649 = cljs.core.get.call(null,map__19595_19647__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19645);

cljs.core.println.call(null," ",arglists_19649);

if(cljs.core.truth_(doc_19648)){
cljs.core.println.call(null," ",doc_19648);
} else {
}


var G__19650 = cljs.core.next.call(null,seq__19573_19638__$1);
var G__19651 = null;
var G__19652 = (0);
var G__19653 = (0);
seq__19573_19623 = G__19650;
chunk__19574_19624 = G__19651;
count__19575_19625 = G__19652;
i__19576_19626 = G__19653;
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
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__19597 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19598 = null;
var count__19599 = (0);
var i__19600 = (0);
while(true){
if((i__19600 < count__19599)){
var role = cljs.core._nth.call(null,chunk__19598,i__19600);
var temp__5457__auto___19654__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___19654__$1)){
var spec_19655 = temp__5457__auto___19654__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_19655));
} else {
}


var G__19656 = seq__19597;
var G__19657 = chunk__19598;
var G__19658 = count__19599;
var G__19659 = (i__19600 + (1));
seq__19597 = G__19656;
chunk__19598 = G__19657;
count__19599 = G__19658;
i__19600 = G__19659;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__19597);
if(temp__5457__auto____$1){
var seq__19597__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19597__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__19597__$1);
var G__19660 = cljs.core.chunk_rest.call(null,seq__19597__$1);
var G__19661 = c__4550__auto__;
var G__19662 = cljs.core.count.call(null,c__4550__auto__);
var G__19663 = (0);
seq__19597 = G__19660;
chunk__19598 = G__19661;
count__19599 = G__19662;
i__19600 = G__19663;
continue;
} else {
var role = cljs.core.first.call(null,seq__19597__$1);
var temp__5457__auto___19664__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___19664__$2)){
var spec_19665 = temp__5457__auto___19664__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_19665));
} else {
}


var G__19666 = cljs.core.next.call(null,seq__19597__$1);
var G__19667 = null;
var G__19668 = (0);
var G__19669 = (0);
seq__19597 = G__19666;
chunk__19598 = G__19667;
count__19599 = G__19668;
i__19600 = G__19669;
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
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var ed = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__19670 = cljs.core.conj.call(null,via,t);
var G__19671 = cljs.core.ex_cause.call(null,t);
via = G__19670;
t = G__19671;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var root_msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var data = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5457__auto__)){
var phase = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
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
var map__19674 = datafied_throwable;
var map__19674__$1 = (((((!((map__19674 == null))))?(((((map__19674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19674):map__19674);
var via = cljs.core.get.call(null,map__19674__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__19674__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__19674__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19675 = cljs.core.last.call(null,via);
var map__19675__$1 = (((((!((map__19675 == null))))?(((((map__19675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19675):map__19675);
var type = cljs.core.get.call(null,map__19675__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__19675__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__19675__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19676 = data;
var map__19676__$1 = (((((!((map__19676 == null))))?(((((map__19676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19676):map__19676);
var problems = cljs.core.get.call(null,map__19676__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__19676__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__19676__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19677 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__19677__$1 = (((((!((map__19677 == null))))?(((((map__19677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19677):map__19677);
var top_data = map__19677__$1;
var source = cljs.core.get.call(null,map__19677__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__19682 = phase;
var G__19682__$1 = (((G__19682 instanceof cljs.core.Keyword))?G__19682.fqn:null);
switch (G__19682__$1) {
case "read-source":
var map__19683 = data;
var map__19683__$1 = (((((!((map__19683 == null))))?(((((map__19683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19683):map__19683);
var line = cljs.core.get.call(null,map__19683__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__19683__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19685 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__19685__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__19685,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19685);
var G__19685__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__19685__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19685__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__19685__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19685__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19686 = top_data;
var G__19686__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__19686,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19686);
var G__19686__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__19686__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19686__$1);
var G__19686__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__19686__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19686__$2);
var G__19686__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__19686__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19686__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__19686__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19686__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19687 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__19687,(0),null);
var method = cljs.core.nth.call(null,vec__19687,(1),null);
var file = cljs.core.nth.call(null,vec__19687,(2),null);
var line = cljs.core.nth.call(null,vec__19687,(3),null);
var G__19690 = top_data;
var G__19690__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__19690,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19690);
var G__19690__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__19690__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19690__$1);
var G__19690__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__19690__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19690__$2);
var G__19690__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__19690__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19690__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__19690__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19690__$4;
}

break;
case "execution":
var vec__19691 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__19691,(0),null);
var method = cljs.core.nth.call(null,vec__19691,(1),null);
var file = cljs.core.nth.call(null,vec__19691,(2),null);
var line = cljs.core.nth.call(null,vec__19691,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__19691,source__$1,method,file,line,G__19682,G__19682__$1,map__19674,map__19674__$1,via,trace,phase,map__19675,map__19675__$1,type,message,data,map__19676,map__19676__$1,problems,fn,caller,map__19677,map__19677__$1,top_data,source){
return (function (p1__19673_SHARP_){
var or__4131__auto__ = (p1__19673_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__19673_SHARP_);
}
});})(vec__19691,source__$1,method,file,line,G__19682,G__19682__$1,map__19674,map__19674__$1,via,trace,phase,map__19675,map__19675__$1,type,message,data,map__19676,map__19676__$1,problems,fn,caller,map__19677,map__19677__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__19694 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19694__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__19694,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19694);
var G__19694__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__19694__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19694__$1);
var G__19694__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__19694__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19694__$2);
var G__19694__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__19694__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19694__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__19694__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19694__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19682__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19698){
var map__19699 = p__19698;
var map__19699__$1 = (((((!((map__19699 == null))))?(((((map__19699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19699):map__19699);
var triage_data = map__19699__$1;
var phase = cljs.core.get.call(null,map__19699__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__19699__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__19699__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__19699__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__19699__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__19699__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__19699__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__19699__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19701 = phase;
var G__19701__$1 = (((G__19701 instanceof cljs.core.Keyword))?G__19701.fqn:null);
switch (G__19701__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19702_19711 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19703_19712 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19704_19713 = true;
var _STAR_print_fn_STAR__temp_val__19705_19714 = ((function (_STAR_print_newline_STAR__orig_val__19702_19711,_STAR_print_fn_STAR__orig_val__19703_19712,_STAR_print_newline_STAR__temp_val__19704_19713,sb__4661__auto__,G__19701,G__19701__$1,loc,class_name,simple_class,cause_type,format,map__19699,map__19699__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__19702_19711,_STAR_print_fn_STAR__orig_val__19703_19712,_STAR_print_newline_STAR__temp_val__19704_19713,sb__4661__auto__,G__19701,G__19701__$1,loc,class_name,simple_class,cause_type,format,map__19699,map__19699__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19704_19713;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19705_19714;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__19702_19711,_STAR_print_fn_STAR__orig_val__19703_19712,_STAR_print_newline_STAR__temp_val__19704_19713,_STAR_print_fn_STAR__temp_val__19705_19714,sb__4661__auto__,G__19701,G__19701__$1,loc,class_name,simple_class,cause_type,format,map__19699,map__19699__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__19702_19711,_STAR_print_fn_STAR__orig_val__19703_19712,_STAR_print_newline_STAR__temp_val__19704_19713,_STAR_print_fn_STAR__temp_val__19705_19714,sb__4661__auto__,G__19701,G__19701__$1,loc,class_name,simple_class,cause_type,format,map__19699,map__19699__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__19696_SHARP_){
return cljs.core.dissoc.call(null,p1__19696_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__19702_19711,_STAR_print_fn_STAR__orig_val__19703_19712,_STAR_print_newline_STAR__temp_val__19704_19713,_STAR_print_fn_STAR__temp_val__19705_19714,sb__4661__auto__,G__19701,G__19701__$1,loc,class_name,simple_class,cause_type,format,map__19699,map__19699__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__19702_19711,_STAR_print_fn_STAR__orig_val__19703_19712,_STAR_print_newline_STAR__temp_val__19704_19713,_STAR_print_fn_STAR__temp_val__19705_19714,sb__4661__auto__,G__19701,G__19701__$1,loc,class_name,simple_class,cause_type,format,map__19699,map__19699__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19703_19712;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19702_19711;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19706_19715 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19707_19716 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19708_19717 = true;
var _STAR_print_fn_STAR__temp_val__19709_19718 = ((function (_STAR_print_newline_STAR__orig_val__19706_19715,_STAR_print_fn_STAR__orig_val__19707_19716,_STAR_print_newline_STAR__temp_val__19708_19717,sb__4661__auto__,G__19701,G__19701__$1,loc,class_name,simple_class,cause_type,format,map__19699,map__19699__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__19706_19715,_STAR_print_fn_STAR__orig_val__19707_19716,_STAR_print_newline_STAR__temp_val__19708_19717,sb__4661__auto__,G__19701,G__19701__$1,loc,class_name,simple_class,cause_type,format,map__19699,map__19699__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19708_19717;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19709_19718;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__19706_19715,_STAR_print_fn_STAR__orig_val__19707_19716,_STAR_print_newline_STAR__temp_val__19708_19717,_STAR_print_fn_STAR__temp_val__19709_19718,sb__4661__auto__,G__19701,G__19701__$1,loc,class_name,simple_class,cause_type,format,map__19699,map__19699__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__19706_19715,_STAR_print_fn_STAR__orig_val__19707_19716,_STAR_print_newline_STAR__temp_val__19708_19717,_STAR_print_fn_STAR__temp_val__19709_19718,sb__4661__auto__,G__19701,G__19701__$1,loc,class_name,simple_class,cause_type,format,map__19699,map__19699__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__19697_SHARP_){
return cljs.core.dissoc.call(null,p1__19697_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__19706_19715,_STAR_print_fn_STAR__orig_val__19707_19716,_STAR_print_newline_STAR__temp_val__19708_19717,_STAR_print_fn_STAR__temp_val__19709_19718,sb__4661__auto__,G__19701,G__19701__$1,loc,class_name,simple_class,cause_type,format,map__19699,map__19699__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__19706_19715,_STAR_print_fn_STAR__orig_val__19707_19716,_STAR_print_newline_STAR__temp_val__19708_19717,_STAR_print_fn_STAR__temp_val__19709_19718,sb__4661__auto__,G__19701,G__19701__$1,loc,class_name,simple_class,cause_type,format,map__19699,map__19699__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19707_19716;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19706_19715;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19701__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map

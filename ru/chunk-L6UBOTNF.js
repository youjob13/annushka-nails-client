import{a as at,b as st,c as lt}from"./chunk-4MG5WAM4.js";import{a as tt,b as nt}from"./chunk-XMXDS5TF.js";import{b as Ke}from"./chunk-RWVY6X7A.js";import{a as B,b as He}from"./chunk-ZB42FBZS.js";import{a as Xe,b as Je,c as et}from"./chunk-JXPG3A3L.js";import{s as We,w as it,x as ot,y as rt}from"./chunk-LXHUPWRU.js";import{B as Ae,D as Fe,Da as Re,F as ze,G as Z,H as W,J as X,Mc as Qe,Na as Ve,Pa as je,Q as L,Qc as Ue,Rc as Ge,Va as J,Xa as ee,cc as te,gb as Ne,ib as $e,kd as Ye,ld as Ze,md as R,na as k,nd as D,oa as Le,pb as qe,u as Ee,vd as ut,z as Se,za as Be}from"./chunk-V5O3HANM.js";import{m as Ie,n as Oe,r as ke,s as z,t as De,v as x}from"./chunk-C64TW5TN.js";import{$b as c,A as se,Cc as h,Dc as F,Ea as _,Fa as m,Fc as Q,Ga as g,I as le,Ic as U,J as ue,Jb as N,Jc as G,L as ce,Nc as Y,Pa as v,Qa as T,Qb as f,Sb as a,Tb as he,Ub as E,Wc as Pe,Xa as A,Xb as Ce,Ya as _e,Yb as ve,Zb as Te,_b as s,ac as P,bc as $,cc as H,dc as S,ec as b,i as oe,jc as xe,la as de,ma as me,mc as p,n as re,nc as M,oc as be,pc as Me,qc as ye,r as ae,sa as d,sc as q,tc as K,ub as ge,uc as I,vc as O,wb as l,wc as we,xa as pe,xb as u,z as w,zb as fe}from"./chunk-Q3LASK2U.js";var ct=(()=>{class e{constructor(t){this.tuiPan=t;}}return e.ɵfac=function(t){return new(t||e)(u(J));},e.ɵdir=g({type:e,selectors:[["","tuiPan",""]],outputs:{tuiPan:"tuiPan"},features:[h([J])]}),e;})(),dt=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)();},e.ɵmod=m({type:e}),e.ɵinj=d({}),e;})();var mt=(()=>{class e{constructor(t){this.tuiSwipe=t;}}return e.ɵfac=function(t){return new(t||e)(u(ee));},e.ɵdir=g({type:e,selectors:[["","tuiSwipe",""]],outputs:{tuiSwipe:"tuiSwipe"},features:[h([ee])]}),e;})(),pt=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)();},e.ɵmod=m({type:e}),e.ɵinj=d({}),e;})();var _t=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)();},e.ɵmod=m({type:e}),e.ɵinj=d({imports:[[x,Qe]]}),e;})();function bt(e,i){e&1&&S(0);}function Mt(e,i){if(e&1){let t=b();s(0,"fieldset",5),p("waIntersectionObservee",function(o){let r=v(t).index,C=M();return T(C.onIntersection(o[0],r));}),S(1,6),c();}if(e&2){let t=i.$implicit,n=i.index,o=M();a("disabled",o.isDisabled(n))("ngStyle",o.getStyle(o.itemsCount)),l(),a("ngTemplateOutlet",t);}}var yt=(()=>{class e{constructor(t){this.el=t,this.tuiCarouselScroll=k(this.el.nativeElement,"wheel").pipe(ce(({deltaX:n})=>Math.abs(n)>20),me(500),w(({deltaX:n})=>Math.sign(n)),de(()=>{this.el.nativeElement.scrollLeft=10;}));}}return e.ɵfac=function(t){return new(t||e)(u(A));},e.ɵdir=g({type:e,selectors:[["","tuiCarouselScroll",""]],outputs:{tuiCarouselScroll:"tuiCarouselScroll"}}),e;})(),ne=(()=>{class e extends oe{constructor(t,n){super(o=>this.output$.subscribe(o)),this.el=t,this.visible$=n,this.duration$=new re(0),this.running$=ue(k(this.el.nativeElement,"mouseenter").pipe(w(Z)),k(this.el.nativeElement,"touchstart").pipe(w(Z)),k(this.el.nativeElement,"touchend").pipe(w(W)),k(this.el.nativeElement,"mouseleave").pipe(w(W)),this.visible$),this.output$=se([this.duration$,this.running$]).pipe(Le(([o])=>le(o),o=>o.every(Boolean)));}set duration(t){this.duration$.next(t);}set index(t){this.duration$.next(this.duration$.value);}}return e.ɵfac=function(t){return new(t||e)(u(A),u(Re));},e.ɵdir=g({type:e,selectors:[["tui-carousel"]],inputs:{duration:"duration",index:"index"},features:[N]}),e;})(),wt=(()=>{class e{constructor(t){this.tuiCarouselAutoscroll=t;}}return e.ɵfac=function(t){return new(t||e)(u(ne));},e.ɵdir=g({type:e,selectors:[["","tuiCarouselAutoscroll",""]],outputs:{tuiCarouselAutoscroll:"tuiCarouselAutoscroll"}}),e;})(),gt=(()=>{class e{constructor(t,n,o){this.cdr=t,this.el=n,this.isMobile=o,this.translate=0,this.draggable=!1,this.itemsCount=1,this.index=0,this.indexChange=new _e(),this.items=X,this.transitioned=!0;}get transform(){return`translateX(${100*(this.transitioned?this.computedTranslate:this.translate)}%)`;}onTransitioned(t){this.transitioned=t,t||(this.translate=this.computedTranslate);}getStyle(t){let n=`${100/t}%`;return{flexBasis:n,minWidth:n,maxWidth:n};}next(){this.items&&this.index===this.items.length-this.itemsCount||this.updateIndex(this.index+1);}prev(){this.updateIndex(this.index-1);}isDisabled(t){return t<this.index||t>this.index+this.itemsCount;}onIntersection({intersectionRatio:t},n){t&&t>=.5&&!this.transitioned&&this.updateIndex(this.index<n?n-this.itemsCount+1:n);}onScroll(t){this.isMobile||this.updateIndex(this.index+t);}onPan(t){if(!this.computedDraggable)return;let{clientWidth:n}=this.el.nativeElement,o=1-this.items.length/this.itemsCount;this.translate=L(t/n+this.translate,o,0);}onSwipe(t){t==="left"?this.next():t==="right"&&this.prev();}onAutoscroll(){this.updateIndex(this.index===this.items.length-1?0:this.index+1);}get computedTranslate(){return-this.index/this.itemsCount;}get computedDraggable(){return this.isMobile||this.draggable;}updateIndex(t){this.index=L(t,0,this.items.length-1),this.indexChange.emit(this.index),this.cdr.markForCheck();}}return e.ɵfac=function(t){return new(t||e)(u(Pe),u(A),u(Ve));},e.ɵcmp=_({type:e,selectors:[["tui-carousel"]],contentQueries:function(t,n,o){if(t&1&&ye(o,B,4,fe),t&2){let r;q(r=K())&&(n.items=r);}},hostVars:4,hostBindings:function(t,n){t&1&&p("touchstart",function(){return n.onTransitioned(!1);})("touchend",function(){return n.onTransitioned(!0);})("mousedown",function(){return n.onTransitioned(!1);})("mouseup.silent",function(){return n.onTransitioned(!0);},!1,ge),t&2&&E("_draggable",n.draggable)("_transitioned",n.transitioned);},inputs:{draggable:"draggable",itemsCount:"itemsCount",index:"index"},outputs:{indexChange:"indexChange"},features:[h([{provide:je,useValue:{timeout:200,threshold:30}}])],decls:6,vars:6,consts:[[4,"ngIf"],[1,"t-scroller",3,"tuiCarouselScroll"],["waIntersectionObserver","","waIntersectionThreshold","0.5",1,"t-wrapper"],[1,"t-items",3,"tuiCarouselAutoscroll","tuiPan","tuiSwipe"],["class","t-item",3,"disabled","ngStyle","waIntersectionObservee",4,"ngFor","ngForOf"],[1,"t-item",3,"waIntersectionObservee","disabled","ngStyle"],[3,"ngTemplateOutlet"]],template:function(t,n){t&1&&(f(0,bt,1,0,"ng-container",0),U(1,"async"),s(2,"div",1),p("tuiCarouselScroll",function(r){return n.onScroll(r);}),s(3,"div",2)(4,"div",3),p("tuiCarouselAutoscroll",function(){return n.onAutoscroll();})("tuiPan",function(r){return n.onPan(r[0]);})("tuiSwipe",function(r){return n.onSwipe(r.direction);}),f(5,Mt,2,3,"fieldset",4),c()()()),t&2&&(a("ngIf",G(1,4,n.items.changes)),l(4),he("transform",n.transform),l(),a("ngForOf",n.items));},dependencies:[Oe,yt,Xe,wt,ct,mt,Ie,ke,Je,z,De],styles:['[_nghost-%COMP%]{position:relative;display:block;overflow:hidden}._draggable[_nghost-%COMP%]{-webkit-user-select:none;-moz-user-select:none;user-select:none}._draggable[_nghost-%COMP%]:hover{cursor:grab}._draggable[_nghost-%COMP%]:active{cursor:grabbing}.t-items[_ngcontent-%COMP%]{display:flex}._transitioned[_nghost-%COMP%]   .t-items[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.t-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;padding:var(--tui-carousel-padding, 0 1.25rem);flex:1;min-width:100%;max-width:100%;box-sizing:border-box;border:none;margin:0}.t-wrapper[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;left:0;right:0;min-width:100%;overflow:hidden}.t-scroller[_ngcontent-%COMP%]{scrollbar-width:none;-ms-overflow-style:none;display:flex;overflow:auto;overscroll-behavior-x:none;touch-action:none}.t-scroller[_ngcontent-%COMP%]::-webkit-scrollbar, .t-scroller[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{display:none}.t-scroller[_ngcontent-%COMP%]:before, .t-scroller[_ngcontent-%COMP%]:after{content:"";display:block;min-width:1rem}'],changeDetection:0}),ae([Ne],e.prototype,"getStyle",null),e;})(),ft=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)();},e.ɵdir=g({type:e,selectors:[["","tuiCarouselButtons",""]],features:[h([Ze({appearance:te.Secondary,shape:"rounded",size:"m"})])]}),e;})(),V=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)();},e.ɵmod=m({type:e}),e.ɵinj=d({imports:[[x,et,dt,pt,He]]}),e;})();var Pt=["*"],ht=(()=>{class e{constructor(){this.size="m",this.textAlign="left",this.hoverable=!1,this.transparent=!1;}get sizeS(){return this.size==="s";}get sizeM(){return this.size==="m";}get sizeL(){return this.size==="l";}get textAlignLeft(){return this.textAlign==="left";}get textAlignCenter(){return this.textAlign==="center";}get textAlignRight(){return this.textAlign==="right";}}return e.ɵfac=function(t){return new(t||e)();},e.ɵcmp=_({type:e,selectors:[["tui-island"],["a","tuiIsland",""]],hostAttrs:[1,"tui-island"],hostVars:16,hostBindings:function(t,n){t&2&&E("tui-island_hoverable",n.hoverable)("tui-island_transparent",n.transparent)("tui-island_size_s",n.sizeS)("tui-island_size_m",n.sizeM)("tui-island_size_l",n.sizeL)("tui-island_text-align_left",n.textAlignLeft)("tui-island_text-align_center",n.textAlignCenter)("tui-island_text-align_right",n.textAlignRight);},inputs:{size:"size",textAlign:"textAlign",hoverable:"hoverable",transparent:"transparent"},ngContentSelectors:Pt,decls:1,vars:0,template:function(t,n){t&1&&(be(),Me(0));},styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),e;})(),Ct=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)();},e.ɵmod=m({type:e}),e.ɵinj=d({imports:[[x]]}),e;})();var vt=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)();},e.ɵmod=m({type:e}),e.ɵinj=d({imports:[[x,Be,Ke,qe,$e,D]]}),e;})();var kt=e=>({item:e});function Dt(e,i){e&1&&S(0);}function Et(e,i){if(e&1&&($(0),f(1,Dt,1,0,"ng-container",6),H()),e&2){let t=M().$implicit,n=M();l(),a("ngTemplateOutlet",n.content)("ngTemplateOutletContext",Q(2,kt,t));}}function St(e,i){e&1&&f(0,Et,2,4,"ng-container",5);}var Tt=(()=>{let i=class i{constructor(){this.content=null,this.items=["Danil Rodionov","Dmitriy Hek","Aleh True","Anya Ch","Mishel Bosmand","Michail Row","Kiril Lebidov"],this.index=0;}get background(){switch(this.index){case 0:return"url(https://cdn.tvc.ru/pictures/mood/bw/194/22.jpg)";case 1:return"url(https://ic.pics.livejournal.com/ruhtal/6943012/12468/12468_900.jpg)";default:return"url(https://cdn.motor1.com/images/mgl/28bxz/s1/ford-carousel.jpg)";}}navigate(n){this.index=this.index+n<0?2:(this.index+n)%3;}};i.ɵfac=function(o){return new(o||i)();},i.ɵcmp=_({type:i,selectors:[["ann-carousel"]],inputs:{content:"content"},standalone:!0,features:[F],decls:7,vars:2,consts:[["carousel",""],["tuiCarouselButtons","",1,"wrapper"],["icon","tuiIconChevronLeftLarge","title","Previous","tuiIconButton","","type","button",3,"click"],[1,"carousel",3,"duration","itemsCount"],["icon","tuiIconChevronRightLarge","title","Next","tuiIconButton","","type","button",3,"click"],[4,"tuiItem"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(o,r){if(o&1){let C=b();s(0,"div",1)(1,"button",2),p("click",function(){v(C);let j=I(3);return T(j.prev());}),c(),s(2,"tui-carousel",3,0),ve(4,St,1,0,"ng-container",null,Ce),c(),s(6,"button",4),p("click",function(){v(C);let j=I(3);return T(j.next());}),c()();}o&2&&(l(2),a("duration",1e4)("itemsCount",3),l(2),Te(r.items));},dependencies:[D,R,V,gt,ne,ft,B,ut,z,vt,Ye],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}"],changeDetection:0});let e=i;return e;})();function At(e,i){if(e&1&&(s(0,"tui-island",8)(1,"div",9),P(2,"tui-avatar",10),s(3,"h2",11),O(4),c()(),s(5,"tui-scrollbar",12),O(6," Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos excepturi, velit est magni nulla laudantium a, libero debitis cupiditate, eius atque quas minima. Dignissimos voluptatem asperiores totam error recusandae facilis? "),c()()),e&2){let t=i.item;l(2),a("text",t)("rounded",!0),l(2),we(t);}}var Nn=(()=>{let i=class i{constructor(){this.fb=pe(Fe),this.formModel=this.fb.group({name:this.fb.control("",{nonNullable:!0}),message:this.fb.control("",{nonNullable:!0})});}get nameControl(){return this.formModel.controls.name;}get messageControl(){return this.formModel.controls.message;}sendFeedback(){}};i.ɵfac=function(o){return new(o||i)();},i.ɵcmp=_({type:i,selectors:[["ann-feedbacks"]],standalone:!0,features:[F],decls:11,vars:10,consts:()=>{let n;return n=" Give your feedback ",[["cardRef",""],n,[1,"feedback-list",3,"content"],[1,"give-feedback"],[1,"control",3,"required","readOnly","disabled","formControl"],["tuiTextfield","","type","email"],[1,"comment",3,"required","readOnly","disabled","formControl"],["tuiButton","","type","button",3,"click","disabled"],[1,"feedback-item","tui-island_text-align_center"],[1,"header"],["size","m",3,"text","rounded"],[1,"tui-island__title"],[1,"box"]];},template:function(o,r){if(o&1){let C=b();P(0,"ann-carousel",2),s(1,"div",3)(2,"tui-input",4),O(3," Type name "),P(4,"input",5),c(),s(5,"tui-textarea",6),xe(6,1),c(),s(7,"button",7),p("click",function(){return v(C),T(r.sendFeedback());}),O(8," Send feedback "),c()(),f(9,At,7,3,"ng-template",null,0,Y);}if(o&2){let C=I(10);a("content",C),l(2),a("required",!0)("readOnly",!1)("disabled",!1)("formControl",r.nameControl),l(3),a("required",!0)("readOnly",!1)("disabled",!1)("formControl",r.messageControl),l(2),a("disabled",r.formModel.invalid);}},dependencies:[Tt,V,Ct,ht,_t,nt,tt,Ge,Ue,rt,it,ot,We,ze,Ee,Ae,Se,lt,at,st,D,R],styles:[".tui-island__title[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]{display:flex;flex-direction:column;row-gap:50px;margin-top:100px}.feedback-list[_ngcontent-%COMP%]{display:block;margin:0 auto;width:70%}.feedback-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;row-gap:10px}.header[_ngcontent-%COMP%]{display:flex;align-items:center;column-gap:20px}.box[_ngcontent-%COMP%]{height:50px;padding:0 .6875rem;overflow:auto}.give-feedback[_ngcontent-%COMP%]{margin:0 auto;display:flex;flex-direction:column;width:300px;column-gap:15px;row-gap:10px}"],changeDetection:0});let e=i;return e;})();export{Nn as FeedbacksComponent};/**i18n:15532d68a152d1b02ceb639d7639ec309fa9c79309c98a8bae3fa72f0bf19670*/
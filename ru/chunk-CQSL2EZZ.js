import{a as vt,b as Pt,c as Tt,d as Mt,f as xt,h as Nt}from"./chunk-CMXOVO5Y.js";import{b as kt}from"./chunk-FLTMJKKZ.js";import{e as Wt}from"./chunk-RKREOUPB.js";import{a as yt,b as Ot}from"./chunk-VKWGOO6H.js";import{a as K,c as Re}from"./chunk-P7EO3GSH.js";import{a as Ft,b as zt,c as Et,d as Rt,e as Vt,f as Lt,q as De,r as Ht,t as $t,w as Se,x as Fe,y as ze}from"./chunk-UG7PIBPW.js";import{$a as ve,Aa as Ct,Bc as Dt,C as ce,D as de,E as pe,Ea as _t,F as me,I as pt,Ib as It,Ka as Ce,Mc as R,Nc as V,Oc as St,P as mt,Pc as Te,T as ge,Zc as Me,_ as gt,_a as _e,_c as Bt,cd as jt,dc as Qe,dd as we,ed as q,hd as be,ia as ht,id as ye,jd as Oe,k as ut,kb as wt,kd as xe,lb as bt,md as ke,nd as Ie,p as Ge,s as S,sd as At,t as ne,u as se,v as ae,vc as Pe,vd as Ee,w as ct,x as dt,xa as ft,y as le,ya as he,z as ue,za as fe}from"./chunk-NN4L5LTW.js";import{C as lt,n as re,r as at,t as G,w as Q}from"./chunk-W7PNLN7K.js";import{$b as u,A as Ae,Ac as N,Bc as W,Cc as U,Dc as j,Ec as E,Fa as h,Fc as Ue,Ga as z,Gc as J,Ha as We,Ia as Ke,Jc as k,Kb as y,Kc as I,Oc as D,Qa as f,Ra as C,Rb as _,Sa as et,Sb as O,Ta as tt,Tb as a,Ub as ee,V as Ye,Vb as te,Xc as oe,Y as Je,Ya as it,Za as ot,ac as c,bc as d,cc as rt,dc as nt,fc as x,ia as Ne,n as $e,nc as M,oc as v,p as Xe,pc as ie,qc as B,sc as H,ta as F,tc as $,uc as A,v as Ze,vc as m,wc as w,xb as l,ya as Y,yb as p,yc as st,z as Z}from"./chunk-Z3I3URR3.js";var Ut=(()=>{let i=class i{};i.\u0275fac=function(r){return new(r||i)},i.\u0275cmp=h({type:i,selectors:[["ng-component"]],standalone:!0,features:[E],decls:2,vars:0,consts:[[1,"content"]],template:function(r,n){r&1&&(u(0,"div",0),d(1,"router-outlet"),c())},dependencies:[ut],styles:["[_nghost-%COMP%]{width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;overflow:hidden}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}img[_ngcontent-%COMP%]{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-user-drag:none}"],changeDetection:0});let e=i;return e})();var si=["*",[["input"]]],ai=["*","input"],li=e=>({$implicit:e});function ui(e,i){if(e&1){let t=x();u(0,"tui-svg",7),k(1,"async"),M("click",function(){f(t);let r=v(3);return C(r.togglePasswordVisibility())}),c()}if(e&2){let t=i.polymorpheusOutlet,o=v().ngIf,r=m(3),n=v(2);a("src",t)("tuiHint",o[0]&&o[1]&&r)("tuiHintAppearance",I(1,4,n.computedAppearance$)||"")("tuiHintDirection",(n.hintOptions==null?null:n.hintOptions.direction)||"bottom-left")}}function ci(e,i){if(e&1&&w(0),e&2){let t=v().ngIf,o=v(2);st(" ",o.isPasswordHidden?t[0]:t[1]," ")}}function di(e,i){if(e&1&&(rt(0),_(1,ui,2,6,"tui-svg",5)(2,ci,1,1,"ng-template",6,1,D),nt()),e&2){let t=v(2);l(),a("polymorpheusOutlet",t.icon)("polymorpheusOutletContext",J(2,li,t.size))}}function pi(e,i){if(e&1&&(_(0,di,4,4,"ng-container",4),k(1,"async")),e&2){let t=v();a("ngIf",I(1,1,t.passwordTexts$))}}var mi={icons:{hide:({$implicit:e})=>e==="s"?"tuiIconEyeOff":"tuiIconEyeOffLarge",show:({$implicit:e})=>e==="s"?"tuiIconEye":"tuiIconEyeLarge"}},gi=ge(mi);var Ve=(()=>{class e extends _e{constructor(t,o,r,n,s,T,P){var g;super(t,o),this.textfieldSize=r,this.passwordTexts$=n,this.options=s,this.hintOptions=T,this.mode$=P,this.directive$=((g=this.hintOptions)===null||g===void 0?void 0:g.change$)||Xe,this.isPasswordHidden=!0,this.computedAppearance$=Ae([this.mode$.pipe(Z(b=>b==="onDark"?"onDark":"")),this.directive$.pipe(Ne(null),Z(()=>{var b;return((b=this.hintOptions)===null||b===void 0?void 0:b.appearance)||""}))]).pipe(Z(([b,oi])=>oi||b),Ne(""))}get size(){return this.textfieldSize.size}get nativeFocusableElement(){return this.computedDisabled||!this.textfield?null:this.textfield.nativeFocusableElement}get focused(){var t;return!!(!((t=this.textfield)===null||t===void 0)&&t.focused)}get icon(){return this.isPasswordHidden?this.options.icons.hide:this.options.icons.show}get inputType(){return this.isPasswordHidden||!this.interactive?"password":"text"}onValueChange(t){this.value=t}onFocused(t){this.updateFocused(t)}togglePasswordVisibility(){this.isPasswordHidden=!this.isPasswordHidden}getFallbackValue(){return""}}return e.\u0275fac=function(t){return new(t||e)(p(ne,10),p(oe),p(jt),p(At),p(gi),p(Ft,8),p(Pe))},e.\u0275cmp=h({type:e,selectors:[["tui-input-password"]],viewQuery:function(t,o){if(t&1&&H(De,5),t&2){let r;$(r=A())&&(o.textfield=r.first)}},hostVars:1,hostBindings:function(t,o){t&2&&O("data-size",o.size)},features:[j([Ce(e),ve(e),Te]),y],ngContentSelectors:ai,decls:5,vars:11,consts:[["iconContent","polymorpheus"],["hintContent","polymorpheus"],[1,"t-textfield",3,"valueChange","focusedChange","disabled","focusable","invalid","nativeId","pseudoActive","pseudoFocus","pseudoHover","readOnly","tuiTextfieldIcon","value"],[3,"polymorpheus"],[4,"ngIf"],["appearance","icon","automation-id","tui-password__icon","tuiWrapper","","class","t-icon",3,"src","tuiHint","tuiHintAppearance","tuiHintDirection","click",4,"polymorpheusOutlet","polymorpheusOutletContext"],["polymorpheus",""],["appearance","icon","automation-id","tui-password__icon","tuiWrapper","",1,"t-icon",3,"click","src","tuiHint","tuiHintAppearance","tuiHintDirection"]],template:function(t,o){if(t&1){let r=x();ie(si),u(0,"tui-primitive-textfield",2),U("valueChange",function(s){return f(r),W(o.value,s)||(o.value=s),C(s)}),M("focusedChange",function(s){return f(r),C(o.onFocused(s))}),B(1),B(2,1,["ngProjectAs","input",5,["input"]]),c(),_(3,pi,2,3,"ng-template",3,0,D)}if(t&2){let r=m(4);a("disabled",o.computedDisabled)("focusable",o.focusable)("invalid",o.computedInvalid)("nativeId",o.nativeId)("pseudoActive",o.pseudoActive)("pseudoFocus",o.pseudoFocus)("pseudoHover",o.pseudoHover)("readOnly",o.readOnly)("tuiTextfieldIcon",o.interactive?r:""),N("value",o.value),l(3),a("polymorpheus",o.type)}},dependencies:[De,R,Ht,Bt,ft,re,he,be,zt,Vt,Et,Rt,G],styles:["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:left}.t-icon[_ngcontent-%COMP%]{cursor:pointer;pointer-events:auto}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}"],changeDetection:0}),e})(),Le=(()=>{class e extends It{onValueChange(t){this.host.onValueChange(t)}process(t){this.input=t}ngDoCheck(){this.host.nativeFocusableElement&&gt(this.host.nativeFocusableElement)&&(this.host.nativeFocusableElement.type=this.host.inputType)}}return e.\u0275fac=(()=>{let i;return function(o){return(i||(i=tt(e)))(o||e)}})(),e.\u0275dir=We({type:e,selectors:[["tui-input-password"]],features:[j([Dt(e)]),y]}),e})(),Be=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=z({type:e}),e.\u0275inj=F({imports:[[Q,pe,fe,ye,V,Lt,$t,q]]}),e})();var hi=["progressCircle"],fi=["tuiProgressLabel",""],Ci=[[["progress"]],[["tui-progress-circle"]],"*"],_i=["progress","tui-progress-circle","*"];var Qt=(()=>{class e{constructor(t,o,r,n){this.userAgent=t,this.win=o,this.el=r,this.mode$=n,this.value=0,this.max=1,this.color=null,this.size="m",this.animationDelay$=Ze(!0).pipe(Ye(0))}get progressRatio(){let t=this.value/this.max;return Number.isFinite(t)?t:0}get oldEdgeRadiusFallback(){if(!mt(pt,this.userAgent))return null;let t=parseInt(this.win.getComputedStyle(this.progressCircle.nativeElement).strokeWidth,10);return(this.el.nativeElement.offsetWidth-t)/2}}return e.\u0275fac=function(t){return new(t||e)(p(_t),p(Ct),p(it),p(Pe))},e.\u0275cmp=h({type:e,selectors:[["tui-progress-circle"]],viewQuery:function(t,o){if(t&1&&H(hi,7),t&2){let r;$(r=A())&&(o.progressCircle=r.first)}},hostVars:5,hostBindings:function(t,o){t&1&&M("$.data-mode.attr",function(){return o.mode$}),t&2&&(O("data-size",o.size),ee("--tui-progress-color",o.color)("--progress-ratio",o.progressRatio))},inputs:{value:"value",max:"max",color:"color",size:"size"},features:[j([Te])],decls:6,vars:8,consts:[["progressCircle",""],[1,"t-hidden-progress",3,"max","value"],["aria-hidden","true","height","100%","width","100%",1,"t-svg"],["cx","50%","cy","50%",1,"t-track"],["cx","50%","cy","50%",1,"t-progress"]],template:function(t,o){t&1&&(d(0,"progress",1),et(),u(1,"svg",2),d(2,"circle",3)(3,"circle",4,0),k(5,"async"),c()),t&2&&(a("max",o.max)("value",o.value),l(2),O("r",o.oldEdgeRadiusFallback),l(),te("t-progress_filled",I(5,6,o.animationDelay$)),O("r",o.oldEdgeRadiusFallback))},dependencies:[G],styles:["[_nghost-%COMP%]{position:relative;display:block;color:var(--tui-primary);transform:rotate(-90deg);transform-origin:center;font-size:1rem;width:var(--t-diameter);height:var(--t-diameter)}[data-mode=onDark][_nghost-%COMP%]{--tui-clear: var(--tui-clear-inverse)}[data-size=s][_nghost-%COMP%]{--t-diameter: 2em;--t-track-stroke: .5em;--t-progress-stroke: .5em}[data-size=m][_nghost-%COMP%]{--t-diameter: 3em;--t-track-stroke: .375em;--t-progress-stroke: .375em}[data-size=l][_nghost-%COMP%]{--t-diameter: 4em;--t-track-stroke: .375em;--t-progress-stroke: .375em}[data-size=xl][_nghost-%COMP%]{--t-diameter: 7em;--t-track-stroke: .375em;--t-progress-stroke: .375em}[new][_nghost-%COMP%]{--t-track-stroke: var(--tui-thickness, .375em);--t-progress-stroke: var(--tui-thickness, .375em)}[new][data-size=xxs][_nghost-%COMP%]{--t-diameter: 2rem}[new][data-size=xs][_nghost-%COMP%]{--t-diameter: 2.5rem}[new][data-size=s][_nghost-%COMP%]{--t-diameter: 3.5rem}[new][data-size=m][_nghost-%COMP%]{--t-diameter: 4rem}[new][data-size=l][_nghost-%COMP%]{--t-diameter: 5rem}[new][data-size=xl][_nghost-%COMP%]{--t-diameter: 6rem}[new][data-size=xxl][_nghost-%COMP%]{--t-diameter: 8rem}.t-track[_ngcontent-%COMP%]{fill:transparent;stroke:var(--tui-clear);stroke-width:var(--t-track-stroke);r:calc((var(--t-diameter) - var(--t-track-stroke)) / 2)}.t-progress[_ngcontent-%COMP%]{fill:transparent;stroke:var(--tui-progress-color, currentColor);stroke-linecap:round;stroke-width:var(--t-progress-stroke);stroke-dasharray:calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-progress-stroke)) / 2));stroke-dashoffset:calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-progress-stroke)) / 2));r:calc((var(--t-diameter) - var(--t-progress-stroke)) / 2)}.t-progress_filled[_ngcontent-%COMP%]{transition:stroke-dashoffset var(--tui-duration) linear;stroke-dashoffset:calc(calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-progress-stroke)) / 2)) - var(--progress-ratio) * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-progress-stroke)) / 2)))}.t-hidden-progress[_ngcontent-%COMP%]{position:absolute;clip:rect(1px,1px,1px,1px);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;width:1px;margin:-1px;overflow:hidden;padding:0}.t-svg[_ngcontent-%COMP%]{overflow:unset}"],changeDetection:0}),e})(),qt=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=h({type:e,selectors:[["label","tuiProgressLabel",""]],attrs:fi,ngContentSelectors:_i,decls:4,vars:0,consts:[[1,"t-label"]],template:function(t,o){t&1&&(ie(Ci),B(0),B(1,1),u(2,"span",0),B(3,2),c())},styles:["[_nghost-%COMP%]{position:relative;display:inline-block;color:var(--tui-text-01)}.t-label[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;font:var(--tui-font-text-s);flex-direction:column;justify-content:center;align-items:center}"],changeDetection:0}),e})();var X=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=z({type:e}),e.\u0275inj=F({imports:[[Q,kt]]}),e})();var vi=["focusableElement"],Xt=e=>({$implicit:e});function Pi(e,i){if(e&1&&d(0,"tui-loader",7),e&2){let t=v();a("inheritColor",!0)("showLoader",t.value)("size",t.loaderSize)}}function Ti(e,i){if(e&1&&d(0,"tui-svg",10),e&2){let t=i.polymorpheusOutlet;a("src",t)}}function Mi(e,i){if(e&1&&(u(0,"span",8),_(1,Ti,1,1,"tui-svg",9),c()),e&2){let t=v();l(),a("polymorpheusOutlet",t.iconOn)("polymorpheusOutletContext",J(2,Xt,t.size))}}function wi(e,i){if(e&1&&d(0,"tui-loader",7),e&2){let t=v();a("inheritColor",!0)("showLoader",!t.value)("size",t.loaderSize)}}function bi(e,i){if(e&1&&d(0,"tui-svg",12),e&2){let t=i.polymorpheusOutlet;a("src",t)}}function yi(e,i){if(e&1&&(u(0,"span",8),_(1,bi,1,1,"tui-svg",11),c()),e&2){let t=v();l(),a("polymorpheusOutlet",t.iconOff)("polymorpheusOutletContext",J(2,Xt,t.size))}}var Oi={icons:{toggleOff({$implicit:e}){return e==="m"?"tuiIconToggleOff":"tuiIconToggleOffLarge"},toggleOn({$implicit:e}){return e==="m"?"tuiIconToggleOn":"tuiIconToggleOnLarge"}},appearances:{checked:Qe.Primary,unchecked:Qe.Secondary},singleColor:!1,showIcons:!1,size:"m"},xi=ge(Oi);var Zt=(()=>{class e extends _e{constructor(t,o,r,n){super(t,o),this.modeDirective=r,this.options=n,this.singleColor=this.options.singleColor,this.showIcons=this.options.showIcons,this.showLoader=!1,this.size=this.options.size}get iconOn(){return this.options.icons.toggleOn}get iconOff(){return this.options.icons.toggleOff}get nativeFocusableElement(){var t,o;return(o=(t=this.focusableElement)===null||t===void 0?void 0:t.nativeElement)!==null&&o!==void 0?o:null}get focused(){return ht(this.nativeFocusableElement)}get appearance(){return this.singleColor||this.value?this.options.appearances.checked:this.options.appearances.unchecked}get sizeM(){return this.size==="m"}get loaderSize(){return this.sizeM?"xs":"s"}get hostMode(){var t,o;return(o=(t=this.modeDirective)===null||t===void 0?void 0:t.mode)!==null&&o!==void 0?o:null}onChecked(t){this.value=t}onFocused(t){this.updateFocused(t)}onFocusVisible(t){this.updateFocusVisible(t)}getFallbackValue(){return!1}}return e.\u0275fac=function(t){return new(t||e)(p(ne,10),p(oe),p(St,8),p(xi))},e.\u0275cmp=h({type:e,selectors:[["tui-toggle"]],viewQuery:function(t,o){if(t&1&&H(vi,5),t&2){let r;$(r=A())&&(o.focusableElement=r.first)}},hostVars:4,hostBindings:function(t,o){t&2&&(O("data-size",o.size)("data-mode",o.hostMode),te("_checked",o.value))},inputs:{singleColor:"singleColor",showIcons:"showIcons",showLoader:"showLoader",size:"size"},features:[j([Ce(e),ve(e)]),y],decls:9,vars:16,consts:[["focusableElement",""],["tuiWrapper","",3,"active","appearance","disabled","focus","hover","invalid","readOnly"],[1,"t-toggle"],["class","t-loader",3,"inheritColor","showLoader","size",4,"ngIf"],["class","t-icon-wrapper",4,"ngIf"],[1,"t-circle"],["automation-id","tui-toggle__checkbox","role","switch","type","checkbox",1,"t-checkbox",3,"tuiCheckedChange","tuiFocusedChange","tuiFocusVisibleChange","disabled","id","tuiFocusable","tuiChecked"],[1,"t-loader",3,"inheritColor","showLoader","size"],[1,"t-icon-wrapper"],["automation-id","tui-toggle__check-icon","class","t-icon",3,"src",4,"polymorpheusOutlet","polymorpheusOutletContext"],["automation-id","tui-toggle__check-icon",1,"t-icon",3,"src"],["automation-id","tui-toggle__cancel-icon","class","t-icon t-icon_off",3,"src",4,"polymorpheusOutlet","polymorpheusOutletContext"],["automation-id","tui-toggle__cancel-icon",1,"t-icon","t-icon_off",3,"src"]],template:function(t,o){if(t&1){let r=x();u(0,"div",1)(1,"div",2),_(2,Pi,1,3,"tui-loader",3)(3,Mi,2,4,"span",4),d(4,"div",5),_(5,wi,1,3,"tui-loader",3)(6,yi,2,4,"span",4),c(),u(7,"input",6,0),U("tuiCheckedChange",function(s){return f(r),W(o.value,s)||(o.value=s),C(s)}),M("tuiFocusedChange",function(s){return f(r),C(o.onFocused(s))})("tuiFocusVisibleChange",function(s){return f(r),C(o.onFocusVisible(s))}),c()()}t&2&&(a("active",o.pseudoActive)("appearance",o.appearance)("disabled",o.computedDisabled)("focus",o.computedFocusVisible)("hover",o.pseudoHover)("invalid",o.computedInvalid)("readOnly",o.readOnly),l(2),a("ngIf",o.showLoader),l(),a("ngIf",o.showIcons&&!o.showLoader),l(2),a("ngIf",o.showLoader),l(),a("ngIf",o.showIcons&&!o.showLoader),l(),a("disabled",o.disabled)("id",o.id)("tuiFocusable",o.focusable),N("tuiChecked",o.value),O("aria-checked",o.value))},dependencies:[Oe,R,be,re,he,vt,wt,yt,Tt],styles:["[_nghost-%COMP%]{position:relative;display:inline-block;vertical-align:middle;overflow:hidden;border-radius:6.25rem}[data-size=m][_nghost-%COMP%]{width:2rem;height:1rem}[data-size=l][_nghost-%COMP%]{width:3rem;height:1.5rem}.t-checkbox[_ngcontent-%COMP%]{padding:0;margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;height:100%;width:100%;opacity:0;cursor:pointer}.t-checkbox[_ngcontent-%COMP%]:-webkit-autofill, .t-checkbox[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-checkbox[_ngcontent-%COMP%]:-webkit-autofill:focus{caret-color:var(--tui-base-09);border-radius:inherit;color:inherit!important;background-color:transparent!important;-webkit-text-fill-color:var(--tui-text-01)!important;border-color:var(--tui-autofill);-webkit-box-shadow:0 0 0 100rem var(--tui-autofill) inset!important}._disabled[_nghost-%COMP%]   .t-checkbox[_ngcontent-%COMP%]{pointer-events:none;cursor:default}.t-toggle[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;align-items:center;justify-content:center}[data-size=m][_nghost-%COMP%]   .t-toggle[_ngcontent-%COMP%]{width:3rem;height:1rem;transform:translate(-1rem)}[data-size=l][_nghost-%COMP%]   .t-toggle[_ngcontent-%COMP%]{width:4.5rem;height:1.5rem;transform:translate(-1.5rem)}._checked[_nghost-%COMP%]   .t-toggle[_ngcontent-%COMP%]{transform:translate(0)}.t-circle[_ngcontent-%COMP%]{margin:.125rem 0;flex-shrink:0;border-radius:100%;background-color:var(--tui-base-01)}._disabled[_nghost-%COMP%]   .t-circle_light[_ngcontent-%COMP%]{opacity:.24}[data-size=m][_nghost-%COMP%]   .t-circle[_ngcontent-%COMP%]{width:.75rem;height:.75rem}[data-size=l][_nghost-%COMP%]   .t-circle[_ngcontent-%COMP%]{width:1rem;height:1rem}._disabled[_nghost-%COMP%]   .t-circle[_ngcontent-%COMP%]{background-color:var(--tui-base-01)}.t-loader[_ngcontent-%COMP%]{min-width:auto}[_nghost-%COMP%]:not(._checked)   .t-loader[_ngcontent-%COMP%]{color:var(--tui-base-06)}[_nghost-%COMP%]:not(._checked)._disabled   .t-loader[_ngcontent-%COMP%]{color:var(--tui-base-05)}[_nghost-%COMP%]:not(._checked)[data-mode=onDark]   .t-loader[_ngcontent-%COMP%]{color:var(--tui-text-03-night)}[_nghost-%COMP%]:not(._checked)[data-mode=onDark]._disabled   .t-loader[_ngcontent-%COMP%]{color:var(--tui-clear-inverse-active)}[_nghost-%COMP%]:not(._checked)[data-mode=onLight]   .t-loader[_ngcontent-%COMP%]{color:var(--tui-text-03)}[_nghost-%COMP%]:not(._checked)[data-mode=onLight]._disabled   .t-loader[_ngcontent-%COMP%]{color:var(--tui-clear-active)}[data-size=m][_nghost-%COMP%]   .t-loader[_ngcontent-%COMP%]{width:.75rem;margin:0 .2rem;transform:scale(.75)}[data-size=l][_nghost-%COMP%]   .t-loader[_ngcontent-%COMP%]{width:1rem;margin:0 .25rem}.t-icon-wrapper[_ngcontent-%COMP%]{display:flex}.t-icon[_ngcontent-%COMP%]{opacity:.8}.t-icon_off[_ngcontent-%COMP%]{color:var(--tui-base-06)}._disabled[_nghost-%COMP%]   .t-icon_off[_ngcontent-%COMP%]{color:var(--tui-base-05)}[data-mode=onDark][_nghost-%COMP%]   .t-icon_off[_ngcontent-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark]._disabled[_nghost-%COMP%]   .t-icon_off[_ngcontent-%COMP%]{color:var(--tui-clear-inverse-active)}[data-mode=onLight][_nghost-%COMP%]   .t-icon_off[_ngcontent-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight]._disabled[_nghost-%COMP%]   .t-icon_off[_ngcontent-%COMP%]{color:var(--tui-clear-active)}[data-size=m][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{width:1rem;height:1rem;transform:scale(.75)}[data-size=l][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{margin:0 .125rem;width:1.5rem;height:1.5rem}[_nghost-%COMP%]:hover   .t-icon[_ngcontent-%COMP%]{opacity:1}"],changeDetection:0}),e})(),Yt=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=z({type:e}),e.\u0275inj=F({imports:[[Q,Ot,bt,xt,Mt,Pt,ye,V,xe,fe]]}),e})();var je=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;var Jt=(()=>{let i=class i{transform(o){let r=o*100,n=[];if(r<=70)for(let s=0;s<3;s++)n[s]=i.startColor[s]+(i.middleColor[s]-i.startColor[s])*(r/50);else for(let s=0;s<3;s++)n[s]=i.middleColor[s]+(i.endColor[s]-i.middleColor[s])*((r-50)/50);return`rgb(${n.join(",")})`}};i.startColor=[255,0,0],i.middleColor=[255,255,0],i.endColor=[30,220,0],i.\u0275fac=function(r){return new(r||i)},i.\u0275pipe=Ke({name:"annProgressBar",type:i,pure:!0,standalone:!0});let e=i;return e})();var He=(()=>{let i=class i{constructor(){this.progress=0}};i.\u0275fac=function(r){return new(r||i)},i.\u0275cmp=h({type:i,selectors:[["ann-progress-bar"]],inputs:{progress:"progress"},standalone:!0,features:[E],decls:4,vars:5,consts:[["tuiProgressLabel","","for","",1,"progress-label"],["width","200","height","200","draggable","false","ngSrc","assets/cat.gif","alt","",1,"progress-inner"],["size","xl",1,"progress",3,"value"]],template:function(r,n){r&1&&(u(0,"label",0),d(1,"img",1)(2,"tui-progress-circle",2),k(3,"annProgressBar"),c()),r&2&&(l(2),ee("color",I(3,3,n.progress)),a("value",n.progress))},dependencies:[X,Qt,qt,Jt,lt],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;flex-direction:column}.progress-label[_ngcontent-%COMP%]{margin-bottom:20px}.progress[_ngcontent-%COMP%]{margin:0 auto;z-index:1111;font-size:35px;transition:1s}"],changeDetection:0});let e=i;return e})();function Ii(e,i){e&1&&d(0,"tui-svg",10)}function Di(e,i){e&1&&d(0,"tui-svg",11)}var ei=(()=>{let i=class i extends Re{get usernameControl(){return this.formModel.controls.username}get passwordControl(){return this.formModel.controls.password}constructor(){super(),this.authService=Y(Wt),this.formCompleteProgress=0,this.fb=Y(de),this.PasswordRegexp=je,this.isLoading$$=new $e(!1),this.formModel=this.fb.group({username:this.fb.control("",{validators:[S.required,S.minLength(3)],nonNullable:!0}),password:this.fb.control("",{validators:S.required,nonNullable:!0})}),this.formModel.statusChanges.pipe(K()).subscribe(()=>{this.formCompleteProgress=[this.usernameControl.valid,this.passwordControl.valid].filter(Boolean).length/Object.keys(this.formModel.controls).length})}onSubmit(){this.isLoading$$.next(!0),this.authService.login(this.formModel.getRawValue()).pipe(Je(()=>this.isLoading$$.next(!1))).subscribe(),this.resetForm()}onReset(){this.resetForm()}resetForm(){this.formModel.reset()}};i.\u0275fac=function(r){return new(r||i)},i.\u0275cmp=h({type:i,selectors:[["ann-login-form"]],standalone:!0,features:[y,E],decls:16,vars:15,consts:[["usernameControlRef",""],["passwordControlRef",""],["success",""],["error",""],[3,"progress"],[3,"inheritColor","overlay","showLoader"],[1,"controls"],["autocomplete","current-password",1,"b-form","control","username",3,"tuiTextfieldSize","formControl","tuiTextfieldCustomContent"],["autocomplete","current-password",1,"b-form","control",3,"tuiTextfieldSize","pattern","formControl","tuiTextfieldCustomContent"],["appearance","whiteblock","tuiButton","","type","button",3,"click","tuiTextfieldSize","disabled"],["src","tuiIconCheck",1,"success","tui-space_left-3"],["src","tuiIconCheck",1,"fail","tui-space_left-3"]],template:function(r,n){if(r&1){let s=x();d(0,"ann-progress-bar",4),u(1,"tui-loader",5),k(2,"async"),u(3,"form",6)(4,"tui-input",7,0),w(6," Username "),c(),u(7,"tui-input-password",8,1),w(9," Type password "),c(),u(10,"button",9),M("click",function(){return f(s),C(n.onSubmit())}),w(11," Sign In "),c()()(),_(12,Ii,1,0,"ng-template",null,2,D)(14,Di,1,0,"ng-template",null,3,D)}if(r&2){let s=m(5),T=m(8),P=m(13),g=m(15);a("progress",n.formCompleteProgress),l(),a("inheritColor",!0)("overlay",!0)("showLoader",!!I(2,13,n.isLoading$$)),l(3),a("tuiTextfieldSize",n.isMobile()?"m":"l")("formControl",n.usernameControl)("tuiTextfieldCustomContent",s.touched?s.valid?P:g:""),l(3),a("tuiTextfieldSize",n.isMobile()?"m":"l")("pattern",n.PasswordRegexp)("formControl",n.passwordControl)("tuiTextfieldCustomContent",T.touched?T.valid?P:g:""),l(3),a("tuiTextfieldSize",n.isMobile()?"m":"l")("disabled",n.formModel.invalid)}},dependencies:[me,le,se,ae,ce,ue,Nt,q,Me,we,ze,Se,Fe,V,R,Ie,ke,Ee,Be,Ve,Le,xe,Oe,G,X,He],styles:[".controls[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:300px}.controls[_ngcontent-%COMP%] > .control[_ngcontent-%COMP%]:not(:last-child){margin-bottom:10px}"],changeDetection:0});let e=i;return e})();var Si=()=>({display:"flex",alignItems:"center",columnGap:"8px",justifyContent:"center",marginBottom:"10px"}),Fi=()=>({standalone:!0});function zi(e,i){e&1&&d(0,"tui-svg",13)}function Ei(e,i){e&1&&d(0,"tui-svg",14)}var ti=(()=>{let i=class i extends Re{get usernameControl(){return this.formModel.controls.username}get passwordControl(){return this.formModel.controls.password}get repeatedPasswordControl(){return this.formModel.controls.repeatedPassword}constructor(){super(),this.send=new ot,this.fb=Y(de),this.hidePassword=this.fb.control(!0,{nonNullable:!0}),this.formCompleteProgress=0,this.PasswordRegexp=je,this.formModel=this.fb.group({username:this.fb.control("",{validators:[S.required,S.minLength(3)],nonNullable:!0}),password:this.fb.control("",{validators:S.required,nonNullable:!0}),repeatedPassword:this.fb.control("",{validators:[S.required],nonNullable:!0})}),this.formModel.statusChanges.pipe(K()).subscribe(()=>{this.formCompleteProgress=[this.usernameControl.valid,this.passwordControl.valid,this.repeatedPasswordControl.valid].filter(Boolean).length/Object.keys(this.formModel.controls).length}),this.passwordControl.valueChanges.pipe(K()).subscribe(()=>{this.repeatedPasswordControl.updateValueAndValidity()}),this.repeatedPasswordControl.addValidators(Ri(this.passwordControl))}onSubmit(){this.send.emit(this.formModel.getRawValue()),this.resetForm()}onReset(){this.resetForm()}resetForm(){this.formModel.reset()}};i.\u0275fac=function(r){return new(r||i)},i.\u0275cmp=h({type:i,selectors:[["ann-registration-form"]],outputs:{send:"send"},standalone:!0,features:[y,E],decls:20,vars:18,consts:[["usernameControlRef",""],["passwordControlRef",""],["repeatedPasswordControlRef",""],["success",""],["error",""],[3,"progress"],[1,"controls"],["autocomplete","current-password",1,"b-form","control","username",3,"tuiTextfieldSize","formControl","tuiTextfieldCustomContent"],["autocomplete","current-password",1,"b-form","control",3,"tuiTextfieldSize","pattern","formControl","tuiTextfieldCustomContent"],["autocomplete","current-password",1,"b-form","control",3,"tuiTextfieldSize","formControl","tuiTextfieldCustomContent"],[3,"ngStyle"],["size","l",1,"tui-space_right-1",3,"ngModelChange","ngModelOptions","ngModel","showIcons"],["appearance","whiteblock","tuiButton","","type","button",3,"click","disabled"],["src","tuiIconCheck",1,"success","tui-space_left-3"],["src","tuiIconCheck",1,"fail","tui-space_left-3"]],template:function(r,n){if(r&1){let s=x();d(0,"ann-progress-bar",5),u(1,"form",6)(2,"tui-input",7,0),w(4," Username "),c(),u(5,"tui-input-password",8,1),w(7," Type password "),c(),u(8,"tui-input-password",9,2),w(10," Repeat password "),c(),u(11,"span",10)(12,"tui-toggle",11),U("ngModelChange",function(P){f(s);let g=m(6);return W(g.isPasswordHidden,P)||(g.isPasswordHidden=P),C(P)}),M("ngModelChange",function(P){f(s);let g=m(9);return C(g.isPasswordHidden=P)}),c(),w(13," Hide password"),c(),u(14,"button",12),M("click",function(){return f(s),C(n.onSubmit())}),w(15," Sign Up "),c()(),_(16,zi,1,0,"ng-template",null,3,D)(18,Ei,1,0,"ng-template",null,4,D)}if(r&2){let s=m(3),T=m(6),P=m(9),g=m(17),b=m(19);a("progress",n.formCompleteProgress),l(2),a("tuiTextfieldSize",n.isMobile()?"m":"l")("formControl",n.usernameControl)("tuiTextfieldCustomContent",s.touched?s.valid?g:b:""),l(3),a("tuiTextfieldSize",n.isMobile()?"m":"l")("pattern",n.PasswordRegexp)("formControl",n.passwordControl)("tuiTextfieldCustomContent",T.touched?T.valid?g:b:""),l(3),a("tuiTextfieldSize",n.isMobile()?"m":"l")("formControl",n.repeatedPasswordControl)("tuiTextfieldCustomContent",P.touched?P.valid?g:b:""),l(3),a("ngStyle",Ue(16,Si)),l(),a("ngModelOptions",Ue(17,Fi)),N("ngModel",T.isPasswordHidden),a("showIcons",!0),l(2),a("disabled",n.formModel.invalid)}},dependencies:[me,le,se,ae,ce,ue,q,Me,we,ze,Se,Fe,V,R,Ie,ke,Ee,Be,Ve,Le,pe,dt,ct,X,He,Yt,Zt,at],styles:[".controls[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:300px}.controls[_ngcontent-%COMP%] > .control[_ngcontent-%COMP%]:not(:last-child){margin-bottom:10px}"],changeDetection:0});let e=i;return e})(),Ri=e=>i=>e.value!==i.value?{notMatch:!0}:null;var ii=[{path:"",component:Ut,children:[{path:"login",component:ei},{path:"registration",component:ti}]}];var Fr=(()=>{let i=class i{};i.\u0275fac=function(r){return new(r||i)},i.\u0275mod=z({type:i}),i.\u0275inj=F({imports:[Ge.forChild(ii),Ge]});let e=i;return e})();export{Fr as AuthRoutingModule};
/**i18n:f994e39d7e55425eb79f71f36a93b3e1be0e20e3e7b18c9ed2d3946a6fd8aef7*/

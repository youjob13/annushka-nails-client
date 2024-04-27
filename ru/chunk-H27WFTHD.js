import{d as be,e as Ne}from"./chunk-3HJQVHAZ.js";import{Aa as L,Ba as R,Ja as N,Ma as ye,Mc as Be,N as he,Nc as A,Pc as Ce,Ra as H,S as U,Sa as _,T as u,W as ve,Y as l,cc as V,cd as ze,kd as Me,ma as T,od as De,qd as O,vc as Ie,vd as Ae,wa as Te,ya as we,za as _e}from"./chunk-NN4L5LTW.js";import{n as pe,o as le,p as me,q as fe,t as ge,w as v}from"./chunk-W7PNLN7K.js";import{Aa as ee,Dc as b,Ea as te,Eb as x,Fa as p,Ga as s,Gb as k,H as S,Ha as c,Ia as ie,Jc as de,Kb as F,Kc as ce,M as X,Rb as B,S as Z,Sb as C,Tb as d,Ub as z,Vb as f,Ya as I,bc as w,cc as M,dc as D,ec as re,ha as q,ka as J,na as K,nc as ae,oc as P,pc as E,qc as j,sb as ne,ta as a,va as Q,wc as se,xb as m,xc as ue,yb as o,z as G,za as Y,zb as oe}from"./chunk-Z3I3URR3.js";function Oe(e){return e!==null&&typeof e<"u"&&`${e}`!="false"}var ct=(()=>{class e{transform(t,i,...r){return i(t,...r)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=ie({name:"tuiMapper",type:e,pure:!0}),e})(),pt=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s({type:e}),e.\u0275inj=a({}),e})();var Se=(()=>{class e{constructor(t,i){this.focusable=t,this.el=i}get element(){var t;return((t=this.focusable)===null||t===void 0?void 0:t.nativeFocusableElement)||this.el.nativeElement}get isTextFieldElement(){return this.element.matches("input, textarea, [contenteditable]")}}return e.\u0275fac=function(t){oe()},e.\u0275dir=c({type:e}),e})(),Re=1e3,He=".ng-animating",Ve=(()=>{class e extends Se{constructor(t,i,r){super(t,i),this.animationFrame$=r}setFocus(){this.isTextFieldElement?X(S(Re),this.animationFrame$.pipe(K(he),G(()=>this.element.closest(He)),q(Boolean),Z(1))).subscribe(()=>this.element.focus({preventScroll:!0})):this.element.focus({preventScroll:!0})}}return e.\u0275fac=function(t){return new(t||e)(o(N,10),o(I),o(R))},e.\u0275dir=c({type:e,features:[F]}),e})(),We=["type","inputMode","autocomplete","accept","min","max","step","pattern","size","maxlength"],$e=(()=>{class e extends Se{constructor(t,i,r,g,h){super(t,i),this.renderer=r,this.zone=g,this.win=h,this.patchCssStyles()}setFocus(){this.isTextFieldElement?this.zone.runOutsideAngular(()=>this.iosWebkitAutofocus()):this.element.focus({preventScroll:!0})}iosWebkitAutofocus(){var t;let i=this.makeFakeInput(),r=this.getDurationTimeBeforeFocus(),g=0,h=0,W=()=>i.focus({preventScroll:!0}),$=()=>{clearTimeout(g),g=this.win.setTimeout(()=>{clearTimeout(h),i.removeEventListener("blur",W),i.removeEventListener("focus",$),h=this.win.setTimeout(()=>{this.element.focus({preventScroll:!1}),i.remove()},r)})};i.addEventListener("blur",W,{once:!0}),i.addEventListener("focus",$),this.insideDialog()?this.win.document.body.appendChild(i):(t=this.element.parentElement)===null||t===void 0||t.appendChild(i),i.focus({preventScroll:!0})}makeFakeInput(){let t=this.renderer.createElement("input"),i=this.element.getBoundingClientRect();return this.patchFakeInputFromFocusableElement(t),t.style.height=T(i.height),t.style.width=T(i.width/2),t.style.position="fixed",t.style.zIndex="-99999999",t.style.caretColor="transparent",t.style.border="none",t.style.outline="none",t.style.color="transparent",t.style.background="transparent",t.style.cursor="none",t.style.fontSize=T(16),t.style.top=T(i.top),t.style.left=T(i.left),t}getDurationTimeBeforeFocus(){return parseFloat(this.win.getComputedStyle(this.element).getPropertyValue("--tui-duration"))||0}insideDialog(){return!!this.element.closest("tui-dialog")}patchCssStyles(){[this.win.document.documentElement,this.win.document.body].forEach(t=>{t.style.setProperty("overflow","auto"),t.style.setProperty("height","100%")})}patchFakeInputFromFocusableElement(t){We.forEach(i=>{let r=this.element.getAttribute(i);ve(r)&&t.setAttribute(i,r)})}}return e.\u0275fac=function(t){return new(t||e)(o(N,10),o(I),o(x),o(k),o(L))},e.\u0275dir=c({type:e,features:[F]}),e})(),Ge={delay:NaN},Xe=u(Ge);var xe=new Q("[TUI_AUTOFOCUS_HANDLER]"),Ze=[{provide:xe,useFactory:(e,n,t,i,r,g,h)=>h?new $e(e,n,i,r,g):new Ve(e,n,t),deps:[[new Y,new ee,N],I,R,x,k,L,ye]},H],Dt=(()=>{class e{constructor(t,i,r){this.handler=t,this.options=i,this.destroy$=r,this.autoFocus=!0}ngAfterViewInit(){Oe(this.autoFocus)&&this.focus()}focus(){Number.isNaN(this.options.delay)?Promise.resolve().then(()=>this.handler.setFocus()):S(this.options.delay).pipe(J(this.destroy$)).subscribe(()=>this.handler.setFocus())}}return e.\u0275fac=function(t){return new(t||e)(o(xe),o(Xe),o(H,2))},e.\u0275dir=c({type:e,selectors:[["","tuiAutoFocus",""]],inputs:{autoFocus:[te.None,"tuiAutoFocus","autoFocus"]},features:[b(Ze)]}),e})(),bt=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s({type:e}),e.\u0275inj=a({}),e})();var qe=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p({type:e,selectors:[["ng-component"]],hostAttrs:[1,"tui-icons"],decls:0,vars:0,template:function(t,i){},styles:[`[tuiIcons]:before,[tuiIcons]:after{font-size:1.5rem}[tuiIcons]._icon-left:before,[tuiIcons]._icon-right:after{content:"";width:1em;height:1em;flex-shrink:0;background:currentColor;-webkit-mask:var(--t-mask-left) no-repeat center / contain;mask:var(--t-mask-left) no-repeat center / contain}[tuiIcons]._icon-right:after{-webkit-mask:var(--t-mask-right) no-repeat center / contain;mask:var(--t-mask-right) no-repeat center / contain}
`],encapsulation:2,changeDetection:0}),e})(),St=(()=>{class e{constructor(t,i){this.resolver=t,this.iconLeft="",this.iconRight="",i.addComponent(qe)}}return e.\u0275fac=function(t){return new(t||e)(o(O),o(_))},e.\u0275dir=c({type:e,selectors:[["a","iconLeft",""],["button"],["tui-badge"],["tui-chip"],["a","iconRight",""],["button"],["tui-badge"],["tui-chip"],["","tuiBadge","","iconLeft",""],["","tuiBadge","","iconRight",""],["","tuiChip","","iconLeft",""],["","tuiChip","","iconRight",""],["","tuiButtonClose",""]],hostAttrs:["tuiIcons",""],hostVars:8,hostBindings:function(t,i){t&2&&(z("--t-mask-left","url("+i.resolver(i.iconLeft)+")")("--t-mask-right","url("+i.resolver(i.iconRight)+")"),f("_icon-left",i.iconLeft)("_icon-right",i.iconRight))},inputs:{iconLeft:"iconLeft",iconRight:"iconRight"}}),e})(),ke=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s({type:e}),e.\u0275inj=a({}),e})();var Fe={size:"l",appearance:"primary"},Pe=u(Fe);function Ut(e){return l(Pe,e,Fe)}var Je=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p({type:e,selectors:[["ng-component"]],hostAttrs:[1,"tui-button-styles"],decls:0,vars:0,template:function(t,i){},styles:[`[tuiButtonNew]{--t-gap: .125rem;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-width:100%;grid-gap:calc(var(--t-gap) - 2 * var(--t-margin));gap:calc(var(--t-gap) - 2 * var(--t-margin));height:var(--t-size);justify-content:center;border-radius:var(--t-radius);padding:var(--t-padding);-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}[tuiButtonNew]>img,[tuiButtonNew]>tui-svg,[tuiButtonNew]>tui-icon,[tuiButtonNew]>tui-avatar,[tuiButtonNew]>tui-badge,[tuiButtonNew]>[tuiBadge],[tuiButtonNew]>[tuiRadio],[tuiButtonNew]>[tuiToggle],[tuiButtonNew]>[tuiCheckbox],[tuiButtonNew]._icon-left:before,[tuiButtonNew]._icon-right:after{margin:var(--t-margin)}[tuiButtonNew]>.t-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}[tuiButtonNew]>.t-loader .t-text{position:absolute}[tuiButtonNew][data-size=xs]{--t-size: var(--tui-height-xs);--t-radius: var(--tui-radius-xs);--t-padding: 0 .375rem;--t-margin: -.125rem;font:var(--tui-font-text-s)}[tuiButtonNew][data-size=xs] tui-svg,[tuiButtonNew][data-size=xs] tui-icon,[tuiButtonNew][data-size=xs]:before{font-size:1rem}[tuiButtonNew][data-size=s]{--t-size: var(--tui-height-s);--t-radius: var(--tui-radius-s);--t-padding: 0 .625rem;--t-margin: -.125rem;font:var(--tui-font-text-s)}[tuiButtonNew][data-size=s] tui-svg,[tuiButtonNew][data-size=s] tui-icon,[tuiButtonNew][data-size=s]:not([tuiIconButton][data-appearance="icon"]):before{font-size:1rem}[tuiButtonNew][data-size=m]{--t-size: var(--tui-height-m);--t-radius: var(--tui-radius-m);--t-padding: 0 1rem;--t-margin: -.375rem;font:var(--tui-font-text-m);font-weight:bold}[tuiButtonNew][data-size=m]:after{-webkit-margin-end:-.125rem;margin-inline-end:-.125rem}[tuiButtonNew][data-size=l]{--t-size: var(--tui-height-l);--t-radius: var(--tui-radius-l);--t-padding: 0 1.25rem;--t-gap: .25rem;--t-margin: -.25rem;font:var(--tui-font-text-m);font-weight:bold}[tuiButtonNew][data-size=l]:after{-webkit-margin-start:.25rem;margin-inline-start:.25rem;-webkit-margin-end:-.25rem;margin-inline-end:-.25rem}[tuiButtonNew]._loading{--tui-disabled-opacity: 1;-webkit-text-fill-color:transparent}[tuiButtonNew]._loading>*,[tuiButtonNew]._loading:before,[tuiButtonNew]._loading:after{opacity:0}[tuiButtonNew]._loading>.t-loader{opacity:1}[tuiButtonNew][tuiIcons]:after{font-size:1rem}[tuiIconButton][tuiButtonNew]{--t-gap: 0;width:var(--t-size);font-size:0;padding:0}
`],encapsulation:2,changeDetection:0}),e})(),Lt=(()=>{class e{constructor(t,i,r){this.options=t,this.mode$=i,this.size=this.options.size,this.appearance=this.options.appearance,r.addComponent(Je)}}return e.\u0275fac=function(t){return new(t||e)(o(Pe),o(Ie),o(_))},e.\u0275dir=c({type:e,selectors:[["a","tuiButton",""],["button","tuiButton",""],["a","tuiIconButton",""],["button","tuiIconButton",""]],hostAttrs:["tuiButtonNew","","tuiAppearance",""],hostVars:2,hostBindings:function(t,i){t&1&&ae("$.data-mode.attr",function(){return i.mode$}),t&2&&C("data-size",i.size)("data-appearance",i.appearance)},inputs:{size:"size",appearance:"appearance"},features:[b([Ce])]}),e})(),Rt=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s({type:e}),e.\u0275inj=a({imports:[[v,A,Me,ke]]}),e})();function Qe(e,n){if(e&1&&w(0,"tui-svg",2),e&2){let t=n.polymorpheusOutlet;d("src",t)}}function Ye(e,n){e&1&&re(0)}var et={iconSmall:"tuiIconChevronDown",iconLarge:"tuiIconChevronDownLarge"},tt=u(et);var it=(()=>{class e{constructor(t,i,r){this.dropdown=t,this.textfieldSize=i,this.options=r}get rotated(){return this.dropdown.open}get arrowIcon(){return V(this.textfieldSize.size)?this.options.iconLarge:this.options.iconSmall}}return e.\u0275fac=function(t){return new(t||e)(o(De),o(ze),o(tt))},e.\u0275cmp=p({type:e,selectors:[["tui-arrow"]],hostVars:2,hostBindings:function(t,i){t&2&&f("_rotated",i.rotated)},decls:3,vars:4,consts:[[3,"src",4,"polymorpheusOutlet"],[4,"ngIf"],[3,"src"]],template:function(t,i){t&1&&(B(0,Qe,1,1,"tui-svg",0)(1,Ye,1,0,"ng-container",1),de(2,"async")),t&2&&(d("polymorpheusOutlet",i.arrowIcon),m(),d("ngIf",ce(2,2,i.dropdown.openChange)))},dependencies:[Be,we,pe,ge],styles:["[_nghost-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;cursor:pointer;pointer-events:none}._rotated[_nghost-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),e})(),Ee=new Te(it),qt=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s({type:e}),e.\u0275inj=a({imports:[[v,A,_e]]}),e})(),nt={interactive:Ee,disabled:Ee},Jt=u(nt);var ot=["*"];function rt(e,n){if(e&1&&w(0,"img",4),e&2){let t=P();d("src",t.value,ne)}}function at(e,n){if(e&1&&(M(0),se(1),D()),e&2){let t=P();m(),ue(t.value)}}function st(e,n){e&1&&(M(0),j(1),D())}var je={appearance:"",round:!0,size:"l"},Ue=u(je);function oi(e){return l(Ue,e,je)}var ri=(()=>{class e{constructor(t,i){this.options=t,this.resolver=i,this.size=this.options.size,this.round=this.options.round,this.src=null,this.appearance=this.options.appearance}get safeSrc(){var t,i;return(i=(t=this.src)===null||t===void 0?void 0:t.toString())!==null&&i!==void 0?i:""}get value(){return this.src||""}get type(){return this.value&&!U(this.value)?"img":this.value.startsWith("tuiIcon")||this.value.endsWith(".svg")?"icon":this.value.length>0&&this.value.length<3?"text":this.value.length?"img":"content"}}return e.\u0275fac=function(t){return new(t||e)(o(Ue),o(O))},e.\u0275cmp=p({type:e,selectors:[["tui-avatar"]],hostAttrs:["tuiAppearance",""],hostVars:7,hostBindings:function(t,i){t&2&&(C("data-appearance",i.appearance)("data-size",i.size)("data-type",i.type),z("--t-mask","url("+i.resolver(i.safeSrc)+")"),f("_round",i.round))},inputs:{size:"size",round:"round",src:"src",appearance:"appearance"},ngContentSelectors:ot,decls:4,vars:3,consts:[[3,"ngSwitch"],["alt","","loading","lazy",3,"src",4,"ngSwitchCase"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["alt","","loading","lazy",3,"src"]],template:function(t,i){t&1&&(E(),M(0,0),B(1,rt,1,1,"img",1)(2,at,2,1,"ng-container",2)(3,st,2,0,"ng-container",3),D()),t&2&&(d("ngSwitch",i.type),m(),d("ngSwitchCase","img"),m(),d("ngSwitchCase","text"))},dependencies:[le,me,be,fe],styles:['[_nghost-%COMP%]{--t-size: 3.5rem;--t-radius: .75rem;position:relative;display:inline-flex;flex-shrink:0;width:var(--t-size);height:var(--t-size);align-items:center;justify-content:center;overflow:hidden;white-space:nowrap;border-radius:var(--t-radius);background:var(--tui-secondary);color:var(--tui-text-02);vertical-align:middle;box-sizing:border-box;padding:.25rem;opacity:.999}[_nghost-%COMP%]:before{position:absolute;top:0;left:0;width:100%;height:100%;background:currentColor;-webkit-mask:var(--t-mask) no-repeat center / 60%;mask:var(--t-mask) no-repeat center / 60%}[data-size=xs][_nghost-%COMP%]{--t-size: var(--tui-height-xs);--t-radius: .5rem;font:var(--tui-font-text-xs);font-weight:bold}[data-size=xs][data-type=content][_nghost-%COMP%]{font:var(--tui-font-text-m);font-size:.5625rem}[data-size=s][_nghost-%COMP%]{--t-size: var(--tui-height-s);--t-radius: .5rem;font:var(--tui-font-text-s);font-weight:bold}[data-size=s][data-type=content][_nghost-%COMP%]{font:var(--tui-font-text-xs);font-weight:bold}[data-size=m][_nghost-%COMP%]{--t-size: calc(var(--tui-height-m) - .25rem);--t-radius: .75rem;font:var(--tui-font-text-l);font-weight:bold}[data-size=m][data-type=content][_nghost-%COMP%]{font:var(--tui-font-text-m);font-weight:bold}[data-size=l][_nghost-%COMP%]{--t-size: var(--tui-height-l);--t-radius: .75rem;font:var(--tui-font-heading-5)}[data-size=l][data-type=content][_nghost-%COMP%]{font:var(--tui-font-text-l);font-weight:bold}[data-size=xl][_nghost-%COMP%]{--t-size: 5rem;--t-radius: .75rem;font:var(--tui-font-heading-3)}[data-size=xl][data-type=content][_nghost-%COMP%]{font:var(--tui-font-heading-4)}[data-size=xxl][_nghost-%COMP%]{--t-size: 6rem;--t-radius: 1rem;font:var(--tui-font-heading-3)}[data-size=xxl][data-type=content][_nghost-%COMP%]{font:var(--tui-font-heading-3)}[data-size=xxxl][_nghost-%COMP%]{--t-size: 8rem;--t-radius: 1.25rem;font:var(--tui-font-heading-2)}[data-size=xxxl][data-type=content][_nghost-%COMP%]{font:var(--tui-font-heading-3)}[data-type=img][_nghost-%COMP%]{background:transparent}[data-type=icon][_nghost-%COMP%]:before{content:""}._round[_nghost-%COMP%]{--t-radius: calc(var(--t-size) / 2)}[_nghost-%COMP%]     img, [_nghost-%COMP%]     picture, [_nghost-%COMP%]     video{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}'],changeDetection:0}),e})(),ai=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s({type:e}),e.\u0275inj=a({imports:[[v,Ae,Ne]]}),e})();var Le={size:"l",appearance:"default",dot:!1},ut=u(Le);function di(e){return l(ut,e,Le)}export{ct as a,pt as b,Dt as c,bt as d,St as e,ke as f,Ut as g,Lt as h,Rt as i,Ee as j,qt as k,oi as l,ri as m,ai as n,di as o};
/**i18n:f994e39d7e55425eb79f71f36a93b3e1be0e20e3e7b18c9ed2d3946a6fd8aef7*/
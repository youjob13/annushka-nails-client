import{Fc as p}from"./chunk-NN4L5LTW.js";import{Jb as o,Oa as d,Xa as b,i as a,ka as u,sa as l,ya as i}from"./chunk-Z3I3URR3.js";function c(t){t||(d(c),t=i(b));let e=new a(s=>t.onDestroy(s.next.bind(s)));return s=>s.pipe(u(e))}var r={desktopLarge:{mainTitle:{size:36},secondaryTitle:{size:24},text:{size:16},secondaryText:{size:13},control:{width:500},textArea:{height:87}},desktopSmall:{mainTitle:{size:36},secondaryTitle:{size:24},text:{size:16},secondaryText:{size:13},control:{width:500},textArea:{height:87}},mobile:{mainTitle:{size:30},secondaryTitle:{size:24},text:{size:13},secondaryText:{size:11},control:{width:240},textArea:{height:60}}};var M=(()=>{let e=class e{constructor(){this.breakPointService=i(p),this._current_display_type="desktopLarge",this._current_display_settings=r.desktopLarge,this.displayType=o("desktopLarge")}get settings(){return this._current_display_settings}init(){this.breakPointService.pipe(c()).subscribe({next:n=>{switch(n&&this.displayType.set(n),n){case"desktopLarge":this._current_display_settings=r.desktopLarge;break;case"desktopSmall":this._current_display_settings=r.desktopSmall;break;case"mobile":this._current_display_settings=r.mobile;break;default:this._current_display_settings=r.desktopLarge}}})}};e.\u0275fac=function(h){return new(h||e)},e.\u0275prov=l({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();export{c as a,M as b};
/**i18n:f994e39d7e55425eb79f71f36a93b3e1be0e20e3e7b18c9ed2d3946a6fd8aef7*/
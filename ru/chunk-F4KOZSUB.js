import{a as g}from"./chunk-MRBB75ZS.js";import{b as c,l as d}from"./chunk-7DJNTRWC.js";import{ia as m,la as p,n as f,ra as l,xa as n,z as h}from"./chunk-Q3LASK2U.js";var i=function(t){return t.Admin="admin",t.AdminProfile="admin-profile",t.Auth="auth",t.UserProfile="user-profile",t.About="about",t.Gallery="gallery",t.Home="home",t.Feedbacks="feedbacks",t}(i||{}),u=function(t){return t.Login="login",t.Registration="registration",t.ForgotPassword="forgot-password",t.ResetPassword="reset-password",t}(u||{});var o=function(t){return t.Admin="admin",t.Employee="employee",t.User="user",t.Guest="guest",t}(o||{});var $=(()=>{let r=class r{constructor(){this.userRole$$=new f(o.User),this.userRole$=this.userRole$$.asObservable(),this.isAuthorized$=this.userRole$$.pipe(h(a=>a!==o.Guest))}setRole(a){return this.userRole$$.next(a),this.isAuthorized$}};r.\u0275fac=function(b){return new(b||r)},r.\u0275prov=l({token:r,factory:r.\u0275fac,providedIn:"root"});let t=r;return t})();var e=class e{constructor(){this.http=n(c),this.authConfig=n(g),this.userService=n($),this.router=n(d)}login(r){return this.http.post(`${this.authConfig}/login`,r).pipe(p(s=>this.userService.setRole(s)),p(s=>this.router.navigateByUrl(e.RolesMap[s])),m(()=>this.userService.isAuthorized$))}signUp(r){return this.http.post(`${this.authConfig}/signUp`,r)}logout(){return this.userService.setRole(o.Guest),this.router.url.includes(i.UserProfile)&&this.router.navigateByUrl(`${i.Auth}/${u.Login}`),this.http.post(`${this.authConfig}/logout`,{}).pipe(p(()=>{console.log("Logout")}))}};e.RolesMap={[o.Admin]:i.AdminProfile,[o.User]:i.UserProfile},e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=l({token:e,factory:e.\u0275fac,providedIn:"root"});var v=e;export{i as a,u as b,o as c,$ as d,v as e};
/**i18n:15532d68a152d1b02ceb639d7639ec309fa9c79309c98a8bae3fa72f0bf19670*/

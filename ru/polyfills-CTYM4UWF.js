(function(e){e.ng??={},e.ng.common??={},e.ng.common.locales??={};let n=void 0;function c(r){let a=r,l=Math.floor(Math.abs(r)),_=r.toString().replace(/^[^.]*\.?/,"").length;return _===0&&l%10===1&&l%100!==11?1:_===0&&l%10===Math.floor(l%10)&&l%10>=2&&l%10<=4&&!(l%100>=12&&l%100<=14)?3:_===0&&l%10===0||_===0&&l%10===Math.floor(l%10)&&l%10>=5&&l%10<=9||_===0&&l%100===Math.floor(l%100)&&l%100>=11&&l%100<=14?4:5;}e.ng.common.locales.ru=["ru",[["AM","PM"],n,n],n,[["\u0412","\u041F","\u0412","\u0421","\u0427","\u041F","\u0421"],["\u0432\u0441","\u043F\u043D","\u0432\u0442","\u0441\u0440","\u0447\u0442","\u043F\u0442","\u0441\u0431"],["\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435","\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A","\u0432\u0442\u043E\u0440\u043D\u0438\u043A","\u0441\u0440\u0435\u0434\u0430","\u0447\u0435\u0442\u0432\u0435\u0440\u0433","\u043F\u044F\u0442\u043D\u0438\u0446\u0430","\u0441\u0443\u0431\u0431\u043E\u0442\u0430"],["\u0432\u0441","\u043F\u043D","\u0432\u0442","\u0441\u0440","\u0447\u0442","\u043F\u0442","\u0441\u0431"]],n,[["\u042F","\u0424","\u041C","\u0410","\u041C","\u0418","\u0418","\u0410","\u0421","\u041E","\u041D","\u0414"],["\u044F\u043D\u0432.","\u0444\u0435\u0432\u0440.","\u043C\u0430\u0440.","\u0430\u043F\u0440.","\u043C\u0430\u044F","\u0438\u044E\u043D.","\u0438\u044E\u043B.","\u0430\u0432\u0433.","\u0441\u0435\u043D\u0442.","\u043E\u043A\u0442.","\u043D\u043E\u044F\u0431.","\u0434\u0435\u043A."],["\u044F\u043D\u0432\u0430\u0440\u044F","\u0444\u0435\u0432\u0440\u0430\u043B\u044F","\u043C\u0430\u0440\u0442\u0430","\u0430\u043F\u0440\u0435\u043B\u044F","\u043C\u0430\u044F","\u0438\u044E\u043D\u044F","\u0438\u044E\u043B\u044F","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F","\u043E\u043A\u0442\u044F\u0431\u0440\u044F","\u043D\u043E\u044F\u0431\u0440\u044F","\u0434\u0435\u043A\u0430\u0431\u0440\u044F"]],[["\u042F","\u0424","\u041C","\u0410","\u041C","\u0418","\u0418","\u0410","\u0421","\u041E","\u041D","\u0414"],["\u044F\u043D\u0432.","\u0444\u0435\u0432\u0440.","\u043C\u0430\u0440\u0442","\u0430\u043F\u0440.","\u043C\u0430\u0439","\u0438\u044E\u043D\u044C","\u0438\u044E\u043B\u044C","\u0430\u0432\u0433.","\u0441\u0435\u043D\u0442.","\u043E\u043A\u0442.","\u043D\u043E\u044F\u0431.","\u0434\u0435\u043A."],["\u044F\u043D\u0432\u0430\u0440\u044C","\u0444\u0435\u0432\u0440\u0430\u043B\u044C","\u043C\u0430\u0440\u0442","\u0430\u043F\u0440\u0435\u043B\u044C","\u043C\u0430\u0439","\u0438\u044E\u043D\u044C","\u0438\u044E\u043B\u044C","\u0430\u0432\u0433\u0443\u0441\u0442","\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044C","\u043E\u043A\u0442\u044F\u0431\u0440\u044C","\u043D\u043E\u044F\u0431\u0440\u044C","\u0434\u0435\u043A\u0430\u0431\u0440\u044C"]],[["\u0434\u043E \u043D.\u044D.","\u043D.\u044D."],["\u0434\u043E \u043D. \u044D.","\u043D. \u044D."],["\u0434\u043E \u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u0430 \u0425\u0440\u0438\u0441\u0442\u043E\u0432\u0430","\u043E\u0442 \u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u0430 \u0425\u0440\u0438\u0441\u0442\u043E\u0432\u0430"]],1,[6,0],["dd.MM.y","d MMM y '\u0433'.","d MMMM y '\u0433'.","EEEE, d MMMM y '\u0433'."],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1}, {0}",n,n,n],[",","\xA0",";","%","+","-","E","\xD7","\u2030","\u221E","\u043D\u0435\xA0\u0447\u0438\u0441\u043B\u043E",":"],["#,##0.###","#,##0\xA0%","#,##0.00\xA0\xA4","#E0"],"RUB","\u20BD","\u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0438\u0439 \u0440\u0443\u0431\u043B\u044C",{BYN:[n,"\u0440."],GEL:[n,"\u10DA"],PHP:[n,"\u20B1"],RON:[n,"L"],RUB:["\u20BD"],RUR:["\u0440."],THB:["\u0E3F"],TMT:["\u0422\u041C\u0422"],TWD:["NT$"],UAH:["\u20B4"],XXX:["XXXX"]},"ltr",c,[[["\u043F\u043E\u043B\u043D.","\u043F\u043E\u043B\u0434.","\u0443\u0442\u0440\u0430","\u0434\u043D\u044F","\u0432\u0435\u0447.","\u043D\u043E\u0447\u0438"],["\u043F\u043E\u043B\u043D.","\u043F\u043E\u043B\u0434.","\u0443\u0442\u0440\u0430","\u0434\u043D\u044F","\u0432\u0435\u0447\u0435\u0440\u0430","\u043D\u043E\u0447\u0438"],["\u043F\u043E\u043B\u043D\u043E\u0447\u044C","\u043F\u043E\u043B\u0434\u0435\u043D\u044C","\u0443\u0442\u0440\u0430","\u0434\u043D\u044F","\u0432\u0435\u0447\u0435\u0440\u0430","\u043D\u043E\u0447\u0438"]],[["\u043F\u043E\u043B\u043D.","\u043F\u043E\u043B\u0434.","\u0443\u0442\u0440\u043E","\u0434\u0435\u043D\u044C","\u0432\u0435\u0447.","\u043D\u043E\u0447\u044C"],n,["\u043F\u043E\u043B\u043D\u043E\u0447\u044C","\u043F\u043E\u043B\u0434\u0435\u043D\u044C","\u0443\u0442\u0440\u043E","\u0434\u0435\u043D\u044C","\u0432\u0435\u0447\u0435\u0440","\u043D\u043E\u0447\u044C"]],["00:00","12:00",["04:00","12:00"],["12:00","18:00"],["18:00","22:00"],["22:00","04:00"]]]];})(globalThis);(function(e){let n=e.performance;function c(L){n&&n.mark&&n.mark(L);}function r(L,t){n&&n.measure&&n.measure(L,t);}c("Zone");let a=e.__Zone_symbol_prefix||"__zone_symbol__";function l(L){return a+L;}let _=e[l("forceDuplicateZoneCheck")]===!0;if(e.Zone){if(_||typeof e.Zone.__symbol__!="function")throw new Error("Zone already loaded.");return e.Zone;}let se=class se{static assertZonePatched(){if(e.Promise!==oe.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)");}static get root(){let t=se.current;for(;t.parent;)t=t.parent;return t;}static get current(){return U.zone;}static get currentTask(){return ne;}static __load_patch(t,s,o=!1){if(oe.hasOwnProperty(t)){if(!o&&_)throw Error("Already loaded patch: "+t);}else if(!e["__Zone_disable_"+t]){let v="Zone:"+t;c(v),oe[t]=s(e,se,q),r(v,v);}}get parent(){return this._parent;}get name(){return this._name;}constructor(t,s){this._parent=t,this._name=s?s.name||"unnamed":"<root>",this._properties=s&&s.properties||{},this._zoneDelegate=new k(this,this._parent&&this._parent._zoneDelegate,s);}get(t){let s=this.getZoneWith(t);if(s)return s._properties[t];}getZoneWith(t){let s=this;for(;s;){if(s._properties.hasOwnProperty(t))return s;s=s._parent;}return null;}fork(t){if(!t)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,t);}wrap(t,s){if(typeof t!="function")throw new Error("Expecting function got: "+t);let o=this._zoneDelegate.intercept(this,t,s),v=this;return function(){return v.runGuarded(o,this,arguments,s);};}run(t,s,o,v){U={parent:U,zone:this};try{return this._zoneDelegate.invoke(this,t,s,o,v);}finally{U=U.parent;}}runGuarded(t,s=null,o,v){U={parent:U,zone:this};try{try{return this._zoneDelegate.invoke(this,t,s,o,v);}catch(B){if(this._zoneDelegate.handleError(this,B))throw B;}}finally{U=U.parent;}}runTask(t,s,o){if(t.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(t.zone||$).name+"; Execution: "+this.name+")");if(t.state===j&&(t.type===K||t.type===P))return;let v=t.state!=y;v&&t._transitionTo(y,I),t.runCount++;let B=ne;ne=t,U={parent:U,zone:this};try{t.type==P&&t.data&&!t.data.isPeriodic&&(t.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,t,s,o);}catch(f){if(this._zoneDelegate.handleError(this,f))throw f;}}finally{t.state!==j&&t.state!==d&&(t.type==K||t.data&&t.data.isPeriodic?v&&t._transitionTo(I,y):(t.runCount=0,this._updateTaskCount(t,-1),v&&t._transitionTo(j,y,j))),U=U.parent,ne=B;}}scheduleTask(t){if(t.zone&&t.zone!==this){let o=this;for(;o;){if(o===t.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${t.zone.name}`);o=o.parent;}}t._transitionTo(z,j);let s=[];t._zoneDelegates=s,t._zone=this;try{t=this._zoneDelegate.scheduleTask(this,t);}catch(o){throw t._transitionTo(d,z,j),this._zoneDelegate.handleError(this,o),o;}return t._zoneDelegates===s&&this._updateTaskCount(t,1),t.state==z&&t._transitionTo(I,z),t;}scheduleMicroTask(t,s,o,v){return this.scheduleTask(new m(Z,t,s,o,v,void 0));}scheduleMacroTask(t,s,o,v,B){return this.scheduleTask(new m(P,t,s,o,v,B));}scheduleEventTask(t,s,o,v,B){return this.scheduleTask(new m(K,t,s,o,v,B));}cancelTask(t){if(t.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(t.zone||$).name+"; Execution: "+this.name+")");if(!(t.state!==I&&t.state!==y)){t._transitionTo(G,I,y);try{this._zoneDelegate.cancelTask(this,t);}catch(s){throw t._transitionTo(d,G),this._zoneDelegate.handleError(this,s),s;}return this._updateTaskCount(t,-1),t._transitionTo(j,G),t.runCount=0,t;}}_updateTaskCount(t,s){let o=t._zoneDelegates;s==-1&&(t._zoneDelegates=null);for(let v=0;v<o.length;v++)o[v]._updateTaskCount(t.type,s);}};se.__symbol__=l;let E=se,b={name:"",onHasTask:(L,t,s,o)=>L.hasTask(s,o),onScheduleTask:(L,t,s,o)=>L.scheduleTask(s,o),onInvokeTask:(L,t,s,o,v,B)=>L.invokeTask(s,o,v,B),onCancelTask:(L,t,s,o)=>L.cancelTask(s,o)};class k{constructor(t,s,o){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=t,this._parentDelegate=s,this._forkZS=o&&(o&&o.onFork?o:s._forkZS),this._forkDlgt=o&&(o.onFork?s:s._forkDlgt),this._forkCurrZone=o&&(o.onFork?this.zone:s._forkCurrZone),this._interceptZS=o&&(o.onIntercept?o:s._interceptZS),this._interceptDlgt=o&&(o.onIntercept?s:s._interceptDlgt),this._interceptCurrZone=o&&(o.onIntercept?this.zone:s._interceptCurrZone),this._invokeZS=o&&(o.onInvoke?o:s._invokeZS),this._invokeDlgt=o&&(o.onInvoke?s:s._invokeDlgt),this._invokeCurrZone=o&&(o.onInvoke?this.zone:s._invokeCurrZone),this._handleErrorZS=o&&(o.onHandleError?o:s._handleErrorZS),this._handleErrorDlgt=o&&(o.onHandleError?s:s._handleErrorDlgt),this._handleErrorCurrZone=o&&(o.onHandleError?this.zone:s._handleErrorCurrZone),this._scheduleTaskZS=o&&(o.onScheduleTask?o:s._scheduleTaskZS),this._scheduleTaskDlgt=o&&(o.onScheduleTask?s:s._scheduleTaskDlgt),this._scheduleTaskCurrZone=o&&(o.onScheduleTask?this.zone:s._scheduleTaskCurrZone),this._invokeTaskZS=o&&(o.onInvokeTask?o:s._invokeTaskZS),this._invokeTaskDlgt=o&&(o.onInvokeTask?s:s._invokeTaskDlgt),this._invokeTaskCurrZone=o&&(o.onInvokeTask?this.zone:s._invokeTaskCurrZone),this._cancelTaskZS=o&&(o.onCancelTask?o:s._cancelTaskZS),this._cancelTaskDlgt=o&&(o.onCancelTask?s:s._cancelTaskDlgt),this._cancelTaskCurrZone=o&&(o.onCancelTask?this.zone:s._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;let v=o&&o.onHasTask,B=s&&s._hasTaskZS;(v||B)&&(this._hasTaskZS=v?o:b,this._hasTaskDlgt=s,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=t,o.onScheduleTask||(this._scheduleTaskZS=b,this._scheduleTaskDlgt=s,this._scheduleTaskCurrZone=this.zone),o.onInvokeTask||(this._invokeTaskZS=b,this._invokeTaskDlgt=s,this._invokeTaskCurrZone=this.zone),o.onCancelTask||(this._cancelTaskZS=b,this._cancelTaskDlgt=s,this._cancelTaskCurrZone=this.zone));}fork(t,s){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,t,s):new E(t,s);}intercept(t,s,o){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,t,s,o):s;}invoke(t,s,o,v,B){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,t,s,o,v,B):s.apply(o,v);}handleError(t,s){return this._handleErrorZS?this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,t,s):!0;}scheduleTask(t,s){let o=s;if(this._scheduleTaskZS)this._hasTaskZS&&o._zoneDelegates.push(this._hasTaskDlgtOwner),o=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,t,s),o||(o=s);else if(s.scheduleFn)s.scheduleFn(s);else if(s.type==Z)w(s);else throw new Error("Task is missing scheduleFn.");return o;}invokeTask(t,s,o,v){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,t,s,o,v):s.callback.apply(o,v);}cancelTask(t,s){let o;if(this._cancelTaskZS)o=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,t,s);else{if(!s.cancelFn)throw Error("Task is not cancelable");o=s.cancelFn(s);}return o;}hasTask(t,s){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,t,s);}catch(o){this.handleError(t,o);}}_updateTaskCount(t,s){let o=this._taskCounts,v=o[t],B=o[t]=v+s;if(B<0)throw new Error("More tasks executed then were scheduled.");if(v==0||B==0){let f={microTask:o.microTask>0,macroTask:o.macroTask>0,eventTask:o.eventTask>0,change:t};this.hasTask(this.zone,f);}}}class m{constructor(t,s,o,v,B,f){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=t,this.source=s,this.data=v,this.scheduleFn=B,this.cancelFn=f,!o)throw new Error("callback is not defined");this.callback=o;let u=this;t===K&&v&&v.useG?this.invoke=m.invokeTask:this.invoke=function(){return m.invokeTask.call(e,u,this,arguments);};}static invokeTask(t,s,o){t||(t=this),ee++;try{return t.runCount++,t.zone.runTask(t,s,o);}finally{ee==1&&T(),ee--;}}get zone(){return this._zone;}get state(){return this._state;}cancelScheduleRequest(){this._transitionTo(j,z);}_transitionTo(t,s,o){if(this._state===s||this._state===o)this._state=t,t==j&&(this._zoneDelegates=null);else throw new Error(`${this.type} '${this.source}': can not transition to '${t}', expecting state '${s}'${o?" or '"+o+"'":""}, was '${this._state}'.`);}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this);}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount};}}let M=l("setTimeout"),N=l("Promise"),O=l("then"),F=[],A=!1,J;function W(L){if(J||e[N]&&(J=e[N].resolve(0)),J){let t=J[O];t||(t=J.then),t.call(J,L);}else e[M](L,0);}function w(L){ee===0&&F.length===0&&W(T),L&&F.push(L);}function T(){if(!A){for(A=!0;F.length;){let L=F;F=[];for(let t=0;t<L.length;t++){let s=L[t];try{s.zone.runTask(s,null,null);}catch(o){q.onUnhandledError(o);}}}q.microtaskDrainDone(),A=!1;}}let $={name:"NO ZONE"},j="notScheduled",z="scheduling",I="scheduled",y="running",G="canceling",d="unknown",Z="microTask",P="macroTask",K="eventTask",oe={},q={symbol:l,currentZoneFrame:()=>U,onUnhandledError:X,microtaskDrainDone:X,scheduleMicroTask:w,showUncaughtError:()=>!E[l("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:X,patchMethod:()=>X,bindArguments:()=>[],patchThen:()=>X,patchMacroTask:()=>X,patchEventPrototype:()=>X,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>X,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>X,wrapWithCurrentZone:()=>X,filterProperties:()=>[],attachOriginToPatched:()=>X,_redefineProperty:()=>X,patchCallbacks:()=>X,nativeScheduleMicroTask:W},U={parent:null,zone:new E(null,null)},ne=null,ee=0;function X(){}return r("Zone","Zone"),e.Zone=E;})(globalThis);var ge=Object.getOwnPropertyDescriptor,Me=Object.defineProperty,Ie=Object.getPrototypeOf,ct=Object.create,at=Array.prototype.slice,Le="addEventListener",Ae="removeEventListener",De=Zone.__symbol__(Le),Ne=Zone.__symbol__(Ae),ce="true",ae="false",pe=Zone.__symbol__("");function He(e,n){return Zone.current.wrap(e,n);}function je(e,n,c,r,a){return Zone.current.scheduleMacroTask(e,n,c,r,a);}var H=Zone.__symbol__,Re=typeof window<"u",Te=Re?window:void 0,Y=Re&&Te||globalThis,lt="removeAttribute";function Ge(e,n){for(let c=e.length-1;c>=0;c--)typeof e[c]=="function"&&(e[c]=He(e[c],n+"_"+c));return e;}function ut(e,n){let c=e.constructor.name;for(let r=0;r<n.length;r++){let a=n[r],l=e[a];if(l){let _=ge(e,a);if(!$e(_))continue;e[a]=(E=>{let b=function(){return E.apply(this,Ge(arguments,c+"."+a));};return le(b,E),b;})(l);}}}function $e(e){return e?e.writable===!1?!1:!(typeof e.get=="function"&&typeof e.set>"u"):!0;}var Je=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,we=!("nw"in Y)&&typeof Y.process<"u"&&{}.toString.call(Y.process)==="[object process]",xe=!we&&!Je&&!!(Re&&Te.HTMLElement),Ke=typeof Y.process<"u"&&{}.toString.call(Y.process)==="[object process]"&&!Je&&!!(Re&&Te.HTMLElement),Pe={},We=function(e){if(e=e||Y.event,!e)return;let n=Pe[e.type];n||(n=Pe[e.type]=H("ON_PROPERTY"+e.type));let c=this||e.target||Y,r=c[n],a;if(xe&&c===Te&&e.type==="error"){let l=e;a=r&&r.call(this,l.message,l.filename,l.lineno,l.colno,l.error),a===!0&&e.preventDefault();}else a=r&&r.apply(this,arguments),a!=null&&!a&&e.preventDefault();return a;};function ze(e,n,c){let r=ge(e,n);if(!r&&c&&ge(c,n)&&(r={enumerable:!0,configurable:!0}),!r||!r.configurable)return;let a=H("on"+n+"patched");if(e.hasOwnProperty(a)&&e[a])return;delete r.writable,delete r.value;let l=r.get,_=r.set,E=n.slice(2),b=Pe[E];b||(b=Pe[E]=H("ON_PROPERTY"+E)),r.set=function(k){let m=this;if(!m&&e===Y&&(m=Y),!m)return;typeof m[b]=="function"&&m.removeEventListener(E,We),_&&_.call(m,null),m[b]=k,typeof k=="function"&&m.addEventListener(E,We,!1);},r.get=function(){let k=this;if(!k&&e===Y&&(k=Y),!k)return null;let m=k[b];if(m)return m;if(l){let M=l.call(this);if(M)return r.set.call(this,M),typeof k[lt]=="function"&&k.removeAttribute(n),M;}return null;},Me(e,n,r),e[a]=!0;}function Qe(e,n,c){if(n)for(let r=0;r<n.length;r++)ze(e,"on"+n[r],c);else{let r=[];for(let a in e)a.slice(0,2)=="on"&&r.push(a);for(let a=0;a<r.length;a++)ze(e,r[a],c);}}var re=H("originalInstance");function ke(e){let n=Y[e];if(!n)return;Y[H(e)]=n,Y[e]=function(){let a=Ge(arguments,e);switch(a.length){case 0:this[re]=new n();break;case 1:this[re]=new n(a[0]);break;case 2:this[re]=new n(a[0],a[1]);break;case 3:this[re]=new n(a[0],a[1],a[2]);break;case 4:this[re]=new n(a[0],a[1],a[2],a[3]);break;default:throw new Error("Arg list too long.");}},le(Y[e],n);let c=new n(function(){}),r;for(r in c)e==="XMLHttpRequest"&&r==="responseBlob"||function(a){typeof c[a]=="function"?Y[e].prototype[a]=function(){return this[re][a].apply(this[re],arguments);}:Me(Y[e].prototype,a,{set:function(l){typeof l=="function"?(this[re][a]=He(l,e+"."+a),le(this[re][a],l)):this[re][a]=l;},get:function(){return this[re][a];}});}(r);for(r in n)r!=="prototype"&&n.hasOwnProperty(r)&&(Y[e][r]=n[r]);}function ue(e,n,c){let r=e;for(;r&&!r.hasOwnProperty(n);)r=Ie(r);!r&&e[n]&&(r=e);let a=H(n),l=null;if(r&&(!(l=r[a])||!r.hasOwnProperty(a))){l=r[a]=r[n];let _=r&&ge(r,n);if($e(_)){let E=c(l,a,n);r[n]=function(){return E(this,arguments);},le(r[n],l);}}return l;}function ft(e,n,c){let r=null;function a(l){let _=l.data;return _.args[_.cbIdx]=function(){l.invoke.apply(this,arguments);},r.apply(_.target,_.args),l;}r=ue(e,n,l=>function(_,E){let b=c(_,E);return b.cbIdx>=0&&typeof E[b.cbIdx]=="function"?je(b.name,E[b.cbIdx],b,a):l.apply(_,E);});}function le(e,n){e[H("OriginalDelegate")]=n;}var qe=!1,Oe=!1;function ht(){try{let e=Te.navigator.userAgent;if(e.indexOf("MSIE ")!==-1||e.indexOf("Trident/")!==-1)return!0;}catch{}return!1;}function dt(){if(qe)return Oe;qe=!0;try{let e=Te.navigator.userAgent;(e.indexOf("MSIE ")!==-1||e.indexOf("Trident/")!==-1||e.indexOf("Edge/")!==-1)&&(Oe=!0);}catch{}return Oe;}Zone.__load_patch("ZoneAwarePromise",(e,n,c)=>{let r=Object.getOwnPropertyDescriptor,a=Object.defineProperty;function l(f){if(f&&f.toString===Object.prototype.toString){let u=f.constructor&&f.constructor.name;return(u||"")+": "+JSON.stringify(f);}return f?f.toString():Object.prototype.toString.call(f);}let _=c.symbol,E=[],b=e[_("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")]!==!1,k=_("Promise"),m=_("then"),M="__creationTrace__";c.onUnhandledError=f=>{if(c.showUncaughtError()){let u=f&&f.rejection;u?console.error("Unhandled Promise rejection:",u instanceof Error?u.message:u,"; Zone:",f.zone.name,"; Task:",f.task&&f.task.source,"; Value:",u,u instanceof Error?u.stack:void 0):console.error(f);}},c.microtaskDrainDone=()=>{for(;E.length;){let f=E.shift();try{f.zone.runGuarded(()=>{throw f.throwOriginal?f.rejection:f;});}catch(u){O(u);}}};let N=_("unhandledPromiseRejectionHandler");function O(f){c.onUnhandledError(f);try{let u=n[N];typeof u=="function"&&u.call(this,f);}catch{}}function F(f){return f&&f.then;}function A(f){return f;}function J(f){return t.reject(f);}let W=_("state"),w=_("value"),T=_("finally"),$=_("parentPromiseValue"),j=_("parentPromiseState"),z="Promise.then",I=null,y=!0,G=!1,d=0;function Z(f,u){return i=>{try{q(f,u,i);}catch(h){q(f,!1,h);}};}let P=function(){let f=!1;return function(i){return function(){f||(f=!0,i.apply(null,arguments));};};},K="Promise resolved with itself",oe=_("currentTaskTrace");function q(f,u,i){let h=P();if(f===i)throw new TypeError(K);if(f[W]===I){let p=null;try{(typeof i=="object"||typeof i=="function")&&(p=i&&i.then);}catch(R){return h(()=>{q(f,!1,R);})(),f;}if(u!==G&&i instanceof t&&i.hasOwnProperty(W)&&i.hasOwnProperty(w)&&i[W]!==I)ne(i),q(f,i[W],i[w]);else if(u!==G&&typeof p=="function")try{p.call(i,h(Z(f,u)),h(Z(f,!1)));}catch(R){h(()=>{q(f,!1,R);})();}else{f[W]=u;let R=f[w];if(f[w]=i,f[T]===T&&u===y&&(f[W]=f[j],f[w]=f[$]),u===G&&i instanceof Error){let g=n.currentTask&&n.currentTask.data&&n.currentTask.data[M];g&&a(i,oe,{configurable:!0,enumerable:!1,writable:!0,value:g});}for(let g=0;g<R.length;)ee(f,R[g++],R[g++],R[g++],R[g++]);if(R.length==0&&u==G){f[W]=d;let g=i;try{throw new Error("Uncaught (in promise): "+l(i)+(i&&i.stack?`
`+i.stack:""));}catch(C){g=C;}b&&(g.throwOriginal=!0),g.rejection=i,g.promise=f,g.zone=n.current,g.task=n.currentTask,E.push(g),c.scheduleMicroTask();}}}return f;}let U=_("rejectionHandledHandler");function ne(f){if(f[W]===d){try{let u=n[U];u&&typeof u=="function"&&u.call(this,{rejection:f[w],promise:f});}catch{}f[W]=G;for(let u=0;u<E.length;u++)f===E[u].promise&&E.splice(u,1);}}function ee(f,u,i,h,p){ne(f);let R=f[W],g=R?typeof h=="function"?h:A:typeof p=="function"?p:J;u.scheduleMicroTask(z,()=>{try{let C=f[w],S=!!i&&T===i[T];S&&(i[$]=C,i[j]=R);let D=u.run(g,void 0,S&&g!==J&&g!==A?[]:[C]);q(i,!0,D);}catch(C){q(i,!1,C);}},i);}let X="function ZoneAwarePromise() { [native code] }",se=function(){},L=e.AggregateError;class t{static toString(){return X;}static resolve(u){return u instanceof t?u:q(new this(null),y,u);}static reject(u){return q(new this(null),G,u);}static withResolvers(){let u={};return u.promise=new t((i,h)=>{u.resolve=i,u.reject=h;}),u;}static any(u){if(!u||typeof u[Symbol.iterator]!="function")return Promise.reject(new L([],"All promises were rejected"));let i=[],h=0;try{for(let g of u)h++,i.push(t.resolve(g));}catch{return Promise.reject(new L([],"All promises were rejected"));}if(h===0)return Promise.reject(new L([],"All promises were rejected"));let p=!1,R=[];return new t((g,C)=>{for(let S=0;S<i.length;S++)i[S].then(D=>{p||(p=!0,g(D));},D=>{R.push(D),h--,h===0&&(p=!0,C(new L(R,"All promises were rejected")));});});}static race(u){let i,h,p=new this((C,S)=>{i=C,h=S;});function R(C){i(C);}function g(C){h(C);}for(let C of u)F(C)||(C=this.resolve(C)),C.then(R,g);return p;}static all(u){return t.allWithCallback(u);}static allSettled(u){return(this&&this.prototype instanceof t?this:t).allWithCallback(u,{thenCallback:h=>({status:"fulfilled",value:h}),errorCallback:h=>({status:"rejected",reason:h})});}static allWithCallback(u,i){let h,p,R=new this((D,x)=>{h=D,p=x;}),g=2,C=0,S=[];for(let D of u){F(D)||(D=this.resolve(D));let x=C;try{D.then(V=>{S[x]=i?i.thenCallback(V):V,g--,g===0&&h(S);},V=>{i?(S[x]=i.errorCallback(V),g--,g===0&&h(S)):p(V);});}catch(V){p(V);}g++,C++;}return g-=2,g===0&&h(S),R;}constructor(u){let i=this;if(!(i instanceof t))throw new Error("Must be an instanceof Promise.");i[W]=I,i[w]=[];try{let h=P();u&&u(h(Z(i,y)),h(Z(i,G)));}catch(h){q(i,!1,h);}}get[Symbol.toStringTag](){return"Promise";}get[Symbol.species](){return t;}then(u,i){let h=this.constructor?.[Symbol.species];(!h||typeof h!="function")&&(h=this.constructor||t);let p=new h(se),R=n.current;return this[W]==I?this[w].push(R,p,u,i):ee(this,R,p,u,i),p;}catch(u){return this.then(null,u);}finally(u){let i=this.constructor?.[Symbol.species];(!i||typeof i!="function")&&(i=t);let h=new i(se);h[T]=T;let p=n.current;return this[W]==I?this[w].push(p,h,u,u):ee(this,p,h,u,u),h;}}t.resolve=t.resolve,t.reject=t.reject,t.race=t.race,t.all=t.all;let s=e[k]=e.Promise;e.Promise=t;let o=_("thenPatched");function v(f){let u=f.prototype,i=r(u,"then");if(i&&(i.writable===!1||!i.configurable))return;let h=u.then;u[m]=h,f.prototype.then=function(p,R){return new t((C,S)=>{h.call(this,C,S);}).then(p,R);},f[o]=!0;}c.patchThen=v;function B(f){return function(u,i){let h=f.apply(u,i);if(h instanceof t)return h;let p=h.constructor;return p[o]||v(p),h;};}return s&&(v(s),ue(e,"fetch",f=>B(f))),Promise[n.__symbol__("uncaughtPromiseErrors")]=E,t;});Zone.__load_patch("toString",e=>{let n=Function.prototype.toString,c=H("OriginalDelegate"),r=H("Promise"),a=H("Error"),l=function(){if(typeof this=="function"){let k=this[c];if(k)return typeof k=="function"?n.call(k):Object.prototype.toString.call(k);if(this===Promise){let m=e[r];if(m)return n.call(m);}if(this===Error){let m=e[a];if(m)return n.call(m);}}return n.call(this);};l[c]=n,Function.prototype.toString=l;let _=Object.prototype.toString,E="[object Promise]";Object.prototype.toString=function(){return typeof Promise=="function"&&this instanceof Promise?E:_.call(this);};});var _e=!1;if(typeof window<"u")try{let e=Object.defineProperty({},"passive",{get:function(){_e=!0;}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e);}catch{_e=!1;}var _t={useG:!0},te={},et={},tt=new RegExp("^"+pe+"(\\w+)(true|false)$"),nt=H("propagationStopped");function rt(e,n){let c=(n?n(e):e)+ae,r=(n?n(e):e)+ce,a=pe+c,l=pe+r;te[e]={},te[e][ae]=a,te[e][ce]=l;}function Et(e,n,c,r){let a=r&&r.add||Le,l=r&&r.rm||Ae,_=r&&r.listeners||"eventListeners",E=r&&r.rmAll||"removeAllListeners",b=H(a),k="."+a+":",m="prependListener",M="."+m+":",N=function(w,T,$){if(w.isRemoved)return;let j=w.callback;typeof j=="object"&&j.handleEvent&&(w.callback=y=>j.handleEvent(y),w.originalDelegate=j);let z;try{w.invoke(w,T,[$]);}catch(y){z=y;}let I=w.options;if(I&&typeof I=="object"&&I.once){let y=w.originalDelegate?w.originalDelegate:w.callback;T[l].call(T,$.type,y,I);}return z;};function O(w,T,$){if(T=T||e.event,!T)return;let j=w||T.target||e,z=j[te[T.type][$?ce:ae]];if(z){let I=[];if(z.length===1){let y=N(z[0],j,T);y&&I.push(y);}else{let y=z.slice();for(let G=0;G<y.length&&!(T&&T[nt]===!0);G++){let d=N(y[G],j,T);d&&I.push(d);}}if(I.length===1)throw I[0];for(let y=0;y<I.length;y++){let G=I[y];n.nativeScheduleMicroTask(()=>{throw G;});}}}let F=function(w){return O(this,w,!1);},A=function(w){return O(this,w,!0);};function J(w,T){if(!w)return!1;let $=!0;T&&T.useG!==void 0&&($=T.useG);let j=T&&T.vh,z=!0;T&&T.chkDup!==void 0&&(z=T.chkDup);let I=!1;T&&T.rt!==void 0&&(I=T.rt);let y=w;for(;y&&!y.hasOwnProperty(a);)y=Ie(y);if(!y&&w[a]&&(y=w),!y||y[b])return!1;let G=T&&T.eventNameToString,d={},Z=y[b]=y[a],P=y[H(l)]=y[l],K=y[H(_)]=y[_],oe=y[H(E)]=y[E],q;T&&T.prepend&&(q=y[H(T.prepend)]=y[T.prepend]);function U(i,h){return!_e&&typeof i=="object"&&i?!!i.capture:!_e||!h?i:typeof i=="boolean"?{capture:i,passive:!0}:i?typeof i=="object"&&i.passive!==!1?{...i,passive:!0}:i:{passive:!0};}let ne=function(i){if(!d.isExisting)return Z.call(d.target,d.eventName,d.capture?A:F,d.options);},ee=function(i){if(!i.isRemoved){let h=te[i.eventName],p;h&&(p=h[i.capture?ce:ae]);let R=p&&i.target[p];if(R){for(let g=0;g<R.length;g++)if(R[g]===i){R.splice(g,1),i.isRemoved=!0,R.length===0&&(i.allRemoved=!0,i.target[p]=null);break;}}}if(i.allRemoved)return P.call(i.target,i.eventName,i.capture?A:F,i.options);},X=function(i){return Z.call(d.target,d.eventName,i.invoke,d.options);},se=function(i){return q.call(d.target,d.eventName,i.invoke,d.options);},L=function(i){return P.call(i.target,i.eventName,i.invoke,i.options);},t=$?ne:X,s=$?ee:L,o=function(i,h){let p=typeof h;return p==="function"&&i.callback===h||p==="object"&&i.originalDelegate===h;},v=T&&T.diff?T.diff:o,B=Zone[H("UNPATCHED_EVENTS")],f=e[H("PASSIVE_EVENTS")],u=function(i,h,p,R,g=!1,C=!1){return function(){let S=this||e,D=arguments[0];T&&T.transferEventName&&(D=T.transferEventName(D));let x=arguments[1];if(!x)return i.apply(this,arguments);if(we&&D==="uncaughtException")return i.apply(this,arguments);let V=!1;if(typeof x!="function"){if(!x.handleEvent)return i.apply(this,arguments);V=!0;}if(j&&!j(i,x,S,arguments))return;let fe=_e&&!!f&&f.indexOf(D)!==-1,Q=U(arguments[2],fe),ye=Q&&typeof Q=="object"&&Q.signal&&typeof Q.signal=="object"?Q.signal:void 0;if(ye?.aborted)return;if(B){for(let he=0;he<B.length;he++)if(D===B[he])return fe?i.call(S,D,x,Q):i.apply(this,arguments);}let Ce=Q?typeof Q=="boolean"?!0:Q.capture:!1,Ve=Q&&typeof Q=="object"?Q.once:!1,it=Zone.current,Se=te[D];Se||(rt(D,G),Se=te[D]);let Be=Se[Ce?ce:ae],de=S[Be],Fe=!1;if(de){if(Fe=!0,z){for(let he=0;he<de.length;he++)if(v(de[he],x))return;}}else de=S[Be]=[];let ve,Ue=S.constructor.name,Xe=et[Ue];Xe&&(ve=Xe[D]),ve||(ve=Ue+h+(G?G(D):D)),d.options=Q,Ve&&(d.options.once=!1),d.target=S,d.capture=Ce,d.eventName=D,d.isExisting=Fe;let me=$?_t:void 0;me&&(me.taskData=d),ye&&(d.options.signal=void 0);let ie=it.scheduleEventTask(ve,x,me,p,R);if(ye&&(d.options.signal=ye,i.call(ye,"abort",()=>{ie.zone.cancelTask(ie);},{once:!0})),d.target=null,me&&(me.taskData=null),Ve&&(Q.once=!0),!_e&&typeof ie.options=="boolean"||(ie.options=Q),ie.target=S,ie.capture=Ce,ie.eventName=D,V&&(ie.originalDelegate=x),C?de.unshift(ie):de.push(ie),g)return S;};};return y[a]=u(Z,k,t,s,I),q&&(y[m]=u(q,M,se,s,I,!0)),y[l]=function(){let i=this||e,h=arguments[0];T&&T.transferEventName&&(h=T.transferEventName(h));let p=arguments[2],R=p?typeof p=="boolean"?!0:p.capture:!1,g=arguments[1];if(!g)return P.apply(this,arguments);if(j&&!j(P,g,i,arguments))return;let C=te[h],S;C&&(S=C[R?ce:ae]);let D=S&&i[S];if(D)for(let x=0;x<D.length;x++){let V=D[x];if(v(V,g)){if(D.splice(x,1),V.isRemoved=!0,D.length===0&&(V.allRemoved=!0,i[S]=null,typeof h=="string")){let fe=pe+"ON_PROPERTY"+h;i[fe]=null;}return V.zone.cancelTask(V),I?i:void 0;}}return P.apply(this,arguments);},y[_]=function(){let i=this||e,h=arguments[0];T&&T.transferEventName&&(h=T.transferEventName(h));let p=[],R=ot(i,G?G(h):h);for(let g=0;g<R.length;g++){let C=R[g],S=C.originalDelegate?C.originalDelegate:C.callback;p.push(S);}return p;},y[E]=function(){let i=this||e,h=arguments[0];if(h){T&&T.transferEventName&&(h=T.transferEventName(h));let p=te[h];if(p){let R=p[ae],g=p[ce],C=i[R],S=i[g];if(C){let D=C.slice();for(let x=0;x<D.length;x++){let V=D[x],fe=V.originalDelegate?V.originalDelegate:V.callback;this[l].call(this,h,fe,V.options);}}if(S){let D=S.slice();for(let x=0;x<D.length;x++){let V=D[x],fe=V.originalDelegate?V.originalDelegate:V.callback;this[l].call(this,h,fe,V.options);}}}}else{let p=Object.keys(i);for(let R=0;R<p.length;R++){let g=p[R],C=tt.exec(g),S=C&&C[1];S&&S!=="removeListener"&&this[E].call(this,S);}this[E].call(this,"removeListener");}if(I)return this;},le(y[a],Z),le(y[l],P),oe&&le(y[E],oe),K&&le(y[_],K),!0;}let W=[];for(let w=0;w<c.length;w++)W[w]=J(c[w],r);return W;}function ot(e,n){if(!n){let l=[];for(let _ in e){let E=tt.exec(_),b=E&&E[1];if(b&&(!n||b===n)){let k=e[_];if(k)for(let m=0;m<k.length;m++)l.push(k[m]);}}return l;}let c=te[n];c||(rt(n),c=te[n]);let r=e[c[ae]],a=e[c[ce]];return r?a?r.concat(a):r.slice():a?a.slice():[];}function Tt(e,n){let c=e.Event;c&&c.prototype&&n.patchMethod(c.prototype,"stopImmediatePropagation",r=>function(a,l){a[nt]=!0,r&&r.apply(a,l);});}function yt(e,n,c,r,a){let l=Zone.__symbol__(r);if(n[l])return;let _=n[l]=n[r];n[r]=function(E,b,k){return b&&b.prototype&&a.forEach(function(m){let M=`${c}.${r}::`+m,N=b.prototype;try{if(N.hasOwnProperty(m)){let O=e.ObjectGetOwnPropertyDescriptor(N,m);O&&O.value?(O.value=e.wrapWithCurrentZone(O.value,M),e._redefineProperty(b.prototype,m,O)):N[m]&&(N[m]=e.wrapWithCurrentZone(N[m],M));}else N[m]&&(N[m]=e.wrapWithCurrentZone(N[m],M));}catch{}}),_.call(n,E,b,k);},e.attachOriginToPatched(n[r],_);}function st(e,n,c){if(!c||c.length===0)return n;let r=c.filter(l=>l.target===e);if(!r||r.length===0)return n;let a=r[0].ignoreProperties;return n.filter(l=>a.indexOf(l)===-1);}function Ye(e,n,c,r){if(!e)return;let a=st(e,n,c);Qe(e,a,r);}function Ze(e){return Object.getOwnPropertyNames(e).filter(n=>n.startsWith("on")&&n.length>2).map(n=>n.substring(2));}function mt(e,n){if(we&&!Ke||Zone[e.symbol("patchEvents")])return;let c=n.__Zone_ignore_on_properties,r=[];if(xe){let a=window;r=r.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);let l=ht()?[{target:a,ignoreProperties:["error"]}]:[];Ye(a,Ze(a),c&&c.concat(l),Ie(a));}r=r.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let a=0;a<r.length;a++){let l=n[r[a]];l&&l.prototype&&Ye(l.prototype,Ze(l.prototype),c);}}Zone.__load_patch("util",(e,n,c)=>{let r=Ze(e);c.patchOnProperties=Qe,c.patchMethod=ue,c.bindArguments=Ge,c.patchMacroTask=ft;let a=n.__symbol__("BLACK_LISTED_EVENTS"),l=n.__symbol__("UNPATCHED_EVENTS");e[l]&&(e[a]=e[l]),e[a]&&(n[a]=n[l]=e[a]),c.patchEventPrototype=Tt,c.patchEventTarget=Et,c.isIEOrEdge=dt,c.ObjectDefineProperty=Me,c.ObjectGetOwnPropertyDescriptor=ge,c.ObjectCreate=ct,c.ArraySlice=at,c.patchClass=ke,c.wrapWithCurrentZone=He,c.filterProperties=st,c.attachOriginToPatched=le,c._redefineProperty=Object.defineProperty,c.patchCallbacks=yt,c.getGlobalObjects=()=>({globalSources:et,zoneSymbolEventNames:te,eventNames:r,isBrowser:xe,isMix:Ke,isNode:we,TRUE_STR:ce,FALSE_STR:ae,ZONE_SYMBOL_PREFIX:pe,ADD_EVENT_LISTENER_STR:Le,REMOVE_EVENT_LISTENER_STR:Ae});});function gt(e,n){n.patchMethod(e,"queueMicrotask",c=>function(r,a){Zone.current.scheduleMicroTask("queueMicrotask",a[0]);});}var be=H("zoneTask");function Ee(e,n,c,r){let a=null,l=null;n+=r,c+=r;let _={};function E(k){let m=k.data;return m.args[0]=function(){return k.invoke.apply(this,arguments);},m.handleId=a.apply(e,m.args),k;}function b(k){return l.call(e,k.data.handleId);}a=ue(e,n,k=>function(m,M){if(typeof M[0]=="function"){let N={isPeriodic:r==="Interval",delay:r==="Timeout"||r==="Interval"?M[1]||0:void 0,args:M},O=M[0];M[0]=function(){try{return O.apply(this,arguments);}finally{N.isPeriodic||(typeof N.handleId=="number"?delete _[N.handleId]:N.handleId&&(N.handleId[be]=null));}};let F=je(n,M[0],N,E,b);if(!F)return F;let A=F.data.handleId;return typeof A=="number"?_[A]=F:A&&(A[be]=F),A&&A.ref&&A.unref&&typeof A.ref=="function"&&typeof A.unref=="function"&&(F.ref=A.ref.bind(A),F.unref=A.unref.bind(A)),typeof A=="number"||A?A:F;}else return k.apply(e,M);}),l=ue(e,c,k=>function(m,M){let N=M[0],O;typeof N=="number"?O=_[N]:(O=N&&N[be],O||(O=N)),O&&typeof O.type=="string"?O.state!=="notScheduled"&&(O.cancelFn&&O.data.isPeriodic||O.runCount===0)&&(typeof N=="number"?delete _[N]:N&&(N[be]=null),O.zone.cancelTask(O)):k.apply(e,M);});}function pt(e,n){let{isBrowser:c,isMix:r}=n.getGlobalObjects();if(!c&&!r||!e.customElements||!("customElements"in e))return;let a=["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"];n.patchCallbacks(n,e.customElements,"customElements","define",a);}function kt(e,n){if(Zone[n.symbol("patchEventTarget")])return;let{eventNames:c,zoneSymbolEventNames:r,TRUE_STR:a,FALSE_STR:l,ZONE_SYMBOL_PREFIX:_}=n.getGlobalObjects();for(let b=0;b<c.length;b++){let k=c[b],m=k+l,M=k+a,N=_+m,O=_+M;r[k]={},r[k][l]=N,r[k][a]=O;}let E=e.EventTarget;if(!(!E||!E.prototype))return n.patchEventTarget(e,n,[E&&E.prototype]),!0;}function vt(e,n){n.patchEventPrototype(e,n);}Zone.__load_patch("legacy",e=>{let n=e[Zone.__symbol__("legacyPatch")];n&&n();});Zone.__load_patch("timers",e=>{let n="set",c="clear";Ee(e,n,c,"Timeout"),Ee(e,n,c,"Interval"),Ee(e,n,c,"Immediate");});Zone.__load_patch("requestAnimationFrame",e=>{Ee(e,"request","cancel","AnimationFrame"),Ee(e,"mozRequest","mozCancel","AnimationFrame"),Ee(e,"webkitRequest","webkitCancel","AnimationFrame");});Zone.__load_patch("blocking",(e,n)=>{let c=["alert","prompt","confirm"];for(let r=0;r<c.length;r++){let a=c[r];ue(e,a,(l,_,E)=>function(b,k){return n.current.run(l,e,k,E);});}});Zone.__load_patch("EventTarget",(e,n,c)=>{vt(e,c),kt(e,c);let r=e.XMLHttpRequestEventTarget;r&&r.prototype&&c.patchEventTarget(e,c,[r.prototype]);});Zone.__load_patch("MutationObserver",(e,n,c)=>{ke("MutationObserver"),ke("WebKitMutationObserver");});Zone.__load_patch("IntersectionObserver",(e,n,c)=>{ke("IntersectionObserver");});Zone.__load_patch("FileReader",(e,n,c)=>{ke("FileReader");});Zone.__load_patch("on_property",(e,n,c)=>{mt(c,e);});Zone.__load_patch("customElements",(e,n,c)=>{pt(e,c);});Zone.__load_patch("XHR",(e,n)=>{b(e);let c=H("xhrTask"),r=H("xhrSync"),a=H("xhrListener"),l=H("xhrScheduled"),_=H("xhrURL"),E=H("xhrErrorBeforeScheduled");function b(k){let m=k.XMLHttpRequest;if(!m)return;let M=m.prototype;function N(d){return d[c];}let O=M[De],F=M[Ne];if(!O){let d=k.XMLHttpRequestEventTarget;if(d){let Z=d.prototype;O=Z[De],F=Z[Ne];}}let A="readystatechange",J="scheduled";function W(d){let Z=d.data,P=Z.target;P[l]=!1,P[E]=!1;let K=P[a];O||(O=P[De],F=P[Ne]),K&&F.call(P,A,K);let oe=P[a]=()=>{if(P.readyState===P.DONE)if(!Z.aborted&&P[l]&&d.state===J){let U=P[n.__symbol__("loadfalse")];if(P.status!==0&&U&&U.length>0){let ne=d.invoke;d.invoke=function(){let ee=P[n.__symbol__("loadfalse")];for(let X=0;X<ee.length;X++)ee[X]===d&&ee.splice(X,1);!Z.aborted&&d.state===J&&ne.call(d);},U.push(d);}else d.invoke();}else!Z.aborted&&P[l]===!1&&(P[E]=!0);};return O.call(P,A,oe),P[c]||(P[c]=d),y.apply(P,Z.args),P[l]=!0,d;}function w(){}function T(d){let Z=d.data;return Z.aborted=!0,G.apply(Z.target,Z.args);}let $=ue(M,"open",()=>function(d,Z){return d[r]=Z[2]==!1,d[_]=Z[1],$.apply(d,Z);}),j="XMLHttpRequest.send",z=H("fetchTaskAborting"),I=H("fetchTaskScheduling"),y=ue(M,"send",()=>function(d,Z){if(n.current[I]===!0||d[r])return y.apply(d,Z);{let P={target:d,url:d[_],isPeriodic:!1,args:Z,aborted:!1},K=je(j,w,P,W,T);d&&d[E]===!0&&!P.aborted&&K.state===J&&K.invoke();}}),G=ue(M,"abort",()=>function(d,Z){let P=N(d);if(P&&typeof P.type=="string"){if(P.cancelFn==null||P.data&&P.data.aborted)return;P.zone.cancelTask(P);}else if(n.current[z]===!0)return G.apply(d,Z);});}});Zone.__load_patch("geolocation",e=>{e.navigator&&e.navigator.geolocation&&ut(e.navigator.geolocation,["getCurrentPosition","watchPosition"]);});Zone.__load_patch("PromiseRejectionEvent",(e,n)=>{function c(r){return function(a){ot(e,r).forEach(_=>{let E=e.PromiseRejectionEvent;if(E){let b=new E(r,{promise:a.promise,reason:a.rejection});_.invoke(b);}});};}e.PromiseRejectionEvent&&(n[H("unhandledPromiseRejectionHandler")]=c("unhandledrejection"),n[H("rejectionHandledHandler")]=c("rejectionhandled"));});Zone.__load_patch("queueMicrotask",(e,n,c)=>{gt(e,c);});(globalThis.$localize??={}).locale="ru";/**i18n:15532d68a152d1b02ceb639d7639ec309fa9c79309c98a8bae3fa72f0bf19670*/
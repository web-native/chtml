!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=28)}([function(e,t,r){"use strict";t.a=function(e){return Array.isArray(e)}},function(e,t,r){"use strict";t.a=function(e){return!Array.isArray(e)&&"object"==typeof e&&e}},function(e,t,r){"use strict";t.a=function(e){return e instanceof String||"string"==typeof e&&null!==e}},function(e,t,r){"use strict";var n=r(13);t.a=function(e){return Array.isArray(e)||"object"==typeof e&&e||Object(n.a)(e)}},function(e,t,r){"use strict";var n=r(0),i=r(2),a=r(5),s=r(18),o=r(1);t.a=function(e,t=!0){return Object(n.a)(e)?e:!t&&Object(o.a)(e)?[e]:!1!==e&&0!==e&&Object(s.a)(e)?[]:function(e){return!Object(i.a)(e)&&!Object(a.a)(e.length)}(e)?Array.prototype.slice.call(e):Object(o.a)(e)?Object.values(e):[e]}},function(e,t,r){"use strict";t.a=function(e){return arguments.length&&(void 0===e||void 0===e)}},function(e,t,r){"use strict";t.a=function(e){return!0!==e&&!1!==e&&null!==e&&""!==e&&!isNaN(1*e)}},function(e,t,r){"use strict";var n=r(13);t.a=function(e){return Object(n.a)(e)||e&&"[object function]"==={}.toString.call(e)}},function(e,t,r){"use strict";var n=r(15);t.a=function(...e){return Object(n.a)(e,(e,t,r)=>!0,!1,!1,!1)}},function(e,t,r){"use strict";var n=r(3),i=r(6);t.a=function(e,t){var r=void 0;return Object(n.a)(e)&&Object.keys(e).forEach((n,a)=>{!1!==r&&(r=t(Object(i.a)(n)?parseFloat(n):n,e[n],a))}),r}},function(e,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return u}));var n=r(2),i=r(20),a=r(4),s=r(12);function o(e,t,r,n={}){return n.on="removed",l(e,t,(e,t)=>{r(e,t)},n)}function c(e,t,r,i={}){Object(s.a)(e,()=>{e.MutationObserver&&function(e,t,r,n={}){n.on="added",l(e,t,(e,t)=>{r(e,t)},n)}(e,t,(e,t)=>{e.forEach(e=>r(e,t))},i),Object(n.a)(t)?Object(a.a)(e.document.querySelectorAll(t)).forEach(e=>r(e,1)):t.parentNode&&r(t,1)})}function l(e,t,r,s={}){t=Object(a.a)(t,!1);var o=(e,t)=>{if(t=t.filter(e=>e.matches),Object(n.a)(e)){var r=t.filter(t=>t.matches(e));if(!1!==s.observeIndirectMutation&&(r=t.reduce((t,r)=>t.concat(Object(a.a)(r.querySelectorAll(e))),r)).length)return r}else{if(t.includes(e))return[e];if(!1!==s.observeIndirectMutation&&t.length)for(var i=e;i=i.parentNode;)if(t.includes(i))return[e]}},c=[],l=[],u=s.context||e.document.documentElement,f=new e.MutationObserver(e=>{if(!s.on||"added"===s.on){var u=[];if(t.forEach(t=>{if(Object(n.a)(t))u=e.reduce((e,r)=>e.concat(o(t,Object(a.a)(r.addedNodes))||[]),u);else{var r=e.reduce((e,r)=>e||(o(t,Object(a.a)(r.addedNodes))||[])[0],null);r&&u.push(r)}}),u.length)if(s.onceEach){var p=Object(i.a)(u,c);p.length&&(c.push(...p),r(p,1))}else s.once&&f.disconnect(),r(u,1)}if(!s.on||"removed"===s.on){var h=[];if(t.forEach(t=>{if(Object(n.a)(t))h=e.reduce((e,r)=>e.concat(o(t,Object(a.a)(r.removedNodes))||[]),h);else{var r=e.reduce((e,r)=>e||(o(t,Object(a.a)(r.removedNodes))||[])[0],null);r&&h.push(r)}}),h.length)if(s.onceEach){var d=Object(i.a)(h,l);d.length&&(l.push(...d),r(d,0))}else s.once&&f.disconnect(),r(h,0)}});return f.observe(u,{childList:!0,subtree:!0}),f}function u(e,t,r,n=[]){var i=new e.MutationObserver(r),a={attributes:!0,attributeOldValue:!0};return n&&(a.attributeFilter=n),i.observe(t,a),i}},function(e,t,r){"use strict";t.a=function(e){return e.filter((e,t,r)=>r.indexOf(e)===t)}},function(e,t,r){"use strict";t.a=function(e,t){e.__readyCallbacks||(e.__readyCallbacks=[]),"complete"===e.document.readyState?t():e.__readyCallbacks.push(t),e.document.addEventListener("DOMContentLoaded",()=>{e.__readyCallbacks.forEach(e=>e()),e.__readyCallbacks.splice(0)},!1)}},function(e,t,r){"use strict";t.a=function(e){return"function"==typeof e}},function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(6),i=r(1),a=r(0),s=(r(2),r(8)),o=function(e,t,r=null){return Object(s.a)(e,Object(i.a)(t)?t:function(e,t=null){var r={};return 2===arguments.length&&(Object(a.a)(e)&&Object(a.a)(t)?e.forEach((e,n)=>r[e]=t[n]):r[e]=t),r}(t,r))};function c(e,t,r=null){if(e.CHTML_META||(e.CHTML_METATag=e.document.querySelector('meta[name="chtml"]'))&&(e.CHTML_META=(e.CHTML_METATag.getAttribute("content")||"").split(";").filter(e=>e).reduce((e,t)=>{var r=t.split("=").map(e=>e.trim());return o(e,r[0],"true"===r[1]||"false"!==r[1]&&(Object(n.a)(r[1])?parseInt(r[1]):r[1]))},{})),3===arguments.length){!1===r?delete e.CHTML_META[t]:e.CHTML_META[t]=!0===r?"true":r;var i=Object.keys(e.CHTML_META).reduce((t,r)=>t+r+"="+e.CHTML_META[r]+";","");return e.CHTML_METATag.setAttribute("content",i),!0}return e.CHTML_META?e.CHTML_META[t]:void 0}},function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(0),i=r(7),a=r(1),s=r(3),o=r(6),c=function(e,t){var r=[];return function(e,t){t=(t=t||Object.prototype)&&!Object(n.a)(t)?[t]:t;var r=[];for(e=e;e&&(!t||t.indexOf(e)<0)&&"default"!==e.name;)r.push(e),e=e?Object.getPrototypeOf(e):null;return r}(e,t).forEach(e=>{!function(e,...t){t.forEach(t=>{e.indexOf(t)<0&&e.push(t)})}(r,...Object.getOwnPropertyNames(e))}),r};function l(e,t,r=!1,u=!1,f=!0){var p=0,h=e.shift();if((Object(o.a)(h)||!0===h||!1===h)&&(p=h,h=e.shift()),!e.length)throw new Error("_merge() requires two or more array/objects.");return e.forEach((e,d)=>{(Object(s.a)(e)||Object(i.a)(e))&&(r?c(e):Object.getOwnPropertyNames(e)).forEach(i=>{var s=h[i],c=e[i];if((Object(n.a)(s)&&Object(n.a)(c)||Object(a.a)(s)&&Object(a.a)(c))&&(!0===p||p>0))h[i]=Object(n.a)(s)&&Object(n.a)(c)?[]:{},l([Object(o.a)(p)?p-1:p,h[i],s,c],t,r,u,f);else if(t(i,h,e,d))if(Object(n.a)(h)&&Object(n.a)(e))u?h[i]=c:h.push(c);else try{f?Object.defineProperty(h,i,Object.getOwnPropertyDescriptor(e,i)):h[i]=e[i]}catch(e){}})}),h}},function(e,t,r){"use strict";var n=function(e){return Array.isArray(e)},i=function(e){return e instanceof String||"string"==typeof e&&null!==e},a=function(e){return arguments.length&&(void 0===e||void 0===e)},s=function(e){return null===e||""===e},o=function(e){return"function"==typeof e},c=function(e){return Array.isArray(e)||"object"==typeof e&&e||o(e)},l=function(e){return!Array.isArray(e)&&"object"==typeof e&&e},u=function(e,t=!0){return n(e)?e:!t&&l(e)?[e]:!1!==e&&0!==e&&function(e){return s(e)||a(e)||!1===e||0===e||c(e)&&!Object.keys(e).length}(e)?[]:function(e){return!i(e)&&!a(e.length)}(e)?Array.prototype.slice.call(e):l(e)?Object.values(e):[e]},f=function(e){return o(e)||e&&"[object function]"==={}.toString.call(e)},p=function(e){return typeof e},h=function(e,t,r=null){if(!c(e))throw new Error('Object must be of type subject; "'+p(e)+'" given!');var n;if(!(n=e[t])&&r)try{n=new r(e),Object.defineProperty(e,t,{get:()=>n,set:e=>{if(e!==n)throw new Error('Attempt to overwrite the "'+t+'" special property!')},enumerable:!1})}catch(e){}return n},d=function(e,t,r=null){return n(t)?e.filter(e=>r?t.filter(t=>r(e,t)).length:-1!==t.indexOf(e)):[]},b=class{constructor(e){this.subject=e,this.fireables=[],this.currentlyFiring=[]}add(e){return this.fireables.push(e),e}forget(e){this.filter(e).forEach(e=>{this.fireables=this.fireables.filter(t=>t!==e)})}filter(e){return this.fireables.filter(t=>{var r=u(t.filter),n=u((t.params||{}).tags),i=u(e.filter),a=u((e.params||{}).tags);return!(e.originalHandler&&t.handler!==e.originalHandler||i.length&&(i.length!==r.length||d(r,i).length!==i.length)||a.length&&(a.length!==n.length||d(n,a).length!==a.length))})}},m=function(e,...t){return t.forEach(t=>{e.indexOf(t)<0&&e.push(t)}),e},v=function(e,t,r=!1){if(""==t)return e;var n=r?e.lastIndexOf(t):e.indexOf(t);return-1===n?"":e.substr(n+t.length)},y=function(e,t,r={},n={}){t=u(t).slice();for(var i=e;!a(i)&&!s(i)&&t.length;){var o=t.shift();if(!(r.get?r.get(i,o):c(i)?o in i:i[o]))return void(n.exists=!1);i=r.get?r.get(i,o):i[o]}return n.exists=!0,i},w=function(e,t=null){var r={};return 2===arguments.length&&(n(e)&&n(t)?e.forEach((e,n)=>r[e]=t[n]):r[e]=t),r},g=function(e){return!0!==e&&!1!==e&&null!==e&&""!==e&&!isNaN(1*e)},j=function(e){return o(e)&&/^class\s?/.test(Function.prototype.toString.call(e))},O=function(e,t){var r=[];return function(e,t){t=(t=t||Object.prototype)&&!n(t)?[t]:t;var r=[];for(e=e;e&&(!t||t.indexOf(e)<0)&&"default"!==e.name;)r.push(e),e=e?Object.getPrototypeOf(e):null;return r}(e,t).forEach(e=>{m(r,...Object.getOwnPropertyNames(e))}),r};function E(e,t,r=!1,i=!1,a=!0){var s=0,o=e.shift();if((g(o)||!0===o||!1===o)&&(s=o,o=e.shift()),!e.length)throw new Error("_merge() requires two or more array/objects.");return e.forEach((e,u)=>{(c(e)||f(e))&&(r?O(e):Object.getOwnPropertyNames(e)).forEach(c=>{var f=o[c],p=e[c];if((n(f)&&n(p)||l(f)&&l(p))&&(!0===s||s>0))o[c]=n(f)&&n(p)?[]:{},E([g(s)?s-1:s,o[c],f,p],t,r,i,a);else if(t(c,o,e,u))if(n(o)&&n(e))i?o[c]=p:o.push(p);else try{a?Object.defineProperty(o,c,Object.getOwnPropertyDescriptor(e,c)):o[c]=e[c]}catch(e){}})}),o}var A=function(e,t=[],r=!0){var i=0;return g(arguments[0])&&c(arguments[1])&&(i=arguments[0],e=arguments[1],t=arguments[2]||[]),E([i,{},e],(e,r,i)=>f(t)?t(e):!n(t)||!t.length||t.indexOf(e)>-1,!1,!1,r)},T=function(e,t,r=null,n={}){if(!e||!c(e))throw new Error('Object must be of type subject; "'+p(e)+'" given!');if(f(t)&&(n=arguments.length>2?r:{},r=t,t=null),r&&!f(r))throw new Error('Handler must be a function; "'+p(r)+'" given!');var i;if(i=K(e,!1))return i.forget({filter:t,originalHandler:r,params:n})},x=function(e,t){var r=void 0;return c(e)&&Object.keys(e).forEach((n,i)=>{!1!==r&&(r=t(g(n)?parseFloat(n):n,e[n],i))}),r},C=class{constructor(e,t){this.subject=e,this.handler=t.handler,this.filter=t.filter,this.params=t.params}disconnect(){this.disconnected=!0}},M=class extends C{fire(e,t,r){return this.disconnected||this.filter&&this.filter!==e.type?t(...Array.prototype.slice.call(arguments,2)):this.handler(e,r,t)}},S=class{constructor(e,t){if(this.subject=e,!t.type)throw new Error("Action type must be given in definition!");x(t,(e,t)=>{Object.defineProperty(this,e,{value:t,enumerable:!0})}),Object.seal(this)}},P=class extends b{add(e){return super.add(new M(this.subject,e))}fire(e,t=null){if(e instanceof S||(e=new S(this.subject,e)),this.currentlyFiring.filter(t=>t.type===e.type&&t.name===e.name).length)return t?t():void 0;this.currentlyFiring.push(e);const r=(n,...i)=>{var a=this.fireables[n];return a?a.fire(e,(...e)=>r(n+1,...e),...i):t?t(...i):i[0]};var n=r(0);return this.currentlyFiring.pop(),n}},k=function(e,t=!0){return h(e,".interceptors",t?P:null)},N=function(e,t){if(!t||!c(t))throw new Error("Target must be of type object!");var r,n=function(r){return arguments.length?r:e?Object.getOwnPropertyNames(t):Object.keys(t)};return(r=k(t,!1))?r.fire({type:e?"ownKeys":"keys"},n):n()},_=function(e){return N(!1,...arguments)};function H(e,t=null,r=!1){if(!e||!c(e))throw new Error("Target must be of type object!");var n=K(e);if(!n.build){n.build=!0;var i=!(t=u(t)).length||t.filter(e=>e.startsWith(".")).length?_(e).filter(e=>-1===e.indexOf(".")):t.map(e=>function(e,t,r=!1){if(""==t)return e;var n=r?e.lastIndexOf(t):e.indexOf(t);return-1===n?e:e.substr(0,n)}(e,".")),a=t.length?t.map(e=>v(e,".")):null;i.forEach(t=>{var n=W(e,t);c(n)&&(B(e,t,n),(a||r)&&H(n,a,r))})}}var L=function(e,t,r=null,n={}){if(!e||!c(e))throw new Error('Object must be of type subject; "'+p(r)+'" given!');if(f(t)&&(n=arguments.length>2?r:{},r=t,t=null),!f(r))throw new Error('Callback must be a function; "'+p(r)+'" given!');var i={filter:t,handler:r,params:n};(i.filter||i.params.subtree)&&H(e,i.filter,i.params.subtree);var a,s=K(e);return i.params.unique&&(a=s.filter({filter:t,params:n})).length?a[0]:s.add(i)},R=class{constructor(e,t){if(this.subject=e,t.originalSubject||(this.originalSubject=e),!("type"in t))throw new Error("Delta type must be given in definition!");if(!("name"in t))throw new Error("Property name must be given in definition!");x(t,(e,t)=>{Object.defineProperty(this,e,{value:t,enumerable:!0})}),this.path||Object.defineProperty(this,"path",{value:t.name,enumerable:!0}),Object.seal(this)}},B=function(e,t,r){var n;L(r,r=>{if(n=K(e,!1)){var i=r.map(r=>{var n={};return x(r,(e,t)=>{"subject"!==e&&"name"!==e&&"path"!==e&&(n[e]=t)}),n.name=t,n.path=t+"."+r.path,n.originalSubject=r.originalSubject,new R(e,n)});return n.fire(i)}},{subtree:!0,unique:!0,tags:[F,t,e]})};const F={};var V=function(e,t,r){T(r,null,null,{tags:[F,t,e]})},D=function(e,...t){var r=t.map(e=>{if(!c(e))throw new Error("Target must be of type object!");return{subject:e,subjectCopy:n(e)?e.slice(0):A(e)}}),i=e(...t);return r.map(e=>{var t,r,i=Object.keys(e.subjectCopy),a=Object.keys(e.subject),s=[],o=(t=i.concat(a),t.filter((e,t,r)=>r.indexOf(e)===t)).map(t=>{if((!n(e.subject)||"length"!==t&&".observer"!==t)&&e.subjectCopy[t]!==e.subject[t]){s.push(t);var r={name:t,related:s,buffered:!0};return a.includes(t)?(r.type="set",r.value=e.subject[t],i.includes(t)&&(r.isUpdate=!0)):r.type="del",i.includes(t)&&(r.oldValue=e.subjectCopy[t]),c(e.subjectCopy[t])&&V(e.subject,t,e.subjectCopy[t]),c(e.subject[t])&&B(e.subject,t,e.subject[t]),r}}).filter(e=>e);if(o.length&&(r=K(e.subject,!1)))return r.fire(o)}),i},W=function(e,t,r=!1){if(!e||!c(e))throw new Error("Target must be of type object!");var i,a,s=function(r){return arguments.length?r:n(t)?w(t,e):e[t]};return i=(a=k(e))?a.fire({type:"get",name:t},s):s(),r&&n(e)&&!g(t)&&f(i)&&!j(i)?function(...t){return D(()=>i.apply(e,t),e)}:i},q=class extends C{constructor(e,t){if(super(e,t),this.filterArray=u(this.filter),this.isDynamicFilter=this.filterArray.filter(e=>i(e)&&(e.indexOf("..")>-1||e.startsWith(".")||e.endsWith("."))).length,this.isDynamicFilter&&this.filterArray.length>1)throw new Error('Only one "Dynamic Filter" must be observed at a time! "'+this.filterArray.join(", ")+'" have been bound together.')}fire(e){var t,r;if(!(this.disconnected||this.params.type&&(t=e,r=e=>this.params.type===e.type,!t.reduce((e,t)=>e||r(t),!1))))if(this.filterArray.length){var a=[];this.filterArray.filter((t,r)=>(t=i(t)?t.replace(/`/g,""):t,a[r]=[],e.filter(e=>{var n=e.path.split("."),i=this.isDynamicFilter?t.split(".").map((e,t)=>e||n[t]||"").join("."):t;return m(a[r],i),(i===e.name||!1!==this.params.suptree&&(i+".").startsWith(e.path+".")||this.params.subtree&&(e.path+".").startsWith(i+"."))&&(!this.isDynamicFilter||!i.split(".").filter(e=>!e).length)}).length)).length&&function(e){return e.reduce((e,t)=>{var r=[];return e.forEach(e=>{u(t).forEach(t=>{var n=e.slice();n.push(t),r.push(n)})}),r},[[]])}(a).forEach(t=>{var r=this.formatChanges(t,e);this.handler(n(this.filter)?r:r[0])})}else this.filter||!this.params.subtree&&e.filter(e=>e.path===e.name).length!==e.length||this.handler(e)}formatChanges(e,t){return!1===this.params.data?[]:e.map(e=>{var r=t.reduce((t,r)=>{if(t)return t;if(e+""==r.path+"")return r;if((e+".").startsWith(r.path+".")){var n=i(e)?v(e,r.path+".").split("."):e;t=new R(r.subject,{type:r.type,name:e});return("del"===r.type||r.isUpdate)&&(t.oldValue=y(r.oldValue,n,{get:W})),"del"!==r.type&&(t.value=y(r.value,n,{get:W})),t}},null);return r||(r=new R(this.subject,{type:"get",name:e,value:y(this.subject,i(e)?e.split("."):e,{get:W})})),r})}},I=class extends b{add(e){return super.add(new q(this.subject,e))}fire(e){return e=u(e,!1).map(e=>e instanceof R?e:new R(this.subject,e)),!this.currentlyFiring.filter(t=>e.filter(e=>t.type===e.type&&t.name===e.name).length).length&&(this.currentlyFiring.push(...e),this.fireables.forEach(t=>{if(e.propagationStopped)return!1;t.fire(e)}),e.forEach(e=>function(e,t,r=!1){for(var n=e.indexOf(t);n>-1&&(r||!1===r);)e.splice(n,1),r>0&&r--,n=e.indexOf(t);return e}(this.currentlyFiring,e)),!0)}},K=function(e,t=!0){return h(e,".observers",t?I:null)},U=function(e,t){if(!e||!c(e))throw new Error("Target must be of type object!");var r,n=function(r){return arguments.length?r:t in e};return(r=k(e,!1))?r.fire({type:"has",name:t},n):n()},z=function(e,t,r,a=null,s=null){if(!t||!c(t))throw new Error("Target must be of type object!");l(r)&&(s=a,a=null);var o=k(t,!1),f=K(t,!1);const p=(r,n,a,s)=>{if(i(r)&&-1!==r.indexOf("."))throw new Error("Property names with a dot are not supported!");var l,u="set";e&&(u="def",n=(l=n||{}).value);var p={name:r,type:u,value:n,related:a,detail:s};U(t,r)&&(p.isUpdate=!0,p.oldValue=W(t,r));var h=function(e){return arguments.length?e:(l?Object.defineProperty(t,r,l):t[r]=n,!0)};if(o){var d=l?{type:"def",name:r,descriptor:l,related:a,detail:s}:{type:"set",name:r,value:n,related:a,detail:s};p.success=o.fire(d,h)}else p.success=h();return p.success&&p.value!==p.oldValue&&(c(p.oldValue)&&V(t,r,p.oldValue),c(p.value)&&(B(t,r,p.value),f&&f.build&&H(p.value,null,!0))),p};var h,d,b=[];n(r)||(i(r)||((d=r)instanceof Number||"number"==typeof d))&&(h=u(r))?b=h.map(e=>p(e,a,h,s)):l(r)&&(h=Object.keys(r))&&(b=h.map(e=>p(e,r[e],h,s)));var m=b.filter(e=>e.success);return f&&f.fire(m),m.length>0},G=function(e,t,r=null,n=null){return z(!1,...arguments)},J=function(e,t,r=null){if(!e||!c(e))throw new Error("Target must be of type object!");var n,a=(t=u(t)).map(n=>{if(i(n)&&-1!==n.indexOf("."))throw new Error("Property names with a dot are not supported!");var a={name:n,type:"del",related:t,detail:r};U(e,n)&&(a.oldValue=W(e,n));var s,o=function(t){return arguments.length?t:(delete e[n],!0)};return(s=k(e,!1))?a.success=s.fire({type:"del",name:n,related:t},o):a.success=o(),a.success&&c(a.oldValue)&&V(e,n,a.oldValue),a}).filter(e=>e.success);return(n=K(e,!1))&&n.fire(a),a.length>0},Q=function(e,t,r=null,n=null){return z(!0,...arguments)},X=function(e){return N(!0,...arguments)};const Y=J,Z=Q;t.a={set:G,get:W,has:U,deleteProperty:J,del:Y,defineProperty:Q,def:Z,keys:_,ownKeys:X,intercept:function(e,t,r,n={}){if(!c(e))throw new Error('Object must be of type subject; "'+p(r)+'" given!');if(f(t)&&(n=arguments.length>2?r:{},r=t,t=null),!f(r))throw new Error('Callback must be a function; "'+p(r)+'" given!');var i,a=k(e),s={filter:t,handler:r,params:n};return s.params.unique&&(i=a.filter(s)).length?i[0]:a.add(s)},unintercept:function(e,t,r=null,n={}){if(!e||!c(e))throw new Error('Object must be of type subject; "'+p(e)+'" given!');if(f(t)&&(n=arguments.length>2?r:{},r=t,t=null),r&&!f(r))throw new Error('Handler must be a function; "'+p(r)+'" given!');var i;if(i=k(e,!1))return i.forget({filter:t,originalHandler:r,params:n})},proxy:function(e){if(!c(e))throw new Error('Object must be of type subject; "'+p(e)+'" given!');var t=new Proxy(e,{get:(e,r)=>{var n=W(e,r);return f(n)&&!j(n)?n.bind(t):n},set:G,has:U,deleteProperty:J,defineProperty:Q,ownKeys:X});return t},observe:L,unobserve:T,closure:D,init:function(e,t){u(t).forEach(t=>{var r,n,i=e[t],a=Object.getOwnPropertyDescriptor(e,t)||{enumerable:!(t in e)};"value"in a&&delete a.value,"writable"in a&&delete a.writable,a.get=()=>{if(r)return i;r=!0;var n=W(e,t);return r=!1,n},a.set=r=>{if(n)return i=r,!0;n=!0;G(e,t,r);return n=!1,!0},Object.defineProperty(e,t,a)})},build:H,link:B,unlink:V}},function(e,t,r){"use strict";t.a=function(e,t,r=!1){for(var n=e.indexOf(t);n>-1&&(r||!1===r);)e.splice(n,1),r>0&&r--,n=e.indexOf(t);return e}},function(e,t,r){"use strict";var n=r(19),i=r(5),a=r(3);t.a=function(e){return Object(n.a)(e)||Object(i.a)(e)||!1===e||0===e||Object(a.a)(e)&&!Object.keys(e).length}},function(e,t,r){"use strict";t.a=function(e){return null===e||""===e}},function(e,t,r){"use strict";var n=r(0);t.a=function(e,t,r=null){return Object(n.a)(t)?e.filter(e=>r?t.filter(t=>r(e,t)).length:-1===t.indexOf(e)):[]}},function(e,t,r){"use strict";t.a=function(e,t){return e.reduce((e,r)=>e||t(r),!1)}},,,function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var n=r(16),i=r(12),a=r(10),s=r(18),o=r(21),c=r(4),l=r(17),u=r(11),f=r(9),p=r(8),h=r(14),d={bundleElement:"partials-bundle",templateElement:"template",templateNamespaceAttribute:"name",slotReferenceAttribute:"partials-slot",templateReferenceAttribute:"template",slotElement:"partials-slot",slotNameAttribute:"name",itemsBindingMethod:"partialsItemize",itemIndexAttribute:"partials-index",keyValAttributes:[],listAttributes:[],inertContexts:["template"],inertSubjects:[],noinheritAttributes:["nocompose","name","template"],recomposeCallback:null};class b{constructor(e,t=n.a,r={}){const u=this;u.window=e,u.trap=t,u.params=Object(p.a)({},d,r);const b=e=>(e[".chtml"]||(e[".chtml"]={}),e[".chtml"]);if("templates"in u.window.document)throw new Error('document already has a "templates" property!');const m=[];Object.defineProperty(u.window.document,"templates",{value:{}}),Object.defineProperty(u.window.document,"templatesReadyState",{value:"loading",writable:!0});const v=e=>{var t=e.getAttribute(u.params.templateNamespaceAttribute);u.trap.set(u.window.document.templates,t,e)};Object(a.b)(u.window,"template["+u.window.CSS.escape(u.params.templateNamespaceAttribute)+"]",e=>{const t=()=>{var t=e.getAttribute("src");return new Promise((r,n)=>{u.window.fetch?u.window.fetch(t).then(e=>e.ok?e.text():Promise.reject(e.statusText)).then(t=>{e.innerHTML=t,v(e),e.dispatchEvent(new u.window.Event("load")),r(e)}).catch(n=>{e.innerHTML="",v(e),e.dispatchEvent(new u.window.Event("loaderror")),r(e),console.error("Error fetching the bundle at "+t+". ("+n+")")}):(r(e),console.error("Error fetching the bundle at "+t+". (window.fetch() not supported by browser.)"))})};Object(a.a)(u.window,e,e=>{t()},["src"]),Object(a.a)(u.window,e,t=>{u.window.document.templates[t[0].oldValue]===e&&u.trap.deleteProperty(u.window.document.templates,t[0].oldValue),v(e)},[u.params.templateNamespaceAttribute]),Object(a.c)(u.window,e,t=>{var r=e.getAttribute(u.params.templateNamespaceAttribute);u.window.document.templates[r]===e&&u.trap.deleteProperty(u.window.document.templates,r)},{once:!0}),e.getAttribute("src")&&!e.content.children.length?m.push(t()):v(e)});const y=e=>{(Object(s.a)(b(e).partials)||e.closest("[live]"))&&(b(e).templates={},b(e).partials={},Object(c.a)((e.content||e).children).forEach(t=>{var r;if(t instanceof u.window.HTMLTemplateElement&&(r=t.getAttribute(u.params.templateNamespaceAttribute)))b(e).templates[r]=t;else{var n=t.getAttribute(u.params.slotReferenceAttribute)||"default";b(e).partials[n]||(b(e).partials[n]=[]),b(e).partials[n].push(t)}}))};if("templates"in u.window.HTMLTemplateElement.prototype)throw new Error('The "HTMLTemplateElement" class already has a "templates" property!');if(Object.defineProperty(u.window.HTMLTemplateElement.prototype,"templates",{get:function(){return y(this),b(this).templates}}),"partials"in u.window.HTMLTemplateElement.prototype)throw new Error('The "HTMLTemplateElement" class already has a "partials" property!');if(Object.defineProperty(u.window.HTMLTemplateElement.prototype,"partials",{get:function(){return y(this),b(this).partials}}),"template"in u.window.Element.prototype)throw new Error('The "Element" class already has a "template" property!');Object.defineProperty(u.window.Element.prototype,"template",{get:function(){var e=this.getAttribute(u.params.templateReferenceAttribute);if(e){if(b(this).templates||(b(this).templates={}),!b(this).templates[e]||!this.hasAttribute("cache-template")){var t=e.split("/").filter(e=>e).reduce((e,t)=>e?e.templates[t]||e.templates["*"]:null,u.window.document);b(this).templates[e]=t}return b(this).templates[e]}}}),Object(a.b)(u.window,"["+u.window.CSS.escape(u.params.templateReferenceAttribute)+"]",e=>{var t=u.params.inertContexts.concat(u.params.inertSubjects);if(!Object(o.a)(t,t=>e.closest(t))){var r=()=>{Object(f.a)(b(e).slots,(e,t)=>{t.resolve()})};Object(a.a)(u.window,e,r,[u.params.templateReferenceAttribute]),u.trap.observe(u.window.document.templates,t=>{var n=e.getAttribute(u.params.templateReferenceAttribute);t.forEach(e=>{(n===e.value||n.startsWith(e.value+"/"))&&r()})})}}),u.window.customElements.define(u.params.slotElement,class extends u.window.HTMLElement{hydrate(e,t,r){this.anchorNode=e,b(this).slottedElements=t,b(this).compositionBlock=r,this._bindSlotted(t),this._connectToCompositionBlock()}connectedCallback(){this.anchorNode||(this.anchorNode=Object(h.a)(u.window,"isomorphic")?u.window.document.createComment(this.outerHTML):u.window.document.createTextNode(""),this.after(this.anchorNode),b(this).compositionBlock=this.hasAttribute(u.params.templateReferenceAttribute)?null:this.parentNode.closest("["+u.window.CSS.escape(u.params.templateReferenceAttribute)+"]"),this._connectToCompositionBlock(),Object(i.a)(u.window,()=>{Promise.all(m).then(()=>{this.resolve()})}))}_connectToCompositionBlock(){this.compositionBlock&&(b(this.compositionBlock).slots||(b(this.compositionBlock).slots={}),b(this.compositionBlock).slots[this.name]=this)}_bindSlotted(e){e.forEach(e=>{e.slotReference=this}),b(this).slottedObserver=Object(a.c)(u.window,e,e=>{e.forEach(e=>{e.parentNode||Object(l.a)(this.slottedElements,e),e.slotReference===this&&delete e.slotReference}),this.slottedElements.length||this.anchorNode.before(this)},{onceEach:!0})}resolve(){if(!Object(o.a)(u.params.inertContexts,e=>this.closest(e))){var e,t;if(this.hasAttribute(u.params.templateReferenceAttribute))this.compositionBlock&&b(this.compositionBlock).slots[this.name]===this&&delete b(this.compositionBlock).slots[this.name],(e=this.template)&&(t=e.partials[this.name]);else{if(!this.compositionBlock)return void console.warn("Scoped slots must be found within template contexts. ["+this.name+"]",this);(e=this.compositionBlock.template)&&(t=e.partials[this.name])}e?this.fill(t):this.empty()}}fill(e){e=Object(c.a)(e,!1).map(e=>e.cloneNode(!0)),this.empty(!0),this.remove(),e.forEach(e=>{"@slot"===e.getAttribute(u.params.templateReferenceAttribute)&&(b(e).templates||(b(e).templates={}),b(e).templates["@slot"]=this),u.mergeAttributes(e,this),e.getAttribute(u.params.slotReferenceAttribute)||e.setAttribute(u.params.slotReferenceAttribute,this.name),this.anchorNode.before(e)}),this._bindSlotted(e),this.slottedElements.push(...e)}empty(e=!1){if(this.slottedElements){var t=this.slottedElements;e&&this.slottedObserver&&(this.slottedObserver.disconnect(),t=this.slottedElements.splice(0)),t.forEach(e=>e.remove())}}get name(){return this.getAttribute(u.params.slotNameAttribute)||"default"}get compositionBlock(){return b(this).compositionBlock}get slottedElements(){return b(this).slottedElements||(b(this).slottedElements=[]),b(this).slottedElements}get partials(){return y(this),b(this).partials}static get observedAttributes(){return[u.params.slotNameAttribute]}});m.forEach(e=>{e.catch(e=>{console.warn(e)})}),Object(i.a)(u.window,()=>{Promise.all(m).then(()=>{u.window.document.templatesReadyState="complete",u.window.document.dispatchEvent(new u.window.Event("templatesreadystatechange"))}),Object(h.a)(u.window,"isomorphic")&&Object(c.a)(u.window.document.querySelectorAll("["+u.window.CSS.escape(u.params.slotReferenceAttribute)+"]")).forEach(e=>{if(!b(e.parentNode).slotsCan){var t=[];e.parentNode.childNodes.forEach(e=>{var r;if(1===e.nodeType&&e.matches("["+u.window.CSS.escape(u.params.slotReferenceAttribute)+"]"))t.push(e);else if(8===e.nodeType&&(r=e.nodeValue.trim())&&r.startsWith("<"+u.params.slotElement)&&r.endsWith("</"+u.params.slotElement+">")){var n,i,a=u.window.document.createElement("div");a.innerHTML=r,(n=a.firstChild).matches(u.params.slotElement)&&(n.hasAttribute(u.params.templateReferenceAttribute)||(i=e.parentNode.closest("["+u.window.CSS.escape(u.params.templateReferenceAttribute)+"]")),n.hydrate(e,t,i),t=[])}}),b(e.parentNode).slotsCan=!0}})})}mergePartials(e,t,r=[]){return t.partialsSlottables?(Object(f.a)(t.partialsSlottables,(t,n)=>{if(e.partialsSlottables&&e.partialsSlottables[t]){var i=r.concat((e.getAttribute("noinherit")||"").split(" ").map(e=>e.trim()));this.mergeAttributes(e.partialsSlottables[t],n,i,!1)}else e.append(n.clone(!0))}),e):e}mergeAttributes(e,t,r=[],n=!0){r=r.concat(this.params.noinheritAttributes),e.hasAttribute("noinherit")&&(r=r.concat((e.getAttribute("noinherit")||"*").split(" ").map(e=>e.trim())));var i=this.params.listAttributes.concat(["role","class"]);if(Object(u.a)(i).forEach(i=>{var a,s;if(!r.includes(i)&&!r.includes("*")&&(a=t.getAttribute(i))){if(s=e.getAttribute(i))var o=n?[s,a]:[a,s];else o=[a];e.setAttribute(i,Object(u.a)(o.join(" ").split(" ").map(e=>e.trim())).join(" ")),r.push(i)}}),Object(u.a)(this.params.keyValAttributes.concat("style")).forEach(i=>{var a,s;if(!r.includes(i)&&!r.includes("*")&&(a=t.getAttribute(i))){if(s=e.getAttribute(i))(o=n?[s,a]:[a,s])[0].trim().endsWith(";")||(o[0]=o[0]+";");else var o=[a];e.setAttribute(i,o.join(" ")),r.push(i)}}),!r.includes("*"))for(var a=0;a<t.attributes.length;a++){var s=t.attributes[a];r.includes(s.name)||e.hasAttribute(s.name)&&!n||e.setAttribute(s.name,s.value)}return e}}},,,,function(e,t,r){"use strict";r.r(t),new(r(24).a)(window)}]);
//# sourceMappingURL=html-partials.js.map
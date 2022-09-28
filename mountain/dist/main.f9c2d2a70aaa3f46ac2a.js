(()=>{"use strict";var e,t,r,n,o,a,i={576:(e,t,r)=>{var n=new Error;e.exports=new Promise(((e,t)=>{if("undefined"!=typeof ImageCaptionApp)return e();r.l("http://localhost:9003/remoteEntry.js",(r=>{if("undefined"!=typeof ImageCaptionApp)return e();var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;n.message="Loading script failed.\n("+o+": "+a+")",n.name="ScriptExternalLoadError",n.type=o,n.request=a,t(n)}),"ImageCaptionApp")})).then((()=>ImageCaptionApp))}},l={};function u(e){var t=l[e];if(void 0!==t)return t.exports;var r=l[e]={exports:{}};return i[e](r,r.exports,u),r.exports}u.m=i,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,u.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var o=Object.create(null);u.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var i=2&n&&r;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,u.d(o,a),o},u.d=(e,t)=>{for(var r in t)u.o(t,r)&&!u.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},u.f={},u.e=e=>Promise.all(Object.keys(u.f).reduce(((t,r)=>(u.f[r](e,t),t)),[])),u.u=e=>e+".2fe594045caf0f2ccbe3.js",u.miniCssF=e=>{},u.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},n="blog-template:",u.l=(e,t,o,a)=>{if(r[e])r[e].push(t);else{var i,l;if(void 0!==o)for(var f=document.getElementsByTagName("script"),c=0;c<f.length;c++){var p=f[c];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==n+o){i=p;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.setAttribute("data-webpack",n+o),i.src=e),r[e]=[t];var s=(t,n)=>{i.onerror=i.onload=null,clearTimeout(d);var o=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),t)return t(n)},d=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),l&&document.head.appendChild(i)}},u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o={538:[538]},a={538:["default","./ImageCaption",576]},u.f.remotes=(e,t)=>{u.o(o,e)&&o[e].forEach((e=>{var r=u.R;r||(r=[]);var n=a[e];if(!(r.indexOf(n)>=0)){if(r.push(n),n.p)return t.push(n.p);var o=t=>{t||(t=new Error("Container missing")),"string"==typeof t.message&&(t.message+='\nwhile loading "'+n[1]+'" from '+n[2]),u.m[e]=()=>{throw t},n.p=0},i=(e,r,a,i,l,u)=>{try{var f=e(r,a);if(!f||!f.then)return l(f,i,u);var c=f.then((e=>l(e,i)),o);if(!u)return c;t.push(n.p=c)}catch(e){o(e)}},l=(e,t,o)=>i(t.get,n[1],r,0,f,o),f=t=>{n.p=1,u.m[e]=e=>{e.exports=t()}};i(u,n[2],0,0,((e,t,r)=>e?i(u.I,n[0],0,e,l,r):o()),1)}}))},(()=>{u.S={};var e={},t={};u.I=(r,n)=>{n||(n=[]);var o=t[r];if(o||(o=t[r]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[r])return e[r];u.o(u.S,r)||(u.S[r]={}),u.S[r];var a=[];return"default"===r&&(e=>{var t=e=>{return t="Initialization of sharing external failed: "+e,"undefined"!=typeof console&&console.warn&&console.warn(t);var t};try{var o=u(576);if(!o)return;var i=e=>e&&e.init&&e.init(u.S[r],n);if(o.then)return a.push(o.then(i,t));var l=i(o);l&&l.then&&a.push(l.catch(t))}catch(e){t(e)}})(),a.length?e[r]=Promise.all(a).then((()=>e[r]=1)):e[r]=1}}})(),u.p="http://localhost:9002/",(()=>{var e={179:0};u.f.j=(t,r)=>{var n=u.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if(179==t){var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var a=u.p+u.u(t),i=new Error;u.l(a,(r=>{if(u.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+t,t)}else e[t]=0};var t=(t,r)=>{var n,o,[a,i,l]=r,f=0;if(a.some((t=>0!==e[t]))){for(n in i)u.o(i,n)&&(u.m[n]=i[n]);l&&l(u)}for(t&&t(r);f<a.length;f++)o=a[f],u.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkblog_template=self.webpackChunkblog_template||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(()=>{function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const t=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)}var r,n;return r=t,(n=[{key:"render",value:function(e){var t=document.createElement("h1"),r=document.querySelector("body");t.innerHTML='Hello World! This is "'+e+'" page',r.appendChild(t)}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}(),r=u.p+"de0330f4a5570b2fd32e.jpg";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,o;return t=e,(o=[{key:"render",value:function(){var e=document.createElement("img");e.src=r,e.alt="Mountain",e.classList.add("mountain-image"),document.querySelector("body").appendChild(e)}}])&&n(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var r,n;return r=e,(n=[{key:"render",value:function(){(new t).render("mountain"),(new o).render(),u.e(538).then(u.t.bind(u,538,23)).then((function(e){(new(0,e.default)).render("This is a mountain, It is very very large.")}))}}])&&a(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}())).render()})()})();
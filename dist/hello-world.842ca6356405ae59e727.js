(()=>{"use strict";function e(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}const n=function(){function n(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n)}var r,t;return r=n,(t=[{key:"render",value:function(){var e=document.createElement("button");e.innerHTML="Hello world",e.classList.add("hello-world-button");var n=document.querySelector("body");e.onclick=function(){var e=document.createElement("p");e.innerHTML="Hello world",e.classList.add("hello-world-text"),n.appendChild(e)},n.appendChild(e)}}])&&e(r.prototype,t),Object.defineProperty(r,"prototype",{writable:!1}),n}();function r(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}(new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t;return n=e,(t=[{key:"render",value:function(e){var n=document.createElement("h1"),r=document.querySelector("body");n.innerHTML='Hello World! This is "'+e+'" page',r.appendChild(n)}}])&&r(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),e}())).render("hello world"),(new n).render()})();
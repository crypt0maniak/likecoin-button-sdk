!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n=document.createElement("style");n.innerHTML="\n.likecoin-button {\n  position: relative;\n  width: 100%;\n  max-width: 485px;\n  max-height: 240px;\n  margin: 0 auto;\n}\n.likecoin-button > div {\n  padding-top: 49.48454%;\n}\n.likecoin-button > iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n",document.body.appendChild(n),document.querySelectorAll(".likecoin-embed.likecoin-button").forEach((function(e){var t=e.getAttribute("data-liker-id");if(t){var n=e.getAttribute("data-href");n||(n=window.location.href),n=encodeURIComponent(n);var r="https://button.like.co/in/embed/".concat(t,"/button?referrer=").concat(n),o=e.getAttribute("data-puid");o&&(r="".concat(r,"&puid=").concat(o)),e.textContent="",e.appendChild(document.createElement("div"));var i=document.createElement("iframe");i.setAttribute("src",r),i.setAttribute("frameborder",0),i.setAttribute("scrolling","no"),e.appendChild(i)}else console.error("Cannot get data-liker-id attribute from LikeCoin button element")}))}]);
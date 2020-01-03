var ObjectKeyTransformer=function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,r,t){e.exports=t(/*! ./src/index.ts */1)},
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: multi ./src/index.ts (referenced with single entry) */function(e,r,t){"use strict";t.r(r);const n=e=>null!==e&&"object"==typeof e,o=(e,r,t=!1)=>e.map(e=>n(e)?u(e,r,t):Array.isArray(e)?o(e,r,t):e),u=(e,r,t=!1)=>n(e)?Object.keys(e).reduce((f,c)=>{const a=e[c];return t?Array.isArray(a)?f[r(c)]=o(a,r,t):n(a)?f[r(c)]=u(a,r,t):f[r(c)]=a:f[r(c)]=a,f},{}):e;r.default=u}]);export default ObjectKeyTransformer.default;
//# sourceMappingURL=index.esm.js.map
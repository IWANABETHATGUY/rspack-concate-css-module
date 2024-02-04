(function() {
var __webpack_modules__ = {
"138": (function (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {
"use strict";
/* harmony import */var _render_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.css */"540");
// index.js

console.log(_render_css__WEBPACK_IMPORTED_MODULE_0__);
}),
"540": (function (module) {
"use strict";
module.exports = {
  "foo": "_87a8df973c61579f77d3",
};
}),

}
// The module cache
 var __webpack_module_cache__ = {};
function __webpack_require__(moduleId) {
// Check if module is in cache
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== undefined) {
      return cachedModule.exports;
      }
      // Create a new module (and put it into the cache)
      var module = (__webpack_module_cache__[moduleId] = {
       exports: {}
      });
      // Execute the module function
      __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
// Return the exports of the module
 return module.exports;

}
var __webpack_exports__ = __webpack_require__("138");
})()

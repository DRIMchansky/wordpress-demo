(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&'object'==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,'default',{enumerable:!0,value:a}),2&c&&'string'!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s='./js/scripts.js')})({"./js/hamburger.js":/*!*************************!*\
  !*** ./js/hamburger.js ***!
  \*************************//*! no static exports found */function(module,exports){eval('{\n  var hamburger = document.querySelector(\'#hamburger\');\n  var menu = document.querySelector(\'#menu\');\n  var html = document.querySelector(\'html\');\n\n  var hamburgerToggle = function hamburgerToggle() {\n    hamburger.classList.toggle(\'is-active\');\n    menu.classList.toggle(\'header__line_thin--active\');\n    html.classList.toggle(\'menu-on\');\n  };\n\n  hamburger.addEventListener(\'click\', hamburgerToggle);\n  document.addEventListener(\'keydown\', function (press) {\n    if (press.keyCode === 27) {\n      hamburger.classList.remove(\'is-active\');\n      menu.classList.remove(\'header__line_thin--active\');\n    }\n  });\n}\n\n//# sourceURL=webpack:///./js/hamburger.js?')},"./js/scripts.js":/*!***********************!*\
  !*** ./js/scripts.js ***!
  \***********************//*! no exports provided */function(module,__webpack_exports__,__webpack_require__){'use strict';eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hamburger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hamburger */ "./js/hamburger.js");\n/* harmony import */ var _hamburger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hamburger__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./js/scripts.js?')}});
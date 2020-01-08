webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Icon.js":
/*!****************************!*\
  !*** ./components/Icon.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_BeefIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/BeefIcon */ "./components/BeefIcon.js");
/* harmony import */ var components_ChickenIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/ChickenIcon */ "./components/ChickenIcon.js");
/* harmony import */ var components_FishIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/FishIcon */ "./components/FishIcon.js");
/* harmony import */ var components_PorkIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/PorkIcon */ "./components/PorkIcon.js");
/* harmony import */ var components_VenisonIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/VenisonIcon */ "./components/VenisonIcon.js");
/* harmony import */ var components_CloseIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/CloseIcon */ "./components/CloseIcon.js");


var _jsxFileName = "/Users/iamrane/Private/meatapp/components/Icon.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var icons = {
  beef: components_BeefIcon__WEBPACK_IMPORTED_MODULE_4__["default"],
  chicken: components_ChickenIcon__WEBPACK_IMPORTED_MODULE_5__["default"],
  fish: components_FishIcon__WEBPACK_IMPORTED_MODULE_6__["default"],
  venison: components_VenisonIcon__WEBPACK_IMPORTED_MODULE_8__["default"],
  close: components_CloseIcon__WEBPACK_IMPORTED_MODULE_9__["default"]
};

var Icon = function Icon(props) {
  var type = props.type,
      restProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["type"]);

  var Component = icons[type];
  return Component ? __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, restProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })) : null;
};

Icon.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
Icon.defaultProps = {
  type: ''
};
/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ })

})
//# sourceMappingURL=index.js.3ae4b897e3e0fb99c4e4.hot-update.js.map
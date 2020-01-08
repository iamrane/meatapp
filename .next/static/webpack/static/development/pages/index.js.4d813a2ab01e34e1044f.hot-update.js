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
/* harmony import */ var components_LambIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/LambIcon */ "./components/LambIcon.js");
/* harmony import */ var components_BeefIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/BeefIcon */ "./components/BeefIcon.js");
/* harmony import */ var components_ChickenIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/ChickenIcon */ "./components/ChickenIcon.js");
/* harmony import */ var components_FishIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/FishIcon */ "./components/FishIcon.js");
/* harmony import */ var components_PorkIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/PorkIcon */ "./components/PorkIcon.js");
/* harmony import */ var components_GameIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/GameIcon */ "./components/GameIcon.js");
/* harmony import */ var components_CloseIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/CloseIcon */ "./components/CloseIcon.js");


var _jsxFileName = "/Users/iamrane/Private/meatapp/components/Icon.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









var icons = {
  lamb: components_LambIcon__WEBPACK_IMPORTED_MODULE_4__["default"],
  beef: components_BeefIcon__WEBPACK_IMPORTED_MODULE_5__["default"],
  chicken: components_ChickenIcon__WEBPACK_IMPORTED_MODULE_6__["default"],
  fish: components_FishIcon__WEBPACK_IMPORTED_MODULE_7__["default"],
  game: components_GameIcon__WEBPACK_IMPORTED_MODULE_9__["default"],
  close: components_CloseIcon__WEBPACK_IMPORTED_MODULE_10__["default"]
};

var Icon = function Icon(props) {
  var type = props.type,
      restProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["type"]);

  var Component = icons[type];
  return Component ? __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, restProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
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

/***/ }),

/***/ "./components/LambIcon.js":
/*!********************************!*\
  !*** ./components/LambIcon.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/iamrane/Private/meatapp/components/LambIcon.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function LambIcon(props) {
  return __jsx("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 400 400"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), __jsx("path", {
    fillRule: "evenodd",
    d: "M158.875 15.558c-16.812 18.609-22.005 32-14.303 36.88 9.427 5.974 14.313 3.912 19.308-8.149 5.393-13.019 18.864-26.878 22.546-23.196 1.307 1.307-3.521 9.716-10.729 18.686-12.711 15.817-12.874 16.484-5.402 22.138 10.436 7.895 11.522 7.637 17.886-4.255 3.043-5.685 10.547-13.908 16.676-18.272 13.976-9.952 14.179-20.421.604-31.1-16.414-12.91-30.315-10.742-46.586 7.268M214.821 37c-23.918 34.008-24.168 34.558-18.676 41.175 7.636 9.2 10.543 7.318 27.687-17.927 18.221-26.832 23.051-30.965 29.108-24.908 2.991 2.991-1.834 10.893-16.348 26.774-22.628 24.759-23.4 26.576-14.444 34.009C230.414 102.983 280 53.387 280 38.259 280 4.957 237.929 4.144 214.821 37m58.29 32.636c-36.279 36.855-36.928 38.056-24.694 45.696 7.439 4.646 9.166 4.177 14.86-4.038 26.292-37.929 54.062-58.942 64.914-49.121 7.26 6.57 6.716 7.345-15.332 21.862-42.45 27.95-52.038 38.154-43.784 46.594 4.964 5.077 8.658 6.062 12.382 3.303C312.924 110.614 339.64 91.037 347 85.904c12.691-8.852 11.182-22.22-4.19-37.119-21.801-21.13-31.117-18.343-69.699 20.851m-156.142-3.869C56.091 93.202.252 191.728 17.272 241.681c34.834 102.23 129.781 166.599 228.961 155.223 83.583-9.587 96.196-32.719 63.656-116.744-11.879-30.672-15.212-45.657-17.6-79.117-3.608-50.55-5.452-52.891-81.618-103.625-55.4-36.903-70.631-42.047-93.702-31.651m62.507 36.281c18.988 12.126 38.76 25.324 43.937 29.328l9.413 7.281-22.271 10.896c-48.776 23.864-99.315 106.205-100.201 163.254L110 335.613l-13.389-12.806C20.805 250.3 17.852 192.358 86.12 116.92c38.664-42.725 47.531-44.138 93.356-14.872m83.035 63.759c7.037 4.929 8.639 11.429 10.593 43 1.843 29.762 5.653 46.554 19.071 84.043 23.659 66.105 19.752 74.124-40.681 83.5-83.825 13.006-134.303-20.756-119.554-79.965 20.246-81.279 94.68-155.717 130.571-130.578m-58.458 53.524c-12.244 12.245-22.63 40.185-18.722 50.369 4.41 11.49 13.493 6.534 20.197-11.02 3.638-9.525 11.982-22.462 18.543-28.748 6.561-6.286 11.929-13.792 11.929-16.68 0-9.528-20.18-5.687-31.947 6.079M255.939 295c-.076 33.397-1.808 36.154-28.35 45.139-34.451 11.663-30.295 16.915 12.088 15.277 48.402-1.871 54.386-14.881 31.471-68.416-11.118-25.973-15.137-23.859-15.209 8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LambIcon);

/***/ })

})
//# sourceMappingURL=index.js.4d813a2ab01e34e1044f.hot-update.js.map
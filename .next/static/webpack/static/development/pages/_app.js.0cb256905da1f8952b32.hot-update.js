webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/SearchForm.js":
/*!**********************************!*\
  !*** ./components/SearchForm.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Icon */ "./components/Icon.js");

var _jsxFileName = "/Users/iamrane/Private/meatapp/components/SearchForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var SearchForm = function SearchForm(props) {
  var _useField = Object(formik__WEBPACK_IMPORTED_MODULE_3__["useField"])('searchString'),
      _useField2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useField, 3),
      field = _useField2[0],
      meta = _useField2[1],
      helpers = _useField2[2];

  var value = meta.value;
  var setValue = helpers.setValue;
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
    name: "searchString",
    className: "shadow appearance-none border rounded-lg w-full py-3 px-4 pr-6 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-lg",
    placeholder: "Search for meat!",
    onChange: function onChange(event) {
      console.log(event);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["AnimatePresence"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, value && __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    onClick: function onClick() {
      return setValue('');
    },
    className: "cursor-pointer absolute inset-y-0 right-0 flex items-center px-4 text-gray-700",
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(components_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "close",
    className: "fill-current w-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })))));
};

SearchForm.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (SearchForm);

/***/ })

})
//# sourceMappingURL=_app.js.0cb256905da1f8952b32.hot-update.js.map
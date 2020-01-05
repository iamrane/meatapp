webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Gauge.js":
/*!*****************************!*\
  !*** ./components/Gauge.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "/Users/iamrane/Private/meatapp/components/Gauge.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



var Gauge = function Gauge(props) {
  var strokeWidth = props.strokeWidth,
      trailWidth = props.trailWidth,
      strokeColor = props.strokeColor,
      trailColor = props.trailColor,
      strokeLinecap = props.strokeLinecap,
      percent = props.percent,
      style = props.style,
      className = props.className,
      restProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["strokeWidth", "trailWidth", "strokeColor", "trailColor", "strokeLinecap", "percent", "style", "className"]);

  var radius = 50 - strokeWidth / 2;
  var pathString = "M 50,50 m 0,-".concat(radius, "\n     a ").concat(radius, ",").concat(radius, " 0 1 1 0,").concat(2 * radius, "\n     a ").concat(radius, ",").concat(radius, " 0 1 1 0,-").concat(2 * radius);
  var len = Math.PI * 2 * radius;
  var pathStyle = {
    strokeDasharray: "".concat(len, "px ").concat(len, "px"),
    strokeDashoffset: "".concat((1 - percent) * len, "px")
  };
  return __jsx("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: className,
    viewBox: "0 0 100 100",
    style: style
  }, restProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx("path", {
    d: pathString,
    stroke: trailColor,
    strokeWidth: trailWidth || strokeWidth,
    fillOpacity: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx("path", {
    d: pathString,
    strokeLinecap: strokeLinecap,
    stroke: strokeColor,
    strokeWidth: strokeWidth,
    fillOpacity: "0",
    style: pathStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }));
};

Gauge.defaultProps = {
  strokeWidth: 10,
  strokeColor: 'rgba(0, 0, 0, 0.10)',
  trailWidth: 10,
  trailColor: 'rgba(0, 0, 0, 0.10)',
  strokeLinecap: 'square'
};
Gauge.propTypes = {
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),
  strokeColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  trailWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),
  trailColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  strokeLinecap: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['round', 'square']),
  style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  percent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (Gauge);

/***/ })

})
//# sourceMappingURL=index.js.9701e4d445536baeea26.hot-update.js.map
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/BeefIcon.js":
/*!********************************!*\
  !*** ./components/BeefIcon.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/iamrane/Private/meatapp/components/BeefIcon.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function BeefIcon(props) {
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
    d: "M171.94 5.795c-23.664 12.879-52.025 66.613-72.369 137.109C83.547 198.429 80.58 203.806 44.882 242c-90.934 97.293-38.153 172.463 108.5 154.525 206.559-25.267 314.442-186.762 184.208-275.75-8.549-5.841-15.081-15.804-20.992-32.016C292.251 21.985 219.186-19.918 171.94 5.795M238 28.254c29.544 13.42 54.092 43.381 62.535 76.326 4.629 18.06 7.738 22.024 28.148 35.884 25.845 17.551 41.767 36.334 47.576 56.125C398.55 272.541 252.321 377.422 124 377.518 13.823 377.601-13.239 329.509 57.872 260c27.668-27.046 43.407-51.191 52.146-80C156.463 26.896 178.219 1.1 238 28.254m-56.564 13.431C163.73 49.524 146.882 86.582 134.011 146c-13.388 61.805-22.615 80.257-61.996 123.983-52.896 58.733-49.358 72.931 20.637 82.83C211.269 369.588 364.187 291.323 363.873 214c-.098-24.19-24.889-60.141-52.749-76.495-3.284-1.928-9.028-12.812-12.764-24.187-16.647-50.692-78.555-88.619-116.924-71.633m57.874 29.058c19.157 11.02 39.136 38.906 43.131 60.199 1.925 10.262 7.555 17.235 23.317 28.879 46.388 34.269 49.257 65.019 9.7 103.957-50.996 50.198-152.57 80.853-226.553 68.375-37.916-6.396-37.913-6.354-3.081-44.923 39.337-43.555 51.42-67.12 66.099-128.904 24.298-102.276 37.991-116 87.387-87.583m-39.231 18.395c-13.972 7.069-20.734 22.001-18.488 40.821 3.615 30.29 32.942 40.124 54.717 18.349 28.7-28.701-.9-77.046-36.229-59.17m24.418 24.356c7.82 17.163-7.432 33.971-19.697 21.706-6.643-6.643-6-17.428 1.486-24.914 8.675-8.676 13.156-7.887 18.211 3.208m-.497 98.25c-50.889 19.155-62.229 24.853-63.278 31.796-1.976 13.074 10.152 10.736 79.278-15.284 50.889-19.155 62.229-24.853 63.278-31.796 1.976-13.074-10.152-10.736-79.278 15.284m-12 46.026c-65.097 24.396-78.211 30.637-79.278 37.731-1.986 13.203 7.741 11.12 89.514-19.167 78.751-29.167 84.263-32.051 80.421-42.065-3.459-9.014-4.859-8.651-90.657 23.501",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BeefIcon);

/***/ }),

/***/ "./components/ChickenIcon.js":
/*!***********************************!*\
  !*** ./components/ChickenIcon.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/iamrane/Private/meatapp/components/ChickenIcon.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function ChickenIcon(props) {
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
    d: "M266 48.78c-10.752 6.097-13.866 11.308-13.939 23.33-.167 27.579-24.942 39.821-89.697 44.321C61.221 123.459 8.222 180.171 8.047 281.559c-.053 31.125.213 31.494 36.273 50.256 141.585 73.668 344.415-13.071 278.806-119.229l-8.519-13.784 9.14-7.401c6.366-5.155 15.681-7.401 30.696-7.401 33.289 0 47.154-18.633 30.107-40.461-4.097-5.246-8.751-13.692-10.342-18.768-6.359-20.29-37.851-20.8-48.203-.781-9.645 18.651-48.163 32.698-55.796 20.349-4.268-6.906 17.367-27.369 31.799-30.077 28.154-5.281 33.944-37.467 8.899-49.471-5.999-2.875-10.907-6.64-10.907-8.367 0-8.785-22.907-13.935-34-7.644m33.434 33.04c10.721 3.403 4.707 14.18-7.912 14.18-8.815 0-38.152 25.382-41.489 35.895-2.008 6.328-4.103 6.721-16.13 3.03l-13.823-4.243 15.125-6.772C254.534 115.256 272 94.584 272 80.36c0-14.997 4.617-18.471 12.164-9.15 3.456 4.267 10.327 9.041 15.27 10.61M356 140.095c0 4.193 3.65 9.577 8.112 11.965 12.82 6.861 5.27 11.94-17.748 11.94-23.244 0-39.24 9.117-66.364 37.824-49.079 51.942-88.831 61.496-132.083 31.744-30.702-21.119-45.427-10.258-18.338 13.526 42.304 37.143 98.128 31.691 147.399-14.396l19.841-18.559 7.463 9.216c25.074 30.965 2.886 74.697-50.282 99.105-56.626 25.996-151.986 19.955-209.497-13.271l-17.496-10.108 1.994-28.541c7.71-110.345 82.225-154.337 198.325-117.084 63.849 20.487 101.558 15.76 115.93-14.534 5.65-11.911 12.744-11.258 12.744 1.173",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChickenIcon);

/***/ }),

/***/ "./components/CloseIcon.js":
/*!*********************************!*\
  !*** ./components/CloseIcon.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/iamrane/Private/meatapp/components/CloseIcon.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function CloseIcon(props) {
  return __jsx("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), __jsx("path", {
    d: "M18 6L6 18M6 6l12 12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CloseIcon);

/***/ }),

/***/ "./components/FishIcon.js":
/*!********************************!*\
  !*** ./components/FishIcon.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/iamrane/Private/meatapp/components/FishIcon.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function FishIcon(props) {
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
    d: "M219.709 48.255c-39.396 5.797-112.565 37.782-117.833 51.51-1.224 3.189 1.454 10.774 5.95 16.855 11.31 15.297 10.657 17.164-10.283 29.436l-18.457 10.817-16.543-12.447c-56.099-42.21-75.73-30.284-56.537 34.346 5.341 17.985 5.341 21.814 0 34.597-23.74 56.818 4.388 75.834 51.657 34.923 10.417-9.016 20.322-15.538 22.011-14.493 7.596 4.694 46.505 31.122 48.066 32.648.957.935-5.134 8.74-13.536 17.344-18.989 19.446-17.326 23.835 13.484 35.589l24.588 9.38 24.862-16.092c24.598-15.922 25.095-16.049 46.862-11.982 84.792 15.844 195.883-65.087 168.106-122.467-14.344-29.632-61.179-66.584-100.837-79.559-3.702-1.211-13.391-12.655-21.531-25.431-13.862-21.754-20.986-29.693-25.738-28.68-1.1.235-12.031 1.902-24.291 3.706m29.481 31.451l6.915 11.705-23.053 2.679c-12.678 1.474-38.921 8.028-58.316 14.565-33.91 11.431-46.736 11.318-46.736-.408 0-8.742 79.41-39.953 102.138-40.145 9.234-.078 13.791 2.698 19.052 11.604m26.97 36.702l20.555 4.408-10.122 10.592c-33.357 34.907-35.057 91.917-3.829 128.401l13.48 15.748-15.122 4.199C231.33 293.583 98.4 241.855 75.956 199.917c-12.055-22.524 107.312-82.914 172.847-87.447 3.742-.258 16.053 1.514 27.357 3.938m78.253 46.272c31.192 31.192 26.94 53.595-16.463 86.736-48.131 36.75-80.389-56.847-35.517-103.05l14.107-14.526 12.213 8.696c6.717 4.783 18.264 14.748 25.66 22.144M32.24 149.127c28.639 22.362 28.063 21.555 23.651 33.159-2.935 7.72-2.938 14.692-.011 23.09 4.716 13.528-3.709 26.093-24.88 37.107-13.239 6.887-13.633 4.572-4.27-25.131 6.308-20.01 6.308-22.694 0-42.704-9.77-30.996-8.577-36.521 5.51-25.521M312.8 184.8c-6.17 6.17-6.17 20.23 0 26.4 10.63 10.63 31.2 2.906 31.2-11.714 0-15.294-20.801-25.085-31.2-14.686M172 288.417c0 9.585-25.902 18.052-35.895 11.732-11.691-7.393 9.9-24.207 24.169-18.821 6.449 2.434 11.726 5.624 11.726 7.089",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FishIcon);

/***/ }),

/***/ "./components/GameIcon.js":
/*!********************************!*\
  !*** ./components/GameIcon.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/iamrane/Private/meatapp/components/GameIcon.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function GameIcon(props) {
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
    d: "M1.099 21.49c5.43 52.611 39.201 88.05 103.262 108.361 23.166 7.345 26.978 9.718 22.103 13.764-4.687 3.89-8.384 3.598-18.108-1.431-29.619-15.316-80.302-9.258-86.523 10.343C16.42 169.58 60.536 216 82.155 216c7.024 0 9.507 2.944 11.517 13.658 1.409 7.513 11.329 32.263 22.044 55 10.714 22.738 23.465 54.484 28.334 70.546C155.057 391.515 163.314 398 198.531 398c34.851 0 42.972-7.082 57.342-50 6.261-18.7 18.799-49.3 27.863-68 9.064-18.7 17.561-40.75 18.883-49 1.81-11.296 4.302-15 10.091-15 19.106 0 56.342-32.863 61.778-54.522 6.432-25.627-50.613-38.03-87.405-19.004-10.598 5.48-12.794 5.529-17.927.396-5.133-5.133-3.969-6.193 9.497-8.652 63.524-11.602 113.908-61.965 118.263-118.216 2.052-26.5-15.149-21.781-20.859 5.723-5.832 28.091-25.165 56.553-47.014 69.212l-16.957 9.824 5.873-16.644C330.06 49.818 330.611 16 319.069 16c-9.345 0-10.229 1.721-12.838 25-6.852 61.124-36.404 87.746-86.422 77.857-15.067-2.979-27.324-2.932-42.073.161-51.518 10.807-79.382-15.207-88.072-82.225-2.413-18.615-3.783-21.06-11.207-20-11.729 1.674-9.689 43.757 3.716 76.672 2.753 6.761 2.133 7-6.566 2.533C46.673 81.142 27.498 52.712 18.279 11 13.131-12.291-1.468-3.377 1.099 21.49m221.353 119.041c28.31 7.129 52.993 37.123 59.62 72.447 2.339 12.466-.501 21.584-19.394 62.263-12.174 26.212-25.041 57.655-28.593 69.874-15.083 51.883-55.315 48.001-73.726-7.115-5.88-17.6-19.304-50.411-29.833-72.914l-19.144-40.914 6.253-21.508c14.404-49.547 56.262-74.359 104.817-62.133m-128.588 18.21c16.016 7.637 16.483 9.118 8.033 25.458-9.151 17.695-35.413 10.398-51.625-14.346-10.956-16.719 16.928-23.827 43.592-11.112m251.628-1.607c11.96 8.745-18.451 38.866-39.24 38.866-5.309 0-20.521-27.065-17.122-30.464 11.092-11.091 45.641-16.242 56.362-8.402m-215.858 60.377c-6.953 18.118 16.158 38.412 29.055 25.514 11.007-11.007 2.97-28.656-13.789-30.28-8.72-.846-13.71.712-15.266 4.766m108.018 4.458c-11.834 18.062 2.317 32.213 20.379 20.379 6.93-4.541 9.969-10.162 9.969-18.44 0-16.1-20.222-17.392-30.348-1.939M172 333.74c0 25.049 36.754 39.274 47.859 18.523C230.276 332.798 225.953 328 198 328c-19.92 0-26 1.342-26 5.74",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (GameIcon);

/***/ }),

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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "/Users/iamrane/Private/meatapp/components/Gauge.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



const Gauge = props => {
  const {
    strokeWidth,
    trailWidth,
    strokeColor,
    trailColor,
    strokeLinecap,
    percent,
    style,
    className
  } = props,
        restProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["strokeWidth", "trailWidth", "strokeColor", "trailColor", "strokeLinecap", "percent", "style", "className"]);

  const radius = 50 - strokeWidth / 2;
  const pathString = `M 50,50 m 0,-${radius}
     a ${radius},${radius} 0 1 1 0,${2 * radius}
     a ${radius},${radius} 0 1 1 0,-${2 * radius}`;
  const len = Math.PI * 2 * radius;
  const pathStyle = {
    strokeDasharray: `${len}px ${len}px`,
    strokeDashoffset: `${(1 - percent) * len}px`
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
    __self: undefined
  }), __jsx("path", {
    d: pathString,
    stroke: trailColor,
    strokeWidth: trailWidth || strokeWidth,
    fillOpacity: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
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
    __self: undefined
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

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Logo */ "./components/Logo.js");
var _jsxFileName = "/Users/iamrane/Private/meatapp/components/Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Header = props => {
  const [field, meta] = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useField"])('searchString');
  const {
    value: searchString
  } = meta;
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    className: "m-auto max-w-full",
    animate: {
      width: searchString.length < 3 ? 200 : 100
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx(components_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    fill: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }));
};

Header.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
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









const icons = {
  lamb: components_LambIcon__WEBPACK_IMPORTED_MODULE_4__["default"],
  beef: components_BeefIcon__WEBPACK_IMPORTED_MODULE_5__["default"],
  chicken: components_ChickenIcon__WEBPACK_IMPORTED_MODULE_6__["default"],
  fish: components_FishIcon__WEBPACK_IMPORTED_MODULE_7__["default"],
  game: components_GameIcon__WEBPACK_IMPORTED_MODULE_9__["default"],
  close: components_CloseIcon__WEBPACK_IMPORTED_MODULE_10__["default"]
};

const Icon = props => {
  const {
    type
  } = props,
        restProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["type"]);

  const Component = icons[type];
  return Component ? __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, restProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
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

/***/ }),

/***/ "./components/Logo.js":
/*!****************************!*\
  !*** ./components/Logo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/iamrane/Private/meatapp/components/Logo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Logo(props) {
  return __jsx("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 400 398.144"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), __jsx("path", {
    fillRule: "evenodd",
    d: "M60.748.994c-.724 1.172.329 9.007 1.506 11.207.644 1.204.28 1.659-1.716 2.142-1.393.337-4.72 2.051-7.391 3.808-5.79 3.807-7.142 3.937-9.147.878-9.21-14.056-15.22-5.83-6.253 8.558l4.262 6.838-5.078 4.829c-2.794 2.656-5.519 6.082-6.056 7.614-.536 1.531-1.679 4.76-2.539 7.175-1.021 2.87-3.002 5.659-5.717 8.049-2.285 2.011-5.392 5.365-6.905 7.454-1.513 2.088-5.236 5.727-8.274 8.086-8.832 6.858-9.547 12.602-2.508 20.126 5.954 6.365 24.861 8.334 41.552 4.327 4.52-1.085 5.711-1.055 9.281.231 2.253.812 8.895 3.174 14.76 5.249 12.927 4.574 13.176 4.775 15.826 12.749 1.164 3.503 3.726 9.597 5.694 13.543 6.43 12.896 5.899 17.676-3.316 29.836-21.126 27.88-22.901 34.116-12.476 43.835 5.394 5.029 35.507 19.169 46.253 21.719 2.297.545 7.1 2.314 10.673 3.93 8.886 4.02 18.1 4.785 18.091 1.502-.015-5.287-11.615-18.141-18.378-20.364-7.029-2.311-12.347-4.832-16.419-7.785-3.33-2.415-15.357-7.922-17.3-7.922-4.076 0-5.581-3.518-4.903-11.457.989-11.58 1.103-11.745 8.093-11.745 14.222 0 25.987-12.86 19.361-21.165-3.36-4.212-5.377-8.728-6.647-14.885-1.462-7.085-.761-7.969 5.573-7.031 9.243 1.369 9.108 1.438 8.24-4.228-.66-4.31 2.517-3.232 9.327 3.163 7.272 6.831 8.132 7.052 16.383 4.213 12.599-4.335 22.236-5.675 46.792-6.508 18.806-.637 25.286-1.199 31.555-2.734 46.891-11.481 71.799-10.503 97.126 3.814 6.231 3.522 19.916 17.925 22.73 23.923 2.505 5.337 4.911 6.184 5.744 2.023.539-2.696 3.369-4.49 5.25-3.328 1.207.746 1.213 3.901.008 4.646-2.322 1.435-.705 2.45 3.016 1.894l3.945-.588-2.27 1.963c-1.841 1.592-3.239 1.907-7.405 1.667l-5.136-.296-1.265 3.712c-2.163 6.348-.968 17.253 2.969 27.094 5.722 14.302 6.343 16.329 7.059 23.022.382 3.573 1.429 11.21 2.326 16.971l1.63 10.474-2.434 4.693c-1.339 2.581-2.435 5.506-2.435 6.5 0 .994-1.65 3.357-3.667 5.251-8.235 7.733-6.387 9.82 8.96 10.12l11.326.222 1.989-2.521c1.718-2.177 1.907-3.257 1.385-7.896-.548-4.874-.383-5.638 1.766-8.192 2.952-3.509 3.114-8.426.55-16.73-4.885-15.824-5.719-26.747-3.278-42.941 1.91-12.67 1.843-13.45-2.094-24.58l-3.48-9.839v-18.562c0-10.209.611-24.199 1.357-31.09l1.358-12.529 1.129 6.104c1.532 8.278 3.247 36.773 2.529 42.011-.678 4.943.906 18.978 3.445 30.529.981 4.461 1.785 9.264 1.788 10.673.015 7.325 6.602 17.695 9.639 15.174 2.48-2.058 1.738-24.308-1.086-32.566-2.978-8.708-3.86-33.202-2.087-58.004 2.072-28.99-.909-44.926-11.285-60.326-7.951-11.803-8.424-12.159-22.641-17.056-13.834-4.766-18.587-4.991-46.791-2.215-25.312 2.49-65.125 5.67-92.066 7.352-9.457.591-21.77-.295-49.465-3.559-16.962-1.999-39.256-2.6-62.181-1.675-14.435.582-17.654-.771-24.617-10.344-3.332-4.582-6.525-7.655-10.927-10.518-3.421-2.225-7.659-5.544-9.418-7.376-3.407-3.549-4.22-3.915-5.195-2.338m156.714 161.651c-4.514 4.136-9.573 11.273-9.573 13.507 0 1.294.296 1.277 6.141-.351 2.6-.724 3.334 2.852 1.945 9.473-.711 3.391-.723 5.474-.04 6.994.718 1.596.629 3.138-.34 5.876-6.544 18.498-3.136 41.674 6.952 47.271 7.577 4.204 10.783 5.253 17.695 5.786 7.276.561 7.381.605 7.928 3.338 1.579 7.895.321 9.836-7.138 11.015-5.536.875-8.521 3.506-5.321 4.69 1.032.382 1.876 1.136 1.876 1.676 0 .584 1.153.385 2.846-.49 3.97-2.053 7.744-1.481 8.129 1.232.249 1.756.655 2 2.32 1.392 1.11-.405 4.838-.666 8.284-.581 6.752.168 6.443.406 7.413-5.724.345-2.185 3.191-2.309 8.044-.348 2.426.979 3.251 1.015 3.546.153.239-.7 1.367-.928 2.99-.603 1.461.292 2.884.072 3.238-.5.347-.562 1.651-1.022 2.897-1.022 1.797 0 2.265-.479 2.265-2.32 0-1.276.373-2.32.829-2.32 1.539 0 1.816-2.538.545-4.989-1.192-2.298-1.14-2.436.924-2.436 7.415 0 18.929-10.029 21.072-18.354 1.302-5.057 3.641-16.943 3.968-20.161.156-1.531.594-3.963.975-5.404.427-1.613.291-3.022-.353-3.666-.575-.575-1.046-2.499-1.046-4.275 0-3.509-1.294-8.344-3.341-12.484-.714-1.445-1.299-3.391-1.299-4.323 0-.933-1.879-3.63-4.176-5.993-2.297-2.364-4.177-4.646-4.177-5.072 0-1.471-8.317-8.435-10.074-8.435-.97 0-2.283-.626-2.919-1.392-2.87-3.459-12.189 4.792-17.108 15.149l-2.723 5.733h-5.227c-12.061 0-23.002 3.708-30.014 10.171-6.575 6.06-6.922 1.694-1.003-12.605 7.633-18.44-3.794-31.659-16.95-19.608m120.068 46.868c-1.904 3.328-2.664 10.563-1.695 16.131 1.481 8.502 1.328 11.483-.8 15.655-1.021 2.001-1.856 4.474-1.856 5.496 0 1.021-1.671 3.511-3.713 5.533-7.326 7.253-5.336 9.389 8.749 9.389 11.979 0 13.176-.892 12.845-9.571-.178-4.671.128-6.022 1.752-7.751 4.594-4.89-1.05-28.541-7.609-31.887-2.02-1.03-3.672-2.282-3.672-2.782 0-1.06-3.412-1.241-4.001-.213m-163.731 12.422c4.298 10.269 5.4 13.596 6.238 18.84 1.478 9.255.277 12.591-6.401 17.776-12.152 9.438-9.447 13.1 8.731 11.82 8.203-.578 9.723-1.554 9.777-6.279.018-1.562.63-3.883 1.359-5.159.73-1.276 1.342-3.123 1.36-4.104.018-.98.763-2.591 1.657-3.579 2.482-2.744 1.938-9.352-1.571-19.083l-3.065-8.501-3.367-.023c-3.087-.021-9.121-1.112-13.483-2.439-1.254-.381-1.611-.17-1.235.731m85.55 37.481c3.891 5.102 3.027 7.341-2.968 7.686-2.68.154-4.868.154-4.863 0 .028-.788 2.782-9.287 3.259-10.058.953-1.543 1.999-1.001 4.572 2.372m-17.684 40.541c-11.417 11.766-35.633 44.523-35.633 48.203 0 .418-1.824.51-4.053.205-5.733-.786-6.565 1.905-2 6.47 1.225 1.225 1.116 1.986-.958 6.676-7.316 16.542.333 23.207 8.592 7.488 6.028-11.472 4.419-10.425 17.116-11.143l10.809-.612.328 7.854c.386 9.229 2.329 12.903 7.076 13.378 3.17.317 2.897 1.284 4.413-15.619l.543-6.052 3.661.349c4.819.46 5.205-3.085.814-7.476l-2.847-2.847 1.502-7.058c.826-3.882 3.206-13.174 5.289-20.648 4.138-14.845 4.196-17.658.475-23.198-3.785-5.637-6.43-4.932-15.127 4.03m-193.723-3.669c-6.702 8.913-29.426 53.33-33.05 64.601-2.676 8.323-2.325 15.353.898 17.962 2.151 1.742 5.556.338 5.556-2.29 0-1.092 10.867-23.893 11.388-23.893.501 0 7.178 10.775 12.077 19.49 4.55 8.093 7.046 9.349 9.428 4.744 2.891-5.592 1.379-12.569-5.088-23.468-4.513-7.606-4.746-6.338 2.125-11.572 28.735-21.887 42.008-37.693 38.782-46.18-1.438-3.782-2.723-3.061-13.543 7.592-8.147 8.023-23.614 21.366-31.905 27.525-.732.543.238-1.727 2.154-5.045 1.916-3.318 4.722-8.591 6.236-11.718 5.899-12.186 1.739-26.786-5.058-17.748m100.277 11.359c-2.842 4.386-5.316 8.425-5.5 8.975-.183.549-3.344 1.215-7.025 1.478-5.637.403-6.692.741-6.692 2.143 0 1.817 4.128 5.511 6.158 5.511 1.931 0 1.68.751-4.221 12.624-11.467 23.07-12.049 31.703-2.611 38.749 7.038 5.255 21.873-.923 28.651-11.93l1.715-2.784.003 3.108c.02 17.857 24.343 17.615 34.869-.347 3.223-5.5 2.974-12.042-.459-12.042-1.799 0-3.061 1.334-6.269 6.625-7.012 11.564-14.064 16.264-16.169 10.777-2.105-5.489-.016-11.321 11.474-32.019l7.599-13.689h5.726c4.359 0 5.86-.349 6.288-1.465.655-1.708-4.084-6.888-6.302-6.888-1.163 0-1.266-.459-.535-2.38 2.257-5.939.284-14.635-3.208-14.135-1.64.234-6.689 6.908-12.14 16.047-.678 1.138-2.685 1.715-7.241 2.081-7.708.618-8.766 3.869-2.289 7.035l3.451 1.686-4.022 7.594c-2.213 4.177-5.216 10.413-6.674 13.859-2.385 5.634-4.095 7.862-4.095 5.336 0-3.325-4.668-.562-7.448 4.409-8.93 15.963-18.342 20.119-17.426 7.694.445-6.041 2.83-11.517 12.396-28.465l7.004-12.408h5.55c7.911 0 8.996-4.097 1.965-7.425-1.952-.923-2.768-1.86-2.425-2.784 5.116-13.805-2.338-18.95-10.098-6.97m-55.344 3.847c-3.585 4.558-1.93 9.62 3.146 9.62 5.442 0 9.113-7.031 5.537-10.607-2.3-2.3-6.47-1.826-8.683.987m15.599-1.534c-2.481 1.488-3.939 6.005-2.691 8.338 3.65 6.818 14.255.363 10.813-6.581-1.194-2.408-5.488-3.337-8.122-1.757m133.143 14.142c-1.158 4.705-2.588 11.549-3.178 15.208l-1.073 6.652-4.762.589c-2.619.324-6.595.845-8.837 1.158l-4.075.569 3.071-4.534c3.054-4.509 20.541-28.199 20.815-28.199.079 0-.804 3.851-1.961 8.557m43.523-1.442c-5.484 2.209-35.232 59.449-37.663 72.468l-.563 3.016h10.789l6.766-13.793 6.766-13.793 3.244 3.592c7.349 8.134 29.465 8.218 38.51.146 2.225-1.987 1.815.237-1.148 6.214-1.631 3.292-4.018 10.423-5.048 15.082l-.564 2.552h10.758l6.885-13.869c6.63-13.355 6.937-13.793 8.299-11.833 11.652 16.772 50.521 5.325 49.088-14.456-.409-5.642-2.915-5.304-7.273.981-4.59 6.619-7.64 9.68-12.199 12.242-4.101 2.305-4.067 2.092.764-4.666 16.236-22.718 10.212-48.587-9.407-40.39-2.924 1.222-3.219 1.192-3.718-.38-2.501-7.879-8.182-2-20.826 21.551-5.356 9.976-6.112 10.863-6.851 8.037-.802-3.065-3.558-1.758-6.827 3.237-3.919 5.99-7.911 10.014-12.483 12.584l-3.754 2.11 3.765-5.515c16.854-24.692 11.492-50.335-8.715-41.674-2.625 1.126-2.876 1.044-4.394-1.434-1.626-2.652-2.074-2.866-4.201-2.009m-195.018 2.384c-15.299 5.125-27.428 33.797-19.419 45.905 10.536 15.928 32.874 6.307 40.207-17.317.39-1.257 1.697-3.062 2.904-4.012 2.613-2.055 2.774-3.14.571-3.839-1.195-.379-1.667-1.622-1.785-4.711-.438-11.378-11.919-19.563-22.478-16.026m210.563 9.759c-.043 13.732-16.455 40.302-21.029 34.047-4.019-5.497 2.451-21.505 13.2-32.655 5.731-5.945 7.845-6.321 7.829-1.392m59.408.063c0 13.496-16.516 40.171-21.04 33.984-4.045-5.531 2.387-21.515 13.114-32.589 5.843-6.034 7.926-6.4 7.926-1.395m-256.974-.527c.217 2.455-.294 5.833-.994 6.566-.882.922-2.223-5.514-1.419-6.814.796-1.288 2.291-1.134 2.413.248m-6.46 11.956l2.778 2.443-3.383 6.719c-3.769 7.483-10.918 15.773-13.602 15.773-5.968 0-2.671-17.275 5.388-28.232l3.358-4.566 1.342 2.71c.738 1.49 2.592 3.809 4.119 5.153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./components/Pill.js":
/*!****************************!*\
  !*** ./components/Pill.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/iamrane/Private/meatapp/components/Pill.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Pill = ({
  active,
  onClick: handleClick,
  children
}) => {
  let classNames = 'inline-block border border-white rounded hover:border-gray-200 text-teal-500 hover:bg-gray-200 py-1 px-3';

  if (active) {
    classNames = 'inline-block border border-teal-500 rounded py-1 px-3 bg-teal-500 text-white';
  }

  return __jsx("a", {
    onClick: handleClick,
    className: classNames,
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Pill);

/***/ }),

/***/ "./components/PorkIcon.js":
/*!********************************!*\
  !*** ./components/PorkIcon.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/iamrane/Private/meatapp/components/PorkIcon.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function PorkIcon(props) {
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
    d: "M37.352 48.032c-4.757 1.897-9.828 7.167-11.27 11.709-2.95 9.297-6.422 10.319-12.933 3.808C7.231 57.631 0 62.511 0 72.422c0 4.527 4.866 10.743 11.299 14.435 17.885 10.265 26.722 39.442 18.071 59.666-16.814 39.31-1.265 172.517 24.777 212.263 12.122 18.5 37.778 9.989 37.941-12.586.111-15.453 14.381-47.377 20.295-45.406 2.455.819 8.794 12.13 14.086 25.137 12.712 31.247 23.739 42.792 39.405 41.257L178 366l-1.018-29-1.018-29h17.228c17.042 0 17.305.216 24.401 19.947 12.313 34.244 24.898 44.986 44.08 37.625 4.98-1.911 6.327-8.724 6.327-32 0-17.048 1.694-29.572 4-29.572 2.2 0 4 3.532 4 7.85 0 18.746 16.393 52.096 26.905 54.735 19.149 4.806 23.234-2.134 21.844-37.109L323.499 298l19.648-6.951c27.28-9.65 39.444-20.282 42.629-37.263 1.481-7.895 3.591-16.694 4.689-19.554 2.848-7.424-9.341-18.232-20.563-18.232-11.032 0-22.602-28.392-12.899-31.654 21.241-7.14 37.603-43.814 30.807-69.051-5.55-20.612-10.454-22.169-25.156-7.99-22.967 22.151-32.273 22.996-51.179 4.649-61.13-59.325-185.227-66.308-246.489-13.87-13.782 11.797-16.594 12.906-17.732 6.995-.881-4.574 2.853-9.129 10.696-13.052 29.107-14.558 9.67-56.071-20.598-43.995m178.276 38.127c29.058 6.85 67.266 25.89 80.746 40.239l9.07 9.654-8.722 15.519c-11.149 19.836-11.45 32.429-.776 32.429 5.319 0 9.904-4.685 13.865-14.165 4.558-10.907 10.32-16.009 25.054-22.182 10.524-4.41 22.261-9.736 26.081-11.835 9.664-5.312 10.584-4.886 8.303 3.839-2.817 10.772-18.118 24.198-31.726 27.837-11.827 3.163-17.785 15.4-9.877 20.287 2.439 1.507 6.701 10.723 9.472 20.48 3.913 13.78 7.935 19.078 18.022 23.739 34.981 16.164-5.768 44.555-72.664 50.626-33.331 3.025-34.237 3.947-34.73 35.374l-.377 24-9.359-19.539c-5.147-10.747-10.237-22.897-11.31-27-1.727-6.605-6.209-7.461-39.07-7.461-20.977 0-48.4-2.829-63.059-6.505-24.657-6.184-26.202-6.147-31.252.76-7.427 10.157-21.294 48.249-21.441 58.895-.448 32.646-22.979-53.204-28.036-106.828-7.155-75.865 6.515-108.22 56.335-133.344 39.116-19.727 75.058-24.34 115.451-14.819m103.177 128.369c-6.858 6.858-2.73 18.018 6.195 16.75 5.884-.835 9-4.029 9-9.223 0-7.935-9.889-12.833-15.195-7.527M304 316.667c0 19.409-1.605 19.04-7.259-1.667-3.335-12.212-3.041-15 1.581-15 3.995 0 5.678 4.939 5.678 16.667m-148-2.7c0 2.768 1.02 11.108 2.266 18.533 2.6 15.483-2.366 9.81-12.37-14.133-5.377-12.869-5.265-13.453 2.219-11.496 4.337 1.134 7.885 4.327 7.885 7.096",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PorkIcon);

/***/ }),

/***/ "./components/SearchForm.js":
/*!**********************************!*\
  !*** ./components/SearchForm.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Icon */ "./components/Icon.js");
var _jsxFileName = "/Users/iamrane/Private/meatapp/components/SearchForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const SearchForm = props => {
  const [field, meta, helpers] = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useField"])('searchString');
  const {
    value
  } = meta;
  const {
    setValue
  } = helpers;
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("div", {
    className: "relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: "searchString",
    className: "shadow appearance-none border rounded-lg w-full py-3 px-4 pr-6 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-lg",
    placeholder: "Search for meat!",
    onChange: event => {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({
        pathname: '/search',
        query: {
          searchString: event.target.value
        }
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["AnimatePresence"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, value && __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    onClick: () => setValue(''),
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
    __self: undefined
  }, __jsx(components_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "close",
    className: "fill-current w-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  })))));
};

SearchForm.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (SearchForm);

/***/ }),

/***/ "./components/SearchResult.js":
/*!************************************!*\
  !*** ./components/SearchResult.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/uniqBy */ "lodash/uniqBy");
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/isEmpty */ "lodash/isEmpty");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var gql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gql */ "./gql.js");
/* harmony import */ var components_SearchResultItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/SearchResultItem */ "./components/SearchResultItem.js");
var _jsxFileName = "/Users/iamrane/Private/meatapp/components/SearchResult.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const variants = {
  initial: {},
  reveal: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

const SearchResult = props => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const {
    searchString
  } = router.query;
  const {
    0: activeMeatId,
    1: setActiveMeatId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    data,
    loading
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(gql__WEBPACK_IMPORTED_MODULE_7__["getMeatsQuery"]);
  console.log('data', data);
  console.log('searchString', searchString);

  if (searchString.length < 3 || loading) {
    return null;
  }

  const {
    meats = []
  } = data;
  const filterName = meats.filter(meat => meat.meatName.toLowerCase().includes(searchString.toLowerCase()));
  const filterTags = meats.filter(meat => meat.tags.toLowerCase().includes(searchString.toLowerCase()));
  const result = lodash_uniqBy__WEBPACK_IMPORTED_MODULE_5___default()([...filterName, ...filterTags], 'meatName');

  if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default()(result)) {
    return null;
  }

  function handleMeatClick(id) {
    return event => {
      setActiveMeatId(id);
    };
  }

  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    variants: variants,
    initial: "initial",
    animate: "reveal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, result.map(meat => {
    return __jsx(components_SearchResultItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: meat.id,
      meat: meat,
      open: activeMeatId === meat.id,
      onClick: handleMeatClick(meat.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: undefined
    });
  }));
};

SearchResult.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (SearchResult);

/***/ }),

/***/ "./components/SearchResultItem.js":
/*!****************************************!*\
  !*** ./components/SearchResultItem.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Pill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Pill */ "./components/Pill.js");
/* harmony import */ var components_Gauge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Gauge */ "./components/Gauge.js");
/* harmony import */ var components_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Icon */ "./components/Icon.js");

var _jsxFileName = "/Users/iamrane/Private/meatapp/components/SearchResultItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const variants = {
  initial: {
    y: 50,
    opacity: 0
  },
  reveal: {
    y: 0,
    opacity: 1
  }
};
const openProps = {
  initial: {
    height: 0
  },
  animate: {
    height: 'auto'
  },
  exit: {
    height: 0
  }
};

const SearchResultItem = props => {
  const {
    open,
    onClick,
    meat: {
      slug,
      meatName,
      shortDescription,
      fry,
      stew,
      roast,
      grill,
      marbling,
      tenderness,
      tags
    }
  } = props;
  const {
    0: tabIndex,
    1: setTabIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);

  function handleTabClick(index) {
    return event => {
      console.log(event.target);
      event.preventDefault();
      setTabIndex(index);
    };
  }

  function handleTap(event) {
    if (event.target.tagName.toLowerCase() !== 'a') {
      onClick(event);
    }
  }

  if (open) {
    console.log(props);
  }

  const classes = 'cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg my-4';
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    id: slug,
    positionTransition: {
      duration: 0.2,
      type: 'tween'
    },
    onTap: handleTap,
    variants: variants,
    className: "cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl my-4",
    onAnimationComplete: () => {
      if (open) {
        document.getElementById(slug).scrollIntoView({
          behavior: 'smooth'
        });
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx("div", {
    className: "mx-5 my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex items-center font-bold text-xl text-grey-900 mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, tags.split(',').map(tag => __jsx(components_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: tag,
    type: tag.trim(),
    className: "fill-current mr-1 w-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  })), meatName), __jsx("p", {
    className: "text-grey-700 text-base",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, shortDescription)), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, open && __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "overflow-hidden"
  }, openProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }), __jsx("div", {
    className: "mx-5 my-4 overflow-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://placeimg.com/640/480/any",
    className: "max-w-full rounded-lg shadow-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  })), __jsx("div", {
    className: "mx-5 my-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx("div", {
    className: "inline-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, __jsx(components_Pill__WEBPACK_IMPORTED_MODULE_3__["default"], {
    active: tabIndex === 0,
    onClick: handleTabClick(0),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, "Stekpanna")), __jsx("div", {
    className: "inline-block ml-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx(components_Pill__WEBPACK_IMPORTED_MODULE_3__["default"], {
    active: tabIndex === 1,
    onClick: handleTabClick(1),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, "Gryta")), __jsx("div", {
    className: "inline-block ml-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, __jsx(components_Pill__WEBPACK_IMPORTED_MODULE_3__["default"], {
    active: tabIndex === 2,
    onClick: handleTabClick(2),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, "Ugn")), __jsx("div", {
    className: "inline-block ml-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, __jsx(components_Pill__WEBPACK_IMPORTED_MODULE_3__["default"], {
    active: tabIndex === 3,
    onClick: handleTabClick(3),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, "Grill")), tabIndex === 0 && __jsx("p", {
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, fry), tabIndex === 1 && __jsx("p", {
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, stew), tabIndex === 2 && __jsx("p", {
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, roast), tabIndex === 3 && __jsx("p", {
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, grill)), (!!marbling || !!tenderness) && __jsx("div", {
    className: "mx-5 my-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, !!marbling && __jsx("div", {
    className: "inline-block w-24 mr-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, __jsx("div", {
    className: "relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx(components_Gauge__WEBPACK_IMPORTED_MODULE_4__["default"], {
    percent: marbling,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }), __jsx("span", {
    className: "absolute inset-0 flex items-center justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, marbling + '%')), __jsx("div", {
    className: "my-1 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, "Marbling")), !!tenderness && __jsx("div", {
    className: "inline-block w-24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, __jsx("div", {
    className: "relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, __jsx(components_Gauge__WEBPACK_IMPORTED_MODULE_4__["default"], {
    percent: tenderness,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }), __jsx("span", {
    className: "absolute inset-0 flex items-center justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, tenderness + '%')), __jsx("div", {
    className: "my-1 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, "Tenderness"))))), __jsx("div", {
    className: "mx-5 my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }, tags.split(',').map(tag => __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].span, {
    key: tag,
    whileHover: {
      scale: 1.1
    },
    className: "cursor-pointer inline-block hover:bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-teal-700 hover:text-teal-900",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }, tag.trim()))));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchResultItem);

/***/ }),

/***/ "./gql.js":
/*!****************!*\
  !*** ./gql.js ***!
  \****************/
/*! exports provided: getMeatsQuery, getMeatBySlugQuery, updateMeatQuery, createMeatQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMeatsQuery", function() { return getMeatsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMeatBySlugQuery", function() { return getMeatBySlugQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMeatQuery", function() { return updateMeatQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMeatQuery", function() { return createMeatQuery; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const getMeatsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
	query allMeats {
		meats {
			id
			slug
			shortDescription
			meatName
			marbling
			tenderness
			rare
			medium
			wellDone
			stew
			roast
			fry
			grill
			tags
		}
	}
`;
const getMeatBySlugQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
	query Meat($slug: String!) {
		Meat(slug: $slug) {
			id
			slug
			shortDescription
			meatName
			marbling
			tenderness
			rare
			medium
			wellDone
			stew
			roast
			fry
			grill
			tags
		}
	}
`;
const updateMeatQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
	mutation UpdateMeat(
		$id: ID!
		$slug: String!
		$shortDescription: String
		$meatName: String!
		$marbling: Float!
		$tenderness: Float!
		$rare: Int!
		$medium: Int!
		$wellDone: Int!
		$stew: String!
		$roast: String!
		$fry: String!
		$grill: String!
		$tags: String!
	) {
		updateMeat(
			id: $id
			slug: $slug
			shortDescription: $shortDescription
			meatName: $meatName
			marbling: $marbling
			tenderness: $tenderness
			rare: $rare
			medium: $medium
			wellDone: $wellDone
			stew: $stew
			roast: $roast
			fry: $fry
			grill: $grill
			tags: $tags
		) {
			id
			slug
			shortDescription
			meatName
			marbling
			tenderness
			rare
			medium
			wellDone
			stew
			roast
			fry
			grill
			tags
		}
	}
`;
const createMeatQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
	mutation CreateMeat(
		$slug: String!
		$shortDescription: String
		$meatName: String!
		$marbling: Float!
		$tenderness: Float!
		$rare: Int!
		$medium: Int!
		$wellDone: Int!
		$stew: String!
		$roast: String!
		$fry: String!
		$grill: String!
		$tags: String!
	) {
		createMeat(
			slug: $slug
			shortDescription: $shortDescription
			meatName: $meatName
			marbling: $marbling
			tenderness: $tenderness
			rare: $rare
			medium: $medium
			wellDone: $wellDone
			stew: $stew
			roast: $roast
			fry: $fry
			grill: $grill
			tags: $tags
		) {
			id
			slug
			shortDescription
			meatName
			marbling
			tenderness
			rare
			medium
			wellDone
			stew
			roast
			fry
			grill
			tags
		}
	}
`;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Header */ "./components/Header.js");
/* harmony import */ var components_SearchForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/SearchForm */ "./components/SearchForm.js");
/* harmony import */ var components_SearchResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/SearchResult */ "./components/SearchResult.js");





const Index = () => {
  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/iamrane/Private/meatapp/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "lodash/isEmpty":
/*!*********************************!*\
  !*** external "lodash/isEmpty" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ "lodash/uniqBy":
/*!********************************!*\
  !*** external "lodash/uniqBy" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/uniqBy");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
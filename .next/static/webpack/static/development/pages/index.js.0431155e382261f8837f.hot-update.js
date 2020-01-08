webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SearchResult.js":
/*!************************************!*\
  !*** ./components/SearchResult.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/uniqBy */ "./node_modules/lodash/uniqBy.js");
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var gql__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! gql */ "./gql.js");
/* harmony import */ var components_SearchResultItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/SearchResultItem */ "./components/SearchResultItem.js");



var _jsxFileName = "/Users/iamrane/Private/meatapp/components/SearchResult.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;









var variants = {
  initial: {},
  reveal: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

var SearchResult = function SearchResult(props) {
  var _useField = Object(formik__WEBPACK_IMPORTED_MODULE_6__["useField"])('searchString'),
      _useField2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useField, 2),
      field = _useField2[0],
      meta = _useField2[1];

  var meatName = meta.value;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["useQuery"])(gql__WEBPACK_IMPORTED_MODULE_10__["getMeatsQuery"]),
      data = _useQuery.data,
      loading = _useQuery.loading;

  if (meatName.length < 3 || loading) {
    return null;
  }

  var _data$allMeats = data.allMeats,
      allMeats = _data$allMeats === void 0 ? [] : _data$allMeats;
  var filterName = data.allMeats.filter(function (meat) {
    return meat.meatName.toLowerCase().includes(meatName.toLowerCase());
  });
  var filterTags = data.allMeats.filter(function (meat) {
    return meat.tags.toLowerCase().includes(meatName.toLowerCase());
  });
  var result = lodash_uniqBy__WEBPACK_IMPORTED_MODULE_8___default()([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(filterName), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(filterTags)), 'meatName');

  if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(result)) {
    return null;
  }

  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__["motion"].div, {
    variants: variants,
    initial: "initial",
    animate: "reveal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, result.map(function (meat) {
    return __jsx(components_SearchResultItem__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: meat.id
    }, meat, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }));
  }));
};

SearchResult.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (SearchResult);

/***/ })

})
//# sourceMappingURL=index.js.0431155e382261f8837f.hot-update.js.map
webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SearchResult.js":
/*!************************************!*\
  !*** ./components/SearchResult.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/uniqBy */ "./node_modules/lodash/uniqBy.js");
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var gql__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gql */ "./gql.js");
/* harmony import */ var components_SearchResultItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/SearchResultItem */ "./components/SearchResultItem.js");


var _jsxFileName = "/Users/iamrane/Private/meatapp/components/SearchResult.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









var variants = {
  initial: {},
  reveal: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

var SearchResult = function SearchResult(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      activeMeatId = _useState[0],
      setActiveMeatId = _useState[1];

  var _useField = Object(formik__WEBPACK_IMPORTED_MODULE_5__["useField"])('searchString'),
      _useField2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useField, 2),
      field = _useField2[0],
      meta = _useField2[1];

  var meatName = meta.value;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(gql__WEBPACK_IMPORTED_MODULE_9__["getMeatsQuery"]),
      data = _useQuery.data,
      loading = _useQuery.loading;

  console.log('data', data);

  if (meatName.length < 3 || loading) {
    return null;
  }

  var _data$meats = data.meats,
      meats = _data$meats === void 0 ? [] : _data$meats;
  var filterName = meats.filter(function (meat) {
    return meat.meatName.toLowerCase().includes(meatName.toLowerCase());
  });
  var filterTags = meats.filter(function (meat) {
    return meat.tags.toLowerCase().includes(meatName.toLowerCase());
  });
  var result = lodash_uniqBy__WEBPACK_IMPORTED_MODULE_7___default()([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(filterName), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(filterTags)), 'meatName');

  if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default()(result)) {
    return null;
  }

  function handleClick(id) {
    return function (event) {
      setActiveMeatId(id);
    };
  }

  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__["motion"].div, {
    variants: variants,
    initial: "initial",
    animate: "reveal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, result.map(function (meat) {
    return __jsx(components_SearchResultItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
      open: activeMeatId === meat.id,
      key: meat.id,
      meat: meat,
      onClick: handleClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    });
  }));
};

SearchResult.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (SearchResult);

/***/ })

})
//# sourceMappingURL=index.js.0c6259ed61524fc1369e.hot-update.js.map
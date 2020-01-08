webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tmutation CreateMeat(\n\t\t$slug: String!\n\t\t$shortDescription: String\n\t\t$meatName: String!\n\t\t$marbling: Float!\n\t\t$tenderness: Float!\n\t\t$rare: Int!\n\t\t$medium: Int!\n\t\t$wellDone: Int!\n\t\t$stew: String!\n\t\t$roast: String!\n\t\t$fry: String!\n\t\t$grill: String!\n\t\t$tags: String!\n\t) {\n\t\tcreateMeat(\n\t\t\tslug: $slug\n\t\t\tshortDescription: $shortDescription\n\t\t\tmeatName: $meatName\n\t\t\tmarbling: $marbling\n\t\t\ttenderness: $tenderness\n\t\t\trare: $rare\n\t\t\tmedium: $medium\n\t\t\twellDone: $wellDone\n\t\t\tstew: $stew\n\t\t\troast: $roast\n\t\t\tfry: $fry\n\t\t\tgrill: $grill\n\t\t\ttags: $tags\n\t\t) {\n\t\t\tid\n\t\t\tslug\n\t\t\tshortDescription\n\t\t\tmeatName\n\t\t\tmarbling\n\t\t\ttenderness\n\t\t\trare\n\t\t\tmedium\n\t\t\twellDone\n\t\t\tstew\n\t\t\troast\n\t\t\tfry\n\t\t\tgrill\n\t\t\ttags\n\t\t}\n\t}\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tmutation UpdateMeat(\n\t\t$id: ID!\n\t\t$slug: String!\n\t\t$shortDescription: String\n\t\t$meatName: String!\n\t\t$marbling: Float!\n\t\t$tenderness: Float!\n\t\t$rare: Int!\n\t\t$medium: Int!\n\t\t$wellDone: Int!\n\t\t$stew: String!\n\t\t$roast: String!\n\t\t$fry: String!\n\t\t$grill: String!\n\t\t$tags: String!\n\t) {\n\t\tupdateMeat(\n\t\t\tid: $id\n\t\t\tslug: $slug\n\t\t\tshortDescription: $shortDescription\n\t\t\tmeatName: $meatName\n\t\t\tmarbling: $marbling\n\t\t\ttenderness: $tenderness\n\t\t\trare: $rare\n\t\t\tmedium: $medium\n\t\t\twellDone: $wellDone\n\t\t\tstew: $stew\n\t\t\troast: $roast\n\t\t\tfry: $fry\n\t\t\tgrill: $grill\n\t\t\ttags: $tags\n\t\t) {\n\t\t\tid\n\t\t\tslug\n\t\t\tshortDescription\n\t\t\tmeatName\n\t\t\tmarbling\n\t\t\ttenderness\n\t\t\trare\n\t\t\tmedium\n\t\t\twellDone\n\t\t\tstew\n\t\t\troast\n\t\t\tfry\n\t\t\tgrill\n\t\t\ttags\n\t\t}\n\t}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tquery Meat($slug: String!) {\n\t\tMeat(slug: $slug) {\n\t\t\tid\n\t\t\tslug\n\t\t\tshortDescription\n\t\t\tmeatName\n\t\t\tmarbling\n\t\t\ttenderness\n\t\t\trare\n\t\t\tmedium\n\t\t\twellDone\n\t\t\tstew\n\t\t\troast\n\t\t\tfry\n\t\t\tgrill\n\t\t\ttags\n\t\t}\n\t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tquery allMeats {\n\t\tmeats {\n\t\t\tid\n\t\t\tslug\n\t\t\tshortDescription\n\t\t\tmeatName\n\t\t\tmarbling\n\t\t\ttenderness\n\t\t\trare\n\t\t\tmedium\n\t\t\twellDone\n\t\t\tstew\n\t\t\troast\n\t\t\tfry\n\t\t\tgrill\n\t\t\ttags\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var getMeatsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());
var getMeatBySlugQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject2());
var updateMeatQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject3());
var createMeatQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject4());

/***/ })

})
//# sourceMappingURL=index.js.cfb411262519b7aa197a.hot-update.js.map
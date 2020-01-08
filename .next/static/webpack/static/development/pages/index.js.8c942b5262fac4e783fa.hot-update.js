webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SearchResultItem.js":
/*!****************************************!*\
  !*** ./components/SearchResultItem.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var components_Pill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Pill */ "./components/Pill.js");
/* harmony import */ var components_Gauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Gauge */ "./components/Gauge.js");
var _jsxFileName = "/Users/iamrane/Private/meatapp/components/SearchResultItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var variants = {
  initial: {
    y: 50,
    opacity: 0
  },
  reveal: {
    y: 0,
    opacity: 1
  }
};
var openProps = {
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

var SearchResultItem = function SearchResultItem(props) {
  var slug = props.slug,
      meatName = props.meatName,
      shortDescription = props.shortDescription,
      fry = props.fry,
      stew = props.stew,
      oven = props.oven,
      grill = props.grill,
      marbling = props.marbling,
      tenderness = props.tenderness;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      tabIndex = _useState2[0],
      setTabIndex = _useState2[1];

  function handleTabClick(index) {
    return function (event) {
      console.log(event.target);
      event.preventDefault();
      setTabIndex(index);
    };
  }

  function handleTap(event) {
    if (event.target.tagName.toLowerCase() !== 'a') {
      setOpen(!open);
    }
  }

  if (open) {
    console.log(props);
  }

  var classes = 'cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg my-4';
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    id: slug,
    positionTransition: {
      duration: 0.2,
      type: 'tween'
    },
    onTap: handleTap,
    whileHover: {
      x: 2,
      y: -2
    },
    variants: variants,
    className: "cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl my-4",
    onAnimationComplete: function onAnimationComplete() {
      if (open) {
        document.getElementById(slug).scrollIntoView({
          behavior: 'smooth'
        });
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, open && __jsx("div", {
    className: "mx-5 my-4 overflow-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("img", {
    src: "https://placeimg.com/640/480/any",
    className: "max-w-full rounded-lg shadow-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })), __jsx("div", {
    className: "mx-5 my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("div", {
    className: "font-bold text-xl text-grey-900 mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, " ", meatName), __jsx("p", {
    className: "text-grey-700 text-base",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, shortDescription)), open && __jsx("div", {
    className: "mx-5 my-6 overflow-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("div", {
    className: "inline-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(components_Pill__WEBPACK_IMPORTED_MODULE_2__["default"], {
    active: tabIndex === 0,
    onClick: handleTabClick(0),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Stekpanna")), __jsx("div", {
    className: "inline-block ml-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(components_Pill__WEBPACK_IMPORTED_MODULE_2__["default"], {
    active: tabIndex === 1,
    onClick: handleTabClick(1),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Gryta")), __jsx("div", {
    className: "inline-block ml-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(components_Pill__WEBPACK_IMPORTED_MODULE_2__["default"], {
    active: tabIndex === 2,
    onClick: handleTabClick(2),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Ugn")), __jsx("div", {
    className: "inline-block ml-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(components_Pill__WEBPACK_IMPORTED_MODULE_2__["default"], {
    active: tabIndex === 3,
    onClick: handleTabClick(3),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Grill")), tabIndex === 0 && __jsx("p", {
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, fry), tabIndex === 1 && __jsx("p", {
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, stew), tabIndex === 2 && __jsx("p", {
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, oven), tabIndex === 3 && __jsx("p", {
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, grill)), open && (!!marbling || !!tenderness) && __jsx("div", {
    className: "mx-5 my-6 overflow-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, !!marbling && __jsx("div", {
    className: "inline-block w-24 mr-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("div", {
    className: "relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx(components_Gauge__WEBPACK_IMPORTED_MODULE_3__["default"], {
    percent: marbling,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), __jsx("span", {
    className: "absolute inset-0 flex items-center justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, marbling + '%')), __jsx("div", {
    className: "my-1 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Marbling")), !!tenderness && __jsx("div", {
    className: "inline-block w-24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("div", {
    className: "relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx(components_Gauge__WEBPACK_IMPORTED_MODULE_3__["default"], {
    percent: tenderness,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }), __jsx("span", {
    className: "absolute inset-0 flex items-center justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, tenderness + '%')), __jsx("div", {
    className: "my-1 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "Tenderness"))), __jsx("div", {
    className: "mx-5 my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].span, {
    whileHover: {
      scale: 1.1
    },
    className: "cursor-pointer inline-block hover:bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-teal-700 hover:text-teal-900",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "#photography"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].span, {
    whileHover: {
      scale: 1.1
    },
    className: "cursor-pointer inline-block hover:bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-teal-700 hover:text-teal-900",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "#travel"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].span, {
    whileHover: {
      scale: 1.1
    },
    className: "cursor-pointer inline-block hover:bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-teal-700 hover:text-teal-900",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "#winter")));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchResultItem);

/***/ })

})
//# sourceMappingURL=index.js.8c942b5262fac4e783fa.hot-update.js.map
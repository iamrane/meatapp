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
/* harmony import */ var components_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Icon */ "./components/Icon.js");
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
  var open = props.open,
      onClick = props.onClick,
      _props$meat = props.meat,
      slug = _props$meat.slug,
      meatName = _props$meat.meatName,
      shortDescription = _props$meat.shortDescription,
      fry = _props$meat.fry,
      stew = _props$meat.stew,
      roast = _props$meat.roast,
      grill = _props$meat.grill,
      marbling = _props$meat.marbling,
      tenderness = _props$meat.tenderness,
      tags = _props$meat.tags;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      tabIndex = _useState[0],
      setTabIndex = _useState[1];

  function handleTabClick(index) {
    return function (event) {
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

  var classes = 'cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg my-4';
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    id: slug,
    positionTransition: {
      duration: 0.2,
      type: 'tween'
    },
    onTap: handleTap,
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
      lineNumber: 47
    },
    __self: this
  }, __jsx("div", {
    className: "mx-5 my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-center font-bold text-xl text-grey-900 mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, tags.split(',').map(function (tag) {
    return __jsx(components_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: tag,
      type: tag.trim(),
      className: "fill-current mr-1 w-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    });
  }), meatName), __jsx("p", {
    className: "text-grey-700 text-base",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, shortDescription)), open && __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    className: "mx-5 my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("div", {
    className: "mx-5 my-4 overflow-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("img", {
    src: "https://placeimg.com/640/480/any",
    className: "max-w-full rounded-lg shadow-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })), __jsx("div", {
    className: "mx-5 my-6 overflow-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("div", {
    className: "inline-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(components_Pill__WEBPACK_IMPORTED_MODULE_2__["default"], {
    active: tabIndex === 0,
    onClick: handleTabClick(0),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Stekpanna")), __jsx("div", {
    className: "inline-block ml-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(components_Pill__WEBPACK_IMPORTED_MODULE_2__["default"], {
    active: tabIndex === 1,
    onClick: handleTabClick(1),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Gryta")), __jsx("div", {
    className: "inline-block ml-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx(components_Pill__WEBPACK_IMPORTED_MODULE_2__["default"], {
    active: tabIndex === 2,
    onClick: handleTabClick(2),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Ugn")), __jsx("div", {
    className: "inline-block ml-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx(components_Pill__WEBPACK_IMPORTED_MODULE_2__["default"], {
    active: tabIndex === 3,
    onClick: handleTabClick(3),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Grill")), tabIndex === 0 && __jsx("p", {
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, fry), tabIndex === 1 && __jsx("p", {
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, stew), tabIndex === 2 && __jsx("p", {
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, roast), tabIndex === 3 && __jsx("p", {
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, grill)), (!!marbling || !!tenderness) && __jsx("div", {
    className: "mx-5 my-6 overflow-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, !!marbling && __jsx("div", {
    className: "inline-block w-24 mr-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("div", {
    className: "relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx(components_Gauge__WEBPACK_IMPORTED_MODULE_3__["default"], {
    percent: marbling,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), __jsx("span", {
    className: "absolute inset-0 flex items-center justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, marbling + '%')), __jsx("div", {
    className: "my-1 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "Marbling")), !!tenderness && __jsx("div", {
    className: "inline-block w-24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx("div", {
    className: "relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx(components_Gauge__WEBPACK_IMPORTED_MODULE_3__["default"], {
    percent: tenderness,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }), __jsx("span", {
    className: "absolute inset-0 flex items-center justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, tenderness + '%')), __jsx("div", {
    className: "my-1 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "Tenderness")))), __jsx("div", {
    className: "mx-5 my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, tags.split(',').map(function (tag) {
    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].span, {
      key: tag,
      whileHover: {
        scale: 1.1
      },
      className: "cursor-pointer inline-block hover:bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-teal-700 hover:text-teal-900",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, tag.trim());
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchResultItem);

/***/ })

})
//# sourceMappingURL=index.js.92a06d57d31ceac4974c.hot-update.js.map
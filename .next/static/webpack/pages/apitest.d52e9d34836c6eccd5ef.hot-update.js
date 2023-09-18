webpackHotUpdate_N_E("pages/apitest",{

/***/ "./pages/Weather.jsx":
/*!***************************!*\
  !*** ./pages/Weather.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ \"./pages/data.jsx\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/jarryd/Documents/ActiveUni/Seasonall-NextJS-AnimeJS/pages/Weather.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar weather = function weather() {\n  _s();\n\n  // const [location, setLocation] = useState([]); //useState hook to initialize the state to an empty array\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      newSunrise = _useState[0],\n      setSunrise = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      newSunset = _useState2[0],\n      setSunset = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      newMaxTemp = _useState3[0],\n      setMaxTemp = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      newMinTemp = _useState4[0],\n      setMinTem = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      newRainfall = _useState5[0],\n      setRainfall = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      newSnowfall = _useState6[0],\n      setstoreSnowfall = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      datacheck = _useState7[0],\n      setDataCheck = _useState7[1];\n\n  var getData = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {\n      var travelLocation, travelLat, travelLong, weatherDateStart, weatherDateEnd, weatherQuery, weatherResponse, item, calcMaxTemp, calcMinTemp, calcRainfall, calcSnowfall, calcSunrise, calcSunset, avgMaxTemp, avgMinTemp, avgRainfall, avgSnowfall, avgSunrise, avgSunset, storeMaxTemp, storeMinTemp, storeRainfall, storeSnowfall;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              travelLocation = id;\n              console.log(\"This is travelLocation \" + travelLocation);\n              travelLat = _data__WEBPACK_IMPORTED_MODULE_4__[\"locationDetails\"].locations[travelLocation].lat;\n              travelLong = _data__WEBPACK_IMPORTED_MODULE_4__[\"locationDetails\"].locations[travelLocation][\"long\"];\n              weatherDateStart = _data__WEBPACK_IMPORTED_MODULE_4__[\"locationDetails\"].locations[travelLocation].winterStartDate;\n              weatherDateEnd = _data__WEBPACK_IMPORTED_MODULE_4__[\"locationDetails\"].locations[travelLocation].winterEndDate;\n              _context.next = 8;\n              return fetch(\"https://archive-api.open-meteo.com/v1/era5?latitude=\" + travelLat + \"&longitude=\" + travelLong + \"&start_date=\" + weatherDateStart + \"&end_date=\" + weatherDateEnd + \"&timezone=auto&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,snowfall_sum\");\n\n            case 8:\n              weatherQuery = _context.sent;\n              _context.next = 11;\n              return weatherQuery.json();\n\n            case 11:\n              weatherResponse = _context.sent;\n              console.log(\"This is weather Response\");\n              console.log(weatherResponse);\n              item = weatherResponse.daily;\n              calcMaxTemp = item.temperature_2m_max;\n              calcMinTemp = item.temperature_2m_min;\n              calcRainfall = item.rain_sum;\n              calcSnowfall = item.snowfall_sum;\n              calcSunrise = item.sunrise;\n              calcSunset = item.sunset;\n              avgMaxTemp = calcMaxTemp.reduce(function (a, b) {\n                return a + b;\n              }) / calcMaxTemp.length;\n              avgMinTemp = calcMinTemp.reduce(function (a, b) {\n                return a + b;\n              }) / calcMinTemp.length;\n              avgRainfall = calcRainfall.reduce(function (a, b) {\n                return a + b;\n              }) / calcRainfall.length;\n              avgSnowfall = calcSnowfall.reduce(function (a, b) {\n                return a + b;\n              }) / calcSnowfall.length;\n              avgSunrise = calcSunrise[45].slice(-5);\n              avgSunset = calcSunset[45].slice(-5);\n              storeMaxTemp = avgMaxTemp.toFixed(1);\n              storeMinTemp = avgMinTemp.toFixed(1);\n              storeRainfall = avgRainfall.toFixed(2);\n              storeSnowfall = avgSnowfall.toFixed(2);\n              setSunrise(avgSunrise);\n              setSunset(avgSunset);\n              setMaxTemp(storeMaxTemp);\n              setMinTem(storeMinTemp);\n              setRainfall(storeRainfall);\n              setstoreSnowfall(storeSnowfall);\n              setDataCheck(true);\n\n            case 38:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getData(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"min-w-3/4 mx-auto flex flex-wrap overflow-y-hidden\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"flex flex-row\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            return getData(0);\n          },\n          className: \"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 my-4 mx-4 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded\",\n          children: _data__WEBPACK_IMPORTED_MODULE_4__[\"locationDetails\"].locations[0].city\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            return getData(1);\n          },\n          className: \"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 my-4 mx-4 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded\",\n          children: _data__WEBPACK_IMPORTED_MODULE_4__[\"locationDetails\"].locations[1].city\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            return getData(2);\n          },\n          className: \"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 my-4 mx-4 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded\",\n          children: _data__WEBPACK_IMPORTED_MODULE_4__[\"locationDetails\"].locations[2].city\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"flex flex-row\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            return getData(3);\n          },\n          className: \"basis-1/3 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 my-4 mx-4 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded\",\n          children: _data__WEBPACK_IMPORTED_MODULE_4__[\"locationDetails\"].locations[3].city\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            return getData(4);\n          },\n          className: \"basis-1/3 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 my-4 mx-4 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded\",\n          children: _data__WEBPACK_IMPORTED_MODULE_4__[\"locationDetails\"].locations[4].city\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            return getData(5);\n          },\n          className: \"basis-1/3 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 my-4 mx-4 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded\",\n          children: _data__WEBPACK_IMPORTED_MODULE_4__[\"locationDetails\"].locations[5].city\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"flex flex-row\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            return getData(6);\n          },\n          className: \"basis-1/4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 my-4 mx-4 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded\",\n          children: _data__WEBPACK_IMPORTED_MODULE_4__[\"locationDetails\"].locations[6].city\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            return getData(7);\n          },\n          className: \"basis-1/4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 my-4 mx-4 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded\",\n          children: _data__WEBPACK_IMPORTED_MODULE_4__[\"locationDetails\"].locations[7].city\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            return getData(8);\n          },\n          className: \"basis-1/4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 my-4 mx-4 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded\",\n          children: _data__WEBPACK_IMPORTED_MODULE_4__[\"locationDetails\"].locations[8].city\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 126,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            return getData(9);\n          },\n          className: \"basis-1/4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 my-4 mx-4 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded\",\n          children: _data__WEBPACK_IMPORTED_MODULE_4__[\"locationDetails\"].locations[9].city\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 5\n    }, _this), datacheck ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n        children: \" This shouldnt show until there is data \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 142,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n        children: [\"Sunrise = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n          className: \"font-bold\",\n          children: newSunrise\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 143,\n          columnNumber: 27\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 143,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n        children: [\"Sunset = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n          className: \"font-bold\",\n          children: newSunset\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 144,\n          columnNumber: 26\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 144,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n        children: [\"MaxTemp = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n          className: \"font-bold\",\n          children: newMaxTemp\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 145,\n          columnNumber: 27\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 145,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n        children: [\"MinTemp = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n          className: \"font-bold\",\n          children: newMinTemp\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 146,\n          columnNumber: 27\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 146,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n        children: [\"Rainfall = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n          className: \"font-bold\",\n          children: newRainfall\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 147,\n          columnNumber: 28\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 147,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n        children: [\"Snowfall = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n          className: \"font-bold\",\n          children: newSnowfall\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 148,\n          columnNumber: 28\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 148,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 7\n    }, _this) : '']\n  }, void 0, true);\n};\n\n_s(weather, \"amaLVsa7z12+XiT4sah1VTBPQJY=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (weather);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvV2VhdGhlci5qc3g/ZTg1YiJdLCJuYW1lcyI6WyJ3ZWF0aGVyIiwidXNlU3RhdGUiLCJuZXdTdW5yaXNlIiwic2V0U3VucmlzZSIsIm5ld1N1bnNldCIsInNldFN1bnNldCIsIm5ld01heFRlbXAiLCJzZXRNYXhUZW1wIiwibmV3TWluVGVtcCIsInNldE1pblRlbSIsIm5ld1JhaW5mYWxsIiwic2V0UmFpbmZhbGwiLCJuZXdTbm93ZmFsbCIsInNldHN0b3JlU25vd2ZhbGwiLCJkYXRhY2hlY2siLCJzZXREYXRhQ2hlY2siLCJnZXREYXRhIiwiaWQiLCJ0cmF2ZWxMb2NhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ0cmF2ZWxMYXQiLCJsb2NhdGlvbkRldGFpbHMiLCJsb2NhdGlvbnMiLCJsYXQiLCJ0cmF2ZWxMb25nIiwid2VhdGhlckRhdGVTdGFydCIsIndpbnRlclN0YXJ0RGF0ZSIsIndlYXRoZXJEYXRlRW5kIiwid2ludGVyRW5kRGF0ZSIsImZldGNoIiwid2VhdGhlclF1ZXJ5IiwianNvbiIsIndlYXRoZXJSZXNwb25zZSIsIml0ZW0iLCJkYWlseSIsImNhbGNNYXhUZW1wIiwidGVtcGVyYXR1cmVfMm1fbWF4IiwiY2FsY01pblRlbXAiLCJ0ZW1wZXJhdHVyZV8ybV9taW4iLCJjYWxjUmFpbmZhbGwiLCJyYWluX3N1bSIsImNhbGNTbm93ZmFsbCIsInNub3dmYWxsX3N1bSIsImNhbGNTdW5yaXNlIiwic3VucmlzZSIsImNhbGNTdW5zZXQiLCJzdW5zZXQiLCJhdmdNYXhUZW1wIiwicmVkdWNlIiwiYSIsImIiLCJsZW5ndGgiLCJhdmdNaW5UZW1wIiwiYXZnUmFpbmZhbGwiLCJhdmdTbm93ZmFsbCIsImF2Z1N1bnJpc2UiLCJzbGljZSIsImF2Z1N1bnNldCIsInN0b3JlTWF4VGVtcCIsInRvRml4ZWQiLCJzdG9yZU1pblRlbXAiLCJzdG9yZVJhaW5mYWxsIiwic3RvcmVTbm93ZmFsbCIsImNpdHkiXSwibWFwcGlu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RUo7QUFBQSxrQkFERjtBQWtGRCxDQXBKRDs7R0FBTVosTzs7QUFzSldBLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvV2VhdGhlci5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGxvY2F0aW9uRGV0YWlscyB9IGZyb20gJy4vZGF0YSc7XG5cblxuY29uc3Qgd2VhdGhlciA9ICgpID0+IHtcblxuICAvLyBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKFtdKTsgLy91c2VTdGF0ZSBob29rIHRvIGluaXRpYWxpemUgdGhlIHN0YXRlIHRvIGFuIGVtcHR5IGFycmF5XG4gIGNvbnN0IFtuZXdTdW5yaXNlLCBzZXRTdW5yaXNlXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW25ld1N1bnNldCwgc2V0U3Vuc2V0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW25ld01heFRlbXAsIHNldE1heFRlbXBdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbmV3TWluVGVtcCwgc2V0TWluVGVtXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW25ld1JhaW5mYWxsLCBzZXRSYWluZmFsbF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtuZXdTbm93ZmFsbCwgc2V0c3RvcmVTbm93ZmFsbF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtkYXRhY2hlY2ssIHNldERhdGFDaGVja10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIFxuICBjb25zdCBnZXREYXRhID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgY29uc3QgdHJhdmVsTG9jYXRpb24gPSBpZDtcbiAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgdHJhdmVsTG9jYXRpb24gXCIgKyB0cmF2ZWxMb2NhdGlvbik7XG4gICAgY29uc3QgdHJhdmVsTGF0ID0gbG9jYXRpb25EZXRhaWxzLmxvY2F0aW9uc1t0cmF2ZWxMb2NhdGlvbl0ubGF0O1xuICAgIGNvbnN0IHRyYXZlbExvbmcgPSBsb2NhdGlvbkRldGFpbHMubG9jYXRpb25zW3RyYXZlbExvY2F0aW9uXS5sb25nO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRlU3RhcnQgPSBsb2NhdGlvbkRldGFpbHMubG9jYXRpb25zW3RyYXZlbExvY2F0aW9uXS53aW50ZXJTdGFydERhdGU7XG4gICAgY29uc3Qgd2VhdGhlckRhdGVFbmQgPSBsb2NhdGlvbkRldGFpbHMubG9jYXRpb25zW3RyYXZlbExvY2F0aW9uXS53aW50ZXJFbmREYXRlO1xuXG4gICAgY29uc3Qgd2VhdGhlclF1ZXJ5ID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FyY2hpdmUtYXBpLm9wZW4tbWV0ZW8uY29tL3YxL2VyYTU/bGF0aXR1ZGU9XCIgK1xuICAgIHRyYXZlbExhdCArXG4gICAgXCImbG9uZ2l0dWRlPVwiICtcbiAgICB0cmF2ZWxMb25nICtcbiAgICBcIiZzdGFydF9kYXRlPVwiICtcbiAgICB3ZWF0aGVyRGF0ZVN0YXJ0ICtcbiAgICBcIiZlbmRfZGF0ZT1cIiArXG4gICAgd2VhdGhlckRhdGVFbmQgK1xuICAgIFwiJnRpbWV6b25lPWF1dG8mZGFpbHk9dGVtcGVyYXR1cmVfMm1fbWF4LHRlbXBlcmF0dXJlXzJtX21pbixzdW5yaXNlLHN1bnNldCxwcmVjaXBpdGF0aW9uX3N1bSxyYWluX3N1bSxzbm93ZmFsbF9zdW1cIlxuICAgICk7XG4gICAgY29uc3Qgd2VhdGhlclJlc3BvbnNlID0gYXdhaXQgd2VhdGhlclF1ZXJ5Lmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgd2VhdGhlciBSZXNwb25zZVwiKTtcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyUmVzcG9uc2UpO1xuXG4gICAgdmFyIGl0ZW0gPSB3ZWF0aGVyUmVzcG9uc2UuZGFpbHk7XG4gICAgICAgIFxuICAgIHZhciBjYWxjTWF4VGVtcCA9IGl0ZW0udGVtcGVyYXR1cmVfMm1fbWF4O1xuICAgIHZhciBjYWxjTWluVGVtcCA9IGl0ZW0udGVtcGVyYXR1cmVfMm1fbWluO1xuICAgIHZhciBjYWxjUmFpbmZhbGwgPSBpdGVtLnJhaW5fc3VtO1xuICAgIHZhciBjYWxjU25vd2ZhbGwgPSBpdGVtLnNub3dmYWxsX3N1bTtcbiAgICB2YXIgY2FsY1N1bnJpc2UgPSBpdGVtLnN1bnJpc2U7XG4gICAgdmFyIGNhbGNTdW5zZXQgPSBpdGVtLnN1bnNldDtcblxuXG4gICAgdmFyIGF2Z01heFRlbXAgPSBjYWxjTWF4VGVtcC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKSAvIGNhbGNNYXhUZW1wLmxlbmd0aDtcbiAgICB2YXIgYXZnTWluVGVtcCA9IGNhbGNNaW5UZW1wLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpIC8gY2FsY01pblRlbXAubGVuZ3RoO1xuICAgIHZhciBhdmdSYWluZmFsbCA9IGNhbGNSYWluZmFsbC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKSAvIGNhbGNSYWluZmFsbC5sZW5ndGg7XG4gICAgdmFyIGF2Z1Nub3dmYWxsID0gY2FsY1Nub3dmYWxsLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpIC8gY2FsY1Nub3dmYWxsLmxlbmd0aDtcblxuXG4gICAgY29uc3QgYXZnU3VucmlzZSA9IGNhbGNTdW5yaXNlWzQ1XS5zbGljZSgtNSk7XG4gICAgY29uc3QgYXZnU3Vuc2V0ID0gY2FsY1N1bnNldFs0NV0uc2xpY2UoLTUpO1xuICAgIGNvbnN0IHN0b3JlTWF4VGVtcCA9IGF2Z01heFRlbXAudG9GaXhlZCgxKTtcbiAgICBjb25zdCBzdG9yZU1pblRlbXAgPSBhdmdNaW5UZW1wLnRvRml4ZWQoMSk7XG4gICAgY29uc3Qgc3RvcmVSYWluZmFsbCA9IGF2Z1JhaW5mYWxsLnRvRml4ZWQoMik7XG4gICAgY29uc3Qgc3RvcmVTbm93ZmFsbCA9IGF2Z1Nub3dmYWxsLnRvRml4ZWQoMik7XG5cbiAgICBzZXRTdW5yaXNlKGF2Z1N1bnJpc2UpXG4gICAgc2V0U3Vuc2V0KGF2Z1N1bnNldClcbiAgICBzZXRNYXhUZW1wKHN0b3JlTWF4VGVtcClcbiAgICBzZXRNaW5UZW0oc3RvcmVNaW5UZW1wKVxuICAgIHNldFJhaW5mYWxsKHN0b3JlUmFpbmZhbGwpXG4gICAgc2V0c3RvcmVTbm93ZmFsbChzdG9yZVNub3dmYWxsKVxuICAgIHNldERhdGFDaGVjayh0cnVlKTtcbiAgICBcbiAgICB9O1xuICBcbiAgcmV0dXJuKFxuICAgIDw+XG4gIFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLXctMy80IG14LWF1dG8gZmxleCBmbGV4LXdyYXAgb3ZlcmZsb3cteS1oaWRkZW5cIj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XG5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnZXREYXRhKDApfVxuICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTQwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIG15LTQgbXgtNCBweC00IGJvcmRlci1iLTQgYm9yZGVyLWJsdWUtNzAwIGhvdmVyOmJvcmRlci1ibHVlLTUwMCByb3VuZGVkXCI+XG4gICAgICAgIHtsb2NhdGlvbkRldGFpbHMubG9jYXRpb25zWzBdLmNpdHl9XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ2V0RGF0YSgxKX0gICAgICBcbiAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS00MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBteS00IG14LTQgcHgtNCBib3JkZXItYi00IGJvcmRlci1ibHVlLTcwMCBob3Zlcjpib3JkZXItYmx1ZS01MDAgcm91bmRlZFwiPlxuICAgICAgICB7bG9jYXRpb25EZXRhaWxzLmxvY2F0aW9uc1sxXS5jaXR5fVxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdldERhdGEoMil9ICAgICAgXG4gICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNDAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgbXktNCBteC00IHB4LTQgYm9yZGVyLWItNCBib3JkZXItYmx1ZS03MDAgaG92ZXI6Ym9yZGVyLWJsdWUtNTAwIHJvdW5kZWRcIj5cbiAgICAgICAgICB7bG9jYXRpb25EZXRhaWxzLmxvY2F0aW9uc1syXS5jaXR5fVxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxuXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ2V0RGF0YSgzKX1cbiAgICAgICAgY2xhc3NOYW1lPVwiYmFzaXMtMS8zIGJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNDAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgbXktNCBteC00IHB4LTQgYm9yZGVyLWItNCBib3JkZXItYmx1ZS03MDAgaG92ZXI6Ym9yZGVyLWJsdWUtNTAwIHJvdW5kZWRcIj5cbiAgICAgICAgICB7bG9jYXRpb25EZXRhaWxzLmxvY2F0aW9uc1szXS5jaXR5fVxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdldERhdGEoNCl9XG4gICAgICAgIGNsYXNzTmFtZT1cImJhc2lzLTEvMyBiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTQwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIG15LTQgbXgtNCBweC00IGJvcmRlci1iLTQgYm9yZGVyLWJsdWUtNzAwIGhvdmVyOmJvcmRlci1ibHVlLTUwMCByb3VuZGVkXCI+XG4gICAgICAgICAge2xvY2F0aW9uRGV0YWlscy5sb2NhdGlvbnNbNF0uY2l0eX1cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnZXREYXRhKDUpfVxuICAgICAgICBjbGFzc05hbWU9XCJiYXNpcy0xLzMgYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS00MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBteS00IG14LTQgcHgtNCBib3JkZXItYi00IGJvcmRlci1ibHVlLTcwMCBob3Zlcjpib3JkZXItYmx1ZS01MDAgcm91bmRlZFwiPlxuICAgICAgICAgIHtsb2NhdGlvbkRldGFpbHMubG9jYXRpb25zWzVdLmNpdHl9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICBcbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgICBcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnZXREYXRhKDYpfVxuICAgICAgICBjbGFzc05hbWU9XCJiYXNpcy0xLzQgYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS00MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBteS00IG14LTQgcHgtNCBib3JkZXItYi00IGJvcmRlci1ibHVlLTcwMCBob3Zlcjpib3JkZXItYmx1ZS01MDAgcm91bmRlZFwiPlxuICAgICAgICAgIHtsb2NhdGlvbkRldGFpbHMubG9jYXRpb25zWzZdLmNpdHl9XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ2V0RGF0YSg3KX1cbiAgICAgICAgY2xhc3NOYW1lPVwiYmFzaXMtMS80IGJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNDAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgbXktNCBteC00IHB4LTQgYm9yZGVyLWItNCBib3JkZXItYmx1ZS03MDAgaG92ZXI6Ym9yZGVyLWJsdWUtNTAwIHJvdW5kZWRcIj5cbiAgICAgICAgICB7bG9jYXRpb25EZXRhaWxzLmxvY2F0aW9uc1s3XS5jaXR5fVxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdldERhdGEoOCl9XG4gICAgICAgIGNsYXNzTmFtZT1cImJhc2lzLTEvNCBiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTQwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIG15LTQgbXgtNCBweC00IGJvcmRlci1iLTQgYm9yZGVyLWJsdWUtNzAwIGhvdmVyOmJvcmRlci1ibHVlLTUwMCByb3VuZGVkXCI+XG4gICAgICAgICAge2xvY2F0aW9uRGV0YWlscy5sb2NhdGlvbnNbOF0uY2l0eX1cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnZXREYXRhKDkpfVxuICAgICAgICBjbGFzc05hbWU9XCJiYXNpcy0xLzQgYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS00MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBteS00IG14LTQgcHgtNCBib3JkZXItYi00IGJvcmRlci1ibHVlLTcwMCBob3Zlcjpib3JkZXItYmx1ZS01MDAgcm91bmRlZFwiPlxuICAgICAgICAgIHtsb2NhdGlvbkRldGFpbHMubG9jYXRpb25zWzldLmNpdHl9XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gICAgICB7ZGF0YWNoZWNrID8gXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+IFRoaXMgc2hvdWxkbnQgc2hvdyB1bnRpbCB0aGVyZSBpcyBkYXRhIDwvaDE+XG4gICAgICAgICAgICA8aDQ+U3VucmlzZSA9IDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkJz57bmV3U3VucmlzZX08L3NwYW4+PC9oND5cbiAgICAgICAgICAgIDxoND5TdW5zZXQgPSA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+e25ld1N1bnNldH08L3NwYW4+PC9oND5cbiAgICAgICAgICAgIDxoND5NYXhUZW1wID0gPHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQnPntuZXdNYXhUZW1wfTwvc3Bhbj48L2g0PlxuICAgICAgICAgICAgPGg0Pk1pblRlbXAgPSA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+e25ld01pblRlbXB9PC9zcGFuPjwvaDQ+XG4gICAgICAgICAgICA8aDQ+UmFpbmZhbGwgPSA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+e25ld1JhaW5mYWxsfTwvc3Bhbj48L2g0PlxuICAgICAgICAgICAgPGg0PlNub3dmYWxsID0gPHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQnPntuZXdTbm93ZmFsbH08L3NwYW4+PC9oND5cbiAgICAgIDwvZGl2PlxuICAgICAgOiAnJ31cbiAgICA8Lz5cbiAgKVxufTtcblxuICBleHBvcnQgZGVmYXVsdCB3ZWF0aGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Weather.jsx\n");

/***/ })

})
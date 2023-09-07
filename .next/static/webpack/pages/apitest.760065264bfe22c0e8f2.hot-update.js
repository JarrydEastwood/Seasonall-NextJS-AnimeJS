webpackHotUpdate_N_E("pages/apitest",{

/***/ "./pages/Weather.jsx":
/*!***************************!*\
  !*** ./pages/Weather.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/jarryd/Documents/ActiveUni/Seasonall-NextJS-AnimeJS/pages/Weather.jsx\",\n    _this = undefined;\n\n\n\n\nvar weather = function weather() {\n  // const [location, setLocation] = useState([]); //useState hook to initialize the state to an empty array\n  var _ref = [{\n    maxTemp: String\n  }, {\n    minTemp: String\n  }, {\n    rainfall: String\n  }, {\n    snowfall: String\n  }, {\n    sunrise: String\n  }, {\n    sunset: String\n  } //  ^^^ Trying to set the state of an array of objects\n  ],\n      weatherData = _ref[0],\n      setWeatherData = _ref[1];\n\n  var getData = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var travelLat, travelLong, weatherDateStart, weatherDateEnd, weatherQuery, weatherResponse, item, calcMaxTemp, calcMinTemp, calcRainfall, calcSnowfall, calcSunrise, calcSunset, avgSunrise, avgSunset, avgMaxTemp, avgMinTemp, avgRainfall, avgSnowfall, storeMaxTemp, storeMinTemp, storeRainfall, storeSnowfall, storeWeather;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              travelLat = \"34.337306\";\n              travelLong = \"-118.6681779\";\n              weatherDateStart = \"2020-12-01\";\n              weatherDateEnd = \"2021-02-28\";\n              _context.next = 6;\n              return fetch(\"https://archive-api.open-meteo.com/v1/era5?latitude=\" + travelLat + \"&longitude=\" + travelLong + \"&start_date=\" + weatherDateStart + \"&end_date=\" + weatherDateEnd + \"&timezone=auto&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,snowfall_sum\");\n\n            case 6:\n              weatherQuery = _context.sent;\n              _context.next = 9;\n              return weatherQuery.json();\n\n            case 9:\n              weatherResponse = _context.sent;\n              console.log(weatherResponse);\n              item = weatherResponse.daily;\n              calcMaxTemp = item.temperature_2m_max;\n              calcMinTemp = item.temperature_2m_min;\n              calcRainfall = item.rain_sum;\n              calcSnowfall = item.snowfall_sum;\n              calcSunrise = item.sunrise;\n              calcSunset = item.sunset;\n              avgSunrise = calcSunrise[45].slice(-5);\n              avgSunset = calcSunset[45].slice(-5);\n              avgMaxTemp = calcMaxTemp.reduce(function (a, b) {\n                return a + b;\n              }) / calcMaxTemp.length;\n              avgMinTemp = calcMinTemp.reduce(function (a, b) {\n                return a + b;\n              }) / calcMinTemp.length;\n              avgRainfall = calcRainfall.reduce(function (a, b) {\n                return a + b;\n              }) / calcRainfall.length;\n              avgSnowfall = calcSnowfall.reduce(function (a, b) {\n                return a + b;\n              }) / calcSnowfall.length;\n              storeMaxTemp = avgMaxTemp.toFixed(1);\n              storeMinTemp = avgMinTemp.toFixed(1);\n              storeRainfall = avgRainfall.toFixed(2);\n              storeSnowfall = avgSnowfall.toFixed(2);\n              storeWeather = [{\n                maxTemp: storeMaxTemp\n              }, {\n                minTemp: storeMinTemp\n              }, {\n                rainfall: storeRainfall\n              }, {\n                snowfall: storeSnowfall\n              }, {\n                sunrise: avgSunrise\n              }, {\n                sunset: avgSunset\n              }];\n              setWeatherData(storeWeather);\n              console.log(storeWeather);\n\n            case 31:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getData() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"w-1/2 m-16 xl:w-2/5 justify-center overflow-y-hidden\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-xl\",\n        children: \"test component for weather Data\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return getData(\"Memphis\");\n        },\n        className: \"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 my-4 mx-4 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded\",\n        children: \"Get Weather Data\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"flex flex-col w-full m-16 xl:w-2/5 justify-center overflow-y-hidden\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n        id: \"maxTemp\",\n        children: [\"Max Temp = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n          className: \"font-bold\",\n          children: weatherData.maxTemp\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 41\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n        id: \"minTemp\",\n        children: [\"Min Temp = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n          className: \"font-bold\",\n          children: weatherData.minTemp\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 41\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n        id: \"rainfall\",\n        children: [\"Rainfall = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n          className: \"font-bold\",\n          children: weatherData.rainfall\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 42\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n        id: \"snowfall\",\n        children: [\"Snowfall = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n          className: \"font-bold\",\n          children: weatherData.snowfall\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 42\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n        id: \"sunrise\",\n        children: [\"Sunrise = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n          className: \"font-bold\",\n          children: weatherData.sunrise\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 40\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n        id: \"sunset\",\n        children: [\"Sunset = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n          className: \"font-bold\",\n          children: weatherData.sunset\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 38\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 3\n    }, _this)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (weather);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvV2VhdGhlci5qc3g/ZTg1YiJdLCJuYW1lcyI6WyJ3ZWF0aGVyIiwibWF4VGVtcCIsIlN0cmluZyIsIm1pblRlbXAiLCJyYWluZmFsbCIsInNub3dmYWxsIiwic3VucmlzZSIsInN1bnNldCIsIndlYXRoZXJEYXRhIiwic2V0V2VhdGhlckRhdGEiLCJnZXREYXRhIiwidHJhdmVsTGF0IiwidHJhdmVsTG9uZyIsIndlYXRoZXJEYXRlU3RhcnQiLCJ3ZWF0aGVyRGF0ZUVuZCIsImZldGNoIiwid2VhdGhlclF1ZXJ5IiwianNvbiIsIndlYXRoZXJSZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJpdGVtIiwiZGFpbHkiLCJjYWxjTWF4VGVtcCIsInRlbXBlcmF0dXJlXzJtX21heCIsImNhbGNNaW5UZW1wIiwidGVtcGVyYXR1cmVfMm1fbWluIiwiY2FsY1JhaW5mYWxsIiwicmFpbl9zdW0iLCJjYWxjU25vd2ZhbGwiLCJzbm93ZmFsbF9zdW0iLCJjYWxjU3VucmlzZSIsImNhbGNTdW5zZXQiLCJhdmdTdW5yaXNlIiwic2xpY2UiLCJhdmdTdW5zZXQiLCJhdmdNYXhUZW1wIiwicmVkdWNlIiwiYSIsImIiLCJsZW5ndGgiLCJhdmdNaW5UZW1wIiwiYXZnUmFpbmZhbGwiLCJhdmdTbm93ZmFsbCIsInN0b3JlTWF4VGVtcCIsInRvRml4ZWQiLCJzdG9yZU1pblRlbXAiLCJzdG9yZVJhaW5mYWxsIiwic3RvcmVTbm93ZmFsbCIsInN0b3JlV2VhdGhlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBRXBCO0FBRm9CLGFBR2tCLENBQ3BDO0FBQUNDLFdBQU8sRUFBRUM7QUFBVixHQURvQyxFQUVwQztBQUFDQyxXQUFPLEVBQUVEO0FBQVYsR0FGb0MsRUFHcEM7QUFBQ0UsWUFBUSxFQUFFRjtBQUFYLEdBSG9DLEVBSXBDO0FBQUNH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O0FBQUEsK0NBQTZCO0FBQU0sbUJBQVMsRUFBQyxXQUFoQjtBQUFBLG9CQUE2QkssV0FBVyxDQUFDSjtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMVixlQU1VO0FBQUksVUFBRSxFQUFDLFVBQVA7QUFBQSwrQ0FBNkI7QUFBTSxtQkFBUyxFQUFDLFdBQWhCO0FBQUEsb0JBQTZCSSxXQUFXLENBQUNIO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5WLGVBT1U7QUFBSSxVQUFFLEVBQUMsU0FBUDtBQUFBLDhDQUEyQjtBQUFNLG1CQUFTLEVBQUMsV0FBaEI7QUFBQSxvQkFBNkJHLFdBQVcsQ0FBQ0Y7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUFYsZUFRVTtBQUFJLFVBQUUsRUFBQyxRQUFQO0FBQUEsNkNBQXlCO0FBQU0sbUJBQVMsRUFBQyxXQUFoQjtBQUFBLG9CQUE2QkUsV0FBVyxDQUFDRDtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWRTtBQUFBLGtCQURGO0FBMEJELENBN0ZEOztBQStGaUJQLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvV2VhdGhlci5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cblxuY29uc3Qgd2VhdGhlciA9ICgpID0+IHtcblxuICAvLyBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKFtdKTsgLy91c2VTdGF0ZSBob29rIHRvIGluaXRpYWxpemUgdGhlIHN0YXRlIHRvIGFuIGVtcHR5IGFycmF5XG4gIGNvbnN0IFt3ZWF0aGVyRGF0YSwgc2V0V2VhdGhlckRhdGFdID0gW1xuICAgIHttYXhUZW1wOiBTdHJpbmd9LFxuICAgIHttaW5UZW1wOiBTdHJpbmd9LFxuICAgIHtyYWluZmFsbDogU3RyaW5nfSxcbiAgICB7c25vd2ZhbGw6IFN0cmluZ30sXG4gICAge3N1bnJpc2U6IFN0cmluZ30sXG4gICAge3N1bnNldDogU3RyaW5nfSxcbiAgXG4gICAgLy8gIF5eXiBUcnlpbmcgdG8gc2V0IHRoZSBzdGF0ZSBvZiBhbiBhcnJheSBvZiBvYmplY3RzXG4gIF07XG4gIFxuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB0cmF2ZWxMYXQgPSBcIjM0LjMzNzMwNlwiO1xuICAgICAgY29uc3QgdHJhdmVsTG9uZyA9IFwiLTExOC42NjgxNzc5XCI7XG4gICAgICBjb25zdCB3ZWF0aGVyRGF0ZVN0YXJ0ID0gXCIyMDIwLTEyLTAxXCI7XG4gICAgICBjb25zdCB3ZWF0aGVyRGF0ZUVuZCA9IFwiMjAyMS0wMi0yOFwiO1xuXG4gICAgICBjb25zdCB3ZWF0aGVyUXVlcnkgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXJjaGl2ZS1hcGkub3Blbi1tZXRlby5jb20vdjEvZXJhNT9sYXRpdHVkZT1cIiArXG4gICAgICB0cmF2ZWxMYXQgK1xuICAgICAgXCImbG9uZ2l0dWRlPVwiICtcbiAgICAgIHRyYXZlbExvbmcgK1xuICAgICAgXCImc3RhcnRfZGF0ZT1cIiArXG4gICAgICB3ZWF0aGVyRGF0ZVN0YXJ0ICtcbiAgICAgIFwiJmVuZF9kYXRlPVwiICtcbiAgICAgIHdlYXRoZXJEYXRlRW5kICtcbiAgICAgIFwiJnRpbWV6b25lPWF1dG8mZGFpbHk9dGVtcGVyYXR1cmVfMm1fbWF4LHRlbXBlcmF0dXJlXzJtX21pbixzdW5yaXNlLHN1bnNldCxwcmVjaXBpdGF0aW9uX3N1bSxyYWluX3N1bSxzbm93ZmFsbF9zdW1cIlxuICAgICAgKTtcbiAgICAgIGNvbnN0IHdlYXRoZXJSZXNwb25zZSA9IGF3YWl0IHdlYXRoZXJRdWVyeS5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyUmVzcG9uc2UpO1xuXG5cbiAgICAgIHZhciBpdGVtID0gd2VhdGhlclJlc3BvbnNlLmRhaWx5O1xuICAgICAgICAgIFxuICAgICAgdmFyIGNhbGNNYXhUZW1wID0gaXRlbS50ZW1wZXJhdHVyZV8ybV9tYXg7XG4gICAgICB2YXIgY2FsY01pblRlbXAgPSBpdGVtLnRlbXBlcmF0dXJlXzJtX21pbjtcbiAgICAgIHZhciBjYWxjUmFpbmZhbGwgPSBpdGVtLnJhaW5fc3VtO1xuICAgICAgdmFyIGNhbGNTbm93ZmFsbCA9IGl0ZW0uc25vd2ZhbGxfc3VtO1xuICAgICAgdmFyIGNhbGNTdW5yaXNlID0gaXRlbS5zdW5yaXNlO1xuICAgICAgdmFyIGNhbGNTdW5zZXQgPSBpdGVtLnN1bnNldDtcblxuICAgICAgdmFyIGF2Z1N1bnJpc2UgPSBjYWxjU3VucmlzZVs0NV0uc2xpY2UoLTUpO1xuICAgICAgdmFyIGF2Z1N1bnNldCA9IGNhbGNTdW5zZXRbNDVdLnNsaWNlKC01KTtcbiAgICAgIHZhciBhdmdNYXhUZW1wID0gY2FsY01heFRlbXAucmVkdWNlKChhLCBiKSA9PiBhICsgYikgLyBjYWxjTWF4VGVtcC5sZW5ndGg7XG4gICAgICB2YXIgYXZnTWluVGVtcCA9IGNhbGNNaW5UZW1wLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpIC8gY2FsY01pblRlbXAubGVuZ3RoO1xuICAgICAgdmFyIGF2Z1JhaW5mYWxsID0gY2FsY1JhaW5mYWxsLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpIC8gY2FsY1JhaW5mYWxsLmxlbmd0aDtcbiAgICAgIHZhciBhdmdTbm93ZmFsbCA9IGNhbGNTbm93ZmFsbC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKSAvIGNhbGNTbm93ZmFsbC5sZW5ndGg7XG4gICAgICBcbiAgICAgIHZhciBzdG9yZU1heFRlbXAgPSBhdmdNYXhUZW1wLnRvRml4ZWQoMSk7XG4gICAgICB2YXIgc3RvcmVNaW5UZW1wID0gYXZnTWluVGVtcC50b0ZpeGVkKDEpO1xuICAgICAgdmFyIHN0b3JlUmFpbmZhbGwgPSBhdmdSYWluZmFsbC50b0ZpeGVkKDIpO1xuICAgICAgdmFyIHN0b3JlU25vd2ZhbGwgPSBhdmdTbm93ZmFsbC50b0ZpeGVkKDIpO1xuICAgICAgXG4gICAgICBjb25zdCBzdG9yZVdlYXRoZXIgPSBbXG4gICAgICAgIHttYXhUZW1wOiBzdG9yZU1heFRlbXB9LCBcbiAgICAgICAge21pblRlbXA6IHN0b3JlTWluVGVtcH0sIFxuICAgICAgICB7cmFpbmZhbGw6IHN0b3JlUmFpbmZhbGx9LCBcbiAgICAgICAge3Nub3dmYWxsOiBzdG9yZVNub3dmYWxsfSwgXG4gICAgICAgIHtzdW5yaXNlOiBhdmdTdW5yaXNlfSwgXG4gICAgICAgIHtzdW5zZXQ6IGF2Z1N1bnNldH0sXG4gICAgICAgIF07XG4gICAgICBzZXRXZWF0aGVyRGF0YShzdG9yZVdlYXRoZXIpO1xuICAgICAgY29uc29sZS5sb2coc3RvcmVXZWF0aGVyKTtcbiAgICB9O1xuICAgIFxuICByZXR1cm4oXG4gICAgPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIG0tMTYgeGw6dy0yLzUganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3cteS1oaWRkZW5cIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+dGVzdCBjb21wb25lbnQgZm9yIHdlYXRoZXIgRGF0YTwvaDE+XG5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ2V0RGF0YShcIk1lbXBoaXNcIil9ICAgICAgXG4gICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTQwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIG15LTQgbXgtNCBweC00IGJvcmRlci1iLTQgYm9yZGVyLWJsdWUtNzAwIGhvdmVyOmJvcmRlci1ibHVlLTUwMCByb3VuZGVkXCI+XG4gICAgICAgIEdldCBXZWF0aGVyIERhdGFcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgbS0xNiB4bDp3LTIvNSBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy15LWhpZGRlblwiPlxuICAgIFxuXG4gICAgICAgICAgICA8aDQgaWQ9XCJtYXhUZW1wXCI+TWF4IFRlbXAgPSA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+e3dlYXRoZXJEYXRhLm1heFRlbXB9PC9zcGFuPjwvaDQ+XG4gICAgICAgICAgICA8aDQgaWQ9XCJtaW5UZW1wXCI+TWluIFRlbXAgPSA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+e3dlYXRoZXJEYXRhLm1pblRlbXB9PC9zcGFuPjwvaDQ+XG4gICAgICAgICAgICA8aDQgaWQ9XCJyYWluZmFsbFwiPlJhaW5mYWxsID0gPHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQnPnt3ZWF0aGVyRGF0YS5yYWluZmFsbH08L3NwYW4+PC9oND5cbiAgICAgICAgICAgIDxoNCBpZD1cInNub3dmYWxsXCI+U25vd2ZhbGwgPSA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+e3dlYXRoZXJEYXRhLnNub3dmYWxsfTwvc3Bhbj48L2g0PlxuICAgICAgICAgICAgPGg0IGlkPVwic3VucmlzZVwiPlN1bnJpc2UgPSA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+e3dlYXRoZXJEYXRhLnN1bnJpc2V9PC9zcGFuPjwvaDQ+XG4gICAgICAgICAgICA8aDQgaWQ9XCJzdW5zZXRcIj5TdW5zZXQgPSA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+e3dlYXRoZXJEYXRhLnN1bnNldH08L3NwYW4+PC9oND5cbiAgICBcblxuICA8L2Rpdj5cblxuICAgIDwvPlxuICApXG59O1xuXG4gIGV4cG9ydCBkZWZhdWx0IHdlYXRoZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Weather.jsx\n");

/***/ })

})
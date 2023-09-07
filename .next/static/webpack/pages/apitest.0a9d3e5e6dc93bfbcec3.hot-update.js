webpackHotUpdate_N_E("pages/apitest",{

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
false,

/***/ "./pages/Weather.jsx":
/*!***************************!*\
  !*** ./pages/Weather.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/jarryd/Documents/ActiveUni/Seasonall-NextJS-AnimeJS/pages/Weather.jsx\",\n    _this = undefined;\n\n\n\n\nvar weather = function weather() {\n  // const [location, setLocation] = useState([]); //useState hook to initialize the state to an empty array\n  var _ref = [{\n    maxTemp: String\n  }, {\n    minTemp: String\n  }, {\n    rainfall: String\n  }, {\n    snowfall: String\n  }, {\n    sunrise: String\n  }, {\n    sunset: String\n  } //  ^^^ Trying to set the values of an array of objects\n  ],\n      weatherData = _ref[0],\n      setWeatherData = _ref[1];\n\n  var getData = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var travelLat, travelLong, weatherDateStart, weatherDateEnd, weatherQuery, weatherResponse, item, calcMaxTemp, calcMinTemp, calcRainfall, calcSnowfall, calcSunrise, calcSunset, avgSunrise, avgSunset, avgMaxTemp, avgMinTemp, avgRainfall, avgSnowfall, storeMaxTemp, storeMinTemp, storeRainfall, storeSnowfall;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              travelLat = \"34.337306\";\n              travelLong = \"-118.6681779\";\n              weatherDateStart = \"2020-12-01\";\n              weatherDateEnd = \"2021-02-28\";\n              _context.next = 6;\n              return fetch(\"https://archive-api.open-meteo.com/v1/era5?latitude=\" + travelLat + \"&longitude=\" + travelLong + \"&start_date=\" + weatherDateStart + \"&end_date=\" + weatherDateEnd + \"&timezone=auto&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,snowfall_sum\");\n\n            case 6:\n              weatherQuery = _context.sent;\n              _context.next = 9;\n              return weatherQuery.json();\n\n            case 9:\n              weatherResponse = _context.sent;\n              console.log(weatherResponse);\n              item = weatherResponse.daily;\n              calcMaxTemp = item.temperature_2m_max;\n              calcMinTemp = item.temperature_2m_min;\n              calcRainfall = item.rain_sum;\n              calcSnowfall = item.snowfall_sum;\n              calcSunrise = item.sunrise;\n              calcSunset = item.sunset;\n              avgSunrise = calcSunrise[45].slice(-5);\n              avgSunset = calcSunset[45].slice(-5);\n              avgMaxTemp = calcMaxTemp.reduce(function (a, b) {\n                return a + b;\n              }) / calcMaxTemp.length;\n              avgMinTemp = calcMinTemp.reduce(function (a, b) {\n                return a + b;\n              }) / calcMinTemp.length;\n              avgRainfall = calcRainfall.reduce(function (a, b) {\n                return a + b;\n              }) / calcRainfall.length;\n              avgSnowfall = calcSnowfall.reduce(function (a, b) {\n                return a + b;\n              }) / calcSnowfall.length;\n              storeMaxTemp = avgMaxTemp.toFixed(1);\n              storeMinTemp = avgMinTemp.toFixed(1);\n              storeRainfall = avgRainfall.toFixed(2);\n              storeSnowfall = avgSnowfall.toFixed(2);\n              storage = [{\n                maxTemp: storeMaxTemp\n              }, {\n                minTemp: storeMinTemp\n              }, {\n                rainfall: storeRainfall\n              }, {\n                snowfall: storeSnowfall\n              }, {\n                sunrise: avgSunrise\n              }, {\n                sunset: avgSunset\n              }];\n              setWeatherData(storage); //    trying to set the values of an array of objects\n\n              console.log(storeWeather); //   show the objects!!\n\n            case 31:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getData() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"w-1/2 m-16 xl:w-2/5 justify-center overflow-y-hidden\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-xl\",\n        children: \"test component for weather Data\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return getData(\"Memphis\");\n        },\n        className: \"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 my-4 mx-4 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded\",\n        children: \"Get Weather Data\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (weather);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvV2VhdGhlci5qc3g/ZTg1YiJdLCJuYW1lcyI6WyJ3ZWF0aGVyIiwibWF4VGVtcCIsIlN0cmluZyIsIm1pblRlbXAiLCJyYWluZmFsbCIsInNub3dmYWxsIiwic3VucmlzZSIsInN1bnNldCIsIndlYXRoZXJEYXRhIiwic2V0V2VhdGhlckRhdGEiLCJnZXREYXRhIiwidHJhdmVsTGF0IiwidHJhdmVsTG9uZyIsIndlYXRoZXJEYXRlU3RhcnQiLCJ3ZWF0aGVyRGF0ZUVuZCIsImZldGNoIiwid2VhdGhlclF1ZXJ5IiwianNvbiIsIndlYXRoZXJSZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJpdGVtIiwiZGFpbHkiLCJjYWxjTWF4VGVtcCIsInRlbXBlcmF0dXJlXzJtX21heCIsImNhbGNNaW5UZW1wIiwidGVtcGVyYXR1cmVfMm1fbWluIiwiY2FsY1JhaW5mYWxsIiwicmFpbl9zdW0iLCJjYWxjU25vd2ZhbGwiLCJzbm93ZmFsbF9zdW0iLCJjYWxjU3VucmlzZSIsImNhbGNTdW5zZXQiLCJhdmdTdW5yaXNlIiwic2xpY2UiLCJhdmdTdW5zZXQiLCJhdmdNYXhUZW1wIiwicmVkdWNlIiwiYSIsImIiLCJsZW5ndGgiLCJhdmdNaW5UZW1wIiwiYXZnUmFpbmZhbGwiLCJhdmdTbm93ZmFsbCIsInN0b3JlTWF4VGVtcCIsInRvRml4ZWQiLCJzdG9yZU1pblRlbXAiLCJzdG9yZVJhaW5mYWxsIiwic3RvcmVTbm93ZmFsbCIsInN0b3JhZ2UiLCJzdG9yZVdlYXRoZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUVwQjtBQUZvQixhQUdrQixDQUNwQztBQUFDQyxXQUFPLEVBQUVDO0FBQVYsR0FEb0MsRUFFcEM7QUFBQ0MsV0FBTyxFQUFFRDtBQUFWLEdBRm9DLEVBR3BDO0FBQUNFLFlBQVEsRUFBRUY7QUFBWCxHQUhvQyxFQUlwQztBQUFDRyxZQUFRLEVBQUVIO0FBQVgsR0FKb0MsRUFLcEM7QUFBQ0ksV0FBTyxFQUFFSjtBQUFWLEdBTG9DLEVBTXBDO0FBQUNLLFVBQU0sRUFBRUw7QUFBVCxHQU5vQyxDQVFwQztBQVJvQyxHQUhsQjtBQUFBLE1BR2JNLFdBSGE7QUFBQSxNQUdBQyxjQUhBOztBQWNsQixNQUFNQyxPQUFPO0FBQUEsaU1BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1JDLHVCQURRLEdBQ0ksV0FESjtBQUVSQyx3QkFGUSxHQUVLLGNBRkw7QUFHUkMsOEJBSFEsR0FHVyxZQUhYO0FBSVJDLDRCQUpRLEdBSVMsWUFKVDtBQUFBO0FBQUEscUJBTWFDLEtBQUssQ0FBQyx5REFDakNKLFNBRGlDLEdBRWpDLGFBRmlDLEdBR2pDQyxVQUhpQyxHQUlqQyxjQUppQyxHQUtqQ0MsZ0JBTGlDLEdBTWpDLFlBTmlDLEdBT2pDQyxjQVBpQyxHQVFqQyxtSEFSZ0MsQ0FObEI7O0FBQUE7QUFNUkUsMEJBTlE7QUFBQTtBQUFBLHFCQWdCZ0JBLFlBQVksQ0FBQ0MsSUFBYixFQWhCaEI7O0FBQUE7QUFnQlJDLDZCQWhCUTtBQWlCZEMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixlQUFaO0FBR0lHLGtCQXBCVSxHQW9CSEgsZUFBZSxDQUFDSSxLQXBCYjtBQXNCVkMseUJBdEJVLEdBc0JJRixJQUFJLENBQUNHLGtCQXRCVDtBQXVCVkMseUJBdkJVLEdBdUJJSixJQUFJLENBQUNLLGtCQXZCVDtBQXdCVkMsMEJBeEJVLEdBd0JLTixJQUFJLENBQUNPLFFBeEJWO0FBeUJWQywwQkF6QlUsR0F5QktSLElBQUksQ0FBQ1MsWUF6QlY7QUEwQlZDLHlCQTFCVSxHQTBCSVYsSUFBSSxDQUFDZixPQTFCVDtBQTJCVjBCLHdCQTNCVSxHQTJCR1gsSUFBSSxDQUFDZCxNQTNCUjtBQTZCVjBCLHdCQTdCVSxHQTZCR0YsV0FBVyxDQUFDLEVBQUQsQ0FBWCxDQUFnQkcsS0FBaEIsQ0FBc0IsQ0FBQyxDQUF2QixDQTdCSDtBQThCVkMsdUJBOUJVLEdBOEJFSCxVQUFVLENBQUMsRUFBRCxDQUFWLENBQWVFLEtBQWYsQ0FBcUIsQ0FBQyxDQUF0QixDQTlCRjtBQStCVkUsd0JBL0JVLEdBK0JHYixXQUFXLENBQUNjLE1BQVosQ0FBbUIsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsdUJBQVVELENBQUMsR0FBR0MsQ0FBZDtBQUFBLGVBQW5CLElBQXNDaEIsV0FBVyxDQUFDaUIsTUEvQnJEO0FBZ0NWQyx3QkFoQ1UsR0FnQ0doQixXQUFXLENBQUNZLE1BQVosQ0FBbUIsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsdUJBQVVELENBQUMsR0FBR0MsQ0FBZDtBQUFBLGVBQW5CLElBQXNDZCxXQUFXLENBQUNlLE1BaENyRDtBQWlDVkUseUJBakNVLEdBaUNJZixZQUFZLENBQUNVLE1BQWIsQ0FBb0IsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsdUJBQVVELENBQUMsR0FBR0MsQ0FBZDtBQUFBLGVBQXBCLElBQXVDWixZQUFZLENBQUNhLE1BakN4RDtBQWtDVkcseUJBbENVLEdBa0NJZCxZQUFZLENBQUNRLE1BQWIsQ0FBb0IsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsdUJBQVVELENBQUMsR0FBR0MsQ0FBZDtBQUFBLGVBQXBCLElBQXVDVixZQUFZLENBQUNXLE1BbEN4RDtBQW9DVkksMEJBcENVLEdBb0NLUixVQUFVLENBQUNTLE9BQVgsQ0FBbUIsQ0FBbkIsQ0FwQ0w7QUFxQ1ZDLDBCQXJDVSxHQXFDS0wsVUFBVSxDQUFDSSxPQUFYLENBQW1CLENBQW5CLENBckNMO0FBc0NWRSwyQkF0Q1UsR0FzQ01MLFdBQVcsQ0FBQ0csT0FBWixDQUFvQixDQUFwQixDQXRDTjtBQXVDVkcsMkJBdkNVLEdBdUNNTCxXQUFXLENBQUNFLE9BQVosQ0FBb0IsQ0FBcEIsQ0F2Q047QUF5Q2RJLHFCQUFPLEdBQUcsQ0FDUjtBQUFDaEQsdUJBQU8sRUFBRTJDO0FBQVYsZUFEUSxFQUVSO0FBQUN6Qyx1QkFBTyxFQUFFMkM7QUFBVixlQUZRLEVBR1I7QUFBQzFDLHdCQUFRLEVBQUUyQztBQUFYLGVBSFEsRUFJUjtBQUFDMUMsd0JBQVEsRUFBRTJDO0FBQVgsZUFKUSxFQUtSO0FBQUMxQyx1QkFBTyxFQUFFMkI7QUFBVixlQUxRLEVBTVI7QUFBQzFCLHNCQUFNLEVBQUU0QjtBQUFULGVBTlEsQ0FBVjtBQVNBMUIsNEJBQWMsQ0FBQ3dDLE9BQUQsQ0FBZCxDQWxEYyxDQW1EaEI7O0FBQ0U5QixxQkFBTyxDQUFDQyxHQUFSLENBQVk4QixZQUFaLEVBcERjLENBcURoQjs7QUFyRGdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVB4QyxPQUFPO0FBQUE7QUFBQTtBQUFBLEtBQWI7O0FBd0RGLHNCQUNFO0FBQUEsMkJBQ0E7QUFBSyxlQUFTLEVBQUMsc0RBQWY7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBR0U7QUFBUSxlQUFPLEVBQUU7QUFBQSxpQkFBTUEsT0FBTyxDQUFDLFNBQUQsQ0FBYjtBQUFBLFNBQWpCO0FBQ0EsaUJBQVMsRUFBQyxpSUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLG1CQURGO0FBMkJELENBakdEOztBQW1HaUJWLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvV2VhdGhlci5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cblxuY29uc3Qgd2VhdGhlciA9ICgpID0+IHtcblxuICAvLyBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKFtdKTsgLy91c2VTdGF0ZSBob29rIHRvIGluaXRpYWxpemUgdGhlIHN0YXRlIHRvIGFuIGVtcHR5IGFycmF5XG4gIGNvbnN0IFt3ZWF0aGVyRGF0YSwgc2V0V2VhdGhlckRhdGFdID0gW1xuICAgIHttYXhUZW1wOiBTdHJpbmd9LFxuICAgIHttaW5UZW1wOiBTdHJpbmd9LFxuICAgIHtyYWluZmFsbDogU3RyaW5nfSxcbiAgICB7c25vd2ZhbGw6IFN0cmluZ30sXG4gICAge3N1bnJpc2U6IFN0cmluZ30sXG4gICAge3N1bnNldDogU3RyaW5nfSxcbiAgXG4gICAgLy8gIF5eXiBUcnlpbmcgdG8gc2V0IHRoZSB2YWx1ZXMgb2YgYW4gYXJyYXkgb2Ygb2JqZWN0c1xuICBdO1xuICBcbiAgICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgdHJhdmVsTGF0ID0gXCIzNC4zMzczMDZcIjtcbiAgICAgIGNvbnN0IHRyYXZlbExvbmcgPSBcIi0xMTguNjY4MTc3OVwiO1xuICAgICAgY29uc3Qgd2VhdGhlckRhdGVTdGFydCA9IFwiMjAyMC0xMi0wMVwiO1xuICAgICAgY29uc3Qgd2VhdGhlckRhdGVFbmQgPSBcIjIwMjEtMDItMjhcIjtcblxuICAgICAgY29uc3Qgd2VhdGhlclF1ZXJ5ID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FyY2hpdmUtYXBpLm9wZW4tbWV0ZW8uY29tL3YxL2VyYTU/bGF0aXR1ZGU9XCIgK1xuICAgICAgdHJhdmVsTGF0ICtcbiAgICAgIFwiJmxvbmdpdHVkZT1cIiArXG4gICAgICB0cmF2ZWxMb25nICtcbiAgICAgIFwiJnN0YXJ0X2RhdGU9XCIgK1xuICAgICAgd2VhdGhlckRhdGVTdGFydCArXG4gICAgICBcIiZlbmRfZGF0ZT1cIiArXG4gICAgICB3ZWF0aGVyRGF0ZUVuZCArXG4gICAgICBcIiZ0aW1lem9uZT1hdXRvJmRhaWx5PXRlbXBlcmF0dXJlXzJtX21heCx0ZW1wZXJhdHVyZV8ybV9taW4sc3VucmlzZSxzdW5zZXQscHJlY2lwaXRhdGlvbl9zdW0scmFpbl9zdW0sc25vd2ZhbGxfc3VtXCJcbiAgICAgICk7XG4gICAgICBjb25zdCB3ZWF0aGVyUmVzcG9uc2UgPSBhd2FpdCB3ZWF0aGVyUXVlcnkuanNvbigpO1xuICAgICAgY29uc29sZS5sb2cod2VhdGhlclJlc3BvbnNlKTtcblxuXG4gICAgICB2YXIgaXRlbSA9IHdlYXRoZXJSZXNwb25zZS5kYWlseTtcbiAgICAgICAgICBcbiAgICAgIHZhciBjYWxjTWF4VGVtcCA9IGl0ZW0udGVtcGVyYXR1cmVfMm1fbWF4O1xuICAgICAgdmFyIGNhbGNNaW5UZW1wID0gaXRlbS50ZW1wZXJhdHVyZV8ybV9taW47XG4gICAgICB2YXIgY2FsY1JhaW5mYWxsID0gaXRlbS5yYWluX3N1bTtcbiAgICAgIHZhciBjYWxjU25vd2ZhbGwgPSBpdGVtLnNub3dmYWxsX3N1bTtcbiAgICAgIHZhciBjYWxjU3VucmlzZSA9IGl0ZW0uc3VucmlzZTtcbiAgICAgIHZhciBjYWxjU3Vuc2V0ID0gaXRlbS5zdW5zZXQ7XG5cbiAgICAgIHZhciBhdmdTdW5yaXNlID0gY2FsY1N1bnJpc2VbNDVdLnNsaWNlKC01KTtcbiAgICAgIHZhciBhdmdTdW5zZXQgPSBjYWxjU3Vuc2V0WzQ1XS5zbGljZSgtNSk7XG4gICAgICB2YXIgYXZnTWF4VGVtcCA9IGNhbGNNYXhUZW1wLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpIC8gY2FsY01heFRlbXAubGVuZ3RoO1xuICAgICAgdmFyIGF2Z01pblRlbXAgPSBjYWxjTWluVGVtcC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKSAvIGNhbGNNaW5UZW1wLmxlbmd0aDtcbiAgICAgIHZhciBhdmdSYWluZmFsbCA9IGNhbGNSYWluZmFsbC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKSAvIGNhbGNSYWluZmFsbC5sZW5ndGg7XG4gICAgICB2YXIgYXZnU25vd2ZhbGwgPSBjYWxjU25vd2ZhbGwucmVkdWNlKChhLCBiKSA9PiBhICsgYikgLyBjYWxjU25vd2ZhbGwubGVuZ3RoO1xuICAgICAgXG4gICAgICB2YXIgc3RvcmVNYXhUZW1wID0gYXZnTWF4VGVtcC50b0ZpeGVkKDEpO1xuICAgICAgdmFyIHN0b3JlTWluVGVtcCA9IGF2Z01pblRlbXAudG9GaXhlZCgxKTtcbiAgICAgIHZhciBzdG9yZVJhaW5mYWxsID0gYXZnUmFpbmZhbGwudG9GaXhlZCgyKTtcbiAgICAgIHZhciBzdG9yZVNub3dmYWxsID0gYXZnU25vd2ZhbGwudG9GaXhlZCgyKTtcbiAgICAgIFxuICAgICAgc3RvcmFnZSA9IFtcbiAgICAgICAge21heFRlbXA6IHN0b3JlTWF4VGVtcH0sIFxuICAgICAgICB7bWluVGVtcDogc3RvcmVNaW5UZW1wfSwgXG4gICAgICAgIHtyYWluZmFsbDogc3RvcmVSYWluZmFsbH0sIFxuICAgICAgICB7c25vd2ZhbGw6IHN0b3JlU25vd2ZhbGx9LCBcbiAgICAgICAge3N1bnJpc2U6IGF2Z1N1bnJpc2V9LCBcbiAgICAgICAge3N1bnNldDogYXZnU3Vuc2V0fSxcbiAgICAgIF07XG5cbiAgICAgIHNldFdlYXRoZXJEYXRhKHN0b3JhZ2UpO1xuICAgIC8vICAgIHRyeWluZyB0byBzZXQgdGhlIHZhbHVlcyBvZiBhbiBhcnJheSBvZiBvYmplY3RzXG4gICAgICBjb25zb2xlLmxvZyhzdG9yZVdlYXRoZXIpO1xuICAgIC8vICAgc2hvdyB0aGUgb2JqZWN0cyEhXG4gICAgfTtcbiAgICBcbiAgcmV0dXJuKFxuICAgIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiBtLTE2IHhsOnctMi81IGp1c3RpZnktY2VudGVyIG92ZXJmbG93LXktaGlkZGVuXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bFwiPnRlc3QgY29tcG9uZW50IGZvciB3ZWF0aGVyIERhdGE8L2gxPlxuXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdldERhdGEoXCJNZW1waGlzXCIpfSAgICAgIFxuICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS00MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBteS00IG14LTQgcHgtNCBib3JkZXItYi00IGJvcmRlci1ibHVlLTcwMCBob3Zlcjpib3JkZXItYmx1ZS01MDAgcm91bmRlZFwiPlxuICAgICAgICBHZXQgV2VhdGhlciBEYXRhXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuICB7LyogPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbCBtLTE2IHhsOnctMi81IGp1c3RpZnktY2VudGVyIG92ZXJmbG93LXktaGlkZGVuXCI+XG4gICAgXG5cbiAgICAgICAgICAgIDxoNCBpZD1cIm1heFRlbXBcIj5NYXggVGVtcCA9IDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkJz57d2VhdGhlckRhdGEubWF4VGVtcH08L3NwYW4+PC9oND5cbiAgICAgICAgICAgIDxoNCBpZD1cIm1pblRlbXBcIj5NaW4gVGVtcCA9IDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkJz57d2VhdGhlckRhdGEubWluVGVtcH08L3NwYW4+PC9oND5cbiAgICAgICAgICAgIDxoNCBpZD1cInJhaW5mYWxsXCI+UmFpbmZhbGwgPSA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+e3dlYXRoZXJEYXRhLnJhaW5mYWxsfTwvc3Bhbj48L2g0PlxuICAgICAgICAgICAgPGg0IGlkPVwic25vd2ZhbGxcIj5Tbm93ZmFsbCA9IDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkJz57d2VhdGhlckRhdGEuc25vd2ZhbGx9PC9zcGFuPjwvaDQ+XG4gICAgICAgICAgICA8aDQgaWQ9XCJzdW5yaXNlXCI+U3VucmlzZSA9IDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkJz57d2VhdGhlckRhdGEuc3VucmlzZX08L3NwYW4+PC9oND5cbiAgICAgICAgICAgIDxoNCBpZD1cInN1bnNldFwiPlN1bnNldCA9IDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkJz57d2VhdGhlckRhdGEuc3Vuc2V0fTwvc3Bhbj48L2g0PlxuICAgIFxuLy8gVGhpcyBwYXJ0IGRvZXNudCB3b3JrIHlldC4uLlxuXG4gIDwvZGl2PiAqL31cblxuICAgIDwvPlxuICApXG59O1xuXG4gIGV4cG9ydCBkZWZhdWx0IHdlYXRoZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Weather.jsx\n");

/***/ })

})
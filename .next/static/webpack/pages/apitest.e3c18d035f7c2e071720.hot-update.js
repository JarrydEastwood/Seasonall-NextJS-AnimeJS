webpackHotUpdate_N_E("pages/apitest",{

/***/ "./pages/Weather.jsx":
/*!***************************!*\
  !*** ./pages/Weather.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/jarryd/Documents/ActiveUni/Seasonall-NextJS-AnimeJS/pages/Weather.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar weather = function weather() {\n  _s();\n\n  // const [location, setLocation] = useState([]); //useState hook to initialize the state to an empty array\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      weatherData = _useState[0],\n      setWeatherData = _useState[1]; //useState hook to initialize the state to an empty array\n\n\n  var getData = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var travelLat, travelLong, weatherDateStart, weatherDateEnd, weatherQuery, weatherResponse, item, calcMaxTemp, calcMinTemp, calcRainfall, calcSnowfall, calcSunrise, calcSunset, avgSunrise, avgSunset, avgMaxTemp, avgMinTemp, avgRainfall, avgSnowfall, storeMaxTemp, storeMinTemp, storeRainfall, storeSnowfall, storeWeather;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              travelLat = \"34.337306\";\n              travelLong = \"-118.6681779\";\n              weatherDateStart = \"2020-12-01\";\n              weatherDateEnd = \"2021-02-28\";\n              _context.next = 6;\n              return fetch(\"https://archive-api.open-meteo.com/v1/era5?latitude=\" + travelLat + \"&longitude=\" + travelLong + \"&start_date=\" + weatherDateStart + \"&end_date=\" + weatherDateEnd + \"&timezone=auto&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,snowfall_sum\");\n\n            case 6:\n              weatherQuery = _context.sent;\n              _context.next = 9;\n              return weatherQuery.json();\n\n            case 9:\n              weatherResponse = _context.sent;\n              console.log(weatherResponse);\n              item = weatherResponse.daily;\n              calcMaxTemp = item.temperature_2m_max;\n              calcMinTemp = item.temperature_2m_min;\n              calcRainfall = item.rain_sum;\n              calcSnowfall = item.snowfall_sum;\n              calcSunrise = item.sunrise;\n              calcSunset = item.sunset;\n              avgSunrise = calcSunrise[45].slice(-5);\n              avgSunset = calcSunset[45].slice(-5);\n              avgMaxTemp = calcMaxTemp.reduce(function (a, b) {\n                return a + b;\n              }) / calcMaxTemp.length;\n              avgMinTemp = calcMinTemp.reduce(function (a, b) {\n                return a + b;\n              }) / calcMinTemp.length;\n              avgRainfall = calcRainfall.reduce(function (a, b) {\n                return a + b;\n              }) / calcRainfall.length;\n              avgSnowfall = calcSnowfall.reduce(function (a, b) {\n                return a + b;\n              }) / calcSnowfall.length;\n              storeMaxTemp = avgMaxTemp.toFixed(1);\n              storeMinTemp = avgMinTemp.toFixed(1);\n              storeRainfall = avgRainfall.toFixed(2);\n              storeSnowfall = avgSnowfall.toFixed(2);\n              storeWeather = [storeMaxTemp, storeMinTemp, storeRainfall, storeSnowfall, avgSunrise, avgSunset];\n              console.log(storeWeather);\n              setWeatherData(storeWeather);\n              console.log(weatherData);\n\n            case 32:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getData() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"w-1/2 m-16 xl:w-2/5 justify-center overflow-y-hidden\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-xl\",\n        children: \"test component for weather Data\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return getData(\"Memphis\");\n        },\n        className: \"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 my-4 mx-4 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded\",\n        children: \"Get Weather Data\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"flex flex-col w-full m-16 xl:w-2/5 justify-center overflow-y-hidden\",\n      children: weatherData && weatherData.length && weatherData.map(function (setWeatherData, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n            id: \"Line\",\n            children: setWeatherData\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 13\n          }, _this)\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 3\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(weather, \"uPYC6klwQCjqosAFCgeByFfMAQs=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (weather);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvV2VhdGhlci5qc3g/ZTg1YiJdLCJuYW1lcyI6WyJ3ZWF0aGVyIiwidXNlU3RhdGUiLCJ3ZWF0aGVyRGF0YSIsInNldFdlYXRoZXJEYXRhIiwiZ2V0RGF0YSIsInRyYXZlbExhdCIsInRyYXZlbExvbmciLCJ3ZWF0aGVyRGF0ZVN0YXJ0Iiwid2VhdGhlckRhdGVFbmQiLCJmZXRjaCIsIndlYXRoZXJRdWVyeSIsImpzb24iLCJ3ZWF0aGVyUmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiaXRlbSIsImRhaWx5IiwiY2FsY01heFRlbXAiLCJ0ZW1wZXJhdHVyZV8ybV9tYXgiLCJjYWxjTWluVGVtcCIsInRlbXBlcmF0dXJlXzJtX21pbiIsImNhbGNSYWluZmFsbCIsInJhaW5fc3VtIiwiY2FsY1Nub3dmYWxsIiwic25vd2ZhbGxfc3VtIiwiY2FsY1N1bnJpc2UiLCJzdW5yaXNlIiwiY2FsY1N1bnNldCIsInN1bnNldCIsImF2Z1N1bnJpc2UiLCJzbGljZSIsImF2Z1N1bnNldCIsImF2Z01heFRlbXAiLCJyZWR1Y2UiLCJhIiwiYiIsImxlbmd0aCIsImF2Z01pblRlbXAiLCJhdmdSYWluZmFsbCIsImF2Z1Nub3dmYWxsIiwic3RvcmVNYXhUZW1wIiwidG9GaXhlZCIsInN0b3JlTWluVGVtcCIsInN0b3JlUmFpbmZhbGwiLCJzdG9yZVNub3dmYWxsIiwic3RvcmVXZWF0aGVyIiwibWFwIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUVwQjtBQUZvQixrQkFHa0JDLHNEQUFRLENBQUMsRUFBRCxDQUgxQjtBQUFBLE1BR2JDLFdBSGE7QUFBQSxNQUdBQyxjQUhBLGlCQUdnQzs7O0FBRWxELE1BQU1DLE9BQU87QUFBQSxnTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUkMsdUJBRFEsR0FDSSxX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RUFBQyxzREFBZjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFHRTtBQUFRLGVBQU8sRUFBRTtBQUFBLGlCQUFNQSxPQUFPLENBQUMsU0FBRCxDQUFiO0FBQUEsU0FBakI7QUFDQSxpQkFBUyxFQUFDLGlJQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsZUFVRjtBQUFLLGVBQVMsRUFBQyxxRUFBZjtBQUFBLGdCQUdFRixXQUFXLElBQUlBLFdBQVcsQ0FBQ2tDLE1BQTNCLElBQXFDbEMsV0FBVyxDQUFDNEMsR0FBWixDQUFnQixVQUFDM0MsY0FBRCxFQUFpQjRDLENBQWpCLEVBQXNCO0FBQ3ZFLDRCQUNJO0FBQUEsaUNBQ0E7QUFBSSxjQUFFLEVBQUMsTUFBUDtBQUFBLHNCQUFlNUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsV0FBVTRDLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQUtDLE9BTmdDO0FBSHZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWRTtBQUFBLGtCQURGO0FBMkJELENBaEZEOztHQUFNL0MsTzs7QUFrRldBLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvV2VhdGhlci5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cblxuY29uc3Qgd2VhdGhlciA9ICgpID0+IHtcblxuICAvLyBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKFtdKTsgLy91c2VTdGF0ZSBob29rIHRvIGluaXRpYWxpemUgdGhlIHN0YXRlIHRvIGFuIGVtcHR5IGFycmF5XG4gIGNvbnN0IFt3ZWF0aGVyRGF0YSwgc2V0V2VhdGhlckRhdGFdID0gdXNlU3RhdGUoW10pOyAvL3VzZVN0YXRlIGhvb2sgdG8gaW5pdGlhbGl6ZSB0aGUgc3RhdGUgdG8gYW4gZW1wdHkgYXJyYXlcbiAgXG4gICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHRyYXZlbExhdCA9IFwiMzQuMzM3MzA2XCI7XG4gICAgICBjb25zdCB0cmF2ZWxMb25nID0gXCItMTE4LjY2ODE3NzlcIjtcbiAgICAgIGNvbnN0IHdlYXRoZXJEYXRlU3RhcnQgPSBcIjIwMjAtMTItMDFcIjtcbiAgICAgIGNvbnN0IHdlYXRoZXJEYXRlRW5kID0gXCIyMDIxLTAyLTI4XCI7XG5cbiAgICAgIGNvbnN0IHdlYXRoZXJRdWVyeSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcmNoaXZlLWFwaS5vcGVuLW1ldGVvLmNvbS92MS9lcmE1P2xhdGl0dWRlPVwiICtcbiAgICAgIHRyYXZlbExhdCArXG4gICAgICBcIiZsb25naXR1ZGU9XCIgK1xuICAgICAgdHJhdmVsTG9uZyArXG4gICAgICBcIiZzdGFydF9kYXRlPVwiICtcbiAgICAgIHdlYXRoZXJEYXRlU3RhcnQgK1xuICAgICAgXCImZW5kX2RhdGU9XCIgK1xuICAgICAgd2VhdGhlckRhdGVFbmQgK1xuICAgICAgXCImdGltZXpvbmU9YXV0byZkYWlseT10ZW1wZXJhdHVyZV8ybV9tYXgsdGVtcGVyYXR1cmVfMm1fbWluLHN1bnJpc2Usc3Vuc2V0LHByZWNpcGl0YXRpb25fc3VtLHJhaW5fc3VtLHNub3dmYWxsX3N1bVwiXG4gICAgICApO1xuICAgICAgY29uc3Qgd2VhdGhlclJlc3BvbnNlID0gYXdhaXQgd2VhdGhlclF1ZXJ5Lmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJSZXNwb25zZSk7XG5cblxuICAgICAgdmFyIGl0ZW0gPSB3ZWF0aGVyUmVzcG9uc2UuZGFpbHk7XG4gICAgICAgICAgXG4gICAgICB2YXIgY2FsY01heFRlbXAgPSBpdGVtLnRlbXBlcmF0dXJlXzJtX21heDtcbiAgICAgIHZhciBjYWxjTWluVGVtcCA9IGl0ZW0udGVtcGVyYXR1cmVfMm1fbWluO1xuICAgICAgdmFyIGNhbGNSYWluZmFsbCA9IGl0ZW0ucmFpbl9zdW07XG4gICAgICB2YXIgY2FsY1Nub3dmYWxsID0gaXRlbS5zbm93ZmFsbF9zdW07XG4gICAgICB2YXIgY2FsY1N1bnJpc2UgPSBpdGVtLnN1bnJpc2U7XG4gICAgICB2YXIgY2FsY1N1bnNldCA9IGl0ZW0uc3Vuc2V0O1xuXG4gICAgICB2YXIgYXZnU3VucmlzZSA9IGNhbGNTdW5yaXNlWzQ1XS5zbGljZSgtNSk7XG4gICAgICB2YXIgYXZnU3Vuc2V0ID0gY2FsY1N1bnNldFs0NV0uc2xpY2UoLTUpO1xuICAgICAgdmFyIGF2Z01heFRlbXAgPSBjYWxjTWF4VGVtcC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKSAvIGNhbGNNYXhUZW1wLmxlbmd0aDtcbiAgICAgIHZhciBhdmdNaW5UZW1wID0gY2FsY01pblRlbXAucmVkdWNlKChhLCBiKSA9PiBhICsgYikgLyBjYWxjTWluVGVtcC5sZW5ndGg7XG4gICAgICB2YXIgYXZnUmFpbmZhbGwgPSBjYWxjUmFpbmZhbGwucmVkdWNlKChhLCBiKSA9PiBhICsgYikgLyBjYWxjUmFpbmZhbGwubGVuZ3RoO1xuICAgICAgdmFyIGF2Z1Nub3dmYWxsID0gY2FsY1Nub3dmYWxsLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpIC8gY2FsY1Nub3dmYWxsLmxlbmd0aDtcbiAgICAgIFxuICAgICAgdmFyIHN0b3JlTWF4VGVtcCA9IGF2Z01heFRlbXAudG9GaXhlZCgxKTtcbiAgICAgIHZhciBzdG9yZU1pblRlbXAgPSBhdmdNaW5UZW1wLnRvRml4ZWQoMSk7XG4gICAgICB2YXIgc3RvcmVSYWluZmFsbCA9IGF2Z1JhaW5mYWxsLnRvRml4ZWQoMik7XG4gICAgICB2YXIgc3RvcmVTbm93ZmFsbCA9IGF2Z1Nub3dmYWxsLnRvRml4ZWQoMik7XG4gICAgICBcbiAgICAgIGNvbnN0IHN0b3JlV2VhdGhlciA9IFtzdG9yZU1heFRlbXAsIHN0b3JlTWluVGVtcCwgc3RvcmVSYWluZmFsbCwgc3RvcmVTbm93ZmFsbCwgYXZnU3VucmlzZSwgYXZnU3Vuc2V0XVxuXG4gICAgICBjb25zb2xlLmxvZyhzdG9yZVdlYXRoZXIpO1xuICAgICAgc2V0V2VhdGhlckRhdGEoc3RvcmVXZWF0aGVyKTtcbiAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgICB9O1xuICAgIFxuICByZXR1cm4oXG4gICAgPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIG0tMTYgeGw6dy0yLzUganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3cteS1oaWRkZW5cIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+dGVzdCBjb21wb25lbnQgZm9yIHdlYXRoZXIgRGF0YTwvaDE+XG5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ2V0RGF0YShcIk1lbXBoaXNcIil9ICAgICAgXG4gICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTQwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIG15LTQgbXgtNCBweC00IGJvcmRlci1iLTQgYm9yZGVyLWJsdWUtNzAwIGhvdmVyOmJvcmRlci1ibHVlLTUwMCByb3VuZGVkXCI+XG4gICAgICAgIEdldCBXZWF0aGVyIERhdGFcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgbS0xNiB4bDp3LTIvNSBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy15LWhpZGRlblwiPlxuICAgIFxuICAgIHtcbiAgICB3ZWF0aGVyRGF0YSAmJiB3ZWF0aGVyRGF0YS5sZW5ndGggJiYgd2VhdGhlckRhdGEubWFwKChzZXRXZWF0aGVyRGF0YSwgaSkgPT57XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYga2V5PXtpfT5cbiAgICAgICAgICAgIDxoNCBpZD1cIkxpbmVcIj57c2V0V2VhdGhlckRhdGF9PC9oND5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICAgIH0pXG4gICAgfVxuXG4gIDwvZGl2PlxuXG4gICAgPC8+XG4gIClcbn07XG5cbiAgZXhwb3J0IGRlZmF1bHQgd2VhdGhlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Weather.jsx\n");

/***/ })

})
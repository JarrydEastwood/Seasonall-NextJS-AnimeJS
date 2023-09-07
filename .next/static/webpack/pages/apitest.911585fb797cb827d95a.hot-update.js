webpackHotUpdate_N_E("pages/apitest",{

/***/ "./pages/Weather.jsx":
/*!***************************!*\
  !*** ./pages/Weather.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/jarryd/Documents/ActiveUni/Seasonall-NextJS-AnimeJS/pages/Weather.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar weather = function weather() {\n  _s();\n\n  // const [location, setLocation] = useState([]); //useState hook to initialize the state to an empty array\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      geoData = _useState[0],\n      setGeoData = _useState[1]; //useState hook to initialize the state to an empty array\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      weatherData = _useState2[0],\n      setWeatherData = _useState2[1]; //useState hook to initialize the state to an empty array\n\n\n  var getData = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var travelLat, travelLong, weatherDateStart, weatherDateEnd, weatherQuery, weatherResponse, item, calcMaxTemp, calcMinTemp, calcRainfall, calcSnowfall, calcSunrise, calcSunset, avgSunrise, avgSunset, avgMaxTemp, avgMinTemp, avgRainfall, avgSnowfall, storeMaxTemp, storeMinTemp, storeRainfall, storeSnowfall, storeWeather;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              travelLat = \"34.337306\";\n              travelLong = \"-118.6681779\";\n              weatherDateStart = \"2020-12-01\";\n              weatherDateEnd = \"2021-02-28\";\n              _context.next = 6;\n              return fetch(\"https://archive-api.open-meteo.com/v1/era5?latitude=\" + travelLat + \"&longitude=\" + travelLong + \"&start_date=\" + weatherDateStart + \"&end_date=\" + weatherDateEnd + \"&timezone=auto&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,snowfall_sum\");\n\n            case 6:\n              weatherQuery = _context.sent;\n              _context.next = 9;\n              return weatherQuery.json();\n\n            case 9:\n              weatherResponse = _context.sent;\n              console.log(weatherResponse);\n              item = weatherResponse.daily;\n              calcMaxTemp = item.temperature_2m_max;\n              calcMinTemp = item.temperature_2m_min;\n              calcRainfall = item.rain_sum;\n              calcSnowfall = item.snowfall_sum;\n              calcSunrise = item.sunrise;\n              calcSunset = item.sunset;\n              avgSunrise = calcSunrise[45].slice(-5);\n              avgSunset = calcSunset[45].slice(-5);\n              avgMaxTemp = calcMaxTemp.reduce(function (a, b) {\n                return a + b;\n              }) / calcMaxTemp.length;\n              avgMinTemp = calcMinTemp.reduce(function (a, b) {\n                return a + b;\n              }) / calcMinTemp.length;\n              avgRainfall = calcRainfall.reduce(function (a, b) {\n                return a + b;\n              }) / calcRainfall.length;\n              avgSnowfall = calcSnowfall.reduce(function (a, b) {\n                return a + b;\n              }) / calcSnowfall.length;\n              storeMaxTemp = avgMaxTemp.toFixed(1);\n              storeMinTemp = avgMinTemp.toFixed(1);\n              storeRainfall = avgRainfall.toFixed(2);\n              storeSnowfall = avgSnowfall.toFixed(2);\n              storeWeather = [storeMaxTemp, storeMinTemp, storeRainfall, storeSnowfall, avgSunrise, avgSunset];\n              console.log(storeWeather);\n              setWeatherData(storeWeather.results);\n              console.log(weatherData);\n\n            case 32:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getData() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"w-1/2 m-16 xl:w-2/5 justify-center overflow-y-hidden\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-xl\",\n        children: \"test component for weather Data\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return getData(\"Memphis\");\n        },\n        className: \"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 my-4 mx-4 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded\",\n        children: \"Get Weather Data\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"flex flex-col w-full m-16 xl:w-2/5 justify-center overflow-y-hidden\",\n      children: weatherData && weatherData.length && weatherData.map(function (weatherResult, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n            id: \"rain\",\n            children: [\"Item 1 = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n              className: \"font-bold\",\n              children: weatherData[0]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 75,\n              columnNumber: 36\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n            id: \"snow\",\n            children: [\"Item 2 = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n              className: \"font-bold\",\n              children: weatherData[1]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 76,\n              columnNumber: 36\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n            id: \"other\",\n            children: [\"Item 3 = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n              className: \"font-bold\",\n              children: weatherData[2]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 77,\n              columnNumber: 37\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 13\n          }, _this)]\n        }, i, true, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 3\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(weather, \"Sed6MAt8O/Vj4pC7tA/738gOHVs=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (weather);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvV2VhdGhlci5qc3g/ZTg1YiJdLCJuYW1lcyI6WyJ3ZWF0aGVyIiwidXNlU3RhdGUiLCJnZW9EYXRhIiwic2V0R2VvRGF0YSIsIndlYXRoZXJEYXRhIiwic2V0V2VhdGhlckRhdGEiLCJnZXREYXRhIiwidHJhdmVsTGF0IiwidHJhdmVsTG9uZyIsIndlYXRoZXJEYXRlU3RhcnQiLCJ3ZWF0aGVyRGF0ZUVuZCIsImZldGNoIiwid2VhdGhlclF1ZXJ5IiwianNvbiIsIndlYXRoZXJSZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJpdGVtIiwiZGFpbHkiLCJjYWxjTWF4VGVtcCIsInRlbXBlcmF0dXJlXzJtX21heCIsImNhbGNNaW5UZW1wIiwidGVtcGVyYXR1cmVfMm1fbWluIiwiY2FsY1JhaW5mYWxsIiwicmFpbl9zdW0iLCJjYWxjU25vd2ZhbGwiLCJzbm93ZmFsbF9zdW0iLCJjYWxjU3VucmlzZSIsInN1bnJpc2UiLCJjYWxjU3Vuc2V0Iiwic3Vuc2V0IiwiYXZnU3VucmlzZSIsInNsaWNlIiwiYXZnU3Vuc2V0IiwiYXZnTWF4VGVtcCIsInJlZHVjZSIsImEiLCJiIiwibGVuZ3RoIiwiYXZnTWluVGVtcCIsImF2Z1JhaW5mYWxsIiwiYXZnU25vd2ZhbGwiLCJzdG9yZU1heFRlbXAiLCJ0b0ZpeGVkIiwic3RvcmVNaW5UZW1wIiwic3RvcmVSYWluZmFsbCIsInN0b3JlU25vd2ZhbGwiLCJzdG9yZVdlYXRoZXIiLCJyZXN1bHRzIiwibWFwIiwid2VhdGhlclJlc3VsdCIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFFcEI7QUFGb0Isa0JBR1VDLHNEQUFRLENBQUMsRUFBRCxDQUhsQjtBQUFBLE1BR2JDLE9BSGE7QUFBQSxNQUdKQyxVQUhJLGlCQUd3Qjs7O0FBSHhCLG1CQUlrQkYsc0RBQVEsQ0FB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QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhBO0FBQUEsV0FBVStDLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQU9DLE9BUmdDO0FBSHZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWRTtBQUFBLGtCQURGO0FBNkJELENBbEZEOztHQUFNbkQsTzs7QUFvRldBLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvV2VhdGhlci5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cblxuY29uc3Qgd2VhdGhlciA9ICgpID0+IHtcblxuICAvLyBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKFtdKTsgLy91c2VTdGF0ZSBob29rIHRvIGluaXRpYWxpemUgdGhlIHN0YXRlIHRvIGFuIGVtcHR5IGFycmF5XG4gIGNvbnN0IFtnZW9EYXRhLCBzZXRHZW9EYXRhXSA9IHVzZVN0YXRlKFtdKTsgLy91c2VTdGF0ZSBob29rIHRvIGluaXRpYWxpemUgdGhlIHN0YXRlIHRvIGFuIGVtcHR5IGFycmF5XG4gIGNvbnN0IFt3ZWF0aGVyRGF0YSwgc2V0V2VhdGhlckRhdGFdID0gdXNlU3RhdGUoW10pOyAvL3VzZVN0YXRlIGhvb2sgdG8gaW5pdGlhbGl6ZSB0aGUgc3RhdGUgdG8gYW4gZW1wdHkgYXJyYXlcbiAgXG4gICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHRyYXZlbExhdCA9IFwiMzQuMzM3MzA2XCI7XG4gICAgICBjb25zdCB0cmF2ZWxMb25nID0gXCItMTE4LjY2ODE3NzlcIjtcbiAgICAgIGNvbnN0IHdlYXRoZXJEYXRlU3RhcnQgPSBcIjIwMjAtMTItMDFcIjtcbiAgICAgIGNvbnN0IHdlYXRoZXJEYXRlRW5kID0gXCIyMDIxLTAyLTI4XCI7XG5cbiAgICAgIGNvbnN0IHdlYXRoZXJRdWVyeSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcmNoaXZlLWFwaS5vcGVuLW1ldGVvLmNvbS92MS9lcmE1P2xhdGl0dWRlPVwiICtcbiAgICAgIHRyYXZlbExhdCArXG4gICAgICBcIiZsb25naXR1ZGU9XCIgK1xuICAgICAgdHJhdmVsTG9uZyArXG4gICAgICBcIiZzdGFydF9kYXRlPVwiICtcbiAgICAgIHdlYXRoZXJEYXRlU3RhcnQgK1xuICAgICAgXCImZW5kX2RhdGU9XCIgK1xuICAgICAgd2VhdGhlckRhdGVFbmQgK1xuICAgICAgXCImdGltZXpvbmU9YXV0byZkYWlseT10ZW1wZXJhdHVyZV8ybV9tYXgsdGVtcGVyYXR1cmVfMm1fbWluLHN1bnJpc2Usc3Vuc2V0LHByZWNpcGl0YXRpb25fc3VtLHJhaW5fc3VtLHNub3dmYWxsX3N1bVwiXG4gICAgICApO1xuICAgICAgY29uc3Qgd2VhdGhlclJlc3BvbnNlID0gYXdhaXQgd2VhdGhlclF1ZXJ5Lmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJSZXNwb25zZSk7XG5cbiAgICAgIHZhciBpdGVtID0gd2VhdGhlclJlc3BvbnNlLmRhaWx5O1xuICAgICAgICAgIFxuICAgICAgdmFyIGNhbGNNYXhUZW1wID0gaXRlbS50ZW1wZXJhdHVyZV8ybV9tYXg7XG4gICAgICB2YXIgY2FsY01pblRlbXAgPSBpdGVtLnRlbXBlcmF0dXJlXzJtX21pbjtcbiAgICAgIHZhciBjYWxjUmFpbmZhbGwgPSBpdGVtLnJhaW5fc3VtO1xuICAgICAgdmFyIGNhbGNTbm93ZmFsbCA9IGl0ZW0uc25vd2ZhbGxfc3VtO1xuICAgICAgdmFyIGNhbGNTdW5yaXNlID0gaXRlbS5zdW5yaXNlO1xuICAgICAgdmFyIGNhbGNTdW5zZXQgPSBpdGVtLnN1bnNldDtcblxuICAgICAgdmFyIGF2Z1N1bnJpc2UgPSBjYWxjU3VucmlzZVs0NV0uc2xpY2UoLTUpO1xuICAgICAgdmFyIGF2Z1N1bnNldCA9IGNhbGNTdW5zZXRbNDVdLnNsaWNlKC01KTtcbiAgICAgIHZhciBhdmdNYXhUZW1wID0gY2FsY01heFRlbXAucmVkdWNlKChhLCBiKSA9PiBhICsgYikgLyBjYWxjTWF4VGVtcC5sZW5ndGg7XG4gICAgICB2YXIgYXZnTWluVGVtcCA9IGNhbGNNaW5UZW1wLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpIC8gY2FsY01pblRlbXAubGVuZ3RoO1xuICAgICAgdmFyIGF2Z1JhaW5mYWxsID0gY2FsY1JhaW5mYWxsLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpIC8gY2FsY1JhaW5mYWxsLmxlbmd0aDtcbiAgICAgIHZhciBhdmdTbm93ZmFsbCA9IGNhbGNTbm93ZmFsbC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKSAvIGNhbGNTbm93ZmFsbC5sZW5ndGg7XG4gICAgICBcbiAgICAgIHZhciBzdG9yZU1heFRlbXAgPSBhdmdNYXhUZW1wLnRvRml4ZWQoMSk7XG4gICAgICB2YXIgc3RvcmVNaW5UZW1wID0gYXZnTWluVGVtcC50b0ZpeGVkKDEpO1xuICAgICAgdmFyIHN0b3JlUmFpbmZhbGwgPSBhdmdSYWluZmFsbC50b0ZpeGVkKDIpO1xuICAgICAgdmFyIHN0b3JlU25vd2ZhbGwgPSBhdmdTbm93ZmFsbC50b0ZpeGVkKDIpO1xuICAgICAgXG4gICAgICBjb25zdCBzdG9yZVdlYXRoZXIgPSBbc3RvcmVNYXhUZW1wLCBzdG9yZU1pblRlbXAsIHN0b3JlUmFpbmZhbGwsIHN0b3JlU25vd2ZhbGwsIGF2Z1N1bnJpc2UsIGF2Z1N1bnNldF1cblxuICAgICAgY29uc29sZS5sb2coc3RvcmVXZWF0aGVyKTtcbiAgICAgIHNldFdlYXRoZXJEYXRhKHN0b3JlV2VhdGhlci5yZXN1bHRzKTtcbiAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgICB9O1xuICAgIFxuICByZXR1cm4oXG4gICAgPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIG0tMTYgeGw6dy0yLzUganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3cteS1oaWRkZW5cIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+dGVzdCBjb21wb25lbnQgZm9yIHdlYXRoZXIgRGF0YTwvaDE+XG5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ2V0RGF0YShcIk1lbXBoaXNcIil9ICAgICAgXG4gICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTQwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIG15LTQgbXgtNCBweC00IGJvcmRlci1iLTQgYm9yZGVyLWJsdWUtNzAwIGhvdmVyOmJvcmRlci1ibHVlLTUwMCByb3VuZGVkXCI+XG4gICAgICAgIEdldCBXZWF0aGVyIERhdGFcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgbS0xNiB4bDp3LTIvNSBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy15LWhpZGRlblwiPlxuICAgIFxuICAgIHtcbiAgICB3ZWF0aGVyRGF0YSAmJiB3ZWF0aGVyRGF0YS5sZW5ndGggJiYgd2VhdGhlckRhdGEubWFwKCh3ZWF0aGVyUmVzdWx0LCBpKSA9PntcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgPGg0IGlkPVwicmFpblwiPkl0ZW0gMSA9IDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkJz57d2VhdGhlckRhdGFbMF19PC9zcGFuPjwvaDQ+XG4gICAgICAgICAgICA8aDQgaWQ9XCJzbm93XCI+SXRlbSAyID0gPHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQnPnt3ZWF0aGVyRGF0YVsxXX08L3NwYW4+PC9oND5cbiAgICAgICAgICAgIDxoNCBpZD1cIm90aGVyXCI+SXRlbSAzID0gPHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQnPnt3ZWF0aGVyRGF0YVsyXX08L3NwYW4+PC9oND5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICAgIH0pXG4gICAgfVxuXG4gIDwvZGl2PlxuXG4gICAgPC8+XG4gIClcbn07XG5cbiAgZXhwb3J0IGRlZmF1bHQgd2VhdGhlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Weather.jsx\n");

/***/ })

})
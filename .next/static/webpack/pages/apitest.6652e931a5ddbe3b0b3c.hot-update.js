webpackHotUpdate_N_E("pages/apitest",{

/***/ "./pages/Weather.jsx":
/*!***************************!*\
  !*** ./pages/Weather.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/jarryd/Documents/ActiveUni/Seasonall-NextJS-AnimeJS/pages/Weather.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar weather = function weather() {\n  _s();\n\n  // const [location, setLocation] = useState([]); //useState hook to initialize the state to an empty array\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      weatherData = _useState[0],\n      setWeatherData = _useState[1]; //useState hook to initialize the state to an empty array\n\n\n  var getData = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var travelLat, travelLong, weatherDateStart, weatherDateEnd, weatherQuery, weatherResponse, item, calcMaxTemp, calcMinTemp, calcRainfall, calcSnowfall, calcSunrise, calcSunset, avgSunrise, avgSunset, avgMaxTemp, avgMinTemp, avgRainfall, avgSnowfall, storeMaxTemp, storeMinTemp, storeRainfall, storeSnowfall, storeWeather;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              travelLat = \"34.337306\";\n              travelLong = \"-118.6681779\";\n              weatherDateStart = \"2020-12-01\";\n              weatherDateEnd = \"2021-02-28\";\n              _context.next = 6;\n              return fetch(\"https://archive-api.open-meteo.com/v1/era5?latitude=\" + travelLat + \"&longitude=\" + travelLong + \"&start_date=\" + weatherDateStart + \"&end_date=\" + weatherDateEnd + \"&timezone=auto&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,snowfall_sum\");\n\n            case 6:\n              weatherQuery = _context.sent;\n              _context.next = 9;\n              return weatherQuery.json();\n\n            case 9:\n              weatherResponse = _context.sent;\n              console.log(weatherResponse);\n              item = weatherResponse.daily;\n              calcMaxTemp = item.temperature_2m_max;\n              calcMinTemp = item.temperature_2m_min;\n              calcRainfall = item.rain_sum;\n              calcSnowfall = item.snowfall_sum;\n              calcSunrise = item.sunrise;\n              calcSunset = item.sunset;\n              avgSunrise = calcSunrise[45].slice(-5);\n              avgSunset = calcSunset[45].slice(-5);\n              avgMaxTemp = calcMaxTemp.reduce(function (a, b) {\n                return a + b;\n              }) / calcMaxTemp.length;\n              avgMinTemp = calcMinTemp.reduce(function (a, b) {\n                return a + b;\n              }) / calcMinTemp.length;\n              avgRainfall = calcRainfall.reduce(function (a, b) {\n                return a + b;\n              }) / calcRainfall.length;\n              avgSnowfall = calcSnowfall.reduce(function (a, b) {\n                return a + b;\n              }) / calcSnowfall.length;\n              storeMaxTemp = avgMaxTemp.toFixed(1);\n              storeMinTemp = avgMinTemp.toFixed(1);\n              storeRainfall = avgRainfall.toFixed(2);\n              storeSnowfall = avgSnowfall.toFixed(2);\n\n              storeWeather = function storeWeather() {\n                var data = [{\n                  maxTemp: storeMaxTemp\n                }, {\n                  minTemp: storeMinTemp\n                }, {\n                  rainfall: storeRainfall\n                }, {\n                  snowfall: storeSnowfall\n                }, {\n                  sunrise: avgSunrise\n                }, {\n                  sunset: avgSunset\n                }];\n                return data;\n              };\n\n              console.log(storeWeather);\n              setWeatherData(storeWeather);\n              console.log(storeWeather);\n\n            case 32:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getData() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"w-1/2 m-16 xl:w-2/5 justify-center overflow-y-hidden\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-xl\",\n        children: \"test component for weather Data\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return getData(\"Memphis\");\n        },\n        className: \"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 my-4 mx-4 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded\",\n        children: \"Get Weather Data\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"flex flex-col w-full m-16 xl:w-2/5 justify-center overflow-y-hidden\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 3\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(weather, \"uPYC6klwQCjqosAFCgeByFfMAQs=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (weather);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvV2VhdGhlci5qc3g/ZTg1YiJdLCJuYW1lcyI6WyJ3ZWF0aGVyIiwidXNlU3RhdGUiLCJ3ZWF0aGVyRGF0YSIsInNldFdlYXRoZXJEYXRhIiwiZ2V0RGF0YSIsInRyYXZlbExhdCIsInRyYXZlbExvbmciLCJ3ZWF0aGVyRGF0ZVN0YXJ0Iiwid2VhdGhlckRhdGVFbmQiLCJmZXRjaCIsIndlYXRoZXJRdWVyeSIsImpzb24iLCJ3ZWF0aGVyUmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiaXRlbSIsImRhaWx5IiwiY2FsY01heFRlbXAiLCJ0ZW1wZXJhdHVyZV8ybV9tYXgiLCJjYWxjTWluVGVtcCIsInRlbXBlcmF0dXJlXzJtX21pbiIsImNhbGNSYWluZmFsbCIsInJhaW5fc3VtIiwiY2FsY1Nub3dmYWxsIiwic25vd2ZhbGxfc3VtIiwiY2FsY1N1bnJpc2UiLCJzdW5yaXNlIiwiY2FsY1N1bnNldCIsInN1bnNldCIsImF2Z1N1bnJpc2UiLCJzbGljZSIsImF2Z1N1bnNldCIsImF2Z01heFRlbXAiLCJyZWR1Y2UiLCJhIiwiYiIsImxlbmd0aCIsImF2Z01pblRlbXAiLCJhdmdSYWluZmFsbCIsImF2Z1Nub3dmYWxsIiwic3RvcmVNYXhUZW1wIiwidG9GaXhlZCIsInN0b3JlTWluVGVtcCIsInN0b3JlUmFpbmZhbGwiLCJzdG9yZVNub3dmYWxsIiwic3RvcmVXZWF0aGVyIiwiZGF0YSIsIm1heFRlbXAiLCJtaW5UZW1wIiwicmFpbmZhbGwiLCJzbm93ZmFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUVwQjtBQUZvQixrQkFHa0JDLHNEQUFRLENBQUMsRUFBRCxDQUgxQjtBQUFBLE1BR2JDLFdBSGE7QUFBQSxNQUdBQyxjQUhBLGlCQUdnQzs7O0FBRWxELE1BQU1DLE9BQU87QUFBQSxnTUFBRztBQUFB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QUFPZSxJQUFQO0FBQWEsZUFsREQ7O0FBb0RaakMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZK0IsWUFBWjtBQUNBMUMsNEJBQWMsQ0FBQzBDLFlBQUQsQ0FBZDtBQUNGaEMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZK0IsWUFBWjs7QUF0RGM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUHpDLE9BQU87QUFBQTtBQUFBO0FBQUEsS0FBYjs7QUEyREYsc0JBQ0U7QUFBQSw0QkFDQTtBQUFLLGVBQVMsRUFBQyxzREFBZjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFHRTtBQUFRLGVBQU8sRUFBRTtBQUFBLGlCQUFNQSxPQUFPLENBQUMsU0FBRCxDQUFiO0FBQUEsU0FBakI7QUFDQSxpQkFBUyxFQUFDLGlJQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsZUFVRjtBQUFLLGVBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWRTtBQUFBLGtCQURGO0FBK0NELENBL0dEOztHQUFNSixPOztBQWlIV0Esc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9XZWF0aGVyLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuXG5jb25zdCB3ZWF0aGVyID0gKCkgPT4ge1xuXG4gIC8vIGNvbnN0IFtsb2NhdGlvbiwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGUoW10pOyAvL3VzZVN0YXRlIGhvb2sgdG8gaW5pdGlhbGl6ZSB0aGUgc3RhdGUgdG8gYW4gZW1wdHkgYXJyYXlcbiAgY29uc3QgW3dlYXRoZXJEYXRhLCBzZXRXZWF0aGVyRGF0YV0gPSB1c2VTdGF0ZShbXSk7IC8vdXNlU3RhdGUgaG9vayB0byBpbml0aWFsaXplIHRoZSBzdGF0ZSB0byBhbiBlbXB0eSBhcnJheVxuICBcbiAgICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgdHJhdmVsTGF0ID0gXCIzNC4zMzczMDZcIjtcbiAgICAgIGNvbnN0IHRyYXZlbExvbmcgPSBcIi0xMTguNjY4MTc3OVwiO1xuICAgICAgY29uc3Qgd2VhdGhlckRhdGVTdGFydCA9IFwiMjAyMC0xMi0wMVwiO1xuICAgICAgY29uc3Qgd2VhdGhlckRhdGVFbmQgPSBcIjIwMjEtMDItMjhcIjtcblxuICAgICAgY29uc3Qgd2VhdGhlclF1ZXJ5ID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FyY2hpdmUtYXBpLm9wZW4tbWV0ZW8uY29tL3YxL2VyYTU/bGF0aXR1ZGU9XCIgK1xuICAgICAgdHJhdmVsTGF0ICtcbiAgICAgIFwiJmxvbmdpdHVkZT1cIiArXG4gICAgICB0cmF2ZWxMb25nICtcbiAgICAgIFwiJnN0YXJ0X2RhdGU9XCIgK1xuICAgICAgd2VhdGhlckRhdGVTdGFydCArXG4gICAgICBcIiZlbmRfZGF0ZT1cIiArXG4gICAgICB3ZWF0aGVyRGF0ZUVuZCArXG4gICAgICBcIiZ0aW1lem9uZT1hdXRvJmRhaWx5PXRlbXBlcmF0dXJlXzJtX21heCx0ZW1wZXJhdHVyZV8ybV9taW4sc3VucmlzZSxzdW5zZXQscHJlY2lwaXRhdGlvbl9zdW0scmFpbl9zdW0sc25vd2ZhbGxfc3VtXCJcbiAgICAgICk7XG4gICAgICBjb25zdCB3ZWF0aGVyUmVzcG9uc2UgPSBhd2FpdCB3ZWF0aGVyUXVlcnkuanNvbigpO1xuICAgICAgY29uc29sZS5sb2cod2VhdGhlclJlc3BvbnNlKTtcblxuXG4gICAgICB2YXIgaXRlbSA9IHdlYXRoZXJSZXNwb25zZS5kYWlseTtcbiAgICAgICAgICBcbiAgICAgIHZhciBjYWxjTWF4VGVtcCA9IGl0ZW0udGVtcGVyYXR1cmVfMm1fbWF4O1xuICAgICAgdmFyIGNhbGNNaW5UZW1wID0gaXRlbS50ZW1wZXJhdHVyZV8ybV9taW47XG4gICAgICB2YXIgY2FsY1JhaW5mYWxsID0gaXRlbS5yYWluX3N1bTtcbiAgICAgIHZhciBjYWxjU25vd2ZhbGwgPSBpdGVtLnNub3dmYWxsX3N1bTtcbiAgICAgIHZhciBjYWxjU3VucmlzZSA9IGl0ZW0uc3VucmlzZTtcbiAgICAgIHZhciBjYWxjU3Vuc2V0ID0gaXRlbS5zdW5zZXQ7XG5cbiAgICAgIHZhciBhdmdTdW5yaXNlID0gY2FsY1N1bnJpc2VbNDVdLnNsaWNlKC01KTtcbiAgICAgIHZhciBhdmdTdW5zZXQgPSBjYWxjU3Vuc2V0WzQ1XS5zbGljZSgtNSk7XG4gICAgICB2YXIgYXZnTWF4VGVtcCA9IGNhbGNNYXhUZW1wLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpIC8gY2FsY01heFRlbXAubGVuZ3RoO1xuICAgICAgdmFyIGF2Z01pblRlbXAgPSBjYWxjTWluVGVtcC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKSAvIGNhbGNNaW5UZW1wLmxlbmd0aDtcbiAgICAgIHZhciBhdmdSYWluZmFsbCA9IGNhbGNSYWluZmFsbC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKSAvIGNhbGNSYWluZmFsbC5sZW5ndGg7XG4gICAgICB2YXIgYXZnU25vd2ZhbGwgPSBjYWxjU25vd2ZhbGwucmVkdWNlKChhLCBiKSA9PiBhICsgYikgLyBjYWxjU25vd2ZhbGwubGVuZ3RoO1xuICAgICAgXG4gICAgICB2YXIgc3RvcmVNYXhUZW1wID0gYXZnTWF4VGVtcC50b0ZpeGVkKDEpO1xuICAgICAgdmFyIHN0b3JlTWluVGVtcCA9IGF2Z01pblRlbXAudG9GaXhlZCgxKTtcbiAgICAgIHZhciBzdG9yZVJhaW5mYWxsID0gYXZnUmFpbmZhbGwudG9GaXhlZCgyKTtcbiAgICAgIHZhciBzdG9yZVNub3dmYWxsID0gYXZnU25vd2ZhbGwudG9GaXhlZCgyKTtcbiAgICAgIFxuICAgICAgICBjb25zdCBzdG9yZVdlYXRoZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXG4gICAgICAgIHttYXhUZW1wOiBzdG9yZU1heFRlbXB9LCBcbiAgICAgICAge21pblRlbXA6IHN0b3JlTWluVGVtcH0sIFxuICAgICAgICB7cmFpbmZhbGw6IHN0b3JlUmFpbmZhbGx9LCBcbiAgICAgICAge3Nub3dmYWxsOiBzdG9yZVNub3dmYWxsfSwgXG4gICAgICAgIHtzdW5yaXNlOiBhdmdTdW5yaXNlfSwgXG4gICAgICAgIHtzdW5zZXQ6IGF2Z1N1bnNldH0sXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiBkYXRhO31cbiAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhzdG9yZVdlYXRoZXIpO1xuICAgICAgICBzZXRXZWF0aGVyRGF0YShzdG9yZVdlYXRoZXIpO1xuICAgICAgY29uc29sZS5sb2coc3RvcmVXZWF0aGVyKTtcblxuICAgIFxuICAgIH07XG4gICAgXG4gIHJldHVybihcbiAgICA8PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzIgbS0xNiB4bDp3LTIvNSBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy15LWhpZGRlblwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGxcIj50ZXN0IGNvbXBvbmVudCBmb3Igd2VhdGhlciBEYXRhPC9oMT5cblxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnZXREYXRhKFwiTWVtcGhpc1wiKX0gICAgICBcbiAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNDAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgbXktNCBteC00IHB4LTQgYm9yZGVyLWItNCBib3JkZXItYmx1ZS03MDAgaG92ZXI6Ym9yZGVyLWJsdWUtNTAwIHJvdW5kZWRcIj5cbiAgICAgICAgR2V0IFdlYXRoZXIgRGF0YVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbCBtLTE2IHhsOnctMi81IGp1c3RpZnktY2VudGVyIG92ZXJmbG93LXktaGlkZGVuXCI+XG4gICAgXG5cbiAgey8qIHtcbiAgICB3ZWF0aGVyRGF0YSAmJiB3ZWF0aGVyRGF0YS5sZW5ndGggJiYgT2JqZWN0LmtleXMod2VhdGhlckRhdGEpLm1hcChvYmosIGkpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgaWQgaXM6IHt3ZWF0aGVyRGF0YVtvYmpdLmlkfSA7XG4gICAgICAgICAgICAgICAgbmFtZSBpczoge3dlYXRoZXJEYXRhW29ial0ubmFtZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfSlcbn0gKi99XG4gICAgXG5cblxuICAgIHsvKiB7XG4gICAgd2VhdGhlckRhdGEgJiYgd2VhdGhlckRhdGEubGVuZ3RoICYmIHdlYXRoZXJEYXRhLm1hcCgod2VhdGhlckRhdGEpID0+IDxsaT57d2VhdGhlckRhdGF9PC9saT4pXG5cbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgPGg0IGlkPVwibWF4VGVtcFwiPk1heCBUZW1wID0gPHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQnPnt3ZWF0aGVyRGF0YS5tYXhUZW1wfTwvc3Bhbj48L2g0PlxuICAgICAgICAgICAgPGg0IGlkPVwibWluVGVtcFwiPk1pbiBUZW1wID0gPHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQnPnt3ZWF0aGVyRGF0YS5taW5UZW1wfTwvc3Bhbj48L2g0PlxuICAgICAgICAgICAgPGg0IGlkPVwicmFpbmZhbGxcIj5SYWluZmFsbCA9IDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkJz57d2VhdGhlckRhdGEucmFpbmZhbGx9PC9zcGFuPjwvaDQ+XG4gICAgICAgICAgICA8aDQgaWQ9XCJzbm93ZmFsbFwiPlNub3dmYWxsID0gPHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQnPnt3ZWF0aGVyRGF0YS5zbm93ZmFsbH08L3NwYW4+PC9oND5cbiAgICAgICAgICAgIDxoNCBpZD1cInN1bnJpc2VcIj5TdW5yaXNlID0gPHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQnPnt3ZWF0aGVyRGF0YS5zdW5yaXNlfTwvc3Bhbj48L2g0PlxuICAgICAgICAgICAgPGg0IGlkPVwic3Vuc2V0XCI+U3Vuc2V0ID0gPHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQnPnt3ZWF0aGVyRGF0YS5zdW5zZXR9PC9zcGFuPjwvaDQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX0pXG4gICAgICAgXG4gICAgfSAqL31cblxuICA8L2Rpdj5cblxuICAgIDwvPlxuICApXG59O1xuXG4gIGV4cG9ydCBkZWZhdWx0IHdlYXRoZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Weather.jsx\n");

/***/ })

})
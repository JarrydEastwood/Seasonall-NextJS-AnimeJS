webpackHotUpdate_N_E("pages/apitest",{

/***/ "./pages/Weather.jsx":
/*!***************************!*\
  !*** ./pages/Weather.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/jarryd/Documents/ActiveUni/Seasonall-NextJS-AnimeJS/pages/Weather.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar weather = function weather() {\n  _s();\n\n  // const [location, setLocation] = useState([]); //useState hook to initialize the state to an empty array\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      weatherData = _useState[0],\n      setWeatherData = _useState[1];\n\n  var getData = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var travelLat, travelLong, weatherDateStart, weatherDateEnd, weatherQuery, weatherResponse, item, calcMaxTemp, calcMinTemp, calcRainfall, calcSnowfall, calcSunrise, calcSunset, avgSunrise, avgSunset, avgMaxTemp, avgMinTemp, avgRainfall, avgSnowfall, storeMaxTemp, storeMinTemp, storeRainfall, storeSnowfall;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              travelLat = \"34.337306\";\n              travelLong = \"-118.6681779\";\n              weatherDateStart = \"2020-12-01\";\n              weatherDateEnd = \"2021-02-28\";\n              _context.next = 6;\n              return fetch(\"https://archive-api.open-meteo.com/v1/era5?latitude=\" + travelLat + \"&longitude=\" + travelLong + \"&start_date=\" + weatherDateStart + \"&end_date=\" + weatherDateEnd + \"&timezone=auto&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,snowfall_sum\");\n\n            case 6:\n              weatherQuery = _context.sent;\n              _context.next = 9;\n              return weatherQuery.json();\n\n            case 9:\n              weatherResponse = _context.sent;\n              console.log(\"This is weather Response\");\n              console.log(weatherResponse);\n              item = weatherResponse.daily;\n              calcMaxTemp = item.temperature_2m_max;\n              calcMinTemp = item.temperature_2m_min;\n              calcRainfall = item.rain_sum;\n              calcSnowfall = item.snowfall_sum;\n              calcSunrise = item.sunrise;\n              calcSunset = item.sunset;\n              console.log(calcMinTemp);\n              console.log(calcMaxTemp);\n              console.log(calcRainfall);\n              console.log(calcSnowfall);\n              console.log(calcSunrise);\n              console.log(calcSunset);\n              avgSunrise = calcSunrise[45].slice(-5);\n              avgSunset = calcSunset[45].slice(-5);\n              avgMaxTemp = calcMaxTemp.reduce(function (a, b) {\n                return a + b;\n              }) / calcMaxTemp.length;\n              avgMinTemp = calcMinTemp.reduce(function (a, b) {\n                return a + b;\n              }) / calcMinTemp.length;\n              avgRainfall = calcRainfall.reduce(function (a, b) {\n                return a + b;\n              }) / calcRainfall.length;\n              avgSnowfall = calcSnowfall.reduce(function (a, b) {\n                return a + b;\n              }) / calcSnowfall.length;\n              storeMaxTemp = avgMaxTemp.toFixed(1);\n              storeMinTemp = avgMinTemp.toFixed(1);\n              storeRainfall = avgRainfall.toFixed(2);\n              storeSnowfall = avgSnowfall.toFixed(2);\n              setWeatherData([storeMaxTemp, storeMinTemp, storeRainfall, storeSnowfall, avgSunrise, avgSunset]);\n\n              (function () {\n                console.log(\"this is the weatherData\");\n                console.log(weatherData);\n              });\n\n            case 37:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getData() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"w-1/2 m-16 xl:w-2/5 justify-center overflow-y-hidden\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-xl\",\n        children: \"test component for weather Data\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return getData(\"Memphis\");\n        },\n        className: \"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 my-4 mx-4 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded\",\n        children: \"Get Weather Data\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false);\n};\n\n_s(weather, \"uPYC6klwQCjqosAFCgeByFfMAQs=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (weather);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvV2VhdGhlci5qc3g/ZTg1YiJdLCJuYW1lcyI6WyJ3ZWF0aGVyIiwidXNlU3RhdGUiLCJ3ZWF0aGVyRGF0YSIsInNldFdlYXRoZXJEYXRhIiwiZ2V0RGF0YSIsInRyYXZlbExhdCIsInRyYXZlbExvbmciLCJ3ZWF0aGVyRGF0ZVN0YXJ0Iiwid2VhdGhlckRhdGVFbmQiLCJmZXRjaCIsIndlYXRoZXJRdWVyeSIsImpzb24iLCJ3ZWF0aGVyUmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiaXRlbSIsImRhaWx5IiwiY2FsY01heFRlbXAiLCJ0ZW1wZXJhdHVyZV8ybV9tYXgiLCJjYWxjTWluVGVtcCIsInRlbXBlcmF0dXJlXzJtX21pbiIsImNhbGNSYWluZmFsbCIsInJhaW5fc3VtIiwiY2FsY1Nub3dmYWxsIiwic25vd2ZhbGxfc3VtIiwiY2FsY1N1bnJpc2UiLCJzdW5yaXNlIiwiY2FsY1N1bnNldCIsInN1bnNldCIsImF2Z1N1bnJpc2UiLCJzbGljZSIsImF2Z1N1bnNldCIsImF2Z01heFRlbXAiLCJyZWR1Y2UiLCJhIiwiYiIsImxlbmd0aCIsImF2Z01pblRlbXAiLCJhdmdSYWluZmFsbCIsImF2Z1Nub3dmYWxsIiwic3RvcmVNYXhUZW1wIiwidG9GaXhlZCIsInN0b3JlTWluVGVtcCIsInN0b3JlUmFpbmZhbGwiLCJzdG9yZVNub3dmYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUdBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFFcEI7QUFGb0Isa0JBR2tCQyxzREFBUSxDQUFDLEVBQUQsQ0FIMUI7QUFBQSxNQUdiQyxXQUhhO0FBQUEsTUFHQUMsY0FIQTs7QUFLcEIsTUFBTUMsT0FBTztBQUFBLGdNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNSQyx1QkFEUSxHQUNJLFdBREo7QUFFUkMsd0JBRlEsR0FFSyxjQUZMO0FBR1JDLDhCQUhRLEdB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Q0psQix1QkFBTyxDQUFDQyxHQUFSLENBQVkseUJBQVo7QUFDQUQsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZWixXQUFaO0FBQ0QsZUFIRDs7QUFuRFk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUEUsT0FBTztBQUFBO0FBQUE7QUFBQSxLQUFiOztBQXlEQSxzQkFDRTtBQUFBLDJCQUNBO0FBQUssZUFBUyxFQUFDLHNEQUFmO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUdFO0FBQVEsZUFBTyxFQUFFO0FBQUEsaUJBQU1BLE9BQU8sQ0FBQyxTQUFELENBQWI7QUFBQSxTQUFqQjtBQUNBLGlCQUFTLEVBQUMsaUlBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxtQkFERjtBQTJCRCxDQXpGRDs7R0FBTUosTzs7QUEyRldBLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvV2VhdGhlci5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuXG5jb25zdCB3ZWF0aGVyID0gKCkgPT4ge1xuXG4gIC8vIGNvbnN0IFtsb2NhdGlvbiwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGUoW10pOyAvL3VzZVN0YXRlIGhvb2sgdG8gaW5pdGlhbGl6ZSB0aGUgc3RhdGUgdG8gYW4gZW1wdHkgYXJyYXlcbiAgY29uc3QgW3dlYXRoZXJEYXRhLCBzZXRXZWF0aGVyRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIFxuICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHRyYXZlbExhdCA9IFwiMzQuMzM3MzA2XCI7XG4gICAgY29uc3QgdHJhdmVsTG9uZyA9IFwiLTExOC42NjgxNzc5XCI7XG4gICAgY29uc3Qgd2VhdGhlckRhdGVTdGFydCA9IFwiMjAyMC0xMi0wMVwiO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRlRW5kID0gXCIyMDIxLTAyLTI4XCI7XG5cbiAgICBjb25zdCB3ZWF0aGVyUXVlcnkgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXJjaGl2ZS1hcGkub3Blbi1tZXRlby5jb20vdjEvZXJhNT9sYXRpdHVkZT1cIiArXG4gICAgdHJhdmVsTGF0ICtcbiAgICBcIiZsb25naXR1ZGU9XCIgK1xuICAgIHRyYXZlbExvbmcgK1xuICAgIFwiJnN0YXJ0X2RhdGU9XCIgK1xuICAgIHdlYXRoZXJEYXRlU3RhcnQgK1xuICAgIFwiJmVuZF9kYXRlPVwiICtcbiAgICB3ZWF0aGVyRGF0ZUVuZCArXG4gICAgXCImdGltZXpvbmU9YXV0byZkYWlseT10ZW1wZXJhdHVyZV8ybV9tYXgsdGVtcGVyYXR1cmVfMm1fbWluLHN1bnJpc2Usc3Vuc2V0LHByZWNpcGl0YXRpb25fc3VtLHJhaW5fc3VtLHNub3dmYWxsX3N1bVwiXG4gICAgKTtcbiAgICBjb25zdCB3ZWF0aGVyUmVzcG9uc2UgPSBhd2FpdCB3ZWF0aGVyUXVlcnkuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKFwiVGhpcyBpcyB3ZWF0aGVyIFJlc3BvbnNlXCIpO1xuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJSZXNwb25zZSk7XG5cbiAgICB2YXIgaXRlbSA9IHdlYXRoZXJSZXNwb25zZS5kYWlseTtcbiAgICAgICAgXG4gICAgdmFyIGNhbGNNYXhUZW1wID0gaXRlbS50ZW1wZXJhdHVyZV8ybV9tYXg7XG4gICAgdmFyIGNhbGNNaW5UZW1wID0gaXRlbS50ZW1wZXJhdHVyZV8ybV9taW47XG4gICAgdmFyIGNhbGNSYWluZmFsbCA9IGl0ZW0ucmFpbl9zdW07XG4gICAgdmFyIGNhbGNTbm93ZmFsbCA9IGl0ZW0uc25vd2ZhbGxfc3VtO1xuICAgIHZhciBjYWxjU3VucmlzZSA9IGl0ZW0uc3VucmlzZTtcbiAgICB2YXIgY2FsY1N1bnNldCA9IGl0ZW0uc3Vuc2V0O1xuXG4gICAgY29uc29sZS5sb2coY2FsY01pblRlbXApO1xuICAgIGNvbnNvbGUubG9nKGNhbGNNYXhUZW1wKTtcbiAgICBjb25zb2xlLmxvZyhjYWxjUmFpbmZhbGwpO1xuICAgIGNvbnNvbGUubG9nKGNhbGNTbm93ZmFsbCk7XG4gICAgY29uc29sZS5sb2coY2FsY1N1bnJpc2UpO1xuICAgIGNvbnNvbGUubG9nKGNhbGNTdW5zZXQpO1xuXG4gICAgdmFyIGF2Z1N1bnJpc2UgPSBjYWxjU3VucmlzZVs0NV0uc2xpY2UoLTUpO1xuICAgIHZhciBhdmdTdW5zZXQgPSBjYWxjU3Vuc2V0WzQ1XS5zbGljZSgtNSk7XG4gICAgdmFyIGF2Z01heFRlbXAgPSBjYWxjTWF4VGVtcC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKSAvIGNhbGNNYXhUZW1wLmxlbmd0aDtcbiAgICB2YXIgYXZnTWluVGVtcCA9IGNhbGNNaW5UZW1wLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpIC8gY2FsY01pblRlbXAubGVuZ3RoO1xuICAgIHZhciBhdmdSYWluZmFsbCA9IGNhbGNSYWluZmFsbC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKSAvIGNhbGNSYWluZmFsbC5sZW5ndGg7XG4gICAgdmFyIGF2Z1Nub3dmYWxsID0gY2FsY1Nub3dmYWxsLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpIC8gY2FsY1Nub3dmYWxsLmxlbmd0aDtcbiAgICBcbiAgICB2YXIgc3RvcmVNYXhUZW1wID0gYXZnTWF4VGVtcC50b0ZpeGVkKDEpO1xuICAgIHZhciBzdG9yZU1pblRlbXAgPSBhdmdNaW5UZW1wLnRvRml4ZWQoMSk7XG4gICAgdmFyIHN0b3JlUmFpbmZhbGwgPSBhdmdSYWluZmFsbC50b0ZpeGVkKDIpO1xuICAgIHZhciBzdG9yZVNub3dmYWxsID0gYXZnU25vd2ZhbGwudG9GaXhlZCgyKTtcbiAgXG4gICAgXG4gICAgICBzZXRXZWF0aGVyRGF0YShbc3RvcmVNYXhUZW1wLCBzdG9yZU1pblRlbXAsIHN0b3JlUmFpbmZhbGwsIHN0b3JlU25vd2ZhbGwsIGF2Z1N1bnJpc2UsIGF2Z1N1bnNldF0pO1xuICAgICAgXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgd2VhdGhlckRhdGFcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgICAgIH1cbiAgICB9O1xuICBcbiAgcmV0dXJuKFxuICAgIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiBtLTE2IHhsOnctMi81IGp1c3RpZnktY2VudGVyIG92ZXJmbG93LXktaGlkZGVuXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bFwiPnRlc3QgY29tcG9uZW50IGZvciB3ZWF0aGVyIERhdGE8L2gxPlxuXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdldERhdGEoXCJNZW1waGlzXCIpfSAgICAgIFxuICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS00MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBteS00IG14LTQgcHgtNCBib3JkZXItYi00IGJvcmRlci1ibHVlLTcwMCBob3Zlcjpib3JkZXItYmx1ZS01MDAgcm91bmRlZFwiPlxuICAgICAgICBHZXQgV2VhdGhlciBEYXRhXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuICB7LyogPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbCBtLTE2IHhsOnctMi81IGp1c3RpZnktY2VudGVyIG92ZXJmbG93LXktaGlkZGVuXCI+XG4gICAgXG5cbiAgICAgICAgICAgIDxoNCBpZD1cIm1heFRlbXBcIj5NYXggVGVtcCA9IDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkJz57d2VhdGhlckRhdGEubWF4VGVtcH08L3NwYW4+PC9oND5cbiAgICAgICAgICAgIDxoNCBpZD1cIm1pblRlbXBcIj5NaW4gVGVtcCA9IDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkJz57d2VhdGhlckRhdGEubWluVGVtcH08L3NwYW4+PC9oND5cbiAgICAgICAgICAgIDxoNCBpZD1cInJhaW5mYWxsXCI+UmFpbmZhbGwgPSA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+e3dlYXRoZXJEYXRhLnJhaW5mYWxsfTwvc3Bhbj48L2g0PlxuICAgICAgICAgICAgPGg0IGlkPVwic25vd2ZhbGxcIj5Tbm93ZmFsbCA9IDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkJz57d2VhdGhlckRhdGEuc25vd2ZhbGx9PC9zcGFuPjwvaDQ+XG4gICAgICAgICAgICA8aDQgaWQ9XCJzdW5yaXNlXCI+U3VucmlzZSA9IDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkJz57d2VhdGhlckRhdGEuc3VucmlzZX08L3NwYW4+PC9oND5cbiAgICAgICAgICAgIDxoNCBpZD1cInN1bnNldFwiPlN1bnNldCA9IDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkJz57d2VhdGhlckRhdGEuc3Vuc2V0fTwvc3Bhbj48L2g0PlxuICAgIFxuLy8gVGhpcyBwYXJ0IGRvZXNudCB3b3JrIHlldC4uLlxuXG4gIDwvZGl2PiAqL31cblxuICAgIDwvPlxuICApXG59O1xuXG4gIGV4cG9ydCBkZWZhdWx0IHdlYXRoZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Weather.jsx\n");

/***/ })

})
webpackHotUpdate_N_E("pages/apitest",{

/***/ "./pages/Weather.jsx":
/*!***************************!*\
  !*** ./pages/Weather.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ \"./pages/data.jsx\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/jarryd/Documents/ActiveUni/Seasonall-NextJS-AnimeJS/pages/Weather.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar weather = function weather() {\n  _s();\n\n  // const [location, setLocation] = useState([]); //useState hook to initialize the state to an empty array\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      newSunrise = _useState[0],\n      setSunrise = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      newSunset = _useState2[0],\n      setSunset = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      newMaxTemp = _useState3[0],\n      setMaxTemp = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      newMinTemp = _useState4[0],\n      setMinTem = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      newRainfall = _useState5[0],\n      setRainfall = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      newSnowfall = _useState6[0],\n      setstoreSnowfall = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      datacheck = _useState7[0],\n      setDataCheck = _useState7[1];\n\n  var getData = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {\n      var travelLocation, travelLat, travelLong, weatherDateStart, weatherDateEnd, weatherQuery, weatherResponse, item, calcMaxTemp, calcMinTemp, calcRainfall, calcSnowfall, calcSunrise, calcSunset, avgMaxTemp, avgMinTemp, avgRainfall, avgSnowfall, avgSunrise, avgSunset, storeMaxTemp, storeMinTemp, storeRainfall, storeSnowfall;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              travelLocation = id;\n              console.log(\"This is travelLocation\" + travelLocation);\n              travelLat = \"34.337306\";\n              travelLong = \"-118.6681779\";\n              weatherDateStart = \"2020-12-01\";\n              weatherDateEnd = \"2021-02-28\";\n              _context.next = 8;\n              return fetch(\"https://archive-api.open-meteo.com/v1/era5?latitude=\" + travelLat + \"&longitude=\" + travelLong + \"&start_date=\" + weatherDateStart + \"&end_date=\" + weatherDateEnd + \"&timezone=auto&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,snowfall_sum\");\n\n            case 8:\n              weatherQuery = _context.sent;\n              _context.next = 11;\n              return weatherQuery.json();\n\n            case 11:\n              weatherResponse = _context.sent;\n              console.log(\"This is weather Response\");\n              console.log(weatherResponse);\n              item = weatherResponse.daily;\n              calcMaxTemp = item.temperature_2m_max;\n              calcMinTemp = item.temperature_2m_min;\n              calcRainfall = item.rain_sum;\n              calcSnowfall = item.snowfall_sum;\n              calcSunrise = item.sunrise;\n              calcSunset = item.sunset;\n              avgMaxTemp = calcMaxTemp.reduce(function (a, b) {\n                return a + b;\n              }) / calcMaxTemp.length;\n              avgMinTemp = calcMinTemp.reduce(function (a, b) {\n                return a + b;\n              }) / calcMinTemp.length;\n              avgRainfall = calcRainfall.reduce(function (a, b) {\n                return a + b;\n              }) / calcRainfall.length;\n              avgSnowfall = calcSnowfall.reduce(function (a, b) {\n                return a + b;\n              }) / calcSnowfall.length;\n              avgSunrise = calcSunrise[45].slice(-5);\n              avgSunset = calcSunset[45].slice(-5);\n              storeMaxTemp = avgMaxTemp.toFixed(1);\n              storeMinTemp = avgMinTemp.toFixed(1);\n              storeRainfall = avgRainfall.toFixed(2);\n              storeSnowfall = avgSnowfall.toFixed(2);\n              setSunrise(avgSunrise);\n              setSunset(avgSunset);\n              setMaxTemp(storeMaxTemp);\n              setMinTem(storeMinTemp);\n              setRainfall(storeRainfall);\n              setstoreSnowfall(storeSnowfall);\n              setDataCheck(true);\n\n            case 38:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getData(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"w-1/2 m-16 xl:w-2/5 justify-center overflow-y-hidden\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-xl\",\n        children: \"test component for weather Data\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return getData(1);\n        },\n        className: \"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 my-4 mx-4 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded\",\n        children: \"Get Havana Weather Data\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 5\n    }, _this), datacheck ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n        children: \" This shouldnt show until there is data \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n        children: [\"Sunrise = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n          className: \"font-bold\",\n          children: newSunrise\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 27\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n        children: [\"Sunset = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n          className: \"font-bold\",\n          children: newSunset\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 26\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n        children: [\"MaxTemp = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n          className: \"font-bold\",\n          children: newMaxTemp\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 27\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n        children: [\"MinTemp = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n          className: \"font-bold\",\n          children: newMinTemp\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 27\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n        children: [\"Rainfall = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n          className: \"font-bold\",\n          children: newRainfall\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 28\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n        children: [\"Snowfall = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n          className: \"font-bold\",\n          children: newSnowfall\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 28\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, _this) : '']\n  }, void 0, true);\n};\n\n_s(weather, \"amaLVsa7z12+XiT4sah1VTBPQJY=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (weather);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvV2VhdGhlci5qc3g/ZTg1YiJdLCJuYW1lcyI6WyJ3ZWF0aGVyIiwidXNlU3RhdGUiLCJuZXdTdW5yaXNlIiwic2V0U3VucmlzZSIsIm5ld1N1bnNldCIsInNldFN1bnNldCIsIm5ld01heFRlbXAiLCJzZXRNYXhUZW1wIiwibmV3TWluVGVtcCIsInNldE1pblRlbSIsIm5ld1JhaW5mYWxsIiwic2V0UmFpbmZhbGwiLCJuZXdTbm93ZmFsbCIsInNldHN0b3JlU25vd2ZhbGwiLCJkYXRhY2hlY2siLCJzZXREYXRhQ2hlY2siLCJnZXREYXRhIiwiaWQiLCJ0cmF2ZWxMb2NhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ0cmF2ZWxMYXQiLCJ0cmF2ZWxMb25nIiwid2VhdGhlckRhdGVTdGFydCIsIndlYXRoZXJEYXRlRW5kIiwiZmV0Y2giLCJ3ZWF0aGVyUXVlcnkiLCJqc29uIiwid2VhdGhlclJlc3BvbnNlIiwiaXRlbSIsImRhaWx5IiwiY2FsY01heFRlbXAiLCJ0ZW1wZXJhdHVyZV8ybV9tYXgiLCJjYWxjTWluVGVtcCIsInRlbXBlcmF0dXJlXzJtX21pbiIsImNhbGNSYWluZmFsbCIsInJhaW5fc3VtIiwiY2FsY1Nub3dmYWxsIiwic25vd2ZhbGxfc3VtIiwiY2FsY1N1bnJpc2UiLCJzdW5yaXNlIiwiY2FsY1N1bnNldCIsInN1bnNldCIsImF2Z01heFRlbXAiLCJyZWR1Y2UiLCJhIiwiYiIsImxlbmd0aCIsImF2Z01pblRlbXAiLCJhdmdSYWluZmFsbCIsImF2Z1Nub3dmYWxsIiwiYXZnU3VucmlzZSIsInNsaWNlIiwiYXZnU3Vuc2V0Iiwic3RvcmVNYXhUZW1wIiwidG9GaXhlZCIsInN0b3JlTWluVGVtcCIsInN0b3JlUmFpbmZhbGwiLCJzdG9yZVNub3dmYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7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LGdCQUNWO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVNO0FBQUEsOENBQWM7QUFBTSxtQkFBUyxFQUFDLFdBQWhCO0FBQUEsb0JBQTZCWjtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZOLGVBR007QUFBQSw2Q0FBYTtBQUFNLG1CQUFTLEVBQUMsV0FBaEI7QUFBQSxvQkFBNkJFO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSE4sZUFJTTtBQUFBLDhDQUFjO0FBQU0sbUJBQVMsRUFBQyxXQUFoQjtBQUFBLG9CQUE2QkU7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKTixlQUtNO0FBQUEsOENBQWM7QUFBTSxtQkFBUyxFQUFDLFdBQWhCO0FBQUEsb0JBQTZCRTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxOLGVBTU07QUFBQSwrQ0FBZTtBQUFNLG1CQUFTLEVBQUMsV0FBaEI7QUFBQSxvQkFBNkJFO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTk4sZUFPTTtBQUFBLCtDQUFlO0FBQU0sbUJBQVMsRUFBQyxXQUFoQjtBQUFBLG9CQUE2QkU7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEVSxHQVVSLEVBckJKO0FBQUEsa0JBREY7QUF5QkQsQ0EzRkQ7O0dBQU1aLE87O0FBNkZXQSxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL1dlYXRoZXIuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBsb2NhdGlvbkRldGFpbHMgfSBmcm9tICcuL2RhdGEnO1xuXG5cbmNvbnN0IHdlYXRoZXIgPSAoKSA9PiB7XG5cbiAgLy8gY29uc3QgW2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZShbXSk7IC8vdXNlU3RhdGUgaG9vayB0byBpbml0aWFsaXplIHRoZSBzdGF0ZSB0byBhbiBlbXB0eSBhcnJheVxuICBjb25zdCBbbmV3U3VucmlzZSwgc2V0U3VucmlzZV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtuZXdTdW5zZXQsIHNldFN1bnNldF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtuZXdNYXhUZW1wLCBzZXRNYXhUZW1wXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW25ld01pblRlbXAsIHNldE1pblRlbV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtuZXdSYWluZmFsbCwgc2V0UmFpbmZhbGxdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbmV3U25vd2ZhbGwsIHNldHN0b3JlU25vd2ZhbGxdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZGF0YWNoZWNrLCBzZXREYXRhQ2hlY2tdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBcbiAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jIChpZCkgPT4ge1xuICAgIGNvbnN0IHRyYXZlbExvY2F0aW9uID0gaWQ7XG4gICAgY29uc29sZS5sb2coXCJUaGlzIGlzIHRyYXZlbExvY2F0aW9uXCIgKyB0cmF2ZWxMb2NhdGlvbik7XG4gICAgY29uc3QgdHJhdmVsTGF0ID0gXCIzNC4zMzczMDZcIjtcbiAgICBjb25zdCB0cmF2ZWxMb25nID0gXCItMTE4LjY2ODE3NzlcIjtcbiAgICBjb25zdCB3ZWF0aGVyRGF0ZVN0YXJ0ID0gXCIyMDIwLTEyLTAxXCI7XG4gICAgY29uc3Qgd2VhdGhlckRhdGVFbmQgPSBcIjIwMjEtMDItMjhcIjtcblxuICAgIGNvbnN0IHdlYXRoZXJRdWVyeSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcmNoaXZlLWFwaS5vcGVuLW1ldGVvLmNvbS92MS9lcmE1P2xhdGl0dWRlPVwiICtcbiAgICB0cmF2ZWxMYXQgK1xuICAgIFwiJmxvbmdpdHVkZT1cIiArXG4gICAgdHJhdmVsTG9uZyArXG4gICAgXCImc3RhcnRfZGF0ZT1cIiArXG4gICAgd2VhdGhlckRhdGVTdGFydCArXG4gICAgXCImZW5kX2RhdGU9XCIgK1xuICAgIHdlYXRoZXJEYXRlRW5kICtcbiAgICBcIiZ0aW1lem9uZT1hdXRvJmRhaWx5PXRlbXBlcmF0dXJlXzJtX21heCx0ZW1wZXJhdHVyZV8ybV9taW4sc3VucmlzZSxzdW5zZXQscHJlY2lwaXRhdGlvbl9zdW0scmFpbl9zdW0sc25vd2ZhbGxfc3VtXCJcbiAgICApO1xuICAgIGNvbnN0IHdlYXRoZXJSZXNwb25zZSA9IGF3YWl0IHdlYXRoZXJRdWVyeS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coXCJUaGlzIGlzIHdlYXRoZXIgUmVzcG9uc2VcIik7XG4gICAgY29uc29sZS5sb2cod2VhdGhlclJlc3BvbnNlKTtcblxuICAgIHZhciBpdGVtID0gd2VhdGhlclJlc3BvbnNlLmRhaWx5O1xuICAgICAgICBcbiAgICB2YXIgY2FsY01heFRlbXAgPSBpdGVtLnRlbXBlcmF0dXJlXzJtX21heDtcbiAgICB2YXIgY2FsY01pblRlbXAgPSBpdGVtLnRlbXBlcmF0dXJlXzJtX21pbjtcbiAgICB2YXIgY2FsY1JhaW5mYWxsID0gaXRlbS5yYWluX3N1bTtcbiAgICB2YXIgY2FsY1Nub3dmYWxsID0gaXRlbS5zbm93ZmFsbF9zdW07XG4gICAgdmFyIGNhbGNTdW5yaXNlID0gaXRlbS5zdW5yaXNlO1xuICAgIHZhciBjYWxjU3Vuc2V0ID0gaXRlbS5zdW5zZXQ7XG5cblxuICAgIHZhciBhdmdNYXhUZW1wID0gY2FsY01heFRlbXAucmVkdWNlKChhLCBiKSA9PiBhICsgYikgLyBjYWxjTWF4VGVtcC5sZW5ndGg7XG4gICAgdmFyIGF2Z01pblRlbXAgPSBjYWxjTWluVGVtcC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKSAvIGNhbGNNaW5UZW1wLmxlbmd0aDtcbiAgICB2YXIgYXZnUmFpbmZhbGwgPSBjYWxjUmFpbmZhbGwucmVkdWNlKChhLCBiKSA9PiBhICsgYikgLyBjYWxjUmFpbmZhbGwubGVuZ3RoO1xuICAgIHZhciBhdmdTbm93ZmFsbCA9IGNhbGNTbm93ZmFsbC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKSAvIGNhbGNTbm93ZmFsbC5sZW5ndGg7XG5cblxuICAgIGNvbnN0IGF2Z1N1bnJpc2UgPSBjYWxjU3VucmlzZVs0NV0uc2xpY2UoLTUpO1xuICAgIGNvbnN0IGF2Z1N1bnNldCA9IGNhbGNTdW5zZXRbNDVdLnNsaWNlKC01KTtcbiAgICBjb25zdCBzdG9yZU1heFRlbXAgPSBhdmdNYXhUZW1wLnRvRml4ZWQoMSk7XG4gICAgY29uc3Qgc3RvcmVNaW5UZW1wID0gYXZnTWluVGVtcC50b0ZpeGVkKDEpO1xuICAgIGNvbnN0IHN0b3JlUmFpbmZhbGwgPSBhdmdSYWluZmFsbC50b0ZpeGVkKDIpO1xuICAgIGNvbnN0IHN0b3JlU25vd2ZhbGwgPSBhdmdTbm93ZmFsbC50b0ZpeGVkKDIpO1xuXG4gICAgc2V0U3VucmlzZShhdmdTdW5yaXNlKVxuICAgIHNldFN1bnNldChhdmdTdW5zZXQpXG4gICAgc2V0TWF4VGVtcChzdG9yZU1heFRlbXApXG4gICAgc2V0TWluVGVtKHN0b3JlTWluVGVtcClcbiAgICBzZXRSYWluZmFsbChzdG9yZVJhaW5mYWxsKVxuICAgIHNldHN0b3JlU25vd2ZhbGwoc3RvcmVTbm93ZmFsbClcbiAgICBzZXREYXRhQ2hlY2sodHJ1ZSk7XG4gICAgXG4gICAgfTtcbiAgXG4gIHJldHVybihcbiAgICA8PlxuICBcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIG0tMTYgeGw6dy0yLzUganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3cteS1oaWRkZW5cIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+dGVzdCBjb21wb25lbnQgZm9yIHdlYXRoZXIgRGF0YTwvaDE+XG5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ2V0RGF0YSgxKX0gICAgICBcbiAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNDAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgbXktNCBteC00IHB4LTQgYm9yZGVyLWItNCBib3JkZXItYmx1ZS03MDAgaG92ZXI6Ym9yZGVyLWJsdWUtNTAwIHJvdW5kZWRcIj5cbiAgICAgICAgR2V0IEhhdmFuYSBXZWF0aGVyIERhdGFcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICAgICB7ZGF0YWNoZWNrID8gXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+IFRoaXMgc2hvdWxkbnQgc2hvdyB1bnRpbCB0aGVyZSBpcyBkYXRhIDwvaDE+XG4gICAgICAgICAgICA8aDQ+U3VucmlzZSA9IDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkJz57bmV3U3VucmlzZX08L3NwYW4+PC9oND5cbiAgICAgICAgICAgIDxoND5TdW5zZXQgPSA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+e25ld1N1bnNldH08L3NwYW4+PC9oND5cbiAgICAgICAgICAgIDxoND5NYXhUZW1wID0gPHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQnPntuZXdNYXhUZW1wfTwvc3Bhbj48L2g0PlxuICAgICAgICAgICAgPGg0Pk1pblRlbXAgPSA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+e25ld01pblRlbXB9PC9zcGFuPjwvaDQ+XG4gICAgICAgICAgICA8aDQ+UmFpbmZhbGwgPSA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+e25ld1JhaW5mYWxsfTwvc3Bhbj48L2g0PlxuICAgICAgICAgICAgPGg0PlNub3dmYWxsID0gPHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQnPntuZXdTbm93ZmFsbH08L3NwYW4+PC9oND5cbiAgICAgIDwvZGl2PlxuICAgICAgOiAnJ31cbiAgICA8Lz5cbiAgKVxufTtcblxuICBleHBvcnQgZGVmYXVsdCB3ZWF0aGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Weather.jsx\n");

/***/ })

})
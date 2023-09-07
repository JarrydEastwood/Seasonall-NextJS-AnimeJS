webpackHotUpdate_N_E("pages/apitest",{

/***/ "./pages/Weather.jsx":
/*!***************************!*\
  !*** ./pages/Weather.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/jarryd/Documents/ActiveUni/Seasonall-NextJS-AnimeJS/pages/Weather.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar weather = function weather() {\n  _s();\n\n  // const [location, setLocation] = useState([]); //useState hook to initialize the state to an empty array\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      geoData = _useState[0],\n      setGeoData = _useState[1]; //useState hook to initialize the state to an empty array\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      weatherData = _useState2[0],\n      setWeatherData = _useState2[1]; //useState hook to initialize the state to an empty array\n\n\n  var getData = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var travelLat, travelLong, weatherDateStart, weatherDateEnd, weatherQuery, weatherResponse;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              travelLat = \"34.337306\";\n              travelLong = \"-118.6681779\";\n              weatherDateStart = \"34.337306\";\n              weatherDateEnd = \"-118.6681779\";\n              _context.next = 6;\n              return fetch(\"https://archive-api.open-meteo.com/v1/era5?latitude=\" + travelLat + \"&longitude=\" + travelLong + \"&start_date=\" + weatherDateStart + \"&end_date=\" + weatherDateEnd + \"&timezone=auto&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,snowfall_sum\");\n\n            case 6:\n              weatherQuery = _context.sent;\n              _context.next = 9;\n              return weatherQuery.json();\n\n            case 9:\n              weatherResponse = _context.sent;\n              console.log(weatherResponse);\n              setWeatherData(weatherResponse.results);\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getData() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"w-1/2 m-16 xl:w-2/5 justify-center overflow-y-hidden\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-xl\",\n        children: \"test component for weather Data\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return getData(\"Memphis\");\n        },\n        className: \"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 my-4 mx-4 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded\",\n        children: \"Get Weather Data\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"flex flex-col w-full m-16 xl:w-2/5 justify-center overflow-y-hidden\",\n      children: weatherData && weatherData.length && weatherData.map(function (weatherResult, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n            id: \"rain\",\n            children: [\"Temp = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n              className: \"font-bold\",\n              children: weatherResult.main.temp\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 34\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n            id: \"snow\",\n            children: [\"Wind Speed = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n              className: \"font-bold\",\n              children: weatherResult.wind.speed\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 40\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n            id: \"other\",\n            children: [\"Humidity = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n              className: \"font-bold\",\n              children: weatherResult.main.humidity\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 39\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 13\n          }, _this)]\n        }, i, true, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 3\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(weather, \"Sed6MAt8O/Vj4pC7tA/738gOHVs=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (weather);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvV2VhdGhlci5qc3g/ZTg1YiJdLCJuYW1lcyI6WyJ3ZWF0aGVyIiwidXNlU3RhdGUiLCJnZW9EYXRhIiwic2V0R2VvRGF0YSIsIndlYXRoZXJEYXRhIiwic2V0V2VhdGhlckRhdGEiLCJnZXREYXRhIiwidHJhdmVsTGF0IiwidHJhdmVsTG9uZyIsIndlYXRoZXJEYXRlU3RhcnQiLCJ3ZWF0aGVyRGF0ZUVuZCIsImZldGNoIiwid2VhdGhlclF1ZXJ5IiwianNvbiIsIndlYXRoZXJSZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHRzIiwibGVuZ3RoIiwibWFwIiwid2VhdGhlclJlc3VsdCIsImkiLCJtYWluIiwidGVtcCIsIndpbmQiLCJzcGVlZCIsImh1bWlkaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBRXBCO0FBRm9CLGtCQUdVQyxzREFBUSxDQUFDLEVBQUQsQ0FIbEI7QUFBQSxNQUdiQyxPQUhhO0FBQUEsTUFHSkMsVUFISSxpQkFHd0I7OztBQUh4QixtQkFJa0JGLHNEQUFRLENBQUMsRUFBRCxDQUoxQjtBQUFBLE1BSWJHLFdBSmE7QUFBQSxNQUlBQyxjQUpBLGtCQUlnQzs7O0FBRWxELE1BQU1DLE9BQU87QUFBQSxnTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUkMsdUJBRFEsR0FDSSxXQURKO0FBRVJDLHdCQUZRLEdBRUssY0FGTDtBQUdSQyw4QkFIUSxHQUdXLFdBSFg7QUFJUkMsNEJBSlEsR0FJUyxjQUpUO0FBQUE7QUFBQSxxQkFNYUMsS0FBSyxDQUFDLHlEQUNqQ0osU0FEaUMsR0FFakMsYUFGaUMsR0FHakNDLFVBSGlDLEdBSWpDLGNBSmlDLEdBS2pDQyxnQkFMaUMsR0FNakMsWUFOaUMsR0FPakNDLGNBUGlDLEdBUWpDLG1IQVJnQyxDQU5sQjs7QUFBQTtBQU1SRSwwQkFOUTtBQUFBO0FBQUEscUJBaUJnQkEsWUFBWSxDQUFDQyxJQUFiLEVBakJoQjs7QUFBQTtBQWlCUkMsNkJBakJRO0FBa0JkQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLGVBQVo7QUFDQVQsNEJBQWMsQ0FBQ1MsZUFBZSxDQUFDRyxPQUFqQixDQUFkOztBQW5CYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFQWCxPQUFPO0FBQUE7QUFBQTtBQUFBLEtBQWI7O0FBc0JGLHNCQUNFO0FBQUEsNEJBQ0E7QUFBSyxlQUFTLEVBQUMsc0RBQWY7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBR0U7QUFBUSxlQUFPLEVBQUU7QUFBQSxpQkFBTUEsT0FBTyxDQUFDLFNBQUQsQ0FBYjtBQUFBLFNBQWpCO0FBQ0EsaUJBQVMsRUFBQyxpSUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLGVBVUY7QUFBSyxlQUFTLEVBQUMscUVBQWY7QUFBQSxnQkFHRUYsV0FBVyxJQUFJQSxXQUFXLENBQUNjLE1BQTNCLElBQXFDZCxXQUFXLENBQUNlLEdBQVosQ0FBZ0IsVUFBQ0MsYUFBRCxFQUFnQkMsQ0FBaEIsRUFBcUI7QUFDdEUsNEJBQ0k7QUFBQSxrQ0FDQTtBQUFJLGNBQUUsRUFBQyxNQUFQO0FBQUEsK0NBQXFCO0FBQU0sdUJBQVMsRUFBQyxXQUFoQjtBQUFBLHdCQUE2QkQsYUFBYSxDQUFDRSxJQUFkLENBQW1CQztBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREEsZUFFQTtBQUFJLGNBQUUsRUFBQyxNQUFQO0FBQUEscURBQTJCO0FBQU0sdUJBQVMsRUFBQyxXQUFoQjtBQUFBLHdCQUE2QkgsYUFBYSxDQUFDSSxJQUFkLENBQW1CQztBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkEsZUFHQTtBQUFJLGNBQUUsRUFBQyxPQUFQO0FBQUEsbURBQTBCO0FBQU0sdUJBQVMsRUFBQyxXQUFoQjtBQUFBLHdCQUE2QkwsYUFBYSxDQUFDRSxJQUFkLENBQW1CSTtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEE7QUFBQSxXQUFVTCxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFPQyxPQVJnQztBQUh2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkU7QUFBQSxrQkFERjtBQTZCRCxDQXpERDs7R0FBTXJCLE87O0FBMkRXQSxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL1dlYXRoZXIuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5cbmNvbnN0IHdlYXRoZXIgPSAoKSA9PiB7XG5cbiAgLy8gY29uc3QgW2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZShbXSk7IC8vdXNlU3RhdGUgaG9vayB0byBpbml0aWFsaXplIHRoZSBzdGF0ZSB0byBhbiBlbXB0eSBhcnJheVxuICBjb25zdCBbZ2VvRGF0YSwgc2V0R2VvRGF0YV0gPSB1c2VTdGF0ZShbXSk7IC8vdXNlU3RhdGUgaG9vayB0byBpbml0aWFsaXplIHRoZSBzdGF0ZSB0byBhbiBlbXB0eSBhcnJheVxuICBjb25zdCBbd2VhdGhlckRhdGEsIHNldFdlYXRoZXJEYXRhXSA9IHVzZVN0YXRlKFtdKTsgLy91c2VTdGF0ZSBob29rIHRvIGluaXRpYWxpemUgdGhlIHN0YXRlIHRvIGFuIGVtcHR5IGFycmF5XG4gIFxuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB0cmF2ZWxMYXQgPSBcIjM0LjMzNzMwNlwiO1xuICAgICAgY29uc3QgdHJhdmVsTG9uZyA9IFwiLTExOC42NjgxNzc5XCI7XG4gICAgICBjb25zdCB3ZWF0aGVyRGF0ZVN0YXJ0ID0gXCIzNC4zMzczMDZcIjtcbiAgICAgIGNvbnN0IHdlYXRoZXJEYXRlRW5kID0gXCItMTE4LjY2ODE3NzlcIjtcblxuICAgICAgY29uc3Qgd2VhdGhlclF1ZXJ5ID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FyY2hpdmUtYXBpLm9wZW4tbWV0ZW8uY29tL3YxL2VyYTU/bGF0aXR1ZGU9XCIgK1xuICAgICAgdHJhdmVsTGF0ICtcbiAgICAgIFwiJmxvbmdpdHVkZT1cIiArXG4gICAgICB0cmF2ZWxMb25nICtcbiAgICAgIFwiJnN0YXJ0X2RhdGU9XCIgK1xuICAgICAgd2VhdGhlckRhdGVTdGFydCArXG4gICAgICBcIiZlbmRfZGF0ZT1cIiArXG4gICAgICB3ZWF0aGVyRGF0ZUVuZCArXG4gICAgICBcIiZ0aW1lem9uZT1hdXRvJmRhaWx5PXRlbXBlcmF0dXJlXzJtX21heCx0ZW1wZXJhdHVyZV8ybV9taW4sc3VucmlzZSxzdW5zZXQscHJlY2lwaXRhdGlvbl9zdW0scmFpbl9zdW0sc25vd2ZhbGxfc3VtXCJcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IHdlYXRoZXJSZXNwb25zZSA9IGF3YWl0IHdlYXRoZXJRdWVyeS5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyUmVzcG9uc2UpO1xuICAgICAgc2V0V2VhdGhlckRhdGEod2VhdGhlclJlc3BvbnNlLnJlc3VsdHMpO1xuICAgIH07XG4gICAgXG4gIHJldHVybihcbiAgICA8PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzIgbS0xNiB4bDp3LTIvNSBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy15LWhpZGRlblwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGxcIj50ZXN0IGNvbXBvbmVudCBmb3Igd2VhdGhlciBEYXRhPC9oMT5cblxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnZXREYXRhKFwiTWVtcGhpc1wiKX0gICAgICBcbiAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNDAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgbXktNCBteC00IHB4LTQgYm9yZGVyLWItNCBib3JkZXItYmx1ZS03MDAgaG92ZXI6Ym9yZGVyLWJsdWUtNTAwIHJvdW5kZWRcIj5cbiAgICAgICAgR2V0IFdlYXRoZXIgRGF0YVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbCBtLTE2IHhsOnctMi81IGp1c3RpZnktY2VudGVyIG92ZXJmbG93LXktaGlkZGVuXCI+XG4gICAgXG4gICAge1xuICAgIHdlYXRoZXJEYXRhICYmIHdlYXRoZXJEYXRhLmxlbmd0aCAmJiB3ZWF0aGVyRGF0YS5tYXAoKHdlYXRoZXJSZXN1bHQsIGkpID0+e1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgICA8aDQgaWQ9XCJyYWluXCI+VGVtcCA9IDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkJz57d2VhdGhlclJlc3VsdC5tYWluLnRlbXB9PC9zcGFuPjwvaDQ+XG4gICAgICAgICAgICA8aDQgaWQ9XCJzbm93XCI+V2luZCBTcGVlZCA9IDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkJz57d2VhdGhlclJlc3VsdC53aW5kLnNwZWVkfTwvc3Bhbj48L2g0PlxuICAgICAgICAgICAgPGg0IGlkPVwib3RoZXJcIj5IdW1pZGl0eSA9IDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkJz57d2VhdGhlclJlc3VsdC5tYWluLmh1bWlkaXR5fTwvc3Bhbj48L2g0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgPC9kaXY+XG5cbiAgICA8Lz5cbiAgKVxufTtcblxuICBleHBvcnQgZGVmYXVsdCB3ZWF0aGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Weather.jsx\n");

/***/ })

})
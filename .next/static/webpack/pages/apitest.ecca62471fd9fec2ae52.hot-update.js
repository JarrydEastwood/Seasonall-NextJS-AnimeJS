webpackHotUpdate_N_E("pages/apitest",{

/***/ "./pages/apitest.jsx":
/*!***************************!*\
  !*** ./pages/apitest.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/jarryd/Documents/ActiveUni/Seasonall-NextJS-AnimeJS/pages/apitest.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar apiPage = function apiPage() {\n  _s();\n\n  // const [location, setLocation] = useState([]); //useState hook to initialize the state to an empty array\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      geoData = _useState[0],\n      setGeoData = _useState[1]; //useState hook to initialize the state to an empty array\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      weatherData = _useState2[0],\n      setWeatherData = _useState2[1]; //useState hook to initialize the state to an empty array\n\n\n  var getData = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(location) {\n      var geoKey, weatherKey, travelLocation, query, response, IPLat, IPLon, weatherQuery, weatherResponse;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              geoKey = '234979e2ff9e423095e4b2c869c1c97b'; //Move this to secure location\n\n              weatherKey = 'd9e3acc582b222c6021692be631852c5'; //Move this to secure location\n\n              travelLocation = location;\n              _context.next = 5;\n              return fetch('https://api.geoapify.com/v1/geocode/search?text=' + travelLocation + \"&limit=1&format=json&apiKey=\" + geoKey);\n\n            case 5:\n              query = _context.sent;\n              _context.next = 8;\n              return query.json();\n\n            case 8:\n              response = _context.sent;\n              console.log(response);\n              setGeoData(response.results);\n              IPLat = \"34.337306\";\n              IPLon = \"-118.6681779\";\n              _context.next = 15;\n              return fetch(\"https://api.openweathermap.org/data/2.5/weather?lat=\" + IPLat + \"&lon=\" + IPLon + \"&appid=\" + weatherKey);\n\n            case 15:\n              weatherQuery = _context.sent;\n              _context.next = 18;\n              return weatherQuery.json();\n\n            case 18:\n              weatherResponse = _context.sent;\n              console.log(weatherResponse);\n              setWeatherData(weatherResponse.results);\n\n            case 21:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getData(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"w-1/2 m-16 xl:w-2/5 justify-center overflow-y-hidden\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-xl\",\n        children: \"test page for API Data\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n        children: \"Click a button to test the GeoLocation API\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return getData(\"New York\");\n        },\n        className: \"bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 my-4 mx-4 px-4 border-b-4 border-pink-700 hover:border-pink-500 rounded\",\n        children: \"New York\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return getData(\"Los Angeles\");\n        },\n        className: \"bg-green-500 hover:bg-green-400 text-white font-bold py-2 my-4 mx-4 px-4 border-b-4 border-green-700 hover:border-green-500 rounded\",\n        children: \"Los Angeles\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return getData(\"Memphis\");\n        },\n        className: \"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 my-4 mx-4 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded\",\n        children: \"Memphis\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"flex flex-col w-full m-16 xl:w-2/5 justify-center overflow-y-hidden\",\n      children: [geoData && geoData.length && geoData.map(function (result, i, weatherResult, v) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n              id: \"city\",\n              children: [\"City = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n                className: \"font-bold\",\n                children: result.city\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 62,\n                columnNumber: 32\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 11\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n              id: \"country\",\n              children: [\"Country = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n                className: \"font-bold\",\n                children: result.country\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 63,\n                columnNumber: 38\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 11\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n              id: \"Timezone\",\n              children: [\"Timezone = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n                className: \"font-bold\",\n                children: result.timezone.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 64,\n                columnNumber: 40\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 11\n            }, _this)]\n          }, i, true, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 9\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n              id: \"rain\",\n              children: [\"Temp = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n                className: \"font-bold\",\n                children: weatherResult.main\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 67,\n                columnNumber: 32\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 11\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n              id: \"snow\",\n              children: [\"Wind Speed = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n                className: \"font-bold\",\n                children: weatherResult.wind.speed\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 68,\n                columnNumber: 38\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 11\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n              id: \"other\",\n              children: [\"Humidity = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n                className: \"font-bold\",\n                children: weatherResult.main.humidity\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 69,\n                columnNumber: 37\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 11\n            }, _this)]\n          }, v, true, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 9\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 7\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        href: \"/demo\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n          href: \"/demo\",\n          className: \"px-4 md:px-8 mx-auto my-4 py-2 md:py-3 text-center rounded-full bg-green-500 text-white font-bold uppercase border-green-600 border hover:bg-green-700\",\n          children: \"Go back to Animation Demo Page\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 3\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 3\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 3\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(apiPage, \"Sed6MAt8O/Vj4pC7tA/738gOHVs=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (apiPage);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBpdGVzdC5qc3g/Njg3NCJdLCJuYW1lcyI6WyJhcGlQYWdlIiwidXNlU3RhdGUiLCJnZW9EYXRhIiwic2V0R2VvRGF0YSIsIndlYXRoZXJEYXRhIiwic2V0V2VhdGhlckRhdGEiLCJnZXREYXRhIiwibG9jYXRpb24iLCJnZW9LZXkiLCJ3ZWF0aGVyS2V5IiwidHJhdmVsTG9jYXRpb24iLCJmZXRjaCIsInF1ZXJ5IiwianNvbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInJlc3VsdHMiLCJJUExhdCIsIklQTG9uIiwid2VhdGhlclF1ZXJ5Iiwid2VhdGhlclJlc3BvbnNlIiwibGVuZ3RoIiwibWFwIiwicmVzdWx0IiwiaSIsIndlYXRoZXJSZXN1bHQiLCJ2IiwiY2l0eSIsImNvdW50cnkiLCJ0aW1lem9uZSIsIm5hbWUiLCJtYWluIiwid2luZCIsInNwZWVkIiwiaHVtaWRpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFFcEI7QUFGb0Isa0JBR1VDLHNEQUFRLENBQUMsRUFBRCxDQUhsQjtBQUFBLE1BR2JDLE9BSGE7QUFBQSxNQUdKQyxVQUhJLGlCQUd3Qjs7O0FBSHhCLG1CQUlrQkYsc0RBQVEsQ0FBQyxFQUFELENBSjFCO0FBQUEsTUFJYkcsV0FKYTtBQUFBLE1BSUFDLGNBSkEsa0JBSWdDOzs7QUFFbEQsTUFBTUMsT0FBTztBQUFBLGdNQUFHLGlCQUFPQyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNSQyxvQkFEUSxHQUNDLGtDQURELEVBQ3FDOztBQUM3Q0Msd0JBRlEsR0FFSyxrQ0FGTCxFQUV5Qzs7QUFDakRDLDRCQUhRLEdBR1NILFFBSFQ7QUFBQTtBQUFBLHFCQUtNSSxLQUFLLENBQUMscURBQW9ERCxjQUFwRCxHQUMxQiw4QkFEMEIsR0FFMUJGLE1BRnlCLENB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QVMsRUFBQyxXQUFoQjtBQUFBLDBCQUE2QkMsYUFBYSxDQUFDTTtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFJLGdCQUFFLEVBQUMsTUFBUDtBQUFBLHVEQUEyQjtBQUFNLHlCQUFTLEVBQUMsV0FBaEI7QUFBQSwwQkFBNkJOLGFBQWEsQ0FBQ08sSUFBZCxDQUFtQkM7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBR0U7QUFBSSxnQkFBRSxFQUFDLE9BQVA7QUFBQSxxREFBMEI7QUFBTSx5QkFBUyxFQUFDLFdBQWhCO0FBQUEsMEJBQTZCUixhQUFhLENBQUNNLElBQWQsQ0FBbUJHO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRjtBQUFBLGFBQVVSLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFlQyxPQWhCMkIsQ0FMOUIsZUE2Q0EscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsT0FBWDtBQUFBLCtCQUNBO0FBQUcsY0FBSSxFQUFDLE9BQVI7QUFDSSxtQkFBUyxFQUFDLHdKQURkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTdDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyQkU7QUFBQSxrQkFERjtBQStFRCxDQXpHRDs7R0FBTTNCLE87O0FBMkdXQSxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FwaXRlc3QuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5cbmNvbnN0IGFwaVBhZ2UgPSAoKSA9PiB7XG5cbiAgLy8gY29uc3QgW2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZShbXSk7IC8vdXNlU3RhdGUgaG9vayB0byBpbml0aWFsaXplIHRoZSBzdGF0ZSB0byBhbiBlbXB0eSBhcnJheVxuICBjb25zdCBbZ2VvRGF0YSwgc2V0R2VvRGF0YV0gPSB1c2VTdGF0ZShbXSk7IC8vdXNlU3RhdGUgaG9vayB0byBpbml0aWFsaXplIHRoZSBzdGF0ZSB0byBhbiBlbXB0eSBhcnJheVxuICBjb25zdCBbd2VhdGhlckRhdGEsIHNldFdlYXRoZXJEYXRhXSA9IHVzZVN0YXRlKFtdKTsgLy91c2VTdGF0ZSBob29rIHRvIGluaXRpYWxpemUgdGhlIHN0YXRlIHRvIGFuIGVtcHR5IGFycmF5XG4gIFxuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAobG9jYXRpb24pID0+IHtcbiAgICAgIGNvbnN0IGdlb0tleSA9ICcyMzQ5NzllMmZmOWU0MjMwOTVlNGIyYzg2OWMxYzk3Yic7IC8vTW92ZSB0aGlzIHRvIHNlY3VyZSBsb2NhdGlvblxuICAgICAgY29uc3Qgd2VhdGhlcktleSA9ICdkOWUzYWNjNTgyYjIyMmM2MDIxNjkyYmU2MzE4NTJjNSc7IC8vTW92ZSB0aGlzIHRvIHNlY3VyZSBsb2NhdGlvblxuICAgICAgY29uc3QgdHJhdmVsTG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICAgIFxuICAgICAgY29uc3QgcXVlcnkgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2VvYXBpZnkuY29tL3YxL2dlb2NvZGUvc2VhcmNoP3RleHQ9JysgdHJhdmVsTG9jYXRpb24gK1xuICAgICAgXCImbGltaXQ9MSZmb3JtYXQ9anNvbiZhcGlLZXk9XCIgK1xuICAgICAgZ2VvS2V5KTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnkuanNvbigpO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgc2V0R2VvRGF0YShyZXNwb25zZS5yZXN1bHRzKTtcblxuICAgICAgY29uc3QgSVBMYXQgPSBcIjM0LjMzNzMwNlwiO1xuICAgICAgY29uc3QgSVBMb24gPSBcIi0xMTguNjY4MTc3OVwiO1xuICAgICAgY29uc3Qgd2VhdGhlclF1ZXJ5ID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9XCIgKyBJUExhdCArIFwiJmxvbj1cIiArIElQTG9uICsgXCImYXBwaWQ9XCIgKyB3ZWF0aGVyS2V5KVxuICAgICAgY29uc3Qgd2VhdGhlclJlc3BvbnNlID0gYXdhaXQgd2VhdGhlclF1ZXJ5Lmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJSZXNwb25zZSk7XG4gICAgICBzZXRXZWF0aGVyRGF0YSh3ZWF0aGVyUmVzcG9uc2UucmVzdWx0cyk7XG4gICAgfTtcbiAgICBcbiAgcmV0dXJuKFxuICAgIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiBtLTE2IHhsOnctMi81IGp1c3RpZnktY2VudGVyIG92ZXJmbG93LXktaGlkZGVuXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bFwiPnRlc3QgcGFnZSBmb3IgQVBJIERhdGE8L2gxPlxuXG4gICAgICA8aDQ+Q2xpY2sgYSBidXR0b24gdG8gdGVzdCB0aGUgR2VvTG9jYXRpb24gQVBJPC9oND4gXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdldERhdGEoXCJOZXcgWW9ya1wiKX1cbiAgICAgIGNsYXNzTmFtZT1cImJnLXBpbmstNTAwIGhvdmVyOmJnLXBpbmstNDAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgbXktNCBteC00IHB4LTQgYm9yZGVyLWItNCBib3JkZXItcGluay03MDAgaG92ZXI6Ym9yZGVyLXBpbmstNTAwIHJvdW5kZWRcIj5cbiAgICAgIE5ldyBZb3JrXG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnZXREYXRhKFwiTG9zIEFuZ2VsZXNcIil9ICAgICAgXG4gICAgICBjbGFzc05hbWU9XCJiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNDAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgbXktNCBteC00IHB4LTQgYm9yZGVyLWItNCBib3JkZXItZ3JlZW4tNzAwIGhvdmVyOmJvcmRlci1ncmVlbi01MDAgcm91bmRlZFwiPlxuICAgICAgTG9zIEFuZ2VsZXNcbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdldERhdGEoXCJNZW1waGlzXCIpfSAgICAgIFxuICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS00MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBteS00IG14LTQgcHgtNCBib3JkZXItYi00IGJvcmRlci1ibHVlLTcwMCBob3Zlcjpib3JkZXItYmx1ZS01MDAgcm91bmRlZFwiPlxuICAgICAgICBNZW1waGlzXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIG0tMTYgeGw6dy0yLzUganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3cteS1oaWRkZW5cIj5cbiAgICBcbnsvKiBHZW8gRGF0YSBBUEkgQ2FsbCAqL31cbiAge1xuICAgIFxuICAgZ2VvRGF0YSAmJiBnZW9EYXRhLmxlbmd0aCAmJiBnZW9EYXRhLm1hcCgocmVzdWx0LCBpLCB3ZWF0aGVyUmVzdWx0LCB2KSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgIDxoNCBpZD1cImNpdHlcIj5DaXR5ID0gPHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQnPntyZXN1bHQuY2l0eX08L3NwYW4+PC9oND5cbiAgICAgICAgICA8aDQgaWQ9XCJjb3VudHJ5XCI+Q291bnRyeSA9IDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkJz57cmVzdWx0LmNvdW50cnl9PC9zcGFuPjwvaDQ+XG4gICAgICAgICAgPGg0IGlkPVwiVGltZXpvbmVcIj5UaW1lem9uZSA9IDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkJz57cmVzdWx0LnRpbWV6b25lLm5hbWV9PC9zcGFuPjwvaDQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGtleT17dn0+XG4gICAgICAgICAgPGg0IGlkPVwicmFpblwiPlRlbXAgPSA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+e3dlYXRoZXJSZXN1bHQubWFpbn08L3NwYW4+PC9oND5cbiAgICAgICAgICA8aDQgaWQ9XCJzbm93XCI+V2luZCBTcGVlZCA9IDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkJz57d2VhdGhlclJlc3VsdC53aW5kLnNwZWVkfTwvc3Bhbj48L2g0PlxuICAgICAgICAgIDxoNCBpZD1cIm90aGVyXCI+SHVtaWRpdHkgPSA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+e3dlYXRoZXJSZXN1bHQubWFpbi5odW1pZGl0eX08L3NwYW4+PC9oND5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIClcbiAgICBcbiAgICB9KX1cbiAgICB7Lyoge3dlYXRoZXJEYXRhICYmIHdlYXRoZXJEYXRhLmxlbmd0aCAmJiB3ZWF0aGVyRGF0YS5tYXAoKHdlYXRoZXJSZXN1bHQsIGkpID0+e1xuICAgICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgPGg0IGlkPVwicmFpblwiPlRlbXAgPSA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+e3dlYXRoZXJSZXN1bHQubWFpbi50ZW1wfTwvc3Bhbj48L2g0PlxuICAgICAgICAgIDxoNCBpZD1cInNub3dcIj5XaW5kIFNwZWVkID0gPHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQnPnt3ZWF0aGVyUmVzdWx0LndpbmQuc3BlZWR9PC9zcGFuPjwvaDQ+XG4gICAgICAgICAgPGg0IGlkPVwib3RoZXJcIj5IdW1pZGl0eSA9IDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkJz57d2VhdGhlclJlc3VsdC5tYWluLmh1bWlkaXR5fTwvc3Bhbj48L2g0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gICAgKX0gKi99XG5cbnsvKiBXZWF0aGVyIERhdGEgQVBJIENhbGwgKi99XG4gIHsvKiB7XG4gICAgd2VhdGhlckRhdGEgJiYgd2VhdGhlckRhdGEubGVuZ3RoICYmIHdlYXRoZXJEYXRhLm1hcCgod2VhdGhlclJlc3VsdCwgaSkgPT57XG4gICAgICByZXR1cm4oXG4gICAgICAgIDxkaXYga2V5PXtpfT5cbiAgICAgICAgICA8aDQgaWQ9XCJyYWluXCI+cmFpbiA9IDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkJz57d2VhdGhlclJlc3VsdC5jaXR5fTwvc3Bhbj48L2g0PlxuICAgICAgICAgIDxoNCBpZD1cInNub3dcIj5zbm93ID0gPHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQnPnt3ZWF0aGVyUmVzdWx0LmNvdW50cnl9PC9zcGFuPjwvaDQ+XG4gICAgICAgICAgPGg0IGlkPVwib3RoZXJcIj5vdGhlciA9IDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkJz57d2VhdGhlclJlc3VsdC50aW1lem9uZS5uYW1lfTwvc3Bhbj48L2g0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICAgIH1cbiAgfSAqL31cbiAgPExpbmsgaHJlZj1cIi9kZW1vXCI+XG4gIDxhIGhyZWY9XCIvZGVtb1wiXG4gICAgICBjbGFzc05hbWU9XCJweC00IG1kOnB4LTggbXgtYXV0byBteS00IHB5LTIgbWQ6cHktMyB0ZXh0LWNlbnRlciByb3VuZGVkLWZ1bGwgYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHVwcGVyY2FzZSBib3JkZXItZ3JlZW4tNjAwIGJvcmRlciBob3ZlcjpiZy1ncmVlbi03MDBcIlxuICAgICAgPlxuICAgICAgR28gYmFjayB0byBBbmltYXRpb24gRGVtbyBQYWdlICAgIFxuICAgICAgXG4gICAgPC9hPlxuICA8L0xpbms+XG4gIDwvZGl2PlxuXG4gICAgPC8+XG4gIClcbn07XG5cbiAgZXhwb3J0IGRlZmF1bHQgYXBpUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/apitest.jsx\n");

/***/ })

})
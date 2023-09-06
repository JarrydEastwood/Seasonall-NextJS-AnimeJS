webpackHotUpdate_N_E("pages/apitest",{

/***/ "./pages/apitest.jsx":
/*!***************************!*\
  !*** ./pages/apitest.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/jarryd/Documents/ActiveUni/Seasonall-NextJS-AnimeJS/pages/apitest.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar apiPage = function apiPage() {\n  _s();\n\n  // const [location, setLocation] = useState([]); //useState hook to initialize the state to an empty array\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      weatherData = _useState[0],\n      setWeatherData = _useState[1]; //useState hook to initialize the state to an empty array\n\n\n  var getData = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(location) {\n      var geoKey, travelLocation, query, response, weatherQuery;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              geoKey = '234979e2ff9e423095e4b2c869c1c97b'; //Move this to secure location\n\n              travelLocation = location;\n              _context.next = 4;\n              return fetch('https://api.geoapify.com/v1/geocode/search?text=' + travelLocation + \"&limit=1&format=json&apiKey=\" + geoKey);\n\n            case 4:\n              query = _context.sent;\n              _context.next = 7;\n              return query.json();\n\n            case 7:\n              response = _context.sent;\n              console.log(response);\n              setWeatherData(response.results);\n              _context.next = 12;\n              return fetch('\"https://api.openweathermap.org/data/2.5/weather?lat=' + IPLat + \"&lon=\" + IPLon + \"&appid=\" + weatherKey);\n\n            case 12:\n              weatherQuery = _context.sent;\n\n            case 13:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getData(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"w-1/2 m-16 xl:w-2/5 justify-center overflow-y-hidden\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-xl\",\n        children: \"test page for API Data\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n        children: \"Click a button to test the GeoLocation API\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return getData(\"New York\");\n        },\n        \"class\": \"bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 my-4 mx-4 px-4 border-b-4 border-pink-700 hover:border-pink-500 rounded\",\n        children: \"New York\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return getData(\"Los Angeles\");\n        },\n        \"class\": \"bg-green-500 hover:bg-green-400 text-white font-bold py-2 my-4 mx-4 px-4 border-b-4 border-green-700 hover:border-green-500 rounded\",\n        children: \"Los Angeles\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return getData(\"Memphis\");\n        },\n        \"class\": \"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 my-4 mx-4 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded\",\n        children: \"Memphis\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"flex flex-col w-full m-16 xl:w-2/5 justify-center overflow-y-hidden\",\n      children: [weatherData && weatherData.length && weatherData.map(function (result, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n            id: \"city\",\n            children: [\"City = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n              className: \"font-bold\",\n              children: result.city\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 30\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 9\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n            id: \"country\",\n            children: [\"Country = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n              className: \"font-bold\",\n              children: result.country\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 53,\n              columnNumber: 36\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 9\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n            id: \"Timezone\",\n            children: [\"Timezone = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n              className: \"font-bold\",\n              children: result.timezone.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 38\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 9\n          }, _this)]\n        }, i, true, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 7\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        href: \"/demo\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n          href: \"/demo\",\n          className: \"px-4 md:px-8 mx-auto my-4 py-2 md:py-3 text-center rounded-full bg-green-500 text-white font-bold uppercase border-green-600 border hover:bg-green-700\",\n          children: \"Go back to Animation Demo Page\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 3\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 3\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 3\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(apiPage, \"uPYC6klwQCjqosAFCgeByFfMAQs=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (apiPage);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBpdGVzdC5qc3g/Njg3NCJdLCJuYW1lcyI6WyJhcGlQYWdlIiwidXNlU3RhdGUiLCJ3ZWF0aGVyRGF0YSIsInNldFdlYXRoZXJEYXRhIiwiZ2V0RGF0YSIsImxvY2F0aW9uIiwiZ2VvS2V5IiwidHJhdmVsTG9jYXRpb24iLCJmZXRjaCIsInF1ZXJ5IiwianNvbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInJlc3VsdHMiLCJJUExhdCIsIklQTG9uIiwid2VhdGhlcktleSIsIndlYXRoZXJRdWVyeSIsImxlbmd0aCIsIm1hcCIsInJlc3VsdCIsImkiLCJjaXR5IiwiY291bnRyeSIsInRpbWV6b25lIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUVwQjtBQUZvQixrQkFHa0JDLHNEQUFRLENBQUMsRUFBRCxDQUgxQjtBQUFBLE1BR2JDLFdBSGE7QUFBQSxNQUdBQyxjQUhBLGlCQUdnQzs7O0FBRWxELE1BQU1DLE9BQU87QUFBQSxnTUFBRyxpQkFBT0MsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUkMsb0JBRFEsR0FDQyxrQ0FERCxFQUNxQzs7QUFDN0NDLDRCQUZRLEdBRVNGLFFBRlQ7QUFBQTtBQUFBLHFCQUlNRyxLQUFLLENBQUMscURBQW9ERCxjQUFwRCxHQUMxQiw4QkFEMEIsR0FFMUJELE1BRnlCLENBSlg7O0FBQUE7QUFJUkcsbUJBSlE7QUFBQTtBQUFBLHFCQU9TQSxLQUFLLENBQUNDLElBQU4sRUFQVDs7QUFBQTtBQU9SQyxzQkFQUTtBQVFkQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFDQVIsNEJBQWMsQ0FBQ1EsUUFBUSxDQUFDRyxPQUFWLENBQWQ7QUFUYztBQUFBLHFCQVdhTixLQUFLLENBQUMsMERBQTBETyxLQUExRCxHQUFrRSxPQUFsRSxHQUE0RUMsS0FBNUUsR0FBb0YsU0FBcEYsR0FBZ0dDLFVBQWpHLENBWGxCOztBQUFBO0FBV1JDLDBCQVhROztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVBkLE9BQU87QUFBQTtBQUFBO0FBQUEsS0FBYjs7QUFjRixzQkFDRTtBQUFBLDRCQUNBO0FBQUssZUFBUyxFQUFDLHNEQUFmO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUFJRTtBQUFRLGVBQU8sRUFBRTtBQUFBLGlCQUFNQSxPQUFPLENBQUMsVUFBRCxDQUFiO0FBQUEsU0FBakI7QUFDQSxpQkFBTSxpSUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLGVBU0U7QUFBUSxlQUFPLEVBQUU7QUFBQSxpQkFBTUEsT0FBTyxDQUFDLGFBQUQsQ0FBYjtBQUFBLFNBQWpCO0FBQ0EsaUJBQU0scUlBRE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURixlQWNFO0FBQVEsZUFBTyxFQUFFO0FBQUEsaUJBQU1BLE9BQU8sQ0FBQyxTQUFELENBQWI7QUFBQSxTQUFqQjtBQUNBLGlCQUFNLGlJQUROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsZUFxQkY7QUFBSyxlQUFTLEVBQUMscUVBQWY7QUFBQSxpQkFHQUYsV0FBVyxJQUFJQSxXQUFXLENBQUNpQixNQUEzQixJQUFxQ2pCLFdBQVcsQ0FBQ2tCLEdBQVosQ0FBZ0IsVUFBQ0MsTUFBRCxFQUFTQyxDQUFULEVBQWU7QUFDbEUsNEJBQ0U7QUFBQSxrQ0FDRTtBQUFJLGNBQUUsRUFBQyxNQUFQO0FBQUEsK0NBQXFCO0FBQU0sdUJBQVMsRUFBQyxXQUFoQjtBQUFBLHdCQUE2QkQsTUFBTSxDQUFDRTtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFJLGNBQUUsRUFBQyxTQUFQO0FBQUEsa0RBQTJCO0FBQU0sdUJBQVMsRUFBQyxXQUFoQjtBQUFBLHdCQUE2QkYsTUFBTSxDQUFDRztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRTtBQUFJLGNBQUUsRUFBQyxVQUFQO0FBQUEsbURBQTZCO0FBQU0sdUJBQVMsRUFBQyxXQUFoQjtBQUFBLHdCQUE2QkgsTUFBTSxDQUFDSSxRQUFQLENBQWdCQztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEY7QUFBQSxXQUFVSixDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFPQyxPQVJrQyxDQUhyQyxlQWFBLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLE9BQVg7QUFBQSwrQkFDQTtBQUFHLGNBQUksRUFBQyxPQUFSO0FBQ0ksbUJBQVMsRUFBQyx3SkFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyQkU7QUFBQSxrQkFERjtBQStDRCxDQWxFRDs7R0FBTXRCLE87O0FBb0VXQSxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FwaXRlc3QuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5cbmNvbnN0IGFwaVBhZ2UgPSAoKSA9PiB7XG5cbiAgLy8gY29uc3QgW2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZShbXSk7IC8vdXNlU3RhdGUgaG9vayB0byBpbml0aWFsaXplIHRoZSBzdGF0ZSB0byBhbiBlbXB0eSBhcnJheVxuICBjb25zdCBbd2VhdGhlckRhdGEsIHNldFdlYXRoZXJEYXRhXSA9IHVzZVN0YXRlKFtdKTsgLy91c2VTdGF0ZSBob29rIHRvIGluaXRpYWxpemUgdGhlIHN0YXRlIHRvIGFuIGVtcHR5IGFycmF5XG4gIFxuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAobG9jYXRpb24pID0+IHtcbiAgICAgIGNvbnN0IGdlb0tleSA9ICcyMzQ5NzllMmZmOWU0MjMwOTVlNGIyYzg2OWMxYzk3Yic7IC8vTW92ZSB0aGlzIHRvIHNlY3VyZSBsb2NhdGlvblxuICAgICAgY29uc3QgdHJhdmVsTG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICAgIFxuICAgICAgY29uc3QgcXVlcnkgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2VvYXBpZnkuY29tL3YxL2dlb2NvZGUvc2VhcmNoP3RleHQ9JysgdHJhdmVsTG9jYXRpb24gK1xuICAgICAgXCImbGltaXQ9MSZmb3JtYXQ9anNvbiZhcGlLZXk9XCIgK1xuICAgICAgZ2VvS2V5KTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnkuanNvbigpO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgc2V0V2VhdGhlckRhdGEocmVzcG9uc2UucmVzdWx0cyk7XG5cbiAgICAgIGNvbnN0IHdlYXRoZXJRdWVyeSA9IGF3YWl0IGZldGNoKCdcImh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0nICsgSVBMYXQgKyBcIiZsb249XCIgKyBJUExvbiArIFwiJmFwcGlkPVwiICsgd2VhdGhlcktleSlcbiAgICB9O1xuICAgIFxuICByZXR1cm4oXG4gICAgPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIG0tMTYgeGw6dy0yLzUganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3cteS1oaWRkZW5cIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+dGVzdCBwYWdlIGZvciBBUEkgRGF0YTwvaDE+XG5cbiAgICAgIDxoND5DbGljayBhIGJ1dHRvbiB0byB0ZXN0IHRoZSBHZW9Mb2NhdGlvbiBBUEk8L2g0PiBcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ2V0RGF0YShcIk5ldyBZb3JrXCIpfVxuICAgICAgY2xhc3M9XCJiZy1waW5rLTUwMCBob3ZlcjpiZy1waW5rLTQwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIG15LTQgbXgtNCBweC00IGJvcmRlci1iLTQgYm9yZGVyLXBpbmstNzAwIGhvdmVyOmJvcmRlci1waW5rLTUwMCByb3VuZGVkXCI+XG4gICAgICBOZXcgWW9ya1xuICAgICAgPC9idXR0b24+XG5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ2V0RGF0YShcIkxvcyBBbmdlbGVzXCIpfSAgICAgIFxuICAgICAgY2xhc3M9XCJiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNDAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgbXktNCBteC00IHB4LTQgYm9yZGVyLWItNCBib3JkZXItZ3JlZW4tNzAwIGhvdmVyOmJvcmRlci1ncmVlbi01MDAgcm91bmRlZFwiPlxuICAgICAgTG9zIEFuZ2VsZXNcbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdldERhdGEoXCJNZW1waGlzXCIpfSAgICAgIFxuICAgICAgY2xhc3M9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTQwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIG15LTQgbXgtNCBweC00IGJvcmRlci1iLTQgYm9yZGVyLWJsdWUtNzAwIGhvdmVyOmJvcmRlci1ibHVlLTUwMCByb3VuZGVkXCI+XG4gICAgICAgIE1lbXBoaXNcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgbS0xNiB4bDp3LTIvNSBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy15LWhpZGRlblwiPlxuICAgIFxuICB7XG4gIHdlYXRoZXJEYXRhICYmIHdlYXRoZXJEYXRhLmxlbmd0aCAmJiB3ZWF0aGVyRGF0YS5tYXAoKHJlc3VsdCwgaSkgPT4ge1xuICAgIHJldHVybihcbiAgICAgIDxkaXYga2V5PXtpfT5cbiAgICAgICAgPGg0IGlkPVwiY2l0eVwiPkNpdHkgPSA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+e3Jlc3VsdC5jaXR5fTwvc3Bhbj48L2g0PlxuICAgICAgICA8aDQgaWQ9XCJjb3VudHJ5XCI+Q291bnRyeSA9IDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkJz57cmVzdWx0LmNvdW50cnl9PC9zcGFuPjwvaDQ+XG4gICAgICAgIDxoNCBpZD1cIlRpbWV6b25lXCI+VGltZXpvbmUgPSA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+e3Jlc3VsdC50aW1lem9uZS5uYW1lfTwvc3Bhbj48L2g0PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICAgIH0pXG4gIH1cbiAgPExpbmsgaHJlZj1cIi9kZW1vXCI+XG4gIDxhIGhyZWY9XCIvZGVtb1wiXG4gICAgICBjbGFzc05hbWU9XCJweC00IG1kOnB4LTggbXgtYXV0byBteS00IHB5LTIgbWQ6cHktMyB0ZXh0LWNlbnRlciByb3VuZGVkLWZ1bGwgYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHVwcGVyY2FzZSBib3JkZXItZ3JlZW4tNjAwIGJvcmRlciBob3ZlcjpiZy1ncmVlbi03MDBcIlxuICAgICAgPlxuICAgICAgR28gYmFjayB0byBBbmltYXRpb24gRGVtbyBQYWdlICAgIFxuICAgICAgXG4gICAgPC9hPlxuICA8L0xpbms+XG4gIDwvZGl2PlxuXG4gICAgPC8+XG4gIClcbn07XG5cbiAgZXhwb3J0IGRlZmF1bHQgYXBpUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/apitest.jsx\n");

/***/ })

})
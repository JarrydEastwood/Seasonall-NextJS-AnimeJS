webpackHotUpdate_N_E("pages/apitest",{

/***/ "./pages/apitest.jsx":
/*!***************************!*\
  !*** ./pages/apitest.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/jarryd/Documents/ActiveUni/Seasonall-NextJS-AnimeJS/pages/apitest.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar apiPage = function apiPage() {\n  _s();\n\n  // const [location, setLocation] = useState([]); //useState hook to initialize the state to an empty array\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      weatherData = _useState[0],\n      setWeatherData = _useState[1]; //useState hook to initialize the state to an empty array\n\n\n  var getData = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(location) {\n      var geoKey, travelLocation, query, response, weatherQuery, weatherResponse;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              geoKey = '234979e2ff9e423095e4b2c869c1c97b'; //Move this to secure location\n\n              travelLocation = location;\n              _context.next = 4;\n              return fetch('https://api.geoapify.com/v1/geocode/search?text=' + travelLocation + \"&limit=1&format=json&apiKey=\" + geoKey);\n\n            case 4:\n              query = _context.sent;\n              _context.next = 7;\n              return query.json();\n\n            case 7:\n              response = _context.sent;\n              console.log(response);\n              setGeoData(response.results);\n              _context.next = 12;\n              return fetch('\"https://api.openweathermap.org/data/2.5/weather?lat=' + IPLat + \"&lon=\" + IPLon + \"&appid=\" + weatherKey);\n\n            case 12:\n              weatherQuery = _context.sent;\n              _context.next = 15;\n              return query.json();\n\n            case 15:\n              weatherResponse = _context.sent;\n              console.log(weatherResponse);\n              setWeatherData(weatherResponse.results);\n\n            case 18:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getData(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"w-1/2 m-16 xl:w-2/5 justify-center overflow-y-hidden\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-xl\",\n        children: \"test page for API Data\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n        children: \"Click a button to test the GeoLocation API\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return getData(\"New York\");\n        },\n        \"class\": \"bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 my-4 mx-4 px-4 border-b-4 border-pink-700 hover:border-pink-500 rounded\",\n        children: \"New York\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return getData(\"Los Angeles\");\n        },\n        \"class\": \"bg-green-500 hover:bg-green-400 text-white font-bold py-2 my-4 mx-4 px-4 border-b-4 border-green-700 hover:border-green-500 rounded\",\n        children: \"Los Angeles\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return getData(\"Memphis\");\n        },\n        \"class\": \"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 my-4 mx-4 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded\",\n        children: \"Memphis\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"flex flex-col w-full m-16 xl:w-2/5 justify-center overflow-y-hidden\",\n      children: [geoData && geoData.length && geoData.map(function (result, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n            id: \"city\",\n            children: [\"City = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n              className: \"font-bold\",\n              children: result.city\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 30\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 9\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n            id: \"country\",\n            children: [\"Country = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n              className: \"font-bold\",\n              children: result.country\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 36\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 9\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h4\", {\n            id: \"Timezone\",\n            children: [\"Timezone = \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n              className: \"font-bold\",\n              children: result.timezone.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 58,\n              columnNumber: 38\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 9\n          }, _this)]\n        }, i, true, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 7\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        href: \"/demo\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n          href: \"/demo\",\n          className: \"px-4 md:px-8 mx-auto my-4 py-2 md:py-3 text-center rounded-full bg-green-500 text-white font-bold uppercase border-green-600 border hover:bg-green-700\",\n          children: \"Go back to Animation Demo Page\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 3\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 3\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 3\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(apiPage, \"uPYC6klwQCjqosAFCgeByFfMAQs=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (apiPage);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBpdGVzdC5qc3g/Njg3NCJdLCJuYW1lcyI6WyJhcGlQYWdlIiwidXNlU3RhdGUiLCJ3ZWF0aGVyRGF0YSIsInNldFdlYXRoZXJEYXRhIiwiZ2V0RGF0YSIsImxvY2F0aW9uIiwiZ2VvS2V5IiwidHJhdmVsTG9jYXRpb24iLCJmZXRjaCIsInF1ZXJ5IiwianNvbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInNldEdlb0RhdGEiLCJyZXN1bHRzIiwiSVBMYXQiLCJJUExvbiIsIndlYXRoZXJLZXkiLCJ3ZWF0aGVyUXVlcnkiLCJ3ZWF0aGVyUmVzcG9uc2UiLCJnZW9EYXRhIiwibGVuZ3RoIiwibWFwIiwicmVzdWx0IiwiaSIsImNpdHkiLCJjb3VudHJ5IiwidGltZXpvbmUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBRXBCO0FBRm9CLGtCQUdrQkMsc0RBQVEsQ0FBQyxFQUFELENBSDFCO0FBQUEsTUFHYkMsV0FIYTtBQUFBLE1BR0FDLGNBSEEsaUJBR2dDOzs7QUFFbEQsTUFBTUMsT0FBTztBQUFBLGdNQUFHLGlCQUFPQyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNSQyxvQkFEUSxHQUNDLGtDQURELEVBQ3FDOztBQUM3Q0MsNEJBRlEsR0FFU0YsUUFGVDtBQUFBO0FBQUEscUJBSU1HLEtBQUssQ0FBQyxxREFBb0RELGNBQXBELEdBQzFCLDhCQUQwQixHQUUxQkQsTUFGeUIsQ0FKWDs7QUFBQTtBQUlSRyxtQkFKUTtBQUFBO0FBQUEscUJBT1NBLEtBQUssQ0FBQ0MsSUFBTixFQVBUOztBQUFBO0FBT1JDLHNCQVBRO0FBUWRDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUNBRyx3QkFBVSxDQUFDSCxRQUFRLENBQUNJLE9BQVYsQ0FBVjtBQVRjO0FBQUEscUJBV2FQLEtBQUssQ0FBQywwREFBMERRLEtBQTFELEdBQWtFLE9BQWxFLEdBQTRFQyxLQUE1RSxHQUFvRixTQUFwRixHQUFnR0MsVUFBakcsQ0FYbEI7O0FBQUE7QUFXUkMsMEJBWFE7QUFBQTtBQUFBLHFCQVlnQlYsS0FBSyxDQUFDQyxJQUFOLEVBWmhCOztBQUFBO0FBWVJVLDZCQVpRO0FBYWRSLHFCQUFPLENBQUNDLEdBQVIsQ0FBWU8sZUFBWjtBQUNBakIsNEJBQWMsQ0FBQ2lCLGVBQWUsQ0FBQ0wsT0FBakIsQ0FBZDs7QUFkYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFQWCxPQUFPO0FBQUE7QUFBQTtBQUFBLEtBQWI7O0FBa0JGLHNCQUNFO0FBQUEsNEJBQ0E7QUFBSyxlQUFTLEVBQUMsc0RBQWY7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixlQUlFO0FBQVEsZUFBTyxFQUFFO0FBQUEsaUJBQU1BLE9BQU8sQ0FBQyxVQUFELENBQWI7QUFBQSxTQUFqQjtBQUNBLGlCQUFNLGlJQUROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsZUFTRTtBQUFRLGVBQU8sRUFBRTtBQUFBLGlCQUFNQSxPQUFPLENBQUMsYUFBRCxDQUFiO0FBQUEsU0FBakI7QUFDQSxpQkFBTSxxSUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGLGVBY0U7QUFBUSxlQUFPLEVBQUU7QUFBQSxpQkFBTUEsT0FBTyxDQUFDLFNBQUQsQ0FBYjtBQUFBLFNBQWpCO0FBQ0EsaUJBQU0saUlBRE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxlQXFCRjtBQUFLLGVBQVMsRUFBQyxxRUFBZjtBQUFBLGlCQUdBaUIsT0FBTyxJQUFJQSxPQUFPLENBQUNDLE1BQW5CLElBQTZCRCxPQUFPLENBQUNFLEdBQVIsQ0FBWSxVQUFDQyxNQUFELEVBQVNDLENBQVQsRUFBZTtBQUN0RCw0QkFDRTtBQUFBLGtDQUNFO0FBQUksY0FBRSxFQUFDLE1BQVA7QUFBQSwrQ0FBcUI7QUFBTSx1QkFBUyxFQUFDLFdBQWhCO0FBQUEsd0JBQTZCRCxNQUFNLENBQUNFO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUksY0FBRSxFQUFDLFNBQVA7QUFBQSxrREFBMkI7QUFBTSx1QkFBUyxFQUFDLFdBQWhCO0FBQUEsd0JBQTZCRixNQUFNLENBQUNHO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQUksY0FBRSxFQUFDLFVBQVA7QUFBQSxtREFBNkI7QUFBTSx1QkFBUyxFQUFDLFdBQWhCO0FBQUEsd0JBQTZCSCxNQUFNLENBQUNJLFFBQVAsQ0FBZ0JDO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRjtBQUFBLFdBQVVKLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQU9DLE9BUjBCLENBSDdCLGVBYUEscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsT0FBWDtBQUFBLCtCQUNBO0FBQUcsY0FBSSxFQUFDLE9BQVI7QUFDSSxtQkFBUyxFQUFDLHdKQURkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXJCRTtBQUFBLGtCQURGO0FBK0NELENBdEVEOztHQUFNekIsTzs7QUF3RVdBLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXBpdGVzdC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cblxuY29uc3QgYXBpUGFnZSA9ICgpID0+IHtcblxuICAvLyBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKFtdKTsgLy91c2VTdGF0ZSBob29rIHRvIGluaXRpYWxpemUgdGhlIHN0YXRlIHRvIGFuIGVtcHR5IGFycmF5XG4gIGNvbnN0IFt3ZWF0aGVyRGF0YSwgc2V0V2VhdGhlckRhdGFdID0gdXNlU3RhdGUoW10pOyAvL3VzZVN0YXRlIGhvb2sgdG8gaW5pdGlhbGl6ZSB0aGUgc3RhdGUgdG8gYW4gZW1wdHkgYXJyYXlcbiAgXG4gICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jIChsb2NhdGlvbikgPT4ge1xuICAgICAgY29uc3QgZ2VvS2V5ID0gJzIzNDk3OWUyZmY5ZTQyMzA5NWU0YjJjODY5YzFjOTdiJzsgLy9Nb3ZlIHRoaXMgdG8gc2VjdXJlIGxvY2F0aW9uXG4gICAgICBjb25zdCB0cmF2ZWxMb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgICAgXG4gICAgICBjb25zdCBxdWVyeSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5nZW9hcGlmeS5jb20vdjEvZ2VvY29kZS9zZWFyY2g/dGV4dD0nKyB0cmF2ZWxMb2NhdGlvbiArXG4gICAgICBcIiZsaW1pdD0xJmZvcm1hdD1qc29uJmFwaUtleT1cIiArXG4gICAgICBnZW9LZXkpO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBxdWVyeS5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICBzZXRHZW9EYXRhKHJlc3BvbnNlLnJlc3VsdHMpO1xuXG4gICAgICBjb25zdCB3ZWF0aGVyUXVlcnkgPSBhd2FpdCBmZXRjaCgnXCJodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JyArIElQTGF0ICsgXCImbG9uPVwiICsgSVBMb24gKyBcIiZhcHBpZD1cIiArIHdlYXRoZXJLZXkpXG4gICAgICBjb25zdCB3ZWF0aGVyUmVzcG9uc2UgPSBhd2FpdCBxdWVyeS5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyUmVzcG9uc2UpO1xuICAgICAgc2V0V2VhdGhlckRhdGEod2VhdGhlclJlc3BvbnNlLnJlc3VsdHMpO1xuICAgXG4gICAgfTtcbiAgICBcbiAgcmV0dXJuKFxuICAgIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiBtLTE2IHhsOnctMi81IGp1c3RpZnktY2VudGVyIG92ZXJmbG93LXktaGlkZGVuXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bFwiPnRlc3QgcGFnZSBmb3IgQVBJIERhdGE8L2gxPlxuXG4gICAgICA8aDQ+Q2xpY2sgYSBidXR0b24gdG8gdGVzdCB0aGUgR2VvTG9jYXRpb24gQVBJPC9oND4gXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdldERhdGEoXCJOZXcgWW9ya1wiKX1cbiAgICAgIGNsYXNzPVwiYmctcGluay01MDAgaG92ZXI6YmctcGluay00MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBteS00IG14LTQgcHgtNCBib3JkZXItYi00IGJvcmRlci1waW5rLTcwMCBob3Zlcjpib3JkZXItcGluay01MDAgcm91bmRlZFwiPlxuICAgICAgTmV3IFlvcmtcbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdldERhdGEoXCJMb3MgQW5nZWxlc1wiKX0gICAgICBcbiAgICAgIGNsYXNzPVwiYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTQwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIG15LTQgbXgtNCBweC00IGJvcmRlci1iLTQgYm9yZGVyLWdyZWVuLTcwMCBob3Zlcjpib3JkZXItZ3JlZW4tNTAwIHJvdW5kZWRcIj5cbiAgICAgIExvcyBBbmdlbGVzXG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnZXREYXRhKFwiTWVtcGhpc1wiKX0gICAgICBcbiAgICAgIGNsYXNzPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS00MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBteS00IG14LTQgcHgtNCBib3JkZXItYi00IGJvcmRlci1ibHVlLTcwMCBob3Zlcjpib3JkZXItYmx1ZS01MDAgcm91bmRlZFwiPlxuICAgICAgICBNZW1waGlzXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIG0tMTYgeGw6dy0yLzUganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3cteS1oaWRkZW5cIj5cbiAgICBcbiAge1xuICBnZW9EYXRhICYmIGdlb0RhdGEubGVuZ3RoICYmIGdlb0RhdGEubWFwKChyZXN1bHQsIGkpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgIDxoNCBpZD1cImNpdHlcIj5DaXR5ID0gPHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQnPntyZXN1bHQuY2l0eX08L3NwYW4+PC9oND5cbiAgICAgICAgPGg0IGlkPVwiY291bnRyeVwiPkNvdW50cnkgPSA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+e3Jlc3VsdC5jb3VudHJ5fTwvc3Bhbj48L2g0PlxuICAgICAgICA8aDQgaWQ9XCJUaW1lem9uZVwiPlRpbWV6b25lID0gPHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQnPntyZXN1bHQudGltZXpvbmUubmFtZX08L3NwYW4+PC9oND5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgICB9KVxuICB9XG4gIDxMaW5rIGhyZWY9XCIvZGVtb1wiPlxuICA8YSBocmVmPVwiL2RlbW9cIlxuICAgICAgY2xhc3NOYW1lPVwicHgtNCBtZDpweC04IG14LWF1dG8gbXktNCBweS0yIG1kOnB5LTMgdGV4dC1jZW50ZXIgcm91bmRlZC1mdWxsIGJnLWdyZWVuLTUwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB1cHBlcmNhc2UgYm9yZGVyLWdyZWVuLTYwMCBib3JkZXIgaG92ZXI6YmctZ3JlZW4tNzAwXCJcbiAgICAgID5cbiAgICAgIEdvIGJhY2sgdG8gQW5pbWF0aW9uIERlbW8gUGFnZSAgICBcbiAgICAgIFxuICAgIDwvYT5cbiAgPC9MaW5rPlxuICA8L2Rpdj5cblxuICAgIDwvPlxuICApXG59O1xuXG4gIGV4cG9ydCBkZWZhdWx0IGFwaVBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/apitest.jsx\n");

/***/ })

})
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/popup/image.js":
/*!***********************************!*\
  !*** ./components/popup/image.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ImagePopup = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), modalIsOpen = ref[0], setModalIsOpen = ref[1];\n    var closeModal = function() {\n        setModalIsOpen(false);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {\n        isOpen: modalIsOpen,\n        onRequestClose: closeModal,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: \"https://astra.analogeducation.in/ofl-civils-prep-with-astra?utm_source=Analog_Website&utm_medium=Online&utm_campaign=Astra\",\n            className: \"relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \"popup-image\",\n                    src: \"assets/images/popup/popupimg.jpg\",\n                    alt: \"Astra Popup Image\"\n                }, void 0, false, {\n                    fileName: \"/Users/krix/analog-main/components/popup/image.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"modal_close\",\n                    children: \"X\"\n                }, void 0, false, {\n                    fileName: \"/Users/krix/analog-main/components/popup/image.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/krix/analog-main/components/popup/image.js\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/krix/analog-main/components/popup/image.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this));\n};\n_s(ImagePopup, \"6J2wAdZ2kjF0faG/fj33ZXGxstA=\");\n_c = ImagePopup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImagePopup);\nvar _c;\n$RefreshReg$(_c, \"ImagePopup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3BvcHVwL2ltYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVDO0FBQ1I7OztBQUUvQixHQUFLLENBQUNHLFVBQVUsR0FBRyxRQUNuQixHQUR5QixDQUFDOztJQUN4QixHQUFLLENBQWlDRixHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUE1Q0csV0FBVyxHQUFvQkgsR0FBYyxLQUFoQ0ksY0FBYyxHQUFJSixHQUFjO0lBRXBELEdBQUssQ0FBQ0ssVUFBVSxHQUFHLFFBQ3JCLEdBRDJCLENBQUM7UUFDeEJELGNBQWMsQ0FBQyxLQUFLO0lBQ3RCLENBQUM7SUFFRCxNQUFNLDZFQUNISCxvREFBSztRQUNKSyxNQUFNLEVBQUVILFdBQVc7UUFDbkJJLGNBQWMsRUFBRUYsVUFBVTs4RkFFekJHLENBQUM7WUFBQ0MsSUFBSSxFQUFDLENBQTRIO1lBQUNDLFNBQVMsRUFBQyxDQUFVOzs0RkFDdEpDLENBQUc7b0JBQUNELFNBQVMsRUFBQyxDQUFhO29CQUFDRSxHQUFHLEVBQUMsQ0FBa0M7b0JBQUNDLEdBQUcsRUFBQyxDQUFtQjs7Ozs7OzRGQUMxRkMsQ0FBQztvQkFBQ0osU0FBUyxFQUFDLENBQWE7OEJBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJcEMsQ0FBQztHQWxCS1IsVUFBVTtLQUFWQSxVQUFVO0FBb0JoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcG9wdXAvaW1hZ2UuanM/YWEyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnO1xuXG5jb25zdCBJbWFnZVBvcHVwID0gKCkgPT4ge1xuICBjb25zdCBbbW9kYWxJc09wZW4sIHNldE1vZGFsSXNPcGVuXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0TW9kYWxJc09wZW4oZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPE1vZGFsXG4gICAgICBpc09wZW49e21vZGFsSXNPcGVufVxuICAgICAgb25SZXF1ZXN0Q2xvc2U9e2Nsb3NlTW9kYWx9XG4gICAgPlxuICAgICAgPGEgaHJlZj0naHR0cHM6Ly9hc3RyYS5hbmFsb2dlZHVjYXRpb24uaW4vb2ZsLWNpdmlscy1wcmVwLXdpdGgtYXN0cmE/dXRtX3NvdXJjZT1BbmFsb2dfV2Vic2l0ZSZ1dG1fbWVkaXVtPU9ubGluZSZ1dG1fY2FtcGFpZ249QXN0cmEnIGNsYXNzTmFtZT0ncmVsYXRpdmUnPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInBvcHVwLWltYWdlXCIgc3JjPVwiYXNzZXRzL2ltYWdlcy9wb3B1cC9wb3B1cGltZy5qcGdcIiBhbHQ9XCJBc3RyYSBQb3B1cCBJbWFnZVwiIC8+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nbW9kYWxfY2xvc2UnPlg8L3A+XG4gICAgICA8L2E+XG4gICAgPC9Nb2RhbD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlUG9wdXA7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJNb2RhbCIsIkltYWdlUG9wdXAiLCJtb2RhbElzT3BlbiIsInNldE1vZGFsSXNPcGVuIiwiY2xvc2VNb2RhbCIsImlzT3BlbiIsIm9uUmVxdWVzdENsb3NlIiwiYSIsImhyZWYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/popup/image.js\n");

/***/ })

});
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

/***/ "./components/Home-A/Testimonials.js":
/*!*******************************************!*\
  !*** ./components/Home-A/Testimonials.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var _data_TestimonialsData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/TestimonialsData */ \"./data/TestimonialsData.js\");\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nswiper__WEBPACK_IMPORTED_MODULE_3__[\"default\"].use([\n    swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination\n]);\nvar Testimonials = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), seeMore = ref[0], setSeeMore = ref[1];\n    var onSeeMore = function() {\n        setSeeMore(true);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"testimonial__area pt-80 fix\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-xxl-12\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"section__title-wrapper-2 mb-40 text-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"section__title-2\",\n                                    children: \"Testimonials\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 25\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                lineNumber: 21,\n                                columnNumber: 22\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                            lineNumber: 20,\n                            columnNumber: 19\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                        lineNumber: 19,\n                        columnNumber: 16\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-xxl-12\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"testimonial__slider\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n                                    spaceBetween: 30,\n                                    slidesPerView: 1,\n                                    className: \"testimonial__slider\",\n                                    autoplay: {\n                                        delay: 3000\n                                    },\n                                    breakpoints: {\n                                        550: {\n                                            slidesPerView: 1\n                                        },\n                                        768: {\n                                            slidesPerView: 2\n                                        },\n                                        992: {\n                                            slidesPerView: 2\n                                        }\n                                    },\n                                    children: _data_TestimonialsData__WEBPACK_IMPORTED_MODULE_4__.TestimonialsList.map(function(testimonial) {\n                                        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"testimonial__item transition-3 text-left white-bg\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"testimonial__avatar\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                            className: \"toppers\",\n                                                            src: testimonial.img,\n                                                            alt: \"\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                                            lineNumber: 52,\n                                                            columnNumber: 43\n                                                        }, _this1)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                                        lineNumber: 51,\n                                                        columnNumber: 40\n                                                    }, _this1),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"testimonial__avatar-info mb-5\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                                children: [\n                                                                    testimonial.name,\n                                                                    \" | \",\n                                                                    testimonial.year,\n                                                                    \" AIR \",\n                                                                    testimonial.rank\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                                                lineNumber: 55,\n                                                                columnNumber: 43\n                                                            }, _this1),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                children: [\n                                                                    testimonial.desc.length > 500 ? testimonial.desc.substring(0, 504) + \"...\" : testimonial.desc,\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                        onClick: function() {\n                                                                            return onSeeMore();\n                                                                        },\n                                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                            style: {\n                                                                                color: '#333996'\n                                                                            },\n                                                                            children: testimonial.desc.length > 500 ? \"see more\" : \"\"\n                                                                        }, void 0, false, {\n                                                                            fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                                                            lineNumber: 56,\n                                                                            columnNumber: 172\n                                                                        }, _this1)\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                                                        lineNumber: 56,\n                                                                        columnNumber: 141\n                                                                    }, _this1)\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                                                lineNumber: 56,\n                                                                columnNumber: 43\n                                                            }, _this1)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                                        lineNumber: 54,\n                                                        columnNumber: 40\n                                                    }, _this1)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                                lineNumber: 50,\n                                                columnNumber: 37\n                                            }, _this1)\n                                        }, testimonial.id, false, {\n                                            fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                            lineNumber: 49,\n                                            columnNumber: 41\n                                        }, _this1));\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 25\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                lineNumber: 28,\n                                columnNumber: 22\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                            lineNumber: 27,\n                            columnNumber: 19\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                        lineNumber: 26,\n                        columnNumber: 16\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n            lineNumber: 17,\n            columnNumber: 10\n        }, _this)\n    }, void 0, false));\n};\n_s(Testimonials, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Testimonials;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Testimonials);\nvar _c;\n$RefreshReg$(_c, \"Testimonials\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7MkNBUGhNVCxXQUFXLENBQUNlLEVBQUU7Ozs7O29DQVcxQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVL0IsQ0FBQztHQS9ESzdCLFlBQVk7S0FBWkEsWUFBWTtBQWlFbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hvbWUtQS9UZXN0aW1vbmlhbHMuanM/NGZiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSAnc3dpcGVyL3JlYWN0JztcclxuaW1wb3J0IFN3aXBlckNvcmUsIHsgUGFnaW5hdGlvbiB9IGZyb20gJ3N3aXBlcic7XHJcbmltcG9ydCB7IFRlc3RpbW9uaWFsc0xpc3QgfSBmcm9tICcuLi8uLi9kYXRhL1Rlc3RpbW9uaWFsc0RhdGEnO1xyXG5Td2lwZXJDb3JlLnVzZShbUGFnaW5hdGlvbl0pO1xyXG5cclxuY29uc3QgVGVzdGltb25pYWxzID0gKCkgPT4ge1xyXG5cclxuICAgY29uc3QgW3NlZU1vcmUsIHNldFNlZU1vcmVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICBjb25zdCBvblNlZU1vcmUgPSAoKSA9PiB7XHJcbiAgICAgIHNldFNlZU1vcmUodHJ1ZSlcclxuICAgfVxyXG5cclxuICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGVzdGltb25pYWxfX2FyZWEgcHQtODAgZml4XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWxnXCI+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXh4bC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25fX3RpdGxlLXdyYXBwZXItMiBtYi00MCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwic2VjdGlvbl9fdGl0bGUtMlwiPlRlc3RpbW9uaWFsczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXh4bC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlc3RpbW9uaWFsX19zbGlkZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTd2lwZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuPXszMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldz17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXN0aW1vbmlhbF9fc2xpZGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvcGxheT17eyBkZWxheTogMzAwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50cz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1NTA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVzdGltb25pYWxzTGlzdC5tYXAodGVzdGltb25pYWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFN3aXBlclNsaWRlIGtleT17dGVzdGltb25pYWwuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlc3RpbW9uaWFsX19pdGVtIHRyYW5zaXRpb24tMyB0ZXh0LWxlZnQgd2hpdGUtYmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0aW1vbmlhbF9fYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSd0b3BwZXJzJyBzcmM9e3Rlc3RpbW9uaWFsLmltZ30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdGltb25pYWxfX2F2YXRhci1pbmZvIG1iLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnt0ZXN0aW1vbmlhbC5uYW1lfSB8IHt0ZXN0aW1vbmlhbC55ZWFyfSBBSVIge3Rlc3RpbW9uaWFsLnJhbmt9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3Rlc3RpbW9uaWFsLmRlc2MubGVuZ3RoID4gNTAwID8gdGVzdGltb25pYWwuZGVzYy5zdWJzdHJpbmcoMCwgNTA0KSArIFwiLi4uXCIgOiB0ZXN0aW1vbmlhbC5kZXNjfTxhIG9uQ2xpY2s9eygpID0+IG9uU2VlTW9yZSgpfT48cCBzdHlsZT17eyBjb2xvcjogJyMzMzM5OTYnfX0+e3Rlc3RpbW9uaWFsLmRlc2MubGVuZ3RoID4gNTAwID8gXCJzZWUgbW9yZVwiIDogXCJcIn08L3A+PC9hPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3dpcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8Lz5cclxuICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlc3RpbW9uaWFsczsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiU3dpcGVyQ29yZSIsIlBhZ2luYXRpb24iLCJUZXN0aW1vbmlhbHNMaXN0IiwidXNlIiwiVGVzdGltb25pYWxzIiwic2VlTW9yZSIsInNldFNlZU1vcmUiLCJvblNlZU1vcmUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDMiLCJzcGFjZUJldHdlZW4iLCJzbGlkZXNQZXJWaWV3IiwiYXV0b3BsYXkiLCJkZWxheSIsImJyZWFrcG9pbnRzIiwibWFwIiwidGVzdGltb25pYWwiLCJpbWciLCJzcmMiLCJhbHQiLCJuYW1lIiwieWVhciIsInJhbmsiLCJwIiwiZGVzYyIsImxlbmd0aCIsInN1YnN0cmluZyIsImEiLCJvbkNsaWNrIiwic3R5bGUiLCJjb2xvciIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Home-A/Testimonials.js\n");

/***/ })

});
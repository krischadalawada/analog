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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var _data_TestimonialsData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/TestimonialsData */ \"./data/TestimonialsData.js\");\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nswiper__WEBPACK_IMPORTED_MODULE_3__[\"default\"].use([\n    swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination\n]);\nvar Testimonials = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), seeMore = ref[0], setSeeMore = ref[1];\n    var onSeeMore = function() {\n        setSeeMore(true);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"testimonial__area pt-80 fix\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-xxl-12\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"section__title-wrapper-2 mb-40 text-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"section__title-2\",\n                                    children: \"Testimonials\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 25\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                lineNumber: 21,\n                                columnNumber: 22\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                            lineNumber: 20,\n                            columnNumber: 19\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                        lineNumber: 19,\n                        columnNumber: 16\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-xxl-12\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"testimonial__slider\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n                                    spaceBetween: 30,\n                                    slidesPerView: 1,\n                                    className: \"testimonial__slider\",\n                                    autoplay: {\n                                        delay: 3000\n                                    },\n                                    breakpoints: {\n                                        550: {\n                                            slidesPerView: 1\n                                        },\n                                        768: {\n                                            slidesPerView: 2\n                                        },\n                                        992: {\n                                            slidesPerView: 2\n                                        }\n                                    },\n                                    children: _data_TestimonialsData__WEBPACK_IMPORTED_MODULE_4__.TestimonialsList.map(function(testimonial) {\n                                        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"testimonial__item transition-3 text-left white-bg\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"testimonial__avatar\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                            className: \"toppers\",\n                                                            src: testimonial.img,\n                                                            alt: \"\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                                            lineNumber: 52,\n                                                            columnNumber: 43\n                                                        }, _this1)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                                        lineNumber: 51,\n                                                        columnNumber: 40\n                                                    }, _this1),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"testimonial__avatar-info mb-5\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                                children: [\n                                                                    testimonial.name,\n                                                                    \" | \",\n                                                                    testimonial.year,\n                                                                    \" AIR \",\n                                                                    testimonial.rank\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                                                lineNumber: 55,\n                                                                columnNumber: 43\n                                                            }, _this1),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                children: [\n                                                                    testimonial.desc.length > 450 && !seeMore ? testimonial.desc.substring(0, 450) + \"...\" : testimonial.desc,\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                        className: \"pointer\",\n                                                                        onClick: function() {\n                                                                            return onSeeMore();\n                                                                        },\n                                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                            style: {\n                                                                                color: '#333996',\n                                                                                textDecorationLine: 'underline'\n                                                                            },\n                                                                            children: testimonial.desc.length > 450 && !seeMore ? \"see more\" : \"see less\"\n                                                                        }, void 0, false, {\n                                                                            fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                                                            lineNumber: 56,\n                                                                            columnNumber: 204\n                                                                        }, _this1)\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                                                        lineNumber: 56,\n                                                                        columnNumber: 153\n                                                                    }, _this1)\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                                                lineNumber: 56,\n                                                                columnNumber: 43\n                                                            }, _this1)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                                        lineNumber: 54,\n                                                        columnNumber: 40\n                                                    }, _this1)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                                lineNumber: 50,\n                                                columnNumber: 37\n                                            }, _this1)\n                                        }, testimonial.id, false, {\n                                            fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                            lineNumber: 49,\n                                            columnNumber: 41\n                                        }, _this1));\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 25\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                lineNumber: 28,\n                                columnNumber: 22\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                            lineNumber: 27,\n                            columnNumber: 19\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                        lineNumber: 26,\n                        columnNumber: 16\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n            lineNumber: 17,\n            columnNumber: 10\n        }, _this)\n    }, void 0, false));\n};\n_s(Testimonials, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Testimonials;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Testimonials);\nvar _c;\n$RefreshReg$(_c, \"Testimonials\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksQ0FBQ0MsTUFBTSxHQUFHLEdBQUcsS0FBS3RCLE9BQU8sR0FBRyxDQUFVLFlBQUcsQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkNBUHJSYSxXQUFXLENBQUNnQixFQUFFOzs7OztvQ0FXMUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVS9CLENBQUM7R0EvREs5QixZQUFZO0tBQVpBLFlBQVk7QUFpRWxCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lLUEvVGVzdGltb25pYWxzLmpzPzRmYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gJ3N3aXBlci9yZWFjdCc7XHJcbmltcG9ydCBTd2lwZXJDb3JlLCB7IFBhZ2luYXRpb24gfSBmcm9tICdzd2lwZXInO1xyXG5pbXBvcnQgeyBUZXN0aW1vbmlhbHNMaXN0IH0gZnJvbSAnLi4vLi4vZGF0YS9UZXN0aW1vbmlhbHNEYXRhJztcclxuU3dpcGVyQ29yZS51c2UoW1BhZ2luYXRpb25dKTtcclxuXHJcbmNvbnN0IFRlc3RpbW9uaWFscyA9ICgpID0+IHtcclxuXHJcbiAgIGNvbnN0IFtzZWVNb3JlLCBzZXRTZWVNb3JlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgY29uc3Qgb25TZWVNb3JlID0gKCkgPT4ge1xyXG4gICAgICBzZXRTZWVNb3JlKHRydWUpXHJcbiAgIH1cclxuXHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRlc3RpbW9uaWFsX19hcmVhIHB0LTgwIGZpeFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1sZ1wiPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14eGwtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uX190aXRsZS13cmFwcGVyLTIgbWItNDAgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInNlY3Rpb25fX3RpdGxlLTJcIj5UZXN0aW1vbmlhbHM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14eGwtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0aW1vbmlhbF9fc2xpZGVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3dpcGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2Vlbj17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGVzdGltb25pYWxfX3NsaWRlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXk9e3sgZGVsYXk6IDMwMDAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNTUwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlc3RpbW9uaWFsc0xpc3QubWFwKHRlc3RpbW9uaWFsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxTd2lwZXJTbGlkZSBrZXk9e3Rlc3RpbW9uaWFsLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0aW1vbmlhbF9faXRlbSB0cmFuc2l0aW9uLTMgdGV4dC1sZWZ0IHdoaXRlLWJnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdGltb25pYWxfX2F2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0ndG9wcGVycycgc3JjPXt0ZXN0aW1vbmlhbC5pbWd9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlc3RpbW9uaWFsX19hdmF0YXItaW5mbyBtYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57dGVzdGltb25pYWwubmFtZX0gfCB7dGVzdGltb25pYWwueWVhcn0gQUlSIHt0ZXN0aW1vbmlhbC5yYW5rfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0ZXN0aW1vbmlhbC5kZXNjLmxlbmd0aCA+IDQ1MCAmJiAhc2VlTW9yZSA/IHRlc3RpbW9uaWFsLmRlc2Muc3Vic3RyaW5nKDAsIDQ1MCkgKyBcIi4uLlwiIDogdGVzdGltb25pYWwuZGVzY308YSBjbGFzc05hbWU9J3BvaW50ZXInIG9uQ2xpY2s9eygpID0+IG9uU2VlTW9yZSgpfT48cCBzdHlsZT17eyBjb2xvcjogJyMzMzM5OTYnLCB0ZXh0RGVjb3JhdGlvbkxpbmU6ICd1bmRlcmxpbmUnfX0+e3Rlc3RpbW9uaWFsLmRlc2MubGVuZ3RoID4gNDUwICYmICFzZWVNb3JlID8gXCJzZWUgbW9yZVwiIDogXCJzZWUgbGVzc1wifTwvcD48L2E+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Td2lwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvPlxyXG4gICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVzdGltb25pYWxzOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJTd2lwZXJDb3JlIiwiUGFnaW5hdGlvbiIsIlRlc3RpbW9uaWFsc0xpc3QiLCJ1c2UiLCJUZXN0aW1vbmlhbHMiLCJzZWVNb3JlIiwic2V0U2VlTW9yZSIsIm9uU2VlTW9yZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJoMyIsInNwYWNlQmV0d2VlbiIsInNsaWRlc1BlclZpZXciLCJhdXRvcGxheSIsImRlbGF5IiwiYnJlYWtwb2ludHMiLCJtYXAiLCJ0ZXN0aW1vbmlhbCIsImltZyIsInNyYyIsImFsdCIsIm5hbWUiLCJ5ZWFyIiwicmFuayIsInAiLCJkZXNjIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiYSIsIm9uQ2xpY2siLCJzdHlsZSIsImNvbG9yIiwidGV4dERlY29yYXRpb25MaW5lIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Home-A/Testimonials.js\n");

/***/ })

});
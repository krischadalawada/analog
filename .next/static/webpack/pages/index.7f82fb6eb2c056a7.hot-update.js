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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var _data_TestimonialsData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/TestimonialsData */ \"./data/TestimonialsData.js\");\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nswiper__WEBPACK_IMPORTED_MODULE_3__[\"default\"].use([\n    swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination\n]);\nvar Testimonials = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), seeMore = ref[0], setSeeMore = ref[1];\n    var onSeeMore = function() {\n        setSeeMore(!seeMore);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"testimonial__area pt-80 fix\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-xxl-12\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"section__title-wrapper-2 mb-40 text-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"section__title-2\",\n                                    children: \"Testimonials\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 25\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                lineNumber: 21,\n                                columnNumber: 22\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                            lineNumber: 20,\n                            columnNumber: 19\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                        lineNumber: 19,\n                        columnNumber: 16\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-xxl-12\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"testimonial__slider\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n                                    spaceBetween: 30,\n                                    slidesPerView: 1,\n                                    className: \"testimonial__slider\",\n                                    autoplay: {\n                                        delay: 3000\n                                    },\n                                    breakpoints: {\n                                        550: {\n                                            slidesPerView: 1\n                                        },\n                                        768: {\n                                            slidesPerView: 2\n                                        },\n                                        992: {\n                                            slidesPerView: 2\n                                        }\n                                    },\n                                    children: _data_TestimonialsData__WEBPACK_IMPORTED_MODULE_4__.TestimonialsList.map(function(testimonial) {\n                                        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"testimonial__item transition-3 text-left white-bg\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"testimonial__avatar\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                            className: \"toppers\",\n                                                            src: testimonial.img,\n                                                            alt: \"\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                                            lineNumber: 52,\n                                                            columnNumber: 43\n                                                        }, _this1)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                                        lineNumber: 51,\n                                                        columnNumber: 40\n                                                    }, _this1),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"testimonial__avatar-info mb-5\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                                children: [\n                                                                    testimonial.name,\n                                                                    \" | \",\n                                                                    testimonial.year,\n                                                                    \" AIR \",\n                                                                    testimonial.rank\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                                                lineNumber: 55,\n                                                                columnNumber: 43\n                                                            }, _this1),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                children: [\n                                                                    testimonial.desc.length > 500 && !seeMore ? testimonial.desc.substring(0, 450) + \"...\" : testimonial.desc,\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                        className: \"pointer\",\n                                                                        onClick: function() {\n                                                                            return onSeeMore();\n                                                                        },\n                                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                            style: {\n                                                                                color: '#333996',\n                                                                                textDecorationLine: 'underline'\n                                                                            },\n                                                                            children: testimonial.desc.length > 500 && !seeMore ? \"see more\" : testimonial.desc.length > 500 && seeMore ? \"see less\" : \"\"\n                                                                        }, void 0, false, {\n                                                                            fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                                                            lineNumber: 56,\n                                                                            columnNumber: 204\n                                                                        }, _this1)\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                                                        lineNumber: 56,\n                                                                        columnNumber: 153\n                                                                    }, _this1)\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                                                lineNumber: 56,\n                                                                columnNumber: 43\n                                                            }, _this1)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                                        lineNumber: 54,\n                                                        columnNumber: 40\n                                                    }, _this1)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                                lineNumber: 50,\n                                                columnNumber: 37\n                                            }, _this1)\n                                        }, testimonial.id, false, {\n                                            fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                            lineNumber: 49,\n                                            columnNumber: 41\n                                        }, _this1));\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 25\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                                lineNumber: 28,\n                                columnNumber: 22\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                            lineNumber: 27,\n                            columnNumber: 19\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                        lineNumber: 26,\n                        columnNumber: 16\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/krix/analog-main/components/Home-A/Testimonials.js\",\n            lineNumber: 17,\n            columnNumber: 10\n        }, _this)\n    }, void 0, false));\n};\n_s(Testimonials, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Testimonials;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Testimonials);\nvar _c;\n$RefreshReg$(_c, \"Testimonials\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxJQUFJLENBQUNDLE1BQU0sR0FBRyxHQUFHLEtBQUt0QixPQUFPLEdBQUcsQ0FBVSxZQUFHYSxXQUFXLENBQUNRLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEdBQUcsSUFBSXRCLE9BQU8sR0FBRyxDQUFVLFlBQUcsQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkNBUHJVYSxXQUFXLENBQUNnQixFQUFFOzs7OztvQ0FXMUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVS9CLENBQUM7R0EvREs5QixZQUFZO0tBQVpBLFlBQVk7QUFpRWxCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lLUEvVGVzdGltb25pYWxzLmpzPzRmYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gJ3N3aXBlci9yZWFjdCc7XHJcbmltcG9ydCBTd2lwZXJDb3JlLCB7IFBhZ2luYXRpb24gfSBmcm9tICdzd2lwZXInO1xyXG5pbXBvcnQgeyBUZXN0aW1vbmlhbHNMaXN0IH0gZnJvbSAnLi4vLi4vZGF0YS9UZXN0aW1vbmlhbHNEYXRhJztcclxuU3dpcGVyQ29yZS51c2UoW1BhZ2luYXRpb25dKTtcclxuXHJcbmNvbnN0IFRlc3RpbW9uaWFscyA9ICgpID0+IHtcclxuXHJcbiAgIGNvbnN0IFtzZWVNb3JlLCBzZXRTZWVNb3JlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgY29uc3Qgb25TZWVNb3JlID0gKCkgPT4ge1xyXG4gICAgICBzZXRTZWVNb3JlKCFzZWVNb3JlKVxyXG4gICB9XHJcblxyXG4gICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0ZXN0aW1vbmlhbF9fYXJlYSBwdC04MCBmaXhcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItbGdcIj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHhsLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbl9fdGl0bGUtd3JhcHBlci0yIG1iLTQwIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzZWN0aW9uX190aXRsZS0yXCI+VGVzdGltb25pYWxzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHhsLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdGltb25pYWxfX3NsaWRlclwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXBlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW49ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3PXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3Rlc3RpbW9uaWFsX19zbGlkZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5PXt7IGRlbGF5OiAzMDAwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnRzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDU1MDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXN0aW1vbmlhbHNMaXN0Lm1hcCh0ZXN0aW1vbmlhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8U3dpcGVyU2xpZGUga2V5PXt0ZXN0aW1vbmlhbC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdGltb25pYWxfX2l0ZW0gdHJhbnNpdGlvbi0zIHRleHQtbGVmdCB3aGl0ZS1iZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlc3RpbW9uaWFsX19hdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J3RvcHBlcnMnIHNyYz17dGVzdGltb25pYWwuaW1nfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0aW1vbmlhbF9fYXZhdGFyLWluZm8gbWItNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3Rlc3RpbW9uaWFsLm5hbWV9IHwge3Rlc3RpbW9uaWFsLnllYXJ9IEFJUiB7dGVzdGltb25pYWwucmFua308L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dGVzdGltb25pYWwuZGVzYy5sZW5ndGggPiA1MDAgJiYgIXNlZU1vcmUgPyB0ZXN0aW1vbmlhbC5kZXNjLnN1YnN0cmluZygwLCA0NTApICsgXCIuLi5cIiA6IHRlc3RpbW9uaWFsLmRlc2N9PGEgY2xhc3NOYW1lPSdwb2ludGVyJyBvbkNsaWNrPXsoKSA9PiBvblNlZU1vcmUoKX0+PHAgc3R5bGU9e3sgY29sb3I6ICcjMzMzOTk2JywgdGV4dERlY29yYXRpb25MaW5lOiAndW5kZXJsaW5lJ319Pnt0ZXN0aW1vbmlhbC5kZXNjLmxlbmd0aCA+IDUwMCAmJiAhc2VlTW9yZSA/IFwic2VlIG1vcmVcIiA6IHRlc3RpbW9uaWFsLmRlc2MubGVuZ3RoID4gNTAwICYmIHNlZU1vcmUgPyBcInNlZSBsZXNzXCIgOiBcIlwifTwvcD48L2E+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Td2lwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvPlxyXG4gICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVzdGltb25pYWxzOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJTd2lwZXJDb3JlIiwiUGFnaW5hdGlvbiIsIlRlc3RpbW9uaWFsc0xpc3QiLCJ1c2UiLCJUZXN0aW1vbmlhbHMiLCJzZWVNb3JlIiwic2V0U2VlTW9yZSIsIm9uU2VlTW9yZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJoMyIsInNwYWNlQmV0d2VlbiIsInNsaWRlc1BlclZpZXciLCJhdXRvcGxheSIsImRlbGF5IiwiYnJlYWtwb2ludHMiLCJtYXAiLCJ0ZXN0aW1vbmlhbCIsImltZyIsInNyYyIsImFsdCIsIm5hbWUiLCJ5ZWFyIiwicmFuayIsInAiLCJkZXNjIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiYSIsIm9uQ2xpY2siLCJzdHlsZSIsImNvbG9yIiwidGV4dERlY29yYXRpb25MaW5lIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Home-A/Testimonials.js\n");

/***/ })

});
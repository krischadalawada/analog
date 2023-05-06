"use strict";
exports.id = 3529;
exports.ids = [3529];
exports.modules = {

/***/ 3529:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);


const BreadCrumb = ({ title , subtitle  })=>{
    return(/*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("section", {
            className: "breadcrumb__area include-bg pt-150 pb-150 breadcrumb__overlay",
            style: {
                background: `url(assets/img/breadcrumb/breadcrumb-bg-1.jpg)`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            },
            children: /*#__PURE__*/ _jsx("div", {
                className: "container",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "col-xxl-12",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "breadcrumb__content text-center p-relative z-index-1",
                            children: [
                                /*#__PURE__*/ _jsx("h3", {
                                    className: "breadcrumb__title",
                                    children: title
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "breadcrumb__list",
                                    children: [
                                        /*#__PURE__*/ _jsx("span", {
                                            children: /*#__PURE__*/ _jsx(Link, {
                                                href: "/",
                                                children: /*#__PURE__*/ _jsx("a", {
                                                    children: "Home"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "dvdr",
                                            children: /*#__PURE__*/ _jsx("i", {
                                                className: "fa-regular fa-angle-right"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            children: subtitle
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        })
    }));
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (BreadCrumb)));


/***/ })

};
;
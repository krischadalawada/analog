"use strict";
exports.id = 8478;
exports.ids = [8478];
exports.modules = {

/***/ 3163:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var react_collapsible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7072);
/* harmony import */ var react_collapsible__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5985);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redux_features_coursesSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6309);
/* harmony import */ var _data_linkData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3905);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__]);
_hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const Sidebar = ({ show , handleClose , dynammicPageHeader =false  })=>{
    const { user , logout  } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    // searchValue
    const { 0: searchValue , 1: setSearchValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    // dispatch
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
    // router
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    // handleSubmit
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!searchValue) {} else {
            dispatch((0,_redux_features_coursesSlice__WEBPACK_IMPORTED_MODULE_8__/* .searchText */ .fn)(searchValue));
            router.push('/search-courses');
        }
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Offcanvas, {
                show: show,
                onHide: handleClose,
                placement: "end",
                className: "side__bar",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Offcanvas.Header, {
                        closeButton: true,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "offcanvas__logo logo",
                                children: dynammicPageHeader ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                    href: "/",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/assets/images/logo/logo-new.png",
                                            alt: "logo"
                                        })
                                    })
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                    href: "/",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/assets/images/logo/logo-new.png",
                                            alt: "logo"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "offcanvas__close",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "offcanvas__close-btn",
                                    onClick: handleClose,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "fal fa-times"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Offcanvas.Body, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "sidebar__content",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mobile-menu",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                        id: "mobile-menu",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: _data_linkData__WEBPACK_IMPORTED_MODULE_9__/* ["default"].map */ .Z.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "single_link iconAdd ",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                href: item.url,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    children: item.name
                                                                })
                                                            })
                                                        })
                                                    }, index)
                                                )
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "offcanvas__social mt-20",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "https://www.facebook.com/analogias.academy/",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fab fa-facebook-f"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "https://twitter.com/analog_ias?lang=en",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fab fa-twitter"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "https://www.youtube.com/@analogiasacademy2081",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fab fa-youtube"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "https://in.linkedin.com/in/analogias-academy",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fab fa-linkedin"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const { 0: windowSize , 1: setWindowSize  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        width: 100,
        height: 100
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // only execute all the code below in client side
        if (false) {}
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useWindowSize);


/***/ }),

/***/ 8478:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_linkData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3905);
/* harmony import */ var _hooks_useSticky__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5148);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_features_coursesSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6309);
/* harmony import */ var _data_LoginMenuData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6097);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5985);
/* harmony import */ var _Common_A_SideBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3163);
/* harmony import */ var _Common_A_Window__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7617);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useAuth__WEBPACK_IMPORTED_MODULE_9__, _Common_A_SideBar__WEBPACK_IMPORTED_MODULE_10__]);
([_hooks_useAuth__WEBPACK_IMPORTED_MODULE_9__, _Common_A_SideBar__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const Header = ()=>{
    // handle sidebar show
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    // handle close
    const handleClose = ()=>setShow(false)
    ;
    // handle sidebar show
    const handleShow = ()=>setShow(true)
    ;
    //  sticky
    const { headerSticky  } = (0,_hooks_useSticky__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    // searchValue
    const { 0: searchValue , 1: setSearchValue  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
    // dispatch
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    // user
    const { user  } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    // router
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    // handleSubmit
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!searchValue) {} else {
            dispatch((0,_redux_features_coursesSlice__WEBPACK_IMPORTED_MODULE_7__/* .searchText */ .fn)(searchValue));
            router.push('/search-courses');
        }
    };
    const route = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)().pathname;
    const { width , height  } = (0,_Common_A_Window__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    id: "header-sticky",
                    className: "header__area header__transparent",
                    style: {
                        marginTop: '2%',
                        caretColor: 'transparent'
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container header__bottom",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "elevate p-relative",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "row align-items-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-6",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "header__bottom-left d-flex align-items-center",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "logo",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                        href: "/",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/assets/images/logo/logo-new.png",
                                                                alt: "logo"
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-xxl-10 col-xl-10 col-lg-10 col-md-6 col-6",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "header__bottom-right d-flex justify-content-end align-items-center pl-30",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "main-menu main-menu-2 ml-30 pl-30 d-none d-lg-block",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                                            id: "mobile-menu",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                children: [
                                                                    !(user === null || user === void 0 ? void 0 : user.email) && _data_linkData__WEBPACK_IMPORTED_MODULE_4__/* ["default"].map */ .Z.map((link)=>{
                                                                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                                                href: `${link.url}`,
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                    className: route === link.url ? 'selected' : '',
                                                                                    children: link.name
                                                                                })
                                                                            })
                                                                        }, link.id));
                                                                    }),
                                                                    (user === null || user === void 0 ? void 0 : user.email) && _data_LoginMenuData__WEBPACK_IMPORTED_MODULE_8__/* ["default"].map */ .Z.map((link)=>{
                                                                        var ref;
                                                                        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                            className: link.submenu ? `has-dropdown` : '',
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                                                    href: `${link.url}`,
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                        children: link.name
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                                    className: link.submenu ? `submenu` : '',
                                                                                    children: link === null || link === void 0 ? void 0 : (ref = link.submenu) === null || ref === void 0 ? void 0 : ref.map((sub_menu, index)=>{
                                                                                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                                                                href: `${sub_menu.url}`,
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                    children: sub_menu.name
                                                                                                })
                                                                                            })
                                                                                        }, sub_menu.id));
                                                                                    })
                                                                                })
                                                                            ]
                                                                        }, link.id));
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "focus-trans",
                                                        href: "https://wa.me/916301529232",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "whatsapp",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                className: "wa pointer",
                                                                src: "/assets/images/home/whatsapp.png",
                                                                alt: "logo"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "focus-trans",
                                                        href: "tel:+918494990066",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "phone",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_13__.BsFillTelephoneFill, {
                                                                color: "#fff"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "header__hamburger d-lg-none",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                            type: "button",
                                                            onClick: handleShow,
                                                            className: "hamurger-btn",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {}),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {}),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "slider__shape",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "slider__shape-5 row",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                href: "/civil-results",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "upsc pointer",
                                                    children: "UPSC Results"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                href: "/test-series",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "tseries pointer",
                                                    children: "Test Series"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Common_A_SideBar__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                show: show,
                handleClose: handleClose
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const LoginData = [
    {
        id: 1,
        url: '/',
        name: 'Home',
        submenu: [
            {
                id: 1,
                url: '/home',
                name: 'Home Style 1'
            },
            {
                id: 2,
                url: '/home-two',
                name: 'Home Style 2'
            },
            {
                id: 3,
                url: '/home-three',
                name: 'Home Style 3'
            }, 
        ]
    },
    {
        id: 2,
        url: '/courses',
        name: 'Courses'
    },
    {
        id: 3,
        url: '/my-courses',
        name: 'My Courses'
    },
    {
        id: 4,
        url: '/my-profile',
        name: 'My Profile'
    }, 
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginData);


/***/ }),

/***/ 3905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const links = [
    {
        id: 1,
        url: '/',
        name: 'Home'
    },
    {
        id: 2,
        url: '/courses',
        name: 'Courses'
    },
    {
        id: 3,
        url: '/about-us',
        name: 'About'
    },
    {
        id: 4,
        url: '/downloads',
        name: 'Downloads'
    },
    {
        id: 5,
        url: '/blog',
        name: 'Blog'
    },
    {
        id: 6,
        url: '/FAQ',
        name: 'FAQ'
    },
    {
        id: 7,
        url: '/contact-us',
        name: 'Contact'
    }, 
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (links);


/***/ }),

/***/ 5985:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _useFirebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9267);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useFirebase__WEBPACK_IMPORTED_MODULE_0__]);
_useFirebase__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const useAuth = ()=>{
    const auth = (0,_useFirebase__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    return auth;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAuth);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9267:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(401);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(271);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_features_myOrderSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5575);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_1__]);
firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// import initializeFirebaseApp from "../components/Firebase/firebase.init";





// initializeFirebaseApp()
const useFirebase = ()=>{
    const { 0: user1 , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const router1 = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    // googleProvider
    const googleProvider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider();
    // auth
    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();
    // handle google sign in
    const handleGoogleSignIn = (router)=>{
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithPopup)(auth, googleProvider).then((result)=>{
            const user = result.user;
            setUser(user);
            usersCollection(user.displayName, user.email, 'PUT');
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                position: 'top-center',
                icon: 'success',
                title: 'Register Successfully',
                timer: 1500
            });
            router.push('/');
        }).catch((error)=>{
            // Handle Errors here.
            const errorMessage = error.message;
        });
    };
    // register user
    const handleRegister = (name, email, password, reset, router)=>{
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(auth, email, password).then((result)=>{
            const user = result.user;
            setUser({
                displayName: name,
                email
            });
            usersCollection(name, email, 'POST');
            // update user profile
            (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.updateProfile)(auth.currentUser, {
                displayName: name
            }).then(()=>{}).catch((error)=>{});
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                position: 'top-center',
                icon: 'success',
                title: 'Register Successfully',
                timer: 1500
            });
            reset();
            router.push('/');
        }).catch((error)=>{
            const errorMessage = error.message;
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                icon: 'error',
                title: 'Oops...',
                text: errorMessage,
                timer: 1500
            });
        });
    };
    // login user
    const loginUser = (email, password, reset, router)=>{
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(auth, email, password).then((result)=>{
            const user = result.user;
            setUser(user);
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                position: 'top-center',
                icon: 'success',
                title: 'Login Successfully',
                timer: 1500
            });
            reset();
            router.push('/');
        }).catch((error)=>{
            const errorMessage = error.message;
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                icon: 'error',
                title: 'Oops...',
                text: errorMessage,
                timer: 1500
            });
        });
    };
    // password reset email
    const passwordResetEmail = (email)=>{
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.sendPasswordResetEmail)(auth, email).then(()=>{
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                position: 'top-center',
                icon: 'success',
                title: 'Password reset email sent'
            });
        }).catch((error)=>{
            const errorMessage = error.message;
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                icon: 'error',
                title: 'Oops...',
                text: errorMessage,
                timer: 1500
            });
        });
    };
    // logout
    const logout = ()=>{
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(auth).then(()=>{
            setUser({});
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                icon: 'success',
                title: 'Logout Successfully'
            });
            router1.push('/');
        }).catch((error)=>{
            const errorMessage = error.message;
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                icon: 'error',
                title: 'Oops...',
                text: errorMessage,
                timer: 1500
            });
        });
    };
    // on auth state change
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(auth, (user)=>{
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
        return ()=>unsubscribe()
        ;
    }, [
        auth
    ]);
    // use collection
    const usersCollection = (name, email, userMethod)=>{
        const userData = {
            displayName: name,
            email
        };
        const url = `https://obscure-shelf-38503.herokuapp.com/users`;
        fetch(url, {
            method: userMethod,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        }).then((res)=>res.json()
        ).then((result)=>console.log(result)
        );
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!(user1 === null || user1 === void 0 ? void 0 : user1.email)) {} else {
            dispatch((0,_redux_features_myOrderSlice__WEBPACK_IMPORTED_MODULE_4__/* .MyOrder */ .MP)(user1 === null || user1 === void 0 ? void 0 : user1.email));
        }
    }, [
        user1,
        dispatch
    ]);
    return {
        user: user1,
        handleGoogleSignIn,
        handleRegister,
        loginUser,
        passwordResetEmail,
        logout
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFirebase);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useSticky = ()=>{
    const { 0: headerSticky , 1: setHeaderSticky  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const stickyHeader = ()=>{
        if (window.scrollY > 120) {
            setHeaderSticky(true);
        } else {
            setHeaderSticky(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        window.addEventListener('scroll', stickyHeader);
    }, []);
    return {
        headerSticky
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSticky);


/***/ })

};
;
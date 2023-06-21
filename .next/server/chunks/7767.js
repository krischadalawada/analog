"use strict";
exports.id = 7767;
exports.ids = [7767];
exports.modules = {

/***/ 7767:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_BlogPagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3902);
/* harmony import */ var _BlogRightSide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4121);
/* harmony import */ var _SingleBlog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7205);
/* harmony import */ var _data_BlogData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(304);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SingleBlog__WEBPACK_IMPORTED_MODULE_4__]);
_SingleBlog__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const BlogArea = ()=>{
    var ref, ref1;
    // router
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const category1 = (ref = router.query) === null || ref === void 0 ? void 0 : ref.category;
    const mnYr = (ref1 = router.query) === null || ref1 === void 0 ? void 0 : ref1.mnYr;
    //blogs
    const { 0: blogs , 1: setBlogs  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_data_BlogData__WEBPACK_IMPORTED_MODULE_5__/* .BlogsData */ .C);
    // current page
    const { 0: currentPage , 1: setCurrentPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    // per page
    const { 0: blogPerPage , 1: setBlogPerPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5);
    // index of last page
    const indexOfLastPage = currentPage * blogPerPage;
    // index of first page
    const indexOfFirstPage = indexOfLastPage - blogPerPage;
    // current blogs
    const currentBlogs = blogs.slice(indexOfFirstPage, indexOfLastPage);
    // paginate
    const paginate = (number)=>{
        setCurrentPage(number);
    };
    //categories
    const categories = [
        ...new Set(_data_BlogData__WEBPACK_IMPORTED_MODULE_5__/* .BlogsData.flatMap */ .C.flatMap(({ category  })=>category
        ))
    ];
    const archive = [
        ...new Set(_data_BlogData__WEBPACK_IMPORTED_MODULE_5__/* .BlogsData.flatMap */ .C.flatMap(({ monthYear  })=>monthYear
        ))
    ];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (category1) {
            var filteredBlogs = _data_BlogData__WEBPACK_IMPORTED_MODULE_5__/* .BlogsData.filter */ .C.filter((x)=>x.category === category1
            );
            setBlogs(filteredBlogs);
        } else if (mnYr) {
            var filteredBlogs = _data_BlogData__WEBPACK_IMPORTED_MODULE_5__/* .BlogsData.filter */ .C.filter((x)=>x.monthYear === mnYr
            );
            setBlogs(filteredBlogs);
        }
    }, [
        router.query
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, [
        _data_BlogData__WEBPACK_IMPORTED_MODULE_5__/* .BlogsData */ .C
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "blog__area pt-120 pb-100",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container-lg",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-xxl-8 col-xl-8 col-lg-8",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "postbox__wrapper pr-20",
                                children: [
                                    currentBlogs.map((blog)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SingleBlog__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            blog: blog
                                        }, blog.blogTitle)
                                    ),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "basic-pagination",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_BlogPagination__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            blogPerPage: blogPerPage,
                                            toltalBlogs: blogs.length,
                                            currentPage: currentPage,
                                            paginate: paginate
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-xxl-4 col-xl-4 col-lg-4",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "blog__sidebar pl-70",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "sidebar__widget mb-55",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "sidebar__widget-head mb-35",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "sidebar__widget-title",
                                                        children: "RECENT POSTS"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "sidebar__widget-content",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "rc__post-wrapper",
                                                        children: blogs.slice(0, 5).map((blog)=>{
                                                            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "rc__post d-flex align-items-start",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "rc__thumb mr-20",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                                                            href: `/blog/${blog === null || blog === void 0 ? void 0 : blog.id}`,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                    src: blog === null || blog === void 0 ? void 0 : blog.img,
                                                                                    alt: "",
                                                                                    style: {
                                                                                        objectFit: 'cover'
                                                                                    }
                                                                                })
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "rc__content",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                            className: "rc__title",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                                                                href: `/blog/${blog === null || blog === void 0 ? void 0 : blog.id}`,
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                    children: blog === null || blog === void 0 ? void 0 : blog.blogTitle
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            }, blog === null || blog === void 0 ? void 0 : blog.id));
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "sidebar__widget mb-55",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "sidebar__widget-head mb-35",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "sidebar__widget-title",
                                                        children: "CATEGORIES"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "sidebar__widget-content",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    onClick: ()=>setBlogs(_data_BlogData__WEBPACK_IMPORTED_MODULE_5__/* .BlogsData */ .C)
                                                                    ,
                                                                    children: "All"
                                                                })
                                                            }, 'All'),
                                                            categories.map((cate, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        onClick: ()=>setBlogs(_data_BlogData__WEBPACK_IMPORTED_MODULE_5__/* .BlogsData.filter */ .C.filter((x)=>x.category === cate
                                                                            ))
                                                                        ,
                                                                        children: cate
                                                                    })
                                                                }, index)
                                                            )
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "sidebar__widget mb-55",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "sidebar__widget-head mb-35",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "sidebar__widget-title",
                                                        children: "ARCHIVE"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "sidebar__widget-content",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    onClick: ()=>setBlogs(_data_BlogData__WEBPACK_IMPORTED_MODULE_5__/* .BlogsData */ .C)
                                                                    ,
                                                                    children: "All"
                                                                })
                                                            }, 'All'),
                                                            archive.map((arch, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        onClick: ()=>setBlogs(_data_BlogData__WEBPACK_IMPORTED_MODULE_5__/* .BlogsData.filter */ .C.filter((x)=>x.monthYear === arch
                                                                            ))
                                                                        ,
                                                                        children: arch
                                                                    })
                                                                }, index)
                                                            )
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogArea);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4121:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_features_coursesSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6309);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);






const BlogRightSide = ({ blogs , dynamicPage =false  })=>{
    // searchValue
    const { 0: searchValue , 1: setSearchValue  } = useState('');
    // dispatch
    const dispatch = useDispatch();
    // router
    const router = useRouter();
    // handleSubmit
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!searchValue) {} else {
            dispatch(searchText(searchValue));
            router.push('/search-courses');
        }
    };
    return(/*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("div", {
            className: "col-xxl-4 col-xl-4 col-lg-4",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "blog__sidebar pl-70",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "sidebar__widget mb-55",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "sidebar__widget-head mb-35",
                                children: /*#__PURE__*/ _jsx("h3", {
                                    className: "sidebar__widget-title",
                                    children: "Recent posts"
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "sidebar__widget-content",
                                children: /*#__PURE__*/ _jsx("div", {
                                    className: "rc__post-wrapper",
                                    children: blogs.slice(0, 3).map((blog)=>{
                                        var ref;
                                        return(/*#__PURE__*/ _jsxs("div", {
                                            className: "rc__post d-flex align-items-start",
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "rc__thumb mr-20",
                                                    children: /*#__PURE__*/ _jsx(Link, {
                                                        href: `/blog-details/${blog === null || blog === void 0 ? void 0 : blog._id}`,
                                                        children: /*#__PURE__*/ _jsx("a", {
                                                            children: /*#__PURE__*/ _jsx("img", {
                                                                src: blog === null || blog === void 0 ? void 0 : blog.img,
                                                                alt: "",
                                                                style: {
                                                                    objectFit: 'cover'
                                                                }
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "rc__content",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "rc__meta",
                                                            children: /*#__PURE__*/ _jsx("span", {
                                                                children: blog === null || blog === void 0 ? void 0 : blog.date
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("h6", {
                                                            className: "rc__title",
                                                            children: /*#__PURE__*/ _jsx(Link, {
                                                                href: `/blog-details/${blog === null || blog === void 0 ? void 0 : blog._id}`,
                                                                children: /*#__PURE__*/ _jsxs("a", {
                                                                    children: [
                                                                        blog === null || blog === void 0 ? void 0 : (ref = blog.title) === null || ref === void 0 ? void 0 : ref.substring(0, 35),
                                                                        "..."
                                                                    ]
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, blog === null || blog === void 0 ? void 0 : blog._id));
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "sidebar__widget mb-55",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "sidebar__widget-head mb-35",
                                children: /*#__PURE__*/ _jsx("h3", {
                                    className: "sidebar__widget-title",
                                    children: "Categories"
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "sidebar__widget-content",
                                children: /*#__PURE__*/ _jsxs("ul", {
                                    children: [
                                        /*#__PURE__*/ _jsx("li", {
                                            children: /*#__PURE__*/ _jsx(Link, {
                                                href: "/blog",
                                                children: /*#__PURE__*/ _jsx("a", {
                                                    children: "Category"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            children: /*#__PURE__*/ _jsx(Link, {
                                                href: "/blog",
                                                children: /*#__PURE__*/ _jsx("a", {
                                                    children: "Video & Tips  (4)"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            children: /*#__PURE__*/ _jsx(Link, {
                                                href: "/blog",
                                                children: /*#__PURE__*/ _jsx("a", {
                                                    children: "Education  (8)"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            children: /*#__PURE__*/ _jsx(Link, {
                                                href: "/blog",
                                                children: /*#__PURE__*/ _jsx("a", {
                                                    children: "Business  (5)"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            children: /*#__PURE__*/ _jsx(Link, {
                                                href: "/blog",
                                                children: /*#__PURE__*/ _jsx("a", {
                                                    children: "UX Design  (3)"
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "sidebar__widget mb-55",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "sidebar__widget-head mb-35",
                                children: /*#__PURE__*/ _jsx("h3", {
                                    className: "sidebar__widget-title",
                                    children: "Tags"
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "sidebar__widget-content",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: "tagcloud",
                                    children: [
                                        /*#__PURE__*/ _jsx("a", {
                                            href: "#",
                                            children: "Art & Design"
                                        }),
                                        /*#__PURE__*/ _jsx("a", {
                                            href: "#",
                                            children: "Course"
                                        }),
                                        /*#__PURE__*/ _jsx("a", {
                                            href: "#",
                                            children: "Videos"
                                        }),
                                        /*#__PURE__*/ _jsx("a", {
                                            href: "#",
                                            children: "App"
                                        }),
                                        /*#__PURE__*/ _jsx("a", {
                                            href: "#",
                                            children: "Education"
                                        }),
                                        /*#__PURE__*/ _jsx("a", {
                                            href: "#",
                                            children: "Data Science"
                                        }),
                                        /*#__PURE__*/ _jsx("a", {
                                            href: "#",
                                            children: "Machine Learning"
                                        }),
                                        /*#__PURE__*/ _jsx("a", {
                                            href: "#",
                                            children: "Tips"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "sidebar__widget mb-55",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "sidebar__banner w-img",
                            children: dynamicPage ? /*#__PURE__*/ _jsx("img", {
                                src: "/" + "assets/img/blog/banner/banner-1.jpg",
                                alt: ""
                            }) : /*#__PURE__*/ _jsx("img", {
                                src: "assets/img/blog/banner/banner-1.jpg",
                                alt: ""
                            })
                        })
                    })
                ]
            })
        })
    }));
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (BlogRightSide)));


/***/ }),

/***/ 7205:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3877);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _Common_A_Window__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7617);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_1__]);
swiper__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation
]);
const SingleBlog = ({ blog  })=>{
    const { width , height  } = (0,_Common_A_Window__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const date = blog === null || blog === void 0 ? void 0 : blog.monthYear.split(" ");
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
            className: `postbox__item format-image mb-50 transition-3`,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "postbox__content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "postbox__title",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            href: `/blog/${blog === null || blog === void 0 ? void 0 : blog.id}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: blog === null || blog === void 0 ? void 0 : blog.blogTitle
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "postbox__meta",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                children: [
                                    " ",
                                    date[0],
                                    " ",
                                    blog === null || blog === void 0 ? void 0 : blog.day,
                                    ", ",
                                    date[1],
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                children: [
                                    "- ",
                                    blog === null || blog === void 0 ? void 0 : blog.author
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "postbox__text",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-md-5",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        className: "blog-thumb",
                                        src: blog === null || blog === void 0 ? void 0 : blog.img,
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-md-7",
                                    style: {
                                        marginTop: width > 767 ? 0 : 15
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            children: [
                                                blog === null || blog === void 0 ? void 0 : blog.intro.substring(0, 300),
                                                ".."
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "postbox__read-more",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                href: `/blog/${blog === null || blog === void 0 ? void 0 : blog.id}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "tp-btn",
                                                    children: "Read More"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleBlog);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const BlogPagination = ({ toltalBlogs , blogPerPage , currentPage , paginate  })=>{
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(toltalBlogs / blogPerPage); i++){
        pageNumbers.push(i);
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                children: pageNumbers.map((number)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>paginate(number)
                            ,
                            className: currentPage === number ? 'current' : '',
                            children: number
                        })
                    }, number)
                )
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogPagination);


/***/ })

};
;
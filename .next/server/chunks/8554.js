"use strict";
exports.id = 8554;
exports.ids = [8554];
exports.modules = {

/***/ 8554:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./redux/features/categorySlice.js
var categorySlice = __webpack_require__(2293);
;// CONCATENATED MODULE: ./components/common/Pagination.js


const Pagination_Pagination = ({ coursePerPage , totalCourse , paginate , currentPage  })=>{
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalCourse / coursePerPage); i++){
        pageNumbers.push(i);
    }
    return(/*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("div", {
            className: "col-xxl-12",
            children: /*#__PURE__*/ _jsx("div", {
                className: "basic-pagination text-center mt-20",
                children: /*#__PURE__*/ _jsx("ul", {
                    children: pageNumbers.map((number)=>/*#__PURE__*/ _jsx("li", {
                            children: /*#__PURE__*/ _jsx("button", {
                                onClick: ()=>paginate(number)
                                ,
                                className: currentPage === number ? 'active' : '',
                                children: number
                            })
                        }, number)
                    )
                })
            })
        })
    }));
};
/* harmony default export */ const common_Pagination = ((/* unused pure expression or super */ null && (Pagination_Pagination)));

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Courses/CourseArea.js






const CourseArea = ({ courseData  })=>{
    const { 0: categoryFilter , 1: setCategoryFilter  } = useState(false);
    // allCourseItems
    const allCourseItems = useSelector((state)=>state.courses.allCourses
    );
    // categoryItems
    const categoryItems = useSelector((state)=>state.category.categoryItems
    );
    //   uniqueCategory
    const uniqueCategory = [
        ...new Set(courseData.map((course)=>course.category
        ))
    ];
    // status
    const status = useSelector((state)=>state.category.status
    );
    // currentPage
    const { 0: currentPage , 1: setCurrentPage  } = useState(1);
    // coursePerPage
    const { 0: coursePerPage , 1: setCoursePerPage  } = useState(6);
    // indexOfLastCourse
    const indexOfLastCourse = currentPage * coursePerPage;
    ``;
    // category
    const { 0: category1 , 1: setCategory  } = useState('Category');
    // indexOfFirstCourse
    const indexOfFirstCourse = indexOfLastCourse - coursePerPage;
    // courseItems
    let courseItems = categoryItems.slice(categoryFilter ? 0 : indexOfFirstCourse, categoryFilter ? categoryItems.length : indexOfLastCourse);
    // dispatch
    const dispatch = useDispatch();
    // paginate
    const paginate = (number)=>{
        setCurrentPage(number);
    };
    // dispatch categoryData
    useEffect(()=>{
        dispatch(categoryData(category1));
    }, [
        dispatch,
        category1
    ]);
    // handleCategory
    const handleCategory = (e)=>{
        setCategory(e.target.value);
        if (e.target.value === 'Category') {
            setCategoryFilter(false);
        } else {
            setCategoryFilter(true);
        }
    };
    // loader
    useEffect(()=>{
        if (status === 'pending') {
            return(/*#__PURE__*/ _jsx("div", {
                id: "loading",
                children: /*#__PURE__*/ _jsx("div", {
                    id: "loading-center",
                    children: /*#__PURE__*/ _jsxs("div", {
                        id: "loading-center-absolute",
                        children: [
                            /*#__PURE__*/ _jsx("svg", {
                                id: "loader",
                                children: /*#__PURE__*/ _jsx("path", {
                                    id: "corners",
                                    d: "m 0 12.5 l 0 -12.5 l 50 0 l 0 50 l -50 0 l 0 -37.5"
                                })
                            }),
                            /*#__PURE__*/ _jsx("img", {
                                src: "assets/img/favicon.png",
                                alt: ""
                            })
                        ]
                    })
                })
            }));
        }
    }, [
        status
    ]);
    return(/*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("section", {
            className: "course__area pt-115 pb-90 grey-bg-3",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "course__tab-inner white-bg mb-50",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "row align-items-center",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    className: "col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12",
                                    children: /*#__PURE__*/ _jsxs("div", {
                                        className: "course__tab-wrapper d-flex align-items-center",
                                        children: [
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "course__tab-btn",
                                                children: /*#__PURE__*/ _jsxs("ul", {
                                                    className: "nav nav-tabs",
                                                    id: "courseTab",
                                                    role: "tablist",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("li", {
                                                            className: "nav-item",
                                                            role: "presentation",
                                                            children: /*#__PURE__*/ _jsx("button", {
                                                                className: "nav-link active",
                                                                id: "grid-tab",
                                                                "data-bs-toggle": "tab",
                                                                "data-bs-target": "#grid",
                                                                type: "button",
                                                                role: "tab",
                                                                "aria-controls": "grid",
                                                                "aria-selected": "true",
                                                                children: /*#__PURE__*/ _jsxs("svg", {
                                                                    className: "grid",
                                                                    viewBox: "0 0 24 24",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("rect", {
                                                                            x: "3",
                                                                            y: "3",
                                                                            className: "st0",
                                                                            width: "7",
                                                                            height: "7"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("rect", {
                                                                            x: "14",
                                                                            y: "3",
                                                                            className: "st0",
                                                                            width: "7",
                                                                            height: "7"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("rect", {
                                                                            x: "14",
                                                                            y: "14",
                                                                            className: "st0",
                                                                            width: "7",
                                                                            height: "7"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("rect", {
                                                                            x: "3",
                                                                            y: "14",
                                                                            className: "st0",
                                                                            width: "7",
                                                                            height: "7"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("li", {
                                                            className: "nav-item",
                                                            role: "presentation",
                                                            children: /*#__PURE__*/ _jsx("button", {
                                                                className: "nav-link list",
                                                                id: "list-tab",
                                                                "data-bs-toggle": "tab",
                                                                "data-bs-target": "#list",
                                                                type: "button",
                                                                role: "tab",
                                                                "aria-controls": "list",
                                                                "aria-selected": "false",
                                                                children: /*#__PURE__*/ _jsx("svg", {
                                                                    className: "list",
                                                                    viewBox: "0 0 512 512",
                                                                    children: /*#__PURE__*/ _jsxs("g", {
                                                                        id: "Layer_2_1_",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx("path", {
                                                                                className: "st0",
                                                                                d: "M448,69H192c-17.7,0-32,13.9-32,31s14.3,31,32,31h256c17.7,0,32-13.9,32-31S465.7,69,448,69z"
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("circle", {
                                                                                className: "st0",
                                                                                cx: "64",
                                                                                cy: "100",
                                                                                r: "31"
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("path", {
                                                                                className: "st0",
                                                                                d: "M448,225H192c-17.7,0-32,13.9-32,31s14.3,31,32,31h256c17.7,0,32-13.9,32-31S465.7,225,448,225z"
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("circle", {
                                                                                className: "st0",
                                                                                cx: "64",
                                                                                cy: "256",
                                                                                r: "31"
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("path", {
                                                                                className: "st0",
                                                                                d: "M448,381H192c-17.7,0-32,13.9-32,31s14.3,31,32,31h256c17.7,0,32-13.9,32-31S465.7,381,448,381z"
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("circle", {
                                                                                className: "st0",
                                                                                cx: "64",
                                                                                cy: "412",
                                                                                r: "31"
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "course__view",
                                                children: /*#__PURE__*/ _jsx("h4", {
                                                    children: `Showing 1 - ${courseItems.length} of ${courseData.length}`
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        className: "course__sort d-flex justify-content-sm-end",
                                        children: /*#__PURE__*/ _jsx("div", {
                                            className: "course__sort-inner",
                                            children: /*#__PURE__*/ _jsxs("select", {
                                                onChange: handleCategory,
                                                value: category1,
                                                children: [
                                                    /*#__PURE__*/ _jsx("option", {
                                                        children: "Category"
                                                    }),
                                                    uniqueCategory.map((category, index)=>{
                                                        return(/*#__PURE__*/ _jsx("option", {
                                                            children: category
                                                        }, index));
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "col-xxl-12",
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "course__tab-conent",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: "tab-content",
                                    id: "courseTabContent",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "tab-pane fade show active",
                                            id: "grid",
                                            role: "tabpanel",
                                            "aria-labelledby": "grid-tab",
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "row",
                                                children: courseItems.map((course)=>{
                                                    const { _id , img_bg , price , category , title , teacher_img , tutor_name , lessons  } = course;
                                                    return(/*#__PURE__*/ _jsx("div", {
                                                        className: "col-xxl-4 col-xl-4 col-lg-6 col-md-6",
                                                        children: /*#__PURE__*/ _jsxs("div", {
                                                            className: "course__item white-bg transition-3 mb-30",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "course__thumb w-img fix course_thumb_height",
                                                                    children: /*#__PURE__*/ _jsx(Link, {
                                                                        href: `/course-details/${_id}`,
                                                                        children: /*#__PURE__*/ _jsx("a", {
                                                                            children: /*#__PURE__*/ _jsx("img", {
                                                                                src: img_bg,
                                                                                alt: ""
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "course__content p-relative",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("div", {
                                                                            className: "course__price",
                                                                            children: /*#__PURE__*/ _jsxs("span", {
                                                                                children: [
                                                                                    "$",
                                                                                    price
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("div", {
                                                                            className: "course__tag",
                                                                            children: /*#__PURE__*/ _jsx(Link, {
                                                                                href: `/course-details/${_id}`,
                                                                                children: /*#__PURE__*/ _jsx("a", {
                                                                                    children: category
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("h3", {
                                                                            className: "course__title",
                                                                            children: /*#__PURE__*/ _jsx(Link, {
                                                                                href: `/course-details/${_id}`,
                                                                                children: /*#__PURE__*/ _jsxs("a", {
                                                                                    children: [
                                                                                        title.substring(0, 30),
                                                                                        ".."
                                                                                    ]
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("p", {
                                                                            children: "A beginner’s guide to designing or renovating interior spaces that pop."
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "course__bottom d-sm-flex align-items-center justify-content-between",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("div", {
                                                                                    className: "course__tutor",
                                                                                    children: /*#__PURE__*/ _jsxs("a", {
                                                                                        href: "#",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsx("img", {
                                                                                                src: teacher_img,
                                                                                                alt: ""
                                                                                            }),
                                                                                            tutor_name
                                                                                        ]
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ _jsx("div", {
                                                                                    className: "course__lesson",
                                                                                    children: /*#__PURE__*/ _jsxs("a", {
                                                                                        href: "#",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsxs("svg", {
                                                                                                width: "14",
                                                                                                height: "16",
                                                                                                viewBox: "0 0 14 16",
                                                                                                fill: "none",
                                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ _jsx("path", {
                                                                                                        d: "M1 12.2V4.49999C1 1.7 1.70588 1 4.52941 1H9.47059C12.2941 1 13 1.7 13 4.49999V11.5C13 11.598 13 11.696 12.9929 11.794",
                                                                                                        stroke: "#49535B",
                                                                                                        strokeLinecap: "round",
                                                                                                        strokeLinejoin: "round"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ _jsx("path", {
                                                                                                        d: "M3.01176 10.0999H13V12.5498C13 13.9008 11.8918 14.9998 10.5294 14.9998H3.47059C2.10824 14.9998 1 13.9008 1 12.5498V12.0948C1 10.9959 1.90353 10.0999 3.01176 10.0999Z",
                                                                                                        stroke: "#49535B",
                                                                                                        strokeLinecap: "round",
                                                                                                        strokeLinejoin: "round"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ _jsx("path", {
                                                                                                        d: "M4.17647 4.5H9.82353",
                                                                                                        stroke: "#49535B",
                                                                                                        strokeLinecap: "round",
                                                                                                        strokeLinejoin: "round"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ _jsx("path", {
                                                                                                        d: "M4.17647 6.94995H7.70589",
                                                                                                        stroke: "#49535B",
                                                                                                        strokeLinecap: "round",
                                                                                                        strokeLinejoin: "round"
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            lessons,
                                                                                            " Lessons"
                                                                                        ]
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    }, _id));
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "tab-pane fade",
                                            id: "list",
                                            role: "tabpanel",
                                            "aria-labelledby": "list-tab",
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "row",
                                                children: /*#__PURE__*/ _jsx("div", {
                                                    className: "col-xxl-12",
                                                    children: courseItems.map((course)=>{
                                                        const { _id , img_bg , price , category , title , teacher_img , tutor_name , lessons  } = course;
                                                        return(/*#__PURE__*/ _jsx("div", {
                                                            className: "course__item course__item-list white-bg mb-30 fix",
                                                            children: /*#__PURE__*/ _jsxs("div", {
                                                                className: "row gx-0",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("div", {
                                                                        className: "col-xxl-4 col-xl-4 col-lg-4",
                                                                        children: /*#__PURE__*/ _jsx("div", {
                                                                            className: "course__thumb w-img p-relative fix",
                                                                            style: {
                                                                                height: '100%'
                                                                            },
                                                                            children: /*#__PURE__*/ _jsx(Link, {
                                                                                href: `/course-details/${_id}`,
                                                                                children: /*#__PURE__*/ _jsx("a", {
                                                                                    children: /*#__PURE__*/ _jsx("img", {
                                                                                        src: img_bg,
                                                                                        alt: ""
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("div", {
                                                                        className: "col-xxl-8 col-xl-8 col-lg-8",
                                                                        children: /*#__PURE__*/ _jsxs("div", {
                                                                            className: "course__right p-relative",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "course__content p-relative",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("div", {
                                                                                            className: "course__tag",
                                                                                            children: /*#__PURE__*/ _jsx(Link, {
                                                                                                href: `/course-details/${_id}`,
                                                                                                children: /*#__PURE__*/ _jsx("a", {
                                                                                                    children: category
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsx("h3", {
                                                                                            className: "course__title",
                                                                                            children: /*#__PURE__*/ _jsx(Link, {
                                                                                                href: `/course-details/${_id}`,
                                                                                                children: /*#__PURE__*/ _jsxs("a", {
                                                                                                    children: [
                                                                                                        title === null || title === void 0 ? void 0 : title.substring(0, 30),
                                                                                                        ".."
                                                                                                    ]
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsx("div", {
                                                                                            className: "course__summary",
                                                                                            children: /*#__PURE__*/ _jsx("p", {
                                                                                                children: "Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "course__bottom d-sm-flex align-items-center justify-content-between",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("div", {
                                                                                                    className: "course__tutor",
                                                                                                    children: /*#__PURE__*/ _jsxs("a", {
                                                                                                        href: "#",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ _jsx("img", {
                                                                                                                src: teacher_img,
                                                                                                                alt: ""
                                                                                                            }),
                                                                                                            tutor_name
                                                                                                        ]
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsx("div", {
                                                                                                    className: "course__lesson",
                                                                                                    children: /*#__PURE__*/ _jsxs("a", {
                                                                                                        href: "#",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ _jsxs("svg", {
                                                                                                                width: "14",
                                                                                                                height: "16",
                                                                                                                viewBox: "0 0 14 16",
                                                                                                                fill: "none",
                                                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ _jsx("path", {
                                                                                                                        d: "M1 12.2V4.49999C1 1.7 1.70588 1 4.52941 1H9.47059C12.2941 1 13 1.7 13 4.49999V11.5C13 11.598 13 11.696 12.9929 11.794",
                                                                                                                        stroke: "#49535B",
                                                                                                                        strokeLinecap: "round",
                                                                                                                        strokeLinejoin: "round"
                                                                                                                    }),
                                                                                                                    /*#__PURE__*/ _jsx("path", {
                                                                                                                        d: "M3.01176 10.0999H13V12.5498C13 13.9008 11.8918 14.9998 10.5294 14.9998H3.47059C2.10824 14.9998 1 13.9008 1 12.5498V12.0948C1 10.9959 1.90353 10.0999 3.01176 10.0999Z",
                                                                                                                        stroke: "#49535B",
                                                                                                                        strokeLinecap: "round",
                                                                                                                        strokeLinejoin: "round"
                                                                                                                    }),
                                                                                                                    /*#__PURE__*/ _jsx("path", {
                                                                                                                        d: "M4.17647 4.5H9.82353",
                                                                                                                        stroke: "#49535B",
                                                                                                                        strokeLinecap: "round",
                                                                                                                        strokeLinejoin: "round"
                                                                                                                    }),
                                                                                                                    /*#__PURE__*/ _jsx("path", {
                                                                                                                        d: "M4.17647 6.94995H7.70589",
                                                                                                                        stroke: "#49535B",
                                                                                                                        strokeLinecap: "round",
                                                                                                                        strokeLinejoin: "round"
                                                                                                                    })
                                                                                                                ]
                                                                                                            }),
                                                                                                            lessons,
                                                                                                            " Lessons"
                                                                                                        ]
                                                                                                    })
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "course__content-bottom d-flex justify-content-between align-items-center",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("div", {
                                                                                            className: "course__price-2",
                                                                                            children: /*#__PURE__*/ _jsxs("span", {
                                                                                                children: [
                                                                                                    "$",
                                                                                                    price
                                                                                                ]
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsx("div", {
                                                                                            className: "course__btn",
                                                                                            children: /*#__PURE__*/ _jsx(Link, {
                                                                                                href: `/course-details/${_id}`,
                                                                                                children: /*#__PURE__*/ _jsxs("a", {
                                                                                                    className: "link-btn-2",
                                                                                                    children: [
                                                                                                        "Know Details",
                                                                                                        /*#__PURE__*/ _jsx("i", {
                                                                                                            className: "far fa-arrow-right"
                                                                                                        }),
                                                                                                        /*#__PURE__*/ _jsx("i", {
                                                                                                            className: "far fa-arrow-right"
                                                                                                        })
                                                                                                    ]
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
                                                        }, _id));
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "row",
                        children: !categoryFilter && /*#__PURE__*/ _jsx(Pagination, {
                            coursePerPage: coursePerPage,
                            totalCourse: categoryItems.length,
                            paginate: paginate,
                            currentPage: currentPage
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const Courses_CourseArea = ((/* unused pure expression or super */ null && (CourseArea)));


/***/ })

};
;
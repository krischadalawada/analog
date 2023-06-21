"use strict";
exports.id = 19;
exports.ids = [19];
exports.modules = {

/***/ 2507:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);


const DownloadTabs = ()=>{
    const featuresData = [
        {
            id: 1,
            title: 'TARGET 2022 DAILY TEST SERIES'
        },
        {
            id: 2,
            title: 'SAMIKSHA'
        },
        {
            id: 3,
            title: 'NEWS TODAY'
        },
        {
            id: 4,
            title: 'UPSC'
        },
        {
            id: 5,
            title: 'VIEW ALL'
        }, 
    ];
    return(/*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("section", {
            className: "features__area pb-60",
            children: /*#__PURE__*/ _jsx("div", {
                className: "container-lg",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "features__inner p-relative z-index-1 white-bg",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "row download-menu",
                        children: featuresData.map((feature)=>{
                            return(/*#__PURE__*/ _jsx("div", {
                                className: feature.id === 1 ? "col-md-3 col-12" : feature.id === 3 ? "col-md-3 col-12" : "col-md-2 col-12",
                                children: /*#__PURE__*/ _jsx("div", {
                                    className: "features__item white-bg",
                                    style: {
                                        height: '100%'
                                    },
                                    children: /*#__PURE__*/ _jsx("div", {
                                        className: "",
                                        style: {
                                            width: '100%',
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center'
                                        },
                                        children: /*#__PURE__*/ _jsx("h3", {
                                            className: "features__title",
                                            children: /*#__PURE__*/ _jsx(Link, {
                                                href: "#",
                                                children: /*#__PURE__*/ _jsx("a", {
                                                    children: feature.title
                                                })
                                            })
                                        })
                                    })
                                })
                            }, feature.id));
                        })
                    })
                })
            })
        })
    }));
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (DownloadTabs)));


/***/ }),

/***/ 1246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _data_DownloadsData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2882);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Common_A_Window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7617);






const DownloadsGrid = (props)=>{
    const { width , height  } = (0,_Common_A_Window__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { 0: categories , 1: setCategories  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (props.filter && props.filter === 'VIEW ALL') {
            var DownloadList = _data_DownloadsData__WEBPACK_IMPORTED_MODULE_3__/* .DownloadsData.slice */ .n.slice(0, 9);
        } else if (props.filter && props.filter === 'TARGET 2023 DAILY TEST SERIES') {
            var DownloadList = _data_DownloadsData__WEBPACK_IMPORTED_MODULE_3__/* .DownloadsData.filter */ .n.filter((x)=>x.category === 'Target'
            );
        } else if (props.filter && props.filter === 'SAMIKSHA') {
            var DownloadList = _data_DownloadsData__WEBPACK_IMPORTED_MODULE_3__/* .DownloadsData.filter */ .n.filter((x)=>x.category === 'Samiksha'
            );
        } else if (props.filter && props.filter === 'NEWS TODAY') {
            var DownloadList = _data_DownloadsData__WEBPACK_IMPORTED_MODULE_3__/* .DownloadsData.filter */ .n.filter((x)=>x.category === 'News'
            );
        } else if (props.filter && props.filter === 'UPSC') {
            var DownloadList = _data_DownloadsData__WEBPACK_IMPORTED_MODULE_3__/* .DownloadsData.filter */ .n.filter((x)=>x.category === 'UPSC'
            );
        }
        setCategories(DownloadList);
    }, [
        _data_DownloadsData__WEBPACK_IMPORTED_MODULE_3__/* .DownloadsData */ .n,
        props.filter
    ]);
    const onLoadMore = ()=>{
        setCategories(_data_DownloadsData__WEBPACK_IMPORTED_MODULE_3__/* .DownloadsData */ .n);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "slider__area pt-60 pb-60 include-bg d-flex align-items-center",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container-lg",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-xl-12 col-md-12 col-12 m-auto",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row align-items-center",
                            children: categories && categories.length > 0 && categories.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xl-4 col-md-4 col-sm-6 col-12 m-auto",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "slider__thumb-2 mb-60",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "slider__thumb-home p-relative",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        style: {
                                                            width: '100%'
                                                        },
                                                        src: item.thumbnail,
                                                        alt: item.alt
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                        href: item.url,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "download-btn pointer",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiDownload, {
                                                                color: "#fff",
                                                                size: height / 30
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "download-title",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "text-center",
                                                    children: item.title
                                                })
                                            })
                                        ]
                                    })
                                }, index)
                            )
                        }),
                        categories && categories.length > 0 && props.filter && props.filter === 'VIEW ALL' && _data_DownloadsData__WEBPACK_IMPORTED_MODULE_3__/* .DownloadsData.length */ .n.length !== categories.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-xxl-12",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "section__title-wrapper mt-30 mb-50 text-center",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        onClick: ()=>onLoadMore()
                                        ,
                                        className: "tp-btn-secondary pointer",
                                        style: {
                                            marginRight: '5%'
                                        },
                                        children: [
                                            "Load More ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fa-regular fa-arrow-right fa-ri"
                                            })
                                        ]
                                    })
                                })
                            })
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                    ]
                })
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DownloadsGrid);


/***/ }),

/***/ 852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);


const HeroDownloads = (props)=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "slider__area pt-200 pb-160 include-bg d-flex align-items-center bg-downloads",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: "f-50 text-center white mt-40",
                    children: props.title
                })
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroDownloads);


/***/ }),

/***/ 2882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ DownloadsData)
/* harmony export */ });
const DownloadsData = [
    {
        title: 'Target 2023 Daily Test Series',
        thumbnail: '/assets/images/downloads/target 2023.jpg',
        url: '/downloads/target-2023-daily-test-series',
        category: 'Target',
        alt: 'Analog IAS Academy Target 2023 Daily Test Series Thumbnail',
        list: [
            {
                title: 'Target 2023 Daily Test Series - 01',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-01.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 02',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-02.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 03',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-03.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 04',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-04.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 05',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-05.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 06',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-06.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 07',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-07.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 08',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-08.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 09',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-09.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 10',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-10.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 11',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-11.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 13',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-13.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 16',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-16.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 17',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-17.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 18',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-18.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 19',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-19.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 20',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-20.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 21',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-21.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 23',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-23.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 24',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-24.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 25',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-25.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 26',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-26.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 27',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-27.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 28',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-28.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 29',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-29.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 30',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-30.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 31',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-31.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 32',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-32.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 33',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-33.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 34',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-34.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 35',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-35.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 37',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-37.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 40',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-40.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 41',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-41.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 42',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-42.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 43',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-43.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 44',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-44.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 45',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-45.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 47',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-47.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 48',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-48.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 49',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-49.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 50',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-50.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 51',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-51.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 52',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-52.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 53',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-53.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 54',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-54.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 55',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-55.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 56',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-56.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 57',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-57.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 59',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-59.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 61',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-61.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 64',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-64.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 65',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-65.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 66',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-66.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 69',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-69.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 71',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-71.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 74',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-74.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 77',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-77.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 79',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-79.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 80',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-80.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 82',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-82.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 83',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-83.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 84',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-84.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 85',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-85.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 86',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-86.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 88',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-88.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 89',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-89.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 91',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-91.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 93',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-93.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 95',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-95.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 98',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-98.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 101',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-101.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 102',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-102.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 103',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-103.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 105',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-105.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 106',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-106.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 107',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-107.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 108',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-108.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 109',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-109.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 110',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-110.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 111',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-111.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 112',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-112.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 113',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-113.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 114',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-114.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 115',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-115.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 116',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-116.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 117',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-117.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 118',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-118.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 119',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-119.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 262',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-262.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 263',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-263.pdf'
            },
            {
                title: 'Target 2023 Daily Test Series - 264',
                link: '/assets/downloads/target/',
                path: 'Target2020DailyTestSeries-264.pdf'
            }
        ]
    },
    {
        title: 'UPSC Interview Tips',
        thumbnail: '/assets/images/downloads/INTERVIEW TIPS.jpg',
        url: '/downloads/upsc-interview-tips',
        category: 'UPSC',
        alt: 'Analog IAS Academy UPSC Interview Tips Thumbnail',
        list: [
            {
                title: 'Interview Booklet',
                link: '/assets/downloads/upsc_interview_tips/',
                path: 'Interview_Booklet.pdf'
            },
            {
                title: 'Interview Preparation Content for Mathematics Students',
                link: '/assets/downloads/upsc_interview_tips/',
                path: 'Mathematics_Optional_Content.pdf'
            },
            {
                title: 'Interview Preparation Content Based On Residence',
                link: '/assets/downloads/upsc_interview_tips/',
                path: 'Residence_related.pdf'
            }
        ]
    },
    {
        title: 'The Hindu Hyderabad Edition',
        thumbnail: '/assets/images/downloads/the hindu hyd.jpg',
        url: '/downloads/the-hindu-hyderabad-edition',
        category: 'News',
        alt: 'Analog IAS Academy The Hindu Hyderabad Edition Thumbnail',
        list: [
            {
                "title": "News Articles to Read - 4th June 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "17565096[HYD] Artilces to Read - 4th June 2021.pdf"
            },
            {
                "title": "News Articles to Read - 16th March 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "32512964[HYD] Artilces to Read - 16th March 2021.pdf"
            },
            {
                "title": "News Articles to Read - 15th June 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "59058445[HYD] Artilces to Read - 15th June 2021.pdf"
            },
            {
                "title": "News Articles to Read - 06 January 2022",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "62460557[HYD] Artilces to Read - 06 January 2022.pdf"
            },
            {
                "title": "News Articles to Read - 1st September 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "65859260[HYD] Artilces to Read - 1st September 2021.pdf"
            },
            {
                "title": "News Articles to Read - 28th December 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "70500989[HYD] Artilces to Read - 28th December 2021.pdf"
            },
            {
                "title": "News Articles to Read - 9th September 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "79778113[HYD] Artilces to Read - 9th September 2021.pdf"
            },
            {
                "title": "News Articles to Read - 10th May 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "85093931[HYD] Artilces to Read - 10th May 2021.pdf"
            },
            {
                "title": "News Articles to Read - 5th August 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "85177616[HYD] Artilces to Read - 5th August 2021.pdf"
            },
            {
                "title": "News Articles to Read - 19th May 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "103139778[HYD] Artilces to Read - 19th May 2021.pdf"
            },
            {
                "title": "News Articles to Read - 5th June 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "115528255[HYD] Artilces to Read - 5th June 2021.pdf"
            },
            {
                "title": "News Articles to Read - 27th September 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "135609076[HYD] Artilces to Read - 27th September 2021.pdf"
            },
            {
                "title": "News Articles to Read - 11th February 2022",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "156143038[HYD] Artilces to Read - 11th February 2022.pdf"
            },
            {
                "title": "News Articles to Read - 2nd March 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "160632631[HYD] Artilces to Read - 2nd March 2021.pdf"
            },
            {
                "title": "News Articles to Read - 17th January 2022",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "163720186[HYD] Artilces to Read - 17th January 2022.pdf"
            },
            {
                "title": "News Articles to Read - 9th February 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "163824494[HYD] Artilces to Read - 9th February 2021.pdf"
            },
            {
                "title": "News Articles to Read - 7th August 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "170796472[HYD] Artilces to Read - 7th August 2021.pdf"
            },
            {
                "title": "News Articles to Read - 23rd February 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "183823617[HYD] Artilces to Read - 23rd February 2021.pdf"
            },
            {
                "title": "News Articles to Read - 29th March 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "190774081[HYD] Artilces to Read - 29th March 2021.pdf"
            },
            {
                "title": "News Articles to Read - 14th April 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "191430686[HYD] Artilces to Read - 14th April 2021.pdf"
            },
            {
                "title": "News Articles to Read - 10th June 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "198817594[HYD] Artilces to Read - 10th June 2021.pdf"
            },
            {
                "title": "News Articles to Read - 07 January 2022",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "203048927[HYD] Artilces to Read - 07 January 2022.pdf"
            },
            {
                "title": "News Articles to Read - 27th September 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "204051820[HYD] Artilces to Read - 27th September 2021.pdf"
            },
            {
                "title": "News Articles to Read - 24th March 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "210850691[HYD] Artilces to Read - 24th March 2021.pdf"
            },
            {
                "title": "News Articles to Read - 23rd August 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "225212415[HYD] Artilces to Read - 23rd August 2021.pdf"
            },
            {
                "title": "News Articles to Read - 24th January 2022",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "229039557[HYD] Artilces to Read - 24th January 2022.pdf"
            },
            {
                "title": "News Articles to Read - 12th February 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "243434807[HYD] Artilces to Read - 12th February 2021.pdf"
            },
            {
                "title": "News Articles to Read - 24th September 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "250341340[HYD] Artilces to Read - 24th September 2021.pdf"
            },
            {
                "title": "News Articles to Read - 31st July 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "251252772[HYD] Artilces to Read - 31st July 2021.pdf"
            },
            {
                "title": "News Articles to Read - 23rd September 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "269361727[HYD] Artilces to Read - 23rd September 2021.pdf"
            },
            {
                "title": "News Articles to Read - 18th June 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "276520455[HYD] Artilces to Read - 18th June 2021.pdf"
            },
            {
                "title": "News Articles to Read - 1st June 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "286677210[HYD] Artilces to Read - 1st June 2021.pdf"
            },
            {
                "title": "News Articles to Read - 4th February 2022",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "290586099[HYD] Artilces to Read - 4th February 2022.pdf"
            },
            {
                "title": "News Articles to Read - 17th December 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "306005086[HYD] Artilces to Read - 17th December 2021.pdf"
            },
            {
                "title": "News Articles to Read - 17th March 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "307737671[HYD] Artilces to Read - 17th March 2021.pdf"
            },
            {
                "title": "News Articles to Read - 19th January 2022",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "319933475[HYD] Artilces to Read - 19th January 2022.pdf"
            },
            {
                "title": "News Articles to Read - 4th May 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "322986606[HYD] Artilces to Read - 4th May 2021.pdf"
            },
            {
                "title": "News Articles to Read - 30th June 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "332778681[HYD] Artilces to Read - 30th June 2021.pdf"
            },
            {
                "title": "News Articles to Read - 9th March 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "338906024[HYD] Artilces to Read - 9th March 2021.pdf"
            },
            {
                "title": "News Articles to Read - 21st January 2022",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "338954208[HYD] Artilces to Read - 21st January 2022.pdf"
            },
            {
                "title": "News Articles to Read - 28th May 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "341247738[HYD] Artilces to Read - 28th May 2021.pdf"
            },
            {
                "title": "News Articles to Read - 1st March 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "353610238[HYD] Artilces to Read - 1st March 2021.pdf"
            },
            {
                "title": "News Articles to Read - 16th September 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "356675087[HYD] Artilces to Read - 16th September 2021.pdf"
            },
            {
                "title": "News Articles to Read - 23rd March 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "377850957[HYD] Artilces to Read - 23rd March 2021.pdf"
            },
            {
                "title": "News Articles to Read - 20th September 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "384897971[HYD] Artilces to Read - 20th September 2021.pdf"
            },
            {
                "title": "News Articles to Read - 19th June 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "389093597[HYD] Artilces to Read - 19th June 2021.pdf"
            },
            {
                "title": "News Articles to Read - 14th June 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "397858249[HYD] Artilces to Read - 14th June 2021.pdf"
            },
            {
                "title": "News Articles to Read - 3rd September 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "399749341-HYD- Artilces to Read - 3rd September 2021.pdf"
            },
            {
                "title": "News Articles to Read - 17th April 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "420639306[HYD] Artilces to Read - 17th April 2021.pdf"
            },
            {
                "title": "News Articles to Read - 8th September 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "432037869[HYD] Artilces to Read - 8th September 2021.pdf"
            },
            {
                "title": "News Articles to Read - 3rd April 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "443451720[HYD] Artilces to Read - 3rd April 2021.pdf"
            },
            {
                "title": "News Articles to Read - 04 January 2022",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "454149319[HYD] Artilces to Read - 04 January 2022.pdf"
            },
            {
                "title": "News Articles to Read - 3rd May 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "459133903[HYD] Artilces to Read - 3rd May 2021.pdf"
            },
            {
                "title": "News Articles to Read - 29th April 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "459565037[HYD] Artilces to Read - 29th April 2021.pdf"
            },
            {
                "title": "News Articles to Read - 15th February 2022",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "462234978[HYD] Artilces to Read - 15th February 2022.pdf"
            },
            {
                "title": "News Articles to Read - 13 February 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "496824361[HYD] Artilces to Read - 13 February 2021.pdf"
            },
            {
                "title": "News Articles to Read - 18th March 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "510844538[HYD] Artilces to Read - 18th March 2021.pdf"
            },
            {
                "title": "News Articles to Read - 26th March 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "530108998[HYD] Artilces to Read - 26th March 2021.pdf"
            },
            {
                "title": "News Articles to Read - 7th September 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "538553975[HYD] Artilces to Read - 7th September 2021.pdf"
            },
            {
                "title": "News Articles to Read - 7th June 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "552435481[HYD] Artilces to Read - 7th June 2021.pdf"
            },
            {
                "title": "News Articles to Read - 21st December 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "553059244[HYD] Artilces to Read - 21st December 2021.pdf"
            },
            {
                "title": "News Articles to Read - 15th February 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "556503416[HYD] Artilces to Read - 15th February 2021.pdf"
            },
            {
                "title": "News Articles to Read - 2nd August 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "575235713[HYD] Artilces to Read - 2nd August 2021.pdf"
            },
            {
                "title": "News Articles to Read - 10th April 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "584775222[HYD] Artilces to Read - 10th April 2021.pdf"
            },
            {
                "title": "News Articles to Read - 12th October 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "592266449[HYD] Artilces to Read - 12th October 2021.pdf"
            },
            {
                "title": "News Articles to Read - 1st April 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "608729914[HYD] Artilces to Read - 1st April 2021.pdf"
            },
            {
                "title": "News Articles to Read - 24th June 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "614696429[HYD] Artilces to Read - 24th June 2021.pdf"
            },
            {
                "title": "News Articles to Read - 5th March 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "614927652[HYD] Artilces to Read - 5th March 2021.pdf"
            },
            {
                "title": "News Articles to Read - 12th April 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "623468134[HYD] Artilces to Read - 12th April 2021.pdf"
            },
            {
                "title": "News Articles to Read - 20th April 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "644696773[HYD] Artilces to Read - 20th April 2021.pdf"
            },
            {
                "title": "News Articles to Read - 8th April 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "644783024[HYD] Artilces to Read - 8th April 2021.pdf"
            },
            {
                "title": "News Articles to Read - 27th August 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "658370759[HYD] Artilces to Read - 27th August 2021.pdf"
            },
            {
                "title": "News Articles to Read - 3rd July 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "659971272[HYD] Artilces to Read - 3rd July 2021.pdf"
            },
            {
                "title": "News Articles to Read - 26th June 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "667820318[HYD] Artilces to Read - 26th June 2021.pdf"
            },
            {
                "title": "News Articles to Read - 12th January 2022",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "674243347[HYD] Artilces to Read - 12th January 2022.pdf"
            },
            {
                "title": "News Articles to Read - 6th March 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "680522298[HYD] Artilces to Read - 6th March 2021.pdf"
            },
            {
                "title": "News Articles to Read - 13th September 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "689133258[HYD] Artilces to Read - 13th September 2021.pdf"
            },
            {
                "title": "News Articles to Read - 31st August 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "702043675[HYD] Artilces to Read - 31st August 2021.pdf"
            },
            {
                "title": "News Articles to Read - 30 March 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "723219035[BLR] Artilces to Read - 30 March 2021..pdf"
            },
            {
                "title": "News Articles to Read - 17th June 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "743134974[HYD] Artilces to Read - 17th June 2021.pdf"
            },
            {
                "title": "News Articles to Read - 6th September 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "748561777[HYD] Artilces to Read - 6th September 2021.pdf"
            },
            {
                "title": "News Articles to Read - 8th February 2022",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "752465772[HYD] Artilces to Read - 8th February 2022.pdf"
            },
            {
                "title": "News Articles to Read - 2nd April 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "758289817[HYD] Artilces to Read - 2nd April 2021.pdf"
            },
            {
                "title": "News Articles to Read - 25th September 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "775495604[HYD] Artilces to Read - 25th September 2021.pdf"
            },
            {
                "title": "News Articles to Read - 25th March 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "779152473[HYD] Artilces to Read - 25th March 2021.pdf"
            },
            {
                "title": "News Articles to Read - 28th April 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "804139097[HYD] Artilces to Read - 28th April 2021.pdf"
            },
            {
                "title": "News Articles to Read - 13th March 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "804302768[HYD] Artilces to Read - 13th March 2021.pdf"
            },
            {
                "title": "News Articles to Read - 18th February 2022",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "818617920[HYD] Artilces to Read - 18th February 2022.pdf"
            },
            {
                "title": "News Articles to Read - 3rd August 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "820323424[HYD] Artilces to Read - 3rd August 2021.pdf"
            },
            {
                "title": "News Articles to Read - 15th September 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "859769338[HYD] Artilces to Read - 15th September 2021.pdf"
            },
            {
                "title": "News Articles to Read - 2nd June 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "866947603[HYD] Artilces to Read - 2nd June 2021.pdf"
            },
            {
                "title": "News Articles to Read - 6th October 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "872671386[HYD] Artilces to Read - 6th October 2021.pdf"
            },
            {
                "title": "News Articles to Read - 10 January 2022",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "884571729[HYD] Artilces to Read - 10 January 2022.pdf"
            },
            {
                "title": "News Articles to Read - 2nd February 2022",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "902360834[HYD] Artilces to Read - 2nd February 2022.pdf"
            },
            {
                "title": "News Articles to Read - 21st September 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "914903014[HYD] Artilces to Read - 21st September 2021.pdf"
            },
            {
                "title": "News Articles to Read - 12th March 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "916622472[HYD] Artilces to Read - 12th March 2021.pdf"
            },
            {
                "title": "News Articles to Read - 12th May 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "939730155[HYD] Artilces to Read - 12th May 2021.pdf"
            },
            {
                "title": "News Articles to Read - 27th April 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "943865250[HYD] Artilces to Read - 27th April 2021.pdf"
            },
            {
                "title": "News Articles to Read - 4th September 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "945828314[HYD] Artilces to Read - 4th September 2021.pdf"
            },
            {
                "title": "News Articles to Read - 3rd June 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "952133970[HYD] Artilces to Read - 3rd June 2021.pdf"
            },
            {
                "title": "News Articles to Read - 8th May 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "958621985[HYD] Artilces to Read - 8th May 2021.pdf"
            },
            {
                "title": "News Articles to Read - 10th February 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "961676963[HYD] Artilces to Read - 10th February 2021.pdf"
            },
            {
                "title": "News Articles to Read -25th February 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "978949572_[HYD] Artilces to Read -25th February 2021-converted.pdf"
            },
            {
                "title": "News Articles to Read - 15th April 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "992928506[HYD] Artilces to Read - 15th April 2021.pdf"
            },
            {
                "title": "News Articles to Read - 24th May 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1000804377[HYD] Artilces to Read - 24th May 2021.pdf"
            },
            {
                "title": "News Articles to Read - 3rd March 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1010740156[HYD] Artilces to Read - 3rd March 2021.pdf"
            },
            {
                "title": "News Articles to Read - 13th August 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1011226551[HYD] Artilces to Read - 13th August 2021.pdf"
            },
            {
                "title": "News Articles to Read - 14th February 2022",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1014899835[HYD] Artilces to Read - 14th February 2022.pdf"
            },
            {
                "title": "News Articles to Read - 11th May 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1015369078[HYD] Artilces to Read - 11th May 2021.pdf"
            },
            {
                "title": "News Articles to Read - 20th March 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1028532552[HYD] Artilces to Read - 20th March 2021.pdf"
            },
            {
                "title": "News Articles to Read - 3rd February 2022",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1037279726[HYD] Artilces to Read - 3rd February 2022.pdf"
            },
            {
                "title": "News Articles to Read - 26th January 2022",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1041474084[HYD] Artilces to Read - 26th January 2022.pdf"
            },
            {
                "title": "News Articles to Read - 20th February 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1043437711[HYD] Artilces to Read - 20th February 2021.pdf"
            },
            {
                "title": "News Articles to Read - 18th February 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1047854846[HYD] Artilces to Read - 18th February 2021.pdf"
            },
            {
                "title": "News Articles to Read - 4th October 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1066307763[HYD] Artilces to Read - 4th October 2021.pdf"
            },
            {
                "title": "News Articles to Read - 9th April 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1069292012[HYD] Artilces to Read - 9th April 2021.pdf"
            },
            {
                "title": "News Articles to Read - 5th May 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1071854458[HYD] Artilces to Read - 5th May 2021.pdf"
            },
            {
                "title": "News Articles to Read - 5th July 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1087318428[HYD] Artilces to Read - 5th July 2021.pdf"
            },
            {
                "title": "News Articles to Read - 26th February 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1093659076_[HYD] Artilces to Read - 26th February 2021-converted.pdf"
            },
            {
                "title": "News Articles to Read - 16th June 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1100819927[HYD] Artilces to Read - 16th June 2021.pdf"
            },
            {
                "title": "News Articles to Read - 2nd October 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1106850821[HYD] Artilces to Read - 2nd October 2021.pdf"
            },
            {
                "title": "News Articles to Read - 14th September 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1110493324[HYD] Artilces to Read - 14th September 2021.pdf"
            },
            {
                "title": "News Articles to Read - 21th June 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1116653199[HYD] Artilces to Read - 21th June 2021.pdf"
            },
            {
                "title": "News Articles to Read - 28th September 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1118394946[HYD] Artilces to Read - 28th September 2021.pdf"
            },
            {
                "title": "News Articles to Read - 9th February 2022",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1131797302[HYD] Artilces to Read - 9th February 2022 (1).pdf"
            },
            {
                "title": "News Articles to Read - 15th March 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1157007562[HYD] Artilces to Read - 15th March 2021.pdf"
            },
            {
                "title": "News Articles to Read - 16th April 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1157781641[HYD] Artilces to Read - 16th April 2021.pdf"
            },
            {
                "title": "News Articles to Read - 7th April 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1159951029[HYD] Artilces to Read - 7th April 2021.pdf"
            },
            {
                "title": "News Articles to Read - 10th March 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1163032589[HYD] Artilces to Read - 10th March 2021.pdf"
            },
            {
                "title": "News Articles to Read - 15th May 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1166955278[HYD] Artilces to Read - 15th May 2021.pdf"
            },
            {
                "title": "News Articles to Read - 30th April 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1172339995[HYD] Artilces to Read - 30th April 2021.pdf"
            },
            {
                "title": "News Articles to Read - 17th August 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1173694361[HYD] Artilces to Read - 17th August 2021.pdf"
            },
            {
                "title": "News Articles to Read - 19th April 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1178073518[HYD] Artilces to Read - 19th April 2021.pdf"
            },
            {
                "title": "News Articles to Read - 8th June 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1201723234[HYD] Artilces to Read - 8th June 2021.pdf"
            },
            {
                "title": "News Articles to Read - 31st March 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1207481486[HYD] Artilces to Read - 31st March 2021.pdf"
            },
            {
                "title": "News Articles to Read - 30th December 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1249191973[HYD] Artilces to Read - 30th December 2021.pdf"
            },
            {
                "title": "News Articles to Read - 11th June 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1256809873[HYD] Artilces to Read - 11th June 2021.pdf"
            },
            {
                "title": "News Articles to Read - 29th September 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1278975310[HYD] Artilces to Read - 29th September 2021.pdf"
            },
            {
                "title": "News Articles to Read - 29th January 2022",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1279389877[HYD] Artilces to Read - 29th January 2022.pdf"
            },
            {
                "title": "News Articles to Read - 24th April 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1281257790[HYD] Artilces to Read - 24th April 2021.pdf"
            },
            {
                "title": "News Articles to Read - 8th March 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1287162525[HYD] Artilces to Read - 8th March 2021.pdf"
            },
            {
                "title": "News Articles to Read - 1st February 2022",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1295064905[HYD] Artilces to Read - 1st February 2022.pdf"
            },
            {
                "title": "News Articles to Read - 27th July 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1317548277_[HYD] Artilces to Read - 27th July 2021.pdf"
            },
            {
                "title": "News Articles to Read - 18th January 2022",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1321622242[HYD] Artilces to Read - 18th January 2022.pdf"
            },
            {
                "title": "News Articles to Read - 30th July 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1334464477[HYD] Artilces to Read - 30th July 2021.pdf"
            },
            {
                "title": "News Articles to Read - 05 January 2022",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1354178589[HYD] Artilces to Read - 05 January 2022.pdf"
            },
            {
                "title": "News Articles to Read - 6th April 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1363503561[HYD] Artilces to Read - 6th April 2021.pdf"
            },
            {
                "title": "News Articles to Read - 31st December 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1369857155[HYD] Artilces to Read - 31st December 2021.pdf"
            },
            {
                "title": "News Articles to Read - 17th May 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1391542586[HYD] Artilces to Read - 17th May 2021.pdf"
            },
            {
                "title": "News Articles to Read - 1st July 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1393105331[HYD] Artilces to Read - 1st July 2021.pdf"
            },
            {
                "title": "News Articles to Read - 27th December 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1395215392[HYD] Artilces to Read - 27th December 2021.pdf"
            },
            {
                "title": "News Articles to Read - 19th March 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1417238539[HYD] Artilces to Read - 19th March 2021.pdf"
            },
            {
                "title": "News Articles to Read - 23rd April 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1417416145[HYD] Artilces to Read - 23rd April 2021.pdf"
            },
            {
                "title": "News Articles to Read - 30th August 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1424618049[HYD] Artilces to Read - 30th August 2021.pdf"
            },
            {
                "title": "News Articles to Read - 13th October 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1435666686[HYD] Artilces to Read - 13th October 2021.pdf"
            },
            {
                "title": "News Articles to Read - 11th March 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1439167840[HYD] Artilces to Read - 11th March 2021.pdf"
            },
            {
                "title": "News Articles to Read - 30th September 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1441180253[HYD] Artilces to Read - 30th September 2021.pdf"
            },
            {
                "title": "News Articles to Read - 28th August 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1449220335[HYD] Artilces to Read - 28th August 2021.pdf"
            },
            {
                "title": "News Articles to Read - 26th April 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1457121019[HYD] Artilces to Read - 26th April 2021.pdf"
            },
            {
                "title": "News Articles to Read - 22nd December 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1459114964[HYD] Artilces to Read - 22nd December 2021.pdf"
            },
            {
                "title": "News Articles to Read - 1st October 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1472740795[HYD] Artilces to Read - 1st October 2021.pdf"
            },
            {
                "title": "News Articles to Read - 16th February 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1478916302[HYD] Artilces to Read - 16th February 2021.pdf"
            },
            {
                "title": "News Articles to Read - 29th June 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1481146179[HYD] Artilces to Read - 29th June 2021.pdf"
            },
            {
                "title": "News Articles to Read - 20th January 2022",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1486951855[HYD] Artilces to Read - 20th January 2022.pdf"
            },
            {
                "title": "News Articles to Read - 4th March 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1490460693[HYD] Artilces to Read - 4th March 2021.pdf"
            },
            {
                "title": "News Articles to Read - 08 January 2022",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1512592828[HYD] Artilces to Read - 08 January 2022.pdf"
            },
            {
                "title": "News Articles to Read - 9th June 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1515963567[HYD] Artilces to Read - 9th June 2021.pdf"
            },
            {
                "title": "News Articles to Read - 10th February 2022",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1541622714[HYD] Artilces to Read - 10th February 2022.pdf"
            },
            {
                "title": "News Articles to Read - 1st May 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1547266730[HYD] Artilces to Read - 1st May 2021.pdf"
            },
            {
                "title": "News Articles to Read - 22nd March 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1587459372[HYD] Artilces to Read - 22nd March 2021.pdf"
            },
            {
                "title": "News Articles to Read - 27th May 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1591276900[HYD] Artilces to Read - 27th May 2021.pdf"
            },
            {
                "title": "News Articles to Read - 22nd September 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1605263262[HYD] Artilces to Read - 22nd September 2021.pdf"
            },
            {
                "title": "News Articles to Read - 27th January 2022",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1608696894[HYD] Artilces to Read - 27th January 2022.pdf"
            },
            {
                "title": "News Articles to Read - 25th June 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1645020285[HYD] Artilces to Read - 25th June 2021.pdf"
            },
            {
                "title": "News Articles to Read - 15th December 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1652665994[HYD] Artilces to Read - 15th December 2021.pdf"
            },
            {
                "title": "News Articles to Read - 26th July 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1659396451[HYD] Artilces to Read - 26th July 2021.pdf"
            },
            {
                "title": "News Articles to Read - 29th July 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1669687401[HYD] Artilces to Read - 29th July 2021.pdf"
            },
            {
                "title": "News Articles to Read - 26th August 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1676231459[HYD] Artilces to Read - 26th August 2021.pdf"
            },
            {
                "title": "News Articles to Read - 18th September 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1679614473[HYD] Artilces to Read - 18th September 2021.pdf"
            },
            {
                "title": "News Articles to Read - 31st January 2022",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1689971277[HYD] Artilces to Read - 31st January 2022.pdf"
            },
            {
                "title": "News Articles to Read - 24th July 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1696699299[HYD] Artilces to Read - 24th July 2021.pdf"
            },
            {
                "title": "News Articles to Read - 29th December 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1700085628[HYD] Artilces to Read - 29th December 2021.pdf"
            },
            {
                "title": "News Articles to Read - 4th August 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1730961209[HYD] Artilces to Read - 4th August 2021.pdf"
            },
            {
                "title": "News Articles to Read - 20th May 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1734289053[HYD] Artilces to Read - 20th May 2021.pdf"
            },
            {
                "title": "News Articles to Read - 11th August 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1747755886_[HYD] Artilces to Read - 11th August 2021.pdf"
            },
            {
                "title": "News Articles to Read - 24th August 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1750009311[HYD] Artilces to Read - 24th August 2021.pdf"
            },
            {
                "title": "News Articles to Read - 28th June 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1777629682[HYD] Artilces to Read - 28th June 2021.pdf"
            },
            {
                "title": "News Articles to Read - 6th July 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1795040480[HYD] Artilces to Read - 6th July 2021.pdf"
            },
            {
                "title": "News Articles to Read - 14th May 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1796716989[HYD] Artilces to Read - 14th May 2021.pdf"
            },
            {
                "title": "News Articles to Read - 6th June 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1798757631[HYD] Artilces to Read - 6th June 2021.pdf"
            },
            {
                "title": "News Articles to Read - 13th May 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1826591213[HYD] Artilces to Read - 13th May 2021.pdf"
            },
            {
                "title": "News Articles to Read - 3rd August 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1832177389[HYD] Artilces to Read - 3rd August 2021.pdf"
            },
            {
                "title": "News Articles to Read - 21st May 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1837891296[HYD] Artilces to Read - 21st May 2021.pdf"
            },
            {
                "title": "News Articles to Read - 11th January 2022",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1847325658[HYD] Artilces to Read - 11th January 2022.pdf"
            },
            {
                "title": "News Articles to Read - 17th September 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1848270071[HYD] Artilces to Read - 17th September 2021.pdf"
            },
            {
                "title": "News Articles to Read - 18th May 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1870480491[HYD] Artilces to Read - 18th May 2021.pdf"
            },
            {
                "title": "News Articles to Read - 18th August 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1887884672[HYD] Artilces to Read - 18th August 2021.pdf"
            },
            {
                "title": "News Articles to Read - 19th February 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1893091469[HYD] Artilces to Read - 19th February 2021.pdf"
            },
            {
                "title": "News Articles to Read - 16th August 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1906313082[HYD] Artilces to Read - 16th August 2021.pdf"
            },
            {
                "title": "News Articles to Read - 7th May 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1919914177[HYD] Artilces to Read - 7th May 2021.pdf"
            },
            {
                "title": "News Articles to Read - 29th May 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1926358679[HYD] Artilces to Read - 29th May 2021.pdf"
            },
            {
                "title": "News Articles to Read - 28th January 2022",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1952753218[HYD] Artilces to Read - 28th January 2022.pdf"
            },
            {
                "title": "News Articles to Read - 2nd September 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1958201156[HYD] Artilces to Read - 2nd September 2021.pdf"
            },
            {
                "title": "News Articles to Read - 13th January 2022",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1959845156[HYD] Artilces to Read - 13th January 2022.pdf"
            },
            {
                "title": "News Articles to Read - 8th February 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1970688113[HYD] Artilces to Read - 8th February 2021.pdf"
            },
            {
                "title": "News Articles to Read - 24th February 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1992131287_[HYD] Artilces to Read - 24th February 2021-converted.pdf"
            },
            {
                "title": "News Articles to Read - 16th February 2022",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1992568832[HYD] Artilces to Read - 16th February 2022.pdf"
            },
            {
                "title": "News Articles to Read - 17th February 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "1997173300[HYD] Artilces to Read - 17th February 2021.pdf"
            },
            {
                "title": "News Articles to Read - 22nd April 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "2020377170[HYD] Artilces to Read - 22nd April 2021.pdf"
            },
            {
                "title": "News Articles to Read - 11th February 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "2021513998[HYD] Artilces to Read - 11th February 2021.pdf"
            },
            {
                "title": "News Articles to Read - 3rd February 2022",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "2021997643[HYD] Artilces to Read - 3rd February 2022.pdf"
            },
            {
                "title": "News Articles to Read - 27th March 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "2026391301[HYD] Artilces to Read - 27th March 2021.pdf"
            },
            {
                "title": "News Articles to Read - 26th May 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "2038306142[HYD] Artilces to Read - 26th May 2021.pdf"
            },
            {
                "title": "News Articles to Read - 7th October 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "2059782152[HYD] Artilces to Read - 7th October 2021.pdf"
            },
            {
                "title": "News Articles to Read - 25th January 2022",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "2065358981[HYD] Artilces to Read - 25th January 2022.pdf"
            },
            {
                "title": "News Articles to Read - 28th July 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "2071457862[HYD] Artilces to Read - 28th July 2021.pdf"
            },
            {
                "title": "News Articles to Read - 6th May 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "2092419766[HYD] Artilces to Read - 6th May 2021.pdf"
            },
            {
                "title": "News Articles to Read - 5th April 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "2096387413[HYD] Artilces to Read - 5th April 2021.pdf"
            },
            {
                "title": "News Articles to Read - 03 January 2022",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "2099232084[HYD] Artilces to Read - 03 January 2022.pdf"
            },
            {
                "title": "News Articles to Read - 20th August 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "2113529150[HYD] Artilces to Read - 20th August 2021.pdf"
            },
            {
                "title": "News Articles to Read - 21st April 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "2130438867[HYD] Artilces to Read - 21st April 2021.pdf"
            },
            {
                "title": "News Articles to Read - 22nd May 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "2132727548[HYD] Artilces to Read - 22nd May 2021.pdf"
            },
            {
                "title": "News Articles to Read - 8th October 2021",
                "link": "/assets/downloads/the_hindu_hyderabad_edition/",
                "path": "2143376668[HYD] Artilces to Read - 8th October 2021.pdf"
            }
        ]
    },
    {
        title: 'ASTRA Material',
        thumbnail: '/assets/images/downloads/astra-material.jpg',
        url: 'assets/downloads/astra-material/Astra-Brochure.pdf',
        category: 'UPSC',
        alt: 'Analog IAS Academy ASTRA Material Thumbnail'
    },
    {
        title: 'IAS Interviews',
        thumbnail: '/assets/images/downloads/IAS INTERVIEWS.jpg',
        url: '/downloads/ias-interview',
        category: 'UPSC',
        alt: 'Analog IAS Academy IAS Interviews Thumbnail',
        list: [
            {
                "title": "Karnataka - Current Affairs for 2016 Interview",
                "link": "/assets/downloads/ias_interview/",
                "path": "18442782uploads_download_555716052Karnataka.pdf"
            },
            {
                "title": "Adilabad - District profile",
                "link": "/assets/downloads/ias_interview/",
                "path": "1479720036uploads_download_1179137421Adilabad.pdf"
            },
            {
                "title": "Kurnool - District profile",
                "link": "/assets/downloads/ias_interview/",
                "path": "1936788396uploads_download_546927421Kurnool.pdf"
            },
            {
                "title": "Hobby - Cricket IPL Teams",
                "link": "/assets/downloads/ias_interview/",
                "path": "1052256146uploads_download_816102427Hobby.pdf"
            },
            {
                "title": "Hobbies - Cricket",
                "link": "/assets/downloads/ias_interview/",
                "path": "776982724uploads_download_1621441743Hobbies.pdf"
            },
            {
                "title": "Ananthapur District Profile",
                "link": "/assets/downloads/ias_interview/",
                "path": "1109068311uploads_download_961629104Ananthapur.pdf"
            },
            {
                "title": "Nizambad District Profile",
                "link": "/assets/downloads/ias_interview/",
                "path": "1645169609uploads_download_394263152Nizambad.pdf"
            },
            {
                "title": "District Profile - Vizag",
                "link": "/assets/downloads/ias_interview/",
                "path": "1406898046uploads_download_1264730423District.pdf"
            },
            {
                "title": "District Profile - Srikakulam",
                "link": "/assets/downloads/ias_interview/",
                "path": "1014841822uploads_download_1301155923District.pdf"
            },
            {
                "title": "Amaravati-New Capital of AP",
                "link": "/assets/downloads/ias_interview/",
                "path": "1007729794uploads_download_967677796Amaravati-New.pdf"
            },
            {
                "title": "Guntur District Profile",
                "link": "/assets/downloads/ias_interview/",
                "path": "1346230737uploads_download_1822989579Guntur.pdf"
            },
            {
                "title": "Hobbies - Teaching",
                "link": "/assets/downloads/ias_interview/",
                "path": "855725090uploads_download_972549631Hobbies.pdf"
            },
            {
                "title": "Mahbobnagar District Profile",
                "link": "/assets/downloads/ias_interview/",
                "path": "2051257280uploads_download_1845828622Mahbobnagar.pdf"
            },
            {
                "title": "Pranahita Chevella",
                "link": "/assets/downloads/ias_interview/",
                "path": "1508768247uploads_download_277855795Pranahita.pdf"
            },
            {
                "title": "Polavaram Project",
                "link": "/assets/downloads/ias_interview/",
                "path": "1045986027uploads_download_1525474748PolavaramProject.pdf"
            },
            {
                "title": "Pattiseema",
                "link": "/assets/downloads/ias_interview/",
                "path": "142462202uploads_download_319508183Pattiseema.pdf"
            },
            {
                "title": "Nalgonda District Profile",
                "link": "/assets/downloads/ias_interview/",
                "path": "221627872uploads_download_921386797Nalgonda.pdf"
            },
            {
                "title": "Karimnagar District Profile",
                "link": "/assets/downloads/ias_interview/",
                "path": "539383511uploads_download_373120032Karimnagar.pdf"
            },
            {
                "title": "AP-TELANGANA",
                "link": "/assets/downloads/ias_interview/",
                "path": "828797816uploads_download_2144189475AP.pdf"
            },
            {
                "title": "AP Reorganization Act 2014",
                "link": "/assets/downloads/ias_interview/",
                "path": "33576707uploads_download_2144189475AP.pdf"
            },
            {
                "title": "UPSC members profiles",
                "link": "/assets/downloads/ias_interview/",
                "path": "1146576824uploads_download_1824980009UPSC.pdf"
            },
            {
                "title": "Telangana Budget 2015-16",
                "link": "/assets/downloads/ias_interview/",
                "path": "1367845361uploads_download_1394903666Telangana.pdf"
            },
            {
                "title": "AP BUDGET",
                "link": "/assets/downloads/ias_interview/",
                "path": "1158358749uploads_download_1693198881AP.pdf"
            }
        ]
    },
    {
        title: 'NCERT Books',
        thumbnail: '/assets/images/downloads/ncert books.jpg',
        url: '/downloads/ncert-books',
        category: 'UPSC',
        alt: 'Analog IAS Academy NCERT Books Thumbnail',
        list: [
            {
                "title": "NCERT Book List",
                "link": "/assets/downloads/ncert_books/",
                "path": "1736075053NCERT Books.pdf"
            },
            {
                "title": "Agriculture",
                "link": "/assets/downloads/ncert_books/",
                "path": "876892631Agriculture.pdf"
            },
            {
                "title": "Ancient History",
                "link": "/assets/downloads/ncert_books/",
                "path": "813664597Ancient History.pdf"
            },
            {
                "title": "Democratic Politics II",
                "link": "/assets/downloads/ncert_books/",
                "path": "968497096Democratic Politics II.pdf"
            },
            {
                "title": "Contemporary World Politics",
                "link": "/assets/downloads/ncert_books/",
                "path": "1076003837Contemporary World Politics.pdf"
            },
            {
                "title": "Democratic Politics",
                "link": "/assets/downloads/ncert_books/",
                "path": "665385291Democratic Politics.pdf"
            },
            {
                "title": "Environment - I",
                "link": "/assets/downloads/ncert_books/",
                "path": "61472999Environment - I.pdf"
            },
            {
                "title": "Economy",
                "link": "/assets/downloads/ncert_books/",
                "path": "134796829Economy.pdf"
            },
            {
                "title": "Environment - II",
                "link": "/assets/downloads/ncert_books/",
                "path": "1254763591Environment - II.pdf"
            },
            {
                "title": "Indian Constitution at Work",
                "link": "/assets/downloads/ncert_books/",
                "path": "1493506588Indian Constitution at Work.pdf"
            },
            {
                "title": "Indian Geography",
                "link": "/assets/downloads/ncert_books/",
                "path": "1530691723Indian Geographyy.pdf"
            },
            {
                "title": "Medieval History",
                "link": "/assets/downloads/ncert_books/",
                "path": "838334917Medieval History.pdf"
            },
            {
                "title": "Modern History",
                "link": "/assets/downloads/ncert_books/",
                "path": "1907816969Modern History.pdf"
            },
            {
                "title": "Parliament Handbook",
                "link": "/assets/downloads/ncert_books/",
                "path": "86411688Parliament Hadbook.pdf"
            },
            {
                "title": "Physical Geography",
                "link": "/assets/downloads/ncert_books/",
                "path": "1567041682Physical Geograpy.pdf"
            },
            {
                "title": "Political Science",
                "link": "/assets/downloads/ncert_books/",
                "path": "1842608639Political Science.pdf"
            },
            {
                "title": "Sociology",
                "link": "/assets/downloads/ncert_books/",
                "path": "940720657Sociology.pdf"
            },
            {
                "title": "World Human and Economic Geography",
                "link": "/assets/downloads/ncert_books/",
                "path": "1359480988World Human and Economic Geography.pdf"
            },
            {
                "title": "NIOS History",
                "link": "/assets/downloads/ncert_books/",
                "path": "1927411669NIOS History.pdf"
            },
            {
                "title": "Political Science - II",
                "link": "/assets/downloads/ncert_books/",
                "path": "1115663971Political Science II.pdf"
            },
            {
                "title": "GS Schedule 2019 Main Test Series - 1",
                "link": "/assets/downloads/ncert_books/",
                "path": "2145700560GS paper 1.pdf"
            },
            {
                "title": "GS Schedule 2019 Main Test Series - 2",
                "link": "/assets/downloads/ncert_books/",
                "path": "86537759Gs paper 2_1.pdf"
            },
            {
                "title": "The Story of Civilization - Part 1",
                "link": "/assets/downloads/ncert_books/",
                "path": "2048601565The Story of Civilization Part I (Arjun Dev).pdf"
            },
            {
                "title": "The Story of Civilization - Part 2",
                "link": "/assets/downloads/ncert_books/",
                "path": "The Story of Civilization Part II (Arjun Dev).pdf"
            },
            {
                "title": "Ancient India(Romila Thapar)",
                "link": "/assets/downloads/ncert_books/",
                "path": "Ancient_India(Romila_Thapar).pdf"
            },
            {
                "title": "Ancient India(Makkham - Lal)",
                "link": "/assets/downloads/ncert_books/",
                "path": "Ancient India (Makkham-Lal).pdf"
            },
            {
                "title": "About ANALOG",
                "link": "/assets/downloads/ncert_books/",
                "path": "645908009About ANALOG.pdf"
            }
        ]
    },
    {
        title: 'Monthly Magazine',
        thumbnail: '/assets/images/downloads/monthly-magazine.jpg',
        url: '/downloads/monthly-magazine',
        category: 'Samiksha',
        alt: 'Analog IAS Academy Monthly Magazine Thumbnail',
        list: [
            {
                "title": "Analog IAS's Samiksha Magazine August Week-02",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "Analog IAS's Samiksha Magazine August Week-03.pdf"
            },
            {
                "title": "Analog IAS's Samiksha Magazine August Week-03",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "Analog IAS's Samiksha Magazine August Week-02.pdf"
            },
            {
                "title": "Analog IAS's Samiksha Magazine August Week-04",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "Analog IAS's Samiksha Magazine August Week-04.pdf"
            },
            {
                "title": "Analog IAS's Samiksha Magazine November Week-01",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "Analog IAS's Samiksha Magazine November Week-01.pdf"
            },
            {
                "title": "Analog IAS's Samiksha Magazine November Week-02",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "Analog IAS's Samiksha Magazine November Week-02.pdf"
            },
            {
                "title": "Analog IAS's Samiksha Magazine November Week-03",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "Analog IAS's Samiksha Magazine November Week-03.pdf"
            },
            {
                "title": "Analog IAS's Samiksha Magazine November Week-04",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "Analog IAS's Samiksha Magazine November Week-04.pdf"
            },
            {
                "title": "Analog IAS's Samiksha Magazine November Week-05",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "Analog IAS's Samiksha Magazine November Week-05.pdf"
            },
            {
                "title": "Analog IAS's Samiksha Magazine October Week-01",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "Analog IAS's Samiksha Magazine October Week-01.pdf"
            },
            {
                "title": "Analog IAS's Samiksha Magazine October Week-02",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "Analog IAS's Samiksha Magazine October Week-02.pdf"
            },
            {
                "title": "Analog IAS's Samiksha Magazine October Week-03",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "Analog IAS's Samiksha Magazine October Week-03.pdf"
            },
            {
                "title": "Analog IAS's Samiksha Magazine October Week-04",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "Analog IAS's Samiksha Magazine October Week-04.pdf"
            },
            {
                "title": "Analog IAS's Samiksha Magazine September Week-01",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "Analog IAS's Samiksha Magazine September Week-01.pdf"
            },
            {
                "title": "Analog IAS's Samiksha Magazine September Week-02",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "Analog IAS's Samiksha Magazine September Week-02.pdf"
            },
            {
                "title": "Analog IAS's Samiksha Magazine September Week-03",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "Analog IAS's Samiksha Magazine September Week-03.pdf"
            },
            {
                "title": "Analog IAS's Samiksha Magazine September Week-04",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "Analog IAS's Samiksha Magazine September Week-04.pdf"
            },
            {
                "title": "Analog IAS's Samiksha Magazine September Week-05",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "Analog IAS's Samiksha Magazine September Week-05.pdf"
            },
            {
                "title": "April 2021 - Main Magazine",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "1679454054April  Main 2021.pdf"
            },
            {
                "title": "April 2021 - Supplementary",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "372064339April Supplimentary-A1-A49.pdf"
            },
            {
                "title": "February 2021 - Supplementary",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "753614994Feb Supplimentary-A1-A32 (1).pdf"
            },
            {
                "title": "Final Samiksha Mag Week - 2",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "Final Samiksha Mag Week - 2.pdf"
            },
            {
                "title": "Final Samiksha Magazine Week - 3",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "Final Samiksha Magazine Week - 3.pdf"
            },
            {
                "title": "Jan 2021 - Supplementary",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "704121714Jan 2021 supplimentary.pdf"
            },
            {
                "title": "January 2021 - Main Magazine",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "1972151188Jan Main 2021.pdf"
            },
            {
                "title": "March 2021 - Main Magazine",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "1851950430March Main 2021.pdf"
            },
            {
                "title": "March 2021 - Supplementary",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "1158984400March Supplimentary-A1-A32.pdf"
            },
            {
                "title": "May 2021 - Main Magazine",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "792878065May Main 2021 9 6 2021.pdf"
            },
            {
                "title": "May 2021 - Supplementary",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "1284661751May Supplimentary-A1-A32.pdf"
            },
            {
                "title": "November Main 2020",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "November Main 2020.pdf"
            },
            {
                "title": "November Supplimentary",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "November Supplimentary.pdf"
            },
            {
                "title": "Samikhsa Week 1 December",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "Samikhsa Week 1 December.pdf"
            },
            {
                "title": "Samiksha  April Week - 2",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "Samiksha  April Week-2 Mag.pdf"
            },
            {
                "title": "Samiksha April Week - 3",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "Samiksha April Week - 3.pdf"
            },
            {
                "title": "Samiksha Feb Week - 1",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "Samiksha Feb Week-1.pdf"
            },
            {
                "title": "Samiksha February Week-02",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "Samiksha February Week-02.pdf"
            },
            {
                "title": "Samiksha Jan Week - 1",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "Samiksha Jan Week-1.pdf"
            },
            {
                "title": "Samiksha Jan Week - 2",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "Samiksha Jan Week -2.pdf"
            },
            {
                "title": "Samiksha Jan Week - 3",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "Samiksha Jan Week -3.pdf"
            },
            {
                "title": "Samiksha Jan Week - 4",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "Jan W4.pdf"
            },
            {
                "title": "Samiksha Magazine Week - 3",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "Samiksha Magazine Week - 3.pdf"
            },
            {
                "title": "Samiksha March Week - 1 Magazine",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "Samiksha March Week - 1 Magazine.pdf"
            },
            {
                "title": "Samiksha March Week - 2",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "Samiksha March Week - 2.pdf"
            },
            {
                "title": "Samiksha May 2019 - Week 2",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "474450370Samiksha May Week - 02 (1).pdf"
            },
            {
                "title": "Samiksha Week - 1",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "Samiksha Week-1.pdf"
            },
            {
                "title": "Samiksha Week - 3 Magazine",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "Samiksha Week-3 Magazine.pdf"
            },
            {
                "title": "Samiksha Week - 4 Magazine",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "Samiksha Week - 4 Magazine.pdf"
            },
            {
                "title": "Samiksha Week - 4 Magazine",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "Samiksha Week- 4 Magazine.pdf"
            },
            {
                "title": "Samiksha Week - 4 Magazine",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "Samiksha Week-4 Magazine.pdf"
            },
            {
                "title": "Samiksha Week - 5",
                "link": "/assets/downloads/monthly_magazine/",
                "path": "Samiksha Week -5.pdf"
            }
        ]
    },
    {
        title: 'GS Previous Papers',
        thumbnail: '/assets/images/downloads/gs previous papers.jpg',
        url: '/downloads/gs-previous-papers-prelims-mains-',
        category: 'UPSC',
        alt: 'Analog IAS Academy GS Previous Papers Thumbnail',
        list: [
            {
                "title": "2020(Pre) General Studies Paper",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "602309398CSP_2020_GS_Paper-1.pdf"
            },
            {
                "title": "2020(Pre) CSAT Paper",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "503446983CSP_2020_GS_Paper-2-2.pdf"
            },
            {
                "title": "2020(Mains) General Studies - IV",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "1325974388Gen_St_P4_2020.pdf"
            },
            {
                "title": "2020(Mains) General Studies - III",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "359796276Gen_St_P3_2020.pdf"
            },
            {
                "title": "2020(Mains) General Studies - II",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "1387145459Gen_St_P2_2020.pdf"
            },
            {
                "title": "2020(Mains) General Studies - I",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "712218777Gen_St_P1_2020.pdf"
            },
            {
                "title": "2020(Mains) Essay",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "1956242202ESSAY_1_2020.pdf"
            },
            {
                "title": "2019(Pre) General Studies Paper",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "150963269csp-p1_2019.pdf"
            },
            {
                "title": "2019(Pre) CSAT Paper",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "35970417csp-p2_2019.pdf"
            },
            {
                "title": "2019(Mains) General Studies - IV",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "1762103648QP-CSM19-GeneralStudies-IV.pdf"
            },
            {
                "title": "2019(Mains) General Studies - III",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "1374302229QP-CSM19-GeneralStudies-III.pdf"
            },
            {
                "title": "2019(Mains) General Studies - II",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "2069586007QP-CSM19-GeneralStudies-II.pdf"
            },
            {
                "title": "2019(Mains) General Studies - I",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "988918941QP-CSM19-GeneralStudies-I.pdf"
            },
            {
                "title": "2019(Mains) Essay",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "525309821QP-CSM19-Essay.pdf"
            },
            {
                "title": "2018(Pre) General Studies Paper",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "47088498QP-CSP-18-GS-II-C.pdf"
            },
            {
                "title": "2018(Pre) CSAT Paper",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "121169516QP-CSP-18-GS-I-C.pdf"
            },
            {
                "title": "2018(Mains) General Studies - IV",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "1145139947GENERAL-STUDIES-PAPER-IV_2018.pdf"
            },
            {
                "title": "2018(Mains) General Studies - III",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "1682781753GENERAL-STUDIES-PAPER-III_2018.pdf"
            },
            {
                "title": "2018(Mains) General Studies - II",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "2067614600GENERAL-STUDIES-PAPER-II_2018.pdf"
            },
            {
                "title": "2018(Mains) General Studies - I",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "66525923GENERAL-STUDIES-PAPER-I_2018.pdf"
            },
            {
                "title": "2018(Mains) Essay",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "2136912971ESSAY_0_2018.pdf"
            },
            {
                "title": "2017(Pre) General Studies Paper",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "1677885485CSP-17-GS_PAPER-1-C.pdf"
            },
            {
                "title": "2017(Pre) CSAT Paper",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "1956764473CSP-17-GS_PAPER-II-C.pdf"
            },
            {
                "title": "2017(Mains) General Studies - iV",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "626597334GS4_0_2017.pdf"
            },
            {
                "title": "2017(Mains) General Studies - III",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "1935902485GS3_0_2017.pdf"
            },
            {
                "title": "2017(Mains) General Studies - II",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "1743779453GS2_0_2017.pdf"
            },
            {
                "title": "2017(Mains) General Studies - I",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "292624841GS1_1_2017.pdf"
            },
            {
                "title": "2017(Mains) Essay",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "2136912971ESSAY_0_2018.pdf"
            },
            {
                "title": "2017 Pre General Studies (CSAT) - II",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "1956764473CSP-17-GS_PAPER-II-C.pdf"
            },
            {
                "title": "2017 Pre General Studies - I",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "1677885485CSP-17-GS_PAPER-1-C.pdf"
            },
            {
                "title": "2017 (mains) General Studies - IV",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "4866258722017 General Studies - IV.pdf"
            },
            {
                "title": "2017 (mains) General Studies - III",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "6646137882017 General Studies - III.pdf"
            },
            {
                "title": "2017 (mains) General Studies - II",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "19090833612017 General Studies - II.pdf"
            },
            {
                "title": "2017 (mains) General Studies - I",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "809843632017 General Studies - I.pdf"
            },
            {
                "title": "2017 (Mains) Essay",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "16673571612017 ESSAY.pdf"
            },
            {
                "title": "2016(Pre) General Studies Paper",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "4526896542016(Pre) General Studies.pdf"
            },
            {
                "title": "2016(Pre) CSAT paper",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "6221064052016(Pre) CSAT.pdf"
            },
            {
                "title": "2016(mains) General Studies - IV",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "17948242652016 General Studies - IV.pdf"
            },
            {
                "title": "2016(mains) General Studies - III",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "18334644162016 General Sudies - III.pdf"
            },
            {
                "title": "2016(mains) General Studies - II",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "8169114862016 General Studies - II.pdf"
            },
            {
                "title": "2016(mains) General Studies - I",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "19394436792016 General Studies - I.pdf"
            },
            {
                "title": "2016(Mains) Essay",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "12074906622016 EASSY.pdf"
            },
            {
                "title": "2015 Pre General Studies - II",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "6568454772015 Pre General Studies- II.pdf"
            },
            {
                "title": "2015 Pre General Studies - I",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "4626961622015 Pre General Studies- I.pdf"
            },
            {
                "title": "2015 General Studies - IV",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "11094595912015 GENERAL STUDIES-VI.pdf"
            },
            {
                "title": "2015 General Studies - III",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "11046178462015 GENERAL STUDIES-III.pdf"
            },
            {
                "title": "2015 General Studies - II",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "6447355512015 GENERAL STUDIES-II.pdf"
            },
            {
                "title": "2015 General Studies - I",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "8002861452015 GENERAL STUDIES-I.pdf"
            },
            {
                "title": "2014 Pre general Studies - II",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "20764046762014 Pre General Studies-II(CSAT).pdf"
            },
            {
                "title": "2014 Pre general Studies - I",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "6245429202014 Pre General studies-I.pdf"
            },
            {
                "title": "2014 General Studies - IV",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "1000925842014 GENERAL STUDIES-IV.pdf"
            },
            {
                "title": "2014 General Studies - III",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "20186849952014 GENERAL STUDIES-III.pdf"
            },
            {
                "title": "2014 General Studies - II",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "2305714802014 GENERAL STUDIES-II.pdf"
            },
            {
                "title": "2014 General Studies - I",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "13503963972014 GENERAL STUDIES-I.pdf"
            },
            {
                "title": "2014 ESSAY",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "389355822014 EASSY.pdf"
            },
            {
                "title": "2013(Pre) General Studies Paper",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "14232639112013(Pre) GS Paper - I.pdf"
            },
            {
                "title": "2013(Pre) CSAT Paper",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "8933768552013(Pre) CSAT Paper - II.pdf"
            },
            {
                "title": "2013(mains) General Studies - IV",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "1286650792013(Mains) General Studies - IV.pdf"
            },
            {
                "title": "2013(mains) General Studies - III",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "12299511902013(Mains) General Studies - III.pdf"
            },
            {
                "title": "2013(mains) General Studies - II",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "4747014532013(Mains) General Studies - II.pdf"
            },
            {
                "title": "2013(Mains) General Studies - I",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "17312226232013(Mains) General Studies - I.pdf"
            },
            {
                "title": "2013(mains) Essay",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "9445111812013(Mains) Essay.pdf"
            },
            {
                "title": "2012 Pre General Studies - II",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "15628537352012 Pre General Studies - II.pdf"
            },
            {
                "title": "2012 Pre General Studies - I",
                "link": "/assets/downloads/gs_previous_papers/",
                "path": "2673116282012 Pre General Studies - I.pdf"
            }
        ]
    },
    {
        title: 'UPSC Materials',
        thumbnail: '/assets/images/downloads/upsc materials.jpg',
        url: '/downloads/upsc-materials',
        category: 'UPSC',
        alt: 'Analog IAS Academy UPSC Materials Thumbnail',
        list: [
            {
                "title": "India Year Book 2016",
                "link": "/assets/downloads/upsc_materials/",
                "path": "1039517880uploads_download_815329810India.pdf"
            },
            {
                "title": "SAMIKSHA - 2 Analysis of Current Affairs from 6 July to 10 Nov 2015",
                "link": "/assets/downloads/upsc_materials/",
                "path": "1279095534uploads_download_1561192667SAMIKSHA.pdf"
            },
            {
                "title": "Ethics,Integrity and Aptitude-Leadership",
                "link": "/assets/downloads/upsc_materials/",
                "path": "1086919936uploads_download_142203807p5.pdf"
            },
            {
                "title": "Geography-Industries",
                "link": "/assets/downloads/upsc_materials/",
                "path": "1394717716uploads_download_1053735984WORLD.pdf"
            },
            {
                "title": "A document on AP Culture",
                "link": "/assets/downloads/upsc_materials/",
                "path": "661118668uploads_download_1077093826AP.pdf"
            },
            {
                "title": "Indian Diaspora Part II ( Pwd: ANALOGIAS )",
                "link": "/assets/downloads/upsc_materials/",
                "path": "1157647056uploads_download_285123566Indian-Diaspora-Part-2.pdf"
            },
            {
                "title": "Indian Diaspora Part I ( Pwd: ANALOGIAS )",
                "link": "/assets/downloads/upsc_materials/",
                "path": "2073607954uploads_download_533100541IndianDiaspora-Part_1.pdf"
            },
            {
                "title": "Economy material-Investment",
                "link": "/assets/downloads/upsc_materials/",
                "path": "1686342997uploads_download_1297440494investment.pdf"
            },
            {
                "title": "Economy material-Inflation budget",
                "link": "/assets/downloads/upsc_materials/",
                "path": "519513891uploads_download_341837491inflation.pdf"
            },
            {
                "title": "Economy material-Inclusive growth",
                "link": "/assets/downloads/upsc_materials/",
                "path": "363127173uploads_download_826649121inclusive.pdf"
            },
            {
                "title": "Economy material-IMF",
                "link": "/assets/downloads/upsc_materials/",
                "path": "1910933889uploads_download_296140534IMF.pdf"
            },
            {
                "title": "Economy material-Growth",
                "link": "/assets/downloads/upsc_materials/",
                "path": "1293434200uploads_download_926048821growth.pdf"
            },
            {
                "title": "Economy material-FDI",
                "link": "/assets/downloads/upsc_materials/",
                "path": "1687475006uploads_download_1195008709FDI.pdf"
            },
            {
                "title": "Economy material-Capital Market",
                "link": "/assets/downloads/upsc_materials/",
                "path": "561945738uploads_download_916013799capital.pdf"
            },
            {
                "title": "Economy material-Part I(Trade)",
                "link": "/assets/downloads/upsc_materials/",
                "path": "992537225uploads_download_3193657617054trade.p"
            },
            {
                "title": "Prelims Test Series 2021 Schedule",
                "link": "/assets/downloads/upsc_materials/",
                "path": "960763211Prelims 2021 Schedule.pdf"
            }
        ]
    },
    {
        title: 'IAS Planner',
        thumbnail: '/assets/images/downloads/IAS planner.jpg',
        url: '/downloads/ias-planner',
        category: 'UPSC',
        alt: 'Analog IAS Academy IAS Planner Thumbnail',
        list: [
            {
                "title": "Civil Services Mains 2013 Results",
                "link": "/assets/downloads/ias_planner/",
                "path": "1377617954uploads_download_2080295478wr_csm2013.pdf"
            },
            {
                "title": "Civils Prelims 2017 Crash Course",
                "link": "/assets/downloads/ias_planner/",
                "path": "1633175052uploads_download_495107063Analog.jpeg"
            },
            {
                "title": "Interview 2016 Schedule 2 - Hyderabad",
                "link": "/assets/downloads/ias_planner/",
                "path": "1828515359uploads_download_698151578Analog_Interview_Hyd.jpg"
            },
            {
                "title": "Interview 2016 Schedule 1 - Bengaluru",
                "link": "/assets/downloads/ias_planner/",
                "path": "884761042uploads_download_1459399768Analog.jpeg"
            },
            {
                "title": "2015 Current Affairs Prelims Route Map",
                "link": "/assets/downloads/ias_planner/",
                "path": "2065214970uploads_download_495832150Route-Map.jpg"
            },
            {
                "title": "Service and Cadre Preference List",
                "link": "/assets/downloads/ias_planner/",
                "path": "1408130842uploads_download_2056089566preference.pdf"
            },
            {
                "title": "GS Mains 2015 Crash Course Schedule",
                "link": "/assets/downloads/ias_planner/",
                "path": "1118481067uploads_download_78257197401.pdf"
            },
            {
                "title": "Current affairs 2014 Session Route Map",
                "link": "/assets/downloads/ias_planner/",
                "path": "1039650698uploads_download_1205743985Route-Map.pdf"
            },
            {
                "title": "Application for study material",
                "link": "/assets/downloads/ias_planner/",
                "path": "587177058uploads_download_165183374005_Analog_adms.pdf"
            },
            {
                "title": "Why SOCIOLOGY?- an information bulletin",
                "link": "/assets/downloads/ias_planner/",
                "path": "1425070926uploads_download_1548775944Why-SOCIOLOGY-an-Information-Bulletin.pdf"
            },
            {
                "title": "A brief write-up on the CSAT paper",
                "link": "/assets/downloads/ias_planner/",
                "path": "1719485605uploads_download_1463810929CSAT.pdf"
            },
            {
                "title": "Civil Services Mains 2013 Question Paper Analysis",
                "link": "/assets/downloads/ias_planner/",
                "path": "1928402834uploads_download_7957918089802013.pdf"
            },
            {
                "title": "General Studies Master Plan",
                "link": "/assets/downloads/ias_planner/",
                "path": "980944775uploads_download_12285534076561GS-MASTER-PLAN-2013.pdf"
            },
            {
                "title": "UPSC 2014 Examination Calendar",
                "link": "/assets/downloads/ias_planner/",
                "path": "111546694uploads_download_7725907876417UPSC-ANNUAL.pdf"
            },
            {
                "title": "Plan and syllabus for Civil services Examination",
                "link": "/assets/downloads/ias_planner/",
                "path": "602209299uploads_download_41911634734CSP2013_Final.pdf"
            },
            {
                "title": "Mathematics optional Reference books",
                "link": "/assets/downloads/ias_planner/",
                "path": "904227985uploads_download_11257480324358ANALOG_Mathematics.pdf"
            },
            {
                "title": "Download Application Form for Study Material",
                "link": "/assets/downloads/ias_planner/",
                "path": "932078694uploads_download_1783785456analog(1).pdf"
            },
            {
                "title": "Civil Services Mains 2013 Results",
                "link": "/assets/downloads/ias_planner/",
                "path": "992707631uploads_download_158183800wr_csm2013.pdf"
            },
            {
                "title": "Schedule for Mock Interview sessions",
                "link": "/assets/downloads/ias_planner/",
                "path": "141852110uploads_download_1546343410MOCK.jpeg"
            },
            {
                "title": "Road map for Civil Services Preparation( Pwd: ANALOGIAS)",
                "link": "/assets/downloads/ias_planner/",
                "path": "1151351274uploads_download_1669004707uploads-download-161998007Road.pdf"
            }
        ]
    },
    {
        title: 'Public Administration (Optional)',
        thumbnail: '/assets/images/downloads/Public Administration.jpg',
        url: '/downloads/public-administration-optional-',
        category: 'UPSC',
        alt: 'Analog IAS Academy Public Administration Thumbnail',
        list: [
            {
                "title": "Main Test Series 2020",
                "link": "/assets/downloads/public_administration/",
                "path": "118312874Public Administration 2020 Schedule.pdf"
            },
            {
                "title": "Mains Test Series Schedule 2018",
                "link": "/assets/downloads/public_administration/",
                "path": "750469592Public Administration.pdf"
            },
            {
                "title": "BA Public Administartion",
                "link": "https://drive.google.com/",
                "path": "open?id=0B6Ysr7QQEjfLZVlkc3JLM094bE0"
            },
            {
                "title": "Administrative Theory",
                "link": "/assets/downloads/public_administration/",
                "path": "1188631802Administrative Theory.pdf"
            },
            {
                "title": "MA Public Administration",
                "link": "https://drive.google.com/",
                "path": "open?id=0B6Ysr7QQEjfLYy1NZEQ0cDV0ZDQ"
            },
            {
                "title": "Administrative Theory _2",
                "link": "/assets/downloads/public_administration/",
                "path": "1214317642Administrative Theory_2.pdf"
            },
            {
                "title": "Decentralisation and Local Governance",
                "link": "/assets/downloads/public_administration/",
                "path": "2095772876Decentralisation and Local Governance.pdf"
            },
            {
                "title": "Development Administration - I",
                "link": "/assets/downloads/public_administration/",
                "path": "1351943437Development Administration - I.pdf"
            },
            {
                "title": "Development Administration - II",
                "link": "/assets/downloads/public_administration/",
                "path": "845882529Development Administration - II.pdf"
            },
            {
                "title": "Development Administration - III",
                "link": "/assets/downloads/public_administration/",
                "path": "1181532819Development Administration - III.pdf"
            },
            {
                "title": "Disaster Management",
                "link": "/assets/downloads/public_administration/",
                "path": "1174066067Disaster Management.pdf"
            },
            {
                "title": "Electronic Governance",
                "link": "/assets/downloads/public_administration/",
                "path": "423067491Electronic Governance.pdf"
            },
            {
                "title": "Financial Administration - I",
                "link": "/assets/downloads/public_administration/",
                "path": "313602350Financial Administration - I.pdf"
            },
            {
                "title": "Financial Administration - II",
                "link": "/assets/downloads/public_administration/",
                "path": "136332537Financial Administration - II.pdf"
            },
            {
                "title": "Human Resource Management",
                "link": "/assets/downloads/public_administration/",
                "path": "113603738Human Resource Management.pdf"
            },
            {
                "title": "India- Democracy and Development",
                "link": "/assets/downloads/public_administration/",
                "path": "724487578India- Democracy and Development.pdf"
            },
            {
                "title": "Indian Administration - I",
                "link": "/assets/downloads/public_administration/",
                "path": "1456493817Indian Administration - I.pdf"
            },
            {
                "title": "Indian Administration - I",
                "link": "/assets/downloads/public_administration/",
                "path": "251103416Indian Administration - I.pdf"
            },
            {
                "title": "Financial Administration - II",
                "link": "/assets/downloads/public_administration/",
                "path": "29384194Financial Administration - II.pdf"
            },
            {
                "title": "Indian Administration - III",
                "link": "/assets/downloads/public_administration/",
                "path": "787322446Indian Administration - III.pdf"
            },
            {
                "title": "Personnel Administration - II",
                "link": "/assets/downloads/public_administration/",
                "path": "1474144829Personnel Administration - II.pdf"
            },
            {
                "title": "Personnel Administration - I",
                "link": "/assets/downloads/public_administration/",
                "path": "1235789370Personnel Administration - I.pdf"
            },
            {
                "title": "Personnel Administration - III",
                "link": "/assets/downloads/public_administration/",
                "path": "205336046Personnel Administration - III.pdf"
            },
            {
                "title": "Public Policy - I",
                "link": "/assets/downloads/public_administration/",
                "path": "444123890Public Policy - I.pdf"
            },
            {
                "title": "Public Policy - II",
                "link": "/assets/downloads/public_administration/",
                "path": "1076629430Public Policy - II.pdf"
            },
            {
                "title": "Public Policy - III",
                "link": "/assets/downloads/public_administration/",
                "path": "1564960180Public Policy - III.pdf"
            },
            {
                "title": "Public Policy and Analysis",
                "link": "/assets/downloads/public_administration/",
                "path": "423369754Public Policy and Analysis.pdf"
            },
            {
                "title": "Public Systems Management",
                "link": "/assets/downloads/public_administration/",
                "path": "1549013018Public Systems Management.pdf"
            },
            {
                "title": "State, Society and Public Administration",
                "link": "/assets/downloads/public_administration/",
                "path": "1819487849State, Society and Public Administration.pdf"
            }
        ]
    },
    {
        title: 'Anthropology (Optional)',
        thumbnail: '/assets/images/downloads/Anthropology.jpg',
        url: '/downloads/anthropology-optional-',
        category: 'UPSC',
        alt: 'Analog IAS Academy Anthropology Thumbnail',
        list: [
            {
                "title": "Mains Test Series 2020 Schedule",
                "link": "/assets/downloads/anthropology/",
                "path": "1748881469Anthropology 2020 Schedule.pdf"
            },
            {
                "title": "Alan Balnard - History and Theory in Anthropology",
                "link": "/assets/downloads/anthropology/",
                "path": "1059038954History_and_Theory_in_Anthropology.pdf"
            },
            {
                "title": "Anthropology Handwritten notes Paper 2(UPSC Ranker)",
                "link": "/assets/downloads/anthropology/",
                "path": "382334039Anthropology Handwritten notes Paper 2.pdf"
            },
            {
                "title": "Anthropology Handwritten notes Paper 1(UPSC Ranker)",
                "link": "/assets/downloads/anthropology/",
                "path": "1763539844Anthropology Handwritten notes Paper 1.pdf"
            },
            {
                "title": "JOURNAL OF THE Anthropoligcal survey of India",
                "link": "/assets/downloads/anthropology/",
                "path": "748604267JOURNAL OF THE Anthropoligcal survey of India.pdf"
            },
            {
                "title": "Tribal Welfare & Development Annual Report 2014-15",
                "link": "/assets/downloads/anthropology/",
                "path": "1954207946Tribal Welfare & Development Annual Report 2014-15.pdf"
            },
            {
                "title": "Vaid Sir Anthropology Part 1 or 4",
                "link": "/assets/downloads/anthropology/",
                "path": "1883912384Vaid Sir Anthropology  Part 1 or 4.pdf"
            },
            {
                "title": "Vaid Sir Anthropology Part 2 or 4",
                "link": "/assets/downloads/anthropology/",
                "path": "1010463058Vaid Sir Anthropology  Part 2 or 4.pdf"
            },
            {
                "title": "Vaid Sir Anthropology Part 3 or 4",
                "link": "/assets/downloads/anthropology/",
                "path": "1305276905Vaid Sir Anthropology  Part 3 or 4.pdf"
            },
            {
                "title": "Vaid Sir Anthropology Part 4 or 4",
                "link": "/assets/downloads/anthropology/",
                "path": "650277882Vaid Sir Anthropology  Part 4 or 4.pdf"
            },
            {
                "title": "Anthropology Syllabus - Section-Wise",
                "link": "/assets/downloads/anthropology/",
                "path": "1300685594Anthropolgy Test Series Section-Wise.pdf"
            },
            {
                "title": "Anthropology Handwritten Notes(UPSC Ranker)",
                "link": "/assets/downloads/anthropology/",
                "path": "1309700698Anthropology_Note-2_Topper_AIR_386_Rahul_Venkat.pdf"
            },
            {
                "title": "Material Paper - 1",
                "link": "/assets/downloads/anthropology/",
                "path": "85834432Paper 1.pdf"
            },
            {
                "title": "Material- Paper 2",
                "link": "/assets/downloads/anthropology/",
                "path": "2008601515Paper 2.pdf"
            }
        ]
    },
    {
        title: 'Political Science and International Relations',
        thumbnail: '/assets/images/downloads/Political science & International Relation.jpg',
        url: '/downloads/political-science-and-international-realtions',
        category: 'UPSC',
        alt: 'Analog IAS Academy Political Science and International Relations Thumbnail',
        list: [
            {
                "title": "Political Science Mains test Series 2019",
                "link": "/assets/downloads/political_science_international_relations/",
                "path": "1080984996Political Science.pdf"
            },
            {
                "title": "Comparative Government and Politics - I",
                "link": "/assets/downloads/political_science_international_relations/",
                "path": "728526948Comparative Government and Politics - I.pdf"
            },
            {
                "title": "Comparative Government and Politics - II",
                "link": "/assets/downloads/political_science_international_relations/",
                "path": "812630403Comparative Government and Politics - II.pdf"
            },
            {
                "title": "Comparative Government and Politics - III",
                "link": "/assets/downloads/political_science_international_relations/",
                "path": "1367932845Comparative Government and Politics - III.pdf"
            },
            {
                "title": "Comparative Government and Politics - V",
                "link": "/assets/downloads/political_science_international_relations/",
                "path": "648321076Comparative Government and Politics - V (1).pdf"
            },
            {
                "title": "Comparative Government and Politics - VI",
                "link": "/assets/downloads/political_science_international_relations/",
                "path": "364066991Comparative Government and Politics - IV.pdf"
            },
            {
                "title": "Comparative Government and Politics - VI",
                "link": "/assets/downloads/political_science_international_relations/",
                "path": "1979344060Comparative Government and Politics - VI.pdf"
            },
            {
                "title": "Globalisation Environment and Development",
                "link": "/assets/downloads/political_science_international_relations/",
                "path": "857974979Globalisation Environment and Development.pdf"
            },
            {
                "title": "Government and Politics in East and South East Asia - I",
                "link": "/assets/downloads/political_science_international_relations/",
                "path": "997932090Government and Politics in East and South East Asia - I.pdf"
            },
            {
                "title": "Government and Politics in East and South East Asia - II",
                "link": "/assets/downloads/political_science_international_relations/",
                "path": "1405273029Government and Politics in East and South East Asia - II.pdf"
            },
            {
                "title": "Government and Politics in East and South East Asia - III",
                "link": "/assets/downloads/political_science_international_relations/",
                "path": "732913830Government and Politics in East and South East Asia - III.pdf"
            },
            {
                "title": "Government and Politics in East and South East Asia - VI",
                "link": "/assets/downloads/political_science_international_relations/",
                "path": "359656836Government and Politics in East and South East Asia - IV.pdf"
            },
            {
                "title": "Government and Politics in East and South East Asia - V",
                "link": "/assets/downloads/political_science_international_relations/",
                "path": "722607741Government and Politics in East and South East Asia - V.pdf"
            },
            {
                "title": "Government And Politics in India - I",
                "link": "/assets/downloads/political_science_international_relations/",
                "path": "1360826732Government And Politics in India - I.pdf"
            },
            {
                "title": "Government And Politics in India - III",
                "link": "/assets/downloads/political_science_international_relations/",
                "path": "64902327Government And Politics in India - III.pdf"
            },
            {
                "title": "Government And Politics in India - II",
                "link": "/assets/downloads/political_science_international_relations/",
                "path": "1654172919Government And Politics in India - II.pdf"
            },
            {
                "title": "Government And Politics in India - IV",
                "link": "/assets/downloads/political_science_international_relations/",
                "path": "759267904Government And Politics in India - IV.pdf"
            },
            {
                "title": "Government And Politics in India - V",
                "link": "/assets/downloads/political_science_international_relations/",
                "path": "531243399Government And Politics in India - V.pdf"
            },
            {
                "title": "Government And Politics in India - VI",
                "link": "/assets/downloads/political_science_international_relations/",
                "path": "1979344060Comparative Government and Politics - VI.pdf"
            },
            {
                "title": "International Relations - I",
                "link": "/assets/downloads/political_science_international_relations/",
                "path": "2109413828International Relations - I.pdf"
            },
            {
                "title": "India- Democracy and Development",
                "link": "/assets/downloads/political_science_international_relations/",
                "path": "1223900483India- Democracy and Development.pdf"
            },
            {
                "title": "International Relations - II",
                "link": "/assets/downloads/political_science_international_relations/",
                "path": "444603621International Relations - II.pdf"
            },
            {
                "title": "International Relations- Theory and Problems",
                "link": "/assets/downloads/political_science_international_relations/",
                "path": "1266939466International Relations- Theory and Problems.pdf"
            },
            {
                "title": "Modern Indian Political Thought - II",
                "link": "/assets/downloads/political_science_international_relations/",
                "path": "924066399Modern Indian Political Thought - II.pdf"
            },
            {
                "title": "Modern Indian Political Thought - I",
                "link": "/assets/downloads/political_science_international_relations/",
                "path": "1801145519Modern Indian Political Thought - I.pdf"
            },
            {
                "title": "Peace and Conflict Studies",
                "link": "/assets/downloads/political_science_international_relations/",
                "path": "440349794Peace and Conflict Studies.pdf"
            },
            {
                "title": "Modern Indian Political Thought - III",
                "link": "/assets/downloads/political_science_international_relations/",
                "path": "1504766202Modern Indian Political Thought - III.pdf"
            },
            {
                "title": "Political Ideas and Ideologies",
                "link": "/assets/downloads/political_science_international_relations/",
                "path": "1203369497Political Ideas and Ideologies.pdf"
            },
            {
                "title": "Political Theory",
                "link": "/assets/downloads/political_science_international_relations/",
                "path": "222992580Political Theory.pdf"
            },
            {
                "title": "Social and Political Thought in Modern India",
                "link": "/assets/downloads/political_science_international_relations/",
                "path": "244193802Social and Political Thought in Modern India.pdf"
            },
            {
                "title": "Social Movements and Politics in India",
                "link": "/assets/downloads/political_science_international_relations/",
                "path": "494637688Social Movements and Politics in India.pdf"
            },
            {
                "title": "South Asia - Economy Society and Politics - I",
                "link": "/assets/downloads/political_science_international_relations/",
                "path": "1904667180South Asia - Economy Society and Politics - I.pdf"
            },
            {
                "title": "South Asia - Economy Society and Politics - II",
                "link": "/assets/downloads/political_science_international_relations/",
                "path": "1127788221South Asia - Economy Society and Politics - II.pdf"
            },
            {
                "title": "South Asia - Economy Society and Politics - III",
                "link": "/assets/downloads/political_science_international_relations/",
                "path": "1015369384South Asia - Economy Society and Politics - III.pdf"
            },
            {
                "title": "State Politics in India",
                "link": "/assets/downloads/political_science_international_relations/",
                "path": "2140429587State Politics in India.pdf"
            },
            {
                "title": "Sustainable Development- Issues and Challenges",
                "link": "/assets/downloads/political_science_international_relations/",
                "path": "550301653Sustainable Development- Issues and Challenges.pdf"
            },
            {
                "title": "Western Political Thought (Plato to Marx)",
                "link": "/assets/downloads/political_science_international_relations/",
                "path": "1466064823Western Political Thought (Plato to Marx).pdf"
            }
        ]
    },
    {
        title: 'UPSC Sociology (Optional)',
        thumbnail: '/assets/images/downloads/UPSC Sociology.jpg',
        url: '/downloads/upsc-sociology-optional-',
        category: 'UPSC',
        alt: 'Analog IAS Academy UPSC Sociology Thumbnail',
        list: [
            {
                "title": "Mains Test Series 2020 Schedule",
                "link": "/assets/downloads/upsc_sociology/",
                "path": "365467642Sociology 2020 Schedule.pdf"
            },
            {
                "title": "BA Sociology",
                "link": "https://drive.google.com/",
                "path": "open?id=0B6Ysr7QQEjfLRE4ydHA4aTlrUkU"
            },
            {
                "title": "MA Sociology",
                "link": "https://drive.google.com/",
                "path": "open?id=0B6Ysr7QQEjfLT2ttZG9iRXdkSTQ"
            },
            {
                "title": "Social Problems in India",
                "link": "/assets/downloads/upsc_sociology/",
                "path": "1332704959Social Problems in India.pdf"
            },
            {
                "title": "Society in India",
                "link": "/assets/downloads/upsc_sociology/",
                "path": "128260202Society in India.pdf"
            },
            {
                "title": "Sociological Thought",
                "link": "/assets/downloads/upsc_sociology/",
                "path": "598165936Sociological Thought.pdf"
            },
            {
                "title": "The Study of Society - I",
                "link": "/assets/downloads/upsc_sociology/",
                "path": "425532386The Study of Society - I.pdf"
            },
            {
                "title": "The Study of Society - II",
                "link": "/assets/downloads/upsc_sociology/",
                "path": "1178558964The Study of Society - II.pdf"
            },
            {
                "title": "Diaspora and Transnational Communities - I",
                "link": "/assets/downloads/upsc_sociology/",
                "path": "1257405894Diaspora and Transnational Communities - I.pdf"
            },
            {
                "title": "Diaspora and Transnational Communities - II",
                "link": "/assets/downloads/upsc_sociology/",
                "path": "2133498689Diaspora and Transnational Communities - II.pdf"
            },
            {
                "title": "India- Democracy and Development",
                "link": "/assets/downloads/upsc_sociology/",
                "path": "1833412884India- Democracy and Development.pdf"
            },
            {
                "title": "Diaspora and Transnational Communities - III",
                "link": "/assets/downloads/upsc_sociology/",
                "path": "28441304Diaspora and Transnational Communities - III.pdf"
            },
            {
                "title": "Sociological Theories and Concepts",
                "link": "/assets/downloads/upsc_sociology/",
                "path": "1534468428Sociological Theories and Concepts.pdf"
            },
            {
                "title": "Sociology in India",
                "link": "/assets/downloads/upsc_sociology/",
                "path": "2145100380Sociology in India.pdf"
            },
            {
                "title": "Sociology of Education - II",
                "link": "/assets/downloads/upsc_sociology/",
                "path": "1830795636Sociology of Education - II.pdf"
            },
            {
                "title": "Sociology of Education - I",
                "link": "/assets/downloads/upsc_sociology/",
                "path": "118587772Sociology of Education - I.pdf"
            },
            {
                "title": "Sociology of Education - III",
                "link": "/assets/downloads/upsc_sociology/",
                "path": "379665484Sociology of Education - III.pdf"
            },
            {
                "title": "Sociology of Religion - I",
                "link": "/assets/downloads/upsc_sociology/",
                "path": "1460847216Sociology of Religion - I.pdf"
            },
            {
                "title": "Sociology of Religion - II",
                "link": "/assets/downloads/upsc_sociology/",
                "path": "295272496Sociology of Religion - II.pdf"
            },
            {
                "title": "Urban Sociology - I",
                "link": "/assets/downloads/upsc_sociology/",
                "path": "1935708063Urban Sociology - I.pdf"
            },
            {
                "title": "Urban Sociology - II",
                "link": "/assets/downloads/upsc_sociology/",
                "path": "2134022250Urban Sociology - II.pdf"
            },
            {
                "title": "Urban Sociology - III",
                "link": "/assets/downloads/upsc_sociology/",
                "path": "46022444Urban Sociology - III.pdf"
            }
        ]
    },
    {
        title: 'UPSC Mathematics (Optional)',
        thumbnail: '/assets/images/downloads/UPSC Mathematics.jpg',
        url: '/downloads/upsc-mathematics-optional-',
        category: 'UPSC',
        alt: 'Analog IAS Academy UPSC Mathematics Thumbnail',
        list: [
            {
                "title": "Solved - Physics Topics Previous Years Questions",
                "link": "/assets/downloads/upsc_mathematics/",
                "path": "137568137fluid mechanics.pdf"
            },
            {
                "title": "Mains test Series 2020 Schedule",
                "link": "/assets/downloads/upsc_mathematics/",
                "path": "1117666701Mathematics 2020 Schedule.pdf"
            },
            {
                "title": "Mathematics Test Series 2019 Schedule",
                "link": "/assets/downloads/upsc_mathematics/",
                "path": "17610583Maths.pdf"
            },
            {
                "title": "Solved - Modern Algebra 2017 UPSC Questions",
                "link": "/assets/downloads/upsc_mathematics/",
                "path": "1549817962new doc 2017-12-19 16.52.44.pdf"
            },
            {
                "title": "Previous Years Questions(Paper I): Linear Algebra",
                "link": "/assets/downloads/upsc_mathematics/",
                "path": "174356501601.LINEAR ALGEBRA.pdf"
            },
            {
                "title": "(1992-2016) Mathematics Previous Years Papers",
                "link": "https://drive.google.com/",
                "path": "open?id=0B6Ysr7QQEjfLbnIxUERCOVh0YWs"
            },
            {
                "title": "Solved - Calculus, Complex, Real Analysis and Modern Algebra Ques 1979-2006",
                "link": "https://drive.google.com/",
                "path": "drive/folders/0B6XXuMZ0GrCLWFpGWkRYclk4cm8?usp=sharing"
            },
            {
                "title": "Previous Years Questions(Paper I): Calculus",
                "link": "/assets/downloads/upsc_mathematics/",
                "path": "175471442902.CALCULUS.pdf"
            },
            {
                "title": "Previous Years Questions(Paper I): Analytical Geometry",
                "link": "/assets/downloads/upsc_mathematics/",
                "path": "90290008903.ANALYTIC GEOMETRY.pdf"
            },
            {
                "title": "Schaum Series: Linear Algebra",
                "link": "/assets/downloads/upsc_mathematics/",
                "path": "1623617033Schaum Outlines - Linear Algebra Fourth Edition.pdf"
            },
            {
                "title": "Previous Years Questions(Paper I): Ordinary Differential Equations(ODE)",
                "link": "/assets/downloads/upsc_mathematics/",
                "path": "118724334804.ORDINARY DIFFERNETIAL EQUATIONS.pdf"
            },
            {
                "title": "Schaum Series: Complex Variables",
                "link": "/assets/downloads/upsc_mathematics/",
                "path": "1301630339Schaum Complex Variables by Spiegel.pdf"
            },
            {
                "title": "Previous Years Questions(Paper I): Statics and Dynamics",
                "link": "/assets/downloads/upsc_mathematics/",
                "path": "156399308205.STATICS & DYNAMICS.pdf"
            },
            {
                "title": "Schaum Series: Matrices",
                "link": "/assets/downloads/upsc_mathematics/",
                "path": "37192715Ayres-Matrices()schaum series.pdf"
            },
            {
                "title": "Previous Years Questions(Paper I): Vector Analysis",
                "link": "/assets/downloads/upsc_mathematics/",
                "path": "173505601506.VECTOR ANALYSIS.pdf"
            },
            {
                "title": "Schaum Series: Vector Analysis",
                "link": "/assets/downloads/upsc_mathematics/",
                "path": "1508448251Spiegel M.R. Schaum_s Outline of Vector Analysis.pdf"
            },
            {
                "title": "Previous Years Questions(Paper II): Modern Algebra",
                "link": "/assets/downloads/upsc_mathematics/",
                "path": "29411699201.MODERN ALGEBRA.pdf"
            },
            {
                "title": "Previous Years Questions(Paper II): Real Analysis",
                "link": "/assets/downloads/upsc_mathematics/",
                "path": "204804907502.REAL ANALYSIS.pdf"
            },
            {
                "title": "Previous Years Questions(Paper II): Complex Analysis",
                "link": "/assets/downloads/upsc_mathematics/",
                "path": "163489806003.COMPLEX ANALYSIS.pdf"
            },
            {
                "title": "Previous Years Questions(Paper II): Linear Programming Problems (LPP)",
                "link": "/assets/downloads/upsc_mathematics/",
                "path": "30005009304.LINEAR POGRAMMING PROBLEM.pdf"
            },
            {
                "title": "Previous Years Questions(Paper II): Partial Differential Equations (PDE)",
                "link": "/assets/downloads/upsc_mathematics/",
                "path": "78145454505.PARTIAL DIFFERENTIAL.pdf"
            },
            {
                "title": "P N Chatterjee: Solid Geometry",
                "link": "https://drive.google.com/",
                "path": "open?id=1veIi_IbanCsIkcPyI2iCBUu25x3DsDF9"
            },
            {
                "title": "Previous Years Questions(Paper II): Numerical Analysis & Computer Programming",
                "link": "/assets/downloads/upsc_mathematics/",
                "path": "198585312206.NUMERICAL ANALYSIS & COMPUTER PROGRAMMING.pdf"
            },
            {
                "title": "Previous Years Questions(Paper II): Mechanics and Fluid Dynamics",
                "link": "/assets/downloads/upsc_mathematics/",
                "path": "144930225807.MECHANICS & FLUID DYNAMICS.pdf"
            },
            {
                "title": "2017(IFoS) Maths Paper - I",
                "link": "/assets/downloads/upsc_mathematics/",
                "path": "4643983872017(IFoS) Mathematics Paper - I.pdf"
            },
            {
                "title": "2017(IFoS) Maths Paper - II",
                "link": "/assets/downloads/upsc_mathematics/",
                "path": "563473062017(IFoS) Mathematics Paper - II.pdf"
            }
        ]
    },
    {
        title: 'Geography (Optional)',
        thumbnail: '/assets/images/downloads/geography.jpg',
        url: '/downloads/geography-optional-',
        category: 'UPSC',
        alt: 'Analog IAS Academy Geography Thumbnail',
        list: [
            {
                "title": "Geography Optional 2020 Schedule",
                "link": "/assets/downloads/geography/",
                "path": "1319542577Geography 2020 Schedule.pdf"
            },
            {
                "title": "NIOS Geography Material",
                "link": "/assets/downloads/geography/",
                "path": "107562023NIOS-World-Physical-and-Indian-Geography-Senior-Secondary-Course-Study-Material-Textbook.pdf"
            },
            {
                "title": "Geomorphology Hnadwritten Notes(UPSC Ranker)",
                "link": "/assets/downloads/geography/",
                "path": "20885178321_Geomorphology_Climatology_Partial.pdf"
            },
            {
                "title": "Climatology Handwritten Notes (UPSC Ranker)",
                "link": "/assets/downloads/geography/",
                "path": "20313791112_Climatology.pdf"
            },
            {
                "title": "Indian Geo & Forest Agri Industries Handwritten Notes(UPSC Rankers)",
                "link": "/assets/downloads/geography/",
                "path": "16006742213_Indian_Geo_Forest_Agri_Industries.pdf"
            },
            {
                "title": "Migration Environment Settlement Hnadwritten Notes(UPSC Ranker)",
                "link": "/assets/downloads/geography/",
                "path": "14679255535_Migration_Environment_Settlement.pdf"
            },
            {
                "title": "Migration Environment Settlement Handwritten Notes(UPSC Rankers)",
                "link": "/assets/downloads/geography/",
                "path": "14818245135_Migration_Environment_Settlement.pdf"
            },
            {
                "title": "Environmental Behavorism Handwritten Notes(UPSC Ranker)",
                "link": "/assets/downloads/geography/",
                "path": "13902709676_Environmental_Behaviorism.pdf"
            },
            {
                "title": "Optional DEMO",
                "link": "/assets/downloads/geography/",
                "path": "1560229269Optional.pdf"
            }
        ]
    }
];


/***/ })

};
;
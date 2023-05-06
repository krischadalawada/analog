"use strict";
exports.id = 6985;
exports.ids = [6985];
exports.modules = {

/***/ 6985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ About_A_VideoGrid)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./data/VideosData.js
const VideosData = [
    {
        title: 'Mathematics Optional DEMO | By Mr. Vinnakota Srikanth | UPSC | ANALOG IAS ACADEMY',
        thumbnail: 'assets/images/about/thumbnail-2@2x.png',
        url: 'https://www.youtube.com/watch?v=oIWpImbo8rc'
    },
    {
        title: 'Political Science and International Relations Optional | By Mr. Srinivas | UPSC | ANALOG IAS ACADEMY',
        thumbnail: 'assets/images/about/thumbnail-1@2x.png',
        url: 'https://www.youtube.com/watch?v=MA1TmEXZpiU'
    },
    {
        title: 'Public Administration Optional DEMO | Mr. D M Ravi Kumar | UPSC | Coaching - ANALOG IAS ACADEMY',
        thumbnail: 'assets/images/about/thumbnail-2@2x.png',
        url: 'https://www.youtube.com/watch?v=S-rFqhgkiKM'
    },
    {
        title: 'General Essay Questions Analysis -1 | CSE(Mains) 2022 | Mr. Y Satyanarayna | ANALOG IAS ACADEMY',
        thumbnail: 'assets/images/about/thumbnail-1@2x.png',
        url: 'https://www.youtube.com/watch?v=KVxrRv7hagQ'
    },
    {
        title: 'Indian Society Questions -Analysis | CSE(Mains) 2021 | By Mr. Amit Bose | ANALOG IAS ACADEMY',
        thumbnail: 'assets/images/about/thumbnail-2@2x.png',
        url: 'https://www.youtube.com/watch?v=7JFlxrM9Se4'
    },
    {
        title: 'CSE(Mains) 2022 - Analysis | Geography | GS Paper 1 | Mr. Priyesh Singh | ANALOG IAS ACADEMY',
        thumbnail: 'assets/images/about/thumbnail-1@2x.png',
        url: 'https://www.youtube.com/watch?v=1wIsSfFFslk'
    }
];

// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
// EXTERNAL MODULE: external "react-player/lazy"
var lazy_ = __webpack_require__(782);
var lazy_default = /*#__PURE__*/__webpack_require__.n(lazy_);
;// CONCATENATED MODULE: ./components/About-A/VideoGrid.js





const VideoGrid = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "slider__area pt-60 pb-60 include-bg d-flex align-items-center",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container-lg",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "col-xl-12 col-md-12 col-12 m-auto",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row align-items-center",
                            children: VideosData.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-6 col-md-6 col-12 m-auto",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "slider__thumb-2 mb-60",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "slider__thumb-home player p-relative",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((lazy_default()), {
                                                    className: "react-player",
                                                    url: item.url,
                                                    width: "100%",
                                                    height: "100%",
                                                    controls: true
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "video-title",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "text-center",
                                                    children: item.title
                                                })
                                            })
                                        ]
                                    })
                                }, index)
                            )
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xxl-12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "section__title-wrapper mt-30 mb-50 text-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "https://www.youtube.com/@analogiasacademy2081/videos",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            className: "tp-btn-secondary",
                                            rel: "noopener noreferrer",
                                            target: "_blank",
                                            style: {
                                                marginRight: '5%'
                                            },
                                            children: [
                                                "Load More ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fa-regular fa-arrow-right fa-ri"
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        })
                    ]
                })
            })
        })
    }));
};
/* harmony default export */ const About_A_VideoGrid = (VideoGrid);


/***/ })

};
;
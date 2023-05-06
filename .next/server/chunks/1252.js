"use strict";
exports.id = 1252;
exports.ids = [1252];
exports.modules = {

/***/ 8115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ About_A_Faculty)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./data/FacultyData.js
const FacultyData = [
    {
        title: 'D.M. Ravi Kumar',
        desc: 'Prominent Faculty in Delhi and Bengaluru',
        subjects: 'Indian Polity and Governance, Public Administration (Optional)',
        image: 'assets/images/faculty/RaviKumar.jpeg',
        alt: 'Analog IAS Academy Faculty Mr. Ravi Kumar'
    },
    {
        title: 'Mr. Y. Satyanarayana',
        desc: 'Ex-IoFs, Retd. Additional Commissioner of Commercial Taxes. 35 years of vast experience in training & empowering students.',
        subjects: 'General Essay, Ethics, Intergity & Aptitude, telugu Literature (optional)',
        image: 'assets/images/faculty/Satyanarayana.jpeg',
        alt: 'Analog IAS Academy Faculty Mr. Satyanarayana'
    },
    {
        title: 'Mr. R C Sinha',
        desc: 'Chief Consultant, New Delhi IAS, Delhi',
        subjects: 'Indian polity & governance, post-independent India, security related issues, current affairs & news paper reading analysis.',
        image: 'assets/images/faculty/RC_Sinha.jpeg',
        alt: 'Analog IAS Academy Faculty Mr. Sinha'
    },
    {
        title: 'Mr. Siva Kumar',
        desc: 'M.Tech, Ex. Scientist, DRDO',
        subjects: 'Geography, Economy',
        image: 'assets/images/faculty/SivaKumar.jpeg',
        alt: 'Analog IAS Academy Faculty Mr. Siva Kumar'
    },
    {
        title: 'Prof. Tarique Khan',
        desc: 'No.1 Faculty from Delhi, Author of Modern India - Tata McGraw Hill',
        subjects: 'Modern Indian History, Post - Independence Indian Developments',
        image: 'assets/images/faculty/TariqueKhan.jpeg',
        alt: 'Analog IAS Academy Faculty Mr. Tarique Khan'
    },
    {
        title: 'S. Srinivas',
        desc: 'M.A. Political Science, Alumnus of JNU, Delhi.',
        subjects: 'Indian Polity, International Relations, Political Science(Optional)',
        image: 'assets/images/faculty/Srinivas.jpeg',
        alt: 'Analog IAS Academy Faculty Mr. Srinivas'
    },
    {
        title: 'Mr. Amit Bose',
        desc: 'M.A. Sociology, M.A. International Relations',
        subjects: 'Indian Society, International Relations, Sociology(Optional)',
        image: 'assets/images/faculty/Amit_Bose.jpeg',
        alt: 'Analog IAS Academy Faculty Mr. Amit Bose'
    },
    {
        title: 'Dr. Ravindra Reddy',
        desc: 'Faculty',
        subjects: 'Anthropology Optional, Science and Technology',
        image: 'assets/images/faculty/RavindharReddy.jpeg',
        alt: 'Analog IAS Academy Faculty Dr. Ravindra Reddy'
    },
    {
        title: 'Dr. Atul Tripathi',
        desc: 'MBBS, Prominent Faculty In Delhi & Bangalore',
        subjects: 'Science and Technology, Ecology, Environment and Biodiversity',
        image: 'assets/images/faculty/AtulTripathi.jpeg',
        alt: 'Analog IAS Academy Faculty Dr. Atul Tripathi'
    },
    {
        title: 'Priyesh Singh Sengar',
        desc: 'Alumnus of IIT Delhi.',
        subjects: 'Geography, Ecology and Environment, Geography(Optional)',
        image: 'assets/images/faculty/Priyesh.jpeg',
        alt: 'Analog IAS Academy Faculty Mr. Priyesh Singh'
    }, 
];

;// CONCATENATED MODULE: ./components/About-A/Faculty.js



const Faculty = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "slider__area pt-60 pb-60 include-bg d-flex align-items-center",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "col-xl-12 col-md-12 col-12 m-auto",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "f-50 black text-center",
                            children: "ANALOG Faculty"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row align-items-center",
                            children: FacultyData.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-6 col-md-6 col-12 m-auto",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row align-items-center instructor-area mb-60",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-xxl-4 col-lg-4 col-sm-6",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "slider__thumb-2 p-relative",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "slider__thumb-home",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            className: "toppers",
                                                            style: {
                                                                width: '100%'
                                                            },
                                                            src: item.image,
                                                            alt: item.alt
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-xxl-8 col-lg-8 col-sm-6",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "pt-60",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            className: "instructor-area-title text-left",
                                                            children: item.title
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "mt-20 instructor-area-sub",
                                                            children: item.desc
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: "mt-20 mb-40 instructor-area-sub",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                    children: "Subjects:"
                                                                }),
                                                                " ",
                                                                item.subjects
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }, index)
                            )
                        })
                    ]
                })
            })
        })
    }));
};
/* harmony default export */ const About_A_Faculty = (Faculty);


/***/ }),

/***/ 8076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);


const HeroAbout = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "slider__area pt-160 include-bg d-flex align-items-center bg-about",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row align-items-center mb-40",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-xxl-5 col-lg-5 col-sm-6",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "slider__thumb-2 p-relative",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "slider__thumb-home",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        style: {
                                            width: '100%'
                                        },
                                        src: "assets/images/about/AboutBannerPic@2x.png",
                                        alt: "Analog IAS Academy About-us banner"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-xxl-7 col-lg-7 col-sm-6",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "slider__content-about",
                                style: {
                                    padding: '10%'
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "mt-40 mb-40",
                                        children: "Competitive exams do not need you to be intelligent or genius, but a hard worker who performs consistently. To help you stay consistent with your preparation and guide you to perform well in the examination, ANALOG offers comprehensive courses for various competitive exams that get you equipped with the right knowledge and skill to crack the tests."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: "11 Courses"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: "25+ Faculty Members"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: "15000+ Students Benefited"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroAbout);


/***/ }),

/***/ 5509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);


const Leadership = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "slider__area pt-60 pb-60 include-bg d-flex align-items-center",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row align-items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-xxl-7 col-lg-7 col-sm-6",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "slider__content-about",
                                style: {
                                    padding: '10%'
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mb-40 black",
                                    children: "ANALOG is guided by the able leadership of Mr. Srikanth Vinnakota, the director of the institute. Mr. Srikanth holds an M.Tech in Mechanical Engineering and was qualified for Civil Services interview thrice with Mathematics and Psychology as optionals subjects. As he says, the institute is on a mission to bring out the dormant talents and skills in the students and the vision is to achieve the mission by providing right guidance that benefits the students. He believes that there is a great potential in everyone and the only thing they need is ‘wings’. ANALOG is where they get those wings of wisdom. That is how the institute walks with aspirants on the road to achievement."
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-xxl-5 col-lg-5 col-sm-6",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "p-relative mt-40",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "slider__thumb-home",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            style: {
                                                width: '100%'
                                            },
                                            src: "assets/images/about/Srikanth@2x.png",
                                            alt: "Analog IAS Academy Director Mr. Srikanth Vinnakota"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "slider__thumb-about",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    children: "Mr. Srikanth Vinnakota"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Director."
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
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Leadership);


/***/ })

};
;
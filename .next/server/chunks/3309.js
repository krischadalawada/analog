"use strict";
exports.id = 3309;
exports.ids = [3309];
exports.modules = {

/***/ 3309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7163);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emailjs_browser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5623);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Common_A_Window__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7617);








const ContactUs = ()=>{
    const { width , height  } = (0,_Common_A_Window__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: clickedSubmit , 1: setClickedSubmit  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: success , 1: setSuccess  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: failure , 1: setFailure  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: alert , 1: setAlert  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: alertMsg , 1: setAlertMsg  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: email1 , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: phone , 1: setPhone  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: message , 1: setMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: reCaptchaAlert , 1: setReCaptchaAlert  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const captchaRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const validateEmail = (email)=>{
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email) {
            return email.match(mailformat);
        }
    };
    const onChangeText = (event)=>{
        var field = event.target.name;
        var value = event.target.value;
        if (field === 'name') {
            setName(value);
        } else if (field === 'phone') {
            setPhone(value);
        } else if (field === 'email') {
            setEmail(value);
        } else if (field === 'message') {
            setMessage(value);
        }
    };
    const goToThankYou = ()=>{
        router.push("/thank-you");
    };
    const onSubmit = (e)=>{
        const token = captchaRef.current.getValue();
        if (name.length > 1 && phone.length === 10 && validateEmail(email1)) {
            setAlert(false);
            setClickedSubmit(true);
            if (token) {
                setLoading(true);
                setSuccess(false);
                setFailure(false);
                _emailjs_browser__WEBPACK_IMPORTED_MODULE_5___default().send("service_frj3va9", "template_p3h2j35", {
                    from_name: name,
                    phone: phone,
                    email: email1,
                    message: message
                }, "vE-Cc658AKOCommhp").then((result)=>{
                    goToThankYou();
                    setLoading(false);
                    setSuccess(true);
                    setAlert(false);
                }, (error)=>{
                    setLoading(false);
                    setFailure(true);
                });
            } else {
                setReCaptchaAlert(true);
                setClickedSubmit(false);
            }
        } else {
            setClickedSubmit(false);
            setAlert(true);
        }
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "contact__area pt-120 pb-120",
            style: {
                backgroundColor: '#F4F4F4'
            },
            id: "contactForm",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-xxl-10 col-xl-10 col-lg-10 m-auto",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "contact__wrapper",
                        children: [
                            router.pathname !== '/contact-us' ? clickedSubmit && success ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "section__title-wrapper mb-40",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "section__title-50 text-center",
                                    children: "Thank you for choosing ANALOG."
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "section__title-wrapper mb-40",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "section__title-50 text-center",
                                    children: "Contact Us"
                                })
                            }) : clickedSubmit && success ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "section__title-wrapper mb-40",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "section__title-50 text-center",
                                    children: "Thank you for choosing ANALOG."
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "contact__form" + (router.pathname === '/contact' ? " mt-60" : ""),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                    action: "#",
                                    children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mtb-8 center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Spinner, {
                                            animation: "grow",
                                            variant: "danger"
                                        })
                                    }) : clickedSubmit && success ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-xxl-12",
                                        style: {
                                            caretColor: 'transparent'
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "contact__form-input",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                                children: [
                                                    "Let's begin your journey towards success. ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    "Our team will reach out to you shortly."
                                                ]
                                            })
                                        })
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-xxl-6 col-xl-6 col-md-6",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "contact__form-input",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        style: {
                                                            color: !isNaN(name) || name.length < 2 ? "red" : "#011627",
                                                            caretColor: 'black'
                                                        },
                                                        name: "name",
                                                        required: true,
                                                        type: "text",
                                                        placeholder: "Name*",
                                                        onChange: onChangeText
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-xxl-6 col-xl-6 col-md-6",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "contact__form-input",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        style: {
                                                            color: isNaN(phone) || phone.length !== 10 ? "red" : "#011627",
                                                            caretColor: 'black'
                                                        },
                                                        name: "phone",
                                                        required: true,
                                                        type: "phone",
                                                        placeholder: "Phone*",
                                                        onChange: onChangeText
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-xxl-12",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "contact__form-input",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        style: {
                                                            color: !validateEmail(email1) ? "red" : "#011627",
                                                            caretColor: 'black'
                                                        },
                                                        name: "email",
                                                        required: true,
                                                        type: "email",
                                                        placeholder: "Email*",
                                                        onChange: onChangeText
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-xxl-12",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "contact__form-input",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                        name: "message",
                                                        required: true,
                                                        placeholder: "Message",
                                                        onChange: onChangeText
                                                    })
                                                })
                                            }),
                                            clickedSubmit && failure ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-xxl-12",
                                                style: {
                                                    caretColor: 'transparent'
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "contact__form-input",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        children: "We couldn't process your request at this time. Please try again after some time."
                                                    })
                                                })
                                            }) : alert ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-xxl-12",
                                                style: {
                                                    caretColor: 'transparent'
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "contact__form-input",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        children: "*Please submit valid details and try again."
                                                    })
                                                })
                                            }) : reCaptchaAlert ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-xxl-12",
                                                style: {
                                                    caretColor: 'transparent'
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "contact__form-input",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        children: "*Please confirm that you are not a robot."
                                                    })
                                                })
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
                                            width > 510 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "col-12",
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                    caretColor: 'transparent'
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_google_recaptcha__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                        sitekey: "6LciCGYkAAAAAJj17j9gQkG9_WctOmV9RtSWLn5L",
                                                        ref: captchaRef
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        className: "tp-btn-secondary pointer",
                                                        onClick: ()=>onSubmit()
                                                        ,
                                                        children: [
                                                            "Submit ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fa-regular fa-arrow-right fa-ri"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "col-12",
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                    caretColor: 'transparent'
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_google_recaptcha__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                        sitekey: "6LciCGYkAAAAAJj17j9gQkG9_WctOmV9RtSWLn5L",
                                                        ref: captchaRef,
                                                        size: "compact"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        className: "tp-btn-secondary pointer",
                                                        onClick: ()=>onSubmit()
                                                        ,
                                                        children: [
                                                            "Submit ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fa-regular fa-arrow-right fa-ri"
                                                            })
                                                        ]
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
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactUs);


/***/ })

};
;
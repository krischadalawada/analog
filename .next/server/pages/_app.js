(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 8272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "qm": () => (/* binding */ blogData),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports singleBlog, blogSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

// all blogs get
const blogData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('blogs/fetchBlogs', async ()=>{
    const response = await fetch('https://obscure-shelf-38503.herokuapp.com/blog');
    const data = response.json();
    return data;
});
// get single blog
const singleBlog = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('event/fetchEvent', async (id = '62208badea7975d304d76830')=>{
    const response = await fetch(`https://obscure-shelf-38503.herokuapp.com/blog/${id}`);
    const event = response.json();
    return event;
});
// blogSlice
const blogSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'blog',
    initialState: {
        allBlogs: [],
        status: '',
        blog: {},
        blogStatus: ''
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(blogData.fulfilled, (state, action)=>{
            state.allBlogs = action.payload;
            state.status = 'fulfilled';
        }), builder.addCase(blogData.pending, (state, action)=>{
            state.status = 'pending';
        });
        // single blog
        builder.addCase(singleBlog.fulfilled, (state, action)=>{
            state.blog = action.payload;
            state.blogStatus = 'fulfilled';
        }), builder.addCase(singleBlog.pending, (state, action)=>{
            state.blogStatus = 'pending';
        });
    }
});
// export const {  } = blogSlice.actions
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blogSlice.reducer);


/***/ }),

/***/ 2093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NU": () => (/* binding */ getTotal),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports cartSlice, addToCart, decreaseCartQuantity, removeFromCart, clearCart */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(271);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);



const cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'cart',
    initialState: {
        cartItems:  false ? 0 : [],
        cartTotalAmount: 0,
        cartTotalQuantity: 0
    },
    reducers: {
        addToCart: (state, { payload  })=>{
            const itemIndex = state.cartItems.findIndex((item)=>item._id === payload._id
            );
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                // alert
                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.info('Increase Product Quantity', {
                    position: 'top-left'
                });
            } else {
                const tempCartItems = {
                    ...payload,
                    cartQuantity: 1
                };
                state.cartItems.push(tempCartItems);
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Course Added To Cart Successfully',
                    timer: 1500
                });
            }
            localStorage.setItem('addToCart', JSON.stringify(state.cartItems));
        },
        //  decrease cart quantity
        decreaseCartQuantity: (state, { payload  })=>{
            const cartItemIndex = state.cartItems.findIndex((item)=>item._id === payload._id
            );
            if (state.cartItems[cartItemIndex].cartQuantity > 1) {
                state.cartItems[cartItemIndex].cartQuantity -= 1;
                // alert
                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(`Decreased cart quantity`, {
                    position: 'top-left'
                });
            } else if (state.cartItems[cartItemIndex].cartQuantity === 1) {
                state.cartItems = state.cartItems.filter((item)=>item._id !== payload._id
                );
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    position: 'top-center',
                    icon: 'error',
                    title: 'Remove from Cart',
                    timer: 1500
                });
            }
            localStorage.setItem('addToCart', JSON.stringify(state.cartItems));
        },
        // removeFromCart
        removeFromCart: (state, { payload  })=>{
            state.cartItems = state.cartItems.filter((item)=>item._id !== payload._id
            );
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                position: 'top-center',
                icon: 'error',
                title: 'Remove from Cart',
                timer: 1500
            });
            localStorage.setItem('addToCart', JSON.stringify(state.cartItems));
        },
        // get total
        getTotal: (state, { payload  })=>{
            let { total , quantity  } = state.cartItems.reduce((cartTotal, cartItem)=>{
                const { price , cartQuantity  } = cartItem;
                const itemTotal = price * cartQuantity;
                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;
                return cartTotal;
            }, {
                total: 0,
                quantity: 0
            });
            state.cartTotalAmount = total;
            state.cartTotalQuantity = quantity;
        },
        // clear cart
        clearCart: (state, action)=>{
            state.cartItems = [];
            localStorage.setItem('addToCart', JSON.stringify(state.cartItems));
        }
    }
});
const { addToCart , decreaseCartQuantity , removeFromCart , getTotal , clearCart  } = cartSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartSlice.reducer);


/***/ }),

/***/ 8254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a0": () => (/* binding */ eventData),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports singleEvent, eventSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

// get all events
const eventData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('events/fetchEvents', async ()=>{
    const response = await fetch('https://obscure-shelf-38503.herokuapp.com/events');
    const data = response.json();
    return data;
});
// singleEvent
const singleEvent = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('event/fetchEvent', async (id = '6222ffacea7975d304c5b7b1')=>{
    const response = await fetch(`https://obscure-shelf-38503.herokuapp.com/event/${id}`);
    const event = response.json();
    return event;
});
const eventSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'counter',
    initialState: {
        allEvents: [],
        event: {},
        status: '',
        eventStatus: ''
    },
    reducers: {},
    extraReducers: (builder)=>{
        // all event
        builder.addCase(eventData.fulfilled, (state, action)=>{
            state.allEvents = action.payload;
            state.status = 'fulfilled';
        }), builder.addCase(eventData.pending, (state, action)=>{
            state.status = 'pending';
        });
        // single event
        builder.addCase(singleEvent.fulfilled, (state, action)=>{
            state.event = action.payload;
            state.eventStatus = 'fulfilled';
        }), builder.addCase(singleEvent.pending, (state, action)=>{
            state.eventStatus = 'pending';
        });
    }
});
// export const {  } = eventSlice.actions
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventSlice.reducer);


/***/ }),

/***/ 2649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aB": () => (/* binding */ teamData),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports singleTeam, teamSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

// get all teams
const teamData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('team/fetchTeams', async ()=>{
    const response = await fetch('https://obscure-shelf-38503.herokuapp.com/teams');
    const data = response.json();
    return data;
});
// single team
const singleTeam = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('team/fetchTeam', async (id = '62231bdcea7975d304d117bf')=>{
    const response = await fetch(`https://obscure-shelf-38503.herokuapp.com/team/${id}`);
    const event = response.json();
    return event;
});
const teamSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'counter',
    initialState: {
        allTeams: [],
        status: '',
        team: {},
        teamStatus: ''
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(teamData.fulfilled, (state, action)=>{
            state.allTeams = action.payload;
            state.status = 'fulfilled';
        }), builder.addCase(teamData.pending, (state, action)=>{
            state.status = 'pending';
        });
        // single team
        builder.addCase(singleTeam.fulfilled, (state, action)=>{
            state.team = action.payload;
            state.teamStatus = 'fulfilled';
        }), builder.addCase(singleTeam.pending, (state, action)=>{
            state.teamStatus = 'pending';
        });
    }
});
// export const {  } = teamSlice.actions
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (teamSlice.reducer);


/***/ }),

/***/ 7881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ store)
});

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./redux/features/coursesSlice.js
var coursesSlice = __webpack_require__(6309);
// EXTERNAL MODULE: ./redux/features/blogSlice.js
var blogSlice = __webpack_require__(8272);
// EXTERNAL MODULE: ./redux/features/eventSlice.js
var eventSlice = __webpack_require__(8254);
// EXTERNAL MODULE: ./redux/features/teamSlice.js
var teamSlice = __webpack_require__(2649);
// EXTERNAL MODULE: ./redux/features/categorySlice.js
var categorySlice = __webpack_require__(2293);
;// CONCATENATED MODULE: ./redux/features/courseDetailsSlice.js

// courseDetailsData
const courseDetailsData = (0,toolkit_.createAsyncThunk)('courses/fetchCourses', async (id)=>{
    const response = await fetch(`https://obscure-shelf-38503.herokuapp.com/courseDetails/${id}`);
    const data = response.json();
    return data;
});
const courseDetailsSlice = (0,toolkit_.createSlice)({
    name: 'courses',
    initialState: {
        courseDetails: {},
        status: ''
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(courseDetailsData.fulfilled, (state, action)=>{
            state.courseDetails = action.payload;
            state.status = 'fulfilled';
        }), builder.addCase(courseDetailsData.pending, (state, action)=>{
            state.status = 'pending';
        });
    }
});
// export const { increment } = courseDetailsSlice.actions
/* harmony default export */ const features_courseDetailsSlice = (courseDetailsSlice.reducer);

// EXTERNAL MODULE: ./redux/features/cartSlice.js
var cartSlice = __webpack_require__(2093);
// EXTERNAL MODULE: ./redux/features/myOrderSlice.js
var myOrderSlice = __webpack_require__(5575);
;// CONCATENATED MODULE: ./redux/store.js









const store = (0,toolkit_.configureStore)({
    reducer: {
        courses: coursesSlice/* default */.ZP,
        blogs: blogSlice/* default */.ZP,
        events: eventSlice/* default */.ZP,
        teams: teamSlice/* default */.ZP,
        category: categorySlice/* default */.ZP,
        courseDetails: features_courseDetailsSlice,
        cart: cartSlice/* default */.ZP,
        order: myOrderSlice/* default */.ZP
    }
});


/***/ }),

/***/ 2654:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_features_coursesSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6309);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7881);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_features_blogSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8272);
/* harmony import */ var _redux_features_eventSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8254);
/* harmony import */ var _redux_features_teamSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2649);
/* harmony import */ var _redux_features_categorySlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2293);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3745);
/* harmony import */ var _redux_features_cartSlice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2093);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_11__]);
firebase_app__WEBPACK_IMPORTED_MODULE_11__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
















if (false) {}
const firebaseConfig = {
    apiKey: "AIzaSyBcOqjiLRsrVl0AGy9iLZHz8B08qqmb6Mc",
    authDomain: "eduker-next-js.firebaseapp.com",
    projectId: "eduker-next-js",
    storageBucket: "eduker-next-js.appspot.com",
    messagingSenderId: "672447339636",
    appId: "1:672447339636:web:fff1e3ba982ac13dfa0521"
};
(0,firebase_app__WEBPACK_IMPORTED_MODULE_11__.initializeApp)(firebaseConfig);
function MyApp({ Component , pageProps  }) {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        _redux_store__WEBPACK_IMPORTED_MODULE_4__/* .store.dispatch */ .h.dispatch((0,_redux_features_coursesSlice__WEBPACK_IMPORTED_MODULE_3__/* .coursesData */ .om)());
        _redux_store__WEBPACK_IMPORTED_MODULE_4__/* .store.dispatch */ .h.dispatch((0,_redux_features_blogSlice__WEBPACK_IMPORTED_MODULE_7__/* .blogData */ .qm)());
        _redux_store__WEBPACK_IMPORTED_MODULE_4__/* .store.dispatch */ .h.dispatch((0,_redux_features_eventSlice__WEBPACK_IMPORTED_MODULE_8__/* .eventData */ .a0)());
        _redux_store__WEBPACK_IMPORTED_MODULE_4__/* .store.dispatch */ .h.dispatch((0,_redux_features_teamSlice__WEBPACK_IMPORTED_MODULE_9__/* .teamData */ .aB)());
        _redux_store__WEBPACK_IMPORTED_MODULE_4__/* .store.dispatch */ .h.dispatch((0,_redux_features_categorySlice__WEBPACK_IMPORTED_MODULE_10__/* .categoryData */ .eb)());
        _redux_store__WEBPACK_IMPORTED_MODULE_4__/* .store.dispatch */ .h.dispatch((0,_redux_features_cartSlice__WEBPACK_IMPORTED_MODULE_12__/* .getTotal */ .NU)());
    }, [
        _redux_store__WEBPACK_IMPORTED_MODULE_4__/* .store */ .h
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
            store: _redux_store__WEBPACK_IMPORTED_MODULE_4__/* .store */ .h,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {})
            ]
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 1187:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 271:
/***/ ((module) => {

"use strict";
module.exports = require("sweetalert2");

/***/ }),

/***/ 3745:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4582,2293], () => (__webpack_exec__(2654)));
module.exports = __webpack_exports__;

})();
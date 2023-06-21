"use strict";
exports.id = 4582;
exports.ids = [4582];
exports.modules = {

/***/ 6309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "om": () => (/* binding */ coursesData),
/* harmony export */   "fn": () => (/* binding */ searchText),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports singleCourse, coursesSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

// get all courses
const coursesData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('courses/fetchCourses', async ()=>{
    const response = await fetch('https://obscure-shelf-38503.herokuapp.com/courses');
    const data = response.json();
    return data;
});
// get single courses
const singleCourse = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('course/fetchCourse', async (id = '622037c6ea7975d304b6b4ef')=>{
    const response = await fetch(`https://obscure-shelf-38503.herokuapp.com/courseDetails/${id}`);
    const event = response.json();
    return event;
});
// coursesSlice
const coursesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'courses',
    initialState: {
        allCourses: [],
        status: '',
        course: {},
        courseStatus: '',
        searchValue: '',
        searchCoursesItems: []
    },
    reducers: {
        searchText: (state, { payload  })=>{
            state.searchValue = payload;
            state.searchCoursesItems = state.allCourses.filter((course)=>course.title.toLowerCase().includes(payload.toLowerCase())
            );
        }
    },
    extraReducers: (builder)=>{
        // all courses
        builder.addCase(coursesData.fulfilled, (state, action)=>{
            state.allCourses = action.payload;
            state.status = 'fulfilled';
        }), builder.addCase(coursesData.pending, (state, action)=>{
            state.status = 'pending';
        });
        // single course
        builder.addCase(singleCourse.fulfilled, (state, action)=>{
            state.course = action.payload;
            state.courseStatus = 'fulfilled';
        }), builder.addCase(singleCourse.pending, (state, action)=>{
            state.courseStatus = 'pending';
        });
    }
});
const { searchText  } = coursesSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (coursesSlice.reducer);


/***/ }),

/***/ 5575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MP": () => (/* binding */ MyOrder),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports MyCourses, eventSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

// get my orders
const MyOrder = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('order/fetchOrder', async (userEmail)=>{
    const response = await fetch(`https://obscure-shelf-38503.herokuapp.com/myOrder/${userEmail}`);
    const orderItems = response.json();
    return orderItems;
});
// MyCourses
const MyCourses = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('peyment/setPayment', async (email, _id)=>{
    const response = await fetch(`https://obscure-shelf-38503.herokuapp.com/paymentInfo/${_id}`);
    const paymentItem = response.json();
    return paymentItem;
});
const eventSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'counter',
    initialState: {
        myOrders: [],
        status: ''
    },
    reducers: {},
    extraReducers: (builder)=>{
        // all event
        builder.addCase(MyOrder.fulfilled, (state, action)=>{
            state.myOrders = action.payload;
            state.status = 'fulfilled';
        }), builder.addCase(MyOrder.pending, (state, action)=>{
            state.status = 'pending';
        });
    }
});
// export const {  } = eventSlice.actions
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventSlice.reducer);


/***/ })

};
;
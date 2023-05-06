"use strict";
exports.id = 2293;
exports.ids = [2293];
exports.modules = {

/***/ 2293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eb": () => (/* binding */ categoryData),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports categorySlice, setCategoryItem */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

// categoryData
const categoryData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('category/fetchCategory', async (category = 'Category')=>{
    const response = await fetch(`https://obscure-shelf-38503.herokuapp.com/category/${category}`);
    const data = response.json();
    return data;
});
const categorySlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'counter',
    initialState: {
        categoryItems: [],
        status: '',
        category: ''
    },
    reducers: {
        setCategoryItem: (state, { payload  })=>{
            state.category = payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(categoryData.fulfilled, (state, action)=>{
            state.categoryItems = action.payload;
            state.status = 'fulfilled';
        }), builder.addCase(categoryData.pending, (state, action)=>{
            state.status = 'pending';
        });
    }
});
const { setCategoryItem  } = categorySlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categorySlice.reducer);


/***/ })

};
;
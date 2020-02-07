webpackHotUpdate("static/development/pages/statemanagement.js",{

/***/ "./redux/actions/fooActions.js":
/*!*************************************!*\
  !*** ./redux/actions/fooActions.js ***!
  \*************************************/
/*! exports provided: getPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosts", function() { return getPosts; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actionTypes */ "./redux/actionTypes.js");
 // fooActions.js


var getPosts = function getPosts() {
  return function (dispatch) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default()({
      method: 'GET',
      url: "https://jsonplaceholder.typicode.com/posts",
      headers: []
    }).then(function (response) {
      console.log('inside getPosts response in actions and value: ', response);
      dispatch({
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["FOO"],
        payload: response.data
      });
    });
  };
};

/***/ })

})
//# sourceMappingURL=statemanagement.js.65e5a01c9820b4db7e33.hot-update.js.map
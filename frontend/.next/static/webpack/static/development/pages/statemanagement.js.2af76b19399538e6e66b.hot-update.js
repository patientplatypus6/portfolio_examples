webpackHotUpdate("static/development/pages/statemanagement.js",{

/***/ "./components/molecules/ContentStateManagement.js":
/*!********************************************************!*\
  !*** ./components/molecules/ContentStateManagement.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _quarks_ChildExample__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../quarks/ChildExample */ "./components/quarks/ChildExample.js");
/* harmony import */ var _styles_molecules_main_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/molecules/main.module.css */ "./styles/molecules/main.module.css");
/* harmony import */ var _styles_molecules_main_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_molecules_main_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_quarks_button_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../styles/quarks/button.module.css */ "./styles/quarks/button.module.css");
/* harmony import */ var _styles_quarks_button_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_quarks_button_module_css__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/Users/patientplatypus/Documents/platypusNEST/example_portfolio_project/frontend/components/molecules/ContentStateManagement.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;





var ContentStateManagement =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ContentStateManagement, _Component);

  function ContentStateManagement() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ContentStateManagement);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ContentStateManagement)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      counter: 0,
      childCounter: 0,
      inputVariable: ''
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "childCounterFn", function (counter) {
      _this.setState({
        childCounter: counter
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ContentStateManagement, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("inside the contentStateManagement component componentDidMount");
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        className: _styles_molecules_main_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.mainContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx("div", {
        style: {
          textDecoration: 'underline',
          fontWeight: '900',
          width: '100%',
          textAlign: 'center',
          fontSize: '2rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "State Management"), __jsx("div", {
        style: {
          textDecoration: 'underline',
          fontWeight: '900',
          width: '100%',
          textAlign: 'left',
          margin: '1rem',
          fontSize: '1.2rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Increment/Decrement"), __jsx("div", {
        style: {
          textDecoration: 'none',
          fontWeight: '900',
          width: '100%',
          textAlign: 'left',
          margin: '1rem',
          fontSize: '1.2rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx("div", {
        style: {
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          fontSize: '3rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx("div", {
        style: {
          flex: 1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), __jsx("div", {
        className: [_styles_molecules_main_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.noselect, _styles_quarks_button_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.button, _styles_quarks_button_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.fadeIn].join(" "),
        style: {
          flex: 1,
          textAlign: 'center',
          border: '1px black solid'
        },
        onClick: function onClick() {
          _this2.setState({
            counter: _this2.state.counter - 1
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "-"), __jsx("div", {
        style: {
          flex: 2,
          fontSize: '3rem',
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, this.state.counter), __jsx("div", {
        className: [_styles_molecules_main_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.noselect, _styles_quarks_button_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.button, _styles_quarks_button_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.fadeIn].join(" "),
        style: {
          flex: 1,
          textAlign: 'center',
          border: '1px black solid'
        },
        onClick: function onClick() {
          _this2.setState({
            counter: _this2.state.counter + 1
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "+"), __jsx("div", {
        style: {
          flex: 1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }))), __jsx("div", {
        style: {
          textDecoration: 'underline',
          fontWeight: '900',
          width: '100%',
          textAlign: 'left',
          margin: '1rem',
          fontSize: '1.2rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "Input Variable"), __jsx("div", {
        style: {
          textDecoration: 'none',
          fontWeight: '900',
          width: '100%',
          textAlign: 'left',
          margin: '1rem',
          fontSize: '1.2rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, __jsx("div", {
        style: {
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          fontSize: '2rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, __jsx("div", {
        style: {
          flex: 1,
          fontSize: '1rem',
          lineHeight: '2rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, __jsx("input", {
        type: "text",
        id: "myText",
        placeholder: "Enter some text...",
        value: this.state.inputVariable,
        onChange: function onChange(e) {
          _this2.setState({
            inputVariable: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      })), __jsx("div", {
        style: {
          flex: 5,
          lineHeight: '2rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, this.state.inputVariable))), __jsx("div", {
        style: {
          textDecoration: 'underline',
          fontWeight: '900',
          width: '100%',
          textAlign: 'left',
          margin: '1rem',
          fontSize: '1.2rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "Nested Component Inheritance"), __jsx("div", {
        style: {
          textDecoration: 'none',
          fontWeight: '900',
          width: '100%',
          textAlign: 'left',
          margin: '1rem',
          fontSize: '1.2rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, __jsx(_quarks_ChildExample__WEBPACK_IMPORTED_MODULE_8__["default"], {
        childCounter: this.state.childCounter,
        childCounterFn: function childCounterFn(counter) {
          _this2.childCounterFn(counter);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      })), __jsx("div", {
        style: {
          textDecoration: 'underline',
          fontWeight: '900',
          width: '100%',
          textAlign: 'left',
          margin: '1rem',
          fontSize: '1.2rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, "Redux"), __jsx("button", {
        onClick: function onClick(e) {
          console.log('button has been clicked');

          _this2.props.handleSubmit(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, "Load"), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, "Prop from Redux ", this.props.foo));
    }
  }]);

  return ContentStateManagement;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ContentStateManagement);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
false,

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
false

})
//# sourceMappingURL=statemanagement.js.2af76b19399538e6e66b.hot-update.js.map
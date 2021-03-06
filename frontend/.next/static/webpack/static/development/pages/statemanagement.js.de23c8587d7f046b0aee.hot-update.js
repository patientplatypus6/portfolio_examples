webpackHotUpdate("static/development/pages/statemanagement.js",{

/***/ "./pages/statemanagement.js":
/*!**********************************!*\
  !*** ./pages/statemanagement.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_molecules_main_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/molecules/main.module.css */ "./styles/molecules/main.module.css");
/* harmony import */ var _styles_molecules_main_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_molecules_main_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_molecules_Sidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/molecules/Sidebar */ "./components/molecules/Sidebar.js");
/* harmony import */ var _components_molecules_ContentStateManagement__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/molecules/ContentStateManagement */ "./components/molecules/ContentStateManagement.js");
/* harmony import */ var _components_molecules_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/molecules/Footer */ "./components/molecules/Footer.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var _redux_actions_fooActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../redux/actions/fooActions */ "./redux/actions/fooActions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");








var _jsxFileName = "/Users/patientplatypus/Documents/platypusNEST/example_portfolio_project/frontend/pages/statemanagement.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;






 // import makeStore from '../components/redux/reduxComponent';



var StateManagement =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(StateManagement, _Component);

  function StateManagement() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, StateManagement);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(StateManagement)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSubmit", function (e) {
      console.log('inside handleSubmit');
      e.preventDefault();

      _this.props.getPosts();
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(StateManagement, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('inside componentDidMount of State Management Page');
      console.log('value of this.props: ', this.props);
      console.log('value of this.props.foo: ', this.props.foo);
      console.log('value of this.props.custom: ', this.props.custom);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "height100Width100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, __jsx("div", {
        className: _styles_molecules_main_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.gridContainerMain,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, __jsx("div", {
        className: _styles_molecules_main_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.gridSidebarMain,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx(_components_molecules_Sidebar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      })), __jsx("div", {
        className: _styles_molecules_main_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.gridContentMain,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx(_components_molecules_ContentStateManagement__WEBPACK_IMPORTED_MODULE_11__["default"], {
        handleSubmit: this.handleSubmit,
        foo: this.props.foo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      })), __jsx("div", {
        className: _styles_molecules_main_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.gridFooterMain,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx(_components_molecules_Footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var store, isServer, pathname, query;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              store = _ref.store, isServer = _ref.isServer, pathname = _ref.pathname, query = _ref.query;
              _context.next = 3;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(store.dispatch(Object(_redux_actions_fooActions__WEBPACK_IMPORTED_MODULE_14__["getPosts"])()));

            case 3:
              return _context.abrupt("return", {
                custom: 'custom'
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return StateManagement;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]); // StateManagement = withRedux(makeStore, (state) => (
//   {foo: state.foo}
// ))(StateManagement);


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_15__["connect"])(function (state) {
  return state;
}, {
  getPosts: _redux_actions_fooActions__WEBPACK_IMPORTED_MODULE_14__["getPosts"]
})(StateManagement)); // export default StateManagement;

/***/ })

})
//# sourceMappingURL=statemanagement.js.de23c8587d7f046b0aee.hot-update.js.map
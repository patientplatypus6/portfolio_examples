module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/molecules/ContentCRUD.js":
/*!*********************************************!*\
  !*** ./components/molecules/ContentCRUD.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_molecules_content_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/molecules/content.module.css */ "./styles/molecules/content.module.css");
/* harmony import */ var _styles_molecules_content_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_molecules_content_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/patientplatypus/Documents/platypusNEST/example_portfolio_project/frontend/components/molecules/ContentCRUD.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class ContentCRUD extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    console.log("inside the contentCRUD component componentDidMount");
  }

  render() {
    return __jsx("div", {
      className: _styles_molecules_content_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.mainContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "this is the CRUD page");
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ContentCRUD);

/***/ }),

/***/ "./components/molecules/Footer.js":
/*!****************************************!*\
  !*** ./components/molecules/Footer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_molecules_footer_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/molecules/footer.module.css */ "./styles/molecules/footer.module.css");
/* harmony import */ var _styles_molecules_footer_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_molecules_footer_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/patientplatypus/Documents/platypusNEST/example_portfolio_project/frontend/components/molecules/Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: _styles_molecules_footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footerContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, "hello there");
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/molecules/Sidebar.js":
/*!*****************************************!*\
  !*** ./components/molecules/Sidebar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_molecules_sidebar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/molecules/sidebar.module.css */ "./styles/molecules/sidebar.module.css");
/* harmony import */ var _styles_molecules_sidebar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_molecules_sidebar_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _quarks_ExpandableList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quarks/ExpandableList */ "./components/quarks/ExpandableList.js");
var _jsxFileName = "/Users/patientplatypus/Documents/platypusNEST/example_portfolio_project/frontend/components/molecules/Sidebar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Sidebar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      listItems: ['Animations', 'Illustrations', 'State Management', 'CRUD', 'GraphQL', 'Site Architecture', 'About'],
      listItemExpl: ['here are some animation examples that are interesting', 'here is a way that I do some illustration work', 'here are some state management techniques', 'here is a Create/Read/Update/Delete Example', 'here is how to set up graphQL with node', 'here is how I set up the code for this website', 'here is an about page that gives a bit of background on this project']
    });
  }

  render() {
    return __jsx("div", {
      className: _styles_molecules_sidebar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sidebarContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("div", {
      className: _styles_molecules_sidebar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "Portfolio Examples"), __jsx("div", {
      className: _styles_molecules_sidebar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.expandableList,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx(_quarks_ExpandableList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      listItems: this.state.listItems,
      listItemExpl: this.state.listItemExpl,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    })), __jsx("div", {
      className: _styles_molecules_sidebar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.titlehighlight,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./components/quarks/Button.js":
/*!*************************************!*\
  !*** ./components/quarks/Button.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_quarks_button_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/quarks/button.module.css */ "./styles/quarks/button.module.css");
/* harmony import */ var _styles_quarks_button_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_quarks_button_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/patientplatypus/Documents/platypusNEST/example_portfolio_project/frontend/components/quarks/Button.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Button extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      showExpl: -1
    });

    _defineProperty(this, "explRet", () => {
      console.log("value of this.props.itemExpl: ", this.props.itemExpl);

      if (this.props.itemExpl) {
        return this.props.itemExpl;
      } else {
        return null;
      }
    });

    _defineProperty(this, "explClick", keyVal => {
      if (keyVal == 0) {
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/animations');
      } else if (keyVal == 1) {
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/illustrations');
      } else if (keyVal == 2) {
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/statemanagement');
      } else if (keyVal == 3) {
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/crud');
      } else if (keyVal == 4) {
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/graphql');
      } else if (keyVal == 5) {
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/sitearchitecture');
      } else if (keyVal == 6) {
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/about');
      }
    });

    _defineProperty(this, "explIsShown", val => {});
  }

  render() {
    return __jsx("div", {
      className: _styles_quarks_button_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, this.props.keyVal > -1 ? __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("div", {
      style: {
        textDecoration: 'underline'
      },
      onMouseEnter: () => this.setState({
        showExpl: this.props.keyVal
      }),
      onMouseLeave: () => this.setState({
        showExpl: -1
      }),
      onClick: () => {
        console.log('value of keyVal is: ', this.props.keyVal);
        this.explClick(this.props.keyVal);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, this.props.item), this.props.listItemExpl.map((element, key) => {
      if (key == this.state.showExpl) {
        return __jsx("div", {
          key: key,
          style: {
            maxHeight: this.state.showExpl == key ? '10vh' : '0%',
            background: 'white',
            color: 'darkblue',
            margin: '5px 0 5px 0'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, this.props.listItemExpl[this.state.showExpl]);
      } else {
        return null;
      }
    })) : __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, this.props.item));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/quarks/ExpandableList.js":
/*!*********************************************!*\
  !*** ./components/quarks/ExpandableList.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./components/quarks/Button.js");
var _jsxFileName = "/Users/patientplatypus/Documents/platypusNEST/example_portfolio_project/frontend/components/quarks/ExpandableList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class ExpandableList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    console.log('value of this.props.listItems: ', this.props.listItems);
  }

  render() {
    return __jsx("div", {
      style: {
        background: 'black',
        color: 'white'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, this.props.listItems.map((element, key) => __jsx("div", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      keyVal: key,
      item: element,
      listItemExpl: this.props.listItemExpl,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ExpandableList);

/***/ }),

/***/ "./pages/crud.js":
/*!***********************!*\
  !*** ./pages/crud.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_molecules_main_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/molecules/main.module.css */ "./styles/molecules/main.module.css");
/* harmony import */ var _styles_molecules_main_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_molecules_main_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_molecules_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/molecules/Sidebar */ "./components/molecules/Sidebar.js");
/* harmony import */ var _components_molecules_ContentCRUD__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/molecules/ContentCRUD */ "./components/molecules/ContentCRUD.js");
/* harmony import */ var _components_molecules_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/molecules/Footer */ "./components/molecules/Footer.js");
var _jsxFileName = "/Users/patientplatypus/Documents/platypusNEST/example_portfolio_project/frontend/pages/crud.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class CRUD extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    console.log('value of CRUD styles: ', _styles_molecules_main_module_css__WEBPACK_IMPORTED_MODULE_1___default.a);
  }

  render() {
    return __jsx("div", {
      className: "height100Width100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("div", {
      className: _styles_molecules_main_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.gridContainerMain,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("div", {
      className: _styles_molecules_main_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.gridSidebarMain,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx(_components_molecules_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    })), __jsx("div", {
      className: _styles_molecules_main_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.gridContentMain,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx(_components_molecules_ContentCRUD__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    })), __jsx("div", {
      className: _styles_molecules_main_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.gridFooterMain,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx(_components_molecules_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CRUD);

/***/ }),

/***/ "./styles/molecules/content.module.css":
/*!*********************************************!*\
  !*** ./styles/molecules/content.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"mainContainer": "content_mainContainer__qpNmC"
};

/***/ }),

/***/ "./styles/molecules/footer.module.css":
/*!********************************************!*\
  !*** ./styles/molecules/footer.module.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"footerContainer": "footer_footerContainer__3s1ow"
};

/***/ }),

/***/ "./styles/molecules/main.module.css":
/*!******************************************!*\
  !*** ./styles/molecules/main.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"gridContainerMain": "main_gridContainerMain__znA6t",
	"overflowScroll": "main_overflowScroll__1WUwJ",
	"gridSidebarMain": "main_gridSidebarMain__AhVWW",
	"gridContentMain": "main_gridContentMain__2FS7U",
	"gridFooterMain": "main_gridFooterMain__-64M5",
	"noselect": "main_noselect__2b_nn"
};

/***/ }),

/***/ "./styles/molecules/sidebar.module.css":
/*!*********************************************!*\
  !*** ./styles/molecules/sidebar.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sidebarContainer": "sidebar_sidebarContainer__3-fty",
	"title": "sidebar_title__1hh87",
	"titlehighlight": "sidebar_titlehighlight__Pp6zZ",
	"expandableList": "sidebar_expandableList__2sYFV"
};

/***/ }),

/***/ "./styles/quarks/button.module.css":
/*!*****************************************!*\
  !*** ./styles/quarks/button.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"button": "button_button__34fSz",
	"fadeIn": "button_fadeIn__1h-Ff"
};

/***/ }),

/***/ 3:
/*!*****************************!*\
  !*** multi ./pages/crud.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/patientplatypus/Documents/platypusNEST/example_portfolio_project/frontend/pages/crud.js */"./pages/crud.js");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=crud.js.map
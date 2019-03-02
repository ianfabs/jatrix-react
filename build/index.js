module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * termynal.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A lightweight, modern and extensible animated terminal window, using
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * async/await.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Ian Fabs <ianfabs@outlook.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Jay Aguiar
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version 1.0.1
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/** React components that creates a Typing span */
var _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class(props) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

    _this.state = {
      display: '',
      inc: 0,
      ninc: 0,
      alph: " abcdefghijklmnopqrstuvwxyz1234567890",
      full: []
    };
    return _this;
  }

  _createClass(_class, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.writeText(this.props.text || this.props.children, this.props.fps, this.props.caps, this.props.done);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "span",
        null,
        this.state.display
      );
    }
  }, {
    key: "writeText",
    value: function writeText(text) {
      var fps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 40;

      var _this2 = this;

      var caps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var done = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};

      var logic = function logic() {
        if (_this2.state.alph[_this2.state.inc - 1] === text.charAt(_this2.state.ninc).toLowerCase()) {
          _this2.setState({ ninc: _this2.state.ninc + 1 });
          _this2.setState({ inc: 0 });
        }
        //Adds a letter to the full array
        _this2.state.full[_this2.state.ninc] = caps ? _this2.state.alph[_this2.state.inc].toUpperCase() : _this2.state.alph[_this2.state.inc];
        // set display to be as much of the word as possible
        _this2.setState({ display: _this2.state.full.reduce(function (a, b) {
            return a + b;
          }) });
        //inc++;
        _this2.setState({ inc: _this2.state.inc + 1 });

        if (_this2.state.ninc < text.length) _this2.writeText(text, fps, caps, done);else done();
      };
      setTimeout(logic, fps);
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;

/***/ })
/******/ ]);
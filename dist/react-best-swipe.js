(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("swipe-js-iso"));
	else if(typeof define === 'function' && define.amd)
		define("ReactSwipe", ["react", "swipe-js-iso"], factory);
	else if(typeof exports === 'object')
		exports["ReactSwipe"] = factory(require("react"), require("swipe-js-iso"));
	else
		root["ReactSwipe"] = factory(root["React"], root["Swipe"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactSwipe = __webpack_require__(1);

	var _reactSwipe2 = _interopRequireDefault(_reactSwipe);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by jiaaobo on 16/6/9.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var ReactBestSwipe = function (_React$Component) {
	    _inherits(ReactBestSwipe, _React$Component);

	    function ReactBestSwipe(props) {
	        _classCallCheck(this, ReactBestSwipe);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactBestSwipe).call(this, props));

	        var paginations = [];

	        //渲染dot
	        for (var i = 0; i < _this.props.count; i++) {
	            var o = { index: i };
	            if (i == 0) o.active = true;
	            paginations.push(o);
	        }

	        _this.state = {
	            swipeOptions: {
	                speed: _this.props.swipeOptions.speed || 500,
	                auto: _this.props.swipeOptions.auto || 3000,
	                continuous: _this.props.swipeOptions.continuous || true,
	                disableScroll: _this.props.swipeOptions.disableScroll || false,
	                stopPropagation: _this.props.swipeOptions.stopPropagation || false,
	                callback: _this._selectIndex.bind(_this),
	                transitionEnd: _this._transitionEnd.bind(_this)
	            },
	            paginations: paginations
	        };
	        return _this;
	    }

	    _createClass(ReactBestSwipe, [{
	        key: "_selectIndex",
	        value: function _selectIndex(index, elem) {

	            if (this.props.showPagination) {

	                var p = this.state.paginations;
	                p.map(function (o, i) {
	                    if (o.index == index) {
	                        o.active = true;
	                    } else {
	                        o.active = false;
	                    }

	                    return o;
	                });

	                this.setState({
	                    paginations: p
	                });
	            }

	            if (this.props.swipeOptions.callback) this.props.swipeOptions.callback(index, elem);
	        }
	    }, {
	        key: "_transitionEnd",
	        value: function _transitionEnd(index, elem) {

	            if (this.props.swipeOptions.transitionEnd) this.props.swipeOptions.transitionEnd(index, elem);
	        }
	    }, {
	        key: "_renderPagination",
	        value: function _renderPagination() {

	            if (this.props.showPagination) {

	                if (!this.props.count || this.props.count < 1) {
	                    throw new Error("count length > 0");
	                }

	                var pList = this.state.paginations.map(function (p) {
	                    return React.createElement("span", { key: p.index,
	                        className: "swiper-pagination-bullet " + (p.active ? "swiper-pagination-bullet-active" : "") });
	                });

	                return React.createElement(
	                    "div",
	                    { className: "swiper-pagination swiper-container-horizontal" },
	                    pList
	                );
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            console.log("render..");
	            return React.createElement(
	                "div",
	                { className: "pos-rel" },
	                React.createElement(
	                    _reactSwipe2.default,
	                    {
	                        key: this.props.count,
	                        ref: this.props.refName,
	                        className: "carousel",
	                        swipeOptions: this.state.swipeOptions },
	                    this.props.children
	                ),
	                this._renderPagination()
	            );
	        }
	    }]);

	    return ReactBestSwipe;
	}(React.Component);

	exports.default = ReactBestSwipe;


	ReactBestSwipe.defaultProps = {
	    refName: "reactSwipe",
	    showPagination: false
	};
	ReactBestSwipe.propTypes = {
	    //轮播配置
	    swipeOptions: React.PropTypes.object,
	    //默认子项目的长度
	    count: React.PropTypes.number,
	    //swipe的引用
	    refName: React.PropTypes.string,
	    //显示dot
	    showPagination: React.PropTypes.bool

	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _swipeJsIso = __webpack_require__(3);

	var _swipeJsIso2 = _interopRequireDefault(_swipeJsIso);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ReactSwipe = function (_Component) {
	    _inherits(ReactSwipe, _Component);

	    function ReactSwipe() {
	        _classCallCheck(this, ReactSwipe);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ReactSwipe).apply(this, arguments));
	    }

	    _createClass(ReactSwipe, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var swipeOptions = this.props.swipeOptions;

	            this.swipe = (0, _swipeJsIso2.default)(this.refs.container, swipeOptions);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.swipe.kill();
	            this.swipe = void 0;
	        }
	    }, {
	        key: 'next',
	        value: function next() {
	            this.swipe.next();
	        }
	    }, {
	        key: 'prev',
	        value: function prev() {
	            this.swipe.prev();
	        }
	    }, {
	        key: 'slide',
	        value: function slide() {
	            var _swipe;

	            (_swipe = this.swipe).slide.apply(_swipe, arguments);
	        }
	    }, {
	        key: 'getPos',
	        value: function getPos() {
	            return this.swipe.getPos();
	        }
	    }, {
	        key: 'getNumSlides',
	        value: function getNumSlides() {
	            return this.swipe.getNumSlides();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var id = _props.id;
	            var className = _props.className;
	            var style = _props.style;
	            var children = _props.children;

	            return _react2.default.createElement(
	                'div',
	                { ref: 'container', id: id, className: 'react-swipe-container ' + className, style: style.container },
	                _react2.default.createElement(
	                    'div',
	                    { style: style.wrapper },
	                    _react2.default.Children.map(children, function (child) {
	                        return _react2.default.cloneElement(child, { style: style.child });
	                    })
	                )
	            );
	        }
	    }]);

	    return ReactSwipe;
	}(_react.Component);

	ReactSwipe.propTypes = {
	    swipeOptions: _react.PropTypes.shape({
	        startSlide: _react.PropTypes.number,
	        speed: _react.PropTypes.number,
	        auto: _react.PropTypes.number,
	        continuous: _react.PropTypes.bool,
	        disableScroll: _react.PropTypes.bool,
	        stopPropagation: _react.PropTypes.bool,
	        swiping: _react.PropTypes.func,
	        callback: _react.PropTypes.func,
	        transitionEnd: _react.PropTypes.func
	    }),
	    style: _react.PropTypes.shape({
	        container: _react.PropTypes.object,
	        wrapper: _react.PropTypes.object,
	        child: _react.PropTypes.object
	    }),
	    id: _react.PropTypes.string,
	    className: _react.PropTypes.string
	};
	ReactSwipe.defaultProps = {
	    swipeOptions: {},
	    style: {
	        container: {
	            overflow: 'hidden',
	            visibility: 'hidden',
	            position: 'relative'
	        },

	        wrapper: {
	            overflow: 'hidden',
	            position: 'relative'
	        },

	        child: {
	            float: 'left',
	            width: '100%',
	            position: 'relative',
	            transitionProperty: 'transform'
	        }
	    },
	    className: ''
	};
	exports.default = ReactSwipe;
	module.exports = exports['default'];


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }
/******/ ])
});
;
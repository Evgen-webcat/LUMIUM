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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app/app.js":
/*!***********************!*\
  !*** ./js/app/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n    $('.preloader_content_button').click(function () {\n        $('.preloader').fadeOut();\n    });\n\n    $('.menu-button').click(function () {\n        $(this).toggleClass('menu-open');\n        $('.menu').fadeToggle();\n    });\n\n    $('.button').click(function () {\n        var button = $(this);\n        $(button).addClass('click');\n        setTimeout(\n            function () {\n                $(button).removeClass('click');\n            },\n            1000\n        );\n    });\n});\n\n\n//# sourceURL=webpack:///./js/app/app.js?");

/***/ }),

/***/ "./js/app/stars.js":
/*!*************************!*\
  !*** ./js/app/stars.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\r\n    function draw() {\r\n        con.clearRect(0, 0, WIDTH, HEIGHT);\r\n        for (var e = 0; e < pxs.length; e++) {\r\n            pxs[e].fade();\r\n            pxs[e].move();\r\n            pxs[e].draw()\r\n        }\r\n    }\r\n\r\n    function Circle() {\r\n        WIDTH = window.innerWidth;\r\n        HEIGHT = window.innerHeight;\r\n        this.s = {\r\n            ttl: 8e3,\r\n            xmax: 5,\r\n            ymax: 2,\r\n            rmax: 5,\r\n            rt: 1,\r\n            xdef: 960,\r\n            ydef: 540,\r\n            xdrift: 4,\r\n            ydrift: 4,\r\n            random: true,\r\n            blink: true\r\n        };\r\n        this.reset = function () {\r\n            this.x = this.s.random ? WIDTH * Math.random() : this.s.xdef;\r\n            this.y = this.s.random ? HEIGHT * Math.random() : this.s.ydef;\r\n            this.r = (this.s.rmax - 1) * Math.random() + 1;\r\n            this.dx = Math.random() * this.s.xmax * (Math.random() < .5 ? -1 : 1);\r\n            this.dy = Math.random() * this.s.ymax * (Math.random() < .5 ? -1 : 1);\r\n            this.hl = this.s.ttl / rint * (this.r / this.s.rmax);\r\n            this.rt = Math.random() * this.hl;\r\n            this.s.rt = Math.random() + 1;\r\n            this.stop = Math.random() * .2 + .4;\r\n            this.s.xdrift *= Math.random() * (Math.random() < .5 ? -1 : 1);\r\n            this.s.ydrift *= Math.random() * (Math.random() < .5 ? -1 : 1)\r\n        };\r\n        this.fade = function () {\r\n            this.rt += this.s.rt\r\n        };\r\n        this.draw = function () {\r\n            if (this.s.blink && (this.rt <= 0 || this.rt >= this.hl)) this.s.rt = this.s.rt * -1;\r\n            else if (this.rt >= this.hl) this.reset();\r\n            var e = 1 - this.rt / this.hl;\r\n            con.beginPath();\r\n            con.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);\r\n            con.closePath();\r\n            var t = this.r * e;\r\n            g = con.createRadialGradient(this.x, this.y, 0, this.x, this.y, t <= 0 ? 1 : t);\r\n            g.addColorStop(0, \"rgba(255,255,255,\" + e + \")\");\r\n            g.addColorStop(this.stop, \"rgba(255,255,255,\" + e * .6 + \")\");\r\n            g.addColorStop(1, \"rgba(255,255,255,0)\");\r\n            con.fillStyle = g;\r\n            con.fill()\r\n        };\r\n        this.move = function () {\r\n            WIDTH = window.innerWidth;\r\n            HEIGHT = window.innerHeight;\r\n            this.x += this.rt / this.hl * this.dx;\r\n            this.y += this.rt / this.hl * this.dy;\r\n            if (this.x > WIDTH || this.x < 0) this.dx *= -1;\r\n            if (this.y > HEIGHT || this.y < 0) this.dy *= -1\r\n        };\r\n        this.getX = function () {\r\n            return this.x\r\n        };\r\n        this.getY = function () {\r\n            return this.y\r\n        }\r\n    }\r\n\r\n    var WIDTH;\r\n    var HEIGHT;\r\n    var canvas;\r\n    var con;\r\n    var g;\r\n    var pxs = new Array;\r\n    var rint = 60;\r\n\r\n    WIDTH = \"100%\";\r\n    HEIGHT = \"100%\";\r\n    WIDTH = window.innerWidth;\r\n    HEIGHT = window.innerHeight;\r\n    canvas = document.getElementById(\"stars\");\r\n    if (canvas) {\r\n        $(canvas).attr(\"width\", WIDTH).attr(\"height\", HEIGHT);\r\n        con = canvas.getContext(\"2d\");\r\n        for (var e = 0; e < 100; e++) {\r\n            pxs[e] = new Circle;\r\n            pxs[e].reset()\r\n        }\r\n        setInterval(draw, rint);\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./js/app/stars.js?");

/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi ./js/app/app.js ./js/app/stars.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./js/app/app.js */\"./js/app/app.js\");\nmodule.exports = __webpack_require__(/*! ./js/app/stars.js */\"./js/app/stars.js\");\n\n\n//# sourceURL=webpack:///multi_./js/app/app.js_./js/app/stars.js?");

/***/ })

/******/ });

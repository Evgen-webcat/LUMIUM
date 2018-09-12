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

eval("$(document).ready(function () {\n    $('.preloader_content_button').click(function () {\n        $('.preloader').fadeOut();\n    });\n\n    $('.menu-button').click(function () {\n        $(this).toggleClass('menu-open');\n        $('.menu').fadeToggle();\n    });\n\n    $('.button').click(function () {\n        var button = $(this);\n        $(button).addClass('click');\n        setTimeout(\n            function () {\n                $(button).removeClass('click');\n            },\n            1000\n        );\n    });\n//    new Vivus('logo_img');\n\n});\n\n\n//# sourceURL=webpack:///./js/app/app.js?");

/***/ }),

/***/ "./js/app/mouse_parallax.js":
/*!**********************************!*\
  !*** ./js/app/mouse_parallax.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n    var img = document.getElementById('parallax_block');\n    var parallax_img = new Parallax(img);\n});\n\n\n//# sourceURL=webpack:///./js/app/mouse_parallax.js?");

/***/ }),

/***/ "./js/app/sliders.js":
/*!***************************!*\
  !*** ./js/app/sliders.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n    $('.product_slider').slick({\n        arrows: false,\n        fade: true,\n        speed: 5000,\n        autoplay: true\n    });\n\n    $('.product_slider').slick('setPosition');\n\n    $('.products_slider').slick({\n        slidesToShow: 3,\n        infinite: false\n    });\n\n    $('.products_slider').slick('setPosition');\n});\n\n\n//# sourceURL=webpack:///./js/app/sliders.js?");

/***/ }),

/***/ "./js/app/stars.js":
/*!*************************!*\
  !*** ./js/app/stars.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n    function draw() {\n        con.clearRect(0, 0, WIDTH, HEIGHT);\n        for (var e = 0; e < pxs.length; e++) {\n            pxs[e].fade();\n            pxs[e].move();\n            pxs[e].draw()\n        }\n    }\n\n    function Circle() {\n        WIDTH = window.innerWidth;\n        HEIGHT = window.innerHeight;\n        this.s = {\n            ttl: 8e3,\n            xmax: 5,\n            ymax: 2,\n            rmax: 5,\n            rt: 1,\n            xdef: 960,\n            ydef: 540,\n            xdrift: 4,\n            ydrift: 4,\n            random: true,\n            blink: true\n        };\n        this.reset = function () {\n            this.x = this.s.random ? WIDTH * Math.random() : this.s.xdef;\n            this.y = this.s.random ? HEIGHT * Math.random() : this.s.ydef;\n            this.r = (this.s.rmax - 1) * Math.random() + 1;\n            this.dx = Math.random() * this.s.xmax * (Math.random() < .5 ? -1 : 1);\n            this.dy = Math.random() * this.s.ymax * (Math.random() < .5 ? -1 : 1);\n            this.hl = this.s.ttl / rint * (this.r / this.s.rmax);\n            this.rt = Math.random() * this.hl;\n            this.s.rt = Math.random() + 1;\n            this.stop = Math.random() * .2 + .4;\n            this.s.xdrift *= Math.random() * (Math.random() < .5 ? -1 : 1);\n            this.s.ydrift *= Math.random() * (Math.random() < .5 ? -1 : 1)\n        };\n        this.fade = function () {\n            this.rt += this.s.rt\n        };\n        this.draw = function () {\n            if (this.s.blink && (this.rt <= 0 || this.rt >= this.hl)) this.s.rt = this.s.rt * -1;\n            else if (this.rt >= this.hl) this.reset();\n            var e = 1 - this.rt / this.hl;\n            con.beginPath();\n            con.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);\n            con.closePath();\n            var t = this.r * e;\n            g = con.createRadialGradient(this.x, this.y, 0, this.x, this.y, t <= 0 ? 1 : t);\n            g.addColorStop(0, \"rgba(255,255,255,\" + e + \")\");\n            g.addColorStop(this.stop, \"rgba(255,255,255,\" + e * .6 + \")\");\n            g.addColorStop(1, \"rgba(255,255,255,0)\");\n            con.fillStyle = g;\n            con.fill()\n        };\n        this.move = function () {\n            WIDTH = window.innerWidth;\n            HEIGHT = window.innerHeight;\n            this.x += this.rt / this.hl * this.dx;\n            this.y += this.rt / this.hl * this.dy;\n            if (this.x > WIDTH || this.x < 0) this.dx *= -1;\n            if (this.y > HEIGHT || this.y < 0) this.dy *= -1\n        };\n        this.getX = function () {\n            return this.x\n        };\n        this.getY = function () {\n            return this.y\n        }\n    }\n\n    var WIDTH;\n    var HEIGHT;\n    var canvas;\n    var con;\n    var g;\n    var pxs = new Array;\n    var rint = 60;\n\n    WIDTH = \"100%\";\n    HEIGHT = \"100%\";\n    WIDTH = window.innerWidth;\n    HEIGHT = window.innerHeight;\n    canvas = document.getElementById(\"stars\");\n    if (canvas) {\n        $(canvas).attr(\"width\", WIDTH).attr(\"height\", HEIGHT);\n        con = canvas.getContext(\"2d\");\n        for (var e = 0; e < 100; e++) {\n            pxs[e] = new Circle;\n            pxs[e].reset()\n        }\n        setInterval(draw, rint);\n    }\n});\n\n\n//# sourceURL=webpack:///./js/app/stars.js?");

/***/ }),

/***/ "./js/app/whell.js":
/*!*************************!*\
  !*** ./js/app/whell.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n    'use strict';\n\n    var currentPage = 0;\n    var page = $('.page');\n    var vivus;\n    var parallaxDiagramm;\n    var parallaxLogo;\n    var animation = true;\n\n    function bindWheel() {\n        $(window).bind('mousewheel', function (event) {\n            event.preventDefault();\n            wheel(event);\n        });\n    }\n\n    bindWheel();\n\n    function wheel(event) {\n        if (event.originalEvent.wheelDelta / 120 < 0) {\n            nextPage();\n        } else {\n            prevPage();\n        }\n    };\n\n    function togglePage(direction) {\n        $(window).unbind('mousewheel');\n        page.eq(currentPage).removeClass('active_page');\n        if (direction == 'next') {\n            currentPage++;\n        } else if (direction == 'prev') {\n            currentPage--;\n        }\n        setTimeout(\n            function () {\n                page.eq(currentPage).addClass('active_page');\n            },\n            500);\n        if (currentPage == 4) {\n            setTimeout(function () {\n                $('.mouse').addClass('mouse-white');\n            }, 500);\n        } else {\n            $('.mouse').removeClass('mouse-white');\n        }\n        if (currentPage == 3 && animation == true) {\n            $(window).unbind('mousewheel');\n\n            pageAnimation();\n\n            setTimeout(function () {\n                $(window).bind('mousewheel', function (event) {\n                    event.preventDefault();\n                    $(window).unbind('mousewheel');\n                    pageAnimationReverse();\n                });\n            }, 7000);\n        } else {\n            setTimeout(function () {\n                bindWheel();\n            }, 1000);\n        }\n    }\n\n    function nextPage() {\n        if (currentPage < page.length - 1) {\n            togglePage('next');\n        }\n    };\n\n    function prevPage() {\n        if (currentPage > 0) {\n            togglePage('prev');\n        }\n    };\n\n    function pageAnimation() {\n        setTimeout(function () {\n            $('.dot').css({\n                'width': '100px',\n                'height': '100px',\n                'background-color': '#4c4c4c'\n            });\n            $('.logo_img').css({\n                'width': '100px',\n                'height': '100px',\n                'box-shadow': '0 0 25px rgba(255, 255, 255, .5)'\n            });\n        }, 1000);\n        setTimeout(function () {\n            $('#diagramm').css('display', 'block');\n            vivus = new Vivus('diagramm', {\n                duration: 200,\n                type: 'sync'\n            })\n            vivus.play();\n        }, 2500);\n        setTimeout(function () {\n            $(\"#diagramm\").addClass('diagramm_gradient');\n        }, 6000);\n        setTimeout(function () {\n            $(\".aroma\").css('opacity', '1');\n        }, 6500);\n        setTimeout(function () {\n            var diagramm = document.getElementById('g7390');\n            var logo_block = document.getElementById('logo_block');\n            parallaxDiagramm = new Parallax(diagramm, {\n                relativeInput: true,\n                hoverOnly: true\n            });\n            parallaxLogo = new Parallax(logo_block, {\n                relativeInput: true,\n                hoverOnly: true\n            });\n        }, 7500);\n    };\n\n    function pageAnimationReverse() {\n        parallaxDiagramm.destroy();\n        parallaxLogo.destroy();\n        $(\".aroma\").css('opacity', '0');\n        setTimeout(function () {\n            $(\"#diagramm\").removeClass('diagramm_gradient');\n        }, 2000);\n        setTimeout(function () {\n            vivus.play(-1);\n        }, 3000);\n        setTimeout(function () {\n            $('.text_1').fadeOut(1000);\n            $('.text_2').delay(1000).fadeIn();\n        }, 4000);\n        setTimeout(function () {\n             $('.dot').css({\n                'width': '15px',\n                'height': '15px',\n                'background-color': '#fff'\n            });\n            $('.logo_img').css({\n                'width': '15px',\n                'height': '15px',\n                'box-shadow': 'none'\n            });\n        }, 7000);\n        setTimeout(function () {\n            animation = false;\n            bindWheel();\n        }, 9000);\n    }\n});\n\n\n//# sourceURL=webpack:///./js/app/whell.js?");

/***/ }),

/***/ "./js/app/youtube.js":
/*!***************************!*\
  !*** ./js/app/youtube.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n    $('.page_3_video').click(function () {\n        $('.page_3_content, .page_3_video, header').fadeOut(1000);\n        setTimeout(function () {\n            $('.youtube_video').fadeIn(1000);\n        }, 1000);\n    });\n\n});\n\n\n//# sourceURL=webpack:///./js/app/youtube.js?");

/***/ }),

/***/ 0:
/*!************************************************************************************************************************************!*\
  !*** multi ./js/app/app.js ./js/app/mouse_parallax.js ./js/app/sliders.js ./js/app/stars.js ./js/app/whell.js ./js/app/youtube.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./js/app/app.js */\"./js/app/app.js\");\n__webpack_require__(/*! ./js/app/mouse_parallax.js */\"./js/app/mouse_parallax.js\");\n__webpack_require__(/*! ./js/app/sliders.js */\"./js/app/sliders.js\");\n__webpack_require__(/*! ./js/app/stars.js */\"./js/app/stars.js\");\n__webpack_require__(/*! ./js/app/whell.js */\"./js/app/whell.js\");\nmodule.exports = __webpack_require__(/*! ./js/app/youtube.js */\"./js/app/youtube.js\");\n\n\n//# sourceURL=webpack:///multi_./js/app/app.js_./js/app/mouse_parallax.js_./js/app/sliders.js_./js/app/stars.js_./js/app/whell.js_./js/app/youtube.js?");

/***/ })

/******/ });

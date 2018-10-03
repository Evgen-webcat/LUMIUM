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

eval("$(document).ready(function () {\n    'use strict'\n\n    $('.preloader_content_button').click(function () {\n        $('.preloader').fadeOut();\n        document.cookie = 'cookie=true'\n    });\n\n    window.getCookie = function (name) {\n        var matches = document.cookie.match(new RegExp(\n            \"(?:^|; )\" + name.replace(/([\\.$?*|{}\\(\\)\\[\\]\\\\\\/\\+^])/g, '\\\\$1') + \"=([^;]*)\"\n        ));\n        return matches ? decodeURIComponent(matches[1]) : undefined;\n    };\n\n    if (getCookie('cookie') !== 'true') {\n        $('.preloader').css('display', 'block');\n    }\n\n    $('.menu-button').click(function () {\n        $(this).toggleClass('menu-open');\n        $('.menu').fadeToggle();\n    });\n\n    $('.button').click(function () {\n        var button = $(this);\n        button.addClass('click');\n        setTimeout(\n            function () {\n                $(button).removeClass('click');\n            },\n            1000\n        );\n    });\n\n    var productPage = document.getElementById('productPage');\n\n    if (!productPage) {\n        if (getCookie('value') !== '0') {\n            document.cookie = 'value=0'\n        }\n    }\n\n    function setCookieValue() {\n        var index = $(this).data('index');\n        document.cookie = 'value=' + index;\n        location.href = '/pages/products.html'\n        return false;\n    };\n\n    $('.product_slider_slide_button').click(setCookieValue);\n    $('.products_slider_slide_button').click(setCookieValue);\n\n    $('.vibes_list').jScrollPane({\n        verticalDragMinHeight: 90,\n        verticalDragMaxHeight: 90,\n        animateScroll: true\n    });\n\n});\n\n\n//# sourceURL=webpack:///./js/app/app.js?");

/***/ }),

/***/ "./js/app/diagramm.js":
/*!****************************!*\
  !*** ./js/app/diagramm.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n    var color;\n\n    $('.aroma').click(function () {\n        color = $(this).data('aroma');\n\t\tparallaxDestroy ();\n        $(\".diagramm_circle\").addClass('diagramm_open ' + color + '');\n\t\t$(\".diagramm_circle\").animate({\n\t\t\topacity: 1\n\t\t}, 500);\n\t\t$(\".aroma, .parallax_img_wrap\").css('opacity', '0');\n        $('.logo_img, .dot').fadeOut(300);\n        $('.diagramm_imgs').fadeIn();\n        $('.diagramm_' + color + '').fadeIn();\n//        $('.aroma_name').addClass('anim');\n    });\n\n    $('.diagramm_imgs').click(function () {\n        $('.diagramm_imgs').fadeOut();\n        $('.diagramm_' + color + '').fadeOut();\n        $(\".aroma, .parallax_img_wrap\").css('opacity', '1');\n        $('.logo_img, .dot').delay(500).fadeIn();\n        $(\".diagramm_circle\").animate({\n\t\t\topacity: 0\n\t\t}, 500);\n        setTimeout(function () {\n            $(\".diagramm_circle\").removeClass('diagramm_open ' + color + '');\n//        $('.aroma_name').removeClass('anim');\n            parallaxInit ();\n        }, 500);\n    });\n});\n\n\n//# sourceURL=webpack:///./js/app/diagramm.js?");

/***/ }),

/***/ "./js/app/gallery.js":
/*!***************************!*\
  !*** ./js/app/gallery.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n    $('.gallery_img').click(function (event) {\n        event.preventDefault();\n        var src = $(this).data('src');\n\n        $('.gallery_block_img').attr('src', src);\n\n        $('.active_page').find('.product-details_imgs_block_one').css('opacity', '0');\n        setTimeout(function () {\n            $('.active_page').find('.product-details_imgs_block_two').css('opacity', '0');\n        }, 500);\n        setTimeout(function () {\n            $('.active_page').find('.product-details_imgs_block_three').css('opacity', '0');\n        }, 1000);\n        setTimeout(function () {\n            $('.gallery_block').fadeIn();\n        }, 1500);\n\n        $('.gallery_block').click(function () {\n            $('.gallery_block').fadeOut();\n            setTimeout(function () {\n                $('.active_page').find('.product-details_imgs_block_one').css('opacity', '1');\n            }, 500);\n            setTimeout(function () {\n                $('.active_page').find('.product-details_imgs_block_two').css('opacity', '1');\n            }, 1000);\n            setTimeout(function () {\n                $('.active_page').find('.product-details_imgs_block_three').css('opacity', '1');\n                $('.gallery_block_img').attr('src', '');\n            }, 1500);\n        });\n    });\n});\n\n\n//# sourceURL=webpack:///./js/app/gallery.js?");

/***/ }),

/***/ "./js/app/range.js":
/*!*************************!*\
  !*** ./js/app/range.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n    'use strict';\n\n    var productPage = document.getElementById('productPage');\n    var currentValue = getCookie('value') || 0;\n    var currentSlide = getCookie('value') || 0;\n    var productQuantity = $('.single_product').length - 1;\n    var currentDetails = 0;\n    var singleScroll = false;\n\n    $('.single_product').eq(currentValue).fadeIn('fast');\n\n    $('.range_slider').ionRangeSlider({\n        grid: true,\n        min: 1,\n        max: 7,\n        from: currentValue,\n        hide_min_max: true,\n        values: [\n        \"435\", \"495\",\n        \"520\", \"555\",\n        \"610\", \"650\",\n        \"700\"\n    ],\n        onStart: function () {\n            $('.irs-grid-text').eq(currentValue).addClass('irs-grid-text-active');\n        },\n        onFinish: function (data) {\n            var value = data.from;\n            toggleProduct(value);\n        },\n        onUpdate: function (data) {\n            var value = data.from;\n            toggleProduct(value);\n        }\n    });\n    var slider = $('.range_slider').data('ionRangeSlider');\n\n    function rangeWheel() {\n        if (productPage) {\n            bindMousewheel();\n        }\n    };\n\n    rangeWheel();\n\n    function bindMousewheel() {\n        $(window).bind('mousewheel', function (event) {\n            event.preventDefault();\n            updateSlider(event);\n        });\n    };\n\n    function updateSlider(event) {\n        $(window).unbind('mousewheel');\n        if (event.originalEvent.wheelDelta / 120 < 0) {\n            if (currentValue != productQuantity) {\n                slider.update({\n                    from: ++currentSlide\n                });\n            }\n        } else {\n            if (currentValue !== 0) {\n                slider.update({\n                    from: --currentSlide\n                });\n            }\n        }\n        setTimeout(function () {\n            bindMousewheel();\n        }, 1000);\n    };\n\n    function toggleProduct(value) {\n        if (value !== currentValue) {\n        $('.single_product').eq(currentValue).delay(250).fadeOut(750);\n        $('.single_product').eq(value).fadeIn(750);\n        $('.irs-grid-text-active').removeClass('irs-grid-text-active');\n        $('.irs-grid-text').eq(value).addClass('irs-grid-text-active');\n        currentValue = value;\n        currentSlide = value;\n    }\n    }\n\n    $('.single_product').click(function () {\n        $(window).unbind('mousewheel');\n        $('.active_page').removeClass('active_page');\n        setTimeout(function () {\n            $('.product-details').eq(currentValue).addClass('active_page');\n            $('.active_page').find('.product-details_imgs').addClass('active');\n            $('.mouse_block').css({\n                visibility: 'visible',\n                opacity: '1'\n            });\n            singleScroll = true;\n            $(window).bind('mousewheel', singleProductScroll);\n            $('.mouse_block').bind('click', singleProductClick);\n        }, 500);\n    });\n\n    function toggleDetails(direction) {\n        console.log(currentDetails);\n        if (direction == 'next') {\n            if (currentDetails === 0) {\n                $('.active_page').find('.product-details_text_part_one').slideUp(500);\n                $('.active_page').find('.product-details_text_part_two').delay(500).slideDown(500);\n                $('.active_page').find('.product-details_imgs').addClass('next_imgs');\n                currentDetails++;\n            } else if (currentDetails === 1) {\n                $('.active_page').find('.product-details_imgs').removeClass('active');\n                setTimeout(function () {\n                    $('.active_page').find('.product-details_box_img').addClass('active');\n                    $('.active_page').find('.bottle').addClass('active');\n                    $('.active_page').find('.box').addClass('active');\n                }, 500);\n                currentDetails++;\n            } else if (currentDetails === 2) {\n                $('.active_page').addClass('active_page_header');\n                $('.active_page').find('.product-details_text, .product-details_box_img').css('transform', 'translateY(-10%)');\n                $('.active_page').find('.product-details_footer').css('bottom', '0');\n                $('.mouse_block').css({\n                    visibility: 'hidden',\n                    opacity: '0'\n                });\n                currentDetails++;\n            }\n        } else if (direction == 'prev') {\n            if (currentDetails === 0) {\n                singleScroll = false;\n                $('.active_page').find('.product-details_imgs').removeClass('active');\n                $('.active_page').removeClass('active_page');\n                $('.mouse_block').css({\n                    visibility: 'hidden',\n                    opacity: '0'\n                });\n                setTimeout(function () {\n                    $('.product').addClass('active_page');\n                    bindMousewheel();\n                }, 500);\n            } else if (currentDetails === 1) {\n                $('.active_page').find('.product-details_text_part_two').slideUp(500);\n                $('.active_page').find('.product-details_text_part_one').delay(500).slideDown(500);\n                $('.active_page').find('.product-details_imgs').removeClass('next_imgs');\n                currentDetails--;\n            } else if (currentDetails === 2) {\n                $('.active_page').find('.product-details_box_img').removeClass('active');\n                setTimeout(function () {\n                    $('.active_page').find('.product-details_imgs').addClass('active');\n                    $('.active_page').find('.bottle').removeClass('active');\n                    $('.active_page').find('.box').removeClass('active');\n                }, 500);\n                currentDetails--;\n            } else if (currentDetails === 3) {\n                $('.active_page').find('.product-details_text, .product-details_box_img').css('transform', 'translateY(0)');\n                $('.active_page').find('.product-details_footer').css('bottom', '-100px');\n                $('.mouse_block').css({\n                    visibility: 'visible',\n                    opacity: '1'\n                });\n                    $('.active_page').removeClass('active_page_header');\n                currentDetails--;\n            }\n        }\n        console.log(currentDetails);\n    };\n\n    function singleProductClick() {\n        $('.mouse_block').unbind('click');\n        console.log(currentDetails);\n        toggleDetails('next');\n        setTimeout(function () {\n            $('.mouse_block').bind('click', singleProductClick);\n        }, 1000);\n        console.log(currentDetails);\n    };\n\n    function singleProductScroll(event) {\n        $(window).unbind('mousewheel');\n        if (event.originalEvent.wheelDelta / 120 < 0) {\n            toggleDetails('next');\n            setTimeout(function () {\n                $(window).bind('mousewheel', singleProductScroll);\n            }, 1000);\n        } else if (event.originalEvent.wheelDelta / 120 > 0) {\n            toggleDetails('prev');\n            if (singleScroll) {\n            setTimeout(function () {\n                $(window).bind('mousewheel', singleProductScroll);\n            }, 1000);\n            }\n        };\n    };\n\n    $('.product-details_footer').click(function () {\n        $(window).unbind('mousewheel');\n        $('.mouse_block').unbind('click');\n        var index = $(this).parent('.product-details').index() - 1;\n        $('.active_page').removeClass('active_page');\n            $('.product-details').eq(index).removeClass('active_page_header');\n            $('.product-details').eq(index).find('.product-details_box_img').removeClass('active');\n        setTimeout(function () {\n            bindMousewheel();\n            $('.product').addClass('active_page');\n            $('.product-details').eq(index).find('.product-details_text_part_one').slideDown(500);\n            $('.product-details').eq(index).find('.product-details_text_part_two').delay(500).slideUp(500);\n            $('.product-details').eq(index).find('.product-details_imgs').removeClass('next_imgs');\n            $('.bottle.active').removeClass('active');\n            $('.box.active').removeClass('active');\n            $('.product-details').eq(index).find('.product-details_text, .product-details_box_img').css('transform', 'translateY(0)');\n            $('.product-details').eq(index).find('.product-details_footer').css('bottom', '-100px');\n\n\n        }, 500);\n        currentValue = index;\n        currentSlide = index;\n        if (currentValue != productQuantity) {\n            slider.update({\n                from: ++currentSlide\n            });\n        } else {\n            slider.update({\n                from: 0\n            });\n        };\n        currentDetails = 0;\n    });\n});\n\n\n//# sourceURL=webpack:///./js/app/range.js?");

/***/ }),

/***/ "./js/app/sliders.js":
/*!***************************!*\
  !*** ./js/app/sliders.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n    $('.product_slider').slick({\n        arrows: false,\n        fade: true,\n        speed: 5000,\n        autoplay: true\n    });\n\n    $('.products_slider').slick({\n        slidesToShow: 3,\n\t\tslideToScroll: 1,\n//        infinite: false,\n//\t\tautoplay: true\n    });\n});\n\n\n//# sourceURL=webpack:///./js/app/sliders.js?");

/***/ }),

/***/ "./js/app/stars.js":
/*!*************************!*\
  !*** ./js/app/stars.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n    function draw() {\n        con.clearRect(0, 0, WIDTH, HEIGHT);\n        for (var e = 0; e < pxs.length; e++) {\n            pxs[e].fade();\n            pxs[e].move();\n            pxs[e].draw()\n        }\n    }\n\n    function Circle() {\n        WIDTH = window.innerWidth;\n        HEIGHT = window.innerHeight;\n        this.s = {\n            ttl: 8e3,\n            xmax: 5,\n            ymax: 2,\n            rmax: 5,\n            rt: 1,\n            xdef: 960,\n            ydef: 540,\n            xdrift: 4,\n            ydrift: 4,\n            random: true,\n            blink: true\n        };\n        this.reset = function () {\n            this.x = this.s.random ? WIDTH * Math.random() : this.s.xdef;\n            this.y = this.s.random ? HEIGHT * Math.random() : this.s.ydef;\n            this.r = (this.s.rmax - 1) * Math.random() + 1;\n            this.dx = Math.random() * this.s.xmax * (Math.random() < .5 ? -1 : 1);\n            this.dy = Math.random() * this.s.ymax * (Math.random() < .5 ? -1 : 1);\n            this.hl = this.s.ttl / rint * (this.r / this.s.rmax);\n            this.rt = Math.random() * this.hl;\n            this.s.rt = Math.random() + 1;\n            this.stop = Math.random() * .2 + .4;\n            this.s.xdrift *= Math.random() * (Math.random() < .5 ? -1 : 1);\n            this.s.ydrift *= Math.random() * (Math.random() < .5 ? -1 : 1)\n        };\n        this.fade = function () {\n            this.rt += this.s.rt\n        };\n        this.draw = function () {\n            if (this.s.blink && (this.rt <= 0 || this.rt >= this.hl)) this.s.rt = this.s.rt * -1;\n            else if (this.rt >= this.hl) this.reset();\n            var e = 1 - this.rt / this.hl;\n            con.beginPath();\n            con.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);\n            con.closePath();\n            var t = this.r * e;\n            g = con.createRadialGradient(this.x, this.y, 0, this.x, this.y, t <= 0 ? 1 : t);\n            g.addColorStop(0, \"rgba(255,255,255,\" + e + \")\");\n            g.addColorStop(this.stop, \"rgba(255,255,255,\" + e * .6 + \")\");\n            g.addColorStop(1, \"rgba(255,255,255,0)\");\n            con.fillStyle = g;\n            con.fill()\n        };\n        this.move = function () {\n            WIDTH = window.innerWidth;\n            HEIGHT = window.innerHeight;\n            this.x += this.rt / this.hl * this.dx;\n            this.y += this.rt / this.hl * this.dy;\n            if (this.x > WIDTH || this.x < 0) this.dx *= -1;\n            if (this.y > HEIGHT || this.y < 0) this.dy *= -1\n        };\n        this.getX = function () {\n            return this.x\n        };\n        this.getY = function () {\n            return this.y\n        }\n    }\n\n    var WIDTH;\n    var HEIGHT;\n    var canvas;\n    var con;\n    var g;\n    var pxs = new Array;\n    var rint = 60;\n\n    WIDTH = \"100%\";\n    HEIGHT = \"100%\";\n    WIDTH = window.innerWidth;\n    HEIGHT = window.innerHeight;\n    canvas = document.getElementById(\"stars\");\n    if (canvas) {\n        $(canvas).attr(\"width\", WIDTH).attr(\"height\", HEIGHT);\n        con = canvas.getContext(\"2d\");\n        for (var e = 0; e < 100; e++) {\n            pxs[e] = new Circle;\n            pxs[e].reset()\n        }\n        setInterval(draw, rint);\n    }\n});\n\n\n//# sourceURL=webpack:///./js/app/stars.js?");

/***/ }),

/***/ "./js/app/vibes.js":
/*!*************************!*\
  !*** ./js/app/vibes.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\r\n    $('.vibes_list_link').click(function () {\r\n        var imgOne = $(this).data('img-one');\r\n        var imgTwo = $(this).data('img-two');\r\n        var caption = $(this).text();\r\n\r\n        $('.vibes_list_link_active').removeClass('vibes_list_link_active');\r\n        $(this).addClass('vibes_list_link_active');\r\n        $('.vibes_description').css('opacity', '0');\r\n        setTimeout(function () {\r\n            $(\".vibes_description_header_img\").eq(0).attr('src', imgOne);\r\n            $(\".vibes_description_header_img\").eq(1).attr('src', imgTwo);\r\n            $('.vibes_description_text_caption').text(caption);\r\n            $('.vibes_description').css('opacity', '1');\r\n        }, 500);\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./js/app/vibes.js?");

/***/ }),

/***/ "./js/app/whell.js":
/*!*************************!*\
  !*** ./js/app/whell.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n    'use strict';\n\n    var mainPage = document.getElementById('mainPage');\n    var currentPage = 0;\n    var page = $('.page');\n    var vivus;\n    var parallaxDiagramm;\n    var parallaxLogo;\n    var parallaxAroma;\n    var animation = true;\n\n    window.bindWheel = function () {\n        if (mainPage) {\n            $(window).bind('mousewheel', function (event) {\n                event.preventDefault();\n                wheel(event);\n            });\n            $('.mouse').bind('click', function () {\n                nextPage();\n            });\n        }\n    }\n\n    bindWheel();\n\n    function wheel(event) {\n        if (event.originalEvent.wheelDelta / 120 < 0) {\n            nextPage();\n        } else {\n            prevPage();\n        }\n    };\n\n    function togglePage(direction) {\n        $(window).unbind('mousewheel');\n        $('.mouse').unbind('click');\n        page.eq(currentPage).removeClass('active_page');\n        if (direction == 'next') {\n            currentPage++;\n        } else if (direction == 'prev') {\n            currentPage--;\n        }\n        setTimeout(\n            function () {\n                page.eq(currentPage).addClass('active_page');\n            },\n            500);\n\n        if (currentPage == 4) {\n            setTimeout(function () {\n                $('.mouse').addClass('mouse-white');\n                $('.sky_block').addClass('anim');\n            }, 500);\n        } else {\n            $('.mouse').removeClass('mouse-white');\n            $('.sky_block').removeClass('anim');\n        }\n\n        if (currentPage == 3 && animation == true) {\n            $(window).unbind('mousewheel');\n            $('.mouse').unbind('click');\n\n            pageAnimation();\n\n            setTimeout(function () {\n                $(window).bind('mousewheel', function (event) {\n                    event.preventDefault();\n                    $(window).unbind('mousewheel');\n                    pageAnimationReverse();\n                });\n                $('.mouse').bind('click', function () {\n                    $('.mouse').unbind('click');\n                    pageAnimationReverse();\n                });\n            }, 7000);\n        } else {\n            setTimeout(function () {\n                bindWheel();\n            }, 1000);\n        }\n\n        if (currentPage == 1) {\n            $('.products_slider').slick('slickPlay');\n        } else {\n            $('.products_slider').slick('slickPause');\n        }\n\n    }\n\n    function nextPage() {\n        if (currentPage < page.length - 1) {\n            togglePage('next');\n        }\n    };\n\n    function prevPage() {\n        if (currentPage > 0) {\n            togglePage('prev');\n        }\n    };\n\n    window.parallaxInit = function () {\n        var diagramm = document.getElementById('parallax_img_wrap');\n        var logo_block = document.getElementById('logo_block');\n        var aroma = document.getElementById('aroma_wrap');\n        parallaxDiagramm = new Parallax(diagramm, {\n            relativeInput: true,\n            hoverOnly: true\n        });\n        parallaxLogo = new Parallax(logo_block, {\n            relativeInput: true,\n            hoverOnly: true\n        });\n        parallaxAroma = new Parallax(aroma, {\n            relativeInput: true,\n            hoverOnly: true,\n            pointerEvents: true\n        });\n    };\n\n    window.parallaxDestroy = function () {\n        parallaxDiagramm.destroy();\n        parallaxLogo.destroy();\n        parallaxAroma.destroy();\n    };\n\n    function pageAnimation() {\n        setTimeout(function () {\n            $('.dot').css({\n                'width': '100px',\n                'height': '100px',\n                'background-color': '#4c4c4c'\n            });\n            $('.logo_img').css({\n                'width': '100px',\n                'height': '100px',\n                'box-shadow': '0 0 25px rgba(255, 255, 255, .5)'\n            });\n        }, 1000);\n        setTimeout(function () {\n            $('#diagramm').css('display', 'block');\n            vivus = new Vivus('diagramm', {\n                duration: 100,\n                type: 'sync'\n            })\n            vivus.play();\n        }, 2500);\n        setTimeout(function () {\n            $(\".parallax_img_wrap\").css('opacity', '1');\n            $(\".diagramm_circle\").animate({\n                opacity: 0\n            }, 500);\n        }, 4500);\n        setTimeout(function () {\n            $(\".aroma\").css('opacity', '1');\n        }, 5000);\n        setTimeout(function () {\n            parallaxInit();\n        }, 5500);\n    };\n\n    function pageAnimationReverse() {\n        parallaxDestroy();\n        $(\".aroma\").css('opacity', '0');\n        $(\".diagramm_circle\").animate({\n            opacity: 1\n        }, 500);\n        $(\".parallax_img_wrap\").css('opacity', '0');\n        setTimeout(function () {\n            $(\"#diagramm\").removeClass('diagramm_gradient');\n        }, 1000);\n        setTimeout(function () {\n            vivus.play(-1);\n        }, 2000);\n        setTimeout(function () {\n            $('.text_1').fadeOut(1000);\n            $('.text_2').delay(1000).fadeIn();\n        }, 3000);\n        setTimeout(function () {\n            $('.waves').css('display', 'block');\n            var currentWaves = 0;\n            var wavesLength = $('.waves_anim').length;\n            var waves = setInterval(function () {\n                if (currentWaves === wavesLength - 1) {\n                    clearInterval(waves);\n                } else {\n                    $('.waves_anim')[currentWaves].beginElement()\n                    currentWaves++;\n                }\n            }, 500);\n        }, 5000);\n        setTimeout(function () {\n            $('.dot').css({\n                'width': '15px',\n                'height': '15px',\n                'background-color': '#fff'\n            });\n            $('.logo_img').css({\n                'width': '15px',\n                'height': '15px',\n                'box-shadow': 'none'\n            });\n        }, 15000);\n        setTimeout(function () {\n            $('.waves').css('display', 'none');\n            //\t\t\tanimation = false;\n            bindWheel();\n        }, 25000);\n    };\n});\n\n\n//# sourceURL=webpack:///./js/app/whell.js?");

/***/ }),

/***/ "./js/app/youtube.js":
/*!***************************!*\
  !*** ./js/app/youtube.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n    'use strict'\n\n    //    var player;\n    //\n    //    function onYouTubeIframeAPIReady() {\n    //        player = new YT.Player('youtube_player', {\n    //            height: '360',\n    //            width: '640',\n    //            videoId: '2xCn8KL_rPE',\n    //            events: {\n    //                'onReady': onPlayerReady,\n    //                'onStateChange': onPlayerStateChange\n    //            }\n    //        });\n    //    };\n\n    $('.page_3_video').click(function () {\n        $('.page_3_content, .page_3_video, header').fadeOut(1000);\n        $('.youtube_video').delay(1000).fadeIn(1000);\n    });\n\n    $('.youtube_video_locker').click(function () {\n        clearInterval(mousemoveTimeout);\n        $('.youtube_video').fadeOut(1000);\n        $('.page_3_content, .page_3_video, header').delay(1000).fadeIn(1000);\n    });\n\n    function bindMousemove() {\n        $('.youtube_video_locker').bind('mousemove', fadeInHeader);\n    }\n\n    bindMousemove ();\n\n\n        var mousemoveTimeout;\n    var timeout = 3000;\n\n    function checkMousemove () {\n        $('.youtube_video_locker').bind('mousemove', function () {\n            clearInterval(mousemoveTimeout);\n            if ($('.menu').css('display') !== 'block') {\n            mousemoveTimeout = setTimeout(fadeOutHeader, timeout);\n            }\n        });\n        mousemoveTimeout = setTimeout(fadeOutHeader, timeout);\n    };\n\n    function fadeInHeader() {\n        $('.youtube_video_locker').unbind('mousemove');\n        $('header').fadeIn(500);\n        checkMousemove ();\n    };\n\n    function fadeOutHeader () {\n        $('.youtube_video_locker').unbind('mousemove');\n        $('header ').fadeOut(500);\n        bindMousemove ();\n    };\n});\n\n\n//# sourceURL=webpack:///./js/app/youtube.js?");

/***/ }),

/***/ 0:
/*!**************************************************************************************************************************************************************************************!*\
  !*** multi ./js/app/app.js ./js/app/diagramm.js ./js/app/gallery.js ./js/app/range.js ./js/app/sliders.js ./js/app/stars.js ./js/app/vibes.js ./js/app/whell.js ./js/app/youtube.js ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./js/app/app.js */\"./js/app/app.js\");\n__webpack_require__(/*! ./js/app/diagramm.js */\"./js/app/diagramm.js\");\n__webpack_require__(/*! ./js/app/gallery.js */\"./js/app/gallery.js\");\n__webpack_require__(/*! ./js/app/range.js */\"./js/app/range.js\");\n__webpack_require__(/*! ./js/app/sliders.js */\"./js/app/sliders.js\");\n__webpack_require__(/*! ./js/app/stars.js */\"./js/app/stars.js\");\n__webpack_require__(/*! ./js/app/vibes.js */\"./js/app/vibes.js\");\n__webpack_require__(/*! ./js/app/whell.js */\"./js/app/whell.js\");\nmodule.exports = __webpack_require__(/*! ./js/app/youtube.js */\"./js/app/youtube.js\");\n\n\n//# sourceURL=webpack:///multi_./js/app/app.js_./js/app/diagramm.js_./js/app/gallery.js_./js/app/range.js_./js/app/sliders.js_./js/app/stars.js_./js/app/vibes.js_./js/app/whell.js_./js/app/youtube.js?");

/***/ })

/******/ });

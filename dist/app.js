!function(e){var t={};function i(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="dist",i(i.s=9)}([,,,,,,,,,function(e,t,i){i(10),i(11),i(12),i(13),i(14),i(15),i(16),i(17),i(18),e.exports=i(19)},function(e,t){$(document).ready(function(){"use strict";function e(){var e=$(this).data("index");return document.cookie="value="+e,location.href="/pages/products.html",!1}$(".preloader_content_button").click(function(){$(".preloader").fadeOut(),document.cookie="cookie=true"}),window.getCookie=function(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0},"true"!==getCookie("cookie")&&$(".preloader").css("display","block"),$(".menu-button").click(function(){var e=$(this);$("body").toggleClass("scroll"),e.hasClass("menu-open")?(setTimeout(function(){e.toggleClass("menu-open")},300),$(".menu").fadeToggle()):(e.toggleClass("menu-open"),$(".menu").delay(400).fadeToggle())}),$(".button").click(function(){var e=$(this);e.addClass("click"),setTimeout(function(){$(e).removeClass("click")},1e3)}),document.getElementById("productPage")||"0"!==getCookie("value")&&(document.cookie="value=0; path=/"),$("body").on("click",".product_slider_slide_button",e),$("body").on("click",".products_slider_slide_button",e),$(".vibes_list").jScrollPane({verticalDragMinHeight:90,verticalDragMaxHeight:90,animateScroll:!0}),$(".load").fadeOut()})},function(e,t){$(document).ready(function(){var e;function t(){$(".aroma").bind("click",function(){$(window).unbind("mousewheel"),$(".mouse_up, .mouse_down").unbind("click"),e=$(this).data("aroma"),$(".text_1").fadeOut(300,function(){$(".aroma_"+e).fadeIn(300)}),$(".diagramm_circle").addClass("diagramm_open "+e),$(".diagramm_circle").animate({opacity:1},500),$(".aroma, .parallax_img").css("opacity","0"),$(".logo_img, .dot").animate({opacity:0},500),$(".diagramm_imgs").fadeIn(),$(".diagramm_"+e).fadeIn(function(){parallaxDestroy()})}),$(".diagramm_imgs").bind("click",function(){$(".aroma_"+e).fadeOut(300,function(){$(".text_1").fadeIn(300)}),$(".diagramm_imgs").fadeOut(),$(".diagramm_"+e).fadeOut(),$(".aroma, .parallax_img").css("opacity","1"),$(".logo_img, .dot").animate({opacity:1},500),$(".diagramm_circle").animate({opacity:0},500),setTimeout(function(){$(".diagramm_circle").removeClass("diagramm_open "+e),parallaxInit(),$(window).bind("mousewheel",animReverse),$(".mouse_up, .mouse_down").bind("click",animReverse)},500)})}function i(){function t(){$(".aroma").off("click"),e=$(this).data("aroma"),$(".diagramm_circle").addClass("diagramm_open "+e),$(".diagramm_circle").stop(!0,!0).animate({opacity:1},500),$(".aroma, .parallax_img").css("opacity","0"),$(".logo_img, .dot").stop(!0,!0).animate({opacity:0},500),$(".diagramm_imgs").stop(!0,!0).fadeIn(),$(".diagramm_"+e).stop(!0,!0).fadeIn()}$(".aroma").on("click",t),$(".diagramm_imgs").click(function(){$(".diagramm_imgs").stop(!0,!0).fadeOut(),$(".diagramm_"+e).stop(!0,!0).fadeOut(),$(".aroma, .parallax_img").css("opacity","1"),$(".logo_img, .dot").stop(!0,!0).animate({opacity:1},500),$(".diagramm_circle").stop(!0,!0).animate({opacity:0},500,function(){$(".diagramm_circle").removeClass("diagramm_open "+e),$(".aroma").on("click",t)})})}$(window).width()>1200?t():i(),$(window).resize(function(){$(window).width()>1200?t():i()})})},function(e,t){$(document).ready(function(){$("#contact_form").submit(function(e){e.preventDefault();var t=$(this).serialize();$.ajax({url:"../send.php",type:"POST",data:t,succes:function(){$(".contact-form").fadeOut(300),$(".message_sent").fadeIn(300)}}),$(".contact-form").fadeOut(300),$(".message_sent").fadeIn(300)}),$(".write_more_button").click(function(){$("#contact_form")[0].reset(),$(".message_sent").fadeOut(300),$(".contact-form").fadeIn(300)})})},function(e,t){$(document).ready(function(){$(".gallery_img").click(function(e){e.preventDefault();var t=$(this).data("src");$(".gallery_block_img").attr("src",t),$(".active_page").find(".product-details_imgs_block_one").css("opacity","0"),setTimeout(function(){$(".active_page").find(".product-details_imgs_block_two").css("opacity","0")},500),setTimeout(function(){$(".active_page").find(".product-details_imgs_block_three").css("opacity","0")},1e3),setTimeout(function(){$(".gallery_block").fadeIn()},1500),$(".gallery_block").click(function(){$(".gallery_block").fadeOut(),setTimeout(function(){$(".active_page").find(".product-details_imgs_block_one").css("opacity","1")},500),setTimeout(function(){$(".active_page").find(".product-details_imgs_block_two").css("opacity","1")},1e3),setTimeout(function(){$(".active_page").find(".product-details_imgs_block_three").css("opacity","1"),$(".gallery_block_img").attr("src","")},1500)})})})},function(e,t){$(document).ready(function(){"use strict";var e=document.getElementById("productPage"),t=getCookie("value")||0,i=getCookie("value")||0,n=$(".single_product").length-1,a=setInterval(d,3e3);$(".single_product").eq(t).fadeIn("fast");var o=$(".single_product").eq(t).data("href");$(".buynow").attr("href",o),$(".range_slider").ionRangeSlider({grid:!0,min:1,max:7,from:t,hide_min_max:!0,values:["435","495","520","555","610","650","700"],onStart:function(){$(".irs-grid-text").eq(t).addClass("irs-grid-text-active")},onChange:function(){clearInterval(a)},onFinish:function(e){c(e.from),clearInterval(a),a=setInterval(d,3e3)},onUpdate:function(e){c(e.from),clearInterval(a),a=setInterval(d,3e3)}});var s=$(".range_slider").data("ionRangeSlider");function r(){$(window).bind("mousewheel",function(e){e.preventDefault(),function(e){$(window).unbind("mousewheel"),e.originalEvent.wheelDelta/120<0?t!=n&&s.update({from:++i}):0!==t&&s.update({from:--i});setTimeout(function(){r()},1e3)}(e)})}function d(){e&&(t!=n?s.update({from:++i}):s.update({from:0}))}function c(e){if(e!==t){$(".single_product").eq(t).delay(250).fadeOut(750),$(".single_product").eq(e).fadeIn(750),$(".irs-grid-text-active").removeClass("irs-grid-text-active"),$(".irs-grid-text").eq(e).addClass("irs-grid-text-active");var n=$(".single_product").eq(e).data("href");$(".buynow").attr("href",n),t=e,i=e}}function l(){$(".mouse_block").unbind("click"),$(window).unbind("mousewheel"),$(".active_page").removeClass("active_page"),$(".mouse_block").css({visibility:"hidden",opacity:"0"}),t!=n?s.update({from:++i}):s.update({from:0}),setTimeout(function(){r(),$(".product-details_imgs, .product-details_box_img").removeClass("anim"),$(".product").addClass("active_page")},500)}function u(){l()}function m(e){l()}e&&r(),$(".single_product").mouseenter(function(){clearInterval(a)}),$(".single_product").mouseleave(function(){$(".product").hasClass("active_page")&&(a=setInterval(d,3e3))}),$(".single_product").click(function(){$(window).unbind("mousewheel"),$(".active_page").removeClass("active_page"),setTimeout(function(){clearInterval(a),$(".product-details").eq(t).addClass("active_page"),$(".product-details_imgs, .product-details_box_img").addClass("anim"),$(".active_page").find(".product-details_box_img_img").on("load",function(){console.log(1)}),$(".mouse_block").css({visibility:"visible",opacity:"1"}),!0,$(window).bind("mousewheel",m),$(".mouse_block").bind("click",u)},500)})})},function(e,t){$(document).ready(function(){$(".product_slider").slick({arrows:!1,fade:!0,speed:1e3,autoplay:!0}),$(".products_slider").slick({slidesToShow:3,slideToScroll:1,responsive:[{breakpoint:1201,settings:{slidesToShow:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}]})})},function(e,t){$(document).ready(function(){function e(){t=window.innerWidth,i=window.innerHeight,this.s={ttl:8e3,xmax:5,ymax:2,rmax:5,rt:1,xdef:960,ydef:540,xdrift:4,ydrift:4,random:!0,blink:!0},this.reset=function(){this.x=this.s.random?t*Math.random():this.s.xdef,this.y=this.s.random?i*Math.random():this.s.ydef,this.r=(this.s.rmax-1)*Math.random()+1,this.dx=Math.random()*this.s.xmax*(Math.random()<.5?-1:1),this.dy=Math.random()*this.s.ymax*(Math.random()<.5?-1:1),this.hl=this.s.ttl/r*(this.r/this.s.rmax),this.rt=Math.random()*this.hl,this.s.rt=Math.random()+1,this.stop=.2*Math.random()+.4,this.s.xdrift*=Math.random()*(Math.random()<.5?-1:1),this.s.ydrift*=Math.random()*(Math.random()<.5?-1:1)},this.fade=function(){this.rt+=this.s.rt},this.draw=function(){this.s.blink&&(this.rt<=0||this.rt>=this.hl)?this.s.rt=-1*this.s.rt:this.rt>=this.hl&&this.reset();var e=1-this.rt/this.hl;a.beginPath(),a.arc(this.x,this.y,this.r,0,2*Math.PI,!0),a.closePath();var t=this.r*e;(o=a.createRadialGradient(this.x,this.y,0,this.x,this.y,t<=0?1:t)).addColorStop(0,"rgba(255,255,255,"+e+")"),o.addColorStop(this.stop,"rgba(255,255,255,"+.6*e+")"),o.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=o,a.fill()},this.move=function(){t=window.innerWidth,i=window.innerHeight,this.x+=this.rt/this.hl*this.dx,this.y+=this.rt/this.hl*this.dy,(this.x>t||this.x<0)&&(this.dx*=-1),(this.y>i||this.y<0)&&(this.dy*=-1)},this.getX=function(){return this.x},this.getY=function(){return this.y}}var t,i,n,a,o,s=new Array,r=30;if(t="100%",i="100%",t=window.innerWidth,i=window.innerHeight,(n=document.getElementById("stars"))&&"none"!==getComputedStyle(n).display){$(n).attr("width",t).attr("height",i),a=n.getContext("2d");for(var d=0;d<100;d++)s[d]=new e,s[d].reset();setInterval(function(){a.clearRect(0,0,t,i);for(var e=0;e<s.length;e++)s[e].fade(),s[e].move(),s[e].draw()},r)}})},function(e,t){$(document).ready(function(){$(".vibes_list_link").click(function(){if(!$(this).hasClass("vibes_list_link_active")){var e=$(this).data("img-one"),t=$(this).data("img-two"),i=$(this).text();$(".vibes_list_link_active").removeClass("vibes_list_link_active"),$(this).addClass("vibes_list_link_active"),$(".vibes_description").css("opacity","0"),$(".vibes_description").on("transitionend",function(){$(".vibes_description_header_img").eq(0).attr("src",e),$(".vibes_description_header_img").eq(1).attr("src",t),$(".vibes_description_text_caption").text(i),$(".vibes_description").css("opacity","1")})}})})},function(e,t){$(document).ready(function(){"use strict";var e,t,i,n,a,o=document.getElementById("mainPage"),s=0,r=$(".page"),d=!1,c=!1;function l(t){$(window).unbind("mousewheel"),$(".mouse_up, .mouse_down").unbind("click"),r.eq(s).removeClass("active_page"),"next"==t?s++:"prev"==t&&s--,0===s?$(".mouse_up").removeClass("visible"):$(".mouse_up").addClass("visible"),s===r.length-1?$(".mouse_down").removeClass("visible"):$(".mouse_down").addClass("visible"),setTimeout(function(){r.eq(s).addClass("active_page")},500),r.eq(s).hasClass("sky_page")?setTimeout(function(){$(".sky_block").addClass("anim")},500):setTimeout(function(){$(".sky_block").removeClass("anim")},500),r.eq(s).hasClass("white_mouse")?setTimeout(function(){$(".mouse").addClass("mouse-white")},500):$(".mouse").removeClass("mouse-white"),r.eq(s).hasClass("main_animation")?(c=!0,function(){$(".diagramm").removeClass("anim animReverse"),d&&parallaxDestroy();$(".text_1").fadeIn(0),$(".text_2").fadeOut(0),$(".waves").css("display","none"),$(".waves_anim").each(function(){$(this)[0].endElement()}),setTimeout(function(){$(".diagramm").addClass("anim")},1e3),$(".diagramm_circle").one("animationstart",function(){e=new Vivus("diagramm",{duration:100,type:"sync"})}),$(".parallax_img_wrap").one("animationend",function(){d||parallaxInit(),c&&($(window).unbind("mousewheel"),$(".mouse_up, .mouse_down").unbind("click"),$(window).bind("mousewheel",f),$(".mouse_up, .mouse_down").bind("click",f))})}()):(c=!1,clearInterval(a),a=0),r.eq(s).hasClass("page_slick")?$(".products_slider").slick("slickPlay"):$(".products_slider").slick("slickPause"),setTimeout(function(){bindWheel()},1e3)}function u(){s<r.length-1&&l("next")}function m(){s>0&&l("prev")}function f(){$(window).unbind("mousewheel"),$(".mouse_up, .mouse_down").unbind("click"),d&&parallaxDestroy(),$(".diagramm").removeClass("anim").addClass("animReverse"),$(".diagramm_circle").one("animationstart",function(){setTimeout(function(){e.play(-1)},1500)}),$(".diagramm_circle").one("animationend",function(){$(".text_1").fadeOut(500,function(){$(".text_2").fadeIn(500)}),$(".waves").css("display","block");var e=0,t=$(".waves_anim").length;a=setInterval(function(){e!==t?($(".waves_anim")[e].beginElement(),e++):(clearInterval(a),setTimeout(function(){$(".waves").css("display","none")},1e3*parseInt($(".waves_anim").eq(t-1).attr("dur"))))},500)}),setTimeout(function(){bindWheel()},1e3)}window.animReverse=f,window.bindWheel=function(){o&&($(window).bind("mousewheel",function(e){e.preventDefault(),function(e){e.originalEvent.wheelDelta/120<0?u():m()}(e)}),$(".mouse_up").bind("click",function(e){e.preventDefault(),m()}),$(".mouse_down").bind("click",function(e){e.preventDefault(),u()}))},$(window).width()>1200&&bindWheel(),$(window).resize(function(){$(window).unbind("mousewheel"),$(".mouse_up, .mouse_down").unbind("click"),$(window).width()>1200&&bindWheel()}),window.parallaxInit=function(){var e=document.getElementById("parallax_img_wrap"),a=document.getElementById("logo_block"),o=document.getElementById("aroma_wrap");t=new Parallax(e,{relativeInput:!0,hoverOnly:!0}),i=new Parallax(a,{relativeInput:!0,hoverOnly:!0}),n=new Parallax(o,{relativeInput:!0,hoverOnly:!0,pointerEvents:!0}),d=!0},window.parallaxDestroy=function(){t.destroy(),i.destroy(),n.destroy(),d=!1}})},function(e,t){$(document).ready(function(){"use strict";var e;document.getElementById("mainPage")&&(window.onload=function(){e=new YT.Player("youtube_player")}),$(".page_3_video").click(function(){$(window).unbind("mousewheel"),$(".page_3_content, .page_3_video, header").fadeOut(1e3),$(".youtube_video").delay(1e3).fadeIn(1e3,function(){e.playVideo()})}),$(".youtube_video_locker").click(function(){e.pauseVideo(),$(".youtube_video").fadeOut(1e3),$(".page_3_content, .page_3_video").delay(1e3).fadeIn(1e3),$("header").delay(1e3).fadeIn(1e3,function(){bindWheel()})})})}]);

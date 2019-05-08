$(document).ready(function () {
    'use strict';

    var mainPage = document.getElementById('mainPage');
    var currentPage = 0;
    var page = $('.page');
    var vivus;
    var parallaxDiagramm;
    var parallaxLogo;
    var parallaxAroma;

    window.bindWheel = function () {
        if (mainPage) {
            $(window).bind('mousewheel', function (event) {
                event.preventDefault();
                wheel(event);
            });
            $('.mouse_up').bind('click', function (event) {
                event.preventDefault();
                prevPage();
            });
            $('.mouse_down').bind('click', function (event) {
                event.preventDefault();
                nextPage();
            });
        }
    }

    bindWheel();

    function wheel(event) {
        if (event.originalEvent.wheelDelta / 120 < 0) {
            nextPage();
        } else {
            prevPage();
        }
    };

    function togglePage(direction) {
        $(window).unbind('mousewheel');
        $('.mouse_up, .mouse_down').unbind('click');
        page.eq(currentPage).removeClass('active_page');

        if (direction == 'next') {
            currentPage++;
        } else if (direction == 'prev') {
            currentPage--;
        }

        if (currentPage === 0) {
            $('.mouse_up').removeClass('visible');
        } else {
            $('.mouse_up').addClass('visible');
        }

        if (currentPage === page.length - 1) {
            $('.mouse_down').removeClass('visible');
        } else {
            $('.mouse_down').addClass('visible');
        }

        setTimeout(
            function () {
                page.eq(currentPage).addClass('active_page');
            },
            500);

        if (page.eq(currentPage).hasClass('sky_page')) {
            setTimeout(function () {
                $('.sky_block').addClass('anim');
            }, 500);
        } else {
            setTimeout(function () {
                $('.sky_block').removeClass('anim');
            }, 500);
        }

        if (page.eq(currentPage).hasClass('white_mouse')) {
            setTimeout(function () {
                $('.mouse').addClass('mouse-white');
            }, 500);
        } else {
            $('.mouse').removeClass('mouse-white');
        }

        if (page.eq(currentPage).hasClass('main_animation')) {
            pageAnimation();
        } else {
            setTimeout(function () {
                bindWheel();
            }, 1000);
        }

        if (page.eq(currentPage).hasClass('page_slick')) {
            $('.products_slider').slick('slickPlay');
        } else {
            $('.products_slider').slick('slickPause');
        }
    }

    function nextPage() {
        if (currentPage < page.length - 1) {
            togglePage('next');
        }
    };

    function prevPage() {
        if (currentPage > 0) {
            togglePage('prev');
        }
    };

    window.parallaxInit = function () {
        var diagramm = document.getElementById('parallax_img_wrap');
        var logo_block = document.getElementById('logo_block');
        var aroma = document.getElementById('aroma_wrap');
        parallaxDiagramm = new Parallax(diagramm, {
            relativeInput: true,
            hoverOnly: true
        });
        parallaxLogo = new Parallax(logo_block, {
            relativeInput: true,
            hoverOnly: true
        });
        parallaxAroma = new Parallax(aroma, {
            relativeInput: true,
            hoverOnly: true,
            pointerEvents: true
        });
    };

    window.parallaxDestroy = function () {
        parallaxDiagramm.destroy();
        parallaxLogo.destroy();
        parallaxAroma.destroy();
    };

    function pageAnimation() {
        $(window).unbind('mousewheel');
        $('.mouse_up, .mouse_down').unbind('click');
        setTimeout(function () {
            $('.dot, .logo_img').addClass('anim');
            $('.logo_img').one('transitionend', function (prop) {
                $('.diagramm_circle').animate({
                    'opacity': 1
                }, 300);
                vivus = new Vivus('diagramm', {
                    duration: 100,
                    type: 'sync'
                }, setGradient);
            });
        }, 1000);

        function setGradient() {
            $(".parallax_img_wrap").css('opacity', '1');
            $(".diagramm_circle").animate({
                opacity: 0
            }, 500, function () {
                $(".aroma").css('opacity', '1');
                setTimeout(function () {
                    parallaxInit();
                    $(window).bind('mousewheel', function (event) {
                        event.preventDefault();
                        $(window).unbind('mousewheel');
                        pageAnimationReverse();
                    });
                    $('.mouse').bind('click', function () {
                        $('.mouse_up, .mouse_down').unbind('click');
                        pageAnimationReverse();
                    });
                }, 500);
            });
        };
    };

    //    function pageAnimationDestroy() {
    //        $('.dot, .logo_img, #diagramm, .parallax_img_wrap, .diagramm_circle, .aroma').addClass('notransition').removeAttr('style').removeClass('notransition');
    //        $('.dot, .logo_img').addClass('notransition').removeClass('anim').removeClass('notransition');
    //        if (vivusStarted) {
    //            vivus.destroy();
    //        }
    //        if (parallaxStarted) {
    //            parallaxDestroy();
    //        }
    //    }

    function pageAnimationReverse() {
        parallaxDestroy();
        $(".aroma").css('opacity', '0');
        $(".parallax_img_wrap").css('opacity', '0');
        $(".diagramm_circle").animate({
            opacity: 1
        }, 500, function () {
            vivus.play(-1, function () {
                $('.text_1').fadeOut(1000);
                $('.text_2').delay(1000).fadeIn();
                $('.waves').css('display', 'block');
                var currentWaves = 0;
                var wavesLength = $('.waves_anim').length;
                var waves = setInterval(function () {
                    if (currentWaves !== wavesLength) {
                        $('.waves_anim')[currentWaves].beginElement();
                        currentWaves++;
                    } else {
                        clearInterval(waves);
                        $('.dot, .logo_img').removeClass('anim');
                        setTimeout(function () {
                            $('.waves').css('display', 'none');
                            bindWheel();
                        }, parseInt($('.waves_anim').eq(wavesLength - 1).attr('dur')) * 1000);
                    }
                }, 500);
            });
        });
    };
});

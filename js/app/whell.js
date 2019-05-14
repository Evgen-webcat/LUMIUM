$(document).ready(function () {
    'use strict';

    var mainPage = document.getElementById('mainPage');
    var currentPage = 0;
    var page = $('.page');
    var vivus;
    var parallaxDiagramm;
    var parallaxLogo;
    var parallaxAroma;
    var parallax = false;
    var waves;
    var animation = false;
    window.animReverse = animReverse;

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

    if ($(window).width() > 1200) {
        bindWheel();
    }

    $(window).resize(function () {
        $(window).unbind('mousewheel');
        $('.mouse_up, .mouse_down').unbind('click');
        if ($(window).width() > 1200) {
            bindWheel();
        }
    });

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
            animation = true;
            pageAnimation();
        } else {
            animation = false;
            clearInterval(waves);
            waves = 0;
            //            setTimeout(function () {
            //                $('.diagramm').removeClass('anim animReverse');
            //                if (parallax) {
            //                    parallaxDestroy();
            //                }
            //            }, 1000);
        }

        if (page.eq(currentPage).hasClass('page_slick')) {
            $('.products_slider').slick('slickPlay');
        } else {
            $('.products_slider').slick('slickPause');
        }

        setTimeout(function () {
            bindWheel();
        }, 1000);
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
        parallax = true;
    };

    window.parallaxDestroy = function () {
        parallaxDiagramm.destroy();
        parallaxLogo.destroy();
        parallaxAroma.destroy();
        parallax = false;
    };

    function pageAnimation() {
        $('.diagramm').removeClass('anim animReverse');
        if (parallax) {
            parallaxDestroy();
        }
        $('.text_1').fadeIn(0);
        $('.text_2').fadeOut(0);
        $('.waves').css('display', 'none');
        $('.waves_anim').each(function () {
            $(this)[0].endElement();
        });
        setTimeout(function () {
            $('.diagramm').addClass('anim');
        }, 1000);
        $('.diagramm_circle').one('animationstart', function () {
            vivus = new Vivus('diagramm', {
                duration: 100,
                type: 'sync'
            });
        });
        $('.parallax_img_wrap').one('animationend', function () {
            if (!parallax) {
                parallaxInit();
            }
            if (animation) {
                $(window).unbind('mousewheel');
                $('.mouse_up, .mouse_down').unbind('click');
                $(window).bind('mousewheel', animReverse);
                $('.mouse_up, .mouse_down').bind('click', animReverse);
            }
        });
    };

    function animReverse() {
        $(window).unbind('mousewheel');
        $('.mouse_up, .mouse_down').unbind('click');
        if (parallax) {
            parallaxDestroy();
        }
        $('.diagramm').removeClass('anim').addClass('animReverse');
        $('.diagramm_circle').one('animationstart', function () {
            setTimeout(function () {
                vivus.play(-1);
            }, 1500);
        });
        $('.diagramm_circle').one('animationend', function () {
            $('.text_1').fadeOut(500, function () {
                $('.text_2').fadeIn(500);
            });
            $('.waves').css('display', 'block');
            var currentWaves = 0;
            var wavesLength = $('.waves_anim').length;
            waves = setInterval(function () {
                if (currentWaves !== wavesLength) {
                    $('.waves_anim')[currentWaves].beginElement();
                    currentWaves++;
                } else {
                    clearInterval(waves);
                    setTimeout(function () {
                        $('.waves').css('display', 'none');
                    }, parseInt($('.waves_anim').eq(wavesLength - 1).attr('dur')) * 1000);
                }
            }, 500);
        });
        setTimeout(function () {
            bindWheel();
        }, 1000);
    };
});

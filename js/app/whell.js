$(document).ready(function () {
    'use strict';

    var mainPage = document.getElementById('mainPage');
    var currentPage = 0;
    var page = $('.page');
    var vivus;
    var parallaxDiagramm;
    var parallaxLogo;
    var parallaxAroma;
    var animation = true;

    window.bindWheel = function () {
        if (mainPage) {
            $(window).bind('mousewheel', function (event) {
                event.preventDefault();
                wheel(event);
            });
            $('.mouse').bind('click', function () {
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
        $('.mouse').unbind('click');
        page.eq(currentPage).removeClass('active_page');
        if (direction == 'next') {
            currentPage++;
        } else if (direction == 'prev') {
            currentPage--;
        }
        setTimeout(
            function () {
                page.eq(currentPage).addClass('active_page');
            },
            500);

        if (currentPage == 4) {
            setTimeout(function () {
                $('.mouse').addClass('mouse-white');
                $('.sky_block').addClass('anim');
            }, 500);
        } else {
            $('.mouse').removeClass('mouse-white');
            $('.sky_block').removeClass('anim');
        }

        if (currentPage == 3 && animation == true) {
            $(window).unbind('mousewheel');
            $('.mouse').unbind('click');

            pageAnimation();

            setTimeout(function () {
                $(window).bind('mousewheel', function (event) {
                    event.preventDefault();
                    $(window).unbind('mousewheel');
                    pageAnimationReverse();
                });
                $('.mouse').bind('click', function () {
                    $('.mouse').unbind('click');
                    pageAnimationReverse();
                });
            }, 7000);
        } else {
            setTimeout(function () {
                bindWheel();
            }, 1000);
        }

        if (currentPage == 1) {
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
        setTimeout(function () {
            $('.dot').css({
                'width': '100px',
                'height': '100px',
                'background-color': '#4c4c4c'
            });
            $('.logo_img').css({
                'width': '100px',
                'height': '100px',
                'box-shadow': '0 0 25px rgba(255, 255, 255, .5)'
            });
        }, 1000);
        setTimeout(function () {
            $('#diagramm').css('display', 'block');
            vivus = new Vivus('diagramm', {
                duration: 100,
                type: 'sync'
            })
            vivus.play();
        }, 2500);
        setTimeout(function () {
            $(".parallax_img_wrap").css('opacity', '1');
            $(".diagramm_circle").animate({
                opacity: 0
            }, 500);
        }, 4500);
        setTimeout(function () {
            $(".aroma").css('opacity', '1');
        }, 5000);
        setTimeout(function () {
            parallaxInit();
        }, 5500);
    };

    function pageAnimationReverse() {
        parallaxDestroy();
        $(".aroma").css('opacity', '0');
        $(".diagramm_circle").animate({
            opacity: 1
        }, 500);
        $(".parallax_img_wrap").css('opacity', '0');
        setTimeout(function () {
            $("#diagramm").removeClass('diagramm_gradient');
        }, 1000);
        setTimeout(function () {
            vivus.play(-1);
        }, 2000);
        setTimeout(function () {
            $('.text_1').fadeOut(1000);
            $('.text_2').delay(1000).fadeIn();
        }, 3000);
        setTimeout(function () {
            $('.waves').css('display', 'block');
            var currentWaves = 0;
            var wavesLength = $('.waves_anim').length;
            var waves = setInterval(function () {
                if (currentWaves === wavesLength - 1) {
                    clearInterval(waves);
                } else {
                    $('.waves_anim')[currentWaves].beginElement()
                    currentWaves++;
                }
            }, 500);
        }, 5000);
        setTimeout(function () {
            $('.dot').css({
                'width': '15px',
                'height': '15px',
                'background-color': '#fff'
            });
            $('.logo_img').css({
                'width': '15px',
                'height': '15px',
                'box-shadow': 'none'
            });
        }, 15000);
        setTimeout(function () {
            $('.waves').css('display', 'none');
            //			animation = false;
            bindWheel();
        }, 25000);
    };
});

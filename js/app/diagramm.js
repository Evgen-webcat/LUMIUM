$(document).ready(function () {
    var color;

    if ($(window).width() > 1200) {
        aromaOnPC();
    } else {
        aromaOnMobile();
    }

    $(window).resize(function () {
        if ($(window).width() > 1200) {
            aromaOnPC();
        } else {
            aromaOnMobile();
        }
    });

    function aromaOnPC() {
        $('.aroma').bind('click', function () {
            $(window).unbind('mousewheel');
            $('.mouse_up, .mouse_down').unbind('click');
            color = $(this).data('aroma');
            $('.text_1').fadeOut(300, function () {
                $('.aroma_' + color).fadeIn(300);
            });
            $(".diagramm_circle").addClass('diagramm_open ' + color + '');
            $(".diagramm_circle").animate({
                opacity: 1
            }, 500);
            $(".aroma, .parallax_img").css('opacity', '0');
            $('.logo_img, .dot').animate({
                opacity: 0
            }, 500);
            $('.diagramm_imgs').fadeIn();
            $('.diagramm_' + color + '').fadeIn(function () {
                parallaxDestroy();
            });
        });

        $('.diagramm_imgs').bind('click', function () {
            $('.aroma_' + color).fadeOut(300, function () {
                $('.text_1').fadeIn(300);
            });
            $('.diagramm_imgs').fadeOut();
            $('.diagramm_' + color + '').fadeOut();
            $(".aroma, .parallax_img").css('opacity', '1');
            $('.logo_img, .dot').animate({
                opacity: 1
            }, 500);
            $(".diagramm_circle").animate({
                opacity: 0
            }, 500);
            setTimeout(function () {
                $(".diagramm_circle").removeClass('diagramm_open ' + color + '');
                parallaxInit();
                $(window).bind('mousewheel', animReverse);
                $('.mouse_up, .mouse_down').bind('click', animReverse);
            }, 500);
        });
    }

    function aromaOnMobile() {
        $('.aroma').on('click', openDiagram);

        function openDiagram() {
            $('.aroma').off('click');
            color = $(this).data('aroma');
            $(".diagramm_circle").addClass('diagramm_open ' + color + '');
            $(".diagramm_circle").stop(true, true).animate({
                opacity: 1
            }, 500);
            $(".aroma, .parallax_img").css('opacity', '0');
            $('.logo_img, .dot').stop(true, true).animate({
                opacity: 0
            }, 500);
            $('.diagramm_imgs').stop(true, true).fadeIn();
            $('.diagramm_' + color + '').stop(true, true).fadeIn();
        }

        $('.diagramm_imgs').click(function () {
            $('.diagramm_imgs').stop(true, true).fadeOut();
            $('.diagramm_' + color + '').stop(true, true).fadeOut();
            $(".aroma, .parallax_img").css('opacity', '1');
            $('.logo_img, .dot').stop(true, true).animate({
                opacity: 1
            }, 500);
            $(".diagramm_circle").stop(true, true).animate({
                opacity: 0
            }, 500, function () {
                    $(".diagramm_circle").removeClass('diagramm_open ' + color + '');
                    $('.aroma').on('click', openDiagram);
            });
        });
    }
});

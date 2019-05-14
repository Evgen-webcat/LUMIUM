$(document).ready(function () {
    'use strict'


    $('.preloader_content_button').click(function () {
        $('.preloader').fadeOut();
        document.cookie = 'cookie=true'
    });

    window.getCookie = function (name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    };

    if (getCookie('cookie') !== 'true') {
        $('.preloader').css('display', 'block');
    }

    $('.menu-button').click(function () {
        var menuButton = $(this);
        $('body').toggleClass('scroll');
        if (menuButton.hasClass('menu-open')) {
            setTimeout(function () {
                menuButton.toggleClass('menu-open');
            }, 300);
            $('.menu').fadeToggle();
        } else {
            menuButton.toggleClass('menu-open');
            $('.menu').delay(400).fadeToggle();
        }
    });

    $('.button').click(function () {
        var button = $(this);
        button.addClass('click');
        setTimeout(
            function () {
                $(button).removeClass('click');
            },
            1000
        );
    });

    var productPage = document.getElementById('productPage');

    if (!productPage) {
        if (getCookie('value') !== '0') {
            document.cookie = 'value=0; path=/'
        }
    }

    function setCookieValue() {
        var index = $(this).data('index');
        document.cookie = 'value=' + index;
        location.href = '/pages/products.html'
        return false;
    };

    $('body').on('click', '.product_slider_slide_button', setCookieValue);
    $('body').on('click', '.products_slider_slide_button', setCookieValue);

    $('.vibes_list').jScrollPane({
        verticalDragMinHeight: 90,
        verticalDragMaxHeight: 90,
        animateScroll: true
    });

    $('.load').fadeOut();
});

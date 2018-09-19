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
        $(this).toggleClass('menu-open');
        $('.menu').fadeToggle();
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
            document.cookie = 'value=0'
        }
    }

    function setCookieValue() {
        var index = $(this).data('index');
        document.cookie = 'value=' + index;
        location.href = '/pages/products.html'
        return false;
    };

    $('.product_slider_slide_button').click(setCookieValue);
    $('.products_slider_slide_button').click(setCookieValue);

});

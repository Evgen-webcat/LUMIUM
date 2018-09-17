$(document).ready(function () {
    $('.preloader_content_button').click(function () {
        $('.preloader').fadeOut();
        document.cookie = 'cookie=true'
    });

    function getCookie(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    };

    if (getCookie('cookie') !==  'true') {
        $('.preloader').css('display', 'block');
    }

    $('.menu-button').click(function () {
        $(this).toggleClass('menu-open');
        $('.menu').fadeToggle();
    });

    $('.button').click(function () {
        var button = $(this);
        $(button).addClass('click');
        setTimeout(
            function () {
                $(button).removeClass('click');
            },
            1000
        );
    });

});

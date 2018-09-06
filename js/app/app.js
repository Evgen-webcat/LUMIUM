$(document).ready(function () {
    $('.preloader_content_button').click(function () {
        $('.preloader').fadeOut();
    });

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

    $('.page_3_video').click(function () {
        $('.page_3_content').fadeOut(1000);
        setTimeout(function () {
            $('.youtube_video').fadeIn(1000);
        }, 1000);
    });

    new Vivus('logo_img');

});

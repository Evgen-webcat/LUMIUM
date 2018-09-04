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
});

$(document).ready(function () {
    $('.preloader_content_button').click(function () {
        $('.preloader').fadeOut();
    });

    $('.menu-button').click(function () {
        $(this).toggleClass('menu-open');
        $('.menu').fadeToggle(600);
    });
});

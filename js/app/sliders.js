$(document).ready(function () {
    $('.product_slider').slick({
        arrows: false,
        fade: true,
        speed: 5000,
        autoplay: true
    });

    $('.product_slider').slick('setPosition');

    $('.products_slider').slick({
        slidesToShow: 3,
        infinite: false
    });

    $('.products_slider').slick('setPosition');
});

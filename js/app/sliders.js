$(document).ready(function () {
    $('.product_slider').slick({
        arrows: false,
        fade: true,
        speed: 700,
        autoplay: true
    });

    $('.products_slider').slick({
        slidesToShow: 3,
        infinite: false
    });
});

$(document).ready(function () {
    $('.product_slider').slick({
        arrows: false,
        fade: true,
        speed: 1000,
        autoplay: true
    });

    $('.products_slider').slick({
        slidesToShow: 3,
		slideToScroll: 1,
//        infinite: false,
//		autoplay: true
    });
});

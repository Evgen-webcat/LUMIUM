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
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
        //        infinite: false,
        //		autoplay: true
    });
});

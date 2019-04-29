$(document).ready(function () {
    'use strict';

    var productPage = document.getElementById('productPage');
    var currentValue = getCookie('value') || 0;
    var currentSlide = getCookie('value') || 0;
    var productQuantity = $('.single_product').length - 1;
    //    var currentDetails = 0;
    var singleScroll = false;
    var interval = 5000;
    var autoplay = setInterval(rangeAutoplay, interval);
    $('.single_product').eq(currentValue).fadeIn('fast');

    $('.range_slider').ionRangeSlider({
        grid: true,
        min: 1,
        max: 7,
        from: currentValue,
        hide_min_max: true,
        values: [
        "435", "495",
        "520", "555",
        "610", "650",
        "700"
    ],
        onStart: function () {
            $('.irs-grid-text').eq(currentValue).addClass('irs-grid-text-active');
        },
        onChange: function () {
            clearInterval(autoplay);
        },
        onFinish: function (data) {
            var value = data.from;
            toggleProduct(value);
            clearInterval(autoplay);
            autoplay = setInterval(rangeAutoplay, interval);
        },
        onUpdate: function (data) {
            var value = data.from;
            toggleProduct(value);
            clearInterval(autoplay);
            autoplay = setInterval(rangeAutoplay, interval);
        }
    });
    var slider = $('.range_slider').data('ionRangeSlider');

    function rangeWheel() {
        if (productPage) {
            bindMousewheel();
        }
    };

    rangeWheel();

    function bindMousewheel() {
        $(window).bind('mousewheel', function (event) {
            event.preventDefault();
            updateSlider(event);
        });
    };

    function updateSlider(event) {
        $(window).unbind('mousewheel');
        if (event.originalEvent.wheelDelta / 120 < 0) {
            if (currentValue != productQuantity) {
                slider.update({
                    from: ++currentSlide
                });
            }
        } else {
            if (currentValue !== 0) {
                slider.update({
                    from: --currentSlide
                });
            }
        }
        setTimeout(function () {
            bindMousewheel();
        }, 1000);
    };

    function rangeAutoplay() {
        if (productPage) {
            if (currentValue != productQuantity) {
                slider.update({
                    from: ++currentSlide
                });
            } else {
                slider.update({
                    from: 0
                });
            }
        }
    }

    function toggleProduct(value) {
        if (value !== currentValue) {
            $('.single_product').eq(currentValue).delay(250).fadeOut(750);
            $('.single_product').eq(value).fadeIn(750);
            $('.irs-grid-text-active').removeClass('irs-grid-text-active');
            $('.irs-grid-text').eq(value).addClass('irs-grid-text-active');
            currentValue = value;
            currentSlide = value;
        }
    }

    $('.single_product').mouseenter(function () {
        clearInterval(autoplay);
    });

    $('.single_product').mouseleave(function () {
        if ($('.product').hasClass('active_page')) {
            autoplay = setInterval(rangeAutoplay, interval);
        }
    });

    $('.single_product').click(function () {
        $(window).unbind('mousewheel');
        $('.active_page').removeClass('active_page');
        clearInterval(autoplay);
        setTimeout(function () {
            $('.product-details').eq(currentValue).addClass('active_page');
            //            $('.active_page').find('.product-details_imgs').addClass('active');
            $('.mouse_block').css({
                visibility: 'visible',
                opacity: '1'
            });
            singleScroll = true;
            $(window).bind('mousewheel', singleProductScroll);
            $('.mouse_block').bind('click', singleProductClick);
        }, 500);
    });

    function toggleDetails() {
        $('.active_page').removeClass('active_page');
        $('.mouse_block').css({
            visibility: 'hidden',
            opacity: '0'
        });
        if (currentValue != productQuantity) {
            slider.update({
                from: ++currentSlide
            });
        } else {
            slider.update({
                from: 0
            });
        };
        setTimeout(function () {
            bindMousewheel();
            $('.product').addClass('active_page');
        }, 500);
    };

    function singleProductClick() {
        $('.mouse_block').unbind('click');
        toggleDetails();
    };

    function singleProductScroll(event) {
        $(window).unbind('mousewheel');
        toggleDetails();
    };

    $('.product-details_footer').click(function () {
        $(window).unbind('mousewheel');
        $('.mouse_block').unbind('click');
        var index = $(this).parent('.product-details').index() - 1;
        $('.active_page').removeClass('active_page');
        $('.product-details').eq(index).removeClass('active_page_header');
        $('.product-details').eq(index).find('.product-details_box_img').removeClass('active');
        setTimeout(function () {
            bindMousewheel();
            $('.product').addClass('active_page');
            //            $('.product-details').eq(index).find('.product-details_text_part_one').slideDown(500);
            //            $('.product-details').eq(index).find('.product-details_text_part_two').delay(500).slideUp(500);
            $('.product-details').eq(index).find('.product-details_imgs').removeClass('next_imgs');
            $('.bottle.active').removeClass('active');
            $('.box.active').removeClass('active');
            $('.product-details').eq(index).find('.product-details_text, .product-details_box_img').css('transform', 'translateY(0)');
            $('.product-details').eq(index).find('.product-details_footer').css('bottom', '-100px');


        }, 500);
        currentValue = index;
        currentSlide = index;
        if (currentValue != productQuantity) {
            slider.update({
                from: ++currentSlide
            });
        } else {
            slider.update({
                from: 0
            });
        };
        currentDetails = 0;
    });
});

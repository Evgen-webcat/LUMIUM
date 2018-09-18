$(document).ready(function () {
    'use strict';

    var productPage = document.getElementById('productPage');
    var currentValue = 0;
    var currentSlide = 0;
    var productQuantity = $('.single_product').length - 1;

    $('.single_product').eq(0).fadeIn('fast');

    $('.range_slider').ionRangeSlider({
        grid: true,
        min: 1,
        max: 7,
        from: 0,
        hide_min_max: true,
        values: [
        "435", "495",
        "520", "555",
        "610", "650",
        "700"
    ],
        onStart: function () {
            $('.irs-grid-text').eq(0).addClass('irs-grid-text-active')
        },
        onFinish: function (data) {
            var value = data.from;
            toggleProduct(value);
        },
        onUpdate: function (data) {
            var value = data.from;
            toggleProduct(value);
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
            if (currentValue != 0) {
                slider.update({
                    from: --currentSlide
                });
            }
        }
        setTimeout(function () {
            bindMousewheel();
        }, 1000);
    };

    function toggleProduct(value) {
        $('.single_product').eq(currentValue).delay(250).fadeOut(750);
        $('.single_product').eq(value).fadeIn(750);
        $('.irs-grid-text-active').removeClass('irs-grid-text-active');
        $('.irs-grid-text').eq(value).addClass('irs-grid-text-active');
        currentValue = value;
        currentSlide = value;
    }

    $('.single_product').click(function () {
        $('.active_page').removeClass('active_page');
        setTimeout(function () {
            $('.product-details').eq(currentValue).addClass('active_page');
        $('.mouse_block').css({
            visibility: 'visible',
            opacity: '1'
        });
            $(window).bind('mousewheel', singleProductScroll);
        }, 500);
    });

    function singleProductScroll (event) {
        $(window).unbind('mousewheel');
             if (event.originalEvent.wheelDelta / 120 < 0) {

             };
    };
});

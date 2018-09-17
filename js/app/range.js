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
        onChange: function (data) {
            var value = data.from;
            toggleProduct(value);
        },
        onUpdate: function (data) {
            var value = data.from;
            toggleProduct(value);
        }
    });
    var slider = $('.range_slider').data('ionRangeSlider');

    function rangeWheel () {
        if (productPage) {
            $(window).bind('mousewheel', function (event) {
                event.preventDefault();
                updateSlider(event);
            });
        }
    };

    rangeWheel ();

    function updateSlider(event) {
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
    };

    function toggleProduct(value) {
        $('.single_product').eq(currentValue).delay(250).fadeOut(750);
            $('.single_product').eq(value).fadeIn(750);
        currentValue = value;
    }

});

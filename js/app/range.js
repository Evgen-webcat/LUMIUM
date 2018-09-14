$(document).ready(function () {
    var currentValue = 0;
    var currentSlide = 0;

    $('.single_product').eq(0).fadeIn('fast');

    $('.single_product').click(function () {
        var $name = $(this).children('.single_product_name');
        var $info = $(this).children('.single_product_info');

        $name.fadeOut(500);
        $info.delay(500).fadeIn(500);
    });

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
            toggleProduct (value);
        },
        onUpdate: function (data) {
            var value = data.from;
            toggleProduct (value);
        }
    });
    var slider = $('.range_slider').data('ionRangeSlider');

    $(window).bind('mousewheel', function (event) {
        event.preventDefault();
        updateSlider(event);
    });

    function updateSlider(event) {
        if (event.originalEvent.wheelDelta / 120 < 0) {
            if (currentValue != 6) {
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

    function toggleProduct (value) {
        $('.single_product').eq(currentValue).fadeOut(500);
        setTimeout(function () {
            $('.single_product').eq(value).fadeIn(500);
        }, 500);
        currentValue = value;
    }

});

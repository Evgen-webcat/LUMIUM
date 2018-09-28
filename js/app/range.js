$(document).ready(function () {
    'use strict';

    var productPage = document.getElementById('productPage');
    var currentValue = getCookie('value') || 0;
    var currentSlide = getCookie('value') || 0;
    var productQuantity = $('.single_product').length - 1;
    var currentDetails = 0;

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
            $('.mouse_block').bind('click', singleProductClick);
        }, 500);
    });

    function toggleDetails(direction) {
        if (direction == 'next') {
            if (currentDetails === 0) {
                $('.active_page').find('.product-details_text_part_one').slideUp(500);
                $('.active_page').find('.product-details_text_part_two').delay(500).slideDown(500);
                $('.active_page').find('.product-details_imgs').addClass('next_imgs');
                currentDetails++;
            } else if (currentDetails === 1) {
                $('.active_page').find('.product-details_imgs').css({
                    'opacity': '0',
                    'visibility': 'hidden'
                });
                setTimeout(function () {
                    $('.active_page').find('.product-details_box_img').css({
                        'opacity': '1',
                        'visibility': 'visible'
                    });
                    $('.active_page').find('.bottle').addClass('active');
                    $('.active_page').find('.box').addClass('active');
                }, 500);
                currentDetails++;
            } else if (currentDetails === 2) {
                $('.active_page').addClass('active_page_header');
                $('.product-details_text, .product-details_box_img').css('transform', 'translateY(-10%)');
                $('.product-details_footer').css('bottom', '0');
                $('.mouse_block').css({
                    visibility: 'hidden',
                    opacity: '0'
                });
                currentDetails++;
            }
        } else if (direction == 'prev') {
            if (currentDetails === 1) {
                $('.active_page').find('.product-details_text_part_two').slideUp(500);
                $('.active_page').find('.product-details_text_part_one').delay(500).slideDown(500);
                $('.active_page').find('.product-details_imgs').removeClass('next_imgs');
                currentDetails--;
            } else if (currentDetails === 2) {
                $('.active_page').find('.product-details_box_img').css({
                    'opacity': '0',
                    'visibility': 'hidden'
                });
                setTimeout(function () {
                    $('.active_page').find('.product-details_imgs').css({
                        'opacity': '1',
                        'visibility': 'visible'
                    });
                    $('.active_page').find('.bottle').removeClass('active');
                    $('.active_page').find('.box').removeClass('active');
                }, 500);
                currentDetails--;
            } else if (currentDetails === 3) {
                $('.product-details_text, .product-details_box_img').css('transform', 'translateY(0)');
                $('.product-details_footer').css('bottom', '-100px');
                $('.mouse_block').css({
                    visibility: 'visible',
                    opacity: '1'
                });
                setTimeout(function () {
                    $('.active_page').removeClass('active_page_header');
                }, 500);
                currentDetails--;
            }
        }
    };

    function singleProductClick() {
        $('mouse_block').unbind('click');
        toggleDetails('next');
    };

    function singleProductScroll(event) {
        $(window).unbind('mousewheel');
        if (event.originalEvent.wheelDelta / 120 < 0) {
            toggleDetails('next');
            setTimeout(function () {
                $(window).bind('mousewheel', singleProductScroll);
            }, 1000);
        } else if (event.originalEvent.wheelDelta / 120 > 0) {
            toggleDetails('prev');
            setTimeout(function () {
                $(window).bind('mousewheel', singleProductScroll);
            }, 1000);
        };
    };
});

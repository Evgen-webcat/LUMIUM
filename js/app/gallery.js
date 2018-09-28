$(document).ready(function () {
    $('.gallery_img').click(function (event) {
        event.preventDefault();
        var src = $(this).data('src');

        $('.gallery_block_img').attr('src', src);

        $('.active_page').find('.product-details_imgs_block_one').css('opacity', '0');
        setTimeout(function () {
            $('.active_page').find('.product-details_imgs_block_two').css('opacity', '0');
        }, 500);
        setTimeout(function () {
            $('.active_page').find('.product-details_imgs_block_three').css('opacity', '0');
        }, 1000);
        setTimeout(function () {
            $('.gallery_block').fadeIn();
        }, 1500);

        $('.gallery_block').click(function () {
            $('.gallery_block').fadeOut();
            setTimeout(function () {
                $('.active_page').find('.product-details_imgs_block_one').css('opacity', '1');
            }, 500);
            setTimeout(function () {
                $('.active_page').find('.product-details_imgs_block_two').css('opacity', '1');
            }, 1000);
            setTimeout(function () {
                $('.active_page').find('.product-details_imgs_block_three').css('opacity', '1');
                $('.gallery_block_img').attr('src', '');
            }, 1500);
        });
    });
});

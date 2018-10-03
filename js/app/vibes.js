$(document).ready(function () {
    $('.vibes_list_link').click(function () {
        var imgOne = $(this).data('img-one');
        var imgTwo = $(this).data('img-two');
        var caption = $(this).text();

        $('.vibes_list_link_active').removeClass('vibes_list_link_active');
        $(this).addClass('vibes_list_link_active');
        $('.vibes_description').css('opacity', '0');
        setTimeout(function () {
            $(".vibes_description_header_img").eq(0).attr('src', imgOne);
            $(".vibes_description_header_img").eq(1).attr('src', imgTwo);
            $('.vibes_description_text_caption').text(caption);
            $('.vibes_description').css('opacity', '1');
        }, 500);
    });
});

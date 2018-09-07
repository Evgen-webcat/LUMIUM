$(document).ready(function () {
    $('.page_3_video').click(function () {
        $('.page_3_content, .page_3_video, header').fadeOut(1000);
        setTimeout(function () {
            $('.youtube_video').fadeIn(1000);
        }, 1000);
    });

});

$(document).ready(function () {
    $('.page_3_video').click(function () {
        $('.page_3_content, .page_3_video, header').fadeOut(1000);
        $('.youtube_video').delay(1000).fadeIn(1000);
    });

    $('.youtube_video_locker').click(function () {
        $('.youtube_video').fadeOut(1000);
        $('.page_3_content, .page_3_video, header').delay(1000).fadeIn(1000);
    });
});

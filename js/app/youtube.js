$(document).ready(function () {
    'use strict'

    var mainPage = document.getElementById('mainPage');
    var player;

    if (mainPage) {
        window.onload = function onYouTubeIframeAPIReady() {
            player = new YT.Player('youtube_player');
        };
    };

    $('.page_3_video').click(function () {
        $(window).unbind('mousewheel');
        $('.page_3_content, .page_3_video, header').fadeOut(1000);
        $('.youtube_video').delay(1000).fadeIn(1000, function () {
            player.playVideo();
        });
    });

    $('.youtube_video_locker').click(function () {
        player.pauseVideo();
        $('.youtube_video').fadeOut(1000);
        $('.page_3_content, .page_3_video').delay(1000).fadeIn(1000);
        $('header').delay(1000).fadeIn(1000, function () {
            bindWheel();
        });
    });
});

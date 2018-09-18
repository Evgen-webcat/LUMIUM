$(document).ready(function () {
    'use strict'

    //    var player;
    //
    //    function onYouTubeIframeAPIReady() {
    //        player = new YT.Player('youtube_player', {
    //            height: '360',
    //            width: '640',
    //            videoId: '2xCn8KL_rPE',
    //            events: {
    //                'onReady': onPlayerReady,
    //                'onStateChange': onPlayerStateChange
    //            }
    //        });
    //    };

    $('.page_3_video').click(function () {
        $('.page_3_content, .page_3_video, header').fadeOut(1000);
        $('.youtube_video').delay(1000).fadeIn(1000);
    });

    $('.youtube_video_locker').click(function () {
        clearInterval(mousemoveTimeout);
        $('.youtube_video').fadeOut(1000);
        $('.page_3_content, .page_3_video, header').delay(1000).fadeIn(1000);
    });

    function bindMousemove() {
        $('.youtube_video_locker').bind('mousemove', fadeInHeader);
    }

    bindMousemove ();


        var mousemoveTimeout;
    var timeout = 3000;

    function checkMousemove () {
        $('.youtube_video_locker').bind('mousemove', function () {
            clearInterval(mousemoveTimeout);
            if ($('.menu').css('display') !== 'block') {
            mousemoveTimeout = setTimeout(fadeOutHeader, timeout);
            }
        });
        mousemoveTimeout = setTimeout(fadeOutHeader, timeout);
    };

    function fadeInHeader() {
        $('.youtube_video_locker').unbind('mousemove');
        $('header').fadeIn(500);
        checkMousemove ();
    };

    function fadeOutHeader () {
        $('.youtube_video_locker').unbind('mousemove');
        $('header ').fadeOut(500);
        bindMousemove ();
    };
});

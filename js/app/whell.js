$(document).ready(function () {
    'use strict';

    var currentPage = 0;
    var page = $('.page');

    function bindWheel() {
        $(window).bind('mousewheel', function (event) {
            event.preventDefault();
            wheel(event);
        });
    }

    bindWheel();

    function wheel(event) {
        if (event.originalEvent.wheelDelta / 120 < 0) {
            nextPage();
        } else {
            prevPage();
        }
    };

    function togglePage(direction) {
        $(window).unbind('mousewheel');
        page.eq(currentPage).fadeOut(500);
        if (direction == 'next') {
            currentPage++;
        } else if (direction == 'prev') {
            currentPage--;
        }
        setTimeout(
            function () {
                page.eq(currentPage).fadeIn();
            },
            500);
        setTimeout(function () {
            bindWheel();
        }, 1000);
        if (currentPage == 4) {
            setTimeout(function () {
                $('.mouse').addClass('mouse-white');
            }, 500);
        } else {
            $('.mouse').removeClass('mouse-white');
        }
    }

    function nextPage() {
        if (currentPage < page.length - 1) {
            togglePage('next');
        }
    };

    function prevPage() {
        if (currentPage > 0) {
            togglePage('prev');
        }
    };
});

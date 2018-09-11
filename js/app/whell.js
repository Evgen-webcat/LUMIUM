$(document).ready(function () {
    'use strict';

    var currentPage = 0;
    var page = $('.page');
    var vivus;

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
        page.eq(currentPage).removeClass('active_page');
        if (direction == 'next') {
            currentPage++;
        } else if (direction == 'prev') {
            currentPage--;
        }
        setTimeout(
            function () {
                page.eq(currentPage).addClass('active_page');
            },
            500);
        if (currentPage == 4) {
            setTimeout(function () {
                $('.mouse').addClass('mouse-white');
            }, 500);
        } else {
            $('.mouse').removeClass('mouse-white');
        }
        if (currentPage == 3) {
            pageAnimation();
        } else {

        }
        setTimeout(function () {
            bindWheel();
        }, 1000);
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

    function pageAnimation() {
        setTimeout(function () {
            $('.dot').css({
                'width': '100px',
                'height': '100px',
                'background-color': '#4c4c4c'
            });
            $('.logo_img').css({
                'width': '100px',
                'height': '100px',
                'box-shadow': '0 0 25px rgba(255, 255, 255, .5)'
            });
        }, 1000);
        setTimeout(function () {
            $('#diagramm').css('display', 'block');
            vivus = new Vivus('diagramm', {
                duration: 200,
                type: 'sync'
            })
            vivus.play();
        }, 2500);
        setTimeout(function () {
            $("#diagramm").addClass('diagramm_gradient');
            var diagramm = document.getElementById('g7390');
            var logo_block = document.getElementById('logo_block');
            var parallax_img = new Parallax(diagramm);
            var parallax_img = new Parallax(logo_block);
        }, 6000);
    };
});

$(document).ready(function () {

    function bindWheel() {
        $(window).bind('mousewheel', function (event) {
        event.preventDefault();
            wheel(event);
        });
    }

    bindWheel ();

    function wheel(event) {
        if (event.originalEvent.wheelDelta / 120 < 0) {
            nextPage();
        } else {
            prevPage();
        }
    };

    var currentPage = 0;
    var page = $('.page');

    function nextPage() {
        if (currentPage < page.length - 1) {
            $(window).unbind('mousewheel');
        page.eq(currentPage).fadeOut(500);
        currentPage++;
        setTimeout(
            function () {
                page.eq(currentPage).fadeIn();
            },
            500);
        setTimeout(function () {
            bindWheel ();
        }, 1000);
    }
    };

    function prevPage() {
    if (currentPage > 0) {
            $(window).unbind('mousewheel');
        page.eq(currentPage).fadeOut(500);
        currentPage--;
        setTimeout(
            function () {
                page.eq(currentPage).fadeIn();
            },
            500);
        setTimeout(function () {
            bindWheel ();
        }, 1000);
}
    };
});

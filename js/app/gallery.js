$(document).ready(function () {
    $('.gallery_img').click(function (event) {
        event.preventDefault();
        var src = $(this).data('src');
    });
});

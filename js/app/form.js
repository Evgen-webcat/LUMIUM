$(document).ready(function () {
//    $('#contact_form').find('input').each(function () {
//        if ($(this)[0].hasAttribute('required')) {
//            $(this)[0].setCustomValidity('Введите номер телефона');
//        }
//    });

    $('#contact_form').submit(function (event) {
        event.preventDefault();
        var data = $(this).serialize();

        $.ajax({
            url: '../send.php',
            type: 'POST',
            data: data,
            succes: function () {
                $('.contact-form').fadeOut(300);
                $('.message_sent').fadeIn(300);
            }
        });

        $('.contact-form').fadeOut(300);
        $('.message_sent').fadeIn(300);
    });

    $('.write_more_button').click(function () {
        $('#contact_form')[0].reset();
        $('.message_sent').fadeOut(300);
        $('.contact-form').fadeIn(300);
    });
});

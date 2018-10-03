$(document).ready(function () {
    var color;

    $('.aroma').click(function () {
        color = $(this).data('aroma');
		parallaxDestroy ();
        $(".diagramm_circle").addClass('diagramm_open ' + color + '');
		$(".diagramm_circle").animate({
			opacity: 1
		}, 500);
		$(".aroma, .parallax_img_wrap").css('opacity', '0');
        $('.logo_img, .dot').fadeOut(300);
        $('.diagramm_imgs').fadeIn();
        $('.diagramm_' + color + '').fadeIn();
//        $('.aroma_name').addClass('anim');
    });

    $('.diagramm_imgs').click(function () {
        $('.diagramm_imgs').fadeOut();
        $('.diagramm_' + color + '').fadeOut();
        $(".aroma, .parallax_img_wrap").css('opacity', '1');
        $('.logo_img, .dot').delay(500).fadeIn();
        $(".diagramm_circle").animate({
			opacity: 0
		}, 500);
        setTimeout(function () {
            $(".diagramm_circle").removeClass('diagramm_open ' + color + '');
//        $('.aroma_name').removeClass('anim');
            parallaxInit ();
        }, 500);
    });
});

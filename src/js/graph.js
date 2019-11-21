jQuery(function ($) {
    var $carousel = $('.js-carousel'),
        checkWidth = function () {
            if ($(window).width() <= 992) {
                $carousel.find('.col-lg-4').addClass('carousel-item');
                $carousel.addClass("carousel slide").carousel({
                    interval: 5000,
                    wrap: true,
                    touch: true
                });
            } else {
                $carousel.removeClass("carousel slide").carousel('dispose');
                $carousel.find('.col-lg-4').removeClass('carousel-item');
            }
        };

    checkWidth();
    $(window).on("resize", function () {
        checkWidth();
    })
});
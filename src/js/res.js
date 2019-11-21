jQuery(function ($) {
    var $carousel = $('.js-carousel'),
        checkWidth = function () {
            if ($(window).width() < 768) {
                $carousel.addClass("carousel slide").carousel({
                    interval: 5000,
                    wrap: true,
                    touch: true
                });
            } else {
                $carousel.removeClass("carousel slide").carousel('dispose');
            }
        };

    checkWidth();
    $(window).on("resize", function () {
        checkWidth();
    });
});
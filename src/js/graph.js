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

                $('#aside-mobile .g-aside__title').html('Select Career Goals');
                $('#aside-mobile .g-aside__block-submit').val('Show Grap');
            } else {
                $carousel.removeClass("carousel slide").carousel('dispose');
                $carousel.find('.col-lg-4').removeClass('carousel-item');


                $('#aside-mobile .g-aside__title').html('Determine your goals');
                $('#aside-mobile .g-aside__block-submit').val('Calculate');
            }
        };

    checkWidth();
    $(window).on("resize", function () {
        checkWidth();
    })
});
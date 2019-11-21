jQuery(function ($) {
    $(".js-question").on("click", function () {
        $(this).parents(".js-qBlock").toggleClass("opened").find(".js-answer").slideToggle();
    });
});
jQuery(function(e){function l(){e(window).width()<=992?(s.find(".col-lg-4").addClass("carousel-item"),s.addClass("carousel slide").carousel({interval:5e3,wrap:!0,touch:!0}),e("#aside-mobile .g-aside__title").html("Select Career Goals"),e("#aside-mobile .g-aside__block-submit").val("Show Grap")):(s.removeClass("carousel slide").carousel("dispose"),s.find(".col-lg-4").removeClass("carousel-item"),e("#aside-mobile .g-aside__title").html("Determine your goals"),e("#aside-mobile .g-aside__block-submit").val("Calculate"))}var s=e(".js-carousel");l(),e(window).on("resize",function(){l()})});
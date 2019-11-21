jQuery(function ($) {
    var windowBottomLine = 0;

    var checkAnimation = function () {
        windowBottomLine = $(window).scrollTop() + $(window).height() / 1.5;

        $(".js-animatedOrder").each(function () {
            var _this = $(this);
            if (windowBottomLine > _this.offset().top) {
                var _timer = 0;

                _this.find(".js-orderEl").each(function () {
                    var __this = $(this);

                    var interval_id = setTimeout(function () {
                        __this.removeClass("js-orderEl");
                    }, _timer);

                    _timer += _this.data("animation-step");
                });

                _this.removeClass("js-animatedOrder");
            }
        });
    };

    checkAnimation();
    $(window).on("scroll", function () {
        checkAnimation();

        if ($(window).scrollTop() > 0) {
            if (!$(".js-header").hasClass("fly")) {
                $(".js-header").addClass("fly");
            };
        } else {
            $(".js-header").removeClass("fly");
        }
    });

    $(".js-niceScroll").niceScroll({
        cursorborder: "",
        background: "transparent",
        cursorcolor: "#12172A",
        autohidemode: !1,
        cursorwidth: "4px",
        zindex: "auto",
        //oneaxismousemode: !1,
    });

    var showNiceScroll = function (_parent) {
        if (_parent.hasClass("show")) {
            setTimeout(function () {
                $(".js-niceScroll").getNiceScroll().resize();
            }, 100);
        } else {
            setTimeout(function () {
                showNiceScroll(_parent);
            }, 100);
        }

    }

    $(".js-dropdownLink").on("click", function () {
        var _parent = $(this).parents(".js-dropdown");

        showNiceScroll(_parent);
    });
    $(".js-dropdownMenu div div").on("click", function () {
        var _this = $(this);
        _this.parents(".js-dropdown").find(".js-dropdownLinkText").text(_this.text());
        _this.parents(".js-dropdownMenu").find("div").removeClass("active");
        _this.addClass("active");
        _this.parents(".js-dropdownMenu").find(".js-search").val("");
    });
    $('.js-search').keyup(function () {
        var rex = new RegExp($(this).val(), 'i'),
            _this = $(this),
            _items = _this.parents(".js-dropdownMenu").find("div div");

        _items.hide();
        _items.filter(function () {
            return rex.test($(this).text().replace(/[^\wа-яё]+/gi, ""));
        }).show();
    })


    $(".js-scrollTo").on("click", function () {
        $("html, body").animate({
            scrollTop: $($(this).data("scroll")).offset().top - 50
        }, 800);

        return false;
    });

    $(".js-mobiLink").on("click", function () {
        $("body").toggleClass("menuOpened");
    });
    $(document).mouseup(function (e) { // событие клика по веб-документу
        if ($("body").hasClass("menuOpened")) {
            var _parent = $(".g-header__menu"); // тут указываем ID элемента
            if (!_parent.is(e.target) // если клик был не по нашему блоку
                &&
                _parent.has(e.target).length === 0) { // и не по его дочерним элементам
                $("body").removeClass("menuOpened"); // скрываем его
            };
        };
    });
});
import $ from 'jquery';
$(document).ready(function () {

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll

    $('body').scrollspy({
        target: '#mainNav',
        offset: 30
    });


    // Collapse Navbar

    //  $(document).ready(function(){
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 190) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    navbarCollapse();

    $(window).scroll(navbarCollapse);


    if ($(".btn-top").length > 0) {
        $(window).scroll(function () {
            var e = $(window).scrollTop();
            if (e > 300) {
                $(".btn-top").show();
                $(".topic-bar").addClass("active");

            } else {
                $(".btn-top").hide();
                $(".topic-bar").removeClass("active");

            }
        });
        $(".btn-top").click(function () {
            $('body,html').animate({
                scrollTop: 0
            })
        });
    }
    $(".navbar-toggler").click(function () {
        if ($("body").hasClass("active")) {
            $("body").removeClass("active");
        } else {
            $("body").addClass("active");
            return false;
        }
    });
    $(".btn-action").click(function () {

        if ($("body").hasClass("show")) {
            $("body").removeClass("show");
        } else {
            $("body").addClass("show");
            return false;
        }
    });
    if ($('.owl-carousel').length > 0) {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,

            responsive: {
                0: {
                    items: 1,
                    nav: true,

                }
            }
        })
    }
    if ($(".btn-top").length > 0) {
        $(window).scroll(function () {
            var e = $(window).scrollTop();
            if (e > 100) {
                $(".btn-top").show()
            } else {
                $(".btn-top").hide()
            }
        });
        $(".btn-top").click(function () {
            $('body,html').animate({
                scrollTop: 0
            })
        });
    }

});

$(window).on("load", function () {
    $('.loading-page').fadeOut(200, function () {
        $(this).remove();
    });
});
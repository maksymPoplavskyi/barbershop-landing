'use strict';

// slider
$(function() {
    $('.js-hero-slider').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        fade: true,
        speed: 2500,
        autoplaySpeed: 2000,
        customPaging : function(slider, i) {
            return '<span class="slider-dot"></span>';
        },
    });

    // preventDefault to button
    $(function() {
        var $form = $('form');

        $form.on('submit', function(e) {
            e.preventDefault();
        })
    });

    // movie
    var myPlayer;

    $(function() {

        var options = {
            mobileFallbackImage: "http://www.hdwallpapers.in/walls/pink_cosmos_flowers-wide.jpg",
            playOnlyIfVisible  : false
        };

        myPlayer = $(".player").YTPlayer(options);

    });

    // people say slide commentary
    $('.people-item__btn').on('click', fToggle);

    function fToggle() {
        $('.people-item__commentary')
            .not($(this).next() )
            .slideUp(300);
        $(this).next().slideToggle(300);
    }

    // fixed header scroll
    var header = $('#header'),
    aboutUsH = $('#about-us').innerHeight(),
    scrollOffSet = $(window).scrollTop();

    checkScroll(scrollOffSet);

    $(window).on('scroll', function() {

        scrollOffSet = $(this).scrollTop();
        checkScroll(scrollOffSet);
    });

    function checkScroll(scrollOffSet) {
        if (scrollOffSet >= aboutUsH) {
            header.removeClass('absolute');
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
            header.addClass('absolute');
        }
    }

    // smooth scroll
    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();

        var blockId = $(this).data('scroll'),
            blockOffSet = $(blockId).offset().top;

        $('#nav a').removeClass('active');
        $(this).addClass('active');
        
        $('html, body').animate({
            scrollTop: blockOffSet
        }, 700);
    });

    // active nav scroll
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        
        if(height > 700 && height <1510){

            $('#nav a').removeClass('active');
            $('#about-js').addClass('active');

        } else if(height > 1510 && height < 2308) {

            $('#nav a').removeClass('active');
            $('#service-js').addClass('active');   

        } else if(height > 2308 && height < 2968){

            $('#nav a').removeClass('active');
            $('#barber-js').addClass('active');

        } else if(height > 2968 && height < 4345){

            $('#nav a').removeClass('active');
            $('#movie-js').addClass('active');

        } else if(height > 4345) {

            $('#nav a').removeClass('active');
            $('#contact-js').addClass('active');
        } else {
            $('#about-js').removeClass('active');
        }
        
        });

        var wow = new WOW ({
              boxClass:     'wow',
              animateClass: 'animated',
              offset:       0,
              mobile:       true,
              live:         true,
              scrollContainer: null,
              resetAnimation: true,
        });
        wow.init();
});

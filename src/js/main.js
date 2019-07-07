'use strict';

;(function() {
    $('.js-hero-slider').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        fade: true,
        speed: 3500,
        autoplaySpeed: 4500,
        customPaging : function(slider, i) {
            return '<span class="slider-dot"></span>';
        },
    });
})();
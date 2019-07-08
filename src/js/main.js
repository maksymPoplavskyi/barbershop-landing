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

    var myPlayer;

$(function() {

    var options = {
        mobileFallbackImage: "http://www.hdwallpapers.in/walls/pink_cosmos_flowers-wide.jpg",
        playOnlyIfVisible  : false
    };

myPlayer = $(".player").YTPlayer(options);

});

    $('.people-item__btn').on('click', fToggle);

function fToggle() {
    $('.people-item__commentary')
        .not($(this).next() )
        .slideUp(300);
    $(this).next().slideToggle(300);
}

})();

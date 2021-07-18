/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    var swiperHotel = new Swiper('.slider-hotel', {
        loop: true,
        autoHeight: true,
        breakpoints: {
            1120: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            691: {
                slidesPerView: 2,
                spaceBetween: 30
            },
        },
        navigation: {
            nextEl: '.slider-nav-1>.slider-right',
            prevEl: '.slider-nav-1>.slider-left',
        }
    });

    var swiperNews = new Swiper('.slider-news', {
        loop: true,
        autoHeight: true,
        breakpoints: {
            1120: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            691: {
                slidesPerView: 2,
                spaceBetween: 30
            },
        },
        navigation: {
            nextEl: '.slider-nav-2>.slider-right',
            prevEl: '.slider-nav-2>.slider-left',
        }
    });

});

$(document).ready(function () {
    $('.menu_bttn').click(function(){
        $('.menu_bttn').toggleClass('active');
        $('.navigation-case').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
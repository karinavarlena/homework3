import './style.css';
import Background from './img/background.png';


const myBackground = new Image();
myBackground.src = Background;

document.getElementsByClassName('bg-shape')[0].appendChild(myBackground);

let swiper = new Swiper('.product-slider', {
    spaceBetween: 30,
    effect: 'fade',
    // initialSlide: 2,
    loop: false,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev'
    },
    // mousewheel: {
    //     // invert: false
    // },
    on: {
        init: function(){
            let index = this.activeIndex;

            let target = $('.product-slider__item').eq(index).data('target');

            $('.product-img__item').removeClass('active');
            $('.product-img__item#'+ target).addClass('active');
        }
    }

});

swiper.on('slideChange', function () {
    let index = this.activeIndex;

    let target = $('.product-slider__item').eq(index).data('target');

    $('.product-img__item').removeClass('active');
    $('.product-img__item#'+ target).addClass('active');

    if(swiper.isEnd) {
        $('.prev').removeClass('disabled');
        $('.next').addClass('disabled');
    } else {
        $('.next').removeClass('disabled');
    }

    if(swiper.isBeginning) {
        $('.prev').addClass('disabled');
    } else {
        $('.prev').removeClass('disabled');
    }
});

$(".js-fav").on("click", function() {
    $(this).find('.heart').toggleClass("is-active");
});
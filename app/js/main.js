// WOW JS Конфликтует с оверфлоу хайден на бади или секций



// window.onscroll = function showHeader() {
//   let header = document.querySelector('.header');
//   if (window.pageYOffset > 150) {
//     header.classList.add('header__fixed');
//   } else {
//     header.classList.remove('header__fixed');
//   }
// }


$(function () {
  $('.menu__btn').on('click', (function () {
    if (!$('.menu').hasClass('active')) {
      $('.menu').addClass('active');
      $('.menu__btn').addClass('active');
      // $(' body').css('overflow', 'hidden')
    } else {
      $('.menu').removeClass('active');
      $('.menu__btn').removeClass('active');
      // $(' body').css('overflow', '');
    }
  }));



  $('.questions__item').on('click', (function () {
    $(this).find('.questions__item-title--btn').addClass('active');
    $(this).siblings().find('.questions__item-title--btn').removeClass('active');

    $(this).find('.questions__item-text').show(500);
    $(this).siblings().find('.questions__item-text').hide(500);

  }));



  $('.main-reviews__inner').slick({
    dots: false,
    prevArrow: document.querySelector('.slick-prev'),
    nextArrow: document.querySelector('.slick-next'),
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 10000,
    dots: true,
    responsive: [{
      breakpoint: 601,
      settings: {
        dots: true,
        dotsClass: 'slick-dots',
        slidesToShow: 1,
        arrows: false,
      }
    }]
  });


})

// const mediaQuery = window.matchMedia('(max-width: 600px)')
// if (mediaQuery.matches) {
//   if (!$('.menu').hasClass('active')) {
//     $(' body').css('overflow', '');
//     // $(' body').css('overflow', 'hidden');
//   } else {

//     $(' body').css('overflow', 'hidden');
//   }
// }

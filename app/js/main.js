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

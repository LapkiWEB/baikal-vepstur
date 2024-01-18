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

  lightGallery(document.querySelector('.gallery'));


})

const modalTrigger = document.querySelectorAll('[data-modal]'),
  modal = document.querySelector('.modal'),
  modalCloseBtn = document.querySelector('[data-close]');

modalTrigger.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
  });
});

function clossModel() {
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

modalCloseBtn.addEventListener('click', clossModel);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    clossModel();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.code === "Escape" && modal.classList.contains('show')) {
    clossModel();
  }
});



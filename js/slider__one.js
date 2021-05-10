var first = new Swiper('.first__slider.swiper-container', {
  navigation: {
    nextEl:'.first__slider.swiper-button-next',
    prevEl: '.first__slider.swiper-button-prev', 
  },
  slidesPerView: 'auto',
  spaceBetween: 12,
  breakpoints: {
    600: {
      spaceBetween: 40,
    },
  }
});
var second = new Swiper('.second__slider.swiper-container', {
  navigation: {
    nextEl:'.second__slider.swiper-button-next',
    prevEl: '.second__slider.swiper-button-prev',
  },
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

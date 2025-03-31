document.addEventListener('DOMContentLoaded', function() {
  var swiper_dream = new Swiper(".js-dream-slider", {
    spaceBetween: 102,
    loop: true,
    navigation: {
      nextEl: ".dream__slider-arrow",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper_features = new Swiper(".js-features-slider", {
    spaceBetween: 102,
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true // Включаем перекрестное затухание
    },
    navigation: {
      nextEl: ".features__swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".features__swiper-pagination",
      clickable: true,
    },
  });

  var swiper_reviews = new Swiper(".js-review-slider", {
    spaceBetween: 30,
    loop: true,
    slidesPerView: 3,
    autoHeight: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


});
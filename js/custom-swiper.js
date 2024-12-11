let testimonialSwiper = new Swiper(".testimonialSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

  }
});
let serviceSwiper = new Swiper(".expertSwiper", {
  slidesPerView: 2,
  spaceBetween: 35,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 35,
    },

  }
});

let electricalSwiper = new Swiper(".electricalSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1420: {
      slidesPerView: 3,
      spaceBetween: 60,
    },

  }
});

let pricingSwiper = new Swiper(".pricingSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1420: {
      slidesPerView: 3,
      spaceBetween: 60,
    },

  }
});




const headerSwiper = new Swiper(".header-swiper",{
    wrapperClass: "header-slider__wrapper",
    slideClass: "header-slider__slide",
    slideActiveClass: "header-img__active",
    autoHeight: true,
    observer: true,
    observeParents: true,
    slideActiveClass: "header-img__active",
    navigation: {
        el: ".header-swiper__nav",
        nextEl: '.header-swiper__button--prev',
        prevEl: '.header-swiper__button--next'
      },
      speed: 800,
      effect: 'fade'

    
})

const nav = document.querySelector('.header__nav');
const burger = document.querySelector('.header__burger');
burger.addEventListener('click',function () {  
  nav.classList.toggle('active')
})
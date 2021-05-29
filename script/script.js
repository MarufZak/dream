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
      effect: 'fade',
      autoplay: {
        delay: 2000
      },
      breakpoints: {
          992: {
            autoplay: false
          }
      }
    
})

const nav = document.querySelector('.header__nav');
const burger = document.querySelector('.header__burger');
const header = document.querySelector('.header-header');
burger.addEventListener('click',function () {  
  nav.classList.toggle('active')
})

window.addEventListener('scroll',function () {  
    if (window.pageYOffset > 40) {
      header.classList.add('active')
    } else {
      header.classList.remove('active')
    }
  
})
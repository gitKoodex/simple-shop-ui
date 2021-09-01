$(function(){
    const mySwiperInfinitePerGroup = new Swiper(".mySwiperInfinitePerGroup", {
        loop: true,
        loopFillGroupWithBlank: true,
        lazy: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
      });
      const DefaultSwiper = new Swiper(".DefaultSwiper", {
        loop: true,
        loopFillGroupWithBlank: true,
        lazy: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      });

      const mySwiper= new Swiper(".mySwiper",{
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        loopFillGroupWithBlank: true,
        lazy: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        breakpoints: {
            425:{
                slidesPerView: 1,
                spaceBetween: 5,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          },

      });
      
});

const swiper = new Swiper('.swiper', {
   // Optional parameters
   loop: true,
   slidesPerView: 1,
   spaceBetween: 0,
   autoplay:{
      delay:1500
   },

   // effect: "fade",   
   // effect: "cube",   
   // effect: "coverflow",   
   // effect: "flip",   
   

   breakpoints:{

      100:{
         slidesPerView: 2
      },
      // 700:{
      //    slidesPerView: 3
      // },
      400: {
         slidesPerView:2
      },

   },

 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 
   // And if we need scrollbar
   scrollbar: {
     el: '.swiper-scrollbar',
   },
 });
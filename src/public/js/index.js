 // import Swiper bundle with all modules installed
 import Swiper from 'C:\Users\maki_\cycom2022\src\public\js\swiper-bundle.min.js';

 // import styles bundle
 import 'C:\Users\maki_\cycom2022\src\public\css\swiper-bundle.min.css';

 // init Swiper:
 const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
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
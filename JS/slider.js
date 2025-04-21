
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener("DOMContentLoaded", function() {
    console.log("slider.js loaded");

    // Check if the swiper container exists after HTML is injected
    const swiperContainer = document.querySelector('.swiper');
    
    if (swiperContainer) {
        console.log("Swiper container found, initializing...");
        
        // Initialize Swiper
        const swiper = new Swiper('.swiper', {
            loop: true,
            centeredSlides: true,
            slidesPerView: "2",
            spaceBetween: 20,
            autoplay: {
                delay: 3000,
                disableInteraction: false,
            },
            grabCursor: true,
            effect: "coverflow",
            coverflowEffect:{
                rotate:-25,
                stretch:0,
                depth: 300,
                modifier: 1,
                slideShadows:false
            },
            speed: 1000,
            keyboard: {
                enabled: true,
                onlyInViewport: true,
            },

        });

        console.log("Swiper initialized");
    } else {
        console.error("Swiper container not found!");
    }
});
// # slider. swiper
var swiper = new Swiper(".sliderSwiper", {
    navigation: {
        nextEl: "#slider .swiper-button-next",
        prevEl: "#slider .swiper-button-prev",
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    pagination: {
        el: "#slider .swiper-pagination",
        clickable: true,
    },
});



// # new swiper
var new_swiper = new Swiper(".newSwiper", {
    slidesPerView: 5,
    spaceBetween: 15,
    pagination: {
        el: "#new .swiper-pagination",
        clickable: true,
        type: "fraction",
    },



    navigation: {
        nextEl: "#new .swiper-button-next",
        prevEl: "#new .swiper-button-prev",
    },
    slidesPerGroup: 5
});
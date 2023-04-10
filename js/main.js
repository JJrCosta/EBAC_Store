$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        infinite: true,
        speed: 100,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: false,
        responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }]
    });
});
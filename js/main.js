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
        breakpoint: 1025,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
        }
        },
        {
        breakpoint: 850,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 5
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
        }]
    });

    $('.btn-menu-mobile').click(function() {
        $('.nav-menu').slideToggle()
    })
});
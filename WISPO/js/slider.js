$(document).ready(function(){
    $('.block2__team').slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive:[
            {
                breakpoint: 1367,
                settings:{slidesToShow: 3,
                    slidesToScroll: 2,}
            },
            {
                breakpoint: 376,
                settings:{slidesToShow: 1,
                    slidesToScroll: 1,}
            },
        ]
    });
});
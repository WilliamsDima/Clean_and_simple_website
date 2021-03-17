$('document').ready(function(){
    $(".slider").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
    });
    
    $('.slider__testimonials').slick({
        centerMode: true,
        dots: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
        {
            breakpoint: 768,
            settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 3
        }
        },
    {
        breakpoint: 480,
        settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 3
        }
    }
        ]
    });
    
    
    $(".slick-dots li button").on('click', function(event) {
		event.preventDefault();
		
		let $this = $(this);
        $(".slick-dots li button").removeClass("active");
        $this.addClass("active");
		
	});
    
});
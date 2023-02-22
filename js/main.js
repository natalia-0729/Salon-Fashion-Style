$(function(){

  $(".menu a, .footer__list-link, .logo, .btn, .services__btn").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

  $('.services__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: '<button type="button" class="services__slick-next"><img src="images/arrow-right.svg" alt="Стрелка вправо"></button>',
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          arrows: false,
          dots: true,
          autoplay: true,
          autoplaySpeed: 4000,
        }
      },
    ]
  });

  $('.comment__items').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    prevArrow: '<button type="button" class="comment__slick-prev"><img src="images/arrow-left.svg" alt="Стрелка влево"></button>',
    nextArrow: '<button type="button" class="comment__slick-next"><img src="images/arrow-right.svg" alt="Стрелка вправо"></button>',
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
        }
      },
    ]
  });

  $('.team__items').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    prevArrow: '<button type="button" class="team__slick-prev"><img src="images/arrow-left.svg" alt="Стрелка влево"></button>',
    nextArrow: '<button type="button" class="team__slick-next"><img src="images/arrow-right.svg" alt="Стрелка вправо"></button>',
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('.menu__btn, .menu a').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active')
  });

  var mixer = mixitup('.portfolio__content');

});

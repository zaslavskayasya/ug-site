console.log("only main page");


let addToCartTrigger = document.querySelector('.add-to-cart');

addToCartTrigger.addEventListener('click', function(e){
  console.log(e.target);
})




let carImg= document.querySelector('#car');
let backMechanic= document.querySelector('#machanism');
let backYellow = document.querySelector('#back');

document.addEventListener('mousemove', function(e){
  let ivalueX= (e.pageX * -1 / 45);
  let ivalueY= (e.pageY * -1 / 40);
  let cvalueX= (e.pageX * -1 / 70);
  let cvalueY= (e.pageY * -1 / 90);

  let bvalueX= (e.pageX * -1 / 40);
  let bvalueY= (e.pageY * -1 / 35);


  console.log('ok');
  carImg.style.transform = 'translate3d('+ivalueX+'px,'+ivalueY+'px, 0)' ;
  backMechanic.style.transform = 'translate3d('+cvalueX+'px,'+cvalueY+'px, 0)';
  backYellow.style.transform = 'translate3d('+bvalueX+'px,'+bvalueY+'px, 0)';
})





let saleHitsSlider = $('.sale-hits-slider');

$('.sale-hits-slider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    margin: 10,
    arrows: true,
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
            breakpoint: 890,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              rows: 2,
              infinite: true,
              dots: false,
            }
          },
    ],
});

$('.season-slider').slick({
  dots: false,
  infinite: true,
  slidesToShow: 4,
  margin: 10,
  arrows: true,
  nextArrow: '<button type="button" class="slick-next"></button>',
  prevArrow: '<button type="button" class="slick-prev"></button>',
  responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
          breakpoint: 890,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
          }
        },
  ],
});



new WOW().init();


let oftenSlider = document.querySelector('.often-find-wrap');

$('.often-find-wrap').slick({
  dots: false,
  infinite: true,
  slidesToShow: 9,
  slidesToScroll: 2,
  margin: 10,
  arrows: false,
});
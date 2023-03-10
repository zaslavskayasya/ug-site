console.log(`Loaded main.js`);



// header part
let body = document.getElementById('body');
let overflowDarken = document.querySelector('.overflow-block');
let leftSideMenu = document.querySelector('#mySidenav');
let openLeftSidebarMenu = document.querySelector('.openLeftSideMenu');
let closeLeftSidebarMenu = document.querySelector('.closeLeftSidebar');


openLeftSidebarMenu.addEventListener('click', ()=>{
    leftSideMenu.style.left = "0px";
    leftSideMenu.style.opacity = "1";
    overflowDarken.style.opacity = "1";
    overflowDarken.style.height = "100rem";
    overflowDarken.style.pointerEvents  = "auto"; 
    body.style.overflowY = "hidden";     
    body.classList.add("active-left")  ;   
   
});

closeLeftSidebarMenu.addEventListener('click', ()=>{
    leftSideMenu.style.left = "-100%";
    leftSideMenu.style.opacity = "0";
    overflowDarken.style.opacity = "0";
    overflowDarken.style.height = "0";
    overflowDarken.style.pointerEvents  = "none";
    body.style.overflowY = "auto";
    body.classList.remove("active-left")  ;  

});

overflowDarken.addEventListener('click', ()=>{
  leftSideMenu.style.left = "-100%";
  leftSideMenu.style.opacity = "0";
  overflowDarken.style.height = "0";
  overflowDarken.style.opacity = "0";
  overflowDarken.style.pointerEvents  = "none";
  body.style.overflowY = "auto";
  body.classList.remove("active-left")  ;  

});



const clearInput = () => {
    const input = document.querySelector('.search-bar-input');
    input.value = "";
  }
  
  const clearBtn = document.getElementById("clear-btn");
  clearBtn.addEventListener("click", clearInput);


const searchForm = document.querySelector('.search-bar');


// const btn = document.querySelector('.search-btn');
// const input = document.querySelector('.search-input');


// btn.addEventListener('click', (e) => {
//   e.preventDefault();
//   input.focus();

//   if (!searchForm.classList.contains('active')){
//     searchForm.classList.add('active');
//   }
// });

// let mainMenuItem = document.querySelectorAll('.main-menu-item'),
//     arr_to_id = [];


// window.addEventListener('click', e => {
//   let target = e.target;
//   if (!searchForm.contains(target)){
//     searchForm.classList.remove('active');

//   };

// });


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

// layer.mousemove(function(e){
//   var ivalueX= (e.pageX * -1 / 30);
//   var ivalueY= (e.pageY * -1 / 30);
//   var cvalueX= (e.pageX * -1 / 40);
//   var cvalueY= (e.pageY * -1 / 60);
//   console.log('ok');
//   iphone.css('transform', 'translate3d('+ivalueX+'px,'+ivalueY+'px, 0)');
//   camera.css('transform', 'translate3d('+cvalueX+'px,'+cvalueY+'px, 0)');
// });


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

let addToCartTrigger = document.querySelector('.add-to-cart');
// saleHitsSlider.addEventListener('click', function(e){
//   console.log(e.target);
// });
addToCartTrigger.addEventListener('click', function(e){
  console.log(e.target);
})

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
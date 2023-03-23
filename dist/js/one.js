// console.log("one page");


let closeRightSidebar = document.querySelector('.closeRightSidebar');

let RightSideMenuInfo = document.querySelector('.info-right');

let rightFilterTrigger = document.querySelectorAll('.info-trigger');

rightFilterTrigger.forEach((triggerBtn)=>{
  triggerBtn.addEventListener('click', (e)=>{
    RightSideMenuInfo.classList.add('active');
      overflowDarken.style.opacity = "1";
      overflowDarken.style.height = "100rem";
      overflowDarken.style.pointerEvents  = "initial"; 
      body.style.overflowY = "hidden"; 
      body.classList.add("active-right")  ; 
  });

})

closeRightSidebar.addEventListener('click', ()=>{
  RightSideMenuInfo.classList.remove('active');
  overflowDarken.style.opacity = "0";
  overflowDarken.style.height = "0";
  overflowDarken.style.pointerEvents  = "none"; 
   body.style.overflowY = "auto";
   body.classList.remove("active-right")  ; 

});
overflowDarken.addEventListener('click', ()=>{
    RightSideMenuInfo.classList.remove('active');
    overflowDarken.style.opacity = "0";
    overflowDarken.style.height = "0";
    overflowDarken.style.pointerEvents  = "none";    
   body.style.overflowY = "auto";
   body.classList.remove("active-right")  ; 
  
});


function openDes(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  

  $('.last-seen-slid').slick({
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
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              rows: 2,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 365,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              rows: 2,
              infinite: true,
              dots: false,
            }
          },
    ],
});
//# sourceMappingURL=one.js.map
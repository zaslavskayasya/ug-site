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


let headercartTrigger = document.querySelectorAll('.cart-trigger');
let closeRightSidebar2 = document.querySelector('.closeCart');
let RightSideCart = document.querySelector('.cart-right');
let cartTrigger = document.querySelectorAll('.addToCart');


console.log(headercartTrigger);

headercartTrigger.forEach((triggerBtn)=>{
  triggerBtn.addEventListener('click', (e)=>{
    RightSideCart.classList.add('active');
      overflowDarken.style.opacity = "1";
      overflowDarken.style.height = "100rem";
      overflowDarken.style.pointerEvents  = "initial"; 
      body.style.overflowY = "hidden"; 
      body.classList.add('active-right');
  });

})

cartTrigger.forEach((triggerBtn)=>{
  triggerBtn.addEventListener('click', (e)=>{
    RightSideCart.classList.add('active');
      overflowDarken.style.opacity = "1";
      overflowDarken.style.height = "100rem";
      overflowDarken.style.pointerEvents  = "initial"; 
      body.style.overflowY = "hidden"; 
      body.classList.add('active-right');
  });

})

closeRightSidebar2.addEventListener('click', ()=>{
  RightSideCart.classList.remove('active');
  overflowDarken.style.opacity = "0";
  overflowDarken.style.height = "0";
  overflowDarken.style.pointerEvents  = "none"; 
   body.style.overflowY = "auto";
   body.classList.remove('active-right');
});

overflowDarken.addEventListener('click', ()=>{
    RightSideCart.classList.remove('active');
    overflowDarken.style.opacity = "0";
    overflowDarken.style.height = "0";
    overflowDarken.style.pointerEvents  = "none";    
   body.style.overflowY = "auto";
   body.classList.remove('active-right');
  
});




let cabinetInfoTrigger = document.querySelector('.person-icon');
let headerFind = document.querySelector('.logged');

let bigPlace = document.querySelector('.right-menu-info');


// // let cabinetStayActive = document.querySelector('.personal-cabinet');

if(headerFind){

  cabinetInfoTrigger.addEventListener("mouseover", (e)=>{
    // console.log(e.target.parentNode)
    headerFind.classList.add('active');
  });
  bigPlace.addEventListener("mouseleave", (e)=>{
    // console.log(e.target.parentNode)
    headerFind.classList.remove('active');
  });
};


console.log('personal test');

let personalCabinetTrigger = document.querySelectorAll('.cabinet-trigger');
let closeCabinetSidebar = document.querySelector('.closeCabinetSidebar');

let cabinetSidebar = document.querySelector('.login-part');


personalCabinetTrigger.forEach((triggerBtn)=>{
  triggerBtn.addEventListener('click', (e)=>{
    cabinetSidebar.classList.add('active');
      overflowDarken.style.opacity = "1";
      overflowDarken.style.height = "100rem";
      overflowDarken.style.pointerEvents  = "initial"; 
      body.style.overflowY = "hidden"; 
      body.classList.add("active-right")  ;  
  });
})


closeCabinetSidebar.addEventListener('click', ()=>{
    cabinetSidebar.classList.remove('active');
    overflowDarken.style.opacity = "0";
    overflowDarken.style.height = "0";
    overflowDarken.style.pointerEvents  = "none"; 
     body.style.overflowY = "auto";
     body.classList.remove("active-right")  ;  
});


overflowDarken.addEventListener('click', ()=>{
  cabinetSidebar.classList.remove('active');
  overflowDarken.style.opacity = "0";
  overflowDarken.style.height = "0";
  overflowDarken.style.pointerEvents  = "none";    
 body.style.overflowY = "auto";
 body.classList.remove("active-right")  ;  

});


let triggerRegister = document.querySelector('.triggerRegister');
let triggerLogin = document.querySelector('.triggerLogin');

let registerblock = document.querySelector('.wrap-register');
let loginBlock = document.querySelector('.wrap-login');



triggerRegister.addEventListener('click', ()=>{
    loginBlock.classList.remove('active');
    registerblock.classList.add('active');
});

triggerLogin.addEventListener('click', ()=>{
    registerblock.classList.remove('active');
    loginBlock.classList.add('active');
});

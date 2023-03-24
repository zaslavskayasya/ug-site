// console.log(`Loaded main.js`);


let cabinetInfoTrigger = document.querySelector('.person-icon');
let headerFind = document.querySelector('.logged');

let bigPlace = document.querySelector('.right-menu-info');


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


// const clearInput = () => {
//     const input = document.querySelector('.search-bar-input');
//     input.value = "";
//   }
  
//   const clearBtn = document.getElementById("clear-btn");
//   clearBtn.addEventListener("click", clearInput);


const searchForm = document.querySelector('.fa-search');
const closeSearch = document.querySelector('#clear-btn')

searchForm.addEventListener('click', function(){
  searchForm.parentElement.classList.toggle('active');
});


closeSearch.addEventListener('click', function(){
  searchForm.parentElement.classList.remove('active');
});

let flag = false;

document.addEventListener( 'click', function(e){
  // console.log(e.target.closest('.search-bar'));
  if(!e.target.closest('.search-bar')){
    searchForm.parentElement.classList.remove('active');
  } ;
  if(headerFind.classList.contains("active")){

    if(flag){
      headerFind.classList.remove("active");
      flag = false;
      return
    }
    console.log('TEST');
    flag = true;
  }

})


let headercartTrigger = document.querySelectorAll('.cart-trigger');
let closeRightSidebar2 = document.querySelector('.closeRightSidebar2');
let RightSideCart = document.querySelector('.cart-right');
let cartTrigger = document.querySelectorAll('.addToCart');




// console.log(headercartTrigger);

headercartTrigger.forEach((triggerBtn)=>{
  // console.log('for cart');
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
  // console.log('closeeee');
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







// // let cabinetStayActive = document.querySelector('.personal-cabinet');





cabinetInfoTrigger.addEventListener("click", (e)=>{
  if(headerFind){
    if(headerFind.classList.contains('active')){
      headerFind.classList.remove('active');
      return;
      // headerFind.classList.remove('active');
    }
    headerFind.classList.add('active');
  } 
  // console.log(e.target.parentNode)
  // headerFind.classList.add('active');
});

// if(headerFind){
//   if(headerFind.classList.contains('active')){
//     headerFind.classList.remove('active');
//     headerFind.classList.remove('active');
//   }

//   cabinetInfoTrigger.addEventListener("click", (e)=>{
//     // console.log(e.target.parentNode)
//     headerFind.classList.add('active');
//   });
//   bigPlace.addEventListener("click", (e)=>{
//     // console.log(e.target.parentNode)
//     headerFind.classList.add('active');
//   });


// };


// console.log('personal test');

let personalCabinetTrigger = document.querySelectorAll('.cabinet-trigger');
let closeCabinetSidebar = document.querySelector('.closeCabinetSidebar');

let cabinetSidebar = document.querySelector('.login-part');
if(!headerFind){

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
  

}

// personalCabinetTrigger.forEach((triggerBtn)=>{
//   triggerBtn.addEventListener('click', (e)=>{
//     cabinetSidebar.classList.add('active');
//       overflowDarken.style.opacity = "1";
//       overflowDarken.style.height = "100rem";
//       overflowDarken.style.pointerEvents  = "initial"; 
//       body.style.overflowY = "hidden"; 
//       body.classList.add("active-right")  ;  
//   });
// })


// closeCabinetSidebar.addEventListener('click', ()=>{
//     cabinetSidebar.classList.remove('active');
//     overflowDarken.style.opacity = "0";
//     overflowDarken.style.height = "0";
//     overflowDarken.style.pointerEvents  = "none"; 
//      body.style.overflowY = "auto";
//      body.classList.remove("active-right")  ;  
// });


// overflowDarken.addEventListener('click', ()=>{
//   cabinetSidebar.classList.remove('active');
//   overflowDarken.style.opacity = "0";
//   overflowDarken.style.height = "0";
//   overflowDarken.style.pointerEvents  = "none";    
//  body.style.overflowY = "auto";
//  body.classList.remove("active-right")  ;  

// });


// let triggerRegister = document.querySelector('.triggerRegister');
// let triggerLogin = document.querySelector('.triggerLogin');

// let registerblock = document.querySelector('.wrap-register');
// let loginBlock = document.querySelector('.wrap-login');



// triggerRegister.addEventListener('click', ()=>{
//     loginBlock.classList.remove('active');
//     registerblock.classList.add('active');
// });

// triggerLogin.addEventListener('click', ()=>{
//     registerblock.classList.remove('active');
//     loginBlock.classList.add('active');
// });
//# sourceMappingURL=main.js.map


let closeRightSidebar = document.querySelector('.closeRightSidebar');

let RightSideMenu = document.querySelector('.filter-right');

let rightFilterTrigger = document.querySelectorAll('.filter-item');

rightFilterTrigger.forEach((triggerBtn)=>{
  triggerBtn.addEventListener('click', (e)=>{
      RightSideMenu.classList.add('active');
      overflowDarken.style.opacity = 1;
      overflowDarken.style.height = "100rem";
      overflowDarken.style.pointerEvents  = "initial"; 
      body.style.overflowY = "hidden";
      body.classList.add("active-right")  ;  

    //find data-attr on clicked element
    let activeFilter = e.currentTarget.dataset.filtername; 

    //choose filter item with data-attributes
    let filterItem = document.querySelectorAll('[data-CatalogFilterName]');

    // check each of filter for contain clicked menu's attribite
    //compare them and open 
    filterItem.forEach((fi)=> {
        
        let filterData = fi.dataset.catalogfiltername;
        // console.log(filterData);       
        
        if (filterData === activeFilter){
            // console.log(fi);
            fi.querySelector('.mobile-main-menu').classList.add('open');
        }
    });
  });
})


closeRightSidebar.addEventListener('click', ()=>{
  RightSideMenu.classList.remove('active');
  overflowDarken.style.opacity = "0";
  overflowDarken.style.height = "0";
  overflowDarken.style.pointerEvents  = "none";
  mobileItem.forEach((mi)=>{
        mi.classList.remove('open');    
   }) ;
   body.style.overflowY = "auto";
   body.classList.remove("active-right")  ;  

});

overflowDarken.addEventListener('click', ()=>{
    RightSideMenu.classList.remove('active');
    overflowDarken.style.opacity = "0";
    overflowDarken.style.height = "0";
    overflowDarken.style.pointerEvents  = "none";
    mobileItem.forEach((mi)=>{
        mi.classList.remove('open');    
   }) ;
   body.style.overflowY = "auto";
   body.classList.remove("active-right")  ;  
  
  });


  let mobileItem = document.querySelectorAll('.mobile-main-menu');
  let elemForHideSkroll = document.querySelector('.sidenav');
  let bodyTag = document.querySelector("#body");
  
  
  mobileItem.forEach(it => {
      it.addEventListener('click', e => {
        //   console.log( e.currentTarget.classList.contains('open'));

          let current = e.currentTarget;
          let block = current.querySelector(".hidden-mobile-submenu");
        
          if(current.classList.contains('open')){
            if (e.target.closest('.hidden-mobile-submenu') == block){
                return false;
            }

            current.classList.remove('open');
            elemForHideSkroll.style.overflow = "auto";
            RightSideMenu.style.overflow = "auto";
            // bodyTag.style.paddingRight = "70px"
          } else {
            if (!current.classList.contains('open'))
            // RightSideMenu.style.overflow  = "hidden";
                current.classList.add('open');
            elemForHideSkroll.style.overflow = "hidden";
          }
      });
  });
  

$('.brand-slider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll:4,
    margin: 10,
    arrows: false,    
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
            breakpoint: 890,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow:4,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 365,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
    ],
  });
  
  
  

  
  
  let oftenSlider = document.querySelector('.often-find-wrap');
  
  $('.often-find-wrap').slick({
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 2,
    margin: 10,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      
  ],
    
  
  },
  );


  var stepsSlider = document.getElementById('steps-slider');
  var input0 = document.getElementById('input-with-keypress-0');
  var input1 = document.getElementById('input-with-keypress-1');
  var inputs = [input0, input1];
  
  noUiSlider.create(stepsSlider, {
      start: [20, 50000],
      connect: true,
      tooltips: false,
      range: {
          'min': [0],
          'max': 10000
      }
  });
  
  stepsSlider.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = values[handle];
  });
  

// Listen to keydown events on the input field.
inputs.forEach(function (input, handle) {

    input.addEventListener('change', function () {
        stepsSlider.noUiSlider.setHandle(handle, this.value);
    });
  
    input.addEventListener('keydown', function (e) {
  
        let values = stepsSlider.noUiSlider.get();
        var value = Number(values[handle]);
  
        // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
        var steps = stepsSlider.noUiSlider.steps();
  
        // [down, up]
        var step = steps[handle];
  
        var position;
  
        // 13 is enter,
        // 38 is key up,
        // 40 is key down.
        switch (e.which) {
  
            case 13:
                stepsSlider.noUiSlider.setHandle(handle, this.value);
                break;
  
            case 38:
  
                // Get step to go increase slider value (up)
                position = step[1];
  
                // false = no step is set
                if (position === false) {
                    position = 1;
                }
  
                // null = edge of slider
                if (position !== null) {
                    stepsSlider.noUiSlider.setHandle(handle, value + position);
                }
  
                break;
  
            case 40:
  
                position = step[0];
  
                if (position === false) {
                    position = 1;
                }
  
                if (position !== null) {
                    stepsSlider.noUiSlider.setHandle(handle, value - position);
                }
  
                break;
        }
    });
  });
  


  var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
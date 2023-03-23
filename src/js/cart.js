// console.log('conntect cart page');

   

//caLCULATE
let counterPluses = document.querySelectorAll('.counter-plus');
let counterMinus = document.querySelectorAll('.counter-minus');

// place for total quantity 
let placeForTotalQuantity = document.querySelector('.ware-number');
let placeForTotalQuantityMob = document.querySelector('.ware-number-mob');
//place for total price
let placeForTotalSum1 = document.querySelector('.ware-calc-sum') ;
let placeForTotalSumMob = document.querySelector('.ware-calc-sum-mob') ;
// 
let placeForFinalySum  = document.querySelector('.finalSum');
let placeForFinalySum2  = document.querySelector('.finalSum2');
let placeForFinalySumMob  = document.querySelector('.finalSum-mob');

function calculateQuantity(){
    let counterNumberTotaly = document.querySelectorAll('.counter-number');
    let elemSum = 0;
    // console.log("counterNumberTotaly = " + counterNumberTotaly);
    elemSum  = 0;
    counterNumberTotaly.forEach((elem)=>{
            // console.log(elem.innerHTML);
            elemSum += parseInt(elem.innerHTML);
    })
    placeForTotalQuantity.innerHTML = elemSum;
    placeForTotalQuantityMob.innerHTML = elemSum;
    
    // console.log('elemSum  ' + elemSum);

}
calculateQuantity();


function calculateTotalSum(){
    let counterNumberTotaly = document.querySelectorAll('.placeForPrice');
    let elemsSum = 0;
    // console.log("counterNumberTotaly = " + counterNumberTotaly);
    elemsSum  = 0;
    counterNumberTotaly.forEach((elem)=>{
            // console.log(elem.innerHTML);
            elemsSum += parseInt(elem.innerHTML);
    })
    placeForTotalSum1.innerHTML = elemsSum;
    placeForFinalySum.innerHTML = elemsSum;
    placeForFinalySum2.innerHTML = elemsSum;
    placeForTotalSumMob.innerHTML = elemsSum;
    placeForFinalySumMob.innerHTML = elemsSum;
    // console.log('elemSum  ' + elemsSum);

}
calculateTotalSum();


counterPluses.forEach((counterPluses)=>{
    counterPluses.addEventListener('click', (e)=>{
        let thisItemCard = e.target.parentElement.parentElement.parentElement;

        // plce of number in counter
        let NumberItem = thisItemCard.querySelector('.counter-number');

        // место для суммі
        let placeForPrice = thisItemCard.querySelector('.placeForPrice');

        // место для того чтоб узнать цену 
        let OriginPrice = thisItemCard.querySelector('.originPrice').innerHTML;

        // add +1 if click on +
        let actualQuantity = NumberItem.innerHTML;
        actualQuantity++;
        
        // take data about price
        let NewWarePrice =  OriginPrice * actualQuantity;

        placeForPrice.innerHTML = NewWarePrice;
        NumberItem.innerHTML = actualQuantity;               
        // console.log(actualQuantity);
        // console.log(thisItemCard.querySelector('.price-num'));

        calculateQuantity();
        calculateTotalSum();

    });
});


counterMinus.forEach((counterMinus)=>{

    counterMinus.addEventListener('click', (e)=>{
        let thisItemCard = e.target.parentElement.parentElement.parentElement;

        // plce of number in counter
        let NumberItem = thisItemCard.querySelector('.counter-number');

        // место для суммі
        let placeForPrice = thisItemCard.querySelector('.placeForPrice');

        // место для того чтоб узнать цену 
        let OriginPrice = thisItemCard.querySelector('.originPrice').innerHTML;


        // add +1 if click on +
        let actualQuantity = NumberItem.innerHTML;
        if (actualQuantity <= 0){
            return;
        } else{

            actualQuantity--;
        }

        // take data about price
        let NewWarePrice =  OriginPrice * actualQuantity;

        placeForPrice.innerHTML = NewWarePrice;
        NumberItem.innerHTML = actualQuantity;               
        // console.log(actualQuantity);
        // console.log(thisItemCard.querySelector('.price-num'));
        calculateQuantity();
        calculateTotalSum();

    });
});



let deleteBlockTrigger = document.querySelectorAll('.delete-img');


deleteBlockTrigger.forEach((deleteBlockTrigger)=>{
    deleteBlockTrigger.addEventListener('click', (e)=>{
        
        e.target.closest(".ware-item").remove();

        
        calculateQuantity();
        calculateTotalSum();

        // console.log('test');

    });
});


$('.last-seen').slick({
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
              slidesToShow: 1,
              slidesToScroll: 1,
              rows: 2,
              infinite: true,
              dots: false,
            }
          },
    ],
});


let selects = document.querySelectorAll('.sel-trigger');

// console.log(selects);

selects.forEach(function(sel, i){
    sel.addEventListener("change", ()=>{
        sel.classList.add('check');
    })

})
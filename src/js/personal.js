console.log("personal");;

let selects = document.querySelectorAll('.sel-trigger');

console.log(selects);

selects.forEach(function(sel, i){
    sel.addEventListener("change", ()=>{
        sel.classList.add('check')
    })

})
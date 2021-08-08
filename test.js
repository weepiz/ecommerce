const btns=document.querySelectorAll(".btns")
const ecriture=document.querySelector("#ecriture")

btns.forEach (btn => {
btn.addEventListener("click",event =>{
   console.log( btn.parentElement.getAttribute("id"))
})




})
   


// function affichage (btnId){

//     ecriture.innerHTML+=btnId

// }
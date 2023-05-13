document.getElementById("hamburger").addEventListener("click",()=>{

    document.getElementById("menu-container").style.transform="translateX(0)"


})


document.getElementById("cross-icon").addEventListener("click",()=>{

    document.getElementById("menu-container").style.transform="translateX(100%)";
    
})



document.getElementById("cart-icon").addEventListener("click",()=>{
    document.getElementById("cart").style.transform="translateX(0)"
})



document.getElementById("cart-close").addEventListener("click", () => {
  document.getElementById("cart").style.transform =
    "translateX(100%)";
});
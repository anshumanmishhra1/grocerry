const profileIcon = document.querySelector(".profile");
const HomeIcon = document.querySelector(".home");
const loginButton = document.querySelector(".login-btn");
const SignuP = document.querySelector(".create-account");
const cartButton = document.querySelector(".product-button");
const cartQuantity = document.querySelector(".cart-quantity");
const loader = document.querySelector(".loader");

window.addEventListener("load",()=>{
    loader.style.display= "none";
})

profileIcon.addEventListener("click",()=>{
    window.location.href="login.html"    
});

HomeIcon.addEventListener("click",()=>{
    window.location.href="index.html"
})

SignuP.addEventListener("click",()=>{
    window.location.href="profile.html"
})

let qty = 0;

cartButton.addEventListener("click",()=>{
    qty++;
    cartQuantity.innerText=qty;
});


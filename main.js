// rating system

const navi = document.querySelector("nav");
const mobileNav = document.querySelector("nav.mobile-nav");

const menuIcon = document.querySelector(".menu-icon");

const closeIcon = document.querySelector(".mobile-menu-container .close-icon");

const mobileMenuContainer = document.querySelector(".mobile-menu-container");



window.addEventListener("scroll", ()=>{

if (window.pageYOffset > 60){
    navi.classList.add("scrolled");
    mobileNav.classList.add("scrolled");
}

else{

    navi.classList.remove("scrolled");
    mobileNav.classList.remove("scrolled");
}


});

menuIcon.addEventListener("click", ()=>{
    mobileMenuContainer.classList.add("active");

});

closeIcon.addEventListener("click", ()=>{
    mobileMenuContainer.classList.remove("active");

});







const menuBtn = document.querySelector(".menu-btn");
const links = document.querySelector(".links");
const lis = document.querySelectorAll(".links li");
menuBtn.addEventListener("click" , function(){
    menuBtn.classList.toggle("toggle-btn");
    links.classList.toggle("toggle-ul");
});

lis[0].addEventListener("click", function(){
    menuBtn.classList.remove("toggle-btn");
    links.classList.remove("toggle-ul");
});
lis[1].addEventListener("click", function(){
    menuBtn.classList.remove("toggle-btn");
    links.classList.remove("toggle-ul");
});
lis[2].addEventListener("click", function(){
    menuBtn.classList.remove("toggle-btn");
    links.classList.remove("toggle-ul");
});
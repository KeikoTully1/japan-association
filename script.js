
// reference: https://www.youtube.com/watch?v=axQ7eN2oPu0



const headerE1 = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        headerE1.classList.add('header-scrolled');
    } else if (window.scrollY <= 50){
        headerE1.classList.remove('header-scrolled');
    }
});

// hamburger menu - reference: https://youtu.be/Tpoa6RWttoM

let nav = document.querySelector("#navArea");
let btn = document.querySelector(".toggle-btn");
let mask = document.querySelector("#mask");
let link = document.querySelector("a");

btn.onclick = () => {
  nav.classList.toggle("open");
};

mask.onclick = () => {
  nav.classList.toggle("open");
};

import './alpine.js';

// simple lazy load
const lazyImages = document.getElementsByClassName("lazy");

document.addEventListener('DOMContentLoaded', () => {
    [...lazyImages].forEach((elem) => {
        let originalImage = elem.dataset.src;
        elem.setAttribute("src", originalImage);
        elem.removeAttribute("data-src");
    });
}, false);

const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click',()=> {
    if (menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
    
})

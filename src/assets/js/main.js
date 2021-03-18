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

import { body, homePage } from './cover-toggle.js';

const button = document.querySelector('.back-to-cover');

button.addEventListener('click', () => {
    body.style.overflowY = "hidden";
    homePage.style.display = "block";
    
    homePage.style.transition = "opacity .5s ease";

    setTimeout(() => {
        homePage.style.opacity = 1;
    }, 100);
});

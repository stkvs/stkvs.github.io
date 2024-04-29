import { body, homePage, particles} from './cover-toggle.js';

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.back-to-cover');

    button.addEventListener('click', () => {
        body.style.overflowY = "hidden";
        homePage.style.display = "block";
        homePage.style.transition = "opacity .5s ease";
        
        particles.style.background = "transparent";
        particles.classList.add("bg-change");

        setTimeout(() => {
            homePage.style.opacity = 1;
        }, 100);
    });
});

import { body, homePage } from './cover-toggle.js';

const button = document.querySelector('.back-to-cover');
const bg = document.querySelector('.bg1');
const bgParticles = document.querySelector('#bg-particles-js')

button.addEventListener('click', () => {
    console.log("Clicked");

    body.style.overflowY = "hidden";
    homePage.style.display = "block";
    bgParticles.style.display = "block";

    homePage.style.transition = "opacity 0.5s ease";
    bg.style.display = "block";

    setTimeout(() => {
        homePage.style.opacity = 1;
        bg.style.height = "100svh";
        bg.style.position = "absolute"
    }, 100);
});

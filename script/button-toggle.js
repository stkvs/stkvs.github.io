import { body, homePage } from './cover-toggle.js';

const button = document.querySelector('.back-to-cover');
const bgParticles = document.querySelector('#bg-particles-js');

button.addEventListener('click', () => {
    console.log("Clicked");

    body.style.overflowY = "hidden";
    homePage.style.display = "block";
    
    homePage.style.transition = "opacity .5s ease";
    bgParticles.style.transition = "opacity .5s ease";

    setTimeout(() => {
        homePage.style.opacity = 1;
        bgParticles.style.opacity = 1;
    }, 100);
});

// Listen for resize events
window.addEventListener('resize', () => {
    // Check if URL bar is visible
    if (window.innerHeight < window.outerHeight) {
        // URL bar is visible, hide bgParticles
        bgParticles.style.opacity = 0;
    } else {
        // URL bar is not visible, show bgParticles
        bgParticles.style.opacity = 1;
    }
});

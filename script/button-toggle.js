import { body, homePage } from './cover-toggle.js';

const button = document.querySelector('.back-to-cover');
const bgParticles = document.querySelector('#bg-particles-js');

button.addEventListener('click', () => {
    console.log("Clicked");

    body.style.overflowY = "hidden";
    homePage.style.display = "block";
    
    homePage.style.transition = "opacity 2s ease";
    bgParticles.style.transition = "opacity 2s ease";

    setTimeout(() => {
        homePage.style.opacity = 1;
        bgParticles.style.opacity = 1;
        positionBgParticles(); // Adjust position after showing
    }, 100);
});

// Function to adjust position of bgParticles
function positionBgParticles() {
    const windowHeight = window.innerHeight;
    const bgParticlesHeight = bgParticles.offsetHeight;

    // Calculate top position to center bgParticles vertically
    const topPosition = (windowHeight - bgParticlesHeight) / 2;

    // Set position style
    bgParticles.style.top = `${topPosition}px`;
}

// Listen for resize events to reposition bgParticles
window.addEventListener('resize', () => {
    positionBgParticles();
});

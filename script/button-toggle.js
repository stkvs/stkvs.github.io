import {body, homePage} from './cover-toggle.js'

const button = document.querySelector('.back-to-cover')

button.addEventListener('click', () => {
    console.log("Clicked");

    homePage.style.transition = "opacity 0.5s ease"; // Apply transition effect to opacity
    body.style.overflowY = "hidden";

    homePage.style.display = "block";

    setTimeout(() => {
        homePage.style.opacity = 1;
    }, 100); // Add a slight delay for the transition to take effect smoothly
});

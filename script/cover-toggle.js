const homePage = document.querySelector('.cover');
const logo = document.querySelector('.logo-blue');

homePage.style.opacity = 1;
homePage.style.transition = "opacity 0.5s ease"; // Apply transition effect to opacity

logo.addEventListener('click', () => {
    console.log("Clicked");
    homePage.style.opacity = 0;

    // Wait for the transition to complete before hiding the element
    setTimeout(() => {
        homePage.style.display = "none";
    }, 500); // Adjust the timeout to match the transition duration
});

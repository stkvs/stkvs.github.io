const projectImages = document.getElementsByClassName("project-image");
const projectTexts = document.getElementsByClassName("project-text");

// Hide all project texts initially
Array.from(projectTexts).forEach(projectText => {
    projectText.style.display = "none";
});

// Add event listeners for mouseenter (hover in) and mouseleave (hover out)
Array.from(projectImages).forEach((projectImage, index) => {
    projectImage.addEventListener("mouseenter", function() {
        // Add your code to execute when the mouse enters the element
        // For example, change the element's background color
        console.log("Mouse entered");
        projectTexts[index].style.display = "block";
    });

    projectImage.addEventListener("mouseleave", function() {
        // Add your code to execute when the mouse leaves the element
        // For example, revert the element's background color
        console.log("Mouse left");
        projectTexts[index].style.display = "none";
    });
});

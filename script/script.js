const projectImages = document.getElementsByClassName("project-image");
const projectTexts = document.getElementsByClassName("project-text");

// Hide all project texts initially
Array.from(projectTexts).forEach(projectText => {
    projectText.style.display = "none";
});

// Add event listeners for click/tap to toggle project text visibility
Array.from(projectImages).forEach((projectImage, index) => {
    let isTextVisible = false;

    projectImage.addEventListener("click", function() {
        // Toggle visibility of project text
        if (!isTextVisible) {
            projectTexts[index].style.display = "block";
        } else {
            projectTexts[index].style.display = "none";
        }

        // Update text visibility status
        isTextVisible = !isTextVisible;
    });
});

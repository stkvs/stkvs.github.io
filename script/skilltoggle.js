const skillLabels = document.querySelectorAll('.languages > div');

// Function to toggle visibility of proficiency level
function toggleProficiency(proficiency) {
    if (proficiency.style.visibility === 'visible') {
        proficiency.style.visibility = 'hidden';
    } else {
        proficiency.style.visibility = 'visible';
    }
}

// Add event listeners for click/tap to toggle proficiency level visibility
skillLabels.forEach(skillLabel => {
    skillLabel.addEventListener('click', function() {
        const proficiency = skillLabel.querySelector('span');
        toggleProficiency(proficiency);
    });

    // Add touchstart event for touch devices
    skillLabel.addEventListener('touchstart', function(event) {
        // Prevent default touch behavior
        event.preventDefault();
        const proficiency = skillLabel.querySelector('span');
        toggleProficiency(proficiency);
    });
});

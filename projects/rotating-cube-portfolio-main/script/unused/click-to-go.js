document.addEventListener('DOMContentLoaded', function () {
    var clickableSides = document.getElementsByClassName("square");

    for (var i = 0; i < clickableSides.length; i++) {
        clickableSides[i].addEventListener('click', function (event) {
            console.log('Clicked!'); // Add this line to check if the event is firing
            var targetId;
            var clickedSide = event.target.closest('.square');
    
            if (clickedSide.classList.contains('side1')) {
                targetId = 'aboutMeSection';
            } else if (clickedSide.classList.contains('side2')) {
                targetId = 'skillsSection';
            } else if (clickedSide.classList.contains('side3')) {
                targetId = 'projectsSection';
            } else if (clickedSide.classList.contains('side4')) {
                targetId = 'contactSection';
            }
    
            if (targetId) {
                scrollToSection(targetId);
            }
        });
    }
    

    function scrollToSection(sectionId) {
        var targetSection = document.getElementById(sectionId);

        if (targetSection) {
            var targetSectionRect = targetSection.getBoundingClientRect();
            var targetSectionOffset = targetSectionRect.top + window.scrollY;

            // Scroll to the target section with smooth behavior
            window.scrollTo({
                top: targetSectionOffset,
                behavior: 'smooth'
            });
        }
    }
    
    
    
});

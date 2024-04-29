// JavaScript
window.addEventListener('scroll', function() {
    if (window.innerWidth > 768 && !('ontouchstart' in window || navigator.maxTouchPoints)) {
        const elements = document.querySelectorAll('.page'); // replace .element with your element selector
        const window_height = window.innerHeight;
        const scroll_y = window.scrollY;

        elements.forEach(function(element) {
            const element_position = element.getBoundingClientRect().top + scroll_y;
            const element_height = element.offsetHeight;

            // Check if the element is in the viewport and not the element with ID 'home'
            if (scroll_y > element_position - window_height && scroll_y < element_position + element_height && element.id !== 'home') {
                element.classList.add('animate');
            } else {
                element.classList.remove('animate');
            }
        });
    }
});
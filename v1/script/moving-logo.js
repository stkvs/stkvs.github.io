document.addEventListener("DOMContentLoaded", function() {
    const target = document.querySelector('.logo-blue');
    const logo = document.querySelector('.logo-blue');
    const background = document.querySelector('.logo-button'); // Changed to querySelector
    const backdropbg = document.querySelector('.backdrop-bg')

    backdropbg.style.display = "none";
    
    document.addEventListener('mousemove', function(event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const targetRect = target.getBoundingClientRect();
        const targetCenterX = targetRect.left + targetRect.width / 2;
        const targetCenterY = targetRect.top + targetRect.height / 2;

        const angleX = (mouseY - targetCenterY) / 10;
        const angleY = (mouseX - targetCenterX) / 10;

        target.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });
    
    logo.addEventListener('mouseenter', () => {
        backdropbg.style.backdropFilter = "blur(10px)";
        backdropbg.style.opacity = "1";
        backdropbg.style.display = "block";
    });
    
    logo.addEventListener('mouseleave', () => {
        backdropbg.style.backdropFilter = "none";
        backdropbg.style.opacity = "0";
        backdropbg.style.display = "none";
    });
});

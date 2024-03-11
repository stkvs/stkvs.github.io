var isTouchPressed = false;
var autoSpinInterval;

function rotateCube(x) {
    var cube = document.getElementsByClassName("square");
    var q = 0.5;
    var i;

    x = x * q;

    for (i = 0; i < cube.length; i++) {
        cube[i].style.transform = "rotateY(" + x + "deg)";
    }
}

function startAutoSpin() {
    autoSpinInterval = setInterval(function () {
        var cube = document.getElementsByClassName("square");
        for (var i = 0; i < cube.length; i++) {
            cube[i].style.transition = "transform 5s ease"; // Slower rotation
            cube[i].style.transform = "rotateY(" + (parseFloat(cube[i].style.transform.replace("rotateY(", "").replace("deg)", "")) + 1) + "deg)";
        }
    }, 2500); // 20ms interval
}

function stopAutoSpin() {
    clearInterval(autoSpinInterval);
}

function handleTouchStart(e) {
    isTouchPressed = true;
    stopAutoSpin(); // Stop the automatic spin when touched
    rotateCube(e.touches[0].clientX - window.innerWidth / 2); // Initial rotation on touch start
}

function handleTouchEnd() {
    isTouchPressed = false;
    startAutoSpin(); // Resume automatic spin when touch is released
}

function handleTouchMove(e) {
    if (isTouchPressed) {
        rotateCube(e.touches[0].clientX - window.innerWidth / 2); // Manual rotation when touched
    }
}

function handleScroll() {
    var fadeText = document.querySelector('.fade-in-text');
    fadeText.style.transition = "opacity 0.5s ease"; // Smooth opacity transition
    fadeText.style.opacity = "0";
}

document.addEventListener('mousedown', handleScroll);

// document.querySelector('.square').addEventListener('mouseenter', function () {
//     isTouchPressed = false; // Stop rotation when mouse enters the "square" element
//     startAutoSpin(); // Resume automatic spin
// });

// document.querySelector('.square').addEventListener('mouseleave', function () {
//     startAutoSpin(); // Resume automatic spin when mouse leaves the "square" element
// });

document.addEventListener('touchstart', handleTouchStart);
document.addEventListener('touchend', handleTouchEnd);
document.addEventListener('touchmove', handleTouchMove);

document.addEventListener('mousedown', function (e) {
    if (!document.querySelector('.square').contains(e.target)) {
        isTouchPressed = true;
        stopAutoSpin(); // Stop the automatic spin when the mouse is pressed
        rotateCube(e.clientX - window.innerWidth / 2); // Initial rotation on mouse down
    }
});

document.addEventListener('mouseup', function () {
    isTouchPressed = false;
    startAutoSpin(); // Resume automatic spin when the mouse is released
});

document.addEventListener('mousemove', function (e) {
    if (!document.querySelector('.square').contains(e.target) && isTouchPressed) {
        rotateCube(e.clientX - window.innerWidth / 2); // Manual rotation when the mouse is pressed outside the "square" element
    }
});

// // Start automatic spin initially
// startAutoSpin();

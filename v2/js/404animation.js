const errorBox = document.querySelector('.error-message');
errorBox.style.scale = 0;


if (errorBox) {
    window.onload = () => {
        setTimeout(() => {
            errorBox.style.transition = '1s cubic-bezier(0.4, 0, 0.2, 1)';
            errorBox.style.scale = 1;
        }, 250);
    };
}
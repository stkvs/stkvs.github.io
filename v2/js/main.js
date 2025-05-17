// Animation on load
const body = document.querySelector('body');
const hero = document.querySelector('#hero');
const aside = document.querySelector('.sidebar');

if (window.innerWidth > 768) {
    hero.style.scale = 0;
    aside.style.transform = 'translateX(-100vw)';

    window.onload = () => {
        setTimeout(() => {
            aside.style.transition = '1s cubic-bezier(0.4, 0, 0.2, 1)';
            aside.style.transform = 'translateX(0)';
        }, 250);

        setTimeout(() => {
            hero.style.transition = '1s cubic-bezier(0.4, 0, 0.2, 1)'
            hero.style.scale = 1;
        }, 1000);
    };

    setTimeout(() => {
        body.style.overflowX = 'hidden';
    }, 1250);
} else if ('ontouchstart' in window && window.innerWidth <= 768) {
    hero.style.scale = 0;

    setTimeout(() => {
        hero.style.transition = '1s cubic-bezier(0.4, 0, 0.2, 1)'
        hero.style.scale = 1;
    }, 1000);

    const toggleButton = document.createElement('button');
    toggleButton.classList.add('menuToggle');
    body.appendChild(toggleButton);

    aside.style.transform = 'translateX(-100vw)';
    aside.style.zIndex = 90;

    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.width = '100vw';
    });

    toggleButton.onclick = () => {
        setTimeout(() => {
            aside.style.transition = '1s cubic-bezier(0.4, 0, 0.2, 1)';
            
            if (aside.style.transform === 'translateX(0px)') {
                aside.style.transform = 'translateX(-100vw)';
            } else {
                aside.style.transform = 'translateX(0)';
            }
        }, 250);
    };
}

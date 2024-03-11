function updateScroll(){
    const {scrollTop, scrollHeight} = document.documentElement;
    const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 270;
    const maxValue = 270;

    if (scrollPercent > maxValue) {
        let scrollPercent = maxValue + 'deg';
        document.querySelector('.square').style.setProperty('--rotation', scrollPercent);

    }

    else {
        const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 270 + 'deg';
        document.querySelector('.square').style.setProperty('--rotation', scrollPercent);
    }
}

document.addEventListener('scroll', updateScroll);
function updateProgressBar(){
    const {scrollTop, scrollHeight} = document.documentElement;
    const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100 + '%';

    document.querySelector('#progress-bar').style.setProperty('--progress', scrollPercent);
    // console.log(scrollPercent)
}

document.addEventListener('scroll', updateProgressBar);
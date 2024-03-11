function handleScroll() {
    const fadetext = document.getElementsByClassName("fade-in-text");

    // Check if the user has scrolled past a certain point
    if (window.scrollY > 5) { // Adjust the value as needed
        document.querySelector('.fade-in-text').style.display = "none";
    } 
}
  // Attach the handleScroll function to the scroll event
  document.addEventListener('scroll', handleScroll);
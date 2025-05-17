document.addEventListener("DOMContentLoaded", function() {
    const pictureElement = document.querySelector("#home > div > div.me > img");
    // Create container if it doesn't exist
    let pictureContainer;
    
    if (pictureElement) {
        // Check if the image is already in a container
        if (pictureElement.parentElement.classList.contains('picture-container')) {
            pictureContainer = pictureElement.parentElement;
        } else {
            // Create and insert container around the image
            pictureContainer = document.createElement('div');
            pictureContainer.classList.add('picture-container');
            pictureElement.parentNode.insertBefore(pictureContainer, pictureElement);
            pictureContainer.appendChild(pictureElement);
        }
    }
    
    if (!pictureElement || !pictureContainer) return;
    
    // Create progress bar element
    const progressBar = document.createElement("div");
    progressBar.classList.add("hover-progress-bar");
    pictureContainer.style.position = "relative";
    
    // Add progress bar styles
    const styleElement = document.createElement("style");
    styleElement.textContent = `
        .hover-progress-bar {
            position: absolute;
            top: -5px;  /* Increased negative margin */
            left: -5px; /* Increased negative margin */
            width: calc(100% + 10px); /* Increased width */
            height: calc(100% + 10px); /* Increased height */
            border-radius: 50%;
            pointer-events: none;
            background: conic-gradient(
                magenta var(--progress, 0%),
                transparent var(--progress, 0%)
            );
            opacity: 0;
            transition: opacity 0.3s;
            z-index: 1;
        }
        
        .picture-container {
            position: relative;
            display: inline-block;
            border-radius: 50%;
        }
        
        .picture-container img {
            position: relative;
            z-index: 2;
            transition: transform 0.3s;
            border-radius: 50%;
            display: block;
        }
        
        .progress-active {
            opacity: 0.7 !important;
        }
        
        .hover-disabled {
            pointer-events: none;
        }
    `;
    document.head.appendChild(styleElement);
    
    // Insert progress bar before the image
    pictureContainer.insertBefore(progressBar, pictureElement);
    
    // Variables to track hover state
    let isHovering = false;
    let hoverStartTime;
    let hoverDuration = 2000; // 2 seconds to complete (adjust as needed)
    let animationFrameId;
    let actionTriggered = false;
    
    // Start tracking hover
    pictureElement.addEventListener("mouseenter", function() {
        // If action already triggered, do nothing
        if (actionTriggered) return;
        
        isHovering = true;
        hoverStartTime = Date.now();
        progressBar.classList.add("progress-active");
        
        // Cancel any existing animation
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
        
        // Update progress animation
        function updateProgress() {
            const elapsedTime = Date.now() - hoverStartTime;
            const progress = Math.min(elapsedTime / hoverDuration * 100, 100);
            
            progressBar.style.setProperty("--progress", `${progress}%`);
            
            if (isHovering && progress < 100) {
                animationFrameId = requestAnimationFrame(updateProgress);
            } else if (progress >= 100) {
                // When progress reaches 100%, trigger your custom action
                triggerAction();
            }
        }
        
        updateProgress();
    });
    
    // Stop tracking hover
    pictureElement.addEventListener("mouseleave", function() {
        // If action already triggered, do nothing
        if (actionTriggered) return;
        
        isHovering = false;
        
        // Get the current progress value
        const currentProgress = parseFloat(getComputedStyle(progressBar).getPropertyValue("--progress")) || 0;
        const startTime = Date.now();
        const startProgress = currentProgress;
        const reverseDuration = (startProgress / 100) * hoverDuration; // Time proportional to progress
        
        // Cancel any existing animation
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
        
        function reverseProgress() {
            const elapsedTime = Date.now() - startTime;
            const remainingProgress = Math.max(startProgress - (elapsedTime / reverseDuration * startProgress), 0);
            
            progressBar.style.setProperty("--progress", `${remainingProgress}%`);
            
            if (remainingProgress > 0) {
                animationFrameId = requestAnimationFrame(reverseProgress);
            } else {
                // Only remove the active class when fully reversed
                progressBar.classList.remove("progress-active");
            }
        }
        
        reverseProgress();
    });

    
    // Function to trigger when progress reaches 100%
    function triggerAction() {
        pictureElement.src = "../assets/images/funny-picture.png"; // Change to your desired image
        actionTriggered = true;
        
        // Disable hover effect by removing the progress bar and adding disabled class
        progressBar.remove();
        pictureContainer.classList.add("hover-disabled");
    }
});
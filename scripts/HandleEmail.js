function handleMailto() {
    const emailAddress = "contact@stkvs.com";
    
    // Get form values
    const name = document.querySelector(".form input[type='text']").value.trim();
    const userEmail = document.querySelector(".form input[type='email']").value.trim();
    const message = document.querySelector(".form textarea").value.trim();
    
    // Basic validation
    if (!name || !userEmail || !message) {
        showModal("Error", "Please fill in all fields");
        return;
    }
    
    // Email validation with regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(userEmail)) {
        showModal("Error", "Please enter a valid email address");
        return;
    }
    
    // Construct email body with form information
    const body = `Name: ${name}\nPreferred Email: ${userEmail}\n\nMessage:\n${message}`;
    const subject = `Message from ${name}`;
    
    // Construct the mailto URL
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open the default email client
    window.location.href = mailtoUrl;
}

function showModal(title, message) {
    // Remove any existing modals
    const existingModal = document.querySelector('.custom-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal container
    const modal = document.createElement('div');
    modal.className = 'custom-modal';
    
    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    // Add title
    const modalTitle = document.createElement('h3');
    modalTitle.textContent = title;
    
    // Add message
    const modalMessage = document.createElement('p');
    modalMessage.textContent = message;
    
    // Add close button
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.onclick = () => {
        modal.classList.add('closing');
        setTimeout(() => modal.remove(), 300);
    };
    
    // Assemble modal
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(modalMessage);
    modalContent.appendChild(closeButton);
    modal.appendChild(modalContent);
    
    // Add modal to page
    document.body.appendChild(modal);
    
    // Trigger animation
    setTimeout(() => modal.classList.add('active'), 10);
    
    // Add styles dynamically if they don't exist yet
    if (!document.getElementById('modal-styles')) {
        const styles = document.createElement('style');
        styles.id = 'modal-styles';
        styles.textContent = `
            .custom-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background-color: rgba(0, 0, 0, 0.5);
                backdrop-filter: blur(5px);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
                opacity: 0;
                transition: opacity 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
            }
            
            .custom-modal.active {
                opacity: 1;
            }
            
            .custom-modal.closing {
                opacity: 0;
            }
            
            .modal-content {
                background-color: rgba(3, 4, 4, 0.9);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 1vw;
                padding: 2vw;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
                width: 30vw;
                max-width: 90%;
                transform: translateY(20px);
                opacity: 0;
                transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
            }
            
            .custom-modal.active .modal-content {
                transform: translateY(0);
                opacity: 1;
            }
            
            .modal-content h3 {
                font-family: 'CreatoDisplay Medium', sans-serif;
                color: #fff;
                font-size: 1.5vw;
                margin-bottom: 1vw;
            }
            
            .modal-content p {
                font-family: 'CreatoDisplay Thin', sans-serif;
                color: rgba(255, 255, 255, 0.8);
                font-size: 1vw;
                margin-bottom: 1.5vw;
            }
            
            .modal-content button {
                font-family: 'CreatoDisplay Medium', sans-serif;
                font-size: 1vw;
                padding: 0.8vw 1.5vw;
                border-radius: 0.5vw;
                background-color: #81357a;
                color: #fff;
                border: none;
                cursor: pointer;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
                transition: 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
                float: right;
            }
            
            .modal-content button:hover {
                background-color: #9a4092;
                transform: translateY(-2px);
            }
            
            @media (max-width: 1024px) {
                .modal-content h3 {
                    font-size: 4vw;
                }
                
                .modal-content p {
                    font-size: 3vw;
                }
                
                .modal-content button {
                    font-size: 3vw;
                    padding: 2vw 3vw;
                }
            }
        `;
        document.head.appendChild(styles);
    }
}

// Add event listener to the submit button
document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.querySelector('.submit-button');
    if (submitButton) {
        submitButton.addEventListener('click', handleMailto);
    }
});

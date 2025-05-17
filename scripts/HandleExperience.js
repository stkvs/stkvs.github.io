const buttons = document.querySelector('.button-toggle');
const buttonElements = buttons.children;
const resultsContainer = document.querySelector('.results');
let selection = "experience";

buttonElements[0].style.backgroundColor = "#121212";

function showElements(selection) {    
    if (selection === "experience") {
        fetch('./assets/data/experience.json')
            .then(response => response.json())
            .then(data => {
                resultsContainer.innerHTML = ""; // Clear previous results
                data.forEach(item => {
                    const resultItem = document.createElement('div');
                    resultItem.classList.add('result-item');
                    resultItem.innerHTML = `
                        <img src="${item.img}" alt="${item.company}"/>
                        <div class="result-content">
                            <p>${item.timeframe}</p>
                            <h3>${item.company}</h3>
                            <p>${item.role}</p>
                        </div>
                    `;
                    resultsContainer.appendChild(resultItem);
                });
            })    
    } else if (selection === "education") {
        fetch('./assets/data/education.json')
            .then(response => response.json())
            .then(data => {
                resultsContainer.innerHTML = ""; // Clear previous results
                data.forEach(item => {
                    const resultItem = document.createElement('div');
                    resultItem.classList.add('result-item');
                    resultItem.innerHTML = `
                        <img src="${item.img}" alt="${item.institution}"/>
                        <div class="result-content">
                            <p>${item.timeframe}</p>
                            <h3>${item.institution}</h3>
                            <p>${item.qualification}</p>
                        </div>
                    `;
                    resultsContainer.appendChild(resultItem);
                });
        })
    }   
}

Array.from(buttonElements).forEach(button => {
    button.addEventListener('click', function() {
        for (let btn of buttonElements) {
            btn.style.backgroundColor = "";
        }
        this.style.backgroundColor = "#121212";
        selection = this.getAttribute('data');
        
        showElements(selection);
    });
});

document.addEventListener("DOMContentLoaded", showElements("experience"));

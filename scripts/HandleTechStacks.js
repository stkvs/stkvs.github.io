document.addEventListener('DOMContentLoaded', function() {
    // Fetch the tech stack data
    fetch('./assets/data/techstack.json')
        .then(response => response.json())
        .then(data => {
            // Get the core-tech-stack container
            const coreTechStackContainer = document.querySelector('#skills .core-tech-stack');
            
            // Get the other-tech container
            const otherTechContainer = document.querySelector('#skills .other-tech');
            
            // Define core tech items (the ones already in your HTML)
            const coreTechItems = [
                'Next.js', 'Vite', 'React', 'JavaScript', 
                'PHP', 'Supabase', 'MySQL', 'Git'
            ];
            
            // Clear existing content
            coreTechStackContainer.innerHTML = '';
            otherTechContainer.innerHTML = '';
            
            // Create sections for core tech stack
            coreTechItems.forEach(techName => {
                // Find the tech item in any category
                let techItem = null;
                for (const category in data) {
                    const found = data[category].find(tech => tech.name === techName);
                    if (found) {
                        techItem = found;
                        break;
                    }
                }
                
                if (techItem) {
                    const stackDiv = document.createElement('div');
                    stackDiv.className = 'stack';
                    
                    const img = document.createElement('img');
                    img.src = techItem.element;
                    img.alt = techItem.name;
                    
                    const h3 = document.createElement('h3');
                    h3.textContent = techItem.name;
                    
                    stackDiv.appendChild(img);
                    stackDiv.appendChild(h3);
                    coreTechStackContainer.appendChild(stackDiv);
                }
            });
            
            // Add all non-core tech items directly to otherTechContainer
            for (const category in data) {
                data[category].forEach(tech => {
                    if (!coreTechItems.includes(tech.name)) {
                        const stackDiv = document.createElement('div');
                        stackDiv.className = 'stack';
                        
                        const img = document.createElement('img');
                        img.src = tech.element;
                        img.alt = tech.name;
                        
                        const h3 = document.createElement('h3');
                        h3.textContent = tech.name;
                        
                        stackDiv.appendChild(img);
                        stackDiv.appendChild(h3);
                        otherTechContainer.appendChild(stackDiv);
                    }
                });
            }
        })
        .catch(error => {
            console.error('Error loading tech stack data:', error);
        });
});

// Get the projects container
const projectsContainer = document.querySelector('.projects-container');

// Function to fetch projects data
async function fetchProjects() {
    try {
        const response = await fetch('./assets/data/projects.json');
        const projects = await response.json();
        return projects;
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
}

// Function to create project elements
function createProjectElement(project) {
    const projectElement = document.createElement('div');
    projectElement.className = 'project';
    
    // Set background image
    projectElement.style.backgroundImage = `url(.${project.image})`;
    
    // Create project info container with overlay effect
    const projectInfo = document.createElement('div');
    projectInfo.className = 'project-info';
    
    // Create project header with title and featured star if applicable
    const projectHeader = document.createElement('div');
    projectHeader.className = 'project-header';
    
    const title = document.createElement('h3');
    title.textContent = project.title;
    
    projectHeader.appendChild(title);
    
    // Add star icon for featured projects
    if (project.featured) {
        const starIcon = document.createElement('i');
        starIcon.className = 'bi bi-star-fill featured-icon';
        projectHeader.appendChild(starIcon);
    }
    
    // Create description
    const description = document.createElement('p');
    description.textContent = project.description;
    
    // Create tags container
    const tags = document.createElement('div');
    tags.className = 'tags';
    
    project.tags.forEach(tag => {
        const span = document.createElement('span');
        span.textContent = tag;
        tags.appendChild(span);
    });
    
    // Create links container
    const links = document.createElement('div');
    links.className = 'links';
    
    // Add GitHub link if it exists
    if (project.links.github) {
        const githubLink = document.createElement('a');
        githubLink.href = project.links.github;
        githubLink.target = '_blank';
        githubLink.rel = 'noopener noreferrer';
        githubLink.innerHTML = '<i class="bi bi-github"></i>';
        links.appendChild(githubLink);
    }
    
    // Add live link if it exists
    if (project.links.live) {
        const liveLink = document.createElement('a');
        liveLink.href = project.links.live;
        liveLink.target = '_blank';
        liveLink.rel = 'noopener noreferrer';
        liveLink.innerHTML = '<i class="bi bi-box-arrow-up-right"></i>';
        links.appendChild(liveLink);
    }
    
    // Append all elements to project info
    projectInfo.appendChild(projectHeader);
    projectInfo.appendChild(description);
    projectInfo.appendChild(tags);
    projectInfo.appendChild(links);
    
    // Append project info to project element
    projectElement.appendChild(projectInfo);
    
    return projectElement;
}

// Global variable to store all projects
let allProjects = [];
let isShowingAll = false;

// Function to render projects in the container
async function renderProjects(showAll = false) {
    if (!projectsContainer) {
        console.error('Projects container not found');
        return;
    }

    // Clear existing projects
    projectsContainer.innerHTML = '';
    
    // If we have no projects yet, fetch them
    if (allProjects.length === 0) {
        allProjects = await fetchProjects();
        
        // Sort projects to put featured ones first
        allProjects.sort((a, b) => {
            if (a.featured && !b.featured) return -1;
            if (!a.featured && b.featured) return 1;
            return 0;
        });
    }
    
    if (allProjects.length === 0) {
        projectsContainer.innerHTML = '<p class="no-projects">No projects found</p>';
        return;
    }
    
    // Display either all projects or just the first 4
    const projectsToDisplay = showAll ? allProjects : allProjects.slice(0, 4);
    
    // Create and append project elements
    projectsToDisplay.forEach(project => {
        const projectElement = createProjectElement(project);
        projectsContainer.appendChild(projectElement);
    });
    
    // Update the toggle button state
    updateToggleButton(showAll);
}

// Function to create or update the toggle button
function updateToggleButton(showAll) {
    let toggleButton = document.getElementById('toggle-projects');
    
    if (!toggleButton) {
        // Create the button if it doesn't exist
        toggleButton = document.createElement('button');
        toggleButton.id = 'toggle-projects';
        toggleButton.className = 'toggle-projects-btn';
        
        // Insert the button after the projects container
        const projectsSection = document.querySelector('#projects .content');
        if (projectsSection) {
            projectsSection.appendChild(toggleButton);
        }
    }
    
    // Only show the button if there are more than 4 projects
    if (allProjects.length <= 4) {
        toggleButton.style.display = 'none';
        return;
    }
    
    toggleButton.textContent = showAll ? 'See Less' : 'See More';
    toggleButton.onclick = () => {
        isShowingAll = !isShowingAll;
        renderProjects(isShowingAll);
    };
}

// Initialize the projects display
function initProjects() {
    renderProjects(false); // Initially show only 4 projects
}

// Run initialization when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initProjects);

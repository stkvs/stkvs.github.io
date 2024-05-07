async function fetchProjects() {
    try {
      const response = await fetch("./assets/projects.json");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching project data:", error);
      return [];
    }
}

window.addEventListener('load', async function() {
    const projects = await fetchProjects();
    await generateProjectCards(projects);
});
  
async function generateProjectCards(projects) {
    const projectList = document.getElementsByClassName("project-flexbox")[0]; // Select the first element
    const project = document.createElement("div");
    project.classList.add("project");
  
    projects.forEach((projectData) => {
      const card = document.createElement("div");
      card.classList.add("project-card");

      card.style.backgroundImage = `url(./assets/${projectData.image})`; // Set the background image
  
      const skillsContainer = document.createElement("div");
      skillsContainer.classList.add("skills");
  
      projectData.skills.forEach((skill) => {
        const img = document.createElement("img");
        img.src = `./assets/${skill}`; // Set the source to the SVG file path
        skillsContainer.appendChild(img);
      });
  
      const h3 = document.createElement("h3");
      h3.innerText = projectData.name;
  
      const p = document.createElement("p");
      p.classList.add("description");
      p.innerHTML = projectData.description; // Use .innerHTML instead of .innerText
  
      if (projectData.link) {
        const link = document.createElement("a");
        link.href = projectData.link;
        link.target = "_blank";
        link.appendChild(h3);
        link.appendChild(p);
        link.appendChild(skillsContainer);
        card.appendChild(link);
      } else {
        card.appendChild(h3);
        card.appendChild(p);
        card.appendChild(skillsContainer);
      }
  
      project.appendChild(card);
    });
  
    projectList.appendChild(project);
};
  
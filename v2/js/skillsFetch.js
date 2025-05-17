async function fetchSkills() {
    try {
      const response = await fetch("./assets/skills.json");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching project data:", error);
      return [];
    }
}

window.addEventListener('load', async function() {
    const skills = await fetchSkills();
    await LanguageGrid(skills);
    await FrameworkGrid(skills);
});

async function LanguageGrid(skills) {
    const languageGrid = document.querySelector(".languages .icon-container");
    const langList = skills.languages;
    langList.forEach((lang) => {
        const langIcon = document.createElement('img');
        langIcon.src = lang.icon;
        langIcon.title = lang.name;
        languageGrid.appendChild(langIcon);
    });
}

async function FrameworkGrid(skills) {
    const frameworkGrid = document.querySelector(".frameworks .icon-container");
    const frameworkList = skills.frameworks;
    frameworkList.forEach((framework) => {
        const frameworkIcon = document.createElement('img');
        frameworkIcon.src = framework.icon;
        frameworkIcon.title = framework.name;
        frameworkGrid.appendChild(frameworkIcon);
    });
}
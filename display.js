// Week 4 JavaScript Portfolio Project - Display Generation
// Students will learn to generate HTML using JavaScript template literals

let welcomeMessage = `Welcome to ${portfolio.owner.name}'s portfolio!`;
console.log(welcomeMessage);

// Header section
let headerHTML = `
    <header>
        <h1>${portfolio.owner.name}</h1>
        <p class="tagline">${portfolio.owner.title}</p>
        <p class="location">📍 ${portfolio.owner.location}</p>
    </header>
`;

document.write(headerHTML);

// Skills section
let skillsHTML = '<section id="skills"><h2>My Skills</h2><ul class="skills-list">';

for (let i = 0; i < portfolio.skills.length; i++) {
    skillsHTML = skillsHTML + `<li>${portfolio.skills[i]}</li>`;
}

skillsHTML = skillsHTML + '</ul></section>';
document.write(skillsHTML);

// Projects section
let projectsHTML = '<section id="projects"><h2>My Projects</h2><div class="projects-grid">';

for (let i = 0; i < portfolio.projects.length; i++) {
    let project = portfolio.projects[i];

    let techList = project.technologies.join(", ");

    projectsHTML = projectsHTML + `
        <article class="project-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p class="tech">Technologies: ${techList}</p>
            <p class="date">Completed: ${project.completionDate}</p>
        </article>
    `;
}

projectsHTML = projectsHTML + '</div></section>';
document.write(projectsHTML);

// TODO: Advanced students can try creating different versions
// Example: Only show featured projects
/*
let featuredProjectsHTML = '<section><h2>Featured Projects</h2><div class="projects-grid">';

for (let i = 0; i < portfolio.projects.length; i++) {
    let project = portfolio.projects[i];

    // Only include if featured is true
    if (project.featured === true) {
        let techList = project.technologies.join(", ");
        featuredProjectsHTML = featuredProjectsHTML + `
            <article class="project-card">
                <h3>${project.title} ⭐</h3>
                <p>${project.description}</p>
                <p class="tech">Technologies: ${techList}</p>
            </article>
        `;
    }
}

featuredProjectsHTML = featuredProjectsHTML + '</div></section>';
document.write(featuredProjectsHTML);
*/

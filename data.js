// Week 4 JavaScript Portfolio Project - Data Organization
// Students will learn to organize their portfolio data using JavaScript objects and arrays

const portfolio = {
    // Personal information object
    owner: {
        name: "Arno Demearteau",
        title: "Graduate Student, MS Berkeley",
        email: "ademarteau@berkeley.edu",
        location: "Berkeley, CA",
        bio: "Graduate student at UC Berkeley learning to build for the web. I'm interested in how data and interface design come togethe and I'm currently working through JavaScript fundamentals by turning my static portfolio into a data driven one."
    },

    // Skills as an array 
    skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Python",
        "Git & GitHub",
        "Data analysis"
    ],

    // Projects as array of objects
    projects: [
        {
            title: "Static Portfolio Site",
            description: "My Week 3 portfolio: a hand-written multi-section page built with semantic HTML and a CSS layout, no JavaScript. This is the version the current project replaces.",
            technologies: ["HTML", "CSS"], // Array of technologies used
            completionDate: "2026-09-14",  // When you completed it
            featured: false                 // Is this a featured project?
        },
        {
            title: "Data-Driven Portfolio",
            description: "This project. The same portfolio, but every section is generated from one JavaScript object using template literals and for loops, so updating content means editing data instead of markup.",
            technologies: ["HTML", "CSS", "JavaScript"],
            completionDate: "2026-09-28",
            featured: true
        },
        {
            title: "Course Data Explorer",
            description: "A small Python script that reads a CSV of course records and prints summary statistics, which is what got me interested in presenting data on the web in the first place.",
            technologies: ["Python", "Pandas"],
            completionDate: "2026-08-30",
            featured: true
        }
    ],

    // Contact and availability information
    availability: {
        freelance: false,
        fullTime: false,
        partTime: true
    }
};

// Let's explore our data structure in the console
console.log("=== PORTFOLIO DATA EXPLORER ===");
console.log("Full portfolio object:", portfolio);

console.log("Owner name:", portfolio.owner.name);
console.log("Email:", portfolio.owner.email);

console.log("First skill:", portfolio.skills[0]);
console.log("Number of skills:", portfolio.skills.length);
console.log("Number of projects:", portfolio.projects.length);

console.log("Second project:", portfolio.projects[1]);
console.log("Second project's title:", portfolio.projects[1].title);

console.log("Tech used by first project:", portfolio.projects[0].technologies);

console.log("Available for freelance?", portfolio.availability.freelance);
console.log("Available for part-time?", portfolio.availability.partTime);

let summary = `${portfolio.owner.name} is a ${portfolio.owner.title} with ${portfolio.skills.length} skills and ${portfolio.projects.length} projects.`;
console.log("Summary:", summary);

for (let i = 0; i < portfolio.projects.length; i++) {
    let project = portfolio.projects[i];
    if (project.featured === true) {
        console.log("⭐ Featured:", project.title);
    }
}

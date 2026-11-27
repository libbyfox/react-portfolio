import Project from "../components/Project.jsx";
import paperPuppets from "../assets/lifesize.jpg";
import recipes from "../assets/responsive-design-screenshot.jpg";
import puppetShow from "../assets/puppet-show-screenshot.png";
import { useState } from "react";
import Popup from "../components/Popup.jsx";


function Portfolio() {
    const [showProjects, setShowProjects] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
     const [search, setSearch] = useState("");
    const handleProjectClick = (project) => {
    setSelectedProject(project);
   
};
const projects = [
    {
        name: "Life-Size Paper Puppets",
        description: "An informational website showing visitors how to create life-size paper puppets, with materials and step-by-step instructions.",
        githubLink: "https://github.com/libbyfox/life-size-paper-puppets",
        screenshot: paperPuppets,
        technologies: "HTML, CSS, Bootstrap",
        tags: ["HTML", "CSS", "Bootstrap"],
        learned: "How to use Bootstrap classes to create a webpage layout and customise it with my own CSS.",
        challenges: "Combining Bootstrap styles with my own CSS to create a unique design."
    },
    {
        name: "Recipes – Responsive Design",
        description: "A responsive recipe website recreated from a Figma design, adapting to different screen sizes using Flexbox and media queries.",
        githubLink: "https://github.com/libbyfox/responsive-design-assignment",
        screenshot: recipes,
        technologies: "HTML, CSS, Flexbox",
        tags: ["HTML", "CSS", "Flexbox"],
        learned: "How to create responsive layouts using Flexbox, media queries and responsive CSS properties.",
        challenges: "Recreating a Figma design and making it look good across different screen sizes."
    },
    {
        name: "Puppet Show",
        description: "An event invitation webpage featuring custom SVG graphics, CSS transitions, keyframe animations and Animate.css effects.",
        githubLink: "https://github.com/libbyfox/svg-and-animation-project",
        screenshot: puppetShow,
        technologies: "HTML, CSS, SVG, Animate.css",
        tags: ["HTML", "CSS", "SVG", "Animate.css"],
        learned: "How to create SVG graphics and use CSS transitions, keyframe animations and Animate.css.",
        challenges: "Creating SVG graphics and combining different animation techniques in one webpage."
    }
];
    return (
        <div>
            <h1>Portfolio</h1>
            <p>Here are my projects.</p>

            <button onClick={() => setShowProjects(true)}>
             Preview Projects
            </button>

{showProjects ? (
    <div>

<input
    type="text"
    placeholder="Search projects..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
/>
{projects
   .filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase()) ||
    project.tags.some((tag) =>
        tag.toLowerCase().includes(search.toLowerCase())
    )
)
    .map((project) => (    <Project
        key={project.name}
        name={project.name}
        description={project.description}
        githubLink={project.githubLink}
        screenshot={project.screenshot}
        technologies={project.technologies}
        learned={project.learned}
        challenges={project.challenges}
        onClick={() => handleProjectClick(project)}
    />
))}
               
        </div>
) : null}
              {selectedProject && (
    <Popup
        name={selectedProject.name}
        screenshot={selectedProject.screenshot}
        description={selectedProject.description}
        githubLink={selectedProject.githubLink}
        technologies={selectedProject.technologies}
        learned={selectedProject.learned}
        challenges={selectedProject.challenges}
        onClose={() => setSelectedProject(null)}
/>
        
)}
                </div>

    );

}

export default Portfolio;
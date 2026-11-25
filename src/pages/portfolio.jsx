import Project from "../components/Project.jsx";
import paperPuppets from "../assets/lifesize.jpg";
import recipes from "../assets/responsive-design-screenshot.jpg";
import puppetShow from "../assets/puppet-show-screenshot.png";
import { useState } from "react";

function Portfolio() {
    const [showProjects, setShowProjects] = useState(false);
    return (
        <div>
            <h1>Portfolio</h1>
            <p>Here are my projects.</p>

            <button onClick={() => setShowProjects(true)}>
             Preview Projects
            </button>

{showProjects ? (
    <div>

            <Project
                name="Life-Size Paper Puppets"
                description="An informational website showing visitors how to create life-size paper puppets, with materials and step-by-step instructions."
                githubLink="https://github.com/libbyfox/life-size-paper-puppets"
                screenshot={paperPuppets}
                technologies="HTML, CSS, Bootstrap"
                learned="How to use Bootstrap classes to create a webpage layout and customise it with my own CSS."
                challenges="Combining Bootstrap styles with my own CSS to create a unique design."
            />

            <Project
                name="Recipes – Responsive Design"
                description="A responsive recipe website recreated from a Figma design, adapting to different screen sizes using Flexbox and media queries."
                githubLink="https://github.com/libbyfox/responsive-design-assignment"
                screenshot={recipes}
                technologies="HTML, CSS, Flexbox"
                learned="How to create responsive layouts using Flexbox, media queries and responsive CSS properties."
                challenges="Recreating a Figma design and making it look good across different screen sizes."
            />

            <Project
                name="Puppet Show"
                description="An event invitation webpage featuring custom SVG graphics, CSS transitions, keyframe animations and Animate.css effects."
                githubLink="https://github.com/libbyfox/svg-and-animation-project"
                screenshot={puppetShow}
                technologies="HTML, CSS, SVG, Animate.css"
                learned="How to create SVG graphics and use CSS transitions, keyframe animations and Animate.css."
                challenges="Creating SVG graphics and combining different animation techniques in one webpage."
            />
        </div>
) : null}
                </div>

    );

}

export default Portfolio;
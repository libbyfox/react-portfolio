import Project from "./components/Project.jsx";
import paperPuppets from "./assets/lifesize.jpg";
import recipes from "./assets/responsive-design-screenshot.jpg";
import puppetShow from "./assets/puppet-show-screenshot.png";

function App() {
    return (
        <div>
            <h1>My Portfolio</h1>
            <p>Welcome to my developer portfolio!</p>
            <Project
    name="Life-Size Paper Puppets"
    description="An informational website showing visitors how to create life-size paper puppets, with materials and step-by-step instructions."
    githubLink="https://github.com/libbyfox/life-size-paper-puppets"
    screenshot={paperPuppets}
/>

<Project
    name="Recipes – Responsive Design"
    description="A responsive recipe website recreated from a Figma design, adapting to different screen sizes using Flexbox and media queries."
    githubLink="https://github.com/libbyfox/responsive-design-assignment"
    screenshot={recipes}
/>

<Project
    name="Puppet Show"
    description="An event invitation webpage featuring custom SVG graphics, CSS transitions, keyframe animations and Animate.css effects."
    githubLink="https://github.com/libbyfox/svg-and-animation-project"
    screenshot={puppetShow}
/>
        </div>
    );
}

export default App;
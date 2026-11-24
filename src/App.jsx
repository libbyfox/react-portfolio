import Project from "./components/Project.jsx";

function App() {
    return (
        <div>
            <h1>My Portfolio</h1>
            <p>Welcome to my developer portfolio!</p>
            <Project
    name="Life-Size Paper Puppets"
    description="An informational website showing visitors how to create life-size paper puppets, with materials and step-by-step instructions."
/>
<Project
    name="Recipes – Responsive Design"
    description="A responsive recipe website recreated from a Figma design, adapting to different screen sizes using Flexbox and media queries."
/>
<Project
    name="Puppet Show"
    description="An event invitation webpage featuring custom SVG graphics, CSS transitions, keyframe animations and Animate.css effects."
/>
        </div>
    );
}

export default App;
import "./project.css";

function Project(props) {
    return (
        <div className="project">
            <div className="project-info">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <a href={props.githubLink}>View on GitHub</a>
                <p>Technologies: {props.technologies}</p>
                <p>What I learned: {props.learned}</p>
                <p>Challenges: {props.challenges}</p>
            </div>

            <div className="project-image">
                <img src={props.screenshot} alt={props.name} />
            </div>
        </div>
    );
}

export default Project;
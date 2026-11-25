function Project(props) { 
       return (
        <div className="project">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <a href={props.githubLink}>View on GitHub</a>
            <img src={props.screenshot} alt={props.name} />
            <p>Technologies: {props.technologies}</p>
            <p>What I learned: {props.learned}</p>
            <p>Challenges: {props.challenges}</p>
        </div>
    );
}

export default Project;
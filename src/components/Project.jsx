function Project(props) { 
       return (
        <div className="project">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <a href={props.githubLink}>View on GitHub</a>
            <img src={props.screenshot} alt={props.name} />
        </div>
    );
}

export default Project;
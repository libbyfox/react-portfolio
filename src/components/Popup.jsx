import "./Popup.css";

function Popup(props) {
    return (
        <div className="popup">
            <h2>{props.name}</h2>
            <img src={props.screenshot} alt={props.name} />
            <p>{props.description}</p>
            <a href={props.githubLink}>View on GitHub</a>
            <p>Technologies: {props.technologies}</p>
            <p>What I learned: {props.learned}</p>
            <p>Challenges: {props.challenges}</p>
            <button onClick={props.onClose}>Close</button>
        </div>
    );
}

export default Popup;
//Style
import "./progressBar.scss"

const ProgressBar = ({ score }) => {

    //Style della barra di progressione che viene aggiornata in base allo score
    const progressBarStyleUpgrade = {
        width: score + "0%"
    };
    return (
        <div className="progress-bar">
            <div className="progress-bar-user" style={progressBarStyleUpgrade}></div>
        </div>
    );
}

export default ProgressBar;
//Style
import "./timerAndCount.scss"

const TimerAndCounter = ({ score, timer }) => {
    return (
        <div className="answer-counter-timer">
            <h4>{score + 1}/10</h4>
            <div className="timer">
                <h3>{timer}s</h3>
            </div>
        </div>
    );
}

export default TimerAndCounter;
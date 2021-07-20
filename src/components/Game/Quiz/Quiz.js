

import { useState, useEffect } from "react";
//components
import ProgressBar from "./progressbar/ProgressBar";
import TimerAndCounter from "./timerAndCount/TimerAndCounter";
import Answer from "./answer/Answer";
import Popup from "./popup/Popup";
import Help from "../help/Help";

//Icona
import exitIcon from "./img/icon_exit.svg";

//style
import "../game.scss";


const Quiz = ({ step, setStep, questions }) => {

    //State progresso domande
    const [score, setScore] = useState(0);
    //state per il timer
    const [timer, setTimer] = useState(20);
    //state per far appire il popup per uscire
    const [popupExitStatus, setPopupExitStatus] = useState(false);
    //State per far apparire il popup di sconfitta quando si sbaglia una domanda
    const [popupWrongStatus, setPopupWrongStatus] = useState(false);
    //State per far apparire il popup di sconfitta quando scade il tempo
    const [popupTimeoutStatus, setPopupTimeoutStatus] = useState(false);
    //State per abilitare l'aiuto
    const [helpTime, setHelpTime] = useState(true)


    //Funzione che ogni secondo toglie 1 al timer se maggiore di 0, altrimenti appare il popup del gameover
    useEffect(() => {
        if (timer <= 0) {
            setPopupTimeoutStatus(true);
        } else {
            const cound =
                setTimeout(() => {
                    setTimer(timer - 1)
                }, 1000);
            return () => {
                clearTimeout(cound);
            };
        }
    }, [timer])

    return (
        <>
            <div className="exit-game" onClick={() => setPopupExitStatus(true)}>
                <img src={exitIcon} alt="Exit icon" />
            </div>
            < ProgressBar score={score} />
            < TimerAndCounter score={score} timer={timer} />
            {questions && < Answer score={score} setScore={setScore} questions={questions} step={step} setStep={setStep} timer={timer} setTimer={setTimer} setPopupWrongStatus={setPopupWrongStatus} setPopupTimeoutStatus={setPopupTimeoutStatus} />}
            < Help helpTime={helpTime} setHelpTime={setHelpTime} timer={timer} setTimer={setTimer} />
            < Popup popupExitStatus={popupExitStatus} popupTimeoutStatus={popupTimeoutStatus} popupWrongStatus={popupWrongStatus} setPopupExitStatus={setPopupExitStatus} step={step} setStep={setStep} />
        </>
    );
}

export default Quiz;
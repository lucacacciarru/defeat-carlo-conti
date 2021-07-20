import { useState } from "react";

//Style
import "./answer.scss"


const Answer = ({ score, setScore, questions, setStep, setPopupWrongStatus, timer, setTimer }) => {
    //Status del bottone next, per passare alla prossima domanda
    const [confirmStatus, setConfirmStatus] = useState(false)
    //Valore del pulsante selezionato
    const [answerChosen, setAnswerChosen] = useState('')

    //Cambiare lo state della variabile in base alla risposta cliccata, ciascuna ha una lettera differente. 
    //Una volta fatto ciò apparirà il pulsante per confermare la scelta
    const selectAnswer = (option) => {
        setAnswerChosen(option);
        setConfirmStatus(true)
    }

    //Se la risposta dovesse essere corretta lo score aumenterà di 1, visualizzando la domanda successiva e facendo tornare il timer al suo valore iniziale
    //Se tutte le domande dovessero essere corrette, viene cambiato il valore di 'Step', visualizzando la schermata di vittoria
    const checkAnswer = () => {
        if (questions[score].correctAnswers === answerChosen) {
            if (score === questions.length - 1) {
                setStep('win')
            }
            else {
                setScore(score + 1);
                setAnswerChosen('')
                setConfirmStatus(false)
                setTimer(20)
            }
        }
        //In caso di risposta sbagliata verrà visualizzato un popup con l'avviso di sconfitta
        else {
            setTimer(0)
            setPopupWrongStatus(true)
        }
    }

    return (
        <div className="answer-question-container">
            <div className="answer">
                {questions ? <p>{questions[score].question}</p> : <p>Errore</p>}
            </div>
            <div className="questions-group">

                <button onClick={() => selectAnswer("A")} className={`question ${answerChosen === "A" ? "correct" : ""}`}>{questions[score].answers[0]}</button>
                <button onClick={() => selectAnswer("B")} className={`question ${answerChosen === "B" ? "correct" : ""}`}>{questions[score].answers[1]}</button>
                <button onClick={() => selectAnswer("C")} className={`question ${answerChosen === "C" ? "correct" : ""}`}>{questions[score].answers[2]}</button>
                <button onClick={() => selectAnswer("D")} className={`question ${answerChosen === "D" ? "correct" : ""}`}>{questions[score].answers[3]}</button>

                <button onClick={checkAnswer} className='next' disabled={!confirmStatus}>Conferma</button>
            </div>
        </div >
    )
}

export default Answer;
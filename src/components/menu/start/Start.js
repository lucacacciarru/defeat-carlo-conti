import { useState } from "react";
//Componente del modal per visualizzare le istruzioni
import IstructionModal from "../istuctionModal/IstructionModal";
//Style
import './start.scss'

const Start = ({ step, setStep }) => {

    //Variabile che in base al suo valore permette di visualizzare il modal
    const [modalStatus, setModalStetus] = useState(false)

    return (
        <section className="start-container">
            <h1><span>Defeat</span> Carlo Conti  👑 </h1>
            <p>Riuscirai a distruggere il regno del conduttore televisivo? Gioca a questo quiz, 10 domande difficilissime per riuscire in questo intento</p>
            <div className="button-container">
                <button className='cta' onClick={() => { setStep('game') }}>Inizia</button>
                <button onClick={() => setModalStetus(true)} className='cta inverse'>Istruzioni</button>
            </div>
            {modalStatus && < IstructionModal setModalStatus={setModalStetus} />}
        </section>
    );
}

export default Start;
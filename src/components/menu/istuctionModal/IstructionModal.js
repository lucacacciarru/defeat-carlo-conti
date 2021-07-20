import { useState } from "react";

//Immagini per le istruzioni
import stepOneImg from "./img/modal_step1.png";
import stepTwoImg from "./img/modal_step2.png";
import stepThreeImg from "./img/modal_step3.png";
import stepFourImg from "./img/modal_step4.png";

//Icon
import exitIcon from "./img/icon_exit.svg";

//Style
import './istructionModal.scss'


const IstructionModal = ({ setModalStatus }) => {
    //state del Modal che permette di visualizzare i contenuti del modal andando avanti o indietro
    const [stepModal, setStepModal] = useState(0)
    //Array con le varie immagini e testi in base allo step del modal
    const dataModal = [
        {
            img: stepOneImg,
            text: "Per vincere devi rispondere a 10 domande correttamente! Hai a disposizione 20 secondi per ciascuna domanda."
        },
        {
            img: stepTwoImg,
            text: "Quando sei sicuro della risposta, seleziona una domanda cliccandoci sopra, una volta fatto clicca su conferma per andare avanti"
        },
        {
            img: stepThreeImg,
            text: "Se il timer dovesse arrivare a 0 oppure dovessi sbagliare la risposta, avrai perso e dovrai ricominciare da capo!"
        },
        {
            img: stepFourImg,
            text: "Hai a disposizione un aiuto che ti permette di avere 20 secondi aggiuntivi per la domanda corrente. Attenzione, puoi usarlo solo una volta!"
        }
    ]
    return (
        <section className='istruction-modal-container'>
            <div className="istruction-modal">
                <div onClick={() => setModalStatus(false)} className="istruction-modal-exit">
                    <img src={exitIcon} alt="Icon exit" />
                </div>
                <ul className="step-number">
                    {/* In base al valore dello step verrà "illuminato" il riquadro corrispondente */}
                    <li className={stepModal === 0 ? 'active' : ''}>1</li>
                    <li className={stepModal === 1 ? 'active' : ''}>2</li>
                    <li className={stepModal === 2 ? 'active' : ''}>3</li>
                    <li className={stepModal === 3 ? 'active' : ''}>4</li>
                </ul>
                <div className="istruction-modal-cover">
                    <img src={dataModal[stepModal].img} alt="" />
                </div>
                <div className="istruction-modal-body">
                    <p>{dataModal[stepModal].text}</p>
                </div>

                <div className="button-group">
                    {/* Se lo step dovrà essere pari a 0 verrà disabilito il pulsante per tornare indietro */}
                    {stepModal === 0 ?
                        <button disabled >Indietro</button>
                        :
                        <button onClick={() => setStepModal(stepModal - 1)}>Indietro</button>
                    }
                    {/* Se il valore dello state step è ugauale alla lunghezza dell'array verrà visualizzato un pulsante per chiudere il Modal */}
                    {stepModal === dataModal.length - 1 ?
                        <button onClick={() => setModalStatus(false)}>Chiudi</button>
                        :
                        <button onClick={() => setStepModal(stepModal + 1)}>Avanti</button>
                    }
                </div>
            </div>
        </section>
    );
}

export default IstructionModal;
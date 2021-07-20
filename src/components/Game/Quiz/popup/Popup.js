//Components
import PopupExit from "./PopupExit";
import PopupGameOver from "./PopupGameOver";
//Style
import './popup.scss';
//Img
import timeoutIll from "./img/timeout_illustration.svg";
import wrongIll from "./img/explosion_illustration.svg";

const Popup = ({ setPopupExitStatus, popupExitStatus, step, setStep, popupWrongStatus, popupTimeoutStatus }) => {
    // verraà ritornato il popup in base allo state d'appartenza modificato 
    return (
        <>
            {popupExitStatus && <PopupExit setPopupExitStatus={setPopupExitStatus} setStep={setStep} />}
            {popupWrongStatus && <PopupGameOver step={step} setStep={setStep} title={'Risposta sbagliata'} textBody={'Ritenta, battiamo insieme Carlo conti'} illustration={wrongIll} />}
            {/* Se il Popup di risposta errato dovesse essere già attivo quello del timer non verrà visualizzato anche se arriva a 0 */}
            {(popupTimeoutStatus && !popupWrongStatus) && <PopupGameOver step={step} setStep={setStep} title={'Tempo scaduto'} textBody={'Occhio al timer, fai in fretta!'} illustration={timeoutIll} />}
        </>
    );
}

export default Popup;
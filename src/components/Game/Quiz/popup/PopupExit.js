import gameOverIll from "./img/exit_illustration.svg"

const PopupExit = ({ setPopupExitStatus, setStep }) => {

    return (
        <section className='popup-container'>
            <div className="popup">
                <div className="popup-image">
                    <img src={gameOverIll} alt="" />
                </div>
                <h2>Sei sicuro di voler uscire?</h2>
                <p>Dovrai riniziare da capo tutto il quiz!</p>
                <div className="btn-group">
                    <button onClick={() => setPopupExitStatus(false)}>Annulla</button>
                    <button onClick={() => setStep('menu')}>Abbandona</button>
                </div>
            </div>
        </section>
    )

}

export default PopupExit;
const PopupGameOver = ({ setStep, title, textBody, illustration }) => {
    return (
        <section className='popup-container'>
            <div className="popup">
                <div className="popup-image">
                    <img src={illustration} alt="" />
                </div>
                <h2>{title}</h2>
                <p>{textBody}</p>
                <div className="btn-group">
                    <button onClick={() => setStep('menu')}>Riprova</button>
                </div>
            </div>
        </section>
    );
}

export default PopupGameOver;
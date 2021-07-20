import "./help.scss"

const Help = ({ helpTime, setHelpTime, setTimer, timer }) => {
    //Modificare lo state del help per disabilitarlo e aggiungere i 20 secondi al timer
    const helpHandler = () => {
        setHelpTime(false)
        setTimer(timer + 20)
    }
    return (
        <aside className='help-container'>
            <h2>Aiuti</h2>
            <button onClick={helpHandler} className="help" disabled={!helpTime}>
                <h4>+20s</h4>
            </button>
        </aside>
    );
}

export default Help;
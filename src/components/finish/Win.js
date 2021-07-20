import { useEffect, useState, useRef } from 'react';
//package che permetti di creare i "coriandoli"
import Confetti from 'react-confetti';

//Style 
import "./win.scss"

const Win = ({ setStep }) => {
    //Variabili che contengono la larghezza e l'altezza per il component "Confetti"
    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null);
    //Prendere come riferimento il componente per poi modificare i valore
    const confettiRef = useRef(null);

    //Inserire l'altezza e la largezza in base allo schermo
    useEffect(() => {
        setHeight(confettiRef.current.clientHeight);
        setWidth(confettiRef.current.clientWidth);
    }, [])

    return (
        <section className="win-container" ref={confettiRef}>
            <h1>Congratulazioni, hai vinto!</h1>
            <p>Carlo Conti is dead, long life Carlo Conti</p>
            <button onClick={() => setStep('menu')} className='cta'>Torna alla home</button>
            <Confetti width={width} height={height} numberOfPieces={200} opacity={0.8} />
        </section>
    );
}

export default Win;
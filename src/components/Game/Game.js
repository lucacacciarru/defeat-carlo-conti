import Quiz from "./Quiz/Quiz";
import useFetch from '../../util/useFetch';
import Loading from './loading/Loading';
import NoData from './nodata/NoData'

//Style
import "./game.scss"


const Game = ({ step, setStep }) => {
    //Utilizzo di useFetch per ricevere i dati dal database, in caso di errore o caricamento vengono renderizzati differenti componenti
    const { data: questions, isPending, error } = useFetch('http://localhost:8000/questions');

    return (
        <section className="game-container">
            {/* Verrà renderizzato il componente in base allo stato dei dati, in ordine: se stanno caricando, se hanno caricato e se ci dovesse essere un errore */}
            {isPending && <Loading />}
            {questions && <Quiz step={step} setStep={setStep} s questions={questions} />}
            {error && < NoData setStep={setStep} />}
        </section>
    );
}
export default Game;
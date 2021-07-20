//img
import noDataIll from './img/nodata.svg';

//style
import "./noData.scss"

const NoData = ({ setStep }) => {
    return (
        <section className='nodata-container'>
            <div className="nodata-cover">
                <img src={noDataIll} alt="Nodata Illustation" />
            </div>
            <div className="nodata-body">
                <h1>Ops, c'è un problema</h1>
                <p>I dati non vengono caricati, prova a ricaricare la pagina</p>
            </div>
            <button onClick={() => setStep('menu')} className='cta'>Torna alla home</button>
        </section>
    );
}

export default NoData;
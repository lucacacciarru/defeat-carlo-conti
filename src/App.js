import { useState } from 'react';
import Win from './components/finish/Win';
import Start from './components/menu/start/Start';
import Game from './components/Game/Game';
import './components/global.scss';


function App() {
  //Utilizzo degli state per renderzirrare i vari componenti in base ai vari step
  //Cambiando il valore di step verranno visualizzati i componenti voluti
  const [step, setStep] = useState("menu")
  return (
    <div className="App">
      {step === "menu" && < Start step={step} setStep={setStep} />}
      {step === "game" && < Game step={step} setStep={setStep} />}
      {step === "win" && < Win setStep={setStep} />}
    </div>
  );
}

export default App;

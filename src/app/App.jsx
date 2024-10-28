import { useState } from 'react';
import Header from '../components/Header';
import Controls from '../components/Controls';
import TextBox from '../components/TextBox';
import Button from '../components/Button';
import '../assets/App/styles.css';

const App = () => {
  const [text, setText] = useState('Tell me what to say by typing in the box!');
  const synth = window.speechSynthesis;
  const voiceOptions = synth.getVoices();

  const handleClear = () => {
    setText('');
  };

  const handlePlay = () => {
    if(synth.paused){
      synth.resume();
    } else {
      synth.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      synth.speak(utterance);
    }
  };

  const handlePause = () => {
    if(!synth.paused && synth.speaking) {
      synth.pause();
    }
  };

  const handleStop = () => {
    synth.cancel();
  };

  return (
    <>
      <div className='app-container'>
        <Header title='Speaky' subText='Simple text to speech'/>
        <Controls voiceOptions={voiceOptions} />
        <TextBox text={text} setText={setText}/>
        <Button label='Clear' onClick={handleClear} />
        <Button label='Play' onClick={handlePlay} />
        <Button label='Pause' onClick={handlePause} />
        <Button label='Stop' onClick={handleStop} />
      </div>
    </>
  );
}

export default App;

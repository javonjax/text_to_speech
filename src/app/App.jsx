import { useState } from 'react';
import Header from '../components/Header';
import Controls from '../components/Controls';
import TextBox from '../components/TextBox';
import Button from '../components/Button';
import Sliders from '../components/Sliders';
import Dropdown from '../components/Dropdown';
import RangeSlider from '../components/RangeSlider';
import '../assets/App/styles.css';

const App = () => {
  const synth = window.speechSynthesis;
  const voiceOptions = synth.getVoices();
  const [text, setText] = useState('Tell me what to say by typing in the box!');
  const [voice, setVoice] = useState(voiceOptions[0]);
  const [volume, setVolume] = useState(0.5);
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);

  console.log('voice:', voice)
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
        <Header title='Speaky' subText='Simple text to speech' />
        <Controls>
          <Dropdown label="Voice" voice={voice} options={voiceOptions} setVoice={setVoice} />
          <Sliders>
            <RangeSlider type="Volume" />
            <RangeSlider type="Pitch" />
            <RangeSlider type="Speed" />
          </Sliders>
        </Controls>
        <TextBox text={text} setText={setText} />
        <Button label='Clear' onClick={handleClear} />
        <Button label='Play' onClick={handlePlay} />
        <Button label='Pause' onClick={handlePause} />
        <Button label='Stop' onClick={handleStop} />
      </div>
    </>
  );
}

export default App;

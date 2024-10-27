import { useState } from 'react';
import Header from '../components/header';
import Controls from '../components/Controls';
import TextBox from '../components/TextBox';
import Button from '../components/Button';
import '../assets/App/styles.css';

const App = () => {
  const [text, setText] = useState('Tell me what to say by typing in the box!');

  const handleClear = () => {
    setText('');
  }

  return (
    <>
      <div className='app-container'>
        <Header title="Speaky" />
        <Controls />
        <TextBox text={text} setText={setText}/>
        <Button label='Clear' onClick={handleClear} />
      </div>
    </>
  );
}

export default App;

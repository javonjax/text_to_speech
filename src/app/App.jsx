import { useState } from 'react';
import Header from '../components/header';
import Controls from '../components/Controls';
import TextBox from '../components/TextBox';
import '../assets/App/styles.css';

const App = () => {
  const [text, setText] = useState('Tell me what to say by typing in the box!');

  return (
    <>
      <div className='app-container'>
        <Header title="Speaky" />
        <Controls />
        <TextBox text={text} setText={setText}/>
      </div>
    </>
  );
}

export default App;

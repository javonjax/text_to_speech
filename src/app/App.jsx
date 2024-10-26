import { useState } from 'react';
import Header from '../components/header';
import Content from '../components/Content';
import '../assets/App/styles.css';

function App() {
  return (
    <>
      <div className='app-container'>
        <Header title="Speaky" />
        <Content />
      </div>
    </>
  );
}

export default App;

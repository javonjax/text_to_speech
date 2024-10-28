import React from 'react';
import { useState } from 'react';
import '../assets/Controls/styles.css';
import Settings from './Settings';
import Dropdown from './Dropdown';
import RangeSlider from './RangeSlider';

const Controls = ({ voiceOptions}) => {
  return (
    <>
      <div className="tts-container">
        <Dropdown label="Voice" options={voiceOptions} />
        <Settings>
          <RangeSlider option="Volume" />
          <RangeSlider option="Pitch" />
          <RangeSlider option="Speed" />
        </Settings>
        <div className="playback-controls">
          <button>Play</button>
          <button>Pause</button>
          <button>Stop</button>
        </div>
      </div>
    </>
  );
};

export default Controls;

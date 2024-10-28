import React from 'react';
import { useState } from 'react';
import '../assets/Controls/styles.css';
import Settings from './Sliders';
import Dropdown from './Dropdown';
import RangeSlider from './RangeSlider';

const Controls = ({ children }) => {
  return (
    <>
      <div className="tts-container">
        { children }
      </div>
    </>
  );
};

export default Controls;

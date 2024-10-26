import '../assets/RangeSlider/styles.css';

const RangeSlider = ({ option }) => {
  return (
    <div className='range-slider'>
      <input type='range' id={`${option}-control`}></input>
      <label htmlFor={`${option}-control`}>{option}</label>
    </div>
  );
};

export default RangeSlider;

import '../assets/RangeSlider/styles.css';

const RangeSlider = ({ type }) => {
  return (
    <div className='range-slider'>
      <input type='range' id={`${type}-control`}></input>
      <label htmlFor={`${type}-control`}>{type}</label>
    </div>
  );
};

export default RangeSlider;

import '../assets/Dropdown/styles.css';

const Dropdown = ({ label, options }) => {
  return (
    <div className='dropdown'>
      <label htmlFor={`${label}-dropdown`}>{label}</label>
      <select id={`${label}-dropdown`}>
        {options.map((option) => (
          <option 
            key={option.name} 
            value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

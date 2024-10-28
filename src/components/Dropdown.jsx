import '../assets/Dropdown/styles.css';

const Dropdown = ({ label, options, setVoice }) => {
  const handleVoiceChange = (e) => {
    const newVoice = options.find((voice) => voice.name === e.target.value);
    setVoice(newVoice);
  };

  return (
    <div className='dropdown'>
      <label htmlFor={`${label}-dropdown`}>{label}</label>
      <select id={`${label}-dropdown`} onChange={(e) => handleVoiceChange(e)}>
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

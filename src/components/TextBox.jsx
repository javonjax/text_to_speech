import '../assets/TextBox/styles.css';

const TextBox = ({ text, setText }) => {
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <textarea
        className="text-box"
        value={text}
        onChange={(e) => handleTextChange(e)}
      ></textarea>
    </>
  );
};

export default TextBox;

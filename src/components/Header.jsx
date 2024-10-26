import '../assets/Header/styles.css';

const Header = ({ title = 'Text to Speech' }) => {
  return (
    <>
      <header>
        {title}
        <p>Simple text to speech</p>
      </header>
    </>
  );
};

export default Header;

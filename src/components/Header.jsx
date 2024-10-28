import '../assets/Header/styles.css';

const Header = ({ title, subText }) => {
  return (
    <>
      <header>
        {title}
        <p>{subText}</p>
      </header>
    </>
  );
};

export default Header;

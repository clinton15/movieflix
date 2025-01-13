import logo from "../assets/logo.png";

const Header = () => {
  return <div className="absolute w-48 left-32 z-10">
    <img src={logo} alt="netflix-logo" />
  </div>;
};

export default Header;

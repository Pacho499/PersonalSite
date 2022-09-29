import logo from "../images/logo.png";
import "../style/Header.scss";
import CV from "../CVPortfolio.pdf";
const Header = () => {
  return (
    <div id="headerContainer">
      <div className="logo">
        <img height="100px" src={logo} alt="logo" />
      </div>
      <div className="linkContainer">
        <ul>
          <a href="#skills">Competenze</a>
          <a href="#Contact">Contattami</a>
          <a href={CV} download="LorenzoPalumboCV">
            Scarica CV
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Header;

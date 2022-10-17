import logo from "../images/logo.png";
import "../style/Header.scss";
import CV from "../CVPortfolio.pdf";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const Header = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(true);
  const openMenu = () => {
    setHamburgerMenu(!hamburgerMenu);
  };
  return (
    <div id="headerContainer">
      <div className="logo">
        <img height="100px" src={logo} alt="logo" />
      </div>
      <div className="linkContainer">
        <ul className="menu">
          <a href="#skills">Competenze</a>
          <a href="#Contact">Contattami</a>
          <a href={CV} download="LorenzoPalumboCV">
            Scarica CV
          </a>
        </ul>
        {hamburgerMenu ? (
          <FontAwesomeIcon
            id="hamburgerMenu"
            style={{ paddingRight: "20px" }}
            icon={faBars}
            size="2x"
            onClick={openMenu}
          />
        ) : (
          <ol>
            <FontAwesomeIcon
              style={{ paddingTop: "20px" }}
              icon={faBars}
              size="2x"
              onClick={openMenu}
            />
            <a onClick={openMenu} href="#skills">
              Competenze
            </a>
            <a onClick={openMenu} href="#Contact">
              Contattami
            </a>
            <a onClick={openMenu} href={CV} download="LorenzoPalumboCV">
              Scarica CV
            </a>
          </ol>
        )}
      </div>
    </div>
  );
};

export default Header;

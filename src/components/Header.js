import CV from "../CVPortfolio.pdf";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const Header = () => {
  const url = process.env.PUBLIC_URL
  const [hamburgerMenu, setHamburgerMenu] = useState(true);
  const openMenu = () => {
    setHamburgerMenu(!hamburgerMenu);
  };
  return (
    <div className='flex fixed w-full top-0 z-10 justify-between border-b-4 border-pink bg-main'>
      <div className="mb-4">
        <img className="h-24 ml-16 mt-4" height="100px" src={url + ('/images/logo.png')} alt="logo" />
      </div>
      <div className="flex items-center text-2xl">
        <ul className="flex justify-around w-[600px] max-laptopXS:hidden">
          <a className="MenuButton" href="#skills">Competenze</a>
          <a className="MenuButton" href="#Contact">Contattami</a>
          <a className="MenuButton" href={CV} download="LorenzoPalumboCV">
            Scarica CV
          </a>
        </ul>
        {hamburgerMenu ? (
          <FontAwesomeIcon
            className="laptopXS:hidden"
            id="hamburgerMenu"
            style={{ paddingRight: "20px" }}
            icon={faBars}
            size="2x"
            onClick={openMenu}
          />
        ) : (
          <ol className="flex flex-col bg-green absolute border-l-4 w-[40vw] border-black right-0 bottom-0 ">
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

import "../style/Footer.scss";
import linkedin from "../images/linkedin.webp";
import git from "../images/git.png";
import instagram from "../images/instagram.png";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="contacts">
        <h5>contatti</h5>
        <p>lorenzopalumbo.dev@gmail.com</p>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/lorenzo-palumbo-938b0724a/"
            target="_blank"
            rel="noreferrer"
          >
            <img height="40px" src={linkedin} alt="social" />
          </a>
          <a
            href="https://www.instagram.com/pacho_palumbo/"
            target="_blank"
            rel="noreferrer"
          >
            <img height="40px" src={instagram} alt="insta" />
          </a>
          <a
            href="https://github.com/Pacho499"
            target="_blank"
            rel="noreferrer"
          >
            <img height="40px" src={git} alt="git" />
          </a>
        </div>
      </div>

      <div>
        <p className="rights">
          LorenzoPalumboDeveloper &copy; all rights reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;

import "../style/Footer.scss";

const Footer = () => {
  const url = process.env.PUBLIC_URL
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
            <img height="40px" src={url + ('/images/linkedin.webp')} alt="social" />
          </a>
          <a
            href="https://www.instagram.com/pacho_palumbo/"
            target="_blank"
            rel="noreferrer"
          >
            <img height="40px" src={url + ('/images/instagram.png')} alt="insta" />
          </a>
          <a
            href="https://github.com/Pacho499"
            target="_blank"
            rel="noreferrer"
          >
            <img height="40px" src={url + ('/images/git.png')} alt="git" />
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

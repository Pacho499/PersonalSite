import '../style/Footer.scss'
const Footer = () => {
  const url = process.env.PUBLIC_URL
  return (
    <div className="border-pink border-t-4 text-black bg-main flex justify-around items-center py-8">
      <div className="contacts">
        <h5 className='text-2xl mb-2 font-bold'>Contatti</h5>
        <p className='text-xl mb-2'>lorenzopalumbo.dev@gmail.com</p>
        <div className="flex justify-around">
          <a
            href="https://www.linkedin.com/in/lorenzo-palumbo-938b0724a/"
            target="_blank"
            rel="noreferrer"
          >
            <img style={{height:'40px'}} src={url + ('/images/linkedin.webp')} alt="social" />
          </a>
          <a
            href="https://www.instagram.com/pacho_palumbo/"
            target="_blank"
            rel="noreferrer"
          >
            <img style={{height:'40px'}} src={url + ('/images/instagram.png')} alt="insta" />
          </a>
          <a
            href="https://github.com/Pacho499"
            target="_blank"
            rel="noreferrer"
          >
            <img style={{height:'40px'}} src={url + ('/images/git.png')} alt="git" />
          </a>
        </div>
      </div>

      <div>
        <p className="text-lg">
          LorenzoPalumboDeveloper &copy; all rights reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;

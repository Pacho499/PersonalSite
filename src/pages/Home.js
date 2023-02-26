import "../style/Home.scss";
import Header from "../components/Header";
import universApp from "../images/universApp.png";
import convertitore from "../images/Convertitore.png";
import fakeInsta from "../images/fakeInsta.png";
import setteMezzo from "../images/setteMezzo.png";
import ImageSlider from "../components/ImageSlider";
import personalSite from "../images/personalSite.png";
import emailjs from "@emailjs/browser";
import leagueOfWiki from '../images/leagueOfWiki.png'
import { useRef, useState } from "react";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
const Home = () => {
  // logic Skills section
  const slides = [
    {
      url: universApp,
      title: "Clone sito UniverApp",
      gitLink: "https://github.com/Pacho499/Universapp-test-css",
      siteLink: "https://fakeuniversapp.netlify.app/",
    },
    {
      url: convertitore,
      title: "Convertitore di valute",
      gitLink: "https://github.com/Pacho499/Convertitore",
      siteLink: "https://valueconverterlorenzopalumbo.netlify.app/index.html",
    },
    {
      url: fakeInsta,
      title: "Instagram Fake",
      gitLink: "https://github.com/Pacho499/Fake-Instagram",
      siteLink: null,
    },
    {
      url: personalSite,
      title: "Sito web personale",
      gitLink: "https://github.com/Pacho499/PersonalSite",
      siteLink: "https://lorenzopalumbo.netlify.app/",
    },
    {
      url: setteMezzo,
      title: "Sette e mezzo",
      gitLink: "https://github.com/Pacho499/SetteMezzo",
      siteLink: "https://settemezzo.netlify.app",
    },
    {
      url: leagueOfWiki,
      title: "League of wiki",
      gitLink: "https://github.com/Pacho499/league",
      siteLink: "https://leagueofwiki.netlify.app/",
    },
  ];
  // logic contact section
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const form = useRef();
  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (email.trim() === "" || name.trim() === "" || message.trim() === "") {
      setError(true);
      setTimeout(() => {
        setLoading(false);
        setError(false);
      }, 5000);

      return;
    } else {
      try {
        await emailjs.sendForm(
          "service_sgrcj8b",
          "my_personal_site",
          form.current,
          "MWltUA9z-5NWhGhsD"
        );
        setLoading(false);
        setDone(true);
        setEmail("");
        setMessage("");
        setName("");
        setError(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    }
  };
  return (
    <div id="mainContainer">
      <Header />
      {/* hero section */}
      <section id="hero">
        <div id="heroContainer">
          <div classname="imgContainer">
            <img height='400px' src={process.env.PUBLIC_URL + '/images/me.png'} alt="Example" />
          </div>
          <div className="title">
            <h1>Lorenzo Palumbo</h1>
            <h3>web developer</h3>
          </div>
          <div className="firstImpress">
            <p>
              Ciao sono Lorenzo, ho iniziato a studiare programmazione grazie ad{" "}
              <a
                rel="noreferrer"
                href="https://universapp.tech/"
                target="_blank"
              >
                UniversApp
              </a>
              , svoltando la mia carriera e aprendomi nuovi orizzonti lavorativi
            </p>
          </div>
        </div>
        <div className="infoContainer">
          <h1>
            "Scegli un lavoro che ami e non dovrai lavorare neppure un giorno
            della tua vita"
          </h1>
          <p>
            Questo è stato il mio pensiero quando ho deciso di{" "}
            <span>lasciare la mia precendente professione </span> per iniziare a
            studiare programmazione, cercando di trasformare la mia{" "}
            <span>passione in lavoro</span> per avere molte più soddisfazioni.{" "}
            <br />
            Attualmente mi occupo dello sviluppo web lato front-end e continuo a
            studiare per poter diventare un full-stack developer
          </p>
        </div>
      </section>
      {/* Skills section */}
      <section id="skills">
        <h1 className="subTitle">COMPETENZE</h1>
        <div id="skillsContainer">
          <div className="listContainer">
            <h1>Tecnologie</h1>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
              <li>C</li>
              <li>REACT</li>
              <li>SASS</li>
              <li>BOOTSTRAP</li>
            </ul>
          </div>
          <div id="projectContainer">
            <h1>Progetti</h1>
            <div className="imageStyle">
              <ImageSlider slides={slides} />
            </div>
          </div>
        </div>
      </section>
      {/* contact section */}
      <section id="Contact">
        <h1 className="subTitle">CONTATTAMI</h1>
        <div id="contactContainer">
          <h1 className="formTitle">
            Hai una domanda o una proposta?
            <br />
            Compila questo campo per essere contattato
          </h1>
          <form ref={form} onSubmit={sendEmail}>
            <label>Nome</label>
            <input
              type="text"
              placeholder="Nome"
              onChange={handleName}
              value={name}
              name="from_name"
            />
            <label>E-mail</label>
            <input
              type="text"
              placeholder="E-mail"
              name="e_mail"
              onChange={handleEmail}
              value={email}
            />
            <label>Il tuo messaggio</label>
            <textarea
              onSubmit={sendEmail}
              placeholder="La tua idea!"
              onChange={handleMessage}
              value={message}
              cols="30"
              rows="10"
              name="message"
            ></textarea>
            {done ? (
              <h2>Il tuo messaggio è stato correttamente inviato</h2>
            ) : (
              <button onClick={sendEmail}>Invia</button>
            )}
            {loading ? <Spinner /> : null}
            {error ? (
              <h2>
                Ops potrebbe esserci stato un errore di rete per favore
                controlla che tutti i campi siano completi e riprova
              </h2>
            ) : null}
          </form>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;

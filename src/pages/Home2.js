import Header from "../components/Header";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import Input from '../components/Input';
const Home = () => {

  const url = process.env.PUBLIC_URL

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
      <section className='mt-40 w-[90%] m-auto'>
        <div className='flex justify-around items-center text-center border-4 rounded-xl border-main px-10 '>
          <div className='w-1/3 ml-10'>
            <img className='h-[400px] ' src={url + '/images/me.png'} alt="" />
          </div>
          <div className="w-1/3">
            <h1 className='text-3xl'>Lorenzo Palumbo</h1>
            <h3 className='text-2xl'>Front-end Developer</h3>
            <h3 className='text-2xl mt-10'>Caratteristiche</h3>
            <ul className='text-center mt-4 text-xl'>
                <li>Motivazione</li>
                <li>Passione</li>
                <li>Costanza</li>
            </ul>
          </div>
          <div className="w-1/3 text-3xl">
           <p className='py-4'> Sono un giovane appassionato di tecnologia da sempre. Ho scoperto la mia passione per lo sviluppo web e ho deciso di intraprendere un percorso per diventare front-end developer. Sono determinato a sviluppare le mie capacità e a diventare un membro prezioso di un team di sviluppo.</p>
          </div>
        </div>
        <div className="mt-10 border-orange border-4 rounded-lg p-10 text-center">
          <h1 className='text-3xl text-pink'>
            "Scegli un lavoro che ami e non dovrai lavorare neppure un giorno
            della tua vita"
          </h1>
          <p className='text-2xl mt-10'>
            Questo è stato il mio pensiero quando ho deiso di lasciare la mia precedente professione di barista.
            <br />
            La mia esperienza lavorativa mi ha insegnato l'importanza della flessibilità e della capacità di adattarsi a situazioni nuove e impegnative. Sono convinto che queste competenze saranno utili nella mia carriera come front-end developer, dove sarò impegnato a imparare costantemente e a mettere in pratica le mie conoscenze in progetti ambiziosi.
          </p>
        </div>
      </section>
      {/* contact section */}
      <section id="Contact" className='p-10 border-main border-4 rounded-lg my-10 w-[90%] mx-auto' >
        <h1 className="text-3xl text-center text-pink">CONTATTAMI</h1>
        <div className='flex flex-col'>
          <h1 className="text-3xl text-center mt-10 ">
            Hai una domanda o una proposta?
            <br />
            Compila questo campo per essere contattato
          </h1>
          <form className='flex flex-col' ref={form} onSubmit={sendEmail}>
            <Input value={name} handle={handleName} name={'from_name'} title={'Nome'}/>
            <Input value={email} handle={handleEmail} name={'e_mail'} title={'E-mail'}/>
            <label className='my-4 text-orange font-bold text-xl'>Il tuo messaggio</label>
            <textarea
            className='text-black p-2'
              onSubmit={sendEmail}
              placeholder="La tua idea!"
              onChange={handleMessage}
              value={message}
              cols="30"
              rows="10"
              name="message"
            ></textarea>
            {done ? (
              <h2 className='text-orange text-2xl mt-2 font-bold'>Il tuo messaggio è stato correttamente inviato</h2>
            ) : (
              <button className='p-4 w-[10%] mt-10 text-center border-4 rounded-lg border-pink text-main hover:border-main hover:text-pink font-bold text-xl' onClick={sendEmail}>Invia</button>
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
      <footer className=''>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
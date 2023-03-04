import Header from '../components/Header';
import emailjs from '@emailjs/browser';
import {useRef, useState} from 'react';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner';
import Input from '../components/Input';
import ProjectCard from '../components/ProjectCard';
import pagesData from '../pagesDatas'
const Home = () => {
  const url = process.env.PUBLIC_URL;
  
  const works = []
  const personalProject = []

  for (let page in pagesData){
    if (pagesData[page].work === true){
       works.push(pagesData[page])
    }else{
      personalProject.push(pagesData[page])
    }
  }

  const renderWork = () => {
    
  }
  
    // logic contact section
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
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
    if (email.trim() === '' || name.trim() === '' || message.trim() === '') {
      setError(true);
      setTimeout(() => {
        setLoading(false);
        setError(false);
      }, 5000);

      return;
    } else {
      try {
        await emailjs.sendForm(
          'service_sgrcj8b',
          'my_personal_site',
          form.current,
          'MWltUA9z-5NWhGhsD',
        );
        setLoading(false);
        setDone(true);
        setEmail('');
        setMessage('');
        setName('');
        setError(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    }
  };
  return (
    <div>
      <Header />
      {/* hero section */}
      <section className='mt-40 w-[90%] m-auto'>
        <div className='flex justify-around items-center text-center border-4 rounded-xl border-pink bg-secondary text-black px-10 '>
          <div className='w-1/3 ml-10'>
            <img className='h-[400px]' src={url + '/images/me.png'} alt='' />
          </div>
          <div className='w-1/3'>
            <h1 className='text-[2rem] font-black'>Lorenzo Palumbo</h1>
            <h3 className='text-2xl'>Front-end Developer</h3>
            <h3 className='text-2xl font-black mt-10'>Caratteristiche</h3>
            <ul className='text-center mt-1 text-xl'>
              <li>Motivazione</li>
              <li>Passione</li>
              <li>Costanza</li>
            </ul>
          </div>
          <div className='w-1/3 text-2xl'>
            <p className='py-4'>
              Sono un giovane appassionato di tecnologia da sempre. Ho scoperto
              la mia passione per lo sviluppo web e ho deciso di intraprendere
              un percorso per diventare front-end developer. Sono determinato a
              sviluppare le mie capacità e a diventare un membro prezioso di un
              team di sviluppo.
            </p>
          </div>
        </div>
        <div className='mt-10 border-secondary bg-pink border-4 rounded-lg p-10 text-center'>
          <h1 className='text-3xl text-main font-bold'>
            "Scegli un lavoro che ami e non dovrai lavorare neppure un giorno
            della tua vita"
          </h1>
          <p className='text-2xl mt-10 text-black'>
            Questo è stato il mio pensiero quando ho deciso di lasciare la mia
            precedente professione di barista.
            <br />
            La mia esperienza lavorativa mi ha insegnato l'importanza della
            flessibilità e della capacità di adattarsi a situazioni nuove e
            impegnative. Sono convinto che queste competenze saranno utili nella
            mia carriera come front-end developer, dove sarò impegnato a
            imparare costantemente e a mettere in pratica le mie conoscenze in
            progetti ambiziosi.
          </p>
        </div>
      </section>
      {/* experience section */}
      <section className='mt-20 w-[90%] m-auto'>
        <h1 className='text-center mb-12 text-3xl font-bold text-main'>
          Esperienze lavorative
        </h1>
        <div className='w-1/3'>
          {works.map((work, index) => { 
            return (<ProjectCard key={index} pageData={work}/>)
          })}
        </div>
      </section>
      {/* portfolio section */}
      <section className='mt-20 w-[90%] m-auto'>
        <h1 className='text-center mb-12 text-3xl font-bold text-main'>
          Portfolio
        </h1>
        <div className='grid grid-cols-3 gap-4'>
        {personalProject.map((work, index) => { 
            return (<ProjectCard key={index} pageData={work}/>)
          })}
          {/* <ProjectCard
            title={'League of Wiki'}
            languages={['React.js','Git','Netlify','Bootstrap','TypeScript','SASS',]}
            bio={"Il progetto League of wiki utilizza l'API di League of Legends per creare un sito dedicato ai giocatori. Il sito fornisce dettagli sui personaggi, il rank e le ultime partite dei giocatori."}
            www={'https://leagueofwiki.netlify.app/'}
            gitHub={'https://github.com/Pacho499/league'}
          />
          <ProjectCard
            title={'Sette e mezzo'}
            languages={['React.js', 'Git', 'Netlify', 'Bootstrap', 'SASS']}
            bio={'Il progetto Sette e Mezzo è una semplice riproduzione del gioco classico di carte del sette e mezzo.'}
            www={'https://settemezzo.netlify.app/'}
            gitHub={'https://github.com/Pacho499/SetteMezzo'}
          />
          <ProjectCard
            title={'Clone di instagram'}
            languages={['React.js', 'Firebase', 'Git', 'API']}
            bio={'Il progetto creato per il corso UniversApp punta alla creazione di un clone di Instagram dando la possibilità di gestire il profilo, pubblicare foto e visualizzare una home dinamica.'}
            gitHub={'https://github.com/Pacho499/Fake-Instagram'}
          />
          <ProjectCard
            title={'Convertitore di valute'}
            languages={['HTML', 'SASS', 'javascript', 'API']}
            bio={'Un progetto che utilizza una Rest Api per ottenere i cambi di valuta in tempo reale.'}
            gitHub={'https://github.com/Pacho499/Convertitore'}
            www={'https://valueconverterlorenzopalumbo.netlify.app/index.html'}
          />
          <ProjectCard
            title={'Clone sito UniversApp'}
            languages={['HTML', 'SASS']}
            bio={'Primo progetto del corso in cui ho sperimentato le basi dello sviluppo web. Il sito è un clone della homepage di universapp.'}
            gitHub={'https://github.com/Pacho499/Universapp-test-css'}
            www={'https://fakeuniversapp.netlify.app/'}
          /> */}
        </div>
      </section>
      {/* contact section */}
      <section
        id='Contact'
        className='p-10 bg-pink border-main border-4 rounded-lg my-10 w-[90%] mx-auto'
      >
        <h1 className='text-3xl font-bold text-center text-main'>CONTATTAMI</h1>
        <div className='flex flex-col'>
          <h1 className='text-2xl text-center mt-10 text-black'>
            Hai una domanda o una proposta?
            <br />
            Compila questo campo per essere contattato
          </h1>
          <form className='flex flex-col' ref={form} onSubmit={sendEmail}>
            <Input
              value={name}
              handle={handleName}
              name={'from_name'}
              title={'Nome'}
            />
            <Input
              value={email}
              handle={handleEmail}
              name={'e_mail'}
              title={'E-mail'}
            />
            <label className='my-4 text-orange font-bold text-xl text-black'>
              Il tuo messaggio
            </label>
            <textarea
              className='text-black p-2 border-2 border-main rounded-lg'
              onSubmit={sendEmail}
              placeholder='La tua idea!'
              onChange={handleMessage}
              value={message}
              cols='30'
              rows='10'
              name='message'
            ></textarea>
            {done ? (
              <h2 className='text-orange text-2xl mt-2 font-bold'>
                Il tuo messaggio è stato correttamente inviato
              </h2>
            ) : (
              <button
                className='p-2 w-[10%] mt-10 text-center rounded-lg bg-green text-main hover:bg-main hover:text-green font-bold text-xl'
                onClick={sendEmail}
              >
                Invia
              </button>
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

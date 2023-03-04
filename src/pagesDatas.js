class Page {
  constructor(title, languages, shortBio, description, work, images, www, git) {
    this.title = title;
    this.languages = languages;
    this.shortbio = shortBio;
    this.description = description;
    this.work = work;
    this.images = images;
    this.www = www;
    this.git = git;
  }
}
const PagesDatas = [
  new Page(
    'Odd Monitor',
    ['Typescript', 'React.js', 'Tailwind', 'GitLab', 'Node.js'],
    'Come sviluppatore front-end, ho lavorato alla creazione di oddMonitor, un tool per scommettitori professionisti. La mia principale responsabilità era quella di creare interfacce utente interattive e reattive per gli utenti',
    "Come sviluppatore front-end, lavoro alla creazione di oddMonitor, un tool per scommettitori professionisti utilizzando React.js, Tailwind e TypeScript. La mia principale responsabilità è quella di creare interfacce utente interattive e reattive per gli utenti, utilizzando componenti di React e CSS di Tailwind per l'aspetto visivo del sito. Utilizzo TypeScript per garantire una maggiore robustezza e chiarezza del codice, in quanto ci permette di definire tipi di dati per le proprietà e le funzioni dei componenti React. Lavoro in stretta collaborazione con il team di sviluppo back-end per assicurare che le funzionalità del sito siano state implementate correttamente e che l'interfaccia utente si integri perfettamente con le funzionalità sottostanti, dando anche una mano in caso di necessità. Collaboro anche con il team di design per assicurarmi che il sito sia stato sviluppato in linea con i loro standard di design.",
    true,
    [
      {
        description:'ciao',
        url: '/images/leagueOfWiki.png'
      },
      {
        description:'ciao',
        url: '/images/Convertitore.png'
      },
      {
        description:'ciao 3',
        url: 'images/fakeInsta.png'
      }
    ],
    '',
    '',
  ),
  new Page(
    'League of wiki',
    ['React.js','Git','Netlify','Bootstrap','TypeScript','SASS'],
    "Il progetto League of wiki utilizza l'API di League of Legends per creare un sito dedicato ai giocatori. Il sito fornisce dettagli sui personaggi, il rank e le ultime partite dei giocatori.",
    "Come sviluppatore front-end, lavoro alla creazione di oddMonitor, un tool per scommettitori professionisti utilizzando React.js, Tailwind e TypeScript. La mia principale responsabilità è quella di creare interfacce utente interattive e reattive per gli utenti, utilizzando componenti di React e CSS di Tailwind per l'aspetto visivo del sito. Utilizzo TypeScript per garantire una maggiore robustezza e chiarezza del codice, in quanto ci permette di definire tipi di dati per le proprietà e le funzioni dei componenti React. Lavoro in stretta collaborazione con il team di sviluppo back-end per assicurare che le funzionalità del sito siano state implementate correttamente e che l'interfaccia utente si integri perfettamente con le funzionalità sottostanti, dando anche una mano in caso di necessità. Collaboro anche con il team di design per assicurarmi che il sito sia stato sviluppato in linea con i loro standard di design.",
    false,
    [
      {
        description:'ciao',
        url: '/images/leagueOfWiki.png'
      },
      {
        description:'ciao',
        url: '/images/Convertitore.png'
      },
      {
        description:'ciao 3',
        url: 'images/fakeInsta.png'
      }
    ],
    'https://leagueofwiki.netlify.app/',
    'https://github.com/Pacho499/league',
  ),
  new Page(
    'Sette e mezzo',
    ['React.js', 'Git', 'Netlify', 'Bootstrap', 'SASS'],
    'Il progetto Sette e Mezzo è una semplice riproduzione del gioco classico di carte del sette e mezzo.',
    "Come sviluppatore front-end, lavoro alla creazione di oddMonitor, un tool per scommettitori professionisti utilizzando React.js, Tailwind e TypeScript. La mia principale responsabilità è quella di creare interfacce utente interattive e reattive per gli utenti, utilizzando componenti di React e CSS di Tailwind per l'aspetto visivo del sito. Utilizzo TypeScript per garantire una maggiore robustezza e chiarezza del codice, in quanto ci permette di definire tipi di dati per le proprietà e le funzioni dei componenti React. Lavoro in stretta collaborazione con il team di sviluppo back-end per assicurare che le funzionalità del sito siano state implementate correttamente e che l'interfaccia utente si integri perfettamente con le funzionalità sottostanti, dando anche una mano in caso di necessità. Collaboro anche con il team di design per assicurarmi che il sito sia stato sviluppato in linea con i loro standard di design.",
    false,
    [],
    'https://settemezzo.netlify.app/',
    'https://github.com/Pacho499/SetteMezzo',
  ),
  new Page(
    'Clone di Instagram',
    ['React.js', 'Firebase', 'Git', 'API'],
    'Il progetto creato per il corso UniversApp punta alla creazione di un clone di Instagram dando la possibilità di gestire il profilo, pubblicare foto e visualizzare una home dinamica.',
    "Come sviluppatore front-end, lavoro alla creazione di oddMonitor, un tool per scommettitori professionisti utilizzando React.js, Tailwind e TypeScript. La mia principale responsabilità è quella di creare interfacce utente interattive e reattive per gli utenti, utilizzando componenti di React e CSS di Tailwind per l'aspetto visivo del sito. Utilizzo TypeScript per garantire una maggiore robustezza e chiarezza del codice, in quanto ci permette di definire tipi di dati per le proprietà e le funzioni dei componenti React. Lavoro in stretta collaborazione con il team di sviluppo back-end per assicurare che le funzionalità del sito siano state implementate correttamente e che l'interfaccia utente si integri perfettamente con le funzionalità sottostanti, dando anche una mano in caso di necessità. Collaboro anche con il team di design per assicurarmi che il sito sia stato sviluppato in linea con i loro standard di design.",
    false,
    [],
    '',
    'https://github.com/Pacho499/Fake-Instagram',
  ),
  new Page(
    'Convertitore di valute',
    ['HTML', 'SASS', 'javascript', 'API'],
    'Un progetto che utilizza una Rest Api per ottenere i cambi di valuta in tempo reale.',
    "Come sviluppatore front-end, lavoro alla creazione di oddMonitor, un tool per scommettitori professionisti utilizzando React.js, Tailwind e TypeScript. La mia principale responsabilità è quella di creare interfacce utente interattive e reattive per gli utenti, utilizzando componenti di React e CSS di Tailwind per l'aspetto visivo del sito. Utilizzo TypeScript per garantire una maggiore robustezza e chiarezza del codice, in quanto ci permette di definire tipi di dati per le proprietà e le funzioni dei componenti React. Lavoro in stretta collaborazione con il team di sviluppo back-end per assicurare che le funzionalità del sito siano state implementate correttamente e che l'interfaccia utente si integri perfettamente con le funzionalità sottostanti, dando anche una mano in caso di necessità. Collaboro anche con il team di design per assicurarmi che il sito sia stato sviluppato in linea con i loro standard di design.",
    false,
    [],
    'https://valueconverterlorenzopalumbo.netlify.app/index.html',
    'https://github.com/Pacho499/Convertitore',
  ),
  new Page(
    'Clone sito UniversApp',
    ['HTML', 'SASS'],
    'Primo progetto del corso in cui ho sperimentato le basi dello sviluppo web. Il sito è un clone della homepage di universapp.',
    "Come sviluppatore front-end, lavoro alla creazione di oddMonitor, un tool per scommettitori professionisti utilizzando React.js, Tailwind e TypeScript. La mia principale responsabilità è quella di creare interfacce utente interattive e reattive per gli utenti, utilizzando componenti di React e CSS di Tailwind per l'aspetto visivo del sito. Utilizzo TypeScript per garantire una maggiore robustezza e chiarezza del codice, in quanto ci permette di definire tipi di dati per le proprietà e le funzioni dei componenti React. Lavoro in stretta collaborazione con il team di sviluppo back-end per assicurare che le funzionalità del sito siano state implementate correttamente e che l'interfaccia utente si integri perfettamente con le funzionalità sottostanti, dando anche una mano in caso di necessità. Collaboro anche con il team di design per assicurarmi che il sito sia stato sviluppato in linea con i loro standard di design.",
    false,
    [],
    'https://fakeuniversapp.netlify.app/',
    'https://github.com/Pacho499/Universapp-test-css',
  ),
];

export default PagesDatas;

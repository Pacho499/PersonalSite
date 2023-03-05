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
    "Come sviluppatore front-end, ho lavorato alla creazione di oddMonitor, un tool per scommettitori professionisti utilizzando React.js, Tailwind e TypeScript. La mia principale responsabilità era quella di creare interfacce utente interattive e reattive per gli utenti, utilizzando componenti di React e CSS di Tailwind per l'aspetto visivo del sito. Utilizzavo TypeScript per garantire una maggiore robustezza e chiarezza del codice, in quanto ci permette di definire tipi di dati per le proprietà e le funzioni dei componenti React. Ho lavorato in stretta collaborazione con il team di sviluppo back-end per assicurare che le funzionalità del sito siano state implementate correttamente e che l'interfaccia utente si integri perfettamente con le funzionalità sottostanti, dando anche una mano in caso di necessità. Collaboravo anche con il team di design per assicurarmi che il sito sia stato sviluppato in linea con i loro standard di design.",
    true,
    [
      {
        title:'Home 1.0',
        description:"Prima versione della home che si concentra principalmente sulla visualizzazione di dati relativi agli eventi sportivi, con una tabella che occupa gran parte dello spazio della pagina. La pagina presenta un design minimalista e semplice, con pochi elementi visivi e un focus sulla funzionalità e sull'utilizzo pratico del sito. La tabella è organizzata in modo logico e facile da leggere, con colonne per le diverse informazioni e righe per i singoli eventi. In alto è presente una barra di navigazione e una toolbar per la ricerca degli eventi, per facilitare l'accesso alle informazioni desiderate.",
        url: 'images/monitor1.0.png'
      },
      {
        title:'Home 2.0',
        description:"Seconda versione della home con un design migliorato, dove la funzionalità e l'estetica si fondono in modo armonioso. Rispetto alla versione precedente, questa pagina presenta un layout più libero e flessibile. La toolbar è stata fissata in alto, mentre il menu è stato posizionato nel lato sinistro della pagina, per facilitare la navigazione, esso è estendibile o riducibile in base alla grandezza dello schermo. Sono presenti elementi visivi più accattivanti, come lo sfondo della tabella in trasparenza e i colori per definire il bookmaker, che contribuiscono a creare un'esperienza più coinvolgente per gli utenti. Il testo è organizzato in modo più pulito e leggibile, con l'uso di font più moderni. La tabella degli eventi sportivi è stata riprogettata in modo più moderno.",
        url: 'images/monitor2.0.png'
      },
      {
        title:'Dettaglio Evento 1.0',
        description:"Prima versione del dettaglio evento che mostra le varie quote dei siti di betting, caratterizzata da un design semplice e funzionale piuttosto che estetico. La modale ha un layout semplice, con una lista dei bookmaker e le relative quote, organizzati in colonne e righe. Il testo è organizzato in modo chiaro e leggibile, utilizzando font semplici e di dimensioni adeguate. La funzionalità principale è quella di selezione delle scommesse desiderate con una navigazione diretta al sito del bookmaker. Non ci sono elementi visivi accattivanti o di branding, ma solo informazioni utili per gli utenti che cercano di puntare sulle scommesse sportive.",
        url: '/images/dettaglioEvento1.0.png'
      },
      {
        title:"Dettaglio Evento 2.0",
        description:"Seconda versione del dettaglio evento dall'aspetto moderno ed esteticamente accattivante, dove il design si fonde con la funzionalità in modo equilibrato. Rispetto alla versione precedente, questa modale presentare un layout più sofisticato, Il testo potrebbe è organizzato in modo gerarchico, con il nome, la tipologia, il tipo e l'orario del evento, per facilitare la comprensione delle informazioni. Sono presenti elementi visivi accattivanti, come il logo e i colori di background dei vari bookmaker che enfatizzano le quote e le rendono più chiare e visibili. Il design è in linea con l'immagine di branding del sito, con colori coordinati e font riconoscibili.",
        url: '/images/dettaglioEvento2.0.png'
      },
    ],
    '',
    '',
  ),
  new Page(
    'League of wiki',
    ['React.js','Git','Netlify','Bootstrap','TypeScript','SASS'],
    "Il progetto League of wiki utilizza l'API di League of Legends per creare un sito dedicato ai giocatori. Il sito fornisce dettagli sui personaggi, il rank e le ultime partite dei giocatori.",
    "Il progetto League of wiki utilizza l'API di League of Legends per creare un sito dedicato ai giocatori. Il sito fornisce dettagli sui personaggi, il rank e le ultime partite dei giocatori. Questo progetto mi ha dato l'opportunità di sperimentare le tecnologie front-end moderne e di migliorare le mie capacità di sviluppo. Ho lavorato diligentemente per garantire che il sito fosse intuitivo e facile da usare, oltre a essere esteticamente piacevole.",
    false,
    [
      {
        title:"Home",
        description:"Si presenta con un design accattivante e ricco di elementi grafici ispirati al tema del gioco. Come elemento principale è presente una barra di input per la ricerca dei giocatori, dove l'utente può inserire il nome del giocatore che desidera trovare. Sotto alla barra di ricerca sono presenti una serie di bottoni per selezionare lo stato in cui l’account del giocatore si trova.Inoltre, è presente un'area dedicata ai personaggi gratuiti della settimana, dove vengono presentati i personaggi disponibili per l'uso gratuito in quella determinata settimana. Questa sezione essa è presentata come una serie di immagini.In alto abbiamo un menu di navigazione che consente all'utente di accedere alle diverse sezioni del sito, come le informazioni sui personaggi ed il proprio account.",
        url: '/images/leagueOfWikiHome.png'
      },
      {
        title:"Find Champ",
        description:"Si presenta con un layout moderno e accattivante, dove l'utente può cercare e scegliere il personaggio desiderato per avere maggiori informazioni. Nella parte superiore della pagina potrebbe è presente una barra di input, dove l'utente può inserire il nome del personaggio che desidera trovare. Sotto alla barra di ricerca sono essere presentati i personaggi disponibili, organizzati in una griglia di card. Ogni card contiene l'immagine del personaggio ed il nome.",
        url: '/images/leagueOfWikiChamps.png'
      },
      {
        title:"Champ Info",
        description:"Si presenta con un layout accattivante e informativo. La pagina inizia con una sezione a sinistra, che mostra un'immagine del personaggio, accompagnata dal nome e dal ruolo seguito da una stella per metterlo tra i preferiti. A destra abbiamo una breve descrizione della storia del personaggio. Successivamente, la pagina mostra una sezione che riguarda i consigli di gioco. In basso a destra è presente un carosello di immagini, che mostra tutte le skin disponibili, consentendo all'utente di visualizzare le diverse opzioni di personalizzazione. Infine in basso a sinistra è presente una sezione dedicata alle abilità, dove ogni abilità è rappresentata da un'immagine, accompagnata dal nome, dalla descrizione e dal costo.",
        url: '/images/leagueOfWikiChampInfo.png'
      },
      {
        title:"Account",
        description:"Organizzata in modo semplice ed intuitivo, con una lista laterale a sinistra che contiene l’ elenco dei nostri giocatori preferiti e una barra lista destra con l’ elenco dei nostri personaggi preferiti. L'elenco dei giocatori, che l'utente ha scelto come preferiti, con la possibilità di aggiungere o rimuovere giocatori dalla lista. Ogni voce della lista è rappresentata da una miniatura dell'immagine profilo del giocatore, accompagnata dal nome e dal suo livello. L’elenco dei personaggi preferiti dell'utente, che possono essere aggiunti o rimossi dalla lista. È composta da una serie di voci della lista rappresentate da una miniatura dell'immagine del personaggio, accompagnata dal nome.",
        url: '/images/leagueOfWikiAccount.png'
      },
      {
        title:"Player Info",
        description:"Ha una disposizione simile a quella di una scheda. Nella parte superiore della pagina, a sinistra, è presente il nome del giocatore ed il suo livello , mentre a destra sono visualizzati i suoi rank (flex, soloQ e TFT), ovvero la sua posizione nella classifica del gioco. È presente una tabella con tutti gli ultimi match giocati dal giocatore, con informazioni quali la durata della partita, il personaggio scelto, il risultato della partita, la build e il punteggio. Questa tabella è organizzata in modo che sia facile da consultare e che permetta all'utente di visualizzare rapidamente le informazioni desiderate.",
        url: '/images/leagueOfWikiSummoner.png'
      },
    ],
    'https://leagueofwiki.netlify.app/',
    'https://github.com/Pacho499/league',
  ),
  new Page(
    'Sette e mezzo',
    ['React.js', 'Git', 'Netlify', 'Bootstrap', 'SASS'],
    'Il progetto Sette e Mezzo è una semplice riproduzione del gioco classico di carte del sette e mezzo.',
    "Il progetto Sette e Mezzo è stato sviluppato utilizzando React per creare un'interfaccia utente interattiva e dinamica, TypeScript per implementare la logica di gioco e garantire un codice robusto e ben organizzato, e bootstrap per la parte grafica. Il gioco funziona in modo simile alla versione tradizionale del gioco, dove gli utenti cercano di ottenere un punteggio di carte il più vicino possibile a 7,5 senza superarlo. L'interfaccia utente è stata progettata per essere intuitiva e facile da utilizzare, rendendo la partecipazione al gioco un'esperienza piacevole per gli utenti. In sintesi, il progetto Sette e Mezzo fornisce un'esperienza di gioco online divertente e coinvolgente per gli utenti, utilizzando React e TypeScript per creare un'interfaccia utente interattiva e la logica di gioco efficiente e ben organizzata.",
    false,
    [
      {
        title:"Home",
        description:"Al centro abbiamo una serie di bottoni per eseguire le nostre azioni all'interno della partita. In rosso troviamo lo score attuale della partita, mentre nel riguardo giallo troviamo il numero totale di vittorie da parte del giocatore, a sinistra, e del computer, a destra.",
        url: '/images/setteMezzoStart.png'
      },
      {
        title:"Rules",
        description:"Dimostrazione della sezione delle regole che si apre a tenda",
        url: '/images/setteMezzoRules.png'
      },
      {
        title:"Game",
        description:"Rappresentazione di una partita in cui il giocatore ha vinto, possiamo notare le carte dei due giocatori e come lo score si sia aggiornato, inoltre abbiamo il verdetto del gioco sul risultato della partita",
        url: '/images/setteMezzoGame.png'
      },
    ],
    'https://settemezzo.netlify.app/',
    'https://github.com/Pacho499/SetteMezzo',
  ),
  new Page(
    'Clone di Instagram',
    ['React.js', 'Firebase', 'Git', 'API'],
    'Il progetto creato per il corso UniversApp punta alla creazione di un clone di Instagram dando la possibilità di gestire il profilo, pubblicare foto e visualizzare una home dinamica.',
    "Il progetto puntava a creare un clone di Instagram, realizzato come compito per il corso di Universapp. È stato creato utilizzando React.js, Firebase per la gestione del database e dell'autenticazione e Sass per lo stile. La sezione 'Esplora' utilizza diverse API per generare foto e nomi utenti casuali, al fine di simulare al meglio l'app originale. Questo permette di avere una visualizzazione dinamica e sempre nuova di post di diversi utenti. React.js è stato utilizzato per creare diverse sezioni del sito, come la sezione 'Esplora', che mostra i post più popolari e recenti, e la sezione 'Profilo', che presenta informazioni sul proprietario del profilo e i suoi post oltre alla possibilità di cambiare nome profilo e descrizione del profilo. Inoltre, è stata implementata la funzionalità di pubblicare post e mettere like. Per quanto riguarda l'aspetto estetico, è stato utilizzato Sass per creare lo stile del sito, garantendo un'esperienza utente piacevole e coerente.",
    false,
    [
      {
        title:"LogIn",
        description:"Proprio come il sito originale il bottone accedi diventerà cliccabile solo nel momento in cui verrano rispettati determinati parametri di lunghezza degli input, inoltre abbiamo la possibilità di vedere la password che stiamo inserendo. Cliccando sul bottone 'iscriviti' avremo la possibilità di navigare al SignUp",
        url: '/images/fakeInstaLogin.png'
      },
      {
        title:"SignUp",
        description:"Proprio come il sito originale il bottone 'avanti' diventa attivo solo dopo che gli input avranno soddisfatto le condizioni richieste. Tutte le scritte riprendono quelle originali",
        url: '/images/fakeInstaSignUp.png'
      },
      {
        title:"Home",
        description:"Formata da una serie di post falsi creati tramite diverse api che generano nomi e immagini casuali, possiamo notare che un altra api è stata utilizzata per la sezione 'suggerimenti'. In alto troviamo la classica barra di instagram con le sezione home, direct, post, notifiche e profilo, possiamo notare che la sezione profilo è la nostra attuale immagine profilo.",
        url: '/images/fakeInstaHome.png'
      },
      {
        title:"Base profile",
        description:"I follower e i profili seguiti sono un numero fisso, abbiamo a disposizione pero il conteggio dei post ed il bottone 'Modifica Profilo' che ci permette di cambiare le impostazioni del nostro account",
        url: '/images/fakeInstaBaseProfile.png'
      },
      {
        title:"Profile settings",
        description:"Formata da un semplice box in cui possiamo inserire tutti gli input per cambiare le nostre impostazioni, possiamo cambiare nome, nome Utente, bio e foto profilo proprio come sul sito originale.",
        url: '/images/fakeInstaProfileSettings.png'
      },
      {
        title:"Home after post",
        description:"Proprio come nel sito originale dopo aver caricato una foto verremo condotti alla home di instagram e vedremo come primo post la foto appena caricata seguita da post fake. Se dovessimo cambiare o ricaricare la pagina avremo a disposizione altri post fake",
        url: '/images/fakeInstaHomePost.png'
      },
      {
        title:"Profile",
        description:"Possiamo notare che il valore dei post è salito e si basa effettivamente sui post caricati dal utente, inoltre notiamo come caricando una foto profilo anche l'header cambia avendo una miniatura della foto profilo dell'utente",
        url: '/images/fakeInstaProfile.png'
      },
    ],
    '',
    'https://github.com/Pacho499/Fake-Instagram',
  ),
  new Page(
    'Convertitore di valute',
    ['HTML', 'SASS', 'javascript', 'API'],
    'Un progetto che utilizza una Rest Api per ottenere i cambi di valuta in tempo reale.',
    "Questo progetto utilizza un API per ottenere i tassi di cambio in tempo reale. È stato sviluppato utilizzando JavaScript e SASS come linguaggi di programmazione. Il sito web ha un'interfaccia utente semplice e intuitiva, che consente agli utenti di selezionare le valute desiderate e di visualizzare il risultato del calcolo in tempo reale. Il codice è stato scritto con attenzione alla pulizia e alla leggibilità, l'estetica è stata curata utilizzando SASS per creare un design accattivante e facile da usare. In sintesi, questo progetto è un'applicazione funzionale e ben progettata che soddisfa i requisiti del compito assegnato per il corso di universapp.",
    false,
    [
      {
        title:"Home",
        description:"Si presenta con un design molto semplice ed intuitivo. Essa è composta da un input che ci da la possibilità di scegliere la quantità da convertire, due select che ci offrono la possibilità di scegliere il tipo di moneta ed un bottone 'coverti' per eseguire l'azione.",
        url: '/images/valueConverterStart.png'
      },
      {
        title:"Convert",
        description:"Una volta convertito il valore la pagina ci restituirà il risultato e metterà a nostra disposizione un bottone di informazione sulla valuta scelta, essa ci porterà alla pagina 'info valute'",
        url: '/images/valueConverterDone.png'
      },
      {
        title:"Info",
        description:"Si presenta con un design molto semplice. Nella parte alta abbiamo a disposizione una lista di bottoni che rappresentano i vari continenti. Essi ci porteranno alla sezione delle valute dei rispettivi continenti. Il box della descrizione è formato dal nome, una descrizione della storia ed una foto della valuta. Il tasto 'più informazioni' ci poterà alla pagina wikipedia della valuta.",
        url: '/images/valueConverterInfo.png'
      },
    ],
    'https://valueconverterlorenzopalumbo.netlify.app',
    'https://github.com/Pacho499/Convertitore',
  ),
  new Page(
    'Clone sito UniversApp',
    ['HTML', 'SASS'],
    'Primo progetto del corso in cui ho sperimentato le basi dello sviluppo web. Il sito è un clone della vecchia homepage di universapp.',
    "Questo progetto consiste nella creazione di un clone del vecchi sito di Universapp utilizzando HTML e SASS come linguaggi di programmazione. L'obiettivo è quello di replicare l'interfaccia utente e le funzionalità principali del sito originale. Il codice HTML è stato scritto per essere ben strutturato e accessibile, mentre SASS è stato utilizzato per creare un design che sia coerente con lo stile del sito originale. Il progetto è stato sviluppato per soddisfare i requisiti del compito assegnato per il corso di Universapp e dimostra la capacità di creare un sito web funzionale utilizzando HTML e SASS.",
    false,
    [
      {
        title:"Hero",
        description:"Rappresentazione della sezione Hero",
        url: '/images/universAppHero.png'
      },
      {
        title:"Arguments",
        description:"Rappresentazione della sezione argomenti",
        url: '/images/universAppArguments.png'
      },
      {
        title:"Difference",
        description:"Rappresentazione delle differenze",
        url: '/images/universAppTable.png'
      },
      {
        title:"Stats",
        description:"Rappresentazione delle statistiche in Italia sui tech job",
        url: '/images/universAppStats.png'
      },
    ],
    'https://fakeuniversapp.netlify.app/',
    'https://github.com/Pacho499/Universapp-test-css',
  ),
];

export default PagesDatas;

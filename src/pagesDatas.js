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
    'HRM Group',
    ['Salesforce', 'Jquery', 'Controller', 'Javascript', 'template', 'ISML', 'Bootstrap 4'],
    'Come sviluppatore front-end sono entrato a far parte di HRM group, un azienda di consulenza informatica. Dentro l’azienda ho avuto la possibilità di partecipare ad un academy di Salesforce in cui ho imparato le basi di questa piattaforma.  Attualmente sono ancora presente in azienda.',
    "Come sviluppatore front-end sono entrato a far parte di HRM group, un azienda di consulenza informatica. Dentro l’azienda ho avuto la possibilità di partecipare ad un academy di Salesforce in cui ho imparato le basi di questa piattaforma e la creazione e utilizzo di un software basato sul mvc (model view controller). Questo mi ha portato ad avere maggiore conoscenza dei controller, model e tutto ciò che riguarda il mondo Salesforce. Oltre a questo sono riuscito anche a rafforzare le mie conoscenze di Jquery e bootstrap oltre che di Javascript che viene impiegato come back-end. Inoltre ho acquisito conoscenza della tipologia di lavoro ‘Agile’ e del utilizzo di git-hub e bit-bucket in progetti con più developer. Attualmente sono ancora presente in azienda e dopo la conclusione del percorso di formazione Salesforce attendo di essere inserito in nuovi progetti sperando di migliorare le mie competenze e ampliare le mie conoscenze oltre che trovare delle vere sfide per testare il mio livello da programmatore.",
    true,
    [
      {
        title:'Homepage',
        description:"Questa è la home del progetto finale del corso. Abbiamo preso un template di figma e deciso di ricreare lo stile oltre che aggiungere le varie funzionalità. L' header ha al suo interno il logo di salesforce in stile 'grigio'. Accanto all'intestazione, ci sono le opzioni di navigazione principali, come 'Home', 'Prodotti', 'About'. infine sul fondo possiamo trovare il carrello e il bottone di login. la schermata poi contiene varie immagini a replicare il template di figma",
        url: 'images/SalesforceExercise.jpg'
      },
      {
        title:'Product listing page',
        description:"Andando su 'Prodotti' troviamo la PLP con tutti i prodotti presenti nel catalogo standard di Salesforce. Possiamo notare che la PLP ha un bredcrumb che permette di tornare indietro ed una search bar per la ricerca dei prodotti desiderati. Inoltre la pagina è divisa in 2 parti: il lato sinistro contentente i filtri che possono essere selezionati per migliorare la ricerca e il lato destro contente le varie card dei prodotti che il nostro ecommerce mette a disposizione",
        url: 'images/SalesforceExercise2.jpg'
      },
    ],
    '',
    '',
  ),
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
        url: 'images/monitor1.0.jpg'
      },
      {
        title:'Home 2.0',
        description:"Seconda versione della home con un design migliorato, dove la funzionalità e l'estetica si fondono in modo armonioso. Rispetto alla versione precedente, questa pagina presenta un layout più libero e flessibile. La toolbar è stata fissata in alto, mentre il menu è stato posizionato nel lato sinistro della pagina, per facilitare la navigazione, esso è estendibile o riducibile in base alla grandezza dello schermo. Sono presenti elementi visivi più accattivanti, come lo sfondo della tabella in trasparenza e i colori per definire il bookmaker, che contribuiscono a creare un'esperienza più coinvolgente per gli utenti. Il testo è organizzato in modo più pulito e leggibile, con l'uso di font più moderni. La tabella degli eventi sportivi è stata riprogettata in modo più moderno.",
        url: 'images/monitor2.0.jpg'
      },
      {
        title:'Dettaglio Evento 1.0',
        description:"Prima versione del dettaglio evento che mostra le varie quote dei siti di betting, caratterizzata da un design semplice e funzionale piuttosto che estetico. La modale ha un layout semplice, con una lista dei bookmaker e le relative quote, organizzati in colonne e righe. Il testo è organizzato in modo chiaro e leggibile, utilizzando font semplici e di dimensioni adeguate. La funzionalità principale è quella di selezione delle scommesse desiderate con una navigazione diretta al sito del bookmaker. Non ci sono elementi visivi accattivanti o di branding, ma solo informazioni utili per gli utenti che cercano di puntare sulle scommesse sportive.",
        url: '/images/dettaglioEvento1.0.jpg'
      },
      {
        title:"Dettaglio Evento 2.0",
        description:"Seconda versione del dettaglio evento dall'aspetto moderno ed esteticamente accattivante, dove il design si fonde con la funzionalità in modo equilibrato. Rispetto alla versione precedente, questa modale presentare un layout più sofisticato, Il testo potrebbe è organizzato in modo gerarchico, con il nome, la tipologia, il tipo e l'orario del evento, per facilitare la comprensione delle informazioni. Sono presenti elementi visivi accattivanti, come il logo e i colori di background dei vari bookmaker che enfatizzano le quote e le rendono più chiare e visibili. Il design è in linea con l'immagine di branding del sito, con colori coordinati e font riconoscibili.",
        url: '/images/dettaglioEvento2.0.jpg'
      },
    ],
    '',
    '',
  ),
  new Page(
    'Nerds Ecomerce',
    ['React Native','Git','Expo'],
    "Il progetto punta a creare un finto ecomerce in cui poter eseguire acquisti, aggiungere prodotti al carrello ed iscriversi per gestire i propri dati come indirizzo di residenza o metodo di pagamento. NON INSERIRE DATI REALI IN CASO DI UTILIZZO DELL'APP",
    "NON INSERIRE DATI REALI IN CASO DI UTILIZZO DEL APP. Il progetto 'nerdEcommerce' è un'applicazione mobile sviluppata utilizzando la tecnologia React Native ed Expo. L'obiettivo principale del progetto è creare un finto e-commerce in cui gli utenti possono esplorare i prodotti, aggiungerli al carrello, effettuare il pagamento utilizzando metodi di pagamento salvati e gestire gli indirizzi di spedizione. Il progetto offre una vasta gamma di funzionalità, tra cui l'autenticazione dell'utente, la visualizzazione dei prodotti, la gestione del carrello, la gestione dei pagamenti e la gestione degli indirizzi di spedizione. Inoltre, offre anche una funzionalità di ricerca per aiutare gli utenti a trovare prodotti specifici.",
    false,
    [
      {
        title:"Home",
        description:"La homepage dell'e-commerce presenta una barra di ricerca in alto, dove gli utenti possono inserire parole chiave per cercare prodotti specifici. Tuttavia, il focus principale della pagina è dato dai vari box situati sotto la barra di ricerca, ognuno dei quali rappresenta un diverso franchiste di prodotti. Alcuni esempi di questi box sono quelli dedicati a marchi famosi come Marvel, Sony, e così via. All'interno di ogni box, gli utenti possono trovare una serie di card che rappresentano i prodotti di quella specifica marca, accompagnate dal immagine, nome e dal prezzo del prodotto. Inoltre, ogni card è cliccabile e porta l'utente alla pagina di dettaglio del prodotto corrispondente, dove è possibile trovare ulteriori informazioni sul prodotto stesso e procedere all'acquisto. In generale, la homepage dell'e-commerce è stata progettata per offrire un'esperienza utente accattivante e intuitiva, facilitando la navigazione degli utenti all'interno della piattaforma e rendendo più facile la ricerca e l'acquisto dei prodotti.",
        url: '/images/NerdsHome.jpg'
      },
      {
        title:"Items 1",
        description:"La parte superiore della pagina dettagli prodotto è progettata per mettere in evidenza l'immagine del prodotto, il nome e il prezzo. L'immagine del prodotto occupa una grande parte della sezione superiore della pagina, mentre il nome e il prezzo sono posizionati subito sotto l'immagine. Inoltre, sono presenti due pulsanti che permettono agli utenti di procedere all'acquisto del prodotto: 'Aggiungi al carrello' e 'Compra subito'. Questi pulsanti sono chiaramente visibili e posizionati in modo da facilitare la selezione dell'opzione preferita dall'utente. È importante notare che l'applicazione è progettata per essere responsive, il che significa che la sua interfaccia si adatta automaticamente alle diverse dimensioni dello schermo del cellulare su cui viene visualizzata. Ciò garantisce che l'esperienza utente sia uniforme e di alta qualità su tutti i dispositivi, indipendentemente dalle loro dimensioni. ",
        url: '/images/NerdsItemSell.jpg'
      },
      {
        title:"Items 2",
        description:"La parte inferiore della pagina dettagli prodotto è progettata per mostrare ai clienti altri prodotti che potrebbero interessare loro. Ci sono due sezioni principali che offrono consigli sui prodotti correlati: La prima sezione è basata sul franchise del prodotto che l'utente sta visualizzando. Ad esempio, se l'utente sta visualizzando un prodotto legato al franchise Marvel, la sezione di consigli presenta altri prodotti legati al franchise Marvel come fumetti, giocattoli o gadget. La seconda sezione di consigli si basa sulla tipologia di prodotto. Ad esempio, se l'utente sta visualizzando una console di gioco, la sezione di consigli presenta altre console di gioco ma di franchise diversi In entrambe le sezioni di consigli, ogni prodotto è rappresentato da una card con un'immagine, un nome e un prezzo. Inoltre, ogni prodotto è cliccabile e porta l'utente alla relativa pagina di dettaglio del prodotto. In generale, la parte inferiore della pagina dettagli prodotto è stata progettata per fornire ai clienti una selezione di prodotti correlati e suggeriti in modo da facilitare la loro esperienza di acquisto e offrire loro maggiori opzioni di acquisto.",
        url: '/images/NerdsItemSell2.jpg'
      },
      {
        title:"Fast Buy",
        description:"Quando l'utente preme il pulsante 'Compra subito', si aprirà una modale che varia in base alla sua condizione di accesso. Se l'utente non è ancora loggato nell'app, vedrà un modulo in cui dovrà inserire tutte le informazioni necessarie per effettuare l'acquisto. Il modulo richiederà informazioni come il nome completo dell'utente, l'indirizzo di spedizione, il tipo di carta di credito, il numero di carta di credito e il CVV. In fondo al modulo sarà presente il pulsante 'Compila i campi'. Quando l'utente avrà completato correttamente il modulo, il pulsante diventerà 'Acquista' e l'utente potrà procedere all'acquisto del prodotto. Inoltre, l'app gli consiglierà di effettuare il login per rendere l'operazione più veloce e fornirà un pulsante per accedere alla pagina di login. Se invece l'utente è già loggato nell'app, vedrà un riepilogo dei suoi dati di indirizzo e carta di credito. L'utente avrà la possibilità di aggiornare o modificare i dati se necessario. In questo caso, l'utente dovrà inserire solo il CVV della carta di credito e poi potrà premere sul pulsante 'Compra' per effettuare l'acquisto.",
        url: '/images/NerdsFastCheckout.jpg'
      },
      {
        title:"Cart",
        description:"La sezione del carrello dell'applicazione NerdEcommerce contiene un riepilogo di tutti i prodotti inseriti dal cliente. Ogni prodotto sarà rappresentato da una immagine, il nome del prodotto, il prezzo e la quantità presente all'interno del carrello. Inoltre, per ogni prodotto presente ci sarà un pulsante che consente di eliminarlo dal carrello. La tab bar dell'applicazione visualizza un'icona del carrello con una notifica che indica il numero di prodotti presenti al suo interno. Questo consente all'utente di vedere rapidamente il numero di prodotti che ha nel carrello senza dover aprire la sezione del carrello. Nella parte finale della sezione del carrello, verrà visualizzato il prezzo totale dei prodotti presenti nel carrello. In questo modo, l'utente può vedere rapidamente il totale della sua spesa. Infine, l'applicazione fornisce un pulsante 'Acquista', che consente all'utente di procedere con l'acquisto dei prodotti presenti nel carrello.",
        url: '/images/NerdsCart.jpg'
      },
      {
        title:"Checkout",
        description:"La sezione checkout di NerdEcommerce presenta alcune differenze a seconda che l'utente sia loggato o meno. Nel caso in cui l'utente non sia loggato, la sezione checkout visualizzerà un modulo in cui verranno richiesti tutti i dati necessari per completare l'acquisto. Questi dati includono il nome, l'indirizzo di spedizione, e le informazioni sulla carta di credito. In fondo alla pagina, l'utente troverà un pulsante 'Compila i campi' per inviare i dati e procedere all'acquisto. Una volta che l'utente ha completato il modulo con tutti i dati necessari, il pulsante 'Compila i campi' diventerà 'Acquista' e l'utente potrà confermare l'acquisto. Nel caso in cui l'utente sia loggato, la sezione checkout visualizzerà un riepilogo dei dati di spedizione e dei dettagli della carta di credito dell'utente. L'utente avrà la possibilità di modificare questi dati, se necessario, e dovrà inserire solo il codice di sicurezza CVV della carta di credito. Una volta completati questi passaggi, l'utente potrà premere il pulsante 'Acquista' per confermare l'acquisto.",
        url: '/images/NerdsCheckout.jpg'
      },
      {
        title:"Sections",
        description:"La sezione 'Sezioni' contiene diverse schede con il titolo delle varie sezioni dell'e-commerce, come ad esempio 'Videogiochi', 'Decoro', 'Console', ecc. Ogni scheda contiene una selezione di prodotti basati sulla categoria della sezione selezionata. Premendo su una scheda, si accede ad una pagina contenente una lista di prodotti relativi alla sezione selezionata. Ogni prodotto ha una propria scheda con la sua immagine, prezzo e nome, l’utente ha la possibilità di aggiungerlo al carrello. Questa sezione consente all'utente di esplorare le diverse categorie dell'e-commerce e trovare facilmente i prodotti che stanno cercando.",
        url: '/images/Nerdssections.jpg'
      },
      {
        title:"Account",
        description:"La sezione utente in nerdEcomerce è diversa in base al fatto che l'utente sia loggato o meno. Se l'utente non è loggato, la sezione visualizzata gli permette di effettuare il login inserendo le proprie credenziali oppure di iscriversi al sito premendo il pulsante 'Iscriviti'. Se invece l'utente è loggato, la sezione mostrerà un riepilogo dei suoi dati di indirizzo e carta di credito salvati, che possono essere modificati, oltre al pulsante 'Logout' per effettuare la disconnessione dal proprio account. Una volta che l'utente effettua il login o l'iscrizione, i suoi dati verranno salvati nel dispositivo, consentendogli di essere automaticamente loggato nell'applicazione ogni volta che la utilizza.",
        url: '/images/NerdsAuth.jpg'
      },
    ],
    'https://expo.dev/@lorenzopalumbo/NerdsEcomerce',
    'https://github.com/Pacho499/nerdsecomerce',
  ),
  new Page(
    'League of wiki',
    ['React.js','Git','Netlify','Bootstrap','TypeScript','SASS'],
    "Il progetto League of wiki utilizza l'API di League of Legends per creare un sito dedicato ai giocatori. Il sito fornisce dettagli sui personaggi, il rank e le ultime partite dei giocatori.",
    "Il progetto League of wiki utilizza l'API di League of Legends per creare un sito dedicato ai giocatori. Il sito fornisce dettagli sui personaggi, il rank e le ultime partite dei giocatori. Questo progetto mi ha dato l'opportunità di sperimentare le tecnologie front end moderne e di migliorare le mie capacità di sviluppo. Ho lavorato diligentemente per garantire che il sito fosse intuitivo e facile da usare, oltre a essere esteticamente piacevole.",
    false,
    [
      {
        title:"Home",
        description:"Si presenta con un design accattivante e ricco di elementi grafici ispirati al tema del gioco. Come elemento principale è presente una barra di input per la ricerca dei giocatori, dove l'utente può inserire il nome del giocatore che desidera trovare. Sotto alla barra di ricerca sono presenti una serie di bottoni per selezionare lo stato in cui l’account del giocatore si trova. Inoltre, è presente un'area dedicata ai personaggi gratuiti della settimana, dove vengono presentati i personaggi disponibili per l'uso gratuito in quella determinata settimana. Questa sezione è presentata come una serie di immagini. In alto abbiamo un menu di navigazione che consente all'utente di accedere alle diverse sezioni del sito, come le informazioni sui personaggi ed il proprio account.",
        url: '/images/leagueOfWikiHome.jpg'
      },
      {
        title:"Find Champ",
        description:"Si presenta con un layout moderno e accattivante, dove l'utente può cercare e scegliere il personaggio desiderato per avere maggiori informazioni. Nella parte superiore della pagina è presente una barra di input, dove l'utente può inserire il nome del personaggio che desidera trovare. Sotto alla barra di ricerca sono presentati i personaggi disponibili, organizzati in una griglia di card. Ogni card contiene l'immagine del personaggio ed il nome.",
        url: '/images/leagueOfWikiChamps.jpg'
      },
      {
        title:"Champ Info",
        description:"Si presenta con un layout accattivante e informativo. La pagina inizia con una sezione a sinistra, che mostra un'immagine del personaggio, accompagnata dal nome e dal ruolo seguito da una stella per metterlo tra i preferiti. A destra abbiamo una breve descrizione della storia del personaggio. Successivamente, la pagina mostra una sezione che riguarda i consigli di gioco. In basso a destra è presente un carosello di immagini, che mostra tutte le skin disponibili, consentendo all'utente di visualizzare le diverse opzioni di personalizzazione. Infine in basso a sinistra è presente una sezione dedicata alle abilità, dove ogni abilità è rappresentata da un'immagine, accompagnata dal nome, dalla descrizione e dal costo.",
        url: '/images/leagueOfWikiChampInfo.jpg'
      },
      {
        title:"Account",
        description:"Organizzata in modo semplice ed intuitivo, con una lista laterale a sinistra che contiene l’elenco dei nostri giocatori preferiti e una lista a destra con l’elenco dei nostri personaggi preferiti. Ogni giocatore è rappresentato da una miniatura dell'immagine profilo, accompagnata dal nome e dal suo livello. L’elenco dei personaggi preferiti invece sono rappresentanti da una miniatura dell'immagine, accompagnata dal nome.",
        url: '/images/leagueOfWikiAccount.jpg'
      },
      {
        title:"Player Info",
        description:"Ha una disposizione simile a quella di una scheda. Nella parte superiore della pagina, a sinistra, è presente il nome del giocatore ed il suo livello, mentre a destra sono visualizzati i suoi rank (flex, soloQ e TFT), ovvero la sua posizione nella classifica del gioco. È presente una tabella con tutti gli ultimi match giocati dal giocatore, con informazioni quali la durata della partita, il personaggio scelto, il risultato della partita, la build e il punteggio. Questa tabella è organizzata in modo che sia facile da consultare e che permetta all'utente di visualizzare rapidamente le informazioni sulla partita.",
        url: '/images/leagueOfWikiSummoner.jpg'
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
        description:"Dimostrazione della sezione delle regole che si apre a tenda.",
        url: '/images/setteMezzoRules.png'
      },
      {
        title:"Game",
        description:"Rappresentazione di una partita in cui il giocatore ha vinto, possiamo notare le carte dei due giocatori e come lo score si sia aggiornato, inoltre abbiamo il verdetto del gioco sul risultato della partita.",
        url: '/images/setteMezzoGame.jpg'
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
        description:"Proprio come il sito originale il bottone accedi diventerà cliccabile solo nel momento in cui verrano rispettati determinati parametri di lunghezza degli input, inoltre abbiamo la possibilità di vedere la password che stiamo inserendo. Cliccando sul bottone 'iscriviti' avremo la possibilità di navigare al SignUp.",
        url: '/images/fakeInstaLogin.jpg'
      },
      {
        title:"SignUp",
        description:"Proprio come il sito originale il bottone 'avanti' diventa attivo solo dopo che gli input avranno soddisfatto le condizioni richieste. Tutte le scritte riprendono quelle originali.",
        url: '/images/fakeInstaSignUp.png'
      },
      {
        title:"Home",
        description:"Formata da una serie di post falsi creati tramite diverse api che generano nomi e immagini casuali, possiamo notare che un altra api è stata utilizzata per la sezione 'suggerimenti'. In alto troviamo la classica barra di instagram con le sezione home, direct, post, notifiche e profilo, possiamo notare che la sezione profilo è la nostra attuale immagine profilo.",
        url: '/images/fakeInstaHome.jpg'
      },
      {
        title:"Base profile",
        description:"I follower e i profili seguiti sono un numero fisso, abbiamo a disposizione però il conteggio dei post ed il bottone 'Modifica Profilo' che ci permette di cambiare le impostazioni del nostro account.",
        url: '/images/fakeInstaBaseProfile.png'
      },
      {
        title:"Profile settings",
        description:"Essa è formata da un semplice box in cui possiamo inserire tutti gli input per cambiare le nostre impostazioni, possiamo cambiare nome, nome Utente, bio e foto profilo proprio come sul sito originale.",
        url: '/images/fakeInstaProfileSettings.png'
      },
      {
        title:"Home after post",
        description:"Proprio come nel sito originale dopo aver caricato una foto verremo condotti alla home di instagram e vedremo come primo post la foto appena caricata seguita da post fake. Se dovessimo cambiare o ricaricare la pagina avremo a disposizione altri post fake.",
        url: '/images/fakeInstaHomePost.jpg'
      },
      {
        title:"Profile",
        description:"Possiamo notare che il valore dei post è salito e si basa effettivamente sui post caricati dal utente, inoltre notiamo come caricando una foto profilo anche l'header cambia avendo una miniatura della foto profilo dell'utente.",
        url: '/images/fakeInstaProfile.jpg'
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
        url: '/images/valueConverterStart.jpg'
      },
      {
        title:"Convert",
        description:"Una volta convertito il valore la pagina ci restituirà il risultato e metterà a nostra disposizione un bottone di informazione sulla valuta scelta, essa ci porterà alla pagina 'info valute'.",
        url: '/images/valueConverterDone.jpg'
      },
      {
        title:"Info",
        description:"Si presenta con un design molto semplice. Nella parte alta abbiamo a disposizione una lista di bottoni che rappresentano i vari continenti. Essi ci porteranno alla sezione delle valute dei rispettivi continenti. Il box della descrizione è formato dal nome, una descrizione della storia ed una foto della valuta. Il tasto 'più informazioni' ci poterà alla pagina wikipedia della valuta.",
        url: '/images/valueConverterInfo.jpg'
      },
    ],
    'https://valueconverterlorenzopalumbo.netlify.app',
    'https://github.com/Pacho499/Convertitore',
  ),
  new Page(
    'Clone sito UniversApp',
    ['HTML', 'SASS'],
    'Primo progetto del corso in cui ho sperimentato le basi dello sviluppo web. Il sito è un clone della vecchia homepage di universapp.',
    "Questo progetto consiste nella creazione di un clone del vecchio sito di Universapp utilizzando HTML e SASS come linguaggi di programmazione. L'obiettivo è quello di replicare l'interfaccia utente e le funzionalità principali del sito originale. Il codice HTML è stato scritto per essere ben strutturato e accessibile, mentre SASS è stato utilizzato per creare un design che sia coerente con lo stile del sito originale. Il progetto è stato sviluppato per soddisfare i requisiti del compito assegnato per il corso di Universapp e dimostra la capacità di creare un sito web funzionale utilizzando HTML e SASS.",
    false,
    [
      {
        title:"Hero",
        description:"Rappresentazione della sezione Hero.",
        url: '/images/universAppHero.jpg'
      },
      {
        title:"Arguments",
        description:"Rappresentazione della sezione argomenti.",
        url: '/images/universAppArguments.jpg'
      },
      {
        title:"Difference",
        description:"Rappresentazione delle differenze.",
        url: '/images/universAppTable.jpg'
      },
      {
        title:"Stats",
        description:"Rappresentazione delle statistiche in Italia sui tech job.",
        url: '/images/universAppStats.jpg'
      },
    ],
    'https://fakeuniversapp.netlify.app/',
    'https://github.com/Pacho499/Universapp-test-css',
  ),
];

export default PagesDatas;

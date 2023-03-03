import { useLocation, useParams, Link } from "react-router-dom"
const Info = () => {
    const props = useParams()
    const location = useLocation()
    const state = location.state
    console.log(location)
    console.log(state)
    console.log(props)
    const url = process.env.PUBLIC_URL
    return(
        <div>
            <div className='flex fixed w-full top-0 z-10 justify-between border-b-4 border-pink bg-main'>
                <div className="mb-4">
                    <img className="h-24 ml-16 mt-4" height="100px" src={url + ('/images/logo.png')} alt="logo" />
                </div>
                <Link to='/' className="flex items-center mr-10">
                    <button className="MenuButton">Torna alla home</button>
                </Link>
                
            </div>
           <div className="w-[90%] m-auto mt-40">
            <h1>{props.project}</h1>
            <h2>Descrione</h2>
            <div className="p-2 bg-main border-4 border-pink rounded-lg" >
              <p>Il progetto League of wiki utilizza l'API di League of Legends per creare un sito dedicato ai giocatori. Il sito fornisce dettagli sui personaggi, il rank e le ultime partite dei giocatori.
                Questo progetto mi ha dato l'opportunità di sperimentare le tecnologie front-end moderne e di migliorare le mie capacità di sviluppo. Ho lavorato diligentemente per garantire che il sito fosse intuitivo e facile da usare, oltre a essere esteticamente piacevole.</p>  
            </div>
            <a target='_blank' rel="noreferrer" href=" https://leagueofwiki.netlify.app/">Sito Web</a>
            <a target='_blank' rel="noreferrer" href="https://github.com/Pacho499/league">Codice</a>
            
        </div> 
        </div>
        
    )
}

export default Info
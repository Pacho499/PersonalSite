import { useLocation, useParams, Link } from "react-router-dom"
import Footer from "../components/Footer"
import ImageSlider from "../components/ImageSlider"
const Info = () => {
    const props = useParams()
    const location = useLocation()
    const state = location.state.pageData
    const url = process.env.PUBLIC_URL
    return(
        <div>
            {/* Header */}
            <div className='flex fixed w-full top-0 z-10 justify-between border-b-4 border-pink bg-main'>
                <div className="mb-4">
                    <img className="h-24 ml-16 mt-4" height="100px" src={url + ('/images/logo.png')} alt="logo" />
                </div>
                <Link to='/' className="flex items-center mr-10">
                    <button className="MenuButton">Torna alla home</button>
                </Link>
            </div>
            {/* body */}
           <div className="w-[90%] m-auto mt-40">
            <h1 className="text-3xl mb-10 font-bold text-black">{props.project}</h1>
                <ImageSlider imagesData={state.images} git={state.git} www={state.www}/>
            
            <h2 className="text-center mt-20 mb-10 text-3xl font-bold text-black">Descrzione</h2>
            <div className="p-2 bg-pink border-4 border-main mb-10 rounded-lg" >
                <p  className="text-xl text-black">
                    {state.description}  
                </p>  
            </div>
        </div>
         <Footer/>
        </div>
        
    )
}

export default Info
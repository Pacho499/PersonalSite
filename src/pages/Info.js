import { useLocation, useParams, Link } from "react-router-dom"
import { useEffect } from "react"
import Footer from "../components/Footer"
import ImageSlider from "../components/ImageSlider"
const Info = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const props = useParams()
    const location = useLocation()
    const state = location.state.pageData
    const url = process.env.PUBLIC_URL
    return(
        <div>
            {/* Header */}
            <div className='flex w-full top-0 z-10 justify-between border-b-4 border-pink bg-main'>
                <Link to={'/'} className="mb-4">
                    <img className="h-24 ml-16 mt-4 max-laptopXS:ml-[20px]" height="100px" src={url + ('/images/logo.png')} alt="logo" />
                </Link>
                <Link tabIndex={-1} to='/' className="flex items-center mr-10 max-laptopXS:mr-[20px]">
                    <button className="MenuButton">Torna alla home</button>
                </Link>
            </div>
            {/* body */}
           <div className="w-[95%] m-auto mt-8">
            <h1 className="text-3xl mb-10 font-bold text-black">{props.project}</h1>
            <div className="p-4 bg-pink border-4 border-main mb-10 rounded-lg" >
                <p  className="text-xl text-black">
                    {state.description}  
                </p>  
            </div>
                {state.images.length <= 0 ? null : <ImageSlider imagesData={state.images} git={state.git} www={state.www} work={state.work}/> }
        </div>
         <Footer/>
        </div>
        
    )
}

export default Info
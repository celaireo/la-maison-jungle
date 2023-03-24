import logo from '../assets/logo-lmj.png'
import '../styles/Banner.css'

function Banner(){
    const title = "La Maison Jungle"
    return(
        <div className='lmj-banner'>
        <img src={logo} alt='La maison jungle' className='lmj-logo' />
        <h1 className='lmj-title'>{title.toUpperCase()}</h1> 
        </div>
    )
}

export default Banner;
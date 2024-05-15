import "./ServiceHeaders.css"
import Agilewitgrey from '../Assets/Agilewitgrey.svg'
const ServiceHeaders=(props)=>{
    const{ServiceHeadersInfo}=props
    return(
      
        <div className='AboutUsTopLayer'>
            <h1 className="PropName">{ServiceHeadersInfo}</h1>
        <img className='AgilewitLogoAboutUs' src={Agilewitgrey} alt="AgilewitLogo" />
        </div>


    )
}

export default ServiceHeaders
import { Link } from 'react-router-dom'
import {DropDownContent} from '../../constant/DropDownContent'
import CloseIcon from '../CloseIcon.png'
import "./DropDoownForMobile.css"

const DropDoownForMobile = () => {
    const{Expolre,Service,Product,AboutUS,CurrentOpening,Consulting,AppDevelopment,Training,Consen,Letsworktogether}=DropDownContent
    return (

       
        <div className="MobileDropDownProfile">
        <Link to="/" className='DropDownIcone'>
            <img src={CloseIcon} alt="CloseIcone"  />

            </Link>

        <div className="MobileDropDownFirstLayer">
            <div className="MobileDropDownSecondLayer">
                <h1>{Expolre}</h1>
                <h1>{Service}</h1>
                <h1>{Product}</h1>
            </div>

           
            <div className='MobileLetsWorkTogetherContainer'>
                <Link to="/ContactUs" className="LinkRemove">
                    <p className="LetWorktogethers" >{Letsworktogether}</p>
                </Link>
            </div>
        </div>

    </div>

          
    )
}

export default DropDoownForMobile
import { Link } from 'react-router-dom'
import CloseIcon from './CloseIcon.png'
import DeskTopHeader from '../DeskTopHeader/DeskTopHeader'
import {DropDownContent} from '../constant/DropDownContent'
import "./DropDown.css"

const DropDown = () => {
    const{Expolre,Service,Product,AboutUS,CurrentOpening,Consulting,AppDevelopment,Training,Consen,Letsworktogether}=DropDownContent
    return (

        <div className='HomeTopLayer'>

            <DeskTopHeader />
            <div className="DropDownProfile">
                <Link to="/" className='DropDownIcone'>
                    <img src={CloseIcon} alt="CloseIcone"  />

                    </Link>

                <div className="DropDownFirstLayer">
                    <div className="DropDownSecondLayer">
                        <h1>{Expolre}</h1>
                        <h1>{Service}</h1>
                        <h1>{Product}</h1>
                    </div>

                    <div className="DropDownSecondLayer">
                        <div>

                            <Link className="LinkRemove" to="/About">
                                <p>{AboutUS}</p>
                            </Link>

                            <Link to="/Jobs" className="LinkRemove" >
                                <p>{CurrentOpening}</p>
                            </Link>
                        </div>
                        <div>
                            <Link to="/Consulting" className="LinkRemove" >
                                <p>{Consulting}</p>
                            </Link>
                            <Link className="LinkRemove" to="/AppDevelopment" >
                                <p>{AppDevelopment}</p>
                            </Link>
                            <Link to="/Training" className="LinkRemove" >
                                <p>{Training}</p>
                            </Link>

                        </div>
                        <div>
                            <Link to="/Consen" className="LinkRemove" >
                                <p>{Consen}</p>
                            </Link>
                        </div>

                    </div>
                    <div className='LetsWorkTogetherContainer'>
                        <Link to="/ContactUs" className="LinkRemove">
                            <p className="LetWorktogethers" >{Letsworktogether}</p>
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default DropDown
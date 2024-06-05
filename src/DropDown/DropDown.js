import { Link } from 'react-router-dom'
import CloseIcon from './CloseIcon.png'
import DeskTopHeader from '../DeskTopHeader/DeskTopHeader'
import "./DropDown.css"

const DropDown = () => {
    return (

        <div className='HomeTopLayer'>

            <DeskTopHeader />
            <div className="DropDownProfile">
                <Link to="/" className='DropDownIcone'>
                    <img src={CloseIcon} alt="CloseIcone"  />

                    </Link>

                <div className="DropDownFirstLayer">
                    <div className="DropDownSecondLayer">
                        <h1>EXPLORE</h1>
                        <h1>SERVICE</h1>
                        <h1>PRODUCT</h1>
                    </div>

                    <div className="DropDownSecondLayer">
                        <div>

                            <Link className="LinkRemove" to="/About">
                                <p>ABOUT US</p>
                            </Link>

                            <Link to="/Jobs" className="LinkRemove" >
                                <p>CAREER OPENINGS</p>
                            </Link>
                        </div>
                        <div>
                            <Link to="/Consulting" className="LinkRemove" >
                                <p>COUNSULTING</p>
                            </Link>
                            <Link className="LinkRemove" to="/AppDevelopment" >
                                <p>APP DEVELOPEMENT</p>
                            </Link>
                            <Link to="/Training" className="LinkRemove" >
                                <p>TAINING</p>
                            </Link>

                        </div>
                        <div>
                            <Link to="/Concen" className="LinkRemove" >
                                <p>CONSEN</p>
                            </Link>
                        </div>

                    </div>
                    <div className='LetsWorkTogetherContainer'>
                        <Link to="/Contact" className="LinkRemove">
                            <p className="LetWorktogether" >LETS WORK TOGETHER +</p>
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default DropDown
import { Link } from 'react-router-dom'
import CloseIcon from './CloseIcon.png'
import "./DropDown.css"

const DropDown = () => {
    return (
        <div className="DropDownProfile">

            <img src={CloseIcon} alt="CloseIcone" className='DropDownIcone' />

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
                        <Link to="/Counsulting" className="LinkRemove" >
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
                <div className="LetsWorkTogether">
                    <Link to="/Contact">
                        <p className="LetWorktogether" >LETS WORK TOGETHER +</p>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default DropDown
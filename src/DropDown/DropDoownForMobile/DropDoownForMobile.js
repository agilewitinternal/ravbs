



import React from 'react';
import { Link } from 'react-router-dom';
import { DropDownContent } from '../../constant/DropDownContent';
import CloseIcon from '../CloseIcon.png';
import './DropDoownForMobile.css';

const DropDownForMobile = () => {
    const{Expolre,Service,Product,AboutUS,CurrentOpening,Consulting,AppDevelopment,Training,Consen,Letsworktogether}=DropDownContent
    
    return (
        <div className="MobileDropDownProfile">
            <Link to="/" className="DropDownIcon">
                <img src={CloseIcon} alt="Close Icon" />
            </Link>

            <div className="MobileDropDownFirstLayer">
                <div className="MobileDropDownSecondLayer">
                    <details>
                    <summary>{Expolre}</summary>
                    <Link className="LinkRemove" to="/AboutUs">
                        <p>{AboutUS}</p>
                    </Link>

                    <Link to="/Jobs" className="LinkRemove" >
                        <p>{CurrentOpening}</p>
                    </Link>
                    </details>
                    <details>
                        <summary>{Service}</summary>
                        <Link to="/Consulting" className="LinkRemove" >
                        <p>{Consulting}</p>
                    </Link>
                    <Link className="LinkRemove" to="/MobileAppDevelopment" >
                        <p>{AppDevelopment}</p>
                    </Link>
                    <Link to="/Training" className="LinkRemove" >
                        <p>{Training}</p>
                    </Link>
                    </details>
                    
                  <details>
                    <summary>{Product}</summary>
                    <Link to="/Consen" className="LinkRemove" >
                        <p>{Consen}</p>
                    </Link>
                    <Link to="/TimeSheet" className='Links'>TIMESHEET

                </Link>
                <Link to="/Updatecurrentopenings" className='Links'>
                        <p>UpdatOpenings</p>
                        </Link>
                  </details>
                </div>

                <div className="MobileLetsWorkTogetherContainer">
                    <Link to="/ContactUs" className="LinkRemove">
                        <p className="LetWorktogether">{Letsworktogether}</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DropDownForMobile;

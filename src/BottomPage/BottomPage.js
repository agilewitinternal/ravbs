import { Link } from 'react-router-dom';
import AgilewitsWhite from '../Assets/Agilewitswhite.svg';

import {BottomPageContent,SocialMediaIconsArray} from '../constant/BottomPage'
import "./BottomPage.css";

const BottomPage = () => {
    const{Explore,AboutUs,Career,Openings,AppDevelopment,Training,Service,Consulting,Product,Consent,Contact,CompanyUSAAddress,CompanyIndiaAddress,CompanyMail,EndTitle}=BottomPageContent
    return (
        <div className='BottomPageTopOne'>
            <div className="BottomPageTopLayer">
                <div className='BottomPageFirstLayer'>
                    <img className='AgilewitBottomPageLogo' src={AgilewitsWhite} alt="Agilewit Logo" />
                    <div className='SocialMediaIcons'>
                        {SocialMediaIconsArray.map((each)=>  <img src={each} alt='SocialMediaAppIcon' />)}
                      
                       
                    </div>
                </div>
                <div className='ServiceRow'>
                    <div className='BottomPageServices'>
                        <h3>{Explore}</h3>
                        <Link className="Links" to="/AboutUs">
                            <p>{AboutUs}</p>
                        </Link>
                        <p>{Career}</p>
                        <p>{Openings}</p>
                    </div>

                    <div className='BottomPageServices'>
                        <h3> {Service}</h3>
                        <Link className="Links" to="/Consulting">
                            <p>{Consulting}</p>
                          
                            
                        </Link>
                        <Link className="Links" to="/MobileAppDevelopment">
                        <p>{AppDevelopment}</p>
                        </Link>
                        <p>{Training}</p>
                       
                    </div>
                    <div className='BottomPageServices'>
                        <h3>{Product}</h3>
                        <p>{Consent}</p>
                    </div>
                    <div className='BottomPageServices CONTACT'>
                        <Link to="/ContactUs" className="Links">
                        <h3>{Contact}</h3>
                        </Link>
                        <p>{CompanyUSAAddress}</p>
                        <p>{CompanyIndiaAddress}</p>
                    </div>
                </div>
                <p className='InfoMail'>{CompanyMail}</p>
            </div>
            <hr className='BottomPageLine' />
            <p className='FinalLineContent'>{EndTitle}</p>
        </div>
    )
}

export default BottomPage;

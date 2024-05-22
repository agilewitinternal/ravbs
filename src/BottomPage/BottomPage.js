import { Link } from 'react-router-dom';
import AgilewitsWhite from '../Assets/AgilewitsWhite.svg';
import FacebookIcon from '../Assets/FacebookIcon.svg';
import LinkedInIcon from '../Assets/LinkedInIcon.svg';
import TwitterIcon from '../Assets/TwitterIcon.svg';
import {BottomPageContent} from '../Data/Data'
import "./BottomPage.css";

const BottomPage = () => {
    const{Explore,AboutUs,Career,Openings,AppDevelopment,Training,Service,Consulting,Product,Consent,Contact,CompanyUSAAddress,CompanyIndiaAddress,CompanyMail,EndTitle}=BottomPageContent
    return (
        <div className='BottomPageTopOne'>
            <div className="BottomPageTopLayer">
                <div className='BottomPageFirstLayer'>
                    <img className='AgilewitBottomPageLogo' src={AgilewitsWhite} alt="Agilewit Logo" />
                    <div className='SocialMediaIcons'>
                        <img src={FacebookIcon} alt='FacebookIcon' />
                        <img src={TwitterIcon} alt="TwitterIcon" />
                        <img src={LinkedInIcon} alt='LinkedInIcon' />
                    </div>
                </div>
                <div className='ServiceRow'>
                    <div className='BottomPageServices'>
                        <h1>{Explore}</h1>
                        <Link className="Links" to="/AboutUs">
                            <p>{AboutUs}</p>
                        </Link>
                        <p>{Career}</p>
                        <p>{Openings}</p>
                    </div>

                    <div className='BottomPageServices'>
                        <h1> {Service}</h1>
                        <Link className="Links" to="/Consulting">
                            <p>{Consulting}</p>
                          
                            
                        </Link>
                        <Link className="Links" to="/MobileAppDevelopment">
                        <p>{AppDevelopment}</p>
                        </Link>
                        <p>{Training}</p>
                       
                    </div>
                    <div className='BottomPageServices'>
                        <h1>{Product}</h1>
                        <p>{Consent}</p>
                    </div>
                    <div className='BottomPageServices CONTACT'>
                        <h1>{Contact}</h1>
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

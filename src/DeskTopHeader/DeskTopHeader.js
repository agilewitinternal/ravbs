import { Link } from 'react-router-dom';
import AgileWitLogoBlue from '../Assets/AgilewitLogo.svg';
import FacebookIcon from '../Assets/FaceBookIcon.svg';
import LinkedInIcon from '../Assets/LinkedInIcon.svg';
import TwitterIcon from '../Assets/TwitterIcon.svg';
import {DeskTopHeaderContent} from '../constant/DeskTopHeader'
import './DeskTopHeader.css';

const DesktopHeader = () => {
    const{CompanyCaption,ContactInfo}=DeskTopHeaderContent
    return (
        <div className="DesktopHeaderTopLayer">
            <div>
                <Link to="/" className="Links">
                    <img className='LogoAgileWit' src={AgileWitLogoBlue} alt="AgileWit Logo" />
                </Link>
                <hr className="Hr" />
            </div>
            <p className='DesktopIntro'>{CompanyCaption}</p>
            <p className='ContactInfo'>{ContactInfo}</p>
            <div className='SocialMediaIcons'>
                <img src={FacebookIcon} alt='Facebook Icon'/>
                <img src={TwitterIcon} alt="Twitter Icon"/>
                <img src={LinkedInIcon} alt='LinkedIn Icon'/>
            </div>
        </div>
    );
}

export default DesktopHeader;

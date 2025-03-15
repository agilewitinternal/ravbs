import { Link } from 'react-router-dom';
import AgileWitLogoBlue from '../Assets/Agilewitswhite.png';
import {DeskTopHeaderContent} from '../constant/DeskTopHeader'
import { SocialMediaIconsArray } from '../constant/BottomPage'
import './DeskTopHeader.css';

const DesktopHeader = () => {
    const{CompanyCaption,ContactInfo}=DeskTopHeaderContent
    return (
        <div className="DesktopHeaderTopLayer">
            <div>
                <Link to="/" className="Links">
                    <img className='LogoAgileWit' src={AgileWitLogoBlue} alt="AgileWitLogo" />
                </Link>
                <hr className="Hr" />
            </div>
            <p className='DesktopIntro'>{CompanyCaption}</p>
            <p className='ContactInfo'>{ContactInfo}</p>
            <div className='SocialMediaIcons'>
    {SocialMediaIconsArray.map((each, index) => 
        
            <a key={index} href={each.SocialMediLink} target='_blank' rel='noopener noreferrer'>
                <img src={each.SocialMediaIcon} alt='SocialMediaAppIcon' style={{height:"20px"}} />
            </a>
        
    )}
</div>
        </div>
    );
}

export default DesktopHeader;

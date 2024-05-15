import { Link } from 'react-router-dom'
import AgilewitLogoBlue from '../Assets/AgilewitsLogo.svg'
import FaceBookIcon from '../Assets/FaceBookIcon.svg'
import LinkedInIcon from '../Assets/LinkedInIcon.svg'
import TwitterIcon from '../Assets/TwitterIcon.svg'
import './DeskTopHeader.css'
const DeskTopHeader = () => {
    return (
        <div className="DeskTopHeaderTopLayer">
            <div>
                <Link to="/" className="Links">
            <img className='LogoAgilewit' src={AgilewitLogoBlue} alt="AgilewitLogo" />
            </Link>
            <hr className="Hr" />
            </div>
            <p className='DesktopIntro'>"Technology empowers us to dream beyond boundaries and make those dreams a reality."</p>
            <p className='ContactInfo'>(516) 888-0089
                info@agilewits.com</p>
<div className='SocialMediaIcons'>
<img src={FaceBookIcon} alt='FaceBookIcon'/>
<img src={TwitterIcon} alt="TwitterIcon"/>
<img src={LinkedInIcon} alt='LinkrdInIcon'/>
</div>
        </div>
    )
}

export default DeskTopHeader
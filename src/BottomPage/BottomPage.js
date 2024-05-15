import { Link } from 'react-router-dom'
import Agilewitswhite from '../Assets/Agilewitswhite.svg'
import FaceBookIcon from '../Assets/FaceBookIcon.svg'
import LinkedInIcon from '../Assets/LinkedInIcon.svg'
import TwitterIcon from '../Assets/TwitterIcon.svg'
import "./BottomPage.css"
const BottomPage = () => {
    return (
        <div className='BottomPageTopOne'>
            <div className="BottomPageTopLayer">
                <div className='BottomPageFirstLayer'>
                    <img className='AgilewitBottomPageLogo' src={Agilewitswhite} alt="Agilewit Logo" />
                    <div className='SocialMediaIcons'>
                        <img src={FaceBookIcon} alt='FaceBookIcon' />
                        <img src={TwitterIcon} alt="TwitterIcon" />
                        <img src={LinkedInIcon} alt='LinkrdInIcon' />
                    </div>
                </div>
                <div className='ServiceRow'>
                    <div className='BottomPageServices'>
                        <h1>EXPLORE</h1>
                        <Link className="Links" to="/AboutUs">
                            <p>About Us</p>
                        </Link>
                        <p>Careers</p>
                        <p>Current Openings</p>
                    </div>

                    <div className='BottomPageServices'>
                        <h1>PRODUCT</h1>
                        <Link className="Links" to="/AboutUs">
                            <p>About Us</p>
                        </Link>
                        <p>Careers</p>
                        <p>Current Openings</p>
                    </div>
                    <div className='BottomPageServices'>
                        <h1>SERVICES</h1>
                        <p>CONSEN</p>

                    </div>
                    <div className='BottomPageServices CONTACT'>
                        <h1>CONTACT</h1>
                        <p>AGILEWIT SOLUTIONS INC
                            405 State Hwy 121 Bypass Suite A250,
                            Lewisville TX 75067
                            Phone Number: (516) 888-0089</p>
                        <p>AGILEWIT SOLUTIONS PVT LTDH NO.3-1-101/6,Navodaya Colony,
                            Road No 2,Sbh Venture-I, LB NagarHyderabad,Telangana,India,50074
                            Phone Number: 040-48547228</p>

                    </div>

                </div>
                <p className='InfoMail'>info@agilewits.com</p>

            </div>
            <hr className='BottomPageline' />
            <p className='FinelLineContent'>© Agilewit Solutions Inc</p>
        </div>
    )
}

export default BottomPage
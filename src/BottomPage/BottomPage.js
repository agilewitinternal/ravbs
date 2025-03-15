import { Link } from 'react-router-dom';
import AgilewitsWhite from '../Assets/Agilewitswhite.png';
import { BottomPageContent, SocialMediaIconsArray } from '../constant/BottomPage'
import "./BottomPage.css";

const BottomPage = () => {
    const { Explore, AboutUs, Career, CurrentOpenings, AppDevelopment, Training, Service, Consulting, Product, Consent, Contact, CompanyUSAAddress, CompanyIndiaAddress, CompanyMail, EndTitle } = BottomPageContent
    return (
        <div className='BottomPageTopOne'>
            <div className="BottomPageTopLayer">
                <div className='BottomPageFirstLayer'>
                    <img className='AgilewitBottomPageLogo' src={AgilewitsWhite} alt="Agilewit Logo" />
                    <div className='SocialMediaIcons'>
    {SocialMediaIconsArray.map((each, index) => 
        
            <a key={index} href={each.SocialMediLink} target='_blank' rel='noopener noreferrer'>
                <img src={each.SocialMediaIcon} alt='SocialMediaAppIcon' style={{height:"20px"}} />
            </a>
        
    )}
</div>
                    
                </div>
                <div className='ServiceRow'>
                    <div className='BottomPageServices'>
                        <h3>{Explore}</h3>
                        <Link className="Links" to="/AboutUs">
                            <p>{AboutUs}</p>
                        </Link>
                        <Link to="/Jobs" className="Links" >
                            <p>{Career}</p>
                        </Link>
                        <Link to="/Jobs" className="Links" >
                            <p>{CurrentOpenings}</p>
                        </Link>
                    </div>

                    <div className='BottomPageServices'>
                        <h3> {Service}</h3>
                        <Link className="Links" to="/Consulting">
                            <p>{Consulting}</p>


                        </Link>
                        <Link className="Links" to="/MobileAppDevelopment">
                            <p>{AppDevelopment}</p>
                        </Link>
                        <Link to="/Training" className="Links">
                            <p>{Training}</p>
                        </Link>

                    </div>
                    <div className='BottomPageServices'>
                        <h3>{Product}</h3>
                        <Link to="/Consen" className="Links">
                            <p>{Consent}</p>
                        </Link>
                        <Link to="/TimeSheet" className='Links'>
                        TimeSheet
                        </Link>
                        <Link to="/Updatecurrentopenings" className='Links'>
                        <p>NewJobPost</p>
                        </Link>
                        
                        
                    </div>
                    <div className='BottomPageServices CONTACT'>
                        <Link to="/ContactUs" className="Links">
                            <h3>{Contact}</h3>
                        </Link>
                        <p>{CompanyUSAAddress}</p>
                        <p>{CompanyIndiaAddress}</p>
                        <p className='InfoMail'>{CompanyMail}</p>
                    </div>
                </div>
             
            </div>
            <hr className='BottomPageLine' />
            <p className='FinalLineContent'>{EndTitle} {new Date().getFullYear()}</p>
        </div>
    )
}

export default BottomPage;

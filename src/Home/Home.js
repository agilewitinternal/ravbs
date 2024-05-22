import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import DeskTopHeader from '../DesktopHeader/DesktopHeader';
import AgilewitGrey from '../Assets/Agilewitgrey.svg';
import Options from "../Assets/Options.svg";
import Beaconhill from '../Assets/Beaconhill-staffing.svg';
import Alpine from '../Assets/Alpine.svg';
import Experis from '../Assets/experis-logo.svg';
import Info from '../Assets/InfoVision-Logo-200px.svg';
import AgilewitLogoBlue from '../Assets/AgilewitLogoBlue.svg';
import ServiceItems from '../ServiceItems/ServiceItems';
import { ServiceDetails, Achievement, Partners, HomePageContent,AboutUsContents } from '../Data/Data';
import PartnerOpinionItems from '../PartnerOpinionItems/PartnerOpinionItems';
import AchievementItem from '../AchievementItem/Achievmentitem';
import BottomPage from '../BottomPage/BottomPage';
import ChatIcon from '../Assets/ChatIcon.svg';
import './Home.css';

const Home = () => {
    const [randomNumber, setRandomNumber] = useState(0);

    const { HomeTitle, HomePageMainHeading, MobileViewCaption, HomePageTagLine, LetsWork,ShareYourIdea,IdeaDescription } = HomePageContent;
    const {PartnersOpinionTitlePartOne,PartnersOpinionTitlePartTwo,PartnersOpinionTitlePartThree}=AboutUsContents

    useEffect(() => {
        const Timer = setInterval(() => {
            setRandomNumber(prevState => {
                if (prevState === Partners.length - 1) {
                    setRandomNumber(0);
                }
                return prevState + 1;
            });
        }, 2000);
        return () => clearInterval(Timer);
    }, []);

    return (
        <div className='HomeTopLayer'>
            <Header />
            <DeskTopHeader />

            <p className="IntroDescription">{MobileViewCaption}</p>
            <div className="HomeSecondLayer">
                <img src={Options} alt="Options Icons" className="HomeOptionsIcon" />
                <div className="SubHomeSecondLayer">
                    <div className='HomeIntroduction'>
                        <img src={AgilewitGrey} className="AgilewitGreyLogo" alt="Agilewit Logo" />
                        <p className='Title'>W E &nbsp; A R E &nbsp; A G I L E W I T</p>
                        <h1 className="TitleHeading">{HomePageMainHeading}</h1>
                        <p className="TitleDescription">{HomePageTagLine}</p>
                        <h1 className="LetsWorkTogether">{LetsWork}</h1>
                    </div>
                    <div className='HomePageDescription'>
                        <div className='CompanyIdeology'>
                            <h3>{ShareYourIdea}</h3>
                            <p>{IdeaDescription}</p>
                        </div>
                        <div className='ClientCompanyLogos'>
                            <img className='ClientCompanyLogo' src={Experis} alt="Client Company" />
                            <img className='ClientCompanyLogo' src={Alpine} alt="Client Company" />
                            <img className='ClientCompanyLogo' src={Info} alt="Client Company" />
                            <img src={Beaconhill} alt="Client Company Logo" />
                        </div>

                        <h3 className='ClientAssistance'>{HomeTitle}</h3>
                        <div className='Services'>
                            <img className='AgilewitLogoBlue' src={AgilewitLogoBlue} alt="Agilewit Logo" />
                            <div className='ServicesList'>
                                {ServiceDetails.map((each) => <ServiceItems ServiceInfo={each} />)}
                            </div>
                        </div>
                    </div>
                    <div className='Achievements'>
                        {Achievement.map((each) => <AchievementItem AchievementInfo={each} />)}
                    </div>
                    <div className='PartnersOpinion'>
                        
                        <h1 className='PartnersOpinionTitle'>{PartnersOpinionTitlePartOne} <a href='k' className='PartnerTitle'>{PartnersOpinionTitlePartTwo}</a> {PartnersOpinionTitlePartThree}</h1>
                        <div className='PartnerListForDesktop'>
                            {Partners.map((each) => <PartnerOpinionItems PartnersInfo={each} />)}
                        </div>
                        <div className='PartnerListForMobile'>
                            <PartnerOpinionItems PartnersInfo={Partners[randomNumber]} />
                        </div>
                    </div>
                    <BottomPage />
                </div>
                <img src={ChatIcon} alt="Chat" className="HomeOptionsIcon" />
            </div>
        </div>
    );
};

export default Home;

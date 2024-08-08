import React from 'react';
import Header from '../Header/Header';
import DeskTopHeader from '../DeskTopHeader/DeskTopHeader';
import AgilewitGrey from '../Assets/Agilewitgrey.svg';
import AgilewitLogoBlue from '../Assets/AgilewitLogoBlue.svg';
import ServiceItems from '../ServiceItems/ServiceItems';
import { ServiceDetails } from '../constant/ServiceDetails';
import { Achievement, HomePageContent, ClienCompanyArray } from '../constant/Home';
import { AboutUsContents } from '../constant/AboutUs';
import AchievementItem from '../AchievementItem/Achievmentitem';
import BottomPage from '../BottomPage/BottomPage';
import Carousels from '../Carousels/Carousels';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const { HomeTitle, HomePageMainingHeading, MobileViewCaption, HomePageTagLine, LetsWork, ShareYourIdea, IdeaDescription } = HomePageContent;
    const { PartnersOpinionTitlePartOne, PartnersOpinionTitlePartTwo, PartnersOpinionTitlePartThree } = AboutUsContents;

    return (
        <div className='HomeTopLayer'>
            <Header />
            <DeskTopHeader />
            <p className="IntroDescription">{MobileViewCaption}</p>
            <div className="SubHomeSecondLayer">
                <div className='HomeIntroduction'>
                    <img src={AgilewitGrey} className="AgilewitGreyLogo" alt="Agilewit Logo" />
                    <p className='Title'>W E &nbsp; A R E &nbsp; A G I L E W I T</p>
                    <h1 className="TitleHeading">{HomePageMainingHeading}</h1>
                    <p className="TitleDescription">{HomePageTagLine}</p>
                    <p>Sidd</p>
                    <Link to="/ContactUs" className='Links'>
                    <h1 className="LetsWorkTogether">{LetsWork}</h1>
                    </Link>
                </div>
                <div className='HomePageDescription'>
                    <div className='CompanyIdeology'>
                        <h3 className='ShareYourIdeaTitle'>{ShareYourIdea}</h3>
                        <p className='IdeaDescription'>{IdeaDescription}</p>
                    </div>
                    <div className="logo-container">
                        {ClienCompanyArray.map((each, index) => (
                            <img key={index} className="ClientCompanyLogo" src={each} alt="Client Company" />
                        ))}
                    </div>
                    <h3 className='ClientAssistance'>{HomeTitle}</h3>
                    <div className='Services'>
                        <img className='AgilewitLogoBlue' src={AgilewitLogoBlue} alt="Agilewit Logo" />
                        <div className='ServicesList'>
                            {ServiceDetails.map((each, index) => <ServiceItems key={index} ServiceInfo={each} />)}
                        </div>
                    </div>
                </div>
                <div className='Achievements'>
                    {Achievement.map((each, index) => <AchievementItem key={index} AchievementInfo={each} />)}
                </div>
                <div className='PartnersOpinion'>
                    <h1 className='PartnersOpinionTitle'>{PartnersOpinionTitlePartOne} <a href='k' className='PartnerTitle'>{PartnersOpinionTitlePartTwo}</a> {PartnersOpinionTitlePartThree}</h1>
                    <Carousels />
                </div>
                <BottomPage />
            </div>


        </div>
    );
};



export default Home;

import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import DesktopHeader from '../DeskTopHeader/DeskTopHeader'
import Options from "../Assets/Options.svg";
import ChatIcon from '../Assets/Chaticon.svg';
import ServiceHeaders from '../ServiceHeaders/ServiceHeaders';
import Staff from '../Assets/Staff.svg';
import Missile from '../Assets/Missile.svg';
import {AboutUsContents,Partners } from '../constant/AboutUs';
import Carousels from '../Carousels/Carousels'
import BottomPage from '../BottomPage/BottomPage';

import "./AboutUs.css";

const AboutUs = () => {
    const [randomNumber, setRandomNumber] = useState(0);
const {WelcomeTitle,Introduction,MissionHeading,MissionDescription,PartnersOpinionTitlePartOne,PartnersOpinionTitlePartTwo,PartnersOpinionTitlePartThree}=AboutUsContents
    useEffect(() => {
        const timer = setInterval(() => {
            setRandomNumber(prevState => {
                if (prevState === Partners.length - 1) {
                    return 0;
                }
                return prevState + 1;
            });
        }, 2000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className='HomeTopLayer'>
            <Header />
            <DesktopHeader />
           
                
                <div className='SubHomeSecondLayer'>
                    <ServiceHeaders ServiceHeadersInfo="AboutUs" />
                    <div className='StaffContainer'>
                        <img src={Staff} alt="Staff" />
                        <div className='StaffDescription'>
                            <h2>{WelcomeTitle}</h2>
                            <p>{Introduction}</p>
                        </div>
                    </div>
                    <div className='MissionContainer'>
                        <div className='MissionInfo'>
                            <h1>{MissionHeading}</h1>
                            <p className='MissionDescription'>{MissionDescription}</p>
                        </div>
                        <img src={Missile} alt="Missile" className='Missile' />
                    </div>
                    <div className='PartnersOpinion'>
                        <h1 className='PartnersOpinionTitle'>{PartnersOpinionTitlePartOne} <a href='k' className='PartnerTitle'>{PartnersOpinionTitlePartTwo}</a> {PartnersOpinionTitlePartThree}</h1>
                       <Carousels/>
                    </div>
                    <BottomPage />
                </div>
           
        </div>
    );
}

export default AboutUs;

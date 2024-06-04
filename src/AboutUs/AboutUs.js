import Header from '../Header/Header';
import DesktopHeader from '../DeskTopHeader/DeskTopHeader'
import MissionInfoItems from '../MissionInfoItems/MissionInfoItems'
import ServiceHeaders from '../ServiceHeaders/ServiceHeaders';
import Staff from '../Assets/Staff.svg';
import Missile from '../Assets/Missile.svg';
import {AboutUsContents,MissionInfoArray } from '../constant/AboutUs';
import Carousels from '../Carousels/Carousels'
import BottomPage from '../BottomPage/BottomPage';

import "./AboutUs.css";

const AboutUs = () => {
   
const {WelcomeTitle,Introduction,MissionHeading,MissionDescription,PartnersOpinionTitlePartOne,PartnersOpinionTitlePartTwo,PartnersOpinionTitlePartThree}=AboutUsContents
 

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
                    <div className='MissionItems'>
                            {MissionInfoArray.map((each)=><MissionInfoItems MissionInfo={each}/>)}
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

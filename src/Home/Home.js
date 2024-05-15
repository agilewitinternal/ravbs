import { useEffect,useState } from 'react'
import Header from '../Header/Header'
import DeskTopHeader from '../DeskTopHeader/DeskTopHeader'
import AgilewitGrey from '../Assets/Agilewitgrey.svg'
import Options from "../Assets/Options.svg"
import Beaconhill from '../Assets/Beaconhill-staffing.svg'
import Alpline from '../Assets/Alpline.svg'
import experis from '../Assets/experis-logo.svg'
import Info from '../Assets/InfoVision-Logo-200px.svg'
import AgilewitLogoBlue from '../Assets/AgilewitLogoBlue.svg'
import ServiceItems from '../ServiceItems/ServiceItems'
import {ServiceDetails,Achievment,Patrtners} from '../Data/Data'
import PartnerOpinionItems from '../PartnerOpinionItems/PartnerOpinionItems'
import Achievmentitem from '../Achievmentitem/Achievmentitem'
import BottomPage from '../BottomPage/BottomPage'
import Chaticon from '../Assets/Chaticon.svg'
import './Home.css'


const Home = () => {
    const[randomNumber,setRandomNumber]=useState(0)
   
    useEffect(()=>{

        const Timer=setInterval(()=>{
           
            setRandomNumber(prevState=>{if(prevState===Patrtners.length-1){
setRandomNumber(0)
            }
        return prevState+1
        } )
        },2000)
        return ()=>clearInterval(Timer)
    },[])
    
    return (
        <div className='HomeTopLayer'>
            <Header />
            <DeskTopHeader />

            <p className="IntroDescription">"Technology empowers us to dream beyond boundaries and make those dreams a reality"</p>
            <div className="HomeSecondLayer">
                <img src={Options} alt="Options Icons" className="HomeOptionsIcon" />
                <div className="SubHomeSecondLayer">
                    <div className='HomeIntroduction'>
                        <img src={AgilewitGrey} className="AgilewitGreyLogo" alt="AgliwitLogo" />
                        <p className='Title'>W E &nbsp; A R E &nbsp; A G I L E W I T</p>
                        <h1 className="TitleHeading">Innovate with
                            Our Tech Experts.</h1>
                        <p className="TitleDescription">Elevate Your Business with Our Technology Consulting and Software Development Expertise</p>
                        <h1 className="LetsWorkToGether">LET WORK TO GOTHER +</h1>

                    </div>
                    <div className='HomePageDesription'>
                        <div className='CompanyIdeology'>
                            <h3>You Share your idea
                                We get it done</h3>
                            <p>Agilewit Solutions is incorporated as a Technology Consulting services and Software product development firm. Head quartered in Texas and Offshore development centers in India, we have involved in creating strategy, implementing, deploying, and supporting a wide range of
                                solutions for clients worldwide</p>
                        </div>
                        <div className='ClientCompanyLogos'>
                            <img className='ClientCompanyLogo' src={experis} alt="Client Company" />
                            <img className='ClientCompanyLogo' src={Alpline} alt="Client  Company" />
                            <img className='ClientCompanyLogo' src={Info} alt="Clinet Company" />
                            <img src={Beaconhill} alt="Client Company Logo" />
                        </div>

                        <h3 className='ClientAssistance'>See what  we can do for you</h3>
                        <div className='Services '>
                            <img className='AgilewitLogoBlue' src={AgilewitLogoBlue} alt="AgilewitLogo" />
                            <div className='ServicesList'>
                                {ServiceDetails.map((each) => <ServiceItems ServiceInfo={each} />)}
                            </div>
                        </div>


                    </div>
                    <div className='Achievments'>
                      {Achievment.map((each)=><Achievmentitem AchievmentInfo={each}/>)}  
                    </div>
                    <div className='PartnersOpinion'>
                        <h1 className='PartnersOpinioTittle'>What Our <a href='k' className='PartnerTitle'>Partners </a> Say</h1>
                        <div className='PartnerListforDesktop'>
                        {Patrtners.map((each)=><PartnerOpinionItems PartnersInfo={each}/>)}
                        </div>
                        <div className='PartnerListforMobile'>
                        <PartnerOpinionItems PartnersInfo={Patrtners[randomNumber]}/> 
                        
                        </div>
                    </div>
                    <BottomPage/>
                </div>
                <img src={Chaticon} alt="Chat" className="HomeOptionsIcon"/>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Home
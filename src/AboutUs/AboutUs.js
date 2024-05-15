import { useState,useEffect } from 'react'
import Header from '../Header/Header'
import DeskTopHeader from '../DeskTopHeader/DeskTopHeader'
import Options from "../Assets/Options.svg"
import Chaticon from '../Assets/Chaticon.svg'
import ServiceHeaders from '../ServiceHeaders/ServiceHeaders'
import Staff from '../Assets/Staff.svg'
import Missile from '../Assets/Missile.svg'
import {Patrtners} from '../Data/Data'
import PartnerOpinionItems from '../PartnerOpinionItems/PartnerOpinionItems'
import BottomPage from '../BottomPage/BottomPage'


import "./AboutUs.css"
const AboutUs = () => {
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
            <div className='HomeSecondLayer'>
                <img src={Options} alt="Options Icons" className="HomeOptionsIcon" />
                <div className='SubHomeSecondLayer'>
                    <ServiceHeaders ServiceHeadersInfo="AboutUs" />
                    <div className='StaffContainer'>
                        <img src={Staff} alt="Staff" />
                        <div className='StaffDescription'>
                            <h2>Welcome to Agilewit Solutions Inc</h2>
                            <p>Agilewit Solutions is incorporated as a Technology Consulting services and Software product development firm. Head quartered in Texas and Offshore development centers in India, we have involved in creating strategy, implementing, deploying, and supporting a wide range of solutions for clients worldwide. Our clients include a varied set of Fortune 500, free essay example mid-sized and startup companies. They count on us to provide them with timely, high-quality work and they return to us because we’re reliable, experienced and easy to work with.</p>
                        </div>

                    </div>
                    <div className='MissionContainer'>
                        <div className='MissionInfo'>
                            <h2>Our Mission</h2>
                            <p>Agilewit team consists of highly skilled professionals based in USA and India. Our team delivery model leverages global talent, agile processes and multiple time zones to help our clients save time 
                            zones to help our clients save time and money without compromising the quality. Our guiding principles are based on developing long term relationship with our customers, partners and employees. As a result, we have grown quickly, earning ourselves recognition as a fastest growing Incorporate in USA. Even more prominently, we have done this while building a culture that puts people first.</p>
                            </div>
                        <img src={Missile} alt="Missile" className='Misile'/>
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

                <img src={Chaticon} alt="Chat" className="HomeOptionsIcon" />
            </div>

        </div>
    )
}

export default AboutUs
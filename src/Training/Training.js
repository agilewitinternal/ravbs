import { useEffect, useState } from "react"
import { TrainingInfo } from '../constant/TrainingContent'
import BotttomPage from '../BottomPage/BottomPage'
import Header from "../Header/Header"
import DeskTopHeader from '../DeskTopHeader/DeskTopHeader'
import ServiceHeaders from '../ServiceHeaders/ServiceHeaders'
import "./Training.css"

const Training = () => {
    const { TrainingTitle, TrainingDescription, TrainingArray } = TrainingInfo
    const [Timer, SetTimer] = useState(0)
    const Random = Math.ceil(Math.random() * 3)
    useEffect(() => {
        const interval = setInterval(() => {
            const randomValue = Math.ceil(Math.random() * TrainingArray.length-1);
            SetTimer(randomValue);
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [Random]);

    return (
        <div className='HomeTopLayer'>
            <Header />
            <DeskTopHeader />
            <div className='TrainingTopLayer'>
                <ServiceHeaders ServiceHeadersInfo="Training" />
                <h1 className="TrainingTitle">{TrainingTitle}</h1>
                <p className="TrainingTitle">{TrainingDescription}</p>
                <img src={TrainingArray[Timer]} alt="TaingLogo" className="TrainingLogos" />
                <BotttomPage />
            </div>
        </div>
    )
}

export default Training
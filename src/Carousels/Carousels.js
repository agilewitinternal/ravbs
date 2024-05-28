import { useEffect, useState } from 'react';
import { Partners } from '../constant/Home'
import PartnerOpinionItems from '../PartnerOpinionItems/PartnerOpinionItems';
import ArrowLeft from "../Assets/ArrowLeft.png"
import ArrowRight from '../Assets/ArrowRight.png'
import "./Carousels.css"
const Carousels = () => {
    const [randomNumber, setRandomNumber] = useState(0);
 
    useEffect(() => {
        const Timer = setInterval(() => {
            setRandomNumber(prevState => {
                if (prevState === Partners.length - 1) {
                    setRandomNumber(0);
                }
                return prevState + 1;
            });
        }, 6000);
        return () => clearInterval(Timer);
    }, []);
    const Increase = () => {
        setRandomNumber(prevState => {
            if (prevState === 1) {
                setRandomNumber(0)
            }
            else {
                return prevState+1
            }
        })
    }
    return (
        <div className='Carousels-Container '>
            <img src={ArrowLeft} alt="ArrowLeft" className='Carousels-Arrows' onClick={Increase} />
            <PartnerOpinionItems PartnersInfo={Partners[randomNumber]} className="Carousels-Item" />
            <img src={ArrowRight} alt="ArrowRight" className='Carousels-Arrows' onClick={Increase}/>
        </div>
    )
}

export default Carousels
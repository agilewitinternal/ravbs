import { useState } from 'react'
import Header from '../Header/Header'
import DeskTopHeader from '../DeskTopHeader/DeskTopHeader'
import BottomPage from '../BottomPage/BottomPage'
import Options from '../Assets/Options.svg'
import Chaticon from '../Assets/Chaticon.svg'
import ServiceHeaders from '../ServiceHeaders/ServiceHeaders'
import { ConsultingItemsInfo, CunsultingPageContent } from '../constant/Consulting'
import bimage from "../Assets/bi.svg"
import Oracles from '../Assets/Oracle.svg'
import IBM from "../Assets/IBM.svg"
import BigData from '../Assets/BigData.svg'
import "./Consulting.css"
const Counsulting = () => {
    const [currentCunsulting, setCurrentCunsulting] = useState("Business Intelligence")
    const { BusinessIntelligenceContent, OracleContent, IBMDatastageContent, BigDataAnalyticsContent,DataScienceContent } = CunsultingPageContent
    const { Title, Description } = BusinessIntelligenceContent
    const { OracleTitle, OracleBIstacks, HyperionTitle, HyperionList, OraclefirstBottom, OracleSecondBottom } = OracleContent
    const { IBMDatastageTitle, IBMDatastageSubTitle, IBMDatastageFirstList, DataStageAdvantages, DataStageAdvantagesDescription, IBMDatastageSecondList } = IBMDatastageContent
    const { BigDataAnalyticsTitle, BigDataAnalyticsDescription, BigDataAnalyticsSubTitle, BigDataAnalyticsFirstList, Benifits, BenifitsList } = BigDataAnalyticsContent
    const{DataScienceTitle,DataScienceDescription,DataSciencSubDescription}=DataScienceContent
    const UpdatecurrentCunsulting = (each) => {
        setCurrentCunsulting(each)
    }

    const BusinessIntelligence = () => {
        return (
            <div className='ConsultingTypeTopLayer'>
                <h3>{Title}</h3>
                <p>{Description}</p>
                <img className='ConsultingLogo' src={bimage} alt="BusinessIntelligence" />
            </div>
        )
    }

    const Oracle = () => {
        return (
            <div className='ConsultingTypeTopLayer'>
                <h3>{OracleTitle}</h3>
                <ul>
                    {OracleBIstacks.map((each) => <li>{each}</li>)}

                </ul>
                <div className='OraclSecondLayer'>
                    <img src={Oracles} className='ConsultingLogo' alt="OracleLogo" />
                    <div>
                        <h3 className='SecondLayerTitile'>{HyperionTitle}</h3>
                        <ol>
                            {HyperionList.map((each) => <li>{each}</li>)}
                        </ol>
                        <p style={{ textAlign: "center" }}>{OraclefirstBottom}</p>
                    </div>
                </div>
                <p className='SecondLayerTitile' style={{ textAlign: "center" }}>{OracleSecondBottom}</p>
            </div>
        )

    }

    const IBMDatastage = () => {
        return (
            <div className='ConsultingTypeTopLayer'>
                <h3>{IBMDatastageTitle}</h3>
                < h4 className='SecondLayerTitile'>{IBMDatastageSubTitle}</h4>
                <ol>
                    {IBMDatastageFirstList.map((each) => <li>{each}</li>)}
                </ol>
                <img src={IBM} alt="IBM Logo" className='ConsultingLogo' />

                <h4 className='SecondLayerTitile'>{DataStageAdvantages}</h4>
                <p>{DataStageAdvantagesDescription}</p>
                <ul>
                    {IBMDatastageSecondList.map((each) => <li>{each}</li>)}
                </ul>

            </div>
        )
    }

    const BigDataAnalytics = () => {
        return (
            <div className='ConsultingTypeTopLayer'>
                <h1>{BigDataAnalyticsTitle}</h1>
                <p>{BigDataAnalyticsDescription}</p>
                <h4 className='SecondLayerTitile'>{BigDataAnalyticsSubTitle}</h4>
                <ol>
                    {BigDataAnalyticsFirstList.map((each) => <li>{each}</li>)}
                </ol>
                <img src={BigData} className='ConsultingLogo' alt='BigData' />
                <h4 className='SecondLayerTitile'>{Benifits}</h4>
                <ul>
                    {BenifitsList.map((each) => <li>{each}</li>)}
                </ul>
            </div>
        )
    }

    const DataScience = () => {
        return (
            <div className='ConsultingTypeTopLayer'>
                <h1>{DataScienceTitle}</h1>
                <p>{DataScienceDescription}</p>
                <h3 className='InfoMail'>{DataScienceTitle}</h3>
                <p>{DataSciencSubDescription}</p>
            </div>
        );
    }

    const CunsultingMainView = () => {
        switch (currentCunsulting) {
            case "Business Intelligence":
                return BusinessIntelligence();
            case "Oracle BI Stack Components":
                return Oracle();
            case "IBM Datastage":
                return IBMDatastage();

            case "Big Data Analytics":
                return BigDataAnalytics();
            case "DATA SCIENCE":
                return DataScience()
            default:
                return null

        }
    }
    return (
        <div className='HomeTopLayer'>
            <Header />
            <DeskTopHeader />
           
                <div className="SubHomeSecondLayer">
                    <ServiceHeaders ServiceHeadersInfo="Consulting" />

                    <div className='ConsultingTopLayer'>
                        <div className='ConsultingItems'>
                            {ConsultingItemsInfo.map((each) => <h3 onClick={() => UpdatecurrentCunsulting(each)} style={{ opacity: currentCunsulting === each ? 1 : 0.5 }}>{each}</h3>)}

                        </div>
                        <div>
                            {CunsultingMainView()}
                        </div>
                    </div>
                    <BottomPage />



                </div>
            
        </div>
    )
}

export default Counsulting

import { useState } from 'react'
import Header from '../Header/Header'
import CloseIcon from '../Assets/CloseIcon.png'
import DeskTopHeader from '../DeskTopHeader/DeskTopHeader'
import ServiceHeaders from '../ServiceHeaders/ServiceHeaders'
import { JobContent } from '../constant/JobsFeature'
import BottomPage from '../BottomPage/BottomPage'
import Agilewitswhite from '../Assets/AgilewitPNG.svg'
import "./Jobs.css"
const Jobs = () => {
    const [advanceFilterStatus, setAdvanceFilterStatus] = useState(false)
    const { SearchJobs, AdvanceSearch, PopulerSearch, JobsTypes, JobsCategory, JobsCategoryArray, volunteeropportunities, volunteeropportunitiesDescription, ViewJobs } = JobContent

    const AdvanceSerach = () => {
        return (
            <div className='JobSecondLayer'>
                
                <div>
                    <h3>Date Of Posted</h3>
                    <div className='inline-block-container'>
                        <input type='checkBox' />
                        <p>TwoDays Back</p>
                    </div>
                    <div className='inline-block-container'>
                        <input type='checkBox' />
                        <p>FiveDays Back</p>
                    </div>
                </div>
                <div>
                    <h3>Job Type</h3>
                    <div className='inline-block-container'>
                        <input type='checkBox' />
                        <p>Remote</p>
                    </div>
                    <div className='inline-block-container'>
                        <input type='checkBox' />
                        <p>Onsite</p>
                    </div>
                </div>
                <div>
                    <h3>Location</h3>
                    <div className='inline-block-container'>
                        <input type='checkBox' />
                        <p>INDIA</p>
                    </div>
                    <div className='inline-block-container'>
                        <input type='checkBox' />
                        <p>USA</p>
                    </div>
                </div>



            </div>
        )
    }

    const UpdateAdvanceStatus = () => {
        setAdvanceFilterStatus(!advanceFilterStatus)
    }
    return (
        <div className='HomeTopLayer'>
            <Header />
            <DeskTopHeader />
            <div className='ConsenTopLayer'>
                <ServiceHeaders ServiceHeadersInfo="FIND JOBS " />
                <div className='JobTopLayer'>
                    <div className='JobSearchContainer'>
                        <input type='search' placeholder='Job Tittle or KeyBoard' className='Input' />
                        <button className='SearchButtons'>{SearchJobs}</button>
                        <button className='AdvanceSearch' onClick={UpdateAdvanceStatus}>{AdvanceSearch}</button>
                    </div>
                    {advanceFilterStatus && AdvanceSerach()}
                    <h3>{PopulerSearch}</h3>
                    {JobsTypes.map((each) => <button className='JobTypeButton'>{each}</button>)}
                </div>

                <div className='JobsThirdLayer'>
                    <h3>{JobsCategory}</h3>
                    <div className='JobsCategory-Container'>
                        {JobsCategoryArray.map((each) => <p className='JobsCategory-Item'>{each}</p>)}
                    </div>
                    <div className='JobsCategory-Container'>
                        {JobsCategoryArray.map((each) => <p className='JobsCategory-Item'>{each}</p>)}
                    </div>
                    <div className='JobsCategory-Container'>
                        {JobsCategoryArray.map((each) => <p className='JobsCategory-Item'>{each}</p>)}
                    </div>
                </div>
                <div className='JobsFourthLayer'>
                    <img src={Agilewitswhite} alt="CompanyLogo" className='AgilewitJobsLogo' />
                    <div className='Volunteen-Info'>
                        <h2>{volunteeropportunities}</h2>
                        <p>{volunteeropportunitiesDescription}</p>
                        <button className='ViewJobsButton'>{ViewJobs}</button>
                    </div>
                </div>
                <BottomPage />
            </div>
        </div>
    )
}

export default Jobs

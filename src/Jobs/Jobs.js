import Header from '../Header/Header'
import DeskTopHeader from '../DeskTopHeader/DeskTopHeader'
import ServiceHeaders from '../ServiceHeaders/ServiceHeaders'
import { JobContent } from '../constant/JobsFeature'
import BottomPage from '../BottomPage/BottomPage'
import JobsLogo from '../Assets/Jobs.svg'
import Agilewitswhite from '../Assets/AgilewitPNG.svg'
import "./Jobs.css"
const Jobs = () => {
    const { SearchJobs, AdvanceSearch, PopulerSearch, JobsTypes, JobsCategory, JobsCategoryArray, volunteeropportunities, volunteeropportunitiesDescription, ViewJobs } = JobContent
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
                        <button className='AdvanceSearch'>{AdvanceSearch}</button>
                    </div>
                    <h3>{PopulerSearch}</h3>
                    {JobsTypes.map((each) => <button className='JobTypeButton'>{each}</button>)}
                </div>
                <div className='JobSecondLayer'>
                    <img src={JobsLogo} alt="JobsLogo" className='JobsMeetlogo' />
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
                    <img src={Agilewitswhite} alt="CompanyLogo" className='AgilewitJobsLogo'/>
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

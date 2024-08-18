import { useState, useEffect } from 'react'
import Header from '../Header/Header'
import DeskTopHeader from '../DeskTopHeader/DeskTopHeader'
import ServiceHeaders from '../ServiceHeaders/ServiceHeaders'
import { JobContent } from '../constant/JobsFeature'
import BottomPage from '../BottomPage/BottomPage'
import Agilewitswhite from '../Assets/AgilewitPNG.svg'
import axios from 'axios'
import JobItems from '../JobItems/JobItems'
import "./Jobs.css"
const Jobs = () => {
    const [advanceFilterStatus, setAdvanceFilterStatus] = useState(false)
    const [jobType, setJobType] = useState("Software Engineer")
    const [searchResult, setSearchResult] = useState("")
    const [country, setCountry] = useState("")
    const [jobArray, setJobArray] = useState([])
    const [jobMode, setJobMode] = useState("OnSite")
    const [packageFilter, setPackageFilter] = useState("<=")
    const { AdvanceSearch, JobsTypes, JobsCategory, JobsCategoryArray, volunteeropportunities, volunteeropportunitiesDescription, ViewJobs } = JobContent
    const FetchData = async () => {

        const URL = "https://agilewitjobs-default-rtdb.firebaseio.com/.json"
        const Responce = await axios.get(URL)
        const arrays = Object.values(Responce.data);

        console.log(arrays.flat())
        setJobArray(arrays.flat())

    }



    const UpdateLessThanTen = (event) => {
        if (event.target.checked) {
            setPackageFilter("<=")
        }
    }

    const UpdateMorethanTen = (event) => {
        if (event.target.value) {
            setPackageFilter(">=")
        }
    }


    const UpdateJobMode = (event) => {

        if (event.target.checked) {
            setJobMode("Remote");
        } else {
            setJobMode('');
        }
    }

    const UpdatetoOnset = (event) => {

        if (event.target.checked) {
            setJobMode("OnSite");
        } else {
            setJobMode('');
        }
    }




    useEffect(() => {
        FetchData()
        const location = Intl.DateTimeFormat().resolvedOptions().timeZone;
        setCountry(location?.split("/")[1])


    }, [])

    const AdvanceSerach = () => {
        return (
            <div className='JobSecondLayer'>

                <div>
                    <h3>Date Of Posted</h3>
                    <div className='inline-block-container'>
                        <input type='checkBox' className='Checkbox' />
                        <p>TwoDays Back</p>
                    </div>
                    <div className='inline-block-container'>
                        <input type='checkBox' className='Checkbox' />
                        <p>FiveDays Back</p>
                    </div>
                </div>
                <div>
                    <h3>Job Type</h3>
                    <div className='inline-block-container'>
                        <input type='checkBox' className='Checkbox' checked={jobMode === "Remote"} onChange={UpdateJobMode} />
                        <p>Remote</p>
                    </div>
                    <div className='inline-block-container'>
                        <input type='checkBox' className='Checkbox' checked={jobMode === "OnSite"} onChange={UpdatetoOnset} />
                        <p>Onsite</p>
                    </div>
                </div>
                <div>
                    <h3>Package</h3>
                    <div className='inline-block-container'>
                        <input type='checkBox' className='Checkbox' checked={packageFilter === "<="} onChange={UpdateLessThanTen} />
                        <p>Less than 10 LPA</p>
                    </div>
                    <div className='inline-block-container'>
                        <input type='checkBox' className='Checkbox' checked={packageFilter === ">="} onChange={UpdateMorethanTen} />
                        <p>More than 10 LPA</p>
                    </div>
                </div>



            </div>
        )
    }

    const UpdateAdvanceStatus = () => {
        setAdvanceFilterStatus(!advanceFilterStatus)
    }

    const UpdateSearchResult = (e) => {
        setSearchResult(e.target.value)
    }

    const UpdateJobType = (A) => {
        setJobType(A)
    }


    const CountryJobs = country?.toLowerCase() === "calcutta" ? jobArray.filter((each) => each.Location === "INDIA" && each.JobTitle.toLowerCase().includes(searchResult) && each.JobCategory === jobType && each.JobType === jobMode && ((packageFilter === ">=" && parseFloat(each.Package) >= 10) || (packageFilter === "<=" && parseFloat(each.Package) <= 10))) : jobArray.filter((each) => each.Location === "USA" && each.JobTitle.includes(searchResult) && each.JobCategory === jobType && each.JobType === jobMode)
    return (
        <div className='HomeTopLayer'>
            <Header />
            <DeskTopHeader />
            <div className='ConsenTopLayer'>
                <ServiceHeaders ServiceHeadersInfo="Find Jobs" />
                <div className='JobTopLayer'>
                    <div className='JobSearchContainer'>

                        <input type='search' placeholder='Job Tittle or KeyBoard' className='Input' onChange={UpdateSearchResult} />

                        <button className='SearchButtons'>{`${CountryJobs.length} jobs`}</button>
                        <button className='AdvanceSearch' onClick={UpdateAdvanceStatus}>{AdvanceSearch}</button>
                    </div>

                    <h3>{`${CountryJobs.length} JOBS FOUND FOR YOU`}</h3>
                    {advanceFilterStatus && AdvanceSerach()}

                    {JobsTypes.map((each) => <button className={each === jobType ? "JobTypeButtons" : "JobTypeButton"} onClick={() => { UpdateJobType(each) }}>{each}</button>)}
                    <div className='JobsArray'>
                        {CountryJobs.map((each, index) => <JobItems key={index} JobItemInfo={each} />)}
                    </div>


                </div>

                <div className='JobsThirdLayer'>
                    <h3>{JobsCategory}</h3>
                    <div className='JobsCategory-Container'>
                        {JobsCategoryArray.map((each) => <p className='JobsCategory-Item' onClick={() => { UpdateJobType(each) }}>{each}</p>)}
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

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
    const[jobType,setJobType]=useState("Software Engineer")
    const [searchResult,setSearchResult]=useState("")
    const [country, setCountry] = useState("")
    const [jobArray, setJobArray] = useState([])
    const [remoteType,setRemoteType]=useState(true)
    const {  AdvanceSearch, JobsTypes, JobsCategory, JobsCategoryArray, volunteeropportunities, volunteeropportunitiesDescription, ViewJobs } = JobContent
    const FetchData = async () => {

        const URL = "https://agilewitjobs-default-rtdb.firebaseio.com/.json"
        const Responce = await axios.get(URL)
        const arrays = Object.values(Responce.data);

        console.log(arrays.flat())
        setJobArray(arrays.flat())

    }


    const UpdateRemoteType=()=>{
        setRemoteType(!remoteType)
        
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
                        <input type='checkBox' className='Checkbox' onChange={UpdateRemoteType} />
                        <p>Remote</p>
                    </div>
                    <div className='inline-block-container'>
                        <input type='checkBox' className='Checkbox' />
                        <p>Onsite</p>
                    </div>
                </div>
                <div>
                    <h3>Package</h3>
                    <div className='inline-block-container'>
                        <input type='checkBox' className='Checkbox' />
                        <p>Less than 5 LPA</p>
                    </div>
                    <div className='inline-block-container'>
                        <input type='checkBox' className='Checkbox' />
                        <p>More than 5 LPA</p>
                    </div>
                </div>



            </div>
        )
    }

    const UpdateAdvanceStatus = () => {
        setAdvanceFilterStatus(!advanceFilterStatus)
    }

    const UpdateSearchResult=(e)=>{
        setSearchResult(e.target.value)
    }

    const UpdateJobType=(A)=>{
        setJobType(A)
    }

  
    const CountryJobs=country?.toLowerCase() === "calcutta" ?jobArray.filter((each)=>each.Location==="INDIA"&&each.JobTitle.includes(searchResult)&&each.JobCategory===jobType):jobArray.filter((each)=>each.Location==="USA"&&each.JobTitle.includes(searchResult)&&each.JobCategory===jobType)
    return (
        <div className='HomeTopLayer'>
            <Header />
            <DeskTopHeader />
            <div className='ConsenTopLayer'>
                <ServiceHeaders ServiceHeadersInfo="FIND JOBS " />
                <div className='JobTopLayer'>
                    <div className='JobSearchContainer'>
                        <input type='search' placeholder='Job Tittle or KeyBoard' className='Input' onChange={UpdateSearchResult} />
                        
                        <button className='SearchButtons'>{`Search ${CountryJobs.length} jobs`}</button>
                        <button className='AdvanceSearch' onClick={UpdateAdvanceStatus}>{AdvanceSearch}</button>
                    </div>

                    <h3>{`${CountryJobs.length} JOBS FOUND FOR YOU`}</h3>
                    {advanceFilterStatus && AdvanceSerach()}
                    
                    {JobsTypes.map((each) => <button className={each===jobType?"JobTypeButtons":"JobTypeButton"} onClick={()=>{UpdateJobType(each)}}>{each}</button>)}
                    <div className='JobsArray'>
                        {CountryJobs.map((each) => <JobItems JobItemInfo={each} />)}
                    </div>
                   
                
                </div>

                <div className='JobsThirdLayer'>
                    <h3>{JobsCategory}</h3>
                    <div className='JobsCategory-Container'>
                        {JobsCategoryArray.map((each) => <p className='JobsCategory-Item' onClick={()=>{UpdateJobType(each)}}>{each}</p>)}
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

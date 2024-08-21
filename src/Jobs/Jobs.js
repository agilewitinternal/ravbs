import { useState, useEffect } from 'react'
import Header from '../Header/Header'
import DeskTopHeader from '../DeskTopHeader/DeskTopHeader'
import ServiceHeaders from '../ServiceHeaders/ServiceHeaders'
import { JobContent } from '../constant/JobsFeature'
import BottomPage from '../BottomPage/BottomPage'
import Agilewitswhite from '../Assets/AgilewitPNG.svg'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, doc, getDocs } from "firebase/firestore";
import JobItems from '../JobItems/JobItems'
import "./Jobs.css"
const Jobs = () => {
    const [advanceFilterStatus, setAdvanceFilterStatus] = useState(false)
    const [jobType, setJobType] = useState("manufacturing & production")
    const [searchResult, setSearchResult] = useState("")
    const [country, setCountry] = useState("")
    const [jobArray, setJobArray] = useState([])
    const [jobMode, setJobMode] = useState([])
    const [listofRoles, setListofRoles] = useState([])
    const { AdvanceSearch, JobsTypes, JobsCategory, JobsCategoryArray, volunteeropportunities, volunteeropportunitiesDescription, ViewJobs } = JobContent



    useEffect(() => {
       
const firebaseConfig = {
    apiKey: "AIzaSyBatfo5hniRm2ma8wHd8DLwS5Zr7RGVdH0",
    authDomain: "agilewit-dev.firebaseapp.com",
    projectId: "agilewit-dev",
    storageBucket: "agilewit-dev.appspot.com",
    messagingSenderId: "569729659401",
    appId: "1:569729659401:web:e6f869b41e07b113edfed8",
    measurementId: "G-37VG9ZG7F3"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const fetchEmployeeRoles = async () => {
    try {
        const snapshot = await getDocs(collection(db, "JobPostings"));
        
        let roles = [];
        snapshot.docs.forEach((doc) => {
            const data = doc.data();
            
            if (data.CurrentOpenings) {
                roles = roles.concat(data); 
            }
        });
       
        setListofRoles(roles[0].CurrentOpenings);
        
    } catch (error) {
        console.error("Error fetching employee roles:", error);
    }
};

fetchEmployeeRoles();
}, []);


useEffect(() => {
if (listofRoles.length > 0) {
    setJobArray(listofRoles)
} else {
    console.log("roles==== is empty or undefined");
}
}, [listofRoles]);

  




const UpdateJobMode = (event) => {
    if (event.target.checked) {
      setJobMode((prev) => [...prev, "Remote"]);
    } else {
      setJobMode((prev) => prev.filter((mode) => mode !== "Remote"));
    }
  };

  const UpdatetoOnset = (event) => {
    if (event.target.checked) {
      setJobMode((prev) => [...prev, "OnSite"]);
    } else {
      setJobMode((prev) => prev.filter((mode) => mode !== "OnSite"));
    }
  };




    useEffect(() => {
        const location = Intl.DateTimeFormat().resolvedOptions().timeZone;
        setCountry(location?.split("/")[1])


    }, [])

    const AdvanceSerach = () => {
        return (
            <div className='JobSecondLayer'>

                <div>
                    <h3>Job Type</h3>
                    <div className='inline-block-container'>
                        <input type='checkBox' className='Checkbox'  onChange={UpdateJobMode} />
                        <p>Remote</p>
                    </div>
                    <div className='inline-block-container'>
                        <input type='checkBox' className='Checkbox' onChange={UpdatetoOnset} />
                        <p>Onsite</p>
                    </div>
                </div>
                <div>
                    <h3>Package</h3>
                    <div className='inline-block-container'>
                        <input type='checkBox' className='Checkbox'  />
                        <p>Less than 10 LPA</p>
                    </div>
                    <div className='inline-block-container'>
                        <input type='checkBox' className='Checkbox'  />
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

    const CountryJobs = country?.toLowerCase() === "calcutta" ? jobArray.filter((each) => each.Location === "INDIA" && each.JobTitle.toLowerCase().includes(searchResult)&&each.JobType.includes(jobMode)): jobArray.filter((each) => each.Location === "USA" && each.JobTitle.includes(searchResult) && each.JobCategory === jobType && each.JobType === jobMode)
    const Mine=jobArray.filter((each)=>jobMode.some((mode)=>mode===each.JobType))
    return (
        <div className='HomeTopLayer'>
            <Header />
            <DeskTopHeader />
            <div className='ConsenTopLayer'>
                <ServiceHeaders ServiceHeadersInfo="Find Jobs" />
                <div className='JobTopLayer'>
                    <div className='JobSearchContainer'>
                        <input type='search' placeholder='Job Tittle or KeyBoard' className='Input' onChange={UpdateSearchResult} />
<div className='Filter-Buttons'>                       
     <button className='SearchButtons FilterButton-Items'>{`${CountryJobs.length} jobs`}</button>
                        <button className='AdvanceSearch FilterButton-Items' onClick={UpdateAdvanceStatus}>{AdvanceSearch}</button>
                        </div>
                    </div>
<p>{jobMode}</p>
                    <h3 className='Jobs-Lenght'>{`${CountryJobs.length} JOBS FOUND FOR YOU`}</h3>
                    {advanceFilterStatus && AdvanceSerach()}
<div className='JobsType-Container'>
                    {JobsTypes.map((each) => <button className={each === jobType ? "JobTypeButtons" : "JobTypeButton"} onClick={() => { UpdateJobType(each) }}>{each}</button>)}
                    </div>
                    <div className='JobsArray'>
                     
                        {Mine.map((each, index) => <JobItems key={index} JobItemInfo={each} />)}
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


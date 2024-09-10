import { useState, useEffect } from 'react'
import Header from '../Header/Header'
import DeskTopHeader from '../DeskTopHeader/DeskTopHeader'
import ServiceHeaders from '../ServiceHeaders/ServiceHeaders'
import { JobContent } from '../constant/JobsFeature'
import BottomPage from '../BottomPage/BottomPage'
import Agilewitswhite from '../Assets/AgilewitPNG.svg'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, doc, getDoc } from "firebase/firestore";
import JobItems from '../JobItems/JobItems'
import "./Jobs.css"
const Jobs = () => {
    const [advanceFilterStatus, setAdvanceFilterStatus] = useState(false)
    const [searchResult, setSearchResult] = useState("")
    const [country, setCountry] = useState("")
    const [jobArray, setJobArray] = useState([])
    const [jobMode, setJobMode] = useState(["Remote","OnSite"])
    const [filterOneStatus,SetFilterOneStatus]=useState(true)
    const[filterTwoStatus,setFilterTwoStatus]=useState(true)
    const [filterThreeStatus,setFilterThreeStatus]=useState(true)
    const [searchButton,setSearchButton]=useState("")
    const [timeFilter,setTimeFilter]=useState(365)
    const[education,setEducation]=useState(["Degree"])
    const { AdvanceSearch, JobsTypes, JobsCategory, JobsCategoryArray, volunteeropportunities, volunteeropportunitiesDescription, ViewJobs } = JobContent



    useEffect(() => {
        const firebaseConfig = {
            apiKey: "AIzaSyA0NgdczMcmEuuSiUnNKeArdiT__5In-_c",
            authDomain: "agilewit-prod.firebaseapp.com",
            projectId: "agilewit-prod",
            storageBucket: "agilewit-prod.appspot.com",
            messagingSenderId: "533592934207",
            appId: "1:533592934207:web:ebe1f7b8eec1decd2c358a",
            measurementId: "G-X2X6Z0W78C"
        };
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
    
        const fetchEmployeeRoles = async () => {
          try {
            const docRef = doc(db, "JobPostings", "OpenJobs");
            const docSnap = await getDoc(docRef);
            
 
            if (docSnap.exists()) {
              const data = docSnap.data();
              setJobArray(Object.values(data)); 
            } else {
              console.log("No such document!");
            }
          } catch (error) {
            console.error("Error fetching employee roles:", error);
          }
        };
    
        fetchEmployeeRoles();
      }, []); 
    




  
const UpdateLastOneDay=(e)=>{
if(e.target.checked){
    setTimeFilter(1)
}else{
    setTimeFilter(365)
}
}
const UpdateLastOneWeek=(e)=>{
    if(e.target.checked){
        setTimeFilter(7)
    }else{
        setTimeFilter(365)
    }
    }
    const UpdateLastOneMonth=(e)=>{
        if(e.target.checked){
            setTimeFilter(31)
        }else{
            setTimeFilter(365)
        }
        }


        const ToDegree=(event)=>{
            if(event.target.checked){
                setEducation((prev)=>[...prev,"Degree"])
            }else{
                setEducation((prev)=>prev.filter((each)=>each !== "Degree"))
            }

        }

        const ToInter=(event)=>{
            if(event.target.checked){
                setEducation((prev)=>[...prev,"Inter"])
            }else{
                setEducation((prev)=>prev.filter((each)=>each !== "Inter"))
            }

        }

        const ToDiploma=(event)=>{
            if(event.target.checked){
setEducation((prev)=>[...prev,"Diploma"])
            }else{
                setEducation((prev)=>prev.filter((each)=>each!=="Diploma"))
            }
        }

       const ToMaster=(event)=>{
        if(event.target.checked){
            setEducation((prev)=>[...prev,"Masters"])
        }else{
        setEducation((prev)=>prev.filter((each)=>each!=="Masters"))
        }

       } 


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
                {filterThreeStatus===false&& <button className='Filter-Button' onClick={()=>setFilterThreeStatus(!filterThreeStatus)}>Date Posted</button>}
            {filterThreeStatus&&
                 <div className='FiltersContainer'>
                
    <button className='Filter-Button' onClick={()=>setFilterThreeStatus(!filterThreeStatus)}>Date Posted</button>
                 <div className='inline-block-container'>
                     <input type='checkBox' className='Checkbox'  onChange={UpdateLastOneDay} />
                     <p>Last 24 Hours</p>
                 </div>
                 <div className='inline-block-container'>
                     <input type='checkBox' className='Checkbox' onChange={UpdateLastOneWeek} />
                     <p>Last 15 Days</p>
                 </div>
                 <div className='inline-block-container'>
                     <input type='checkBox' className='Checkbox' onChange={UpdateLastOneMonth} />
                     <p>Last 30 Days</p>
                 </div>
                
                
             </div>}
               
              {filterOneStatus===false&& <button className='Filter-Button' onClick={()=>SetFilterOneStatus(!filterOneStatus)}>Job Type</button>} 
{filterOneStatus&&  <div className='FiltersContainer'>
                  
    <button className='Filter-Button' onClick={()=>SetFilterOneStatus(!filterOneStatus)}>Job Type</button>
                  <div className='inline-block-container'>
                      <input type='checkBox' className='Checkbox'  onChange={UpdateJobMode} />
                      <p>Remote</p>
                  </div>
                  <div className='inline-block-container'>
                      <input type='checkBox' className='Checkbox' onChange={UpdatetoOnset} />
                      <p>Onsite</p>
                  </div>
              </div>}
              {filterTwoStatus===false&& <button className='Filter-Button' onClick={()=>setFilterTwoStatus(!filterTwoStatus)}>Education Level</button>} 
              {filterTwoStatus&&
              
                <div className='FiltersContainer'>
                    <button className='Filter-Button' onClick={()=>setFilterTwoStatus(!filterTwoStatus)}>Education Level</button>
    
               
                <div className='inline-block-container'>
                    <input type='checkBox' className='Checkbox' onChange={ToDegree}  />
                    <p>Bachelor's degree</p>
                </div>
                <div className='inline-block-container'>
                    <input type='checkBox' className='Checkbox' onChange={ToMaster}  />
                    <p>Master's degree</p>
                </div>
                <div className='inline-block-container'>
                    <input type='checkBox' className='Checkbox' onChange={ToDiploma}  />
                    <p>Diploma</p>
                </div>
                <div className='inline-block-container'>
                    <input type='checkBox' className='Checkbox' onChange={ToInter}  />
                    <p>12th Pass</p>
                </div>
            </div>
              }
              



            </div>
        )
    }

    

    const UpdateAdvanceStatus = () => {
        setAdvanceFilterStatus(!advanceFilterStatus)
    }

    const UpdateSearchResult = (e) => {
        setSearchResult(e.target.value.toLowerCase())
    }

    const UpdateFinelSearchResult=()=>{
        setSearchButton(searchResult)
    }

    const CountryJobs = country?.toLowerCase() === "calcutta" ? jobArray.filter((each) => each.JobLocation === "INDIA" && (each.JobTitle.toLowerCase().includes(searchButton)||each.Description.toLowerCase().includes(searchButton))&& jobMode.some((mode) => each.JobType.includes(mode))&&education.some((mode) => each.Education.includes(mode))&& (new Date() - new Date(each.DateOfPosted)) / (1000 * 3600 * 24) <= timeFilter):  jobArray.filter((each) => each.JobLocation === "USA" && (each.JobTitle.toLowerCase().includes(searchButton)||each.Description.toLowerCase().includes(searchButton))&& jobMode.some((mode) => each.JobType.includes(mode))&&education.some((mode) => each.Education.includes(mode))&& (new Date() - new Date(each.DateOfPosted)) / (1000 * 3600 * 24) <= timeFilter)
 
     

    return (
        <div className='HomeTopLayer'>
            <Header />
            <DeskTopHeader />
            <div className='ConsenTopLayer'>
                <ServiceHeaders ServiceHeadersInfo="Find Jobs" />
                <div className='JobTopLayer'>
                    <div className='JobSearchContainer'>
                        <div className='FirstSearch-layer'>
                        <input type='search' className='SearchBar' placeholder='Job Tittle or KeyWord' onChange={UpdateSearchResult} />
                        <button className='Filter-Button' onClick={UpdateFinelSearchResult}>Search</button>
                        </div>
     
                        <button className='AdvanceSearch FilterButton-Items' onClick={UpdateAdvanceStatus}>{AdvanceSearch}</button>
                        
                    </div>
                    {advanceFilterStatus && AdvanceSerach()}
                   
                    <div className='JobsArray'>
                     
                        {CountryJobs.map((each, index) => <JobItems key={index} JobItemInfo={each} />)}
                    </div>

<p>Sidd</p>
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
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../Header/Header";
import DesktopHeader from '../DeskTopHeader/DeskTopHeader';
import ServiceHeaders from '../ServiceHeaders/ServiceHeaders';
import BottomPage from '../BottomPage/BottomPage';
import AdminPageLogo from '../Assets/AdminePageLogo.png';
import axios from 'axios';
import { AuthenticationContent } from '../constant/TimeSheet'
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc,getDoc } from "firebase/firestore";
import PostingIcon from '../Assets/PostingIcon.gif'
import JobPosting from '../Assets/JobPosting.png'
import './Updatecurrentopenings.css';
import { Link } from 'react-router-dom';

const Updatecurrentopenings = () => {
    const Navigate= useNavigate()
    const [adminStatus, setAdminStatus] = useState(true);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [employeesList, setEmployeesList] = useState([]);
    const [filteredEmployees, setFilteredEmployees] = useState([]);
    const [warning, setWarning] = useState("");
    const [jobPostMessag, setJobPostMessage] = useState("");
    const [postingStatus,setPostingStatus]=useState(true)
    const [newJobPost, setNewJobPost] = useState({
        JobTitle: "",
        JobLocation: "",
        Experiance: "",
        DateOfPosted: "",
        JobCity:"",
        JobType: "",
        Description: "",
        isOpen:true,
        Education:"Degree"
    });

    const { EmployeeID, Password, ForgotPassword, Login } = AuthenticationContent;

    useEffect(() => {
        fetchEmployeesDetails();
    }, []);

    const fetchEmployeesDetails = async () => {
        const URL = "https://agilewitsemploys-default-rtdb.firebaseio.com/.json";
        const response = await axios.get(URL);
        const finalOutput = Object.values(response.data);
        setEmployeesList(finalOutput.flat());
    };

    const updateUserName = (e) => {
        setUserName(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    const verifyCredentials = () => {
        const result = employeesList.filter((each) => (each.FirstName === userName) && (each.Password === password));
        setFilteredEmployees(result);

        if (result.length !== 0) {
            setAdminStatus(!adminStatus);
        } else {
            setWarning("Wrong Username or Password");
        }
    };

    const UpdateJobTitle = (e) => {
        setNewJobPost({
            ...newJobPost,
            JobTitle: e.target.value
        });
    };

    const UpdateJobDescription = (e) => {
        setNewJobPost({
            ...newJobPost,
            Description: e.target.value
        });
    };

    const UpdateExperiance = (e) => {
        setNewJobPost({
            ...newJobPost,
            Experiance: `${e.target.value} Years`
        });
    };

    const UpdateCity = (e) => {
        setNewJobPost({
            ...newJobPost,
            JobCity: e.target.value
        });
    };

    const UpdateJobType = (e) => {
        setNewJobPost({
            ...newJobPost,
            JobType: e.target.value
        });
    };

    const UpdateCountry = (e) => {
        setNewJobPost({
            ...newJobPost,
            JobLocation: e.target.value
        });
    };

    const UpdateDateOfPosted = (e) => {
        setNewJobPost({
            ...newJobPost,
            DateOfPosted: e.target.value
        });
    };

    const postJobData = async () => {
        setPostingStatus(false)
        try {
            const firebaseConfig = {
                apiKey: "AIzaSyA0NgdczMcmEuuSiUnNKeArdiT__5In-_c",
                authDomain: "agilewit-prod.firebaseapp.com",
                projectId: "agilewit-prod",
                storageBucket: "agilewit-prod.appspot.com",
                messagingSenderId: "533592934207",
                appId: "1:533592934207:web:ebe1f7b8eec1decd2c358a",
                measurementId: "G-X2X6Z0W78C"
            };
    
           
            const app = initializeApp(firebaseConfig);
            const db = getFirestore(app);
    
          
            const docRef = doc(db, "JobPostings", "OpenJobs");
    
           
            const docSnap = await getDoc(docRef);
    
            if (docSnap.exists()) {
               
                await setDoc(docRef, {
                  
                        ...docSnap.data().jobPostings,  
                        [new Date().toISOString()]: newJobPost,  
                 
                }, { merge: true });
    
                console.log("New job data successfully added!");
                setJobPostMessage("Job posted successfully!");
                Navigate('/Jobs')
            } else {

                await setDoc(docRef, {
                    jobPostings: {
                        [new Date().toISOString()]: newJobPost
                    }
                });
    
                console.log("New job data successfully added!");
                setJobPostMessage("Job posted successfully!");
            }
        } catch (error) {
            console.error("Error posting job data:", error);
            setJobPostMessage("Error posting job data.");
        }
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        postJobData();
    };

    return (
        <div className='HomeTopLayer'>
            <Header />
            <DesktopHeader />
            <div className='SubHomeSecondLayer'>
                <ServiceHeaders ServiceHeadersInfo="UpdateOpenings" />
                {adminStatus ? (
                    <div className='TimeSheet-Input'>
                        <img className='AdminLogo' src={AdminPageLogo} alt="AdminLogo" />
                        <div className='Employee-Details'>
                            <div>
                                <p>{EmployeeID}</p>
                                <input type='text' className='Input-Value' value={userName} placeholder='Enter your Employee ID' onChange={updateUserName} />
                            </div>
                            <div>
                                <p>{Password}</p>
                                <input type='password' className='Input-Value' value={password} placeholder='Enter Your Password' onChange={updatePassword} />
                            </div>
                            <button className='Login-Button' onClick={verifyCredentials}>{Login}</button>
                            <Link to="/ResetPassword">
                                <p style={{ textAlign: "center" }}>{ForgotPassword}</p>
                            </Link>
                            <p className='WarningMsg'>{warning}</p>
                        </div>
                    </div>
                ) : (
                    <div>
                        {filteredEmployees.map((each) => (
                            <div key={each.FirstName + each.LastName}>
                                {each.Type === "Admin" && (
                                    <div className='DashBoard-TopLayer'>

{postingStatus===true?
                                        <div className='CurrentOpening-TopLayer'>
                                            <img className='JobPostingLogo' src={JobPosting} alt="JobPostingLogo" />
                                            <form className="JobPosting-Form" onSubmit={handleSubmit}>
                                                <h3 style={{ textAlign: "center" }}>Post A New  Job</h3>
                                                <label htmlFor="firstName" className='Center'>Job Title</label>
                                                <input
                                                    className='Center'
                                                    type="text"
                                                    id="firstName"
                                                    name="firstName"
                                                    placeholder='Enter Job Title'
                                                    onChange={UpdateJobTitle}
                                                    required />
                                                <label htmlFor="firstName" className='Center'>Job Description</label>
                                                <textarea required placeholder='Enter Job Description' className='Center' onChange={UpdateJobDescription} />
                                                <label htmlFor="lastName" className='Center'>Experience</label>
                                                <input
                                                    className='Center'
                                                    type="number"
                                                    id="lastName"
                                                    name="lastName"
                                                    placeholder='Enter Required Experience'
                                                    onChange={UpdateExperiance}
                                                    required />
                                                <label htmlFor="lastName" className='Center'>City</label>
                                                <input
                                                    className='Center'
                                                    type="text"
                                                    id="lastName"
                                                    name="lastName"
                                                    placeholder='Enter Job City'
                                                    onChange={UpdateCity}
                                                    required />
                                                <label className='Center'>Country Location</label>
                                                <select onChange={UpdateCountry}>
                                                    <option className='Center'>Choose Location</option>
                                                    <option value="INDIA" className='Center'>INDIA</option>
                                                    <option value="USA" className='Center'>USA</option>
                                                </select>
                                                <label className='Center'>Job Type</label>
                                                <select onChange={UpdateJobType}>
                                                    <option className='Center'>Choose Job Type</option>
                                                    <option value="Remote" className='Center'>Remote</option>
                                                    <option value="OnSite" className='Center'>OnSite</option>
                                                </select>
                                                <label htmlFor="dateOfJoining" className='Center'>Date of Posting</label>
                                                <input
                                                    className='Center'
                                                    type="date"
                                                    id="dateOfJoining"
                                                    name="dateOfJoining"
                                                    onChange={UpdateDateOfPosted}
                                                    required
                                                />
                                                <button type="submit" className="Login-Button">Post A Job</button>
                                          
                                                <p className="WarningMsg">{jobPostMessag}</p>
                                            </form>
                                        </div>
                                        :<img className='PostingIcon' src={PostingIcon} alt='PostingIcon'/>}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
                <BottomPage />
            </div>
        </div>
    );
};

export default Updatecurrentopenings;

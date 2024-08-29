import { useState, useEffect } from 'react';
import Header from "../Header/Header";
import DesktopHeader from '../DeskTopHeader/DeskTopHeader';
import ServiceHeaders from '../ServiceHeaders/ServiceHeaders';
import BottomPage from '../BottomPage/BottomPage';
import AdminPageLogo from '../Assets/AdminePageLogo.png';
import axios from 'axios';
import { AuthenticationContent } from '../constant/TimeSheet'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, doc, addDoc } from "firebase/firestore";
import JobPosting from '../Assets/JobPosting.png'
import './Updatecurrentopenings.css';
import { Link } from 'react-router-dom';

const Updatecurrentopenings = () => {
    const [adminStatus, setAdminStatus] = useState(true);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [employeesList, setEmployeesList] = useState([]);
    const [filteredEmployees, setFilteredEmployees] = useState([]);
    const [warning, setWarning] = useState("");
    const [jobPostMessag, setJobPostMessage] = useState("")
    const [newJobPost, setNewJobPost] = useState({
        JobTitle: "",
        JobLocation: "",
        Experiance: "",
        DateOfPosted: "",
        Location: "",
        JobType: "",
        Description: "",
    })

    const { EmployeeID, Password, ForgotPassword, Login } = AuthenticationContent

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
        })
    }

    const UpdateJobDescription=(e)=>{
        setNewJobPost({
            ...newJobPost,
            Description:e.target.value
        })
    }
const UpdateExperiance=(e)=>{
    setNewJobPost({
        ...newJobPost,
        Experiance:`${e.target.value} Years`
    })
}

const UpdateCity=(e)=>{
    setNewJobPost({
        ...newJobPost,
        JobLocation:e.target.value
    })
}

const UpdateJobType=(e)=>{
setNewJobPost({
    ...newJobPost,
    JobType:e.target.value
})
}

const UpdateCountry=(e)=>{
setNewJobPost({
    ...newJobPost,
    Location:e.target.value
})
}

const UpdateDateOfPosted=(e)=>{
    setNewJobPost({
        ...newJobPost,
        DateOfPosted:e.target.value
    })
}



  const PostNewPosting = async (e) => {
    e.preventDefault();
    const firebaseConfig = {
        apiKey: "AIzaSyBatfo5hniRm2ma8wHd8DLwS5Zr7RGVdH0",
        authDomain: "agilewit-dev.firebaseapp.com",
        projectId: "agilewit-dev",
        storageBucket: "agilewit-dev.appspot.com",
        messagingSenderId: "569729659401",
        appId: "1:569729659401:web:e6f869b41e07b113edfed8",
        measurementId: "G-37VG9ZG7F3",
      };
      
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
    try {
      const docRef = await addDoc(collection(db, "JobPostings"), newJobPost);
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
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
                                    <div className='Dash-Board'>
                                        <div className='CurrentOpening-TopLayer'>
                                            <img className='JobPostingLogo' src={JobPosting} alt="JobPostingLogo" />
                                            <form className="JobPosting-Form" onSubmit={PostNewPosting}>
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
                                                <textarea required placeholder='Enter Job Desription' className='Center' onChange={UpdateJobDescription}>

                                                </textarea>

                                                <label htmlFor="lastName" className='Center'>Experiance</label>
                                                <input
                                                    className='Center'
                                                    type="number"
                                                    id="lastName"
                                                    name="lastName"
                                                    placeholder='Enter Required Experiance'
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
                                                <label className='Center'> Country Location</label>
                                                <select onChange={UpdateCountry}>
                                                    <option className='Center'>Choose Location</option>
                                                    <option value="INDIA" className='Center'>INDIA</option>
                                                    <option value="USA" className='Center'>USA</option>
                                                   
                                                </select>

                                                <label className='Center'> Job Type</label>

                                                <select onChange={UpdateJobType}>
                                                    <option className='Center'>Choose JobType</option>
                                                    <option value="Remote" className='Center'>Remote </option>
                                                    <option value="OnSite" className='Center'>OnSite</option>
                                                </select>
                                                <label htmlFor="dateOfJoining" className='Center' >DateofPosting</label>
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

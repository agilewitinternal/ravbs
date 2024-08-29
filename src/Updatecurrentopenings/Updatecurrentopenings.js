import { useState, useEffect } from 'react';
import Header from "../Header/Header";
import DesktopHeader from '../DeskTopHeader/DeskTopHeader';
import ServiceHeaders from '../ServiceHeaders/ServiceHeaders';
import BottomPage from '../BottomPage/BottomPage';
import AdminPageLogo from '../Assets/AdminePageLogo.png';
import axios from 'axios';
import { AuthenticationContent } from '../constant/TimeSheet'
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
    const [jobPostMessag, setJobPostMessag] = useState("")

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
                                            <form className="JobPosting-Form">
                                                <h3 style={{ textAlign: "center" }}>Post A New  Job</h3>

                                                <label htmlFor="firstName" className='Center'>Job Title</label>
                                                <input
                                                    className='Center'
                                                    type="text"
                                                    id="firstName"
                                                    name="firstName"
                                                    placeholder='Enter Job Title'
                                                    required

                                                />

                                                <label htmlFor="firstName" className='Center'>Job Description</label>
                                            <textarea required placeholder='Enter Job Desription' className='Center'>

                                            </textarea>


                                                <label htmlFor="lastName" className='Center'>City</label>
                                                <input
                                                    className='Center'
                                                    type="text"
                                                    id="lastName"
                                                    name="lastName"
                                                    placeholder='Enter Job City'
                                                    required


                                                />


                                                <label className='Center'> Country Location</label>

                                                <select>
                                                    <option className='Center'>USA</option>
                                                    <option selected className='Center'>INDIA</option>
                                                </select>

                                                <label className='Center'> Job Type</label>

                                                <select>
                                                    <option className='Center'>Remote </option>
                                                    <option selected className='Center'>OnSite</option>
                                                </select>


                                                <label htmlFor="dateOfJoining" className='Center' >DateofPosting</label>
                                                <input
                                                    className='Center'
                                                    type="date"
                                                    id="dateOfJoining"
                                                    name="dateOfJoining"
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

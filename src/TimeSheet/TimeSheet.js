import { useState, useEffect } from 'react';
import WeekNavigator from '../Week/Week';
import Header from "../Header/Header";
import DesktopHeader from '../DeskTopHeader/DeskTopHeader';
import ServiceHeaders from '../ServiceHeaders/ServiceHeaders';
import BottomPage from '../BottomPage/BottomPage';
import AdminPageLogo from '../Assets/AdminePageLogo.png';
import UpArrow from '../Assets/Up-Arrow.png'
import DownArrow from '../Assets/Down-Arrow.png'
import AdminGreen from '../Assets/AdminGreen.png';
import EmploysListItem from '../EmploysListItem/EmploysListItem'
import axios from 'axios';
import './TimeSheet.css';

const TimeSheet = () => {
    const [adminStatus, setAdminStatus] = useState(true);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [employeesList, setEmployeesList] = useState([]);
    const [filteredEmployees, setFilteredEmployees] = useState([]);
    const [warning, setWarningMessage] = useState("");
    const [arrowStatus,setArrowStatus]=useState(false)

    useEffect(() => {
        fetchEmployeesDetails()
    }, []);

    const fetchEmployeesDetails = async () => {
        const URL = "https://agilewitsemploys-default-rtdb.firebaseio.com/.json";
        const response = await axios.get(URL);
        const finalOutput = Object.values(response.data);
        setEmployeesList(finalOutput.flat());
    }

    const updateUserName = (e) => {
        setUserName(e.target.value);
    }

    const updatePassword = (e) => {
        setPassword(e.target.value);
    }

    const verifyCredentials = () => {
        const result = employeesList.filter((each) => (each.FirstName === userName) && (each.Password === password));
        setFilteredEmployees(result);

        if (result.length !== 0) {
            setAdminStatus(!adminStatus);
        } else {
            setWarningMessage("Wrong Username or Password");
        }
    }

    const UpdateArrowStatus=()=>{
        setArrowStatus(!arrowStatus)
    }

    return (
        <div className='HomeTopLayer'>
            <Header />
            <DesktopHeader />
            <div className='SubHomeSecondLayer'>
                <ServiceHeaders ServiceHeadersInfo="TimeSheet" />
               
                {adminStatus ? (
                    <div className='TimeSheet-Input'>
                        <img className='AdminLogo' src={AdminPageLogo} alt="AdminLogo" />
                        <div className='Employee-Details'>
                            <div>
                                <p>Employee ID</p>
                                <input type='text' className='Input-Value' value={userName} placeholder='Enter your Employee ID' onChange={updateUserName} />
                            </div>
                            <div>
                                <p>Password</p>
                                <input type='password' className='Input-Value' value={password} placeholder='Enter Your Password' onChange={updatePassword} />
                            </div>
                            <button className='Login-Button' onClick={verifyCredentials}>Login</button>
                        
                            <button className='Login-Button' >Register</button>
                            <p className='WarningMsg'>{warning}</p>
                        </div>
                    </div>
                ) : (
                    <div>
                        {filteredEmployees.map((each) => (
                            <div key={each.Name}>
                                {each.Type === "Admin" ? (
                                    <div className='Dash-Board'>
                                        <div className='DashBoard-FirstLayer'>
                                            <img className='Admin-green' src={AdminGreen} alt='Admin-Logo' />
                                            <h1>{each.FirstName}</h1>
                                            <h1>{each.Type}</h1>
                                            <div className='EmploysInfoContainer'>
                                <p className='EmploysInfoTag'>Employ's Info </p>
                                {arrowStatus?<img className='Arrow' onClick={UpdateArrowStatus} src={UpArrow} alt='UpArrow'/>:<img className='Arrow' onClick={UpdateArrowStatus} src={DownArrow} alt='DownArrow'/>}


                                
                                </div>
                                            {arrowStatus&&<div>{employeesList.map((each)=><EmploysListItem EmployInfo={each}/>)}</div>}
                                        </div>
                                        <WeekNavigator />
                                    </div>
                                ) : (
                                    <p>Employee</p>
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

export default TimeSheet;

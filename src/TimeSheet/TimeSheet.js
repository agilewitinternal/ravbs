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
import {AuthenticationContent} from '../constant/TimeSheet'
import './TimeSheet.css';
import { Link } from 'react-router-dom';

const TimeSheet = () => {
    const [adminStatus, setAdminStatus] = useState(true);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [employeesList, setEmployeesList] = useState([]);
    const [filteredEmployees, setFilteredEmployees] = useState([]);
    const [warning, setWarning] = useState("");
    const [arrowStatus, setArrowStatus] = useState(false);
    const [searchEmploys, setSearchEmploys] = useState("");
    const{EmployeeID,Password,ForgotPassword,Login,NewEmployRegistration,EmployInfo,Employee}=AuthenticationContent
    


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

    const updateArrowStatus = () => {
        setArrowStatus(!arrowStatus);
    };

    const updateSearchEmploys = (e) => {
        setSearchEmploys(e.target.value.toLowerCase());
    };

    const searchResult = employeesList.filter((each) => each.FirstName.toLowerCase().includes(searchEmploys));

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
                                <p>{EmployeeID}</p>
                                <input type='text' className='Input-Value' value={userName} placeholder='Enter your Employee ID' onChange={updateUserName} />
                            </div>
                            <div>
                                <p>{Password}</p>
                                <input type='password' className='Input-Value' value={password} placeholder='Enter Your Password' onChange={updatePassword} />
                            </div>
                            <button className='Login-Button' onClick={verifyCredentials}>{Login}</button>
                            <Link to="/ResetPassword">
                                <p>{ForgotPassword}</p>
                            </Link>

                            <p className='WarningMsg'>{warning}</p>
                        </div>
                    </div>
                ) : (
                    <div>
                        {filteredEmployees.map((each) => (
                            <div key={each.FirstName + each.LastName}>
                                {each.Type === "Admin" ? (
                                    <div className='Dash-Board'>
                                        <div className='DashBoard-FirstLayer'>
                                        <div className='Admin-FirstBlock'>
                                            <img className='Admin-green' src={AdminGreen} alt='Admin-Logo' />
                                            <div>
                                            <h1>{each.FirstName}</h1>
                                            <h1>{each.Type}</h1>
                                            
                                                <Link to="/Registration" ><button className='Registraion-Button'>{NewEmployRegistration}
                                            </button>
                                            </Link>
                                            </div>
                                            </div>
                                            <div className='EmploysInfoContainer'>
                                                <p className='EmploysInfoTag'>{EmployInfo}</p>
                                                {arrowStatus ? <img className='Arrow' onClick={updateArrowStatus} src={UpArrow} alt='UpArrow' /> : <img className='Arrow' onClick={updateArrowStatus} src={DownArrow} alt='DownArrow' />}
                                            </div>
                                            {arrowStatus && (
                                                <div>
                                                    <input type='search' className='SearchBar' onChange={updateSearchEmploys} placeholder='Search By EmployName' />
                                                    {searchResult.map((each) => (
                                                        <EmploysListItem key={each.FirstName + each.LastName} EmployInfo={each} />
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <WeekNavigator />
                                    </div>
                                ) : (
                                    <p>{Employee}</p>
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

import { useState, useEffect } from 'react';
import EmploysTimeSheet from '../EmploysTimeSheet/EmploysTimeSheet';
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
import moment from 'moment';
import { AuthenticationContent } from '../constant/TimeSheet'
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
    const [timingHours, setTimingHours] = useState({});
    const [timesheetMessage,setTimeSheetMessag]=useState("")
    const { EmployeeID, Password, ForgotPassword, Login, NewEmployRegistration, EmployInfo, } = AuthenticationContent
    const [currentDate, setCurrentDate] = useState(moment());
    const startOfWeek = currentDate.clone().startOf('isoWeek');
    const endOfWeek = currentDate.clone().endOf('isoWeek');

    const days = [];
    for (let i = 0; i < 7; i++) {
        days.push(startOfWeek.clone().add(i, 'days'));
    }

    const handlePreviousWeek = () => {
        setCurrentDate(currentDate.clone().subtract(1, 'week'));
    };

    const handleNextWeek = () => {
        setCurrentDate(currentDate.clone().add(1, 'week'));
    };

    useEffect(() => {
        fetchEmployeesDetails();
    }, []);
    const UpdateTimingHours = (date, value) => {
        setTimingHours(prevState => ({
            ...prevState,
            [date]: value
        }));
    };

    const handleSubmit = async () => {
        const entries = days.map(day => {
            const date = day.format('YYYY-MM-DD');
            const WorkingEmployName = filteredEmployees.map((each) => each.FirstName)

            return { EmployName: WorkingEmployName.join(', '), date, WorkingHours: timingHours[date] || '' };
        });

        const Ready = entries.filter((each) => each.WorkingHours)

        console.log(Ready)
        const TimeSheetURL = "https://agilewitstimesheet-default-rtdb.firebaseio.com/.json"
        const Responce = await axios.post(TimeSheetURL, Ready)
        console.log(Responce)
        setTimeSheetMessag("Your Time Sheet Update Successfully")
    };


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
                                <p style={{textAlign:"center"}}>{ForgotPassword}</p>
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
                                            <img className='Admin-green' src={AdminGreen} alt='Admin-Logo' />
                                            <h1>{each.FirstName}</h1>
                                            <h1>{each.Type}</h1>
                                            <button className='Login-Button'>
                                                <Link to="/Registration" className='Registration-Button'>{NewEmployRegistration}</Link>
                                            </button>
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
                                        <EmploysTimeSheet />
                                    </div>
                                ) : (
                                    <div className='Employs-Personal-Info'>
                                        <div className='Profile-Info'>
                                            <img className='Admin-green' src={AdminGreen} alt='Admin-Logo' />
                                            <p>{each.FirstName}</p>
                                            <h3>{each.Designation}</h3>
                                            <p>{each.Email}</p>
                                        </div>
                                        <div>
                                            <h3>{new Date().toDateString()},{new Date().toLocaleTimeString()}</h3>

                                            <div className='Topping'>

                                                <div className='Week-Button'>
                                                    <button className='WeekButton' onClick={handlePreviousWeek}>Previous Week</button>
                                                    <h2>Week from {startOfWeek.format('MMM DD')} to {endOfWeek.format('MMM DD')}</h2>
                                                    <button className='WeekButton' onClick={handleNextWeek}>Next Week</button>
                                                </div><div className='Table-Row'>
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                {days.map(day => (
                                                                    <th key={day.format('YYYY-MM-DD')}>
                                                                        <p>{day.format('ddd')}</p>
                                                                        <p>{day.format('MMM DD')}</p>
                                                                    </th>
                                                                ))}
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                {days.map(day => {
                                                                    const date = day.format('YYYY-MM-DD');
                                                                    return (
                                                                        <td key={date + '-input'}>
                                                                            <input
                                                                                className='Time-Entry'
                                                                                type='number'
                                                                                min="0"
                                                                                step="1"
                                                                                value={timingHours[date] || ''}
                                                                                onChange={(e) => UpdateTimingHours(date, e.target.value)}
                                                                            />
                                                                        </td>
                                                                    );
                                                                })}
                                                            </tr>
                                                        </tbody>
                                                    </table>

                                                </div>
                                                <button className='SubmitButton' onClick={handleSubmit}>Submit</button>
                                                <p>{timesheetMessage}</p>
                                            </div>
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

export default TimeSheet;

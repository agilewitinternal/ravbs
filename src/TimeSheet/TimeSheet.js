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
import { v4 as uuidv4 } from 'uuid';
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
    const [emplysTimeShett,setEmploysTimeSheet]=useState([])
    const [loginStatusMessage,setLoginStatusMessage]=useState("")
    const{EmployeeID,Password,ForgotPassword,Login,NewEmployRegistration,EmployInfo,}=AuthenticationContent
    


    useEffect(() => {
        fetchEmployeesDetails();
    }, []); 

    useEffect(()=>{
        FetchEmploysTimeSheet()
    })


    const FetchEmploysTimeSheet= async()=>{
        const TimeSheetURL = "https://agilewitstimesheet-default-rtdb.firebaseio.com/.json";

        const response = await axios.get(TimeSheetURL);
        const finalOutput = Object.values(response.data);
        setEmploysTimeSheet(finalOutput.flat());
        
    }

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

    const postLogInTime = async () => {
        setLoginStatusMessage("LogInTime Updated SuccessFully")
    
        const timeSheetURL = "https://agilewitstimesheet-default-rtdb.firebaseio.com/.json";
    
        try {
            const response = await axios.post(timeSheetURL, {  id:uuidv4(),
                LogInDate: new Date().toDateString(),
                Time: new Date().toLocaleTimeString()});
            console.log('Data posted successfully:', response.data);
            setLoginStatusMessage("")
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };


    const PostLogOutTime=async()=>{
        setLoginStatusMessage("LogOut time Updated Successfully")
const UpdatedEmployeeTimeSheet=emplysTimeShett.map((each)=>{
    if(each.LogInDate===new Date().toDateString()){
        return {...each,LogOutTime:new Date().toLocaleTimeString()}
    }else{
        return each
    }

})
const timeSheetURL = "https://agilewitstimesheet-default-rtdb.firebaseio.com/.json";
    
try{
const Responce=await axios.put(timeSheetURL,UpdatedEmployeeTimeSheet)
console.log(Responce)
setLoginStatusMessage('')
}catch(error){
console.log(error)
}
    }
    

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
                                            <img className='Admin-green' src={AdminGreen} alt='Admin-Logo' />
                                            <h1>{each.FirstName}</h1>
                                            <h1>{each.Type}</h1>
                                            <button className='Login-Button'>
                                                <Link to="/Registration" className='Login-Button' >{NewEmployRegistration}</Link>
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
                                        <WeekNavigator />
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
                                        <div className='LogIn-Container'>
<button className='Login-Button'>Current Week </button>
<button className=' Login-Button'>Previous Week</button>
                                        </div>
                                        <table>
                                            <tr>
                                                <th>
                                                    Date
                                                </th>
                                                <th>
                                                    LogIn Time
                                                </th>
                                                <th>
                                                    LogOut Time
                                                </th>
                                            </tr>
                                          {emplysTimeShett.map((each)=><tr>
                                            <td>{each.LogInDate}</td>
                                            <td>{each.Time}</td>
                                            <td>{each.LogOutTime}</td>
                                          </tr>)}           
                                        </table>
                                        <div className='LogIn-Container'>
<button className='Login-Button' onClick={postLogInTime}>LogIn</button>
<button className=' Login-Button' onClick={PostLogOutTime}>LogOut</button>
                                        </div>
                                        <p>*{loginStatusMessage}</p>
                                        
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

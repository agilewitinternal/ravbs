import { useState, useEffect } from 'react';
import WeekNavigator from '../Week/Week'
import Header from "../Header/Header";
import DesktopHeader from '../DeskTopHeader/DeskTopHeader';
import ServiceHeaders from '../ServiceHeaders/ServiceHeaders';
import BottomPage from '../BottomPage/BottomPage';
import AdminePageLogo from '../Assets/AdminePageLogo.png'
import AdminGreen from '../Assets/AdminGreen.png'
import axios from 'axios';
import './TimeSheet.css';

const TimeSheet = () => {
    const [adminStatus, setAdminStatus] = useState(true)
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [employsList, setEmploysList] = useState([])
    const [filterEmploys, setFilterEmploys] = useState([])
    const [warning, setWarningMessage] = useState("")

    useEffect(() => {
        FetchEmplysDetails()
    }, [])

    const FetchEmplysDetails = async () => {
        const URL = "https://agilewitsemploys-default-rtdb.firebaseio.com/.json"
        const Code = await axios.get(URL)
        const FinelOutPut = Object.values(Code.data)
        setEmploysList(FinelOutPut.flat())
    }

    const UpdateUserName = (e) => {
        setUserName(e.target.value)

    }

    const UpdatePassword = (e) => {
        setPassword(e.target.value)

    }

  


    const Verification = () => {
        const Result = employsList.filter((each) => (each.Name === userName) && (each.Password === password));
        setFilterEmploys(Result);
    
        if (Result.length !== 0) {
            setAdminStatus(!adminStatus);
        } else {
            setWarningMessage("Wrong Username or Password");
        }
    }
    

    return (
        <div className='HomeTopLayer'>
            <Header />
            <DesktopHeader />
            <div className='SubHomeSecondLayer'>
                <ServiceHeaders ServiceHeadersInfo="TimeSheet" />
                {adminStatus ? <div className='TimeSheet-Input'>
                    <img className='AdminLogo' src={AdminePageLogo} alt="AdminLogo" />
                    <div className='Employ-Details'>
                        <div>
                            <p>Employ ID</p>
                            <input type='Text' value={userName} placeholder='Enter your Employ ID' onChange={UpdateUserName} />
                        </div>
                        <div>
                            <p>Password</p>
                            <input type='password' value={password} placeholder='Enter Your Password' onChange={UpdatePassword} />
                        </div>
                        <button className='Login-Button' onClick={Verification}>Login</button>
                        <p className='WarningMsg'>{warning}</p>
                    </div>
                </div> : <div>
                    {filterEmploys.map((each) => <div>
                        {each.Type === "Admin" ? <div className='Dash-Board'> <div className='DashBoard-FirstLayer'><img className='Admin-green' src={AdminGreen} alt='Admin-Logo' />  <h1>{each.Name}</h1><h1>{each.Type}</h1></div>   <WeekNavigator /></div> : <p>Employ</p>}
                    </div>)}
                </div>}
                <BottomPage />
            </div>
        </div>
    );
};

export default TimeSheet;

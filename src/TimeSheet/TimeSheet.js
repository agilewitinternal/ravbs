import { useState, useEffect } from 'react';
import Admin from '../Admin/Admin';
import Employes from '../Employes/Employes';
import Header from "../Header/Header";
import DesktopHeader from '../DeskTopHeader/DeskTopHeader';
import ServiceHeaders from '../ServiceHeaders/ServiceHeaders';
import BottomPage from '../BottomPage/BottomPage';
import AdminePageLogo from '../Assets/AdminePageLogo.png'
import axios from 'axios';
import './TimeSheet.css';




const TimeSheet = () => {
    const [adminStatus, setAdminStatus] = useState(true)
    const[userName,setUserName]=useState("")
    const[password,setPassword]=useState("")
    const[employsList,setEmploysList]=useState([])
    const[filterEmploys,setFilterEmploys]=useState([])
    const[warning,setWarningMessage]=useState("")


    const FetchEmplysDetails = async () => {
        const URL = "https://agilewitsemploys-default-rtdb.firebaseio.com/.json"
        const Code = await axios.get(URL)
        const FinelOutPut = Object.values(Code.data)
        setEmploysList(FinelOutPut.flat())

        

    }


    

    useEffect(()=>{
        FetchEmplysDetails()
    },[])


    const UpdateUserName=(e)=>{
        setUserName(e.target.value)

    }

    const UpdatePassword=(e)=>{
setPassword(e.target.value)
    }

const Verification=()=>{


    const Result=employsList.filter((each)=>(each.Name===userName)&&(each.Password===password))

    setFilterEmploys(Result)

    if(filterEmploys.length!==0){
        setAdminStatus(!adminStatus)
    }

    if (filterEmploys.length===0){
        setWarningMessage("EnterProperDetails")
    }

}



    return (
        <div className='HomeTopLayer'>
            <Header />
            <DesktopHeader />
            <div className='SubHomeSecondLayer'>
                <ServiceHeaders ServiceHeadersInfo="TimeSheet" />

               

                {adminStatus? <div className='TimeSheet-Input'>
                    <img className='AdminLogo' src={AdminePageLogo} alt="AdminLogo" />
                    <div className='Employ-Details'>
                        <div>
                            <p>Employ ID</p>
                        
                            <input type='Text'value={userName} placeholder='Enter your Employ ID' onChange={UpdateUserName} />
                        </div>
                        <div>
                          
                            <p>Password</p>
                            <input type='password'value={password} placeholder='Enter Your Password' onChange={UpdatePassword} />
                        </div>
                        <button className='Login-Button' onClick={Verification}>Login</button>
                        <p className='WarningMsg'>{warning}</p>
                    </div>
                </div>:<div>
                {filterEmploys.map((each)=><div>

                    <p>{each.Name}</p>
                   {each.Type==="Admin"?<p>Admin</p>:<p>Employ</p>}
                   <table>
                    <tr>
                        <th>Project Name</th>
                        <th>Monday</th>
                        <th>TuesDay</th>
                        <th>Wednes Day</th>
                        <th>Thurs Day</th>
                        <th>Fri Day</th>
                        <th>Satur Day</th>
                        <th> Sunday</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                   </table>
                </div>)}

            
                    </div>}

                <BottomPage />
            </div>
        </div>
    );
};

export default TimeSheet;

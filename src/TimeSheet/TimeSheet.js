import { useState, useEffect } from 'react';
import Admin from '../Admin/Admin';
import Employes from '../Employes/Employes';
import Header from "../Header/Header";
import DesktopHeader from '../DeskTopHeader/DeskTopHeader';
import ServiceHeaders from '../ServiceHeaders/ServiceHeaders';
import BottomPage from '../BottomPage/BottomPage';
import axios from 'axios';
import './TimeSheet.css';

const TimeSheet = () => {
    const [employesInfo, setEmployesInfo] = useState([]);
    const [passwordStorage, setPasswordStorage] = useState("");
    const [validation, setValidation] = useState(false);
    
    
    const fetchEmployDetails = async () => {
        try {
            const URL = "https://agilewitemploys-default-rtdb.firebaseio.com/.json";
            const postEmployDetails = await axios.get(URL);
            const importedEmployesData = Object.values(postEmployDetails.data);
            setEmployesInfo(importedEmployesData.flat());
        } catch (error) {
            console.log(error);
        }
    };



    useEffect(() => {
        fetchEmployDetails();
        setPasswordStorage(localStorage.getItem("EmployeePassword"));
        if (employesInfo.some(each => each.Password === passwordStorage)) {
            setValidation(true);
        } else {    
            setValidation(false);
            
           
        }
    }, [employesInfo, passwordStorage]);

   
    console.log(validation);

    return (
        <div className='HomeTopLayer'>
            <Header />
            <DesktopHeader />
            <div className='SubHomeSecondLayer'>
                <ServiceHeaders ServiceHeadersInfo="TimeSheet" />
              
                {validation ? <Employes /> : <Admin />}
              
                <BottomPage />
            </div>
        </div>
    );
};

export default TimeSheet;

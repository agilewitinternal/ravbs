import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import DesktopHeader from '../DeskTopHeader/DeskTopHeader';
import ServiceHeaders from '../ServiceHeaders/ServiceHeaders';
import BottomPage from '../BottomPage/BottomPage';
import RegisterNows from '../Assets/RegisterNow.png'
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import {RegistrationContent} from '../constant/TimeSheet'
import './Registration.css';

const Registration = () => {
    const [newUser, setNewUser] = useState({
        Id:uuidv4(),
        FirstName: '',
        LastName: '',
        Designation:'',
        DateOfJoining: '',
        Email:"",
        Password: '',
        Type: "Employ"
    })
    const [verificationPassword, setVerificationPassword] = useState("")
    const [passwordWarningMessage, setPasswordWarningMessage] = useState("")
    const navigate = useNavigate();
    const {RegisterNow,FirstName,LastName,SelectYourDesignation,DesignationList,DateofJoining,Email,Password,ReEnterPassword,Register}=RegistrationContent

    const UpdateFirstName = (e) => {
        setNewUser({
            ...newUser,
            FirstName: e.target.value
        });
    };

    const UpdateLastName = (e) => {
        setNewUser({
            ...newUser,
            LastName: e.target.value
        })
    }

    const UpdateDesignation=(e)=>{
        setNewUser({
            ...newUser,
            Designation: e.target.value
        });
    }

    const UpdateDateOfJoing = (e) => {
        setNewUser({
            ...newUser,
            DateOfJoining: e.target.value
        })

    }


    const UpdateEmail=(e)=>{
        setNewUser({
            ...newUser,
            Email: e.target.value
        })
    }


    const UpdateFirstPassword = (e) => {
        setVerificationPassword(e.target.value)
    }


    const UpdateFinelPassword = (e) => {
        setNewUser({
            ...newUser,
            Password: e.target.value
        })
    }

    const SubmitDetails = async (e) => {
        e.preventDefault();
    
        if (verificationPassword !== newUser.Password) {
            setPasswordWarningMessage("Password Not Matching");
        } else {
            setPasswordWarningMessage("Registered Successfully");
            const URL = "https://agilewitsemploys-default-rtdb.firebaseio.com/.json";
    
            try {
                const newDetailsPosting = await axios.post(URL, newUser);
                console.log(newDetailsPosting);
    
                navigate('/TimeSheet');
                
            } catch (error) {
                console.error("Error during registration:", error);
            
            }
        }
    };
    
    return (
        <div className='HomeTopLayer'>
            <Header />
            <DesktopHeader />
            <div className='SubHomeSecondLayer'>
                <ServiceHeaders ServiceHeadersInfo="Registration" />
                <div className="Registrtion-TopLayer">
                    <img src={RegisterNows} alt="RegisterNow" className="RegisterNow" />
                    <form className="Registration-Form" onSubmit={SubmitDetails}>
                        <h3>{RegisterNow}</h3>
                        <div>
                        <label htmlFor="firstName">{FirstName}</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                required
                                onChange={UpdateFirstName}
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName">{LastName}</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                required
                                onChange={UpdateLastName}

                            />
                        </div>
                        <div className="Designation-Container">
                        <label>{SelectYourDesignation}</label>
                        <select className="Designation" onChange={UpdateDesignation}>
                           {DesignationList.map((each)=><option value={each}>{each}</option>)}
                        </select>
    
                        </div>
                        <div>
                            <label htmlFor="dateOfJoining">{DateofJoining}</label>
                            <input
                                type="date"
                                id="dateOfJoining"
                                name="dateOfJoining"
                                required
                                onChange={UpdateDateOfJoing}

                            />
                        </div>
                        <div>
                            <label htmlFor="Email">{Email}</label>
                            <input
                                type="email"
                                id="Email"
                                name="Email"
                                required
                                onChange={UpdateEmail}

                            />
                        </div>
                        <div>
                            <label htmlFor="password">{Password}</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                onChange={UpdateFirstPassword}

                            />
                        </div>
                        <div>
                            <label htmlFor="password">{ReEnterPassword}</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                onChange={UpdateFinelPassword}

                            />
                        </div>
            
                        <button type="submit" className="Login-Button">{Register}</button>
                        <p className="WarningMsg">{passwordWarningMessage}</p>
                    </form>
                </div>
                <BottomPage />
            </div>
        </div>
    );
};

export default Registration;
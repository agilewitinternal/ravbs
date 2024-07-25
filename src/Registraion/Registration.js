import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import DesktopHeader from '../DeskTopHeader/DeskTopHeader';
import ServiceHeaders from '../ServiceHeaders/ServiceHeaders';
import BottomPage from '../BottomPage/BottomPage';
import RegisterNow from '../Assets/RegisterNow.png'
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import './Registration.css';

const Registration = () => {
    const [newUser, setNewUser] = useState({
        Id:uuidv4(),
        FirstName: '',
        LastName: '',
        DateOfJoining: '',
        Password: '',
        Type: "Employ"
    })
    const [verificationPassword, setVerificationPassword] = useState("")
    const [passwordWarningMessage, setPasswordWarningMessage] = useState("")
    const navigate = useNavigate();

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


    const UpdateDateOfJoing = (e) => {
        setNewUser({
            ...newUser,
            DateOfJoining: e.target.value
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
                    <img src={RegisterNow} alt="RegisterNow" className="RegisterNow" />
                    <form className="Registration-Form" onSubmit={SubmitDetails}>
                        <div>
                        
                            <label htmlFor="firstName">First Name:</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                required
                                onChange={UpdateFirstName}
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name:</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                required
                                onChange={UpdateLastName}

                            />
                        </div>
                        <div>
                            <label htmlFor="dateOfJoining">Date of Joining:</label>
                            <input
                                type="date"
                                id="dateOfJoining"
                                name="dateOfJoining"
                                required
                                onChange={UpdateDateOfJoing}

                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                onChange={UpdateFirstPassword}

                            />
                        </div>
                        <div>
                            <label htmlFor="password">Re-EnterPassword:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                onChange={UpdateFinelPassword}

                            />
                        </div>
                        <button type="submit" className="Login-Button">Register</button>
                        <p className="WarningMsg">{passwordWarningMessage}</p>
                    </form>
                </div>
                <BottomPage />
            </div>
        </div>
    );
};

export default Registration;
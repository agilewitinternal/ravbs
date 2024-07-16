import { useState } from "react";
import Header from "../Header/Header";
import DesktopHeader from '../DeskTopHeader/DeskTopHeader';
import ServiceHeaders from '../ServiceHeaders/ServiceHeaders';
import BottomPage from '../BottomPage/BottomPage';
import RegisterNow from '../Assets/RegisterNow.png'
import axios from "axios";
import './Registration.css';

const Registration = () => {
    const [newUser, setNewUser] = useState({
        firstName: 'Siddu',
        lastName: 'T',
        dateOfJoining: '2',
        password: 'Dhoni'
    })
    const [verificationPassword, setVerificationPassword] = useState("")
    const [passwordWarningMessage, setPasswordWarningMessage] = useState("")

    const UpdateFirstName = (e) => {
        setNewUser({
            firstName: e.target.value
        });
    };

    const UpdateLastName = (e) => {
        setNewUser({
            lastName: e.target.value
        })
    }


    const UpdateDateOfJoing = (e) => {
        setNewUser({
            dateOfJoining: e.target.value
        })

    }


    const UpdateFirstPassword = (e) => {
        setVerificationPassword(e.target.value)
    }


    const UpdateFinelPassword = (e) => {
        setNewUser({
            password: e.target.value
        })
    }

    const SubmitDetails = async(e) => {
        e.preventDefault();
       
        const URL = "https://agilewitsemploys-default-rtdb.firebaseio.com/.json";

        const NewDeatilsPosting=await axios.post(URL,newUser)

        console.log(NewDeatilsPosting)

    }
    return (
        <div className='HomeTopLayer'>
            <Header />
            <DesktopHeader />
            <div className='SubHomeSecondLayer'>
                <ServiceHeaders ServiceHeadersInfo="Registration" />
                <div className="Registrtion-TopLayer">
                    <img src={RegisterNow} alt="RegisterNow" className="RegisterNow" />
                    <form className="Registration-Form" onSubmit={SubmitDetails}>
                        <p>{newUser.password}</p>
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
                                onChange={UpdateLastName}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="dateOfJoining">Date of Joining:</label>
                            <input
                                type="date"
                                id="dateOfJoining"
                                name="dateOfJoining"
                                onChange={UpdateDateOfJoing}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                onChange={UpdateFirstPassword}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Re-EnterPassword:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                onChange={UpdateFinelPassword}
                                required
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

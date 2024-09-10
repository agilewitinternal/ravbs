

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import DesktopHeader from '../DeskTopHeader/DeskTopHeader';
import ServiceHeaders from '../ServiceHeaders/ServiceHeaders';
import BottomPage from '../BottomPage/BottomPage';
import RegisterNows from '../Assets/RegisterNow.png'
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, doc, getDocs } from "firebase/firestore";
import { RegistrationContent } from '../constant/TimeSheet'
import './Registration.css';

const Registration = () => {
    const [newUser, setNewUser] = useState({
        Id: uuidv4(),
        FirstName: '',
        LastName: '',
        Designation: '',
        DateOfJoining: '',
        Email: "",
        Password: '',
        Type: "Employ"
    })
    const [verificationPassword, setVerificationPassword] = useState("")
    const [passwordWarningMessage, setPasswordWarningMessage] = useState("")
    const [roles, setRoles] = useState([])
    const navigate = useNavigate();
    const [listofRoles, setListofRoles] = useState([])
    const { RegisterNow, FirstName, LastName, SelectYourDesignation, DesignationList, DateofJoining, Email, Password, ReEnterPassword, Register } = RegistrationContent

    useEffect(() => {

        const firebaseConfig = {
            apiKey: "AIzaSyA0NgdczMcmEuuSiUnNKeArdiT__5In-_c",
            authDomain: "agilewit-prod.firebaseapp.com",
            projectId: "agilewit-prod",
            storageBucket: "agilewit-prod.appspot.com",
            messagingSenderId: "533592934207",
            appId: "1:533592934207:web:ebe1f7b8eec1decd2c358a",
            measurementId: "G-X2X6Z0W78C"
        };
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);

        const fetchEmployeeRoles = async () => {
            try {
                const snapshot = await getDocs(collection(db, "EmployeeRoles"));
                let roles = [];
                snapshot.docs.forEach((doc) => {
                    const data = doc.data();
                    console.log("Document data:", data);
                    if (data.ListofRoles) {
                        roles = roles.concat(data.ListofRoles);
                    }
                });
                setListofRoles(roles);
                console.log("Roles set to:", roles);
            } catch (error) {
                console.error("Error fetching employee roles:", error);
            }
        };

        fetchEmployeeRoles();
    }, []);


    useEffect(() => {
        if (listofRoles.length > 0) {
            console.log("roles====", listofRoles);
        } else {
            console.log("roles==== is empty or undefined");
        }
    }, [listofRoles]);

    const UpdateFirstName = (e) => {
        setNewUser({
            ...newUser,
            FirstName: e.target.value
        });
    };

    useEffect(() => {

    }, [])

    const UpdateLastName = (e) => {
        setNewUser({
            ...newUser,
            LastName: e.target.value
        })
    }

    const UpdateDesignation = (e) => {
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


    const UpdateEmail = (e) => {
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
                                {listofRoles.map((each) => <option value={each}>{each}</option>)}
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
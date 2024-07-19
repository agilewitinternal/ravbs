import { useState } from "react";
import Header from "../Header/Header";
import DesktopHeader from '../DeskTopHeader/DeskTopHeader';
import ServiceHeaders from '../ServiceHeaders/ServiceHeaders';
import BottomPage from '../BottomPage/BottomPage';
import Reset from '../Assets/Reset.png';
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import auth  from '../ResetPassword/Setup';
import './ResetPassword.css';

const ResetPassword = () => {
    const [phoneNumbers, setPhoneNumber] = useState("");


    const handleReset = async (e) => {
        e.preventDefault();

        try {
            const phoneNumberWithCountryCode = `+91${phoneNumbers}`;
            const recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha",{});
            const confirmation = await signInWithPhoneNumber(auth, phoneNumberWithCountryCode, recaptchaVerifier);
            console.log(confirmation)
        } catch (error) {
            console.error("Error sending password reset email:", error);
            alert("Error sending password reset email. Please try again.");
        }
    };


    return (
        <div className='HomeTopLayer'>
            <Header />
            <DesktopHeader />
            <div className='SubHomeSecondLayer'>
                <ServiceHeaders ServiceHeadersInfo="Reset" />
                <div className="Reset-TopLayer">
                    <img className='AdminLogo' src={Reset} alt="AdminLogo" />
                    <div className="Forgot">
                        <h3>Reset Your Password</h3>
                        <input onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumbers} placeholder="Enter Your Contact Number" pattern="[0-9]" className="input-field" type="tel" name="mobile" maxLength="10" />
                        <div id="recaptcha"></div>

                        <button className="Reset-Button" onClick={handleReset}>Submit</button>
                    </div>
                </div>
                <BottomPage />
            </div>
        </div>
    );
};

export default ResetPassword;

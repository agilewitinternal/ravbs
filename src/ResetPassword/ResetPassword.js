import { useState, useRef, useEffect, } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import Header from "../Header/Header";
import DesktopHeader from '../DeskTopHeader/DeskTopHeader';
import ServiceHeaders from '../ServiceHeaders/ServiceHeaders';
import BottomPage from '../BottomPage/BottomPage';
import Reset from '../Assets/Reset.png';
import {ResetPasswordContent} from '../constant/TimeSheet'
import axios from "axios";
import './ResetPassword.css';

const ResetPassword = () => {
  const form = useRef();
  const Navigate = useNavigate()
  const [employeesList, setEmployeesList] = useState([]);
  const [randomNumber, setrandomNumber] = useState("")
  const [mail, setMail] = useState("")
  const [password, setPassword] = useState()
  const [reEnterPassword, setReEnterPassword] = useState("")
  const [otpStatus, setOTPStatus] = useState("Intial")
  const [verifiedOTP, setverifiedOTP] = useState("")
  const [otpSentMsg, setotpSentMsg] = useState("")
  const [resetMsg, setResetMsg] = useState("")
  const{EnterYourRegisterdEmail,Submit,EnterOTP,VerifyYourOTP,EnteryourNewPassword}=ResetPasswordContent

  console.log(employeesList)

  const UpdateMail = (e) => {
    setMail(e.target.value)
  }

  const fetchEmployeesDetails = async () => {
    const URL = "https://agilewitsemploys-default-rtdb.firebaseio.com/.json";
    const response = await axios.get(URL);
    const finalOutput = Object.values(response.data);
    setEmployeesList(finalOutput.flat());
  }

  useEffect(() => {

    const Random = Math.ceil(Math.random() * 1000000)
    setrandomNumber(Random)

  }, [])

  useEffect(() => {
    fetchEmployeesDetails()
  }, [])


  const FinelResult = () => {

    switch (otpStatus) {
      case "Intial":
        return OTPProcedure();
      case "Process":
        return OTPValidation();
      case "Done":
        return PasswordUpdate();
      default:
        return null
    }

  }




  const OTPProcedure = () => {
    return (

      <form ref={form} onSubmit={sendEmail} className="Forgot">
        <h3>{EnterYourRegisterdEmail}</h3>
        <input name="from_name" onChange={UpdateMail} type="email" required placeholder="Enter Your Registerd Gmail" />
        <input name="message" value={randomNumber} type="mail" placeholder="Enter Your Rehisterd Gmail" style={{ display: "none" }} />
        <button className="Reset-Button" onClick={sendEmail}>{Submit}</button>
        <p className="OTP-SentMsg">*{otpSentMsg}</p>
      </form>
    )
  }

  const OtpVerification = () => {
    if (parseInt(verifiedOTP) === parseInt(randomNumber)) {
      setOTPStatus("Done")
    } else {

      alert("Wrong OTP")
    }
  }

  const OTPValidation = () => {
    return (
      <div className="Forgot">
        <h3>{EnterOTP}</h3>
        <input type="Text" placeholder="Enter OTP sent to your Mail" onChange={(e) => setverifiedOTP(e.target.value)} />
        <button className="Reset-Button" onClick={OtpVerification}>{VerifyYourOTP}</button>

      </div>
    )
  }

  const PasswordUpdate = () => {
    return (
      <div className="New-Password">
        <h3>{EnteryourNewPassword}</h3>
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter New Password" />
        <div>
          <input type="password" onChange={(e) => setReEnterPassword(e.target.value)} placeholder="Re-Enter Password" />
        </div>
        <button className="Reset-Button" onClick={UpdatePassword}>{Submit}</button>
        <p>{resetMsg}</p>
      </div>
    )
  }

  const sendEmail = (e) => {
    e.preventDefault();
    setotpSentMsg("Check your Register Gmail for OTP")
    emailjs
      .sendForm('service_luhf9ts', 'template_14vvnip', form.current, {
        publicKey: 'n53xCe6pXpk8pdF4r',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setOTPStatus("Process")

        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const UpdatePassword = async () => {
    if (password === reEnterPassword) {

      const NewPasswordArray = employeesList.map((each) => {
        if (each.Email === mail) {
          return { ...each, Password: reEnterPassword };
        }
        return each
      })

      const URL = "https://agilewitsemploys-default-rtdb.firebaseio.com/.json";
      const response = await axios.put(URL, NewPasswordArray);
      const finalOutput = Object.values(response.data);
      setEmployeesList(finalOutput.flat());

      alert("Paswword Updated Successfully")
      Navigate("/TimeSheet")
    } else {
      setResetMsg("Password not Matching")
    }
  }

  return (
    <div className='HomeTopLayer'>
      <Header />
      <DesktopHeader />
      <div className='SubHomeSecondLayer'>
        <ServiceHeaders ServiceHeadersInfo="Reset" />
        <div className="Reset-TopLayer">
          <img className='AdminLogo' src={Reset} alt="AdminLogo" />
          {FinelResult()}
        </div>
        <BottomPage />
      </div>
    </div>
  );
};

export default ResetPassword;
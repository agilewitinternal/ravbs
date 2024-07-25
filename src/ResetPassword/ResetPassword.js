import { useState,useRef,useEffect } from "react";
import emailjs from '@emailjs/browser';
import Header from "../Header/Header";
import DesktopHeader from '../DeskTopHeader/DeskTopHeader';
import ServiceHeaders from '../ServiceHeaders/ServiceHeaders';
import BottomPage from '../BottomPage/BottomPage';
import Reset from '../Assets/Reset.png';
import axios from "axios";
import './ResetPassword.css';

const ResetPassword = () => {
  const form = useRef();
  const [employeesList, setEmployeesList] = useState([]);
    const [randomNumber,setrandomNumber]=useState("")
    const [mail,setMail]=useState("")
    const [otpStatus,setOTPStatus]=useState("Intial")
    const[verifiedOTP,setverifiedOTP]=useState("")

    console.log(employeesList)

    const UpdateMail=(e)=>{
      setMail(e.target.value)
    }

    const fetchEmployeesDetails = async () => {
      const URL = "https://agilewitsemploys-default-rtdb.firebaseio.com/.json";
      const response = await axios.get(URL);
      const finalOutput = Object.values(response.data);
      setEmployeesList(finalOutput.flat());
    }

useEffect(()=>{
  
  const Random=Math.ceil(Math.random()*1000000)
setrandomNumber(Random)

},[randomNumber])

useEffect(()=>{
  fetchEmployeesDetails()
},[])


const FinelResult=()=>{

  switch(otpStatus){
    case "Done":
      return OTPProcedure();
      case "Process":
        return OTPValidation();
        case "Intial":
          return PasswordUpdate();
      default:
        return null
  }
 
}




const OTPProcedure=()=>{
  return(
    
    <form ref={form} onSubmit={sendEmail} className="Forgot">
    <h3>Enter Your Registerd Email</h3>
    <input name="from_name"onChange={UpdateMail} type="mail" placeholder="Enter Your Registerd Gmail" />
    <input name="message" value={randomNumber} type="mail" placeholder="Enter Your Rehisterd Gmail" style={{display:"none"}} />
  <button className="Reset-Button" onClick={sendEmail}>Submit</button>
</form>
  )
}

const OTPValidation=()=>{
return(
  <div className="Forgot">
  <h3>Enter OTP</h3>
  <input type="Text" placeholder="Enter OTP sent to your Mail" onChange={(e)=>setverifiedOTP(e.target.value)}/>
  <button className="Reset-Button"  onClick={OtpVerification}>Verify Your OTP</button>
  
</div>
)
}

const PasswordUpdate=()=>{
return(
  <div className="New-Password">
    <h3>Enter your New Password</h3>
<input type="password" placeholder="Enter New Password"/>
<div>
<input type="password" placeholder="Re-Enter Password"/>
</div>
<button className="Reset-Button">Submit</button>
  </div>
)
}

const sendEmail = (e) => {
  e.preventDefault();
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

const OtpVerification=()=>{
  if(randomNumber===parseInt(verifiedOTP)){
   setOTPStatus("Done")
  }else{
   setOTPStatus("Intial")
   alert("Wrong OTP")
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
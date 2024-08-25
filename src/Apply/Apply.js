import { useState } from 'react'
import Header from '../Header/Header'
import DesktopHeader from '../DeskTopHeader/DeskTopHeader'
import ServiceHeaders from '../ServiceHeaders/ServiceHeaders'
import BottomPage from '../BottomPage/BottomPage'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {ApplyConstant} from '../constant/Apply'
import { Link } from 'react-router-dom'
import "./Apply.css"
const Apply = () => {
    const navigate = useNavigate();
   const {FillApplication,Experiance,Fresher,TwoYears,ContactWarning,UploadResume,FourYears,SixYears,EightYears,BackToJobs,NoticePeriod,ImmediateJointer,OneMonth,TwoMonth,ThreeMonth}=ApplyConstant
    const [applicantFirstName, setApplicantFirstName] = useState("")
    const [applicantLastName, setApplicantLastName] = useState("")
    const [applicantContact, setApplicantContact] = useState("")
    const [applicantMail, setApplicantMail] = useState("")
    const [resume, setResume] = useState("")
    const[noticePeriod,setNoticePeriod]=useState("")
    const [SuccessMessage, SetSuccessMessage] = useState("")

    const UpdateResume = (e) => {
       

        const file = e.target.files[0];

        if (file) {
       
          const reader = new FileReader();
          reader.onload = function(event) {
          
            setResume(event.target.result);
          };
          reader.readAsDataURL(file);
       }
    
    }

    const UploadDetails = async (event) => {
        event.preventDefault();

        if(applicantFirstName === "" && applicantLastName === "" && applicantContact === "" && applicantMail === ""&&resume===""){
            SetSuccessMessage("Enter Require Fields");
        }
        else{
            SetSuccessMessage("Application Sent successfully");
        const URL = "https://agilewitapplicantdetails-default-rtdb.firebaseio.com/.json";
        try {
            const response = await axios.post(URL, {applicantFirstName,applicantLastName,applicantContact,applicantMail,resume,noticePeriod});
            console.log(response)
            
            setApplicantFirstName("");
            setApplicantLastName("");
            setApplicantContact("");
            setApplicantMail("");
            setResume("");
            navigate("/Jobs")
            
        } catch (error) {
            console.error('Error uploading details:', error);

        }
    }
    };


    return (
        <div className='HomeTopLayer'>
            <Header />
            <DesktopHeader />
            <div className='SubHomeSecondLayer'>
                <ServiceHeaders ServiceHeadersInfo="Application" />
                <div className='ApplicationTopLayer'>
                    <form className="Form Applys" onSubmit={UploadDetails}>
                        <h3 className='FillAplication'>{FillApplication}</h3>
                        
                            <input type="text" value={applicantFirstName} placeholder="First Name" pattern="[A-Za-z]+" required name="name" className="ApplyFirstName" onChange={(e) => { setApplicantFirstName(e.target.value) }} />

                            <input type="text" value={applicantLastName} placeholder="Last Name" pattern="[A-Za-z]+" required name="name" className="ApplyFirstName" onChange={(e) => { setApplicantLastName(e.target.value) }} />
                       
                    
            <input
                type="text"
                value={applicantContact}
                required
                placeholder="Contact Details"
                className="ApplyFirstName"
                name="number"
                inputMode="numeric"
                pattern="{10}"
                maxLength="10"
                onChange={(e) => setApplicantContact(e.target.value)}
            />
            <span className="error-message" style={{ display: !/^\{10}$/.test(applicantContact) && applicantContact.length === 10 ? 'block' : 'none' }}>
            {ContactWarning}
            </span>
    

                        <input type="text" value={applicantMail} required placeholder="E-mail" pattern=".*@.*" className="ApplyFirstName" name="from_name" onChange={(e) => { setApplicantMail(e.target.value) }} />
            

                        <select className="Email" onChange={(e)=>{setNoticePeriod(e.target.value)}}>
                            <option>{NoticePeriod}</option>
                            <option value="Immediate Jointer">{ImmediateJointer}</option>
                            <option value="1 Month">{OneMonth}</option>
                            <option value="2 Month">{TwoMonth}</option>
                            <option value="3 Month">{ThreeMonth}</option>
                        </select>
                      
                        <input type='file' className='file-input' required  accept=".doc,.docx,.pdf" onChange={UpdateResume} />
                        
                        <button style={{ opacity: (applicantFirstName === "" || applicantLastName === "" || applicantContact === "" || applicantMail === ""||resume==="") ? 0.2 : 1 }} type="submit">Send Application</button>
                       
                        <Link to="/Jobs">
                        <button className='BacktoJobs'>{BackToJobs}</button>
                        </Link>
                    </form>
                    <p>{SuccessMessage}</p>
                </div>
                <BottomPage />
            </div>
        </div>
    )
}

export default Apply
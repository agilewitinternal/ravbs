import { useState } from 'react'
import Header from '../Header/Header'
import DesktopHeader from '../DeskTopHeader/DeskTopHeader'
import ServiceHeaders from '../ServiceHeaders/ServiceHeaders'
import BottomPage from '../BottomPage/BottomPage'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import "./Apply.css"
const Apply = () => {
    const navigate = useNavigate();
   
    const [applicantFirstName, setApplicantFirstName] = useState("")
    const [applicantLastName, setApplicantLastName] = useState("")
    const [applicantContact, setApplicantContact] = useState("")
    const [applicantMail, setApplicantMail] = useState("")
    const [resume, setResume] = useState("")
    const[experiance,setExperiance]=useState("")
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
        const URL = "https://agilewitapplicantdetails-default-rtdb.firebaseio.com/.json";

     

        try {
            const response = await axios.post(URL, {applicantFirstName,applicantLastName,applicantContact,applicantMail,resume,experiance,noticePeriod});
            console.log(response)
            SetSuccessMessage("Application Sent successfully");
            setApplicantFirstName("");
            setApplicantLastName("");
            setApplicantContact("");
            setApplicantMail("");
            setResume("");
            navigate("/");
        } catch (error) {
            console.error('Error uploading details:', error);

        }
    };


    return (
        <div className='HomeTopLayer'>
            <Header />
            <DesktopHeader />
            <div className='SubHomeSecondLayer'>
                <ServiceHeaders ServiceHeadersInfo="Application" />
                <div className='ApplicationTopLayer'>
                    <form className="Form" onSubmit={UploadDetails}>
                        <h3>Fill Application</h3>
                        <div >
                            <input type="text" value={applicantFirstName} placeholder="First Name" pattern="[A-Za-z]+" name="name" className="FirstName" onChange={(e) => { setApplicantFirstName(e.target.value) }} />

                            <input type="text" value={applicantLastName} placeholder="Last Name" pattern="[A-Za-z]+" name="name" className="FirstName" onChange={(e) => { setApplicantLastName(e.target.value) }} />
                        </div>

                        <input type="text" value={applicantContact} placeholder="Contact Details" className="Email" name="number" pattern="[0-9]*" onChange={(e) => { setApplicantContact(e.target.value) }} />

                        <input type="text" value={applicantMail} placeholder="E-mail" pattern=".*@.*" className="Email" name="from_name" onChange={(e) => { setApplicantMail(e.target.value) }} />
                        <select className="Email" onChange={(e)=>setExperiance(e.target.value)}>
                            <option selected>Experiance</option>
                            <option value=" Fresher">Fresher</option>
                            <option value=" 0-2 Years">0-2 Years</option>
                            <option value="2-4Years">2-4Years</option>
                            <option value="4-6Years">4-6Years</option>
                            <option value="6-8Years">6-8Years</option>
                        </select>

                        <select className="Email" onChange={(e)=>{setNoticePeriod(e.target.value)}}>
                            <option>Notice Period</option>
                            <option>Immediate Jointer</option>
                            <option>1 Month</option>
                            <option>2 Month</option>
                            <option>3 Month</option>
                        </select>
                       
                        <input type='file' className='file-input' onChange={UpdateResume} />
                        <button style={{ opacity: (applicantFirstName === "" || applicantLastName === "" || applicantContact === "" || applicantMail === "") ? 0.2 : 1 }} type="submit">Send Application</button>
                        <p className="SuccessMessage">{SuccessMessage}</p>
                    </form>
                </div>
                <BottomPage />
            </div>
        </div>
    )
}

export default Apply
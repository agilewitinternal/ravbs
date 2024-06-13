import { useState } from 'react'
import Header from '../Header/Header'
import DesktopHeader from '../DeskTopHeader/DeskTopHeader'
import ServiceHeaders from '../ServiceHeaders/ServiceHeaders'
import BottomPage from '../BottomPage/BottomPage'
import axios from 'axios'
import "./Apply.css"
const Apply = () => {
    const [applicantFirstName, setApplicantFirstName] = useState("")
    const [applicantLastName, setApplicantLastName] = useState("")
    const [applicantContact, setApplicantContact] = useState("")
    const [applicantMail, setApplicantMail] = useState("")
    const[resume,setResume]=useState("")
    const [SuccessMessage, SetSuccessMessage] = useState("")

    const UpdateResume=(e)=>{
        setResume(e.target.files[0])
    }
    
    const UploadDetails = async (event) => {
        event.preventDefault();
        const URL = "https://agilewitapplicantdetails-default-rtdb.firebaseio.com/.json";
        
        const formData = new FormData();
       
        formData.append('applicantFirstName', applicantFirstName);
        formData.append('applicantLastName', applicantLastName);
        formData.append('applicantContact', applicantContact);
        formData.append('applicantMail', applicantMail);
        formData.append('resume', resume);
      
        try {
            const response = await axios.post(URL, resume);
        console.log(response)
            SetSuccessMessage("Application Sent successfully");
            setApplicantFirstName("");
            setApplicantLastName("");
            setApplicantContact("");
            setApplicantMail("");
            setResume("");
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
                        <label>Upload Resume</label>
                        <input type='file' className='file-input' onChange={UpdateResume}  />



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
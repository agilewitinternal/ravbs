import { useState } from "react";
import {Employs_Names} from '../constant/Employs'
import AdminePageLogo from '../Assets/AdminePageLogo.png'
import './Admin.css'

const Admin = () => {
    const [postPassword, setPostPassword] = useState("");
    const [Check,SetCheck]=useState("")
    const [intalEmployName,setIntailEmployName]=useState("Siddu")

    console.log(Check)
    const [warnmsg,ActivateWarnMsg]=useState("")

    const UpdatePassword = (e) => {
        setPostPassword(e.target.value);
    };

    const PasswordPosting = () => {
        localStorage.setItem("EmployeePassword", postPassword);
        SetCheck(localStorage.getItem("EmployeePassword"))
        if(postPassword!=="Sidd07"){
            ActivateWarnMsg("* Please enter valid credentials to log in")
        }

    };

    const UpdateEmployName=(e)=>{
        setIntailEmployName(e.target.value)
        localStorage.setItem("EmployName",e.target.value)

    }

    return (
        <div className="AdminTopLayer">
            <img className="AdminLogo" src={AdminePageLogo} alt="AdminaPageLogo"/>
            <div className="Login-input">            
         <select  className="EmploysNames" onChange={UpdateEmployName}>
            {Employs_Names.map((each)=><option>{each}</option>)}
         </select>
            <input
                onChange={UpdatePassword}
                placeholder="Update Your Password"
                type="password"
                className="PasswordInput"
            />
            <button className="LoginButton" onClick={PasswordPosting}>Log In</button>
    
            <p className='WarningMsg'>{warnmsg}</p>
            <h1>Warn</h1>
           
            </div>

        </div>
    );
};

export default Admin;

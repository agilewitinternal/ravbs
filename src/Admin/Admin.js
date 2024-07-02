import { useState } from "react";
import {Employs_Names} from '../constant/Employs'
import './Admin.css'

const Admin = () => {
    const [postPassword, setPostPassword] = useState("");
    const [Check,SetCheck]=useState("")

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
        
        localStorage.setItem("EmployName",e.target.value)

    }

    return (
        <div className="AdminTopLayer">
            
         <select className="EmploysNames" onChange={UpdateEmployName}>
            {Employs_Names.map((each)=><option>{each}</option>)}
         </select>
            <input
                onChange={UpdatePassword}
                placeholder="Update Your Password"
                type="password"
                className="PasswordInput"
            />
            <button onClick={PasswordPosting}>Log In</button>
    
            <p className='WarningMsg'>{warnmsg}</p>
          
        </div>
    );
};

export default Admin;

import { useState,useEffect } from "react";

const Employes =()=>{
    
    const [passwordStorage, setPasswordStorage] = useState("");
    const[employName,setEmployName]=useState("")
    console.log(passwordStorage)
    const removePassword = () => {
        localStorage.removeItem("EmployeePassword");
        setPasswordStorage("");
    };

    useEffect(()=>{
        
        setEmployName(localStorage.getItem("EmployName"))
    },[])

    return(
        <div>
            <h1>{employName}</h1>
            <button>StartWorking Hours</button>
            <button onClick={removePassword}>LogOut</button>
        </div>
    )
}

export default Employes
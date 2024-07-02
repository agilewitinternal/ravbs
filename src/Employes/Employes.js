import { useState } from "react";

const Employes =()=>{
    
    const [passwordStorage, setPasswordStorage] = useState("");
    console.log(passwordStorage)
    const removePassword = () => {
        localStorage.removeItem("EmployeePassword");
        setPasswordStorage("");
    };

    return(
        <div>
            <h1>Employes</h1>
            <button onClick={removePassword}>LogOut</button>
        </div>
    )
}

export default Employes
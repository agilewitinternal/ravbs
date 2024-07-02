import { useState } from "react";

const Employes =()=>{
    
    const [passwordStorage, setPasswordStorage] = useState("");
    const removePassword = () => {
        localStorage.removeItem("EmployeePassword");
        setPasswordStorage("");
    };

    return(
        <div>
            <h1>Employes</h1>
            <button onClick={removePassword}>
                    Remove
                </button>
        </div>
    )
}

export default Employes
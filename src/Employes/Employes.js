import { useState, useEffect } from "react";
import Employelogo from '../Assets/Employelogo.jpeg'
import "./Employes.css"

const Employes = () => {
    const [passwordStorage, setPasswordStorage] = useState("");
    const [employName, setEmployName] = useState("")
    console.log(passwordStorage)
    const removePassword = () => {
        localStorage.removeItem("EmployeePassword");
        setPasswordStorage("");
    };

    useEffect(() => {
        setEmployName(localStorage.getItem("EmployName"))
    }, [])

    return (
        <div className="EmployeTop-Layer">
            <div>
                <img src={Employelogo} alt="EmployLogo" className="EmployLogo" />
                <h1 className="NameofEmploy">{employName}</h1>
            </div>

            <div className="LogIn-Info">
                <p>LogInDate</p>
                <input type="date"/>
                <p>LogInTime</p>
                <input type="time"/>
                
                <div className="Buttond-Row">
                    <button className="LogInButton">Start LogInTime</button>
                    <button className="LogInButton" onClick={removePassword}>LogOut</button>
                </div>

            </div>
        </div>
    )
}

export default Employes
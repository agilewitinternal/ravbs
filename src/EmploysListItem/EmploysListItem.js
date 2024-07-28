import { useState } from "react"
import "./EmploysListItem.css"
const EmploysListItem=(props)=>{
    const {EmployInfo}=props
    const{FirstName,LastName,Designation,JoiningDate}=EmployInfo
    const[infoStatus,setInfoStatus]=useState(false)
    const UpdateinfoStatus=()=>{
setInfoStatus(!infoStatus)
    }
    return(
        <div>
<p>{FirstName}</p>
{infoStatus?<button className="InfoButton" onClick={UpdateinfoStatus}>HideDetails</button>:<button className=" InfoButton" onClick={UpdateinfoStatus}>ShowDetails</button>}
{infoStatus&&<div className="InfoLayerTwo">
    <p>{FirstName} {LastName}</p>
    <p>Working As:{Designation}</p>
    <p>Joined On:{JoiningDate}</p>
    
    </div>}
        </div>
    )
}

export default EmploysListItem
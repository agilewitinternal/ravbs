import { useState } from "react";
import { GoChevronDown ,GoChevronUp} from "react-icons/go";
import {Link} from 'react-router-dom'
import "./JobItems.css";

const JobItems = (props) => {
    const[viewStatus,setViewStatus]=useState(false)
    const { JobItemInfo } = props;
    const { JobTitle, JobLocation, Experiance, DateOfPosted, isOpen, JobType, Description,JobCity} = JobItemInfo;
    const descriptionParts = Description.split('.', 2);

    const UpdateViewStaus=()=>{
        setViewStatus(!viewStatus)
    }

    return (
        <div className="JobItemTopLayer">
            <div className="JobItemFirst-Container">
               
            <h3>{JobTitle}</h3>
            <p>{descriptionParts[0]}</p>
            
            {viewStatus?     <GoChevronUp onClick={UpdateViewStaus} className="ArrowIcon"/>:<GoChevronDown onClick={UpdateViewStaus} className="ArrowIcon" />}
          </div>
            {viewStatus&& <div className="JobItemSecondLayer">
                {Experiance===undefined?<h4>Experiance: 0-1 Year</h4>:<h4>{`Experiance: ${Experiance}`}</h4>}
               <h4>{JobCity}</h4>
                <h4>{`Location:${JobLocation}`}</h4>
                <h4>{`Posted On: ${DateOfPosted}`}</h4>
                
                <h4>{JobType}</h4>
               
               {isOpen?<h4>Job Status:<span style={{color:"green"}}>Open</span></h4>:<h4>Job Status:<span style={{color:"red"}}>Closed</span></h4>}
                
               <p className="Description">{Description.split('.', 4)}</p>
               
               {isOpen&&<Link to="/Apply">
                <button className="ApplyButton">Apply</button>
                </Link>}
                
            </div>}

        </div>
    );
}

export default JobItems;

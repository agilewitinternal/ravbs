import { useState } from "react";
import { GoChevronDown ,GoChevronUp} from "react-icons/go";
import {Link} from 'react-router-dom'
import "./JobItems.css";

const JobItems = (props) => {
    const[viewStatus,setViewStatus]=useState(false)
    const { JobItemInfo } = props;
    const { JobTitle, JobLocation, Experiance, NumberOfPositions, DateOfPosted, isOpen, JobType, Description,JobCity} = JobItemInfo;
console.log("=====",props)
    const UpdateViewStaus=()=>{
        setViewStatus(!viewStatus)
    }

    const formatDate = (date) => {
        const d = new Date(date);
        return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`; 
      };

    return (
        <div className="JobItemTopLayer">
            <div className="JobItemFirst-Container">
               
            <h3>{JobTitle}</h3>
            
            {viewStatus? <GoChevronUp onClick={UpdateViewStaus} className="ArrowIcon"/>:<GoChevronDown onClick={UpdateViewStaus} className="ArrowIcon" />}
          </div>
            {viewStatus && <div className="JobItemSecondLayer">
                {<h4>{`Number of Positions: ${NumberOfPositions===undefined ? "1" : NumberOfPositions?.toString()}`}</h4>}
               <h4>{JobCity}</h4>
                <h4>{`Location:${JobLocation}`}</h4>
                <h4>{`Posted On: ${formatDate(DateOfPosted)}`}</h4>
                
                <h4>{JobType}</h4>
               
               {isOpen?<h4>Job Status:<span style={{color:"green"}}>Open</span></h4>:<h4>Job Status:<span style={{color:"red"}}>Closed</span></h4>}
                
               <p className="Description" dangerouslySetInnerHTML={{ __html: Description }}></p>
               
               {isOpen&&<Link to="/Apply">
                <button className="ApplyButton">Apply</button>
                </Link>}
                
            </div>}

        </div>
    );
}

export default JobItems;

import { useState } from "react";
import { GoChevronDown ,GoChevronUp} from "react-icons/go";
import "./JobItems.css";

const JobItems = (props) => {
    const[viewStatus,setViewStatus]=useState(false)
    const { JobItemInfo } = props;
    const { JobTitle, JobLocation, Experiance, DateOfPosted, Location, JobType, JobCategory, Description, Package } = JobItemInfo;
    const descriptionParts = Description.split('.', 2);

    const UpdateViewStaus=()=>{
        setViewStatus(!viewStatus)
    }

    return (
        <div className="JobItemTopLayer">
            <div >
               
            <h3>{JobTitle}</h3>
            <p>{descriptionParts[0]}</p>
            
            {viewStatus?     <GoChevronUp onClick={UpdateViewStaus} className="ArrowIcon"/>:<GoChevronDown onClick={UpdateViewStaus} className="ArrowIcon" />}
          </div>
            {viewStatus&& <div className="JobItemSecondLayer">
                <h3>{JobLocation}</h3>
                <h3>{Experiance}</h3>
                <h3>{DateOfPosted}</h3>
                <h3>{Location}</h3>
                <h3>{JobType}</h3>
                <h3>{JobCategory}</h3>
               <p>{Description}</p>
                <h3>{Package}</h3>
            </div>}

        </div>
    );
}

export default JobItems;

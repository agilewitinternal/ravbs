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
            <div className="JobItemFirst-Container">
               
            <h3>{JobTitle}</h3>
            <p>{descriptionParts[0]}</p>
            
            {viewStatus?     <GoChevronUp onClick={UpdateViewStaus} className="ArrowIcon"/>:<GoChevronDown onClick={UpdateViewStaus} className="ArrowIcon" />}
          </div>
            {viewStatus&& <div className="JobItemSecondLayer">
                
                <h4>{`Experiance: ${Experiance}`}</h4>
                <h4>{`Package: ${Package}`}</h4>
                <h4>{`Location:${JobLocation}`}</h4>
                <h4>{`Posted On: ${DateOfPosted}`}</h4>
                
                <h4>{JobType}</h4>
               
                
               <p className="Description">{Description.split('.', 4)}</p>
                
                <button className="ApplyButton">Apply</button>
            </div>}

        </div>
    );
}

export default JobItems;

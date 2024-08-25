import { Link } from "react-router-dom"
import "./ServiceItems.css"
const ServiceItems=(props)=>{
    const {ServiceInfo}=props
    const{ServiceLogo,ServiceTitle,ServiceDesription}=ServiceInfo
    return(
        <div className="ServiceItemTop">
<img className="ServiceIcon" src={ServiceLogo} alt="Service Logo"/>
<h3>{ServiceTitle==="MobileAppDevelopment"?"App Development":ServiceTitle}</h3>
<p>{ServiceDesription}</p>
<Link className="Links" to={`/${ServiceTitle}`}>
                          


                       
<h2 className="SeeMore">See More</h2>
</Link>
        </div>
    )
}

export default ServiceItems
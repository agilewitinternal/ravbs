import "./ServiceItems.css"
const ServiceItems=(props)=>{
    const {ServiceInfo}=props
    const{ServiceLogo,ServiceTitle,ServiceDesription}=ServiceInfo
    return(
        <div className="ServiceItemTop">
<img className="ServiceIcon" src={ServiceLogo} alt="Service Logo"/>
<h3>{ServiceTitle}</h3>
<p>{ServiceDesription}</p>

<h2 className="SeeMore">See More</h2>
        </div>
    )
}

export default ServiceItems
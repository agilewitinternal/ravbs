import "./Achievmentitem.css"
const Achievmentitem=(props)=>{
    const{AchievmentInfo}=props
    const {Icon,Count,Title}=AchievmentInfo
    return(
        <div className="AchievmentitemTop">
<img className="AciementLogo" src={Icon} alt="Achievment Icon"/>
<h3>{Count}</h3>
<p>{Title}</p>
        </div>
    )
}
export default Achievmentitem
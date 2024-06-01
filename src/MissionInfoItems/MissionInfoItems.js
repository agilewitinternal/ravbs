import "./MissionInfoItems.css"
const MissionInfoItems=(props)=>{
    const {MissionInfo}=props
    const{MissionTitle,MissionDescription}=MissionInfo
    return(
        <div className="MissionInfoItemsTopLayer">
            <h3>{MissionTitle}</h3>
            <p>{MissionDescription}</p>
        </div>
    )
}

export default MissionInfoItems
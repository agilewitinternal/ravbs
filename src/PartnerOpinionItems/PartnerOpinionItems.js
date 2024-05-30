import "./PartnerOpinionItems.css"
const PartnerOpinionItems = (props) => {
    const { PartnersInfo } = props
    const { PartnerName, PartnerIcon, PartnerCompany, PartnerOpinion } = PartnersInfo
    return (
        <div className="PartnerFirstLayer">
            <div className="PartnersTopLayer">
                <img className="PartnerIcon" src={PartnerIcon} alt={PartnerName} />
                <div>
                    <p>{PartnerName}</p>
                    <p className="CompanyName">{PartnerCompany}</p>
                </div>
            </div>
            <p>{PartnerOpinion}</p>
        </div>
    )
}

export default PartnerOpinionItems
import "./AchievementItem.css";

const AchievementItem = (props) => {
    const { AchievementInfo } = props;
    const { Icon, Count, Title } = AchievementInfo;

    return (
        <div className="AchievementItemTop">
            <img className="AchievementLogo" src={Icon} alt="Achievement Icon" />
            <h3>{Count}</h3>
            <p>{Title}</p>
        </div>
    );
};

export default AchievementItem;

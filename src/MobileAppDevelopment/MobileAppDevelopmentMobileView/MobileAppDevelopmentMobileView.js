import Header from '../../Header/Header'
import Options from '../../Assets/Options.svg'
import ChatIcon from '../../Assets/ChatIcon.svg';
import Staff from '../../Assets/Staff.svg';
import ServiceHeaders from '../../ServiceHeaders/ServiceHeaders'
import { AboutUsContents,MobileDevelopment } from '../../Data/Data'
import Apple from '../../Assets/Apple_App_Store.gif.large_2x.gif'
import Android from '../../Assets/Android.svg'
import PowerfulOption from '../../Assets/PowerfulOption.svg'
import BottomPage from '../../BottomPage/BottomPage'
import "./MobileAppDevelopmentMobileView.css"
const MobileAppDevelopmentMobileView = () => {

    const { WelcomeTitle, Introduction } = AboutUsContents
    const {AppaleStoreTitle,AppaleStoreDescription,CapsLets,EasyCustomize,EasyCustomizeDescription,PowerfullOption,PowerfullOptionDescription}=MobileDevelopment
    return (
        <div className="MobileAppDevelopmentMobileViewTopLayer">
            <div className='HomeTopLayer'>
                <Header />
                <div className="HomeSecondLayer">
                    <img src={Options} alt="Options Icons" className="HomeOptionsIcon" />
                    <div className="SubHomeSecondLayer">
                        <ServiceHeaders ServiceHeadersInfo="App Development" />
                        <div className='StaffContainer'>
                            <img src={Staff} alt="Staff" />
                            <div className='StaffDescription'>
                                <h2>{WelcomeTitle}</h2>
                                <p>{Introduction}</p>
                            </div>
                        </div>
                        <div className='AppleAnimation'>
                            <div className='AppDevelopmentModels'>
                            <img src={Apple} className='AppleLogo' alt="AppleAniverserlOGO" />
                            <h3>{AppaleStoreTitle}</h3>
                            <p>{AppaleStoreDescription}</p>
                            </div>
                            <div className='AppDevelopmentModels'>
                            <img src={Android} className='AppleLogo' alt="AppleAniverserlOGO" />
                            <h3>{EasyCustomize}</h3>
                            <p>{EasyCustomizeDescription}</p>
                            </div>
                            <div className='AppDevelopmentModels'>
                            <img src={PowerfulOption} className='AppleLogo' alt="AppleAniverserlOGO" />
                            <h3>{PowerfullOption}</h3>
                            <p>{PowerfullOptionDescription}</p>
                            </div>
                            <h1 className='CapsLets'>{CapsLets}</h1>
                        </div>
                     
                        <BottomPage/>
                    </div>
                    <img src={ChatIcon} alt="Chat" className="HomeOptionsIcon" />
                </div>
            </div>

        </div>
    )
}

export default MobileAppDevelopmentMobileView
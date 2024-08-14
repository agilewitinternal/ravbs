import Header from '../Header/Header'
import DeskTopHeader from '../DeskTopHeader/DeskTopHeader'
import ServiceHeaders from '../ServiceHeaders/ServiceHeaders'
import BottomPage from '../BottomPage/BottomPage'
import ConsenLogo from '../Assets/ConsenLogo.svg'
import { ConsenContent, } from '../constant/ConsenContent'
import LogIn from '../Assets/LogIn.svg'
import "./Consen.css"
const Consen = () => {
    const { ConcenTitle, ConcenDescription, DocumentUpload, LogInTitle, LoginArray, LogInDocuments, LogInDocumentsArray } = ConsenContent
    return (
        <div className='HomeTopLayer'>
            <Header />
            <DeskTopHeader />
            <div className='ConsenTopLayer'>
                <ServiceHeaders ServiceHeadersInfo="CONSEN" />
                <div className='ConsenSecondLayer'>
                    <img src={ConsenLogo} alt="ConsenLogo" />
                    <div className='ConsenContent'>
                        <h3>{ConcenTitle}</h3>
                        <p>{ConcenDescription}</p>
                    </div>
                </div>
                <div className='ConseThirdLayer'>
                    <div className='ConsenList'>
                        <h3>{LogInTitle}</h3>
                        <ol>
                            {LoginArray.map((each) => <li>{each}</li>)}
                        </ol>
                    </div>
                    <img src={LogIn} alt="Login" className='LoginPic' />
                    <img src={DocumentUpload} alt="Document Upload" className='UploadDocument' />
                    <div className='ConsenList'>
                        <h3>{LogInDocuments}</h3>
                        <ol>
                            {LogInDocumentsArray.map((each) => <li>{each}</li>)}
                        </ol>
                    </div>
                </div>
                <BottomPage />
            </div>
        </div>
    )
}

export default Consen
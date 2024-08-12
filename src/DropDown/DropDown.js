import { Link } from 'react-router-dom'
import CloseIcon from './CloseIcon.png'
import DeskTopHeader from '../DeskTopHeader/DeskTopHeader'
import DropDoownForMobile from './DropDoownForMobile/DropDoownForMobile'
import DropDownForDesktop from './DropDownForDesktop/DropDownForDesktop'
import "./DropDown.css"

const DropDown = () => {

    return (

        <div className='HomeTopLayer'>

            <DeskTopHeader />
            <div className="DropDownProfile">
                <Link to="/" className='DropDownIcone'>
                    <img src={CloseIcon} alt="CloseIcone"  />

                    </Link>

               

                    <DropDownForDesktop className="DesktopView"/>
                    <DropDoownForMobile className="MobileView"/>

            </div>

        </div>
    )
}

export default DropDown
import DeskTopHeader from '../DeskTopHeader/DeskTopHeader'
import DropDownForDesktop from './DropDownForDesktop/DropDownForDesktop'
import DropDoownForMobile from './DropDoownForMobile/DropDoownForMobile'
import "./DropDown.css"

const DropDown = () => {
    return (

        <div className='HomeTopLayer'>

            <DeskTopHeader />
            <DropDownForDesktop/>
            <DropDoownForMobile/>
           
        </div>
    )
}

export default DropDown
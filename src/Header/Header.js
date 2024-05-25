import { Link } from "react-router-dom"
import "./Header.css"
import AgilewitLogoBlue from '../Assets/AgilewitLogo.svg'
import Options from "../Assets/Options.svg"
const Header=()=>{
return(
   
    <div className="HeaderFirstLayer">
        <Link to="/" className="Links">
<img className='AgilewitLogo' src={AgilewitLogoBlue} alt="AgilewitCompanyLogo"/>
</Link>
<img className='OptionsIcon' src={Options} alt="AgilewitCompanyLogo"/>
</div>
 
)
}

export default Header
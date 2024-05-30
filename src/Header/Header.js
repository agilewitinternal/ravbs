import { Link } from "react-router-dom"
import "./Header.css"
import AgilewitLogoBlue from '../Assets/AgilewitLogo.svg'   
const Header=()=>{
return(
   
    <div className="HeaderFirstLayer">
        <Link to="/" className="Links">
<img className='AgilewitLogo' src={AgilewitLogoBlue} alt="AgilewitCompanyLogo"/>
</Link>

</div>
 
)
}

export default Header
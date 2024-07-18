import Header from "../Header/Header";
import DesktopHeader from '../DeskTopHeader/DeskTopHeader';
import ServiceHeaders from '../ServiceHeaders/ServiceHeaders';
import BottomPage from '../BottomPage/BottomPage';
import Reset from '../Assets/Reset.png';
import './ResetPassword.css';


const ResetPassword = () => {
    return (
        <div className='HomeTopLayer'>
            <Header />
            <DesktopHeader />
            <div className='SubHomeSecondLayer'>
                <ServiceHeaders ServiceHeadersInfo="Reset" />
                <div className="Reset-TopLayer"> 
            <img className='AdminLogo' src={Reset} alt="AdminLogo" />
           
<form className="Forgot">
    <h3>Reset Your Password</h3>
<input
placeholder="Enter Your E-Mail"
type="email"
className="Reset-Input"
required
/>
<input
className="Reset-Input"
placeholder="Enter Your OTP"
type="password"
required
/>
<button className="Reset-Button">Submit</button>
</form>
            
                </div>


                <BottomPage />
            </div>
        </div>
    );
};

export default ResetPassword;

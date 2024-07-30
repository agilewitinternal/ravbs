import React from 'react';
import { BrowserRouter, Routes, Route,Link,useLocation} from 'react-router-dom';
import Home from './Home/Home';
import AboutUs from './AboutUs/AboutUs';
import Consulting from './Counsulting/Counsulting';
import MobileAppDevelopment from './MobileAppDevelopment/MobileAppDevelopment';
import ContactUs from './ContactUS/ContactUs';
import Options from './Assets/Options.svg';
import ChatIcon from './Assets/Chaticon.svg';
import DropDown from './DropDown/DropDown'
import Training from './Training/Training'
import Consen from './Consen/Consen'
import Jobs from './Jobs/Jobs'
import Apply from './Apply/Apply'
import TimeSheet from './TimeSheet/TimeSheet'
import Registration from './Registraion/Registration'
import ResetPassword from "./ResetPassword/ResetPassword"
import NotFound from './NotFound/NotFound'
import "./App.css";

function App() {
  const Location=useLocation()
  return (
    <div className="app-container">
    {Location.pathname!=="/DropDown"&&  <Link to="/DropDown">
      <img className="options-icon" src={Options} alt="Options Icons" />
      </Link>}
      
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Consulting" element={<Consulting />} />
            <Route path="/MobileAppDevelopment" element={<MobileAppDevelopment />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path='/DropDown' element={<DropDown/>}/>
            <Route path='/Training' element={<Training/>}/>
            <Route path="/Consen" element={<Consen/>}/>
            <Route path='/Jobs' element={<Jobs/>}/>
            <Route path='/Apply' element={<Apply/>}/>
            <Route path='/TimeSheet' element={<TimeSheet/>}/>
            <Route path='/Registration' element={<Registration/>}/>
            <Route path='/ResetPassword' element={<ResetPassword/>}/>
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </div>
    {Location.pathname!=="/DropDown"&&  Location.pathname !== "/ContactUs"&&<Link to="/ContactUs"><img className="chat-icon" src={ChatIcon} alt="Chat" /> </Link>}
      
    </div>
  );
}

const Finel=()=>{
  return(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  )
}
export default Finel;
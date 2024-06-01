import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import AboutUs from './AboutUs/AboutUs';
import Consulting from './Counsulting/Counsulting';
import MobileAppDevelopment from './MobileAppDevelopment/MobileAppDevelopment';
import ContactUs from './ContactUS/ContactUs';
import Options from './Assets/Options.svg';
import ChatIcon from './Assets/Chaticon.svg';
import DropDown from './DropDown/DropDown'
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <img className="options-icon" src={Options} alt="Options Icons" />
      <BrowserRouter>
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Consulting" element={<Consulting />} />
            <Route path="/MobileAppDevelopment" element={<MobileAppDevelopment />} />
            <Route path="/ContactUs" element={<ContactUs />} />
          </Routes>
        </div>
      </BrowserRouter>
      <img className="chat-icon" src={ChatIcon} alt="Chat" />
    </div>
  );
}

export default App;
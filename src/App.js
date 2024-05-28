import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import AboutUs from './AboutUs/AboutUs';
import Consulting from './Counsulting/Counsulting';
import MobileAppDevelopment from './MobileAppDevelopment/MobileAppDevelopment';
import ContactUs from './ContactUS/ContactUs';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Consulting" element={<Consulting />} />
          <Route path="/MobileAppDevelopment" element={<MobileAppDevelopment />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

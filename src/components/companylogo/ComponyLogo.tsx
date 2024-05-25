import React from 'react';
import logo from '../../images/Agilewits blue-01.png'
import '../companylogo/ComponyLogo.css'

const ComponyLogo = () => {
  return (
    <section className="logo-container">
      <div className="logo-block">
        <img  src={logo} alt="Logo"/>
        <div className="line-underlogo"></div>
      </div>
    </section>
  );
}

export default ComponyLogo;

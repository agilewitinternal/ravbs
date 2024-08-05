import React from 'react';
import NotFoundImg from "../Assets/Not-Found.png"
import "./NotFound.css"
const NotFound = () => {
  return (
    <div className='NotFoundTopLayer'>
     
      <img src={NotFoundImg} className='NotFoundLogo' alt='Not-Found'/>
    </div>
  );
};

export default NotFound;

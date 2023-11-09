import React, { useEffect, useState } from "react";
import Moon from "../../Assets/Moon";
import Navbar from "../Navbar/Navbar";
import "./Landing.css";

import ICell from "../../svgs/ICell";
import moonbg from "../../imgs/moon1.png";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <img className="moon-bg" src={moonbg} />
      
        <div className="main-landing">
          <div className="landing">
            <div className="welcome">Welcome to    <br />
      </div>    
       <ICell/> 
        
          </div>
        </div>
      
    </>
  );
};

export default LandingPage;

import React from "react";
import Moon from "../../Assets/Moon";
import Navbar from "../Navbar/Navbar";
import "./Landing.css";

import ICell from "../../svgs/ICell";
import { motion } from "framer-motion";
import moonbg from "../../imgs/moon1.png";

const LandingPage = () => {
  return (
    <>
      <Navbar />

      <img className="moon-bg" src={moonbg} />
      <div>
        <div className="main-landing">
          <div className="landing">
            <div className="welcome">Welcome to </div>
            <div className="welcome-span">
              <ICell />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;

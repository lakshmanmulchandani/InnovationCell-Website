import React, { useEffect, useState } from "react";
import Moon from "../../Assets/Moon";
import Navbar from "../Navbar/Navbar";
import "./Landing.css";

import ICell from "../../svgs/ICell";
import moonbg from "../../imgs/moon1.webp";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      {/* <img className="moon-bg" src={moonbg} /> */}

      <div className="main-landing">
        <div className="landing">
          <div className="welcome">
            WELCOME TO <br />
          </div>
          <div>
            <ICell />
            <div className="social-link">
              <a
                href="https://www.instagram.com/innovation_cell.nitrr/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://twitter.com/I_Cell_NITRR"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookSquare size={30} />
              </a>
              <a
                href="https://www.linkedin.com/company/innovation-cell-nit-raipur/mycompany/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://twitter.com/I_Cell_NITRR"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;

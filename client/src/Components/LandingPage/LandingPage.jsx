import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Landing.css";

import ICell from "../../svgs/ICell";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import finger from "../cursor/point_finger.gif";

const LandingPage = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setHidden(true);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div
        style={{
          position: "fixed",
          bottom: "-15px",
          right: "5px",
          display: "flex",
          alignItems: "center",
          zIndex: "9",
          display: `${hidden ? "none" : ""}`,
        }}
      >
        <img src={finger} alt="" height={200} />
      </div>
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
                <FaInstagram className="social-link-icon"/>
              </a>
              <a
                href="https://twitter.com/I_Cell_NITRR"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookSquare className="social-link-icon" />
              </a>
              <a
                href="https://www.linkedin.com/company/innovation-cell-nit-raipur/mycompany/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="social-link-icon" />
              </a>
              <a
                href="https://twitter.com/I_Cell_NITRR"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter className="social-link-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;

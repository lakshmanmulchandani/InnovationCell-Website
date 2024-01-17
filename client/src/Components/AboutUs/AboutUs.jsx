import React, { useState, useEffect } from "react";
import Bulb1 from "../../Assets/images/bulb11.png";
import Bulb2 from "../../Assets/images/bulb22.png";
import Holder from "../../Assets/images/wood.png";
import Owl from "../../Assets/images/Owl.gif";

import { FaQuestion } from "react-icons/fa6";
import "./AboutUs.css";

const AboutUs = () => {
  const [activeDiv, setActiveDiv] = useState(0); // Start with the 1st div as active

  // Use useEffect to change the active div with a delay
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveDiv((prevActive) => (prevActive + 1) % 4);
    }, 1900); // Change the active div every 1 second

    return () => clearInterval(timer); // Cleanup the timer when the component unmounts
  }, []);

  return (
    <div className="About-main-container">
      <div className="teamHeading">
        <h1>About Us</h1>
      </div>
      <div className="About-container">
        <div className="About-pic">
          <div className="holder">

            <img
              className="owl"
              src={Owl}
              alt="owl"
              width={120}
              height={120}
            />
            <img
              src={Holder}
              alt="holder"
              width={300}
              height={100}
            />

          </div>
          <div className="About-imgs">
            <div className="About-img">
              <img src={Bulb1} alt="bulb1" width={75} height={375} />
            </div>
            <div className="About-img">
              <img src={Bulb2} alt="bulb2" width={75} height={277.5} />
            </div>
            <div className="About-img">
              <img src={Bulb1} alt="bulb1" width={75} height={375} />
            </div>
            <div className="About-img">
              <img src={Bulb2} alt="bulb2" width={75} height={277.5} />
            </div>
          </div>
        </div>
        <div className="About-content">
          <div className="About-item-main" style={{ fontFamily: "poppins" }}>
            Welcome to the Innovation Cell, the beating heart of innovation,
            creativity, entrepreneurship and technology at NIT Raipur. We are a
            vibrant club dedicated to fostering a culture of innovation,
            startups, and cutting-edge technology among students. At Innovation
            Cell, we believe in empowering the next generation of visionaries,
            thinkers, and doers by providing them with the necessary tools,
            resources, and opportunities to transform their ideas into reality.
          </div>
          <div className="About-item-heading">What do we do ?</div>
          <div
            className={`About-item`}
            style={{
              textAlign: "center",
              animationDelay: `${activeDiv * 2}s`,
              color: "var(--green)",
              fontFamily: "Crime",
              letterSpacing: "0.2px",
            }}
          >
            {activeDiv === 0
              ? `i-Talks`
              : activeDiv === 1
              ? "Seed Grants for Startups"
              : activeDiv === 2
              ? "Avinya Unveiling the Future"
              : "Seed Grants for Startups"}
          </div>{" "}
          {/* 1st div */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

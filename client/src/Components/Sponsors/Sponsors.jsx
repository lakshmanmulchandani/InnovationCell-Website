import React from "react";
import Marquee from "react-fast-marquee";
import record from "./record.json";
import "./sponsors.css";

const Sponsors = () => {
  return (
    <>
      <div id="spons" className="teamHeading">
        <h1>Our Sponsors</h1>
      </div>
      <div className="sponsor-section">
        <Marquee autoFill={true} pauseOnHover={true} className="marquee">
          <div className="spons-icon">
            {record.map((images) => (
              <img
                key={images.id}
                src={images.logo}
                alt={`Company Logo ${images.id}`}
                className="sponsor-logo"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default Sponsors;

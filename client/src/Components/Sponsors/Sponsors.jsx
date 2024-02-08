import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import record from "./record.json";
import "./sponsors.css";

const Sponsors = () => {
  const [spons, setSpons] = useState("");
  const handleHover = (name) => {
    setSpons(name);
    setTimeout(() => {
      setSpons("");
    }, 1000);
  };
  return (
    <>
      <div id="spons" className="teamHeading">
        <h1 style={{ color: `${spons === "" ? "" : "white"}` }}>
          {spons === "" ? "Our Sponsors" : spons}
        </h1>
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
                onMouseOver={() => {
                  handleHover(images.name);
                }}
              />
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default Sponsors;

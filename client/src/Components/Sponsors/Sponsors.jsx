import React from "react";
import "./sponsors.css";
import sponsLogo from "./record.json";

const Sponsors = () => {
  return (
    <>
      <div id="spons" className="AboutUs-heading teamHeading">
        <h1>Our Sponsors</h1>
      </div>
      <div className="sponsor-section">
        <div className="sponsor-scroll">
          {sponsLogo.map((sponsData, index) => {
            return (
              <div key={sponsData.id} className="sponsor-item">
                <img
                  src={sponsData.logo}
                  alt={`sponsor-${index}`}
                  className="sponsor-image"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sponsors;

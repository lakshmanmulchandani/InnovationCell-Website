// Team.jsx
import React from "react";
import "./Team.css";
import TeamCard from "./TeamCard";

import Footer from "../Footer/Footer";
import Navbar2 from "../Navbar/Navbar2";
import Contact from "../ContactUs/Contact";
import MakerSpaceTeam from "./MakerSpaceTeam/MakerSpaceTeam";
import teamRecord from "./members.json";
import web from "../cursor/web_3.png";

const TechTeam = () => {
  return (
    <div className="">
      {/* style={{ width: "fit-content" }} */}
      <img className="web-team" src={web} alt="" />
      <Navbar2 />
      <div className="dark-overlay"></div>
      <div className="teams-page">
        <div id="team" className="teamHeading">
          <h1>Tech Team Member</h1>
        </div>
        <div className="Teams">
          <MakerSpaceTeam />
        </div>
      </div>
      <div id="contactusnav"></div>
      <Contact />
      <Footer />
    </div>
  );
};

export default TechTeam;

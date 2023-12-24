import React from "react";
import "./Team.css";
import TeamCard from "./TeamCard";
import NameCard from "./NameCard";
import Executives from "./Executives";
import Footer from "../Footer/Footer";
import Navbar2 from "../Navbar/Navbar2";
import Contact from "../ContactUs/Contact";
import teamRecord from "./members.json";

const teamData = {
  teamMembers: [
    { name: "Alim Khan", domain: "Tech Domain" },
    { name: "Alim Khan", domain: "Tech Domain" },
    // Add more team members here
  ],
  coreCoordinators: [
    { name: "Lakshman Mulchandani", domain: "Technical" },
    { name: "Lakshman Mulchandani", domain: "Technical" },
    // Add more core coordinators here
  ],
  executives: [
    { domain: "Event Management" },
    { domain: "Spons" },
    { domain: "Event Management" },
    { domain: "Spons" },
    // Add more executives here
  ],
};

const Team = () => {
  return (
    <>
      <Navbar2 />
      <div className="teams-page">
        <div id="team" className="teamHeading">
          <h1>Team Innovation cell</h1>
        </div>

        <div className="Teams">
          {teamRecord.teamData.OC.map((member, index) => (
            <TeamCard key={index} name={member.name} domain={member.domain} />
          ))}
        </div>

        <div className="teamHeading">
          <h1>Core coordinators</h1>
        </div>

        <div className="Teams">
          {teamRecord.teamData.coreCoordinators.map((coordinator, index) => (
            <NameCard
              key={index}
              name={coordinator.name}
              domain={coordinator.domain}
            />
          ))}
        </div>

        <div className="teamHeading">
          <h1>Executives</h1>
        </div>

        <div className="Teams">
          {teamRecord.teamData.executives.map((executive, index) => (
            <>
              <h1>{executive[0]}</h1>
              <Executives key={index} domain={executive[0]} />
            </>
          ))}
        </div>
      </div>
      <div id="contactusnav"></div>
      <Contact />
      <Footer />
    </>
  );
};

export default Team;

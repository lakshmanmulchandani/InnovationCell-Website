import React from "react";
import "./Team.css";
import TeamCard from "./TeamCard";
import NameCard from "./NameCard";
import Executives from "./Executives";

const teamData = {
  teamMembers: [
    { name: "Alim Khan", domain: "Tech Domain" },
    { name: "Alim Khan", domain: "Tech Domain" },
    // Add more team members here
  ],
  coreCoordinators: [
    { name: "Lakshmna Mulnchnahd", domain: "Technical" },
    { name: "Lakshmna Mulnchnahd", domain: "Technical" },
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
    <div className="teams-page">
      <div id="team" className="teamHeading">
        <h1>Team Innovation cell</h1>
      </div>

      <div className="Teams">
        {teamData.teamMembers.map((member, index) => (
          <TeamCard key={index} name={member.name} domain={member.domain} />
        ))}
      </div>

      <div className="teamHeading">
        <h1>Core coordinators</h1>
      </div>

      <div className="Teams">
        {teamData.coreCoordinators.map((coordinator, index) => (
          <NameCard key={index} name={coordinator.name} domain={coordinator.domain} />
        ))}
      </div>

      <div className="teamHeading">
        <h1>Executives</h1>
      </div>

      <div className="Teams">
        {teamData.executives.map((executive, index) => (
          <Executives key={index} domain={executive.domain} />
        ))}
      </div>
    </div>
  );
};

export default Team;

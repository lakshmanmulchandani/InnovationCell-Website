import React from "react";
import "./Team.css";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <>
      <div id="team" className="teamHeading">
        <h1>Our Team</h1>
      </div>
      <div className="Teams">
        <TeamCard name="Alim Khan" domain ="Tech Domain"  />
        <TeamCard name="Alim Khan" domain ="Tech Domain"  />
        <TeamCard name="Alim Khan" domain ="Tech Domain"  />
        <TeamCard name="Alim Khan" domain ="Tech Domain"  />
        <TeamCard name="Alim Khan" domain ="Tech Domain"  />
        <TeamCard name="Alim Khan" domain ="Tech Domain"  />
        <TeamCard name="Alim Khan" domain ="Tech Domain"  />
        <TeamCard name="Alim Khan" domain ="Tech Domain"  />
        {/* <Chart /> */}
      </div>
    </>
  );
};

export default Team;
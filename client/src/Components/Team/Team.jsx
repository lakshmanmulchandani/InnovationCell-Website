import React from "react";
import "./Team.css";
import TeamCard from "./TeamCard";
import NameCard from "./NameCard";

const Team = () => {
  return (
    <>
      <div id="team" className="teamHeading">
        <h1>Team Innovation cell</h1>
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

      <div className="teamHeading">
        <h1>Core coordinators</h1>
      </div>

      <div className="Teams">
      <NameCard name={"Lakshmna Mulnchnahd"} domain={"Technical"} />
      <NameCard name={"Lakshmna Mulnchnahd"} domain={"Technical"} />
      <NameCard name={"Lakshmna Mulnchnahd"} domain={"Technical"} />
      <NameCard name={"Lakshmna Mulnchnahd"} domain={"Technical"} />
      <NameCard name={"Lakshmna Mulnchnahd"} domain={"Technical"} />
      <NameCard name={"Lakshmna Mulnchnahd"} domain={"Technical"} />
      <NameCard name={"Lakshmna Mulnchnahd"} domain={"Technical"} />
      <NameCard name={"Lakshmna Mulnchnahd"} domain={"Technical"} />
      <NameCard name={"Lakshmna Mulnchnahd"} domain={"Technical"} />

        {/* <Chart /> */}

      </div>
      
    </>
  );
};

export default Team;
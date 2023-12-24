import React from "react";
import "./Team.css";

const Executives = ({ domain, members }) => {
  return (
    <div className="team_executives">
      <h1>{domain}</h1>
      {members.map((member, index) => (
        <div key={index}>
          <p>
            {member.name} (
            {member.year == 1
              ? member.year + "st year"
              : member.year + "nd year"}
            )
          </p>
        </div>
      ))}
    </div>
  );
};

export default Executives;

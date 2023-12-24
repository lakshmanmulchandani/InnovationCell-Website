import React from "react";
import "./Team.css";

const Executives = ({ domain, name, year }) => {
  return (
    <div className="team_executives">
      <h1>{domain}</h1>
      <div>
        <p>
          {name} {year}
        </p>
      </div>
    </div>
  );
};

export default Executives;

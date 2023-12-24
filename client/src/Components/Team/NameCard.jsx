import React from "react";
import "./Team.css";
import instaicon from "../../svgs/insta.svg";
import linkedinicon from "../../svgs/linkedin.svg";

const NameCard = ({ name, domain, instaLink, linkedinLink }) => {
  return (
    <div className="nameCard">
      <div>
        <p>{name}</p>
        <p>{domain}</p>
        <br />
        <p className="socialMediaHandles">
          <a href={instaLink} target="_blank">
            <img src={instaicon} alt="" />
          </a>
          <a href={linkedinLink} target="_blank">
            <img src={linkedinicon} alt="" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default NameCard;

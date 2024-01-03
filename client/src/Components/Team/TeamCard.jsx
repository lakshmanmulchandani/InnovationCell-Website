import React from "react";
import insta from "../../svgs/insta.svg";
import linkedin from "../../svgs/linkedin.svg";
import "./Team.css";
import hemasri from "./hemasri_mam.png";
import mayank from "./mayank_sir.jpg";
import vishud from "./vishudh_sir.webp";

import Tilt from "react-parallax-tilt";

const TeamCard = ({
  profileImg,
  name,
  instaLink,
  linkedinLink,
  domain,
  branch,
}) => {
  return (
    <div className="container">
      <Tilt>
        <div className="card">
          <div className="content">
            {/* <h2>01</h2> */}
            <h3 className="alimImg">
              <img
                src={
                  name === "Mayank Bharadwaj"
                    ? mayank
                    : name === "Vishudh Verma"
                    ? vishud
                    : name === "Hemashri Indrani"
                    ? hemasri
                    : profileImg
                }
                alt=""
              />
            </h3>
            <p>
              <span>{name}</span> <br />
              <span>{domain}</span> <br />
              <span>{branch}</span> <br />
              <br />
            </p>
            <div className="socialMediaHandles">
              <a href={instaLink} target="_blank">
                <img src={insta} alt="" />
              </a>
              <a href={linkedinLink} target="_blank">
                <img src={linkedin} alt="" />
              </a>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default TeamCard;

import React from 'react'
import alimImg from "../../imgs/Alim_img.png"
import insta from "../../svgs/insta.svg"
import linkedin from "../../svgs/linkedin.svg"
import "./Team.css"

import Tilt from 'react-parallax-tilt';



const TeamCard = ({profileImg,name,domain,instaLink,linkedinLink}) => {
  return (
    
      <div className="container">
      <Tilt >
        <div className="card">
          <div className="content">
            {/* <h2>01</h2> */}
            <h3 className="alimImg">
              <img src={alimImg} alt="" />
            </h3>
            <p>
              <span>{name}</span> <br />
              <span>{ domain }</span> <br />
              <br />
            </p>
            <div className="socialMediaHandles">
              <a href="#"><img src={insta} alt="" /></a>
              <a href="#"><img src={linkedin} alt="" /></a>
            </div>
            
          </div>
        </div>
      </Tilt>
      </div>
  );
}

export default TeamCard
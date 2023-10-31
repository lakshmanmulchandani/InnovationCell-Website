import React from 'react'
import "./Team.css"
import insta from "../../svgs/insta.svg"
import linkedin from "../../svgs/linkedin.svg"

const NameCard = ({name,domain,instaLink,linkedinLink}) => {
  return (
      <div className='nameCard'>
          <div>
              <p>{ name }</p>
              <p>{ domain }</p>
              <br />
              <p className="socialMediaHandles">
                <a href="#"><img src={insta} alt="" /></a>
                <a href="#"><img src={linkedin} alt="" /></a>
            </p>
          </div>
    </div>
  )
}

export default NameCard
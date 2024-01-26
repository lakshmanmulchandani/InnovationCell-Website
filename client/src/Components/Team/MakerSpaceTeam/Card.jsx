import React from 'react'

import linkedinsvg from "../../../svgs/linkedin.svg"
import instasvg from "../../../svgs/insta.svg"


export default function Card({
  name, linkedin, insta, year
}) {
  return (
    <div className='techteam_data'>
      <h1>{name}</h1>
      <h2>{year} year</h2>

      <div className='personal_links'>
        <a href={linkedin} target='_blank'>
          <img src={linkedinsvg} />
        </a>

        <a href={insta} target='_blank'>
          <img src={instasvg} />
        </a>
      </div>
    </div>
  )
}

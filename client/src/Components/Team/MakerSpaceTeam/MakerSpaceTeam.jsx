import React from 'react'

import jsonData from "./makerspace_team.json";
import "./MakerSpaceTeam.css"
import Card from "./Card"


export default function MakerSpaceTeam() {
  return (
    <section className='techteam_container'>
      {jsonData.techteamdata.map((member, index) => (
        <Card 
          key={index}
          name={member.name}
          linkedin={member.linkedin}
          insta={member.year}
          year={member.year}
        />
      ))}
    </section>
  )
}

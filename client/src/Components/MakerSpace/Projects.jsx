import React,{useEffect} from 'react'
import "./Project.css"
import vanillatilt from "vanilla-tilt"
import {FaExternalLinkAlt,FaGithub} from "react-icons/fa"

const Projects = (props) => {
  useEffect(()=>{
     vanillatilt.init(document.querySelectorAll('.Projects__card'),{
       max:5,
       speed: 10,
       glare: true,
       'max-glare': 0.50
     })
  },[])
  return (
    <div className='project__container'>
          <div className='Projects__card'>
              <div>
              <img src={props.src} alt={props.src} className='project-img' />
              </div>
              <div className='Project_card_content'>
              <div className='project__icons'>
                        <span><FaGithub/></span>
                        <span><FaExternalLinkAlt /></span>
              </div>
              <div className='project_text_content'>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <div className='project__techstack'><p>{props.techstack}</p></div>
              </div>
              </div>
          </div>
    </div>
  )
}

export default Projects
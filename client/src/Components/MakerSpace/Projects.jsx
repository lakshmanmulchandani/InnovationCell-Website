import React,{useEffect} from 'react'
import makerimg from "../../imgs/MakerspaceImg.jpg"
import "./Project.css"
import vanillatilt from "vanilla-tilt"

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
              <h2>{props.title}</h2>
              <p>{props.text}</p>
              </div>
          </div>
    </div>
  )
}

export default Projects
import React,{useState} from 'react'
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from "react-icons/bs"

import "./Memories.css"
const Memories = ({data}) => {
   const [index,setindex] = useState(0);
   const images = data.slides;
   const handlenext = ()=>{
        setindex((index===images.length-1)?0:index+1);
   }
   const handleprev = ()=>{
    setindex((index===0)?images.length-1:index-1);
}
  return (
    <div
      style={{width: '100%',height:'100%'}} className='memories__container'>
          {
              images.map((image,idx)=>(
                 <img 
                  src={image.src} 
                  alt={image.alt} 
                  index={idx} 
                  key={idx} 
                  className={index===idx?"slide":"slide slide-hidden"}
                  />
              ))
          }
          <BsArrowLeftCircleFill onClick={handleprev}  className='btn btn-left'/>
          <BsArrowRightCircleFill onClick={handlenext} className='btn btn-right' />
          <span className='indicators'>
                  {
                    images.map((_,idx)=>(
                       <button 
                       className={index===idx?"indicator":"indicator indicator-inactive"}
                       onClick={()=>setindex(idx)}></button>
                    ))
                  }
          </span>
    </div>
  )
}

export default Memories
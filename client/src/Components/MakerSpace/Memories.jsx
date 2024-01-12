import React,{useEffect, useState} from 'react'
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from "react-icons/bs"

import "./Memories.css"
const Memories = ({data}) => {
   const [index,setindex] = useState(0);
   const [isTransitioning, setIsTransitioning] = useState(false);
   const images = data.slides;
   const handlenext = ()=>{
        setIsTransitioning(true)
        setindex((prevIndex)=>(prevIndex+1)%images.length);
   }
   const handleprev = ()=>{
    setIsTransitioning(true)
    setindex((prevIndex)=>
      (prevIndex == 0)?images.length-1:prevIndex-1
    );
   }

   const Autoplay = ()=>{
      return setInterval(()=>{
         setIsTransitioning(true)
         handlenext()
      },3000);
   }
   useEffect(()=>{
    const autoplayInterval = Autoplay();
    return () => clearInterval(autoplayInterval);
   },[])


   const handleTransitionend = ()=>{
     setIsTransitioning(false)
   }
  return (
    <div
      style={{width: '100%',height:'100%'}} className={`memories__container ${isTransitioning?"transition":""}`}>
          {
              images.map((image,idx)=>(
                 <img 
                  src={image.src} 
                  alt={image.alt} 
                  index={idx} 
                  key={idx} 
                  className={index===idx?"slide":"slide slide-hidden"}
                  onTransitionEnd={handleTransitionend}
                  />
              ))
          }
          <BsArrowLeftCircleFill onClick={handleprev}  className='btn btn-left'/>
          <BsArrowRightCircleFill onClick={handlenext} className='btn btn-right' />
          <span className='indicators'>
                  {
                    images.map((_,idx)=>(
                       <button 
                       key={idx}
                       className={index===idx?"indicator":"indicator indicator-inactive"}
                       onClick={()=>setindex(idx)}></button>
                    ))
                  }
          </span>
    </div>
  )
}

export default Memories
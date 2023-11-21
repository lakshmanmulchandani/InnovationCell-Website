import React from 'react'
import './sponsors.css'
import sponsLogo from './record.json'
const Sponsors = () => {
  return (
    <>
    <div className="sponsHeading">
         <h1>Our Sponsors</h1>
    </div>
    <div className="sponsor-section">
    <div className="sponsor-scroll">
      {
     sponsLogo.map(sponsData=>{
       return(
           <img src={sponsData.logo} alt="sponsorsLogo" key={sponsData.id} />
       )
     })
    }

      {/* Add more sponsor images here */}
    </div>
  </div>
  </>
  );
}

export default Sponsors
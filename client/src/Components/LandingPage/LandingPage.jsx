
import React from 'react'
import Moon from '../../Assets/Moon'
import Navbar from '../Navbar/Navbar'
import './Landing.css'
import icell from '../../Assets/images/I_cell_text.svg'


const LandingPage = () => {
  return (
    <>
    <div className='moon'>
      <Moon/>
    </div>
    <Navbar/>
    <div className='welcome'>
      <img className='svg-icell' src={icell} />
    </div>
      
    </>
  )
}

export default LandingPage

import React from 'react'
import Moon from '../../Assets/Moon'
import Navbar from '../Navbar/Navbar'
import './Landing.css'
import icell from '../../svgs/I_cell_text.svg'


const LandingPage = () => {
  return (
    <>
    <Navbar/>
      <div className='moon'>
        <Moon/>
      </div>

    <div className='landing'>
      <div className='welcome'>
        <div>Welcome to <span>Innovation Cell</span></div>
      </div>
    </div>
      
    </>
  )
}

export default LandingPage
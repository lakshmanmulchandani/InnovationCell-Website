import React from 'react'
import './navbar.css'
import logo from '../../Assets/images/i_cell_logo.png'

const Navbar = () => {
  return (
    <div>
      <div className='nav'>
        <div>
          <a href='/'>
          <div className='logo'>
          <img src={logo} alt="I-Cell Logo" />
          </div>
          </a>
        </div>
        <div className='nav-btn'>
          <a href='#'>
          <div className='nav-opt'>Home</div>
          </a>
          <a href='#'>
          <div className='nav-opt'>Events</div>
          </a>
          <a href='#'>
          <div className='nav-opt'>Maker Space</div>
          </a>
          <a href='#'>
          <div className='nav-opt'>Sponsors</div>
          </a>
          <a href='#'>
          <div className='nav-opt'>AboutUs</div>
          </a>
          <a href='#'>
          <div className='nav-opt'>Team</div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
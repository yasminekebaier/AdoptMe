import React from 'react'
import { NavLink , Link } from 'react-router-dom'
import './navbar.css'
import { RiLogoutCircleRFill } from "react-icons/ri"
import Logout from '../Logout'

const Navbar = () => {
  
  return (
    <nav className='navbar'>
   <div className='topbarcontainer'>
  <div className="topbarleft justify-content-start">
    <Link to="/" style={{textDecoration:"none"}}>
       <img  className="logoimg" src="./images/logo1.png" alt=""/> 
      <span className='logo'>AdoptME</span>
    </Link>
  </div>
  <div className='topbarcenter justify-content-end'>
    <NavLink to='/about'>About</NavLink>
    <NavLink to='/dressage'>Centres de dressage</NavLink>
    <NavLink to='/feed'>Annonces</NavLink>
  </div>
  <div className="topbarright justify-content-end">
    <NavLink to='/register'>
      <button className='primary'>Register</button>   
    </NavLink>
  </div>
  
  <div className='logoright'>
  {/*  <Logout/> */}
  </div>
</div>
  </nav> 
  )
}

export default Navbar
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar1 = () => {
  return (
    <div className='navbar1'>
        <div className="nav1-link">
           <NavLink to= "/createProduct">Admin</NavLink>
            <NavLink to= "/signup">Sign Up</NavLink>
            <NavLink to= "/login">Log In</NavLink>
        </div>
    </div>
  )
}

export default Navbar1
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar2 = () => {
  return (
    <div className='navbar2'>
        <div className="logo">
            <img src="https://prod-assets.nike.in/NIKE/nes-nike-reloaded-svc/static/assets/images/nike-logo-192x192.svg" alt="" />
        </div>
        <div className="nav2-midlink">
            <NavLink to="/">Home</NavLink>
            <NavLink to= "/about">About Us</NavLink>
            <NavLink to= "shoes">Shoes</NavLink>
        </div>
        <div className="nav2-right">
         <NavLink to= "addcard"><i class="ri-store-line"></i></NavLink>
        </div>
    </div>
  )
}

export default Navbar2
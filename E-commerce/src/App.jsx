import React from 'react'
import Navbar1 from './Componets/Navbar1'
import Navbar2 from './Componets/Navbar2'
import { Outlet } from 'react-router-dom'

export const App = () => {
  return (
    <div className='main'>
         <Navbar1/>
         <Navbar2/>
         <Outlet/>
    </div>
  )
}
export default App
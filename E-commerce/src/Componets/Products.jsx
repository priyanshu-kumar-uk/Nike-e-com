import React from 'react'
import { NavLink } from 'react-router-dom'
import Card from './Card'


const Products = () => {
  return (
    <div className='products-cart'>
        <div className="product-nav">
            <NavLink to= "/productform">Create Product</NavLink>   
        </div>
        <Card/>
    </div>
  )
}

export default Products
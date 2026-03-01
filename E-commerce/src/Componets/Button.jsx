import React, { memo } from 'react'

const Button = () => {
    console.log("button rendring....")
  return (
    <div className='btn'>
        <button>Create</button> 
    </div>
  )
}

export default memo(Button)
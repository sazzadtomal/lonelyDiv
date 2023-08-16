import React from 'react'
import LonelyDiv from './LonelyDiv/LonelyDiv'
import AnimatedBody from './AnimatedBody/AnimatedBody'
const Canvas = () => {
  return (
    <div className='m-4 relative flex justify-between h-2/3 md:w-1/2 lg:w-1/3'>
    <LonelyDiv/>
    <AnimatedBody/>
    </div>
  )
}

export default Canvas
import './App.css';
import LonelyDiv from './components/LonelyDiv/LonelyDiv';
import React from 'react'
import AnimatedHeader from './components/AnimatedHeader/AnimatedHeader';
import AnimatedBody from './components/AnimatedBody/AnimatedBody';
const App = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-slate-900 w-screen h-screen'>
         <AnimatedHeader/>
         <div className='m-4 relative flex justify-between h-2/3 md:w-1/2 lg:w-1/3'>
               <LonelyDiv/>
               <AnimatedBody/>
          </div>
          <button className= 'cursor-pointer hover:text-cyan-500 bg-white rounded-xl md:w-1/6 w-1/3 p-3'>ClickMe</button>
         
    </div>
  )
}

export default App

import './App.css';
import LonelyDiv from './components/LonelyDiv/LonelyDiv';
import React from 'react'
import AnimatedHeader from './components/AnimatedHeader/AnimatedHeader';
import AnimatedBody from './components/AnimatedBody/AnimatedBody';
const App = () => {
  return (
    <div className='flex justify-center items-center bg-slate-900 w-full h-screen fixed'>
         <AnimatedHeader/>
         <LonelyDiv/>
         <AnimatedBody/>
         
    </div>
  )
}

export default App

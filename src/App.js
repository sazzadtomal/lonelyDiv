import './App.css';
import React from 'react'
import AnimatedHeader from './components/AnimatedHeader/AnimatedHeader';
import { useDispatch, useSelector } from 'react-redux';
import {increment,decrement} from "./appSequenceSlice"
import Canvas from "./components/Canvas/Canvas"
import Example from "./components/Navbar/Sidebar/Example"

const App = () => {
  
  const sequence=useSelector(state=>state.sequence.value)
  const dispatch=useDispatch()
  console.log(sequence)

  return (
    <>
    <Example/>

    <div className='flex flex-col justify-between items-center bg-slate-900 w-screen h-screen'>
         <AnimatedHeader/>
         <Canvas/>
    {/* <button onClick={()=>dispatch(increment(50))} className= 'cursor-pointer hover:text-cyan-500 bg-white rounded-xl mb-24 md:w-1/6 w-1/3 p-3'>ClickMe</button> */}
         
    </div>
    </>
  )
}

export default App

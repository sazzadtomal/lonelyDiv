import React from 'react'
import sadEmoji from "../../assets/sad.png"
import "./LonelyDiv.css"

const LonelyDiv = () => {
  return (
    <div className='lonely_div_appearance flex self-center justify-center items-center bg-slate-50 w-40 h-60 rounded-3xl shadow-xl shadow-cyan-500/50 '>
        <img className='hover:rotate-12' src={sadEmoji} alt='sad emoji'/>
    </div>
  )
}

export default LonelyDiv
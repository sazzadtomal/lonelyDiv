import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: 0,
  }


export const sequenceSlice=createSlice({
    name:"sequence",
    initialState,
    reducers:{
        increment: (state)=>{
            state.value+=1
        },
        decrement: (state)=>{
            state.value-=1
        }
    }

})

export const {increment,decrement}=sequenceSlice.actions


export default sequenceSlice.reducer
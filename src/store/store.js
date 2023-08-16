import { configureStore } from "@reduxjs/toolkit";
import sequenceReducer from "../appSequenceSlice";

export const store=configureStore({
    reducer:{
        sequence: sequenceReducer,
    }
})




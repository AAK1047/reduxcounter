import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "./counterslice";




export const store = configureStore({
    reducer :{
        /* counter is the name of the reducer to update the state */
        counter : counterSlice
    }
})
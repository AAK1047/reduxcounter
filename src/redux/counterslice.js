import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
     //
    name:'counterapp',
    initialState:{
        value:0
    }, 
    //actions
    reducers:{
        increment:(state)=>{
            state.value+=1
        },
        decrement :(state)=>{
            state.value-=1
        },
        reset:(state)=>{
            state.value=0 
        },
        changeRange:(state , action )=>{
            state.value+=action.payload
        }    }
})
//  actions are need to component
export const {increment , decrement ,reset ,changeRange }=counterSlice.actions
// reducers are need to store to update state
export default counterSlice.reducer
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    count:0
}
export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        incCount:(state,action)=>{
            state.count++
        },
        decCount:(state)=>{
            state.count--
        },
        resetCounter:(state)=>{state.count=initialState.count}
    }
})
export const { incCount,decCount,resetCounter } = counterSlice.actions;

const counterReducer = counterSlice.reducer;
export default counterReducer;
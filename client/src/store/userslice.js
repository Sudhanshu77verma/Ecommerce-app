import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    user:null
}

export const userslice= createSlice({
    name:"user",
    initialState,
    reducers:{
setuserDetails:(state,action)=>{
    state.user= action.payload
}
    }
   
})

export const {setuserDetails}=userslice.actions
export default userslice.reducer
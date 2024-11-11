import { createSlice } from "@reduxjs/toolkit";

// let getpaste= JSON.stringify(localStorage.getItem("yourpaste"))||[]
const initialState = {
    pastes:localStorage.getItem("yourpaste")
    ? JSON.parse(localStorage.getItem("yourpaste"))
    :[]
  }
export const pasteSlice=createSlice({
    name:"pastes",
    initialState,
    reducers:{
        addToPastes:(state,action)=>{
            // console.log(action.payload);
            let paste= action.payload
            state.pastes.push(paste)
            localStorage.setItem("yourpaste",JSON.stringify(state.pastes))
        },
        updateToPastes:(state,action)=>{
            console.log(action.payload.id);
            state.pastes.map((val,i)=>{
               if (val.id==action.payload.id) {
                state.pastes[i]=action.payload
               }
            })
            localStorage.setItem("yourpaste",JSON.stringify(state.pastes)) 
        },
        removeFromPastes:(state,action)=>{
            console.log(action.payload);
            let remainpaste= state.pastes.filter((val,i)=>{
                return val.id!=action.payload
            })
            state.pastes=remainpaste
            localStorage.setItem("yourpaste",JSON.stringify(state.pastes))
        },

    }
})
export const {addToPastes,updateToPastes,resetAllPastes,removeFromPastes}=pasteSlice.actions
export default pasteSlice.reducer
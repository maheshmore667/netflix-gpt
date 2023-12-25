import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        showGpt : false
    },
    reducers : {
        updateShowGptAttribute : (state) =>{
            return {...state, showGpt : !(state?.showGpt)}
        }
    }
})
export const {updateShowGptAttribute} = gptSlice?.actions;
export default gptSlice.reducer;
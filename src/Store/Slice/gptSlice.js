import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        showGpt : false,
        movieNames : null,
        movieResults : null
    },
    reducers : {
        updateShowGptAttribute : (state) =>{
            return {...state, showGpt : !(state?.showGpt)}
        },
        updateMovieNames : (state, action) =>{
            return {...state, movieNames : action?.payload}
        },
        updateMovieResults : (state, action) =>{
            return {...state, movieResults : action?.payload}
        }
    }
})
export const {updateShowGptAttribute, updateMovieResults, updateMovieNames} = gptSlice?.actions;
export default gptSlice.reducer;
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
        },
        removeMovieResults : (state) =>{
            return {...state, movieResults : null}
        },
        removeMovieNames : (state) =>{
            return {...state, movieNames : null}
        }
    }
})
export const {updateShowGptAttribute, updateMovieResults, updateMovieNames, removeMovieNames, removeMovieResults} = gptSlice?.actions;
export default gptSlice.reducer;
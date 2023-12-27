import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        showGpt : false,
        movieNames : null,
        movieResults : null, 
        searchInitiated : false
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
        },
        setSearchInitiated : (state, action) =>{
            return {...state, searchInitiated : action?.payload}
        }
    }
})
export const {updateShowGptAttribute, updateMovieResults, updateMovieNames, removeMovieNames, removeMovieResults, setSearchInitiated} = gptSlice?.actions;
export default gptSlice.reducer;
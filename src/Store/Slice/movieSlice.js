import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState : {
        nowPlaying : null,
        trailerVideo : null
    },
    reducers : {
        addNowPlayingMovies : (state, action) =>{
            return {...state, nowPlaying : action?.payload}
        },
        addMovieTrailer : (state, action) =>{
            return {...state, trailerVideo : action?.payload}
        }
    }
});

export const {addNowPlayingMovies, addMovieTrailer} = movieSlice.actions;
export default movieSlice?.reducer;
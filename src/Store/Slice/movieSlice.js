import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState : {
        nowPlaying : null,
        trailerVideo : null,
        popular: null,
        topRated: null,
        upcoming : null
    },
    reducers : {
        addNowPlayingMovies : (state, action) =>{
            return {...state, nowPlaying : action?.payload}
        },
        addMovieTrailer : (state, action) =>{
            return {...state, trailerVideo : action?.payload}
        },
        addPopularMovies : (state, action) =>{
            return {...state, popular : action?.payload}
        },
        addTopRatedMovies : (state, action) =>{
            return {...state, topRated : action?.payload}
        },
        addUpcomingMovies : (state, action) =>{
            return {...state, upcoming : action?.payload}
        }
    }
});

export const {addNowPlayingMovies, addMovieTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies} = movieSlice.actions;
export default movieSlice?.reducer;
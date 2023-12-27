import { useEffect } from 'react'
import {ACCESS_TOKEN_TMDB, MOVIE_NOW_PLAYING} from "../Utils/constants"
import { useDispatch, useSelector } from 'react-redux'
import {addNowPlayingMovies} from "../Store/Slice/movieSlice"

const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();
    const nowPlaying = useSelector(store=>store?.movies?.nowPlaying)
    useEffect(()=>{
      !nowPlaying && getNowPlayingMovies();
    }, [])
  
    const getNowPlayingMovies = async() =>{
      let options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${ACCESS_TOKEN_TMDB}`
        }
      };
  
      const data = await fetch(MOVIE_NOW_PLAYING, options)
      const movieData = await data?.json();
      dispatch(addNowPlayingMovies(movieData?.results));
    }
}
export default useNowPlayingMovies;
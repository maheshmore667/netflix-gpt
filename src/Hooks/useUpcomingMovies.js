import { useEffect } from 'react'
import {ACCESS_TOKEN_TMDB, UPCOMING_MOVIES} from "../Utils/constants"
import { useDispatch, useSelector } from 'react-redux'
import {addUpcomingMovies} from "../Store/Slice/movieSlice"

const useUpcomingMovies = () =>{
    const dispatch = useDispatch();
    const upcoming = useSelector(store=>store?.movies?.upcoming)

    useEffect(()=>{
     !upcoming && getUpcomingMovies();
     // eslint-disable-next-line
    }, [])
  
    const getUpcomingMovies = async() =>{
      let options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${ACCESS_TOKEN_TMDB}`
        }
      };
  
      const data = await fetch(UPCOMING_MOVIES, options)
      const movieData = await data?.json();
      dispatch(addUpcomingMovies(movieData?.results));
    }
}
export default useUpcomingMovies;
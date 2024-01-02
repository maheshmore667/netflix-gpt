import { useEffect } from 'react'
import {ACCESS_TOKEN_TMDB, TOP_RATED_MOVIES} from "../Utils/constants"
import { useDispatch, useSelector } from 'react-redux'
import {addTopRatedMovies} from "../Store/Slice/movieSlice"

const useTopRatedMovies = () =>{
    const dispatch = useDispatch();
    const topRated = useSelector(store=>store?.movies?.topRated)
    useEffect(()=>{
     !topRated && getTopRatedMovies();
     // eslint-disable-next-line
    }, [])
  
    const getTopRatedMovies = async() =>{
      let options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${ACCESS_TOKEN_TMDB}`
        }
      };
  
      const data = await fetch(TOP_RATED_MOVIES, options)
      const movieData = await data?.json();
      dispatch(addTopRatedMovies(movieData?.results));
    }
}
export default useTopRatedMovies;
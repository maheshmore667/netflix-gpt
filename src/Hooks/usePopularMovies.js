import { useEffect } from 'react'
import {ACCESS_TOKEN_TMDB, POPULAR_MOVIES} from "../Utils/constants"
import { useDispatch, useSelector } from 'react-redux'
import {addPopularMovies} from "../Store/Slice/movieSlice"

const usePopularMovies = () =>{
    const dispatch = useDispatch();
    const popular = useSelector(store=>store?.movies?.popular)
    useEffect(()=>{
      !popular && getPopularMovies();
      // eslint-disable-next-line
    }, [])
  
    const getPopularMovies = async() =>{
      let options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${ACCESS_TOKEN_TMDB}`
        }
      };
  
      const data = await fetch(POPULAR_MOVIES, options)
      const movieData = await data?.json();
      dispatch(addPopularMovies(movieData?.results));
    }
}
export default usePopularMovies;
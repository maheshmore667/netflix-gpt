import React, { useEffect } from 'react'
import Header from './Header'
import {ACCESS_TOKEN_TMDB, MOVIE_NOW_PLAYING} from "../Utils/constants"
import { useDispatch } from 'react-redux'
import {addNowPlayingMovies} from "../Store/Slice/movieSlice"

const Browse = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    getNowPlayingMovies();
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

  return (
    <div className="w-full">
      <Header />
      
    </div>
  )
}

export default Browse

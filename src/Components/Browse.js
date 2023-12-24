import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="w-full">
      <Header />
      
    </div>
  )
}

export default Browse

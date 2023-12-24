import React from 'react'
import VideoTitle from "./VideoTitle"
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const movies = useSelector((store)=> store?.movies?.nowPlaying)
  if(!movies) return;
  const displayMovie = movies[0];
  const {original_title, overview} = displayMovie;
 
  return (
    <div className="w-full">
      <VideoTitle title={original_title} overview={overview}/>
    </div>
  )
}

export default MainContainer;

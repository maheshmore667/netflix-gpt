import React from 'react'
import {POSTER_URL} from "../Utils/constants"
const MovieCard = ({movie}) => {
  if(!movie?.poster_path){
    return
  }
  return (
    <div className="w-44 p-2 mr-1">
      <img alt={movie?.title} src={`${POSTER_URL}${movie?.poster_path}`}/>
    </div>
  )
}

export default MovieCard

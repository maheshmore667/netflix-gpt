import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptResults = () => {
    const {movieResults, movieNames} = useSelector((store)=> store?.gpt)
    if(!movieNames || !movieResults) return <h1>Something went wrong!! Please try again</h1>
  return (
    <div className="w-full bg-black bg-opacity-80 mt-[5%]">
    {
        movieNames?.map((movieName, index) =>{
            return <MovieList title={movieName} movies = {movieResults[index]} />
        })
    }
    </div>
  )
}

export default GptResults

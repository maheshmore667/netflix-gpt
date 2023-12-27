import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptResults = () => {
    const {movieResults, movieNames} = useSelector((store)=> store?.gpt)
    if(!movieResults || !movieNames) return (<div className="w-full h-full mt-[5%]"></div>);
  return (
    <div className="w-full bg-black bg-opacity-80 mt-[5%]">
    {
        movieNames?.map((movieName, index) =>{
            return <MovieList title={movieName} key={movieName} movies = {movieResults[index]} />
        })
    }
    </div>
  )
}

export default GptResults

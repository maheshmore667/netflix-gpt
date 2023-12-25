import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const moviesList = useSelector((store) => store?.movies);
  return (
    <div className="bg-black w-full">
      <div className="-mt-52 relative pl-12">
        <MovieList title={"Now Playing"} movies={moviesList?.nowPlaying} />
        <MovieList title={"Popular"} movies={moviesList?.popular} />
        <MovieList title={"Top Rated"} movies={moviesList?.topRated} />
        <MovieList title={"Upcoming"} movies={moviesList?.upcoming} />
      </div>
    </div>
  );
};

export default SecondaryContainer;

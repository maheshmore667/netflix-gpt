import { ACCESS_TOKEN_TMDB, MOVIE_DATA } from "../Utils/constants";

const fetchMovieData = async(movie) =>{
    const url = `${MOVIE_DATA}${movie}&page=1'`
    let options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN_TMDB}`,
      },
    };
    const data = await fetch(url, options);
    const moviedata = await data.json();
    return moviedata;
}

export default fetchMovieData;
import { ACCESS_TOKEN_TMDB, MOVIE_TRAILER } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../Store/Slice/movieSlice";
import { useEffect } from "react"

const useMovieTrailer = (id) =>{
    const dispatch = useDispatch();

  useEffect(() => {
    getVideoTrailer();
  }, []);

  const getVideoTrailer = async () => {
    let options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN_TMDB}`,
      },
    };
    const data = await fetch(
      `${MOVIE_TRAILER}${id}/videos` ,
      options
    );
    const movieVideos = await data?.json();
    const trailerVideos = movieVideos?.results?.filter(
      (video) => video?.type === "Trailer"
    );
    const trailer =
      trailerVideos?.length > 0 ? trailerVideos[0] : trailerVideos[0];
    dispatch(addMovieTrailer(trailer));
  };
}

export default useMovieTrailer;
import React from "react";
import useMovieTrailer from "../Hooks/useMovieTrailer"
import { useSelector } from "react-redux";
import {YOUTUBE_TRAILER} from "../Utils/constants"

const VideoContainer = ({ id }) => {
    useMovieTrailer(id);
    const trailer = useSelector((store)=>store?.movies?.trailerVideo);

  return (
    <div className="w-full aspect-video">
      <iframe
       className="w-full aspect-video"
        src={`${YOUTUBE_TRAILER}${trailer?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        
      ></iframe>
    </div>
  );
};

export default VideoContainer;

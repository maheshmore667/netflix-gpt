import React from "react";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlaying);
  if (!movies) return;
  const randomNum = Math.floor(Math.random() * ((movies?.length - 1) - 0 + 1)) + 0;
  const displayMovie = movies[randomNum];
  const { original_title, overview, id } = displayMovie;

  return (
    <>
      <VideoTitle title={original_title} overview={overview} />
      <VideoContainer id={id} />
    </>
  );
};

export default MainContainer;

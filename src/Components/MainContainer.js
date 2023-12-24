import React from "react";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlaying);
  if (!movies) return;
  const displayMovie = movies[0];
  const { original_title, overview, id } = displayMovie;

  return (
    <>
      <VideoTitle title={original_title} overview={overview} />
      <VideoContainer id={id} />
    </>
  );
};

export default MainContainer;

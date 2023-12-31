import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full absolute bg-gradient-to-r from-black aspect-video">
      <div className="absolute top-[35%] pl-6 sm:pl-24 w-[50%] sm:w-[40%] text-white">
        <p className="relative font-bold text-md sm:text-3xl  font-sans ">
          {title}
        </p>
        <p className="invisible sm:visible relative mt-5 font-['Lucida_Handwriting'] ">
          {overview}
        </p>
        <div className="invisible sm:visible relative mt-5">
          <button className="bg-white font-bold text-black px-4 py-2 mx-2 rounded-md hover:bg-opacity-50">▶️ Play</button>
          <button className="bg-white font-bold text-black px-4 py-2 mx-2 rounded-md hover:bg-opacity-50"> ℹ️ More</button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;

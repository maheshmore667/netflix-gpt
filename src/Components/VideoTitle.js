import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full absolute bg-gradient-to-r from-black aspect-video">
      <div className="absolute top-[35%] pl-24 w-[40%] text-white">
        <p className="relative font-bold text-3xl  font-sans ">
          {title}
        </p>
        <p className="relative mt-5 font-['Lucida_Handwriting'] ">
          {overview}
        </p>
        <div className="relative mt-5">
          <button className="bg-red-900 font-bold text-white px-4 py-2 mx-2 rounded-md">▶️ Play</button>
          <button className="bg-red-900 font-bold text-white px-4 py-2 mx-2 rounded-md"> ℹ️ More</button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;

import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full">
      <div className="absolute top-1/4 pl-20 w-2/4">
        <p className="relative font-bold text-2xl  font-sans hover:text-3xl">
          {title}
        </p>
        <p className="relative mt-5 font-['Lucida_Handwriting'] hover:text-xl">
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

import React from "react";
import { useSelector } from "react-redux";
import lang from "../Utils/languageConstants";

const GptSearchbar = () => {
  const langKey = useSelector((store)=>store?.config?.lang)
  return (
    <div className="w-full flex justify-center">
      <div className="w-1/2 mt-[10%] bg-black">
        <div className="p-2">
          <input
            type="text"
            className="py-2 px-2 w-[75%] rounded-md mr-2"
            placeholder= {lang[langKey]?.searchPlaceholder}
          ></input>
          <button className="py-2 px-2 bg-red-800 font-bold text-white w-[20%] rounded-md ml-1">
          {lang[langKey]?.searchButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GptSearchbar;

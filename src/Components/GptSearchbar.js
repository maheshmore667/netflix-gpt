import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../Utils/languageConstants";
import openai from "../Utils/openai";
import fetchMovieData from "../Hooks/fetchMovieData";
import { updateMovieNames, updateMovieResults } from "../Store/Slice/gptSlice";

const GptSearchbar = () => {
  const langKey = useSelector((store)=>store?.config?.lang)
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const searchForGptResult = async() =>{
    const gptQuery = `Act like the movie recommendation system. ${searchText?.current?.value}. Only Give results comma separated names as  eg: Sholay, Golmaal`
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery}],
      model: 'gpt-3.5-turbo',
    });
    //will return only top 10 results
    const gptMovieArray = chatCompletion?.choices[0].message.content.split(", ")?.slice(0,10);
    getMovieData(gptMovieArray);
    dispatch(updateMovieNames(gptMovieArray));
  
  }

  const getMovieData = async(gptMovieArray) =>{
    const movieDataArray = gptMovieArray?.map((movie) => fetchMovieData(movie))
     let movieData = await Promise.all(movieDataArray);
     movieData = movieData?.filter((movie) =>movie?.results.length > 0)
     let movieArrays =[]; 
     movieData.forEach((movie)=> movieArrays.push(movie?.results));
    dispatch(updateMovieResults(movieArrays));
  }

  return (
    <div className="w-full flex justify-center">
      <div className="w-1/2 mt-[10%] bg-black">
        <div className="p-2">
          <input
            type="text"
            className="py-2 px-2 w-[75%] rounded-md mr-2"
            ref={searchText}
            placeholder= {lang[langKey]?.searchPlaceholder}
          ></input>
          <button className="py-2 px-2 bg-red-800 font-bold text-white w-[20%] rounded-md ml-1" onClick={searchForGptResult}>
          {lang[langKey]?.searchButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GptSearchbar;

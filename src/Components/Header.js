import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../Store/Slice/userSlice";
import { useNavigate } from "react-router-dom";
import { LANGMAP, LOGO_URL } from "../Utils/constants";
import {removeMovieNames, removeMovieResults, setSearchInitiated, updateShowGptAttribute} from "../Store/Slice/gptSlice";
import { updateLangKey } from "../Store/Slice/appConfigSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state?.user);
  const showGpt = useSelector((state) => state?.gpt?.showGpt);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        dispatch(removeMovieResults());
        dispatch(removeMovieNames());
        dispatch(setSearchInitiated(false))
      })
      .catch((error) => {
        console.log("sign out error : ", error);
      });
  };

  const updateGptAttribute = () =>{
    dispatch(updateShowGptAttribute());
  }

  const handleLanguageChange = (e) =>{
   dispatch(updateLangKey(e?.target?.value))
  }

  return (
    <div className="text-sm w-full content-center flex-wrap flex absolute bg-gradient-to-t from-black content-center z-30 justify-between sm: bg-gradient-to-t from-black py-2 px-2">
      <img className="w-20 h-12 sm:w-52 sm:h-20" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex">
          {showGpt && <select className="text-white font-bold bg-purple-800 my-6 px-2 mr-2 rounded-md py-1" onChange={handleLanguageChange}> 
            {
              Object.keys(LANGMAP)?.map((key)=><option key={key} value={key} >{LANGMAP[key]}</option>)
            }
          </select>}
         <button
          className="text-white font-bold bg-red-800 my-6 px-2 mr-2 rounded-md py-1 font-size-md" 
          onClick={updateGptAttribute}
        >
          {showGpt ? "HomePage" : "GPT Seatch"}
        </button>
        <button
          className="text-red-500 font-bold bg-white my-6 px-2 mr-2 rounded-md py-1 font-size-md"
          onClick={handleSignOut}
        >
          SignOut
        </button>
        </div>
        
      )}
    </div>
  );
};

export default Header;

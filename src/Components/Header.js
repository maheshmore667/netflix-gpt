import React, { useEffect } from 'react'
import {signOut } from "firebase/auth";
import {auth} from "../Utils/firebase"
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import {addUser, removeUser} from "../Store/Slice/userSlice"
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state)=> state?.user);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({uid, email, displayName}));
        navigate("/browse");
      } else {
        navigate("/");
      }
    });
  }, [])


  const handleSignOut = () =>{
    signOut(auth).then(() => {
      dispatch(removeUser());
    }).catch((error) => {
        console.log("sign out error : ", error);
    });
  }

  return (
    <div className="w-full flex justify-between absolute py-2 px-2 bg-gradient-to-b from-black content-center">
      <img className="w-52 "
      src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
      alt='logo'/>
      {user && 
       <button className="text-red-500 font-bold bg-white my-6 px-2 rounded-md py-1 font-size-md" onClick={handleSignOut}>SignOut</button>
    }
      </div>
  )
}

export default Header

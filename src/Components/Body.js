import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from "./Login"
import Browse from "./Browse"
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../Utils/firebase'
import {addUser, removeUser} from "../Store/Slice/userSlice"

const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element : <Login />
        },
        {
            path:"/browse",
            element : <Browse />
        }
    ])
    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName} = user;
          dispatch(addUser({uid, email, displayName}));
        } else {
          dispatch(removeUser());
        }
      });
    }, [])

  return (
    <div className="h-full w-full">
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body

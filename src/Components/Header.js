import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../Store/Slice/userSlice";
import { useNavigate } from "react-router-dom";
import { LOGO_URL } from "../Utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state?.user);

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
      })
      .catch((error) => {
        console.log("sign out error : ", error);
      });
  };

  return (
    <div className="w-full absolute flex justify-between py-2 px-2 bg-gradient-to-t from-black content-center z-30">
      <img className="w-52 " src={LOGO_URL} alt="logo" />
      {user && (
        <button
          className="text-red-500 font-bold bg-white my-6 px-2 rounded-md py-1 font-size-md"
          onClick={handleSignOut}
        >
          SignOut
        </button>
      )}
    </div>
  );
};

export default Header;

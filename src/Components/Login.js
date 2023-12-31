import React, { useRef, useState } from "react";
import Header from "./Header";
import {
  nameValidator,
  emailValidator,
  PasswordValidator,
} from "../Utils/formValidator";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { updateNameOfUser } from "../Store/Slice/userSlice";
import { BG_URL } from "../Utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleIsSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!isSignIn) setNameError(nameValidator(name?.current?.value));
    setEmailError(emailValidator(email?.current?.value));
    setPasswordError(PasswordValidator(password?.current?.value));

    if (nameError === null && emailError === null && passwordError === null) {
      if (!isSignIn) {
        //sign up logic
        createUserWithEmailAndPassword(
          auth,
          email?.current?.value,
          password?.current?.value
        )
          .then((userCredential) => {
            updateProfile(userCredential.user, {
              displayName: name?.current?.value
            }).then(() => {
             dispatch(updateNameOfUser(auth?.currentUser?.displayName));
            }).catch((error) => {
              console.log(error);
            });
           
          })
          .catch((error) => {
            const errorMessage = error.message;
            setPasswordError(errorMessage);
          });
      } else {
        //sign in logic
        signInWithEmailAndPassword( auth,
          email?.current?.value,
          password?.current?.value)
          .then((userCredential) => {
          })
          .catch((error) => {
            const errorMessage = error.message;
            setPasswordError(errorMessage);
          });
      }
    }
  };

  return (
    <div className="w-full h-full">
      <Header />
      <div className="w-full h-full" style={{ backgroundImage: `url('${BG_URL}')` }}>
        <div className="w-full h-full flex flex-wrap justify-center content-center">
          <form className="w-8/12 sm:w-4/12  bg-black rounded-md flex flex-col text-white content-center flex-wrap opacity-90">
            <label className="font-bold text-2xl my-5 mx-auto">
              {isSignIn ? "Sign In" : "Sign Up"}
            </label>
            {!isSignIn && (
              <input
                className="rounded-md w-7/12 p-2 mx-2 my-2 bg-[#333]"
                ref={name}
                placeholder="Full Name"
                type="text"
              />
            )}
            {nameError && (
              <label className="font-bold text-md text-red-600 m-2 px-2">
                {nameError}
              </label>
            )}
            <input
              className="rounded-md w-7/12 p-2 mx-2 my-2 bg-[#333]"
              ref={email}
              placeholder="Email"
              type="text"
            />
            {emailError && (
              <label className="font-bold text-md text-red-600 m-2 px-2">
                {emailError}
              </label>
            )}
            <input
              className="rounded-md w-7/12 p-2 mx-2 my-2 bg-[#333]"
              ref={password}
              placeholder="Password"
              type="password"
            />
            {passwordError && (
              <label className="font-bold text-md text-red-600 m-2 px-2">
                {passwordError}
              </label>
            )}
            <button
              className="rounded-md p-2 w-7/12 mt-3 mx-2 bg-red-700 font-bold"
              onClick={handleFormSubmit}
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            <p className="cursor-pointer mt-10" onClick={handleIsSignIn}>
              {isSignIn
                ? "New to Netflix ? Sign up now"
                : "Already a user, Sign In!"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const[isSignIn, setIsSignIn] = useState(true);
  const handleIsSignIn = () =>{
    setIsSignIn(!isSignIn);
  }

  return (
      <div className="w-full h-full">
        <Header />
        <div className=" w-full h-full bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg')]">
          <div className="w-full h-full flex flex-wrap justify-center content-center">
              <form className="w-4/12 h-3/4 bg-black rounded-md flex flex-col text-white content-center flex-wrap opacity-90">
                  <label className="font-bold text-2xl my-5 mx-auto">{isSignIn ? "Sign In" : "Sign Up"}</label>
                  {!isSignIn && 
                    <input className="rounded-md w-7/12 p-2 mx-2 my-2 bg-[#333]" placeholder="Full Name" type="text" />
                  }
                  <input className="rounded-md w-7/12 p-2 mx-2 my-2 bg-[#333]" placeholder="Email" type="text" />
                  <input className="rounded-md w-7/12 p-2 mx-2 my-2 bg-[#333]" placeholder="Password" type="password" />
                  <button className="rounded-md p-2 w-7/12 mt-3 mx-2 bg-red-700 font-bold">{isSignIn ? "Sign In" : "Sign Up"}</button>
                  <p className="cursor-pointer mt-10" onClick={handleIsSignIn}>
                    {isSignIn ? "New to Netflix ? Sign up now" : "Already a user, Sign In!"}
                  </p>
              </form>
          </div>
        </div>
      </div>
  );
};

export default Login;

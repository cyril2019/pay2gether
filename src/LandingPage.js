import React, { useState } from "react";
import loginImage from "./assets/5553.jpg";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./components/firebase-config";
import Login from "./components/Login";
import Register from "./components/Registration";
function LandingPage() {
  //Stores id and password.
  const [isLogin, setisLogin] = useState(true);
  function changeLogin() {
    console.log("clicked change");
    isLogin ? setisLogin(false) : setisLogin(true);
  }
  return (
    //entire login div
    <div className="h-screen w-screen sm:flex fon">
      {/* div for left side */}
      <div className="h-1/3 w-full sm:h-full sm:w-1/2 bg-blue-100">
        {/* div for left side content */}
        <div className="w-9/12 m-auto py-10">
          {/* div for Title */}
          <div className="w-full text-3xl sm:text-5xl font-semiboldbold ">
            Pay2gether.com
          </div>
          {/* div for Image */}
          <div className="w-0 sm:w-full sm:py-10 invisible sm:visible">
            <img src={loginImage} />
          </div>
          {/* div for text on left side  */}
          <div className="w-full text-center">
            <p className="font-normal text-2xl">
              Split money and pay your bills
            </p>
            <p className="font-normal text-2xl ">together</p>
            <p className="font-thin text-lg text-gray-500">
              Collect the bill, split the amount and pay.
            </p>
          </div>
        </div>
      </div>
      {/* div for right side */}
      {isLogin ? (
        <Login changeLogin={changeLogin} />
      ) : (
        <Register changeLogin={changeLogin} />
      )}
    </div>
  );
}

export default LandingPage;

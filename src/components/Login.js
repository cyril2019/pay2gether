import { React, useState } from "react";
import { onAuthStateChanged, getAuth } from "@firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
function Login(props) {
  const [id, setid] = useState("");
  const [password, setpassword] = useState("");
  const [errMsg, seterrMsg] = useState();

  //check for Login and Registration
  const [isLogin, setisLogin] = useState(true);
  const auth = getAuth();
  const navigate = useNavigate();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate("/dashboard");
    }
  });
  async function onLogin() {
    if (id == "") {
      seterrMsg("ID cannot be empty");
    } else if (password == "") {
      seterrMsg("Password cannot be empty");
    } else {
      try {
        const user = await signInWithEmailAndPassword(auth, id, password);
      } catch (error) {
        seterrMsg(error.message);
      }
    }
  }

  function clicked() {
    console.log("clicked");
  }

  return (
    <div className="h-2/3 w-full sm:h-full sm:w-1/2">
      {/* div for right content */}
      <div className="w-9/12 m-auto py-20 ">
        {/* heading of the form */}
        <p className="font-bold text-3xl">Welcome back to Pay2gether!</p>
        {/* sub heading for form */}
        <p className="font-light text-xl text-gray-600">
          Please login to access your account
        </p>
        {/* login form */}
        <div className="w-full">
          {/* Email input */}
          <p className="font-light text-xl text-gray-600 pt-6">
            E-mail or phone number
          </p>
          <input
            placeholder="Type your ID"
            className="bg-gray-100 px-3 w-full"
            onChange={(e) => {
              setid(e.target.value);
            }}
          />
          {/* password input */}
          <p className="font-light text-xl text-gray-600 pt-1">Password</p>
          <input
            type="password"
            placeholder="Type your password"
            className="bg-gray-100 px-3 w-full"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />

          {/* forgot password link */}
          <p className="text-blue-600 pt-2">Forgot password?</p>
          {/* error msg */}
          <p className="text-red-500">{errMsg}</p>

          {/* login button  */}
          <button
            className="w-full bg-blue-600 rounded-sm text-white"
            onClick={onLogin}
          >
            Log In
          </button>
          {/* Sign up link */}
          <div className="flex w-full text-center">
            <p>Don't have a account?</p>
            <button className="text-blue-600" onClick={props.changeLogin}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

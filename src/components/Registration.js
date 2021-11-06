import { React, useState } from "react";
import { auth } from "./firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
function Register(props) {
  const [id, setid] = useState("");
  const [password, setpassword] = useState("");
  const [confPassword, setconfPassword] = useState("");
  const [errMsg, seterrMsg] = useState();

  //check for Login and Registration
  const [isLogin, setisLogin] = useState(true);

  async function onRegister() {
    if (id == "") {
      seterrMsg("id cannot be empty!");
    } else if (password == "") {
      seterrMsg("password cannot be empty!");
    } else if (password === confPassword) {
      try {
        console.log(`id=${id},pass=${password}`);
        const user = await createUserWithEmailAndPassword(auth, id, password);
      } catch (error) {
        seterrMsg(error.message);
      }
    } else {
      seterrMsg("Both the passwords should be same!");
    }
  }
  return (
    <div className="h-2/3 w-full sm:h-full sm:w-1/2">
      {/* div for right content */}
      <div className="w-9/12 m-auto py-20 ">
        {/* heading of the form */}
        <p className="font-bold text-3xl">Welcome back to Pay2gether!</p>
        {/* sub heading for form */}
        <p className="font-light text-xl text-gray-600">
          Please enter your details
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
          {/* confirm password  */}
          <p className="font-light text-xl text-gray-600 pt-1">
            Confirm Password
          </p>
          <input
            type="password"
            placeholder="Re-Type password"
            className="bg-gray-100 px-3 w-full"
            onChange={(e) => {
              setconfPassword(e.target.value);
            }}
          />
          {/* error msg */}
          <p className="text-red-500">{errMsg}</p>
          {/* Register button  */}
          <button
            className="w-full bg-blue-600 rounded-sm mt-5 text-white"
            onClick={onRegister}
          >
            Register
          </button>
          {/* Sign up link */}
          <div className="flex w-full text-center">
            <p>Already have a account?</p>
            <button className="text-blue-600" onClick={props.changeLogin}>
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

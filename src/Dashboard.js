import React from "react";
import { FaSearch, FaRegBell, FaUserCircle } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import FriendListCard from "./components/FriendListCard";
import RecentPayment from "./components/RecentPayment";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const auth = getAuth();
  const navigate = useNavigate();

  return (
    <div className="w-screen px-14 pt-2">
      {/* navbar */}
      <div className="w-full text-3xl flex ">
        {/* search */}
        <div className="w-full flex">
          <input placeholder="search" className="bg-gray-100 rounded-md px-3" />
          <div className="my-auto">
            <FaSearch className="text-2xl px-1" />
          </div>
        </div>
        {/* right side icons in navbar */}
        <div className="m-auto">
          <FaRegBell className="text-black w-min text-2xl " />
        </div>
        <div className="m-auto">
          <GrLogout
            className="w-min m-2 text-2xl cursor-pointer"
            onClick={() => {
              auth.signOut();
              navigate("/");
            }}
          />
        </div>
      </div>
      {/* body of dashboard */}
      <div className="w-full pt-10 ">
        <p className="text-4xl font-bold">Pay together!</p>
        {/* this div containd the payment option and friend list */}
        <div className="w-full flex">
          {/* left side */}
          <div className="w-2/3 text-2xl flex flex-col pr-5">
            <p>Currently splitting with Rajesh and Ranjitha</p>
            <input
              placeholder="Enter The Amount"
              className="text-6xl border-l-2 w-max pl-3 my-5"
            />
            <button className="text-white bg-blue-700 text-2xl my-4 rounded-md w-max p-1 px-3">
              Split equally {">"}
            </button>
            <button className="text-white rounded-md w-max p-1 px-3 bg-blue-700 text-2xl">
              Split Unequally {" >"}
            </button>
            {/* Recent payment div */}
            <div className="w-full py-5">
              <p className="text-xl">Recent Payments</p>
              {/* list of payments */}
              <div className="w-full">
                <RecentPayment />
                <RecentPayment />
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="w-1/3">
            {/* Friends list */}
            <div>
              <p className="text-4xl font-bold text-center pb-4">
                Friends online
              </p>
              <FriendListCard />
              <FriendListCard />
            </div>
            {/* Add Friend  */}
            <div className="w-full py-4">
              <p className="text-4xl font-bold text-center pb-4">Add Friends</p>
              <p className="border-b-2 w-full">India</p>
              <div className="flex">
                <p className="text-4xl font-bold">+91</p>
                <input placeholder="Phone" className=" text-4xl px-3 w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

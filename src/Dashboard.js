import React from "react";
import { FaSearch, FaRegBell, FaUserCircle } from "react-icons/fa";

function Dashboard() {
  return (
    <div className="w-screen px-14 pt-2">
      {/* navbar */}
      <div className="w-full text-3xl flex ">
        <div className="w-full flex">
          <input placeholder="search" className="bg-gray-100 rounded-md px-3" />
          <div className="my-auto">
            <FaSearch className="text-2xl px-1" />
          </div>
        </div>
        <div className="m-auto">
          <FaRegBell className="text-black w-min text-2xl " />
        </div>
        <div className="m-auto">
          <FaUserCircle className="w-min m-2 text-2xl" />
        </div>
      </div>
      {/* body of dashboard */}
      <div className="w-full pt-5 ">
        <p className="text-3xl font-bold">Pay together!</p>
        {/* this div containd the payment option and friend list */}
      </div>
    </div>
  );
}

export default Dashboard;

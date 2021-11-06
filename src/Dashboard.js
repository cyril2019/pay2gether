import React from "react";
import { FaRegBell, FaUserCircle } from "react-icons/fa";

function Dashboard() {
  return (
    <div className="w-screen">
      {/* navbar */}
      <div className="w-screen p-3 text-3xl flex">
        <div className="w-full">
          <p>pay2gether</p>
        </div>
        <div className="m-auto">
          <FaRegBell className="text-black w-min text-2xl " />
        </div>
        <div className="m-auto">
          <FaUserCircle className="w-min m-2 text-2xl" />
        </div>
      </div>
      {/* body of dashboard */}
    </div>
  );
}

export default Dashboard;

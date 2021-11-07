import React from "react";
import dp from "../assets/dp.jpg";
import { FaPlusSquare } from "react-icons/fa";

function FriendListCard() {
  return (
    <div className="w-full grid grid-cols-6 my-2 shadow-sm">
      <div className="col-span-1 m-auto">
        <img src={dp} className="rounded-md w-12" />
      </div>
      <div className="col-span-4 px-1 my-auto">
        <div>
          <p className="leading-3 text-2xl pt-1">Cyril</p>
          <p className="text-gray-400 leading-4 text-xl">8800616161</p>
        </div>
      </div>
      <div className="col-span-1 m-auto">
        <FaPlusSquare className="text-blue-700" />
      </div>
    </div>
  );
}

export default FriendListCard;

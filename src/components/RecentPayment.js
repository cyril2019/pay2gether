import React from "react";
import { FaTrashAlt, FaDotCircle } from "react-icons/fa";

function RecentPayment() {
  return (
    <div className="w-full grid grid-cols-12 myauto">
      <div className="col-span-3 pt-1">Food</div>
      <div className="col-span-2 text-yellow-400 pt-1">PAYMENT</div>
      <div className="col-span-3 text-gray-400 pt-1">Nov 5,2021</div>
      <div className="col-span-3 text-red-500  pt-1">-Rs.64.80</div>
      <div className="col-span-1 text-lg m-auto">
        <FaTrashAlt className="text-blue-700" />
      </div>
    </div>
  );
}

export default RecentPayment;

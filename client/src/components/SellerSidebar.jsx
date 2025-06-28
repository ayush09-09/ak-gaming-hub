import React from "react";
import { Link } from "react-router-dom";
import { Coins, Upload, Home, LogOut } from "lucide-react";

const SellerSidebar = () => {
  return (
    <div className="bg-white shadow-lg h-screen p-4 w-60 fixed top-0 left-0">
      <h2 className="text-xl font-bold mb-6 text-yellow-600">👑 Seller Panel</h2>
      <ul className="space-y-4">
        <li>
          <Link to="/seller/dashboard" className="flex items-center gap-2 hover:text-yellow-500">
            <Home size={20} /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/seller/upload" className="flex items-center gap-2 hover:text-yellow-500">
            <Upload size={20} /> Upload ID
          </Link>
        </li>
        <li>
          <Link to="/seller/coins" className="flex items-center gap-2 hover:text-yellow-500">
            <Coins size={20} /> My Coins
          </Link>
        </li>
        <li>
          <Link to="/logout" className="flex items-center gap-2 text-red-600">
            <LogOut size={20} /> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SellerSidebar;

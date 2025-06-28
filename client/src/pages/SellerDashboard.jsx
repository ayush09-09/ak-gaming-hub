import React, { useEffect, useState } from "react";
import SellerSidebar from "../components/SellerSidebar";

const dummyListings = [
  {
    id: "FF123456789",
    price: 150,
    level: 72,
    coinsEarned: 5,
    status: "Approved",
    images: [
      "profile.jpg",
      "lobby.jpg",
      "weapon.jpg",
      "vault.jpg",
      "character.jpg",
    ],
  },
  {
    id: "FF987654321",
    price: 200,
    level: 59,
    coinsEarned: 0,
    status: "Rejected",
    images: [],
  },
];

const SellerDashboard = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // TODO: Replace with real API call
    setListings(dummyListings);
  }, []);

  return (
    <div className="flex">
      <SellerSidebar />
      <div className="ml-60 p-6 w-full bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          📊 Seller Dashboard
        </h1>

        {/* Coin Summary */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold">🪙 Total AK Coins</h2>
            <p className="text-yellow-600 font-bold text-xl">65 Coins</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold">📦 Total IDs Listed</h2>
            <p className="text-blue-600 font-bold text-xl">12</p>
          </div>
        </div>

        {/* Listings Table */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">📝 Your Listings</h2>
          <div className="grid gap-6">
            {listings.length > 0 ? (
              listings.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg p-4 shadow-md border"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-lg">ID: {item.id}</p>
                      <p>Level: {item.level}</p>
                      <p>Price: ₹{item.price}</p>
                      <p>
                        Status:{" "}
                        <span
                          className={`text-${
                            item.status === "Approved" ? "green" : "red"
                          }-600`}
                        >
                          {item.status}
                        </span>
                      </p>
                    </div>
                    <div className="text-right">
                      <p>
                        AK Coins Earned:{" "}
                        <strong>{item.coinsEarned}</strong>
                      </p>
                      <div className="flex gap-2 mt-2">
                        <button className="bg-yellow-500 px-3 py-1 rounded text-white">
                          Edit
                        </button>
                        <button className="bg-red-500 px-3 py-1 rounded text-white">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">No IDs listed yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const dummyData = [
  {
    id: "1",
    uid: "123456789",
    level: 67,
    price: 150,
    thumbnail: "/images/sample1.jpg",
  },
  {
    id: "2",
    uid: "987654321",
    level: 72,
    price: 180,
    thumbnail: "/images/sample2.jpg",
  },
];

const Marketplace = () => {
  return (
    <div className="flex">
      {/* Sidebar Filter */}
      <aside className="w-64 p-4 hidden md:block">
        <div className="bg-white rounded-xl p-4 shadow-md">
          <h3 className="font-semibold text-lg mb-3">Filters</h3>
          <label className="block mb-2">
            <span className="text-sm">Level ≥</span>
            <input type="number" className="w-full mt-1 p-2 border rounded" />
          </label>
          <label className="block">
            <span className="text-sm">Max Price (₹)</span>
            <input type="number" className="w-full mt-1 p-2 border rounded" />
          </label>
        </div>
      </aside>

      {/* Product Grid */}
      <main className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dummyData.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-md p-3"
          >
            <img
              src={item.thumbnail}
              alt="ID Thumbnail"
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <p className="font-semibold text-gray-700">UID: {item.uid}</p>
            <p className="text-sm text-gray-500">Level: {item.level}</p>
            <p className="text-lg font-bold text-yellow-600">₹{item.price}</p>
            <Link to={`/id/${item.id}`}>
              <button className="w-full mt-2 bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600">
                Buy Now
              </button>
            </Link>
          </motion.div>
        ))}
      </main>
    </div>
  );
};

export default Marketplace;

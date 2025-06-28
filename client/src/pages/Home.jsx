import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="px-4 sm:px-10 py-10 space-y-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-6"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-purple-700">
          🔥 Sell & Buy Free Fire IDs with Confidence!
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto text-lg">
          Get verified IDs, earn AK Coins, and grow your Free Fire journey like a pro.
        </p>
        <Link to="/search">
          <Button className="text-lg px-8 py-4">Browse IDs</Button>
        </Link>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex justify-center"
      >
        <input
          type="text"
          placeholder="Search by ID level or price..."
          className="w-full max-w-xl border rounded-xl px-6 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </motion.div>

      {/* Featured Free Fire IDs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {[1, 2, 3].map((id) => (
          <div
            key={id}
            className="bg-white rounded-2xl p-4 shadow hover:scale-105 transition"
          >
            <img
              src={`https://via.placeholder.com/300x180?text=Free+Fire+ID+${id}`}
              alt="ID Preview"
              className="rounded-xl mb-3"
            />
            <h2 className="font-semibold text-lg">Level 65 ID</h2>
            <p className="text-sm text-gray-500 mb-2">Includes rare skins</p>
            <Button className="w-full">Buy Now ₹150</Button>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Home;

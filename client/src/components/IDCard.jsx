import React from 'react';

const IDCard = ({ id, level, price, images, description }) => (
  <div className="bg-gray-800 rounded-xl shadow-lg p-4 flex flex-col items-center transition-transform hover:scale-105 duration-200">
    <img src={images[0]} alt="Profile" className="w-24 h-24 rounded-lg mb-2 object-cover border-2 border-yellow-400" />
    <div className="text-yellow-400 font-bold text-lg">Level {level}</div>
    <div className="text-white font-semibold text-xl mb-1">ID: {id}</div>
    <div className="text-yellow-300 font-bold text-lg mb-2">₹{price}</div>
    <div className="text-gray-300 text-sm mb-2">{description}</div>
    <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold hover:bg-yellow-500 transition">Buy Now</button>
  </div>
);

export default IDCard;

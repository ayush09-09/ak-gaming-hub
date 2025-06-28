import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [minLevel, setMinLevel] = useState('');
  const [maxLevel, setMaxLevel] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // Dummy Free Fire ID data
  const allIDs = [
    { id: 1, level: 70, price: 150, title: 'Level 70 Pro ID' },
    { id: 2, level: 62, price: 120, title: 'Level 62 Ranked ID' },
    { id: 3, level: 50, price: 90, title: 'Level 50 Starter ID' },
  ];

  // Filtering logic
  const filtered = allIDs.filter((id) => {
    const matchSearch = id.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchLevel = (!minLevel || id.level >= minLevel) && (!maxLevel || id.level <= maxLevel);
    const matchPrice = (!minPrice || id.price >= minPrice) && (!maxPrice || id.price <= maxPrice);
    return matchSearch && matchLevel && matchPrice;
  });

  return (
    <div className="px-4 sm:px-10 py-10">
      <h1 className="text-2xl font-bold mb-6">🔍 Browse Free Fire IDs</h1>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 mb-8">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded-xl px-4 py-2 col-span-2"
        />
        <input
          type="number"
          placeholder="Min Level"
          value={minLevel}
          onChange={(e) => setMinLevel(e.target.value)}
          className="border rounded-xl px-4 py-2"
        />
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="border rounded-xl px-4 py-2"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border rounded-xl px-4 py-2"
        />
      </div>

      {/* Result Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((id) => (
          <motion.div
            key={id.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg"
          >
            <img
              src={`https://via.placeholder.com/300x180?text=ID+${id.id}`}
              alt="Free Fire ID"
              className="rounded-xl mb-3"
            />
            <h3 className="font-semibold text-lg">{id.title}</h3>
            <p className="text-sm text-gray-500">Level: {id.level}</p>
            <p className="text-sm text-gray-600">Price: ₹{id.price}</p>
            <Button className="w-full mt-2">Buy Now</Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Search;

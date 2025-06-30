import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const dummyIDs = [
    {
      id: "FF78654321",
      level: 65,
      price: 120,
      thumbnail: "/images/profile.jpg",
      description: "Elite Pass & Rare Skins",
    },
    {
      id: "FF33445566",
      level: 70,
      price: 150,
      thumbnail: "/images/lobby.jpg",
      description: "Max Level & Premium Items",
    },
  ];

  const filtered = dummyIDs.filter(
    (item) =>
      item.id.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Free Fire ID..."
        className="w-full border p-3 rounded mb-6"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((id) => (
          <div
            key={id.id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition"
          >
            <img
              src={id.thumbnail}
              alt="Thumbnail"
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-2 font-bold text-xl">{id.id}</h3>
            <p className="text-gray-600">Level: {id.level}</p>
            <p className="text-green-700 font-semibold">₹{id.price}</p>
            <p className="text-sm">{id.description}</p>
            <button
              onClick={() => navigate(`/id/${id.id}`)}
              className="mt-3 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;

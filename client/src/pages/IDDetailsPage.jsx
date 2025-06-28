import React from "react";

const IDDetailsPage = () => {
  const idInfo = {
    id: "FF123456789",
    level: 72,
    price: 150,
    description: "High-level Free Fire ID with premium skins and rare vault items.",
    images: [
      "/images/profile.jpg",
      "/images/lobby.jpg",
      "/images/weapon.jpg",
      "/images/vault.jpg",
      "/images/character.jpg",
    ],
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">🎮 Free Fire ID: {idInfo.id}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="grid grid-cols-2 gap-4">
          {idInfo.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`FF Image ${i + 1}`}
              className="w-full h-auto rounded shadow"
            />
          ))}
        </div>

        <div className="space-y-4">
          <p><strong>Level:</strong> {idInfo.level}</p>
          <p><strong>Price:</strong> ₹{idInfo.price}</p>
          <p><strong>Description:</strong></p>
          <p className="text-gray-700">{idInfo.description}</p>

          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded shadow">
            🛒 Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default IDDetailsPage;

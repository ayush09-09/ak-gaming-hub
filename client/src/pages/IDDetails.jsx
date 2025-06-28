import React from "react";
import { useParams } from "react-router-dom";

const IDDetails = () => {
  const { id } = useParams();

  // Example hardcoded data – you’ll replace this with real fetch
  const sampleID = {
    level: 70,
    price: 150,
    description: "High-level Free Fire ID with legendary weapons.",
    images: [
      "/images/sample1.jpg",
      "/images/sample2.jpg",
      "/images/sample3.jpg",
      "/images/sample4.jpg",
      "/images/sample5.jpg",
    ],
  };

  const akCoins = sampleID.price * 10;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image Gallery */}
        <div className="space-y-4">
          {sampleID.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`FF ID ${i}`}
              className="rounded-lg w-full object-cover shadow"
            />
          ))}
        </div>

        {/* Info Section */}
        <div>
          <h2 className="text-2xl font-bold mb-2">🎮 Free Fire ID</h2>
          <p className="mb-2">
            🧱 Level: <strong>{sampleID.level}</strong>
          </p>
          <p className="mb-4 text-gray-700">{sampleID.description}</p>

          <div className="text-xl font-semibold mb-2">
            ₹ {sampleID.price}{" "}
            <span className="text-sm text-gray-500">
              {" "}(~{akCoins} AK Coins)
            </span>
          </div>

          <button
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg shadow"
            onClick={() => alert("Login system coming soon")}
          >
            🛒 Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default IDDetails;

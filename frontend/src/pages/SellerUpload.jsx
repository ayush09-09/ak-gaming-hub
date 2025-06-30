import React, { useState } from "react";
import ImageUploader from "../components/ImageUploader";

const SellerUpload = () => {
  const [form, setForm] = useState({
    level: "",
    price: "",
    akCoins: 0,
    images: {},
  });
  const [coinInfo, setCoinInfo] = useState({ coins: 0, eligible: false });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "level") {
      const levelNum = parseInt(e.target.value);
      setCoinInfo({
        coins: levelNum >= 60 ? levelNum * 10 : 0,
        eligible: levelNum >= 60,
      });
    }
  };

  const handleImageChange = (e) => {
    setForm({
      ...form,
      images: { ...form.images, [e.target.name]: e.target.files[0] },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(form.images).length < 5) {
      alert("Please upload all 5 required images.");
      return;
    }

    const levelNum = parseInt(form.level);
    const priceNum = parseInt(form.price);

    const eligible = levelNum >= 60;
    const coinsEarned = eligible ? 5 : 0;
    const finalPrice = priceNum + 50;

    // TODO: Send this data to backend
    console.log({
      ...form,
      akCoins: coinsEarned,
      buyerPrice: finalPrice,
    });

    alert(
      `Listed! Buyer price will be ₹${finalPrice}, you earned ${coinsEarned} AK Coins!`
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white p-6 rounded shadow-md mt-6"
    >
      <h2 className="text-2xl font-bold mb-4">📤 Upload Free Fire ID</h2>

      <input
        type="number"
        name="level"
        placeholder="Free Fire Level (min 60 for AK coins)"
        onChange={handleChange}
        required
        className="w-full border p-2 mb-2 rounded"
      />
      <div className="mb-2 text-sm">
        {coinInfo.eligible ? (
          <span className="text-green-600 font-semibold">
            Eligible for AK Coins: {coinInfo.coins} (10 coins = ₹1)
          </span>
        ) : (
          <span className="text-red-600">
            Only Level 60+ IDs eligible for coins
          </span>
        )}
      </div>

      <input
        type="number"
        name="price"
        placeholder="Selling Price (₹)"
        onChange={handleChange}
        required
        className="w-full border p-2 mb-4 rounded"
      />

      <ImageUploader
        label="🧍 Profile Image"
        name="profile"
        onChange={handleImageChange}
      />
      <ImageUploader
        label="🎮 Lobby Image"
        name="lobby"
        onChange={handleImageChange}
      />
      <ImageUploader
        label="🔫 Weapon Image"
        name="weapon"
        onChange={handleImageChange}
      />
      <ImageUploader
        label="🎒 Vault Image"
        name="vault"
        onChange={handleImageChange}
      />
      <ImageUploader
        label="🧙 Character Image"
        name="character"
        onChange={handleImageChange}
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700"
      >
        List ID
      </button>
    </form>
  );
};

export default SellerUpload;

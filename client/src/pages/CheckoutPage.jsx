import React, { useState } from "react";
import { useParams } from "react-router-dom";

const CheckoutPage = () => {
  const { id } = useParams(); // ID from URL
  const [form, setForm] = useState({
    name: "",
    email: "",
    freefireUid: "",
  });

  // TEMP data until real fetch
  const dummyID = {
    id: id || "FF78654321",
    level: 65,
    price: 150,
    thumbnail: "/images/profile.jpg",
    description: "Maxed account with legendary skins",
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Purchase confirmed!\nDetails: " + JSON.stringify(form));
    // TODO: Send to backend or payment gateway
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Confirm Purchase</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Free Fire ID Preview */}
        <div className="bg-white p-4 rounded shadow">
          <img
            src={dummyID.thumbnail}
            alt="FF ID"
            className="w-full h-48 object-cover rounded"
          />
          <h2 className="mt-2 text-xl font-semibold">{dummyID.id}</h2>
          <p>Level: {dummyID.level}</p>
          <p className="text-green-700 font-semibold">₹{dummyID.price}</p>
          <p className="text-sm text-gray-600">{dummyID.description}</p>
        </div>

        {/* Buyer Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 rounded shadow space-y-4"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            name="freefireUid"
            required
            placeholder="Your Free Fire UID"
            value={form.freefireUid}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
          >
            Confirm & Pay ₹{dummyID.price}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;

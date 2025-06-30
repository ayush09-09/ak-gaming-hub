import React, { useState } from "react";

const SellerForm = () => {
  const [form, setForm] = useState({
    ffid: "",
    level: "",
    price: "",
    description: "",
    images: {},
  });

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setForm({
      ...form,
      images: { ...form.images, [e.target.name]: e.target.files[0] },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const levelNum = parseInt(form.level);
    if (levelNum < 60) {
      alert("Only Free Fire IDs above level 60 are allowed.");
      return;
    }

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (key === "images") {
        Object.entries(value).forEach(([imgKey, file]) => {
          formData.append(imgKey, file);
        });
      } else {
        formData.append(key, value);
      }
    });

    // Submit to backend route (coming later)
    console.log("🟢 Form submitted", form);
    alert("Form submitted (placeholder)");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">➕ Upload Free Fire ID</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="ffid"
          placeholder="Free Fire ID"
          required
          onChange={handleInputChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          name="level"
          placeholder="Level (Must be ≥ 60)"
          required
          onChange={handleInputChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          name="price"
          placeholder="Selling Price (₹)"
          required
          onChange={handleInputChange}
          className="w-full border p-2 rounded"
        />

        <textarea
          name="description"
          placeholder="Write about this ID..."
          required
          onChange={handleInputChange}
          className="w-full border p-2 rounded"
        />

        <div className="grid grid-cols-2 gap-4">
          <label className="block">
            Profile Image
            <input
              type="file"
              name="profile"
              required
              onChange={handleImageChange}
            />
          </label>
          <label className="block">
            Lobby Image
            <input
              type="file"
              name="lobby"
              required
              onChange={handleImageChange}
            />
          </label>
          <label className="block">
            Weapon Image
            <input
              type="file"
              name="weapon"
              required
              onChange={handleImageChange}
            />
          </label>
          <label className="block">
            Vault Image
            <input
              type="file"
              name="vault"
              required
              onChange={handleImageChange}
            />
          </label>
          <label className="block col-span-2">
            Character Image
            <input
              type="file"
              name="character"
              required
              onChange={handleImageChange}
            />
          </label>
        </div>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg"
        >
          ✅ Submit ID
        </button>
      </form>
    </div>
  );
};

export default SellerForm;

import React, { useState } from "react";
import { motion } from "framer-motion";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    uid: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Payment processing... (integration coming soon)");
    // Later: integrate PayPal, Razorpay, or Stripe
  };

  return (
    <motion.div
      className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6 mt-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-xl font-bold mb-4">Checkout</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Full Name</span>
          <input
            type="text"
            name="name"
            required
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">Email Address</span>
          <input
            type="email"
            name="email"
            required
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">Your Free Fire UID</span>
          <input
            type="text"
            name="uid"
            required
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded"
          />
        </label>

        <div className="flex justify-between items-center pt-4">
          <p className="text-lg font-semibold">Total: ₹150</p>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Proceed to Pay
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Checkout;
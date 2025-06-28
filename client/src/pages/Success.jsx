import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const Success = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen text-center p-6"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <CheckCircle className="text-green-500 w-20 h-20 mb-4" />
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Payment Successful!
      </h1>
      <p className="text-gray-600 mb-4">
        🎉 Your Free Fire ID purchase is confirmed.
      </p>

      <div className="bg-gray-100 rounded-xl p-6 w-full max-w-md text-left">
        <p><strong>Order ID:</strong> #AKG123456</p>
        <p><strong>Your Name:</strong> Ayush</p>
        <p><strong>Your UID:</strong> 123456789</p>
        <p className="mt-3 text-green-600 font-semibold">💡 ID details will be sent to your email.</p>
      </div>

      <a
        href="/"
        className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg"
      >
        Back to Home
      </a>
    </motion.div>
  );
};

export default Success;

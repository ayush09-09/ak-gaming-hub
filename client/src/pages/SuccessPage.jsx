import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const SuccessPage = () => {
  const location = useLocation();
  const orderData = location.state || {
    name: "Guest",
    id: "FF123456789",
    price: 150,
    freefireUid: "000000000",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="bg-white p-8 rounded shadow max-w-md w-full text-center">
        <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-green-600">Purchase Successful!</h2>
        <p className="mt-2 text-gray-700">Thank you, {orderData.name}.</p>
        <p className="text-gray-600">
          You bought ID <strong>{orderData.id}</strong> for ₹{orderData.price}.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Free Fire UID: {orderData.freefireUid}
        </p>

        <Link
          to="/"
          className="inline-block mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;

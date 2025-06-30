import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, ShoppingCart, Heart, User } from "lucide-react";
import { motion } from "framer-motion";
import AuthForm from "../components/AuthForm";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const [showAuth, setShowAuth] = useState(false);
  const [authType, setAuthType] = useState("login");
  const [user, setUser] = useState(() => {
    try {
      return localStorage.getItem("token") ? true : false;
    } catch {
      return false;
    }
  });
  const navigate = useNavigate();

  const handleAuth = (formData) => {
    // Placeholder: You can call your login/register API here
    setUser(true);
    setShowAuth(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <header className="flex items-center justify-between p-4 bg-white shadow-md sticky top-0 z-50">
        <h1 className="text-xl font-bold">AK Gaming Hub</h1>
        <div className="flex items-center gap-2">
          <Input placeholder="Search Free Fire IDs..." className="w-72" />
          <Button variant="ghost"><Search size={20} /></Button>
        </div>
        <div className="flex gap-4 items-center">
          {!user && (
            <Button
              className="bg-indigo-600 text-white font-semibold"
              onClick={() => { setAuthType("login"); setShowAuth(true); }}
            >
              Login
            </Button>
          )}
          <User className="cursor-pointer" />
          <Heart className="cursor-pointer" />
          <ShoppingCart className="cursor-pointer" />
        </div>
      </header>

      {/* Auth Modal */}
      {showAuth && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowAuth(false)}
            >
              ×
            </button>
            <div className="mb-4 flex justify-center gap-4">
              <Button
                className={authType === "login" ? "bg-indigo-600 text-white" : "bg-gray-200"}
                onClick={() => setAuthType("login")}
              >
                Login
              </Button>
              <Button
                className={authType === "register" ? "bg-indigo-600 text-white" : "bg-gray-200"}
                onClick={() => setAuthType("register")}
              >
                Register
              </Button>
            </div>
            <AuthForm type={authType} onSubmit={handleAuth} />
          </div>
        </div>
      )}

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-12 text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Buy & Sell Free Fire IDs Instantly</h2>
        <p className="mb-6 text-lg">Secure, Verified, and Coin Rewarded Listings</p>
        <div className="flex justify-center gap-4">
          <Button className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold">Buy Now</Button>
          <Button
            className="bg-white text-purple-600 hover:bg-gray-100 font-semibold"
            onClick={() => navigate("/seller/upload")}
          >
            Sell ID
          </Button>
        </div>
      </motion.section>

      {/* Live Listings Preview */}
      <section className="p-6">
        <h3 className="text-2xl font-semibold mb-4">Live Listings</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="hover:shadow-xl transition-all">
              <CardContent className="p-4">
                <div className="h-40 bg-gray-300 rounded-lg mb-4" />
                <h4 className="text-lg font-bold">FF ID #{1000 + i}</h4>
                <p>Level: {60 + i}</p>
                <p className="text-green-600">₹{299 + i * 50}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t p-4 text-center text-sm text-gray-600">
        &copy; 2025 AK Gaming Hub. All rights reserved.
      </footer>
    </div>
  );
}

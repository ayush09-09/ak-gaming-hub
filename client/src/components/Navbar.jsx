import React from 'react';

const Navbar = () => (
  <nav className="w-full flex items-center justify-between px-6 py-4 bg-gradient-to-r from-gray-900 to-yellow-900 shadow-lg">
    <div className="flex items-center gap-3">
      <img src="/assets/ak-logo.png" alt="AK Logo" className="h-10 w-10 rounded-full" />
      <span className="text-xl font-bold text-yellow-400">AK FreeFire</span>
    </div>
    <div className="flex gap-6">
      <a href="/" className="text-white hover:text-yellow-400 transition">Home</a>
      <a href="/search" className="text-white hover:text-yellow-400 transition">Search</a>
      <a href="/seller/dashboard" className="text-white hover:text-yellow-400 transition">Dashboard</a>
      <a href="/admin" className="text-white hover:text-yellow-400 transition">Admin</a>
      <a href="/login" className="text-white hover:text-yellow-400 transition">Login</a>
    </div>
  </nav>
);

export default Navbar;

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8 px-4 mt-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Logo & Description */}
        <div>
          <h1 className="text-2xl font-bold text-purple-600">AK Gaming Hub</h1>
          <p className="mt-2 text-sm">
            Buy & sell Free Fire IDs with ease — secure, fast and rewarding.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/" className="hover:text-purple-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/search" className="hover:text-purple-600">
                Browse IDs
              </Link>
            </li>
            <li>
              <Link to="/sell" className="hover:text-purple-600">
                Sell ID
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-purple-600">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="flex items-center text-sm gap-2">
            <Mail size={16} /> ayushnew0909@gmail.com
          </p>
          <p className="flex items-center text-sm gap-2 mt-1">
            <Phone size={16} /> +91 9297505890 (WhatsApp)
          </p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-6">
        © {new Date().getFullYear()} AK Gaming Hub. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;

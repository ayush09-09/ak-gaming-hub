import React from "react";
import { Link } from "react-router-dom";

const SellerSidebar = () => {
  const links = [
    { name: "Dashboard", path: "/seller/dashboard" },
    { name: "Upload New ID", path: "/seller/upload" },
    { name: "My Listings", path: "/seller/listings" },
    { name: "Withdraw Coins", path: "/seller/withdraw" },
  ];

  return (
    <aside className="w-full md:w-60 p-4 bg-white shadow-md h-screen sticky top-0">
      <h2 className="text-xl font-bold mb-4">Seller Panel</h2>
      <ul className="space-y-3">
        {links.map((link, idx) => (
          <li key={idx}>
            <Link
              to={link.path}
              className="block p-2 rounded hover:bg-gray-100 font-medium"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SellerSidebar;

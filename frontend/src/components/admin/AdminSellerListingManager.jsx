import React, { useState } from 'react';

const AdminSellerListingManager = ({ listings, onApprove, onReject }) => {
  const [filter, setFilter] = useState('All');

  const filteredListings = filter === 'All'
    ? listings
    : listings.filter(l => l.status === filter);

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl p-4 shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">Seller Listings</h2>
        <select
          className="bg-zinc-100 dark:bg-zinc-800 text-sm p-2 rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      <table className="w-full text-sm text-left text-zinc-600 dark:text-zinc-300">
        <thead className="text-xs uppercase bg-zinc-100 dark:bg-zinc-800">
          <tr>
            <th className="px-4 py-2">Seller</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Level</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredListings.map((item, i) => (
            <tr key={i} className="border-b dark:border-zinc-700">
              <td className="px-4 py-2">{item.seller}</td>
              <td className="px-4 py-2">{item.title}</td>
              <td className="px-4 py-2">{item.level}</td>
              <td className="px-4 py-2">₹{item.price}</td>
              <td className="px-4 py-2">{item.date}</td>
              <td className="px-4 py-2">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  item.status === 'Pending'
                    ? 'bg-yellow-100 text-yellow-700'
                    : item.status === 'Approved'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}>
                  {item.status}
                </span>
              </td>
              <td className="px-4 py-2 flex gap-2">
                <button
                  onClick={() => onApprove(item.id)}
                  className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 text-xs rounded"
                >
                  Approve
                </button>
                <button
                  onClick={() => onReject(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 text-xs rounded"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminSellerListingManager;

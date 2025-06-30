import React from 'react';

const AdminOrderTable = ({ orders }) => {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl p-4 shadow-md w-full overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-zinc-100">Recent Orders</h2>
      <table className="w-full text-sm text-left text-zinc-600 dark:text-zinc-300">
        <thead className="text-xs uppercase bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
          <tr>
            <th className="px-4 py-3">Buyer</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">ID Title</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <tr key={i} className="border-b dark:border-zinc-700">
              <td className="px-4 py-3">{order.buyerName}</td>
              <td className="px-4 py-3">{order.email}</td>
              <td className="px-4 py-3">{order.title}</td>
              <td className="px-4 py-3">₹{order.price}</td>
              <td className="px-4 py-3">{order.date}</td>
              <td className="px-4 py-3">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  order.status === 'Completed'
                    ? 'bg-green-100 text-green-600'
                    : order.status === 'Pending'
                    ? 'bg-yellow-100 text-yellow-600'
                    : 'bg-red-100 text-red-600'
                }`}>
                  {order.status}
                </span>
              </td>
              <td className="px-4 py-3">
                <button className="text-blue-600 hover:underline">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminOrderTable;

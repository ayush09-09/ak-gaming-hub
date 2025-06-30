import React from "react";

const CoinHistoryTable = ({ logs }) => (
  <table className="w-full table-auto border text-sm mt-4">
    <thead className="bg-gray-200">
      <tr>
        <th>Date</th>
        <th>User</th>
        <th>Type</th>
        <th>Amount</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {logs.map((log, idx) => (
        <tr key={idx} className="border-t">
          <td>{log.date}</td>
          <td>{log.user}</td>
          <td>{log.type}</td>
          <td>{log.amount}</td>
          <td>{log.description}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default CoinHistoryTable;

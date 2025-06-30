import React, { useState } from 'react';

const AdminAdjustCoins = ({ onAdjust }) => {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('add');

  const handleSubmit = () => {
    const parsedAmount = parseInt(amount);
    if (!email || isNaN(parsedAmount)) return alert('Fill all fields properly');

    onAdjust({ email, amount: parsedAmount, type });
    setEmail('');
    setAmount('');
  };

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl p-5 mt-6 shadow">
      <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-4">Adjust AK Coins</h3>

      <div className="flex flex-col md:flex-row gap-3">
        <input
          type="email"
          placeholder="User Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-3 py-2 text-sm border rounded dark:bg-zinc-800 focus:outline-none"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-32 px-3 py-2 text-sm border rounded dark:bg-zinc-800 focus:outline-none"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-28 px-3 py-2 text-sm border rounded dark:bg-zinc-800 focus:outline-none"
        >
          <option value="add">Add</option>
          <option value="deduct">Deduct</option>
        </select>
        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AdminAdjustCoins;

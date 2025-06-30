import { useEffect, useState } from 'react';
import axios from 'axios';

export default function DashboardStats() {
  const [stats, setStats] = useState({ akCoins: 0, totalEarnings: 0 });

  useEffect(() => {
    axios.get('/api/seller/stats').then(res => setStats(res.data));
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white p-4 shadow rounded">
        <h3 className="text-sm text-gray-600">AK Coins</h3>
        <p className="text-xl font-bold text-green-600">{stats.akCoins}</p>
      </div>
      <div className="bg-white p-4 shadow rounded">
        <h3 className="text-sm text-gray-600">Total Earnings</h3>
        <p className="text-xl font-bold text-blue-600">₹{stats.totalEarnings}</p>
      </div>
    </div>
  );
}

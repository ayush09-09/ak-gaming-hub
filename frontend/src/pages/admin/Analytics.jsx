import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminAnalytics from '../../components/admin/AdminAnalytics';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AnalyticsPage() {
  const [stats, setStats] = useState({ totalUsers: 0, totalSales: 0, totalCoins: 0, pendingListings: 0 });

  useEffect(() => {
    axios.get('/api/admin/analytics').then(res => setStats(res.data));
  }, []);

  return (
    <div className="flex">
      <AdminSidebar />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Admin Analytics</h1>
        <AdminAnalytics stats={stats} />
      </main>
    </div>
  );
}

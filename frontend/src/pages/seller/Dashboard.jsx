import Sidebar from '../../components/seller/Sidebar';
import DashboardStats from '../../components/seller/DashboardStats';
import ListingCard from '../../components/seller/ListingCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function SellerDashboard() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios.get('/api/seller/listings').then(res => setListings(res.data));
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">My Dashboard</h1>
        <DashboardStats />
        <h2 className="mt-6 text-lg font-semibold">My Uploaded IDs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
          {listings.map(id => (
            <ListingCard key={id._id} listing={id} />
          ))}
        </div>
      </main>
    </div>
  );
}

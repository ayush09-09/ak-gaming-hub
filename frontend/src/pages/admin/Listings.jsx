import AdminSidebar from '../../components/admin/AdminSidebar';
import ListingApprovalCard from '../../components/admin/ListingApprovalCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ListingsPage() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios.get('/api/admin/listings').then(res => setListings(res.data));
  }, []);

  const handleAction = (id, action) => {
    axios.post(`/api/admin/listings/${action}/${id}`).then(() => {
      setListings(prev => prev.filter(item => item._id !== id));
    });
  };

  return (
    <div className="flex">
      <AdminSidebar />
      <main className="flex-1 p-6">
        <h2 className="text-xl font-semibold mb-4">Manage Listings</h2>
        <div className="grid grid-cols-1 gap-4">
          {listings.map(listing => (
            <ListingApprovalCard key={listing._id} listing={listing} onAction={handleAction} />
          ))}
        </div>
      </main>
    </div>
  );
}

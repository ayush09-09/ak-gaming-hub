import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BellIcon, EyeIcon, Trash2Icon, CheckCircle2Icon } from "lucide-react";

const AdminPanel = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState("");
  const [error, setError] = useState("");

  // Fetch all listings on mount
  useEffect(() => {
    const fetchListings = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/admin/listings", { withCredentials: true });
        setListings(res.data.data || []);
      } catch (err) {
        setError("Failed to fetch listings");
      } finally {
        setLoading(false);
      }
    };
    fetchListings();
  }, []);

  // Approve listing
  const handleApprove = async (id) => {
    setActionLoading(id + "-approve");
    try {
      await axios.post(`/api/admin/approve/${id}`, {}, { withCredentials: true });
      setListings((prev) => prev.map((l) => (l._id === id ? { ...l, approved: true } : l)));
    } catch (err) {
      setError("Failed to approve listing");
    } finally {
      setActionLoading("");
    }
  };

  // Reject/Delete listing
  const handleReject = async (id) => {
    setActionLoading(id + "-reject");
    try {
      await axios.post(`/api/admin/reject/${id}`, {}, { withCredentials: true });
      setListings((prev) => prev.filter((l) => l._id !== id));
    } catch (err) {
      setError("Failed to delete listing");
    } finally {
      setActionLoading("");
    }
  };

  // Metrics
  const totalListings = listings.length;
  const coinsRewarded = listings.reduce((sum, l) => sum + (l.seller?.coins || 0), 0);
  const newToday = listings.filter((l) => {
    const today = new Date();
    const created = new Date(l.createdAt);
    return (
      created.getDate() === today.getDate() &&
      created.getMonth() === today.getMonth() &&
      created.getFullYear() === today.getFullYear()
    );
  }).length;
  const notifications = listings.filter((l) => !l.approved).length;

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-4 shadow-md hidden md:block">
        <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
        <ul className="space-y-2">
          <li className="text-blue-600 font-semibold">Dashboard</li>
          <li>Manage Listings</li>
          <li>Coins Summary</li>
          <li>Notifications</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Overview</h1>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold">Total Listings</h2>
              <p className="text-2xl font-bold">{totalListings}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold">Coins Rewarded</h2>
              <p className="text-2xl font-bold">{coinsRewarded} AKC</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold">New Listings Today</h2>
              <p className="text-2xl font-bold">{newToday}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold">Admin Notifications</h2>
              <p className="text-2xl font-bold">{notifications}</p>
            </CardContent>
          </Card>
        </div>

        {/* Error */}
        {error && <div className="mb-4 text-red-600">{error}</div>}

        {/* Recent Listings Table */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Recent Listings</h2>
            <Button variant="outline" className="gap-2">
              <BellIcon className="w-4 h-4" /> Notify
            </Button>
          </div>

          {loading ? (
            <div className="py-8 text-center text-gray-500">Loading...</div>
          ) : (
            <table className="min-w-full text-sm">
              <thead className="border-b">
                <tr>
                  <th className="text-left py-2">Seller</th>
                  <th className="text-left py-2">Level</th>
                  <th className="text-left py-2">Price</th>
                  <th className="text-left py-2">Status</th>
                  <th className="text-left py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {listings.map((listing) => (
                  <tr className="border-t" key={listing._id}>
                    <td className="py-2">{listing.seller?.email || "-"}</td>
                    <td className="py-2">{listing.level}</td>
                    <td className="py-2">₹{listing.price}</td>
                    <td className="py-2">
                      {listing.approved ? (
                        <span className="text-green-600 flex items-center gap-1"><CheckCircle2Icon className="w-4 h-4" /> Approved</span>
                      ) : (
                        <span className="text-yellow-600">Pending</span>
                      )}
                    </td>
                    <td className="py-2 flex gap-2">
                      <Button size="sm" variant="secondary">
                        <EyeIcon className="w-4 h-4 mr-1" /> View
                      </Button>
                      {!listing.approved && (
                        <Button
                          size="sm"
                          variant="success"
                          disabled={actionLoading === listing._id + "-approve"}
                          onClick={() => handleApprove(listing._id)}
                        >
                          {actionLoading === listing._id + "-approve" ? "Approving..." : <><CheckCircle2Icon className="w-4 h-4 mr-1" /> Approve</>}
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="destructive"
                        disabled={actionLoading === listing._id + "-reject"}
                        onClick={() => handleReject(listing._id)}
                      >
                        {actionLoading === listing._id + "-reject" ? "Deleting..." : <><Trash2Icon className="w-4 h-4 mr-1" /> Delete</>}
                      </Button>
                    </td>
                  </tr>
                ))}
                {listings.length === 0 && !loading && (
                  <tr>
                    <td colSpan="5" className="py-8 text-center text-gray-500">No listings found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;

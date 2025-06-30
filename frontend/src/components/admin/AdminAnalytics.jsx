import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const AdminAnalytics = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-bold">Total Users</h2>
          <p className="text-2xl mt-2">{stats.totalUsers}</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-bold">Total Sales</h2>
          <p className="text-2xl mt-2">₹{stats.totalSales}</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-bold">Total AK Coins</h2>
          <p className="text-2xl mt-2">{stats.totalCoins}</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-bold">Pending Listings</h2>
          <p className="text-2xl mt-2">{stats.pendingListings}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminAnalytics;

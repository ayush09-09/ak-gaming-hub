import { Coins, Upload, DollarSign } from 'lucide-react';

export default function DashboardOverview({ uploaded, coins, earnings }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <Card icon={<Upload />} label="Total IDs Uploaded" value={uploaded} />
      <Card icon={<Coins />} label="Your AK Coins" value={coins} />
      <Card icon={<DollarSign />} label="Total Earnings" value={`₹${earnings}`} />
    </div>
  );
}

function Card({ icon, label, value }) {
  return (
    <div className="bg-white shadow rounded-xl p-4 flex items-center gap-4">
      <div className="bg-blue-100 p-2 rounded-full text-blue-600">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-lg font-semibold">{value}</p>
      </div>
    </div>
  );
}

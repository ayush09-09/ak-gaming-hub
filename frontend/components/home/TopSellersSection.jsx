import { useEffect, useState } from "react";
import axios from "axios";

export default function TopSellersSection() {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    axios.get("/api/stats/top-sellers").then(res => setSellers(res.data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Top Sellers of the Week</h2>
      <div className="flex gap-4 overflow-x-auto">
        {sellers.map((s, idx) => (
          <div key={idx} className="min-w-[180px] bg-white p-4 shadow rounded-xl">
            <img src={s.avatar} alt="avatar" className="w-12 h-12 rounded-full mb-2" />
            <p className="font-semibold">{s.sellerName}</p>
            <p className="text-sm text-gray-500">{s.totalSales} sales</p>
          </div>
        ))}
      </div>
    </div>
  );
}

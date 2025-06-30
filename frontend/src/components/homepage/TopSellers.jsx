const TopSellers = ({ sellers }) => (
  <div className="p-4 bg-slate-100 rounded-xl shadow">
    <h2 className="text-xl font-bold mb-2">🔥 Top Sellers This Week</h2>
    <ul>
      {sellers.map((s, i) => (
        <li key={i} className="flex justify-between border-b py-1">
          <span>{s.sellerId.username}</span>
          <span>{s.totalSales} sales</span>
        </li>
      ))}
    </ul>
  </div>
);

export default TopSellers;

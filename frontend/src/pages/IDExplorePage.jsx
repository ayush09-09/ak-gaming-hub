import { useState } from "react";
import FilterSidebar from "@/components/filters/FilterSidebar";
import IDPopularityBadge from "@/components/ids/IDPopularityBadge";

const dummyIDs = [
  { id: 1, level: 72, price: 399, coins: 50, region: "India", verified: true, views: 120, saves: 15 },
  { id: 2, level: 60, price: 199, coins: 20, region: "Brazil", verified: false, views: 80, saves: 5 },
  { id: 3, level: 85, price: 599, coins: 90, region: "India", verified: true, views: 200, saves: 30 },
];

const IDExplorePage = () => {
  const [filters, setFilters] = useState({
    level: 50,
    price: 1000,
    coins: 10,
    region: "",
    verified: false,
  });

  const filtered = dummyIDs.filter((item) => {
    return (
      item.level >= filters.level &&
      item.price <= filters.price &&
      item.coins >= filters.coins &&
      (filters.region ? item.region === filters.region : true) &&
      (!filters.verified || item.verified)
    );
  });

  return (
    <div className="flex">
      <FilterSidebar filters={filters} setFilters={setFilters} />

      <div className="flex-1 p-4">
        <h2 className="text-xl font-bold mb-4 text-zinc-800 dark:text-white">Explore IDs</h2>

        {filtered.length === 0 ? (
          <p className="text-zinc-500">No IDs match your filters.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((id) => (
              <div
                key={id.id}
                className="p-4 border rounded-lg shadow bg-white dark:bg-zinc-800"
              >
                <h3 className="text-lg font-medium">Level {id.level}</h3>
                <p>Price: ₹{id.price}</p>
                <p>AK Coins: {id.coins}</p>
                <p>Region: {id.region}</p>
                {id.verified && (
                  <span className="text-green-500 text-sm font-medium">✅ Verified</span>
                )}
                <IDPopularityBadge views={id.views} saves={id.saves} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default IDExplorePage;

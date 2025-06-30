import demoSellers from "../constants/demoData";
import VerifiedBadge from "./VerifiedBadge";

const TopSellersSection = () => {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">🔥 Top Sellers</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {demoSellers.map((seller, i) => (
          <div key={i} className="bg-white p-4 rounded shadow text-center">
            <img src={seller.avatar} className="w-16 h-16 rounded-full mx-auto mb-2" />
            <h4 className="font-semibold">{seller.name}</h4>
            <VerifiedBadge />
            <p className="text-sm text-gray-500 mt-1">{seller.sales} Sales</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopSellersSection;

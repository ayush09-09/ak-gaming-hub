import FeaturedCarousel from "../components/FeaturedCarousel";
import TopSellersSection from "../components/TopSellersSection";
import CategoryTags from "../components/CategoryTags";
import PromotionalBanner from "../components/PromotionalBanner";
import FiltersPanel from "@/components/filters/FiltersPanel";
import FreeFireCard from "@/components/cards/FreeFireCard";
import TopSellers from "@/components/homepage/TopSellers";
import FeaturedIDs from "@/components/homepage/FeaturedIDs";
import { useState } from "react";

// Dummy data for demonstration
const ALL_IDS = [
  { _id: "id1", name: "Level 72 Pro", level: 72, price: 499, coins: 200, region: "India", image: "/images/id1.jpg", views: 120, saves: 15, nickname: "ProFF123" },
  { _id: "id2", name: "Elite Pass Account", level: 60, price: 299, coins: 100, region: "Bangladesh", image: "/images/id2.jpg", views: 80, saves: 5, nickname: "SniperKing" },
  { _id: "id3", name: "Rare Skins Bundle", level: 85, price: 999, coins: 500, region: "Indonesia", image: "/images/id3.jpg", views: 200, saves: 30, nickname: "RareHero" },
];
const DUMMY_TOP_SELLERS = [
  { sellerId: { username: "ProSeller" }, totalSales: 12 },
  { sellerId: { username: "SniperKing" }, totalSales: 9 },
  { sellerId: { username: "RareHero" }, totalSales: 7 },
];

const Home = () => {
  const [filters, setFilters] = useState({
    level: 50,
    price: 10000,
    coins: 500,
    region: "",
  });

  const filteredIDs = ALL_IDS.filter(id =>
    id.level >= filters.level &&
    id.price <= filters.price &&
    id.coins <= filters.coins &&
    (filters.region ? id.region === filters.region : true)
  );

  return (
    <section className="px-4 py-10 max-w-6xl mx-auto">
      <FeaturedCarousel />
      <CategoryTags />
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <TopSellers sellers={DUMMY_TOP_SELLERS} />
        <FeaturedIDs ids={ALL_IDS.sort((a, b) => b.views + b.saves - (a.views + a.saves)).slice(0, 3)} />
      </div>
      <FiltersPanel filters={filters} setFilters={setFilters} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {filteredIDs.map(id => (
          <FreeFireCard key={id._id} id={id} />
        ))}
      </div>
      <TopSellersSection />
      <PromotionalBanner />
    </section>
  );
};

export default Home;

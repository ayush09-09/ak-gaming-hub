import React from "react";

const sellers = [
  {
    username: "ProGamer",
    avatar: "/src/assets/Images/logo.png",
    sales: 1200
  },
  {
    username: "EliteKing",
    avatar: "/src/assets/Images/banner.png",
    sales: 950
  },
  {
    username: "SharpShooter",
    avatar: "/src/assets/Images/banar.jpeg",
    sales: 800
  }
];

const TopSellersSection = () => (
  <section className="py-8">
    <h2 className="text-2xl font-bold mb-4 text-center">Top Sellers This Week</h2>
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
      {sellers.map((seller, idx) => (
        <div
          key={seller.username}
          className="flex flex-col items-center bg-white rounded-xl shadow-md p-4 w-48"
        >
          <img
            src={seller.avatar}
            alt={seller.username}
            className="w-16 h-16 rounded-full border mb-2"
          />
          <span className="font-semibold text-lg mb-1">{seller.username}</span>
          <span className="text-primary font-bold">{seller.sales} sales</span>
        </div>
      ))}
    </div>
  </section>
);

export default TopSellersSection;

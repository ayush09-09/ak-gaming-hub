import React from "react";
import { motion } from "framer-motion";

const featured = [
  {
    id: "FF1234",
    username: "ProGamer",
    price: 799,
    level: 75,
    status: "Verified",
    image: "/src/assets/Images/banar.jpeg"
  },
  {
    id: "FF5678",
    username: "EliteKing",
    price: 599,
    level: 68,
    status: "Premium",
    image: "/src/assets/Images/banner.png"
  },
  {
    id: "FF9012",
    username: "SharpShooter",
    price: 999,
    level: 80,
    status: "Verified",
    image: "/src/assets/Images/logo.png"
  }
];

const FeaturedCarousel = () => {
  // For demo: auto-rotate every 3s
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % featured.length), 3000);
    return () => clearInterval(timer);
  }, []);

  const current = featured[index];

  return (
    <section className="w-full max-w-3xl mx-auto mb-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Featured Listings</h2>
      <div className="relative flex items-center justify-center">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-6 p-6 w-full"
        >
          <img src={current.image} alt={current.username} className="w-32 h-32 object-cover rounded-xl border" />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold text-lg">{current.username}</span>
              {current.status === "Verified" && (
                <span className="ml-1 px-2 py-0.5 bg-blue-100 text-blue-600 rounded-full text-xs">Verified</span>
              )}
              {current.status === "Premium" && (
                <span className="ml-1 px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full text-xs">Premium</span>
              )}
            </div>
            <div className="text-sm text-muted-foreground mb-1">ID: {current.id}</div>
            <div className="text-sm mb-2">Level: <span className="font-semibold">{current.level}</span></div>
            <div className="text-xl font-bold text-primary">₹{current.price}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCarousel;

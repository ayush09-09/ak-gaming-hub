import { useState } from "react";
import { motion } from "framer-motion";
import featuredIDs from "../constants/demoData";

const FeaturedCarousel = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % featuredIDs.length);
  const prev = () => setIndex((index - 1 + featuredIDs.length) % featuredIDs.length);

  return (
    <div className="relative w-full overflow-hidden bg-gray-100 p-4 rounded-xl shadow">
      <motion.img
        key={index}
        src={featuredIDs[index].image}
        alt="Featured ID"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-64 object-cover rounded-lg"
      />
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button onClick={prev} className="bg-black/50 text-white px-2 py-1 rounded">←</button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button onClick={next} className="bg-black/50 text-white px-2 py-1 rounded">→</button>
      </div>
    </div>
  );
};

export default FeaturedCarousel;

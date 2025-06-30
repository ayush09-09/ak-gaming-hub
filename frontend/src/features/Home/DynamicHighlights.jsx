import React, { useEffect, useState } from "react";
import { Flame, TrendingUp, Star } from "lucide-react";
import { motion } from "framer-motion";

const highlightSections = [
  {
    icon: <Flame className="text-red-500 w-6 h-6" />,
    title: "Hot Deals",
    description: "Best value Free Fire IDs, updated daily."
  },
  {
    icon: <TrendingUp className="text-green-600 w-6 h-6" />,
    title: "Trending IDs",
    description: "Most viewed and wishlisted IDs right now."
  },
  {
    icon: <Star className="text-yellow-500 w-6 h-6" />,
    title: "Editor's Picks",
    description: "Handpicked premium accounts by our team."
  }
];

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

const DynamicHighlights = () => {
  const [sections, setSections] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setSections(shuffle([...highlightSections]));
    const timeout = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="py-10 px-4 md:px-12">
      <h2 className="text-2xl font-bold mb-6 text-center text-primary">Today's Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2 }}
          >
            <div className="rounded-2xl shadow-xl bg-white p-6 flex gap-4 items-start">
              {item.icon}
              <div>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-tight">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DynamicHighlights;

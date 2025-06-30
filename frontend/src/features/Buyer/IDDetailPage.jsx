// NOTE: This file is now superseded by src/pages/IDDetailsPage.jsx which includes popularity tracking and auto-incrementing views. Consider removing or refactoring this file.

import { motion } from 'framer-motion';
import { BadgeCheck, Coins, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import IDPopularityBadge from '@/components/ids/IDPopularityBadge';

export default function IDDetailPage() {
  // Dummy popularity data for now
  const views = 120;
  const saves = 15;
  return (
    <motion.div
      className="p-6 max-w-5xl mx-auto bg-white rounded-2xl shadow-md space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <img
            src="/images/sample-id-1.jpg"
            alt="Free Fire ID"
            className="rounded-xl w-full object-cover"
          />
          <div className="grid grid-cols-3 gap-2 mt-2">
            {["2", "3", "4", "5"].map((n) => (
              <img
                key={n}
                src={`/images/sample-id-${n}.jpg`}
                alt="ID Preview"
                className="rounded-lg"
              />
            ))}
          </div>
          <IDPopularityBadge views={views} saves={saves} />
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold">Level 72 • Elite Pass Included</h2>
          <div className="flex items-center gap-2 text-green-600">
            <BadgeCheck size={18} />
            <span>Verified Seller</span>
          </div>

          <div className="text-gray-700">• 5 Character Skins • 3 Rare Guns • Vault Open</div>

          <div className="text-3xl font-bold text-blue-600">₹349</div>
          <div className="text-sm text-gray-500">Equivalent: <Coins className="inline w-4 h-4" /> 3490 AK Coins</div>

          <Button className="w-full mt-4 flex gap-2">
            <ShoppingCart size={18} /> Buy Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

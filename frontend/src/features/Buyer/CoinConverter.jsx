import React, { useState } from "react";
import { Coins } from "lucide-react";

const COIN_RATE = 10; // 1 INR = 10 AK Coins

const CoinConverter = () => {
  const [inr, setInr] = useState(0);
  const [coins, setCoins] = useState(0);

  const handleInrChange = (e) => {
    const value = Number(e.target.value);
    setInr(value);
    setCoins(value * COIN_RATE);
  };

  const handleCoinsChange = (e) => {
    const value = Number(e.target.value);
    setCoins(value);
    setInr(value / COIN_RATE);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-md mx-auto my-8">
      <h3 className="text-xl font-bold mb-4">AK Coin Converter</h3>
      <div className="flex flex-col gap-4">
        <label className="flex items-center gap-2">
          <span>INR</span>
          <input
            type="number"
            min="0"
            value={inr}
            onChange={handleInrChange}
            className="border rounded px-2 py-1 w-32"
          />
        </label>
        <label className="flex items-center gap-2">
          <span>AK Coins <Coins className="inline w-4 h-4 text-yellow-500" /></span>
          <input
            type="number"
            min="0"
            value={coins}
            onChange={handleCoinsChange}
            className="border rounded px-2 py-1 w-32"
          />
        </label>
      </div>
      <div className="text-sm text-gray-500 mt-2">1 INR = 10 AK Coins</div>
    </div>
  );
};

export default CoinConverter;

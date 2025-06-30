import { useState } from "react";
import FilterSlider from "./FilterSlider";

const FiltersPanel = ({ filters, setFilters }) => {
  return (
    <div className="bg-white shadow rounded-xl p-4 w-full mb-6">
      <h3 className="text-lg font-bold mb-4">🎯 Advanced Filters</h3>

      <FilterSlider
        label="Minimum Level"
        min={1}
        max={100}
        value={filters.level}
        onChange={(val) => setFilters(prev => ({ ...prev, level: val }))}
      />

      <FilterSlider
        label="Max Price (₹)"
        min={50}
        max={20000}
        value={filters.price}
        onChange={(val) => setFilters(prev => ({ ...prev, price: val }))}
        unit="₹"
      />

      <FilterSlider
        label="Max AK Coins"
        min={0}
        max={1000}
        value={filters.coins}
        onChange={(val) => setFilters(prev => ({ ...prev, coins: val }))}
      />

      {/* Region Filter */}
      <div className="mt-4">
        <label className="block text-sm font-semibold mb-1">Region</label>
        <select
          className="w-full border px-3 py-2 rounded"
          value={filters.region}
          onChange={(e) => setFilters(prev => ({ ...prev, region: e.target.value }))}
        >
          <option value="">All</option>
          <option value="India">India</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Indonesia">Indonesia</option>
        </select>
      </div>
    </div>
  );
};

export default FiltersPanel;

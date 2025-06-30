import React from "react";

const categories = [
  "Max Level",
  "Budget",
  "Rare Skins",
  "Popular",
  "New",
  "Top Rated"
];

const CategoryTags = ({ selected, onSelect }) => (
  <div className="flex gap-2 overflow-x-auto py-2">
    {categories.map((cat) => (
      <button
        key={cat}
        className={`px-4 py-1 rounded-full border text-sm font-medium transition-colors whitespace-nowrap ${selected === cat ? "bg-primary text-white" : "bg-muted text-primary"}`}
        onClick={() => onSelect?.(cat)}
      >
        {cat}
      </button>
    ))}
  </div>
);

export default CategoryTags;

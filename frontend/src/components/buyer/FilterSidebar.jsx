import { useState } from "react";

export default function FilterSidebar({ onFilterChange }) {
  const [filters, setFilters] = useState({
    level: "",
    priceMin: "",
    priceMax: "",
    region: "",
    akCoinsMin: "",
    akCoinsMax: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters); // live update
  };

  return (
    <div className="w-full space-y-4 p-4 border rounded-lg shadow bg-white">
      <h3 className="text-lg font-semibold">Filter Free Fire IDs</h3>
      <input name="level" type="number" placeholder="Minimum Level" className="input" onChange={handleChange} />
      <input name="priceMin" type="number" placeholder="Min Price ₹" className="input" onChange={handleChange} />
      <input name="priceMax" type="number" placeholder="Max Price ₹" className="input" onChange={handleChange} />
      <input name="akCoinsMin" type="number" placeholder="Min Coins" className="input" onChange={handleChange} />
      <input name="akCoinsMax" type="number" placeholder="Max Coins" className="input" onChange={handleChange} />
      <select name="region" onChange={handleChange} className="input">
        <option value="">All Regions</option>
        <option value="India">India</option>
        <option value="Bangladesh">Bangladesh</option>
        <option value="Nepal">Nepal</option>
      </select>
    </div>
  );
}

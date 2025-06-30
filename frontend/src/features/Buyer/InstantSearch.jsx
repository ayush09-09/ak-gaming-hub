import React, { useState, useRef } from "react";
import { Search } from "lucide-react";

const sampleIDs = [
  "FF1234 ProGamer",
  "FF5678 EliteKing",
  "FF9012 SharpShooter",
  "FF4321 SniperQueen",
  "FF8765 FireLord"
];

function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

const InstantSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const debouncedSearch = useRef(
    debounce((q) => {
      if (!q) return setResults([]);
      setResults(sampleIDs.filter((id) => id.toLowerCase().includes(q.toLowerCase())));
    }, 250)
  ).current;

  const handleChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    debouncedSearch(val);
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search Free Fire ID or keyword..."
          className="w-full border rounded-lg px-4 py-2 pr-10 focus:outline-none"
        />
        <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
      </div>
      {results.length > 0 && (
        <ul className="bg-white border rounded-lg mt-2 shadow-md divide-y">
          {results.map((r) => (
            <li key={r} className="px-4 py-2 hover:bg-gray-50 cursor-pointer">{r}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InstantSearch;

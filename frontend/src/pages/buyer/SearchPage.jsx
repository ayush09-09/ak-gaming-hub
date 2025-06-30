import { useState, useEffect } from "react";
import axios from "axios";
import FilterSidebar from "@/components/buyer/FilterSidebar";

export default function SearchPage() {
  const [filters, setFilters] = useState({});
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get("/api/buyer/ids", { params: filters }).then(res => {
      setResults(res.data);
    });
  }, [filters]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6">
      <div className="col-span-1">
        <FilterSidebar onFilterChange={setFilters} />
      </div>
      <div className="col-span-3 space-y-4">
        {results.map((id) => (
          <div key={id._id} className="p-4 border rounded shadow">
            <h4 className="font-semibold">ID #{id._id.slice(-4)}</h4>
            <p>Level: {id.level}, Price: ₹{id.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

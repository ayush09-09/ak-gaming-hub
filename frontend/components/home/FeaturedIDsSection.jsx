import { useEffect, useState } from "react";
import axios from "axios";

export default function FeaturedIDsSection() {
  const [ids, setIds] = useState([]);

  useEffect(() => {
    axios.get("/api/stats/featured-ids").then(res => setIds(res.data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Featured Free Fire IDs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {ids.map((id) => (
          <div key={id._id} className="bg-white rounded-xl shadow p-4">
            <img src={id.images[0]} alt="profile" className="rounded-md mb-2" />
            <p className="font-semibold">Level: {id.level}</p>
            <p>Price: ₹{id.price}</p>
            <button className="mt-2 bg-blue-600 text-white text-sm px-4 py-1 rounded">View</button>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import axios from "axios";

export default function MyRatings() {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    axios.get("/api/ratings/mine").then(res => setRatings(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">My Ratings</h2>
      {ratings.map((r, i) => (
        <div key={i} className="p-2 border-b">
          <p>⭐ {r.rating} - {r.review}</p>
          <p className="text-xs text-gray-500">By: {r.buyerId?.name}</p>
        </div>
      ))}
    </div>
  );
}

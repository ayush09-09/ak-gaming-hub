import { useEffect, useState } from "react";
import axios from "axios";

export default function SellerRatingCard({ sellerId }) {
  const [rating, setRating] = useState({ avg: 0, count: 0 });

  useEffect(() => {
    axios.get(`/api/ratings/avg/${sellerId}`).then(res => {
      setRating(res.data);
    });
  }, [sellerId]);

  return (
    <div className="text-sm text-yellow-600">
      ⭐ {rating.avg} ({rating.count} ratings)
    </div>
  );
}

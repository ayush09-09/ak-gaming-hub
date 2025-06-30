import { useEffect, useState } from "react";
import SellerRating from "@/components/seller/SellerRating";
import { calculateSellerRating } from "@/utils/ratingUtils";

const SellerProfile = ({ seller = { _id: "seller001", username: "ProSeller", bio: "Top Free Fire ID seller with 20+ sales." } }) => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    calculateSellerRating(seller._id).then(setRating);
  }, [seller._id]);

  return (
    <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl shadow max-w-xl mx-auto">
      <h2 className="text-xl font-bold text-zinc-800 dark:text-white">{seller.username}</h2>
      <SellerRating rating={rating} />
      <p className="text-sm text-zinc-500 mt-2">{seller.bio}</p>
    </div>
  );
};

export default SellerProfile;

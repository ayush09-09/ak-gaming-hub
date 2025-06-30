import WishlistButton from "../wishlist/WishlistButton";
import { Eye, Heart } from "lucide-react";
import { usePopularityTracker } from "@/hooks/usePopularityTracker";
import StarRating from "@/components/common/StarRating";

const FreeFireCard = ({ id }) => {
  const { handleSave } = usePopularityTracker(id._id);
  return (
    <div className="bg-white rounded-xl shadow p-4 relative group hover:shadow-lg transition-all">
      <img src={id.image} alt={id.name} className="rounded w-full h-40 object-cover" />
      {/* Wishlist Button (Top Right) */}
      <div className="absolute top-2 right-2">
        <WishlistButton idId={id._id} />
      </div>
      <h3 className="mt-2 text-lg font-semibold">{id.name}</h3>
      <p className="text-sm text-zinc-500">Level: {id.level}</p>
      <p className="text-sm text-zinc-600 font-medium">₹{id.price}</p>
      {/* Seller Rating */}
      <div className="mt-1 text-sm text-zinc-500 flex items-center gap-2">
        Seller: {id.sellerName || "Unknown"}
        <StarRating rating={id.sellerRating || 0} />
      </div>
      {/* Popularity stats */}
      <div className="flex justify-between text-sm mt-2 text-zinc-500">
        <div className="flex items-center gap-1">
          <Eye className="w-4 h-4" />
          {id.views} views
        </div>
        <button onClick={handleSave} className="flex items-center gap-1 hover:text-rose-600">
          <Heart className="w-4 h-4" />
          {id.saves} saves
        </button>
      </div>
    </div>
  );
};

export default FreeFireCard;

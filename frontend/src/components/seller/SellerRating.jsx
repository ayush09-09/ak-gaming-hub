import { Star } from "lucide-react";

const SellerRating = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const totalStars = 5;

  return (
    <div className="flex gap-1 text-yellow-400">
      {[...Array(totalStars)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < filledStars ? "fill-yellow-400" : "text-zinc-300 dark:text-zinc-700"}`}
        />
      ))}
      <span className="text-sm text-zinc-500 ml-2">({rating.toFixed(1)})</span>
    </div>
  );
};

export default SellerRating;

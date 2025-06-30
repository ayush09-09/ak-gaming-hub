import { Star } from "lucide-react";

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1 text-yellow-500">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-yellow-500" : "stroke-2"}`} />
      ))}
      <span className="text-xs text-zinc-500 ml-1">({rating})</span>
    </div>
  );
};

export default StarRating;

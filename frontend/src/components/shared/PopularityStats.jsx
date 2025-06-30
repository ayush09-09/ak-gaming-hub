import { Eye, Heart } from "lucide-react";

const PopularityStats = ({ views, saves }) => {
  return (
    <div className="flex items-center gap-4 text-sm text-zinc-500 mt-2">
      <span className="flex items-center gap-1">
        <Eye className="w-4 h-4" /> {views} Views
      </span>
      <span className="flex items-center gap-1">
        <Heart className="w-4 h-4" /> {saves} Saves
      </span>
    </div>
  );
};

export default PopularityStats;

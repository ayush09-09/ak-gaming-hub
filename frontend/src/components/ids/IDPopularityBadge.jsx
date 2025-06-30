import { Eye, Heart } from "lucide-react";

const IDPopularityBadge = ({ views, saves }) => (
  <div className="flex items-center gap-3 text-xs text-zinc-500 mt-2">
    <span className="flex items-center gap-1">
      <Eye size={16} /> {views} views
    </span>
    <span className="flex items-center gap-1">
      <Heart size={16} /> {saves} saves
    </span>
  </div>
);

export default IDPopularityBadge;

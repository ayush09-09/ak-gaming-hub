import { useEffect } from "react";
import { incrementViewCount, saveToWishlist } from "@/lib/api";

export const usePopularityTracker = (id) => {
  useEffect(() => {
    if (id) {
      incrementViewCount(id);
    }
  }, [id]);

  const handleSave = async () => {
    await saveToWishlist(id);
  };

  return { handleSave };
};

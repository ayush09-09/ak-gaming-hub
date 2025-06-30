import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import axios from "axios";

const WishlistButton = ({ idId }) => {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    axios.get(`/api/wishlist/check/${idId}`).then((res) => {
      setIsSaved(res.data.saved);
    });
  }, [idId]);

  const toggleWishlist = async () => {
    const res = await axios.post(`/api/wishlist/toggle`, { idId });
    setIsSaved(res.data.saved);
  };

  return (
    <button onClick={toggleWishlist} className="text-red-500 hover:scale-110 transition">
      <Heart fill={isSaved ? "currentColor" : "none"} className="w-5 h-5" />
    </button>
  );
};

export default WishlistButton;

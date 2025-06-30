import { useEffect, useState } from "react";
import axios from "axios";

const WishlistPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("/api/wishlist").then((res) => {
      setItems(res.data);
    });
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Wishlist ❤️</h2>
      {items.length === 0 ? (
        <p>No items saved yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <div key={item._id} className="bg-white rounded-xl shadow p-4">
              <img src={item.image} alt="" className="rounded" />
              <h3 className="font-semibold mt-2">{item.name}</h3>
              <p className="text-sm text-zinc-500">Level: {item.level}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;

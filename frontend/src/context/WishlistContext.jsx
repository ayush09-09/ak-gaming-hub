import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    axios.get('/api/wishlist').then(res => setWishlist(res.data));
  }, []);

  const toggleWishlist = async (id) => {
    const res = await axios.post(`/api/wishlist/toggle/${id}`);
    setWishlist(res.data.ids);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

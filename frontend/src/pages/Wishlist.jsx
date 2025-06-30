import { useWishlist } from '../context/WishlistContext';

const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Your Wishlist</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {wishlist.map(id => (
          <div key={id._id} className="border p-2 rounded">
            <img src={id.thumbnail} alt={id.title} />
            <h2 className="font-semibold">{id.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;

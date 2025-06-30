// Dummy WishlistItem.jsx for displaying wishlist items (can be expanded as needed)
const WishlistItem = ({ id }) => (
  <div className="border p-2 rounded">
    <img src={id.thumbnail} alt={id.title} />
    <h2 className="font-semibold">{id.title}</h2>
  </div>
);

export default WishlistItem;

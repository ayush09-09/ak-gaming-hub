export default function ListingCard({ listing }) {
  return (
    <div className="border p-4 rounded shadow-sm">
      <img src={listing.thumbnail} alt={listing.title} className="rounded mb-2" />
      <h2 className="text-lg font-semibold">{listing.title}</h2>
      <p className="text-sm text-gray-500">Level: {listing.level}</p>
      <p className="text-sm text-gray-700">Price: ₹{listing.price}</p>
    </div>
  );
}

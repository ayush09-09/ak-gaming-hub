export default function ListingApprovalCard({ listing, onAction }) {
  return (
    <div className="border rounded p-4 bg-white shadow">
      <h2 className="font-semibold">{listing.title}</h2>
      <p>Level: {listing.level} | Price: ₹{listing.price}</p>
      <div className="flex gap-2 mt-2">
        <button onClick={() => onAction(listing._id, 'approve')} className="bg-green-500 text-white px-3 py-1 rounded">Approve</button>
        <button onClick={() => onAction(listing._id, 'reject')} className="bg-red-500 text-white px-3 py-1 rounded">Reject</button>
      </div>
    </div>
  );
}

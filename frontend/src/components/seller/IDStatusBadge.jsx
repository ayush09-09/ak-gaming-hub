export default function IDStatusBadge({ status }) {
  const colors = {
    Pending: "bg-yellow-200 text-yellow-800",
    Approved: "bg-green-200 text-green-800",
    Sold: "bg-red-200 text-red-800",
  };

  return (
    <span className={`px-3 py-1 text-sm rounded-full ${colors[status]}`}>
      {status}
    </span>
  );
}

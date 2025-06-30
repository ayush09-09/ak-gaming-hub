export default function UploadSummary({ uploads }) {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full bg-white rounded-xl shadow">
        <thead>
          <tr className="bg-gray-100 text-left text-sm text-gray-600">
            <th className="px-4 py-3">ID Name</th>
            <th className="px-4 py-3">Level</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Price</th>
          </tr>
        </thead>
        <tbody>
          {uploads.map((id, index) => (
            <tr key={index} className="border-t text-sm">
              <td className="px-4 py-2">{id.name}</td>
              <td className="px-4 py-2">{id.level}</td>
              <td className="px-4 py-2">{id.status}</td>
              <td className="px-4 py-2">₹{id.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

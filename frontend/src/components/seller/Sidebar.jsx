import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="w-full md:w-60 bg-gray-100 h-full p-4">
      <nav className="flex flex-col gap-4">
        <Link to="/seller/dashboard" className="text-blue-600 font-medium">Dashboard</Link>
        <Link to="/seller/upload" className="text-blue-600">Upload New ID</Link>
        <Link to="/seller/listings" className="text-blue-600">My Listings</Link>
      </nav>
    </aside>
  );
}

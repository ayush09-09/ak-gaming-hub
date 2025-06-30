import { Link } from 'react-router-dom';

export default function AdminSidebar() {
  return (
    <aside className="w-full md:w-60 bg-slate-100 h-full p-4">
      <nav className="flex flex-col gap-4">
        <Link to="/admin/dashboard" className="font-semibold text-blue-700">Dashboard</Link>
        <Link to="/admin/listings" className="text-blue-600">Manage Listings</Link>
        <Link to="/admin/users" className="text-blue-600">Manage Users</Link>
      </nav>
    </aside>
  );
}

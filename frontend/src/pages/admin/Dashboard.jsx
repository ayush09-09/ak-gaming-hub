import AdminSidebar from '../../components/admin/AdminSidebar';

export default function AdminDashboard() {
  return (
    <div className="flex">
      <AdminSidebar />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Welcome, Admin</h1>
        <p className="mt-2">Use the sidebar to manage listings and users.</p>
      </main>
    </div>
  );
}

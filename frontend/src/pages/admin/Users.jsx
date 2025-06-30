import AdminSidebar from '../../components/admin/AdminSidebar';
import UserListTable from '../../components/admin/UserListTable';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/admin/users').then(res => setUsers(res.data));
  }, []);

  return (
    <div className="flex">
      <AdminSidebar />
      <main className="flex-1 p-6">
        <h2 className="text-xl font-semibold mb-4">All Users</h2>
        <UserListTable users={users} />
      </main>
    </div>
  );
}

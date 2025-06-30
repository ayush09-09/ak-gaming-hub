export default function UserListTable({ users }) {
  return (
    <table className="w-full table-auto border text-sm mt-4">
      <thead className="bg-gray-200">
        <tr>
          <th>Email</th>
          <th>Username</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {users.map(u => (
          <tr key={u._id} className="border-t">
            <td>{u.email}</td>
            <td>{u.username}</td>
            <td>{u.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
